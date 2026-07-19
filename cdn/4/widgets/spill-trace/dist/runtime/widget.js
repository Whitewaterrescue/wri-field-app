System.register(["jimu-core/emotion","jimu-core","jimu-arcgis","esri/layers/GraphicsLayer","esri/layers/FeatureLayer","esri/Graphic","esri/geometry/Polyline","esri/geometry/Point","esri/geometry/geometryEngine"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polyline__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polyline__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_Graphic__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_Graphic__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polyline__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polyline__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/spill-trace/src/trace-engine.ts"
/*!*****************************************************************!*\
  !*** ./your-extensions/widgets/spill-trace/src/trace-engine.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_CONFIG: () => (/* binding */ DEFAULT_CONFIG),
/* harmony export */   ENGINE_VERSION: () => (/* binding */ ENGINE_VERSION),
/* harmony export */   REMOVED_IMPOUNDMENT_COMIDS: () => (/* binding */ REMOVED_IMPOUNDMENT_COMIDS),
/* harmony export */   calculateDepthManning: () => (/* binding */ calculateDepthManning),
/* harmony export */   computeTrace: () => (/* binding */ computeTrace),
/* harmony export */   daWeightedQ: () => (/* binding */ daWeightedQ),
/* harmony export */   estimateBoomNeeds: () => (/* binding */ estimateBoomNeeds),
/* harmony export */   estimateGeometryPayton: () => (/* binding */ estimateGeometryPayton),
/* harmony export */   fetchTraceData: () => (/* binding */ fetchTraceData),
/* harmony export */   haversineM: () => (/* binding */ haversineM),
/* harmony export */   jobsonPassageHours: () => (/* binding */ jobsonPassageHours),
/* harmony export */   jobsonVelocities: () => (/* binding */ jobsonVelocities),
/* harmony export */   mergeUpstreamAnchor: () => (/* binding */ mergeUpstreamAnchor),
/* harmony export */   runTrace: () => (/* binding */ runTrace),
/* harmony export */   toGeoJson: () => (/* binding */ toGeoJson)
/* harmony export */ });
// @ts-nocheck
/**
 * trace-engine.js — National spill trajectory engine (JS port of spill_trace.py)
 * ==============================================================================
 *
 * Faithful port of the Python oracle. Dependency-free ESM: runs in plain Node
 * (>=18, global fetch) for golden testing and in the browser inside the ExB
 * widget. NO @arcgis imports here — the widget wraps this module and supplies
 * layer access through injectable providers:
 *
 *   config.widthProvider(envelope)  -> [{lat, lon, width}]   (GLOW midpoints in bbox)
 *   config.siteProviders            -> [{name, buffer_m, fetch: async () => [{name, lat, lon, ...extra}]}]
 *   config.receptorProviders        -> same shape as siteProviders
 *
 * Port gotchas honored (see README):
 *   1. geoserver CQL BBOX is lat,lon axis order (EPSG:4269 / WFS 2.0)
 *   2. HR NHDPlusID != MR comid — widths sampled spatially, never ID-joined
 *   3. impoundment = wbareatype in (LakePond, Reservoir)
 *   4. width override sampled in windows; failure degrades to formula widths
 *   5. NLDI/geoserver empty-200 -> retry 3x with backoff
 *   6. snap click to streamorde >= minStreamOrder
 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ENGINE_VERSION = "1.5.0";
const NLDI_BASE = "https://api.water.usgs.gov/nldi";
const GEOSERVER = "https://api.water.usgs.gov/geoserver/wmadata/ows";
const NWIS_IV = "https://waterservices.usgs.gov/nwis/iv/";
const NWIS_SITE = "https://waterservices.usgs.gov/nwis/site/";
const NWIS_STAT = "https://waterservices.usgs.gov/nwis/stat/";
/**
 * NHDPlus MR waterbody flags lag reality — reaches through REMOVED dams still
 * carry wbareatype LakePond and would false-stop the clock. Known removals
 * are excluded here (extendable per-run via config.impoundExcludeComids).
 */
const REMOVED_IMPOUNDMENT_COMIDS = new Set([
    // Milltown Dam, Clark Fork at Bonner MT — removed 2008-2010 (reported by Cody 2026-07-07)
    24293120, 24293122, 24293124,
]);
const DEFAULT_CONFIG = {
    maxDistanceKm: 300,
    maxHours: 24,
    resolutionM: 100.0,
    safetyFactor: 1.5,
    manningN: 0.045,
    minStreamOrder: 4,
    widthProvider: null, // async (env {xmin,ymin,xmax,ymax}) => [{lat, lon, width}]
    widthSampleRadiusM: 800,
    widthWindowPoints: 100, // trace points per override sampling window (~10 km)
    siteProviders: [],
    receptorProviders: [],
    upstreamGaugeKm: 30, // search UM this far for an upstream anchor gauge; 0 = off
    qInterp: "drainage-area", // 'drainage-area' (Q jumps at confluences) | 'distance' (legacy linear smear)
    gaugeStatFallback: true, // gauge IV feed down -> period-of-record median daily flow (Payton's get_discharge pattern)
    impoundStopKm: 2.0,
    impoundExcludeComids: [], // extra removed-dam comids beyond REMOVED_IMPOUNDMENT_COMIDS
    timingModel: "hydraulic", // 'hydraulic' (V=Q/A x safety) | 'jobson' (USGS WRIR 96-4013 dye-study regressions)
    asOf: null, // 'YYYY-MM-DD' historical Q; null = live
    verbose: true,
};
// ---------------------------------------------------------------- helpers
const R_EARTH = 6371008.8;
function haversineM(lat1, lon1, lat2, lon2) {
    const p1 = (lat1 * Math.PI) / 180;
    const p2 = (lat2 * Math.PI) / 180;
    const dp = p2 - p1;
    const dl = ((lon2 - lon1) * Math.PI) / 180;
    const a = Math.pow(Math.sin(dp / 2), 2) + Math.cos(p1) * Math.cos(p2) * Math.pow(Math.sin(dl / 2), 2);
    return 2 * R_EARTH * Math.asin(Math.sqrt(a));
}
/** Payton's width/depth formulas (fallback when no GLOW data). Verbatim. */
function estimateGeometryPayton(drainageAreaSqMi) {
    let width, depth;
    if (drainageAreaSqMi < 100) {
        width = 10.0 * Math.pow(drainageAreaSqMi / 50, 0.5);
        depth = 0.5 * Math.pow(drainageAreaSqMi / 50, 0.3);
    }
    else if (drainageAreaSqMi < 1000) {
        width = 50.0 * Math.pow(drainageAreaSqMi / 500, 0.5);
        depth = 1.5 * Math.pow(drainageAreaSqMi / 500, 0.3);
    }
    else {
        width = 150.0 * Math.pow(drainageAreaSqMi / 5000, 0.4);
        depth = 3.0 * Math.pow(drainageAreaSqMi / 5000, 0.3);
    }
    return [width, depth];
}
/**
 * Manning's depth via bisection (Python used scipy brentq on [0.1, 20]).
 * The residual is monotonically increasing in depth, so bisection converges to
 * the same root. Replicates brentq's failure mode: no sign change across the
 * bracket -> null (caller falls back to formula depth).
 */
function calculateDepthManning(Qm3s, widthM, slope, n = 0.045) {
    if (Qm3s <= 0 || widthM <= 0 || slope <= 0.00001)
        return null;
    const residual = (depth) => {
        if (depth <= 0.01)
            return -Qm3s;
        const A = widthM * depth;
        const P = widthM + 2 * depth;
        const R = A / P;
        return (1 / n) * A * Math.pow(R, 2 / 3) * Math.sqrt(slope) - Qm3s;
    };
    let lo = 0.1, hi = 20.0;
    let flo = residual(lo), fhi = residual(hi);
    if (flo === 0)
        return lo;
    if (fhi === 0)
        return hi;
    if (flo * fhi > 0)
        return null; // brentq raises -> Python returns None
    for (let i = 0; i < 100; i++) {
        const mid = 0.5 * (lo + hi);
        const fm = residual(mid);
        if (fm === 0 || (hi - lo) / 2 < 1e-10)
            return mid;
        if (flo * fm < 0) {
            hi = mid;
            fhi = fm;
        }
        else {
            lo = mid;
            flo = fm;
        }
    }
    return 0.5 * (lo + hi);
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
/** GET/POST with retry — NLDI/geoserver intermittently return empty 200 bodies. */
function getJson(url_1) {
    return __awaiter(this, arguments, void 0, function* (url, { params = null, data = null, tries = 3, timeoutMs = 90000 } = {}) {
        let last = null;
        for (let attempt = 0; attempt < tries; attempt++) {
            try {
                const ctrl = new AbortController();
                const timer = setTimeout(() => ctrl.abort(), timeoutMs);
                let resp;
                try {
                    if (data !== null) {
                        resp = yield fetch(url, {
                            method: "POST",
                            headers: { "Content-Type": "application/x-www-form-urlencoded" },
                            body: new URLSearchParams(data).toString(),
                            signal: ctrl.signal,
                        });
                    }
                    else {
                        const qs = params ? "?" + new URLSearchParams(params).toString() : "";
                        resp = yield fetch(url + qs, { signal: ctrl.signal });
                    }
                }
                finally {
                    clearTimeout(timer);
                }
                if (!resp.ok)
                    throw new Error(`HTTP ${resp.status}`);
                return yield resp.json(); // empty body -> SyntaxError -> retry
            }
            catch (e) {
                last = e;
                yield sleep(1500 * (attempt + 1));
            }
        }
        throw new Error(`${url} failed after ${tries} tries: ${last}`);
    });
}
function getText(url_1, params_1) {
    return __awaiter(this, arguments, void 0, function* (url, params, timeoutMs = 30000) {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), timeoutMs);
        try {
            const resp = yield fetch(url + "?" + new URLSearchParams(params).toString(), { signal: ctrl.signal });
            return yield resp.text();
        }
        finally {
            clearTimeout(timer);
        }
    });
}
// ---------------------------------------------------------------- data fetch
/** Snap to nearest reach with streamorde >= minOrder (geoserver bbox search). */
function snapComid(lat, lon, minOrder) {
    return __awaiter(this, void 0, void 0, function* () {
        var _c;
        const box = 0.2;
        // NOTE: EPSG:4269 under WFS 2.0 uses lat,lon axis order in CQL BBOX
        const j = yield getJson(GEOSERVER, {
            data: {
                service: "WFS", version: "2.0.0", request: "GetFeature",
                typeName: "wmadata:nhdflowline_network", outputFormat: "application/json",
                cql_filter: `streamorde >= ${minOrder} AND BBOX(the_geom,` +
                    `${lat - box},${lon - box},${lat + box},${lon + box})`,
                count: "500",
            },
        });
        let best = null, bestD = Infinity;
        for (const f of j.features || []) {
            const g = f.geometry;
            const paths = g.type === "LineString" ? [g.coordinates] : g.coordinates;
            for (const path of paths) {
                for (let i = 0; i < path.length; i += 3) { // every 3rd vertex
                    const p = path[i];
                    const d = haversineM(lat, lon, p[1], p[0]);
                    if (d < bestD) {
                        bestD = d;
                        best = f.properties;
                    }
                }
            }
        }
        if (best !== null)
            return [Number(best.comid), (_c = best.gnis_name) !== null && _c !== void 0 ? _c : null, bestD];
        return [yield nldiPositionComid(lat, lon), null, null];
    });
}
function nldiPositionComid(lat, lon) {
    return __awaiter(this, void 0, void 0, function* () {
        const j = yield getJson(`${NLDI_BASE}/linked-data/comid/position`, {
            params: { coords: `POINT(${lon} ${lat})` }, timeoutMs: 30000,
        });
        return Number(j.features[0].properties.identifier);
    });
}
function nldiDmFlowlines(comid, distanceKm) {
    return __awaiter(this, void 0, void 0, function* () {
        const j = yield getJson(`${NLDI_BASE}/linked-data/comid/${comid}/navigation/DM/flowlines`, {
            params: { distance: String(Math.trunc(distanceKm)) },
        });
        const geoms = new Map(); // comid -> [paths] ([[lon,lat],...])
        for (const f of j.features || []) {
            const cid = Number(f.properties.nhdplus_comid);
            const g = f.geometry;
            if (g.type === "LineString")
                geoms.set(cid, [g.coordinates]);
            else if (g.type === "MultiLineString")
                geoms.set(cid, g.coordinates);
        }
        return geoms;
    });
}
function nldiGauges(comid, distanceKm, mode) {
    return __awaiter(this, void 0, void 0, function* () {
        const j = yield getJson(`${NLDI_BASE}/linked-data/comid/${comid}/navigation/${mode}/nwissite`, {
            params: { distance: String(Math.trunc(distanceKm)) },
        });
        const out = [];
        for (const f of j.features || []) {
            const sid = (f.properties.identifier || "").replace("USGS-", "");
            if (sid.length > 15)
                continue; // coordinate-style IDs (notebook rule)
            out.push({
                station_id: sid,
                name: f.properties.name || "Unknown",
                lat: f.geometry.coordinates[1],
                lon: f.geometry.coordinates[0],
            });
        }
        return out;
    });
}
/**
 * Merge the nearest upstream main-stem gauge into the located-gauge list as a
 * virtual gauge at the spill point (trace_dist 0). Without this, clicking just
 * DOWNSTREAM of a gauge drops it from the DM navigation and the next gauge's Q
 * is back-clamped onto the first reach — wildly wrong when that gauge sits
 * below a major confluence (Gallatin below Logan -> Missouri at Toston).
 * Q is transferred by drainage-area ratio (standard USGS transfer), which also
 * keeps the anchor honest when the UM path crosses a confluence: the ratio
 * scales a tributary gauge back up to the flow at the click.
 * No-op when an on-trace gauge already sits within anchorSkipM of the start
 * (it already anchors the boundary), the station is already located, or the
 * DA transfer is outside its credible range.
 */
function mergeUpstreamAnchor(gd, up, spillDaSqmi, { anchorSkipM = 500, daRatioMax = 4 } = {}) {
    var _c;
    if (!up || !(up.discharge >= 0) || !(up.drainage_area > 0) || !(spillDaSqmi > 0))
        return false;
    if (gd.some((g) => g.station_id === up.station_id))
        return false;
    if (gd.some((g) => g.trace_dist <= anchorSkipM))
        return false;
    const ratio = spillDaSqmi / up.drainage_area;
    if (ratio < 1 / daRatioMax || ratio > daRatioMax)
        return false;
    const [w, dep] = estimateGeometryPayton(spillDaSqmi);
    gd.push({
        station_id: up.station_id, name: up.name, lat: up.lat, lon: up.lon,
        discharge: up.discharge * ratio, drainage_area: spillDaSqmi,
        q_source: up.q_source || "iv",
        area: w * dep, trace_dist: 0.0,
        upstream_anchor: true,
        anchor_gauge_q_cfs: up.discharge, anchor_gauge_da_sqmi: up.drainage_area,
        anchor_upstream_m: (_c = up.upstream_m) !== null && _c !== void 0 ? _c : null,
    });
    gd.sort((a, b) => a.trace_dist - b.trace_dist);
    return true;
}
/** VAAs for a list of COMIDs from USGS geoserver (batched POST). */
function vaaBatch(comids) {
    return __awaiter(this, void 0, void 0, function* () {
        var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const out = new Map();
        const CHUNK = 150;
        for (let i = 0; i < comids.length; i += CHUNK) {
            const chunk = comids.slice(i, i + CHUNK);
            const j = yield getJson(GEOSERVER, {
                data: {
                    service: "WFS", version: "2.0.0", request: "GetFeature",
                    typeName: "wmadata:nhdflowline_network",
                    outputFormat: "application/json",
                    cql_filter: `comid IN (${chunk.join(",")})`,
                },
            });
            for (const f of j.features || []) {
                const p = f.properties;
                // EROM monthly modeled flow (gauge-adjusted, cfs) — ungauged fallback + Jobson Qa
                const qe = {};
                for (let m = 1; m <= 12; m++) {
                    const k = `qe_${String(m).padStart(2, "0")}`;
                    qe[m] = (_c = p[k]) !== null && _c !== void 0 ? _c : null;
                }
                out.set(Number(p.comid), {
                    hydroseq: (_d = p.hydroseq) !== null && _d !== void 0 ? _d : null,
                    streamorde: (_e = p.streamorde) !== null && _e !== void 0 ? _e : null,
                    slope: (_f = p.slope) !== null && _f !== void 0 ? _f : null,
                    totdasqkm: (_g = p.totdasqkm) !== null && _g !== void 0 ? _g : null,
                    ftype: (_h = p.ftype) !== null && _h !== void 0 ? _h : null,
                    fcode: (_j = p.fcode) !== null && _j !== void 0 ? _j : null,
                    gnis_name: (_k = p.gnis_name) !== null && _k !== void 0 ? _k : null,
                    // LakePond/Reservoir = impounded; StreamRiver = braided free-flowing
                    wbareatype: (_l = p.wbareatype) !== null && _l !== void 0 ? _l : null,
                    ve_ma: (_m = p.ve_ma) !== null && _m !== void 0 ? _m : null,
                    qe_ma: (_o = p.qe_ma) !== null && _o !== void 0 ? _o : null, // EROM mean annual flow (cfs) — Jobson Qa
                    qe_monthly: qe,
                    // NHDPlus divergence: 0 = none, 1 = main path, 2 = minor path of a split
                    divergence: (_p = p.divergence) !== null && _p !== void 0 ? _p : 0,
                });
            }
        }
        return out;
    });
}
/** Discharge (cfs) + drainage area (sq mi) per gauge via plain NWIS REST.
 *  statFallback (v1.5, Payton's get_discharge pattern): gauges whose IV feed
 *  is down/negative get the period-of-record MEDIAN daily flow (stat service
 *  p50, needs >3 years of record) for the run date's calendar day, flagged
 *  q_source='stat-p50' so the run can warn it isn't live conditions. */
function gaugeInfo(stationIds_1) {
    return __awaiter(this, arguments, void 0, function* (stationIds, asOf = null, statFallback = false) {
        var _c, _d;
        const info = new Map();
        if (!stationIds.length)
            return info;
        const sites = stationIds.join(",");
        // drainage areas (rdb, expanded output)
        try {
            const text = yield getText(NWIS_SITE, { format: "rdb", sites, siteOutput: "expanded" });
            const lines = text.split("\n").filter((l) => l && !l.startsWith("#"));
            if (lines.length >= 2) {
                const hdr = lines[0].split("\t");
                const iSite = hdr.indexOf("site_no");
                const iDa = hdr.indexOf("drain_area_va"); // -1 if absent
                for (const line of lines.slice(2)) {
                    const parts = line.split("\t");
                    if (parts.length <= Math.max(iSite, iDa > -1 ? iDa : 0))
                        continue;
                    let da = null;
                    if (iDa > -1) {
                        const v = parseFloat(parts[iDa]);
                        da = Number.isFinite(v) ? v : null;
                    }
                    info.set(parts[iSite], { drainage_area: da });
                }
            }
        }
        catch ( /* ignore — matches Python */_e) { /* ignore — matches Python */ }
        // discharge
        const params = { format: "json", sites, parameterCd: "00060" };
        if (asOf) {
            params.startDT = asOf;
            params.endDT = asOf;
        }
        else
            params.period = "P1D";
        try {
            const j = yield getJson(NWIS_IV, { params, timeoutMs: 60000, tries: 1 });
            for (const ts of ((_c = j === null || j === void 0 ? void 0 : j.value) === null || _c === void 0 ? void 0 : _c.timeSeries) || []) {
                const sid = ts.sourceInfo.siteCode[0].value;
                const vals = ts.values[0].value;
                if (!vals || !vals.length)
                    continue;
                const q = parseFloat(vals[vals.length - 1].value);
                if (q >= 0) {
                    if (!info.has(sid))
                        info.set(sid, {});
                    info.get(sid).discharge = q;
                    info.get(sid).q_source = "iv";
                }
            }
        }
        catch ( /* ignore — matches Python */_f) { /* ignore — matches Python */ }
        // median-daily-flow fallback for gauges the IV pass didn't cover
        if (statFallback) {
            const missing = stationIds.filter((s) => { var _c; return ((_c = info.get(s)) === null || _c === void 0 ? void 0 : _c.discharge) === undefined; });
            const [month, day] = asOf
                ? [parseInt(asOf.slice(5, 7), 10), parseInt(asOf.slice(8, 10), 10)]
                : [new Date().getMonth() + 1, new Date().getDate()];
            const STAT_CHUNK = 10; // stat service 400s above 10 sites per request
            for (let c = 0; c < missing.length; c += STAT_CHUNK) {
                try {
                    const text = yield getText(NWIS_STAT, {
                        format: "rdb", sites: missing.slice(c, c + STAT_CHUNK).join(","), parameterCd: "00060",
                        statReportType: "daily", statTypeCd: "p50",
                    });
                    const lines = text.split("\n").filter((l) => l && !l.startsWith("#"));
                    if (lines.length >= 2) {
                        const hdr = lines[0].split("\t");
                        const col = (name) => hdr.indexOf(name);
                        const [iSite, iMon, iDay, iCount, iP50] = ["site_no", "month_nu", "day_nu", "count_nu", "p50_va"].map(col);
                        for (const line of lines.slice(2)) {
                            const p = line.split("\t");
                            if (p.length <= Math.max(iSite, iMon, iDay, iCount, iP50))
                                continue;
                            const sid = p[iSite];
                            if (((_d = info.get(sid)) === null || _d === void 0 ? void 0 : _d.discharge) !== undefined)
                                continue; // first matching series wins
                            if (parseInt(p[iMon], 10) !== month || parseInt(p[iDay], 10) !== day)
                                continue;
                            if (!(parseInt(p[iCount], 10) > 3))
                                continue; // Payton's record-length rule
                            const q = parseFloat(p[iP50]);
                            if (!(q >= 0))
                                continue;
                            if (!info.has(sid))
                                info.set(sid, {});
                            info.get(sid).discharge = q;
                            info.get(sid).q_source = "stat-p50";
                        }
                    }
                }
                catch ( /* stat service down -> this chunk's gauges stay dropped, as before */_g) { /* stat service down -> this chunk's gauges stay dropped, as before */ }
            }
        }
        return info;
    });
}
// ---------------------------------------------------------------- trace assembly
/** Order segments downstream (hydroseq desc), orient, trim to spill point,
 *  emit ~resolutionM spaced points carrying VAA attributes. */
function assembleTrace(lat, lon, geoms, vaa, resolutionM, log) {
    const segs = [];
    for (const [cid, paths] of geoms) {
        const v = vaa.get(cid);
        if (!v || v.hydroseq === null || v.hydroseq === undefined)
            continue;
        const coords = paths.flat(); // flatten multiline into one vertex list
        if (coords.length < 2)
            continue;
        segs.push(Object.assign({ comid: cid, coords }, v));
    }
    segs.sort((a, b) => b.hydroseq - a.hydroseq); // downstream = decreasing hydroseq
    // orient each segment so it flows start->end, chaining ends to starts
    let prevEnd = null;
    for (const s of segs) {
        let c = s.coords;
        if (prevEnd !== null) {
            const dStart = haversineM(prevEnd[1], prevEnd[0], c[0][1], c[0][0]);
            const dEnd = haversineM(prevEnd[1], prevEnd[0], c[c.length - 1][1], c[c.length - 1][0]);
            if (dEnd < dStart)
                c = c.slice().reverse();
        }
        s.coords = c;
        prevEnd = c[c.length - 1];
    }
    // trim the first segment to start at the vertex nearest the spill point
    if (segs.length) {
        const c0 = segs[0].coords;
        let minI = 0, minD = Infinity;
        for (let i = 0; i < c0.length; i++) {
            const d = haversineM(lat, lon, c0[i][1], c0[i][0]);
            if (d < minD) {
                minD = d;
                minI = i;
            }
        }
        const trimmed = c0.slice(minI);
        segs[0].coords = trimmed.length ? trimmed : [c0[c0.length - 1]];
    }
    // flatten to attributed points, downsample to resolutionM
    let pts = [];
    for (const s of segs) {
        let slope = s.slope;
        if (slope === null || slope === undefined || slope < 0)
            slope = 0.001; // -9998 = missing
        for (const p of s.coords) {
            pts.push({
                lon: p[0], lat: p[1],
                drainage_area_km2: s.totdasqkm || 0,
                slope,
                ftype: s.ftype, wbareatype: s.wbareatype,
                comid: s.comid,
                gnis_name: s.gnis_name,
                qe_ma: s.qe_ma, qe_monthly: s.qe_monthly,
                divergence: s.divergence || 0,
            });
        }
    }
    if (pts.length > 1) {
        const keep = [pts[0]];
        let cum = 0.0;
        let last = pts[0];
        for (let i = 1; i < pts.length; i++) {
            const p = pts[i];
            cum += haversineM(last.lat, last.lon, p.lat, p.lon);
            last = p;
            if (cum >= resolutionM) {
                keep.push(p);
                cum = 0.0;
            }
        }
        pts = keep;
    }
    log(`  trace: ${segs.length} segments -> ${pts.length} points (${segs.length ? segs[0].gnis_name : "?"} ...)`);
    return [pts, segs.length ? segs[0].gnis_name : null];
}
/**
 * DA-weighted discharge interpolator (v1.4): Q as a piecewise-linear function
 * of drainage area between gauges, DA-ratio extrapolated outside the gauge
 * range (uniform-yield assumption — same semantics as the single-gauge path).
 * Because DA jumps at confluences, the Q jump lands AT the confluence instead
 * of smearing linearly over the inter-gauge distance; it also can't back-clamp
 * a post-confluence gauge's full Q onto a small upstream tributary.
 * Gauges whose NWIS DA breaks downstream monotonicity are dropped (NWIS and
 * NHDPlus delineations disagree occasionally). Returns null when fewer than 2
 * monotonic gauges remain — caller falls back to distance interpolation.
 */
function daWeightedQ(gd) {
    const kept = [];
    for (const g of gd) {
        if (!(g.drainage_area > 0) || !(g.discharge >= 0))
            continue;
        if (kept.length && g.drainage_area <= kept[kept.length - 1].drainage_area)
            continue;
        kept.push(g);
    }
    if (kept.length < 2)
        return null;
    const fQ = interpClamped(kept.map((g) => g.drainage_area), kept.map((g) => g.discharge));
    const da0 = kept[0].drainage_area, q0 = kept[0].discharge;
    const daN = kept[kept.length - 1].drainage_area, qN = kept[kept.length - 1].discharge;
    return {
        kept,
        q: (da) => {
            if (!(da > 0))
                return 1.0;
            if (da <= da0)
                return q0 * (da / da0);
            if (da >= daN)
                return qN * (da / daN);
            return fQ(da);
        },
    };
}
/** Clamped linear interpolation (scipy interp1d with clamped fill_value). */
function interpClamped(xs, ys) {
    return (x) => {
        if (x <= xs[0])
            return ys[0];
        if (x >= xs[xs.length - 1])
            return ys[ys.length - 1];
        let i = 1;
        while (xs[i] < x)
            i++;
        const t = (x - xs[i - 1]) / (xs[i] - xs[i - 1]);
        return ys[i - 1] + t * (ys[i] - ys[i - 1]);
    };
}
// ---------------------------------------------------------------- main model
//
// Split into two stages so the expensive part is cacheable:
//   fetchTraceData(lat, lon, config)  — ALL network I/O: trace geometry, VAAs,
//     width sampling, gauges + flows, site/receptor features. Safety factor,
//     max hours etc. do NOT affect this stage.
//   computeTrace(data, config)        — pure math: Q interp, Manning depth,
//     velocity x safety, impoundment, travel time, hourly markers, site ETAs.
//     Deterministic and re-runnable on the same data (fields are overwritten,
//     rows are never structurally mutated).
// runTrace() composes the two — identical behavior to the original.
function fetchTraceData(lat_1, lon_1) {
    return __awaiter(this, arguments, void 0, function* (lat, lon, config = {}) {
        const cfg = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
        const log = cfg.verbose ? (...a) => console.log(...a) : () => { };
        log(`fetchTraceData(${lat.toFixed(4)}, ${lon.toFixed(4)})  asOf=${cfg.asOf || "live"}`);
        // 1. trace geometry (one NLDI call) + VAA batch join
        const [comid, snapName, snapD] = yield snapComid(lat, lon, cfg.minStreamOrder);
        log(`  COMID ${comid}` + (snapName ? ` (${snapName}, snapped ${(snapD / 1000).toFixed(2)} km)` : ""));
        const geoms = yield nldiDmFlowlines(comid, cfg.maxDistanceKm);
        log(`  NLDI DM flowlines: ${geoms.size}`);
        const vaa = yield vaaBatch([...geoms.keys()]);
        const [pts, riverName] = assembleTrace(lat, lon, geoms, vaa, cfg.resolutionM, log);
        if (pts.length < 2)
            throw new Error("trace too short");
        // per-point arrays (mirrors the DataFrame)
        const n = pts.length;
        const rows = pts.map((p) => (Object.assign({}, p)));
        rows[0].distance = 0.0;
        for (let i = 1; i < n; i++) {
            rows[i].distance = haversineM(rows[i - 1].lat, rows[i - 1].lon, rows[i].lat, rows[i].lon);
        }
        let cum = 0.0;
        for (const r of rows) {
            cum += r.distance;
            r.cum_dist = cum;
        }
        for (const r of rows)
            r.drainage_area_sqmi = r.drainage_area_km2 * 0.386102;
        // 2. widths: formula baseline, optional override provider, 2x cap, backward smoothing
        for (const r of rows) {
            r.formula_width = estimateGeometryPayton(r.drainage_area_sqmi)[0];
            r.width_m = 0.0;
        }
        // braided-reach flag: any NHDPlus divergence within ~1 km (10 rows) — GLOW widths
        // there measure total wetted width across bars, inflating A and killing velocity
        {
            const W = 10;
            for (let i = 0; i < n; i++) {
                let braided = false;
                for (let k = Math.max(0, i - W); k <= Math.min(n - 1, i + W); k++) {
                    if (rows[k].divergence > 0) {
                        braided = true;
                        break;
                    }
                }
                rows[i].braided = braided;
            }
            const nb = rows.filter((r) => r.braided).length;
            if (nb)
                log(`  braided flag: ${nb}/${n} trace points near channel divergences (GLOW override disabled there)`);
        }
        if (cfg.widthProvider) {
            // HR NHDPlusID != MR comid — sample spatially, in windows; never let the
            // override kill the run (degrade to formula widths).
            let mids = [];
            try {
                const STEP = cfg.widthWindowPoints;
                const pad = 0.03;
                for (let i0 = 0; i0 < n; i0 += STEP) {
                    const win = rows.slice(i0, i0 + STEP);
                    const env = {
                        xmin: Math.min(...win.map((r) => r.lon)) - pad,
                        ymin: Math.min(...win.map((r) => r.lat)) - pad,
                        xmax: Math.max(...win.map((r) => r.lon)) + pad,
                        ymax: Math.max(...win.map((r) => r.lat)) + pad,
                    };
                    const feats = yield cfg.widthProvider(env); // [{lat, lon, width}]
                    mids.push(...feats);
                }
            }
            catch (e) {
                log(`  WIDTH OVERRIDE FAILED (${String(e).slice(0, 80)}) - falling back to formula widths`);
                mids = [];
            }
            if (mids.length) {
                for (const r of rows) {
                    if (r.braided) {
                        r.width_m = 0.0;
                        continue;
                    } // formula width on braided reaches
                    let bestD = Infinity, bestW = 0;
                    for (const m of mids) {
                        const d = haversineM(r.lat, r.lon, m.lat, m.lon);
                        if (d < bestD) {
                            bestD = d;
                            bestW = m.width || 0;
                        }
                    }
                    r.width_m = bestD <= cfg.widthSampleRadiusM ? bestW : 0.0;
                }
                const matched = rows.filter((r) => r.width_m > 0).length;
                log(`  GLOW spatial sample: ${mids.length} HR segments, widths matched at ${matched}/${n} trace points`);
            }
        }
        for (const r of rows) {
            r.width_final_raw =
                r.width_m > 0 && r.width_m <= r.formula_width * 2.0 ? r.width_m : r.formula_width;
        }
        // pandas rolling(window=51, min_periods=1).mean() — trailing window
        {
            const W = 51;
            let sum = 0;
            for (let i = 0; i < n; i++) {
                sum += rows[i].width_final_raw;
                if (i >= W)
                    sum -= rows[i - W].width_final_raw;
                rows[i].width_final = sum / Math.min(i + 1, W);
            }
        }
        // 3. discharge inputs: NLDI downstream gauges -> NWIS Q (+DA), located on trace
        const gauges = yield nldiGauges(comid, cfg.maxDistanceKm, "DM");
        // upstream-anchor candidates: nearest UM gauges (fixes the discontinuity when
        // the click is just below a gauge and DM navigation no longer sees it)
        let upCands = [];
        if (cfg.upstreamGaugeKm > 0) {
            try {
                const dmIds = new Set(gauges.map((g) => g.station_id));
                upCands = (yield nldiGauges(comid, cfg.upstreamGaugeKm, "UM"))
                    .filter((u) => !dmIds.has(u.station_id))
                    .map((u) => (Object.assign(Object.assign({}, u), { upstream_m: haversineM(lat, lon, u.lat, u.lon) })))
                    .filter((u) => u.upstream_m <= cfg.upstreamGaugeKm * 1000)
                    .sort((a, b) => a.upstream_m - b.upstream_m);
            }
            catch (e) {
                log(`  UM gauge lookup failed (${String(e).slice(0, 80)}) — no upstream anchor`);
            }
        }
        const allIds = [...new Set([...gauges, ...upCands].map((g) => g.station_id))];
        const ginfo = yield gaugeInfo(allIds, cfg.asOf, cfg.gaugeStatFallback);
        const gd = [];
        for (const g of gauges) {
            const i = ginfo.get(g.station_id) || {};
            if (i.discharge === undefined || !i.drainage_area)
                continue;
            let bestD = Infinity, idx = 0;
            for (let k = 0; k < n; k++) {
                const d = haversineM(rows[k].lat, rows[k].lon, g.lat, g.lon);
                if (d < bestD) {
                    bestD = d;
                    idx = k;
                }
            }
            if (bestD > 5000)
                continue; // gauge not on our trace corridor
            const [w, dep] = estimateGeometryPayton(i.drainage_area);
            gd.push(Object.assign(Object.assign({}, g), { discharge: i.discharge, drainage_area: i.drainage_area, q_source: i.q_source || "iv", area: w * dep, trace_dist: rows[idx].cum_dist }));
        }
        gd.sort((a, b) => a.trace_dist - b.trace_dist);
        // median-flow gauges are a rescue, not a supplement: with ANY live gauge on
        // the trace, live-only interpolation beats splicing a historical median into
        // the profile (median != today's flow in runoff or drought). They engage
        // only on a full feed outage or a pre-IV-era asOf date.
        if (gd.some((g) => g.q_source === "iv") && gd.some((g) => g.q_source === "stat-p50")) {
            const dropped = gd.filter((g) => g.q_source === "stat-p50").map((g) => g.station_id);
            log(`  median-fallback gauges suppressed (live gauges available): ${dropped.join(", ")}`);
            for (let i = gd.length - 1; i >= 0; i--)
                if (gd[i].q_source === "stat-p50")
                    gd.splice(i, 1);
        }
        const spillDaSqmi = rows[0].drainage_area_sqmi;
        for (const u of upCands) {
            const i = ginfo.get(u.station_id) || {};
            if (i.discharge === undefined || !i.drainage_area)
                continue;
            // same rescue-only rule for the upstream anchor: no median anchors when
            // live gauges are on the trace
            if ((i.q_source || "iv") === "stat-p50" && gd.some((g) => g.q_source === "iv"))
                continue;
            if (mergeUpstreamAnchor(gd, Object.assign(Object.assign({}, u), { discharge: i.discharge, drainage_area: i.drainage_area, q_source: i.q_source || "iv" }), spillDaSqmi)) {
                log(`  upstream anchor ${u.station_id} ${u.name.slice(0, 30)}: ${Math.round(i.discharge)} cfs ` +
                    `@ ${(u.upstream_m / 1000).toFixed(1)} km upstream -> ${Math.round(i.discharge * (spillDaSqmi / i.drainage_area))} cfs ` +
                    `at spill point (DA x${(spillDaSqmi / i.drainage_area).toFixed(2)})`);
                break;
            }
            // an on-trace gauge near the start already anchors the boundary — stop looking
            if (gd.some((g) => !g.upstream_anchor && g.trace_dist <= 500))
                break;
        }
        for (const g of gd) {
            log(`  gauge ${g.station_id} ${g.name.slice(0, 38).padEnd(38)} ${String(Math.round(g.discharge)).padStart(8)} cfs @ ${(g.trace_dist / 1000).toFixed(1).padStart(6)} km${g.upstream_anchor ? " (upstream anchor)" : ""}${g.q_source === "stat-p50" ? " (MEDIAN fallback)" : ""}`);
        }
        // 4. site/receptor features (fetched in parallel; joined in computeTrace)
        const fetchSets = (providers) => __awaiter(this, void 0, void 0, function* () {
            return Promise.all((providers || []).map((p) => __awaiter(this, void 0, void 0, function* () {
                var _c;
                return ({
                    buffer_m: (_c = p.buffer_m) !== null && _c !== void 0 ? _c : 400,
                    feats: yield p.fetch(), // [{name, lat, lon, ...extra}]
                });
            })));
        });
        const [siteSets, receptorSets] = yield Promise.all([fetchSets(cfg.siteProviders), fetchSets(cfg.receptorProviders)]);
        return {
            lat, lon, comid, snapName, snapDistM: snapD, riverName,
            rows, gd, siteSets, receptorSets,
            asOf: cfg.asOf || "live",
            fetchedAt: new Date().toISOString(),
        };
    });
}
// ---------------------------------------------------------------- Jobson (USGS WRIR 96-4013)
//
// Dye-tracer regressions from ~980 subreaches / ~90 US rivers. Units: Da m^2,
// Q & Qa m^3/s, S dimensionless, velocities m/s. Eq 12/13 (with slope) or
// 14/15 (without). Leading edge Tl = 0.890 x Tp (eq 18). Passage: unit-peak
// concentration Cup = 857 x Tp^-0.760 x Q'a^-0.079 (Tp hours, eq 7), and
// Td10 = 2e6 / Cup seconds (eq 19) = leading edge -> 10%-of-peak trailing.
function jobsonVelocities(daM2, Qm3s, QaM3s, slope) {
    if (!(daM2 > 0) || !(Qm3s > 0) || !(QaM3s > 0))
        return null;
    const g = 9.8;
    const Dp = (Math.pow(daM2, 1.25) * Math.sqrt(g)) / QaM3s; // D'a, eq 10
    const Qp = Qm3s / QaM3s; // Q'a, eq 11
    const qOverDa = Qm3s / daM2;
    let vp, vmp;
    if (slope > 0.00001) {
        const X = Math.pow(Dp, 0.919) * Math.pow(Qp, -0.469) * Math.pow(slope, 0.159) * qOverDa;
        vp = 0.094 + 0.0143 * X; // eq 12
        vmp = 0.25 + 0.02 * X; // eq 13 (99% envelope — fastest probable)
    }
    else {
        const X = Math.pow(Dp, 0.821) * Math.pow(Qp, -0.465) * qOverDa;
        vp = 0.020 + 0.051 * X; // eq 14
        vmp = 0.2 + 0.093 * X; // eq 15
    }
    return { vp, vmp, qPrime: Qp };
}
function jobsonPassageHours(tpHours, qPrime) {
    // eq 7 + eq 19: duration from leading edge to 10%-of-peak trailing edge
    if (!(tpHours > 0) || !(qPrime > 0))
        return null;
    const cup = 857 * Math.pow(tpHours, -0.760) * Math.pow(qPrime, -0.079); // s^-1
    return 2e6 / cup / 3600;
}
function computeTrace(data, config = {}) {
    const cfg = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
    const log = cfg.verbose ? (...a) => console.log(...a) : () => { };
    const { comid, riverName, rows, gd, siteSets, receptorSets } = data;
    const n = rows.length;
    // 5. discharge: interpolate along trace
    // month for EROM lookups: as_of month if pinned, else current
    const eromMonth = data.asOf && data.asOf !== "live"
        ? parseInt(data.asOf.slice(5, 7), 10)
        : new Date().getMonth() + 1;
    let qMethod, qConfidence;
    const anchored = gd.some((g) => g.upstream_anchor);
    let qInterpUsed = null;
    if (gd.length >= 2) {
        const daQ = cfg.qInterp === "drainage-area" ? daWeightedQ(gd) : null;
        if (daQ) {
            // interpolate on the running-max DA: ArtificialPath/divergence reaches can
            // carry 0/dipping totdasqkm, which must not crater Q mid-trace
            if (daQ.kept.length < gd.length)
                log(`  DA interp: dropped ${gd.length - daQ.kept.length} gauge(s) with non-monotonic NWIS DA`);
            let runMax = 0;
            for (const r of rows) {
                runMax = Math.max(runMax, r.drainage_area_sqmi);
                r.Q_cfs = Math.max(daQ.q(runMax), 1.0);
            }
            qMethod = anchored ? "gauge-DA-interpolation+upstream-anchor" : "gauge-DA-interpolation";
            qInterpUsed = "drainage-area";
        }
        else {
            if (cfg.qInterp === "drainage-area")
                log("  DA interp unavailable (<2 monotonic gauge DAs) — falling back to distance interpolation");
            const fQ = interpClamped(gd.map((g) => g.trace_dist), gd.map((g) => g.discharge));
            for (const r of rows)
                r.Q_cfs = Math.max(fQ(r.cum_dist), 1.0);
            qMethod = anchored ? "gauge-interpolation+upstream-anchor" : "gauge-interpolation";
            qInterpUsed = "distance";
        }
        qConfidence = "HIGH";
    }
    else if (gd.length === 1) {
        const g = gd[0];
        for (const r of rows) {
            r.Q_cfs = Math.max(g.discharge * (r.drainage_area_sqmi / g.drainage_area), 1.0);
        }
        qMethod = anchored ? "upstream-anchor-DA-ratio" : "single-gauge-DA-ratio";
        qConfidence = "MEDIUM";
        log("  1 gauge: scaling by drainage-area ratio");
    }
    else {
        // EROM per-reach monthly modeled flow (gauge-adjusted; captures seasonal
        // yield — Montana June vs September differs ~5x) before the flat constant
        const eromOk = rows.filter((r) => r.qe_monthly && r.qe_monthly[eromMonth] > 0).length;
        if (eromOk >= rows.length * 0.8) {
            for (const r of rows) {
                const qe = r.qe_monthly ? r.qe_monthly[eromMonth] : null;
                r.Q_cfs = Math.max(qe > 0 ? qe : r.drainage_area_sqmi * 2.0, 1.0);
            }
            qMethod = `erom-monthly (month ${eromMonth})`;
            qConfidence = "MODERATE — modeled flow, no live gauge";
            log(`  NO gauges: EROM monthly modeled flow (month ${eromMonth}, ${eromOk}/${rows.length} reaches)`);
        }
        else {
            for (const r of rows)
                r.Q_cfs = Math.max(r.drainage_area_sqmi * 2.0, 1.0);
            qMethod = "drainage-area-constant";
            qConfidence = "LOW CONFIDENCE — NO GAUGE";
            log("  NO gauges, no EROM: Q ~ 2 cfs per sq mi drainage — LOW CONFIDENCE");
        }
    }
    // 4. Manning's depth per point (formula fallback), V = Q/A, safety factor
    const CFS_TO_M3S = Math.pow(3.281, 3);
    let ok = 0;
    for (const r of rows) {
        r.Q_m3s = r.Q_cfs / CFS_TO_M3S;
        const depthFormula = estimateGeometryPayton(r.drainage_area_sqmi)[1];
        const dm = calculateDepthManning(r.Q_m3s, r.width_final, r.slope, cfg.manningN);
        if (dm !== null && dm > 0.1 && dm < 20) {
            r.depth = dm;
            ok++;
        }
        else
            r.depth = depthFormula;
        r.area = r.width_final * r.depth;
        r.velocity = (r.Q_m3s / r.area) * cfg.safetyFactor;
    }
    log(`  Manning's depth: ${ok}/${n} points (${Math.round((100 * ok) / n)}%)`);
    // 5. impoundment rule: flowline passes through a LakePond/Reservoir waterbody
    // (minus known REMOVED dams whose waterbody flags linger in NHDPlus)
    const excluded = new Set([...REMOVED_IMPOUNDMENT_COMIDS, ...(cfg.impoundExcludeComids || [])]);
    let stopIdx = null, runM = 0.0;
    for (let i = 0; i < rows.length; i++) {
        const imp = (rows[i].wbareatype === "LakePond" || rows[i].wbareatype === "Reservoir") &&
            !excluded.has(rows[i].comid);
        rows[i].impounded = imp;
        if (imp) {
            runM += rows[i].distance;
            if (runM >= cfg.impoundStopKm * 1000) {
                stopIdx = i;
                break;
            }
        }
        else
            runM = 0.0;
    }
    let impoundNote = null;
    let df = rows;
    if (stopIdx !== null) {
        const name = rows[stopIdx].gnis_name || "impoundment";
        impoundNote =
            `Trace reaches an impounded reach (${name}) at ` +
                `${(rows[stopIdx].cum_dist / 1000).toFixed(1)} km — travel time beyond ` +
                `this point is NOT modeled (reservoir transit).`;
        df = rows.slice(0, stopIdx + 1);
        log(`  IMPOUNDMENT STOP: ${impoundNote}`);
    }
    // 6. travel time, cutoff, hourly markers
    const jobson = cfg.timingModel === "jobson";
    const CFS = Math.pow(3.281, 3);
    let cumT = 0.0, tPeak = 0.0, tFast = 0.0, jobsonDegraded = 0;
    for (const r of df) {
        r.seg_time = r.distance / r.velocity;
        cumT += r.seg_time;
        r.cum_time = cumT / 3600; // hydraulic (x safety) — always computed; feeds legacy mode
        if (jobson) {
            const daM2 = (r.drainage_area_km2 || 0) * 1e6;
            const QaM3s = r.qe_ma > 0 ? r.qe_ma / CFS : null;
            const jv = QaM3s ? jobsonVelocities(daM2, r.Q_m3s, QaM3s, r.slope) : null;
            let vp, vmp, qPrime;
            if (jv) {
                ({ vp, vmp, qPrime } = jv);
            }
            else {
                vp = r.velocity / cfg.safetyFactor;
                vmp = vp * 2;
                qPrime = 1;
                jobsonDegraded++;
            }
            tPeak += r.distance / vp;
            tFast += r.distance / vmp;
            r.t_peak = tPeak / 3600;
            r.t_lead = 0.890 * r.t_peak; // eq 18 — most probable first arrival
            r.t_lead_min = 0.890 * (tFast / 3600); // 99% envelope — earliest credible arrival
            const td10 = jobsonPassageHours(r.t_peak, qPrime);
            r.t_clear = td10 !== null ? r.t_lead + td10 : null; // 10%-of-peak trailing edge
        }
    }
    if (jobson && jobsonDegraded)
        log(`  Jobson: ${jobsonDegraded} points lacked EROM Qa (hydraulic fallback)`);
    const timeOf = (r) => (jobson ? r.t_lead : r.cum_time);
    df = df.filter((r) => timeOf(r) < cfg.maxHours);
    const maxCumTime = df.length ? timeOf(df[df.length - 1]) : 0;
    const nearestRow = (field, target) => {
        let bestD = Infinity, i = 0;
        for (let k = 0; k < df.length; k++) {
            const d = Math.abs(df[k][field] - target);
            if (d < bestD) {
                bestD = d;
                i = k;
            } // first occurrence of min (pandas idxmin)
        }
        return i;
    };
    const hourly = [];
    for (let hour = 1; hour <= cfg.maxHours; hour++) {
        if (maxCumTime < hour && Math.abs(maxCumTime - hour) > 0.5)
            break;
        const i = nearestRow(jobson ? "t_lead" : "cum_time", hour);
        const h = {
            hour,
            lat: df[i].lat, lon: df[i].lon,
            cum_dist_km: df[i].cum_dist / 1000,
            velocity_mph: df[i].velocity * 2.23694,
        };
        if (jobson) {
            // band at this hour: bulk (peak) position .. farthest credible (99% leading)
            const iPeak = nearestRow("t_peak", hour);
            const iFar = nearestRow("t_lead_min", hour);
            h.band = {
                peak: { i: iPeak, lat: df[iPeak].lat, lon: df[iPeak].lon, cum_dist_km: df[iPeak].cum_dist / 1000 },
                fastest: { i: iFar, lat: df[iFar].lat, lon: df[iFar].lon, cum_dist_km: df[iFar].cum_dist / 1000 },
            };
        }
        hourly.push(h);
    }
    // 7. site ETAs + receptor warnings (nearest trace point within buffer);
    // features were pre-fetched into data.siteSets/receptorSets
    function proximity(set) {
        var _c;
        const feats = set.feats; // [{name, lat, lon, ...extra}]
        const buf = (_c = set.buffer_m) !== null && _c !== void 0 ? _c : 400;
        const out = [];
        for (const f of feats) {
            if (f.lat === undefined || f.lon === undefined)
                continue;
            let bestD = Infinity, i = 0;
            for (let k = 0; k < df.length; k++) {
                const d = haversineM(df[k].lat, df[k].lon, f.lat, f.lon);
                if (d < bestD) {
                    bestD = d;
                    i = k;
                }
            }
            if (bestD <= buf) {
                const { lat: _a, lon: _b } = f, rest = __rest(f, ["lat", "lon"]);
                const row = Object.assign(Object.assign({}, rest), { eta_hr: Math.round(timeOf(df[i]) * 100) / 100, dist_km: Math.round((df[i].cum_dist / 1000) * 10) / 10, offset_m: Math.round(bestD), 
                    // modeled hydraulics at the site's trace point — feeds boom sizing
                    river_width_m: Math.round(df[i].width_final * 10) / 10, velocity_ms: Math.round(df[i].velocity * 1000) / 1000, depth_m: Math.round(df[i].depth * 100) / 100 });
                if (jobson) {
                    row.eta_early_hr = Math.round(df[i].t_lead_min * 100) / 100;
                    row.eta_peak_hr = Math.round(df[i].t_peak * 100) / 100;
                    row.clear_hr = df[i].t_clear !== null ? Math.round(df[i].t_clear * 100) / 100 : null;
                }
                out.push(row);
            }
        }
        out.sort((a, b) => a.eta_hr - b.eta_hr);
        return out;
    }
    const sites = [];
    for (const s of siteSets || [])
        sites.push(...proximity(s));
    sites.sort((a, b) => a.eta_hr - b.eta_hr);
    const warnings = impoundNote ? [impoundNote] : [];
    if (qConfidence !== "HIGH")
        warnings.unshift(`Flow estimate: ${qConfidence} (${qMethod})`);
    {
        const statG = gd.filter((g) => g.q_source === "stat-p50");
        if (statG.length) {
            warnings.unshift(`Gauge feed down: ${statG.map((g) => g.station_id).join(", ")} using ` +
                `period-of-record MEDIAN flow for this date — NOT live conditions`);
        }
    }
    for (const s of receptorSets || []) {
        for (const r of proximity(s)) {
            warnings.push(`Receptor '${r.name}' ~${r.offset_m} m off trace at hr ${r.eta_hr} (${r.dist_km} km downstream)`);
        }
    }
    const distanceKm = df.length ? df[df.length - 1].cum_dist / 1000 : 0;
    const avgVel = df.length ? df.reduce((s, r) => s + r.velocity, 0) / df.length : 0;
    const glowMatched = rows.filter((r) => r.width_m > 0).length;
    const braidedN = rows.filter((r) => r.braided).length;
    // provenance — enough to reconstruct any output in an after-action review
    const runRecord = {
        engine_version: ENGINE_VERSION,
        generated_at: new Date().toISOString(),
        data_fetched_at: data.fetchedAt || null,
        spill_point: { lat: data.lat, lon: data.lon },
        snap: { comid, river: riverName, snapped_from_m: data.snapDistM !== undefined ? Math.round(data.snapDistM || 0) : null },
        timing_model: cfg.timingModel,
        safety_factor: cfg.safetyFactor,
        max_hours: cfg.maxHours,
        as_of: data.asOf || "live",
        q_method: qMethod,
        q_confidence: qConfidence,
        q_interp: qInterpUsed,
        gauges: gd.map((g) => (Object.assign({ station_id: g.station_id, name: g.name, discharge_cfs: g.discharge, trace_km: Math.round(g.trace_dist / 100) / 10, q_source: g.q_source || "iv" }, (g.upstream_anchor ? {
            upstream_anchor: true,
            anchor_gauge_q_cfs: g.anchor_gauge_q_cfs,
            anchor_gauge_da_sqmi: g.anchor_gauge_da_sqmi,
            anchor_upstream_km: g.anchor_upstream_m !== null ? Math.round(g.anchor_upstream_m / 100) / 10 : null,
        } : {})))),
        erom_month: qMethod.startsWith("erom") ? eromMonth : null,
        width_source: { glow_matched_points: glowMatched, total_points: rows.length, braided_points_formula_width: braidedN },
        jobson_degraded_points: jobson ? jobsonDegraded : null,
        impound_exclusions_applied: [...excluded].filter((c) => rows.some((r) => r.comid === c)),
        impound_stop_km: stopIdx !== null ? Math.round(rows[stopIdx].cum_dist / 100) / 10 : null,
    };
    const result = {
        river_name: riverName,
        comid,
        as_of: data.asOf || "live",
        safety_factor: cfg.safetyFactor,
        timing_model: cfg.timingModel,
        q_method: qMethod,
        q_confidence: qConfidence,
        gauges_used: gd.map((g) => ({
            station_id: g.station_id, name: g.name,
            discharge: g.discharge, trace_dist: g.trace_dist,
        })),
        distance_km_24h: distanceKm,
        avg_velocity_mph: avgVel * 2.23694,
        impound_stop: impoundNote,
        hourly,
        sites,
        warnings,
        runRecord,
        trace: df, // full row array for inspection/geojson export
    };
    log(`  RESULT: ${distanceKm.toFixed(1)} km in <= ${cfg.maxHours} h, ` +
        `avg ${result.avg_velocity_mph.toFixed(2)} mph, ${sites.length} sites, ${warnings.length} warnings`);
    return result;
}
function runTrace(lat_1, lon_1) {
    return __awaiter(this, arguments, void 0, function* (lat, lon, config = {}) {
        const data = yield fetchTraceData(lat, lon, config);
        return computeTrace(data, config);
    });
}
/**
 * Boom sizing from modeled hydraulics (planning-level, for GRPs that carry no
 * equipment quantities). Standard containment rule: oil entrains under a boom
 * when the flow component normal to it exceeds ~0.35 m/s (0.7 kt), so in
 * faster water the boom is angled with sin(theta) = entrainment/velocity and
 * the required length grows to width/sin(theta). Anchor sets from length.
 * Angles below ~15 deg (v > ~1.35 m/s) are flagged: use cascaded shorter booms.
 */
function estimateBoomNeeds(widthM, velocityMs, opts = {}) {
    var _c, _d, _e;
    const entrain = (_c = opts.entrainmentMs) !== null && _c !== void 0 ? _c : 0.35;
    const reservePct = (_d = opts.reservePct) !== null && _d !== void 0 ? _d : 20;
    const anchorSpacingFt = (_e = opts.anchorSpacingFt) !== null && _e !== void 0 ? _e : 100;
    if (!(widthM > 0) || !(velocityMs >= 0))
        return null;
    const sinTheta = velocityMs > entrain ? entrain / velocityMs : 1;
    const angleDeg = (Math.asin(sinTheta) * 180) / Math.PI;
    const lengthFt = (widthM / sinTheta) * 3.28084 * (1 + reservePct / 100);
    const boomFt = Math.ceil(lengthFt / 50) * 50; // round up to 50-ft sticks
    const anchors = Math.max(2, Math.ceil(boomFt / anchorSpacingFt) + 1);
    return {
        boom_ft: boomFt,
        boom_angle_deg: Math.round(angleDeg),
        anchors,
        deflection: velocityMs > entrain,
        cascade_advised: angleDeg < 15, // too fast for a single sweep — cascade booms
    };
}
/** Trace line + hourly markers as a GeoJSON FeatureCollection (widget preview). */
function toGeoJson(result) {
    const df = result.trace;
    const fc = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                properties: {
                    kind: "trace", river: result.river_name,
                    distance_km_24h: result.distance_km_24h,
                },
                geometry: {
                    type: "LineString",
                    coordinates: df.map((r) => [
                        Math.round(r.lon * 1e6) / 1e6, Math.round(r.lat * 1e6) / 1e6,
                    ]),
                },
            },
        ],
    };
    for (const h of result.hourly) {
        fc.features.push({
            type: "Feature",
            properties: { kind: "hour", hour: h.hour, cum_dist_km: h.cum_dist_km, velocity_mph: h.velocity_mph },
            geometry: {
                type: "Point",
                coordinates: [Math.round(h.lon * 1e6) / 1e6, Math.round(h.lat * 1e6) / 1e6],
            },
        });
    }
    return fc;
}


/***/ },

/***/ "esri/Graphic"
/*!*******************************!*\
  !*** external "esri/Graphic" ***!
  \*******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Graphic__;

/***/ },

/***/ "esri/geometry/Point"
/*!**************************************!*\
  !*** external "esri/geometry/Point" ***!
  \**************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__;

/***/ },

/***/ "esri/geometry/Polyline"
/*!*****************************************!*\
  !*** external "esri/geometry/Polyline" ***!
  \*****************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polyline__;

/***/ },

/***/ "esri/geometry/geometryEngine"
/*!***********************************************!*\
  !*** external "esri/geometry/geometryEngine" ***!
  \***********************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__;

/***/ },

/***/ "esri/layers/FeatureLayer"
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__;

/***/ },

/***/ "esri/layers/GraphicsLayer"
/*!********************************************!*\
  !*** external "esri/layers/GraphicsLayer" ***!
  \********************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__;

/***/ },

/***/ "jimu-arcgis"
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/spill-trace/src/runtime/widget.tsx ***!
  \********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/layers/GraphicsLayer */ "esri/layers/GraphicsLayer");
/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/layers/FeatureLayer */ "esri/layers/FeatureLayer");
/* harmony import */ var esri_Graphic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/Graphic */ "esri/Graphic");
/* harmony import */ var esri_geometry_Polyline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/geometry/Polyline */ "esri/geometry/Polyline");
/* harmony import */ var esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/geometry/Point */ "esri/geometry/Point");
/* harmony import */ var esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/geometry/geometryEngine */ "esri/geometry/geometryEngine");
/* harmony import */ var _trace_engine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../trace-engine */ "./your-extensions/widgets/spill-trace/src/trace-engine.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Spill Trajectory widget — runtime.
 *
 * Click "Set spill point" → click the map → the golden-tested trace engine
 * (trace-engine.ts, parity-verified vs the Python oracle) draws an ephemeral
 * time-colored plume on a client-side GraphicsLayer with hourly markers,
 * plus an ETA-sorted strategy-site list and receptor warnings.
 * Nothing is persisted — Clear (or widget unmount) removes everything.
 */









const { useState, useRef, useCallback, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React;
// ETA color bands: <3 hr / 3–12 hr / 12–24 hr
const BAND_COLORS = [
    [3, '#d7191c'],
    [12, '#fdae61'],
    [24, '#2c7bb6'],
];
const bandColor = (hr) => {
    for (const [lim, c] of BAND_COLORS)
        if (hr < lim)
            return c;
    return '#2c7bb6';
};
const hexToRgb = (hex) => [
    parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16),
];
const normGuid = (v) => String(v || '').replace(/[{}]/g, '').toLowerCase();
/** Sum geodesic feet of drawn boom lines per site key (e.g. Snake Boom_Lines). */
function fetchDrawnBoom(cfg) {
    return __awaiter(this, void 0, void 0, function* () {
        const fl = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({ url: cfg.url });
        const q = fl.createQuery();
        q.where = cfg.where || '1=1';
        q.outFields = [cfg.siteKeyField];
        q.returnGeometry = true;
        q.outSpatialReference = { wkid: 4326 };
        const fs = yield fl.queryFeatures(q);
        const out = new Map();
        for (const f of fs.features) {
            const key = normGuid(f.attributes[cfg.siteKeyField]);
            if (!key || !f.geometry)
                continue;
            const ft = (0,esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_8__.geodesicLength)(f.geometry, 'feet');
            if (ft > 0)
                out.set(key, (out.get(key) || 0) + ft);
        }
        return out;
    });
}
const Widget = (props) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const [jmv, setJmv] = useState(null);
    const [arming, setArming] = useState(false);
    const [running, setRunning] = useState(false);
    const [status, setStatus] = useState('Click "Set spill point", then click the river.');
    const [result, setResult] = useState(null);
    const [safety, setSafety] = useState((_a = props.config.safetyFactor) !== null && _a !== void 0 ? _a : 1.5);
    const [diag, setDiag] = useState([]);
    const [hidden, setHidden] = useState(false);
    const layerRef = useRef(null);
    const clickHandleRef = useRef(null);
    // cached hydrology for the current spill point — safety-factor changes
    // recompute from this instantly instead of re-fetching NLDI/NWIS
    const cacheRef = useRef(null);
    // one graphics layer per widget lifetime; removed on unmount (ephemeral)
    useEffect(() => {
        return () => {
            if (clickHandleRef.current)
                clickHandleRef.current.remove();
            if (layerRef.current && jmv)
                jmv.view.map.remove(layerRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jmv]);
    const ensureLayer = (view) => {
        if (!layerRef.current) {
            layerRef.current = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_3__["default"]({ title: 'Spill trajectory (ephemeral)', listMode: 'hide' });
            view.map.add(layerRef.current);
        }
        return layerRef.current;
    };
    // ---- providers: wrap configured layers for the engine ----
    // Failures are reported to the diagnostics list instead of killing the trace.
    const makeSiteProvider = (lc, defaultBuffer, label, notes) => {
        var _a;
        return ({
            buffer_m: (_a = lc.bufferM) !== null && _a !== void 0 ? _a : defaultBuffer,
            fetch: () => __awaiter(void 0, void 0, void 0, function* () {
                var _a;
                try {
                    const fl = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({ url: lc.url });
                    const q = fl.createQuery();
                    q.where = lc.where || '1=1';
                    q.outFields = [lc.nameField, ...(lc.extraFields || [])];
                    q.returnGeometry = true;
                    q.outSpatialReference = { wkid: 4326 };
                    const fs = yield fl.queryFeatures(q);
                    const rows = fs.features
                        .filter((f) => f.geometry && f.geometry.type === 'point')
                        .map((f) => {
                        const g = f.geometry;
                        const row = { name: f.attributes[lc.nameField], lat: g.y, lon: g.x };
                        for (const ef of lc.extraFields || [])
                            row[ef] = f.attributes[ef];
                        return row;
                    });
                    notes.push(`${label}: ${rows.length} point features loaded (buffer ${(_a = lc.bufferM) !== null && _a !== void 0 ? _a : defaultBuffer} m)`);
                    return rows;
                }
                catch (e) {
                    notes.push(`${label} FAILED: ${String(e).slice(0, 100)}`);
                    return [];
                }
            }),
        });
    };
    const makeWidthProvider = () => {
        const wl = props.config.widthLayer;
        if (!wl || !wl.url)
            return null;
        const fl = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({ url: wl.url });
        return (env) => __awaiter(void 0, void 0, void 0, function* () {
            const q = fl.createQuery();
            q.where = wl.where || '1=1';
            q.geometry = Object.assign(Object.assign({ type: 'extent' }, env), { spatialReference: { wkid: 4326 } });
            q.spatialRelationship = 'intersects';
            q.outFields = [wl.widthField];
            q.returnGeometry = true;
            q.outSpatialReference = { wkid: 4326 };
            const fs = yield fl.queryFeatures(q);
            const mids = [];
            for (const f of fs.features) {
                const g = f.geometry;
                if (g && g.paths && g.paths.length) {
                    const p = g.paths[0];
                    const m = p[Math.floor(p.length / 2)];
                    mids.push({ lat: m[1], lon: m[0], width: f.attributes[wl.widthField] || 0 });
                }
            }
            return mids;
        });
    };
    // ---- drawing ----
    const draw = (view, res, spill) => {
        const layer = ensureLayer(view);
        layer.removeAll();
        // spill point
        layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
            geometry: new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({ latitude: spill.lat, longitude: spill.lon }),
            symbol: {
                type: 'simple-marker', style: 'x', size: 14,
                outline: { color: '#000', width: 3 },
            },
            popupTemplate: { title: 'Spill point', content: `${spill.lat.toFixed(5)}, ${spill.lon.toFixed(5)}` },
        }));
        // trace polyline, split into ETA color bands
        const rows = res.trace;
        let bandStart = 0;
        for (let i = 1; i <= rows.length; i++) {
            const done = i === rows.length;
            const bandChanged = !done && bandColor(rows[i].cum_time) !== bandColor(rows[bandStart].cum_time);
            if (done || bandChanged) {
                const seg = rows.slice(bandStart, Math.min(i + 1, rows.length));
                layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                    geometry: new esri_geometry_Polyline__WEBPACK_IMPORTED_MODULE_6__["default"]({ paths: [seg.map((r) => [r.lon, r.lat])], spatialReference: { wkid: 4326 } }),
                    symbol: { type: 'simple-line', color: bandColor(rows[bandStart].cum_time), width: 4 },
                }));
                bandStart = i;
            }
        }
        // Jobson uncertainty bands: translucent underlay from bulk (peak) position
        // to farthest credible (99% leading) position at each hour
        for (const h of res.hourly) {
            if (!h.band)
                continue;
            const i0 = Math.min(h.band.peak.i, h.band.fastest.i);
            const i1 = Math.max(h.band.peak.i, h.band.fastest.i);
            if (i1 <= i0)
                continue;
            const seg = rows.slice(i0, i1 + 1);
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: new esri_geometry_Polyline__WEBPACK_IMPORTED_MODULE_6__["default"]({ paths: [seg.map((r) => [r.lon, r.lat])], spatialReference: { wkid: 4326 } }),
                symbol: { type: 'simple-line', color: [...hexToRgb(bandColor(h.hour)), 0.28], width: 14, cap: 'round' },
            }));
        }
        // hourly markers + labels
        for (const h of res.hourly) {
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({ latitude: h.lat, longitude: h.lon }),
                symbol: {
                    type: 'simple-marker', size: 7, color: bandColor(h.hour),
                    outline: { color: '#fff', width: 1 },
                },
                popupTemplate: {
                    title: `Hour ${h.hour}`,
                    content: `${h.cum_dist_km.toFixed(1)} km downstream · ${h.velocity_mph.toFixed(1)} mph`,
                },
            }));
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({ latitude: h.lat, longitude: h.lon }),
                symbol: {
                    type: 'text',
                    text: `${h.hour} hr`,
                    color: bandColor(h.hour),
                    haloColor: '#ffffff',
                    haloSize: 1.5,
                    yoffset: 9,
                    font: { size: 10, weight: 'bold', family: 'sans-serif' },
                },
            }));
        }
    };
    // ---- model config + equipment + compute/render (pure, reusable on cached data) ----
    const modelCfg = (sf) => {
        var _a, _b, _c, _d;
        return ({
            safetyFactor: sf,
            timingModel: (_a = props.config.timingModel) !== null && _a !== void 0 ? _a : 'hydraulic',
            minStreamOrder: (_b = props.config.minStreamOrder) !== null && _b !== void 0 ? _b : 4,
            maxHours: (_c = props.config.maxHours) !== null && _c !== void 0 ? _c : 24,
            maxDistanceKm: (_d = props.config.maxDistanceKm) !== null && _d !== void 0 ? _d : 300,
            verbose: false,
        });
    };
    const applyEquipment = (res, drawn) => {
        var _a, _b, _c, _d, _e;
        const eq = props.config.equipment;
        if ((eq === null || eq === void 0 ? void 0 : eq.enabled) === false)
            return;
        const rules = {
            entrainmentMs: (_a = eq === null || eq === void 0 ? void 0 : eq.entrainmentMs) !== null && _a !== void 0 ? _a : 0.35,
            anchorSpacingFt: (_b = eq === null || eq === void 0 ? void 0 : eq.anchorSpacingFt) !== null && _b !== void 0 ? _b : 100,
            reservePct: (_c = eq === null || eq === void 0 ? void 0 : eq.reservePct) !== null && _c !== void 0 ? _c : 20,
        };
        for (const s of res.sites) {
            const key = normGuid((_e = (_d = s.GlobalID) !== null && _d !== void 0 ? _d : s.globalid) !== null && _e !== void 0 ? _e : s.GLOBALID);
            const drawnFt = key ? drawn.get(key) : undefined;
            if (drawnFt) {
                const boomFt = Math.ceil(drawnFt / 50) * 50;
                s.boom = {
                    boom_ft: boomFt,
                    anchors: Math.max(2, Math.ceil(boomFt / rules.anchorSpacingFt) + 1),
                    source: 'drawn',
                };
            }
            else {
                const est = (0,_trace_engine__WEBPACK_IMPORTED_MODULE_9__.estimateBoomNeeds)(s.river_width_m, s.velocity_ms, rules);
                if (est)
                    s.boom = Object.assign(Object.assign({}, est), { source: 'est' });
            }
        }
    };
    const computeAndRender = (sf, fromCache = false) => {
        var _a;
        const c = cacheRef.current;
        if (!c || !jmv)
            return;
        const res = (0,_trace_engine__WEBPACK_IMPORTED_MODULE_9__.computeTrace)(c.data, modelCfg(sf));
        applyEquipment(res, c.drawn);
        draw(jmv.view, res, { lat: c.lat, lon: c.lon });
        if (layerRef.current)
            layerRef.current.visible = true;
        setHidden(false);
        setResult(res);
        setDiag([...c.fetchNotes, `${res.sites.length} site(s) within buffer of the trace.`]);
        setStatus(`${res.river_name || 'Trace'} — ${res.distance_km_24h.toFixed(1)} km in ≤ ${(_a = props.config.maxHours) !== null && _a !== void 0 ? _a : 24} h` +
            (fromCache ? ' · recomputed instantly from cached hydrology' : ''));
    };
    // ---- run ----
    const armClick = useCallback(() => {
        if (!jmv || arming || running)
            return;
        setArming(true);
        setStatus('Click the spill location on the map…');
        clickHandleRef.current = jmv.view.on('click', (evt) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            clickHandleRef.current.remove();
            clickHandleRef.current = null;
            setArming(false);
            const mp = evt.mapPoint;
            const lat = mp.latitude, lon = mp.longitude;
            setRunning(true);
            setResult(null);
            setDiag([]);
            setStatus(`Tracing from ${lat.toFixed(4)}, ${lon.toFixed(4)}…`);
            const notes = [];
            try {
                const cfg = props.config;
                const siteLayers = (cfg.siteLayers || []);
                const receptorLayers = (cfg.receptorLayers || []);
                if (!siteLayers.length)
                    notes.push('No site layers configured — add them in the widget settings (Site layers JSON).');
                // fetch everything once (trace, flows, widths, site/receptor features)
                const data = yield (0,_trace_engine__WEBPACK_IMPORTED_MODULE_9__.fetchTraceData)(lat, lon, Object.assign(Object.assign({}, modelCfg(safety)), { widthProvider: makeWidthProvider(), siteProviders: siteLayers.map((lc, i) => makeSiteProvider(lc, 500, `Site layer ${i + 1}`, notes)), receptorProviders: receptorLayers.map((lc, i) => makeSiteProvider(lc, 800, `Receptor layer ${i + 1}`, notes)) }));
                // drawn boom lines: per-site-layer boomLayer (+ legacy global equipment.boomLayer)
                const drawn = new Map();
                const eq = cfg.equipment;
                if ((eq === null || eq === void 0 ? void 0 : eq.enabled) !== false) {
                    const boomCfgs = [];
                    for (const lc of siteLayers)
                        if ((_a = lc.boomLayer) === null || _a === void 0 ? void 0 : _a.url)
                            boomCfgs.push(lc.boomLayer);
                    if ((_b = eq === null || eq === void 0 ? void 0 : eq.boomLayer) === null || _b === void 0 ? void 0 : _b.url)
                        boomCfgs.push(eq.boomLayer);
                    const seen = new Set();
                    for (const bc of boomCfgs) {
                        const sig = `${bc.url}|${bc.siteKeyField}`;
                        if (seen.has(sig))
                            continue;
                        seen.add(sig);
                        try {
                            const m = yield fetchDrawnBoom(bc);
                            m.forEach((v, k) => drawn.set(k, (drawn.get(k) || 0) + v));
                            notes.push(`Boom lines (${sig.split('/').slice(-2)[0]}): drawn footage for ${m.size} site(s)`);
                        }
                        catch (e) {
                            notes.push(`Boom layer FAILED: ${String(e).slice(0, 90)}`);
                        }
                    }
                }
                cacheRef.current = { lat, lon, data, drawn, fetchNotes: notes.slice() };
                computeAndRender(safety);
            }
            catch (e) {
                setStatus(`Trace failed: ${String(e).slice(0, 120)}`);
                setDiag(notes);
            }
            finally {
                setRunning(false);
            }
        }));
    }, [jmv, arming, running, safety, props.config]);
    const clearAll = () => {
        if (clickHandleRef.current) {
            clickHandleRef.current.remove();
            clickHandleRef.current = null;
        }
        if (layerRef.current)
            layerRef.current.removeAll();
        cacheRef.current = null;
        setArming(false);
        setResult(null);
        setDiag([]);
        setHidden(false);
        setStatus('Cleared. Click "Set spill point" to run again.');
    };
    // briefing toggle: hide/show the trajectory graphics WITHOUT touching the
    // cached run — presenter can flip the model off during a slide and back
    const toggleVisible = () => {
        if (!layerRef.current)
            return;
        const v = !layerRef.current.visible;
        layerRef.current.visible = v;
        setHidden(!v);
    };
    const sites = (result === null || result === void 0 ? void 0 : result.sites) || [];
    const warnings = (result === null || result === void 0 ? void 0 : result.warnings) || [];
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "jimu-widget", style: { padding: 10, overflow: 'auto', fontSize: 13 }, children: [((_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: (v) => setJmv(v) })), !((_c = props.useMapWidgetIds) === null || _c === void 0 ? void 0 : _c.length) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#b00' }, children: "Select a Map widget in this widget's settings." })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', gap: 6, marginBottom: 8 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-primary btn-sm", disabled: !jmv || arming || running, onClick: armClick, children: arming ? 'Click the map…' : running ? 'Tracing…' : 'Set spill point' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: running, onClick: clearAll, children: "Clear" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: !result, onClick: toggleVisible, title: "Hide/show the trajectory on the map without losing the run (briefings)", children: hidden ? '👁 Show' : '👁 Hide' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: !result, title: "Copy run provenance record (JSON) for after-action documentation \u2014 includes a replay URL", onClick: () => {
                            if (!(result === null || result === void 0 ? void 0 : result.runRecord) || !cacheRef.current)
                                return;
                            const rec = Object.assign({}, result.runRecord);
                            const u = new URL('https://whitewaterrescue.github.io/wri-exb-widgets/embed/');
                            u.searchParams.set('config', 'all-grps');
                            u.searchParams.set('lat', cacheRef.current.lat.toFixed(5));
                            u.searchParams.set('lon', cacheRef.current.lon.toFixed(5));
                            u.searchParams.set('asOf', rec.as_of !== 'live' ? rec.as_of : rec.generated_at.slice(0, 10));
                            u.searchParams.set('sf', String(safety));
                            rec.replay_url = u.toString();
                            navigator.clipboard.writeText(JSON.stringify(rec, null, 1)).then(() => setStatus('Run record copied (includes replay_url).'));
                        }, children: "\u2398 Record" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { style: { marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }, title: "Safety factor \u2014 changing it re-runs instantly from cached hydrology", children: ["SF", (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { value: safety, disabled: running, onChange: (e) => {
                                    const v = parseFloat(e.target.value);
                                    setSafety(v);
                                    if (cacheRef.current && !running)
                                        computeAndRender(v, true);
                                }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 1.0, children: "1.0" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 1.25, children: "1.25" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 1.5, children: "1.5" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 2.0, children: "2.0" })] })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 8, minHeight: 18 }, children: [running && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "jimu-secondary-loading" }), " ", status] }), diag.length > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#888', fontSize: 11, marginBottom: 8 }, children: diag.map((d, i) => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: d }, i)) })), warnings.length > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { background: '#fff3cd', border: '1px solid #ffeeba', padding: 6, marginBottom: 8, borderRadius: 4 }, children: warnings.map((w, i) => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 2 }, children: ["\u26A0 ", w] }, i)) })), result && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 8, color: '#555' }, children: ["ETAs are estimates (\u00B120%), safety factor \u00D7", result.safety_factor, " applied \u2014 treat as bands, not appointments.", result.gauges_used.length
                        ? ` Flows: ${result.gauges_used.map((g) => g.station_id).join(', ')}.`
                        : ' No live gauges found — drainage-area flow estimate.'] })), sites.length > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { style: { width: '100%', borderCollapse: 'collapse' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { textAlign: 'left', borderBottom: '1px solid #ccc' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "ETA" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "Site" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "km" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "Boom" })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: sites.map((s, i) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { borderBottom: '1px solid #eee' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { padding: '2px 4px', whiteSpace: 'nowrap' }, title: s.eta_early_hr !== undefined
                                        ? `earliest credible ${s.eta_early_hr} hr · first arrival ${s.eta_hr} hr · peak ${s.eta_peak_hr} hr${s.clear_hr ? ` · clear ~${s.clear_hr} hr` : ''}`
                                        : '', children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: {
                                                display: 'inline-block', width: 10, height: 10, borderRadius: 5,
                                                background: bandColor(s.eta_hr), marginRight: 4,
                                            } }), s.eta_early_hr !== undefined
                                            ? `${s.eta_early_hr.toFixed(1)}–${s.eta_hr.toFixed(1)} hr`
                                            : s.eta_hr < 1 ? `${Math.round(s.eta_hr * 60)} min` : `${s.eta_hr.toFixed(1)} hr`] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { padding: '2px 4px' }, children: s.name }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { padding: '2px 4px' }, children: s.dist_km.toFixed(1) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { padding: '2px 4px', whiteSpace: 'nowrap' }, title: s.boom
                                        ? `${s.boom.anchors} anchor sets${s.boom.boom_angle_deg ? ` · ${s.boom.boom_angle_deg}° deployment` : ''}${s.boom.cascade_advised ? ' · fast water: cascade multiple booms' : ''} (${s.boom.source === 'drawn' ? 'from drawn boom lines' : 'estimated from modeled width/velocity'})`
                                        : '', children: s.boom
                                        ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [s.boom.boom_ft.toLocaleString(), " ft", s.boom.cascade_advised && ' ⚡', (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { color: '#999' }, children: [" ", s.boom.source === 'drawn' ? '✓' : 'est.'] })] })
                                        : '—' })] }, i))) }), sites.some((s) => s.boom) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tfoot", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { borderTop: '2px solid #ccc', fontWeight: 600 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { colSpan: 3, style: { padding: '3px 4px' }, children: ["Totals (", sites.filter((s) => s.boom).length, " boom sites)"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { padding: '3px 4px', whiteSpace: 'nowrap' }, children: [sites.reduce((t, s) => { var _a; return t + (((_a = s.boom) === null || _a === void 0 ? void 0 : _a.boom_ft) || 0); }, 0).toLocaleString(), " ft \u00B7", ' ', sites.reduce((t, s) => { var _a; return t + (((_a = s.boom) === null || _a === void 0 ? void 0 : _a.anchors) || 0); }, 0), " anchors"] })] }) }))] })), result && sites.some((s) => s.boom) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { color: '#777', marginTop: 4 }, children: ["\u2713 = drawn boom lines \u00B7 est. = sized from modeled width/velocity (boom angled to keep normal flow \u2264 ", ((_e = (_d = props.config.equipment) === null || _d === void 0 ? void 0 : _d.entrainmentMs) !== null && _e !== void 0 ? _e : 0.35), " m/s, +", (_g = (_f = props.config.equipment) === null || _f === void 0 ? void 0 : _f.reservePct) !== null && _g !== void 0 ? _g : 20, "% reserve) \u00B7 \u26A1 = fast water, cascade booms"] })), result && sites.length === 0 && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#777' }, children: "No configured sites within reach of this trace." })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zcGlsbC10cmFjZS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxjQUFjO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSSxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUM7QUFFdEMsTUFBTSxTQUFTLEdBQUcsaUNBQWlDLENBQUM7QUFDcEQsTUFBTSxTQUFTLEdBQUcsa0RBQWtELENBQUM7QUFDckUsTUFBTSxPQUFPLEdBQUcseUNBQXlDLENBQUM7QUFDMUQsTUFBTSxTQUFTLEdBQUcsMkNBQTJDLENBQUM7QUFDOUQsTUFBTSxTQUFTLEdBQUcsMkNBQTJDLENBQUM7QUFFOUQ7Ozs7R0FJRztBQUNJLE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxHQUFHLENBQUM7SUFDaEQsMEZBQTBGO0lBQzFGLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUTtDQUM3QixDQUFDLENBQUM7QUFFSSxNQUFNLGNBQWMsR0FBRztJQUM1QixhQUFhLEVBQUUsR0FBRztJQUNsQixRQUFRLEVBQUUsRUFBRTtJQUNaLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsY0FBYyxFQUFFLENBQUM7SUFDakIsYUFBYSxFQUFFLElBQUksRUFBUywyREFBMkQ7SUFDdkYsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixpQkFBaUIsRUFBRSxHQUFHLEVBQU0scURBQXFEO0lBQ2pGLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLGlCQUFpQixFQUFFLEVBQUU7SUFDckIsZUFBZSxFQUFFLEVBQUUsRUFBUywyREFBMkQ7SUFDdkYsT0FBTyxFQUFFLGVBQWUsRUFBSSw4RUFBOEU7SUFDMUcs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LE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDdEMsMEVBQUssS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLG1JQUVMLENBQUMsaUJBQUssQ0FBQyxNQUFNLENBQUMsU0FBUywwQ0FBRSxhQUFhLG1DQUFJLElBQUksQ0FBQyxhQUNqRixpQkFBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLDBDQUFFLFVBQVUsbUNBQUksRUFBRSw0REFDdEMsQ0FDUCxFQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSx5RUFBSyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGdFQUF1RCxJQUNqSCxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zcGlsbC10cmFjZS9zcmMvdHJhY2UtZW5naW5lLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9HcmFwaGljXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvaW50XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvbHlsaW5lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9lbW90aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zcGlsbC10cmFjZS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1ub2NoZWNrXG4vKipcbiAqIHRyYWNlLWVuZ2luZS5qcyDigJQgTmF0aW9uYWwgc3BpbGwgdHJhamVjdG9yeSBlbmdpbmUgKEpTIHBvcnQgb2Ygc3BpbGxfdHJhY2UucHkpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBGYWl0aGZ1bCBwb3J0IG9mIHRoZSBQeXRob24gb3JhY2xlLiBEZXBlbmRlbmN5LWZyZWUgRVNNOiBydW5zIGluIHBsYWluIE5vZGVcbiAqICg+PTE4LCBnbG9iYWwgZmV0Y2gpIGZvciBnb2xkZW4gdGVzdGluZyBhbmQgaW4gdGhlIGJyb3dzZXIgaW5zaWRlIHRoZSBFeEJcbiAqIHdpZGdldC4gTk8gQGFyY2dpcyBpbXBvcnRzIGhlcmUg4oCUIHRoZSB3aWRnZXQgd3JhcHMgdGhpcyBtb2R1bGUgYW5kIHN1cHBsaWVzXG4gKiBsYXllciBhY2Nlc3MgdGhyb3VnaCBpbmplY3RhYmxlIHByb3ZpZGVyczpcbiAqXG4gKiAgIGNvbmZpZy53aWR0aFByb3ZpZGVyKGVudmVsb3BlKSAgLT4gW3tsYXQsIGxvbiwgd2lkdGh9XSAgIChHTE9XIG1pZHBvaW50cyBpbiBiYm94KVxuICogICBjb25maWcuc2l0ZVByb3ZpZGVycyAgICAgICAgICAgIC0+IFt7bmFtZSwgYnVmZmVyX20sIGZldGNoOiBhc3luYyAoKSA9PiBbe25hbWUsIGxhdCwgbG9uLCAuLi5leHRyYX1dfV1cbiAqICAgY29uZmlnLnJlY2VwdG9yUHJvdmlkZXJzICAgICAgICAtPiBzYW1lIHNoYXBlIGFzIHNpdGVQcm92aWRlcnNcbiAqXG4gKiBQb3J0IGdvdGNoYXMgaG9ub3JlZCAoc2VlIFJFQURNRSk6XG4gKiAgIDEuIGdlb3NlcnZlciBDUUwgQkJPWCBpcyBsYXQsbG9uIGF4aXMgb3JkZXIgKEVQU0c6NDI2OSAvIFdGUyAyLjApXG4gKiAgIDIuIEhSIE5IRFBsdXNJRCAhPSBNUiBjb21pZCDigJQgd2lkdGhzIHNhbXBsZWQgc3BhdGlhbGx5LCBuZXZlciBJRC1qb2luZWRcbiAqICAgMy4gaW1wb3VuZG1lbnQgPSB3YmFyZWF0eXBlIGluIChMYWtlUG9uZCwgUmVzZXJ2b2lyKVxuICogICA0LiB3aWR0aCBvdmVycmlkZSBzYW1wbGVkIGluIHdpbmRvd3M7IGZhaWx1cmUgZGVncmFkZXMgdG8gZm9ybXVsYSB3aWR0aHNcbiAqICAgNS4gTkxESS9nZW9zZXJ2ZXIgZW1wdHktMjAwIC0+IHJldHJ5IDN4IHdpdGggYmFja29mZlxuICogICA2LiBzbmFwIGNsaWNrIHRvIHN0cmVhbW9yZGUgPj0gbWluU3RyZWFtT3JkZXJcbiAqL1xuXG5leHBvcnQgY29uc3QgRU5HSU5FX1ZFUlNJT04gPSBcIjEuNS4wXCI7XG5cbmNvbnN0IE5MRElfQkFTRSA9IFwiaHR0cHM6Ly9hcGkud2F0ZXIudXNncy5nb3YvbmxkaVwiO1xuY29uc3QgR0VPU0VSVkVSID0gXCJodHRwczovL2FwaS53YXRlci51c2dzLmdvdi9nZW9zZXJ2ZXIvd21hZGF0YS9vd3NcIjtcbmNvbnN0IE5XSVNfSVYgPSBcImh0dHBzOi8vd2F0ZXJzZXJ2aWNlcy51c2dzLmdvdi9ud2lzL2l2L1wiO1xuY29uc3QgTldJU19TSVRFID0gXCJodHRwczovL3dhdGVyc2VydmljZXMudXNncy5nb3Yvbndpcy9zaXRlL1wiO1xuY29uc3QgTldJU19TVEFUID0gXCJodHRwczovL3dhdGVyc2VydmljZXMudXNncy5nb3Yvbndpcy9zdGF0L1wiO1xuXG4vKipcbiAqIE5IRFBsdXMgTVIgd2F0ZXJib2R5IGZsYWdzIGxhZyByZWFsaXR5IOKAlCByZWFjaGVzIHRocm91Z2ggUkVNT1ZFRCBkYW1zIHN0aWxsXG4gKiBjYXJyeSB3YmFyZWF0eXBlIExha2VQb25kIGFuZCB3b3VsZCBmYWxzZS1zdG9wIHRoZSBjbG9jay4gS25vd24gcmVtb3ZhbHNcbiAqIGFyZSBleGNsdWRlZCBoZXJlIChleHRlbmRhYmxlIHBlci1ydW4gdmlhIGNvbmZpZy5pbXBvdW5kRXhjbHVkZUNvbWlkcykuXG4gKi9cbmV4cG9ydCBjb25zdCBSRU1PVkVEX0lNUE9VTkRNRU5UX0NPTUlEUyA9IG5ldyBTZXQoW1xuICAvLyBNaWxsdG93biBEYW0sIENsYXJrIEZvcmsgYXQgQm9ubmVyIE1UIOKAlCByZW1vdmVkIDIwMDgtMjAxMCAocmVwb3J0ZWQgYnkgQ29keSAyMDI2LTA3LTA3KVxuICAyNDI5MzEyMCwgMjQyOTMxMjIsIDI0MjkzMTI0LFxuXSk7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAgbWF4RGlzdGFuY2VLbTogMzAwLFxuICBtYXhIb3VyczogMjQsXG4gIHJlc29sdXRpb25NOiAxMDAuMCxcbiAgc2FmZXR5RmFjdG9yOiAxLjUsXG4gIG1hbm5pbmdOOiAwLjA0NSxcbiAgbWluU3RyZWFtT3JkZXI6IDQsXG4gIHdpZHRoUHJvdmlkZXI6IG51bGwsICAgICAgICAvLyBhc3luYyAoZW52IHt4bWluLHltaW4seG1heCx5bWF4fSkgPT4gW3tsYXQsIGxvbiwgd2lkdGh9XVxuICB3aWR0aFNhbXBsZVJhZGl1c006IDgwMCxcbiAgd2lkdGhXaW5kb3dQb2ludHM6IDEwMCwgICAgIC8vIHRyYWNlIHBvaW50cyBwZXIgb3ZlcnJpZGUgc2FtcGxpbmcgd2luZG93ICh+MTAga20pXG4gIHNpdGVQcm92aWRlcnM6IFtdLFxuICByZWNlcHRvclByb3ZpZGVyczogW10sXG4gIHVwc3RyZWFtR2F1Z2VLbTogMzAsICAgICAgICAvLyBzZWFyY2ggVU0gdGhpcyBmYXIgZm9yIGFuIHVwc3RyZWFtIGFuY2hvciBnYXVnZTsgMCA9IG9mZlxuICBxSW50ZXJwOiBcImRyYWluYWdlLWFyZWFcIiwgICAvLyAnZHJhaW5hZ2UtYXJlYScgKFEganVtcHMgYXQgY29uZmx1ZW5jZXMpIHwgJ2Rpc3RhbmNlJyAobGVnYWN5IGxpbmVhciBzbWVhcilcbiAgZ2F1Z2VTdGF0RmFsbGJhY2s6IHRydWUsICAgIC8vIGdhdWdlIElWIGZlZWQgZG93biAtPiBwZXJpb2Qtb2YtcmVjb3JkIG1lZGlhbiBkYWlseSBmbG93IChQYXl0b24ncyBnZXRfZGlzY2hhcmdlIHBhdHRlcm4pXG4gIGltcG91bmRTdG9wS206IDIuMCxcbiAgaW1wb3VuZEV4Y2x1ZGVDb21pZHM6IFtdLCAgIC8vIGV4dHJhIHJlbW92ZWQtZGFtIGNvbWlkcyBiZXlvbmQgUkVNT1ZFRF9JTVBPVU5ETUVOVF9DT01JRFNcbiAgdGltaW5nTW9kZWw6IFwiaHlkcmF1bGljXCIsICAgLy8gJ2h5ZHJhdWxpYycgKFY9US9BIHggc2FmZXR5KSB8ICdqb2Jzb24nIChVU0dTIFdSSVIgOTYtNDAxMyBkeWUtc3R1ZHkgcmVncmVzc2lvbnMpXG4gIGFzT2Y6IG51bGwsICAgICAgICAgICAgICAgICAvLyAnWVlZWS1NTS1ERCcgaGlzdG9yaWNhbCBROyBudWxsID0gbGl2ZVxuICB2ZXJib3NlOiB0cnVlLFxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzXG5cbmNvbnN0IFJfRUFSVEggPSA2MzcxMDA4Ljg7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXZlcnNpbmVNKGxhdDEsIGxvbjEsIGxhdDIsIGxvbjIpIHtcbiAgY29uc3QgcDEgPSAobGF0MSAqIE1hdGguUEkpIC8gMTgwO1xuICBjb25zdCBwMiA9IChsYXQyICogTWF0aC5QSSkgLyAxODA7XG4gIGNvbnN0IGRwID0gcDIgLSBwMTtcbiAgY29uc3QgZGwgPSAoKGxvbjIgLSBsb24xKSAqIE1hdGguUEkpIC8gMTgwO1xuICBjb25zdCBhID0gTWF0aC5zaW4oZHAgLyAyKSAqKiAyICsgTWF0aC5jb3MocDEpICogTWF0aC5jb3MocDIpICogTWF0aC5zaW4oZGwgLyAyKSAqKiAyO1xuICByZXR1cm4gMiAqIFJfRUFSVEggKiBNYXRoLmFzaW4oTWF0aC5zcXJ0KGEpKTtcbn1cblxuLyoqIFBheXRvbidzIHdpZHRoL2RlcHRoIGZvcm11bGFzIChmYWxsYmFjayB3aGVuIG5vIEdMT1cgZGF0YSkuIFZlcmJhdGltLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzdGltYXRlR2VvbWV0cnlQYXl0b24oZHJhaW5hZ2VBcmVhU3FNaSkge1xuICBsZXQgd2lkdGgsIGRlcHRoO1xuICBpZiAoZHJhaW5hZ2VBcmVhU3FNaSA8IDEwMCkge1xuICAgIHdpZHRoID0gMTAuMCAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MCwgMC41KTtcbiAgICBkZXB0aCA9IDAuNSAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MCwgMC4zKTtcbiAgfSBlbHNlIGlmIChkcmFpbmFnZUFyZWFTcU1pIDwgMTAwMCkge1xuICAgIHdpZHRoID0gNTAuMCAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MDAsIDAuNSk7XG4gICAgZGVwdGggPSAxLjUgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAwLCAwLjMpO1xuICB9IGVsc2Uge1xuICAgIHdpZHRoID0gMTUwLjAgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAwMCwgMC40KTtcbiAgICBkZXB0aCA9IDMuMCAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MDAwLCAwLjMpO1xuICB9XG4gIHJldHVybiBbd2lkdGgsIGRlcHRoXTtcbn1cblxuLyoqXG4gKiBNYW5uaW5nJ3MgZGVwdGggdmlhIGJpc2VjdGlvbiAoUHl0aG9uIHVzZWQgc2NpcHkgYnJlbnRxIG9uIFswLjEsIDIwXSkuXG4gKiBUaGUgcmVzaWR1YWwgaXMgbW9ub3RvbmljYWxseSBpbmNyZWFzaW5nIGluIGRlcHRoLCBzbyBiaXNlY3Rpb24gY29udmVyZ2VzIHRvXG4gKiB0aGUgc2FtZSByb290LiBSZXBsaWNhdGVzIGJyZW50cSdzIGZhaWx1cmUgbW9kZTogbm8gc2lnbiBjaGFuZ2UgYWNyb3NzIHRoZVxuICogYnJhY2tldCAtPiBudWxsIChjYWxsZXIgZmFsbHMgYmFjayB0byBmb3JtdWxhIGRlcHRoKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZURlcHRoTWFubmluZyhRbTNzLCB3aWR0aE0sIHNsb3BlLCBuID0gMC4wNDUpIHtcbiAgaWYgKFFtM3MgPD0gMCB8fCB3aWR0aE0gPD0gMCB8fCBzbG9wZSA8PSAwLjAwMDAxKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgcmVzaWR1YWwgPSAoZGVwdGgpID0+IHtcbiAgICBpZiAoZGVwdGggPD0gMC4wMSkgcmV0dXJuIC1RbTNzO1xuICAgIGNvbnN0IEEgPSB3aWR0aE0gKiBkZXB0aDtcbiAgICBjb25zdCBQID0gd2lkdGhNICsgMiAqIGRlcHRoO1xuICAgIGNvbnN0IFIgPSBBIC8gUDtcbiAgICByZXR1cm4gKDEgLyBuKSAqIEEgKiBNYXRoLnBvdyhSLCAyIC8gMykgKiBNYXRoLnNxcnQoc2xvcGUpIC0gUW0zcztcbiAgfTtcbiAgbGV0IGxvID0gMC4xLCBoaSA9IDIwLjA7XG4gIGxldCBmbG8gPSByZXNpZHVhbChsbyksIGZoaSA9IHJlc2lkdWFsKGhpKTtcbiAgaWYgKGZsbyA9PT0gMCkgcmV0dXJuIGxvO1xuICBpZiAoZmhpID09PSAwKSByZXR1cm4gaGk7XG4gIGlmIChmbG8gKiBmaGkgPiAwKSByZXR1cm4gbnVsbDsgLy8gYnJlbnRxIHJhaXNlcyAtPiBQeXRob24gcmV0dXJucyBOb25lXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICBjb25zdCBtaWQgPSAwLjUgKiAobG8gKyBoaSk7XG4gICAgY29uc3QgZm0gPSByZXNpZHVhbChtaWQpO1xuICAgIGlmIChmbSA9PT0gMCB8fCAoaGkgLSBsbykgLyAyIDwgMWUtMTApIHJldHVybiBtaWQ7XG4gICAgaWYgKGZsbyAqIGZtIDwgMCkgeyBoaSA9IG1pZDsgZmhpID0gZm07IH0gZWxzZSB7IGxvID0gbWlkOyBmbG8gPSBmbTsgfVxuICB9XG4gIHJldHVybiAwLjUgKiAobG8gKyBoaSk7XG59XG5cbmNvbnN0IHNsZWVwID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCBtcykpO1xuXG4vKiogR0VUL1BPU1Qgd2l0aCByZXRyeSDigJQgTkxESS9nZW9zZXJ2ZXIgaW50ZXJtaXR0ZW50bHkgcmV0dXJuIGVtcHR5IDIwMCBib2RpZXMuICovXG5hc3luYyBmdW5jdGlvbiBnZXRKc29uKHVybCwgeyBwYXJhbXMgPSBudWxsLCBkYXRhID0gbnVsbCwgdHJpZXMgPSAzLCB0aW1lb3V0TXMgPSA5MDAwMCB9ID0ge30pIHtcbiAgbGV0IGxhc3QgPSBudWxsO1xuICBmb3IgKGxldCBhdHRlbXB0ID0gMDsgYXR0ZW1wdCA8IHRyaWVzOyBhdHRlbXB0KyspIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3RybCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBjdHJsLmFib3J0KCksIHRpbWVvdXRNcyk7XG4gICAgICBsZXQgcmVzcDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgcmVzcCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxuICAgICAgICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyhkYXRhKS50b1N0cmluZygpLFxuICAgICAgICAgICAgc2lnbmFsOiBjdHJsLnNpZ25hbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBxcyA9IHBhcmFtcyA/IFwiP1wiICsgbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpLnRvU3RyaW5nKCkgOiBcIlwiO1xuICAgICAgICAgIHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwgKyBxcywgeyBzaWduYWw6IGN0cmwuc2lnbmFsIH0pO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuICAgICAgaWYgKCFyZXNwLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgJHtyZXNwLnN0YXR1c31gKTtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwLmpzb24oKTsgLy8gZW1wdHkgYm9keSAtPiBTeW50YXhFcnJvciAtPiByZXRyeVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxhc3QgPSBlO1xuICAgICAgYXdhaXQgc2xlZXAoMTUwMCAqIChhdHRlbXB0ICsgMSkpO1xuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYCR7dXJsfSBmYWlsZWQgYWZ0ZXIgJHt0cmllc30gdHJpZXM6ICR7bGFzdH1gKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VGV4dCh1cmwsIHBhcmFtcywgdGltZW91dE1zID0gMzAwMDApIHtcbiAgY29uc3QgY3RybCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IGN0cmwuYWJvcnQoKSwgdGltZW91dE1zKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2godXJsICsgXCI/XCIgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykudG9TdHJpbmcoKSwgeyBzaWduYWw6IGN0cmwuc2lnbmFsIH0pO1xuICAgIHJldHVybiBhd2FpdCByZXNwLnRleHQoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGF0YSBmZXRjaFxuXG4vKiogU25hcCB0byBuZWFyZXN0IHJlYWNoIHdpdGggc3RyZWFtb3JkZSA+PSBtaW5PcmRlciAoZ2Vvc2VydmVyIGJib3ggc2VhcmNoKS4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNuYXBDb21pZChsYXQsIGxvbiwgbWluT3JkZXIpIHtcbiAgY29uc3QgYm94ID0gMC4yO1xuICAvLyBOT1RFOiBFUFNHOjQyNjkgdW5kZXIgV0ZTIDIuMCB1c2VzIGxhdCxsb24gYXhpcyBvcmRlciBpbiBDUUwgQkJPWFxuICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihHRU9TRVJWRVIsIHtcbiAgICBkYXRhOiB7XG4gICAgICBzZXJ2aWNlOiBcIldGU1wiLCB2ZXJzaW9uOiBcIjIuMC4wXCIsIHJlcXVlc3Q6IFwiR2V0RmVhdHVyZVwiLFxuICAgICAgdHlwZU5hbWU6IFwid21hZGF0YTpuaGRmbG93bGluZV9uZXR3b3JrXCIsIG91dHB1dEZvcm1hdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBjcWxfZmlsdGVyOlxuICAgICAgICBgc3RyZWFtb3JkZSA+PSAke21pbk9yZGVyfSBBTkQgQkJPWCh0aGVfZ2VvbSxgICtcbiAgICAgICAgYCR7bGF0IC0gYm94fSwke2xvbiAtIGJveH0sJHtsYXQgKyBib3h9LCR7bG9uICsgYm94fSlgLFxuICAgICAgY291bnQ6IFwiNTAwXCIsXG4gICAgfSxcbiAgfSk7XG4gIGxldCBiZXN0ID0gbnVsbCwgYmVzdEQgPSBJbmZpbml0eTtcbiAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcbiAgICBjb25zdCBnID0gZi5nZW9tZXRyeTtcbiAgICBjb25zdCBwYXRocyA9IGcudHlwZSA9PT0gXCJMaW5lU3RyaW5nXCIgPyBbZy5jb29yZGluYXRlc10gOiBnLmNvb3JkaW5hdGVzO1xuICAgIGZvciAoY29uc3QgcGF0aCBvZiBwYXRocykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSArPSAzKSB7IC8vIGV2ZXJ5IDNyZCB2ZXJ0ZXhcbiAgICAgICAgY29uc3QgcCA9IHBhdGhbaV07XG4gICAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmVNKGxhdCwgbG9uLCBwWzFdLCBwWzBdKTtcbiAgICAgICAgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGJlc3QgPSBmLnByb3BlcnRpZXM7IH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGJlc3QgIT09IG51bGwpIHJldHVybiBbTnVtYmVyKGJlc3QuY29taWQpLCBiZXN0LmduaXNfbmFtZSA/PyBudWxsLCBiZXN0RF07XG4gIHJldHVybiBbYXdhaXQgbmxkaVBvc2l0aW9uQ29taWQobGF0LCBsb24pLCBudWxsLCBudWxsXTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbmxkaVBvc2l0aW9uQ29taWQobGF0LCBsb24pIHtcbiAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oYCR7TkxESV9CQVNFfS9saW5rZWQtZGF0YS9jb21pZC9wb3NpdGlvbmAsIHtcbiAgICBwYXJhbXM6IHsgY29vcmRzOiBgUE9JTlQoJHtsb259ICR7bGF0fSlgIH0sIHRpbWVvdXRNczogMzAwMDAsXG4gIH0pO1xuICByZXR1cm4gTnVtYmVyKGouZmVhdHVyZXNbMF0ucHJvcGVydGllcy5pZGVudGlmaWVyKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbmxkaURtRmxvd2xpbmVzKGNvbWlkLCBkaXN0YW5jZUttKSB7XG4gIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKGAke05MRElfQkFTRX0vbGlua2VkLWRhdGEvY29taWQvJHtjb21pZH0vbmF2aWdhdGlvbi9ETS9mbG93bGluZXNgLCB7XG4gICAgcGFyYW1zOiB7IGRpc3RhbmNlOiBTdHJpbmcoTWF0aC50cnVuYyhkaXN0YW5jZUttKSkgfSxcbiAgfSk7XG4gIGNvbnN0IGdlb21zID0gbmV3IE1hcCgpOyAvLyBjb21pZCAtPiBbcGF0aHNdIChbW2xvbixsYXRdLC4uLl0pXG4gIGZvciAoY29uc3QgZiBvZiBqLmZlYXR1cmVzIHx8IFtdKSB7XG4gICAgY29uc3QgY2lkID0gTnVtYmVyKGYucHJvcGVydGllcy5uaGRwbHVzX2NvbWlkKTtcbiAgICBjb25zdCBnID0gZi5nZW9tZXRyeTtcbiAgICBpZiAoZy50eXBlID09PSBcIkxpbmVTdHJpbmdcIikgZ2VvbXMuc2V0KGNpZCwgW2cuY29vcmRpbmF0ZXNdKTtcbiAgICBlbHNlIGlmIChnLnR5cGUgPT09IFwiTXVsdGlMaW5lU3RyaW5nXCIpIGdlb21zLnNldChjaWQsIGcuY29vcmRpbmF0ZXMpO1xuICB9XG4gIHJldHVybiBnZW9tcztcbn1cblxuYXN5bmMgZnVuY3Rpb24gbmxkaUdhdWdlcyhjb21pZCwgZGlzdGFuY2VLbSwgbW9kZSkge1xuICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihgJHtOTERJX0JBU0V9L2xpbmtlZC1kYXRhL2NvbWlkLyR7Y29taWR9L25hdmlnYXRpb24vJHttb2RlfS9ud2lzc2l0ZWAsIHtcbiAgICBwYXJhbXM6IHsgZGlzdGFuY2U6IFN0cmluZyhNYXRoLnRydW5jKGRpc3RhbmNlS20pKSB9LFxuICB9KTtcbiAgY29uc3Qgb3V0ID0gW107XG4gIGZvciAoY29uc3QgZiBvZiBqLmZlYXR1cmVzIHx8IFtdKSB7XG4gICAgY29uc3Qgc2lkID0gKGYucHJvcGVydGllcy5pZGVudGlmaWVyIHx8IFwiXCIpLnJlcGxhY2UoXCJVU0dTLVwiLCBcIlwiKTtcbiAgICBpZiAoc2lkLmxlbmd0aCA+IDE1KSBjb250aW51ZTsgLy8gY29vcmRpbmF0ZS1zdHlsZSBJRHMgKG5vdGVib29rIHJ1bGUpXG4gICAgb3V0LnB1c2goe1xuICAgICAgc3RhdGlvbl9pZDogc2lkLFxuICAgICAgbmFtZTogZi5wcm9wZXJ0aWVzLm5hbWUgfHwgXCJVbmtub3duXCIsXG4gICAgICBsYXQ6IGYuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMV0sXG4gICAgICBsb246IGYuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMF0sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNZXJnZSB0aGUgbmVhcmVzdCB1cHN0cmVhbSBtYWluLXN0ZW0gZ2F1Z2UgaW50byB0aGUgbG9jYXRlZC1nYXVnZSBsaXN0IGFzIGFcbiAqIHZpcnR1YWwgZ2F1Z2UgYXQgdGhlIHNwaWxsIHBvaW50ICh0cmFjZV9kaXN0IDApLiBXaXRob3V0IHRoaXMsIGNsaWNraW5nIGp1c3RcbiAqIERPV05TVFJFQU0gb2YgYSBnYXVnZSBkcm9wcyBpdCBmcm9tIHRoZSBETSBuYXZpZ2F0aW9uIGFuZCB0aGUgbmV4dCBnYXVnZSdzIFFcbiAqIGlzIGJhY2stY2xhbXBlZCBvbnRvIHRoZSBmaXJzdCByZWFjaCDigJQgd2lsZGx5IHdyb25nIHdoZW4gdGhhdCBnYXVnZSBzaXRzXG4gKiBiZWxvdyBhIG1ham9yIGNvbmZsdWVuY2UgKEdhbGxhdGluIGJlbG93IExvZ2FuIC0+IE1pc3NvdXJpIGF0IFRvc3RvbikuXG4gKiBRIGlzIHRyYW5zZmVycmVkIGJ5IGRyYWluYWdlLWFyZWEgcmF0aW8gKHN0YW5kYXJkIFVTR1MgdHJhbnNmZXIpLCB3aGljaCBhbHNvXG4gKiBrZWVwcyB0aGUgYW5jaG9yIGhvbmVzdCB3aGVuIHRoZSBVTSBwYXRoIGNyb3NzZXMgYSBjb25mbHVlbmNlOiB0aGUgcmF0aW9cbiAqIHNjYWxlcyBhIHRyaWJ1dGFyeSBnYXVnZSBiYWNrIHVwIHRvIHRoZSBmbG93IGF0IHRoZSBjbGljay5cbiAqIE5vLW9wIHdoZW4gYW4gb24tdHJhY2UgZ2F1Z2UgYWxyZWFkeSBzaXRzIHdpdGhpbiBhbmNob3JTa2lwTSBvZiB0aGUgc3RhcnRcbiAqIChpdCBhbHJlYWR5IGFuY2hvcnMgdGhlIGJvdW5kYXJ5KSwgdGhlIHN0YXRpb24gaXMgYWxyZWFkeSBsb2NhdGVkLCBvciB0aGVcbiAqIERBIHRyYW5zZmVyIGlzIG91dHNpZGUgaXRzIGNyZWRpYmxlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VVcHN0cmVhbUFuY2hvcihnZCwgdXAsIHNwaWxsRGFTcW1pLCB7IGFuY2hvclNraXBNID0gNTAwLCBkYVJhdGlvTWF4ID0gNCB9ID0ge30pIHtcbiAgaWYgKCF1cCB8fCAhKHVwLmRpc2NoYXJnZSA+PSAwKSB8fCAhKHVwLmRyYWluYWdlX2FyZWEgPiAwKSB8fCAhKHNwaWxsRGFTcW1pID4gMCkpIHJldHVybiBmYWxzZTtcbiAgaWYgKGdkLnNvbWUoKGcpID0+IGcuc3RhdGlvbl9pZCA9PT0gdXAuc3RhdGlvbl9pZCkpIHJldHVybiBmYWxzZTtcbiAgaWYgKGdkLnNvbWUoKGcpID0+IGcudHJhY2VfZGlzdCA8PSBhbmNob3JTa2lwTSkpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgcmF0aW8gPSBzcGlsbERhU3FtaSAvIHVwLmRyYWluYWdlX2FyZWE7XG4gIGlmIChyYXRpbyA8IDEgLyBkYVJhdGlvTWF4IHx8IHJhdGlvID4gZGFSYXRpb01heCkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBbdywgZGVwXSA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oc3BpbGxEYVNxbWkpO1xuICBnZC5wdXNoKHtcbiAgICBzdGF0aW9uX2lkOiB1cC5zdGF0aW9uX2lkLCBuYW1lOiB1cC5uYW1lLCBsYXQ6IHVwLmxhdCwgbG9uOiB1cC5sb24sXG4gICAgZGlzY2hhcmdlOiB1cC5kaXNjaGFyZ2UgKiByYXRpbywgZHJhaW5hZ2VfYXJlYTogc3BpbGxEYVNxbWksXG4gICAgcV9zb3VyY2U6IHVwLnFfc291cmNlIHx8IFwiaXZcIixcbiAgICBhcmVhOiB3ICogZGVwLCB0cmFjZV9kaXN0OiAwLjAsXG4gICAgdXBzdHJlYW1fYW5jaG9yOiB0cnVlLFxuICAgIGFuY2hvcl9nYXVnZV9xX2NmczogdXAuZGlzY2hhcmdlLCBhbmNob3JfZ2F1Z2VfZGFfc3FtaTogdXAuZHJhaW5hZ2VfYXJlYSxcbiAgICBhbmNob3JfdXBzdHJlYW1fbTogdXAudXBzdHJlYW1fbSA/PyBudWxsLFxuICB9KTtcbiAgZ2Quc29ydCgoYSwgYikgPT4gYS50cmFjZV9kaXN0IC0gYi50cmFjZV9kaXN0KTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKiBWQUFzIGZvciBhIGxpc3Qgb2YgQ09NSURzIGZyb20gVVNHUyBnZW9zZXJ2ZXIgKGJhdGNoZWQgUE9TVCkuICovXG5hc3luYyBmdW5jdGlvbiB2YWFCYXRjaChjb21pZHMpIHtcbiAgY29uc3Qgb3V0ID0gbmV3IE1hcCgpO1xuICBjb25zdCBDSFVOSyA9IDE1MDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21pZHMubGVuZ3RoOyBpICs9IENIVU5LKSB7XG4gICAgY29uc3QgY2h1bmsgPSBjb21pZHMuc2xpY2UoaSwgaSArIENIVU5LKTtcbiAgICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihHRU9TRVJWRVIsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VydmljZTogXCJXRlNcIiwgdmVyc2lvbjogXCIyLjAuMFwiLCByZXF1ZXN0OiBcIkdldEZlYXR1cmVcIixcbiAgICAgICAgdHlwZU5hbWU6IFwid21hZGF0YTpuaGRmbG93bGluZV9uZXR3b3JrXCIsXG4gICAgICAgIG91dHB1dEZvcm1hdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIGNxbF9maWx0ZXI6IGBjb21pZCBJTiAoJHtjaHVuay5qb2luKFwiLFwiKX0pYCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcbiAgICAgIGNvbnN0IHAgPSBmLnByb3BlcnRpZXM7XG4gICAgICAvLyBFUk9NIG1vbnRobHkgbW9kZWxlZCBmbG93IChnYXVnZS1hZGp1c3RlZCwgY2ZzKSDigJQgdW5nYXVnZWQgZmFsbGJhY2sgKyBKb2Jzb24gUWFcbiAgICAgIGNvbnN0IHFlID0ge307XG4gICAgICBmb3IgKGxldCBtID0gMTsgbSA8PSAxMjsgbSsrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBgcWVfJHtTdHJpbmcobSkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gICAgICAgIHFlW21dID0gcFtrXSA/PyBudWxsO1xuICAgICAgfVxuICAgICAgb3V0LnNldChOdW1iZXIocC5jb21pZCksIHtcbiAgICAgICAgaHlkcm9zZXE6IHAuaHlkcm9zZXEgPz8gbnVsbCxcbiAgICAgICAgc3RyZWFtb3JkZTogcC5zdHJlYW1vcmRlID8/IG51bGwsXG4gICAgICAgIHNsb3BlOiBwLnNsb3BlID8/IG51bGwsXG4gICAgICAgIHRvdGRhc3FrbTogcC50b3RkYXNxa20gPz8gbnVsbCxcbiAgICAgICAgZnR5cGU6IHAuZnR5cGUgPz8gbnVsbCxcbiAgICAgICAgZmNvZGU6IHAuZmNvZGUgPz8gbnVsbCxcbiAgICAgICAgZ25pc19uYW1lOiBwLmduaXNfbmFtZSA/PyBudWxsLFxuICAgICAgICAvLyBMYWtlUG9uZC9SZXNlcnZvaXIgPSBpbXBvdW5kZWQ7IFN0cmVhbVJpdmVyID0gYnJhaWRlZCBmcmVlLWZsb3dpbmdcbiAgICAgICAgd2JhcmVhdHlwZTogcC53YmFyZWF0eXBlID8/IG51bGwsXG4gICAgICAgIHZlX21hOiBwLnZlX21hID8/IG51bGwsXG4gICAgICAgIHFlX21hOiBwLnFlX21hID8/IG51bGwsICAgLy8gRVJPTSBtZWFuIGFubnVhbCBmbG93IChjZnMpIOKAlCBKb2Jzb24gUWFcbiAgICAgICAgcWVfbW9udGhseTogcWUsXG4gICAgICAgIC8vIE5IRFBsdXMgZGl2ZXJnZW5jZTogMCA9IG5vbmUsIDEgPSBtYWluIHBhdGgsIDIgPSBtaW5vciBwYXRoIG9mIGEgc3BsaXRcbiAgICAgICAgZGl2ZXJnZW5jZTogcC5kaXZlcmdlbmNlID8/IDAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqIERpc2NoYXJnZSAoY2ZzKSArIGRyYWluYWdlIGFyZWEgKHNxIG1pKSBwZXIgZ2F1Z2UgdmlhIHBsYWluIE5XSVMgUkVTVC5cbiAqICBzdGF0RmFsbGJhY2sgKHYxLjUsIFBheXRvbidzIGdldF9kaXNjaGFyZ2UgcGF0dGVybik6IGdhdWdlcyB3aG9zZSBJViBmZWVkXG4gKiAgaXMgZG93bi9uZWdhdGl2ZSBnZXQgdGhlIHBlcmlvZC1vZi1yZWNvcmQgTUVESUFOIGRhaWx5IGZsb3cgKHN0YXQgc2VydmljZVxuICogIHA1MCwgbmVlZHMgPjMgeWVhcnMgb2YgcmVjb3JkKSBmb3IgdGhlIHJ1biBkYXRlJ3MgY2FsZW5kYXIgZGF5LCBmbGFnZ2VkXG4gKiAgcV9zb3VyY2U9J3N0YXQtcDUwJyBzbyB0aGUgcnVuIGNhbiB3YXJuIGl0IGlzbid0IGxpdmUgY29uZGl0aW9ucy4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdhdWdlSW5mbyhzdGF0aW9uSWRzLCBhc09mID0gbnVsbCwgc3RhdEZhbGxiYWNrID0gZmFsc2UpIHtcbiAgY29uc3QgaW5mbyA9IG5ldyBNYXAoKTtcbiAgaWYgKCFzdGF0aW9uSWRzLmxlbmd0aCkgcmV0dXJuIGluZm87XG4gIGNvbnN0IHNpdGVzID0gc3RhdGlvbklkcy5qb2luKFwiLFwiKTtcblxuICAvLyBkcmFpbmFnZSBhcmVhcyAocmRiLCBleHBhbmRlZCBvdXRwdXQpXG4gIHRyeSB7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IGdldFRleHQoTldJU19TSVRFLCB7IGZvcm1hdDogXCJyZGJcIiwgc2l0ZXMsIHNpdGVPdXRwdXQ6IFwiZXhwYW5kZWRcIiB9KTtcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsKSA9PiBsICYmICFsLnN0YXJ0c1dpdGgoXCIjXCIpKTtcbiAgICBpZiAobGluZXMubGVuZ3RoID49IDIpIHtcbiAgICAgIGNvbnN0IGhkciA9IGxpbmVzWzBdLnNwbGl0KFwiXFx0XCIpO1xuICAgICAgY29uc3QgaVNpdGUgPSBoZHIuaW5kZXhPZihcInNpdGVfbm9cIik7XG4gICAgICBjb25zdCBpRGEgPSBoZHIuaW5kZXhPZihcImRyYWluX2FyZWFfdmFcIik7IC8vIC0xIGlmIGFic2VudFxuICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzLnNsaWNlKDIpKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gbGluZS5zcGxpdChcIlxcdFwiKTtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA8PSBNYXRoLm1heChpU2l0ZSwgaURhID4gLTEgPyBpRGEgOiAwKSkgY29udGludWU7XG4gICAgICAgIGxldCBkYSA9IG51bGw7XG4gICAgICAgIGlmIChpRGEgPiAtMSkge1xuICAgICAgICAgIGNvbnN0IHYgPSBwYXJzZUZsb2F0KHBhcnRzW2lEYV0pO1xuICAgICAgICAgIGRhID0gTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5zZXQocGFydHNbaVNpdGVdLCB7IGRyYWluYWdlX2FyZWE6IGRhIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCB7IC8qIGlnbm9yZSDigJQgbWF0Y2hlcyBQeXRob24gKi8gfVxuXG4gIC8vIGRpc2NoYXJnZVxuICBjb25zdCBwYXJhbXMgPSB7IGZvcm1hdDogXCJqc29uXCIsIHNpdGVzLCBwYXJhbWV0ZXJDZDogXCIwMDA2MFwiIH07XG4gIGlmIChhc09mKSB7IHBhcmFtcy5zdGFydERUID0gYXNPZjsgcGFyYW1zLmVuZERUID0gYXNPZjsgfVxuICBlbHNlIHBhcmFtcy5wZXJpb2QgPSBcIlAxRFwiO1xuICB0cnkge1xuICAgIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKE5XSVNfSVYsIHsgcGFyYW1zLCB0aW1lb3V0TXM6IDYwMDAwLCB0cmllczogMSB9KTtcbiAgICBmb3IgKGNvbnN0IHRzIG9mIGo/LnZhbHVlPy50aW1lU2VyaWVzIHx8IFtdKSB7XG4gICAgICBjb25zdCBzaWQgPSB0cy5zb3VyY2VJbmZvLnNpdGVDb2RlWzBdLnZhbHVlO1xuICAgICAgY29uc3QgdmFscyA9IHRzLnZhbHVlc1swXS52YWx1ZTtcbiAgICAgIGlmICghdmFscyB8fCAhdmFscy5sZW5ndGgpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgcSA9IHBhcnNlRmxvYXQodmFsc1t2YWxzLmxlbmd0aCAtIDFdLnZhbHVlKTtcbiAgICAgIGlmIChxID49IDApIHtcbiAgICAgICAgaWYgKCFpbmZvLmhhcyhzaWQpKSBpbmZvLnNldChzaWQsIHt9KTtcbiAgICAgICAgaW5mby5nZXQoc2lkKS5kaXNjaGFyZ2UgPSBxO1xuICAgICAgICBpbmZvLmdldChzaWQpLnFfc291cmNlID0gXCJpdlwiO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCB7IC8qIGlnbm9yZSDigJQgbWF0Y2hlcyBQeXRob24gKi8gfVxuXG4gIC8vIG1lZGlhbi1kYWlseS1mbG93IGZhbGxiYWNrIGZvciBnYXVnZXMgdGhlIElWIHBhc3MgZGlkbid0IGNvdmVyXG4gIGlmIChzdGF0RmFsbGJhY2spIHtcbiAgICBjb25zdCBtaXNzaW5nID0gc3RhdGlvbklkcy5maWx0ZXIoKHMpID0+IGluZm8uZ2V0KHMpPy5kaXNjaGFyZ2UgPT09IHVuZGVmaW5lZCk7XG4gICAgY29uc3QgW21vbnRoLCBkYXldID0gYXNPZlxuICAgICAgPyBbcGFyc2VJbnQoYXNPZi5zbGljZSg1LCA3KSwgMTApLCBwYXJzZUludChhc09mLnNsaWNlKDgsIDEwKSwgMTApXVxuICAgICAgOiBbbmV3IERhdGUoKS5nZXRNb250aCgpICsgMSwgbmV3IERhdGUoKS5nZXREYXRlKCldO1xuICAgIGNvbnN0IFNUQVRfQ0hVTksgPSAxMDsgLy8gc3RhdCBzZXJ2aWNlIDQwMHMgYWJvdmUgMTAgc2l0ZXMgcGVyIHJlcXVlc3RcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IG1pc3NpbmcubGVuZ3RoOyBjICs9IFNUQVRfQ0hVTkspIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCBnZXRUZXh0KE5XSVNfU1RBVCwge1xuICAgICAgICAgIGZvcm1hdDogXCJyZGJcIiwgc2l0ZXM6IG1pc3Npbmcuc2xpY2UoYywgYyArIFNUQVRfQ0hVTkspLmpvaW4oXCIsXCIpLCBwYXJhbWV0ZXJDZDogXCIwMDA2MFwiLFxuICAgICAgICAgIHN0YXRSZXBvcnRUeXBlOiBcImRhaWx5XCIsIHN0YXRUeXBlQ2Q6IFwicDUwXCIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsKSA9PiBsICYmICFsLnN0YXJ0c1dpdGgoXCIjXCIpKTtcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgY29uc3QgaGRyID0gbGluZXNbMF0uc3BsaXQoXCJcXHRcIik7XG4gICAgICAgICAgY29uc3QgY29sID0gKG5hbWUpID0+IGhkci5pbmRleE9mKG5hbWUpO1xuICAgICAgICAgIGNvbnN0IFtpU2l0ZSwgaU1vbiwgaURheSwgaUNvdW50LCBpUDUwXSA9XG4gICAgICAgICAgICBbXCJzaXRlX25vXCIsIFwibW9udGhfbnVcIiwgXCJkYXlfbnVcIiwgXCJjb3VudF9udVwiLCBcInA1MF92YVwiXS5tYXAoY29sKTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMuc2xpY2UoMikpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBsaW5lLnNwbGl0KFwiXFx0XCIpO1xuICAgICAgICAgICAgaWYgKHAubGVuZ3RoIDw9IE1hdGgubWF4KGlTaXRlLCBpTW9uLCBpRGF5LCBpQ291bnQsIGlQNTApKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IHNpZCA9IHBbaVNpdGVdO1xuICAgICAgICAgICAgaWYgKGluZm8uZ2V0KHNpZCk/LmRpc2NoYXJnZSAhPT0gdW5kZWZpbmVkKSBjb250aW51ZTsgLy8gZmlyc3QgbWF0Y2hpbmcgc2VyaWVzIHdpbnNcbiAgICAgICAgICAgIGlmIChwYXJzZUludChwW2lNb25dLCAxMCkgIT09IG1vbnRoIHx8IHBhcnNlSW50KHBbaURheV0sIDEwKSAhPT0gZGF5KSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghKHBhcnNlSW50KHBbaUNvdW50XSwgMTApID4gMykpIGNvbnRpbnVlOyAvLyBQYXl0b24ncyByZWNvcmQtbGVuZ3RoIHJ1bGVcbiAgICAgICAgICAgIGNvbnN0IHEgPSBwYXJzZUZsb2F0KHBbaVA1MF0pO1xuICAgICAgICAgICAgaWYgKCEocSA+PSAwKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIWluZm8uaGFzKHNpZCkpIGluZm8uc2V0KHNpZCwge30pO1xuICAgICAgICAgICAgaW5mby5nZXQoc2lkKS5kaXNjaGFyZ2UgPSBxO1xuICAgICAgICAgICAgaW5mby5nZXQoc2lkKS5xX3NvdXJjZSA9IFwic3RhdC1wNTBcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggeyAvKiBzdGF0IHNlcnZpY2UgZG93biAtPiB0aGlzIGNodW5rJ3MgZ2F1Z2VzIHN0YXkgZHJvcHBlZCwgYXMgYmVmb3JlICovIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZm87XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdHJhY2UgYXNzZW1ibHlcblxuLyoqIE9yZGVyIHNlZ21lbnRzIGRvd25zdHJlYW0gKGh5ZHJvc2VxIGRlc2MpLCBvcmllbnQsIHRyaW0gdG8gc3BpbGwgcG9pbnQsXG4gKiAgZW1pdCB+cmVzb2x1dGlvbk0gc3BhY2VkIHBvaW50cyBjYXJyeWluZyBWQUEgYXR0cmlidXRlcy4gKi9cbmZ1bmN0aW9uIGFzc2VtYmxlVHJhY2UobGF0LCBsb24sIGdlb21zLCB2YWEsIHJlc29sdXRpb25NLCBsb2cpIHtcbiAgY29uc3Qgc2VncyA9IFtdO1xuICBmb3IgKGNvbnN0IFtjaWQsIHBhdGhzXSBvZiBnZW9tcykge1xuICAgIGNvbnN0IHYgPSB2YWEuZ2V0KGNpZCk7XG4gICAgaWYgKCF2IHx8IHYuaHlkcm9zZXEgPT09IG51bGwgfHwgdi5oeWRyb3NlcSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICBjb25zdCBjb29yZHMgPSBwYXRocy5mbGF0KCk7IC8vIGZsYXR0ZW4gbXVsdGlsaW5lIGludG8gb25lIHZlcnRleCBsaXN0XG4gICAgaWYgKGNvb3Jkcy5sZW5ndGggPCAyKSBjb250aW51ZTtcbiAgICBzZWdzLnB1c2goeyBjb21pZDogY2lkLCBjb29yZHMsIC4uLnYgfSk7XG4gIH1cbiAgc2Vncy5zb3J0KChhLCBiKSA9PiBiLmh5ZHJvc2VxIC0gYS5oeWRyb3NlcSk7IC8vIGRvd25zdHJlYW0gPSBkZWNyZWFzaW5nIGh5ZHJvc2VxXG5cbiAgLy8gb3JpZW50IGVhY2ggc2VnbWVudCBzbyBpdCBmbG93cyBzdGFydC0+ZW5kLCBjaGFpbmluZyBlbmRzIHRvIHN0YXJ0c1xuICBsZXQgcHJldkVuZCA9IG51bGw7XG4gIGZvciAoY29uc3QgcyBvZiBzZWdzKSB7XG4gICAgbGV0IGMgPSBzLmNvb3JkcztcbiAgICBpZiAocHJldkVuZCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZFN0YXJ0ID0gaGF2ZXJzaW5lTShwcmV2RW5kWzFdLCBwcmV2RW5kWzBdLCBjWzBdWzFdLCBjWzBdWzBdKTtcbiAgICAgIGNvbnN0IGRFbmQgPSBoYXZlcnNpbmVNKHByZXZFbmRbMV0sIHByZXZFbmRbMF0sIGNbYy5sZW5ndGggLSAxXVsxXSwgY1tjLmxlbmd0aCAtIDFdWzBdKTtcbiAgICAgIGlmIChkRW5kIDwgZFN0YXJ0KSBjID0gYy5zbGljZSgpLnJldmVyc2UoKTtcbiAgICB9XG4gICAgcy5jb29yZHMgPSBjO1xuICAgIHByZXZFbmQgPSBjW2MubGVuZ3RoIC0gMV07XG4gIH1cblxuICAvLyB0cmltIHRoZSBmaXJzdCBzZWdtZW50IHRvIHN0YXJ0IGF0IHRoZSB2ZXJ0ZXggbmVhcmVzdCB0aGUgc3BpbGwgcG9pbnRcbiAgaWYgKHNlZ3MubGVuZ3RoKSB7XG4gICAgY29uc3QgYzAgPSBzZWdzWzBdLmNvb3JkcztcbiAgICBsZXQgbWluSSA9IDAsIG1pbkQgPSBJbmZpbml0eTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGMwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkID0gaGF2ZXJzaW5lTShsYXQsIGxvbiwgYzBbaV1bMV0sIGMwW2ldWzBdKTtcbiAgICAgIGlmIChkIDwgbWluRCkgeyBtaW5EID0gZDsgbWluSSA9IGk7IH1cbiAgICB9XG4gICAgY29uc3QgdHJpbW1lZCA9IGMwLnNsaWNlKG1pbkkpO1xuICAgIHNlZ3NbMF0uY29vcmRzID0gdHJpbW1lZC5sZW5ndGggPyB0cmltbWVkIDogW2MwW2MwLmxlbmd0aCAtIDFdXTtcbiAgfVxuXG4gIC8vIGZsYXR0ZW4gdG8gYXR0cmlidXRlZCBwb2ludHMsIGRvd25zYW1wbGUgdG8gcmVzb2x1dGlvbk1cbiAgbGV0IHB0cyA9IFtdO1xuICBmb3IgKGNvbnN0IHMgb2Ygc2Vncykge1xuICAgIGxldCBzbG9wZSA9IHMuc2xvcGU7XG4gICAgaWYgKHNsb3BlID09PSBudWxsIHx8IHNsb3BlID09PSB1bmRlZmluZWQgfHwgc2xvcGUgPCAwKSBzbG9wZSA9IDAuMDAxOyAvLyAtOTk5OCA9IG1pc3NpbmdcbiAgICBmb3IgKGNvbnN0IHAgb2Ygcy5jb29yZHMpIHtcbiAgICAgIHB0cy5wdXNoKHtcbiAgICAgICAgbG9uOiBwWzBdLCBsYXQ6IHBbMV0sXG4gICAgICAgIGRyYWluYWdlX2FyZWFfa20yOiBzLnRvdGRhc3FrbSB8fCAwLFxuICAgICAgICBzbG9wZSxcbiAgICAgICAgZnR5cGU6IHMuZnR5cGUsIHdiYXJlYXR5cGU6IHMud2JhcmVhdHlwZSxcbiAgICAgICAgY29taWQ6IHMuY29taWQsXG4gICAgICAgIGduaXNfbmFtZTogcy5nbmlzX25hbWUsXG4gICAgICAgIHFlX21hOiBzLnFlX21hLCBxZV9tb250aGx5OiBzLnFlX21vbnRobHksXG4gICAgICAgIGRpdmVyZ2VuY2U6IHMuZGl2ZXJnZW5jZSB8fCAwLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGlmIChwdHMubGVuZ3RoID4gMSkge1xuICAgIGNvbnN0IGtlZXAgPSBbcHRzWzBdXTtcbiAgICBsZXQgY3VtID0gMC4wO1xuICAgIGxldCBsYXN0ID0gcHRzWzBdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwID0gcHRzW2ldO1xuICAgICAgY3VtICs9IGhhdmVyc2luZU0obGFzdC5sYXQsIGxhc3QubG9uLCBwLmxhdCwgcC5sb24pO1xuICAgICAgbGFzdCA9IHA7XG4gICAgICBpZiAoY3VtID49IHJlc29sdXRpb25NKSB7IGtlZXAucHVzaChwKTsgY3VtID0gMC4wOyB9XG4gICAgfVxuICAgIHB0cyA9IGtlZXA7XG4gIH1cbiAgbG9nKGAgIHRyYWNlOiAke3NlZ3MubGVuZ3RofSBzZWdtZW50cyAtPiAke3B0cy5sZW5ndGh9IHBvaW50cyAoJHtzZWdzLmxlbmd0aCA/IHNlZ3NbMF0uZ25pc19uYW1lIDogXCI/XCJ9IC4uLilgKTtcbiAgcmV0dXJuIFtwdHMsIHNlZ3MubGVuZ3RoID8gc2Vnc1swXS5nbmlzX25hbWUgOiBudWxsXTtcbn1cblxuLyoqXG4gKiBEQS13ZWlnaHRlZCBkaXNjaGFyZ2UgaW50ZXJwb2xhdG9yICh2MS40KTogUSBhcyBhIHBpZWNld2lzZS1saW5lYXIgZnVuY3Rpb25cbiAqIG9mIGRyYWluYWdlIGFyZWEgYmV0d2VlbiBnYXVnZXMsIERBLXJhdGlvIGV4dHJhcG9sYXRlZCBvdXRzaWRlIHRoZSBnYXVnZVxuICogcmFuZ2UgKHVuaWZvcm0teWllbGQgYXNzdW1wdGlvbiDigJQgc2FtZSBzZW1hbnRpY3MgYXMgdGhlIHNpbmdsZS1nYXVnZSBwYXRoKS5cbiAqIEJlY2F1c2UgREEganVtcHMgYXQgY29uZmx1ZW5jZXMsIHRoZSBRIGp1bXAgbGFuZHMgQVQgdGhlIGNvbmZsdWVuY2UgaW5zdGVhZFxuICogb2Ygc21lYXJpbmcgbGluZWFybHkgb3ZlciB0aGUgaW50ZXItZ2F1Z2UgZGlzdGFuY2U7IGl0IGFsc28gY2FuJ3QgYmFjay1jbGFtcFxuICogYSBwb3N0LWNvbmZsdWVuY2UgZ2F1Z2UncyBmdWxsIFEgb250byBhIHNtYWxsIHVwc3RyZWFtIHRyaWJ1dGFyeS5cbiAqIEdhdWdlcyB3aG9zZSBOV0lTIERBIGJyZWFrcyBkb3duc3RyZWFtIG1vbm90b25pY2l0eSBhcmUgZHJvcHBlZCAoTldJUyBhbmRcbiAqIE5IRFBsdXMgZGVsaW5lYXRpb25zIGRpc2FncmVlIG9jY2FzaW9uYWxseSkuIFJldHVybnMgbnVsbCB3aGVuIGZld2VyIHRoYW4gMlxuICogbW9ub3RvbmljIGdhdWdlcyByZW1haW4g4oCUIGNhbGxlciBmYWxscyBiYWNrIHRvIGRpc3RhbmNlIGludGVycG9sYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYVdlaWdodGVkUShnZCkge1xuICBjb25zdCBrZXB0ID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZCkge1xuICAgIGlmICghKGcuZHJhaW5hZ2VfYXJlYSA+IDApIHx8ICEoZy5kaXNjaGFyZ2UgPj0gMCkpIGNvbnRpbnVlO1xuICAgIGlmIChrZXB0Lmxlbmd0aCAmJiBnLmRyYWluYWdlX2FyZWEgPD0ga2VwdFtrZXB0Lmxlbmd0aCAtIDFdLmRyYWluYWdlX2FyZWEpIGNvbnRpbnVlO1xuICAgIGtlcHQucHVzaChnKTtcbiAgfVxuICBpZiAoa2VwdC5sZW5ndGggPCAyKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgZlEgPSBpbnRlcnBDbGFtcGVkKGtlcHQubWFwKChnKSA9PiBnLmRyYWluYWdlX2FyZWEpLCBrZXB0Lm1hcCgoZykgPT4gZy5kaXNjaGFyZ2UpKTtcbiAgY29uc3QgZGEwID0ga2VwdFswXS5kcmFpbmFnZV9hcmVhLCBxMCA9IGtlcHRbMF0uZGlzY2hhcmdlO1xuICBjb25zdCBkYU4gPSBrZXB0W2tlcHQubGVuZ3RoIC0gMV0uZHJhaW5hZ2VfYXJlYSwgcU4gPSBrZXB0W2tlcHQubGVuZ3RoIC0gMV0uZGlzY2hhcmdlO1xuICByZXR1cm4ge1xuICAgIGtlcHQsXG4gICAgcTogKGRhKSA9PiB7XG4gICAgICBpZiAoIShkYSA+IDApKSByZXR1cm4gMS4wO1xuICAgICAgaWYgKGRhIDw9IGRhMCkgcmV0dXJuIHEwICogKGRhIC8gZGEwKTtcbiAgICAgIGlmIChkYSA+PSBkYU4pIHJldHVybiBxTiAqIChkYSAvIGRhTik7XG4gICAgICByZXR1cm4gZlEoZGEpO1xuICAgIH0sXG4gIH07XG59XG5cbi8qKiBDbGFtcGVkIGxpbmVhciBpbnRlcnBvbGF0aW9uIChzY2lweSBpbnRlcnAxZCB3aXRoIGNsYW1wZWQgZmlsbF92YWx1ZSkuICovXG5mdW5jdGlvbiBpbnRlcnBDbGFtcGVkKHhzLCB5cykge1xuICByZXR1cm4gKHgpID0+IHtcbiAgICBpZiAoeCA8PSB4c1swXSkgcmV0dXJuIHlzWzBdO1xuICAgIGlmICh4ID49IHhzW3hzLmxlbmd0aCAtIDFdKSByZXR1cm4geXNbeXMubGVuZ3RoIC0gMV07XG4gICAgbGV0IGkgPSAxO1xuICAgIHdoaWxlICh4c1tpXSA8IHgpIGkrKztcbiAgICBjb25zdCB0ID0gKHggLSB4c1tpIC0gMV0pIC8gKHhzW2ldIC0geHNbaSAtIDFdKTtcbiAgICByZXR1cm4geXNbaSAtIDFdICsgdCAqICh5c1tpXSAtIHlzW2kgLSAxXSk7XG4gIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWFpbiBtb2RlbFxuLy9cbi8vIFNwbGl0IGludG8gdHdvIHN0YWdlcyBzbyB0aGUgZXhwZW5zaXZlIHBhcnQgaXMgY2FjaGVhYmxlOlxuLy8gICBmZXRjaFRyYWNlRGF0YShsYXQsIGxvbiwgY29uZmlnKSAg4oCUIEFMTCBuZXR3b3JrIEkvTzogdHJhY2UgZ2VvbWV0cnksIFZBQXMsXG4vLyAgICAgd2lkdGggc2FtcGxpbmcsIGdhdWdlcyArIGZsb3dzLCBzaXRlL3JlY2VwdG9yIGZlYXR1cmVzLiBTYWZldHkgZmFjdG9yLFxuLy8gICAgIG1heCBob3VycyBldGMuIGRvIE5PVCBhZmZlY3QgdGhpcyBzdGFnZS5cbi8vICAgY29tcHV0ZVRyYWNlKGRhdGEsIGNvbmZpZykgICAgICAgIOKAlCBwdXJlIG1hdGg6IFEgaW50ZXJwLCBNYW5uaW5nIGRlcHRoLFxuLy8gICAgIHZlbG9jaXR5IHggc2FmZXR5LCBpbXBvdW5kbWVudCwgdHJhdmVsIHRpbWUsIGhvdXJseSBtYXJrZXJzLCBzaXRlIEVUQXMuXG4vLyAgICAgRGV0ZXJtaW5pc3RpYyBhbmQgcmUtcnVubmFibGUgb24gdGhlIHNhbWUgZGF0YSAoZmllbGRzIGFyZSBvdmVyd3JpdHRlbixcbi8vICAgICByb3dzIGFyZSBuZXZlciBzdHJ1Y3R1cmFsbHkgbXV0YXRlZCkuXG4vLyBydW5UcmFjZSgpIGNvbXBvc2VzIHRoZSB0d28g4oCUIGlkZW50aWNhbCBiZWhhdmlvciB0byB0aGUgb3JpZ2luYWwuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFRyYWNlRGF0YShsYXQsIGxvbiwgY29uZmlnID0ge30pIHtcbiAgY29uc3QgY2ZnID0geyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH07XG4gIGNvbnN0IGxvZyA9IGNmZy52ZXJib3NlID8gKC4uLmEpID0+IGNvbnNvbGUubG9nKC4uLmEpIDogKCkgPT4ge307XG5cbiAgbG9nKGBmZXRjaFRyYWNlRGF0YSgke2xhdC50b0ZpeGVkKDQpfSwgJHtsb24udG9GaXhlZCg0KX0pICBhc09mPSR7Y2ZnLmFzT2YgfHwgXCJsaXZlXCJ9YCk7XG5cbiAgLy8gMS4gdHJhY2UgZ2VvbWV0cnkgKG9uZSBOTERJIGNhbGwpICsgVkFBIGJhdGNoIGpvaW5cbiAgY29uc3QgW2NvbWlkLCBzbmFwTmFtZSwgc25hcERdID0gYXdhaXQgc25hcENvbWlkKGxhdCwgbG9uLCBjZmcubWluU3RyZWFtT3JkZXIpO1xuICBsb2coYCAgQ09NSUQgJHtjb21pZH1gICsgKHNuYXBOYW1lID8gYCAoJHtzbmFwTmFtZX0sIHNuYXBwZWQgJHsoc25hcEQgLyAxMDAwKS50b0ZpeGVkKDIpfSBrbSlgIDogXCJcIikpO1xuICBjb25zdCBnZW9tcyA9IGF3YWl0IG5sZGlEbUZsb3dsaW5lcyhjb21pZCwgY2ZnLm1heERpc3RhbmNlS20pO1xuICBsb2coYCAgTkxESSBETSBmbG93bGluZXM6ICR7Z2VvbXMuc2l6ZX1gKTtcbiAgY29uc3QgdmFhID0gYXdhaXQgdmFhQmF0Y2goWy4uLmdlb21zLmtleXMoKV0pO1xuICBjb25zdCBbcHRzLCByaXZlck5hbWVdID0gYXNzZW1ibGVUcmFjZShsYXQsIGxvbiwgZ2VvbXMsIHZhYSwgY2ZnLnJlc29sdXRpb25NLCBsb2cpO1xuICBpZiAocHRzLmxlbmd0aCA8IDIpIHRocm93IG5ldyBFcnJvcihcInRyYWNlIHRvbyBzaG9ydFwiKTtcblxuICAvLyBwZXItcG9pbnQgYXJyYXlzIChtaXJyb3JzIHRoZSBEYXRhRnJhbWUpXG4gIGNvbnN0IG4gPSBwdHMubGVuZ3RoO1xuICBjb25zdCByb3dzID0gcHRzLm1hcCgocCkgPT4gKHsgLi4ucCB9KSk7XG4gIHJvd3NbMF0uZGlzdGFuY2UgPSAwLjA7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgcm93c1tpXS5kaXN0YW5jZSA9IGhhdmVyc2luZU0ocm93c1tpIC0gMV0ubGF0LCByb3dzW2kgLSAxXS5sb24sIHJvd3NbaV0ubGF0LCByb3dzW2ldLmxvbik7XG4gIH1cbiAgbGV0IGN1bSA9IDAuMDtcbiAgZm9yIChjb25zdCByIG9mIHJvd3MpIHsgY3VtICs9IHIuZGlzdGFuY2U7IHIuY3VtX2Rpc3QgPSBjdW07IH1cbiAgZm9yIChjb25zdCByIG9mIHJvd3MpIHIuZHJhaW5hZ2VfYXJlYV9zcW1pID0gci5kcmFpbmFnZV9hcmVhX2ttMiAqIDAuMzg2MTAyO1xuXG4gIC8vIDIuIHdpZHRoczogZm9ybXVsYSBiYXNlbGluZSwgb3B0aW9uYWwgb3ZlcnJpZGUgcHJvdmlkZXIsIDJ4IGNhcCwgYmFja3dhcmQgc21vb3RoaW5nXG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgci5mb3JtdWxhX3dpZHRoID0gZXN0aW1hdGVHZW9tZXRyeVBheXRvbihyLmRyYWluYWdlX2FyZWFfc3FtaSlbMF07XG4gICAgci53aWR0aF9tID0gMC4wO1xuICB9XG4gIC8vIGJyYWlkZWQtcmVhY2ggZmxhZzogYW55IE5IRFBsdXMgZGl2ZXJnZW5jZSB3aXRoaW4gfjEga20gKDEwIHJvd3MpIOKAlCBHTE9XIHdpZHRoc1xuICAvLyB0aGVyZSBtZWFzdXJlIHRvdGFsIHdldHRlZCB3aWR0aCBhY3Jvc3MgYmFycywgaW5mbGF0aW5nIEEgYW5kIGtpbGxpbmcgdmVsb2NpdHlcbiAge1xuICAgIGNvbnN0IFcgPSAxMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgbGV0IGJyYWlkZWQgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGsgPSBNYXRoLm1heCgwLCBpIC0gVyk7IGsgPD0gTWF0aC5taW4obiAtIDEsIGkgKyBXKTsgaysrKSB7XG4gICAgICAgIGlmIChyb3dzW2tdLmRpdmVyZ2VuY2UgPiAwKSB7IGJyYWlkZWQgPSB0cnVlOyBicmVhazsgfVxuICAgICAgfVxuICAgICAgcm93c1tpXS5icmFpZGVkID0gYnJhaWRlZDtcbiAgICB9XG4gICAgY29uc3QgbmIgPSByb3dzLmZpbHRlcigocikgPT4gci5icmFpZGVkKS5sZW5ndGg7XG4gICAgaWYgKG5iKSBsb2coYCAgYnJhaWRlZCBmbGFnOiAke25ifS8ke259IHRyYWNlIHBvaW50cyBuZWFyIGNoYW5uZWwgZGl2ZXJnZW5jZXMgKEdMT1cgb3ZlcnJpZGUgZGlzYWJsZWQgdGhlcmUpYCk7XG4gIH1cblxuICBpZiAoY2ZnLndpZHRoUHJvdmlkZXIpIHtcbiAgICAvLyBIUiBOSERQbHVzSUQgIT0gTVIgY29taWQg4oCUIHNhbXBsZSBzcGF0aWFsbHksIGluIHdpbmRvd3M7IG5ldmVyIGxldCB0aGVcbiAgICAvLyBvdmVycmlkZSBraWxsIHRoZSBydW4gKGRlZ3JhZGUgdG8gZm9ybXVsYSB3aWR0aHMpLlxuICAgIGxldCBtaWRzID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFNURVAgPSBjZmcud2lkdGhXaW5kb3dQb2ludHM7XG4gICAgICBjb25zdCBwYWQgPSAwLjAzO1xuICAgICAgZm9yIChsZXQgaTAgPSAwOyBpMCA8IG47IGkwICs9IFNURVApIHtcbiAgICAgICAgY29uc3Qgd2luID0gcm93cy5zbGljZShpMCwgaTAgKyBTVEVQKTtcbiAgICAgICAgY29uc3QgZW52ID0ge1xuICAgICAgICAgIHhtaW46IE1hdGgubWluKC4uLndpbi5tYXAoKHIpID0+IHIubG9uKSkgLSBwYWQsXG4gICAgICAgICAgeW1pbjogTWF0aC5taW4oLi4ud2luLm1hcCgocikgPT4gci5sYXQpKSAtIHBhZCxcbiAgICAgICAgICB4bWF4OiBNYXRoLm1heCguLi53aW4ubWFwKChyKSA9PiByLmxvbikpICsgcGFkLFxuICAgICAgICAgIHltYXg6IE1hdGgubWF4KC4uLndpbi5tYXAoKHIpID0+IHIubGF0KSkgKyBwYWQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZlYXRzID0gYXdhaXQgY2ZnLndpZHRoUHJvdmlkZXIoZW52KTsgLy8gW3tsYXQsIGxvbiwgd2lkdGh9XVxuICAgICAgICBtaWRzLnB1c2goLi4uZmVhdHMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZyhgICBXSURUSCBPVkVSUklERSBGQUlMRUQgKCR7U3RyaW5nKGUpLnNsaWNlKDAsIDgwKX0pIC0gZmFsbGluZyBiYWNrIHRvIGZvcm11bGEgd2lkdGhzYCk7XG4gICAgICBtaWRzID0gW107XG4gICAgfVxuICAgIGlmIChtaWRzLmxlbmd0aCkge1xuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcbiAgICAgICAgaWYgKHIuYnJhaWRlZCkgeyByLndpZHRoX20gPSAwLjA7IGNvbnRpbnVlOyB9IC8vIGZvcm11bGEgd2lkdGggb24gYnJhaWRlZCByZWFjaGVzXG4gICAgICAgIGxldCBiZXN0RCA9IEluZmluaXR5LCBiZXN0VyA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgbSBvZiBtaWRzKSB7XG4gICAgICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0oci5sYXQsIHIubG9uLCBtLmxhdCwgbS5sb24pO1xuICAgICAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBiZXN0VyA9IG0ud2lkdGggfHwgMDsgfVxuICAgICAgICB9XG4gICAgICAgIHIud2lkdGhfbSA9IGJlc3REIDw9IGNmZy53aWR0aFNhbXBsZVJhZGl1c00gPyBiZXN0VyA6IDAuMDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1hdGNoZWQgPSByb3dzLmZpbHRlcigocikgPT4gci53aWR0aF9tID4gMCkubGVuZ3RoO1xuICAgICAgbG9nKGAgIEdMT1cgc3BhdGlhbCBzYW1wbGU6ICR7bWlkcy5sZW5ndGh9IEhSIHNlZ21lbnRzLCB3aWR0aHMgbWF0Y2hlZCBhdCAke21hdGNoZWR9LyR7bn0gdHJhY2UgcG9pbnRzYCk7XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgci53aWR0aF9maW5hbF9yYXcgPVxuICAgICAgci53aWR0aF9tID4gMCAmJiByLndpZHRoX20gPD0gci5mb3JtdWxhX3dpZHRoICogMi4wID8gci53aWR0aF9tIDogci5mb3JtdWxhX3dpZHRoO1xuICB9XG4gIC8vIHBhbmRhcyByb2xsaW5nKHdpbmRvdz01MSwgbWluX3BlcmlvZHM9MSkubWVhbigpIOKAlCB0cmFpbGluZyB3aW5kb3dcbiAge1xuICAgIGNvbnN0IFcgPSA1MTtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgc3VtICs9IHJvd3NbaV0ud2lkdGhfZmluYWxfcmF3O1xuICAgICAgaWYgKGkgPj0gVykgc3VtIC09IHJvd3NbaSAtIFddLndpZHRoX2ZpbmFsX3JhdztcbiAgICAgIHJvd3NbaV0ud2lkdGhfZmluYWwgPSBzdW0gLyBNYXRoLm1pbihpICsgMSwgVyk7XG4gICAgfVxuICB9XG5cbiAgLy8gMy4gZGlzY2hhcmdlIGlucHV0czogTkxESSBkb3duc3RyZWFtIGdhdWdlcyAtPiBOV0lTIFEgKCtEQSksIGxvY2F0ZWQgb24gdHJhY2VcbiAgY29uc3QgZ2F1Z2VzID0gYXdhaXQgbmxkaUdhdWdlcyhjb21pZCwgY2ZnLm1heERpc3RhbmNlS20sIFwiRE1cIik7XG4gIC8vIHVwc3RyZWFtLWFuY2hvciBjYW5kaWRhdGVzOiBuZWFyZXN0IFVNIGdhdWdlcyAoZml4ZXMgdGhlIGRpc2NvbnRpbnVpdHkgd2hlblxuICAvLyB0aGUgY2xpY2sgaXMganVzdCBiZWxvdyBhIGdhdWdlIGFuZCBETSBuYXZpZ2F0aW9uIG5vIGxvbmdlciBzZWVzIGl0KVxuICBsZXQgdXBDYW5kcyA9IFtdO1xuICBpZiAoY2ZnLnVwc3RyZWFtR2F1Z2VLbSA+IDApIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZG1JZHMgPSBuZXcgU2V0KGdhdWdlcy5tYXAoKGcpID0+IGcuc3RhdGlvbl9pZCkpO1xuICAgICAgdXBDYW5kcyA9IChhd2FpdCBubGRpR2F1Z2VzKGNvbWlkLCBjZmcudXBzdHJlYW1HYXVnZUttLCBcIlVNXCIpKVxuICAgICAgICAuZmlsdGVyKCh1KSA9PiAhZG1JZHMuaGFzKHUuc3RhdGlvbl9pZCkpXG4gICAgICAgIC5tYXAoKHUpID0+ICh7IC4uLnUsIHVwc3RyZWFtX206IGhhdmVyc2luZU0obGF0LCBsb24sIHUubGF0LCB1LmxvbikgfSkpXG4gICAgICAgIC5maWx0ZXIoKHUpID0+IHUudXBzdHJlYW1fbSA8PSBjZmcudXBzdHJlYW1HYXVnZUttICogMTAwMClcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudXBzdHJlYW1fbSAtIGIudXBzdHJlYW1fbSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nKGAgIFVNIGdhdWdlIGxvb2t1cCBmYWlsZWQgKCR7U3RyaW5nKGUpLnNsaWNlKDAsIDgwKX0pIOKAlCBubyB1cHN0cmVhbSBhbmNob3JgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgYWxsSWRzID0gWy4uLm5ldyBTZXQoWy4uLmdhdWdlcywgLi4udXBDYW5kc10ubWFwKChnKSA9PiBnLnN0YXRpb25faWQpKV07XG4gIGNvbnN0IGdpbmZvID0gYXdhaXQgZ2F1Z2VJbmZvKGFsbElkcywgY2ZnLmFzT2YsIGNmZy5nYXVnZVN0YXRGYWxsYmFjayk7XG4gIGNvbnN0IGdkID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnYXVnZXMpIHtcbiAgICBjb25zdCBpID0gZ2luZm8uZ2V0KGcuc3RhdGlvbl9pZCkgfHwge307XG4gICAgaWYgKGkuZGlzY2hhcmdlID09PSB1bmRlZmluZWQgfHwgIWkuZHJhaW5hZ2VfYXJlYSkgY29udGludWU7XG4gICAgbGV0IGJlc3REID0gSW5maW5pdHksIGlkeCA9IDA7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmVNKHJvd3Nba10ubGF0LCByb3dzW2tdLmxvbiwgZy5sYXQsIGcubG9uKTtcbiAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBpZHggPSBrOyB9XG4gICAgfVxuICAgIGlmIChiZXN0RCA+IDUwMDApIGNvbnRpbnVlOyAvLyBnYXVnZSBub3Qgb24gb3VyIHRyYWNlIGNvcnJpZG9yXG4gICAgY29uc3QgW3csIGRlcF0gPSBlc3RpbWF0ZUdlb21ldHJ5UGF5dG9uKGkuZHJhaW5hZ2VfYXJlYSk7XG4gICAgZ2QucHVzaCh7XG4gICAgICAuLi5nLCBkaXNjaGFyZ2U6IGkuZGlzY2hhcmdlLCBkcmFpbmFnZV9hcmVhOiBpLmRyYWluYWdlX2FyZWEsXG4gICAgICBxX3NvdXJjZTogaS5xX3NvdXJjZSB8fCBcIml2XCIsXG4gICAgICBhcmVhOiB3ICogZGVwLCB0cmFjZV9kaXN0OiByb3dzW2lkeF0uY3VtX2Rpc3QsXG4gICAgfSk7XG4gIH1cbiAgZ2Quc29ydCgoYSwgYikgPT4gYS50cmFjZV9kaXN0IC0gYi50cmFjZV9kaXN0KTtcbiAgLy8gbWVkaWFuLWZsb3cgZ2F1Z2VzIGFyZSBhIHJlc2N1ZSwgbm90IGEgc3VwcGxlbWVudDogd2l0aCBBTlkgbGl2ZSBnYXVnZSBvblxuICAvLyB0aGUgdHJhY2UsIGxpdmUtb25seSBpbnRlcnBvbGF0aW9uIGJlYXRzIHNwbGljaW5nIGEgaGlzdG9yaWNhbCBtZWRpYW4gaW50b1xuICAvLyB0aGUgcHJvZmlsZSAobWVkaWFuICE9IHRvZGF5J3MgZmxvdyBpbiBydW5vZmYgb3IgZHJvdWdodCkuIFRoZXkgZW5nYWdlXG4gIC8vIG9ubHkgb24gYSBmdWxsIGZlZWQgb3V0YWdlIG9yIGEgcHJlLUlWLWVyYSBhc09mIGRhdGUuXG4gIGlmIChnZC5zb21lKChnKSA9PiBnLnFfc291cmNlID09PSBcIml2XCIpICYmIGdkLnNvbWUoKGcpID0+IGcucV9zb3VyY2UgPT09IFwic3RhdC1wNTBcIikpIHtcbiAgICBjb25zdCBkcm9wcGVkID0gZ2QuZmlsdGVyKChnKSA9PiBnLnFfc291cmNlID09PSBcInN0YXQtcDUwXCIpLm1hcCgoZykgPT4gZy5zdGF0aW9uX2lkKTtcbiAgICBsb2coYCAgbWVkaWFuLWZhbGxiYWNrIGdhdWdlcyBzdXBwcmVzc2VkIChsaXZlIGdhdWdlcyBhdmFpbGFibGUpOiAke2Ryb3BwZWQuam9pbihcIiwgXCIpfWApO1xuICAgIGZvciAobGV0IGkgPSBnZC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGdkW2ldLnFfc291cmNlID09PSBcInN0YXQtcDUwXCIpIGdkLnNwbGljZShpLCAxKTtcbiAgfVxuICBjb25zdCBzcGlsbERhU3FtaSA9IHJvd3NbMF0uZHJhaW5hZ2VfYXJlYV9zcW1pO1xuICBmb3IgKGNvbnN0IHUgb2YgdXBDYW5kcykge1xuICAgIGNvbnN0IGkgPSBnaW5mby5nZXQodS5zdGF0aW9uX2lkKSB8fCB7fTtcbiAgICBpZiAoaS5kaXNjaGFyZ2UgPT09IHVuZGVmaW5lZCB8fCAhaS5kcmFpbmFnZV9hcmVhKSBjb250aW51ZTtcbiAgICAvLyBzYW1lIHJlc2N1ZS1vbmx5IHJ1bGUgZm9yIHRoZSB1cHN0cmVhbSBhbmNob3I6IG5vIG1lZGlhbiBhbmNob3JzIHdoZW5cbiAgICAvLyBsaXZlIGdhdWdlcyBhcmUgb24gdGhlIHRyYWNlXG4gICAgaWYgKChpLnFfc291cmNlIHx8IFwiaXZcIikgPT09IFwic3RhdC1wNTBcIiAmJiBnZC5zb21lKChnKSA9PiBnLnFfc291cmNlID09PSBcIml2XCIpKSBjb250aW51ZTtcbiAgICBpZiAobWVyZ2VVcHN0cmVhbUFuY2hvcihnZCwgeyAuLi51LCBkaXNjaGFyZ2U6IGkuZGlzY2hhcmdlLCBkcmFpbmFnZV9hcmVhOiBpLmRyYWluYWdlX2FyZWEsIHFfc291cmNlOiBpLnFfc291cmNlIHx8IFwiaXZcIiB9LCBzcGlsbERhU3FtaSkpIHtcbiAgICAgIGxvZyhcbiAgICAgICAgYCAgdXBzdHJlYW0gYW5jaG9yICR7dS5zdGF0aW9uX2lkfSAke3UubmFtZS5zbGljZSgwLCAzMCl9OiAke01hdGgucm91bmQoaS5kaXNjaGFyZ2UpfSBjZnMgYCArXG4gICAgICAgIGBAICR7KHUudXBzdHJlYW1fbSAvIDEwMDApLnRvRml4ZWQoMSl9IGttIHVwc3RyZWFtIC0+ICR7TWF0aC5yb3VuZChpLmRpc2NoYXJnZSAqIChzcGlsbERhU3FtaSAvIGkuZHJhaW5hZ2VfYXJlYSkpfSBjZnMgYCArXG4gICAgICAgIGBhdCBzcGlsbCBwb2ludCAoREEgeCR7KHNwaWxsRGFTcW1pIC8gaS5kcmFpbmFnZV9hcmVhKS50b0ZpeGVkKDIpfSlgLFxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBhbiBvbi10cmFjZSBnYXVnZSBuZWFyIHRoZSBzdGFydCBhbHJlYWR5IGFuY2hvcnMgdGhlIGJvdW5kYXJ5IOKAlCBzdG9wIGxvb2tpbmdcbiAgICBpZiAoZ2Quc29tZSgoZykgPT4gIWcudXBzdHJlYW1fYW5jaG9yICYmIGcudHJhY2VfZGlzdCA8PSA1MDApKSBicmVhaztcbiAgfVxuICBmb3IgKGNvbnN0IGcgb2YgZ2QpIHtcbiAgICBsb2coYCAgZ2F1Z2UgJHtnLnN0YXRpb25faWR9ICR7Zy5uYW1lLnNsaWNlKDAsIDM4KS5wYWRFbmQoMzgpfSAke1N0cmluZyhNYXRoLnJvdW5kKGcuZGlzY2hhcmdlKSkucGFkU3RhcnQoOCl9IGNmcyBAICR7KGcudHJhY2VfZGlzdCAvIDEwMDApLnRvRml4ZWQoMSkucGFkU3RhcnQoNil9IGttJHtnLnVwc3RyZWFtX2FuY2hvciA/IFwiICh1cHN0cmVhbSBhbmNob3IpXCIgOiBcIlwifSR7Zy5xX3NvdXJjZSA9PT0gXCJzdGF0LXA1MFwiID8gXCIgKE1FRElBTiBmYWxsYmFjaylcIiA6IFwiXCJ9YCk7XG4gIH1cblxuICAvLyA0LiBzaXRlL3JlY2VwdG9yIGZlYXR1cmVzIChmZXRjaGVkIGluIHBhcmFsbGVsOyBqb2luZWQgaW4gY29tcHV0ZVRyYWNlKVxuICBjb25zdCBmZXRjaFNldHMgPSBhc3luYyAocHJvdmlkZXJzKSA9PiBQcm9taXNlLmFsbChcbiAgICAocHJvdmlkZXJzIHx8IFtdKS5tYXAoYXN5bmMgKHApID0+ICh7XG4gICAgICBidWZmZXJfbTogcC5idWZmZXJfbSA/PyA0MDAsXG4gICAgICBmZWF0czogYXdhaXQgcC5mZXRjaCgpLCAvLyBbe25hbWUsIGxhdCwgbG9uLCAuLi5leHRyYX1dXG4gICAgfSkpLFxuICApO1xuICBjb25zdCBbc2l0ZVNldHMsIHJlY2VwdG9yU2V0c10gPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBbZmV0Y2hTZXRzKGNmZy5zaXRlUHJvdmlkZXJzKSwgZmV0Y2hTZXRzKGNmZy5yZWNlcHRvclByb3ZpZGVycyldLFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgbGF0LCBsb24sIGNvbWlkLCBzbmFwTmFtZSwgc25hcERpc3RNOiBzbmFwRCwgcml2ZXJOYW1lLFxuICAgIHJvd3MsIGdkLCBzaXRlU2V0cywgcmVjZXB0b3JTZXRzLFxuICAgIGFzT2Y6IGNmZy5hc09mIHx8IFwibGl2ZVwiLFxuICAgIGZldGNoZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEpvYnNvbiAoVVNHUyBXUklSIDk2LTQwMTMpXG4vL1xuLy8gRHllLXRyYWNlciByZWdyZXNzaW9ucyBmcm9tIH45ODAgc3VicmVhY2hlcyAvIH45MCBVUyByaXZlcnMuIFVuaXRzOiBEYSBtXjIsXG4vLyBRICYgUWEgbV4zL3MsIFMgZGltZW5zaW9ubGVzcywgdmVsb2NpdGllcyBtL3MuIEVxIDEyLzEzICh3aXRoIHNsb3BlKSBvclxuLy8gMTQvMTUgKHdpdGhvdXQpLiBMZWFkaW5nIGVkZ2UgVGwgPSAwLjg5MCB4IFRwIChlcSAxOCkuIFBhc3NhZ2U6IHVuaXQtcGVha1xuLy8gY29uY2VudHJhdGlvbiBDdXAgPSA4NTcgeCBUcF4tMC43NjAgeCBRJ2FeLTAuMDc5IChUcCBob3VycywgZXEgNyksIGFuZFxuLy8gVGQxMCA9IDJlNiAvIEN1cCBzZWNvbmRzIChlcSAxOSkgPSBsZWFkaW5nIGVkZ2UgLT4gMTAlLW9mLXBlYWsgdHJhaWxpbmcuXG5leHBvcnQgZnVuY3Rpb24gam9ic29uVmVsb2NpdGllcyhkYU0yLCBRbTNzLCBRYU0zcywgc2xvcGUpIHtcbiAgaWYgKCEoZGFNMiA+IDApIHx8ICEoUW0zcyA+IDApIHx8ICEoUWFNM3MgPiAwKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGcgPSA5Ljg7XG4gIGNvbnN0IERwID0gKE1hdGgucG93KGRhTTIsIDEuMjUpICogTWF0aC5zcXJ0KGcpKSAvIFFhTTNzOyAvLyBEJ2EsIGVxIDEwXG4gIGNvbnN0IFFwID0gUW0zcyAvIFFhTTNzOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUSdhLCBlcSAxMVxuICBjb25zdCBxT3ZlckRhID0gUW0zcyAvIGRhTTI7XG4gIGxldCB2cCwgdm1wO1xuICBpZiAoc2xvcGUgPiAwLjAwMDAxKSB7XG4gICAgY29uc3QgWCA9IE1hdGgucG93KERwLCAwLjkxOSkgKiBNYXRoLnBvdyhRcCwgLTAuNDY5KSAqIE1hdGgucG93KHNsb3BlLCAwLjE1OSkgKiBxT3ZlckRhO1xuICAgIHZwID0gMC4wOTQgKyAwLjAxNDMgKiBYOyAgIC8vIGVxIDEyXG4gICAgdm1wID0gMC4yNSArIDAuMDIgKiBYOyAgICAgLy8gZXEgMTMgKDk5JSBlbnZlbG9wZSDigJQgZmFzdGVzdCBwcm9iYWJsZSlcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBYID0gTWF0aC5wb3coRHAsIDAuODIxKSAqIE1hdGgucG93KFFwLCAtMC40NjUpICogcU92ZXJEYTtcbiAgICB2cCA9IDAuMDIwICsgMC4wNTEgKiBYOyAgICAvLyBlcSAxNFxuICAgIHZtcCA9IDAuMiArIDAuMDkzICogWDsgICAgIC8vIGVxIDE1XG4gIH1cbiAgcmV0dXJuIHsgdnAsIHZtcCwgcVByaW1lOiBRcCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gam9ic29uUGFzc2FnZUhvdXJzKHRwSG91cnMsIHFQcmltZSkge1xuICAvLyBlcSA3ICsgZXEgMTk6IGR1cmF0aW9uIGZyb20gbGVhZGluZyBlZGdlIHRvIDEwJS1vZi1wZWFrIHRyYWlsaW5nIGVkZ2VcbiAgaWYgKCEodHBIb3VycyA+IDApIHx8ICEocVByaW1lID4gMCkpIHJldHVybiBudWxsO1xuICBjb25zdCBjdXAgPSA4NTcgKiBNYXRoLnBvdyh0cEhvdXJzLCAtMC43NjApICogTWF0aC5wb3cocVByaW1lLCAtMC4wNzkpOyAvLyBzXi0xXG4gIHJldHVybiAyZTYgLyBjdXAgLyAzNjAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVRyYWNlKGRhdGEsIGNvbmZpZyA9IHt9KSB7XG4gIGNvbnN0IGNmZyA9IHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9O1xuICBjb25zdCBsb2cgPSBjZmcudmVyYm9zZSA/ICguLi5hKSA9PiBjb25zb2xlLmxvZyguLi5hKSA6ICgpID0+IHt9O1xuICBjb25zdCB7IGNvbWlkLCByaXZlck5hbWUsIHJvd3MsIGdkLCBzaXRlU2V0cywgcmVjZXB0b3JTZXRzIH0gPSBkYXRhO1xuICBjb25zdCBuID0gcm93cy5sZW5ndGg7XG5cbiAgLy8gNS4gZGlzY2hhcmdlOiBpbnRlcnBvbGF0ZSBhbG9uZyB0cmFjZVxuICAvLyBtb250aCBmb3IgRVJPTSBsb29rdXBzOiBhc19vZiBtb250aCBpZiBwaW5uZWQsIGVsc2UgY3VycmVudFxuICBjb25zdCBlcm9tTW9udGggPSBkYXRhLmFzT2YgJiYgZGF0YS5hc09mICE9PSBcImxpdmVcIlxuICAgID8gcGFyc2VJbnQoZGF0YS5hc09mLnNsaWNlKDUsIDcpLCAxMClcbiAgICA6IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDE7XG5cbiAgbGV0IHFNZXRob2QsIHFDb25maWRlbmNlO1xuICBjb25zdCBhbmNob3JlZCA9IGdkLnNvbWUoKGcpID0+IGcudXBzdHJlYW1fYW5jaG9yKTtcbiAgbGV0IHFJbnRlcnBVc2VkID0gbnVsbDtcbiAgaWYgKGdkLmxlbmd0aCA+PSAyKSB7XG4gICAgY29uc3QgZGFRID0gY2ZnLnFJbnRlcnAgPT09IFwiZHJhaW5hZ2UtYXJlYVwiID8gZGFXZWlnaHRlZFEoZ2QpIDogbnVsbDtcbiAgICBpZiAoZGFRKSB7XG4gICAgICAvLyBpbnRlcnBvbGF0ZSBvbiB0aGUgcnVubmluZy1tYXggREE6IEFydGlmaWNpYWxQYXRoL2RpdmVyZ2VuY2UgcmVhY2hlcyBjYW5cbiAgICAgIC8vIGNhcnJ5IDAvZGlwcGluZyB0b3RkYXNxa20sIHdoaWNoIG11c3Qgbm90IGNyYXRlciBRIG1pZC10cmFjZVxuICAgICAgaWYgKGRhUS5rZXB0Lmxlbmd0aCA8IGdkLmxlbmd0aClcbiAgICAgICAgbG9nKGAgIERBIGludGVycDogZHJvcHBlZCAke2dkLmxlbmd0aCAtIGRhUS5rZXB0Lmxlbmd0aH0gZ2F1Z2Uocykgd2l0aCBub24tbW9ub3RvbmljIE5XSVMgREFgKTtcbiAgICAgIGxldCBydW5NYXggPSAwO1xuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcbiAgICAgICAgcnVuTWF4ID0gTWF0aC5tYXgocnVuTWF4LCByLmRyYWluYWdlX2FyZWFfc3FtaSk7XG4gICAgICAgIHIuUV9jZnMgPSBNYXRoLm1heChkYVEucShydW5NYXgpLCAxLjApO1xuICAgICAgfVxuICAgICAgcU1ldGhvZCA9IGFuY2hvcmVkID8gXCJnYXVnZS1EQS1pbnRlcnBvbGF0aW9uK3Vwc3RyZWFtLWFuY2hvclwiIDogXCJnYXVnZS1EQS1pbnRlcnBvbGF0aW9uXCI7XG4gICAgICBxSW50ZXJwVXNlZCA9IFwiZHJhaW5hZ2UtYXJlYVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2ZnLnFJbnRlcnAgPT09IFwiZHJhaW5hZ2UtYXJlYVwiKVxuICAgICAgICBsb2coXCIgIERBIGludGVycCB1bmF2YWlsYWJsZSAoPDIgbW9ub3RvbmljIGdhdWdlIERBcykg4oCUIGZhbGxpbmcgYmFjayB0byBkaXN0YW5jZSBpbnRlcnBvbGF0aW9uXCIpO1xuICAgICAgY29uc3QgZlEgPSBpbnRlcnBDbGFtcGVkKGdkLm1hcCgoZykgPT4gZy50cmFjZV9kaXN0KSwgZ2QubWFwKChnKSA9PiBnLmRpc2NoYXJnZSkpO1xuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHIuUV9jZnMgPSBNYXRoLm1heChmUShyLmN1bV9kaXN0KSwgMS4wKTtcbiAgICAgIHFNZXRob2QgPSBhbmNob3JlZCA/IFwiZ2F1Z2UtaW50ZXJwb2xhdGlvbit1cHN0cmVhbS1hbmNob3JcIiA6IFwiZ2F1Z2UtaW50ZXJwb2xhdGlvblwiO1xuICAgICAgcUludGVycFVzZWQgPSBcImRpc3RhbmNlXCI7XG4gICAgfVxuICAgIHFDb25maWRlbmNlID0gXCJISUdIXCI7XG4gIH0gZWxzZSBpZiAoZ2QubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZyA9IGdkWzBdO1xuICAgIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgICByLlFfY2ZzID0gTWF0aC5tYXgoZy5kaXNjaGFyZ2UgKiAoci5kcmFpbmFnZV9hcmVhX3NxbWkgLyBnLmRyYWluYWdlX2FyZWEpLCAxLjApO1xuICAgIH1cbiAgICBxTWV0aG9kID0gYW5jaG9yZWQgPyBcInVwc3RyZWFtLWFuY2hvci1EQS1yYXRpb1wiIDogXCJzaW5nbGUtZ2F1Z2UtREEtcmF0aW9cIjtcbiAgICBxQ29uZmlkZW5jZSA9IFwiTUVESVVNXCI7XG4gICAgbG9nKFwiICAxIGdhdWdlOiBzY2FsaW5nIGJ5IGRyYWluYWdlLWFyZWEgcmF0aW9cIik7XG4gIH0gZWxzZSB7XG4gICAgLy8gRVJPTSBwZXItcmVhY2ggbW9udGhseSBtb2RlbGVkIGZsb3cgKGdhdWdlLWFkanVzdGVkOyBjYXB0dXJlcyBzZWFzb25hbFxuICAgIC8vIHlpZWxkIOKAlCBNb250YW5hIEp1bmUgdnMgU2VwdGVtYmVyIGRpZmZlcnMgfjV4KSBiZWZvcmUgdGhlIGZsYXQgY29uc3RhbnRcbiAgICBjb25zdCBlcm9tT2sgPSByb3dzLmZpbHRlcigocikgPT4gci5xZV9tb250aGx5ICYmIHIucWVfbW9udGhseVtlcm9tTW9udGhdID4gMCkubGVuZ3RoO1xuICAgIGlmIChlcm9tT2sgPj0gcm93cy5sZW5ndGggKiAwLjgpIHtcbiAgICAgIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgICAgIGNvbnN0IHFlID0gci5xZV9tb250aGx5ID8gci5xZV9tb250aGx5W2Vyb21Nb250aF0gOiBudWxsO1xuICAgICAgICByLlFfY2ZzID0gTWF0aC5tYXgocWUgPiAwID8gcWUgOiByLmRyYWluYWdlX2FyZWFfc3FtaSAqIDIuMCwgMS4wKTtcbiAgICAgIH1cbiAgICAgIHFNZXRob2QgPSBgZXJvbS1tb250aGx5IChtb250aCAke2Vyb21Nb250aH0pYDsgcUNvbmZpZGVuY2UgPSBcIk1PREVSQVRFIOKAlCBtb2RlbGVkIGZsb3csIG5vIGxpdmUgZ2F1Z2VcIjtcbiAgICAgIGxvZyhgICBOTyBnYXVnZXM6IEVST00gbW9udGhseSBtb2RlbGVkIGZsb3cgKG1vbnRoICR7ZXJvbU1vbnRofSwgJHtlcm9tT2t9LyR7cm93cy5sZW5ndGh9IHJlYWNoZXMpYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3QgciBvZiByb3dzKSByLlFfY2ZzID0gTWF0aC5tYXgoci5kcmFpbmFnZV9hcmVhX3NxbWkgKiAyLjAsIDEuMCk7XG4gICAgICBxTWV0aG9kID0gXCJkcmFpbmFnZS1hcmVhLWNvbnN0YW50XCI7IHFDb25maWRlbmNlID0gXCJMT1cgQ09ORklERU5DRSDigJQgTk8gR0FVR0VcIjtcbiAgICAgIGxvZyhcIiAgTk8gZ2F1Z2VzLCBubyBFUk9NOiBRIH4gMiBjZnMgcGVyIHNxIG1pIGRyYWluYWdlIOKAlCBMT1cgQ09ORklERU5DRVwiKTtcbiAgICB9XG4gIH1cblxuICAvLyA0LiBNYW5uaW5nJ3MgZGVwdGggcGVyIHBvaW50IChmb3JtdWxhIGZhbGxiYWNrKSwgViA9IFEvQSwgc2FmZXR5IGZhY3RvclxuICBjb25zdCBDRlNfVE9fTTNTID0gTWF0aC5wb3coMy4yODEsIDMpO1xuICBsZXQgb2sgPSAwO1xuICBmb3IgKGNvbnN0IHIgb2Ygcm93cykge1xuICAgIHIuUV9tM3MgPSByLlFfY2ZzIC8gQ0ZTX1RPX00zUztcbiAgICBjb25zdCBkZXB0aEZvcm11bGEgPSBlc3RpbWF0ZUdlb21ldHJ5UGF5dG9uKHIuZHJhaW5hZ2VfYXJlYV9zcW1pKVsxXTtcbiAgICBjb25zdCBkbSA9IGNhbGN1bGF0ZURlcHRoTWFubmluZyhyLlFfbTNzLCByLndpZHRoX2ZpbmFsLCByLnNsb3BlLCBjZmcubWFubmluZ04pO1xuICAgIGlmIChkbSAhPT0gbnVsbCAmJiBkbSA+IDAuMSAmJiBkbSA8IDIwKSB7IHIuZGVwdGggPSBkbTsgb2srKzsgfVxuICAgIGVsc2Ugci5kZXB0aCA9IGRlcHRoRm9ybXVsYTtcbiAgICByLmFyZWEgPSByLndpZHRoX2ZpbmFsICogci5kZXB0aDtcbiAgICByLnZlbG9jaXR5ID0gKHIuUV9tM3MgLyByLmFyZWEpICogY2ZnLnNhZmV0eUZhY3RvcjtcbiAgfVxuICBsb2coYCAgTWFubmluZydzIGRlcHRoOiAke29rfS8ke259IHBvaW50cyAoJHtNYXRoLnJvdW5kKCgxMDAgKiBvaykgLyBuKX0lKWApO1xuXG4gIC8vIDUuIGltcG91bmRtZW50IHJ1bGU6IGZsb3dsaW5lIHBhc3NlcyB0aHJvdWdoIGEgTGFrZVBvbmQvUmVzZXJ2b2lyIHdhdGVyYm9keVxuICAvLyAobWludXMga25vd24gUkVNT1ZFRCBkYW1zIHdob3NlIHdhdGVyYm9keSBmbGFncyBsaW5nZXIgaW4gTkhEUGx1cylcbiAgY29uc3QgZXhjbHVkZWQgPSBuZXcgU2V0KFsuLi5SRU1PVkVEX0lNUE9VTkRNRU5UX0NPTUlEUywgLi4uKGNmZy5pbXBvdW5kRXhjbHVkZUNvbWlkcyB8fCBbXSldKTtcbiAgbGV0IHN0b3BJZHggPSBudWxsLCBydW5NID0gMC4wO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpbXAgPSAocm93c1tpXS53YmFyZWF0eXBlID09PSBcIkxha2VQb25kXCIgfHwgcm93c1tpXS53YmFyZWF0eXBlID09PSBcIlJlc2Vydm9pclwiKSAmJlxuICAgICAgIWV4Y2x1ZGVkLmhhcyhyb3dzW2ldLmNvbWlkKTtcbiAgICByb3dzW2ldLmltcG91bmRlZCA9IGltcDtcbiAgICBpZiAoaW1wKSB7XG4gICAgICBydW5NICs9IHJvd3NbaV0uZGlzdGFuY2U7XG4gICAgICBpZiAocnVuTSA+PSBjZmcuaW1wb3VuZFN0b3BLbSAqIDEwMDApIHsgc3RvcElkeCA9IGk7IGJyZWFrOyB9XG4gICAgfSBlbHNlIHJ1bk0gPSAwLjA7XG4gIH1cbiAgbGV0IGltcG91bmROb3RlID0gbnVsbDtcbiAgbGV0IGRmID0gcm93cztcbiAgaWYgKHN0b3BJZHggIT09IG51bGwpIHtcbiAgICBjb25zdCBuYW1lID0gcm93c1tzdG9wSWR4XS5nbmlzX25hbWUgfHwgXCJpbXBvdW5kbWVudFwiO1xuICAgIGltcG91bmROb3RlID1cbiAgICAgIGBUcmFjZSByZWFjaGVzIGFuIGltcG91bmRlZCByZWFjaCAoJHtuYW1lfSkgYXQgYCArXG4gICAgICBgJHsocm93c1tzdG9wSWR4XS5jdW1fZGlzdCAvIDEwMDApLnRvRml4ZWQoMSl9IGttIOKAlCB0cmF2ZWwgdGltZSBiZXlvbmQgYCArXG4gICAgICBgdGhpcyBwb2ludCBpcyBOT1QgbW9kZWxlZCAocmVzZXJ2b2lyIHRyYW5zaXQpLmA7XG4gICAgZGYgPSByb3dzLnNsaWNlKDAsIHN0b3BJZHggKyAxKTtcbiAgICBsb2coYCAgSU1QT1VORE1FTlQgU1RPUDogJHtpbXBvdW5kTm90ZX1gKTtcbiAgfVxuXG4gIC8vIDYuIHRyYXZlbCB0aW1lLCBjdXRvZmYsIGhvdXJseSBtYXJrZXJzXG4gIGNvbnN0IGpvYnNvbiA9IGNmZy50aW1pbmdNb2RlbCA9PT0gXCJqb2Jzb25cIjtcbiAgY29uc3QgQ0ZTID0gTWF0aC5wb3coMy4yODEsIDMpO1xuICBsZXQgY3VtVCA9IDAuMCwgdFBlYWsgPSAwLjAsIHRGYXN0ID0gMC4wLCBqb2Jzb25EZWdyYWRlZCA9IDA7XG4gIGZvciAoY29uc3QgciBvZiBkZikge1xuICAgIHIuc2VnX3RpbWUgPSByLmRpc3RhbmNlIC8gci52ZWxvY2l0eTtcbiAgICBjdW1UICs9IHIuc2VnX3RpbWU7XG4gICAgci5jdW1fdGltZSA9IGN1bVQgLyAzNjAwOyAvLyBoeWRyYXVsaWMgKHggc2FmZXR5KSDigJQgYWx3YXlzIGNvbXB1dGVkOyBmZWVkcyBsZWdhY3kgbW9kZVxuICAgIGlmIChqb2Jzb24pIHtcbiAgICAgIGNvbnN0IGRhTTIgPSAoci5kcmFpbmFnZV9hcmVhX2ttMiB8fCAwKSAqIDFlNjtcbiAgICAgIGNvbnN0IFFhTTNzID0gci5xZV9tYSA+IDAgPyByLnFlX21hIC8gQ0ZTIDogbnVsbDtcbiAgICAgIGNvbnN0IGp2ID0gUWFNM3MgPyBqb2Jzb25WZWxvY2l0aWVzKGRhTTIsIHIuUV9tM3MsIFFhTTNzLCByLnNsb3BlKSA6IG51bGw7XG4gICAgICBsZXQgdnAsIHZtcCwgcVByaW1lO1xuICAgICAgaWYgKGp2KSB7ICh7IHZwLCB2bXAsIHFQcmltZSB9ID0ganYpOyB9XG4gICAgICBlbHNlIHsgdnAgPSByLnZlbG9jaXR5IC8gY2ZnLnNhZmV0eUZhY3Rvcjsgdm1wID0gdnAgKiAyOyBxUHJpbWUgPSAxOyBqb2Jzb25EZWdyYWRlZCsrOyB9XG4gICAgICB0UGVhayArPSByLmRpc3RhbmNlIC8gdnA7XG4gICAgICB0RmFzdCArPSByLmRpc3RhbmNlIC8gdm1wO1xuICAgICAgci50X3BlYWsgPSB0UGVhayAvIDM2MDA7XG4gICAgICByLnRfbGVhZCA9IDAuODkwICogci50X3BlYWs7ICAgICAgICAgICAgICAvLyBlcSAxOCDigJQgbW9zdCBwcm9iYWJsZSBmaXJzdCBhcnJpdmFsXG4gICAgICByLnRfbGVhZF9taW4gPSAwLjg5MCAqICh0RmFzdCAvIDM2MDApOyAgICAvLyA5OSUgZW52ZWxvcGUg4oCUIGVhcmxpZXN0IGNyZWRpYmxlIGFycml2YWxcbiAgICAgIGNvbnN0IHRkMTAgPSBqb2Jzb25QYXNzYWdlSG91cnMoci50X3BlYWssIHFQcmltZSk7XG4gICAgICByLnRfY2xlYXIgPSB0ZDEwICE9PSBudWxsID8gci50X2xlYWQgKyB0ZDEwIDogbnVsbDsgLy8gMTAlLW9mLXBlYWsgdHJhaWxpbmcgZWRnZVxuICAgIH1cbiAgfVxuICBpZiAoam9ic29uICYmIGpvYnNvbkRlZ3JhZGVkKSBsb2coYCAgSm9ic29uOiAke2pvYnNvbkRlZ3JhZGVkfSBwb2ludHMgbGFja2VkIEVST00gUWEgKGh5ZHJhdWxpYyBmYWxsYmFjaylgKTtcbiAgY29uc3QgdGltZU9mID0gKHIpID0+IChqb2Jzb24gPyByLnRfbGVhZCA6IHIuY3VtX3RpbWUpO1xuICBkZiA9IGRmLmZpbHRlcigocikgPT4gdGltZU9mKHIpIDwgY2ZnLm1heEhvdXJzKTtcbiAgY29uc3QgbWF4Q3VtVGltZSA9IGRmLmxlbmd0aCA/IHRpbWVPZihkZltkZi5sZW5ndGggLSAxXSkgOiAwO1xuICBjb25zdCBuZWFyZXN0Um93ID0gKGZpZWxkLCB0YXJnZXQpID0+IHtcbiAgICBsZXQgYmVzdEQgPSBJbmZpbml0eSwgaSA9IDA7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBkZi5sZW5ndGg7IGsrKykge1xuICAgICAgY29uc3QgZCA9IE1hdGguYWJzKGRmW2tdW2ZpZWxkXSAtIHRhcmdldCk7XG4gICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgaSA9IGs7IH0gLy8gZmlyc3Qgb2NjdXJyZW5jZSBvZiBtaW4gKHBhbmRhcyBpZHhtaW4pXG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9O1xuICBjb25zdCBob3VybHkgPSBbXTtcbiAgZm9yIChsZXQgaG91ciA9IDE7IGhvdXIgPD0gY2ZnLm1heEhvdXJzOyBob3VyKyspIHtcbiAgICBpZiAobWF4Q3VtVGltZSA8IGhvdXIgJiYgTWF0aC5hYnMobWF4Q3VtVGltZSAtIGhvdXIpID4gMC41KSBicmVhaztcbiAgICBjb25zdCBpID0gbmVhcmVzdFJvdyhqb2Jzb24gPyBcInRfbGVhZFwiIDogXCJjdW1fdGltZVwiLCBob3VyKTtcbiAgICBjb25zdCBoID0ge1xuICAgICAgaG91cixcbiAgICAgIGxhdDogZGZbaV0ubGF0LCBsb246IGRmW2ldLmxvbixcbiAgICAgIGN1bV9kaXN0X2ttOiBkZltpXS5jdW1fZGlzdCAvIDEwMDAsXG4gICAgICB2ZWxvY2l0eV9tcGg6IGRmW2ldLnZlbG9jaXR5ICogMi4yMzY5NCxcbiAgICB9O1xuICAgIGlmIChqb2Jzb24pIHtcbiAgICAgIC8vIGJhbmQgYXQgdGhpcyBob3VyOiBidWxrIChwZWFrKSBwb3NpdGlvbiAuLiBmYXJ0aGVzdCBjcmVkaWJsZSAoOTklIGxlYWRpbmcpXG4gICAgICBjb25zdCBpUGVhayA9IG5lYXJlc3RSb3coXCJ0X3BlYWtcIiwgaG91cik7XG4gICAgICBjb25zdCBpRmFyID0gbmVhcmVzdFJvdyhcInRfbGVhZF9taW5cIiwgaG91cik7XG4gICAgICBoLmJhbmQgPSB7XG4gICAgICAgIHBlYWs6IHsgaTogaVBlYWssIGxhdDogZGZbaVBlYWtdLmxhdCwgbG9uOiBkZltpUGVha10ubG9uLCBjdW1fZGlzdF9rbTogZGZbaVBlYWtdLmN1bV9kaXN0IC8gMTAwMCB9LFxuICAgICAgICBmYXN0ZXN0OiB7IGk6IGlGYXIsIGxhdDogZGZbaUZhcl0ubGF0LCBsb246IGRmW2lGYXJdLmxvbiwgY3VtX2Rpc3Rfa206IGRmW2lGYXJdLmN1bV9kaXN0IC8gMTAwMCB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgaG91cmx5LnB1c2goaCk7XG4gIH1cblxuICAvLyA3LiBzaXRlIEVUQXMgKyByZWNlcHRvciB3YXJuaW5ncyAobmVhcmVzdCB0cmFjZSBwb2ludCB3aXRoaW4gYnVmZmVyKTtcbiAgLy8gZmVhdHVyZXMgd2VyZSBwcmUtZmV0Y2hlZCBpbnRvIGRhdGEuc2l0ZVNldHMvcmVjZXB0b3JTZXRzXG4gIGZ1bmN0aW9uIHByb3hpbWl0eShzZXQpIHtcbiAgICBjb25zdCBmZWF0cyA9IHNldC5mZWF0czsgLy8gW3tuYW1lLCBsYXQsIGxvbiwgLi4uZXh0cmF9XVxuICAgIGNvbnN0IGJ1ZiA9IHNldC5idWZmZXJfbSA/PyA0MDA7XG4gICAgY29uc3Qgb3V0ID0gW107XG4gICAgZm9yIChjb25zdCBmIG9mIGZlYXRzKSB7XG4gICAgICBpZiAoZi5sYXQgPT09IHVuZGVmaW5lZCB8fCBmLmxvbiA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICAgIGxldCBiZXN0RCA9IEluZmluaXR5LCBpID0gMDtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZGYubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0oZGZba10ubGF0LCBkZltrXS5sb24sIGYubGF0LCBmLmxvbik7XG4gICAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBpID0gazsgfVxuICAgICAgfVxuICAgICAgaWYgKGJlc3REIDw9IGJ1Zikge1xuICAgICAgICBjb25zdCB7IGxhdDogX2EsIGxvbjogX2IsIC4uLnJlc3QgfSA9IGY7XG4gICAgICAgIGNvbnN0IHJvdyA9IHtcbiAgICAgICAgICAuLi5yZXN0LFxuICAgICAgICAgIGV0YV9ocjogTWF0aC5yb3VuZCh0aW1lT2YoZGZbaV0pICogMTAwKSAvIDEwMCxcbiAgICAgICAgICBkaXN0X2ttOiBNYXRoLnJvdW5kKChkZltpXS5jdW1fZGlzdCAvIDEwMDApICogMTApIC8gMTAsXG4gICAgICAgICAgb2Zmc2V0X206IE1hdGgucm91bmQoYmVzdEQpLFxuICAgICAgICAgIC8vIG1vZGVsZWQgaHlkcmF1bGljcyBhdCB0aGUgc2l0ZSdzIHRyYWNlIHBvaW50IOKAlCBmZWVkcyBib29tIHNpemluZ1xuICAgICAgICAgIHJpdmVyX3dpZHRoX206IE1hdGgucm91bmQoZGZbaV0ud2lkdGhfZmluYWwgKiAxMCkgLyAxMCxcbiAgICAgICAgICB2ZWxvY2l0eV9tczogTWF0aC5yb3VuZChkZltpXS52ZWxvY2l0eSAqIDEwMDApIC8gMTAwMCxcbiAgICAgICAgICBkZXB0aF9tOiBNYXRoLnJvdW5kKGRmW2ldLmRlcHRoICogMTAwKSAvIDEwMCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGpvYnNvbikge1xuICAgICAgICAgIHJvdy5ldGFfZWFybHlfaHIgPSBNYXRoLnJvdW5kKGRmW2ldLnRfbGVhZF9taW4gKiAxMDApIC8gMTAwO1xuICAgICAgICAgIHJvdy5ldGFfcGVha19ociA9IE1hdGgucm91bmQoZGZbaV0udF9wZWFrICogMTAwKSAvIDEwMDtcbiAgICAgICAgICByb3cuY2xlYXJfaHIgPSBkZltpXS50X2NsZWFyICE9PSBudWxsID8gTWF0aC5yb3VuZChkZltpXS50X2NsZWFyICogMTAwKSAvIDEwMCA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgb3V0LnB1c2gocm93KTtcbiAgICAgIH1cbiAgICB9XG4gICAgb3V0LnNvcnQoKGEsIGIpID0+IGEuZXRhX2hyIC0gYi5ldGFfaHIpO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICBjb25zdCBzaXRlcyA9IFtdO1xuICBmb3IgKGNvbnN0IHMgb2Ygc2l0ZVNldHMgfHwgW10pIHNpdGVzLnB1c2goLi4ucHJveGltaXR5KHMpKTtcbiAgc2l0ZXMuc29ydCgoYSwgYikgPT4gYS5ldGFfaHIgLSBiLmV0YV9ocik7XG4gIGNvbnN0IHdhcm5pbmdzID0gaW1wb3VuZE5vdGUgPyBbaW1wb3VuZE5vdGVdIDogW107XG4gIGlmIChxQ29uZmlkZW5jZSAhPT0gXCJISUdIXCIpIHdhcm5pbmdzLnVuc2hpZnQoYEZsb3cgZXN0aW1hdGU6ICR7cUNvbmZpZGVuY2V9ICgke3FNZXRob2R9KWApO1xuICB7XG4gICAgY29uc3Qgc3RhdEcgPSBnZC5maWx0ZXIoKGcpID0+IGcucV9zb3VyY2UgPT09IFwic3RhdC1wNTBcIik7XG4gICAgaWYgKHN0YXRHLmxlbmd0aCkge1xuICAgICAgd2FybmluZ3MudW5zaGlmdChcbiAgICAgICAgYEdhdWdlIGZlZWQgZG93bjogJHtzdGF0Ry5tYXAoKGcpID0+IGcuc3RhdGlvbl9pZCkuam9pbihcIiwgXCIpfSB1c2luZyBgICtcbiAgICAgICAgYHBlcmlvZC1vZi1yZWNvcmQgTUVESUFOIGZsb3cgZm9yIHRoaXMgZGF0ZSDigJQgTk9UIGxpdmUgY29uZGl0aW9uc2AsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IHMgb2YgcmVjZXB0b3JTZXRzIHx8IFtdKSB7XG4gICAgZm9yIChjb25zdCByIG9mIHByb3hpbWl0eShzKSkge1xuICAgICAgd2FybmluZ3MucHVzaChcbiAgICAgICAgYFJlY2VwdG9yICcke3IubmFtZX0nIH4ke3Iub2Zmc2V0X219IG0gb2ZmIHRyYWNlIGF0IGhyICR7ci5ldGFfaHJ9ICgke3IuZGlzdF9rbX0ga20gZG93bnN0cmVhbSlgLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkaXN0YW5jZUttID0gZGYubGVuZ3RoID8gZGZbZGYubGVuZ3RoIC0gMV0uY3VtX2Rpc3QgLyAxMDAwIDogMDtcbiAgY29uc3QgYXZnVmVsID0gZGYubGVuZ3RoID8gZGYucmVkdWNlKChzLCByKSA9PiBzICsgci52ZWxvY2l0eSwgMCkgLyBkZi5sZW5ndGggOiAwO1xuICBjb25zdCBnbG93TWF0Y2hlZCA9IHJvd3MuZmlsdGVyKChyKSA9PiByLndpZHRoX20gPiAwKS5sZW5ndGg7XG4gIGNvbnN0IGJyYWlkZWROID0gcm93cy5maWx0ZXIoKHIpID0+IHIuYnJhaWRlZCkubGVuZ3RoO1xuXG4gIC8vIHByb3ZlbmFuY2Ug4oCUIGVub3VnaCB0byByZWNvbnN0cnVjdCBhbnkgb3V0cHV0IGluIGFuIGFmdGVyLWFjdGlvbiByZXZpZXdcbiAgY29uc3QgcnVuUmVjb3JkID0ge1xuICAgIGVuZ2luZV92ZXJzaW9uOiBFTkdJTkVfVkVSU0lPTixcbiAgICBnZW5lcmF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICBkYXRhX2ZldGNoZWRfYXQ6IGRhdGEuZmV0Y2hlZEF0IHx8IG51bGwsXG4gICAgc3BpbGxfcG9pbnQ6IHsgbGF0OiBkYXRhLmxhdCwgbG9uOiBkYXRhLmxvbiB9LFxuICAgIHNuYXA6IHsgY29taWQsIHJpdmVyOiByaXZlck5hbWUsIHNuYXBwZWRfZnJvbV9tOiBkYXRhLnNuYXBEaXN0TSAhPT0gdW5kZWZpbmVkID8gTWF0aC5yb3VuZChkYXRhLnNuYXBEaXN0TSB8fCAwKSA6IG51bGwgfSxcbiAgICB0aW1pbmdfbW9kZWw6IGNmZy50aW1pbmdNb2RlbCxcbiAgICBzYWZldHlfZmFjdG9yOiBjZmcuc2FmZXR5RmFjdG9yLFxuICAgIG1heF9ob3VyczogY2ZnLm1heEhvdXJzLFxuICAgIGFzX29mOiBkYXRhLmFzT2YgfHwgXCJsaXZlXCIsXG4gICAgcV9tZXRob2Q6IHFNZXRob2QsXG4gICAgcV9jb25maWRlbmNlOiBxQ29uZmlkZW5jZSxcbiAgICBxX2ludGVycDogcUludGVycFVzZWQsXG4gICAgZ2F1Z2VzOiBnZC5tYXAoKGcpID0+ICh7XG4gICAgICBzdGF0aW9uX2lkOiBnLnN0YXRpb25faWQsIG5hbWU6IGcubmFtZSwgZGlzY2hhcmdlX2NmczogZy5kaXNjaGFyZ2UsIHRyYWNlX2ttOiBNYXRoLnJvdW5kKGcudHJhY2VfZGlzdCAvIDEwMCkgLyAxMCxcbiAgICAgIHFfc291cmNlOiBnLnFfc291cmNlIHx8IFwiaXZcIixcbiAgICAgIC4uLihnLnVwc3RyZWFtX2FuY2hvciA/IHtcbiAgICAgICAgdXBzdHJlYW1fYW5jaG9yOiB0cnVlLFxuICAgICAgICBhbmNob3JfZ2F1Z2VfcV9jZnM6IGcuYW5jaG9yX2dhdWdlX3FfY2ZzLFxuICAgICAgICBhbmNob3JfZ2F1Z2VfZGFfc3FtaTogZy5hbmNob3JfZ2F1Z2VfZGFfc3FtaSxcbiAgICAgICAgYW5jaG9yX3Vwc3RyZWFtX2ttOiBnLmFuY2hvcl91cHN0cmVhbV9tICE9PSBudWxsID8gTWF0aC5yb3VuZChnLmFuY2hvcl91cHN0cmVhbV9tIC8gMTAwKSAvIDEwIDogbnVsbCxcbiAgICAgIH0gOiB7fSksXG4gICAgfSkpLFxuICAgIGVyb21fbW9udGg6IHFNZXRob2Quc3RhcnRzV2l0aChcImVyb21cIikgPyBlcm9tTW9udGggOiBudWxsLFxuICAgIHdpZHRoX3NvdXJjZTogeyBnbG93X21hdGNoZWRfcG9pbnRzOiBnbG93TWF0Y2hlZCwgdG90YWxfcG9pbnRzOiByb3dzLmxlbmd0aCwgYnJhaWRlZF9wb2ludHNfZm9ybXVsYV93aWR0aDogYnJhaWRlZE4gfSxcbiAgICBqb2Jzb25fZGVncmFkZWRfcG9pbnRzOiBqb2Jzb24gPyBqb2Jzb25EZWdyYWRlZCA6IG51bGwsXG4gICAgaW1wb3VuZF9leGNsdXNpb25zX2FwcGxpZWQ6IFsuLi5leGNsdWRlZF0uZmlsdGVyKChjKSA9PiByb3dzLnNvbWUoKHIpID0+IHIuY29taWQgPT09IGMpKSxcbiAgICBpbXBvdW5kX3N0b3Bfa206IHN0b3BJZHggIT09IG51bGwgPyBNYXRoLnJvdW5kKHJvd3Nbc3RvcElkeF0uY3VtX2Rpc3QgLyAxMDApIC8gMTAgOiBudWxsLFxuICB9O1xuXG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICByaXZlcl9uYW1lOiByaXZlck5hbWUsXG4gICAgY29taWQsXG4gICAgYXNfb2Y6IGRhdGEuYXNPZiB8fCBcImxpdmVcIixcbiAgICBzYWZldHlfZmFjdG9yOiBjZmcuc2FmZXR5RmFjdG9yLFxuICAgIHRpbWluZ19tb2RlbDogY2ZnLnRpbWluZ01vZGVsLFxuICAgIHFfbWV0aG9kOiBxTWV0aG9kLFxuICAgIHFfY29uZmlkZW5jZTogcUNvbmZpZGVuY2UsXG4gICAgZ2F1Z2VzX3VzZWQ6IGdkLm1hcCgoZykgPT4gKHtcbiAgICAgIHN0YXRpb25faWQ6IGcuc3RhdGlvbl9pZCwgbmFtZTogZy5uYW1lLFxuICAgICAgZGlzY2hhcmdlOiBnLmRpc2NoYXJnZSwgdHJhY2VfZGlzdDogZy50cmFjZV9kaXN0LFxuICAgIH0pKSxcbiAgICBkaXN0YW5jZV9rbV8yNGg6IGRpc3RhbmNlS20sXG4gICAgYXZnX3ZlbG9jaXR5X21waDogYXZnVmVsICogMi4yMzY5NCxcbiAgICBpbXBvdW5kX3N0b3A6IGltcG91bmROb3RlLFxuICAgIGhvdXJseSxcbiAgICBzaXRlcyxcbiAgICB3YXJuaW5ncyxcbiAgICBydW5SZWNvcmQsXG4gICAgdHJhY2U6IGRmLCAvLyBmdWxsIHJvdyBhcnJheSBmb3IgaW5zcGVjdGlvbi9nZW9qc29uIGV4cG9ydFxuICB9O1xuICBsb2coXG4gICAgYCAgUkVTVUxUOiAke2Rpc3RhbmNlS20udG9GaXhlZCgxKX0ga20gaW4gPD0gJHtjZmcubWF4SG91cnN9IGgsIGAgK1xuICAgIGBhdmcgJHtyZXN1bHQuYXZnX3ZlbG9jaXR5X21waC50b0ZpeGVkKDIpfSBtcGgsICR7c2l0ZXMubGVuZ3RofSBzaXRlcywgJHt3YXJuaW5ncy5sZW5ndGh9IHdhcm5pbmdzYCxcbiAgKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1blRyYWNlKGxhdCwgbG9uLCBjb25maWcgPSB7fSkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hUcmFjZURhdGEobGF0LCBsb24sIGNvbmZpZyk7XG4gIHJldHVybiBjb21wdXRlVHJhY2UoZGF0YSwgY29uZmlnKTtcbn1cblxuLyoqXG4gKiBCb29tIHNpemluZyBmcm9tIG1vZGVsZWQgaHlkcmF1bGljcyAocGxhbm5pbmctbGV2ZWwsIGZvciBHUlBzIHRoYXQgY2Fycnkgbm9cbiAqIGVxdWlwbWVudCBxdWFudGl0aWVzKS4gU3RhbmRhcmQgY29udGFpbm1lbnQgcnVsZTogb2lsIGVudHJhaW5zIHVuZGVyIGEgYm9vbVxuICogd2hlbiB0aGUgZmxvdyBjb21wb25lbnQgbm9ybWFsIHRvIGl0IGV4Y2VlZHMgfjAuMzUgbS9zICgwLjcga3QpLCBzbyBpblxuICogZmFzdGVyIHdhdGVyIHRoZSBib29tIGlzIGFuZ2xlZCB3aXRoIHNpbih0aGV0YSkgPSBlbnRyYWlubWVudC92ZWxvY2l0eSBhbmRcbiAqIHRoZSByZXF1aXJlZCBsZW5ndGggZ3Jvd3MgdG8gd2lkdGgvc2luKHRoZXRhKS4gQW5jaG9yIHNldHMgZnJvbSBsZW5ndGguXG4gKiBBbmdsZXMgYmVsb3cgfjE1IGRlZyAodiA+IH4xLjM1IG0vcykgYXJlIGZsYWdnZWQ6IHVzZSBjYXNjYWRlZCBzaG9ydGVyIGJvb21zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXN0aW1hdGVCb29tTmVlZHMod2lkdGhNLCB2ZWxvY2l0eU1zLCBvcHRzID0ge30pIHtcbiAgY29uc3QgZW50cmFpbiA9IG9wdHMuZW50cmFpbm1lbnRNcyA/PyAwLjM1O1xuICBjb25zdCByZXNlcnZlUGN0ID0gb3B0cy5yZXNlcnZlUGN0ID8/IDIwO1xuICBjb25zdCBhbmNob3JTcGFjaW5nRnQgPSBvcHRzLmFuY2hvclNwYWNpbmdGdCA/PyAxMDA7XG4gIGlmICghKHdpZHRoTSA+IDApIHx8ICEodmVsb2NpdHlNcyA+PSAwKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHNpblRoZXRhID0gdmVsb2NpdHlNcyA+IGVudHJhaW4gPyBlbnRyYWluIC8gdmVsb2NpdHlNcyA6IDE7XG4gIGNvbnN0IGFuZ2xlRGVnID0gKE1hdGguYXNpbihzaW5UaGV0YSkgKiAxODApIC8gTWF0aC5QSTtcbiAgY29uc3QgbGVuZ3RoRnQgPSAod2lkdGhNIC8gc2luVGhldGEpICogMy4yODA4NCAqICgxICsgcmVzZXJ2ZVBjdCAvIDEwMCk7XG4gIGNvbnN0IGJvb21GdCA9IE1hdGguY2VpbChsZW5ndGhGdCAvIDUwKSAqIDUwOyAvLyByb3VuZCB1cCB0byA1MC1mdCBzdGlja3NcbiAgY29uc3QgYW5jaG9ycyA9IE1hdGgubWF4KDIsIE1hdGguY2VpbChib29tRnQgLyBhbmNob3JTcGFjaW5nRnQpICsgMSk7XG4gIHJldHVybiB7XG4gICAgYm9vbV9mdDogYm9vbUZ0LFxuICAgIGJvb21fYW5nbGVfZGVnOiBNYXRoLnJvdW5kKGFuZ2xlRGVnKSxcbiAgICBhbmNob3JzLFxuICAgIGRlZmxlY3Rpb246IHZlbG9jaXR5TXMgPiBlbnRyYWluLFxuICAgIGNhc2NhZGVfYWR2aXNlZDogYW5nbGVEZWcgPCAxNSwgLy8gdG9vIGZhc3QgZm9yIGEgc2luZ2xlIHN3ZWVwIOKAlCBjYXNjYWRlIGJvb21zXG4gIH07XG59XG5cbi8qKiBUcmFjZSBsaW5lICsgaG91cmx5IG1hcmtlcnMgYXMgYSBHZW9KU09OIEZlYXR1cmVDb2xsZWN0aW9uICh3aWRnZXQgcHJldmlldykuICovXG5leHBvcnQgZnVuY3Rpb24gdG9HZW9Kc29uKHJlc3VsdCkge1xuICBjb25zdCBkZiA9IHJlc3VsdC50cmFjZTtcbiAgY29uc3QgZmMgPSB7XG4gICAgdHlwZTogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxuICAgIGZlYXR1cmVzOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAga2luZDogXCJ0cmFjZVwiLCByaXZlcjogcmVzdWx0LnJpdmVyX25hbWUsXG4gICAgICAgICAgZGlzdGFuY2Vfa21fMjRoOiByZXN1bHQuZGlzdGFuY2Vfa21fMjRoLFxuICAgICAgICB9LFxuICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxuICAgICAgICAgIGNvb3JkaW5hdGVzOiBkZi5tYXAoKHIpID0+IFtcbiAgICAgICAgICAgIE1hdGgucm91bmQoci5sb24gKiAxZTYpIC8gMWU2LCBNYXRoLnJvdW5kKHIubGF0ICogMWU2KSAvIDFlNixcbiAgICAgICAgICBdKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgZm9yIChjb25zdCBoIG9mIHJlc3VsdC5ob3VybHkpIHtcbiAgICBmYy5mZWF0dXJlcy5wdXNoKHtcbiAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgcHJvcGVydGllczogeyBraW5kOiBcImhvdXJcIiwgaG91cjogaC5ob3VyLCBjdW1fZGlzdF9rbTogaC5jdW1fZGlzdF9rbSwgdmVsb2NpdHlfbXBoOiBoLnZlbG9jaXR5X21waCB9LFxuICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICBjb29yZGluYXRlczogW01hdGgucm91bmQoaC5sb24gKiAxZTYpIC8gMWU2LCBNYXRoLnJvdW5kKGgubGF0ICogMWU2KSAvIDFlNl0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBmYztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX0dyYXBoaWNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9Qb2ludF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X1BvbHlsaW5lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfZ2VvbWV0cnlFbmdpbmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfRmVhdHVyZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0dyYXBoaWNzTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKipcbiAqIFNwaWxsIFRyYWplY3Rvcnkgd2lkZ2V0IOKAlCBydW50aW1lLlxuICpcbiAqIENsaWNrIFwiU2V0IHNwaWxsIHBvaW50XCIg4oaSIGNsaWNrIHRoZSBtYXAg4oaSIHRoZSBnb2xkZW4tdGVzdGVkIHRyYWNlIGVuZ2luZVxuICogKHRyYWNlLWVuZ2luZS50cywgcGFyaXR5LXZlcmlmaWVkIHZzIHRoZSBQeXRob24gb3JhY2xlKSBkcmF3cyBhbiBlcGhlbWVyYWxcbiAqIHRpbWUtY29sb3JlZCBwbHVtZSBvbiBhIGNsaWVudC1zaWRlIEdyYXBoaWNzTGF5ZXIgd2l0aCBob3VybHkgbWFya2VycyxcbiAqIHBsdXMgYW4gRVRBLXNvcnRlZCBzdHJhdGVneS1zaXRlIGxpc3QgYW5kIHJlY2VwdG9yIHdhcm5pbmdzLlxuICogTm90aGluZyBpcyBwZXJzaXN0ZWQg4oCUIENsZWFyIChvciB3aWRnZXQgdW5tb3VudCkgcmVtb3ZlcyBldmVyeXRoaW5nLlxuICovXG5pbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCB0eXBlIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJ1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInXG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnXG5pbXBvcnQgUG9seWxpbmUgZnJvbSAnZXNyaS9nZW9tZXRyeS9Qb2x5bGluZSdcbmltcG9ydCBQb2ludCBmcm9tICdlc3JpL2dlb21ldHJ5L1BvaW50J1xuaW1wb3J0IHsgZ2VvZGVzaWNMZW5ndGggfSBmcm9tICdlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lJ1xuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZywgU2l0ZUxheWVyQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHsgZmV0Y2hUcmFjZURhdGEsIGNvbXB1dGVUcmFjZSwgZXN0aW1hdGVCb29tTmVlZHMgfSBmcm9tICcuLi90cmFjZS1lbmdpbmUnXG5cbmNvbnN0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9ID0gUmVhY3RcblxuLy8gRVRBIGNvbG9yIGJhbmRzOiA8MyBociAvIDPigJMxMiBociAvIDEy4oCTMjQgaHJcbmNvbnN0IEJBTkRfQ09MT1JTOiBBcnJheTxbbnVtYmVyLCBzdHJpbmddPiA9IFtcbiAgWzMsICcjZDcxOTFjJ10sXG4gIFsxMiwgJyNmZGFlNjEnXSxcbiAgWzI0LCAnIzJjN2JiNiddLFxuXVxuY29uc3QgYmFuZENvbG9yID0gKGhyOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBmb3IgKGNvbnN0IFtsaW0sIGNdIG9mIEJBTkRfQ09MT1JTKSBpZiAoaHIgPCBsaW0pIHJldHVybiBjXG4gIHJldHVybiAnIzJjN2JiNidcbn1cbmNvbnN0IGhleFRvUmdiID0gKGhleDogc3RyaW5nKTogbnVtYmVyW10gPT4gW1xuICBwYXJzZUludChoZXguc2xpY2UoMSwgMyksIDE2KSwgcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNiksIHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpLFxuXVxuXG5pbnRlcmZhY2UgU2l0ZVJvdyB7XG4gIG5hbWU6IHN0cmluZ1xuICBldGFfaHI6IG51bWJlclxuICBkaXN0X2ttOiBudW1iZXJcbiAgb2Zmc2V0X206IG51bWJlclxuICByaXZlcl93aWR0aF9tPzogbnVtYmVyXG4gIHZlbG9jaXR5X21zPzogbnVtYmVyXG4gIGJvb20/OiB7IGJvb21fZnQ6IG51bWJlciwgYW5jaG9yczogbnVtYmVyLCBib29tX2FuZ2xlX2RlZz86IG51bWJlciwgY2FzY2FkZV9hZHZpc2VkPzogYm9vbGVhbiwgc291cmNlOiAnZHJhd24nIHwgJ2VzdCcgfVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmNvbnN0IG5vcm1HdWlkID0gKHY6IGFueSk6IHN0cmluZyA9PiBTdHJpbmcodiB8fCAnJykucmVwbGFjZSgvW3t9XS9nLCAnJykudG9Mb3dlckNhc2UoKVxuXG4vKiogU3VtIGdlb2Rlc2ljIGZlZXQgb2YgZHJhd24gYm9vbSBsaW5lcyBwZXIgc2l0ZSBrZXkgKGUuZy4gU25ha2UgQm9vbV9MaW5lcykuICovXG5hc3luYyBmdW5jdGlvbiBmZXRjaERyYXduQm9vbShjZmc6IHsgdXJsOiBzdHJpbmcsIHNpdGVLZXlGaWVsZDogc3RyaW5nLCB3aGVyZT86IHN0cmluZyB9KTogUHJvbWlzZTxNYXA8c3RyaW5nLCBudW1iZXI+PiB7XG4gIGNvbnN0IGZsID0gbmV3IEZlYXR1cmVMYXllcih7IHVybDogY2ZnLnVybCB9KVxuICBjb25zdCBxID0gZmwuY3JlYXRlUXVlcnkoKVxuICBxLndoZXJlID0gY2ZnLndoZXJlIHx8ICcxPTEnXG4gIHEub3V0RmllbGRzID0gW2NmZy5zaXRlS2V5RmllbGRdXG4gIHEucmV0dXJuR2VvbWV0cnkgPSB0cnVlXG4gIHEub3V0U3BhdGlhbFJlZmVyZW5jZSA9IHsgd2tpZDogNDMyNiB9IGFzIGFueVxuICBjb25zdCBmcyA9IGF3YWl0IGZsLnF1ZXJ5RmVhdHVyZXMocSlcbiAgY29uc3Qgb3V0ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKVxuICBmb3IgKGNvbnN0IGYgb2YgZnMuZmVhdHVyZXMpIHtcbiAgICBjb25zdCBrZXkgPSBub3JtR3VpZChmLmF0dHJpYnV0ZXNbY2ZnLnNpdGVLZXlGaWVsZF0pXG4gICAgaWYgKCFrZXkgfHwgIWYuZ2VvbWV0cnkpIGNvbnRpbnVlXG4gICAgY29uc3QgZnQgPSBnZW9kZXNpY0xlbmd0aChmLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5bGluZSwgJ2ZlZXQnKVxuICAgIGlmIChmdCA+IDApIG91dC5zZXQoa2V5LCAob3V0LmdldChrZXkpIHx8IDApICsgZnQpXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xuICBjb25zdCBbam12LCBzZXRKbXZdID0gdXNlU3RhdGU8SmltdU1hcFZpZXc+KG51bGwpXG4gIGNvbnN0IFthcm1pbmcsIHNldEFybWluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3J1bm5pbmcsIHNldFJ1bm5pbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnQ2xpY2sgXCJTZXQgc3BpbGwgcG9pbnRcIiwgdGhlbiBjbGljayB0aGUgcml2ZXIuJylcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPGFueT4obnVsbClcbiAgY29uc3QgW3NhZmV0eSwgc2V0U2FmZXR5XSA9IHVzZVN0YXRlPG51bWJlcj4ocHJvcHMuY29uZmlnLnNhZmV0eUZhY3RvciA/PyAxLjUpXG4gIGNvbnN0IFtkaWFnLCBzZXREaWFnXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcbiAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBsYXllclJlZiA9IHVzZVJlZjxfX2VzcmkuR3JhcGhpY3NMYXllcj4obnVsbClcbiAgY29uc3QgY2xpY2tIYW5kbGVSZWYgPSB1c2VSZWY8X19lc3JpLkhhbmRsZT4obnVsbClcbiAgLy8gY2FjaGVkIGh5ZHJvbG9neSBmb3IgdGhlIGN1cnJlbnQgc3BpbGwgcG9pbnQg4oCUIHNhZmV0eS1mYWN0b3IgY2hhbmdlc1xuICAvLyByZWNvbXB1dGUgZnJvbSB0aGlzIGluc3RhbnRseSBpbnN0ZWFkIG9mIHJlLWZldGNoaW5nIE5MREkvTldJU1xuICBjb25zdCBjYWNoZVJlZiA9IHVzZVJlZjx7IGxhdDogbnVtYmVyLCBsb246IG51bWJlciwgZGF0YTogYW55LCBkcmF3bjogTWFwPHN0cmluZywgbnVtYmVyPiwgZmV0Y2hOb3Rlczogc3RyaW5nW10gfSB8IG51bGw+KG51bGwpXG5cbiAgLy8gb25lIGdyYXBoaWNzIGxheWVyIHBlciB3aWRnZXQgbGlmZXRpbWU7IHJlbW92ZWQgb24gdW5tb3VudCAoZXBoZW1lcmFsKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoY2xpY2tIYW5kbGVSZWYuY3VycmVudCkgY2xpY2tIYW5kbGVSZWYuY3VycmVudC5yZW1vdmUoKVxuICAgICAgaWYgKGxheWVyUmVmLmN1cnJlbnQgJiYgam12KSBqbXYudmlldy5tYXAucmVtb3ZlKGxheWVyUmVmLmN1cnJlbnQpXG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2ptdl0pXG5cbiAgY29uc3QgZW5zdXJlTGF5ZXIgPSAodmlldzogX19lc3JpLk1hcFZpZXcpOiBfX2VzcmkuR3JhcGhpY3NMYXllciA9PiB7XG4gICAgaWYgKCFsYXllclJlZi5jdXJyZW50KSB7XG4gICAgICBsYXllclJlZi5jdXJyZW50ID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyB0aXRsZTogJ1NwaWxsIHRyYWplY3RvcnkgKGVwaGVtZXJhbCknLCBsaXN0TW9kZTogJ2hpZGUnIH0pXG4gICAgICB2aWV3Lm1hcC5hZGQobGF5ZXJSZWYuY3VycmVudClcbiAgICB9XG4gICAgcmV0dXJuIGxheWVyUmVmLmN1cnJlbnRcbiAgfVxuXG4gIC8vIC0tLS0gcHJvdmlkZXJzOiB3cmFwIGNvbmZpZ3VyZWQgbGF5ZXJzIGZvciB0aGUgZW5naW5lIC0tLS1cbiAgLy8gRmFpbHVyZXMgYXJlIHJlcG9ydGVkIHRvIHRoZSBkaWFnbm9zdGljcyBsaXN0IGluc3RlYWQgb2Yga2lsbGluZyB0aGUgdHJhY2UuXG4gIGNvbnN0IG1ha2VTaXRlUHJvdmlkZXIgPSAobGM6IFNpdGVMYXllckNvbmZpZywgZGVmYXVsdEJ1ZmZlcjogbnVtYmVyLCBsYWJlbDogc3RyaW5nLCBub3Rlczogc3RyaW5nW10pID0+ICh7XG4gICAgYnVmZmVyX206IGxjLmJ1ZmZlck0gPz8gZGVmYXVsdEJ1ZmZlcixcbiAgICBmZXRjaDogYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmwgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiBsYy51cmwgfSlcbiAgICAgICAgY29uc3QgcSA9IGZsLmNyZWF0ZVF1ZXJ5KClcbiAgICAgICAgcS53aGVyZSA9IGxjLndoZXJlIHx8ICcxPTEnXG4gICAgICAgIHEub3V0RmllbGRzID0gW2xjLm5hbWVGaWVsZCwgLi4uKGxjLmV4dHJhRmllbGRzIHx8IFtdKV1cbiAgICAgICAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcbiAgICAgICAgcS5vdXRTcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiA0MzI2IH0gYXMgYW55XG4gICAgICAgIGNvbnN0IGZzID0gYXdhaXQgZmwucXVlcnlGZWF0dXJlcyhxKVxuICAgICAgICBjb25zdCByb3dzID0gZnMuZmVhdHVyZXNcbiAgICAgICAgICAuZmlsdGVyKChmKSA9PiBmLmdlb21ldHJ5ICYmIGYuZ2VvbWV0cnkudHlwZSA9PT0gJ3BvaW50JylcbiAgICAgICAgICAubWFwKChmKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZi5nZW9tZXRyeSBhcyBfX2VzcmkuUG9pbnRcbiAgICAgICAgICAgIGNvbnN0IHJvdzogYW55ID0geyBuYW1lOiBmLmF0dHJpYnV0ZXNbbGMubmFtZUZpZWxkXSwgbGF0OiBnLnksIGxvbjogZy54IH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgZWYgb2YgbGMuZXh0cmFGaWVsZHMgfHwgW10pIHJvd1tlZl0gPSBmLmF0dHJpYnV0ZXNbZWZdXG4gICAgICAgICAgICByZXR1cm4gcm93XG4gICAgICAgICAgfSlcbiAgICAgICAgbm90ZXMucHVzaChgJHtsYWJlbH06ICR7cm93cy5sZW5ndGh9IHBvaW50IGZlYXR1cmVzIGxvYWRlZCAoYnVmZmVyICR7bGMuYnVmZmVyTSA/PyBkZWZhdWx0QnVmZmVyfSBtKWApXG4gICAgICAgIHJldHVybiByb3dzXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG5vdGVzLnB1c2goYCR7bGFiZWx9IEZBSUxFRDogJHtTdHJpbmcoZSkuc2xpY2UoMCwgMTAwKX1gKVxuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICB9LFxuICB9KVxuXG4gIGNvbnN0IG1ha2VXaWR0aFByb3ZpZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHdsID0gcHJvcHMuY29uZmlnLndpZHRoTGF5ZXJcbiAgICBpZiAoIXdsIHx8ICF3bC51cmwpIHJldHVybiBudWxsXG4gICAgY29uc3QgZmwgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiB3bC51cmwgfSlcbiAgICByZXR1cm4gYXN5bmMgKGVudjogeyB4bWluOiBudW1iZXIsIHltaW46IG51bWJlciwgeG1heDogbnVtYmVyLCB5bWF4OiBudW1iZXIgfSkgPT4ge1xuICAgICAgY29uc3QgcSA9IGZsLmNyZWF0ZVF1ZXJ5KClcbiAgICAgIHEud2hlcmUgPSB3bC53aGVyZSB8fCAnMT0xJ1xuICAgICAgcS5nZW9tZXRyeSA9IHsgdHlwZTogJ2V4dGVudCcsIC4uLmVudiwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gfSBhcyBhbnlcbiAgICAgIHEuc3BhdGlhbFJlbGF0aW9uc2hpcCA9ICdpbnRlcnNlY3RzJ1xuICAgICAgcS5vdXRGaWVsZHMgPSBbd2wud2lkdGhGaWVsZF1cbiAgICAgIHEucmV0dXJuR2VvbWV0cnkgPSB0cnVlXG4gICAgICBxLm91dFNwYXRpYWxSZWZlcmVuY2UgPSB7IHdraWQ6IDQzMjYgfSBhcyBhbnlcbiAgICAgIGNvbnN0IGZzID0gYXdhaXQgZmwucXVlcnlGZWF0dXJlcyhxKVxuICAgICAgY29uc3QgbWlkczogQXJyYXk8eyBsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIsIHdpZHRoOiBudW1iZXIgfT4gPSBbXVxuICAgICAgZm9yIChjb25zdCBmIG9mIGZzLmZlYXR1cmVzKSB7XG4gICAgICAgIGNvbnN0IGcgPSBmLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5bGluZVxuICAgICAgICBpZiAoZyAmJiBnLnBhdGhzICYmIGcucGF0aHMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgcCA9IGcucGF0aHNbMF1cbiAgICAgICAgICBjb25zdCBtID0gcFtNYXRoLmZsb29yKHAubGVuZ3RoIC8gMildXG4gICAgICAgICAgbWlkcy5wdXNoKHsgbGF0OiBtWzFdLCBsb246IG1bMF0sIHdpZHRoOiBmLmF0dHJpYnV0ZXNbd2wud2lkdGhGaWVsZF0gfHwgMCB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbWlkc1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0gZHJhd2luZyAtLS0tXG4gIGNvbnN0IGRyYXcgPSAodmlldzogX19lc3JpLk1hcFZpZXcsIHJlczogYW55LCBzcGlsbDogeyBsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIgfSkgPT4ge1xuICAgIGNvbnN0IGxheWVyID0gZW5zdXJlTGF5ZXIodmlldylcbiAgICBsYXllci5yZW1vdmVBbGwoKVxuXG4gICAgLy8gc3BpbGwgcG9pbnRcbiAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xuICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludCh7IGxhdGl0dWRlOiBzcGlsbC5sYXQsIGxvbmdpdHVkZTogc3BpbGwubG9uIH0pLFxuICAgICAgc3ltYm9sOiB7XG4gICAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJywgc3R5bGU6ICd4Jywgc2l6ZTogMTQsXG4gICAgICAgIG91dGxpbmU6IHsgY29sb3I6ICcjMDAwJywgd2lkdGg6IDMgfSxcbiAgICAgIH0gYXMgYW55LFxuICAgICAgcG9wdXBUZW1wbGF0ZTogeyB0aXRsZTogJ1NwaWxsIHBvaW50JywgY29udGVudDogYCR7c3BpbGwubGF0LnRvRml4ZWQoNSl9LCAke3NwaWxsLmxvbi50b0ZpeGVkKDUpfWAgfSBhcyBhbnksXG4gICAgfSkpXG5cbiAgICAvLyB0cmFjZSBwb2x5bGluZSwgc3BsaXQgaW50byBFVEEgY29sb3IgYmFuZHNcbiAgICBjb25zdCByb3dzOiBhbnlbXSA9IHJlcy50cmFjZVxuICAgIGxldCBiYW5kU3RhcnQgPSAwXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZG9uZSA9IGkgPT09IHJvd3MubGVuZ3RoXG4gICAgICBjb25zdCBiYW5kQ2hhbmdlZCA9ICFkb25lICYmIGJhbmRDb2xvcihyb3dzW2ldLmN1bV90aW1lKSAhPT0gYmFuZENvbG9yKHJvd3NbYmFuZFN0YXJ0XS5jdW1fdGltZSlcbiAgICAgIGlmIChkb25lIHx8IGJhbmRDaGFuZ2VkKSB7XG4gICAgICAgIGNvbnN0IHNlZyA9IHJvd3Muc2xpY2UoYmFuZFN0YXJ0LCBNYXRoLm1pbihpICsgMSwgcm93cy5sZW5ndGgpKVxuICAgICAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xuICAgICAgICAgIGdlb21ldHJ5OiBuZXcgUG9seWxpbmUoeyBwYXRoczogW3NlZy5tYXAoKHIpID0+IFtyLmxvbiwgci5sYXRdKV0gYXMgYW55LCBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSBhcyBhbnkgfSksXG4gICAgICAgICAgc3ltYm9sOiB7IHR5cGU6ICdzaW1wbGUtbGluZScsIGNvbG9yOiBiYW5kQ29sb3Iocm93c1tiYW5kU3RhcnRdLmN1bV90aW1lKSwgd2lkdGg6IDQgfSBhcyBhbnksXG4gICAgICAgIH0pKVxuICAgICAgICBiYW5kU3RhcnQgPSBpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSm9ic29uIHVuY2VydGFpbnR5IGJhbmRzOiB0cmFuc2x1Y2VudCB1bmRlcmxheSBmcm9tIGJ1bGsgKHBlYWspIHBvc2l0aW9uXG4gICAgLy8gdG8gZmFydGhlc3QgY3JlZGlibGUgKDk5JSBsZWFkaW5nKSBwb3NpdGlvbiBhdCBlYWNoIGhvdXJcbiAgICBmb3IgKGNvbnN0IGggb2YgcmVzLmhvdXJseSkge1xuICAgICAgaWYgKCFoLmJhbmQpIGNvbnRpbnVlXG4gICAgICBjb25zdCBpMCA9IE1hdGgubWluKGguYmFuZC5wZWFrLmksIGguYmFuZC5mYXN0ZXN0LmkpXG4gICAgICBjb25zdCBpMSA9IE1hdGgubWF4KGguYmFuZC5wZWFrLmksIGguYmFuZC5mYXN0ZXN0LmkpXG4gICAgICBpZiAoaTEgPD0gaTApIGNvbnRpbnVlXG4gICAgICBjb25zdCBzZWcgPSByb3dzLnNsaWNlKGkwLCBpMSArIDEpXG4gICAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xuICAgICAgICBnZW9tZXRyeTogbmV3IFBvbHlsaW5lKHsgcGF0aHM6IFtzZWcubWFwKChyOiBhbnkpID0+IFtyLmxvbiwgci5sYXRdKV0gYXMgYW55LCBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSBhcyBhbnkgfSksXG4gICAgICAgIHN5bWJvbDogeyB0eXBlOiAnc2ltcGxlLWxpbmUnLCBjb2xvcjogWy4uLmhleFRvUmdiKGJhbmRDb2xvcihoLmhvdXIpKSwgMC4yOF0sIHdpZHRoOiAxNCwgY2FwOiAncm91bmQnIH0gYXMgYW55LFxuICAgICAgfSkpXG4gICAgfVxuICAgIC8vIGhvdXJseSBtYXJrZXJzICsgbGFiZWxzXG4gICAgZm9yIChjb25zdCBoIG9mIHJlcy5ob3VybHkpIHtcbiAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQoeyBsYXRpdHVkZTogaC5sYXQsIGxvbmdpdHVkZTogaC5sb24gfSksXG4gICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJywgc2l6ZTogNywgY29sb3I6IGJhbmRDb2xvcihoLmhvdXIpLFxuICAgICAgICAgIG91dGxpbmU6IHsgY29sb3I6ICcjZmZmJywgd2lkdGg6IDEgfSxcbiAgICAgICAgfSBhcyBhbnksXG4gICAgICAgIHBvcHVwVGVtcGxhdGU6IHtcbiAgICAgICAgICB0aXRsZTogYEhvdXIgJHtoLmhvdXJ9YCxcbiAgICAgICAgICBjb250ZW50OiBgJHtoLmN1bV9kaXN0X2ttLnRvRml4ZWQoMSl9IGttIGRvd25zdHJlYW0gwrcgJHtoLnZlbG9jaXR5X21waC50b0ZpeGVkKDEpfSBtcGhgLFxuICAgICAgICB9IGFzIGFueSxcbiAgICAgIH0pKVxuICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludCh7IGxhdGl0dWRlOiBoLmxhdCwgbG9uZ2l0dWRlOiBoLmxvbiB9KSxcbiAgICAgICAgc3ltYm9sOiB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHRleHQ6IGAke2guaG91cn0gaHJgLFxuICAgICAgICAgIGNvbG9yOiBiYW5kQ29sb3IoaC5ob3VyKSxcbiAgICAgICAgICBoYWxvQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICBoYWxvU2l6ZTogMS41LFxuICAgICAgICAgIHlvZmZzZXQ6IDksXG4gICAgICAgICAgZm9udDogeyBzaXplOiAxMCwgd2VpZ2h0OiAnYm9sZCcsIGZhbWlseTogJ3NhbnMtc2VyaWYnIH0sXG4gICAgICAgIH0gYXMgYW55LFxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLSBtb2RlbCBjb25maWcgKyBlcXVpcG1lbnQgKyBjb21wdXRlL3JlbmRlciAocHVyZSwgcmV1c2FibGUgb24gY2FjaGVkIGRhdGEpIC0tLS1cbiAgY29uc3QgbW9kZWxDZmcgPSAoc2Y6IG51bWJlcikgPT4gKHtcbiAgICBzYWZldHlGYWN0b3I6IHNmLFxuICAgIHRpbWluZ01vZGVsOiBwcm9wcy5jb25maWcudGltaW5nTW9kZWwgPz8gJ2h5ZHJhdWxpYycsXG4gICAgbWluU3RyZWFtT3JkZXI6IHByb3BzLmNvbmZpZy5taW5TdHJlYW1PcmRlciA/PyA0LFxuICAgIG1heEhvdXJzOiBwcm9wcy5jb25maWcubWF4SG91cnMgPz8gMjQsXG4gICAgbWF4RGlzdGFuY2VLbTogcHJvcHMuY29uZmlnLm1heERpc3RhbmNlS20gPz8gMzAwLFxuICAgIHZlcmJvc2U6IGZhbHNlLFxuICB9KVxuXG4gIGNvbnN0IGFwcGx5RXF1aXBtZW50ID0gKHJlczogYW55LCBkcmF3bjogTWFwPHN0cmluZywgbnVtYmVyPikgPT4ge1xuICAgIGNvbnN0IGVxID0gcHJvcHMuY29uZmlnLmVxdWlwbWVudFxuICAgIGlmIChlcT8uZW5hYmxlZCA9PT0gZmFsc2UpIHJldHVyblxuICAgIGNvbnN0IHJ1bGVzID0ge1xuICAgICAgZW50cmFpbm1lbnRNczogZXE/LmVudHJhaW5tZW50TXMgPz8gMC4zNSxcbiAgICAgIGFuY2hvclNwYWNpbmdGdDogZXE/LmFuY2hvclNwYWNpbmdGdCA/PyAxMDAsXG4gICAgICByZXNlcnZlUGN0OiBlcT8ucmVzZXJ2ZVBjdCA/PyAyMCxcbiAgICB9XG4gICAgZm9yIChjb25zdCBzIG9mIHJlcy5zaXRlcykge1xuICAgICAgY29uc3Qga2V5ID0gbm9ybUd1aWQocy5HbG9iYWxJRCA/PyBzLmdsb2JhbGlkID8/IHMuR0xPQkFMSUQpXG4gICAgICBjb25zdCBkcmF3bkZ0ID0ga2V5ID8gZHJhd24uZ2V0KGtleSkgOiB1bmRlZmluZWRcbiAgICAgIGlmIChkcmF3bkZ0KSB7XG4gICAgICAgIGNvbnN0IGJvb21GdCA9IE1hdGguY2VpbChkcmF3bkZ0IC8gNTApICogNTBcbiAgICAgICAgcy5ib29tID0ge1xuICAgICAgICAgIGJvb21fZnQ6IGJvb21GdCxcbiAgICAgICAgICBhbmNob3JzOiBNYXRoLm1heCgyLCBNYXRoLmNlaWwoYm9vbUZ0IC8gcnVsZXMuYW5jaG9yU3BhY2luZ0Z0KSArIDEpLFxuICAgICAgICAgIHNvdXJjZTogJ2RyYXduJyxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZXN0ID0gZXN0aW1hdGVCb29tTmVlZHMocy5yaXZlcl93aWR0aF9tLCBzLnZlbG9jaXR5X21zLCBydWxlcylcbiAgICAgICAgaWYgKGVzdCkgcy5ib29tID0geyAuLi5lc3QsIHNvdXJjZTogJ2VzdCcgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNvbXB1dGVBbmRSZW5kZXIgPSAoc2Y6IG51bWJlciwgZnJvbUNhY2hlID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBjID0gY2FjaGVSZWYuY3VycmVudFxuICAgIGlmICghYyB8fCAham12KSByZXR1cm5cbiAgICBjb25zdCByZXMgPSBjb21wdXRlVHJhY2UoYy5kYXRhLCBtb2RlbENmZyhzZikpXG4gICAgYXBwbHlFcXVpcG1lbnQocmVzLCBjLmRyYXduKVxuICAgIGRyYXcoam12LnZpZXcgYXMgX19lc3JpLk1hcFZpZXcsIHJlcywgeyBsYXQ6IGMubGF0LCBsb246IGMubG9uIH0pXG4gICAgaWYgKGxheWVyUmVmLmN1cnJlbnQpIGxheWVyUmVmLmN1cnJlbnQudmlzaWJsZSA9IHRydWVcbiAgICBzZXRIaWRkZW4oZmFsc2UpXG4gICAgc2V0UmVzdWx0KHJlcylcbiAgICBzZXREaWFnKFsuLi5jLmZldGNoTm90ZXMsIGAke3Jlcy5zaXRlcy5sZW5ndGh9IHNpdGUocykgd2l0aGluIGJ1ZmZlciBvZiB0aGUgdHJhY2UuYF0pXG4gICAgc2V0U3RhdHVzKFxuICAgICAgYCR7cmVzLnJpdmVyX25hbWUgfHwgJ1RyYWNlJ30g4oCUICR7cmVzLmRpc3RhbmNlX2ttXzI0aC50b0ZpeGVkKDEpfSBrbSBpbiDiiaQgJHtwcm9wcy5jb25maWcubWF4SG91cnMgPz8gMjR9IGhgICtcbiAgICAgIChmcm9tQ2FjaGUgPyAnIMK3IHJlY29tcHV0ZWQgaW5zdGFudGx5IGZyb20gY2FjaGVkIGh5ZHJvbG9neScgOiAnJyksXG4gICAgKVxuICB9XG5cbiAgLy8gLS0tLSBydW4gLS0tLVxuICBjb25zdCBhcm1DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWptdiB8fCBhcm1pbmcgfHwgcnVubmluZykgcmV0dXJuXG4gICAgc2V0QXJtaW5nKHRydWUpXG4gICAgc2V0U3RhdHVzKCdDbGljayB0aGUgc3BpbGwgbG9jYXRpb24gb24gdGhlIG1hcOKApicpXG4gICAgY2xpY2tIYW5kbGVSZWYuY3VycmVudCA9IGptdi52aWV3Lm9uKCdjbGljaycsIGFzeW5jIChldnQpID0+IHtcbiAgICAgIGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQucmVtb3ZlKClcbiAgICAgIGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICBzZXRBcm1pbmcoZmFsc2UpXG4gICAgICBjb25zdCBtcCA9IGV2dC5tYXBQb2ludFxuICAgICAgY29uc3QgbGF0ID0gbXAubGF0aXR1ZGUsIGxvbiA9IG1wLmxvbmdpdHVkZVxuICAgICAgc2V0UnVubmluZyh0cnVlKVxuICAgICAgc2V0UmVzdWx0KG51bGwpXG4gICAgICBzZXREaWFnKFtdKVxuICAgICAgc2V0U3RhdHVzKGBUcmFjaW5nIGZyb20gJHtsYXQudG9GaXhlZCg0KX0sICR7bG9uLnRvRml4ZWQoNCl94oCmYClcbiAgICAgIGNvbnN0IG5vdGVzOiBzdHJpbmdbXSA9IFtdXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjZmcgPSBwcm9wcy5jb25maWdcbiAgICAgICAgY29uc3Qgc2l0ZUxheWVycyA9IChjZmcuc2l0ZUxheWVycyB8fCBbXSkgYXMgYW55XG4gICAgICAgIGNvbnN0IHJlY2VwdG9yTGF5ZXJzID0gKGNmZy5yZWNlcHRvckxheWVycyB8fCBbXSkgYXMgYW55XG4gICAgICAgIGlmICghc2l0ZUxheWVycy5sZW5ndGgpIG5vdGVzLnB1c2goJ05vIHNpdGUgbGF5ZXJzIGNvbmZpZ3VyZWQg4oCUIGFkZCB0aGVtIGluIHRoZSB3aWRnZXQgc2V0dGluZ3MgKFNpdGUgbGF5ZXJzIEpTT04pLicpXG5cbiAgICAgICAgLy8gZmV0Y2ggZXZlcnl0aGluZyBvbmNlICh0cmFjZSwgZmxvd3MsIHdpZHRocywgc2l0ZS9yZWNlcHRvciBmZWF0dXJlcylcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoVHJhY2VEYXRhKGxhdCwgbG9uLCB7XG4gICAgICAgICAgLi4ubW9kZWxDZmcoc2FmZXR5KSxcbiAgICAgICAgICB3aWR0aFByb3ZpZGVyOiBtYWtlV2lkdGhQcm92aWRlcigpLFxuICAgICAgICAgIHNpdGVQcm92aWRlcnM6IHNpdGVMYXllcnMubWFwKChsYywgaSkgPT4gbWFrZVNpdGVQcm92aWRlcihsYywgNTAwLCBgU2l0ZSBsYXllciAke2kgKyAxfWAsIG5vdGVzKSksXG4gICAgICAgICAgcmVjZXB0b3JQcm92aWRlcnM6IHJlY2VwdG9yTGF5ZXJzLm1hcCgobGMsIGkpID0+IG1ha2VTaXRlUHJvdmlkZXIobGMsIDgwMCwgYFJlY2VwdG9yIGxheWVyICR7aSArIDF9YCwgbm90ZXMpKSxcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBkcmF3biBib29tIGxpbmVzOiBwZXItc2l0ZS1sYXllciBib29tTGF5ZXIgKCsgbGVnYWN5IGdsb2JhbCBlcXVpcG1lbnQuYm9vbUxheWVyKVxuICAgICAgICBjb25zdCBkcmF3biA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcbiAgICAgICAgY29uc3QgZXEgPSBjZmcuZXF1aXBtZW50XG4gICAgICAgIGlmIChlcT8uZW5hYmxlZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBjb25zdCBib29tQ2ZnczogYW55W10gPSBbXVxuICAgICAgICAgIGZvciAoY29uc3QgbGMgb2Ygc2l0ZUxheWVycykgaWYgKGxjLmJvb21MYXllcj8udXJsKSBib29tQ2Zncy5wdXNoKGxjLmJvb21MYXllcilcbiAgICAgICAgICBpZiAoZXE/LmJvb21MYXllcj8udXJsKSBib29tQ2Zncy5wdXNoKGVxLmJvb21MYXllcilcbiAgICAgICAgICBjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KClcbiAgICAgICAgICBmb3IgKGNvbnN0IGJjIG9mIGJvb21DZmdzKSB7XG4gICAgICAgICAgICBjb25zdCBzaWcgPSBgJHtiYy51cmx9fCR7YmMuc2l0ZUtleUZpZWxkfWBcbiAgICAgICAgICAgIGlmIChzZWVuLmhhcyhzaWcpKSBjb250aW51ZVxuICAgICAgICAgICAgc2Vlbi5hZGQoc2lnKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3QgbSA9IGF3YWl0IGZldGNoRHJhd25Cb29tKGJjIGFzIGFueSlcbiAgICAgICAgICAgICAgbS5mb3JFYWNoKCh2LCBrKSA9PiBkcmF3bi5zZXQoaywgKGRyYXduLmdldChrKSB8fCAwKSArIHYpKVxuICAgICAgICAgICAgICBub3Rlcy5wdXNoKGBCb29tIGxpbmVzICgke3NpZy5zcGxpdCgnLycpLnNsaWNlKC0yKVswXX0pOiBkcmF3biBmb290YWdlIGZvciAke20uc2l6ZX0gc2l0ZShzKWApXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIG5vdGVzLnB1c2goYEJvb20gbGF5ZXIgRkFJTEVEOiAke1N0cmluZyhlKS5zbGljZSgwLCA5MCl9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjYWNoZVJlZi5jdXJyZW50ID0geyBsYXQsIGxvbiwgZGF0YSwgZHJhd24sIGZldGNoTm90ZXM6IG5vdGVzLnNsaWNlKCkgfVxuICAgICAgICBjb21wdXRlQW5kUmVuZGVyKHNhZmV0eSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0U3RhdHVzKGBUcmFjZSBmYWlsZWQ6ICR7U3RyaW5nKGUpLnNsaWNlKDAsIDEyMCl9YClcbiAgICAgICAgc2V0RGlhZyhub3RlcylcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldFJ1bm5pbmcoZmFsc2UpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgW2ptdiwgYXJtaW5nLCBydW5uaW5nLCBzYWZldHksIHByb3BzLmNvbmZpZ10pXG5cbiAgY29uc3QgY2xlYXJBbGwgPSAoKSA9PiB7XG4gICAgaWYgKGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQpIHsgY2xpY2tIYW5kbGVSZWYuY3VycmVudC5yZW1vdmUoKTsgY2xpY2tIYW5kbGVSZWYuY3VycmVudCA9IG51bGwgfVxuICAgIGlmIChsYXllclJlZi5jdXJyZW50KSBsYXllclJlZi5jdXJyZW50LnJlbW92ZUFsbCgpXG4gICAgY2FjaGVSZWYuY3VycmVudCA9IG51bGxcbiAgICBzZXRBcm1pbmcoZmFsc2UpXG4gICAgc2V0UmVzdWx0KG51bGwpXG4gICAgc2V0RGlhZyhbXSlcbiAgICBzZXRIaWRkZW4oZmFsc2UpXG4gICAgc2V0U3RhdHVzKCdDbGVhcmVkLiBDbGljayBcIlNldCBzcGlsbCBwb2ludFwiIHRvIHJ1biBhZ2Fpbi4nKVxuICB9XG5cbiAgLy8gYnJpZWZpbmcgdG9nZ2xlOiBoaWRlL3Nob3cgdGhlIHRyYWplY3RvcnkgZ3JhcGhpY3MgV0lUSE9VVCB0b3VjaGluZyB0aGVcbiAgLy8gY2FjaGVkIHJ1biDigJQgcHJlc2VudGVyIGNhbiBmbGlwIHRoZSBtb2RlbCBvZmYgZHVyaW5nIGEgc2xpZGUgYW5kIGJhY2tcbiAgY29uc3QgdG9nZ2xlVmlzaWJsZSA9ICgpID0+IHtcbiAgICBpZiAoIWxheWVyUmVmLmN1cnJlbnQpIHJldHVyblxuICAgIGNvbnN0IHYgPSAhbGF5ZXJSZWYuY3VycmVudC52aXNpYmxlXG4gICAgbGF5ZXJSZWYuY3VycmVudC52aXNpYmxlID0gdlxuICAgIHNldEhpZGRlbighdilcbiAgfVxuXG4gIGNvbnN0IHNpdGVzOiBTaXRlUm93W10gPSByZXN1bHQ/LnNpdGVzIHx8IFtdXG4gIGNvbnN0IHdhcm5pbmdzOiBzdHJpbmdbXSA9IHJlc3VsdD8ud2FybmluZ3MgfHwgW11cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiamltdS13aWRnZXRcIiBzdHlsZT17eyBwYWRkaW5nOiAxMCwgb3ZlcmZsb3c6ICdhdXRvJywgZm9udFNpemU6IDEzIH19PlxuICAgICAge3Byb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHNbMF19XG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXsodikgPT4gc2V0Sm12KHYpfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHshcHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5sZW5ndGggJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnI2IwMCcgfX0+U2VsZWN0IGEgTWFwIHdpZGdldCBpbiB0aGlzIHdpZGdldCdzIHNldHRpbmdzLjwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogNiwgbWFyZ2luQm90dG9tOiA4IH19PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBkaXNhYmxlZD17IWptdiB8fCBhcm1pbmcgfHwgcnVubmluZ30gb25DbGljaz17YXJtQ2xpY2t9PlxuICAgICAgICAgIHthcm1pbmcgPyAnQ2xpY2sgdGhlIG1hcOKApicgOiBydW5uaW5nID8gJ1RyYWNpbmfigKYnIDogJ1NldCBzcGlsbCBwb2ludCd9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIGRpc2FibGVkPXtydW5uaW5nfSBvbkNsaWNrPXtjbGVhckFsbH0+Q2xlYXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiBkaXNhYmxlZD17IXJlc3VsdH0gb25DbGljaz17dG9nZ2xlVmlzaWJsZX1cbiAgICAgICAgICB0aXRsZT1cIkhpZGUvc2hvdyB0aGUgdHJhamVjdG9yeSBvbiB0aGUgbWFwIHdpdGhvdXQgbG9zaW5nIHRoZSBydW4gKGJyaWVmaW5ncylcIj5cbiAgICAgICAgICB7aGlkZGVuID8gJ/CfkYEgU2hvdycgOiAn8J+RgSBIaWRlJ31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgZGlzYWJsZWQ9eyFyZXN1bHR9IHRpdGxlPVwiQ29weSBydW4gcHJvdmVuYW5jZSByZWNvcmQgKEpTT04pIGZvciBhZnRlci1hY3Rpb24gZG9jdW1lbnRhdGlvbiDigJQgaW5jbHVkZXMgYSByZXBsYXkgVVJMXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdD8ucnVuUmVjb3JkIHx8ICFjYWNoZVJlZi5jdXJyZW50KSByZXR1cm5cbiAgICAgICAgICAgIGNvbnN0IHJlYzogYW55ID0geyAuLi5yZXN1bHQucnVuUmVjb3JkIH1cbiAgICAgICAgICAgIGNvbnN0IHUgPSBuZXcgVVJMKCdodHRwczovL3doaXRld2F0ZXJyZXNjdWUuZ2l0aHViLmlvL3dyaS1leGItd2lkZ2V0cy9lbWJlZC8nKVxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdjb25maWcnLCAnYWxsLWdycHMnKVxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdsYXQnLCBjYWNoZVJlZi5jdXJyZW50LmxhdC50b0ZpeGVkKDUpKVxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdsb24nLCBjYWNoZVJlZi5jdXJyZW50Lmxvbi50b0ZpeGVkKDUpKVxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdhc09mJywgcmVjLmFzX29mICE9PSAnbGl2ZScgPyByZWMuYXNfb2YgOiByZWMuZ2VuZXJhdGVkX2F0LnNsaWNlKDAsIDEwKSlcbiAgICAgICAgICAgIHUuc2VhcmNoUGFyYW1zLnNldCgnc2YnLCBTdHJpbmcoc2FmZXR5KSlcbiAgICAgICAgICAgIHJlYy5yZXBsYXlfdXJsID0gdS50b1N0cmluZygpXG4gICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChKU09OLnN0cmluZ2lmeShyZWMsIG51bGwsIDEpKS50aGVuKCgpID0+IHNldFN0YXR1cygnUnVuIHJlY29yZCBjb3BpZWQgKGluY2x1ZGVzIHJlcGxheV91cmwpLicpKVxuICAgICAgICAgIH19PlxuICAgICAgICAgIOKOmCBSZWNvcmRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxsYWJlbCBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNCB9fVxuICAgICAgICAgIHRpdGxlPVwiU2FmZXR5IGZhY3RvciDigJQgY2hhbmdpbmcgaXQgcmUtcnVucyBpbnN0YW50bHkgZnJvbSBjYWNoZWQgaHlkcm9sb2d5XCI+XG4gICAgICAgICAgU0ZcbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtzYWZldHl9IGRpc2FibGVkPXtydW5uaW5nfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICBzZXRTYWZldHkodilcbiAgICAgICAgICAgICAgaWYgKGNhY2hlUmVmLmN1cnJlbnQgJiYgIXJ1bm5pbmcpIGNvbXB1dGVBbmRSZW5kZXIodiwgdHJ1ZSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MS4wfT4xLjA8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEuMjV9PjEuMjU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEuNX0+MS41PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsyLjB9PjIuMDwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4LCBtaW5IZWlnaHQ6IDE4IH19PntydW5uaW5nICYmIDxzcGFuIGNsYXNzTmFtZT1cImppbXUtc2Vjb25kYXJ5LWxvYWRpbmdcIiAvPn0ge3N0YXR1c308L2Rpdj5cblxuICAgICAge2RpYWcubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjODg4JywgZm9udFNpemU6IDExLCBtYXJnaW5Cb3R0b206IDggfX0+XG4gICAgICAgICAge2RpYWcubWFwKChkLCBpKSA9PiA8ZGl2IGtleT17aX0+e2R9PC9kaXY+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7d2FybmluZ3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJyNmZmYzY2QnLCBib3JkZXI6ICcxcHggc29saWQgI2ZmZWViYScsIHBhZGRpbmc6IDYsIG1hcmdpbkJvdHRvbTogOCwgYm9yZGVyUmFkaXVzOiA0IH19PlxuICAgICAgICAgIHt3YXJuaW5ncy5tYXAoKHcsIGkpID0+IDxkaXYga2V5PXtpfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIgfX0+4pqgIHt3fTwvZGl2Pil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge3Jlc3VsdCAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4LCBjb2xvcjogJyM1NTUnIH19PlxuICAgICAgICAgIEVUQXMgYXJlIGVzdGltYXRlcyAowrEyMCUpLCBzYWZldHkgZmFjdG9yIMOXe3Jlc3VsdC5zYWZldHlfZmFjdG9yfSBhcHBsaWVkIOKAlCB0cmVhdCBhcyBiYW5kcywgbm90IGFwcG9pbnRtZW50cy5cbiAgICAgICAgICB7cmVzdWx0LmdhdWdlc191c2VkLmxlbmd0aFxuICAgICAgICAgICAgPyBgIEZsb3dzOiAke3Jlc3VsdC5nYXVnZXNfdXNlZC5tYXAoKGc6IGFueSkgPT4gZy5zdGF0aW9uX2lkKS5qb2luKCcsICcpfS5gXG4gICAgICAgICAgICA6ICcgTm8gbGl2ZSBnYXVnZXMgZm91bmQg4oCUIGRyYWluYWdlLWFyZWEgZmxvdyBlc3RpbWF0ZS4nfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtzaXRlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnIH19PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0ciBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNjY2MnIH19PlxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PkVUQTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+U2l0ZTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+a208L3RoPlxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PkJvb208L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtzaXRlcy5tYXAoKHMsIGkpID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17aX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWUnIH19PlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT17cy5ldGFfZWFybHlfaHIgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IGBlYXJsaWVzdCBjcmVkaWJsZSAke3MuZXRhX2Vhcmx5X2hyfSBociDCtyBmaXJzdCBhcnJpdmFsICR7cy5ldGFfaHJ9IGhyIMK3IHBlYWsgJHtzLmV0YV9wZWFrX2hyfSBociR7cy5jbGVhcl9ociA/IGAgwrcgY2xlYXIgfiR7cy5jbGVhcl9ocn0gaHJgIDogJyd9YFxuICAgICAgICAgICAgICAgICAgICA6ICcnfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogMTAsIGhlaWdodDogMTAsIGJvcmRlclJhZGl1czogNSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmFuZENvbG9yKHMuZXRhX2hyKSwgbWFyZ2luUmlnaHQ6IDQsXG4gICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAge3MuZXRhX2Vhcmx5X2hyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyBgJHtzLmV0YV9lYXJseV9oci50b0ZpeGVkKDEpfeKAkyR7cy5ldGFfaHIudG9GaXhlZCgxKX0gaHJgXG4gICAgICAgICAgICAgICAgICAgIDogcy5ldGFfaHIgPCAxID8gYCR7TWF0aC5yb3VuZChzLmV0YV9ociAqIDYwKX0gbWluYCA6IGAke3MuZXRhX2hyLnRvRml4ZWQoMSl9IGhyYH1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+e3MubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+e3MuZGlzdF9rbS50b0ZpeGVkKDEpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0gdGl0bGU9e3MuYm9vbVxuICAgICAgICAgICAgICAgICAgPyBgJHtzLmJvb20uYW5jaG9yc30gYW5jaG9yIHNldHMke3MuYm9vbS5ib29tX2FuZ2xlX2RlZyA/IGAgwrcgJHtzLmJvb20uYm9vbV9hbmdsZV9kZWd9wrAgZGVwbG95bWVudGAgOiAnJ30ke3MuYm9vbS5jYXNjYWRlX2FkdmlzZWQgPyAnIMK3IGZhc3Qgd2F0ZXI6IGNhc2NhZGUgbXVsdGlwbGUgYm9vbXMnIDogJyd9ICgke3MuYm9vbS5zb3VyY2UgPT09ICdkcmF3bicgPyAnZnJvbSBkcmF3biBib29tIGxpbmVzJyA6ICdlc3RpbWF0ZWQgZnJvbSBtb2RlbGVkIHdpZHRoL3ZlbG9jaXR5J30pYFxuICAgICAgICAgICAgICAgICAgOiAnJ30+XG4gICAgICAgICAgICAgICAgICB7cy5ib29tXG4gICAgICAgICAgICAgICAgICAgID8gPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzLmJvb20uYm9vbV9mdC50b0xvY2FsZVN0cmluZygpfSBmdFxuICAgICAgICAgICAgICAgICAgICAgICAge3MuYm9vbS5jYXNjYWRlX2FkdmlzZWQgJiYgJyDimqEnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjOTk5JyB9fT4ge3MuYm9vbS5zb3VyY2UgPT09ICdkcmF3bicgPyAn4pyTJyA6ICdlc3QuJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIDogJ+KAlCd9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAge3NpdGVzLnNvbWUoKHMpID0+IHMuYm9vbSkgJiYgKFxuICAgICAgICAgICAgPHRmb290PlxuICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyVG9wOiAnMnB4IHNvbGlkICNjY2MnLCBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9IHN0eWxlPXt7IHBhZGRpbmc6ICczcHggNHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgIFRvdGFscyAoe3NpdGVzLmZpbHRlcigocykgPT4gcy5ib29tKS5sZW5ndGh9IGJvb20gc2l0ZXMpXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzNweCA0cHgnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cbiAgICAgICAgICAgICAgICAgIHtzaXRlcy5yZWR1Y2UoKHQsIHMpID0+IHQgKyAocy5ib29tPy5ib29tX2Z0IHx8IDApLCAwKS50b0xvY2FsZVN0cmluZygpfSBmdCDCt3snICd9XG4gICAgICAgICAgICAgICAgICB7c2l0ZXMucmVkdWNlKCh0LCBzKSA9PiB0ICsgKHMuYm9vbT8uYW5jaG9ycyB8fCAwKSwgMCl9IGFuY2hvcnNcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Zm9vdD5cbiAgICAgICAgICApfVxuICAgICAgICA8L3RhYmxlPlxuICAgICAgKX1cbiAgICAgIHtyZXN1bHQgJiYgc2l0ZXMuc29tZSgocykgPT4gcy5ib29tKSAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjNzc3JywgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICAgIOKckyA9IGRyYXduIGJvb20gbGluZXMgwrcgZXN0LiA9IHNpemVkIGZyb20gbW9kZWxlZCB3aWR0aC92ZWxvY2l0eVxuICAgICAgICAgIChib29tIGFuZ2xlZCB0byBrZWVwIG5vcm1hbCBmbG93IOKJpCB7KHByb3BzLmNvbmZpZy5lcXVpcG1lbnQ/LmVudHJhaW5tZW50TXMgPz8gMC4zNSl9IG0vcyxcbiAgICAgICAgICAre3Byb3BzLmNvbmZpZy5lcXVpcG1lbnQ/LnJlc2VydmVQY3QgPz8gMjB9JSByZXNlcnZlKSDCtyDimqEgPSBmYXN0IHdhdGVyLCBjYXNjYWRlIGJvb21zXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtyZXN1bHQgJiYgc2l0ZXMubGVuZ3RoID09PSAwICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjNzc3JyB9fT5ObyBjb25maWd1cmVkIHNpdGVzIHdpdGhpbiByZWFjaCBvZiB0aGlzIHRyYWNlLjwvZGl2Pn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=