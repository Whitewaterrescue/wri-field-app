/* WRI Field App — service worker (GENERATED: deploy scripts stamp this
 * template to the repo root as sw.js on every export — do not edit sw.js in
 * the Pages repo, edit sw.template.js beside the deploy scripts).
 *
 * Goal: the app SHELL opens offline (staff reach the check-in page with no
 * signal). The embedded wri-checkin iframe is a DIFFERENT scope with its own
 * SW — this worker never sees its requests. Cross-origin (AGOL, GAS JSON)
 * is untouched: token-safe by construction, and panels keep their existing
 * needs-connection empty states offline.
 *
 * Strategy (validated 2026-08-09):
 *  - Tiny precache (boot spine: index, panels, config.json, init.js) with
 *    cache:'reload' requests — precaching the new build's config.json
 *    doubles as a Pages-propagation probe: if the edge hasn't served the
 *    new build yet, install FAILS and the old SW + caches stay live.
 *  - cdn/<N>/** runtime cache-first (immutable per build): whatever a user
 *    loaded online is available offline; never-visited widgets degrade
 *    statically (no reload loops — the ?page= guard is pure-local).
 *  - Everything else same-scope: network-first (8s race) + cache fallback.
 *  - No skipWaiting: new versions activate when all tabs close.
 */
var CDN = '44';
var STAMP = '20260818-133409';
var SHELL_CACHE = 'wri-fa-shell-' + CDN + '-' + STAMP;
var CDN_CACHE = 'wri-fa-cdn-' + CDN;

var SCOPE_PATH = new URL(self.registration.scope).pathname; // '/wri-field-app/'

var PRECACHE = [
  './',
  './index.html',
  './panels/tasks/index.html',
  './panels/forms/index.html',
  './panels/hasp/index.html',
  './panels/trailers/index.html',
  './panels/gateway/index.html',
  './cdn/' + CDN + '/config.json',
  './cdn/' + CDN + '/jimu-core/init.js'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(SHELL_CACHE).then(function (c) {
      return c.addAll(PRECACHE.map(function (u) { return new Request(u, { cache: 'reload' }); }));
    })
  );
  // No skipWaiting() — updates apply on next open.
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(names
        .filter(function (n) { return n.indexOf('wri-fa-') === 0 && n !== SHELL_CACHE && n !== CDN_CACHE; })
        .map(function (n) { return caches.delete(n); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function cacheFirst(request) {
  return caches.open(CDN_CACHE).then(function (c) {
    return c.match(request, { ignoreSearch: true }).then(function (hit) {
      if (hit) return hit;
      return fetch(request).then(function (resp) {
        if (resp && resp.ok) c.put(request, resp.clone());
        return resp;
      });
    });
  });
}

function networkFirst(request) {
  var timeout = new Promise(function (resolve, reject) {
    setTimeout(function () { reject(new Error('sw-timeout')); }, 8000);
  });
  return Promise.race([fetch(request), timeout])
    .then(function (resp) {
      if (resp && resp.ok) {
        var clone = resp.clone();
        caches.open(SHELL_CACHE).then(function (c) { c.put(request, clone); }).catch(function () {});
      }
      return resp;
    })
    .catch(function () {
      return caches.match(request, { ignoreSearch: true }).then(function (hit) {
        if (hit) return hit;
        var url = new URL(request.url);
        if (url.pathname.slice(-1) === '/') {
          return caches.match(url.pathname + 'index.html').then(function (dir) {
            if (dir) return dir;
            if (request.mode === 'navigate') return caches.match(SCOPE_PATH + 'index.html');
            return Response.error();
          });
        }
        if (request.mode === 'navigate') return caches.match(SCOPE_PATH + 'index.html');
        return Response.error();
      });
    });
}

self.addEventListener('fetch', function (event) {
  var request = event.request;
  if (request.method !== 'GET') return;
  var url = new URL(request.url);
  if (url.origin !== self.location.origin) return;          // AGOL / GAS / fonts: untouched
  if (url.pathname.indexOf(SCOPE_PATH) !== 0) return;       // other Pages apps: not ours
  if (url.pathname.indexOf(SCOPE_PATH + 'cdn/') === 0) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(networkFirst(request));
  }
});

/* ── Background warm of the FULL cdn build ──
 * The page posts {type:'warm-cdn'} after registration settles. The SW pulls
 * cdn-manifest.json (written at deploy) and fetches every not-yet-cached
 * build file in small batches, so the ENTIRE app UI opens offline after one
 * online visit — not just the pages the user happened to open. Failures are
 * ignored (partial warm still helps; the next open retries the diff).
 * Skipped when the browser reports Save-Data. ~25 MB once per build. */
var warmRunning = false;
function warmCdn() {
  if (warmRunning) return Promise.resolve();
  if (self.navigator && navigator.connection && navigator.connection.saveData) return Promise.resolve();
  warmRunning = true;
  return fetch(SCOPE_PATH + 'cdn-manifest.json', { cache: 'no-cache' })
    .then(function (r) { return r.json(); })
    .then(function (manifest) {
      if (!manifest || manifest.cdn !== CDN || !manifest.files) return null;
      return caches.open(CDN_CACHE).then(function (c) {
        return c.keys().then(function (keys) {
          var have = {};
          keys.forEach(function (k) { have[new URL(k.url).pathname] = true; });
          var missing = manifest.files.filter(function (f) { return !have[SCOPE_PATH + f]; });
          function batch(i) {
            if (i >= missing.length) return null;
            var slice = missing.slice(i, i + 6);
            return Promise.all(slice.map(function (f) {
              return fetch(SCOPE_PATH + f).then(function (resp) {
                if (resp && resp.ok) return c.put(SCOPE_PATH + f, resp);
              }).catch(function () {});
            })).then(function () { return batch(i + 6); });
          }
          return batch(0);
        });
      });
    })
    .catch(function () {})
    .then(function () { warmRunning = false; });
}

self.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'warm-cdn') {
    if (event.waitUntil) event.waitUntil(warmCdn());
    else warmCdn();
  }
});
