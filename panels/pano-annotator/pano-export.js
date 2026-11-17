/*!
 * WRI 360 Annotator -- export a sphere as a full 360 photo WITH its labels and drawings (Tyler 2026-11-17).
 *
 * The incident worker keeps no original: a sphere lives only as Pannellum cube tiles (pano_tiles.py,
 * py360convert e2c, 4096 px faces). So the export rebuilds the equirectangular picture from the tiles
 * (the exact inverse of e2c's cube layout), draws every shape and label on it the way the viewer does
 * (pano-annot.js styleOf / samples), tags the JPEG as a 360 photo (XMP GPano, so Facebook, Google
 * Photos, Insta360 / DJI apps and any 360 viewer open it as a sphere), and hands it to the user. Several
 * spheres come as one ZIP.
 *
 * Size: 8192 x 4096 from the 2048 px tile level (the same detail per degree the tiles hold there). A
 * phone caps a canvas near 16.7 million pixels, so phones get 5760 x 2880. Nothing is uploaded.
 */
(function (global) {
  'use strict';
  var D = Math.PI / 180;
  var FACES = ['f', 'r', 'b', 'l', 'u', 'd'];

  /** Output size: desktop 8192x4096, a phone (coarse pointer or iOS) 5760x2880. */
  function sizeFor(phone) { return phone ? { w: 5760, h: 2880 } : { w: 8192, h: 4096 }; }

  /**
   * Cube face + pixel for a direction, the inverse of py360convert.utils.xyzcube (1.0.x):
   * F z=+.5 (x right, y up) | R x=+.5 (z flipped) | B z=-.5 (x flipped) | L x=-.5 (z) |
   * U y=+.5 (x, z flipped) | D y=-.5 (x, z). Pixel c on a face of n sits at -0.5 + c/(n-1).
   * Returns [faceIndex in FACES, col, row] with col/row in [0, n-1].
   */
  function faceOf(x, y, z, n) {
    var ax = Math.abs(x), ay = Math.abs(y), az = Math.abs(z), m = n - 1, t;
    if (az >= ax && az >= ay) {
      t = 0.5 / az;
      return z > 0 ? [0, (x * t + 0.5) * m, (0.5 - y * t) * m] : [2, (0.5 - x * t) * m, (0.5 - y * t) * m];
    }
    if (ax >= ay) {
      t = 0.5 / ax;
      return x > 0 ? [1, (0.5 - z * t) * m, (0.5 - y * t) * m] : [3, (z * t + 0.5) * m, (0.5 - y * t) * m];
    }
    t = 0.5 / ay;
    return y > 0 ? [4, (x * t + 0.5) * m, (z * t + 0.5) * m] : [5, (x * t + 0.5) * m, (0.5 - z * t) * m];
  }

  /** Six face pixel arrays (RGBA, n x n) -> an equirectangular RGBA array W x H, bilinear. */
  function cubeToEquirect(faces, n, W, H, out) {
    out = out || new Uint8ClampedArray(W * H * 4);
    var su = new Float64Array(W), cu = new Float64Array(W);
    for (var i = 0; i < W; i++) { var u = ((i + 0.5) / W - 0.5) * 2 * Math.PI; su[i] = Math.sin(u); cu[i] = Math.cos(u); }
    var m = n - 1;
    for (var j = 0; j < H; j++) {
      var v = (0.5 - (j + 0.5) / H) * Math.PI, sv = Math.sin(v), cv = Math.cos(v), o = j * W * 4;
      for (var k = 0; k < W; k++, o += 4) {
        var f = faceOf(cv * su[k], sv, cv * cu[k], n), px = faces[f[0]];
        var c = Math.min(m, Math.max(0, f[1])), r = Math.min(m, Math.max(0, f[2]));
        var c0 = c | 0, r0 = r | 0, c1 = c0 < m ? c0 + 1 : c0, r1 = r0 < m ? r0 + 1 : r0, dc = c - c0, dr = r - r0;
        var a = (r0 * n + c0) * 4, b = (r0 * n + c1) * 4, d = (r1 * n + c0) * 4, e = (r1 * n + c1) * 4;
        for (var ch = 0; ch < 3; ch++) {
          var top = px[a + ch] + (px[b + ch] - px[a + ch]) * dc, bot = px[d + ch] + (px[e + ch] - px[d + ch]) * dc;
          out[o + ch] = top + (bot - top) * dr;
        }
        out[o + 3] = 255;
      }
    }
    return out;
  }

  /** yaw/pitch (Pannellum image frame) -> equirect pixel. */
  function toXY(yaw, pitch, W, H) { return [(yaw / 360 + 0.5) * W, (0.5 - pitch / 180) * H]; }

  /** A sample list as one continuous polyline in pixels: yaw unwrapped across the 180 deg seam. */
  function unwrapped(pts, W, H) {
    var out = [], prev = null;
    for (var i = 0; i < pts.length; i++) {
      var yaw = pts[i][0];
      if (prev !== null) { while (yaw - prev > 180) yaw -= 360; while (yaw - prev < -180) yaw += 360; }
      prev = yaw;
      out.push(toXY(yaw, pts[i][1], W, H));
    }
    return out;
  }

  /** Draw the shapes and labels on a 2D context the size of the equirect. A = window.WRIPanoAnnot. */
  function drawShapes(g, shapes, W, H, A) {
    var S = W / 3600;                                  // one screen px of the viewer at ~100 deg hfov
    var shifts = [-W, 0, W];                           // a shape across the seam shows on both edges
    var labels = [];
    shapes.forEach(function (s) {
      if (!A.validShape(s)) return;
      var st = A.styleOf(s), anchor;
      if (s.kind === 'point') {
        var p = toXY(s.pts[0][0], s.pts[0][1], W, H);
        shifts.forEach(function (dx) {
          g.beginPath(); g.arc(p[0] + dx, p[1], 8 * S, 0, 2 * Math.PI); g.fillStyle = st.casing; g.fill();
          g.beginPath(); g.arc(p[0] + dx, p[1], 5 * S, 0, 2 * Math.PI); g.fillStyle = st.color; g.fill();
        });
        anchor = { x: p[0] + 12 * S, y: p[1], left: true };
      } else {
        var P = unwrapped(A.samples(s), W, H), closed = s.kind === 'area';
        var path = function (dx) { g.beginPath(); P.forEach(function (q, i) { i ? g.lineTo(q[0] + dx, q[1]) : g.moveTo(q[0] + dx, q[1]); }); if (closed) g.closePath(); };
        shifts.forEach(function (dx) {
          if (closed) { path(dx); g.fillStyle = st.fill; g.fill(); }
          g.lineCap = 'round'; g.lineJoin = 'round';
          path(dx); g.strokeStyle = st.casing; g.lineWidth = 7 * S; g.stroke();
          path(dx); g.strokeStyle = st.color; g.lineWidth = 3.5 * S; g.stroke();
          if (s.kind === 'flow' && P.length >= 2) {
            var tip = P[P.length - 1], prev = P[P.length - 2], ang = Math.atan2(tip[1] - prev[1], tip[0] - prev[0]);
            [[17, 11, st.casing], [15, 9, st.color]].forEach(function (h) {
              var L = h[0] * S, w = h[1] * S, bx = tip[0] + dx - Math.cos(ang) * L, by = tip[1] - Math.sin(ang) * L, nx = -Math.sin(ang), ny = Math.cos(ang);
              g.beginPath(); g.moveTo(tip[0] + dx, tip[1]); g.lineTo(bx + nx * w, by + ny * w); g.lineTo(bx - nx * w, by - ny * w); g.closePath(); g.fillStyle = h[2]; g.fill();
            });
          }
        });
        var ax = 0, ay = 0, use = closed ? P.slice(0, -1) : P;
        if (closed || use.length > 2) { use.forEach(function (q) { ax += q[0]; ay += q[1]; }); ax /= use.length; ay /= use.length; }
        else { var mid = use[Math.floor(use.length / 2)]; ax = mid[0]; ay = mid[1]; }
        anchor = { x: ((ax % W) + W) % W, y: ay - 10 * S, left: false };
      }
      if (s.label) labels.push({ text: String(s.label), st: st, a: anchor });
    });
    // labels last, over every shape: the viewer's chip (dark, monospace, colour bar on the left)
    var fs = 12 * S;
    g.font = '600 ' + fs + 'px ui-monospace, "SF Mono", Menlo, Consolas, monospace';
    g.textBaseline = 'middle';
    labels.forEach(function (l) {
      var text = l.text.length > 60 ? l.text.slice(0, 59) + '…' : l.text;
      var tw = g.measureText(text).width, padX = 7 * S, h = fs * 1.3 + 6 * S, w = tw + 2 * padX + 3 * S;
      var x = l.a.left ? l.a.x : l.a.x - w / 2, y = l.a.left ? l.a.y - h / 2 : l.a.y - h;
      shifts.forEach(function (dx) {
        g.fillStyle = 'rgba(13,15,18,0.78)'; g.fillRect(x + dx, y, w, h);
        g.fillStyle = l.st.color; g.fillRect(x + dx, y, 3 * S, h);
        g.fillStyle = '#e8eaed'; g.fillText(text, x + dx + 3 * S + padX, y + h / 2);
      });
    });
  }

  /* -------------------------------------------------------------- JPEG XMP (GPano) */
  function gpanoXmp(W, H) {
    return '<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">' +
      '<rdf:Description rdf:about="" xmlns:GPano="http://ns.google.com/photos/1.0/panorama/" GPano:ProjectionType="equirectangular" ' +
      'GPano:UsePanoramaViewer="True" GPano:FullPanoWidthPixels="' + W + '" GPano:FullPanoHeightPixels="' + H + '" ' +
      'GPano:CroppedAreaImageWidthPixels="' + W + '" GPano:CroppedAreaImageHeightPixels="' + H + '" ' +
      'GPano:CroppedAreaLeftPixels="0" GPano:CroppedAreaTopPixels="0" GPano:PoseHeadingDegrees="0"/>' +
      '</rdf:RDF></x:xmpmeta>';
  }
  /** jpeg bytes -> the same JPEG with an XMP APP1 (after the JFIF APP0 when there is one). */
  function withXmp(jpeg, xmp) {
    var ns = 'http://ns.adobe.com/xap/1.0/\u0000', body = ns + xmp, len = body.length + 2;
    var seg = new Uint8Array(2 + len);
    seg[0] = 0xFF; seg[1] = 0xE1; seg[2] = (len >> 8) & 255; seg[3] = len & 255;
    for (var i = 0; i < body.length; i++) seg[4 + i] = body.charCodeAt(i) & 255;
    var at = 2;                                                   // after SOI
    if (jpeg[2] === 0xFF && jpeg[3] === 0xE0) at = 4 + ((jpeg[4] << 8) | jpeg[5]);   // after APP0
    var out = new Uint8Array(jpeg.length + seg.length);
    out.set(jpeg.subarray(0, at), 0); out.set(seg, at); out.set(jpeg.subarray(at), at + seg.length);
    return out;
  }

  /* -------------------------------------------------------------- ZIP (stored) */
  var CRC = (function () { var t = new Uint32Array(256); for (var n = 0; n < 256; n++) { var c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  function crc32(b) { var c = 0xFFFFFFFF; for (var i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
  /** files: [{name, data: Uint8Array}] -> a ZIP (no compression: JPEGs don't shrink). */
  function zip(files) {
    var parts = [], central = [], off = 0;
    var le = function (n, bytes) { var a = new Uint8Array(bytes); for (var i = 0; i < bytes; i++) a[i] = (n >>> (8 * i)) & 255; return a; };
    var enc = function (s) { return new TextEncoder().encode(s); };
    var cat = function (list) { var len = list.reduce(function (s, a) { return s + a.length; }, 0), out = new Uint8Array(len), at = 0; list.forEach(function (a) { out.set(a, at); at += a.length; }); return out; };
    files.forEach(function (f) {
      var name = enc(f.name), crc = crc32(f.data), size = f.data.length;
      var head = cat([le(0x04034b50, 4), le(20, 2), le(0x0800, 2), le(0, 2), le(0, 2), le(0x21, 2), le(crc, 4), le(size, 4), le(size, 4), le(name.length, 2), le(0, 2), name]);
      central.push(cat([le(0x02014b50, 4), le(20, 2), le(20, 2), le(0x0800, 2), le(0, 2), le(0, 2), le(0x21, 2), le(crc, 4), le(size, 4), le(size, 4),
        le(name.length, 2), le(0, 2), le(0, 2), le(0, 2), le(0, 2), le(0, 4), le(off, 4), name]));
      parts.push(head, f.data); off += head.length + size;
    });
    var cd = cat(central);
    return cat(parts.concat([cd, cat([le(0x06054b50, 4), le(0, 2), le(0, 2), le(files.length, 2), le(files.length, 2), le(cd.length, 4), le(off, 4), le(0, 2)])]));
  }

  /* -------------------------------------------------------------- browser: tiles -> picture */
  function loadImg(url) {
    return new Promise(function (res, rej) {
      var im = new Image(); im.crossOrigin = 'anonymous';
      im.onload = function () { res(im); }; im.onerror = function () { rej(new Error('a tile did not load')); }; im.src = url;
    });
  }
  /** Where a sphere's picture is: {tiles: absolute folder} or {img: absolute url}, from its pano_url. */
  function sourceOf(panoUrl) {
    var u = new URL(panoUrl, global.location.href), base = u.origin + u.pathname.replace(/[^/]*$/, '');
    var tiles = u.searchParams.get('tiles'), img = u.searchParams.get('img');
    if (tiles) return { tiles: new URL(tiles.replace(/\/$/, ''), base).href };
    if (img) return { img: new URL(img, base).href };
    return null;
  }
  /** The six faces at the level nearest `want` px, as RGBA arrays. */
  async function loadFaces(tilesAt, want, progress) {
    var cfg = (await (await fetch(tilesAt + '/config.json')).json()).multiRes;
    var level = 1, side = cfg.tileResolution;
    for (var L = 1; L <= cfg.maxLevel; L++) {
      var s = Math.min(Math.pow(2, L - 1) * cfg.tileResolution, cfg.cubeResolution);
      level = L; side = s; if (s >= want) break;
    }
    var n = Math.ceil(side / cfg.tileResolution), faces = [], done = 0, total = 6 * n * n;
    // a phone keeps faces only as big as its picture needs (2048 -> 1440 px: half the memory)
    var out = Math.min(side, Math.ceil(want));
    var c = document.createElement('canvas'); c.width = side; c.height = side;      // tiles land here
    var g = c.getContext('2d', { willReadFrequently: out === side });
    var t = out < side ? document.createElement('canvas') : null, gt = null;          // the smaller copy, when wanted
    if (t) { t.width = out; t.height = out; gt = t.getContext('2d', { willReadFrequently: true }); gt.imageSmoothingQuality = 'high'; }
    for (var f = 0; f < 6; f++) {
      var jobs = [];
      for (var y = 0; y < n; y++) for (var x = 0; x < n; x++) (function (x, y) {
        var url = tilesAt + cfg.path.replace('%l', level).replace('%s', FACES[f]).replace('%y', y).replace('%x', x) + '.' + (cfg.extension || 'jpg');
        jobs.push(loadImg(url).then(function (im) { g.drawImage(im, x * cfg.tileResolution, y * cfg.tileResolution); done++; if (progress) progress(done / total); }));
      })(x, y);
      await Promise.all(jobs);
      if (t) { gt.clearRect(0, 0, out, out); gt.drawImage(c, 0, 0, out, out); faces.push(gt.getImageData(0, 0, out, out).data); }
      else faces.push(g.getImageData(0, 0, side, side).data);
    }
    c.width = c.height = 0; if (t) t.width = t.height = 0;
    return { faces: faces, n: out };
  }

  /**
   * One sphere -> {name, blob} (a 360 JPEG with GPano XMP). p = sphere record (pano_url, pano_name),
   * shapes = its annotation shapes, A = WRIPanoAnnot. opts: {phone, progress(fraction, words)}.
   */
  async function exportSphere(p, shapes, A, opts) {
    opts = opts || {};
    var sz = sizeFor(!!opts.phone), W = sz.w, H = sz.h, say = opts.progress || function () {};
    var src = sourceOf(p.pano_url);
    if (!src) throw new Error('That sphere has no picture to export.');
    var c = document.createElement('canvas'); c.width = W; c.height = H;
    var g = c.getContext('2d');
    if (src.tiles) {
      say(0, 'Loading the picture');
      var fx = await loadFaces(src.tiles, W / 4, function (f) { say(f * 0.6, 'Loading the picture'); });
      say(0.62, 'Unfolding the sphere');
      await new Promise(function (r) { setTimeout(r, 20); });
      var img = g.createImageData(W, H);
      cubeToEquirect(fx.faces, fx.n, W, H, img.data);
      fx.faces.length = 0;
      g.putImageData(img, 0, 0);
    } else {
      say(0.1, 'Loading the picture');
      g.drawImage(await loadImg(src.img), 0, 0, W, H);
    }
    say(0.85, 'Drawing the labels');
    drawShapes(g, shapes || [], W, H, A);
    say(0.92, 'Saving');
    var blob = await new Promise(function (res, rej) { c.toBlob(function (b) { b ? res(b) : rej(new Error('The picture could not be saved.')); }, 'image/jpeg', 0.9); });
    c.width = c.height = 0;
    var bytes = withXmp(new Uint8Array(await blob.arrayBuffer()), gpanoXmp(W, H));
    var base = String(p.pano_name || p.site_label || 'sphere').replace(/[\u0000-\u001f\\/:*?"<>|]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 80) || 'sphere';
    return { name: base + '_360_labeled.jpg', blob: new Blob([bytes], { type: 'image/jpeg' }), bytes: bytes };
  }

  /** Hand a file to the user. Inside the Field App (a frame without download rights) the app page
   *  around us -- same origin -- saves it; else a link here; else a new tab. */
  function deliver(blob, name) {
    var url = URL.createObjectURL(blob);
    setTimeout(function () { URL.revokeObjectURL(url); }, 120000);
    var docs = [];
    try { if (global.top && global.top !== global && global.top.document) docs.push(global.top.document); } catch (e) { /* another origin */ }
    docs.push(document);
    for (var i = 0; i < docs.length; i++) {
      try {
        var a = docs[i].createElement('a'); a.href = url; a.download = name; a.rel = 'noopener'; a.style.display = 'none';
        docs[i].body.appendChild(a); a.click(); a.remove(); return true;
      } catch (e) { /* try the next */ }
    }
    return !!global.open(url, '_blank');
  }

  var API = { FACES: FACES, sizeFor: sizeFor, faceOf: faceOf, cubeToEquirect: cubeToEquirect, toXY: toXY, unwrapped: unwrapped,
    drawShapes: drawShapes, gpanoXmp: gpanoXmp, withXmp: withXmp, crc32: crc32, zip: zip, sourceOf: sourceOf,
    loadFaces: loadFaces, exportSphere: exportSphere, deliver: deliver };
  if (typeof module !== 'undefined' && module.exports) module.exports = API; else global.WRIPanoExport = API;
})(typeof window !== 'undefined' ? window : this);
