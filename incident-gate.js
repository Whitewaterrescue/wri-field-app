/*
 * WRI incident gate (Phase 3, 2026-10-25). One script, served from the Field App
 * (https://whitewaterrescue.github.io/wri-field-app/incident-gate.js) and loaded by
 * the Field App shell, wri-checkin and wri-respond -- all the same origin, so they
 * share ONE choice per phone: localStorage 'wri_incident_choice'
 *   { id, key, name, client, at, expires, how }.
 *
 * When the app opens:
 *   - a link / QR with ?incident=<id or project name> sets the choice -- no question;
 *   - a choice made today for an incident that is still open stands -- no question;
 *   - only one incident open: it is the choice -- no question (today's behavior);
 *   - two or more open: a full-screen "Which incident are you working today?"
 *     before any page, nearest incident first (phone location) and preselected,
 *     one tap to confirm. The choice lasts until 3 am.
 * While open, if the phone is close to one open incident (< 5 mi) and far from the
 * chosen one (> 25 mi), a banner offers to switch.
 *
 * Inside a same-origin frame of a page that runs the gate (wri-checkin embedded in
 * the Field App) it never shows UI; when the top page's choice changes it reloads
 * so the embedded app picks the new incident up.
 *
 * API: window.wriIncidentChoice.get() / .set(incident, how) / .clear() / .pick()
 * Events: 'wri-incident-choice' on window; {type:'wri-incident-choice'} posted to frames.
 */
(function () {
  'use strict';
  if (window.__wriGate) return;
  window.__wriGate = true;

  var KEY = 'wri_incident_choice';
  var KEEP_KEY = 'wri_gate_keep';
  var API = 'https://script.google.com/macros/s/AKfycbx7p4-A8F6G_VedgHsw3RDJgwJK1GKVAFcvSah1JdjIdG5g7PAcvXhHRKHk_ULIhdL0KA/exec';
  var NEAR_MI = 5, FAR_MI = 25;
  var COLORS = { bnsf: '#F47A20', up: '#FFC72C', mtwy: '#2E7DD7', wri: '#EC2329' };
  var LABELS = { bnsf: 'BNSF', up: 'UP', mtwy: 'MT/WY Coop', wri: 'WRI' };

  var embedded = false;
  try { embedded = window.top !== window && !!window.top.__wriGate; } catch (e) { embedded = false; }

  function next3am() {
    var d = new Date(); d.setHours(3, 0, 0, 0);
    if (d.getTime() <= Date.now()) d.setDate(d.getDate() + 1);
    return d.getTime();
  }
  function read() {
    try {
      var c = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (c && c.id && c.expires > Date.now()) return c;
    } catch (e) {}
    return null;
  }
  function norm(v) { return String(v == null ? '' : v).trim().toLowerCase(); }
  function matches(inc, want) {
    var w = norm(want);
    return !!w && (norm(inc.incident_id) === w || norm(inc.project_key) === w || norm(inc.incident_name) === w);
  }
  function announce(c) {
    try { window.dispatchEvent(new CustomEvent('wri-incident-choice', { detail: c })); } catch (e) {}
    var frames = document.querySelectorAll('iframe');
    for (var i = 0; i < frames.length; i++) {
      try { frames[i].contentWindow.postMessage({ type: 'wri-incident-choice', choice: c }, location.origin); } catch (e) {}
    }
  }
  function save(inc, how) {
    var c = { id: String(inc.incident_id), key: inc.project_key || inc.incident_name || String(inc.incident_id),
              name: inc.incident_name || inc.project_key || '', client: norm(inc.client), at: Date.now(),
              expires: next3am(), how: how || 'picked' };
    try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) {}
    announce(c);
    return c;
  }
  function clear() { try { localStorage.removeItem(KEY); } catch (e) {} }

  var loadedId = (read() || {}).id || '';
  var openList = null;

  window.wriIncidentChoice = {
    get: read, set: save, clear: clear,
    pick: function () { if (openList && openList.length > 1) showGate(openList, null); }
  };

  // ---- embedded: follow the top page, never ask
  if (embedded) {
    window.addEventListener('message', function (e) {
      if (e.origin !== location.origin || !e.data || e.data.type !== 'wri-incident-choice') return;
      var id = e.data.choice && e.data.choice.id;
      if (id && id !== loadedId) location.reload();
    });
    return;
  }

  // ---- distances
  function miles(a, b) {
    var R = 3958.8, toR = Math.PI / 180;
    var dLat = (b.lat - a.lat) * toR, dLon = (b.lon - a.lon) * toR;
    var x = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(a.lat * toR) * Math.cos(b.lat * toR) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 2 * R * Math.asin(Math.sqrt(x));
  }
  function where(timeoutMs) {
    return new Promise(function (res) {
      if (!navigator.geolocation) return res(null);
      var done = false;
      var t = setTimeout(function () { if (!done) { done = true; res(null); } }, timeoutMs);
      navigator.geolocation.getCurrentPosition(function (p) {
        if (done) return; done = true; clearTimeout(t);
        res({ lat: p.coords.latitude, lon: p.coords.longitude });
      }, function () { if (!done) { done = true; clearTimeout(t); res(null); } },
      { enableHighAccuracy: false, maximumAge: 600000, timeout: timeoutMs });
    });
  }
  function withDistance(list, me) {
    return list.map(function (r) {
      var d = (me && r.lat != null && r.lon != null) ? miles(me, r) : null;
      return Object.assign({}, r, { dist: d });
    }).sort(function (a, b) {
      if (a.dist != null && b.dist != null) return a.dist - b.dist;
      if (a.dist != null) return -1;
      if (b.dist != null) return 1;
      return (b.is_primary ? 1 : 0) - (a.is_primary ? 1 : 0);
    });
  }
  function fmtMi(d) { return d == null ? '' : d < 1 ? 'under 1 mi' : Math.round(d) + ' mi'; }

  // ---- UI
  var CSS = '' +
    '.wg-ov{position:fixed;inset:0;z-index:2147483000;background:rgba(10,14,18,.97);color:#f1f5f9;display:flex;align-items:flex-start;justify-content:center;overflow:auto;font:15px/1.35 -apple-system,system-ui,"Segoe UI",Roboto,sans-serif;padding:calc(env(safe-area-inset-top,0px) + 28px) 16px 24px}' +
    '.wg-box{width:100%;max-width:440px}' +
    '.wg-h{font-size:22px;font-weight:800;margin:0 0 6px}' +
    '.wg-s{opacity:.75;margin:0 0 18px}' +
    '.wg-card{display:flex;gap:12px;align-items:center;width:100%;text-align:left;background:#1f2933;color:inherit;border:2px solid #3e4c59;border-radius:14px;padding:14px;margin:0 0 10px;font:inherit;cursor:pointer}' +
    '.wg-card.on{border-color:#EC2329;background:#2a1a1c}' +
    '.wg-bar{width:8px;align-self:stretch;border-radius:4px;flex:none}' +
    '.wg-nm{font-size:19px;font-weight:800}' +
    '.wg-meta{opacity:.75;font-size:13px;margin-top:2px}' +
    '.wg-tag{display:inline-block;font-size:11px;font-weight:700;padding:2px 7px;border-radius:999px;background:#3e4c59;margin-left:6px;vertical-align:2px}' +
    '.wg-tag.near{background:#166534}' +
    '.wg-go{width:100%;border:0;border-radius:14px;background:#EC2329;color:#fff;font:800 17px/1.2 inherit;padding:16px;margin-top:8px;cursor:pointer}' +
    '.wg-go:disabled{opacity:.5}' +
    '.wg-f{opacity:.65;font-size:13px;text-align:center;margin-top:14px}' +
    '.wg-ban{position:fixed;left:0;right:0;top:calc(env(safe-area-inset-top,0px) + 8px);z-index:2147482000;display:flex;justify-content:center;padding:0 10px;pointer-events:none;font:600 14px/1.3 -apple-system,system-ui,"Segoe UI",Roboto,sans-serif}' +
    '.wg-ban>div{pointer-events:auto;display:flex;gap:10px;align-items:center;background:#4a3a12;color:#f0e2c0;border:1px solid #B8791B;border-radius:12px;padding:10px 12px;box-shadow:0 6px 20px rgba(0,0,0,.5);max-width:560px}' +
    '.wg-ban button{border:0;border-radius:999px;padding:8px 12px;font:700 13px/1 inherit;cursor:pointer}' +
    '.wg-ban .y{background:#EC2329;color:#fff}.wg-ban .n{background:#5b4a1e;color:#f0e2c0}';
  function style() {
    if (document.getElementById('wg-css')) return;
    var s = document.createElement('style'); s.id = 'wg-css'; s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function whenBody(fn) { if (document.body) fn(); else document.addEventListener('DOMContentLoaded', fn); }

  function showGate(list, note) {
    whenBody(function () {
      style();
      var old = document.getElementById('wg-ov'); if (old) old.remove();
      var ov = document.createElement('div'); ov.id = 'wg-ov'; ov.className = 'wg-ov';
      ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true');
      ov.innerHTML = '<div class="wg-box"><h1 class="wg-h">Which incident are you working today?</h1>' +
        '<p class="wg-s">' + (note ? esc(note) + ' ' : '') + list.length + ' incidents are open. Pick yours — check-in, the map and your uploads all go to it.</p>' +
        '<div id="wg-cards"><div class="wg-s">Finding the nearest…</div></div>' +
        '<button class="wg-go" id="wg-go" disabled>Choose an incident</button>' +
        '<div class="wg-f">Not sure? Ask your supervisor before you check in.</div></div>';
      document.body.appendChild(ov);
      var sel = null, rows = list;
      function render() {
        var host = ov.querySelector('#wg-cards');
        host.innerHTML = rows.map(function (r, i) {
          var near = i === 0 && r.dist != null;
          var meta = [LABELS[norm(r.client)] || String(r.client || '').toUpperCase()];
          if (r.dist != null) meta.push(fmtMi(r.dist) + ' away');
          return '<button class="wg-card' + (sel && sel.incident_id === r.incident_id ? ' on' : '') + '" data-id="' + esc(r.incident_id) + '">' +
            '<span class="wg-bar" style="background:' + (COLORS[norm(r.client)] || '#94a3b8') + '"></span>' +
            '<span><span class="wg-nm">' + esc(r.project_key || r.incident_name) + '</span>' +
            (near ? '<span class="wg-tag near">Nearest to you</span>' : '') +
            (r.is_primary ? '<span class="wg-tag">primary</span>' : '') +
            '<div class="wg-meta">' + esc(meta.join(' · ')) + '</div></span></button>';
        }).join('');
        host.querySelectorAll('.wg-card').forEach(function (b) {
          b.onclick = function () { sel = rows.filter(function (r) { return r.incident_id === b.getAttribute('data-id'); })[0]; render(); };
        });
        var go = ov.querySelector('#wg-go');
        go.disabled = !sel;
        go.textContent = sel ? 'I’m on ' + (sel.project_key || sel.incident_name) : 'Choose an incident';
      }
      ov.querySelector('#wg-go').onclick = function () {
        if (!sel) return;
        save(sel, 'gate');
        loadedId = sel.incident_id;
        ov.remove();
      };
      render();
      where(6000).then(function (me) {
        rows = withDistance(list, me);
        if (!sel) sel = rows[0] && rows[0].dist != null ? rows[0] : (rows.filter(function (r) { return r.is_primary; })[0] || null);
        render();
      });
    });
  }

  function mismatchCheck() {
    if (!openList || openList.length < 2 || document.getElementById('wg-ov')) return;
    var cur = read(); if (!cur) return;
    var keep = ''; try { keep = localStorage.getItem(KEEP_KEY) || ''; } catch (e) {}
    if (keep === cur.id + '|' + new Date().toDateString()) return;
    where(8000).then(function (me) {
      if (!me) return;
      var rows = withDistance(openList, me);
      var mine = rows.filter(function (r) { return r.incident_id === cur.id; })[0];
      var near = rows[0];
      if (!mine || !near || near.incident_id === cur.id || near.dist == null || mine.dist == null) return;
      if (!(near.dist < NEAR_MI && mine.dist > FAR_MI)) return;
      whenBody(function () {
        style();
        if (document.getElementById('wg-ban')) return;
        var b = document.createElement('div'); b.id = 'wg-ban'; b.className = 'wg-ban';
        b.innerHTML = '<div><span>You’re ' + esc(fmtMi(near.dist)) + ' from <b>' + esc(near.project_key) + '</b> but set to <b>' + esc(cur.key) + '</b>.</span>' +
          '<button class="y">Switch</button><button class="n">Keep</button></div>';
        document.body.appendChild(b);
        b.querySelector('.y').onclick = function () { save(near, 'switch-near'); loadedId = near.incident_id; b.remove(); };
        b.querySelector('.n').onclick = function () {
          try { localStorage.setItem(KEEP_KEY, cur.id + '|' + new Date().toDateString()); } catch (e) {}
          b.remove();
        };
      });
    });
  }

  function fetchOpen() {
    return Promise.race([
      fetch(API + '?api=openincidents&ts=' + Date.now(), { redirect: 'follow' }).then(function (r) { return r.json(); }),
      new Promise(function (_, rej) { setTimeout(function () { rej(new Error('timeout')); }, 12000); })
    ]).then(function (j) {
      if (!j || !j.ok) throw new Error('bad response');
      return (j.data && j.data.incidents) || [];
    });
  }

  var urlPin = '';
  try { var m = /[?&]incident=([^&#]+)/.exec(location.search); if (m) urlPin = decodeURIComponent(m[1].replace(/\+/g, ' ')).trim(); } catch (e) {}

  fetchOpen().then(function (list) {
    openList = list;
    var note = null;
    if (urlPin) {
      var hit = list.filter(function (r) { return matches(r, urlPin); })[0];
      if (hit) { save(hit, 'link'); loadedId = hit.incident_id; return; }
      note = 'The incident in your link (' + urlPin + ') is closed.';
    }
    var cur = read();
    if (cur && list.some(function (r) { return String(r.incident_id) === cur.id; })) {
      setTimeout(mismatchCheck, 4000);
      setInterval(function () { if (document.visibilityState === 'visible') mismatchCheck(); }, 900000);
      return;
    }
    if (cur) clear();                                   // its incident closed
    if (!list.length) return;
    if (list.length === 1) { save(list[0], 'only'); return; }
    showGate(list, note);
  }, function () {
    // offline / gateway down: a link still sets the choice; otherwise keep whatever we had
    if (urlPin && !read()) save({ incident_id: urlPin, project_key: urlPin, incident_name: urlPin }, 'link-offline');
  });
})();
