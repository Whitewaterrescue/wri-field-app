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
/* harmony export */   DEFAULT_OPENWATER: () => (/* binding */ DEFAULT_OPENWATER),
/* harmony export */   ENGINE_VERSION: () => (/* binding */ ENGINE_VERSION),
/* harmony export */   REMOVED_IMPOUNDMENT_COMIDS: () => (/* binding */ REMOVED_IMPOUNDMENT_COMIDS),
/* harmony export */   calculateDepthManning: () => (/* binding */ calculateDepthManning),
/* harmony export */   computeOpenWater: () => (/* binding */ computeOpenWater),
/* harmony export */   computeTrace: () => (/* binding */ computeTrace),
/* harmony export */   convexHull: () => (/* binding */ convexHull),
/* harmony export */   daWeightedQ: () => (/* binding */ daWeightedQ),
/* harmony export */   estimateBoomNeeds: () => (/* binding */ estimateBoomNeeds),
/* harmony export */   estimateGeometryPayton: () => (/* binding */ estimateGeometryPayton),
/* harmony export */   estimateShorelineBoom: () => (/* binding */ estimateShorelineBoom),
/* harmony export */   fetchOpenWaterData: () => (/* binding */ fetchOpenWaterData),
/* harmony export */   fetchTraceData: () => (/* binding */ fetchTraceData),
/* harmony export */   haversineM: () => (/* binding */ haversineM),
/* harmony export */   isOpenWaterBody: () => (/* binding */ isOpenWaterBody),
/* harmony export */   jobsonPassageHours: () => (/* binding */ jobsonPassageHours),
/* harmony export */   jobsonVelocities: () => (/* binding */ jobsonVelocities),
/* harmony export */   mergeUpstreamAnchor: () => (/* binding */ mergeUpstreamAnchor),
/* harmony export */   queryWaterbody: () => (/* binding */ queryWaterbody),
/* harmony export */   rebaseOpenWaterData: () => (/* binding */ rebaseOpenWaterData),
/* harmony export */   resolveTraceMode: () => (/* binding */ resolveTraceMode),
/* harmony export */   runOpenWater: () => (/* binding */ runOpenWater),
/* harmony export */   runOpenWaterContinuation: () => (/* binding */ runOpenWaterContinuation),
/* harmony export */   runTrace: () => (/* binding */ runTrace),
/* harmony export */   toGeoJson: () => (/* binding */ toGeoJson),
/* harmony export */   toOpenWaterGeoJson: () => (/* binding */ toOpenWaterGeoJson)
/* harmony export */ });
// @ts-nocheck
/**
 * trace-engine.js â€” National spill trajectory engine (JS port of spill_trace.py)
 * ==============================================================================
 *
 * Faithful port of the Python oracle. Dependency-free ESM: runs in plain Node
 * (>=18, global fetch) for golden testing and in the browser inside the ExB
 * widget. NO @arcgis imports here â€” the widget wraps this module and supplies
 * layer access through injectable providers:
 *
 *   config.widthProvider(envelope)  -> [{lat, lon, width}]   (GLOW midpoints in bbox)
 *   config.siteProviders            -> [{name, buffer_m, fetch: async () => [{name, lat, lon, ...extra}]}]
 *   config.receptorProviders        -> same shape as siteProviders
 *
 * Port gotchas honored (see README):
 *   1. geoserver CQL BBOX is lat,lon axis order (EPSG:4269 / WFS 2.0)
 *   2. HR NHDPlusID != MR comid â€” widths sampled spatially, never ID-joined
 *   3. impoundment = wbareatype in (LakePond, Reservoir)
 *   4. width override sampled in windows; failure degrades to formula widths
 *   5. NLDI/geoserver empty-200 -> retry 3x with backoff
 *   6. snap click to streamorde >= minStreamOrder
 *
 * Corridor mode (v1.6): US federal services (NLDI/NHDPlus/NWIS) end at the
 * border. config.corridors lists precomputed corridor files (see
 * corridors/build_corridors.py) â€” a stationed centerline + authored hydraulic
 * attributes + a flow model bound to ECCC (Water Survey of Canada) gauges.
 * A click that lands within a corridor's snap_m runs entirely on corridor
 * data; corridors chain downstream via continues_to (Brunette -> Fraser),
 * with short confluence gaps bridged by a straight connector that inherits
 * the DOWNSTREAM corridor's hydraulics. All physics (computeTrace) is shared
 * with the US path.
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
const ENGINE_VERSION = "1.7.0";
const NLDI_BASE = "https://api.water.usgs.gov/nldi";
const GEOSERVER = "https://api.water.usgs.gov/geoserver/wmadata/ows";
const NWIS_IV = "https://waterservices.usgs.gov/nwis/iv/";
const NWIS_SITE = "https://waterservices.usgs.gov/nwis/site/";
const NWIS_STAT = "https://waterservices.usgs.gov/nwis/stat/";
const ECCC_API = "https://api.weather.gc.ca/collections";
/**
 * NHDPlus MR waterbody flags lag reality â€” reaches through REMOVED dams still
 * carry wbareatype LakePond and would false-stop the clock. Known removals
 * are excluded here (extendable per-run via config.impoundExcludeComids).
 */
const REMOVED_IMPOUNDMENT_COMIDS = new Set([
    // Milltown Dam, Clark Fork at Bonner MT â€” removed 2008-2010 (reported by Cody 2026-07-07)
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
    corridors: [], // corridor docs or URLs (Canadian rivers, see corridors/)
    corridorGapMaxM: 2000, // max confluence gap bridged when chaining corridors
    timingModel: "hydraulic", // 'hydraulic' (V=Q/A x safety) | 'jobson' (USGS WRIR 96-4013 dye-study regressions)
    asOf: null, // 'YYYY-MM-DD' historical Q; null = live
    verbose: true,
    openWater: {}, // overrides for DEFAULT_OPENWATER (v1.7 lake/reservoir mode)
};
/** Open-water (lake/reservoir) mode â€” GNOME-style particle transport
 *  (NOAA Tech Doc NOS OR&R 40, public domain). Validated in openwater-spike/. */
const DEFAULT_OPENWATER = {
    enabled: true, // lake-click dispatch + impoundment continuation
    minLakeSqKm: 1.0, // PIP hits smaller than this stay on the river path
    // (guards removed-dam relic polygons, farm ponds)
    riverOverrideM: 400, // non-impounded reach this close â†’ river mode wins
    // (dam tailraces sit inside reservoir polygons)
    nParticles: 1000,
    durationHr: 24, // sim length from water entry (continuations too)
    timestepS: 900,
    windageMin: 0.01, // GNOME 1â€“4% of U10, uniform per particle
    windageMax: 0.04,
    windagePersistS: 900,
    diffusionM2s: 1.0, // lakes/protected water (GNOME "low"); coastal = 10
    refloatHalfLifeHr: 1.0,
    continueAtImpoundment: true,
    shoreGapSegs: 3, // beached-cluster merge tolerance (shoreline segments)
    maxShoreImpacts: 10,
    seed: 12345, // deterministic replays; runRecord carries it
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
/** GET/POST with retry â€” NLDI/geoserver intermittently return empty 200 bodies. */
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
 * is back-clamped onto the first reach â€” wildly wrong when that gauge sits
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
                // EROM monthly modeled flow (gauge-adjusted, cfs) â€” ungauged fallback + Jobson Qa
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
                    qe_ma: (_o = p.qe_ma) !== null && _o !== void 0 ? _o : null, // EROM mean annual flow (cfs) â€” Jobson Qa
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
        catch ( /* ignore â€” matches Python */_e) { /* ignore â€” matches Python */ }
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
        catch ( /* ignore â€” matches Python */_f) { /* ignore â€” matches Python */ }
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
 * range (uniform-yield assumption â€” same semantics as the single-gauge path).
 * Because DA jumps at confluences, the Q jump lands AT the confluence instead
 * of smearing linearly over the inter-gauge distance; it also can't back-clamp
 * a post-confluence gauge's full Q onto a small upstream tributary.
 * Gauges whose NWIS DA breaks downstream monotonicity are dropped (NWIS and
 * NHDPlus delineations disagree occasionally). Returns null when fewer than 2
 * monotonic gauges remain â€” caller falls back to distance interpolation.
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
// ---------------------------------------------------------------- corridors (v1.6)
//
// A corridor doc (built offline by corridors/build_corridors.py):
//   { id, name, snap_m, continues_to, tidal_from_km, impoundments:[{from_km,
//     to_km, name}], warnings:[...], attrs:{da_km2|slope|width_m|depth_m:
//     [[km, value], ...]}, flow:{provider, ...}, station_km:[...],
//     vertices:[[lon,lat], ...] }
// Flow providers:
//   eccc-live-sum  â€” sum live ECCC discharge over flow.stations (each
//                    {id, name, da_km2}); DA-ratio transferred along the
//                    corridor. asOf uses the ECCC daily-mean archive.
//   monthly-median â€” flow.monthly_median_m3s[month] at flow.ref_da_km2
//                    (rivers with no active gauge, e.g. the Brunette).
const CORRIDOR_CACHE = new Map(); // url -> corridor doc
function loadCorridors(list, log) {
    return __awaiter(this, void 0, void 0, function* () {
        const out = [];
        for (const entry of list || []) {
            if (entry && typeof entry === "object" && entry.vertices) {
                out.push(entry);
                continue;
            }
            const url = typeof entry === "string" ? entry : entry === null || entry === void 0 ? void 0 : entry.url;
            if (!url)
                continue;
            if (!CORRIDOR_CACHE.has(url)) {
                try {
                    CORRIDOR_CACHE.set(url, yield getJson(url, { timeoutMs: 30000 }));
                }
                catch (e) {
                    log(`  corridor load FAILED (${url}): ${String(e).slice(0, 80)}`);
                    CORRIDOR_CACHE.set(url, null);
                }
            }
            const doc = CORRIDOR_CACHE.get(url);
            if (doc)
                out.push(doc);
        }
        return out;
    });
}
/** Clamped linear interpolation over authored [[km, value], ...] breakpoints. */
function corridorAttr(bps, km, fallback = 0) {
    if (!bps || !bps.length)
        return fallback;
    if (km <= bps[0][0])
        return bps[0][1];
    const last = bps[bps.length - 1];
    if (km >= last[0])
        return last[1];
    for (let i = 1; i < bps.length; i++) {
        if (bps[i][0] >= km) {
            const t = (km - bps[i - 1][0]) / (bps[i][0] - bps[i - 1][0]);
            return bps[i - 1][1] + t * (bps[i][1] - bps[i - 1][1]);
        }
    }
    return last[1];
}
function nearestCorridorVertex(lat, lon, corr) {
    let best = Infinity, idx = 0;
    const v = corr.vertices;
    for (let i = 0; i < v.length; i++) {
        const d = haversineM(lat, lon, v[i][1], v[i][0]);
        if (d < best) {
            best = d;
            idx = i;
        }
    }
    return { idx, distM: best };
}
/** Point attributes sampled from a corridor at its native stationing (km). */
function corridorPoint(corr, lon, lat, km, connector = false) {
    const a = corr.attrs || {};
    const impound = (corr.impoundments || []).find((z) => km >= z.from_km && km <= z.to_km);
    return {
        lon, lat,
        drainage_area_km2: corridorAttr(a.da_km2, km, 0),
        slope: Math.max(corridorAttr(a.slope, km, 0.001), 0.00001),
        corridor_width_m: corridorAttr(a.width_m, km, 0),
        depth_override: corridorAttr(a.depth_m, km, 0),
        tidal: corr.tidal_from_km !== null && corr.tidal_from_km !== undefined && km >= corr.tidal_from_km,
        ftype: connector ? "CorridorConnector" : "Corridor",
        wbareatype: impound ? "Reservoir" : "StreamRiver",
        comid: null,
        gnis_name: impound ? (impound.name || corr.name) : corr.name,
        qe_ma: null, qe_monthly: null,
        divergence: 0,
        corridor_id: corr.id,
        corridor_km: km,
    };
}
/** Live/median discharge for a corridor's flow model.
 *  Returns { qM3s, daKm2, source, note } or null (caller warns + errors). */
function corridorFlow(corr, asOf, log) {
    return __awaiter(this, void 0, void 0, function* () {
        var _c, _d;
        const flow = corr.flow || {};
        const month = asOf ? parseInt(asOf.slice(5, 7), 10) : new Date().getMonth() + 1;
        const medians = flow.monthly_median_m3s || null;
        const median = medians && medians[String(month)] > 0
            ? { qM3s: medians[String(month)], daKm2: flow.ref_da_km2, source: "monthly-median",
                note: flow.source_note || null }
            : null;
        if (flow.provider === "eccc-live-sum") {
            let qSum = 0, daSum = 0;
            const live = [], down = [];
            for (const st of flow.stations || []) {
                try {
                    let q = null;
                    if (asOf) {
                        const j = yield getJson(`${ECCC_API}/hydrometric-daily-mean/items`, {
                            params: { STATION_NUMBER: st.id, DATE: asOf, f: "json", limit: "5", skipGeometry: "true" },
                            timeoutMs: 30000,
                        });
                        for (const f of j.features || []) {
                            const v = (_c = f.properties) === null || _c === void 0 ? void 0 : _c.DISCHARGE;
                            if (v !== null && v !== undefined && v >= 0) {
                                q = Number(v);
                                break;
                            }
                        }
                    }
                    else {
                        const j = yield getJson(`${ECCC_API}/hydrometric-realtime/items`, {
                            params: {
                                STATION_NUMBER: st.id, f: "json", limit: "48",
                                sortby: "-DATETIME", skipGeometry: "true",
                                properties: "DISCHARGE,DATETIME,STATION_NUMBER",
                            },
                            timeoutMs: 30000,
                        });
                        for (const f of j.features || []) {
                            const v = (_d = f.properties) === null || _d === void 0 ? void 0 : _d.DISCHARGE;
                            if (v !== null && v !== undefined && v >= 0) {
                                q = Number(v);
                                break;
                            }
                        }
                    }
                    if (q !== null) {
                        qSum += q;
                        daSum += st.da_km2 || 0;
                        live.push(st.id);
                    }
                    else
                        down.push(st.id);
                }
                catch (e) {
                    down.push(st.id);
                    log(`  ECCC gauge ${st.id} failed: ${String(e).slice(0, 60)}`);
                }
            }
            // stations without per-station da_km2: usable only when ALL report live
            if (live.length === (flow.stations || []).length && !(daSum > 0))
                daSum = flow.ref_da_km2 || 0;
            if (live.length && daSum > 0) {
                return {
                    qM3s: qSum, daKm2: daSum, source: "eccc-iv",
                    note: `ECCC live: ${live.join("+")}` + (down.length ? ` (feed down: ${down.join(",")})` : ""),
                };
            }
            if (median) {
                log(`  ECCC feed down for ${corr.id} â€” falling back to monthly median`);
                return Object.assign(Object.assign({}, median), { note: `ECCC feed DOWN (${down.join(",")}) â€” ${median.note || "historical monthly median"}` });
            }
            return null;
        }
        if (flow.provider === "monthly-median")
            return median;
        return median; // unknown provider â€” best effort
    });
}
/**
 * Corridor-mode fetchTraceData: rows + virtual gauges from corridor docs.
 * Mirrors the US path's output shape exactly, so computeTrace is unchanged.
 */
function fetchCorridorTraceData(lat, lon, corr, allCorridors, cfg, log) {
    return __awaiter(this, void 0, void 0, function* () {
        const byId = new Map(allCorridors.map((c) => [c.id, c]));
        // 1. downstream chain, cycle-guarded
        const chain = [corr];
        const seen = new Set([corr.id]);
        let cur = corr;
        while (cur.continues_to && byId.has(cur.continues_to) && !seen.has(cur.continues_to)) {
            cur = byId.get(cur.continues_to);
            chain.push(cur);
            seen.add(cur.id);
        }
        // 2. assemble attributed points: click -> corridor end, then chained
        //    corridors from their join vertex, bridging gaps with connectors
        const { idx: startIdx, distM: snapDistM } = nearestCorridorVertex(lat, lon, corr);
        const pts = [];
        const corridorMeta = [];
        for (let ci = 0; ci < chain.length; ci++) {
            const c = chain[ci];
            let fromIdx;
            if (ci === 0)
                fromIdx = startIdx;
            else {
                const prev = pts[pts.length - 1];
                const { idx, distM } = nearestCorridorVertex(prev.lat, prev.lon, c);
                if (distM > cfg.corridorGapMaxM) {
                    log(`  corridor chain stops: ${chain[ci - 1].id} -> ${c.id} gap ${(distM / 1000).toFixed(2)} km > max`);
                    break;
                }
                // straight connector through the confluence gap, attributed with the
                // DOWNSTREAM corridor's hydraulics at the join (it is that river's water)
                if (distM > 30) {
                    const joinKm = c.station_km[idx];
                    const [jLon, jLat] = c.vertices[idx];
                    const steps = Math.max(1, Math.ceil(distM / cfg.resolutionM));
                    for (let s = 1; s <= steps; s++) {
                        const t = s / steps;
                        pts.push(corridorPoint(c, prev.lon + (jLon - prev.lon) * t, prev.lat + (jLat - prev.lat) * t, joinKm, true));
                    }
                    log(`  connector: ${chain[ci - 1].id} -> ${c.id} (${Math.round(distM)} m, ${c.name} hydraulics)`);
                }
                fromIdx = idx;
            }
            const firstPt = pts.length;
            for (let i = fromIdx; i < c.vertices.length; i++) {
                pts.push(corridorPoint(c, c.vertices[i][0], c.vertices[i][1], c.station_km[i]));
            }
            corridorMeta.push({ id: c.id, name: c.name, from_km: c.station_km[fromIdx], first_pt: firstPt });
        }
        if (pts.length < 2)
            throw new Error("corridor trace too short");
        // downsample to cfg.resolutionM (corridor vertices are ~50 m)
        let sampled = [pts[0]];
        let acc = 0;
        for (let i = 1; i < pts.length; i++) {
            acc += haversineM(pts[i - 1].lat, pts[i - 1].lon, pts[i].lat, pts[i].lon);
            if (acc >= cfg.resolutionM || i === pts.length - 1) {
                sampled.push(pts[i]);
                acc = 0;
            }
        }
        // 3. rows â€” same shape/derived fields as the US path
        const rows = sampled.map((p) => (Object.assign({}, p)));
        const n = rows.length;
        rows[0].distance = 0.0;
        for (let i = 1; i < n; i++) {
            rows[i].distance = haversineM(rows[i - 1].lat, rows[i - 1].lon, rows[i].lat, rows[i].lon);
        }
        let cum = 0.0;
        for (const r of rows) {
            cum += r.distance;
            r.cum_dist = cum;
        }
        for (const r of rows) {
            r.drainage_area_sqmi = r.drainage_area_km2 * 0.386102;
            r.formula_width = estimateGeometryPayton(r.drainage_area_sqmi)[0];
            r.braided = false;
            // authored corridor width is trusted: no GLOW cap, but keep the same
            // 51-pt trailing smoothing so breakpoint steps don't kink the velocity
            r.width_m = r.corridor_width_m;
            r.width_final_raw = r.corridor_width_m > 0 ? r.corridor_width_m : r.formula_width;
        }
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
        // 4. virtual gauges: entry + exit of each chained corridor, DA-ratio
        //    transferred from that corridor's flow reference. Feeds the standard
        //    DA-weighted interpolation â€” flow jumps land AT the confluence.
        const CFS_PER_M3S = Math.pow(3.281, 3);
        const gd = [];
        const corridorWarnings = [];
        const flowNotes = [];
        for (const meta of corridorMeta) {
            const c = byId.get(meta.id);
            const f = yield corridorFlow(c, cfg.asOf, log);
            if (!f) {
                corridorWarnings.push(`${c.name}: no flow data available (gauge feed down, no fallback) â€” flow assumed from drainage area only.`);
                continue;
            }
            const daRefSqmi = f.daKm2 * 0.386102;
            const crows = rows.filter((r) => r.corridor_id === meta.id && r.ftype === "Corridor");
            if (!crows.length)
                continue;
            for (const at of [crows[0], crows[crows.length - 1]]) {
                const daSqmi = at.drainage_area_sqmi;
                if (!(daSqmi > 0) || !(daRefSqmi > 0))
                    continue;
                const q = f.qM3s * CFS_PER_M3S * (daSqmi / daRefSqmi);
                if (gd.some((g) => Math.abs(g.trace_dist - at.cum_dist) < 1))
                    continue;
                const [w, dep] = estimateGeometryPayton(daSqmi);
                gd.push({
                    station_id: `${meta.id}:${f.source}`,
                    name: `${c.name} (${f.note || f.source})`,
                    lat: at.lat, lon: at.lon,
                    discharge: q, drainage_area: daSqmi,
                    q_source: f.source,
                    area: w * dep, trace_dist: at.cum_dist,
                });
            }
            if (f.source !== "eccc-iv") {
                corridorWarnings.push(`${c.name}: flow is a HISTORICAL MONTHLY MEDIAN (${f.note || "archived record"}) â€” NOT live conditions.`);
            }
            flowNotes.push(`${c.name}: ${f.qM3s.toFixed(2)} m3/s at ref DA ${Math.round(f.daKm2)} km2 (${f.source})`);
            for (const wtext of c.warnings || []) {
                if (!corridorWarnings.includes(wtext))
                    corridorWarnings.push(wtext);
            }
        }
        gd.sort((a, b) => a.trace_dist - b.trace_dist);
        for (const g of gd) {
            log(`  corridor gauge ${g.station_id.padEnd(28)} ${String(Math.round(g.discharge)).padStart(9)} cfs @ ${(g.trace_dist / 1000).toFixed(1).padStart(6)} km (${g.q_source})`);
        }
        // 5. site/receptor features â€” identical to the US path
        const fetchSets = (providers) => __awaiter(this, void 0, void 0, function* () {
            return Promise.all((providers || []).map((p) => __awaiter(this, void 0, void 0, function* () {
                var _c;
                return ({
                    buffer_m: (_c = p.buffer_m) !== null && _c !== void 0 ? _c : 400,
                    feats: yield p.fetch(),
                });
            })));
        });
        const [siteSets, receptorSets] = yield Promise.all([fetchSets(cfg.siteProviders), fetchSets(cfg.receptorProviders)]);
        const riverName = corridorMeta.map((m) => byId.get(m.id).name).join(" â†’ ");
        log(`  corridor trace: ${riverName}, ${n} points, ${(rows[n - 1].cum_dist / 1000).toFixed(1)} km, ${gd.length} virtual gauges`);
        return {
            lat, lon, comid: null, snapName: corr.name, snapDistM, riverName,
            rows, gd, siteSets, receptorSets,
            asOf: cfg.asOf || "live",
            fetchedAt: new Date().toISOString(),
            corridorWarnings,
            corridorMeta: {
                chain: corridorMeta.map((m) => ({ id: m.id, from_km: Math.round(m.from_km * 100) / 100 })),
                flow: flowNotes,
            },
        };
    });
}
// ---------------------------------------------------------------- main model
//
// Split into two stages so the expensive part is cacheable:
//   fetchTraceData(lat, lon, config)  â€” ALL network I/O: trace geometry, VAAs,
//     width sampling, gauges + flows, site/receptor features. Safety factor,
//     max hours etc. do NOT affect this stage.
//   computeTrace(data, config)        â€” pure math: Q interp, Manning depth,
//     velocity x safety, impoundment, travel time, hourly markers, site ETAs.
//     Deterministic and re-runnable on the same data (fields are overwritten,
//     rows are never structurally mutated).
// runTrace() composes the two â€” identical behavior to the original.
function fetchTraceData(lat_1, lon_1) {
    return __awaiter(this, arguments, void 0, function* (lat, lon, config = {}) {
        const cfg = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
        const log = cfg.verbose ? (...a) => console.log(...a) : () => { };
        log(`fetchTraceData(${lat.toFixed(4)}, ${lon.toFixed(4)})  asOf=${cfg.asOf || "live"}`);
        // 0. corridor mode (v1.6): if the click lands on a configured corridor
        // (Canadian rivers â€” no NLDI/NHDPlus/NWIS coverage), run on corridor data.
        if (cfg.corridors && cfg.corridors.length) {
            const docs = yield loadCorridors(cfg.corridors, log);
            let best = null;
            for (const c of docs) {
                const { distM } = nearestCorridorVertex(lat, lon, c);
                if (distM <= (c.snap_m || 500) && (!best || distM < best.distM))
                    best = { c, distM };
            }
            if (best) {
                log(`  corridor match: ${best.c.id} (${Math.round(best.distM)} m from centerline)`);
                return fetchCorridorTraceData(lat, lon, best.c, docs, cfg, log);
            }
        }
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
        // braided-reach flag: any NHDPlus divergence within ~1 km (10 rows) â€” GLOW widths
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
            // HR NHDPlusID != MR comid â€” sample spatially, in windows; never let the
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
        // pandas rolling(window=51, min_periods=1).mean() â€” trailing window
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
                log(`  UM gauge lookup failed (${String(e).slice(0, 80)}) â€” no upstream anchor`);
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
            // an on-trace gauge near the start already anchors the boundary â€” stop looking
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
        vmp = 0.25 + 0.02 * X; // eq 13 (99% envelope â€” fastest probable)
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
                log("  DA interp unavailable (<2 monotonic gauge DAs) â€” falling back to distance interpolation");
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
        // yield â€” Montana June vs September differs ~5x) before the flat constant
        const eromOk = rows.filter((r) => r.qe_monthly && r.qe_monthly[eromMonth] > 0).length;
        if (eromOk >= rows.length * 0.8) {
            for (const r of rows) {
                const qe = r.qe_monthly ? r.qe_monthly[eromMonth] : null;
                r.Q_cfs = Math.max(qe > 0 ? qe : r.drainage_area_sqmi * 2.0, 1.0);
            }
            qMethod = `erom-monthly (month ${eromMonth})`;
            qConfidence = "MODERATE â€” modeled flow, no live gauge";
            log(`  NO gauges: EROM monthly modeled flow (month ${eromMonth}, ${eromOk}/${rows.length} reaches)`);
        }
        else {
            for (const r of rows)
                r.Q_cfs = Math.max(r.drainage_area_sqmi * 2.0, 1.0);
            qMethod = "drainage-area-constant";
            qConfidence = "LOW CONFIDENCE â€” NO GAUGE";
            log("  NO gauges, no EROM: Q ~ 2 cfs per sq mi drainage â€” LOW CONFIDENCE");
        }
    }
    // 4. Manning's depth per point (formula fallback), V = Q/A, safety factor.
    // Corridor rows may carry an authored depth_override (surveyed/charted
    // depth â€” e.g. tidal reaches where an energy slope is meaningless).
    const CFS_TO_M3S = Math.pow(3.281, 3);
    let ok = 0;
    for (const r of rows) {
        r.Q_m3s = r.Q_cfs / CFS_TO_M3S;
        const depthFormula = estimateGeometryPayton(r.drainage_area_sqmi)[1];
        if (r.depth_override > 0) {
            r.depth = r.depth_override;
            ok++;
            r.area = r.width_final * r.depth;
            r.velocity = (r.Q_m3s / r.area) * cfg.safetyFactor;
            continue;
        }
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
                `${(rows[stopIdx].cum_dist / 1000).toFixed(1)} km â€” travel time beyond ` +
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
        r.cum_time = cumT / 3600; // hydraulic (x safety) â€” always computed; feeds legacy mode
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
            r.t_lead = 0.890 * r.t_peak; // eq 18 â€” most probable first arrival
            r.t_lead_min = 0.890 * (tFast / 3600); // 99% envelope â€” earliest credible arrival
            const td10 = jobsonPassageHours(r.t_peak, qPrime);
            r.t_clear = td10 !== null ? r.t_lead + td10 : null; // 10%-of-peak trailing edge
        }
    }
    if (jobson && jobsonDegraded)
        log(`  Jobson: ${jobsonDegraded} points lacked EROM Qa (hydraulic fallback)`);
    const timeOf = (r) => (jobson ? r.t_lead : r.cum_time);
    // where + when the plume enters the impoundment â€” seeds the open-water
    // continuation (v1.7). Timing fields exist on rows[stopIdx] because df was
    // sliced from rows (shared references) before the time cutoff below.
    let impoundStopPoint = null;
    if (stopIdx !== null) {
        const sr = rows[stopIdx];
        const etaStop = timeOf(sr);
        if (etaStop !== undefined && etaStop < cfg.maxHours) {
            impoundStopPoint = {
                lat: sr.lat, lon: sr.lon,
                eta_hr: Math.round(etaStop * 100) / 100,
                name: sr.gnis_name || "impoundment",
            };
        }
    }
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
                    // modeled hydraulics at the site's trace point â€” feeds boom sizing
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
    // corridor mode: authored warnings (tidal reach, no-live-gauge, arm splits)
    // + downgrade confidence when any flow input is a historical median
    if (gd.some((g) => g.q_source === "monthly-median") && qConfidence === "HIGH") {
        qConfidence = "MODERATE â€” includes historical-median flow (no live gauge)";
    }
    for (const w of data.corridorWarnings || [])
        warnings.push(w);
    if (qConfidence !== "HIGH")
        warnings.unshift(`Flow estimate: ${qConfidence} (${qMethod})`);
    {
        const statG = gd.filter((g) => g.q_source === "stat-p50");
        if (statG.length) {
            warnings.unshift(`Gauge feed down: ${statG.map((g) => g.station_id).join(", ")} using ` +
                `period-of-record MEDIAN flow for this date â€” NOT live conditions`);
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
    // provenance â€” enough to reconstruct any output in an after-action review
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
        corridor: data.corridorMeta || null,
    };
    const result = {
        mode: "river",
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
        impound_stop_point: impoundStopPoint,
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
/**
 * Which model does a click get? 'open-water' when the point sits inside a
 * lake/reservoir polygon (>= minLakeSqKm) â€” UNLESS a non-impounded reach is
 * nearby (dam tailraces sit inside reservoir polygons; that click means the
 * river below the dam). Returns { mode, waterbody? } â€” the waterbody is
 * passed on so the open-water fetch skips a duplicate PIP query.
 */
function resolveTraceMode(lat_1, lon_1) {
    return __awaiter(this, arguments, void 0, function* (lat, lon, config = {}) {
        const ow = Object.assign(Object.assign({}, DEFAULT_OPENWATER), (config.openWater || {}));
        if (!ow.enabled)
            return { mode: "river" };
        const wb = yield queryWaterbody(lat, lon, config);
        if (!wb || !isOpenWaterBody(wb) || !(wb.area_sqkm >= ow.minLakeSqKm))
            return { mode: "river" };
        const cfg = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
        try {
            if (yield nearRiverReach(lat, lon, cfg.minStreamOrder, ow.riverOverrideM)) {
                return { mode: "river", waterbody: wb };
            }
        }
        catch ( /* tiebreak unavailable â†’ open water (the PIP hit stands) */_c) { /* tiebreak unavailable â†’ open water (the PIP hit stands) */ }
        return { mode: "open-water", waterbody: wb };
    });
}
function runTrace(lat_1, lon_1) {
    return __awaiter(this, arguments, void 0, function* (lat, lon, config = {}) {
        const ow = Object.assign(Object.assign({}, DEFAULT_OPENWATER), (config.openWater || {}));
        const disp = yield resolveTraceMode(lat, lon, config);
        if (disp.mode === "open-water")
            return runOpenWater(lat, lon, config, disp.waterbody);
        const data = yield fetchTraceData(lat, lon, config);
        const result = computeTrace(data, config);
        if (ow.enabled && ow.continueAtImpoundment && result.impound_stop_point) {
            try {
                result.open_water = yield runOpenWaterContinuation(result, config);
            }
            catch (e) {
                result.warnings.push(`Open-water continuation unavailable: ${e.message || e}`);
            }
        }
        return result;
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
        cascade_advised: angleDeg < 15, // too fast for a single sweep â€” cascade booms
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
    if (result.open_water) {
        fc.features.push(...toOpenWaterGeoJson(result.open_water).features);
    }
    return fc;
}
// =========================================================================
// OPEN-WATER MODE (v1.7) â€” lakes & reservoirs
//
// GNOME-style Lagrangian particle transport (NOAA Tech Doc NOS OR&R 40,
// public domain; algorithms validated against its closed forms in
// openwater-spike/test_core.mjs â€” 18/18). Wind-drift only: for reservoirs
// with no operational current model this IS accepted responder practice
// (the "3% of wind toward the downwind shore" rule, done properly with an
// hourly forecast + minimum-regret uncertainty set).
//
// Gotchas honored (spike findings):
//   1. explicit windage persistence and GNOME's App. C sqrt(persist/dt)
//      range rescale DOUBLE-COUNT â€” rescale only when dt > persistence
//   2. NHD MapServer field names are UPPERCASE (GNIS_NAME, AREASQKM, FTYPE)
//   3. waterbody query needs maxAllowableOffset (~30 m) or Flathead-size
//      polygons return thousands of vertices; MultiPolygon rings flattened
//      (islands beach particles too)
//   4. refloatHalfLifeHr <= 0 would mean INSTANT refloat â€” treated as "off"
// =========================================================================
const NHD_WATERBODY_URL = "https://hydro.nationalmap.gov/arcgis/rest/services/nhd/MapServer/12/query";
const OPEN_METEO_URL = "https://api.open-meteo.com/v1/forecast";
const M_PER_DEG_LAT = 111120.00024; // GNOME Tech Doc Â§4
// NHD FType: 390 LakePond, 436 Reservoir (numeric on the MapServer; accept
// the string forms for robustness)
function isOpenWaterBody(wb) {
    const f = wb && wb.ftype;
    return f === 390 || f === 436 || f === "LakePond" || f === "Reservoir";
}
/**
 * Nearest flowline reach within radiusM (wbareatype included) â€” dispatch
 * tiebreak: NHD reservoir polygons extend over dam tailraces, and a click
 * there means the RIVER below, not the pool (caught live at American Falls:
 * the reservoir polygon contains the tailrace at 42.7803,-112.8767).
 */
function nearRiverReach(lat, lon, minOrder, radiusM) {
    return __awaiter(this, void 0, void 0, function* () {
        var _c;
        const box = radiusM / 111000; // degrees, generous at these latitudes
        const j = yield getJson(GEOSERVER, {
            data: {
                service: "WFS", version: "2.0.0", request: "GetFeature",
                typeName: "wmadata:nhdflowline_network", outputFormat: "application/json",
                cql_filter: `streamorde >= ${minOrder} AND BBOX(the_geom,` +
                    `${lat - box},${lon - box},${lat + box},${lon + box})`, // lat,lon axis order
                count: "50",
            },
        });
        // nearest NON-impounded reach: at a dam both the pool's LakePond reach and
        // the free-flowing reach below are close â€” any free-flowing reach in radius
        // means the click is river context (mid-pool has only the LakePond
        // ArtificialPath nearby). A tributary mouth flipping to river mode is fine:
        // the trace impound-stops into the lake immediately and continues as
        // open water anyway.
        let best = null, bestD = Infinity;
        for (const f of j.features || []) {
            const wba = f.properties.wbareatype;
            if (wba === "LakePond" || wba === "Reservoir")
                continue;
            const g = f.geometry;
            const paths = g.type === "LineString" ? [g.coordinates] : g.coordinates;
            for (const path of paths)
                for (const p of path) {
                    const d = haversineM(lat, lon, p[1], p[0]);
                    if (d < bestD) {
                        bestD = d;
                        best = f.properties;
                    }
                }
        }
        if (best === null || bestD > radiusM)
            return null;
        return { dist_m: bestD, wbareatype: (_c = best.wbareatype) !== null && _c !== void 0 ? _c : null, comid: Number(best.comid) };
    });
}
/** Containing NHD waterbody at a point, or null. Geometry simplified to ~30 m. */
function queryWaterbody(lat_1, lon_1) {
    return __awaiter(this, arguments, void 0, function* (lat, lon, config = {}) {
        var _c;
        const j = yield getJson(NHD_WATERBODY_URL, {
            params: {
                geometry: `${lon},${lat}`,
                geometryType: "esriGeometryPoint",
                inSR: "4326",
                spatialRel: "esriSpatialRelIntersects",
                outFields: "GNIS_NAME,AREASQKM,FTYPE", // UPPERCASE on this layer
                returnGeometry: "true",
                maxAllowableOffset: "0.0003",
                f: "geojson",
            },
        });
        const f = j.features && j.features[0];
        if (!f)
            return null;
        const rings = f.geometry.type === "Polygon"
            ? f.geometry.coordinates
            : f.geometry.coordinates.flat(1); // MultiPolygon â†’ all rings incl. islands
        return {
            name: f.properties.GNIS_NAME || "unnamed waterbody",
            area_sqkm: (_c = f.properties.AREASQKM) !== null && _c !== void 0 ? _c : null,
            ftype: f.properties.FTYPE,
            rings,
        };
    });
}
/** Hourly forecast wind at a point as [{t: ms, u, v}] (10 m, m/s). */
function fetchWindSeries(lat, lon, hoursNeeded) {
    return __awaiter(this, void 0, void 0, function* () {
        const days = Math.min(16, Math.ceil(hoursNeeded / 24) + 1);
        const j = yield getJson(OPEN_METEO_URL, {
            params: {
                latitude: lat.toFixed(4), longitude: lon.toFixed(4),
                hourly: "wind_speed_10m,wind_direction_10m",
                wind_speed_unit: "ms", forecast_days: String(days), timezone: "UTC",
            },
        });
        const h = j.hourly;
        const series = h.time.map((t, i) => {
            const r = (h.wind_direction_10m[i] * Math.PI) / 180; // meteorological FROM
            const s = h.wind_speed_10m[i];
            return { t: Date.parse(t + ":00Z"), u: -s * Math.sin(r), v: -s * Math.cos(r) };
        });
        return { series, source: "open-meteo", points: series.length };
    });
}
function owWindAt(series, tMs) {
    if (!series.length)
        return [0, 0];
    if (tMs <= series[0].t)
        return [series[0].u, series[0].v];
    const last = series[series.length - 1];
    if (tMs >= last.t)
        return [last.u, last.v];
    let lo = 0, hi = series.length - 1;
    while (hi - lo > 1) {
        const mid = (lo + hi) >> 1;
        if (series[mid].t <= tMs)
            lo = mid;
        else
            hi = mid;
    }
    const A = series[lo], B = series[hi];
    const f = (tMs - A.t) / (B.t - A.t);
    return [A.u + f * (B.u - A.u), A.v + f * (B.v - A.v)];
}
// seeded RNG (mulberry32 + Box-Muller) â€” deterministic replays
function owMakeRng(seed) {
    let a = seed >>> 0;
    let spare = null;
    const next = () => {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    return {
        next,
        uniform: (lo, hi) => lo + (hi - lo) * next(),
        gaussian() {
            if (spare !== null) {
                const v = spare;
                spare = null;
                return v;
            }
            let u1 = 0;
            while (u1 === 0)
                u1 = next();
            const u2 = next();
            const r = Math.sqrt(-2 * Math.log(u1));
            spare = r * Math.sin(2 * Math.PI * u2);
            return r * Math.cos(2 * Math.PI * u2);
        },
    };
}
function owProjection(lat0, lon0) {
    const mPerDegLon = M_PER_DEG_LAT * Math.cos((lat0 * Math.PI) / 180);
    return {
        toXY: (lat, lon) => [(lon - lon0) * mPerDegLon, (lat - lat0) * M_PER_DEG_LAT],
        toLatLon: (x, y) => [lat0 + y / M_PER_DEG_LAT, lon0 + x / mPerDegLon],
    };
}
function owSegIntersectT(ax, ay, bx, by, cx, cy, dx, dy) {
    const rx = bx - ax, ry = by - ay, sx = dx - cx, sy = dy - cy;
    const denom = rx * sy - ry * sx;
    if (denom === 0)
        return null;
    const t = ((cx - ax) * sy - (cy - ay) * sx) / denom;
    const u = ((cx - ax) * ry - (cy - ay) * rx) / denom;
    return t >= 0 && t <= 1 && u >= 0 && u <= 1 ? t : null;
}
/** Uniform grid over shoreline segments; segments remember ring + ordinal so
 *  beached particles can be clustered into contiguous shoreline arcs. */
function owShorelineIndex(ringsXY, cellM = 500) {
    const segs = [], segMeta = [];
    ringsXY.forEach((ring, ringIdx) => {
        for (let i = 0; i < ring.length; i++) {
            const a = ring[i], b = ring[(i + 1) % ring.length];
            if (a[0] === b[0] && a[1] === b[1])
                continue;
            segs.push([a[0], a[1], b[0], b[1]]);
            segMeta.push({ ring: ringIdx, ord: i });
        }
    });
    const cells = new Map();
    const key = (i, j) => i + "," + j;
    segs.forEach((s, idx) => {
        const i0 = Math.floor(Math.min(s[0], s[2]) / cellM), i1 = Math.floor(Math.max(s[0], s[2]) / cellM);
        const j0 = Math.floor(Math.min(s[1], s[3]) / cellM), j1 = Math.floor(Math.max(s[1], s[3]) / cellM);
        for (let i = i0; i <= i1; i++)
            for (let j = j0; j <= j1; j++) {
                const k = key(i, j);
                let arr = cells.get(k);
                if (!arr) {
                    arr = [];
                    cells.set(k, arr);
                }
                arr.push(idx);
            }
    });
    return { segs, segMeta, cells, cellM, key };
}
function owFirstCrossing(index, x1, y1, x2, y2) {
    const { segs, cells, cellM, key } = index;
    const i0 = Math.floor(Math.min(x1, x2) / cellM), i1 = Math.floor(Math.max(x1, x2) / cellM);
    const j0 = Math.floor(Math.min(y1, y2) / cellM), j1 = Math.floor(Math.max(y1, y2) / cellM);
    const seen = new Set();
    let best = null;
    for (let i = i0; i <= i1; i++)
        for (let j = j0; j <= j1; j++) {
            const arr = cells.get(key(i, j));
            if (!arr)
                continue;
            for (const idx of arr) {
                if (seen.has(idx))
                    continue;
                seen.add(idx);
                const s = segs[idx];
                const t = owSegIntersectT(x1, y1, x2, y2, s[0], s[1], s[2], s[3]);
                if (t !== null && (best === null || t < best.t))
                    best = { t, idx };
            }
        }
    if (best === null)
        return null;
    return {
        t: best.t, idx: best.idx,
        x: x1 + best.t * (x2 - x1), y: y1 + best.t * (y2 - y1),
    };
}
function convexHull(pointsXY) {
    const pts = [...pointsXY].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    if (pts.length < 3)
        return pts;
    const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lower = [];
    for (const p of pts) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0)
            lower.pop();
        lower.push(p);
    }
    const upper = [];
    for (let i = pts.length - 1; i >= 0; i--) {
        const p = pts[i];
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0)
            upper.pop();
        upper.push(p);
    }
    lower.pop();
    upper.pop();
    return lower.concat(upper);
}
/** Protective/exclusion boom for a shoreline arc (open water â€” the river
 *  deflection rule sin(theta)=0.35/v does NOT apply with no persistent
 *  current). Planning-level: arc length + reserve, 50-ft sticks. */
function estimateShorelineBoom(lengthM, opts = {}) {
    var _c, _d;
    const reservePct = (_c = opts.reservePct) !== null && _c !== void 0 ? _c : 20;
    const anchorSpacingFt = (_d = opts.anchorSpacingFt) !== null && _d !== void 0 ? _d : 100;
    if (!(lengthM > 0))
        return null;
    const boomFt = Math.ceil((lengthM * 3.28084 * (1 + reservePct / 100)) / 50) * 50;
    return { boom_ft: boomFt, anchors: Math.max(2, Math.ceil(boomFt / anchorSpacingFt) + 1), protective: true };
}
/** One particle set. Pure + deterministic (seeded). Internal. */
function owSimulate({ x0, y0, tMs0, windSeries, index, ow, uncertainty, seed }) {
    const rng = owMakeRng(seed);
    const dt = ow.timestepS;
    const nSteps = Math.round((ow.durationHr * 3600) / dt);
    const stepsPerHour = Math.max(1, Math.round(3600 / dt));
    // windage: explicit persistence for dt <= persist (reference range as-is);
    // per-step draws with the App. C rescaled range only for dt > persist
    const wMean = (ow.windageMin + ow.windageMax) / 2;
    let wHalf = (ow.windageMax - ow.windageMin) / 2;
    let wPersistS = ow.windagePersistS;
    if (dt > wPersistS) {
        wHalf *= Math.sqrt(wPersistS / dt);
        wPersistS = dt;
    }
    const drawWindage = () => Math.max(0, wMean + rng.uniform(-wHalf, wHalf));
    const diffStep = Math.sqrt(6 * ow.diffusionM2s * dt);
    const angCap = Math.PI / 3; // Â±60Â° cap on wind-angle perturbation (GNOME Â§15)
    const pRefloat = ow.refloatHalfLifeHr > 0
        ? 1 - Math.pow(2, -(dt / 3600) / ow.refloatHalfLifeHr)
        : 0; // <= 0 disables refloating (NOT "instant")
    const N = ow.nParticles;
    const P = new Array(N);
    for (let i = 0; i < N; i++) {
        P[i] = {
            x: x0, y: y0, beached: false, lastX: x0, lastY: y0,
            beachTMs: null, beachSeg: null,
            windage: drawWindage(), windageAgeS: 0,
            pertF: 1, pertA: 0, pertAgeS: 0,
        };
        if (uncertainty)
            drawPerturb(P[i]);
    }
    function drawPerturb(p) {
        p.pertF = Math.exp(rng.gaussian() * 0.3); // lognormal speed factor, median 1
        p.pertA = Math.max(-angCap, Math.min(angCap, (rng.gaussian() * 20 * Math.PI) / 180));
        p.pertAgeS = 0;
    }
    const hourly = [];
    const snapshot = (hr) => {
        const pos = new Array(N);
        let cx = 0, cy = 0, nb = 0;
        for (let i = 0; i < N; i++) {
            pos[i] = [P[i].x, P[i].y];
            cx += P[i].x;
            cy += P[i].y;
            if (P[i].beached)
                nb++;
        }
        hourly.push({ hr, centroidXY: [cx / N, cy / N], beachedCount: nb, positions: pos });
    };
    snapshot(0);
    for (let step = 1; step <= nSteps; step++) {
        const tMs = tMs0 + (step - 1) * dt * 1000; // forcing at interval start (forward Euler)
        const [wu0, wv0] = owWindAt(windSeries, tMs);
        for (let i = 0; i < N; i++) {
            const p = P[i];
            if (p.beached) {
                if (pRefloat > 0 && rng.next() < pRefloat) {
                    p.beached = false;
                    p.x = p.lastX;
                    p.y = p.lastY;
                }
                else
                    continue;
            }
            p.windageAgeS += dt;
            if (p.windageAgeS >= wPersistS) {
                p.windage = drawWindage();
                p.windageAgeS = 0;
            }
            let wu = wu0, wv = wv0;
            if (uncertainty) {
                p.pertAgeS += dt;
                if (p.pertAgeS >= 10800)
                    drawPerturb(p); // 3 h persistence
                const c = Math.cos(p.pertA), s = Math.sin(p.pertA);
                wu = p.pertF * (wu0 * c - wv0 * s);
                wv = p.pertF * (wu0 * s + wv0 * c);
            }
            const nx = p.x + p.windage * wu * dt + rng.uniform(-1, 1) * diffStep;
            const ny = p.y + p.windage * wv * dt + rng.uniform(-1, 1) * diffStep;
            if (index) {
                const hit = owFirstCrossing(index, p.x, p.y, nx, ny);
                if (hit) {
                    p.lastX = p.x;
                    p.lastY = p.y; // last water position (GNOME Â§14)
                    const len = Math.hypot(nx - p.x, ny - p.y) || 1;
                    p.x = hit.x - (nx - p.x) / len; // land 1 m short of the crossing
                    p.y = hit.y - (ny - p.y) / len;
                    p.beached = true;
                    p.beachSeg = hit.idx;
                    if (p.beachTMs === null)
                        p.beachTMs = tMs + dt * 1000;
                    continue;
                }
            }
            p.x = nx;
            p.y = ny;
        }
        if (step % stepsPerHour === 0)
            snapshot(step / stepsPerHour);
    }
    return { particles: P, hourly };
}
/**
 * fetchOpenWaterData â€” all network for one open-water run. Waterbody may be
 * passed pre-fetched (runTrace dispatch already queried it).
 * startOffsetHr shifts the sim start into the forecast (impoundment
 * continuations start when the river plume ARRIVES, not now).
 */
function fetchOpenWaterData(lat_1, lon_1) {
    return __awaiter(this, arguments, void 0, function* (lat, lon, config = {}, waterbody = null, startOffsetHr = 0) {
        const cfg = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
        const ow = Object.assign(Object.assign({}, DEFAULT_OPENWATER), (config.openWater || {}));
        const wb = waterbody || (yield queryWaterbody(lat, lon, config));
        if (!wb)
            throw new Error("point is not inside an NHD waterbody");
        const wind = yield fetchWindSeries(lat, lon, startOffsetHr + ow.durationHr);
        const fetchSets = (providers) => __awaiter(this, void 0, void 0, function* () {
            return Promise.all((providers || []).map((p) => __awaiter(this, void 0, void 0, function* () {
                var _c;
                return ({
                    name: p.name, buffer_m: (_c = p.buffer_m) !== null && _c !== void 0 ? _c : 400, feats: yield p.fetch(),
                });
            })));
        });
        const [siteSets, receptorSets] = yield Promise.all([fetchSets(cfg.siteProviders), fetchSets(cfg.receptorProviders)]);
        return {
            lat, lon, waterbody: wb,
            windSeries: wind.series, windSource: wind.source,
            siteSets, receptorSets,
            startOffsetHr,
            startTMs: Date.now() + startOffsetHr * 3600000,
            fetchedAt: new Date().toISOString(),
        };
    });
}
/** Re-aim cached open-water data at a new start offset (safety-factor
 *  re-runs move the river ETA into the impoundment â€” wind + polygon are
 *  reusable, only the clock shifts). */
function rebaseOpenWaterData(data, startOffsetHr) {
    return Object.assign(Object.assign({}, data), { startOffsetHr, startTMs: Date.now() + startOffsetHr * 3600000 });
}
const COMPASS = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
const compass = (deg) => COMPASS[Math.round((((deg % 360) + 360) % 360) / 22.5) % 16];
/** computeOpenWater â€” pure given data + config (seeded RNG in runRecord). */
function computeOpenWater(data, config = {}) {
    var _c;
    const ow = Object.assign(Object.assign({}, DEFAULT_OPENWATER), (config.openWater || {}));
    const log = (m) => (Object.assign(Object.assign({}, DEFAULT_CONFIG), config)).verbose && console.log(m);
    const t0 = Date.now();
    const proj = owProjection(data.lat, data.lon);
    const ringsXY = data.waterbody.rings.map((r) => r.map(([lo, la]) => proj.toXY(la, lo)));
    const index = owShorelineIndex(ringsXY);
    const simArgs = {
        x0: 0, y0: 0, tMs0: data.startTMs, windSeries: data.windSeries, index, ow,
    };
    const best = owSimulate(Object.assign(Object.assign({}, simArgs), { uncertainty: false, seed: ow.seed }));
    const regret = owSimulate(Object.assign(Object.assign({}, simArgs), { uncertainty: true, seed: ow.seed + 1 }));
    const toLatLonRing = (hullXY) => hullXY.length >= 3 ? [...hullXY, hullXY[0]].map(([x, y]) => {
        const [la, lo] = proj.toLatLon(x, y);
        return [Math.round(lo * 1e6) / 1e6, Math.round(la * 1e6) / 1e6];
    }) : null;
    const hourly = best.hourly.filter((h) => h.hr > 0).map((h) => {
        const [cla, clo] = proj.toLatLon(...h.centroidXY);
        return {
            hour: h.hr,
            abs_hr: Math.round((data.startOffsetHr + h.hr) * 100) / 100,
            centroid: { lat: Math.round(cla * 1e6) / 1e6, lon: Math.round(clo * 1e6) / 1e6 },
            hull: toLatLonRing(convexHull(h.positions)),
            beached_count: h.beachedCount,
        };
    });
    const uncertaintyHourly = regret.hourly.filter((h) => h.hr > 0).map((h) => ({
        hour: h.hr, hull: toLatLonRing(convexHull(h.positions)),
    }));
    // shoreline impacts: cluster beached particles into contiguous shore arcs
    const { segMeta } = index;
    const byRing = new Map();
    for (const p of best.particles) {
        if (p.beachSeg === null)
            continue;
        const m = segMeta[p.beachSeg];
        let arr = byRing.get(m.ring);
        if (!arr) {
            arr = [];
            byRing.set(m.ring, arr);
        }
        arr.push({ ord: m.ord, hr: (p.beachTMs - data.startTMs) / 3600000 });
    }
    const impacts = [];
    for (const [ringIdx, hits] of byRing) {
        hits.sort((a, b) => a.ord - b.ord);
        const ring = data.waterbody.rings[ringIdx];
        let cl = null;
        const flush = () => { if (cl) {
            impacts.push(cl);
            cl = null;
        } };
        for (const h of hits) {
            if (cl && h.ord - cl.maxOrd <= ow.shoreGapSegs) {
                cl.maxOrd = Math.max(cl.maxOrd, h.ord);
                cl.hrs.push(h.hr);
            }
            else {
                flush();
                cl = { ring: ringIdx, minOrd: h.ord, maxOrd: h.ord, hrs: [h.hr] };
            }
        }
        flush();
        // NOTE: a cluster wrapping a ring's index origin splits in two â€” cosmetic
        for (const c of impacts.filter((c) => c.ring === ringIdx && !c.line)) {
            const pts = [];
            for (let i = c.minOrd; i <= Math.min(c.maxOrd + 1, ring.length - 1); i++)
                pts.push(ring[i]);
            if (pts.length < 2)
                pts.push(ring[Math.min(c.maxOrd, ring.length - 1)]);
            let lenM = 0;
            for (let i = 1; i < pts.length; i++)
                lenM += haversineM(pts[i - 1][1], pts[i - 1][0], pts[i][1], pts[i][0]);
            c.hrs.sort((a, b) => a - b);
            const mid = pts[(pts.length / 2) | 0];
            c.line = pts.map(([lo, la]) => [Math.round(lo * 1e6) / 1e6, Math.round(la * 1e6) / 1e6]);
            c.out = {
                count: c.hrs.length,
                share_pct: Math.round((1000 * c.hrs.length) / ow.nParticles) / 10,
                first_hr: Math.round(c.hrs[0] * 10) / 10,
                first_abs_hr: Math.round((data.startOffsetHr + c.hrs[0]) * 10) / 10,
                median_hr: Math.round(c.hrs[(c.hrs.length / 2) | 0] * 10) / 10,
                length_m: Math.round(lenM),
                center: { lat: mid[1], lon: mid[0] },
                line: c.line,
                boom: estimateShorelineBoom(lenM),
            };
        }
    }
    const shoreImpacts = impacts.map((c) => c.out)
        .sort((a, b) => b.count - a.count)
        .slice(0, ow.maxShoreImpacts)
        .sort((a, b) => a.first_hr - b.first_hr);
    // site ETAs: first hour any best-guess particle comes within the buffer
    const sites = [];
    for (const set of data.siteSets || []) {
        const buf = (_c = set.buffer_m) !== null && _c !== void 0 ? _c : 400;
        for (const f of set.feats || []) {
            if (f.lat === undefined || f.lon === undefined)
                continue;
            const [fx, fy] = proj.toXY(f.lat, f.lon);
            let eta = null, offset = null;
            for (const h of best.hourly) {
                if (h.hr === 0)
                    continue;
                let dmin = Infinity;
                for (const [x, y] of h.positions) {
                    const d = Math.hypot(x - fx, y - fy);
                    if (d < dmin)
                        dmin = d;
                }
                if (dmin <= buf) {
                    eta = h.hr;
                    offset = Math.round(dmin);
                    break;
                }
            }
            if (eta !== null) {
                const { lat: _a, lon: _b } = f, rest = __rest(f, ["lat", "lon"]);
                sites.push(Object.assign(Object.assign({}, rest), { eta_hr: Math.round((data.startOffsetHr + eta) * 100) / 100, offset_m: offset, open_water: true }));
            }
        }
    }
    sites.sort((a, b) => a.eta_hr - b.eta_hr);
    // downwind headline from the first-12h mean wind + earliest arrivals
    const warnings = [];
    let headline = null;
    {
        let su = 0, sv = 0, n = 0;
        for (let hr = 0; hr < 12; hr++) {
            const [u, v] = owWindAt(data.windSeries, data.startTMs + hr * 3600000);
            su += u;
            sv += v;
            n++;
        }
        const spd = Math.hypot(su / n, sv / n);
        const towardDeg = (Math.atan2(su / n, sv / n) * 180) / Math.PI;
        const bestFirst = shoreImpacts.length ? shoreImpacts[0] : null;
        const regretTimes = regret.particles.filter((p) => p.beachTMs !== null)
            .map((p) => (p.beachTMs - data.startTMs) / 3600000).sort((a, b) => a - b);
        const early = regretTimes.length ? Math.round(regretTimes[0] * 10) / 10 : null;
        headline =
            `Wind ${spd.toFixed(1)} m/s â†’ drifting ${compass(towardDeg)}` +
                (bestFirst
                    ? `; first shoreline arrival ~${early !== null && early < bestFirst.first_hr ? early + "â€“" : ""}${bestFirst.first_hr} h`
                    : `; no shoreline arrival within ${ow.durationHr} h (best guess)`);
        if (spd < 1.5)
            warnings.push("Light/variable wind â€” drift direction is LOW CONFIDENCE; treat the uncertainty envelope as the planning footprint.");
    }
    warnings.push("Open-water model: wind-drift surface transport only (GNOME-class physics) â€” no weathering, no lake-circulation currents; ETAs are forecast-wind dependent.");
    const result = {
        mode: "open-water",
        waterbody: { name: data.waterbody.name, area_sqkm: data.waterbody.area_sqkm, ftype: data.waterbody.ftype },
        spill_point: { lat: data.lat, lon: data.lon },
        start_offset_hr: data.startOffsetHr,
        duration_hr: ow.durationHr,
        headline,
        hourly,
        uncertainty_hourly: uncertaintyHourly,
        shore_impacts: shoreImpacts,
        sites,
        warnings,
        stats: {
            n_particles: ow.nParticles,
            beached_final: best.particles.filter((p) => p.beached).length,
            ever_beached: best.particles.filter((p) => p.beachTMs !== null).length,
            compute_ms: Date.now() - t0,
        },
        runRecord: {
            engine_version: ENGINE_VERSION,
            mode: "open-water",
            generated_at: new Date().toISOString(),
            data_fetched_at: data.fetchedAt,
            spill_point: { lat: data.lat, lon: data.lon },
            waterbody: { name: data.waterbody.name, area_sqkm: data.waterbody.area_sqkm, ftype: data.waterbody.ftype, rings: data.waterbody.rings.length },
            wind_source: data.windSource,
            wind_points: data.windSeries.length,
            start_offset_hr: data.startOffsetHr,
            seed: ow.seed,
            params: {
                n_particles: ow.nParticles, duration_hr: ow.durationHr, timestep_s: ow.timestepS,
                windage: [ow.windageMin, ow.windageMax], diffusion_m2s: ow.diffusionM2s,
                refloat_half_life_hr: ow.refloatHalfLifeHr,
            },
            shoreline_segments: index.segs.length,
        },
    };
    log(`  OPEN WATER: ${data.waterbody.name} â€” ${result.stats.ever_beached}/${ow.nParticles} beached, ` +
        `${shoreImpacts.length} shore impacts, ${sites.length} sites, ${result.stats.compute_ms} ms`);
    return result;
}
function runOpenWater(lat_1, lon_1) {
    return __awaiter(this, arguments, void 0, function* (lat, lon, config = {}, waterbody = null) {
        const data = yield fetchOpenWaterData(lat, lon, config, waterbody);
        return computeOpenWater(data, config);
    });
}
/** River trace ended at an impoundment â†’ continue as open water from the
 *  entry point, clock offset by the river ETA. */
function runOpenWaterContinuation(riverResult_1) {
    return __awaiter(this, arguments, void 0, function* (riverResult, config = {}) {
        const sp = riverResult.impound_stop_point;
        if (!sp)
            return null;
        const data = yield fetchOpenWaterData(sp.lat, sp.lon, config, null, sp.eta_hr);
        const owRes = computeOpenWater(data, config);
        owRes.continuation_of = {
            river: riverResult.river_name,
            entered: sp.name,
            river_eta_hr: sp.eta_hr,
        };
        owRes.warnings.unshift(`Continuation: river plume enters ${sp.name} at ~${sp.eta_hr} h; open-water hours below are ABSOLUTE from the spill (abs_hr).`);
        return owRes;
    });
}
/** Open-water result as GeoJSON (hulls, centroid track, shore impacts). */
function toOpenWaterGeoJson(ow) {
    const features = [{
            type: "Feature",
            properties: { kind: "ow_spill_point", waterbody: ow.waterbody.name, headline: ow.headline },
            geometry: { type: "Point", coordinates: [ow.spill_point.lon, ow.spill_point.lat] },
        }];
    features.push({
        type: "Feature",
        properties: { kind: "ow_centroid_track" },
        geometry: { type: "LineString", coordinates: ow.hourly.map((h) => [h.centroid.lon, h.centroid.lat]) },
    });
    for (const h of ow.hourly) {
        if (h.hull)
            features.push({
                type: "Feature",
                properties: { kind: "ow_hull", hour: h.hour, abs_hr: h.abs_hr, beached_count: h.beached_count },
                geometry: { type: "Polygon", coordinates: [h.hull] },
            });
    }
    for (const h of ow.uncertainty_hourly) {
        if (h.hull)
            features.push({
                type: "Feature",
                properties: { kind: "ow_uncertainty_hull", hour: h.hour },
                geometry: { type: "Polygon", coordinates: [h.hull] },
            });
    }
    for (const s of ow.shore_impacts) {
        features.push({
            type: "Feature",
            properties: {
                kind: "ow_shore_impact", first_hr: s.first_hr, median_hr: s.median_hr,
                share_pct: s.share_pct, length_m: s.length_m, boom_ft: s.boom ? s.boom.boom_ft : null,
            },
            geometry: { type: "LineString", coordinates: s.line },
        });
    }
    return { type: "FeatureCollection", features };
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
    const [status, setStatus] = useState('Click "Set spill point", then click the water (river, lake, or reservoir).');
    const [result, setResult] = useState(null);
    const [safety, setSafety] = useState((_a = props.config.safetyFactor) !== null && _a !== void 0 ? _a : 1.5);
    const [diag, setDiag] = useState([]);
    const [hidden, setHidden] = useState(false);
    const layerRef = useRef(null);
    const clickHandleRef = useRef(null);
    // cached hydrology for the current spill point — safety-factor changes
    // recompute from this instantly instead of re-fetching NLDI/NWIS.
    // mode 'open-water' caches owData instead (SF does not apply there).
    const cacheRef = useRef(null);
    // reservoir-continuation cache: wind + lake polygon per impoundment stop
    // point — SF re-runs only shift the entry clock (rebaseOpenWaterData)
    const owContRef = useRef(null);
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
    // ---- open-water drawing (engine v1.7: lakes/reservoirs, GNOME-class) ----
    const owHullHours = (ow) => {
        const avail = ow.hourly.map((h) => h.hour);
        const want = [3, 6, 12, ow.duration_hr].filter((h) => avail.includes(h));
        if (!want.length && avail.length)
            want.push(avail[avail.length - 1]);
        return want;
    };
    const drawOpenWater = (view, ow, append = false) => {
        var _a, _b;
        const layer = ensureLayer(view);
        if (!append)
            layer.removeAll();
        const absHr = (h) => (ow.start_offset_hr || 0) + h;
        // minimum-regret envelope (final uncertainty hull) under everything
        const lastU = ow.uncertainty_hourly[ow.uncertainty_hourly.length - 1];
        if (lastU === null || lastU === void 0 ? void 0 : lastU.hull) {
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: { type: 'polygon', rings: [lastU.hull], spatialReference: { wkid: 4326 } },
                symbol: {
                    type: 'simple-fill', color: [120, 120, 120, 0.08],
                    outline: { color: [90, 90, 90, 0.8], width: 1.5, style: 'dash' },
                },
                popupTemplate: {
                    title: 'Uncertainty envelope',
                    content: `Minimum-regret footprint at hour ${lastU.hour} — plan to this outline, not the best guess.`,
                },
            }));
        }
        // best-guess hulls, latest first so early (small) hulls stay on top
        const hrs = owHullHours(ow);
        for (const hr of [...hrs].reverse()) {
            const h = ow.hourly.find((x) => x.hour === hr);
            if (!(h === null || h === void 0 ? void 0 : h.hull))
                continue;
            const c = bandColor(absHr(hr));
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: { type: 'polygon', rings: [h.hull], spatialReference: { wkid: 4326 } },
                symbol: { type: 'simple-fill', color: [...hexToRgb(c), 0.15], outline: { color: c, width: 2 } },
                popupTemplate: {
                    title: `Hour ${absHr(hr)}${ow.start_offset_hr ? ' (absolute from spill)' : ''}`,
                    content: `Best-guess plume footprint · ${h.beached_count}/${ow.stats.n_particles} particles ashore`,
                },
            }));
        }
        // centroid drift track + labels at drawn hulls
        if (ow.hourly.length > 1) {
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: new esri_geometry_Polyline__WEBPACK_IMPORTED_MODULE_6__["default"]({
                    paths: [ow.hourly.map((h) => [h.centroid.lon, h.centroid.lat])],
                    spatialReference: { wkid: 4326 },
                }),
                symbol: { type: 'simple-line', color: [40, 40, 40, 0.9], width: 2, style: 'short-dot' },
            }));
            for (const hr of hrs) {
                const h = ow.hourly.find((x) => x.hour === hr);
                if (!h)
                    continue;
                layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                    geometry: new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({ latitude: h.centroid.lat, longitude: h.centroid.lon }),
                    symbol: {
                        type: 'text', text: `${absHr(hr)} hr`, color: bandColor(absHr(hr)),
                        haloColor: '#ffffff', haloSize: 1.5, yoffset: 8,
                        font: { size: 10, weight: 'bold', family: 'sans-serif' },
                    },
                }));
            }
        }
        // shoreline impacts — the actionable output
        for (const s of ow.shore_impacts) {
            const c = bandColor((_a = s.first_abs_hr) !== null && _a !== void 0 ? _a : s.first_hr);
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: new esri_geometry_Polyline__WEBPACK_IMPORTED_MODULE_6__["default"]({ paths: [s.line], spatialReference: { wkid: 4326 } }),
                symbol: { type: 'simple-line', color: c, width: 6, cap: 'round' },
                popupTemplate: {
                    title: `Shoreline impact — first arrival ~${(_b = s.first_abs_hr) !== null && _b !== void 0 ? _b : s.first_hr} hr`,
                    content: `${s.share_pct}% of spill (${s.count} particles) · median arrival ${s.median_hr} hr · ` +
                        `${(s.length_m / 1000).toFixed(1)} km of shore` +
                        (s.boom ? ` · protective boom ~${s.boom.boom_ft.toLocaleString()} ft (${s.boom.anchors} anchor sets)` : ''),
                },
            }));
        }
        // entry/spill point
        layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
            geometry: new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({ latitude: ow.spill_point.lat, longitude: ow.spill_point.lon }),
            symbol: { type: 'simple-marker', style: 'x', size: 14, outline: { color: '#000', width: 3 } },
            popupTemplate: {
                title: append ? 'Water entry point' : 'Spill point',
                content: `${ow.spill_point.lat.toFixed(5)}, ${ow.spill_point.lon.toFixed(5)}` +
                    (ow.start_offset_hr ? ` · river plume arrives ~${ow.start_offset_hr} hr` : ''),
            },
        }));
    };
    const owConfig = () => {
        var _a, _b, _c, _d;
        return ({
            verbose: false,
            openWater: (_d = (_c = (_b = (_a = props.config.openWater) === null || _a === void 0 ? void 0 : _a.asMutable) === null || _b === void 0 ? void 0 : _b.call(_a, { deep: true })) !== null && _c !== void 0 ? _c : props.config.openWater) !== null && _d !== void 0 ? _d : {},
        });
    };
    // reservoir continuation: river trace ended in a lake → keep going as open water
    const continuationFor = (res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const sp = res.impound_stop_point;
        const key = `${sp.lat.toFixed(4)},${sp.lon.toFixed(4)}`;
        if (!owContRef.current || owContRef.current.key !== key) {
            // reuse the river run's already-fetched site features (no second layer query)
            const cachedProviders = (((_b = (_a = cacheRef.current) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.siteSets) || []).map((s) => ({
                name: s.name, buffer_m: s.buffer_m, fetch: () => __awaiter(void 0, void 0, void 0, function* () { return s.feats; }),
            }));
            const data = yield (0,_trace_engine__WEBPACK_IMPORTED_MODULE_9__.fetchOpenWaterData)(sp.lat, sp.lon, Object.assign(Object.assign({}, owConfig()), { siteProviders: cachedProviders }), null, sp.eta_hr);
            owContRef.current = { key, data };
        }
        const ow = (0,_trace_engine__WEBPACK_IMPORTED_MODULE_9__.computeOpenWater)((0,_trace_engine__WEBPACK_IMPORTED_MODULE_9__.rebaseOpenWaterData)(owContRef.current.data, sp.eta_hr), owConfig());
        ow.continuation_of = { river: res.river_name, entered: sp.name, river_eta_hr: sp.eta_hr };
        ow.warnings.unshift(`Continuation: river plume enters ${sp.name} at ~${sp.eta_hr} h — open-water hours are ABSOLUTE from the spill.`);
        return ow;
    });
    // ---- model config + equipment + compute/render (pure, reusable on cached data) ----
    const modelCfg = (sf) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return ({
            safetyFactor: sf,
            timingModel: (_a = props.config.timingModel) !== null && _a !== void 0 ? _a : 'hydraulic',
            minStreamOrder: (_b = props.config.minStreamOrder) !== null && _b !== void 0 ? _b : 4,
            maxHours: (_c = props.config.maxHours) !== null && _c !== void 0 ? _c : 24,
            maxDistanceKm: (_d = props.config.maxDistanceKm) !== null && _d !== void 0 ? _d : 300,
            // Canadian corridor files (engine v1.6) — URLs or inline docs
            corridors: (_h = (_g = (_f = (_e = props.config.corridors) === null || _e === void 0 ? void 0 : _e.asMutable) === null || _f === void 0 ? void 0 : _f.call(_e, { deep: true })) !== null && _g !== void 0 ? _g : props.config.corridors) !== null && _h !== void 0 ? _h : [],
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
        var _a, _b, _c;
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
        // reservoir continuation (async — river result is already on screen)
        const owCfg = props.config.openWater || {};
        if (res.impound_stop_point && ((_b = owCfg.enabled) !== null && _b !== void 0 ? _b : true) && ((_c = owCfg.continueAtImpoundment) !== null && _c !== void 0 ? _c : true)) {
            continuationFor(res).then((ow) => {
                if (cacheRef.current !== c)
                    return; // superseded by a newer run
                res.open_water = ow;
                drawOpenWater(jmv.view, ow, true);
                setResult(Object.assign({}, res));
                setStatus((s) => `${s} · continues into ${ow.waterbody.name}`);
            }).catch((e) => {
                if (cacheRef.current !== c)
                    return;
                setStatus((s) => `${s} · continuation unavailable (${String(e).slice(0, 60)})`);
            });
        }
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
                // v1.7 dispatch: a click inside a lake/reservoir runs the open-water
                // particle model (dam tailraces still route to the river)
                const disp = yield (0,_trace_engine__WEBPACK_IMPORTED_MODULE_9__.resolveTraceMode)(lat, lon, Object.assign(Object.assign({}, modelCfg(1)), owConfig()));
                if (disp.mode === 'open-water') {
                    setStatus(`Open water (${disp.waterbody.name}) — running wind-drift particle model…`);
                    const owData = yield (0,_trace_engine__WEBPACK_IMPORTED_MODULE_9__.fetchOpenWaterData)(lat, lon, Object.assign(Object.assign({}, owConfig()), { siteProviders: siteLayers.map((lc, i) => makeSiteProvider(lc, 500, `Site layer ${i + 1}`, notes)) }), disp.waterbody);
                    const owRes = (0,_trace_engine__WEBPACK_IMPORTED_MODULE_9__.computeOpenWater)(owData, owConfig());
                    cacheRef.current = { lat, lon, mode: 'open-water', owData, fetchNotes: notes.slice() };
                    drawOpenWater(jmv.view, owRes);
                    if (layerRef.current)
                        layerRef.current.visible = true;
                    setHidden(false);
                    setResult(owRes);
                    setDiag([...notes,
                        `${owRes.stats.n_particles} particles · ${owRes.runRecord.shoreline_segments} shoreline segments · ${owRes.stats.compute_ms} ms`]);
                    setStatus(`${disp.waterbody.name} — open-water drift, ${owRes.duration_hr} h · ${owRes.shore_impacts.length} shoreline impact(s)`);
                    return;
                }
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
        owContRef.current = null;
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
    const isOpenWater = (result === null || result === void 0 ? void 0 : result.mode) === 'open-water';
    const sites = (isOpenWater ? [] : result === null || result === void 0 ? void 0 : result.sites) || [];
    const warnings = (result === null || result === void 0 ? void 0 : result.warnings) || [];
    // shared panel for a lake/reservoir result (primary run or continuation)
    const OpenWaterPanel = ({ ow }) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 6 }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: ow.headline }) }), ow.shore_impacts.length > 0
                ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { style: { width: '100%', borderCollapse: 'collapse' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { textAlign: 'left', borderBottom: '1px solid #ccc' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "First arrival" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "Shore" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "%" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "Boom (protective)" })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: ow.shore_impacts.map((s, i) => {
                                var _a;
                                const hr = (_a = s.first_abs_hr) !== null && _a !== void 0 ? _a : s.first_hr;
                                return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { borderBottom: '1px solid #eee' }, title: `${s.count} particles · median arrival ${s.median_hr} hr`, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { padding: '2px 4px', whiteSpace: 'nowrap' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: {
                                                        display: 'inline-block', width: 10, height: 10, borderRadius: 5,
                                                        background: bandColor(hr), marginRight: 4,
                                                    } }), hr, " hr"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { padding: '2px 4px' }, children: [(s.length_m / 1000).toFixed(1), " km"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { padding: '2px 4px' }, children: [s.share_pct, "%"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { padding: '2px 4px', whiteSpace: 'nowrap' }, children: s.boom ? `${s.boom.boom_ft.toLocaleString()} ft` : '—' })] }, i));
                            }) })] })
                : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { color: '#777' }, children: ["No shoreline arrival within ", ow.duration_hr, " h (best guess) \u2014 watch the uncertainty envelope."] }), ow.sites.length > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { style: { width: '100%', borderCollapse: 'collapse', marginTop: 6 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { textAlign: 'left', borderBottom: '1px solid #ccc' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "ETA" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "Site" })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: ow.sites.map((s, i) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { borderBottom: '1px solid #eee' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { padding: '2px 4px', whiteSpace: 'nowrap' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: {
                                                display: 'inline-block', width: 10, height: 10, borderRadius: 5,
                                                background: bandColor(s.eta_hr), marginRight: 4,
                                            } }), s.eta_hr.toFixed(1), " hr"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { padding: '2px 4px' }, children: s.name })] }, i))) })] })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#777', marginTop: 4 }, children: "Filled outlines = best-guess plume at labeled hours \u00B7 dashed grey = minimum-regret envelope (plan to this) \u00B7 thick shore lines = predicted impacts \u00B7 protective boom = shore length +20%, 50-ft sticks." })] }));
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "jimu-widget", style: { padding: 10, overflow: 'auto', fontSize: 13 }, children: [((_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: (v) => setJmv(v) })), !((_c = props.useMapWidgetIds) === null || _c === void 0 ? void 0 : _c.length) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#b00' }, children: "Select a Map widget in this widget's settings." })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', gap: 6, marginBottom: 8 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-primary btn-sm", disabled: !jmv || arming || running, onClick: armClick, children: arming ? 'Click the map…' : running ? 'Tracing…' : 'Set spill point' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: running, onClick: clearAll, children: "Clear" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: !result, onClick: toggleVisible, title: "Hide/show the trajectory on the map without losing the run (briefings)", children: hidden ? '👁 Show' : '👁 Hide' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: !result, title: "Copy run provenance record (JSON) for after-action documentation \u2014 includes a replay URL", onClick: () => {
                            if (!(result === null || result === void 0 ? void 0 : result.runRecord) || !cacheRef.current)
                                return;
                            const rec = Object.assign({}, result.runRecord);
                            const u = new URL('https://whitewaterrescue.github.io/wri-exb-widgets/embed/');
                            u.searchParams.set('config', 'all-grps');
                            u.searchParams.set('lat', cacheRef.current.lat.toFixed(5));
                            u.searchParams.set('lon', cacheRef.current.lon.toFixed(5));
                            if (rec.as_of)
                                u.searchParams.set('asOf', rec.as_of !== 'live' ? rec.as_of : rec.generated_at.slice(0, 10));
                            u.searchParams.set('sf', String(safety));
                            rec.replay_url = u.toString();
                            navigator.clipboard.writeText(JSON.stringify(rec, null, 1)).then(() => setStatus('Run record copied (includes replay_url).'));
                        }, children: "\u2398 Record" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { style: { marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }, title: "Safety factor \u2014 changing it re-runs instantly from cached hydrology", children: ["SF", (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { value: safety, disabled: running, onChange: (e) => {
                                    const v = parseFloat(e.target.value);
                                    setSafety(v);
                                    if (!cacheRef.current || running)
                                        return;
                                    if (cacheRef.current.mode === 'open-water') {
                                        setStatus('Safety factor does not apply to open-water (wind-drift) runs — uncertainty is the dashed envelope.');
                                        return;
                                    }
                                    computeAndRender(v, true);
                                }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 1.0, children: "1.0" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 1.25, children: "1.25" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 1.5, children: "1.5" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 2.0, children: "2.0" })] })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 8, minHeight: 18 }, children: [running && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "jimu-secondary-loading" }), " ", status] }), diag.length > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#888', fontSize: 11, marginBottom: 8 }, children: diag.map((d, i) => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: d }, i)) })), warnings.length > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { background: '#fff3cd', color: '#333', border: '1px solid #ffeeba', padding: 6, marginBottom: 8, borderRadius: 4 }, children: warnings.map((w, i) => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 2 }, children: ["\u26A0 ", w] }, i)) })), result && !isOpenWater && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 8, color: '#999' }, children: ["ETAs are estimates (\u00B120%), safety factor \u00D7", result.safety_factor, " applied \u2014 treat as bands, not appointments.", result.gauges_used.length
                        ? ` Flows: ${result.gauges_used.map((g) => g.station_id).join(', ')}.`
                        : ' No live gauges found — drainage-area flow estimate.'] })), isOpenWater && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OpenWaterPanel, { ow: result }), sites.length > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { style: { width: '100%', borderCollapse: 'collapse' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { textAlign: 'left', borderBottom: '1px solid #ccc' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "ETA" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "Site" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "km" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "Boom" })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: sites.map((s, i) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { borderBottom: '1px solid #eee' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { padding: '2px 4px', whiteSpace: 'nowrap' }, title: s.eta_early_hr !== undefined
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
                                        : '—' })] }, i))) }), sites.some((s) => s.boom) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tfoot", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { borderTop: '2px solid #ccc', fontWeight: 600 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { colSpan: 3, style: { padding: '3px 4px' }, children: ["Totals (", sites.filter((s) => s.boom).length, " boom sites)"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { padding: '3px 4px', whiteSpace: 'nowrap' }, children: [sites.reduce((t, s) => { var _a; return t + (((_a = s.boom) === null || _a === void 0 ? void 0 : _a.boom_ft) || 0); }, 0).toLocaleString(), " ft \u00B7", ' ', sites.reduce((t, s) => { var _a; return t + (((_a = s.boom) === null || _a === void 0 ? void 0 : _a.anchors) || 0); }, 0), " anchors"] })] }) }))] })), result && sites.some((s) => s.boom) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { color: '#777', marginTop: 4 }, children: ["\u2713 = drawn boom lines \u00B7 est. = sized from modeled width/velocity (boom angled to keep normal flow \u2264 ", ((_e = (_d = props.config.equipment) === null || _d === void 0 ? void 0 : _d.entrainmentMs) !== null && _e !== void 0 ? _e : 0.35), " m/s, +", (_g = (_f = props.config.equipment) === null || _f === void 0 ? void 0 : _f.reservePct) !== null && _g !== void 0 ? _g : 20, "% reserve) \u00B7 \u26A1 = fast water, cascade booms"] })), result && !isOpenWater && sites.length === 0 && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#777' }, children: "No configured sites within reach of this trace." }), (result === null || result === void 0 ? void 0 : result.open_water) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: 10, paddingTop: 6, borderTop: '2px solid #ccc' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 4 }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", { children: ["Into ", result.open_water.waterbody.name, " (open water)"] }) }), result.open_water.warnings.map((w, i) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { background: '#fff3cd', border: '1px solid #ffeeba', padding: 4, marginBottom: 4, borderRadius: 4 }, children: ["\u26A0 ", w] }, i))), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OpenWaterPanel, { ow: result.open_water })] }))] }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zcGlsbC10cmFjZS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxjQUFjO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUksTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDO0FBRXRDLE1BQU0sU0FBUyxHQUFHLGlDQUFpQyxDQUFDO0FBQ3BELE1BQU0sU0FBUyxHQUFHLGtEQUFrRCxDQUFDO0FBQ3JFLE1BQU0sT0FBTyxHQUFHLHlDQUF5QyxDQUFDO0FBQzFELE1BQU0sU0FBUyxHQUFHLDJDQUEyQyxDQUFDO0FBQzlELE1BQU0sU0FBUyxHQUFHLDJDQUEyQyxDQUFDO0FBQzlELE1BQU0sUUFBUSxHQUFHLHVDQUF1QyxDQUFDO0FBRXpEOzs7O0dBSUc7QUFDSSxNQUFNLDBCQUEwQixHQUFHLElBQUksR0FBRyxDQUFDO0lBQ2hELDRGQUE0RjtJQUM1RixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVE7Q0FDN0IsQ0FBQyxDQUFDO0FBRUksTUFBTSxjQUFjLEdBQUc7SUFDNUIsYUFBYSxFQUFFLEdBQUc7SUFDbEIsUUFBUSxFQUFFLEVBQUU7SUFDWixXQUFXLEVBQUUsS0FBSztJQUNsQixZQUFZLEVBQUUsR0FBRztJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLGFBQWEsRUFBRSxJQUFJLEVBQVMsMkRBQTJEO0lBQ3ZGLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsaUJBQWlCLEVBQUUsR0FBRyxFQUFNLHFEQUFxRDtJQUNqRixhQUFhLEVBQUUsRUFBRTtJQUNqQixpQkFBaUIsRUFBRSxFQUFFO0lBQ3JCLGVBQWUsRUFBRSxF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QUcsVUFBVSxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLGFBQWEsQ0FBQztRQUM3RSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsYUFBYSxFQUFFLElBQUksR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDO0tBQ3RFLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFDckQsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUM3RCxNQUFNLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDaEMsSUFBSSxLQUFLLEtBQUssQ0FBQztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNwRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDcEQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN6RCxDQUFDO0FBRUQ7eUVBQ3lFO0FBQ3pFLFNBQVMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFHO0lBQzVDLE1BQU0sSUFBSSxHQUFHLEVBQUUsRUFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQzlCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNyQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUFFLFNBQVM7WUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUN4QixNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDdEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuRyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ25HLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7b0JBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7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O0FBRU0sU0FBUyxVQUFVLENBQUMsUUFBUTtJQUNqQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUM7UUFBRSxPQUFPLEdBQUcsQ0FBQztJQUMvQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDakIsS0FBSyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNwQixPQUFPLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJ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SUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRTtLQUMxRSxDQUFDO0lBQ0YsTUFBTSxJQUFJLEdBQUcsVUFBVSxpQ0FBTSxPQUFPLEtBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBRyxDQUFDO0lBQzNFLE1BQU0sTUFBTSxHQUFHLFVBQVUsaUNBQU0sT0FBTyxLQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFHLENBQUM7SUFFaEYsTUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUM5QixNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ3pELE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNsRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBRVosTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDM0QsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELE9BQU87WUFDTCxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDVixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUc7WUFDM0QsUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFO1lBQ2hGLElBQUksRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFlBQVk7U0FDOUIsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3hELENBQUMsQ0FBQyxDQUFDO0lBRUosMEVBQTBFO0lBQzFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDMUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUN6QixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSTtZQUFFLFNBQVM7UUFDbEMsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUNoRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0QsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ25CLEtBQUssTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQy9DLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BCLENBQUM7aUJBQU0sQ0FBQztnQkFDTixLQUFLLEVBQUUsQ0FBQztnQkFDUixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3BFLENBQUM7UUFDSCxDQUFDO1FBQ0QsS0FBSyxFQUFFLENBQUM7UUFDUiw0RUFBNEU7UUFDNUUsS0FBSyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3JFLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVGLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7WUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7Z0JBQUUsSUFBSSxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekYsQ0FBQyxDQUFDLEdBQUcsR0FBRztnQkFDTixLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNO2dCQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFD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LENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUN2RSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hCLENBQUM7UUFDRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQy9ELE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9ELE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQzthQUNwRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVFLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9FLFFBQVE7WUFDTixR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QUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLHdCQUFLLENBQUMsS0FBcEgsQ0FBQyxDQUEwSCxDQUN0SSxDQUFDLEVBQ0YsZ0VBQUMsY0FBYyxJQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsVUFBVSxHQUFJLElBQ3JDLENBQ1AsSUFDRyxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zcGlsbC10cmFjZS9zcmMvdHJhY2UtZW5naW5lLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9HcmFwaGljXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvaW50XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvbHlsaW5lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9lbW90aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zcGlsbC10cmFjZS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1ub2NoZWNrXG4vKipcclxuICogdHJhY2UtZW5naW5lLmpzIMOi4oKs4oCdIE5hdGlvbmFsIHNwaWxsIHRyYWplY3RvcnkgZW5naW5lIChKUyBwb3J0IG9mIHNwaWxsX3RyYWNlLnB5KVxyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICpcclxuICogRmFpdGhmdWwgcG9ydCBvZiB0aGUgUHl0aG9uIG9yYWNsZS4gRGVwZW5kZW5jeS1mcmVlIEVTTTogcnVucyBpbiBwbGFpbiBOb2RlXHJcbiAqICg+PTE4LCBnbG9iYWwgZmV0Y2gpIGZvciBnb2xkZW4gdGVzdGluZyBhbmQgaW4gdGhlIGJyb3dzZXIgaW5zaWRlIHRoZSBFeEJcclxuICogd2lkZ2V0LiBOTyBAYXJjZ2lzIGltcG9ydHMgaGVyZSDDouKCrOKAnSB0aGUgd2lkZ2V0IHdyYXBzIHRoaXMgbW9kdWxlIGFuZCBzdXBwbGllc1xyXG4gKiBsYXllciBhY2Nlc3MgdGhyb3VnaCBpbmplY3RhYmxlIHByb3ZpZGVyczpcclxuICpcclxuICogICBjb25maWcud2lkdGhQcm92aWRlcihlbnZlbG9wZSkgIC0+IFt7bGF0LCBsb24sIHdpZHRofV0gICAoR0xPVyBtaWRwb2ludHMgaW4gYmJveClcclxuICogICBjb25maWcuc2l0ZVByb3ZpZGVycyAgICAgICAgICAgIC0+IFt7bmFtZSwgYnVmZmVyX20sIGZldGNoOiBhc3luYyAoKSA9PiBbe25hbWUsIGxhdCwgbG9uLCAuLi5leHRyYX1dfV1cclxuICogICBjb25maWcucmVjZXB0b3JQcm92aWRlcnMgICAgICAgIC0+IHNhbWUgc2hhcGUgYXMgc2l0ZVByb3ZpZGVyc1xyXG4gKlxyXG4gKiBQb3J0IGdvdGNoYXMgaG9ub3JlZCAoc2VlIFJFQURNRSk6XHJcbiAqICAgMS4gZ2Vvc2VydmVyIENRTCBCQk9YIGlzIGxhdCxsb24gYXhpcyBvcmRlciAoRVBTRzo0MjY5IC8gV0ZTIDIuMClcclxuICogICAyLiBIUiBOSERQbHVzSUQgIT0gTVIgY29taWQgw6LigqzigJ0gd2lkdGhzIHNhbXBsZWQgc3BhdGlhbGx5LCBuZXZlciBJRC1qb2luZWRcclxuICogICAzLiBpbXBvdW5kbWVudCA9IHdiYXJlYXR5cGUgaW4gKExha2VQb25kLCBSZXNlcnZvaXIpXHJcbiAqICAgNC4gd2lkdGggb3ZlcnJpZGUgc2FtcGxlZCBpbiB3aW5kb3dzOyBmYWlsdXJlIGRlZ3JhZGVzIHRvIGZvcm11bGEgd2lkdGhzXHJcbiAqICAgNS4gTkxESS9nZW9zZXJ2ZXIgZW1wdHktMjAwIC0+IHJldHJ5IDN4IHdpdGggYmFja29mZlxyXG4gKiAgIDYuIHNuYXAgY2xpY2sgdG8gc3RyZWFtb3JkZSA+PSBtaW5TdHJlYW1PcmRlclxyXG4gKlxyXG4gKiBDb3JyaWRvciBtb2RlICh2MS42KTogVVMgZmVkZXJhbCBzZXJ2aWNlcyAoTkxESS9OSERQbHVzL05XSVMpIGVuZCBhdCB0aGVcclxuICogYm9yZGVyLiBjb25maWcuY29ycmlkb3JzIGxpc3RzIHByZWNvbXB1dGVkIGNvcnJpZG9yIGZpbGVzIChzZWVcclxuICogY29ycmlkb3JzL2J1aWxkX2NvcnJpZG9ycy5weSkgw6LigqzigJ0gYSBzdGF0aW9uZWQgY2VudGVybGluZSArIGF1dGhvcmVkIGh5ZHJhdWxpY1xyXG4gKiBhdHRyaWJ1dGVzICsgYSBmbG93IG1vZGVsIGJvdW5kIHRvIEVDQ0MgKFdhdGVyIFN1cnZleSBvZiBDYW5hZGEpIGdhdWdlcy5cclxuICogQSBjbGljayB0aGF0IGxhbmRzIHdpdGhpbiBhIGNvcnJpZG9yJ3Mgc25hcF9tIHJ1bnMgZW50aXJlbHkgb24gY29ycmlkb3JcclxuICogZGF0YTsgY29ycmlkb3JzIGNoYWluIGRvd25zdHJlYW0gdmlhIGNvbnRpbnVlc190byAoQnJ1bmV0dGUgLT4gRnJhc2VyKSxcclxuICogd2l0aCBzaG9ydCBjb25mbHVlbmNlIGdhcHMgYnJpZGdlZCBieSBhIHN0cmFpZ2h0IGNvbm5lY3RvciB0aGF0IGluaGVyaXRzXHJcbiAqIHRoZSBET1dOU1RSRUFNIGNvcnJpZG9yJ3MgaHlkcmF1bGljcy4gQWxsIHBoeXNpY3MgKGNvbXB1dGVUcmFjZSkgaXMgc2hhcmVkXHJcbiAqIHdpdGggdGhlIFVTIHBhdGguXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IEVOR0lORV9WRVJTSU9OID0gXCIxLjcuMFwiO1xyXG5cclxuY29uc3QgTkxESV9CQVNFID0gXCJodHRwczovL2FwaS53YXRlci51c2dzLmdvdi9ubGRpXCI7XHJcbmNvbnN0IEdFT1NFUlZFUiA9IFwiaHR0cHM6Ly9hcGkud2F0ZXIudXNncy5nb3YvZ2Vvc2VydmVyL3dtYWRhdGEvb3dzXCI7XHJcbmNvbnN0IE5XSVNfSVYgPSBcImh0dHBzOi8vd2F0ZXJzZXJ2aWNlcy51c2dzLmdvdi9ud2lzL2l2L1wiO1xyXG5jb25zdCBOV0lTX1NJVEUgPSBcImh0dHBzOi8vd2F0ZXJzZXJ2aWNlcy51c2dzLmdvdi9ud2lzL3NpdGUvXCI7XHJcbmNvbnN0IE5XSVNfU1RBVCA9IFwiaHR0cHM6Ly93YXRlcnNlcnZpY2VzLnVzZ3MuZ292L253aXMvc3RhdC9cIjtcclxuY29uc3QgRUNDQ19BUEkgPSBcImh0dHBzOi8vYXBpLndlYXRoZXIuZ2MuY2EvY29sbGVjdGlvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiBOSERQbHVzIE1SIHdhdGVyYm9keSBmbGFncyBsYWcgcmVhbGl0eSDDouKCrOKAnSByZWFjaGVzIHRocm91Z2ggUkVNT1ZFRCBkYW1zIHN0aWxsXHJcbiAqIGNhcnJ5IHdiYXJlYXR5cGUgTGFrZVBvbmQgYW5kIHdvdWxkIGZhbHNlLXN0b3AgdGhlIGNsb2NrLiBLbm93biByZW1vdmFsc1xyXG4gKiBhcmUgZXhjbHVkZWQgaGVyZSAoZXh0ZW5kYWJsZSBwZXItcnVuIHZpYSBjb25maWcuaW1wb3VuZEV4Y2x1ZGVDb21pZHMpLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJFTU9WRURfSU1QT1VORE1FTlRfQ09NSURTID0gbmV3IFNldChbXHJcbiAgLy8gTWlsbHRvd24gRGFtLCBDbGFyayBGb3JrIGF0IEJvbm5lciBNVCDDouKCrOKAnSByZW1vdmVkIDIwMDgtMjAxMCAocmVwb3J0ZWQgYnkgQ29keSAyMDI2LTA3LTA3KVxyXG4gIDI0MjkzMTIwLCAyNDI5MzEyMiwgMjQyOTMxMjQsXHJcbl0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xyXG4gIG1heERpc3RhbmNlS206IDMwMCxcclxuICBtYXhIb3VyczogMjQsXHJcbiAgcmVzb2x1dGlvbk06IDEwMC4wLFxyXG4gIHNhZmV0eUZhY3RvcjogMS41LFxyXG4gIG1hbm5pbmdOOiAwLjA0NSxcclxuICBtaW5TdHJlYW1PcmRlcjogNCxcclxuICB3aWR0aFByb3ZpZGVyOiBudWxsLCAgICAgICAgLy8gYXN5bmMgKGVudiB7eG1pbix5bWluLHhtYXgseW1heH0pID0+IFt7bGF0LCBsb24sIHdpZHRofV1cclxuICB3aWR0aFNhbXBsZVJhZGl1c006IDgwMCxcclxuICB3aWR0aFdpbmRvd1BvaW50czogMTAwLCAgICAgLy8gdHJhY2UgcG9pbnRzIHBlciBvdmVycmlkZSBzYW1wbGluZyB3aW5kb3cgKH4xMCBrbSlcclxuICBzaXRlUHJvdmlkZXJzOiBbXSxcclxuICByZWNlcHRvclByb3ZpZGVyczogW10sXHJcbiAgdXBzdHJlYW1HYXVnZUttOiAzMCwgICAgICAgIC8vIHNlYXJjaCBVTSB0aGlzIGZhciBmb3IgYW4gdXBzdHJlYW0gYW5jaG9yIGdhdWdlOyAwID0gb2ZmXHJcbiAgcUludGVycDogXCJkcmFpbmFnZS1hcmVhXCIsICAgLy8gJ2RyYWluYWdlLWFyZWEnIChRIGp1bXBzIGF0IGNvbmZsdWVuY2VzKSB8ICdkaXN0YW5jZScgKGxlZ2FjeSBsaW5lYXIgc21lYXIpXHJcbiAgZ2F1Z2VTdGF0RmFsbGJhY2s6IHRydWUsICAgIC8vIGdhdWdlIElWIGZlZWQgZG93biAtPiBwZXJpb2Qtb2YtcmVjb3JkIG1lZGlhbiBkYWlseSBmbG93IChQYXl0b24ncyBnZXRfZGlzY2hhcmdlIHBhdHRlcm4pXHJcbiAgaW1wb3VuZFN0b3BLbTogMi4wLFxyXG4gIGltcG91bmRFeGNsdWRlQ29taWRzOiBbXSwgICAvLyBleHRyYSByZW1vdmVkLWRhbSBjb21pZHMgYmV5b25kIFJFTU9WRURfSU1QT1VORE1FTlRfQ09NSURTXHJcbiAgY29ycmlkb3JzOiBbXSwgICAgICAgICAgICAgIC8vIGNvcnJpZG9yIGRvY3Mgb3IgVVJMcyAoQ2FuYWRpYW4gcml2ZXJzLCBzZWUgY29ycmlkb3JzLylcclxuICBjb3JyaWRvckdhcE1heE06IDIwMDAsICAgICAgLy8gbWF4IGNvbmZsdWVuY2UgZ2FwIGJyaWRnZWQgd2hlbiBjaGFpbmluZyBjb3JyaWRvcnNcclxuICB0aW1pbmdNb2RlbDogXCJoeWRyYXVsaWNcIiwgICAvLyAnaHlkcmF1bGljJyAoVj1RL0EgeCBzYWZldHkpIHwgJ2pvYnNvbicgKFVTR1MgV1JJUiA5Ni00MDEzIGR5ZS1zdHVkeSByZWdyZXNzaW9ucylcclxuICBhc09mOiBudWxsLCAgICAgICAgICAgICAgICAgLy8gJ1lZWVktTU0tREQnIGhpc3RvcmljYWwgUTsgbnVsbCA9IGxpdmVcclxuICB2ZXJib3NlOiB0cnVlLFxyXG4gIG9wZW5XYXRlcjoge30sICAgICAgICAgICAgICAvLyBvdmVycmlkZXMgZm9yIERFRkFVTFRfT1BFTldBVEVSICh2MS43IGxha2UvcmVzZXJ2b2lyIG1vZGUpXHJcbn07XHJcblxyXG4vKiogT3Blbi13YXRlciAobGFrZS9yZXNlcnZvaXIpIG1vZGUgw6LigqzigJ0gR05PTUUtc3R5bGUgcGFydGljbGUgdHJhbnNwb3J0XHJcbiAqICAoTk9BQSBUZWNoIERvYyBOT1MgT1ImUiA0MCwgcHVibGljIGRvbWFpbikuIFZhbGlkYXRlZCBpbiBvcGVud2F0ZXItc3Bpa2UvLiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9PUEVOV0FURVIgPSB7XHJcbiAgZW5hYmxlZDogdHJ1ZSwgICAgICAgICAgICAgIC8vIGxha2UtY2xpY2sgZGlzcGF0Y2ggKyBpbXBvdW5kbWVudCBjb250aW51YXRpb25cclxuICBtaW5MYWtlU3FLbTogMS4wLCAgICAgICAgICAgLy8gUElQIGhpdHMgc21hbGxlciB0aGFuIHRoaXMgc3RheSBvbiB0aGUgcml2ZXIgcGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAoZ3VhcmRzIHJlbW92ZWQtZGFtIHJlbGljIHBvbHlnb25zLCBmYXJtIHBvbmRzKVxyXG4gIHJpdmVyT3ZlcnJpZGVNOiA0MDAsICAgICAgICAvLyBub24taW1wb3VuZGVkIHJlYWNoIHRoaXMgY2xvc2Ugw6LigKDigJkgcml2ZXIgbW9kZSB3aW5zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIChkYW0gdGFpbHJhY2VzIHNpdCBpbnNpZGUgcmVzZXJ2b2lyIHBvbHlnb25zKVxyXG4gIG5QYXJ0aWNsZXM6IDEwMDAsXHJcbiAgZHVyYXRpb25IcjogMjQsICAgICAgICAgICAgIC8vIHNpbSBsZW5ndGggZnJvbSB3YXRlciBlbnRyeSAoY29udGludWF0aW9ucyB0b28pXHJcbiAgdGltZXN0ZXBTOiA5MDAsXHJcbiAgd2luZGFnZU1pbjogMC4wMSwgICAgICAgICAgIC8vIEdOT01FIDHDouKCrOKAnDQlIG9mIFUxMCwgdW5pZm9ybSBwZXIgcGFydGljbGVcclxuICB3aW5kYWdlTWF4OiAwLjA0LFxyXG4gIHdpbmRhZ2VQZXJzaXN0UzogOTAwLFxyXG4gIGRpZmZ1c2lvbk0yczogMS4wLCAgICAgICAgICAvLyBsYWtlcy9wcm90ZWN0ZWQgd2F0ZXIgKEdOT01FIFwibG93XCIpOyBjb2FzdGFsID0gMTBcclxuICByZWZsb2F0SGFsZkxpZmVIcjogMS4wLFxyXG4gIGNvbnRpbnVlQXRJbXBvdW5kbWVudDogdHJ1ZSxcclxuICBzaG9yZUdhcFNlZ3M6IDMsICAgICAgICAgICAgLy8gYmVhY2hlZC1jbHVzdGVyIG1lcmdlIHRvbGVyYW5jZSAoc2hvcmVsaW5lIHNlZ21lbnRzKVxyXG4gIG1heFNob3JlSW1wYWN0czogMTAsXHJcbiAgc2VlZDogMTIzNDUsICAgICAgICAgICAgICAgIC8vIGRldGVybWluaXN0aWMgcmVwbGF5czsgcnVuUmVjb3JkIGNhcnJpZXMgaXRcclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVyc1xyXG5cclxuY29uc3QgUl9FQVJUSCA9IDYzNzEwMDguODtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXZlcnNpbmVNKGxhdDEsIGxvbjEsIGxhdDIsIGxvbjIpIHtcclxuICBjb25zdCBwMSA9IChsYXQxICogTWF0aC5QSSkgLyAxODA7XHJcbiAgY29uc3QgcDIgPSAobGF0MiAqIE1hdGguUEkpIC8gMTgwO1xyXG4gIGNvbnN0IGRwID0gcDIgLSBwMTtcclxuICBjb25zdCBkbCA9ICgobG9uMiAtIGxvbjEpICogTWF0aC5QSSkgLyAxODA7XHJcbiAgY29uc3QgYSA9IE1hdGguc2luKGRwIC8gMikgKiogMiArIE1hdGguY29zKHAxKSAqIE1hdGguY29zKHAyKSAqIE1hdGguc2luKGRsIC8gMikgKiogMjtcclxuICByZXR1cm4gMiAqIFJfRUFSVEggKiBNYXRoLmFzaW4oTWF0aC5zcXJ0KGEpKTtcclxufVxyXG5cclxuLyoqIFBheXRvbidzIHdpZHRoL2RlcHRoIGZvcm11bGFzIChmYWxsYmFjayB3aGVuIG5vIEdMT1cgZGF0YSkuIFZlcmJhdGltLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXN0aW1hdGVHZW9tZXRyeVBheXRvbihkcmFpbmFnZUFyZWFTcU1pKSB7XHJcbiAgbGV0IHdpZHRoLCBkZXB0aDtcclxuICBpZiAoZHJhaW5hZ2VBcmVhU3FNaSA8IDEwMCkge1xyXG4gICAgd2lkdGggPSAxMC4wICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwLCAwLjUpO1xyXG4gICAgZGVwdGggPSAwLjUgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAsIDAuMyk7XHJcbiAgfSBlbHNlIGlmIChkcmFpbmFnZUFyZWFTcU1pIDwgMTAwMCkge1xyXG4gICAgd2lkdGggPSA1MC4wICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwMCwgMC41KTtcclxuICAgIGRlcHRoID0gMS41ICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwMCwgMC4zKTtcclxuICB9IGVsc2Uge1xyXG4gICAgd2lkdGggPSAxNTAuMCAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MDAwLCAwLjQpO1xyXG4gICAgZGVwdGggPSAzLjAgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAwMCwgMC4zKTtcclxuICB9XHJcbiAgcmV0dXJuIFt3aWR0aCwgZGVwdGhdO1xyXG59XHJcblxyXG4vKipcclxuICogTWFubmluZydzIGRlcHRoIHZpYSBiaXNlY3Rpb24gKFB5dGhvbiB1c2VkIHNjaXB5IGJyZW50cSBvbiBbMC4xLCAyMF0pLlxyXG4gKiBUaGUgcmVzaWR1YWwgaXMgbW9ub3RvbmljYWxseSBpbmNyZWFzaW5nIGluIGRlcHRoLCBzbyBiaXNlY3Rpb24gY29udmVyZ2VzIHRvXHJcbiAqIHRoZSBzYW1lIHJvb3QuIFJlcGxpY2F0ZXMgYnJlbnRxJ3MgZmFpbHVyZSBtb2RlOiBubyBzaWduIGNoYW5nZSBhY3Jvc3MgdGhlXHJcbiAqIGJyYWNrZXQgLT4gbnVsbCAoY2FsbGVyIGZhbGxzIGJhY2sgdG8gZm9ybXVsYSBkZXB0aCkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRGVwdGhNYW5uaW5nKFFtM3MsIHdpZHRoTSwgc2xvcGUsIG4gPSAwLjA0NSkge1xyXG4gIGlmIChRbTNzIDw9IDAgfHwgd2lkdGhNIDw9IDAgfHwgc2xvcGUgPD0gMC4wMDAwMSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgcmVzaWR1YWwgPSAoZGVwdGgpID0+IHtcclxuICAgIGlmIChkZXB0aCA8PSAwLjAxKSByZXR1cm4gLVFtM3M7XHJcbiAgICBjb25zdCBBID0gd2lkdGhNICogZGVwdGg7XHJcbiAgICBjb25zdCBQID0gd2lkdGhNICsgMiAqIGRlcHRoO1xyXG4gICAgY29uc3QgUiA9IEEgLyBQO1xyXG4gICAgcmV0dXJuICgxIC8gbikgKiBBICogTWF0aC5wb3coUiwgMiAvIDMpICogTWF0aC5zcXJ0KHNsb3BlKSAtIFFtM3M7XHJcbiAgfTtcclxuICBsZXQgbG8gPSAwLjEsIGhpID0gMjAuMDtcclxuICBsZXQgZmxvID0gcmVzaWR1YWwobG8pLCBmaGkgPSByZXNpZHVhbChoaSk7XHJcbiAgaWYgKGZsbyA9PT0gMCkgcmV0dXJuIGxvO1xyXG4gIGlmIChmaGkgPT09IDApIHJldHVybiBoaTtcclxuICBpZiAoZmxvICogZmhpID4gMCkgcmV0dXJuIG51bGw7IC8vIGJyZW50cSByYWlzZXMgLT4gUHl0aG9uIHJldHVybnMgTm9uZVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgIGNvbnN0IG1pZCA9IDAuNSAqIChsbyArIGhpKTtcclxuICAgIGNvbnN0IGZtID0gcmVzaWR1YWwobWlkKTtcclxuICAgIGlmIChmbSA9PT0gMCB8fCAoaGkgLSBsbykgLyAyIDwgMWUtMTApIHJldHVybiBtaWQ7XHJcbiAgICBpZiAoZmxvICogZm0gPCAwKSB7IGhpID0gbWlkOyBmaGkgPSBmbTsgfSBlbHNlIHsgbG8gPSBtaWQ7IGZsbyA9IGZtOyB9XHJcbiAgfVxyXG4gIHJldHVybiAwLjUgKiAobG8gKyBoaSk7XHJcbn1cclxuXHJcbmNvbnN0IHNsZWVwID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCBtcykpO1xyXG5cclxuLyoqIEdFVC9QT1NUIHdpdGggcmV0cnkgw6LigqzigJ0gTkxESS9nZW9zZXJ2ZXIgaW50ZXJtaXR0ZW50bHkgcmV0dXJuIGVtcHR5IDIwMCBib2RpZXMuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEpzb24odXJsLCB7IHBhcmFtcyA9IG51bGwsIGRhdGEgPSBudWxsLCB0cmllcyA9IDMsIHRpbWVvdXRNcyA9IDkwMDAwIH0gPSB7fSkge1xyXG4gIGxldCBsYXN0ID0gbnVsbDtcclxuICBmb3IgKGxldCBhdHRlbXB0ID0gMDsgYXR0ZW1wdCA8IHRyaWVzOyBhdHRlbXB0KyspIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGN0cmwgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBjdHJsLmFib3J0KCksIHRpbWVvdXRNcyk7XHJcbiAgICAgIGxldCByZXNwO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmIChkYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICByZXNwID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxyXG4gICAgICAgICAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKGRhdGEpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIHNpZ25hbDogY3RybC5zaWduYWwsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcXMgPSBwYXJhbXMgPyBcIj9cIiArIG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKS50b1N0cmluZygpIDogXCJcIjtcclxuICAgICAgICAgIHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwgKyBxcywgeyBzaWduYWw6IGN0cmwuc2lnbmFsIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghcmVzcC5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQICR7cmVzcC5zdGF0dXN9YCk7XHJcbiAgICAgIHJldHVybiBhd2FpdCByZXNwLmpzb24oKTsgLy8gZW1wdHkgYm9keSAtPiBTeW50YXhFcnJvciAtPiByZXRyeVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBsYXN0ID0gZTtcclxuICAgICAgYXdhaXQgc2xlZXAoMTUwMCAqIChhdHRlbXB0ICsgMSkpO1xyXG4gICAgfVxyXG4gIH1cclxuICB0aHJvdyBuZXcgRXJyb3IoYCR7dXJsfSBmYWlsZWQgYWZ0ZXIgJHt0cmllc30gdHJpZXM6ICR7bGFzdH1gKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VGV4dCh1cmwsIHBhcmFtcywgdGltZW91dE1zID0gMzAwMDApIHtcclxuICBjb25zdCBjdHJsID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBjdHJsLmFib3J0KCksIHRpbWVvdXRNcyk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwgKyBcIj9cIiArIG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKS50b1N0cmluZygpLCB7IHNpZ25hbDogY3RybC5zaWduYWwgfSk7XHJcbiAgICByZXR1cm4gYXdhaXQgcmVzcC50ZXh0KCk7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRhdGEgZmV0Y2hcclxuXHJcbi8qKiBTbmFwIHRvIG5lYXJlc3QgcmVhY2ggd2l0aCBzdHJlYW1vcmRlID49IG1pbk9yZGVyIChnZW9zZXJ2ZXIgYmJveCBzZWFyY2gpLiAqL1xyXG5hc3luYyBmdW5jdGlvbiBzbmFwQ29taWQobGF0LCBsb24sIG1pbk9yZGVyKSB7XHJcbiAgY29uc3QgYm94ID0gMC4yO1xyXG4gIC8vIE5PVEU6IEVQU0c6NDI2OSB1bmRlciBXRlMgMi4wIHVzZXMgbGF0LGxvbiBheGlzIG9yZGVyIGluIENRTCBCQk9YXHJcbiAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oR0VPU0VSVkVSLCB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHNlcnZpY2U6IFwiV0ZTXCIsIHZlcnNpb246IFwiMi4wLjBcIiwgcmVxdWVzdDogXCJHZXRGZWF0dXJlXCIsXHJcbiAgICAgIHR5cGVOYW1lOiBcIndtYWRhdGE6bmhkZmxvd2xpbmVfbmV0d29ya1wiLCBvdXRwdXRGb3JtYXQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBjcWxfZmlsdGVyOlxyXG4gICAgICAgIGBzdHJlYW1vcmRlID49ICR7bWluT3JkZXJ9IEFORCBCQk9YKHRoZV9nZW9tLGAgK1xyXG4gICAgICAgIGAke2xhdCAtIGJveH0sJHtsb24gLSBib3h9LCR7bGF0ICsgYm94fSwke2xvbiArIGJveH0pYCxcclxuICAgICAgY291bnQ6IFwiNTAwXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGxldCBiZXN0ID0gbnVsbCwgYmVzdEQgPSBJbmZpbml0eTtcclxuICBmb3IgKGNvbnN0IGYgb2Ygai5mZWF0dXJlcyB8fCBbXSkge1xyXG4gICAgY29uc3QgZyA9IGYuZ2VvbWV0cnk7XHJcbiAgICBjb25zdCBwYXRocyA9IGcudHlwZSA9PT0gXCJMaW5lU3RyaW5nXCIgPyBbZy5jb29yZGluYXRlc10gOiBnLmNvb3JkaW5hdGVzO1xyXG4gICAgZm9yIChjb25zdCBwYXRoIG9mIHBhdGhzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkgKz0gMykgeyAvLyBldmVyeSAzcmQgdmVydGV4XHJcbiAgICAgICAgY29uc3QgcCA9IHBhdGhbaV07XHJcbiAgICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0obGF0LCBsb24sIHBbMV0sIHBbMF0pO1xyXG4gICAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBiZXN0ID0gZi5wcm9wZXJ0aWVzOyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGJlc3QgIT09IG51bGwpIHJldHVybiBbTnVtYmVyKGJlc3QuY29taWQpLCBiZXN0LmduaXNfbmFtZSA/PyBudWxsLCBiZXN0RF07XHJcbiAgcmV0dXJuIFthd2FpdCBubGRpUG9zaXRpb25Db21pZChsYXQsIGxvbiksIG51bGwsIG51bGxdO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBubGRpUG9zaXRpb25Db21pZChsYXQsIGxvbikge1xyXG4gIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKGAke05MRElfQkFTRX0vbGlua2VkLWRhdGEvY29taWQvcG9zaXRpb25gLCB7XHJcbiAgICBwYXJhbXM6IHsgY29vcmRzOiBgUE9JTlQoJHtsb259ICR7bGF0fSlgIH0sIHRpbWVvdXRNczogMzAwMDAsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIE51bWJlcihqLmZlYXR1cmVzWzBdLnByb3BlcnRpZXMuaWRlbnRpZmllcik7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG5sZGlEbUZsb3dsaW5lcyhjb21pZCwgZGlzdGFuY2VLbSkge1xyXG4gIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKGAke05MRElfQkFTRX0vbGlua2VkLWRhdGEvY29taWQvJHtjb21pZH0vbmF2aWdhdGlvbi9ETS9mbG93bGluZXNgLCB7XHJcbiAgICBwYXJhbXM6IHsgZGlzdGFuY2U6IFN0cmluZyhNYXRoLnRydW5jKGRpc3RhbmNlS20pKSB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IGdlb21zID0gbmV3IE1hcCgpOyAvLyBjb21pZCAtPiBbcGF0aHNdIChbW2xvbixsYXRdLC4uLl0pXHJcbiAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcclxuICAgIGNvbnN0IGNpZCA9IE51bWJlcihmLnByb3BlcnRpZXMubmhkcGx1c19jb21pZCk7XHJcbiAgICBjb25zdCBnID0gZi5nZW9tZXRyeTtcclxuICAgIGlmIChnLnR5cGUgPT09IFwiTGluZVN0cmluZ1wiKSBnZW9tcy5zZXQoY2lkLCBbZy5jb29yZGluYXRlc10pO1xyXG4gICAgZWxzZSBpZiAoZy50eXBlID09PSBcIk11bHRpTGluZVN0cmluZ1wiKSBnZW9tcy5zZXQoY2lkLCBnLmNvb3JkaW5hdGVzKTtcclxuICB9XHJcbiAgcmV0dXJuIGdlb21zO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBubGRpR2F1Z2VzKGNvbWlkLCBkaXN0YW5jZUttLCBtb2RlKSB7XHJcbiAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oYCR7TkxESV9CQVNFfS9saW5rZWQtZGF0YS9jb21pZC8ke2NvbWlkfS9uYXZpZ2F0aW9uLyR7bW9kZX0vbndpc3NpdGVgLCB7XHJcbiAgICBwYXJhbXM6IHsgZGlzdGFuY2U6IFN0cmluZyhNYXRoLnRydW5jKGRpc3RhbmNlS20pKSB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IG91dCA9IFtdO1xyXG4gIGZvciAoY29uc3QgZiBvZiBqLmZlYXR1cmVzIHx8IFtdKSB7XHJcbiAgICBjb25zdCBzaWQgPSAoZi5wcm9wZXJ0aWVzLmlkZW50aWZpZXIgfHwgXCJcIikucmVwbGFjZShcIlVTR1MtXCIsIFwiXCIpO1xyXG4gICAgaWYgKHNpZC5sZW5ndGggPiAxNSkgY29udGludWU7IC8vIGNvb3JkaW5hdGUtc3R5bGUgSURzIChub3RlYm9vayBydWxlKVxyXG4gICAgb3V0LnB1c2goe1xyXG4gICAgICBzdGF0aW9uX2lkOiBzaWQsXHJcbiAgICAgIG5hbWU6IGYucHJvcGVydGllcy5uYW1lIHx8IFwiVW5rbm93blwiLFxyXG4gICAgICBsYXQ6IGYuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMV0sXHJcbiAgICAgIGxvbjogZi5nZW9tZXRyeS5jb29yZGluYXRlc1swXSxcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gb3V0O1xyXG59XHJcblxyXG4vKipcclxuICogTWVyZ2UgdGhlIG5lYXJlc3QgdXBzdHJlYW0gbWFpbi1zdGVtIGdhdWdlIGludG8gdGhlIGxvY2F0ZWQtZ2F1Z2UgbGlzdCBhcyBhXHJcbiAqIHZpcnR1YWwgZ2F1Z2UgYXQgdGhlIHNwaWxsIHBvaW50ICh0cmFjZV9kaXN0IDApLiBXaXRob3V0IHRoaXMsIGNsaWNraW5nIGp1c3RcclxuICogRE9XTlNUUkVBTSBvZiBhIGdhdWdlIGRyb3BzIGl0IGZyb20gdGhlIERNIG5hdmlnYXRpb24gYW5kIHRoZSBuZXh0IGdhdWdlJ3MgUVxyXG4gKiBpcyBiYWNrLWNsYW1wZWQgb250byB0aGUgZmlyc3QgcmVhY2ggw6LigqzigJ0gd2lsZGx5IHdyb25nIHdoZW4gdGhhdCBnYXVnZSBzaXRzXHJcbiAqIGJlbG93IGEgbWFqb3IgY29uZmx1ZW5jZSAoR2FsbGF0aW4gYmVsb3cgTG9nYW4gLT4gTWlzc291cmkgYXQgVG9zdG9uKS5cclxuICogUSBpcyB0cmFuc2ZlcnJlZCBieSBkcmFpbmFnZS1hcmVhIHJhdGlvIChzdGFuZGFyZCBVU0dTIHRyYW5zZmVyKSwgd2hpY2ggYWxzb1xyXG4gKiBrZWVwcyB0aGUgYW5jaG9yIGhvbmVzdCB3aGVuIHRoZSBVTSBwYXRoIGNyb3NzZXMgYSBjb25mbHVlbmNlOiB0aGUgcmF0aW9cclxuICogc2NhbGVzIGEgdHJpYnV0YXJ5IGdhdWdlIGJhY2sgdXAgdG8gdGhlIGZsb3cgYXQgdGhlIGNsaWNrLlxyXG4gKiBOby1vcCB3aGVuIGFuIG9uLXRyYWNlIGdhdWdlIGFscmVhZHkgc2l0cyB3aXRoaW4gYW5jaG9yU2tpcE0gb2YgdGhlIHN0YXJ0XHJcbiAqIChpdCBhbHJlYWR5IGFuY2hvcnMgdGhlIGJvdW5kYXJ5KSwgdGhlIHN0YXRpb24gaXMgYWxyZWFkeSBsb2NhdGVkLCBvciB0aGVcclxuICogREEgdHJhbnNmZXIgaXMgb3V0c2lkZSBpdHMgY3JlZGlibGUgcmFuZ2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VVcHN0cmVhbUFuY2hvcihnZCwgdXAsIHNwaWxsRGFTcW1pLCB7IGFuY2hvclNraXBNID0gNTAwLCBkYVJhdGlvTWF4ID0gNCB9ID0ge30pIHtcclxuICBpZiAoIXVwIHx8ICEodXAuZGlzY2hhcmdlID49IDApIHx8ICEodXAuZHJhaW5hZ2VfYXJlYSA+IDApIHx8ICEoc3BpbGxEYVNxbWkgPiAwKSkgcmV0dXJuIGZhbHNlO1xyXG4gIGlmIChnZC5zb21lKChnKSA9PiBnLnN0YXRpb25faWQgPT09IHVwLnN0YXRpb25faWQpKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKGdkLnNvbWUoKGcpID0+IGcudHJhY2VfZGlzdCA8PSBhbmNob3JTa2lwTSkpIHJldHVybiBmYWxzZTtcclxuICBjb25zdCByYXRpbyA9IHNwaWxsRGFTcW1pIC8gdXAuZHJhaW5hZ2VfYXJlYTtcclxuICBpZiAocmF0aW8gPCAxIC8gZGFSYXRpb01heCB8fCByYXRpbyA+IGRhUmF0aW9NYXgpIHJldHVybiBmYWxzZTtcclxuICBjb25zdCBbdywgZGVwXSA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oc3BpbGxEYVNxbWkpO1xyXG4gIGdkLnB1c2goe1xyXG4gICAgc3RhdGlvbl9pZDogdXAuc3RhdGlvbl9pZCwgbmFtZTogdXAubmFtZSwgbGF0OiB1cC5sYXQsIGxvbjogdXAubG9uLFxyXG4gICAgZGlzY2hhcmdlOiB1cC5kaXNjaGFyZ2UgKiByYXRpbywgZHJhaW5hZ2VfYXJlYTogc3BpbGxEYVNxbWksXHJcbiAgICBxX3NvdXJjZTogdXAucV9zb3VyY2UgfHwgXCJpdlwiLFxyXG4gICAgYXJlYTogdyAqIGRlcCwgdHJhY2VfZGlzdDogMC4wLFxyXG4gICAgdXBzdHJlYW1fYW5jaG9yOiB0cnVlLFxyXG4gICAgYW5jaG9yX2dhdWdlX3FfY2ZzOiB1cC5kaXNjaGFyZ2UsIGFuY2hvcl9nYXVnZV9kYV9zcW1pOiB1cC5kcmFpbmFnZV9hcmVhLFxyXG4gICAgYW5jaG9yX3Vwc3RyZWFtX206IHVwLnVwc3RyZWFtX20gPz8gbnVsbCxcclxuICB9KTtcclxuICBnZC5zb3J0KChhLCBiKSA9PiBhLnRyYWNlX2Rpc3QgLSBiLnRyYWNlX2Rpc3QpO1xyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vKiogVkFBcyBmb3IgYSBsaXN0IG9mIENPTUlEcyBmcm9tIFVTR1MgZ2Vvc2VydmVyIChiYXRjaGVkIFBPU1QpLiAqL1xyXG5hc3luYyBmdW5jdGlvbiB2YWFCYXRjaChjb21pZHMpIHtcclxuICBjb25zdCBvdXQgPSBuZXcgTWFwKCk7XHJcbiAgY29uc3QgQ0hVTksgPSAxNTA7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21pZHMubGVuZ3RoOyBpICs9IENIVU5LKSB7XHJcbiAgICBjb25zdCBjaHVuayA9IGNvbWlkcy5zbGljZShpLCBpICsgQ0hVTkspO1xyXG4gICAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oR0VPU0VSVkVSLCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzZXJ2aWNlOiBcIldGU1wiLCB2ZXJzaW9uOiBcIjIuMC4wXCIsIHJlcXVlc3Q6IFwiR2V0RmVhdHVyZVwiLFxyXG4gICAgICAgIHR5cGVOYW1lOiBcIndtYWRhdGE6bmhkZmxvd2xpbmVfbmV0d29ya1wiLFxyXG4gICAgICAgIG91dHB1dEZvcm1hdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgY3FsX2ZpbHRlcjogYGNvbWlkIElOICgke2NodW5rLmpvaW4oXCIsXCIpfSlgLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBmb3IgKGNvbnN0IGYgb2Ygai5mZWF0dXJlcyB8fCBbXSkge1xyXG4gICAgICBjb25zdCBwID0gZi5wcm9wZXJ0aWVzO1xyXG4gICAgICAvLyBFUk9NIG1vbnRobHkgbW9kZWxlZCBmbG93IChnYXVnZS1hZGp1c3RlZCwgY2ZzKSDDouKCrOKAnSB1bmdhdWdlZCBmYWxsYmFjayArIEpvYnNvbiBRYVxyXG4gICAgICBjb25zdCBxZSA9IHt9O1xyXG4gICAgICBmb3IgKGxldCBtID0gMTsgbSA8PSAxMjsgbSsrKSB7XHJcbiAgICAgICAgY29uc3QgayA9IGBxZV8ke1N0cmluZyhtKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcclxuICAgICAgICBxZVttXSA9IHBba10gPz8gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBvdXQuc2V0KE51bWJlcihwLmNvbWlkKSwge1xyXG4gICAgICAgIGh5ZHJvc2VxOiBwLmh5ZHJvc2VxID8/IG51bGwsXHJcbiAgICAgICAgc3RyZWFtb3JkZTogcC5zdHJlYW1vcmRlID8/IG51bGwsXHJcbiAgICAgICAgc2xvcGU6IHAuc2xvcGUgPz8gbnVsbCxcclxuICAgICAgICB0b3RkYXNxa206IHAudG90ZGFzcWttID8/IG51bGwsXHJcbiAgICAgICAgZnR5cGU6IHAuZnR5cGUgPz8gbnVsbCxcclxuICAgICAgICBmY29kZTogcC5mY29kZSA/PyBudWxsLFxyXG4gICAgICAgIGduaXNfbmFtZTogcC5nbmlzX25hbWUgPz8gbnVsbCxcclxuICAgICAgICAvLyBMYWtlUG9uZC9SZXNlcnZvaXIgPSBpbXBvdW5kZWQ7IFN0cmVhbVJpdmVyID0gYnJhaWRlZCBmcmVlLWZsb3dpbmdcclxuICAgICAgICB3YmFyZWF0eXBlOiBwLndiYXJlYXR5cGUgPz8gbnVsbCxcclxuICAgICAgICB2ZV9tYTogcC52ZV9tYSA/PyBudWxsLFxyXG4gICAgICAgIHFlX21hOiBwLnFlX21hID8/IG51bGwsICAgLy8gRVJPTSBtZWFuIGFubnVhbCBmbG93IChjZnMpIMOi4oKs4oCdIEpvYnNvbiBRYVxyXG4gICAgICAgIHFlX21vbnRobHk6IHFlLFxyXG4gICAgICAgIC8vIE5IRFBsdXMgZGl2ZXJnZW5jZTogMCA9IG5vbmUsIDEgPSBtYWluIHBhdGgsIDIgPSBtaW5vciBwYXRoIG9mIGEgc3BsaXRcclxuICAgICAgICBkaXZlcmdlbmNlOiBwLmRpdmVyZ2VuY2UgPz8gMCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBvdXQ7XHJcbn1cclxuXHJcbi8qKiBEaXNjaGFyZ2UgKGNmcykgKyBkcmFpbmFnZSBhcmVhIChzcSBtaSkgcGVyIGdhdWdlIHZpYSBwbGFpbiBOV0lTIFJFU1QuXHJcbiAqICBzdGF0RmFsbGJhY2sgKHYxLjUsIFBheXRvbidzIGdldF9kaXNjaGFyZ2UgcGF0dGVybik6IGdhdWdlcyB3aG9zZSBJViBmZWVkXHJcbiAqICBpcyBkb3duL25lZ2F0aXZlIGdldCB0aGUgcGVyaW9kLW9mLXJlY29yZCBNRURJQU4gZGFpbHkgZmxvdyAoc3RhdCBzZXJ2aWNlXHJcbiAqICBwNTAsIG5lZWRzID4zIHllYXJzIG9mIHJlY29yZCkgZm9yIHRoZSBydW4gZGF0ZSdzIGNhbGVuZGFyIGRheSwgZmxhZ2dlZFxyXG4gKiAgcV9zb3VyY2U9J3N0YXQtcDUwJyBzbyB0aGUgcnVuIGNhbiB3YXJuIGl0IGlzbid0IGxpdmUgY29uZGl0aW9ucy4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2F1Z2VJbmZvKHN0YXRpb25JZHMsIGFzT2YgPSBudWxsLCBzdGF0RmFsbGJhY2sgPSBmYWxzZSkge1xyXG4gIGNvbnN0IGluZm8gPSBuZXcgTWFwKCk7XHJcbiAgaWYgKCFzdGF0aW9uSWRzLmxlbmd0aCkgcmV0dXJuIGluZm87XHJcbiAgY29uc3Qgc2l0ZXMgPSBzdGF0aW9uSWRzLmpvaW4oXCIsXCIpO1xyXG5cclxuICAvLyBkcmFpbmFnZSBhcmVhcyAocmRiLCBleHBhbmRlZCBvdXRwdXQpXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHRleHQgPSBhd2FpdCBnZXRUZXh0KE5XSVNfU0lURSwgeyBmb3JtYXQ6IFwicmRiXCIsIHNpdGVzLCBzaXRlT3V0cHV0OiBcImV4cGFuZGVkXCIgfSk7XHJcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsKSA9PiBsICYmICFsLnN0YXJ0c1dpdGgoXCIjXCIpKTtcclxuICAgIGlmIChsaW5lcy5sZW5ndGggPj0gMikge1xyXG4gICAgICBjb25zdCBoZHIgPSBsaW5lc1swXS5zcGxpdChcIlxcdFwiKTtcclxuICAgICAgY29uc3QgaVNpdGUgPSBoZHIuaW5kZXhPZihcInNpdGVfbm9cIik7XHJcbiAgICAgIGNvbnN0IGlEYSA9IGhkci5pbmRleE9mKFwiZHJhaW5fYXJlYV92YVwiKTsgLy8gLTEgaWYgYWJzZW50XHJcbiAgICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcy5zbGljZSgyKSkge1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gbGluZS5zcGxpdChcIlxcdFwiKTtcclxuICAgICAgICBpZiAocGFydHMubGVuZ3RoIDw9IE1hdGgubWF4KGlTaXRlLCBpRGEgPiAtMSA/IGlEYSA6IDApKSBjb250aW51ZTtcclxuICAgICAgICBsZXQgZGEgPSBudWxsO1xyXG4gICAgICAgIGlmIChpRGEgPiAtMSkge1xyXG4gICAgICAgICAgY29uc3QgdiA9IHBhcnNlRmxvYXQocGFydHNbaURhXSk7XHJcbiAgICAgICAgICBkYSA9IE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbmZvLnNldChwYXJ0c1tpU2l0ZV0sIHsgZHJhaW5hZ2VfYXJlYTogZGEgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGNhdGNoIHsgLyogaWdub3JlIMOi4oKs4oCdIG1hdGNoZXMgUHl0aG9uICovIH1cclxuXHJcbiAgLy8gZGlzY2hhcmdlXHJcbiAgY29uc3QgcGFyYW1zID0geyBmb3JtYXQ6IFwianNvblwiLCBzaXRlcywgcGFyYW1ldGVyQ2Q6IFwiMDAwNjBcIiB9O1xyXG4gIGlmIChhc09mKSB7IHBhcmFtcy5zdGFydERUID0gYXNPZjsgcGFyYW1zLmVuZERUID0gYXNPZjsgfVxyXG4gIGVsc2UgcGFyYW1zLnBlcmlvZCA9IFwiUDFEXCI7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKE5XSVNfSVYsIHsgcGFyYW1zLCB0aW1lb3V0TXM6IDYwMDAwLCB0cmllczogMSB9KTtcclxuICAgIGZvciAoY29uc3QgdHMgb2Ygaj8udmFsdWU/LnRpbWVTZXJpZXMgfHwgW10pIHtcclxuICAgICAgY29uc3Qgc2lkID0gdHMuc291cmNlSW5mby5zaXRlQ29kZVswXS52YWx1ZTtcclxuICAgICAgY29uc3QgdmFscyA9IHRzLnZhbHVlc1swXS52YWx1ZTtcclxuICAgICAgaWYgKCF2YWxzIHx8ICF2YWxzLmxlbmd0aCkgY29udGludWU7XHJcbiAgICAgIGNvbnN0IHEgPSBwYXJzZUZsb2F0KHZhbHNbdmFscy5sZW5ndGggLSAxXS52YWx1ZSk7XHJcbiAgICAgIGlmIChxID49IDApIHtcclxuICAgICAgICBpZiAoIWluZm8uaGFzKHNpZCkpIGluZm8uc2V0KHNpZCwge30pO1xyXG4gICAgICAgIGluZm8uZ2V0KHNpZCkuZGlzY2hhcmdlID0gcTtcclxuICAgICAgICBpbmZvLmdldChzaWQpLnFfc291cmNlID0gXCJpdlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBjYXRjaCB7IC8qIGlnbm9yZSDDouKCrOKAnSBtYXRjaGVzIFB5dGhvbiAqLyB9XHJcblxyXG4gIC8vIG1lZGlhbi1kYWlseS1mbG93IGZhbGxiYWNrIGZvciBnYXVnZXMgdGhlIElWIHBhc3MgZGlkbid0IGNvdmVyXHJcbiAgaWYgKHN0YXRGYWxsYmFjaykge1xyXG4gICAgY29uc3QgbWlzc2luZyA9IHN0YXRpb25JZHMuZmlsdGVyKChzKSA9PiBpbmZvLmdldChzKT8uZGlzY2hhcmdlID09PSB1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW21vbnRoLCBkYXldID0gYXNPZlxyXG4gICAgICA/IFtwYXJzZUludChhc09mLnNsaWNlKDUsIDcpLCAxMCksIHBhcnNlSW50KGFzT2Yuc2xpY2UoOCwgMTApLCAxMCldXHJcbiAgICAgIDogW25ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEsIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpXTtcclxuICAgIGNvbnN0IFNUQVRfQ0hVTksgPSAxMDsgLy8gc3RhdCBzZXJ2aWNlIDQwMHMgYWJvdmUgMTAgc2l0ZXMgcGVyIHJlcXVlc3RcclxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgbWlzc2luZy5sZW5ndGg7IGMgKz0gU1RBVF9DSFVOSykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCBnZXRUZXh0KE5XSVNfU1RBVCwge1xyXG4gICAgICAgICAgZm9ybWF0OiBcInJkYlwiLCBzaXRlczogbWlzc2luZy5zbGljZShjLCBjICsgU1RBVF9DSFVOSykuam9pbihcIixcIiksIHBhcmFtZXRlckNkOiBcIjAwMDYwXCIsXHJcbiAgICAgICAgICBzdGF0UmVwb3J0VHlwZTogXCJkYWlseVwiLCBzdGF0VHlwZUNkOiBcInA1MFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGwpID0+IGwgJiYgIWwuc3RhcnRzV2l0aChcIiNcIikpO1xyXG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgY29uc3QgaGRyID0gbGluZXNbMF0uc3BsaXQoXCJcXHRcIik7XHJcbiAgICAgICAgICBjb25zdCBjb2wgPSAobmFtZSkgPT4gaGRyLmluZGV4T2YobmFtZSk7XHJcbiAgICAgICAgICBjb25zdCBbaVNpdGUsIGlNb24sIGlEYXksIGlDb3VudCwgaVA1MF0gPVxyXG4gICAgICAgICAgICBbXCJzaXRlX25vXCIsIFwibW9udGhfbnVcIiwgXCJkYXlfbnVcIiwgXCJjb3VudF9udVwiLCBcInA1MF92YVwiXS5tYXAoY29sKTtcclxuICAgICAgICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcy5zbGljZSgyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gbGluZS5zcGxpdChcIlxcdFwiKTtcclxuICAgICAgICAgICAgaWYgKHAubGVuZ3RoIDw9IE1hdGgubWF4KGlTaXRlLCBpTW9uLCBpRGF5LCBpQ291bnQsIGlQNTApKSBjb250aW51ZTtcclxuICAgICAgICAgICAgY29uc3Qgc2lkID0gcFtpU2l0ZV07XHJcbiAgICAgICAgICAgIGlmIChpbmZvLmdldChzaWQpPy5kaXNjaGFyZ2UgIT09IHVuZGVmaW5lZCkgY29udGludWU7IC8vIGZpcnN0IG1hdGNoaW5nIHNlcmllcyB3aW5zXHJcbiAgICAgICAgICAgIGlmIChwYXJzZUludChwW2lNb25dLCAxMCkgIT09IG1vbnRoIHx8IHBhcnNlSW50KHBbaURheV0sIDEwKSAhPT0gZGF5KSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKCEocGFyc2VJbnQocFtpQ291bnRdLCAxMCkgPiAzKSkgY29udGludWU7IC8vIFBheXRvbidzIHJlY29yZC1sZW5ndGggcnVsZVxyXG4gICAgICAgICAgICBjb25zdCBxID0gcGFyc2VGbG9hdChwW2lQNTBdKTtcclxuICAgICAgICAgICAgaWYgKCEocSA+PSAwKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICghaW5mby5oYXMoc2lkKSkgaW5mby5zZXQoc2lkLCB7fSk7XHJcbiAgICAgICAgICAgIGluZm8uZ2V0KHNpZCkuZGlzY2hhcmdlID0gcTtcclxuICAgICAgICAgICAgaW5mby5nZXQoc2lkKS5xX3NvdXJjZSA9IFwic3RhdC1wNTBcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggeyAvKiBzdGF0IHNlcnZpY2UgZG93biAtPiB0aGlzIGNodW5rJ3MgZ2F1Z2VzIHN0YXkgZHJvcHBlZCwgYXMgYmVmb3JlICovIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGluZm87XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdHJhY2UgYXNzZW1ibHlcclxuXHJcbi8qKiBPcmRlciBzZWdtZW50cyBkb3duc3RyZWFtIChoeWRyb3NlcSBkZXNjKSwgb3JpZW50LCB0cmltIHRvIHNwaWxsIHBvaW50LFxyXG4gKiAgZW1pdCB+cmVzb2x1dGlvbk0gc3BhY2VkIHBvaW50cyBjYXJyeWluZyBWQUEgYXR0cmlidXRlcy4gKi9cclxuZnVuY3Rpb24gYXNzZW1ibGVUcmFjZShsYXQsIGxvbiwgZ2VvbXMsIHZhYSwgcmVzb2x1dGlvbk0sIGxvZykge1xyXG4gIGNvbnN0IHNlZ3MgPSBbXTtcclxuICBmb3IgKGNvbnN0IFtjaWQsIHBhdGhzXSBvZiBnZW9tcykge1xyXG4gICAgY29uc3QgdiA9IHZhYS5nZXQoY2lkKTtcclxuICAgIGlmICghdiB8fCB2Lmh5ZHJvc2VxID09PSBudWxsIHx8IHYuaHlkcm9zZXEgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICBjb25zdCBjb29yZHMgPSBwYXRocy5mbGF0KCk7IC8vIGZsYXR0ZW4gbXVsdGlsaW5lIGludG8gb25lIHZlcnRleCBsaXN0XHJcbiAgICBpZiAoY29vcmRzLmxlbmd0aCA8IDIpIGNvbnRpbnVlO1xyXG4gICAgc2Vncy5wdXNoKHsgY29taWQ6IGNpZCwgY29vcmRzLCAuLi52IH0pO1xyXG4gIH1cclxuICBzZWdzLnNvcnQoKGEsIGIpID0+IGIuaHlkcm9zZXEgLSBhLmh5ZHJvc2VxKTsgLy8gZG93bnN0cmVhbSA9IGRlY3JlYXNpbmcgaHlkcm9zZXFcclxuXHJcbiAgLy8gb3JpZW50IGVhY2ggc2VnbWVudCBzbyBpdCBmbG93cyBzdGFydC0+ZW5kLCBjaGFpbmluZyBlbmRzIHRvIHN0YXJ0c1xyXG4gIGxldCBwcmV2RW5kID0gbnVsbDtcclxuICBmb3IgKGNvbnN0IHMgb2Ygc2Vncykge1xyXG4gICAgbGV0IGMgPSBzLmNvb3JkcztcclxuICAgIGlmIChwcmV2RW5kICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGRTdGFydCA9IGhhdmVyc2luZU0ocHJldkVuZFsxXSwgcHJldkVuZFswXSwgY1swXVsxXSwgY1swXVswXSk7XHJcbiAgICAgIGNvbnN0IGRFbmQgPSBoYXZlcnNpbmVNKHByZXZFbmRbMV0sIHByZXZFbmRbMF0sIGNbYy5sZW5ndGggLSAxXVsxXSwgY1tjLmxlbmd0aCAtIDFdWzBdKTtcclxuICAgICAgaWYgKGRFbmQgPCBkU3RhcnQpIGMgPSBjLnNsaWNlKCkucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG4gICAgcy5jb29yZHMgPSBjO1xyXG4gICAgcHJldkVuZCA9IGNbYy5sZW5ndGggLSAxXTtcclxuICB9XHJcblxyXG4gIC8vIHRyaW0gdGhlIGZpcnN0IHNlZ21lbnQgdG8gc3RhcnQgYXQgdGhlIHZlcnRleCBuZWFyZXN0IHRoZSBzcGlsbCBwb2ludFxyXG4gIGlmIChzZWdzLmxlbmd0aCkge1xyXG4gICAgY29uc3QgYzAgPSBzZWdzWzBdLmNvb3JkcztcclxuICAgIGxldCBtaW5JID0gMCwgbWluRCA9IEluZmluaXR5O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjMC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBkID0gaGF2ZXJzaW5lTShsYXQsIGxvbiwgYzBbaV1bMV0sIGMwW2ldWzBdKTtcclxuICAgICAgaWYgKGQgPCBtaW5EKSB7IG1pbkQgPSBkOyBtaW5JID0gaTsgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdHJpbW1lZCA9IGMwLnNsaWNlKG1pbkkpO1xyXG4gICAgc2Vnc1swXS5jb29yZHMgPSB0cmltbWVkLmxlbmd0aCA/IHRyaW1tZWQgOiBbYzBbYzAubGVuZ3RoIC0gMV1dO1xyXG4gIH1cclxuXHJcbiAgLy8gZmxhdHRlbiB0byBhdHRyaWJ1dGVkIHBvaW50cywgZG93bnNhbXBsZSB0byByZXNvbHV0aW9uTVxyXG4gIGxldCBwdHMgPSBbXTtcclxuICBmb3IgKGNvbnN0IHMgb2Ygc2Vncykge1xyXG4gICAgbGV0IHNsb3BlID0gcy5zbG9wZTtcclxuICAgIGlmIChzbG9wZSA9PT0gbnVsbCB8fCBzbG9wZSA9PT0gdW5kZWZpbmVkIHx8IHNsb3BlIDwgMCkgc2xvcGUgPSAwLjAwMTsgLy8gLTk5OTggPSBtaXNzaW5nXHJcbiAgICBmb3IgKGNvbnN0IHAgb2Ygcy5jb29yZHMpIHtcclxuICAgICAgcHRzLnB1c2goe1xyXG4gICAgICAgIGxvbjogcFswXSwgbGF0OiBwWzFdLFxyXG4gICAgICAgIGRyYWluYWdlX2FyZWFfa20yOiBzLnRvdGRhc3FrbSB8fCAwLFxyXG4gICAgICAgIHNsb3BlLFxyXG4gICAgICAgIGZ0eXBlOiBzLmZ0eXBlLCB3YmFyZWF0eXBlOiBzLndiYXJlYXR5cGUsXHJcbiAgICAgICAgY29taWQ6IHMuY29taWQsXHJcbiAgICAgICAgZ25pc19uYW1lOiBzLmduaXNfbmFtZSxcclxuICAgICAgICBxZV9tYTogcy5xZV9tYSwgcWVfbW9udGhseTogcy5xZV9tb250aGx5LFxyXG4gICAgICAgIGRpdmVyZ2VuY2U6IHMuZGl2ZXJnZW5jZSB8fCAwLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHB0cy5sZW5ndGggPiAxKSB7XHJcbiAgICBjb25zdCBrZWVwID0gW3B0c1swXV07XHJcbiAgICBsZXQgY3VtID0gMC4wO1xyXG4gICAgbGV0IGxhc3QgPSBwdHNbMF07XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBwID0gcHRzW2ldO1xyXG4gICAgICBjdW0gKz0gaGF2ZXJzaW5lTShsYXN0LmxhdCwgbGFzdC5sb24sIHAubGF0LCBwLmxvbik7XHJcbiAgICAgIGxhc3QgPSBwO1xyXG4gICAgICBpZiAoY3VtID49IHJlc29sdXRpb25NKSB7IGtlZXAucHVzaChwKTsgY3VtID0gMC4wOyB9XHJcbiAgICB9XHJcbiAgICBwdHMgPSBrZWVwO1xyXG4gIH1cclxuICBsb2coYCAgdHJhY2U6ICR7c2Vncy5sZW5ndGh9IHNlZ21lbnRzIC0+ICR7cHRzLmxlbmd0aH0gcG9pbnRzICgke3NlZ3MubGVuZ3RoID8gc2Vnc1swXS5nbmlzX25hbWUgOiBcIj9cIn0gLi4uKWApO1xyXG4gIHJldHVybiBbcHRzLCBzZWdzLmxlbmd0aCA/IHNlZ3NbMF0uZ25pc19uYW1lIDogbnVsbF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEQS13ZWlnaHRlZCBkaXNjaGFyZ2UgaW50ZXJwb2xhdG9yICh2MS40KTogUSBhcyBhIHBpZWNld2lzZS1saW5lYXIgZnVuY3Rpb25cclxuICogb2YgZHJhaW5hZ2UgYXJlYSBiZXR3ZWVuIGdhdWdlcywgREEtcmF0aW8gZXh0cmFwb2xhdGVkIG91dHNpZGUgdGhlIGdhdWdlXHJcbiAqIHJhbmdlICh1bmlmb3JtLXlpZWxkIGFzc3VtcHRpb24gw6LigqzigJ0gc2FtZSBzZW1hbnRpY3MgYXMgdGhlIHNpbmdsZS1nYXVnZSBwYXRoKS5cclxuICogQmVjYXVzZSBEQSBqdW1wcyBhdCBjb25mbHVlbmNlcywgdGhlIFEganVtcCBsYW5kcyBBVCB0aGUgY29uZmx1ZW5jZSBpbnN0ZWFkXHJcbiAqIG9mIHNtZWFyaW5nIGxpbmVhcmx5IG92ZXIgdGhlIGludGVyLWdhdWdlIGRpc3RhbmNlOyBpdCBhbHNvIGNhbid0IGJhY2stY2xhbXBcclxuICogYSBwb3N0LWNvbmZsdWVuY2UgZ2F1Z2UncyBmdWxsIFEgb250byBhIHNtYWxsIHVwc3RyZWFtIHRyaWJ1dGFyeS5cclxuICogR2F1Z2VzIHdob3NlIE5XSVMgREEgYnJlYWtzIGRvd25zdHJlYW0gbW9ub3RvbmljaXR5IGFyZSBkcm9wcGVkIChOV0lTIGFuZFxyXG4gKiBOSERQbHVzIGRlbGluZWF0aW9ucyBkaXNhZ3JlZSBvY2Nhc2lvbmFsbHkpLiBSZXR1cm5zIG51bGwgd2hlbiBmZXdlciB0aGFuIDJcclxuICogbW9ub3RvbmljIGdhdWdlcyByZW1haW4gw6LigqzigJ0gY2FsbGVyIGZhbGxzIGJhY2sgdG8gZGlzdGFuY2UgaW50ZXJwb2xhdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkYVdlaWdodGVkUShnZCkge1xyXG4gIGNvbnN0IGtlcHQgPSBbXTtcclxuICBmb3IgKGNvbnN0IGcgb2YgZ2QpIHtcclxuICAgIGlmICghKGcuZHJhaW5hZ2VfYXJlYSA+IDApIHx8ICEoZy5kaXNjaGFyZ2UgPj0gMCkpIGNvbnRpbnVlO1xyXG4gICAgaWYgKGtlcHQubGVuZ3RoICYmIGcuZHJhaW5hZ2VfYXJlYSA8PSBrZXB0W2tlcHQubGVuZ3RoIC0gMV0uZHJhaW5hZ2VfYXJlYSkgY29udGludWU7XHJcbiAgICBrZXB0LnB1c2goZyk7XHJcbiAgfVxyXG4gIGlmIChrZXB0Lmxlbmd0aCA8IDIpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGZRID0gaW50ZXJwQ2xhbXBlZChrZXB0Lm1hcCgoZykgPT4gZy5kcmFpbmFnZV9hcmVhKSwga2VwdC5tYXAoKGcpID0+IGcuZGlzY2hhcmdlKSk7XHJcbiAgY29uc3QgZGEwID0ga2VwdFswXS5kcmFpbmFnZV9hcmVhLCBxMCA9IGtlcHRbMF0uZGlzY2hhcmdlO1xyXG4gIGNvbnN0IGRhTiA9IGtlcHRba2VwdC5sZW5ndGggLSAxXS5kcmFpbmFnZV9hcmVhLCBxTiA9IGtlcHRba2VwdC5sZW5ndGggLSAxXS5kaXNjaGFyZ2U7XHJcbiAgcmV0dXJuIHtcclxuICAgIGtlcHQsXHJcbiAgICBxOiAoZGEpID0+IHtcclxuICAgICAgaWYgKCEoZGEgPiAwKSkgcmV0dXJuIDEuMDtcclxuICAgICAgaWYgKGRhIDw9IGRhMCkgcmV0dXJuIHEwICogKGRhIC8gZGEwKTtcclxuICAgICAgaWYgKGRhID49IGRhTikgcmV0dXJuIHFOICogKGRhIC8gZGFOKTtcclxuICAgICAgcmV0dXJuIGZRKGRhKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuLyoqIENsYW1wZWQgbGluZWFyIGludGVycG9sYXRpb24gKHNjaXB5IGludGVycDFkIHdpdGggY2xhbXBlZCBmaWxsX3ZhbHVlKS4gKi9cclxuZnVuY3Rpb24gaW50ZXJwQ2xhbXBlZCh4cywgeXMpIHtcclxuICByZXR1cm4gKHgpID0+IHtcclxuICAgIGlmICh4IDw9IHhzWzBdKSByZXR1cm4geXNbMF07XHJcbiAgICBpZiAoeCA+PSB4c1t4cy5sZW5ndGggLSAxXSkgcmV0dXJuIHlzW3lzLmxlbmd0aCAtIDFdO1xyXG4gICAgbGV0IGkgPSAxO1xyXG4gICAgd2hpbGUgKHhzW2ldIDwgeCkgaSsrO1xyXG4gICAgY29uc3QgdCA9ICh4IC0geHNbaSAtIDFdKSAvICh4c1tpXSAtIHhzW2kgLSAxXSk7XHJcbiAgICByZXR1cm4geXNbaSAtIDFdICsgdCAqICh5c1tpXSAtIHlzW2kgLSAxXSk7XHJcbiAgfTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb3JyaWRvcnMgKHYxLjYpXHJcbi8vXHJcbi8vIEEgY29ycmlkb3IgZG9jIChidWlsdCBvZmZsaW5lIGJ5IGNvcnJpZG9ycy9idWlsZF9jb3JyaWRvcnMucHkpOlxyXG4vLyAgIHsgaWQsIG5hbWUsIHNuYXBfbSwgY29udGludWVzX3RvLCB0aWRhbF9mcm9tX2ttLCBpbXBvdW5kbWVudHM6W3tmcm9tX2ttLFxyXG4vLyAgICAgdG9fa20sIG5hbWV9XSwgd2FybmluZ3M6Wy4uLl0sIGF0dHJzOntkYV9rbTJ8c2xvcGV8d2lkdGhfbXxkZXB0aF9tOlxyXG4vLyAgICAgW1trbSwgdmFsdWVdLCAuLi5dfSwgZmxvdzp7cHJvdmlkZXIsIC4uLn0sIHN0YXRpb25fa206Wy4uLl0sXHJcbi8vICAgICB2ZXJ0aWNlczpbW2xvbixsYXRdLCAuLi5dIH1cclxuLy8gRmxvdyBwcm92aWRlcnM6XHJcbi8vICAgZWNjYy1saXZlLXN1bSAgw6LigqzigJ0gc3VtIGxpdmUgRUNDQyBkaXNjaGFyZ2Ugb3ZlciBmbG93LnN0YXRpb25zIChlYWNoXHJcbi8vICAgICAgICAgICAgICAgICAgICB7aWQsIG5hbWUsIGRhX2ttMn0pOyBEQS1yYXRpbyB0cmFuc2ZlcnJlZCBhbG9uZyB0aGVcclxuLy8gICAgICAgICAgICAgICAgICAgIGNvcnJpZG9yLiBhc09mIHVzZXMgdGhlIEVDQ0MgZGFpbHktbWVhbiBhcmNoaXZlLlxyXG4vLyAgIG1vbnRobHktbWVkaWFuIMOi4oKs4oCdIGZsb3cubW9udGhseV9tZWRpYW5fbTNzW21vbnRoXSBhdCBmbG93LnJlZl9kYV9rbTJcclxuLy8gICAgICAgICAgICAgICAgICAgIChyaXZlcnMgd2l0aCBubyBhY3RpdmUgZ2F1Z2UsIGUuZy4gdGhlIEJydW5ldHRlKS5cclxuXHJcbmNvbnN0IENPUlJJRE9SX0NBQ0hFID0gbmV3IE1hcCgpOyAvLyB1cmwgLT4gY29ycmlkb3IgZG9jXHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkQ29ycmlkb3JzKGxpc3QsIGxvZykge1xyXG4gIGNvbnN0IG91dCA9IFtdO1xyXG4gIGZvciAoY29uc3QgZW50cnkgb2YgbGlzdCB8fCBbXSkge1xyXG4gICAgaWYgKGVudHJ5ICYmIHR5cGVvZiBlbnRyeSA9PT0gXCJvYmplY3RcIiAmJiBlbnRyeS52ZXJ0aWNlcykgeyBvdXQucHVzaChlbnRyeSk7IGNvbnRpbnVlOyB9XHJcbiAgICBjb25zdCB1cmwgPSB0eXBlb2YgZW50cnkgPT09IFwic3RyaW5nXCIgPyBlbnRyeSA6IGVudHJ5Py51cmw7XHJcbiAgICBpZiAoIXVybCkgY29udGludWU7XHJcbiAgICBpZiAoIUNPUlJJRE9SX0NBQ0hFLmhhcyh1cmwpKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgQ09SUklET1JfQ0FDSEUuc2V0KHVybCwgYXdhaXQgZ2V0SnNvbih1cmwsIHsgdGltZW91dE1zOiAzMDAwMCB9KSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBsb2coYCAgY29ycmlkb3IgbG9hZCBGQUlMRUQgKCR7dXJsfSk6ICR7U3RyaW5nKGUpLnNsaWNlKDAsIDgwKX1gKTtcclxuICAgICAgICBDT1JSSURPUl9DQUNIRS5zZXQodXJsLCBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZG9jID0gQ09SUklET1JfQ0FDSEUuZ2V0KHVybCk7XHJcbiAgICBpZiAoZG9jKSBvdXQucHVzaChkb2MpO1xyXG4gIH1cclxuICByZXR1cm4gb3V0O1xyXG59XHJcblxyXG4vKiogQ2xhbXBlZCBsaW5lYXIgaW50ZXJwb2xhdGlvbiBvdmVyIGF1dGhvcmVkIFtba20sIHZhbHVlXSwgLi4uXSBicmVha3BvaW50cy4gKi9cclxuZnVuY3Rpb24gY29ycmlkb3JBdHRyKGJwcywga20sIGZhbGxiYWNrID0gMCkge1xyXG4gIGlmICghYnBzIHx8ICFicHMubGVuZ3RoKSByZXR1cm4gZmFsbGJhY2s7XHJcbiAgaWYgKGttIDw9IGJwc1swXVswXSkgcmV0dXJuIGJwc1swXVsxXTtcclxuICBjb25zdCBsYXN0ID0gYnBzW2Jwcy5sZW5ndGggLSAxXTtcclxuICBpZiAoa20gPj0gbGFzdFswXSkgcmV0dXJuIGxhc3RbMV07XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBicHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChicHNbaV1bMF0gPj0ga20pIHtcclxuICAgICAgY29uc3QgdCA9IChrbSAtIGJwc1tpIC0gMV1bMF0pIC8gKGJwc1tpXVswXSAtIGJwc1tpIC0gMV1bMF0pO1xyXG4gICAgICByZXR1cm4gYnBzW2kgLSAxXVsxXSArIHQgKiAoYnBzW2ldWzFdIC0gYnBzW2kgLSAxXVsxXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBsYXN0WzFdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZWFyZXN0Q29ycmlkb3JWZXJ0ZXgobGF0LCBsb24sIGNvcnIpIHtcclxuICBsZXQgYmVzdCA9IEluZmluaXR5LCBpZHggPSAwO1xyXG4gIGNvbnN0IHYgPSBjb3JyLnZlcnRpY2VzO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdi5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZCA9IGhhdmVyc2luZU0obGF0LCBsb24sIHZbaV1bMV0sIHZbaV1bMF0pO1xyXG4gICAgaWYgKGQgPCBiZXN0KSB7IGJlc3QgPSBkOyBpZHggPSBpOyB9XHJcbiAgfVxyXG4gIHJldHVybiB7IGlkeCwgZGlzdE06IGJlc3QgfTtcclxufVxyXG5cclxuLyoqIFBvaW50IGF0dHJpYnV0ZXMgc2FtcGxlZCBmcm9tIGEgY29ycmlkb3IgYXQgaXRzIG5hdGl2ZSBzdGF0aW9uaW5nIChrbSkuICovXHJcbmZ1bmN0aW9uIGNvcnJpZG9yUG9pbnQoY29yciwgbG9uLCBsYXQsIGttLCBjb25uZWN0b3IgPSBmYWxzZSkge1xyXG4gIGNvbnN0IGEgPSBjb3JyLmF0dHJzIHx8IHt9O1xyXG4gIGNvbnN0IGltcG91bmQgPSAoY29yci5pbXBvdW5kbWVudHMgfHwgW10pLmZpbmQoKHopID0+IGttID49IHouZnJvbV9rbSAmJiBrbSA8PSB6LnRvX2ttKTtcclxuICByZXR1cm4ge1xyXG4gICAgbG9uLCBsYXQsXHJcbiAgICBkcmFpbmFnZV9hcmVhX2ttMjogY29ycmlkb3JBdHRyKGEuZGFfa20yLCBrbSwgMCksXHJcbiAgICBzbG9wZTogTWF0aC5tYXgoY29ycmlkb3JBdHRyKGEuc2xvcGUsIGttLCAwLjAwMSksIDAuMDAwMDEpLFxyXG4gICAgY29ycmlkb3Jfd2lkdGhfbTogY29ycmlkb3JBdHRyKGEud2lkdGhfbSwga20sIDApLFxyXG4gICAgZGVwdGhfb3ZlcnJpZGU6IGNvcnJpZG9yQXR0cihhLmRlcHRoX20sIGttLCAwKSxcclxuICAgIHRpZGFsOiBjb3JyLnRpZGFsX2Zyb21fa20gIT09IG51bGwgJiYgY29yci50aWRhbF9mcm9tX2ttICE9PSB1bmRlZmluZWQgJiYga20gPj0gY29yci50aWRhbF9mcm9tX2ttLFxyXG4gICAgZnR5cGU6IGNvbm5lY3RvciA/IFwiQ29ycmlkb3JDb25uZWN0b3JcIiA6IFwiQ29ycmlkb3JcIixcclxuICAgIHdiYXJlYXR5cGU6IGltcG91bmQgPyBcIlJlc2Vydm9pclwiIDogXCJTdHJlYW1SaXZlclwiLFxyXG4gICAgY29taWQ6IG51bGwsXHJcbiAgICBnbmlzX25hbWU6IGltcG91bmQgPyAoaW1wb3VuZC5uYW1lIHx8IGNvcnIubmFtZSkgOiBjb3JyLm5hbWUsXHJcbiAgICBxZV9tYTogbnVsbCwgcWVfbW9udGhseTogbnVsbCxcclxuICAgIGRpdmVyZ2VuY2U6IDAsXHJcbiAgICBjb3JyaWRvcl9pZDogY29yci5pZCxcclxuICAgIGNvcnJpZG9yX2ttOiBrbSxcclxuICB9O1xyXG59XHJcblxyXG4vKiogTGl2ZS9tZWRpYW4gZGlzY2hhcmdlIGZvciBhIGNvcnJpZG9yJ3MgZmxvdyBtb2RlbC5cclxuICogIFJldHVybnMgeyBxTTNzLCBkYUttMiwgc291cmNlLCBub3RlIH0gb3IgbnVsbCAoY2FsbGVyIHdhcm5zICsgZXJyb3JzKS4gKi9cclxuYXN5bmMgZnVuY3Rpb24gY29ycmlkb3JGbG93KGNvcnIsIGFzT2YsIGxvZykge1xyXG4gIGNvbnN0IGZsb3cgPSBjb3JyLmZsb3cgfHwge307XHJcbiAgY29uc3QgbW9udGggPSBhc09mID8gcGFyc2VJbnQoYXNPZi5zbGljZSg1LCA3KSwgMTApIDogbmV3IERhdGUoKS5nZXRNb250aCgpICsgMTtcclxuXHJcbiAgY29uc3QgbWVkaWFucyA9IGZsb3cubW9udGhseV9tZWRpYW5fbTNzIHx8IG51bGw7XHJcbiAgY29uc3QgbWVkaWFuID0gbWVkaWFucyAmJiBtZWRpYW5zW1N0cmluZyhtb250aCldID4gMFxyXG4gICAgPyB7IHFNM3M6IG1lZGlhbnNbU3RyaW5nKG1vbnRoKV0sIGRhS20yOiBmbG93LnJlZl9kYV9rbTIsIHNvdXJjZTogXCJtb250aGx5LW1lZGlhblwiLFxyXG4gICAgICAgIG5vdGU6IGZsb3cuc291cmNlX25vdGUgfHwgbnVsbCB9XHJcbiAgICA6IG51bGw7XHJcblxyXG4gIGlmIChmbG93LnByb3ZpZGVyID09PSBcImVjY2MtbGl2ZS1zdW1cIikge1xyXG4gICAgbGV0IHFTdW0gPSAwLCBkYVN1bSA9IDA7XHJcbiAgICBjb25zdCBsaXZlID0gW10sIGRvd24gPSBbXTtcclxuICAgIGZvciAoY29uc3Qgc3Qgb2YgZmxvdy5zdGF0aW9ucyB8fCBbXSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCBxID0gbnVsbDtcclxuICAgICAgICBpZiAoYXNPZikge1xyXG4gICAgICAgICAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oYCR7RUNDQ19BUEl9L2h5ZHJvbWV0cmljLWRhaWx5LW1lYW4vaXRlbXNgLCB7XHJcbiAgICAgICAgICAgIHBhcmFtczogeyBTVEFUSU9OX05VTUJFUjogc3QuaWQsIERBVEU6IGFzT2YsIGY6IFwianNvblwiLCBsaW1pdDogXCI1XCIsIHNraXBHZW9tZXRyeTogXCJ0cnVlXCIgfSxcclxuICAgICAgICAgICAgdGltZW91dE1zOiAzMDAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcclxuICAgICAgICAgICAgY29uc3QgdiA9IGYucHJvcGVydGllcz8uRElTQ0hBUkdFO1xyXG4gICAgICAgICAgICBpZiAodiAhPT0gbnVsbCAmJiB2ICE9PSB1bmRlZmluZWQgJiYgdiA+PSAwKSB7IHEgPSBOdW1iZXIodik7IGJyZWFrOyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKGAke0VDQ0NfQVBJfS9oeWRyb21ldHJpYy1yZWFsdGltZS9pdGVtc2AsIHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgU1RBVElPTl9OVU1CRVI6IHN0LmlkLCBmOiBcImpzb25cIiwgbGltaXQ6IFwiNDhcIixcclxuICAgICAgICAgICAgICBzb3J0Ynk6IFwiLURBVEVUSU1FXCIsIHNraXBHZW9tZXRyeTogXCJ0cnVlXCIsXHJcbiAgICAgICAgICAgICAgcHJvcGVydGllczogXCJESVNDSEFSR0UsREFURVRJTUUsU1RBVElPTl9OVU1CRVJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGltZW91dE1zOiAzMDAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcclxuICAgICAgICAgICAgY29uc3QgdiA9IGYucHJvcGVydGllcz8uRElTQ0hBUkdFO1xyXG4gICAgICAgICAgICBpZiAodiAhPT0gbnVsbCAmJiB2ICE9PSB1bmRlZmluZWQgJiYgdiA+PSAwKSB7IHEgPSBOdW1iZXIodik7IGJyZWFrOyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChxICE9PSBudWxsKSB7IHFTdW0gKz0gcTsgZGFTdW0gKz0gc3QuZGFfa20yIHx8IDA7IGxpdmUucHVzaChzdC5pZCk7IH1cclxuICAgICAgICBlbHNlIGRvd24ucHVzaChzdC5pZCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkb3duLnB1c2goc3QuaWQpO1xyXG4gICAgICAgIGxvZyhgICBFQ0NDIGdhdWdlICR7c3QuaWR9IGZhaWxlZDogJHtTdHJpbmcoZSkuc2xpY2UoMCwgNjApfWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzdGF0aW9ucyB3aXRob3V0IHBlci1zdGF0aW9uIGRhX2ttMjogdXNhYmxlIG9ubHkgd2hlbiBBTEwgcmVwb3J0IGxpdmVcclxuICAgIGlmIChsaXZlLmxlbmd0aCA9PT0gKGZsb3cuc3RhdGlvbnMgfHwgW10pLmxlbmd0aCAmJiAhKGRhU3VtID4gMCkpIGRhU3VtID0gZmxvdy5yZWZfZGFfa20yIHx8IDA7XHJcbiAgICBpZiAobGl2ZS5sZW5ndGggJiYgZGFTdW0gPiAwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcU0zczogcVN1bSwgZGFLbTI6IGRhU3VtLCBzb3VyY2U6IFwiZWNjYy1pdlwiLFxyXG4gICAgICAgIG5vdGU6IGBFQ0NDIGxpdmU6ICR7bGl2ZS5qb2luKFwiK1wiKX1gICsgKGRvd24ubGVuZ3RoID8gYCAoZmVlZCBkb3duOiAke2Rvd24uam9pbihcIixcIil9KWAgOiBcIlwiKSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmIChtZWRpYW4pIHtcclxuICAgICAgbG9nKGAgIEVDQ0MgZmVlZCBkb3duIGZvciAke2NvcnIuaWR9IMOi4oKs4oCdIGZhbGxpbmcgYmFjayB0byBtb250aGx5IG1lZGlhbmApO1xyXG4gICAgICByZXR1cm4geyAuLi5tZWRpYW4sIG5vdGU6IGBFQ0NDIGZlZWQgRE9XTiAoJHtkb3duLmpvaW4oXCIsXCIpfSkgw6LigqzigJ0gJHttZWRpYW4ubm90ZSB8fCBcImhpc3RvcmljYWwgbW9udGhseSBtZWRpYW5cIn1gIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGlmIChmbG93LnByb3ZpZGVyID09PSBcIm1vbnRobHktbWVkaWFuXCIpIHJldHVybiBtZWRpYW47XHJcbiAgcmV0dXJuIG1lZGlhbjsgLy8gdW5rbm93biBwcm92aWRlciDDouKCrOKAnSBiZXN0IGVmZm9ydFxyXG59XHJcblxyXG4vKipcclxuICogQ29ycmlkb3ItbW9kZSBmZXRjaFRyYWNlRGF0YTogcm93cyArIHZpcnR1YWwgZ2F1Z2VzIGZyb20gY29ycmlkb3IgZG9jcy5cclxuICogTWlycm9ycyB0aGUgVVMgcGF0aCdzIG91dHB1dCBzaGFwZSBleGFjdGx5LCBzbyBjb21wdXRlVHJhY2UgaXMgdW5jaGFuZ2VkLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb3JyaWRvclRyYWNlRGF0YShsYXQsIGxvbiwgY29yciwgYWxsQ29ycmlkb3JzLCBjZmcsIGxvZykge1xyXG4gIGNvbnN0IGJ5SWQgPSBuZXcgTWFwKGFsbENvcnJpZG9ycy5tYXAoKGMpID0+IFtjLmlkLCBjXSkpO1xyXG5cclxuICAvLyAxLiBkb3duc3RyZWFtIGNoYWluLCBjeWNsZS1ndWFyZGVkXHJcbiAgY29uc3QgY2hhaW4gPSBbY29ycl07XHJcbiAgY29uc3Qgc2VlbiA9IG5ldyBTZXQoW2NvcnIuaWRdKTtcclxuICBsZXQgY3VyID0gY29ycjtcclxuICB3aGlsZSAoY3VyLmNvbnRpbnVlc190byAmJiBieUlkLmhhcyhjdXIuY29udGludWVzX3RvKSAmJiAhc2Vlbi5oYXMoY3VyLmNvbnRpbnVlc190bykpIHtcclxuICAgIGN1ciA9IGJ5SWQuZ2V0KGN1ci5jb250aW51ZXNfdG8pO1xyXG4gICAgY2hhaW4ucHVzaChjdXIpO1xyXG4gICAgc2Vlbi5hZGQoY3VyLmlkKTtcclxuICB9XHJcblxyXG4gIC8vIDIuIGFzc2VtYmxlIGF0dHJpYnV0ZWQgcG9pbnRzOiBjbGljayAtPiBjb3JyaWRvciBlbmQsIHRoZW4gY2hhaW5lZFxyXG4gIC8vICAgIGNvcnJpZG9ycyBmcm9tIHRoZWlyIGpvaW4gdmVydGV4LCBicmlkZ2luZyBnYXBzIHdpdGggY29ubmVjdG9yc1xyXG4gIGNvbnN0IHsgaWR4OiBzdGFydElkeCwgZGlzdE06IHNuYXBEaXN0TSB9ID0gbmVhcmVzdENvcnJpZG9yVmVydGV4KGxhdCwgbG9uLCBjb3JyKTtcclxuICBjb25zdCBwdHMgPSBbXTtcclxuICBjb25zdCBjb3JyaWRvck1ldGEgPSBbXTtcclxuICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgY2hhaW4ubGVuZ3RoOyBjaSsrKSB7XHJcbiAgICBjb25zdCBjID0gY2hhaW5bY2ldO1xyXG4gICAgbGV0IGZyb21JZHg7XHJcbiAgICBpZiAoY2kgPT09IDApIGZyb21JZHggPSBzdGFydElkeDtcclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCBwcmV2ID0gcHRzW3B0cy5sZW5ndGggLSAxXTtcclxuICAgICAgY29uc3QgeyBpZHgsIGRpc3RNIH0gPSBuZWFyZXN0Q29ycmlkb3JWZXJ0ZXgocHJldi5sYXQsIHByZXYubG9uLCBjKTtcclxuICAgICAgaWYgKGRpc3RNID4gY2ZnLmNvcnJpZG9yR2FwTWF4TSkge1xyXG4gICAgICAgIGxvZyhgICBjb3JyaWRvciBjaGFpbiBzdG9wczogJHtjaGFpbltjaSAtIDFdLmlkfSAtPiAke2MuaWR9IGdhcCAkeyhkaXN0TSAvIDEwMDApLnRvRml4ZWQoMil9IGttID4gbWF4YCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgLy8gc3RyYWlnaHQgY29ubmVjdG9yIHRocm91Z2ggdGhlIGNvbmZsdWVuY2UgZ2FwLCBhdHRyaWJ1dGVkIHdpdGggdGhlXHJcbiAgICAgIC8vIERPV05TVFJFQU0gY29ycmlkb3IncyBoeWRyYXVsaWNzIGF0IHRoZSBqb2luIChpdCBpcyB0aGF0IHJpdmVyJ3Mgd2F0ZXIpXHJcbiAgICAgIGlmIChkaXN0TSA+IDMwKSB7XHJcbiAgICAgICAgY29uc3Qgam9pbkttID0gYy5zdGF0aW9uX2ttW2lkeF07XHJcbiAgICAgICAgY29uc3QgW2pMb24sIGpMYXRdID0gYy52ZXJ0aWNlc1tpZHhdO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKGRpc3RNIC8gY2ZnLnJlc29sdXRpb25NKSk7XHJcbiAgICAgICAgZm9yIChsZXQgcyA9IDE7IHMgPD0gc3RlcHM7IHMrKykge1xyXG4gICAgICAgICAgY29uc3QgdCA9IHMgLyBzdGVwcztcclxuICAgICAgICAgIHB0cy5wdXNoKGNvcnJpZG9yUG9pbnQoYywgcHJldi5sb24gKyAoakxvbiAtIHByZXYubG9uKSAqIHQsXHJcbiAgICAgICAgICAgIHByZXYubGF0ICsgKGpMYXQgLSBwcmV2LmxhdCkgKiB0LCBqb2luS20sIHRydWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nKGAgIGNvbm5lY3RvcjogJHtjaGFpbltjaSAtIDFdLmlkfSAtPiAke2MuaWR9ICgke01hdGgucm91bmQoZGlzdE0pfSBtLCAke2MubmFtZX0gaHlkcmF1bGljcylgKTtcclxuICAgICAgfVxyXG4gICAgICBmcm9tSWR4ID0gaWR4O1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmlyc3RQdCA9IHB0cy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gZnJvbUlkeDsgaSA8IGMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcHRzLnB1c2goY29ycmlkb3JQb2ludChjLCBjLnZlcnRpY2VzW2ldWzBdLCBjLnZlcnRpY2VzW2ldWzFdLCBjLnN0YXRpb25fa21baV0pKTtcclxuICAgIH1cclxuICAgIGNvcnJpZG9yTWV0YS5wdXNoKHsgaWQ6IGMuaWQsIG5hbWU6IGMubmFtZSwgZnJvbV9rbTogYy5zdGF0aW9uX2ttW2Zyb21JZHhdLCBmaXJzdF9wdDogZmlyc3RQdCB9KTtcclxuICB9XHJcbiAgaWYgKHB0cy5sZW5ndGggPCAyKSB0aHJvdyBuZXcgRXJyb3IoXCJjb3JyaWRvciB0cmFjZSB0b28gc2hvcnRcIik7XHJcblxyXG4gIC8vIGRvd25zYW1wbGUgdG8gY2ZnLnJlc29sdXRpb25NIChjb3JyaWRvciB2ZXJ0aWNlcyBhcmUgfjUwIG0pXHJcbiAgbGV0IHNhbXBsZWQgPSBbcHRzWzBdXTtcclxuICBsZXQgYWNjID0gMDtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgYWNjICs9IGhhdmVyc2luZU0ocHRzW2kgLSAxXS5sYXQsIHB0c1tpIC0gMV0ubG9uLCBwdHNbaV0ubGF0LCBwdHNbaV0ubG9uKTtcclxuICAgIGlmIChhY2MgPj0gY2ZnLnJlc29sdXRpb25NIHx8IGkgPT09IHB0cy5sZW5ndGggLSAxKSB7IHNhbXBsZWQucHVzaChwdHNbaV0pOyBhY2MgPSAwOyB9XHJcbiAgfVxyXG5cclxuICAvLyAzLiByb3dzIMOi4oKs4oCdIHNhbWUgc2hhcGUvZGVyaXZlZCBmaWVsZHMgYXMgdGhlIFVTIHBhdGhcclxuICBjb25zdCByb3dzID0gc2FtcGxlZC5tYXAoKHApID0+ICh7IC4uLnAgfSkpO1xyXG4gIGNvbnN0IG4gPSByb3dzLmxlbmd0aDtcclxuICByb3dzWzBdLmRpc3RhbmNlID0gMC4wO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbjsgaSsrKSB7XHJcbiAgICByb3dzW2ldLmRpc3RhbmNlID0gaGF2ZXJzaW5lTShyb3dzW2kgLSAxXS5sYXQsIHJvd3NbaSAtIDFdLmxvbiwgcm93c1tpXS5sYXQsIHJvd3NbaV0ubG9uKTtcclxuICB9XHJcbiAgbGV0IGN1bSA9IDAuMDtcclxuICBmb3IgKGNvbnN0IHIgb2Ygcm93cykgeyBjdW0gKz0gci5kaXN0YW5jZTsgci5jdW1fZGlzdCA9IGN1bTsgfVxyXG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7XHJcbiAgICByLmRyYWluYWdlX2FyZWFfc3FtaSA9IHIuZHJhaW5hZ2VfYXJlYV9rbTIgKiAwLjM4NjEwMjtcclxuICAgIHIuZm9ybXVsYV93aWR0aCA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oci5kcmFpbmFnZV9hcmVhX3NxbWkpWzBdO1xyXG4gICAgci5icmFpZGVkID0gZmFsc2U7XHJcbiAgICAvLyBhdXRob3JlZCBjb3JyaWRvciB3aWR0aCBpcyB0cnVzdGVkOiBubyBHTE9XIGNhcCwgYnV0IGtlZXAgdGhlIHNhbWVcclxuICAgIC8vIDUxLXB0IHRyYWlsaW5nIHNtb290aGluZyBzbyBicmVha3BvaW50IHN0ZXBzIGRvbid0IGtpbmsgdGhlIHZlbG9jaXR5XHJcbiAgICByLndpZHRoX20gPSByLmNvcnJpZG9yX3dpZHRoX207XHJcbiAgICByLndpZHRoX2ZpbmFsX3JhdyA9IHIuY29ycmlkb3Jfd2lkdGhfbSA+IDAgPyByLmNvcnJpZG9yX3dpZHRoX20gOiByLmZvcm11bGFfd2lkdGg7XHJcbiAgfVxyXG4gIHtcclxuICAgIGNvbnN0IFcgPSA1MTtcclxuICAgIGxldCBzdW0gPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgc3VtICs9IHJvd3NbaV0ud2lkdGhfZmluYWxfcmF3O1xyXG4gICAgICBpZiAoaSA+PSBXKSBzdW0gLT0gcm93c1tpIC0gV10ud2lkdGhfZmluYWxfcmF3O1xyXG4gICAgICByb3dzW2ldLndpZHRoX2ZpbmFsID0gc3VtIC8gTWF0aC5taW4oaSArIDEsIFcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gNC4gdmlydHVhbCBnYXVnZXM6IGVudHJ5ICsgZXhpdCBvZiBlYWNoIGNoYWluZWQgY29ycmlkb3IsIERBLXJhdGlvXHJcbiAgLy8gICAgdHJhbnNmZXJyZWQgZnJvbSB0aGF0IGNvcnJpZG9yJ3MgZmxvdyByZWZlcmVuY2UuIEZlZWRzIHRoZSBzdGFuZGFyZFxyXG4gIC8vICAgIERBLXdlaWdodGVkIGludGVycG9sYXRpb24gw6LigqzigJ0gZmxvdyBqdW1wcyBsYW5kIEFUIHRoZSBjb25mbHVlbmNlLlxyXG4gIGNvbnN0IENGU19QRVJfTTNTID0gTWF0aC5wb3coMy4yODEsIDMpO1xyXG4gIGNvbnN0IGdkID0gW107XHJcbiAgY29uc3QgY29ycmlkb3JXYXJuaW5ncyA9IFtdO1xyXG4gIGNvbnN0IGZsb3dOb3RlcyA9IFtdO1xyXG4gIGZvciAoY29uc3QgbWV0YSBvZiBjb3JyaWRvck1ldGEpIHtcclxuICAgIGNvbnN0IGMgPSBieUlkLmdldChtZXRhLmlkKTtcclxuICAgIGNvbnN0IGYgPSBhd2FpdCBjb3JyaWRvckZsb3coYywgY2ZnLmFzT2YsIGxvZyk7XHJcbiAgICBpZiAoIWYpIHtcclxuICAgICAgY29ycmlkb3JXYXJuaW5ncy5wdXNoKGAke2MubmFtZX06IG5vIGZsb3cgZGF0YSBhdmFpbGFibGUgKGdhdWdlIGZlZWQgZG93biwgbm8gZmFsbGJhY2spIMOi4oKs4oCdIGZsb3cgYXNzdW1lZCBmcm9tIGRyYWluYWdlIGFyZWEgb25seS5gKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYVJlZlNxbWkgPSBmLmRhS20yICogMC4zODYxMDI7XHJcbiAgICBjb25zdCBjcm93cyA9IHJvd3MuZmlsdGVyKChyKSA9PiByLmNvcnJpZG9yX2lkID09PSBtZXRhLmlkICYmIHIuZnR5cGUgPT09IFwiQ29ycmlkb3JcIik7XHJcbiAgICBpZiAoIWNyb3dzLmxlbmd0aCkgY29udGludWU7XHJcbiAgICBmb3IgKGNvbnN0IGF0IG9mIFtjcm93c1swXSwgY3Jvd3NbY3Jvd3MubGVuZ3RoIC0gMV1dKSB7XHJcbiAgICAgIGNvbnN0IGRhU3FtaSA9IGF0LmRyYWluYWdlX2FyZWFfc3FtaTtcclxuICAgICAgaWYgKCEoZGFTcW1pID4gMCkgfHwgIShkYVJlZlNxbWkgPiAwKSkgY29udGludWU7XHJcbiAgICAgIGNvbnN0IHEgPSBmLnFNM3MgKiBDRlNfUEVSX00zUyAqIChkYVNxbWkgLyBkYVJlZlNxbWkpO1xyXG4gICAgICBpZiAoZ2Quc29tZSgoZykgPT4gTWF0aC5hYnMoZy50cmFjZV9kaXN0IC0gYXQuY3VtX2Rpc3QpIDwgMSkpIGNvbnRpbnVlO1xyXG4gICAgICBjb25zdCBbdywgZGVwXSA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oZGFTcW1pKTtcclxuICAgICAgZ2QucHVzaCh7XHJcbiAgICAgICAgc3RhdGlvbl9pZDogYCR7bWV0YS5pZH06JHtmLnNvdXJjZX1gLFxyXG4gICAgICAgIG5hbWU6IGAke2MubmFtZX0gKCR7Zi5ub3RlIHx8IGYuc291cmNlfSlgLFxyXG4gICAgICAgIGxhdDogYXQubGF0LCBsb246IGF0LmxvbixcclxuICAgICAgICBkaXNjaGFyZ2U6IHEsIGRyYWluYWdlX2FyZWE6IGRhU3FtaSxcclxuICAgICAgICBxX3NvdXJjZTogZi5zb3VyY2UsXHJcbiAgICAgICAgYXJlYTogdyAqIGRlcCwgdHJhY2VfZGlzdDogYXQuY3VtX2Rpc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGYuc291cmNlICE9PSBcImVjY2MtaXZcIikge1xyXG4gICAgICBjb3JyaWRvcldhcm5pbmdzLnB1c2goXHJcbiAgICAgICAgYCR7Yy5uYW1lfTogZmxvdyBpcyBhIEhJU1RPUklDQUwgTU9OVEhMWSBNRURJQU4gKCR7Zi5ub3RlIHx8IFwiYXJjaGl2ZWQgcmVjb3JkXCJ9KSDDouKCrOKAnSBOT1QgbGl2ZSBjb25kaXRpb25zLmApO1xyXG4gICAgfVxyXG4gICAgZmxvd05vdGVzLnB1c2goYCR7Yy5uYW1lfTogJHtmLnFNM3MudG9GaXhlZCgyKX0gbTMvcyBhdCByZWYgREEgJHtNYXRoLnJvdW5kKGYuZGFLbTIpfSBrbTIgKCR7Zi5zb3VyY2V9KWApO1xyXG4gICAgZm9yIChjb25zdCB3dGV4dCBvZiBjLndhcm5pbmdzIHx8IFtdKSB7XHJcbiAgICAgIGlmICghY29ycmlkb3JXYXJuaW5ncy5pbmNsdWRlcyh3dGV4dCkpIGNvcnJpZG9yV2FybmluZ3MucHVzaCh3dGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdkLnNvcnQoKGEsIGIpID0+IGEudHJhY2VfZGlzdCAtIGIudHJhY2VfZGlzdCk7XHJcbiAgZm9yIChjb25zdCBnIG9mIGdkKSB7XHJcbiAgICBsb2coYCAgY29ycmlkb3IgZ2F1Z2UgJHtnLnN0YXRpb25faWQucGFkRW5kKDI4KX0gJHtTdHJpbmcoTWF0aC5yb3VuZChnLmRpc2NoYXJnZSkpLnBhZFN0YXJ0KDkpfSBjZnMgQCAkeyhnLnRyYWNlX2Rpc3QgLyAxMDAwKS50b0ZpeGVkKDEpLnBhZFN0YXJ0KDYpfSBrbSAoJHtnLnFfc291cmNlfSlgKTtcclxuICB9XHJcblxyXG4gIC8vIDUuIHNpdGUvcmVjZXB0b3IgZmVhdHVyZXMgw6LigqzigJ0gaWRlbnRpY2FsIHRvIHRoZSBVUyBwYXRoXHJcbiAgY29uc3QgZmV0Y2hTZXRzID0gYXN5bmMgKHByb3ZpZGVycykgPT4gUHJvbWlzZS5hbGwoXHJcbiAgICAocHJvdmlkZXJzIHx8IFtdKS5tYXAoYXN5bmMgKHApID0+ICh7XHJcbiAgICAgIGJ1ZmZlcl9tOiBwLmJ1ZmZlcl9tID8/IDQwMCxcclxuICAgICAgZmVhdHM6IGF3YWl0IHAuZmV0Y2goKSxcclxuICAgIH0pKSxcclxuICApO1xyXG4gIGNvbnN0IFtzaXRlU2V0cywgcmVjZXB0b3JTZXRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgW2ZldGNoU2V0cyhjZmcuc2l0ZVByb3ZpZGVycyksIGZldGNoU2V0cyhjZmcucmVjZXB0b3JQcm92aWRlcnMpXSxcclxuICApO1xyXG5cclxuICBjb25zdCByaXZlck5hbWUgPSBjb3JyaWRvck1ldGEubWFwKChtKSA9PiBieUlkLmdldChtLmlkKS5uYW1lKS5qb2luKFwiIMOi4oCg4oCZIFwiKTtcclxuICBsb2coYCAgY29ycmlkb3IgdHJhY2U6ICR7cml2ZXJOYW1lfSwgJHtufSBwb2ludHMsICR7KHJvd3NbbiAtIDFdLmN1bV9kaXN0IC8gMTAwMCkudG9GaXhlZCgxKX0ga20sICR7Z2QubGVuZ3RofSB2aXJ0dWFsIGdhdWdlc2ApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbGF0LCBsb24sIGNvbWlkOiBudWxsLCBzbmFwTmFtZTogY29yci5uYW1lLCBzbmFwRGlzdE0sIHJpdmVyTmFtZSxcclxuICAgIHJvd3MsIGdkLCBzaXRlU2V0cywgcmVjZXB0b3JTZXRzLFxyXG4gICAgYXNPZjogY2ZnLmFzT2YgfHwgXCJsaXZlXCIsXHJcbiAgICBmZXRjaGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgIGNvcnJpZG9yV2FybmluZ3MsXHJcbiAgICBjb3JyaWRvck1ldGE6IHtcclxuICAgICAgY2hhaW46IGNvcnJpZG9yTWV0YS5tYXAoKG0pID0+ICh7IGlkOiBtLmlkLCBmcm9tX2ttOiBNYXRoLnJvdW5kKG0uZnJvbV9rbSAqIDEwMCkgLyAxMDAgfSkpLFxyXG4gICAgICBmbG93OiBmbG93Tm90ZXMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWFpbiBtb2RlbFxyXG4vL1xyXG4vLyBTcGxpdCBpbnRvIHR3byBzdGFnZXMgc28gdGhlIGV4cGVuc2l2ZSBwYXJ0IGlzIGNhY2hlYWJsZTpcclxuLy8gICBmZXRjaFRyYWNlRGF0YShsYXQsIGxvbiwgY29uZmlnKSAgw6LigqzigJ0gQUxMIG5ldHdvcmsgSS9POiB0cmFjZSBnZW9tZXRyeSwgVkFBcyxcclxuLy8gICAgIHdpZHRoIHNhbXBsaW5nLCBnYXVnZXMgKyBmbG93cywgc2l0ZS9yZWNlcHRvciBmZWF0dXJlcy4gU2FmZXR5IGZhY3RvcixcclxuLy8gICAgIG1heCBob3VycyBldGMuIGRvIE5PVCBhZmZlY3QgdGhpcyBzdGFnZS5cclxuLy8gICBjb21wdXRlVHJhY2UoZGF0YSwgY29uZmlnKSAgICAgICAgw6LigqzigJ0gcHVyZSBtYXRoOiBRIGludGVycCwgTWFubmluZyBkZXB0aCxcclxuLy8gICAgIHZlbG9jaXR5IHggc2FmZXR5LCBpbXBvdW5kbWVudCwgdHJhdmVsIHRpbWUsIGhvdXJseSBtYXJrZXJzLCBzaXRlIEVUQXMuXHJcbi8vICAgICBEZXRlcm1pbmlzdGljIGFuZCByZS1ydW5uYWJsZSBvbiB0aGUgc2FtZSBkYXRhIChmaWVsZHMgYXJlIG92ZXJ3cml0dGVuLFxyXG4vLyAgICAgcm93cyBhcmUgbmV2ZXIgc3RydWN0dXJhbGx5IG11dGF0ZWQpLlxyXG4vLyBydW5UcmFjZSgpIGNvbXBvc2VzIHRoZSB0d28gw6LigqzigJ0gaWRlbnRpY2FsIGJlaGF2aW9yIHRvIHRoZSBvcmlnaW5hbC5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFRyYWNlRGF0YShsYXQsIGxvbiwgY29uZmlnID0ge30pIHtcclxuICBjb25zdCBjZmcgPSB7IC4uLkRFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfTtcclxuICBjb25zdCBsb2cgPSBjZmcudmVyYm9zZSA/ICguLi5hKSA9PiBjb25zb2xlLmxvZyguLi5hKSA6ICgpID0+IHt9O1xyXG5cclxuICBsb2coYGZldGNoVHJhY2VEYXRhKCR7bGF0LnRvRml4ZWQoNCl9LCAke2xvbi50b0ZpeGVkKDQpfSkgIGFzT2Y9JHtjZmcuYXNPZiB8fCBcImxpdmVcIn1gKTtcclxuXHJcbiAgLy8gMC4gY29ycmlkb3IgbW9kZSAodjEuNik6IGlmIHRoZSBjbGljayBsYW5kcyBvbiBhIGNvbmZpZ3VyZWQgY29ycmlkb3JcclxuICAvLyAoQ2FuYWRpYW4gcml2ZXJzIMOi4oKs4oCdIG5vIE5MREkvTkhEUGx1cy9OV0lTIGNvdmVyYWdlKSwgcnVuIG9uIGNvcnJpZG9yIGRhdGEuXHJcbiAgaWYgKGNmZy5jb3JyaWRvcnMgJiYgY2ZnLmNvcnJpZG9ycy5sZW5ndGgpIHtcclxuICAgIGNvbnN0IGRvY3MgPSBhd2FpdCBsb2FkQ29ycmlkb3JzKGNmZy5jb3JyaWRvcnMsIGxvZyk7XHJcbiAgICBsZXQgYmVzdCA9IG51bGw7XHJcbiAgICBmb3IgKGNvbnN0IGMgb2YgZG9jcykge1xyXG4gICAgICBjb25zdCB7IGRpc3RNIH0gPSBuZWFyZXN0Q29ycmlkb3JWZXJ0ZXgobGF0LCBsb24sIGMpO1xyXG4gICAgICBpZiAoZGlzdE0gPD0gKGMuc25hcF9tIHx8IDUwMCkgJiYgKCFiZXN0IHx8IGRpc3RNIDwgYmVzdC5kaXN0TSkpIGJlc3QgPSB7IGMsIGRpc3RNIH07XHJcbiAgICB9XHJcbiAgICBpZiAoYmVzdCkge1xyXG4gICAgICBsb2coYCAgY29ycmlkb3IgbWF0Y2g6ICR7YmVzdC5jLmlkfSAoJHtNYXRoLnJvdW5kKGJlc3QuZGlzdE0pfSBtIGZyb20gY2VudGVybGluZSlgKTtcclxuICAgICAgcmV0dXJuIGZldGNoQ29ycmlkb3JUcmFjZURhdGEobGF0LCBsb24sIGJlc3QuYywgZG9jcywgY2ZnLCBsb2cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gMS4gdHJhY2UgZ2VvbWV0cnkgKG9uZSBOTERJIGNhbGwpICsgVkFBIGJhdGNoIGpvaW5cclxuICBjb25zdCBbY29taWQsIHNuYXBOYW1lLCBzbmFwRF0gPSBhd2FpdCBzbmFwQ29taWQobGF0LCBsb24sIGNmZy5taW5TdHJlYW1PcmRlcik7XHJcbiAgbG9nKGAgIENPTUlEICR7Y29taWR9YCArIChzbmFwTmFtZSA/IGAgKCR7c25hcE5hbWV9LCBzbmFwcGVkICR7KHNuYXBEIC8gMTAwMCkudG9GaXhlZCgyKX0ga20pYCA6IFwiXCIpKTtcclxuICBjb25zdCBnZW9tcyA9IGF3YWl0IG5sZGlEbUZsb3dsaW5lcyhjb21pZCwgY2ZnLm1heERpc3RhbmNlS20pO1xyXG4gIGxvZyhgICBOTERJIERNIGZsb3dsaW5lczogJHtnZW9tcy5zaXplfWApO1xyXG4gIGNvbnN0IHZhYSA9IGF3YWl0IHZhYUJhdGNoKFsuLi5nZW9tcy5rZXlzKCldKTtcclxuICBjb25zdCBbcHRzLCByaXZlck5hbWVdID0gYXNzZW1ibGVUcmFjZShsYXQsIGxvbiwgZ2VvbXMsIHZhYSwgY2ZnLnJlc29sdXRpb25NLCBsb2cpO1xyXG4gIGlmIChwdHMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKFwidHJhY2UgdG9vIHNob3J0XCIpO1xyXG5cclxuICAvLyBwZXItcG9pbnQgYXJyYXlzIChtaXJyb3JzIHRoZSBEYXRhRnJhbWUpXHJcbiAgY29uc3QgbiA9IHB0cy5sZW5ndGg7XHJcbiAgY29uc3Qgcm93cyA9IHB0cy5tYXAoKHApID0+ICh7IC4uLnAgfSkpO1xyXG4gIHJvd3NbMF0uZGlzdGFuY2UgPSAwLjA7XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBuOyBpKyspIHtcclxuICAgIHJvd3NbaV0uZGlzdGFuY2UgPSBoYXZlcnNpbmVNKHJvd3NbaSAtIDFdLmxhdCwgcm93c1tpIC0gMV0ubG9uLCByb3dzW2ldLmxhdCwgcm93c1tpXS5sb24pO1xyXG4gIH1cclxuICBsZXQgY3VtID0gMC4wO1xyXG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7IGN1bSArPSByLmRpc3RhbmNlOyByLmN1bV9kaXN0ID0gY3VtOyB9XHJcbiAgZm9yIChjb25zdCByIG9mIHJvd3MpIHIuZHJhaW5hZ2VfYXJlYV9zcW1pID0gci5kcmFpbmFnZV9hcmVhX2ttMiAqIDAuMzg2MTAyO1xyXG5cclxuICAvLyAyLiB3aWR0aHM6IGZvcm11bGEgYmFzZWxpbmUsIG9wdGlvbmFsIG92ZXJyaWRlIHByb3ZpZGVyLCAyeCBjYXAsIGJhY2t3YXJkIHNtb290aGluZ1xyXG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7XHJcbiAgICByLmZvcm11bGFfd2lkdGggPSBlc3RpbWF0ZUdlb21ldHJ5UGF5dG9uKHIuZHJhaW5hZ2VfYXJlYV9zcW1pKVswXTtcclxuICAgIHIud2lkdGhfbSA9IDAuMDtcclxuICB9XHJcbiAgLy8gYnJhaWRlZC1yZWFjaCBmbGFnOiBhbnkgTkhEUGx1cyBkaXZlcmdlbmNlIHdpdGhpbiB+MSBrbSAoMTAgcm93cykgw6LigqzigJ0gR0xPVyB3aWR0aHNcclxuICAvLyB0aGVyZSBtZWFzdXJlIHRvdGFsIHdldHRlZCB3aWR0aCBhY3Jvc3MgYmFycywgaW5mbGF0aW5nIEEgYW5kIGtpbGxpbmcgdmVsb2NpdHlcclxuICB7XHJcbiAgICBjb25zdCBXID0gMTA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICBsZXQgYnJhaWRlZCA9IGZhbHNlO1xyXG4gICAgICBmb3IgKGxldCBrID0gTWF0aC5tYXgoMCwgaSAtIFcpOyBrIDw9IE1hdGgubWluKG4gLSAxLCBpICsgVyk7IGsrKykge1xyXG4gICAgICAgIGlmIChyb3dzW2tdLmRpdmVyZ2VuY2UgPiAwKSB7IGJyYWlkZWQgPSB0cnVlOyBicmVhazsgfVxyXG4gICAgICB9XHJcbiAgICAgIHJvd3NbaV0uYnJhaWRlZCA9IGJyYWlkZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuYiA9IHJvd3MuZmlsdGVyKChyKSA9PiByLmJyYWlkZWQpLmxlbmd0aDtcclxuICAgIGlmIChuYikgbG9nKGAgIGJyYWlkZWQgZmxhZzogJHtuYn0vJHtufSB0cmFjZSBwb2ludHMgbmVhciBjaGFubmVsIGRpdmVyZ2VuY2VzIChHTE9XIG92ZXJyaWRlIGRpc2FibGVkIHRoZXJlKWApO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNmZy53aWR0aFByb3ZpZGVyKSB7XHJcbiAgICAvLyBIUiBOSERQbHVzSUQgIT0gTVIgY29taWQgw6LigqzigJ0gc2FtcGxlIHNwYXRpYWxseSwgaW4gd2luZG93czsgbmV2ZXIgbGV0IHRoZVxyXG4gICAgLy8gb3ZlcnJpZGUga2lsbCB0aGUgcnVuIChkZWdyYWRlIHRvIGZvcm11bGEgd2lkdGhzKS5cclxuICAgIGxldCBtaWRzID0gW107XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBTVEVQID0gY2ZnLndpZHRoV2luZG93UG9pbnRzO1xyXG4gICAgICBjb25zdCBwYWQgPSAwLjAzO1xyXG4gICAgICBmb3IgKGxldCBpMCA9IDA7IGkwIDwgbjsgaTAgKz0gU1RFUCkge1xyXG4gICAgICAgIGNvbnN0IHdpbiA9IHJvd3Muc2xpY2UoaTAsIGkwICsgU1RFUCk7XHJcbiAgICAgICAgY29uc3QgZW52ID0ge1xyXG4gICAgICAgICAgeG1pbjogTWF0aC5taW4oLi4ud2luLm1hcCgocikgPT4gci5sb24pKSAtIHBhZCxcclxuICAgICAgICAgIHltaW46IE1hdGgubWluKC4uLndpbi5tYXAoKHIpID0+IHIubGF0KSkgLSBwYWQsXHJcbiAgICAgICAgICB4bWF4OiBNYXRoLm1heCguLi53aW4ubWFwKChyKSA9PiByLmxvbikpICsgcGFkLFxyXG4gICAgICAgICAgeW1heDogTWF0aC5tYXgoLi4ud2luLm1hcCgocikgPT4gci5sYXQpKSArIHBhZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGZlYXRzID0gYXdhaXQgY2ZnLndpZHRoUHJvdmlkZXIoZW52KTsgLy8gW3tsYXQsIGxvbiwgd2lkdGh9XVxyXG4gICAgICAgIG1pZHMucHVzaCguLi5mZWF0cyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgbG9nKGAgIFdJRFRIIE9WRVJSSURFIEZBSUxFRCAoJHtTdHJpbmcoZSkuc2xpY2UoMCwgODApfSkgLSBmYWxsaW5nIGJhY2sgdG8gZm9ybXVsYSB3aWR0aHNgKTtcclxuICAgICAgbWlkcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKG1pZHMubGVuZ3RoKSB7XHJcbiAgICAgIGZvciAoY29uc3QgciBvZiByb3dzKSB7XHJcbiAgICAgICAgaWYgKHIuYnJhaWRlZCkgeyByLndpZHRoX20gPSAwLjA7IGNvbnRpbnVlOyB9IC8vIGZvcm11bGEgd2lkdGggb24gYnJhaWRlZCByZWFjaGVzXHJcbiAgICAgICAgbGV0IGJlc3REID0gSW5maW5pdHksIGJlc3RXID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IG0gb2YgbWlkcykge1xyXG4gICAgICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0oci5sYXQsIHIubG9uLCBtLmxhdCwgbS5sb24pO1xyXG4gICAgICAgICAgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGJlc3RXID0gbS53aWR0aCB8fCAwOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHIud2lkdGhfbSA9IGJlc3REIDw9IGNmZy53aWR0aFNhbXBsZVJhZGl1c00gPyBiZXN0VyA6IDAuMDtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtYXRjaGVkID0gcm93cy5maWx0ZXIoKHIpID0+IHIud2lkdGhfbSA+IDApLmxlbmd0aDtcclxuICAgICAgbG9nKGAgIEdMT1cgc3BhdGlhbCBzYW1wbGU6ICR7bWlkcy5sZW5ndGh9IEhSIHNlZ21lbnRzLCB3aWR0aHMgbWF0Y2hlZCBhdCAke21hdGNoZWR9LyR7bn0gdHJhY2UgcG9pbnRzYCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7XHJcbiAgICByLndpZHRoX2ZpbmFsX3JhdyA9XHJcbiAgICAgIHIud2lkdGhfbSA+IDAgJiYgci53aWR0aF9tIDw9IHIuZm9ybXVsYV93aWR0aCAqIDIuMCA/IHIud2lkdGhfbSA6IHIuZm9ybXVsYV93aWR0aDtcclxuICB9XHJcbiAgLy8gcGFuZGFzIHJvbGxpbmcod2luZG93PTUxLCBtaW5fcGVyaW9kcz0xKS5tZWFuKCkgw6LigqzigJ0gdHJhaWxpbmcgd2luZG93XHJcbiAge1xyXG4gICAgY29uc3QgVyA9IDUxO1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICBzdW0gKz0gcm93c1tpXS53aWR0aF9maW5hbF9yYXc7XHJcbiAgICAgIGlmIChpID49IFcpIHN1bSAtPSByb3dzW2kgLSBXXS53aWR0aF9maW5hbF9yYXc7XHJcbiAgICAgIHJvd3NbaV0ud2lkdGhfZmluYWwgPSBzdW0gLyBNYXRoLm1pbihpICsgMSwgVyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAzLiBkaXNjaGFyZ2UgaW5wdXRzOiBOTERJIGRvd25zdHJlYW0gZ2F1Z2VzIC0+IE5XSVMgUSAoK0RBKSwgbG9jYXRlZCBvbiB0cmFjZVxyXG4gIGNvbnN0IGdhdWdlcyA9IGF3YWl0IG5sZGlHYXVnZXMoY29taWQsIGNmZy5tYXhEaXN0YW5jZUttLCBcIkRNXCIpO1xyXG4gIC8vIHVwc3RyZWFtLWFuY2hvciBjYW5kaWRhdGVzOiBuZWFyZXN0IFVNIGdhdWdlcyAoZml4ZXMgdGhlIGRpc2NvbnRpbnVpdHkgd2hlblxyXG4gIC8vIHRoZSBjbGljayBpcyBqdXN0IGJlbG93IGEgZ2F1Z2UgYW5kIERNIG5hdmlnYXRpb24gbm8gbG9uZ2VyIHNlZXMgaXQpXHJcbiAgbGV0IHVwQ2FuZHMgPSBbXTtcclxuICBpZiAoY2ZnLnVwc3RyZWFtR2F1Z2VLbSA+IDApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRtSWRzID0gbmV3IFNldChnYXVnZXMubWFwKChnKSA9PiBnLnN0YXRpb25faWQpKTtcclxuICAgICAgdXBDYW5kcyA9IChhd2FpdCBubGRpR2F1Z2VzKGNvbWlkLCBjZmcudXBzdHJlYW1HYXVnZUttLCBcIlVNXCIpKVxyXG4gICAgICAgIC5maWx0ZXIoKHUpID0+ICFkbUlkcy5oYXModS5zdGF0aW9uX2lkKSlcclxuICAgICAgICAubWFwKCh1KSA9PiAoeyAuLi51LCB1cHN0cmVhbV9tOiBoYXZlcnNpbmVNKGxhdCwgbG9uLCB1LmxhdCwgdS5sb24pIH0pKVxyXG4gICAgICAgIC5maWx0ZXIoKHUpID0+IHUudXBzdHJlYW1fbSA8PSBjZmcudXBzdHJlYW1HYXVnZUttICogMTAwMClcclxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS51cHN0cmVhbV9tIC0gYi51cHN0cmVhbV9tKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgbG9nKGAgIFVNIGdhdWdlIGxvb2t1cCBmYWlsZWQgKCR7U3RyaW5nKGUpLnNsaWNlKDAsIDgwKX0pIMOi4oKs4oCdIG5vIHVwc3RyZWFtIGFuY2hvcmApO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBhbGxJZHMgPSBbLi4ubmV3IFNldChbLi4uZ2F1Z2VzLCAuLi51cENhbmRzXS5tYXAoKGcpID0+IGcuc3RhdGlvbl9pZCkpXTtcclxuICBjb25zdCBnaW5mbyA9IGF3YWl0IGdhdWdlSW5mbyhhbGxJZHMsIGNmZy5hc09mLCBjZmcuZ2F1Z2VTdGF0RmFsbGJhY2spO1xyXG4gIGNvbnN0IGdkID0gW107XHJcbiAgZm9yIChjb25zdCBnIG9mIGdhdWdlcykge1xyXG4gICAgY29uc3QgaSA9IGdpbmZvLmdldChnLnN0YXRpb25faWQpIHx8IHt9O1xyXG4gICAgaWYgKGkuZGlzY2hhcmdlID09PSB1bmRlZmluZWQgfHwgIWkuZHJhaW5hZ2VfYXJlYSkgY29udGludWU7XHJcbiAgICBsZXQgYmVzdEQgPSBJbmZpbml0eSwgaWR4ID0gMDtcclxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XHJcbiAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmVNKHJvd3Nba10ubGF0LCByb3dzW2tdLmxvbiwgZy5sYXQsIGcubG9uKTtcclxuICAgICAgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGlkeCA9IGs7IH1cclxuICAgIH1cclxuICAgIGlmIChiZXN0RCA+IDUwMDApIGNvbnRpbnVlOyAvLyBnYXVnZSBub3Qgb24gb3VyIHRyYWNlIGNvcnJpZG9yXHJcbiAgICBjb25zdCBbdywgZGVwXSA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oaS5kcmFpbmFnZV9hcmVhKTtcclxuICAgIGdkLnB1c2goe1xyXG4gICAgICAuLi5nLCBkaXNjaGFyZ2U6IGkuZGlzY2hhcmdlLCBkcmFpbmFnZV9hcmVhOiBpLmRyYWluYWdlX2FyZWEsXHJcbiAgICAgIHFfc291cmNlOiBpLnFfc291cmNlIHx8IFwiaXZcIixcclxuICAgICAgYXJlYTogdyAqIGRlcCwgdHJhY2VfZGlzdDogcm93c1tpZHhdLmN1bV9kaXN0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGdkLnNvcnQoKGEsIGIpID0+IGEudHJhY2VfZGlzdCAtIGIudHJhY2VfZGlzdCk7XHJcbiAgLy8gbWVkaWFuLWZsb3cgZ2F1Z2VzIGFyZSBhIHJlc2N1ZSwgbm90IGEgc3VwcGxlbWVudDogd2l0aCBBTlkgbGl2ZSBnYXVnZSBvblxyXG4gIC8vIHRoZSB0cmFjZSwgbGl2ZS1vbmx5IGludGVycG9sYXRpb24gYmVhdHMgc3BsaWNpbmcgYSBoaXN0b3JpY2FsIG1lZGlhbiBpbnRvXHJcbiAgLy8gdGhlIHByb2ZpbGUgKG1lZGlhbiAhPSB0b2RheSdzIGZsb3cgaW4gcnVub2ZmIG9yIGRyb3VnaHQpLiBUaGV5IGVuZ2FnZVxyXG4gIC8vIG9ubHkgb24gYSBmdWxsIGZlZWQgb3V0YWdlIG9yIGEgcHJlLUlWLWVyYSBhc09mIGRhdGUuXHJcbiAgaWYgKGdkLnNvbWUoKGcpID0+IGcucV9zb3VyY2UgPT09IFwiaXZcIikgJiYgZ2Quc29tZSgoZykgPT4gZy5xX3NvdXJjZSA9PT0gXCJzdGF0LXA1MFwiKSkge1xyXG4gICAgY29uc3QgZHJvcHBlZCA9IGdkLmZpbHRlcigoZykgPT4gZy5xX3NvdXJjZSA9PT0gXCJzdGF0LXA1MFwiKS5tYXAoKGcpID0+IGcuc3RhdGlvbl9pZCk7XHJcbiAgICBsb2coYCAgbWVkaWFuLWZhbGxiYWNrIGdhdWdlcyBzdXBwcmVzc2VkIChsaXZlIGdhdWdlcyBhdmFpbGFibGUpOiAke2Ryb3BwZWQuam9pbihcIiwgXCIpfWApO1xyXG4gICAgZm9yIChsZXQgaSA9IGdkLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZ2RbaV0ucV9zb3VyY2UgPT09IFwic3RhdC1wNTBcIikgZ2Quc3BsaWNlKGksIDEpO1xyXG4gIH1cclxuICBjb25zdCBzcGlsbERhU3FtaSA9IHJvd3NbMF0uZHJhaW5hZ2VfYXJlYV9zcW1pO1xyXG4gIGZvciAoY29uc3QgdSBvZiB1cENhbmRzKSB7XHJcbiAgICBjb25zdCBpID0gZ2luZm8uZ2V0KHUuc3RhdGlvbl9pZCkgfHwge307XHJcbiAgICBpZiAoaS5kaXNjaGFyZ2UgPT09IHVuZGVmaW5lZCB8fCAhaS5kcmFpbmFnZV9hcmVhKSBjb250aW51ZTtcclxuICAgIC8vIHNhbWUgcmVzY3VlLW9ubHkgcnVsZSBmb3IgdGhlIHVwc3RyZWFtIGFuY2hvcjogbm8gbWVkaWFuIGFuY2hvcnMgd2hlblxyXG4gICAgLy8gbGl2ZSBnYXVnZXMgYXJlIG9uIHRoZSB0cmFjZVxyXG4gICAgaWYgKChpLnFfc291cmNlIHx8IFwiaXZcIikgPT09IFwic3RhdC1wNTBcIiAmJiBnZC5zb21lKChnKSA9PiBnLnFfc291cmNlID09PSBcIml2XCIpKSBjb250aW51ZTtcclxuICAgIGlmIChtZXJnZVVwc3RyZWFtQW5jaG9yKGdkLCB7IC4uLnUsIGRpc2NoYXJnZTogaS5kaXNjaGFyZ2UsIGRyYWluYWdlX2FyZWE6IGkuZHJhaW5hZ2VfYXJlYSwgcV9zb3VyY2U6IGkucV9zb3VyY2UgfHwgXCJpdlwiIH0sIHNwaWxsRGFTcW1pKSkge1xyXG4gICAgICBsb2coXHJcbiAgICAgICAgYCAgdXBzdHJlYW0gYW5jaG9yICR7dS5zdGF0aW9uX2lkfSAke3UubmFtZS5zbGljZSgwLCAzMCl9OiAke01hdGgucm91bmQoaS5kaXNjaGFyZ2UpfSBjZnMgYCArXHJcbiAgICAgICAgYEAgJHsodS51cHN0cmVhbV9tIC8gMTAwMCkudG9GaXhlZCgxKX0ga20gdXBzdHJlYW0gLT4gJHtNYXRoLnJvdW5kKGkuZGlzY2hhcmdlICogKHNwaWxsRGFTcW1pIC8gaS5kcmFpbmFnZV9hcmVhKSl9IGNmcyBgICtcclxuICAgICAgICBgYXQgc3BpbGwgcG9pbnQgKERBIHgkeyhzcGlsbERhU3FtaSAvIGkuZHJhaW5hZ2VfYXJlYSkudG9GaXhlZCgyKX0pYCxcclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAvLyBhbiBvbi10cmFjZSBnYXVnZSBuZWFyIHRoZSBzdGFydCBhbHJlYWR5IGFuY2hvcnMgdGhlIGJvdW5kYXJ5IMOi4oKs4oCdIHN0b3AgbG9va2luZ1xyXG4gICAgaWYgKGdkLnNvbWUoKGcpID0+ICFnLnVwc3RyZWFtX2FuY2hvciAmJiBnLnRyYWNlX2Rpc3QgPD0gNTAwKSkgYnJlYWs7XHJcbiAgfVxyXG4gIGZvciAoY29uc3QgZyBvZiBnZCkge1xyXG4gICAgbG9nKGAgIGdhdWdlICR7Zy5zdGF0aW9uX2lkfSAke2cubmFtZS5zbGljZSgwLCAzOCkucGFkRW5kKDM4KX0gJHtTdHJpbmcoTWF0aC5yb3VuZChnLmRpc2NoYXJnZSkpLnBhZFN0YXJ0KDgpfSBjZnMgQCAkeyhnLnRyYWNlX2Rpc3QgLyAxMDAwKS50b0ZpeGVkKDEpLnBhZFN0YXJ0KDYpfSBrbSR7Zy51cHN0cmVhbV9hbmNob3IgPyBcIiAodXBzdHJlYW0gYW5jaG9yKVwiIDogXCJcIn0ke2cucV9zb3VyY2UgPT09IFwic3RhdC1wNTBcIiA/IFwiIChNRURJQU4gZmFsbGJhY2spXCIgOiBcIlwifWApO1xyXG4gIH1cclxuXHJcbiAgLy8gNC4gc2l0ZS9yZWNlcHRvciBmZWF0dXJlcyAoZmV0Y2hlZCBpbiBwYXJhbGxlbDsgam9pbmVkIGluIGNvbXB1dGVUcmFjZSlcclxuICBjb25zdCBmZXRjaFNldHMgPSBhc3luYyAocHJvdmlkZXJzKSA9PiBQcm9taXNlLmFsbChcclxuICAgIChwcm92aWRlcnMgfHwgW10pLm1hcChhc3luYyAocCkgPT4gKHtcclxuICAgICAgYnVmZmVyX206IHAuYnVmZmVyX20gPz8gNDAwLFxyXG4gICAgICBmZWF0czogYXdhaXQgcC5mZXRjaCgpLCAvLyBbe25hbWUsIGxhdCwgbG9uLCAuLi5leHRyYX1dXHJcbiAgICB9KSksXHJcbiAgKTtcclxuICBjb25zdCBbc2l0ZVNldHMsIHJlY2VwdG9yU2V0c10gPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgIFtmZXRjaFNldHMoY2ZnLnNpdGVQcm92aWRlcnMpLCBmZXRjaFNldHMoY2ZnLnJlY2VwdG9yUHJvdmlkZXJzKV0sXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxhdCwgbG9uLCBjb21pZCwgc25hcE5hbWUsIHNuYXBEaXN0TTogc25hcEQsIHJpdmVyTmFtZSxcclxuICAgIHJvd3MsIGdkLCBzaXRlU2V0cywgcmVjZXB0b3JTZXRzLFxyXG4gICAgYXNPZjogY2ZnLmFzT2YgfHwgXCJsaXZlXCIsXHJcbiAgICBmZXRjaGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICB9O1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEpvYnNvbiAoVVNHUyBXUklSIDk2LTQwMTMpXHJcbi8vXHJcbi8vIER5ZS10cmFjZXIgcmVncmVzc2lvbnMgZnJvbSB+OTgwIHN1YnJlYWNoZXMgLyB+OTAgVVMgcml2ZXJzLiBVbml0czogRGEgbV4yLFxyXG4vLyBRICYgUWEgbV4zL3MsIFMgZGltZW5zaW9ubGVzcywgdmVsb2NpdGllcyBtL3MuIEVxIDEyLzEzICh3aXRoIHNsb3BlKSBvclxyXG4vLyAxNC8xNSAod2l0aG91dCkuIExlYWRpbmcgZWRnZSBUbCA9IDAuODkwIHggVHAgKGVxIDE4KS4gUGFzc2FnZTogdW5pdC1wZWFrXHJcbi8vIGNvbmNlbnRyYXRpb24gQ3VwID0gODU3IHggVHBeLTAuNzYwIHggUSdhXi0wLjA3OSAoVHAgaG91cnMsIGVxIDcpLCBhbmRcclxuLy8gVGQxMCA9IDJlNiAvIEN1cCBzZWNvbmRzIChlcSAxOSkgPSBsZWFkaW5nIGVkZ2UgLT4gMTAlLW9mLXBlYWsgdHJhaWxpbmcuXHJcbmV4cG9ydCBmdW5jdGlvbiBqb2Jzb25WZWxvY2l0aWVzKGRhTTIsIFFtM3MsIFFhTTNzLCBzbG9wZSkge1xyXG4gIGlmICghKGRhTTIgPiAwKSB8fCAhKFFtM3MgPiAwKSB8fCAhKFFhTTNzID4gMCkpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGcgPSA5Ljg7XHJcbiAgY29uc3QgRHAgPSAoTWF0aC5wb3coZGFNMiwgMS4yNSkgKiBNYXRoLnNxcnQoZykpIC8gUWFNM3M7IC8vIEQnYSwgZXEgMTBcclxuICBjb25zdCBRcCA9IFFtM3MgLyBRYU0zczsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFEnYSwgZXEgMTFcclxuICBjb25zdCBxT3ZlckRhID0gUW0zcyAvIGRhTTI7XHJcbiAgbGV0IHZwLCB2bXA7XHJcbiAgaWYgKHNsb3BlID4gMC4wMDAwMSkge1xyXG4gICAgY29uc3QgWCA9IE1hdGgucG93KERwLCAwLjkxOSkgKiBNYXRoLnBvdyhRcCwgLTAuNDY5KSAqIE1hdGgucG93KHNsb3BlLCAwLjE1OSkgKiBxT3ZlckRhO1xyXG4gICAgdnAgPSAwLjA5NCArIDAuMDE0MyAqIFg7ICAgLy8gZXEgMTJcclxuICAgIHZtcCA9IDAuMjUgKyAwLjAyICogWDsgICAgIC8vIGVxIDEzICg5OSUgZW52ZWxvcGUgw6LigqzigJ0gZmFzdGVzdCBwcm9iYWJsZSlcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgWCA9IE1hdGgucG93KERwLCAwLjgyMSkgKiBNYXRoLnBvdyhRcCwgLTAuNDY1KSAqIHFPdmVyRGE7XHJcbiAgICB2cCA9IDAuMDIwICsgMC4wNTEgKiBYOyAgICAvLyBlcSAxNFxyXG4gICAgdm1wID0gMC4yICsgMC4wOTMgKiBYOyAgICAgLy8gZXEgMTVcclxuICB9XHJcbiAgcmV0dXJuIHsgdnAsIHZtcCwgcVByaW1lOiBRcCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gam9ic29uUGFzc2FnZUhvdXJzKHRwSG91cnMsIHFQcmltZSkge1xyXG4gIC8vIGVxIDcgKyBlcSAxOTogZHVyYXRpb24gZnJvbSBsZWFkaW5nIGVkZ2UgdG8gMTAlLW9mLXBlYWsgdHJhaWxpbmcgZWRnZVxyXG4gIGlmICghKHRwSG91cnMgPiAwKSB8fCAhKHFQcmltZSA+IDApKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBjdXAgPSA4NTcgKiBNYXRoLnBvdyh0cEhvdXJzLCAtMC43NjApICogTWF0aC5wb3cocVByaW1lLCAtMC4wNzkpOyAvLyBzXi0xXHJcbiAgcmV0dXJuIDJlNiAvIGN1cCAvIDM2MDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlVHJhY2UoZGF0YSwgY29uZmlnID0ge30pIHtcclxuICBjb25zdCBjZmcgPSB7IC4uLkRFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfTtcclxuICBjb25zdCBsb2cgPSBjZmcudmVyYm9zZSA/ICguLi5hKSA9PiBjb25zb2xlLmxvZyguLi5hKSA6ICgpID0+IHt9O1xyXG4gIGNvbnN0IHsgY29taWQsIHJpdmVyTmFtZSwgcm93cywgZ2QsIHNpdGVTZXRzLCByZWNlcHRvclNldHMgfSA9IGRhdGE7XHJcbiAgY29uc3QgbiA9IHJvd3MubGVuZ3RoO1xyXG5cclxuICAvLyA1LiBkaXNjaGFyZ2U6IGludGVycG9sYXRlIGFsb25nIHRyYWNlXHJcbiAgLy8gbW9udGggZm9yIEVST00gbG9va3VwczogYXNfb2YgbW9udGggaWYgcGlubmVkLCBlbHNlIGN1cnJlbnRcclxuICBjb25zdCBlcm9tTW9udGggPSBkYXRhLmFzT2YgJiYgZGF0YS5hc09mICE9PSBcImxpdmVcIlxyXG4gICAgPyBwYXJzZUludChkYXRhLmFzT2Yuc2xpY2UoNSwgNyksIDEwKVxyXG4gICAgOiBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxO1xyXG5cclxuICBsZXQgcU1ldGhvZCwgcUNvbmZpZGVuY2U7XHJcbiAgY29uc3QgYW5jaG9yZWQgPSBnZC5zb21lKChnKSA9PiBnLnVwc3RyZWFtX2FuY2hvcik7XHJcbiAgbGV0IHFJbnRlcnBVc2VkID0gbnVsbDtcclxuICBpZiAoZ2QubGVuZ3RoID49IDIpIHtcclxuICAgIGNvbnN0IGRhUSA9IGNmZy5xSW50ZXJwID09PSBcImRyYWluYWdlLWFyZWFcIiA/IGRhV2VpZ2h0ZWRRKGdkKSA6IG51bGw7XHJcbiAgICBpZiAoZGFRKSB7XHJcbiAgICAgIC8vIGludGVycG9sYXRlIG9uIHRoZSBydW5uaW5nLW1heCBEQTogQXJ0aWZpY2lhbFBhdGgvZGl2ZXJnZW5jZSByZWFjaGVzIGNhblxyXG4gICAgICAvLyBjYXJyeSAwL2RpcHBpbmcgdG90ZGFzcWttLCB3aGljaCBtdXN0IG5vdCBjcmF0ZXIgUSBtaWQtdHJhY2VcclxuICAgICAgaWYgKGRhUS5rZXB0Lmxlbmd0aCA8IGdkLmxlbmd0aClcclxuICAgICAgICBsb2coYCAgREEgaW50ZXJwOiBkcm9wcGVkICR7Z2QubGVuZ3RoIC0gZGFRLmtlcHQubGVuZ3RofSBnYXVnZShzKSB3aXRoIG5vbi1tb25vdG9uaWMgTldJUyBEQWApO1xyXG4gICAgICBsZXQgcnVuTWF4ID0gMDtcclxuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcclxuICAgICAgICBydW5NYXggPSBNYXRoLm1heChydW5NYXgsIHIuZHJhaW5hZ2VfYXJlYV9zcW1pKTtcclxuICAgICAgICByLlFfY2ZzID0gTWF0aC5tYXgoZGFRLnEocnVuTWF4KSwgMS4wKTtcclxuICAgICAgfVxyXG4gICAgICBxTWV0aG9kID0gYW5jaG9yZWQgPyBcImdhdWdlLURBLWludGVycG9sYXRpb24rdXBzdHJlYW0tYW5jaG9yXCIgOiBcImdhdWdlLURBLWludGVycG9sYXRpb25cIjtcclxuICAgICAgcUludGVycFVzZWQgPSBcImRyYWluYWdlLWFyZWFcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChjZmcucUludGVycCA9PT0gXCJkcmFpbmFnZS1hcmVhXCIpXHJcbiAgICAgICAgbG9nKFwiICBEQSBpbnRlcnAgdW5hdmFpbGFibGUgKDwyIG1vbm90b25pYyBnYXVnZSBEQXMpIMOi4oKs4oCdIGZhbGxpbmcgYmFjayB0byBkaXN0YW5jZSBpbnRlcnBvbGF0aW9uXCIpO1xyXG4gICAgICBjb25zdCBmUSA9IGludGVycENsYW1wZWQoZ2QubWFwKChnKSA9PiBnLnRyYWNlX2Rpc3QpLCBnZC5tYXAoKGcpID0+IGcuZGlzY2hhcmdlKSk7XHJcbiAgICAgIGZvciAoY29uc3QgciBvZiByb3dzKSByLlFfY2ZzID0gTWF0aC5tYXgoZlEoci5jdW1fZGlzdCksIDEuMCk7XHJcbiAgICAgIHFNZXRob2QgPSBhbmNob3JlZCA/IFwiZ2F1Z2UtaW50ZXJwb2xhdGlvbit1cHN0cmVhbS1hbmNob3JcIiA6IFwiZ2F1Z2UtaW50ZXJwb2xhdGlvblwiO1xyXG4gICAgICBxSW50ZXJwVXNlZCA9IFwiZGlzdGFuY2VcIjtcclxuICAgIH1cclxuICAgIHFDb25maWRlbmNlID0gXCJISUdIXCI7XHJcbiAgfSBlbHNlIGlmIChnZC5sZW5ndGggPT09IDEpIHtcclxuICAgIGNvbnN0IGcgPSBnZFswXTtcclxuICAgIGZvciAoY29uc3QgciBvZiByb3dzKSB7XHJcbiAgICAgIHIuUV9jZnMgPSBNYXRoLm1heChnLmRpc2NoYXJnZSAqIChyLmRyYWluYWdlX2FyZWFfc3FtaSAvIGcuZHJhaW5hZ2VfYXJlYSksIDEuMCk7XHJcbiAgICB9XHJcbiAgICBxTWV0aG9kID0gYW5jaG9yZWQgPyBcInVwc3RyZWFtLWFuY2hvci1EQS1yYXRpb1wiIDogXCJzaW5nbGUtZ2F1Z2UtREEtcmF0aW9cIjtcclxuICAgIHFDb25maWRlbmNlID0gXCJNRURJVU1cIjtcclxuICAgIGxvZyhcIiAgMSBnYXVnZTogc2NhbGluZyBieSBkcmFpbmFnZS1hcmVhIHJhdGlvXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBFUk9NIHBlci1yZWFjaCBtb250aGx5IG1vZGVsZWQgZmxvdyAoZ2F1Z2UtYWRqdXN0ZWQ7IGNhcHR1cmVzIHNlYXNvbmFsXHJcbiAgICAvLyB5aWVsZCDDouKCrOKAnSBNb250YW5hIEp1bmUgdnMgU2VwdGVtYmVyIGRpZmZlcnMgfjV4KSBiZWZvcmUgdGhlIGZsYXQgY29uc3RhbnRcclxuICAgIGNvbnN0IGVyb21PayA9IHJvd3MuZmlsdGVyKChyKSA9PiByLnFlX21vbnRobHkgJiYgci5xZV9tb250aGx5W2Vyb21Nb250aF0gPiAwKS5sZW5ndGg7XHJcbiAgICBpZiAoZXJvbU9rID49IHJvd3MubGVuZ3RoICogMC44KSB7XHJcbiAgICAgIGZvciAoY29uc3QgciBvZiByb3dzKSB7XHJcbiAgICAgICAgY29uc3QgcWUgPSByLnFlX21vbnRobHkgPyByLnFlX21vbnRobHlbZXJvbU1vbnRoXSA6IG51bGw7XHJcbiAgICAgICAgci5RX2NmcyA9IE1hdGgubWF4KHFlID4gMCA/IHFlIDogci5kcmFpbmFnZV9hcmVhX3NxbWkgKiAyLjAsIDEuMCk7XHJcbiAgICAgIH1cclxuICAgICAgcU1ldGhvZCA9IGBlcm9tLW1vbnRobHkgKG1vbnRoICR7ZXJvbU1vbnRofSlgOyBxQ29uZmlkZW5jZSA9IFwiTU9ERVJBVEUgw6LigqzigJ0gbW9kZWxlZCBmbG93LCBubyBsaXZlIGdhdWdlXCI7XHJcbiAgICAgIGxvZyhgICBOTyBnYXVnZXM6IEVST00gbW9udGhseSBtb2RlbGVkIGZsb3cgKG1vbnRoICR7ZXJvbU1vbnRofSwgJHtlcm9tT2t9LyR7cm93cy5sZW5ndGh9IHJlYWNoZXMpYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGNvbnN0IHIgb2Ygcm93cykgci5RX2NmcyA9IE1hdGgubWF4KHIuZHJhaW5hZ2VfYXJlYV9zcW1pICogMi4wLCAxLjApO1xyXG4gICAgICBxTWV0aG9kID0gXCJkcmFpbmFnZS1hcmVhLWNvbnN0YW50XCI7IHFDb25maWRlbmNlID0gXCJMT1cgQ09ORklERU5DRSDDouKCrOKAnSBOTyBHQVVHRVwiO1xyXG4gICAgICBsb2coXCIgIE5PIGdhdWdlcywgbm8gRVJPTTogUSB+IDIgY2ZzIHBlciBzcSBtaSBkcmFpbmFnZSDDouKCrOKAnSBMT1cgQ09ORklERU5DRVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIDQuIE1hbm5pbmcncyBkZXB0aCBwZXIgcG9pbnQgKGZvcm11bGEgZmFsbGJhY2spLCBWID0gUS9BLCBzYWZldHkgZmFjdG9yLlxyXG4gIC8vIENvcnJpZG9yIHJvd3MgbWF5IGNhcnJ5IGFuIGF1dGhvcmVkIGRlcHRoX292ZXJyaWRlIChzdXJ2ZXllZC9jaGFydGVkXHJcbiAgLy8gZGVwdGggw6LigqzigJ0gZS5nLiB0aWRhbCByZWFjaGVzIHdoZXJlIGFuIGVuZXJneSBzbG9wZSBpcyBtZWFuaW5nbGVzcykuXHJcbiAgY29uc3QgQ0ZTX1RPX00zUyA9IE1hdGgucG93KDMuMjgxLCAzKTtcclxuICBsZXQgb2sgPSAwO1xyXG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7XHJcbiAgICByLlFfbTNzID0gci5RX2NmcyAvIENGU19UT19NM1M7XHJcbiAgICBjb25zdCBkZXB0aEZvcm11bGEgPSBlc3RpbWF0ZUdlb21ldHJ5UGF5dG9uKHIuZHJhaW5hZ2VfYXJlYV9zcW1pKVsxXTtcclxuICAgIGlmIChyLmRlcHRoX292ZXJyaWRlID4gMCkgeyByLmRlcHRoID0gci5kZXB0aF9vdmVycmlkZTsgb2srKzsgci5hcmVhID0gci53aWR0aF9maW5hbCAqIHIuZGVwdGg7IHIudmVsb2NpdHkgPSAoci5RX20zcyAvIHIuYXJlYSkgKiBjZmcuc2FmZXR5RmFjdG9yOyBjb250aW51ZTsgfVxyXG4gICAgY29uc3QgZG0gPSBjYWxjdWxhdGVEZXB0aE1hbm5pbmcoci5RX20zcywgci53aWR0aF9maW5hbCwgci5zbG9wZSwgY2ZnLm1hbm5pbmdOKTtcclxuICAgIGlmIChkbSAhPT0gbnVsbCAmJiBkbSA+IDAuMSAmJiBkbSA8IDIwKSB7IHIuZGVwdGggPSBkbTsgb2srKzsgfVxyXG4gICAgZWxzZSByLmRlcHRoID0gZGVwdGhGb3JtdWxhO1xyXG4gICAgci5hcmVhID0gci53aWR0aF9maW5hbCAqIHIuZGVwdGg7XHJcbiAgICByLnZlbG9jaXR5ID0gKHIuUV9tM3MgLyByLmFyZWEpICogY2ZnLnNhZmV0eUZhY3RvcjtcclxuICB9XHJcbiAgbG9nKGAgIE1hbm5pbmcncyBkZXB0aDogJHtva30vJHtufSBwb2ludHMgKCR7TWF0aC5yb3VuZCgoMTAwICogb2spIC8gbil9JSlgKTtcclxuXHJcbiAgLy8gNS4gaW1wb3VuZG1lbnQgcnVsZTogZmxvd2xpbmUgcGFzc2VzIHRocm91Z2ggYSBMYWtlUG9uZC9SZXNlcnZvaXIgd2F0ZXJib2R5XHJcbiAgLy8gKG1pbnVzIGtub3duIFJFTU9WRUQgZGFtcyB3aG9zZSB3YXRlcmJvZHkgZmxhZ3MgbGluZ2VyIGluIE5IRFBsdXMpXHJcbiAgY29uc3QgZXhjbHVkZWQgPSBuZXcgU2V0KFsuLi5SRU1PVkVEX0lNUE9VTkRNRU5UX0NPTUlEUywgLi4uKGNmZy5pbXBvdW5kRXhjbHVkZUNvbWlkcyB8fCBbXSldKTtcclxuICBsZXQgc3RvcElkeCA9IG51bGwsIHJ1bk0gPSAwLjA7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBpbXAgPSAocm93c1tpXS53YmFyZWF0eXBlID09PSBcIkxha2VQb25kXCIgfHwgcm93c1tpXS53YmFyZWF0eXBlID09PSBcIlJlc2Vydm9pclwiKSAmJlxyXG4gICAgICAhZXhjbHVkZWQuaGFzKHJvd3NbaV0uY29taWQpO1xyXG4gICAgcm93c1tpXS5pbXBvdW5kZWQgPSBpbXA7XHJcbiAgICBpZiAoaW1wKSB7XHJcbiAgICAgIHJ1bk0gKz0gcm93c1tpXS5kaXN0YW5jZTtcclxuICAgICAgaWYgKHJ1bk0gPj0gY2ZnLmltcG91bmRTdG9wS20gKiAxMDAwKSB7IHN0b3BJZHggPSBpOyBicmVhazsgfVxyXG4gICAgfSBlbHNlIHJ1bk0gPSAwLjA7XHJcbiAgfVxyXG4gIGxldCBpbXBvdW5kTm90ZSA9IG51bGw7XHJcbiAgbGV0IGRmID0gcm93cztcclxuICBpZiAoc3RvcElkeCAhPT0gbnVsbCkge1xyXG4gICAgY29uc3QgbmFtZSA9IHJvd3Nbc3RvcElkeF0uZ25pc19uYW1lIHx8IFwiaW1wb3VuZG1lbnRcIjtcclxuICAgIGltcG91bmROb3RlID1cclxuICAgICAgYFRyYWNlIHJlYWNoZXMgYW4gaW1wb3VuZGVkIHJlYWNoICgke25hbWV9KSBhdCBgICtcclxuICAgICAgYCR7KHJvd3Nbc3RvcElkeF0uY3VtX2Rpc3QgLyAxMDAwKS50b0ZpeGVkKDEpfSBrbSDDouKCrOKAnSB0cmF2ZWwgdGltZSBiZXlvbmQgYCArXHJcbiAgICAgIGB0aGlzIHBvaW50IGlzIE5PVCBtb2RlbGVkIChyZXNlcnZvaXIgdHJhbnNpdCkuYDtcclxuICAgIGRmID0gcm93cy5zbGljZSgwLCBzdG9wSWR4ICsgMSk7XHJcbiAgICBsb2coYCAgSU1QT1VORE1FTlQgU1RPUDogJHtpbXBvdW5kTm90ZX1gKTtcclxuICB9XHJcblxyXG4gIC8vIDYuIHRyYXZlbCB0aW1lLCBjdXRvZmYsIGhvdXJseSBtYXJrZXJzXHJcbiAgY29uc3Qgam9ic29uID0gY2ZnLnRpbWluZ01vZGVsID09PSBcImpvYnNvblwiO1xyXG4gIGNvbnN0IENGUyA9IE1hdGgucG93KDMuMjgxLCAzKTtcclxuICBsZXQgY3VtVCA9IDAuMCwgdFBlYWsgPSAwLjAsIHRGYXN0ID0gMC4wLCBqb2Jzb25EZWdyYWRlZCA9IDA7XHJcbiAgZm9yIChjb25zdCByIG9mIGRmKSB7XHJcbiAgICByLnNlZ190aW1lID0gci5kaXN0YW5jZSAvIHIudmVsb2NpdHk7XHJcbiAgICBjdW1UICs9IHIuc2VnX3RpbWU7XHJcbiAgICByLmN1bV90aW1lID0gY3VtVCAvIDM2MDA7IC8vIGh5ZHJhdWxpYyAoeCBzYWZldHkpIMOi4oKs4oCdIGFsd2F5cyBjb21wdXRlZDsgZmVlZHMgbGVnYWN5IG1vZGVcclxuICAgIGlmIChqb2Jzb24pIHtcclxuICAgICAgY29uc3QgZGFNMiA9IChyLmRyYWluYWdlX2FyZWFfa20yIHx8IDApICogMWU2O1xyXG4gICAgICBjb25zdCBRYU0zcyA9IHIucWVfbWEgPiAwID8gci5xZV9tYSAvIENGUyA6IG51bGw7XHJcbiAgICAgIGNvbnN0IGp2ID0gUWFNM3MgPyBqb2Jzb25WZWxvY2l0aWVzKGRhTTIsIHIuUV9tM3MsIFFhTTNzLCByLnNsb3BlKSA6IG51bGw7XHJcbiAgICAgIGxldCB2cCwgdm1wLCBxUHJpbWU7XHJcbiAgICAgIGlmIChqdikgeyAoeyB2cCwgdm1wLCBxUHJpbWUgfSA9IGp2KTsgfVxyXG4gICAgICBlbHNlIHsgdnAgPSByLnZlbG9jaXR5IC8gY2ZnLnNhZmV0eUZhY3Rvcjsgdm1wID0gdnAgKiAyOyBxUHJpbWUgPSAxOyBqb2Jzb25EZWdyYWRlZCsrOyB9XHJcbiAgICAgIHRQZWFrICs9IHIuZGlzdGFuY2UgLyB2cDtcclxuICAgICAgdEZhc3QgKz0gci5kaXN0YW5jZSAvIHZtcDtcclxuICAgICAgci50X3BlYWsgPSB0UGVhayAvIDM2MDA7XHJcbiAgICAgIHIudF9sZWFkID0gMC44OTAgKiByLnRfcGVhazsgICAgICAgICAgICAgIC8vIGVxIDE4IMOi4oKs4oCdIG1vc3QgcHJvYmFibGUgZmlyc3QgYXJyaXZhbFxyXG4gICAgICByLnRfbGVhZF9taW4gPSAwLjg5MCAqICh0RmFzdCAvIDM2MDApOyAgICAvLyA5OSUgZW52ZWxvcGUgw6LigqzigJ0gZWFybGllc3QgY3JlZGlibGUgYXJyaXZhbFxyXG4gICAgICBjb25zdCB0ZDEwID0gam9ic29uUGFzc2FnZUhvdXJzKHIudF9wZWFrLCBxUHJpbWUpO1xyXG4gICAgICByLnRfY2xlYXIgPSB0ZDEwICE9PSBudWxsID8gci50X2xlYWQgKyB0ZDEwIDogbnVsbDsgLy8gMTAlLW9mLXBlYWsgdHJhaWxpbmcgZWRnZVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoam9ic29uICYmIGpvYnNvbkRlZ3JhZGVkKSBsb2coYCAgSm9ic29uOiAke2pvYnNvbkRlZ3JhZGVkfSBwb2ludHMgbGFja2VkIEVST00gUWEgKGh5ZHJhdWxpYyBmYWxsYmFjaylgKTtcclxuICBjb25zdCB0aW1lT2YgPSAocikgPT4gKGpvYnNvbiA/IHIudF9sZWFkIDogci5jdW1fdGltZSk7XHJcbiAgLy8gd2hlcmUgKyB3aGVuIHRoZSBwbHVtZSBlbnRlcnMgdGhlIGltcG91bmRtZW50IMOi4oKs4oCdIHNlZWRzIHRoZSBvcGVuLXdhdGVyXHJcbiAgLy8gY29udGludWF0aW9uICh2MS43KS4gVGltaW5nIGZpZWxkcyBleGlzdCBvbiByb3dzW3N0b3BJZHhdIGJlY2F1c2UgZGYgd2FzXHJcbiAgLy8gc2xpY2VkIGZyb20gcm93cyAoc2hhcmVkIHJlZmVyZW5jZXMpIGJlZm9yZSB0aGUgdGltZSBjdXRvZmYgYmVsb3cuXHJcbiAgbGV0IGltcG91bmRTdG9wUG9pbnQgPSBudWxsO1xyXG4gIGlmIChzdG9wSWR4ICE9PSBudWxsKSB7XHJcbiAgICBjb25zdCBzciA9IHJvd3Nbc3RvcElkeF07XHJcbiAgICBjb25zdCBldGFTdG9wID0gdGltZU9mKHNyKTtcclxuICAgIGlmIChldGFTdG9wICE9PSB1bmRlZmluZWQgJiYgZXRhU3RvcCA8IGNmZy5tYXhIb3Vycykge1xyXG4gICAgICBpbXBvdW5kU3RvcFBvaW50ID0ge1xyXG4gICAgICAgIGxhdDogc3IubGF0LCBsb246IHNyLmxvbixcclxuICAgICAgICBldGFfaHI6IE1hdGgucm91bmQoZXRhU3RvcCAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgbmFtZTogc3IuZ25pc19uYW1lIHx8IFwiaW1wb3VuZG1lbnRcIixcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbiAgZGYgPSBkZi5maWx0ZXIoKHIpID0+IHRpbWVPZihyKSA8IGNmZy5tYXhIb3Vycyk7XHJcbiAgY29uc3QgbWF4Q3VtVGltZSA9IGRmLmxlbmd0aCA/IHRpbWVPZihkZltkZi5sZW5ndGggLSAxXSkgOiAwO1xyXG4gIGNvbnN0IG5lYXJlc3RSb3cgPSAoZmllbGQsIHRhcmdldCkgPT4ge1xyXG4gICAgbGV0IGJlc3REID0gSW5maW5pdHksIGkgPSAwO1xyXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBkZi5sZW5ndGg7IGsrKykge1xyXG4gICAgICBjb25zdCBkID0gTWF0aC5hYnMoZGZba11bZmllbGRdIC0gdGFyZ2V0KTtcclxuICAgICAgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGkgPSBrOyB9IC8vIGZpcnN0IG9jY3VycmVuY2Ugb2YgbWluIChwYW5kYXMgaWR4bWluKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGk7XHJcbiAgfTtcclxuICBjb25zdCBob3VybHkgPSBbXTtcclxuICBmb3IgKGxldCBob3VyID0gMTsgaG91ciA8PSBjZmcubWF4SG91cnM7IGhvdXIrKykge1xyXG4gICAgaWYgKG1heEN1bVRpbWUgPCBob3VyICYmIE1hdGguYWJzKG1heEN1bVRpbWUgLSBob3VyKSA+IDAuNSkgYnJlYWs7XHJcbiAgICBjb25zdCBpID0gbmVhcmVzdFJvdyhqb2Jzb24gPyBcInRfbGVhZFwiIDogXCJjdW1fdGltZVwiLCBob3VyKTtcclxuICAgIGNvbnN0IGggPSB7XHJcbiAgICAgIGhvdXIsXHJcbiAgICAgIGxhdDogZGZbaV0ubGF0LCBsb246IGRmW2ldLmxvbixcclxuICAgICAgY3VtX2Rpc3Rfa206IGRmW2ldLmN1bV9kaXN0IC8gMTAwMCxcclxuICAgICAgdmVsb2NpdHlfbXBoOiBkZltpXS52ZWxvY2l0eSAqIDIuMjM2OTQsXHJcbiAgICB9O1xyXG4gICAgaWYgKGpvYnNvbikge1xyXG4gICAgICAvLyBiYW5kIGF0IHRoaXMgaG91cjogYnVsayAocGVhaykgcG9zaXRpb24gLi4gZmFydGhlc3QgY3JlZGlibGUgKDk5JSBsZWFkaW5nKVxyXG4gICAgICBjb25zdCBpUGVhayA9IG5lYXJlc3RSb3coXCJ0X3BlYWtcIiwgaG91cik7XHJcbiAgICAgIGNvbnN0IGlGYXIgPSBuZWFyZXN0Um93KFwidF9sZWFkX21pblwiLCBob3VyKTtcclxuICAgICAgaC5iYW5kID0ge1xyXG4gICAgICAgIHBlYWs6IHsgaTogaVBlYWssIGxhdDogZGZbaVBlYWtdLmxhdCwgbG9uOiBkZltpUGVha10ubG9uLCBjdW1fZGlzdF9rbTogZGZbaVBlYWtdLmN1bV9kaXN0IC8gMTAwMCB9LFxyXG4gICAgICAgIGZhc3Rlc3Q6IHsgaTogaUZhciwgbGF0OiBkZltpRmFyXS5sYXQsIGxvbjogZGZbaUZhcl0ubG9uLCBjdW1fZGlzdF9rbTogZGZbaUZhcl0uY3VtX2Rpc3QgLyAxMDAwIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBob3VybHkucHVzaChoKTtcclxuICB9XHJcblxyXG4gIC8vIDcuIHNpdGUgRVRBcyArIHJlY2VwdG9yIHdhcm5pbmdzIChuZWFyZXN0IHRyYWNlIHBvaW50IHdpdGhpbiBidWZmZXIpO1xyXG4gIC8vIGZlYXR1cmVzIHdlcmUgcHJlLWZldGNoZWQgaW50byBkYXRhLnNpdGVTZXRzL3JlY2VwdG9yU2V0c1xyXG4gIGZ1bmN0aW9uIHByb3hpbWl0eShzZXQpIHtcclxuICAgIGNvbnN0IGZlYXRzID0gc2V0LmZlYXRzOyAvLyBbe25hbWUsIGxhdCwgbG9uLCAuLi5leHRyYX1dXHJcbiAgICBjb25zdCBidWYgPSBzZXQuYnVmZmVyX20gPz8gNDAwO1xyXG4gICAgY29uc3Qgb3V0ID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGYgb2YgZmVhdHMpIHtcclxuICAgICAgaWYgKGYubGF0ID09PSB1bmRlZmluZWQgfHwgZi5sb24gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgIGxldCBiZXN0RCA9IEluZmluaXR5LCBpID0gMDtcclxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBkZi5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmVNKGRmW2tdLmxhdCwgZGZba10ubG9uLCBmLmxhdCwgZi5sb24pO1xyXG4gICAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBpID0gazsgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChiZXN0RCA8PSBidWYpIHtcclxuICAgICAgICBjb25zdCB7IGxhdDogX2EsIGxvbjogX2IsIC4uLnJlc3QgfSA9IGY7XHJcbiAgICAgICAgY29uc3Qgcm93ID0ge1xyXG4gICAgICAgICAgLi4ucmVzdCxcclxuICAgICAgICAgIGV0YV9ocjogTWF0aC5yb3VuZCh0aW1lT2YoZGZbaV0pICogMTAwKSAvIDEwMCxcclxuICAgICAgICAgIGRpc3Rfa206IE1hdGgucm91bmQoKGRmW2ldLmN1bV9kaXN0IC8gMTAwMCkgKiAxMCkgLyAxMCxcclxuICAgICAgICAgIG9mZnNldF9tOiBNYXRoLnJvdW5kKGJlc3REKSxcclxuICAgICAgICAgIC8vIG1vZGVsZWQgaHlkcmF1bGljcyBhdCB0aGUgc2l0ZSdzIHRyYWNlIHBvaW50IMOi4oKs4oCdIGZlZWRzIGJvb20gc2l6aW5nXHJcbiAgICAgICAgICByaXZlcl93aWR0aF9tOiBNYXRoLnJvdW5kKGRmW2ldLndpZHRoX2ZpbmFsICogMTApIC8gMTAsXHJcbiAgICAgICAgICB2ZWxvY2l0eV9tczogTWF0aC5yb3VuZChkZltpXS52ZWxvY2l0eSAqIDEwMDApIC8gMTAwMCxcclxuICAgICAgICAgIGRlcHRoX206IE1hdGgucm91bmQoZGZbaV0uZGVwdGggKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGpvYnNvbikge1xyXG4gICAgICAgICAgcm93LmV0YV9lYXJseV9ociA9IE1hdGgucm91bmQoZGZbaV0udF9sZWFkX21pbiAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICByb3cuZXRhX3BlYWtfaHIgPSBNYXRoLnJvdW5kKGRmW2ldLnRfcGVhayAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICByb3cuY2xlYXJfaHIgPSBkZltpXS50X2NsZWFyICE9PSBudWxsID8gTWF0aC5yb3VuZChkZltpXS50X2NsZWFyICogMTAwKSAvIDEwMCA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dC5wdXNoKHJvdyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG91dC5zb3J0KChhLCBiKSA9PiBhLmV0YV9ociAtIGIuZXRhX2hyKTtcclxuICAgIHJldHVybiBvdXQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaXRlcyA9IFtdO1xyXG4gIGZvciAoY29uc3QgcyBvZiBzaXRlU2V0cyB8fCBbXSkgc2l0ZXMucHVzaCguLi5wcm94aW1pdHkocykpO1xyXG4gIHNpdGVzLnNvcnQoKGEsIGIpID0+IGEuZXRhX2hyIC0gYi5ldGFfaHIpO1xyXG4gIGNvbnN0IHdhcm5pbmdzID0gaW1wb3VuZE5vdGUgPyBbaW1wb3VuZE5vdGVdIDogW107XHJcbiAgLy8gY29ycmlkb3IgbW9kZTogYXV0aG9yZWQgd2FybmluZ3MgKHRpZGFsIHJlYWNoLCBuby1saXZlLWdhdWdlLCBhcm0gc3BsaXRzKVxyXG4gIC8vICsgZG93bmdyYWRlIGNvbmZpZGVuY2Ugd2hlbiBhbnkgZmxvdyBpbnB1dCBpcyBhIGhpc3RvcmljYWwgbWVkaWFuXHJcbiAgaWYgKGdkLnNvbWUoKGcpID0+IGcucV9zb3VyY2UgPT09IFwibW9udGhseS1tZWRpYW5cIikgJiYgcUNvbmZpZGVuY2UgPT09IFwiSElHSFwiKSB7XHJcbiAgICBxQ29uZmlkZW5jZSA9IFwiTU9ERVJBVEUgw6LigqzigJ0gaW5jbHVkZXMgaGlzdG9yaWNhbC1tZWRpYW4gZmxvdyAobm8gbGl2ZSBnYXVnZSlcIjtcclxuICB9XHJcbiAgZm9yIChjb25zdCB3IG9mIGRhdGEuY29ycmlkb3JXYXJuaW5ncyB8fCBbXSkgd2FybmluZ3MucHVzaCh3KTtcclxuICBpZiAocUNvbmZpZGVuY2UgIT09IFwiSElHSFwiKSB3YXJuaW5ncy51bnNoaWZ0KGBGbG93IGVzdGltYXRlOiAke3FDb25maWRlbmNlfSAoJHtxTWV0aG9kfSlgKTtcclxuICB7XHJcbiAgICBjb25zdCBzdGF0RyA9IGdkLmZpbHRlcigoZykgPT4gZy5xX3NvdXJjZSA9PT0gXCJzdGF0LXA1MFwiKTtcclxuICAgIGlmIChzdGF0Ry5sZW5ndGgpIHtcclxuICAgICAgd2FybmluZ3MudW5zaGlmdChcclxuICAgICAgICBgR2F1Z2UgZmVlZCBkb3duOiAke3N0YXRHLm1hcCgoZykgPT4gZy5zdGF0aW9uX2lkKS5qb2luKFwiLCBcIil9IHVzaW5nIGAgK1xyXG4gICAgICAgIGBwZXJpb2Qtb2YtcmVjb3JkIE1FRElBTiBmbG93IGZvciB0aGlzIGRhdGUgw6LigqzigJ0gTk9UIGxpdmUgY29uZGl0aW9uc2AsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAoY29uc3QgcyBvZiByZWNlcHRvclNldHMgfHwgW10pIHtcclxuICAgIGZvciAoY29uc3QgciBvZiBwcm94aW1pdHkocykpIHtcclxuICAgICAgd2FybmluZ3MucHVzaChcclxuICAgICAgICBgUmVjZXB0b3IgJyR7ci5uYW1lfScgfiR7ci5vZmZzZXRfbX0gbSBvZmYgdHJhY2UgYXQgaHIgJHtyLmV0YV9ocn0gKCR7ci5kaXN0X2ttfSBrbSBkb3duc3RyZWFtKWAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkaXN0YW5jZUttID0gZGYubGVuZ3RoID8gZGZbZGYubGVuZ3RoIC0gMV0uY3VtX2Rpc3QgLyAxMDAwIDogMDtcclxuICBjb25zdCBhdmdWZWwgPSBkZi5sZW5ndGggPyBkZi5yZWR1Y2UoKHMsIHIpID0+IHMgKyByLnZlbG9jaXR5LCAwKSAvIGRmLmxlbmd0aCA6IDA7XHJcbiAgY29uc3QgZ2xvd01hdGNoZWQgPSByb3dzLmZpbHRlcigocikgPT4gci53aWR0aF9tID4gMCkubGVuZ3RoO1xyXG4gIGNvbnN0IGJyYWlkZWROID0gcm93cy5maWx0ZXIoKHIpID0+IHIuYnJhaWRlZCkubGVuZ3RoO1xyXG5cclxuICAvLyBwcm92ZW5hbmNlIMOi4oKs4oCdIGVub3VnaCB0byByZWNvbnN0cnVjdCBhbnkgb3V0cHV0IGluIGFuIGFmdGVyLWFjdGlvbiByZXZpZXdcclxuICBjb25zdCBydW5SZWNvcmQgPSB7XHJcbiAgICBlbmdpbmVfdmVyc2lvbjogRU5HSU5FX1ZFUlNJT04sXHJcbiAgICBnZW5lcmF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgIGRhdGFfZmV0Y2hlZF9hdDogZGF0YS5mZXRjaGVkQXQgfHwgbnVsbCxcclxuICAgIHNwaWxsX3BvaW50OiB7IGxhdDogZGF0YS5sYXQsIGxvbjogZGF0YS5sb24gfSxcclxuICAgIHNuYXA6IHsgY29taWQsIHJpdmVyOiByaXZlck5hbWUsIHNuYXBwZWRfZnJvbV9tOiBkYXRhLnNuYXBEaXN0TSAhPT0gdW5kZWZpbmVkID8gTWF0aC5yb3VuZChkYXRhLnNuYXBEaXN0TSB8fCAwKSA6IG51bGwgfSxcclxuICAgIHRpbWluZ19tb2RlbDogY2ZnLnRpbWluZ01vZGVsLFxyXG4gICAgc2FmZXR5X2ZhY3RvcjogY2ZnLnNhZmV0eUZhY3RvcixcclxuICAgIG1heF9ob3VyczogY2ZnLm1heEhvdXJzLFxyXG4gICAgYXNfb2Y6IGRhdGEuYXNPZiB8fCBcImxpdmVcIixcclxuICAgIHFfbWV0aG9kOiBxTWV0aG9kLFxyXG4gICAgcV9jb25maWRlbmNlOiBxQ29uZmlkZW5jZSxcclxuICAgIHFfaW50ZXJwOiBxSW50ZXJwVXNlZCxcclxuICAgIGdhdWdlczogZ2QubWFwKChnKSA9PiAoe1xyXG4gICAgICBzdGF0aW9uX2lkOiBnLnN0YXRpb25faWQsIG5hbWU6IGcubmFtZSwgZGlzY2hhcmdlX2NmczogZy5kaXNjaGFyZ2UsIHRyYWNlX2ttOiBNYXRoLnJvdW5kKGcudHJhY2VfZGlzdCAvIDEwMCkgLyAxMCxcclxuICAgICAgcV9zb3VyY2U6IGcucV9zb3VyY2UgfHwgXCJpdlwiLFxyXG4gICAgICAuLi4oZy51cHN0cmVhbV9hbmNob3IgPyB7XHJcbiAgICAgICAgdXBzdHJlYW1fYW5jaG9yOiB0cnVlLFxyXG4gICAgICAgIGFuY2hvcl9nYXVnZV9xX2NmczogZy5hbmNob3JfZ2F1Z2VfcV9jZnMsXHJcbiAgICAgICAgYW5jaG9yX2dhdWdlX2RhX3NxbWk6IGcuYW5jaG9yX2dhdWdlX2RhX3NxbWksXHJcbiAgICAgICAgYW5jaG9yX3Vwc3RyZWFtX2ttOiBnLmFuY2hvcl91cHN0cmVhbV9tICE9PSBudWxsID8gTWF0aC5yb3VuZChnLmFuY2hvcl91cHN0cmVhbV9tIC8gMTAwKSAvIDEwIDogbnVsbCxcclxuICAgICAgfSA6IHt9KSxcclxuICAgIH0pKSxcclxuICAgIGVyb21fbW9udGg6IHFNZXRob2Quc3RhcnRzV2l0aChcImVyb21cIikgPyBlcm9tTW9udGggOiBudWxsLFxyXG4gICAgd2lkdGhfc291cmNlOiB7IGdsb3dfbWF0Y2hlZF9wb2ludHM6IGdsb3dNYXRjaGVkLCB0b3RhbF9wb2ludHM6IHJvd3MubGVuZ3RoLCBicmFpZGVkX3BvaW50c19mb3JtdWxhX3dpZHRoOiBicmFpZGVkTiB9LFxyXG4gICAgam9ic29uX2RlZ3JhZGVkX3BvaW50czogam9ic29uID8gam9ic29uRGVncmFkZWQgOiBudWxsLFxyXG4gICAgaW1wb3VuZF9leGNsdXNpb25zX2FwcGxpZWQ6IFsuLi5leGNsdWRlZF0uZmlsdGVyKChjKSA9PiByb3dzLnNvbWUoKHIpID0+IHIuY29taWQgPT09IGMpKSxcclxuICAgIGltcG91bmRfc3RvcF9rbTogc3RvcElkeCAhPT0gbnVsbCA/IE1hdGgucm91bmQocm93c1tzdG9wSWR4XS5jdW1fZGlzdCAvIDEwMCkgLyAxMCA6IG51bGwsXHJcbiAgICBjb3JyaWRvcjogZGF0YS5jb3JyaWRvck1ldGEgfHwgbnVsbCxcclxuICB9O1xyXG5cclxuICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICBtb2RlOiBcInJpdmVyXCIsXHJcbiAgICByaXZlcl9uYW1lOiByaXZlck5hbWUsXHJcbiAgICBjb21pZCxcclxuICAgIGFzX29mOiBkYXRhLmFzT2YgfHwgXCJsaXZlXCIsXHJcbiAgICBzYWZldHlfZmFjdG9yOiBjZmcuc2FmZXR5RmFjdG9yLFxyXG4gICAgdGltaW5nX21vZGVsOiBjZmcudGltaW5nTW9kZWwsXHJcbiAgICBxX21ldGhvZDogcU1ldGhvZCxcclxuICAgIHFfY29uZmlkZW5jZTogcUNvbmZpZGVuY2UsXHJcbiAgICBnYXVnZXNfdXNlZDogZ2QubWFwKChnKSA9PiAoe1xyXG4gICAgICBzdGF0aW9uX2lkOiBnLnN0YXRpb25faWQsIG5hbWU6IGcubmFtZSxcclxuICAgICAgZGlzY2hhcmdlOiBnLmRpc2NoYXJnZSwgdHJhY2VfZGlzdDogZy50cmFjZV9kaXN0LFxyXG4gICAgfSkpLFxyXG4gICAgZGlzdGFuY2Vfa21fMjRoOiBkaXN0YW5jZUttLFxyXG4gICAgYXZnX3ZlbG9jaXR5X21waDogYXZnVmVsICogMi4yMzY5NCxcclxuICAgIGltcG91bmRfc3RvcDogaW1wb3VuZE5vdGUsXHJcbiAgICBpbXBvdW5kX3N0b3BfcG9pbnQ6IGltcG91bmRTdG9wUG9pbnQsXHJcbiAgICBob3VybHksXHJcbiAgICBzaXRlcyxcclxuICAgIHdhcm5pbmdzLFxyXG4gICAgcnVuUmVjb3JkLFxyXG4gICAgdHJhY2U6IGRmLCAvLyBmdWxsIHJvdyBhcnJheSBmb3IgaW5zcGVjdGlvbi9nZW9qc29uIGV4cG9ydFxyXG4gIH07XHJcbiAgbG9nKFxyXG4gICAgYCAgUkVTVUxUOiAke2Rpc3RhbmNlS20udG9GaXhlZCgxKX0ga20gaW4gPD0gJHtjZmcubWF4SG91cnN9IGgsIGAgK1xyXG4gICAgYGF2ZyAke3Jlc3VsdC5hdmdfdmVsb2NpdHlfbXBoLnRvRml4ZWQoMil9IG1waCwgJHtzaXRlcy5sZW5ndGh9IHNpdGVzLCAke3dhcm5pbmdzLmxlbmd0aH0gd2FybmluZ3NgLFxyXG4gICk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFdoaWNoIG1vZGVsIGRvZXMgYSBjbGljayBnZXQ/ICdvcGVuLXdhdGVyJyB3aGVuIHRoZSBwb2ludCBzaXRzIGluc2lkZSBhXHJcbiAqIGxha2UvcmVzZXJ2b2lyIHBvbHlnb24gKD49IG1pbkxha2VTcUttKSDDouKCrOKAnSBVTkxFU1MgYSBub24taW1wb3VuZGVkIHJlYWNoIGlzXHJcbiAqIG5lYXJieSAoZGFtIHRhaWxyYWNlcyBzaXQgaW5zaWRlIHJlc2Vydm9pciBwb2x5Z29uczsgdGhhdCBjbGljayBtZWFucyB0aGVcclxuICogcml2ZXIgYmVsb3cgdGhlIGRhbSkuIFJldHVybnMgeyBtb2RlLCB3YXRlcmJvZHk/IH0gw6LigqzigJ0gdGhlIHdhdGVyYm9keSBpc1xyXG4gKiBwYXNzZWQgb24gc28gdGhlIG9wZW4td2F0ZXIgZmV0Y2ggc2tpcHMgYSBkdXBsaWNhdGUgUElQIHF1ZXJ5LlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVUcmFjZU1vZGUobGF0LCBsb24sIGNvbmZpZyA9IHt9KSB7XHJcbiAgY29uc3Qgb3cgPSB7IC4uLkRFRkFVTFRfT1BFTldBVEVSLCAuLi4oY29uZmlnLm9wZW5XYXRlciB8fCB7fSkgfTtcclxuICBpZiAoIW93LmVuYWJsZWQpIHJldHVybiB7IG1vZGU6IFwicml2ZXJcIiB9O1xyXG4gIGNvbnN0IHdiID0gYXdhaXQgcXVlcnlXYXRlcmJvZHkobGF0LCBsb24sIGNvbmZpZyk7XHJcbiAgaWYgKCF3YiB8fCAhaXNPcGVuV2F0ZXJCb2R5KHdiKSB8fCAhKHdiLmFyZWFfc3FrbSA+PSBvdy5taW5MYWtlU3FLbSkpIHJldHVybiB7IG1vZGU6IFwicml2ZXJcIiB9O1xyXG4gIGNvbnN0IGNmZyA9IHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9O1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoYXdhaXQgbmVhclJpdmVyUmVhY2gobGF0LCBsb24sIGNmZy5taW5TdHJlYW1PcmRlciwgb3cucml2ZXJPdmVycmlkZU0pKSB7XHJcbiAgICAgIHJldHVybiB7IG1vZGU6IFwicml2ZXJcIiwgd2F0ZXJib2R5OiB3YiB9O1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggeyAvKiB0aWVicmVhayB1bmF2YWlsYWJsZSDDouKAoOKAmSBvcGVuIHdhdGVyICh0aGUgUElQIGhpdCBzdGFuZHMpICovIH1cclxuICByZXR1cm4geyBtb2RlOiBcIm9wZW4td2F0ZXJcIiwgd2F0ZXJib2R5OiB3YiB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuVHJhY2UobGF0LCBsb24sIGNvbmZpZyA9IHt9KSB7XHJcbiAgY29uc3Qgb3cgPSB7IC4uLkRFRkFVTFRfT1BFTldBVEVSLCAuLi4oY29uZmlnLm9wZW5XYXRlciB8fCB7fSkgfTtcclxuICBjb25zdCBkaXNwID0gYXdhaXQgcmVzb2x2ZVRyYWNlTW9kZShsYXQsIGxvbiwgY29uZmlnKTtcclxuICBpZiAoZGlzcC5tb2RlID09PSBcIm9wZW4td2F0ZXJcIikgcmV0dXJuIHJ1bk9wZW5XYXRlcihsYXQsIGxvbiwgY29uZmlnLCBkaXNwLndhdGVyYm9keSk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoVHJhY2VEYXRhKGxhdCwgbG9uLCBjb25maWcpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGNvbXB1dGVUcmFjZShkYXRhLCBjb25maWcpO1xyXG4gIGlmIChvdy5lbmFibGVkICYmIG93LmNvbnRpbnVlQXRJbXBvdW5kbWVudCAmJiByZXN1bHQuaW1wb3VuZF9zdG9wX3BvaW50KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXN1bHQub3Blbl93YXRlciA9IGF3YWl0IHJ1bk9wZW5XYXRlckNvbnRpbnVhdGlvbihyZXN1bHQsIGNvbmZpZyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJlc3VsdC53YXJuaW5ncy5wdXNoKGBPcGVuLXdhdGVyIGNvbnRpbnVhdGlvbiB1bmF2YWlsYWJsZTogJHtlLm1lc3NhZ2UgfHwgZX1gKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJvb20gc2l6aW5nIGZyb20gbW9kZWxlZCBoeWRyYXVsaWNzIChwbGFubmluZy1sZXZlbCwgZm9yIEdSUHMgdGhhdCBjYXJyeSBub1xyXG4gKiBlcXVpcG1lbnQgcXVhbnRpdGllcykuIFN0YW5kYXJkIGNvbnRhaW5tZW50IHJ1bGU6IG9pbCBlbnRyYWlucyB1bmRlciBhIGJvb21cclxuICogd2hlbiB0aGUgZmxvdyBjb21wb25lbnQgbm9ybWFsIHRvIGl0IGV4Y2VlZHMgfjAuMzUgbS9zICgwLjcga3QpLCBzbyBpblxyXG4gKiBmYXN0ZXIgd2F0ZXIgdGhlIGJvb20gaXMgYW5nbGVkIHdpdGggc2luKHRoZXRhKSA9IGVudHJhaW5tZW50L3ZlbG9jaXR5IGFuZFxyXG4gKiB0aGUgcmVxdWlyZWQgbGVuZ3RoIGdyb3dzIHRvIHdpZHRoL3Npbih0aGV0YSkuIEFuY2hvciBzZXRzIGZyb20gbGVuZ3RoLlxyXG4gKiBBbmdsZXMgYmVsb3cgfjE1IGRlZyAodiA+IH4xLjM1IG0vcykgYXJlIGZsYWdnZWQ6IHVzZSBjYXNjYWRlZCBzaG9ydGVyIGJvb21zLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVzdGltYXRlQm9vbU5lZWRzKHdpZHRoTSwgdmVsb2NpdHlNcywgb3B0cyA9IHt9KSB7XHJcbiAgY29uc3QgZW50cmFpbiA9IG9wdHMuZW50cmFpbm1lbnRNcyA/PyAwLjM1O1xyXG4gIGNvbnN0IHJlc2VydmVQY3QgPSBvcHRzLnJlc2VydmVQY3QgPz8gMjA7XHJcbiAgY29uc3QgYW5jaG9yU3BhY2luZ0Z0ID0gb3B0cy5hbmNob3JTcGFjaW5nRnQgPz8gMTAwO1xyXG4gIGlmICghKHdpZHRoTSA+IDApIHx8ICEodmVsb2NpdHlNcyA+PSAwKSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3Qgc2luVGhldGEgPSB2ZWxvY2l0eU1zID4gZW50cmFpbiA/IGVudHJhaW4gLyB2ZWxvY2l0eU1zIDogMTtcclxuICBjb25zdCBhbmdsZURlZyA9IChNYXRoLmFzaW4oc2luVGhldGEpICogMTgwKSAvIE1hdGguUEk7XHJcbiAgY29uc3QgbGVuZ3RoRnQgPSAod2lkdGhNIC8gc2luVGhldGEpICogMy4yODA4NCAqICgxICsgcmVzZXJ2ZVBjdCAvIDEwMCk7XHJcbiAgY29uc3QgYm9vbUZ0ID0gTWF0aC5jZWlsKGxlbmd0aEZ0IC8gNTApICogNTA7IC8vIHJvdW5kIHVwIHRvIDUwLWZ0IHN0aWNrc1xyXG4gIGNvbnN0IGFuY2hvcnMgPSBNYXRoLm1heCgyLCBNYXRoLmNlaWwoYm9vbUZ0IC8gYW5jaG9yU3BhY2luZ0Z0KSArIDEpO1xyXG4gIHJldHVybiB7XHJcbiAgICBib29tX2Z0OiBib29tRnQsXHJcbiAgICBib29tX2FuZ2xlX2RlZzogTWF0aC5yb3VuZChhbmdsZURlZyksXHJcbiAgICBhbmNob3JzLFxyXG4gICAgZGVmbGVjdGlvbjogdmVsb2NpdHlNcyA+IGVudHJhaW4sXHJcbiAgICBjYXNjYWRlX2FkdmlzZWQ6IGFuZ2xlRGVnIDwgMTUsIC8vIHRvbyBmYXN0IGZvciBhIHNpbmdsZSBzd2VlcCDDouKCrOKAnSBjYXNjYWRlIGJvb21zXHJcbiAgfTtcclxufVxyXG5cclxuLyoqIFRyYWNlIGxpbmUgKyBob3VybHkgbWFya2VycyBhcyBhIEdlb0pTT04gRmVhdHVyZUNvbGxlY3Rpb24gKHdpZGdldCBwcmV2aWV3KS4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvR2VvSnNvbihyZXN1bHQpIHtcclxuICBjb25zdCBkZiA9IHJlc3VsdC50cmFjZTtcclxuICBjb25zdCBmYyA9IHtcclxuICAgIHR5cGU6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcclxuICAgIGZlYXR1cmVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICBraW5kOiBcInRyYWNlXCIsIHJpdmVyOiByZXN1bHQucml2ZXJfbmFtZSxcclxuICAgICAgICAgIGRpc3RhbmNlX2ttXzI0aDogcmVzdWx0LmRpc3RhbmNlX2ttXzI0aCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcclxuICAgICAgICAgIGNvb3JkaW5hdGVzOiBkZi5tYXAoKHIpID0+IFtcclxuICAgICAgICAgICAgTWF0aC5yb3VuZChyLmxvbiAqIDFlNikgLyAxZTYsIE1hdGgucm91bmQoci5sYXQgKiAxZTYpIC8gMWU2LFxyXG4gICAgICAgICAgXSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuICBmb3IgKGNvbnN0IGggb2YgcmVzdWx0LmhvdXJseSkge1xyXG4gICAgZmMuZmVhdHVyZXMucHVzaCh7XHJcbiAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICBwcm9wZXJ0aWVzOiB7IGtpbmQ6IFwiaG91clwiLCBob3VyOiBoLmhvdXIsIGN1bV9kaXN0X2ttOiBoLmN1bV9kaXN0X2ttLCB2ZWxvY2l0eV9tcGg6IGgudmVsb2NpdHlfbXBoIH0sXHJcbiAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgdHlwZTogXCJQb2ludFwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbTWF0aC5yb3VuZChoLmxvbiAqIDFlNikgLyAxZTYsIE1hdGgucm91bmQoaC5sYXQgKiAxZTYpIC8gMWU2XSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAocmVzdWx0Lm9wZW5fd2F0ZXIpIHtcclxuICAgIGZjLmZlYXR1cmVzLnB1c2goLi4udG9PcGVuV2F0ZXJHZW9Kc29uKHJlc3VsdC5vcGVuX3dhdGVyKS5mZWF0dXJlcyk7XHJcbiAgfVxyXG4gIHJldHVybiBmYztcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBPUEVOLVdBVEVSIE1PREUgKHYxLjcpIMOi4oKs4oCdIGxha2VzICYgcmVzZXJ2b2lyc1xyXG4vL1xyXG4vLyBHTk9NRS1zdHlsZSBMYWdyYW5naWFuIHBhcnRpY2xlIHRyYW5zcG9ydCAoTk9BQSBUZWNoIERvYyBOT1MgT1ImUiA0MCxcclxuLy8gcHVibGljIGRvbWFpbjsgYWxnb3JpdGhtcyB2YWxpZGF0ZWQgYWdhaW5zdCBpdHMgY2xvc2VkIGZvcm1zIGluXHJcbi8vIG9wZW53YXRlci1zcGlrZS90ZXN0X2NvcmUubWpzIMOi4oKs4oCdIDE4LzE4KS4gV2luZC1kcmlmdCBvbmx5OiBmb3IgcmVzZXJ2b2lyc1xyXG4vLyB3aXRoIG5vIG9wZXJhdGlvbmFsIGN1cnJlbnQgbW9kZWwgdGhpcyBJUyBhY2NlcHRlZCByZXNwb25kZXIgcHJhY3RpY2VcclxuLy8gKHRoZSBcIjMlIG9mIHdpbmQgdG93YXJkIHRoZSBkb3dud2luZCBzaG9yZVwiIHJ1bGUsIGRvbmUgcHJvcGVybHkgd2l0aCBhblxyXG4vLyBob3VybHkgZm9yZWNhc3QgKyBtaW5pbXVtLXJlZ3JldCB1bmNlcnRhaW50eSBzZXQpLlxyXG4vL1xyXG4vLyBHb3RjaGFzIGhvbm9yZWQgKHNwaWtlIGZpbmRpbmdzKTpcclxuLy8gICAxLiBleHBsaWNpdCB3aW5kYWdlIHBlcnNpc3RlbmNlIGFuZCBHTk9NRSdzIEFwcC4gQyBzcXJ0KHBlcnNpc3QvZHQpXHJcbi8vICAgICAgcmFuZ2UgcmVzY2FsZSBET1VCTEUtQ09VTlQgw6LigqzigJ0gcmVzY2FsZSBvbmx5IHdoZW4gZHQgPiBwZXJzaXN0ZW5jZVxyXG4vLyAgIDIuIE5IRCBNYXBTZXJ2ZXIgZmllbGQgbmFtZXMgYXJlIFVQUEVSQ0FTRSAoR05JU19OQU1FLCBBUkVBU1FLTSwgRlRZUEUpXHJcbi8vICAgMy4gd2F0ZXJib2R5IHF1ZXJ5IG5lZWRzIG1heEFsbG93YWJsZU9mZnNldCAofjMwIG0pIG9yIEZsYXRoZWFkLXNpemVcclxuLy8gICAgICBwb2x5Z29ucyByZXR1cm4gdGhvdXNhbmRzIG9mIHZlcnRpY2VzOyBNdWx0aVBvbHlnb24gcmluZ3MgZmxhdHRlbmVkXHJcbi8vICAgICAgKGlzbGFuZHMgYmVhY2ggcGFydGljbGVzIHRvbylcclxuLy8gICA0LiByZWZsb2F0SGFsZkxpZmVIciA8PSAwIHdvdWxkIG1lYW4gSU5TVEFOVCByZWZsb2F0IMOi4oKs4oCdIHRyZWF0ZWQgYXMgXCJvZmZcIlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBOSERfV0FURVJCT0RZX1VSTCA9XHJcbiAgXCJodHRwczovL2h5ZHJvLm5hdGlvbmFsbWFwLmdvdi9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9uaGQvTWFwU2VydmVyLzEyL3F1ZXJ5XCI7XHJcbmNvbnN0IE9QRU5fTUVURU9fVVJMID0gXCJodHRwczovL2FwaS5vcGVuLW1ldGVvLmNvbS92MS9mb3JlY2FzdFwiO1xyXG5jb25zdCBNX1BFUl9ERUdfTEFUID0gMTExMTIwLjAwMDI0OyAvLyBHTk9NRSBUZWNoIERvYyDDgsKnNFxyXG5cclxuLy8gTkhEIEZUeXBlOiAzOTAgTGFrZVBvbmQsIDQzNiBSZXNlcnZvaXIgKG51bWVyaWMgb24gdGhlIE1hcFNlcnZlcjsgYWNjZXB0XHJcbi8vIHRoZSBzdHJpbmcgZm9ybXMgZm9yIHJvYnVzdG5lc3MpXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09wZW5XYXRlckJvZHkod2IpIHtcclxuICBjb25zdCBmID0gd2IgJiYgd2IuZnR5cGU7XHJcbiAgcmV0dXJuIGYgPT09IDM5MCB8fCBmID09PSA0MzYgfHwgZiA9PT0gXCJMYWtlUG9uZFwiIHx8IGYgPT09IFwiUmVzZXJ2b2lyXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBOZWFyZXN0IGZsb3dsaW5lIHJlYWNoIHdpdGhpbiByYWRpdXNNICh3YmFyZWF0eXBlIGluY2x1ZGVkKSDDouKCrOKAnSBkaXNwYXRjaFxyXG4gKiB0aWVicmVhazogTkhEIHJlc2Vydm9pciBwb2x5Z29ucyBleHRlbmQgb3ZlciBkYW0gdGFpbHJhY2VzLCBhbmQgYSBjbGlja1xyXG4gKiB0aGVyZSBtZWFucyB0aGUgUklWRVIgYmVsb3csIG5vdCB0aGUgcG9vbCAoY2F1Z2h0IGxpdmUgYXQgQW1lcmljYW4gRmFsbHM6XHJcbiAqIHRoZSByZXNlcnZvaXIgcG9seWdvbiBjb250YWlucyB0aGUgdGFpbHJhY2UgYXQgNDIuNzgwMywtMTEyLjg3NjcpLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbmVhclJpdmVyUmVhY2gobGF0LCBsb24sIG1pbk9yZGVyLCByYWRpdXNNKSB7XHJcbiAgY29uc3QgYm94ID0gcmFkaXVzTSAvIDExMTAwMDsgLy8gZGVncmVlcywgZ2VuZXJvdXMgYXQgdGhlc2UgbGF0aXR1ZGVzXHJcbiAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oR0VPU0VSVkVSLCB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHNlcnZpY2U6IFwiV0ZTXCIsIHZlcnNpb246IFwiMi4wLjBcIiwgcmVxdWVzdDogXCJHZXRGZWF0dXJlXCIsXHJcbiAgICAgIHR5cGVOYW1lOiBcIndtYWRhdGE6bmhkZmxvd2xpbmVfbmV0d29ya1wiLCBvdXRwdXRGb3JtYXQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBjcWxfZmlsdGVyOlxyXG4gICAgICAgIGBzdHJlYW1vcmRlID49ICR7bWluT3JkZXJ9IEFORCBCQk9YKHRoZV9nZW9tLGAgK1xyXG4gICAgICAgIGAke2xhdCAtIGJveH0sJHtsb24gLSBib3h9LCR7bGF0ICsgYm94fSwke2xvbiArIGJveH0pYCwgLy8gbGF0LGxvbiBheGlzIG9yZGVyXHJcbiAgICAgIGNvdW50OiBcIjUwXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIC8vIG5lYXJlc3QgTk9OLWltcG91bmRlZCByZWFjaDogYXQgYSBkYW0gYm90aCB0aGUgcG9vbCdzIExha2VQb25kIHJlYWNoIGFuZFxyXG4gIC8vIHRoZSBmcmVlLWZsb3dpbmcgcmVhY2ggYmVsb3cgYXJlIGNsb3NlIMOi4oKs4oCdIGFueSBmcmVlLWZsb3dpbmcgcmVhY2ggaW4gcmFkaXVzXHJcbiAgLy8gbWVhbnMgdGhlIGNsaWNrIGlzIHJpdmVyIGNvbnRleHQgKG1pZC1wb29sIGhhcyBvbmx5IHRoZSBMYWtlUG9uZFxyXG4gIC8vIEFydGlmaWNpYWxQYXRoIG5lYXJieSkuIEEgdHJpYnV0YXJ5IG1vdXRoIGZsaXBwaW5nIHRvIHJpdmVyIG1vZGUgaXMgZmluZTpcclxuICAvLyB0aGUgdHJhY2UgaW1wb3VuZC1zdG9wcyBpbnRvIHRoZSBsYWtlIGltbWVkaWF0ZWx5IGFuZCBjb250aW51ZXMgYXNcclxuICAvLyBvcGVuIHdhdGVyIGFueXdheS5cclxuICBsZXQgYmVzdCA9IG51bGwsIGJlc3REID0gSW5maW5pdHk7XHJcbiAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcclxuICAgIGNvbnN0IHdiYSA9IGYucHJvcGVydGllcy53YmFyZWF0eXBlO1xyXG4gICAgaWYgKHdiYSA9PT0gXCJMYWtlUG9uZFwiIHx8IHdiYSA9PT0gXCJSZXNlcnZvaXJcIikgY29udGludWU7XHJcbiAgICBjb25zdCBnID0gZi5nZW9tZXRyeTtcclxuICAgIGNvbnN0IHBhdGhzID0gZy50eXBlID09PSBcIkxpbmVTdHJpbmdcIiA/IFtnLmNvb3JkaW5hdGVzXSA6IGcuY29vcmRpbmF0ZXM7XHJcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgcGF0aHMpXHJcbiAgICAgIGZvciAoY29uc3QgcCBvZiBwYXRoKSB7XHJcbiAgICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0obGF0LCBsb24sIHBbMV0sIHBbMF0pO1xyXG4gICAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBiZXN0ID0gZi5wcm9wZXJ0aWVzOyB9XHJcbiAgICAgIH1cclxuICB9XHJcbiAgaWYgKGJlc3QgPT09IG51bGwgfHwgYmVzdEQgPiByYWRpdXNNKSByZXR1cm4gbnVsbDtcclxuICByZXR1cm4geyBkaXN0X206IGJlc3RELCB3YmFyZWF0eXBlOiBiZXN0LndiYXJlYXR5cGUgPz8gbnVsbCwgY29taWQ6IE51bWJlcihiZXN0LmNvbWlkKSB9O1xyXG59XHJcblxyXG4vKiogQ29udGFpbmluZyBOSEQgd2F0ZXJib2R5IGF0IGEgcG9pbnQsIG9yIG51bGwuIEdlb21ldHJ5IHNpbXBsaWZpZWQgdG8gfjMwIG0uICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBxdWVyeVdhdGVyYm9keShsYXQsIGxvbiwgY29uZmlnID0ge30pIHtcclxuICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihOSERfV0FURVJCT0RZX1VSTCwge1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIGdlb21ldHJ5OiBgJHtsb259LCR7bGF0fWAsXHJcbiAgICAgIGdlb21ldHJ5VHlwZTogXCJlc3JpR2VvbWV0cnlQb2ludFwiLFxyXG4gICAgICBpblNSOiBcIjQzMjZcIixcclxuICAgICAgc3BhdGlhbFJlbDogXCJlc3JpU3BhdGlhbFJlbEludGVyc2VjdHNcIixcclxuICAgICAgb3V0RmllbGRzOiBcIkdOSVNfTkFNRSxBUkVBU1FLTSxGVFlQRVwiLCAvLyBVUFBFUkNBU0Ugb24gdGhpcyBsYXllclxyXG4gICAgICByZXR1cm5HZW9tZXRyeTogXCJ0cnVlXCIsXHJcbiAgICAgIG1heEFsbG93YWJsZU9mZnNldDogXCIwLjAwMDNcIixcclxuICAgICAgZjogXCJnZW9qc29uXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IGYgPSBqLmZlYXR1cmVzICYmIGouZmVhdHVyZXNbMF07XHJcbiAgaWYgKCFmKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCByaW5ncyA9IGYuZ2VvbWV0cnkudHlwZSA9PT0gXCJQb2x5Z29uXCJcclxuICAgID8gZi5nZW9tZXRyeS5jb29yZGluYXRlc1xyXG4gICAgOiBmLmdlb21ldHJ5LmNvb3JkaW5hdGVzLmZsYXQoMSk7IC8vIE11bHRpUG9seWdvbiDDouKAoOKAmSBhbGwgcmluZ3MgaW5jbC4gaXNsYW5kc1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBmLnByb3BlcnRpZXMuR05JU19OQU1FIHx8IFwidW5uYW1lZCB3YXRlcmJvZHlcIixcclxuICAgIGFyZWFfc3FrbTogZi5wcm9wZXJ0aWVzLkFSRUFTUUtNID8/IG51bGwsXHJcbiAgICBmdHlwZTogZi5wcm9wZXJ0aWVzLkZUWVBFLFxyXG4gICAgcmluZ3MsXHJcbiAgfTtcclxufVxyXG5cclxuLyoqIEhvdXJseSBmb3JlY2FzdCB3aW5kIGF0IGEgcG9pbnQgYXMgW3t0OiBtcywgdSwgdn1dICgxMCBtLCBtL3MpLiAqL1xyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdpbmRTZXJpZXMobGF0LCBsb24sIGhvdXJzTmVlZGVkKSB7XHJcbiAgY29uc3QgZGF5cyA9IE1hdGgubWluKDE2LCBNYXRoLmNlaWwoaG91cnNOZWVkZWQgLyAyNCkgKyAxKTtcclxuICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihPUEVOX01FVEVPX1VSTCwge1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIGxhdGl0dWRlOiBsYXQudG9GaXhlZCg0KSwgbG9uZ2l0dWRlOiBsb24udG9GaXhlZCg0KSxcclxuICAgICAgaG91cmx5OiBcIndpbmRfc3BlZWRfMTBtLHdpbmRfZGlyZWN0aW9uXzEwbVwiLFxyXG4gICAgICB3aW5kX3NwZWVkX3VuaXQ6IFwibXNcIiwgZm9yZWNhc3RfZGF5czogU3RyaW5nKGRheXMpLCB0aW1lem9uZTogXCJVVENcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgaCA9IGouaG91cmx5O1xyXG4gIGNvbnN0IHNlcmllcyA9IGgudGltZS5tYXAoKHQsIGkpID0+IHtcclxuICAgIGNvbnN0IHIgPSAoaC53aW5kX2RpcmVjdGlvbl8xMG1baV0gKiBNYXRoLlBJKSAvIDE4MDsgLy8gbWV0ZW9yb2xvZ2ljYWwgRlJPTVxyXG4gICAgY29uc3QgcyA9IGgud2luZF9zcGVlZF8xMG1baV07XHJcbiAgICByZXR1cm4geyB0OiBEYXRlLnBhcnNlKHQgKyBcIjowMFpcIiksIHU6IC1zICogTWF0aC5zaW4ociksIHY6IC1zICogTWF0aC5jb3MocikgfTtcclxuICB9KTtcclxuICByZXR1cm4geyBzZXJpZXMsIHNvdXJjZTogXCJvcGVuLW1ldGVvXCIsIHBvaW50czogc2VyaWVzLmxlbmd0aCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBvd1dpbmRBdChzZXJpZXMsIHRNcykge1xyXG4gIGlmICghc2VyaWVzLmxlbmd0aCkgcmV0dXJuIFswLCAwXTtcclxuICBpZiAodE1zIDw9IHNlcmllc1swXS50KSByZXR1cm4gW3Nlcmllc1swXS51LCBzZXJpZXNbMF0udl07XHJcbiAgY29uc3QgbGFzdCA9IHNlcmllc1tzZXJpZXMubGVuZ3RoIC0gMV07XHJcbiAgaWYgKHRNcyA+PSBsYXN0LnQpIHJldHVybiBbbGFzdC51LCBsYXN0LnZdO1xyXG4gIGxldCBsbyA9IDAsIGhpID0gc2VyaWVzLmxlbmd0aCAtIDE7XHJcbiAgd2hpbGUgKGhpIC0gbG8gPiAxKSB7XHJcbiAgICBjb25zdCBtaWQgPSAobG8gKyBoaSkgPj4gMTtcclxuICAgIGlmIChzZXJpZXNbbWlkXS50IDw9IHRNcykgbG8gPSBtaWQ7IGVsc2UgaGkgPSBtaWQ7XHJcbiAgfVxyXG4gIGNvbnN0IEEgPSBzZXJpZXNbbG9dLCBCID0gc2VyaWVzW2hpXTtcclxuICBjb25zdCBmID0gKHRNcyAtIEEudCkgLyAoQi50IC0gQS50KTtcclxuICByZXR1cm4gW0EudSArIGYgKiAoQi51IC0gQS51KSwgQS52ICsgZiAqIChCLnYgLSBBLnYpXTtcclxufVxyXG5cclxuLy8gc2VlZGVkIFJORyAobXVsYmVycnkzMiArIEJveC1NdWxsZXIpIMOi4oKs4oCdIGRldGVybWluaXN0aWMgcmVwbGF5c1xyXG5mdW5jdGlvbiBvd01ha2VSbmcoc2VlZCkge1xyXG4gIGxldCBhID0gc2VlZCA+Pj4gMDtcclxuICBsZXQgc3BhcmUgPSBudWxsO1xyXG4gIGNvbnN0IG5leHQgPSAoKSA9PiB7XHJcbiAgICBhIHw9IDA7IGEgPSAoYSArIDB4NmQyYjc5ZjUpIHwgMDtcclxuICAgIGxldCB0ID0gTWF0aC5pbXVsKGEgXiAoYSA+Pj4gMTUpLCAxIHwgYSk7XHJcbiAgICB0ID0gKHQgKyBNYXRoLmltdWwodCBeICh0ID4+PiA3KSwgNjEgfCB0KSkgXiB0O1xyXG4gICAgcmV0dXJuICgodCBeICh0ID4+PiAxNCkpID4+PiAwKSAvIDQyOTQ5NjcyOTY7XHJcbiAgfTtcclxuICByZXR1cm4ge1xyXG4gICAgbmV4dCxcclxuICAgIHVuaWZvcm06IChsbywgaGkpID0+IGxvICsgKGhpIC0gbG8pICogbmV4dCgpLFxyXG4gICAgZ2F1c3NpYW4oKSB7XHJcbiAgICAgIGlmIChzcGFyZSAhPT0gbnVsbCkgeyBjb25zdCB2ID0gc3BhcmU7IHNwYXJlID0gbnVsbDsgcmV0dXJuIHY7IH1cclxuICAgICAgbGV0IHUxID0gMDtcclxuICAgICAgd2hpbGUgKHUxID09PSAwKSB1MSA9IG5leHQoKTtcclxuICAgICAgY29uc3QgdTIgPSBuZXh0KCk7XHJcbiAgICAgIGNvbnN0IHIgPSBNYXRoLnNxcnQoLTIgKiBNYXRoLmxvZyh1MSkpO1xyXG4gICAgICBzcGFyZSA9IHIgKiBNYXRoLnNpbigyICogTWF0aC5QSSAqIHUyKTtcclxuICAgICAgcmV0dXJuIHIgKiBNYXRoLmNvcygyICogTWF0aC5QSSAqIHUyKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3dQcm9qZWN0aW9uKGxhdDAsIGxvbjApIHtcclxuICBjb25zdCBtUGVyRGVnTG9uID0gTV9QRVJfREVHX0xBVCAqIE1hdGguY29zKChsYXQwICogTWF0aC5QSSkgLyAxODApO1xyXG4gIHJldHVybiB7XHJcbiAgICB0b1hZOiAobGF0LCBsb24pID0+IFsobG9uIC0gbG9uMCkgKiBtUGVyRGVnTG9uLCAobGF0IC0gbGF0MCkgKiBNX1BFUl9ERUdfTEFUXSxcclxuICAgIHRvTGF0TG9uOiAoeCwgeSkgPT4gW2xhdDAgKyB5IC8gTV9QRVJfREVHX0xBVCwgbG9uMCArIHggLyBtUGVyRGVnTG9uXSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBvd1NlZ0ludGVyc2VjdFQoYXgsIGF5LCBieCwgYnksIGN4LCBjeSwgZHgsIGR5KSB7XHJcbiAgY29uc3QgcnggPSBieCAtIGF4LCByeSA9IGJ5IC0gYXksIHN4ID0gZHggLSBjeCwgc3kgPSBkeSAtIGN5O1xyXG4gIGNvbnN0IGRlbm9tID0gcnggKiBzeSAtIHJ5ICogc3g7XHJcbiAgaWYgKGRlbm9tID09PSAwKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCB0ID0gKChjeCAtIGF4KSAqIHN5IC0gKGN5IC0gYXkpICogc3gpIC8gZGVub207XHJcbiAgY29uc3QgdSA9ICgoY3ggLSBheCkgKiByeSAtIChjeSAtIGF5KSAqIHJ4KSAvIGRlbm9tO1xyXG4gIHJldHVybiB0ID49IDAgJiYgdCA8PSAxICYmIHUgPj0gMCAmJiB1IDw9IDEgPyB0IDogbnVsbDtcclxufVxyXG5cclxuLyoqIFVuaWZvcm0gZ3JpZCBvdmVyIHNob3JlbGluZSBzZWdtZW50czsgc2VnbWVudHMgcmVtZW1iZXIgcmluZyArIG9yZGluYWwgc29cclxuICogIGJlYWNoZWQgcGFydGljbGVzIGNhbiBiZSBjbHVzdGVyZWQgaW50byBjb250aWd1b3VzIHNob3JlbGluZSBhcmNzLiAqL1xyXG5mdW5jdGlvbiBvd1Nob3JlbGluZUluZGV4KHJpbmdzWFksIGNlbGxNID0gNTAwKSB7XHJcbiAgY29uc3Qgc2VncyA9IFtdLCBzZWdNZXRhID0gW107XHJcbiAgcmluZ3NYWS5mb3JFYWNoKChyaW5nLCByaW5nSWR4KSA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgYSA9IHJpbmdbaV0sIGIgPSByaW5nWyhpICsgMSkgJSByaW5nLmxlbmd0aF07XHJcbiAgICAgIGlmIChhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0pIGNvbnRpbnVlO1xyXG4gICAgICBzZWdzLnB1c2goW2FbMF0sIGFbMV0sIGJbMF0sIGJbMV1dKTtcclxuICAgICAgc2VnTWV0YS5wdXNoKHsgcmluZzogcmluZ0lkeCwgb3JkOiBpIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IGNlbGxzID0gbmV3IE1hcCgpO1xyXG4gIGNvbnN0IGtleSA9IChpLCBqKSA9PiBpICsgXCIsXCIgKyBqO1xyXG4gIHNlZ3MuZm9yRWFjaCgocywgaWR4KSA9PiB7XHJcbiAgICBjb25zdCBpMCA9IE1hdGguZmxvb3IoTWF0aC5taW4oc1swXSwgc1syXSkgLyBjZWxsTSksIGkxID0gTWF0aC5mbG9vcihNYXRoLm1heChzWzBdLCBzWzJdKSAvIGNlbGxNKTtcclxuICAgIGNvbnN0IGowID0gTWF0aC5mbG9vcihNYXRoLm1pbihzWzFdLCBzWzNdKSAvIGNlbGxNKSwgajEgPSBNYXRoLmZsb29yKE1hdGgubWF4KHNbMV0sIHNbM10pIC8gY2VsbE0pO1xyXG4gICAgZm9yIChsZXQgaSA9IGkwOyBpIDw9IGkxOyBpKyspXHJcbiAgICAgIGZvciAobGV0IGogPSBqMDsgaiA8PSBqMTsgaisrKSB7XHJcbiAgICAgICAgY29uc3QgayA9IGtleShpLCBqKTtcclxuICAgICAgICBsZXQgYXJyID0gY2VsbHMuZ2V0KGspO1xyXG4gICAgICAgIGlmICghYXJyKSB7IGFyciA9IFtdOyBjZWxscy5zZXQoaywgYXJyKTsgfVxyXG4gICAgICAgIGFyci5wdXNoKGlkeCk7XHJcbiAgICAgIH1cclxuICB9KTtcclxuICByZXR1cm4geyBzZWdzLCBzZWdNZXRhLCBjZWxscywgY2VsbE0sIGtleSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBvd0ZpcnN0Q3Jvc3NpbmcoaW5kZXgsIHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgY29uc3QgeyBzZWdzLCBjZWxscywgY2VsbE0sIGtleSB9ID0gaW5kZXg7XHJcbiAgY29uc3QgaTAgPSBNYXRoLmZsb29yKE1hdGgubWluKHgxLCB4MikgLyBjZWxsTSksIGkxID0gTWF0aC5mbG9vcihNYXRoLm1heCh4MSwgeDIpIC8gY2VsbE0pO1xyXG4gIGNvbnN0IGowID0gTWF0aC5mbG9vcihNYXRoLm1pbih5MSwgeTIpIC8gY2VsbE0pLCBqMSA9IE1hdGguZmxvb3IoTWF0aC5tYXgoeTEsIHkyKSAvIGNlbGxNKTtcclxuICBjb25zdCBzZWVuID0gbmV3IFNldCgpO1xyXG4gIGxldCBiZXN0ID0gbnVsbDtcclxuICBmb3IgKGxldCBpID0gaTA7IGkgPD0gaTE7IGkrKylcclxuICAgIGZvciAobGV0IGogPSBqMDsgaiA8PSBqMTsgaisrKSB7XHJcbiAgICAgIGNvbnN0IGFyciA9IGNlbGxzLmdldChrZXkoaSwgaikpO1xyXG4gICAgICBpZiAoIWFycikgY29udGludWU7XHJcbiAgICAgIGZvciAoY29uc3QgaWR4IG9mIGFycikge1xyXG4gICAgICAgIGlmIChzZWVuLmhhcyhpZHgpKSBjb250aW51ZTtcclxuICAgICAgICBzZWVuLmFkZChpZHgpO1xyXG4gICAgICAgIGNvbnN0IHMgPSBzZWdzW2lkeF07XHJcbiAgICAgICAgY29uc3QgdCA9IG93U2VnSW50ZXJzZWN0VCh4MSwgeTEsIHgyLCB5Miwgc1swXSwgc1sxXSwgc1syXSwgc1szXSk7XHJcbiAgICAgICAgaWYgKHQgIT09IG51bGwgJiYgKGJlc3QgPT09IG51bGwgfHwgdCA8IGJlc3QudCkpIGJlc3QgPSB7IHQsIGlkeCB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgaWYgKGJlc3QgPT09IG51bGwpIHJldHVybiBudWxsO1xyXG4gIHJldHVybiB7XHJcbiAgICB0OiBiZXN0LnQsIGlkeDogYmVzdC5pZHgsXHJcbiAgICB4OiB4MSArIGJlc3QudCAqICh4MiAtIHgxKSwgeTogeTEgKyBiZXN0LnQgKiAoeTIgLSB5MSksXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZleEh1bGwocG9pbnRzWFkpIHtcclxuICBjb25zdCBwdHMgPSBbLi4ucG9pbnRzWFldLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdIHx8IGFbMV0gLSBiWzFdKTtcclxuICBpZiAocHRzLmxlbmd0aCA8IDMpIHJldHVybiBwdHM7XHJcbiAgY29uc3QgY3Jvc3MgPSAobywgYSwgYikgPT4gKGFbMF0gLSBvWzBdKSAqIChiWzFdIC0gb1sxXSkgLSAoYVsxXSAtIG9bMV0pICogKGJbMF0gLSBvWzBdKTtcclxuICBjb25zdCBsb3dlciA9IFtdO1xyXG4gIGZvciAoY29uc3QgcCBvZiBwdHMpIHtcclxuICAgIHdoaWxlIChsb3dlci5sZW5ndGggPj0gMiAmJiBjcm9zcyhsb3dlcltsb3dlci5sZW5ndGggLSAyXSwgbG93ZXJbbG93ZXIubGVuZ3RoIC0gMV0sIHApIDw9IDApIGxvd2VyLnBvcCgpO1xyXG4gICAgbG93ZXIucHVzaChwKTtcclxuICB9XHJcbiAgY29uc3QgdXBwZXIgPSBbXTtcclxuICBmb3IgKGxldCBpID0gcHRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICBjb25zdCBwID0gcHRzW2ldO1xyXG4gICAgd2hpbGUgKHVwcGVyLmxlbmd0aCA+PSAyICYmIGNyb3NzKHVwcGVyW3VwcGVyLmxlbmd0aCAtIDJdLCB1cHBlclt1cHBlci5sZW5ndGggLSAxXSwgcCkgPD0gMCkgdXBwZXIucG9wKCk7XHJcbiAgICB1cHBlci5wdXNoKHApO1xyXG4gIH1cclxuICBsb3dlci5wb3AoKTsgdXBwZXIucG9wKCk7XHJcbiAgcmV0dXJuIGxvd2VyLmNvbmNhdCh1cHBlcik7XHJcbn1cclxuXHJcbi8qKiBQcm90ZWN0aXZlL2V4Y2x1c2lvbiBib29tIGZvciBhIHNob3JlbGluZSBhcmMgKG9wZW4gd2F0ZXIgw6LigqzigJ0gdGhlIHJpdmVyXHJcbiAqICBkZWZsZWN0aW9uIHJ1bGUgc2luKHRoZXRhKT0wLjM1L3YgZG9lcyBOT1QgYXBwbHkgd2l0aCBubyBwZXJzaXN0ZW50XHJcbiAqICBjdXJyZW50KS4gUGxhbm5pbmctbGV2ZWw6IGFyYyBsZW5ndGggKyByZXNlcnZlLCA1MC1mdCBzdGlja3MuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlc3RpbWF0ZVNob3JlbGluZUJvb20obGVuZ3RoTSwgb3B0cyA9IHt9KSB7XHJcbiAgY29uc3QgcmVzZXJ2ZVBjdCA9IG9wdHMucmVzZXJ2ZVBjdCA/PyAyMDtcclxuICBjb25zdCBhbmNob3JTcGFjaW5nRnQgPSBvcHRzLmFuY2hvclNwYWNpbmdGdCA/PyAxMDA7XHJcbiAgaWYgKCEobGVuZ3RoTSA+IDApKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBib29tRnQgPSBNYXRoLmNlaWwoKGxlbmd0aE0gKiAzLjI4MDg0ICogKDEgKyByZXNlcnZlUGN0IC8gMTAwKSkgLyA1MCkgKiA1MDtcclxuICByZXR1cm4geyBib29tX2Z0OiBib29tRnQsIGFuY2hvcnM6IE1hdGgubWF4KDIsIE1hdGguY2VpbChib29tRnQgLyBhbmNob3JTcGFjaW5nRnQpICsgMSksIHByb3RlY3RpdmU6IHRydWUgfTtcclxufVxyXG5cclxuLyoqIE9uZSBwYXJ0aWNsZSBzZXQuIFB1cmUgKyBkZXRlcm1pbmlzdGljIChzZWVkZWQpLiBJbnRlcm5hbC4gKi9cclxuZnVuY3Rpb24gb3dTaW11bGF0ZSh7IHgwLCB5MCwgdE1zMCwgd2luZFNlcmllcywgaW5kZXgsIG93LCB1bmNlcnRhaW50eSwgc2VlZCB9KSB7XHJcbiAgY29uc3Qgcm5nID0gb3dNYWtlUm5nKHNlZWQpO1xyXG4gIGNvbnN0IGR0ID0gb3cudGltZXN0ZXBTO1xyXG4gIGNvbnN0IG5TdGVwcyA9IE1hdGgucm91bmQoKG93LmR1cmF0aW9uSHIgKiAzNjAwKSAvIGR0KTtcclxuICBjb25zdCBzdGVwc1BlckhvdXIgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKDM2MDAgLyBkdCkpO1xyXG5cclxuICAvLyB3aW5kYWdlOiBleHBsaWNpdCBwZXJzaXN0ZW5jZSBmb3IgZHQgPD0gcGVyc2lzdCAocmVmZXJlbmNlIHJhbmdlIGFzLWlzKTtcclxuICAvLyBwZXItc3RlcCBkcmF3cyB3aXRoIHRoZSBBcHAuIEMgcmVzY2FsZWQgcmFuZ2Ugb25seSBmb3IgZHQgPiBwZXJzaXN0XHJcbiAgY29uc3Qgd01lYW4gPSAob3cud2luZGFnZU1pbiArIG93LndpbmRhZ2VNYXgpIC8gMjtcclxuICBsZXQgd0hhbGYgPSAob3cud2luZGFnZU1heCAtIG93LndpbmRhZ2VNaW4pIC8gMjtcclxuICBsZXQgd1BlcnNpc3RTID0gb3cud2luZGFnZVBlcnNpc3RTO1xyXG4gIGlmIChkdCA+IHdQZXJzaXN0Uykge1xyXG4gICAgd0hhbGYgKj0gTWF0aC5zcXJ0KHdQZXJzaXN0UyAvIGR0KTtcclxuICAgIHdQZXJzaXN0UyA9IGR0O1xyXG4gIH1cclxuICBjb25zdCBkcmF3V2luZGFnZSA9ICgpID0+IE1hdGgubWF4KDAsIHdNZWFuICsgcm5nLnVuaWZvcm0oLXdIYWxmLCB3SGFsZikpO1xyXG4gIGNvbnN0IGRpZmZTdGVwID0gTWF0aC5zcXJ0KDYgKiBvdy5kaWZmdXNpb25NMnMgKiBkdCk7XHJcbiAgY29uc3QgYW5nQ2FwID0gTWF0aC5QSSAvIDM7IC8vIMOCwrE2MMOCwrAgY2FwIG9uIHdpbmQtYW5nbGUgcGVydHVyYmF0aW9uIChHTk9NRSDDgsKnMTUpXHJcbiAgY29uc3QgcFJlZmxvYXQgPSBvdy5yZWZsb2F0SGFsZkxpZmVIciA+IDBcclxuICAgID8gMSAtIE1hdGgucG93KDIsIC0oZHQgLyAzNjAwKSAvIG93LnJlZmxvYXRIYWxmTGlmZUhyKVxyXG4gICAgOiAwOyAvLyA8PSAwIGRpc2FibGVzIHJlZmxvYXRpbmcgKE5PVCBcImluc3RhbnRcIilcclxuXHJcbiAgY29uc3QgTiA9IG93Lm5QYXJ0aWNsZXM7XHJcbiAgY29uc3QgUCA9IG5ldyBBcnJheShOKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IE47IGkrKykge1xyXG4gICAgUFtpXSA9IHtcclxuICAgICAgeDogeDAsIHk6IHkwLCBiZWFjaGVkOiBmYWxzZSwgbGFzdFg6IHgwLCBsYXN0WTogeTAsXHJcbiAgICAgIGJlYWNoVE1zOiBudWxsLCBiZWFjaFNlZzogbnVsbCxcclxuICAgICAgd2luZGFnZTogZHJhd1dpbmRhZ2UoKSwgd2luZGFnZUFnZVM6IDAsXHJcbiAgICAgIHBlcnRGOiAxLCBwZXJ0QTogMCwgcGVydEFnZVM6IDAsXHJcbiAgICB9O1xyXG4gICAgaWYgKHVuY2VydGFpbnR5KSBkcmF3UGVydHVyYihQW2ldKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gZHJhd1BlcnR1cmIocCkge1xyXG4gICAgcC5wZXJ0RiA9IE1hdGguZXhwKHJuZy5nYXVzc2lhbigpICogMC4zKTsgLy8gbG9nbm9ybWFsIHNwZWVkIGZhY3RvciwgbWVkaWFuIDFcclxuICAgIHAucGVydEEgPSBNYXRoLm1heCgtYW5nQ2FwLCBNYXRoLm1pbihhbmdDYXAsIChybmcuZ2F1c3NpYW4oKSAqIDIwICogTWF0aC5QSSkgLyAxODApKTtcclxuICAgIHAucGVydEFnZVMgPSAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaG91cmx5ID0gW107XHJcbiAgY29uc3Qgc25hcHNob3QgPSAoaHIpID0+IHtcclxuICAgIGNvbnN0IHBvcyA9IG5ldyBBcnJheShOKTtcclxuICAgIGxldCBjeCA9IDAsIGN5ID0gMCwgbmIgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyBpKyspIHtcclxuICAgICAgcG9zW2ldID0gW1BbaV0ueCwgUFtpXS55XTtcclxuICAgICAgY3ggKz0gUFtpXS54OyBjeSArPSBQW2ldLnk7XHJcbiAgICAgIGlmIChQW2ldLmJlYWNoZWQpIG5iKys7XHJcbiAgICB9XHJcbiAgICBob3VybHkucHVzaCh7IGhyLCBjZW50cm9pZFhZOiBbY3ggLyBOLCBjeSAvIE5dLCBiZWFjaGVkQ291bnQ6IG5iLCBwb3NpdGlvbnM6IHBvcyB9KTtcclxuICB9O1xyXG4gIHNuYXBzaG90KDApO1xyXG5cclxuICBmb3IgKGxldCBzdGVwID0gMTsgc3RlcCA8PSBuU3RlcHM7IHN0ZXArKykge1xyXG4gICAgY29uc3QgdE1zID0gdE1zMCArIChzdGVwIC0gMSkgKiBkdCAqIDEwMDA7IC8vIGZvcmNpbmcgYXQgaW50ZXJ2YWwgc3RhcnQgKGZvcndhcmQgRXVsZXIpXHJcbiAgICBjb25zdCBbd3UwLCB3djBdID0gb3dXaW5kQXQod2luZFNlcmllcywgdE1zKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHAgPSBQW2ldO1xyXG4gICAgICBpZiAocC5iZWFjaGVkKSB7XHJcbiAgICAgICAgaWYgKHBSZWZsb2F0ID4gMCAmJiBybmcubmV4dCgpIDwgcFJlZmxvYXQpIHtcclxuICAgICAgICAgIHAuYmVhY2hlZCA9IGZhbHNlOyBwLnggPSBwLmxhc3RYOyBwLnkgPSBwLmxhc3RZO1xyXG4gICAgICAgIH0gZWxzZSBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBwLndpbmRhZ2VBZ2VTICs9IGR0O1xyXG4gICAgICBpZiAocC53aW5kYWdlQWdlUyA+PSB3UGVyc2lzdFMpIHsgcC53aW5kYWdlID0gZHJhd1dpbmRhZ2UoKTsgcC53aW5kYWdlQWdlUyA9IDA7IH1cclxuICAgICAgbGV0IHd1ID0gd3UwLCB3diA9IHd2MDtcclxuICAgICAgaWYgKHVuY2VydGFpbnR5KSB7XHJcbiAgICAgICAgcC5wZXJ0QWdlUyArPSBkdDtcclxuICAgICAgICBpZiAocC5wZXJ0QWdlUyA+PSAxMDgwMCkgZHJhd1BlcnR1cmIocCk7IC8vIDMgaCBwZXJzaXN0ZW5jZVxyXG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhwLnBlcnRBKSwgcyA9IE1hdGguc2luKHAucGVydEEpO1xyXG4gICAgICAgIHd1ID0gcC5wZXJ0RiAqICh3dTAgKiBjIC0gd3YwICogcyk7XHJcbiAgICAgICAgd3YgPSBwLnBlcnRGICogKHd1MCAqIHMgKyB3djAgKiBjKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBueCA9IHAueCArIHAud2luZGFnZSAqIHd1ICogZHQgKyBybmcudW5pZm9ybSgtMSwgMSkgKiBkaWZmU3RlcDtcclxuICAgICAgY29uc3QgbnkgPSBwLnkgKyBwLndpbmRhZ2UgKiB3diAqIGR0ICsgcm5nLnVuaWZvcm0oLTEsIDEpICogZGlmZlN0ZXA7XHJcbiAgICAgIGlmIChpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGhpdCA9IG93Rmlyc3RDcm9zc2luZyhpbmRleCwgcC54LCBwLnksIG54LCBueSk7XHJcbiAgICAgICAgaWYgKGhpdCkge1xyXG4gICAgICAgICAgcC5sYXN0WCA9IHAueDsgcC5sYXN0WSA9IHAueTsgLy8gbGFzdCB3YXRlciBwb3NpdGlvbiAoR05PTUUgw4LCpzE0KVxyXG4gICAgICAgICAgY29uc3QgbGVuID0gTWF0aC5oeXBvdChueCAtIHAueCwgbnkgLSBwLnkpIHx8IDE7XHJcbiAgICAgICAgICBwLnggPSBoaXQueCAtIChueCAtIHAueCkgLyBsZW47IC8vIGxhbmQgMSBtIHNob3J0IG9mIHRoZSBjcm9zc2luZ1xyXG4gICAgICAgICAgcC55ID0gaGl0LnkgLSAobnkgLSBwLnkpIC8gbGVuO1xyXG4gICAgICAgICAgcC5iZWFjaGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHAuYmVhY2hTZWcgPSBoaXQuaWR4O1xyXG4gICAgICAgICAgaWYgKHAuYmVhY2hUTXMgPT09IG51bGwpIHAuYmVhY2hUTXMgPSB0TXMgKyBkdCAqIDEwMDA7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcC54ID0gbng7IHAueSA9IG55O1xyXG4gICAgfVxyXG4gICAgaWYgKHN0ZXAgJSBzdGVwc1BlckhvdXIgPT09IDApIHNuYXBzaG90KHN0ZXAgLyBzdGVwc1BlckhvdXIpO1xyXG4gIH1cclxuICByZXR1cm4geyBwYXJ0aWNsZXM6IFAsIGhvdXJseSB9O1xyXG59XHJcblxyXG4vKipcclxuICogZmV0Y2hPcGVuV2F0ZXJEYXRhIMOi4oKs4oCdIGFsbCBuZXR3b3JrIGZvciBvbmUgb3Blbi13YXRlciBydW4uIFdhdGVyYm9keSBtYXkgYmVcclxuICogcGFzc2VkIHByZS1mZXRjaGVkIChydW5UcmFjZSBkaXNwYXRjaCBhbHJlYWR5IHF1ZXJpZWQgaXQpLlxyXG4gKiBzdGFydE9mZnNldEhyIHNoaWZ0cyB0aGUgc2ltIHN0YXJ0IGludG8gdGhlIGZvcmVjYXN0IChpbXBvdW5kbWVudFxyXG4gKiBjb250aW51YXRpb25zIHN0YXJ0IHdoZW4gdGhlIHJpdmVyIHBsdW1lIEFSUklWRVMsIG5vdCBub3cpLlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoT3BlbldhdGVyRGF0YShsYXQsIGxvbiwgY29uZmlnID0ge30sIHdhdGVyYm9keSA9IG51bGwsIHN0YXJ0T2Zmc2V0SHIgPSAwKSB7XHJcbiAgY29uc3QgY2ZnID0geyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH07XHJcbiAgY29uc3Qgb3cgPSB7IC4uLkRFRkFVTFRfT1BFTldBVEVSLCAuLi4oY29uZmlnLm9wZW5XYXRlciB8fCB7fSkgfTtcclxuICBjb25zdCB3YiA9IHdhdGVyYm9keSB8fCAoYXdhaXQgcXVlcnlXYXRlcmJvZHkobGF0LCBsb24sIGNvbmZpZykpO1xyXG4gIGlmICghd2IpIHRocm93IG5ldyBFcnJvcihcInBvaW50IGlzIG5vdCBpbnNpZGUgYW4gTkhEIHdhdGVyYm9keVwiKTtcclxuICBjb25zdCB3aW5kID0gYXdhaXQgZmV0Y2hXaW5kU2VyaWVzKGxhdCwgbG9uLCBzdGFydE9mZnNldEhyICsgb3cuZHVyYXRpb25Icik7XHJcbiAgY29uc3QgZmV0Y2hTZXRzID0gYXN5bmMgKHByb3ZpZGVycykgPT4gUHJvbWlzZS5hbGwoXHJcbiAgICAocHJvdmlkZXJzIHx8IFtdKS5tYXAoYXN5bmMgKHApID0+ICh7XHJcbiAgICAgIG5hbWU6IHAubmFtZSwgYnVmZmVyX206IHAuYnVmZmVyX20gPz8gNDAwLCBmZWF0czogYXdhaXQgcC5mZXRjaCgpLFxyXG4gICAgfSkpLFxyXG4gICk7XHJcbiAgY29uc3QgW3NpdGVTZXRzLCByZWNlcHRvclNldHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICBbZmV0Y2hTZXRzKGNmZy5zaXRlUHJvdmlkZXJzKSwgZmV0Y2hTZXRzKGNmZy5yZWNlcHRvclByb3ZpZGVycyldLFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxhdCwgbG9uLCB3YXRlcmJvZHk6IHdiLFxyXG4gICAgd2luZFNlcmllczogd2luZC5zZXJpZXMsIHdpbmRTb3VyY2U6IHdpbmQuc291cmNlLFxyXG4gICAgc2l0ZVNldHMsIHJlY2VwdG9yU2V0cyxcclxuICAgIHN0YXJ0T2Zmc2V0SHIsXHJcbiAgICBzdGFydFRNczogRGF0ZS5ub3coKSArIHN0YXJ0T2Zmc2V0SHIgKiAzNjAwMDAwLFxyXG4gICAgZmV0Y2hlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgfTtcclxufVxyXG5cclxuLyoqIFJlLWFpbSBjYWNoZWQgb3Blbi13YXRlciBkYXRhIGF0IGEgbmV3IHN0YXJ0IG9mZnNldCAoc2FmZXR5LWZhY3RvclxyXG4gKiAgcmUtcnVucyBtb3ZlIHRoZSByaXZlciBFVEEgaW50byB0aGUgaW1wb3VuZG1lbnQgw6LigqzigJ0gd2luZCArIHBvbHlnb24gYXJlXHJcbiAqICByZXVzYWJsZSwgb25seSB0aGUgY2xvY2sgc2hpZnRzKS4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYmFzZU9wZW5XYXRlckRhdGEoZGF0YSwgc3RhcnRPZmZzZXRIcikge1xyXG4gIHJldHVybiB7IC4uLmRhdGEsIHN0YXJ0T2Zmc2V0SHIsIHN0YXJ0VE1zOiBEYXRlLm5vdygpICsgc3RhcnRPZmZzZXRIciAqIDM2MDAwMDAgfTtcclxufVxyXG5cclxuY29uc3QgQ09NUEFTUyA9IFtcIk5cIiwgXCJOTkVcIiwgXCJORVwiLCBcIkVORVwiLCBcIkVcIiwgXCJFU0VcIiwgXCJTRVwiLCBcIlNTRVwiLCBcIlNcIiwgXCJTU1dcIiwgXCJTV1wiLCBcIldTV1wiLCBcIldcIiwgXCJXTldcIiwgXCJOV1wiLCBcIk5OV1wiXTtcclxuY29uc3QgY29tcGFzcyA9IChkZWcpID0+IENPTVBBU1NbTWF0aC5yb3VuZCgoKChkZWcgJSAzNjApICsgMzYwKSAlIDM2MCkgLyAyMi41KSAlIDE2XTtcclxuXHJcbi8qKiBjb21wdXRlT3BlbldhdGVyIMOi4oKs4oCdIHB1cmUgZ2l2ZW4gZGF0YSArIGNvbmZpZyAoc2VlZGVkIFJORyBpbiBydW5SZWNvcmQpLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZU9wZW5XYXRlcihkYXRhLCBjb25maWcgPSB7fSkge1xyXG4gIGNvbnN0IG93ID0geyAuLi5ERUZBVUxUX09QRU5XQVRFUiwgLi4uKGNvbmZpZy5vcGVuV2F0ZXIgfHwge30pIH07XHJcbiAgY29uc3QgbG9nID0gKG0pID0+ICh7IC4uLkRFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfSkudmVyYm9zZSAmJiBjb25zb2xlLmxvZyhtKTtcclxuICBjb25zdCB0MCA9IERhdGUubm93KCk7XHJcbiAgY29uc3QgcHJvaiA9IG93UHJvamVjdGlvbihkYXRhLmxhdCwgZGF0YS5sb24pO1xyXG4gIGNvbnN0IHJpbmdzWFkgPSBkYXRhLndhdGVyYm9keS5yaW5ncy5tYXAoKHIpID0+IHIubWFwKChbbG8sIGxhXSkgPT4gcHJvai50b1hZKGxhLCBsbykpKTtcclxuICBjb25zdCBpbmRleCA9IG93U2hvcmVsaW5lSW5kZXgocmluZ3NYWSk7XHJcblxyXG4gIGNvbnN0IHNpbUFyZ3MgPSB7XHJcbiAgICB4MDogMCwgeTA6IDAsIHRNczA6IGRhdGEuc3RhcnRUTXMsIHdpbmRTZXJpZXM6IGRhdGEud2luZFNlcmllcywgaW5kZXgsIG93LFxyXG4gIH07XHJcbiAgY29uc3QgYmVzdCA9IG93U2ltdWxhdGUoeyAuLi5zaW1BcmdzLCB1bmNlcnRhaW50eTogZmFsc2UsIHNlZWQ6IG93LnNlZWQgfSk7XHJcbiAgY29uc3QgcmVncmV0ID0gb3dTaW11bGF0ZSh7IC4uLnNpbUFyZ3MsIHVuY2VydGFpbnR5OiB0cnVlLCBzZWVkOiBvdy5zZWVkICsgMSB9KTtcclxuXHJcbiAgY29uc3QgdG9MYXRMb25SaW5nID0gKGh1bGxYWSkgPT5cclxuICAgIGh1bGxYWS5sZW5ndGggPj0gMyA/IFsuLi5odWxsWFksIGh1bGxYWVswXV0ubWFwKChbeCwgeV0pID0+IHtcclxuICAgICAgY29uc3QgW2xhLCBsb10gPSBwcm9qLnRvTGF0TG9uKHgsIHkpO1xyXG4gICAgICByZXR1cm4gW01hdGgucm91bmQobG8gKiAxZTYpIC8gMWU2LCBNYXRoLnJvdW5kKGxhICogMWU2KSAvIDFlNl07XHJcbiAgICB9KSA6IG51bGw7XHJcblxyXG4gIGNvbnN0IGhvdXJseSA9IGJlc3QuaG91cmx5LmZpbHRlcigoaCkgPT4gaC5ociA+IDApLm1hcCgoaCkgPT4ge1xyXG4gICAgY29uc3QgW2NsYSwgY2xvXSA9IHByb2oudG9MYXRMb24oLi4uaC5jZW50cm9pZFhZKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhvdXI6IGguaHIsXHJcbiAgICAgIGFic19ocjogTWF0aC5yb3VuZCgoZGF0YS5zdGFydE9mZnNldEhyICsgaC5ocikgKiAxMDApIC8gMTAwLFxyXG4gICAgICBjZW50cm9pZDogeyBsYXQ6IE1hdGgucm91bmQoY2xhICogMWU2KSAvIDFlNiwgbG9uOiBNYXRoLnJvdW5kKGNsbyAqIDFlNikgLyAxZTYgfSxcclxuICAgICAgaHVsbDogdG9MYXRMb25SaW5nKGNvbnZleEh1bGwoaC5wb3NpdGlvbnMpKSxcclxuICAgICAgYmVhY2hlZF9jb3VudDogaC5iZWFjaGVkQ291bnQsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIGNvbnN0IHVuY2VydGFpbnR5SG91cmx5ID0gcmVncmV0LmhvdXJseS5maWx0ZXIoKGgpID0+IGguaHIgPiAwKS5tYXAoKGgpID0+ICh7XHJcbiAgICBob3VyOiBoLmhyLCBodWxsOiB0b0xhdExvblJpbmcoY29udmV4SHVsbChoLnBvc2l0aW9ucykpLFxyXG4gIH0pKTtcclxuXHJcbiAgLy8gc2hvcmVsaW5lIGltcGFjdHM6IGNsdXN0ZXIgYmVhY2hlZCBwYXJ0aWNsZXMgaW50byBjb250aWd1b3VzIHNob3JlIGFyY3NcclxuICBjb25zdCB7IHNlZ01ldGEgfSA9IGluZGV4O1xyXG4gIGNvbnN0IGJ5UmluZyA9IG5ldyBNYXAoKTtcclxuICBmb3IgKGNvbnN0IHAgb2YgYmVzdC5wYXJ0aWNsZXMpIHtcclxuICAgIGlmIChwLmJlYWNoU2VnID09PSBudWxsKSBjb250aW51ZTtcclxuICAgIGNvbnN0IG0gPSBzZWdNZXRhW3AuYmVhY2hTZWddO1xyXG4gICAgbGV0IGFyciA9IGJ5UmluZy5nZXQobS5yaW5nKTtcclxuICAgIGlmICghYXJyKSB7IGFyciA9IFtdOyBieVJpbmcuc2V0KG0ucmluZywgYXJyKTsgfVxyXG4gICAgYXJyLnB1c2goeyBvcmQ6IG0ub3JkLCBocjogKHAuYmVhY2hUTXMgLSBkYXRhLnN0YXJ0VE1zKSAvIDM2MDAwMDAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGltcGFjdHMgPSBbXTtcclxuICBmb3IgKGNvbnN0IFtyaW5nSWR4LCBoaXRzXSBvZiBieVJpbmcpIHtcclxuICAgIGhpdHMuc29ydCgoYSwgYikgPT4gYS5vcmQgLSBiLm9yZCk7XHJcbiAgICBjb25zdCByaW5nID0gZGF0YS53YXRlcmJvZHkucmluZ3NbcmluZ0lkeF07XHJcbiAgICBsZXQgY2wgPSBudWxsO1xyXG4gICAgY29uc3QgZmx1c2ggPSAoKSA9PiB7IGlmIChjbCkgeyBpbXBhY3RzLnB1c2goY2wpOyBjbCA9IG51bGw7IH0gfTtcclxuICAgIGZvciAoY29uc3QgaCBvZiBoaXRzKSB7XHJcbiAgICAgIGlmIChjbCAmJiBoLm9yZCAtIGNsLm1heE9yZCA8PSBvdy5zaG9yZUdhcFNlZ3MpIHtcclxuICAgICAgICBjbC5tYXhPcmQgPSBNYXRoLm1heChjbC5tYXhPcmQsIGgub3JkKTtcclxuICAgICAgICBjbC5ocnMucHVzaChoLmhyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmbHVzaCgpO1xyXG4gICAgICAgIGNsID0geyByaW5nOiByaW5nSWR4LCBtaW5PcmQ6IGgub3JkLCBtYXhPcmQ6IGgub3JkLCBocnM6IFtoLmhyXSB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmbHVzaCgpO1xyXG4gICAgLy8gTk9URTogYSBjbHVzdGVyIHdyYXBwaW5nIGEgcmluZydzIGluZGV4IG9yaWdpbiBzcGxpdHMgaW4gdHdvIMOi4oKs4oCdIGNvc21ldGljXHJcbiAgICBmb3IgKGNvbnN0IGMgb2YgaW1wYWN0cy5maWx0ZXIoKGMpID0+IGMucmluZyA9PT0gcmluZ0lkeCAmJiAhYy5saW5lKSkge1xyXG4gICAgICBjb25zdCBwdHMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IGMubWluT3JkOyBpIDw9IE1hdGgubWluKGMubWF4T3JkICsgMSwgcmluZy5sZW5ndGggLSAxKTsgaSsrKSBwdHMucHVzaChyaW5nW2ldKTtcclxuICAgICAgaWYgKHB0cy5sZW5ndGggPCAyKSBwdHMucHVzaChyaW5nW01hdGgubWluKGMubWF4T3JkLCByaW5nLmxlbmd0aCAtIDEpXSk7XHJcbiAgICAgIGxldCBsZW5NID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIGxlbk0gKz0gaGF2ZXJzaW5lTShwdHNbaSAtIDFdWzFdLCBwdHNbaSAtIDFdWzBdLCBwdHNbaV1bMV0sIHB0c1tpXVswXSk7XHJcbiAgICAgIGMuaHJzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICAgICAgY29uc3QgbWlkID0gcHRzWyhwdHMubGVuZ3RoIC8gMikgfCAwXTtcclxuICAgICAgYy5saW5lID0gcHRzLm1hcCgoW2xvLCBsYV0pID0+IFtNYXRoLnJvdW5kKGxvICogMWU2KSAvIDFlNiwgTWF0aC5yb3VuZChsYSAqIDFlNikgLyAxZTZdKTtcclxuICAgICAgYy5vdXQgPSB7XHJcbiAgICAgICAgY291bnQ6IGMuaHJzLmxlbmd0aCxcclxuICAgICAgICBzaGFyZV9wY3Q6IE1hdGgucm91bmQoKDEwMDAgKiBjLmhycy5sZW5ndGgpIC8gb3cublBhcnRpY2xlcykgLyAxMCxcclxuICAgICAgICBmaXJzdF9ocjogTWF0aC5yb3VuZChjLmhyc1swXSAqIDEwKSAvIDEwLFxyXG4gICAgICAgIGZpcnN0X2Fic19ocjogTWF0aC5yb3VuZCgoZGF0YS5zdGFydE9mZnNldEhyICsgYy5ocnNbMF0pICogMTApIC8gMTAsXHJcbiAgICAgICAgbWVkaWFuX2hyOiBNYXRoLnJvdW5kKGMuaHJzWyhjLmhycy5sZW5ndGggLyAyKSB8IDBdICogMTApIC8gMTAsXHJcbiAgICAgICAgbGVuZ3RoX206IE1hdGgucm91bmQobGVuTSksXHJcbiAgICAgICAgY2VudGVyOiB7IGxhdDogbWlkWzFdLCBsb246IG1pZFswXSB9LFxyXG4gICAgICAgIGxpbmU6IGMubGluZSxcclxuICAgICAgICBib29tOiBlc3RpbWF0ZVNob3JlbGluZUJvb20obGVuTSksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHNob3JlSW1wYWN0cyA9IGltcGFjdHMubWFwKChjKSA9PiBjLm91dClcclxuICAgIC5zb3J0KChhLCBiKSA9PiBiLmNvdW50IC0gYS5jb3VudClcclxuICAgIC5zbGljZSgwLCBvdy5tYXhTaG9yZUltcGFjdHMpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYS5maXJzdF9ociAtIGIuZmlyc3RfaHIpO1xyXG5cclxuICAvLyBzaXRlIEVUQXM6IGZpcnN0IGhvdXIgYW55IGJlc3QtZ3Vlc3MgcGFydGljbGUgY29tZXMgd2l0aGluIHRoZSBidWZmZXJcclxuICBjb25zdCBzaXRlcyA9IFtdO1xyXG4gIGZvciAoY29uc3Qgc2V0IG9mIGRhdGEuc2l0ZVNldHMgfHwgW10pIHtcclxuICAgIGNvbnN0IGJ1ZiA9IHNldC5idWZmZXJfbSA/PyA0MDA7XHJcbiAgICBmb3IgKGNvbnN0IGYgb2Ygc2V0LmZlYXRzIHx8IFtdKSB7XHJcbiAgICAgIGlmIChmLmxhdCA9PT0gdW5kZWZpbmVkIHx8IGYubG9uID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICBjb25zdCBbZngsIGZ5XSA9IHByb2oudG9YWShmLmxhdCwgZi5sb24pO1xyXG4gICAgICBsZXQgZXRhID0gbnVsbCwgb2Zmc2V0ID0gbnVsbDtcclxuICAgICAgZm9yIChjb25zdCBoIG9mIGJlc3QuaG91cmx5KSB7XHJcbiAgICAgICAgaWYgKGguaHIgPT09IDApIGNvbnRpbnVlO1xyXG4gICAgICAgIGxldCBkbWluID0gSW5maW5pdHk7XHJcbiAgICAgICAgZm9yIChjb25zdCBbeCwgeV0gb2YgaC5wb3NpdGlvbnMpIHtcclxuICAgICAgICAgIGNvbnN0IGQgPSBNYXRoLmh5cG90KHggLSBmeCwgeSAtIGZ5KTtcclxuICAgICAgICAgIGlmIChkIDwgZG1pbikgZG1pbiA9IGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkbWluIDw9IGJ1ZikgeyBldGEgPSBoLmhyOyBvZmZzZXQgPSBNYXRoLnJvdW5kKGRtaW4pOyBicmVhazsgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChldGEgIT09IG51bGwpIHtcclxuICAgICAgICBjb25zdCB7IGxhdDogX2EsIGxvbjogX2IsIC4uLnJlc3QgfSA9IGY7XHJcbiAgICAgICAgc2l0ZXMucHVzaCh7XHJcbiAgICAgICAgICAuLi5yZXN0LFxyXG4gICAgICAgICAgZXRhX2hyOiBNYXRoLnJvdW5kKChkYXRhLnN0YXJ0T2Zmc2V0SHIgKyBldGEpICogMTAwKSAvIDEwMCxcclxuICAgICAgICAgIG9mZnNldF9tOiBvZmZzZXQsXHJcbiAgICAgICAgICBvcGVuX3dhdGVyOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNpdGVzLnNvcnQoKGEsIGIpID0+IGEuZXRhX2hyIC0gYi5ldGFfaHIpO1xyXG5cclxuICAvLyBkb3dud2luZCBoZWFkbGluZSBmcm9tIHRoZSBmaXJzdC0xMmggbWVhbiB3aW5kICsgZWFybGllc3QgYXJyaXZhbHNcclxuICBjb25zdCB3YXJuaW5ncyA9IFtdO1xyXG4gIGxldCBoZWFkbGluZSA9IG51bGw7XHJcbiAge1xyXG4gICAgbGV0IHN1ID0gMCwgc3YgPSAwLCBuID0gMDtcclxuICAgIGZvciAobGV0IGhyID0gMDsgaHIgPCAxMjsgaHIrKykge1xyXG4gICAgICBjb25zdCBbdSwgdl0gPSBvd1dpbmRBdChkYXRhLndpbmRTZXJpZXMsIGRhdGEuc3RhcnRUTXMgKyBociAqIDM2MDAwMDApO1xyXG4gICAgICBzdSArPSB1OyBzdiArPSB2OyBuKys7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzcGQgPSBNYXRoLmh5cG90KHN1IC8gbiwgc3YgLyBuKTtcclxuICAgIGNvbnN0IHRvd2FyZERlZyA9IChNYXRoLmF0YW4yKHN1IC8gbiwgc3YgLyBuKSAqIDE4MCkgLyBNYXRoLlBJO1xyXG4gICAgY29uc3QgYmVzdEZpcnN0ID0gc2hvcmVJbXBhY3RzLmxlbmd0aCA/IHNob3JlSW1wYWN0c1swXSA6IG51bGw7XHJcbiAgICBjb25zdCByZWdyZXRUaW1lcyA9IHJlZ3JldC5wYXJ0aWNsZXMuZmlsdGVyKChwKSA9PiBwLmJlYWNoVE1zICE9PSBudWxsKVxyXG4gICAgICAubWFwKChwKSA9PiAocC5iZWFjaFRNcyAtIGRhdGEuc3RhcnRUTXMpIC8gMzYwMDAwMCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgY29uc3QgZWFybHkgPSByZWdyZXRUaW1lcy5sZW5ndGggPyBNYXRoLnJvdW5kKHJlZ3JldFRpbWVzWzBdICogMTApIC8gMTAgOiBudWxsO1xyXG4gICAgaGVhZGxpbmUgPVxyXG4gICAgICBgV2luZCAke3NwZC50b0ZpeGVkKDEpfSBtL3Mgw6LigKDigJkgZHJpZnRpbmcgJHtjb21wYXNzKHRvd2FyZERlZyl9YCArXHJcbiAgICAgIChiZXN0Rmlyc3RcclxuICAgICAgICA/IGA7IGZpcnN0IHNob3JlbGluZSBhcnJpdmFsIH4ke2Vhcmx5ICE9PSBudWxsICYmIGVhcmx5IDwgYmVzdEZpcnN0LmZpcnN0X2hyID8gZWFybHkgKyBcIsOi4oKs4oCcXCIgOiBcIlwifSR7YmVzdEZpcnN0LmZpcnN0X2hyfSBoYFxyXG4gICAgICAgIDogYDsgbm8gc2hvcmVsaW5lIGFycml2YWwgd2l0aGluICR7b3cuZHVyYXRpb25Icn0gaCAoYmVzdCBndWVzcylgKTtcclxuICAgIGlmIChzcGQgPCAxLjUpIHdhcm5pbmdzLnB1c2goXHJcbiAgICAgIFwiTGlnaHQvdmFyaWFibGUgd2luZCDDouKCrOKAnSBkcmlmdCBkaXJlY3Rpb24gaXMgTE9XIENPTkZJREVOQ0U7IHRyZWF0IHRoZSB1bmNlcnRhaW50eSBlbnZlbG9wZSBhcyB0aGUgcGxhbm5pbmcgZm9vdHByaW50LlwiKTtcclxuICB9XHJcbiAgd2FybmluZ3MucHVzaChcclxuICAgIFwiT3Blbi13YXRlciBtb2RlbDogd2luZC1kcmlmdCBzdXJmYWNlIHRyYW5zcG9ydCBvbmx5IChHTk9NRS1jbGFzcyBwaHlzaWNzKSDDouKCrOKAnSBubyB3ZWF0aGVyaW5nLCBubyBsYWtlLWNpcmN1bGF0aW9uIGN1cnJlbnRzOyBFVEFzIGFyZSBmb3JlY2FzdC13aW5kIGRlcGVuZGVudC5cIik7XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgIG1vZGU6IFwib3Blbi13YXRlclwiLFxyXG4gICAgd2F0ZXJib2R5OiB7IG5hbWU6IGRhdGEud2F0ZXJib2R5Lm5hbWUsIGFyZWFfc3FrbTogZGF0YS53YXRlcmJvZHkuYXJlYV9zcWttLCBmdHlwZTogZGF0YS53YXRlcmJvZHkuZnR5cGUgfSxcclxuICAgIHNwaWxsX3BvaW50OiB7IGxhdDogZGF0YS5sYXQsIGxvbjogZGF0YS5sb24gfSxcclxuICAgIHN0YXJ0X29mZnNldF9ocjogZGF0YS5zdGFydE9mZnNldEhyLFxyXG4gICAgZHVyYXRpb25faHI6IG93LmR1cmF0aW9uSHIsXHJcbiAgICBoZWFkbGluZSxcclxuICAgIGhvdXJseSxcclxuICAgIHVuY2VydGFpbnR5X2hvdXJseTogdW5jZXJ0YWludHlIb3VybHksXHJcbiAgICBzaG9yZV9pbXBhY3RzOiBzaG9yZUltcGFjdHMsXHJcbiAgICBzaXRlcyxcclxuICAgIHdhcm5pbmdzLFxyXG4gICAgc3RhdHM6IHtcclxuICAgICAgbl9wYXJ0aWNsZXM6IG93Lm5QYXJ0aWNsZXMsXHJcbiAgICAgIGJlYWNoZWRfZmluYWw6IGJlc3QucGFydGljbGVzLmZpbHRlcigocCkgPT4gcC5iZWFjaGVkKS5sZW5ndGgsXHJcbiAgICAgIGV2ZXJfYmVhY2hlZDogYmVzdC5wYXJ0aWNsZXMuZmlsdGVyKChwKSA9PiBwLmJlYWNoVE1zICE9PSBudWxsKS5sZW5ndGgsXHJcbiAgICAgIGNvbXB1dGVfbXM6IERhdGUubm93KCkgLSB0MCxcclxuICAgIH0sXHJcbiAgICBydW5SZWNvcmQ6IHtcclxuICAgICAgZW5naW5lX3ZlcnNpb246IEVOR0lORV9WRVJTSU9OLFxyXG4gICAgICBtb2RlOiBcIm9wZW4td2F0ZXJcIixcclxuICAgICAgZ2VuZXJhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIGRhdGFfZmV0Y2hlZF9hdDogZGF0YS5mZXRjaGVkQXQsXHJcbiAgICAgIHNwaWxsX3BvaW50OiB7IGxhdDogZGF0YS5sYXQsIGxvbjogZGF0YS5sb24gfSxcclxuICAgICAgd2F0ZXJib2R5OiB7IG5hbWU6IGRhdGEud2F0ZXJib2R5Lm5hbWUsIGFyZWFfc3FrbTogZGF0YS53YXRlcmJvZHkuYXJlYV9zcWttLCBmdHlwZTogZGF0YS53YXRlcmJvZHkuZnR5cGUsIHJpbmdzOiBkYXRhLndhdGVyYm9keS5yaW5ncy5sZW5ndGggfSxcclxuICAgICAgd2luZF9zb3VyY2U6IGRhdGEud2luZFNvdXJjZSxcclxuICAgICAgd2luZF9wb2ludHM6IGRhdGEud2luZFNlcmllcy5sZW5ndGgsXHJcbiAgICAgIHN0YXJ0X29mZnNldF9ocjogZGF0YS5zdGFydE9mZnNldEhyLFxyXG4gICAgICBzZWVkOiBvdy5zZWVkLFxyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBuX3BhcnRpY2xlczogb3cublBhcnRpY2xlcywgZHVyYXRpb25faHI6IG93LmR1cmF0aW9uSHIsIHRpbWVzdGVwX3M6IG93LnRpbWVzdGVwUyxcclxuICAgICAgICB3aW5kYWdlOiBbb3cud2luZGFnZU1pbiwgb3cud2luZGFnZU1heF0sIGRpZmZ1c2lvbl9tMnM6IG93LmRpZmZ1c2lvbk0ycyxcclxuICAgICAgICByZWZsb2F0X2hhbGZfbGlmZV9ocjogb3cucmVmbG9hdEhhbGZMaWZlSHIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNob3JlbGluZV9zZWdtZW50czogaW5kZXguc2Vncy5sZW5ndGgsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbG9nKGAgIE9QRU4gV0FURVI6ICR7ZGF0YS53YXRlcmJvZHkubmFtZX0gw6LigqzigJ0gJHtyZXN1bHQuc3RhdHMuZXZlcl9iZWFjaGVkfS8ke293Lm5QYXJ0aWNsZXN9IGJlYWNoZWQsIGAgK1xyXG4gICAgYCR7c2hvcmVJbXBhY3RzLmxlbmd0aH0gc2hvcmUgaW1wYWN0cywgJHtzaXRlcy5sZW5ndGh9IHNpdGVzLCAke3Jlc3VsdC5zdGF0cy5jb21wdXRlX21zfSBtc2ApO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5PcGVuV2F0ZXIobGF0LCBsb24sIGNvbmZpZyA9IHt9LCB3YXRlcmJvZHkgPSBudWxsKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoT3BlbldhdGVyRGF0YShsYXQsIGxvbiwgY29uZmlnLCB3YXRlcmJvZHkpO1xyXG4gIHJldHVybiBjb21wdXRlT3BlbldhdGVyKGRhdGEsIGNvbmZpZyk7XHJcbn1cclxuXHJcbi8qKiBSaXZlciB0cmFjZSBlbmRlZCBhdCBhbiBpbXBvdW5kbWVudCDDouKAoOKAmSBjb250aW51ZSBhcyBvcGVuIHdhdGVyIGZyb20gdGhlXHJcbiAqICBlbnRyeSBwb2ludCwgY2xvY2sgb2Zmc2V0IGJ5IHRoZSByaXZlciBFVEEuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5PcGVuV2F0ZXJDb250aW51YXRpb24ocml2ZXJSZXN1bHQsIGNvbmZpZyA9IHt9KSB7XHJcbiAgY29uc3Qgc3AgPSByaXZlclJlc3VsdC5pbXBvdW5kX3N0b3BfcG9pbnQ7XHJcbiAgaWYgKCFzcCkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoT3BlbldhdGVyRGF0YShzcC5sYXQsIHNwLmxvbiwgY29uZmlnLCBudWxsLCBzcC5ldGFfaHIpO1xyXG4gIGNvbnN0IG93UmVzID0gY29tcHV0ZU9wZW5XYXRlcihkYXRhLCBjb25maWcpO1xyXG4gIG93UmVzLmNvbnRpbnVhdGlvbl9vZiA9IHtcclxuICAgIHJpdmVyOiByaXZlclJlc3VsdC5yaXZlcl9uYW1lLFxyXG4gICAgZW50ZXJlZDogc3AubmFtZSxcclxuICAgIHJpdmVyX2V0YV9ocjogc3AuZXRhX2hyLFxyXG4gIH07XHJcbiAgb3dSZXMud2FybmluZ3MudW5zaGlmdChcclxuICAgIGBDb250aW51YXRpb246IHJpdmVyIHBsdW1lIGVudGVycyAke3NwLm5hbWV9IGF0IH4ke3NwLmV0YV9ocn0gaDsgb3Blbi13YXRlciBob3VycyBiZWxvdyBhcmUgQUJTT0xVVEUgZnJvbSB0aGUgc3BpbGwgKGFic19ocikuYCk7XHJcbiAgcmV0dXJuIG93UmVzO1xyXG59XHJcblxyXG4vKiogT3Blbi13YXRlciByZXN1bHQgYXMgR2VvSlNPTiAoaHVsbHMsIGNlbnRyb2lkIHRyYWNrLCBzaG9yZSBpbXBhY3RzKS4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvT3BlbldhdGVyR2VvSnNvbihvdykge1xyXG4gIGNvbnN0IGZlYXR1cmVzID0gW3tcclxuICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgcHJvcGVydGllczogeyBraW5kOiBcIm93X3NwaWxsX3BvaW50XCIsIHdhdGVyYm9keTogb3cud2F0ZXJib2R5Lm5hbWUsIGhlYWRsaW5lOiBvdy5oZWFkbGluZSB9LFxyXG4gICAgZ2VvbWV0cnk6IHsgdHlwZTogXCJQb2ludFwiLCBjb29yZGluYXRlczogW293LnNwaWxsX3BvaW50Lmxvbiwgb3cuc3BpbGxfcG9pbnQubGF0XSB9LFxyXG4gIH1dO1xyXG4gIGZlYXR1cmVzLnB1c2goe1xyXG4gICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICBwcm9wZXJ0aWVzOiB7IGtpbmQ6IFwib3dfY2VudHJvaWRfdHJhY2tcIiB9LFxyXG4gICAgZ2VvbWV0cnk6IHsgdHlwZTogXCJMaW5lU3RyaW5nXCIsIGNvb3JkaW5hdGVzOiBvdy5ob3VybHkubWFwKChoKSA9PiBbaC5jZW50cm9pZC5sb24sIGguY2VudHJvaWQubGF0XSkgfSxcclxuICB9KTtcclxuICBmb3IgKGNvbnN0IGggb2Ygb3cuaG91cmx5KSB7XHJcbiAgICBpZiAoaC5odWxsKSBmZWF0dXJlcy5wdXNoKHtcclxuICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgIHByb3BlcnRpZXM6IHsga2luZDogXCJvd19odWxsXCIsIGhvdXI6IGguaG91ciwgYWJzX2hyOiBoLmFic19ociwgYmVhY2hlZF9jb3VudDogaC5iZWFjaGVkX2NvdW50IH0sXHJcbiAgICAgIGdlb21ldHJ5OiB7IHR5cGU6IFwiUG9seWdvblwiLCBjb29yZGluYXRlczogW2guaHVsbF0gfSxcclxuICAgIH0pO1xyXG4gIH1cclxuICBmb3IgKGNvbnN0IGggb2Ygb3cudW5jZXJ0YWludHlfaG91cmx5KSB7XHJcbiAgICBpZiAoaC5odWxsKSBmZWF0dXJlcy5wdXNoKHtcclxuICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgIHByb3BlcnRpZXM6IHsga2luZDogXCJvd191bmNlcnRhaW50eV9odWxsXCIsIGhvdXI6IGguaG91ciB9LFxyXG4gICAgICBnZW9tZXRyeTogeyB0eXBlOiBcIlBvbHlnb25cIiwgY29vcmRpbmF0ZXM6IFtoLmh1bGxdIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZm9yIChjb25zdCBzIG9mIG93LnNob3JlX2ltcGFjdHMpIHtcclxuICAgIGZlYXR1cmVzLnB1c2goe1xyXG4gICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGtpbmQ6IFwib3dfc2hvcmVfaW1wYWN0XCIsIGZpcnN0X2hyOiBzLmZpcnN0X2hyLCBtZWRpYW5faHI6IHMubWVkaWFuX2hyLFxyXG4gICAgICAgIHNoYXJlX3BjdDogcy5zaGFyZV9wY3QsIGxlbmd0aF9tOiBzLmxlbmd0aF9tLCBib29tX2Z0OiBzLmJvb20gPyBzLmJvb20uYm9vbV9mdCA6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIGdlb21ldHJ5OiB7IHR5cGU6IFwiTGluZVN0cmluZ1wiLCBjb29yZGluYXRlczogcy5saW5lIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHsgdHlwZTogXCJGZWF0dXJlQ29sbGVjdGlvblwiLCBmZWF0dXJlcyB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX0dyYXBoaWNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9Qb2ludF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X1BvbHlsaW5lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfZ2VvbWV0cnlFbmdpbmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfRmVhdHVyZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0dyYXBoaWNzTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKipcbiAqIFNwaWxsIFRyYWplY3Rvcnkgd2lkZ2V0IOKAlCBydW50aW1lLlxuICpcbiAqIENsaWNrIFwiU2V0IHNwaWxsIHBvaW50XCIg4oaSIGNsaWNrIHRoZSBtYXAg4oaSIHRoZSBnb2xkZW4tdGVzdGVkIHRyYWNlIGVuZ2luZVxuICogKHRyYWNlLWVuZ2luZS50cywgcGFyaXR5LXZlcmlmaWVkIHZzIHRoZSBQeXRob24gb3JhY2xlKSBkcmF3cyBhbiBlcGhlbWVyYWxcbiAqIHRpbWUtY29sb3JlZCBwbHVtZSBvbiBhIGNsaWVudC1zaWRlIEdyYXBoaWNzTGF5ZXIgd2l0aCBob3VybHkgbWFya2VycyxcbiAqIHBsdXMgYW4gRVRBLXNvcnRlZCBzdHJhdGVneS1zaXRlIGxpc3QgYW5kIHJlY2VwdG9yIHdhcm5pbmdzLlxuICogTm90aGluZyBpcyBwZXJzaXN0ZWQg4oCUIENsZWFyIChvciB3aWRnZXQgdW5tb3VudCkgcmVtb3ZlcyBldmVyeXRoaW5nLlxuICovXG5pbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCB0eXBlIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJ1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInXG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnXG5pbXBvcnQgUG9seWxpbmUgZnJvbSAnZXNyaS9nZW9tZXRyeS9Qb2x5bGluZSdcbmltcG9ydCBQb2ludCBmcm9tICdlc3JpL2dlb21ldHJ5L1BvaW50J1xuaW1wb3J0IHsgZ2VvZGVzaWNMZW5ndGggfSBmcm9tICdlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lJ1xuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZywgU2l0ZUxheWVyQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHtcbiAgZmV0Y2hUcmFjZURhdGEsIGNvbXB1dGVUcmFjZSwgZXN0aW1hdGVCb29tTmVlZHMsXG4gIHJlc29sdmVUcmFjZU1vZGUsIGZldGNoT3BlbldhdGVyRGF0YSwgY29tcHV0ZU9wZW5XYXRlciwgcmViYXNlT3BlbldhdGVyRGF0YSxcbn0gZnJvbSAnLi4vdHJhY2UtZW5naW5lJ1xuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSA9IFJlYWN0XG5cbi8vIEVUQSBjb2xvciBiYW5kczogPDMgaHIgLyAz4oCTMTIgaHIgLyAxMuKAkzI0IGhyXG5jb25zdCBCQU5EX0NPTE9SUzogQXJyYXk8W251bWJlciwgc3RyaW5nXT4gPSBbXG4gIFszLCAnI2Q3MTkxYyddLFxuICBbMTIsICcjZmRhZTYxJ10sXG4gIFsyNCwgJyMyYzdiYjYnXSxcbl1cbmNvbnN0IGJhbmRDb2xvciA9IChocjogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgZm9yIChjb25zdCBbbGltLCBjXSBvZiBCQU5EX0NPTE9SUykgaWYgKGhyIDwgbGltKSByZXR1cm4gY1xuICByZXR1cm4gJyMyYzdiYjYnXG59XG5jb25zdCBoZXhUb1JnYiA9IChoZXg6IHN0cmluZyk6IG51bWJlcltdID0+IFtcbiAgcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNiksIHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpLCBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KSxcbl1cblxuaW50ZXJmYWNlIFNpdGVSb3cge1xuICBuYW1lOiBzdHJpbmdcbiAgZXRhX2hyOiBudW1iZXJcbiAgZGlzdF9rbTogbnVtYmVyXG4gIG9mZnNldF9tOiBudW1iZXJcbiAgcml2ZXJfd2lkdGhfbT86IG51bWJlclxuICB2ZWxvY2l0eV9tcz86IG51bWJlclxuICBib29tPzogeyBib29tX2Z0OiBudW1iZXIsIGFuY2hvcnM6IG51bWJlciwgYm9vbV9hbmdsZV9kZWc/OiBudW1iZXIsIGNhc2NhZGVfYWR2aXNlZD86IGJvb2xlYW4sIHNvdXJjZTogJ2RyYXduJyB8ICdlc3QnIH1cbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5jb25zdCBub3JtR3VpZCA9ICh2OiBhbnkpOiBzdHJpbmcgPT4gU3RyaW5nKHYgfHwgJycpLnJlcGxhY2UoL1t7fV0vZywgJycpLnRvTG93ZXJDYXNlKClcblxuLyoqIFN1bSBnZW9kZXNpYyBmZWV0IG9mIGRyYXduIGJvb20gbGluZXMgcGVyIHNpdGUga2V5IChlLmcuIFNuYWtlIEJvb21fTGluZXMpLiAqL1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEcmF3bkJvb20oY2ZnOiB7IHVybDogc3RyaW5nLCBzaXRlS2V5RmllbGQ6IHN0cmluZywgd2hlcmU/OiBzdHJpbmcgfSk6IFByb21pc2U8TWFwPHN0cmluZywgbnVtYmVyPj4ge1xuICBjb25zdCBmbCA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmw6IGNmZy51cmwgfSlcbiAgY29uc3QgcSA9IGZsLmNyZWF0ZVF1ZXJ5KClcbiAgcS53aGVyZSA9IGNmZy53aGVyZSB8fCAnMT0xJ1xuICBxLm91dEZpZWxkcyA9IFtjZmcuc2l0ZUtleUZpZWxkXVxuICBxLnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxuICBxLm91dFNwYXRpYWxSZWZlcmVuY2UgPSB7IHdraWQ6IDQzMjYgfSBhcyBhbnlcbiAgY29uc3QgZnMgPSBhd2FpdCBmbC5xdWVyeUZlYXR1cmVzKHEpXG4gIGNvbnN0IG91dCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcbiAgZm9yIChjb25zdCBmIG9mIGZzLmZlYXR1cmVzKSB7XG4gICAgY29uc3Qga2V5ID0gbm9ybUd1aWQoZi5hdHRyaWJ1dGVzW2NmZy5zaXRlS2V5RmllbGRdKVxuICAgIGlmICgha2V5IHx8ICFmLmdlb21ldHJ5KSBjb250aW51ZVxuICAgIGNvbnN0IGZ0ID0gZ2VvZGVzaWNMZW5ndGgoZi5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWxpbmUsICdmZWV0JylcbiAgICBpZiAoZnQgPiAwKSBvdXQuc2V0KGtleSwgKG91dC5nZXQoa2V5KSB8fCAwKSArIGZ0KVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pID0+IHtcbiAgY29uc3QgW2ptdiwgc2V0Sm12XSA9IHVzZVN0YXRlPEppbXVNYXBWaWV3PihudWxsKVxuICBjb25zdCBbYXJtaW5nLCBzZXRBcm1pbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtydW5uaW5nLCBzZXRSdW5uaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJ0NsaWNrIFwiU2V0IHNwaWxsIHBvaW50XCIsIHRoZW4gY2xpY2sgdGhlIHdhdGVyIChyaXZlciwgbGFrZSwgb3IgcmVzZXJ2b2lyKS4nKVxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8YW55PihudWxsKVxuICBjb25zdCBbc2FmZXR5LCBzZXRTYWZldHldID0gdXNlU3RhdGU8bnVtYmVyPihwcm9wcy5jb25maWcuc2FmZXR5RmFjdG9yID8/IDEuNSlcbiAgY29uc3QgW2RpYWcsIHNldERpYWddID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGxheWVyUmVmID0gdXNlUmVmPF9fZXNyaS5HcmFwaGljc0xheWVyPihudWxsKVxuICBjb25zdCBjbGlja0hhbmRsZVJlZiA9IHVzZVJlZjxfX2VzcmkuSGFuZGxlPihudWxsKVxuICAvLyBjYWNoZWQgaHlkcm9sb2d5IGZvciB0aGUgY3VycmVudCBzcGlsbCBwb2ludCDigJQgc2FmZXR5LWZhY3RvciBjaGFuZ2VzXG4gIC8vIHJlY29tcHV0ZSBmcm9tIHRoaXMgaW5zdGFudGx5IGluc3RlYWQgb2YgcmUtZmV0Y2hpbmcgTkxESS9OV0lTLlxuICAvLyBtb2RlICdvcGVuLXdhdGVyJyBjYWNoZXMgb3dEYXRhIGluc3RlYWQgKFNGIGRvZXMgbm90IGFwcGx5IHRoZXJlKS5cbiAgY29uc3QgY2FjaGVSZWYgPSB1c2VSZWY8eyBsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIsIG1vZGU/OiBzdHJpbmcsIGRhdGE/OiBhbnksIG93RGF0YT86IGFueSwgZHJhd24/OiBNYXA8c3RyaW5nLCBudW1iZXI+LCBmZXRjaE5vdGVzOiBzdHJpbmdbXSB9IHwgbnVsbD4obnVsbClcbiAgLy8gcmVzZXJ2b2lyLWNvbnRpbnVhdGlvbiBjYWNoZTogd2luZCArIGxha2UgcG9seWdvbiBwZXIgaW1wb3VuZG1lbnQgc3RvcFxuICAvLyBwb2ludCDigJQgU0YgcmUtcnVucyBvbmx5IHNoaWZ0IHRoZSBlbnRyeSBjbG9jayAocmViYXNlT3BlbldhdGVyRGF0YSlcbiAgY29uc3Qgb3dDb250UmVmID0gdXNlUmVmPHsga2V5OiBzdHJpbmcsIGRhdGE6IGFueSB9IHwgbnVsbD4obnVsbClcblxuICAvLyBvbmUgZ3JhcGhpY3MgbGF5ZXIgcGVyIHdpZGdldCBsaWZldGltZTsgcmVtb3ZlZCBvbiB1bm1vdW50IChlcGhlbWVyYWwpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChjbGlja0hhbmRsZVJlZi5jdXJyZW50KSBjbGlja0hhbmRsZVJlZi5jdXJyZW50LnJlbW92ZSgpXG4gICAgICBpZiAobGF5ZXJSZWYuY3VycmVudCAmJiBqbXYpIGptdi52aWV3Lm1hcC5yZW1vdmUobGF5ZXJSZWYuY3VycmVudClcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbam12XSlcblxuICBjb25zdCBlbnN1cmVMYXllciA9ICh2aWV3OiBfX2VzcmkuTWFwVmlldyk6IF9fZXNyaS5HcmFwaGljc0xheWVyID0+IHtcbiAgICBpZiAoIWxheWVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGxheWVyUmVmLmN1cnJlbnQgPSBuZXcgR3JhcGhpY3NMYXllcih7IHRpdGxlOiAnU3BpbGwgdHJhamVjdG9yeSAoZXBoZW1lcmFsKScsIGxpc3RNb2RlOiAnaGlkZScgfSlcbiAgICAgIHZpZXcubWFwLmFkZChsYXllclJlZi5jdXJyZW50KVxuICAgIH1cbiAgICByZXR1cm4gbGF5ZXJSZWYuY3VycmVudFxuICB9XG5cbiAgLy8gLS0tLSBwcm92aWRlcnM6IHdyYXAgY29uZmlndXJlZCBsYXllcnMgZm9yIHRoZSBlbmdpbmUgLS0tLVxuICAvLyBGYWlsdXJlcyBhcmUgcmVwb3J0ZWQgdG8gdGhlIGRpYWdub3N0aWNzIGxpc3QgaW5zdGVhZCBvZiBraWxsaW5nIHRoZSB0cmFjZS5cbiAgY29uc3QgbWFrZVNpdGVQcm92aWRlciA9IChsYzogU2l0ZUxheWVyQ29uZmlnLCBkZWZhdWx0QnVmZmVyOiBudW1iZXIsIGxhYmVsOiBzdHJpbmcsIG5vdGVzOiBzdHJpbmdbXSkgPT4gKHtcbiAgICBidWZmZXJfbTogbGMuYnVmZmVyTSA/PyBkZWZhdWx0QnVmZmVyLFxuICAgIGZldGNoOiBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmbCA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmw6IGxjLnVybCB9KVxuICAgICAgICBjb25zdCBxID0gZmwuY3JlYXRlUXVlcnkoKVxuICAgICAgICBxLndoZXJlID0gbGMud2hlcmUgfHwgJzE9MSdcbiAgICAgICAgcS5vdXRGaWVsZHMgPSBbbGMubmFtZUZpZWxkLCAuLi4obGMuZXh0cmFGaWVsZHMgfHwgW10pXVxuICAgICAgICBxLnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxuICAgICAgICBxLm91dFNwYXRpYWxSZWZlcmVuY2UgPSB7IHdraWQ6IDQzMjYgfSBhcyBhbnlcbiAgICAgICAgY29uc3QgZnMgPSBhd2FpdCBmbC5xdWVyeUZlYXR1cmVzKHEpXG4gICAgICAgIGNvbnN0IHJvd3MgPSBmcy5mZWF0dXJlc1xuICAgICAgICAgIC5maWx0ZXIoKGYpID0+IGYuZ2VvbWV0cnkgJiYgZi5nZW9tZXRyeS50eXBlID09PSAncG9pbnQnKVxuICAgICAgICAgIC5tYXAoKGYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBmLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2ludFxuICAgICAgICAgICAgY29uc3Qgcm93OiBhbnkgPSB7IG5hbWU6IGYuYXR0cmlidXRlc1tsYy5uYW1lRmllbGRdLCBsYXQ6IGcueSwgbG9uOiBnLnggfVxuICAgICAgICAgICAgZm9yIChjb25zdCBlZiBvZiBsYy5leHRyYUZpZWxkcyB8fCBbXSkgcm93W2VmXSA9IGYuYXR0cmlidXRlc1tlZl1cbiAgICAgICAgICAgIHJldHVybiByb3dcbiAgICAgICAgICB9KVxuICAgICAgICBub3Rlcy5wdXNoKGAke2xhYmVsfTogJHtyb3dzLmxlbmd0aH0gcG9pbnQgZmVhdHVyZXMgbG9hZGVkIChidWZmZXIgJHtsYy5idWZmZXJNID8/IGRlZmF1bHRCdWZmZXJ9IG0pYClcbiAgICAgICAgcmV0dXJuIHJvd3NcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbm90ZXMucHVzaChgJHtsYWJlbH0gRkFJTEVEOiAke1N0cmluZyhlKS5zbGljZSgwLCAxMDApfWApXG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgbWFrZVdpZHRoUHJvdmlkZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2wgPSBwcm9wcy5jb25maWcud2lkdGhMYXllclxuICAgIGlmICghd2wgfHwgIXdsLnVybCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCBmbCA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmw6IHdsLnVybCB9KVxuICAgIHJldHVybiBhc3luYyAoZW52OiB7IHhtaW46IG51bWJlciwgeW1pbjogbnVtYmVyLCB4bWF4OiBudW1iZXIsIHltYXg6IG51bWJlciB9KSA9PiB7XG4gICAgICBjb25zdCBxID0gZmwuY3JlYXRlUXVlcnkoKVxuICAgICAgcS53aGVyZSA9IHdsLndoZXJlIHx8ICcxPTEnXG4gICAgICBxLmdlb21ldHJ5ID0geyB0eXBlOiAnZXh0ZW50JywgLi4uZW52LCBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSB9IGFzIGFueVxuICAgICAgcS5zcGF0aWFsUmVsYXRpb25zaGlwID0gJ2ludGVyc2VjdHMnXG4gICAgICBxLm91dEZpZWxkcyA9IFt3bC53aWR0aEZpZWxkXVxuICAgICAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcbiAgICAgIHEub3V0U3BhdGlhbFJlZmVyZW5jZSA9IHsgd2tpZDogNDMyNiB9IGFzIGFueVxuICAgICAgY29uc3QgZnMgPSBhd2FpdCBmbC5xdWVyeUZlYXR1cmVzKHEpXG4gICAgICBjb25zdCBtaWRzOiBBcnJheTx7IGxhdDogbnVtYmVyLCBsb246IG51bWJlciwgd2lkdGg6IG51bWJlciB9PiA9IFtdXG4gICAgICBmb3IgKGNvbnN0IGYgb2YgZnMuZmVhdHVyZXMpIHtcbiAgICAgICAgY29uc3QgZyA9IGYuZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlsaW5lXG4gICAgICAgIGlmIChnICYmIGcucGF0aHMgJiYgZy5wYXRocy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBwID0gZy5wYXRoc1swXVxuICAgICAgICAgIGNvbnN0IG0gPSBwW01hdGguZmxvb3IocC5sZW5ndGggLyAyKV1cbiAgICAgICAgICBtaWRzLnB1c2goeyBsYXQ6IG1bMV0sIGxvbjogbVswXSwgd2lkdGg6IGYuYXR0cmlidXRlc1t3bC53aWR0aEZpZWxkXSB8fCAwIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBtaWRzXG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLSBkcmF3aW5nIC0tLS1cbiAgY29uc3QgZHJhdyA9ICh2aWV3OiBfX2VzcmkuTWFwVmlldywgcmVzOiBhbnksIHNwaWxsOiB7IGxhdDogbnVtYmVyLCBsb246IG51bWJlciB9KSA9PiB7XG4gICAgY29uc3QgbGF5ZXIgPSBlbnN1cmVMYXllcih2aWV3KVxuICAgIGxheWVyLnJlbW92ZUFsbCgpXG5cbiAgICAvLyBzcGlsbCBwb2ludFxuICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICBnZW9tZXRyeTogbmV3IFBvaW50KHsgbGF0aXR1ZGU6IHNwaWxsLmxhdCwgbG9uZ2l0dWRlOiBzcGlsbC5sb24gfSksXG4gICAgICBzeW1ib2w6IHtcbiAgICAgICAgdHlwZTogJ3NpbXBsZS1tYXJrZXInLCBzdHlsZTogJ3gnLCBzaXplOiAxNCxcbiAgICAgICAgb3V0bGluZTogeyBjb2xvcjogJyMwMDAnLCB3aWR0aDogMyB9LFxuICAgICAgfSBhcyBhbnksXG4gICAgICBwb3B1cFRlbXBsYXRlOiB7IHRpdGxlOiAnU3BpbGwgcG9pbnQnLCBjb250ZW50OiBgJHtzcGlsbC5sYXQudG9GaXhlZCg1KX0sICR7c3BpbGwubG9uLnRvRml4ZWQoNSl9YCB9IGFzIGFueSxcbiAgICB9KSlcblxuICAgIC8vIHRyYWNlIHBvbHlsaW5lLCBzcGxpdCBpbnRvIEVUQSBjb2xvciBiYW5kc1xuICAgIGNvbnN0IHJvd3M6IGFueVtdID0gcmVzLnRyYWNlXG4gICAgbGV0IGJhbmRTdGFydCA9IDBcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkb25lID0gaSA9PT0gcm93cy5sZW5ndGhcbiAgICAgIGNvbnN0IGJhbmRDaGFuZ2VkID0gIWRvbmUgJiYgYmFuZENvbG9yKHJvd3NbaV0uY3VtX3RpbWUpICE9PSBiYW5kQ29sb3Iocm93c1tiYW5kU3RhcnRdLmN1bV90aW1lKVxuICAgICAgaWYgKGRvbmUgfHwgYmFuZENoYW5nZWQpIHtcbiAgICAgICAgY29uc3Qgc2VnID0gcm93cy5zbGljZShiYW5kU3RhcnQsIE1hdGgubWluKGkgKyAxLCByb3dzLmxlbmd0aCkpXG4gICAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2x5bGluZSh7IHBhdGhzOiBbc2VnLm1hcCgocikgPT4gW3IubG9uLCByLmxhdF0pXSBhcyBhbnksIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9IGFzIGFueSB9KSxcbiAgICAgICAgICBzeW1ib2w6IHsgdHlwZTogJ3NpbXBsZS1saW5lJywgY29sb3I6IGJhbmRDb2xvcihyb3dzW2JhbmRTdGFydF0uY3VtX3RpbWUpLCB3aWR0aDogNCB9IGFzIGFueSxcbiAgICAgICAgfSkpXG4gICAgICAgIGJhbmRTdGFydCA9IGlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBKb2Jzb24gdW5jZXJ0YWludHkgYmFuZHM6IHRyYW5zbHVjZW50IHVuZGVybGF5IGZyb20gYnVsayAocGVhaykgcG9zaXRpb25cbiAgICAvLyB0byBmYXJ0aGVzdCBjcmVkaWJsZSAoOTklIGxlYWRpbmcpIHBvc2l0aW9uIGF0IGVhY2ggaG91clxuICAgIGZvciAoY29uc3QgaCBvZiByZXMuaG91cmx5KSB7XG4gICAgICBpZiAoIWguYmFuZCkgY29udGludWVcbiAgICAgIGNvbnN0IGkwID0gTWF0aC5taW4oaC5iYW5kLnBlYWsuaSwgaC5iYW5kLmZhc3Rlc3QuaSlcbiAgICAgIGNvbnN0IGkxID0gTWF0aC5tYXgoaC5iYW5kLnBlYWsuaSwgaC5iYW5kLmZhc3Rlc3QuaSlcbiAgICAgIGlmIChpMSA8PSBpMCkgY29udGludWVcbiAgICAgIGNvbnN0IHNlZyA9IHJvd3Muc2xpY2UoaTAsIGkxICsgMSlcbiAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgUG9seWxpbmUoeyBwYXRoczogW3NlZy5tYXAoKHI6IGFueSkgPT4gW3IubG9uLCByLmxhdF0pXSBhcyBhbnksIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9IGFzIGFueSB9KSxcbiAgICAgICAgc3ltYm9sOiB7IHR5cGU6ICdzaW1wbGUtbGluZScsIGNvbG9yOiBbLi4uaGV4VG9SZ2IoYmFuZENvbG9yKGguaG91cikpLCAwLjI4XSwgd2lkdGg6IDE0LCBjYXA6ICdyb3VuZCcgfSBhcyBhbnksXG4gICAgICB9KSlcbiAgICB9XG4gICAgLy8gaG91cmx5IG1hcmtlcnMgKyBsYWJlbHNcbiAgICBmb3IgKGNvbnN0IGggb2YgcmVzLmhvdXJseSkge1xuICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludCh7IGxhdGl0dWRlOiBoLmxhdCwgbG9uZ2l0dWRlOiBoLmxvbiB9KSxcbiAgICAgICAgc3ltYm9sOiB7XG4gICAgICAgICAgdHlwZTogJ3NpbXBsZS1tYXJrZXInLCBzaXplOiA3LCBjb2xvcjogYmFuZENvbG9yKGguaG91ciksXG4gICAgICAgICAgb3V0bGluZTogeyBjb2xvcjogJyNmZmYnLCB3aWR0aDogMSB9LFxuICAgICAgICB9IGFzIGFueSxcbiAgICAgICAgcG9wdXBUZW1wbGF0ZToge1xuICAgICAgICAgIHRpdGxlOiBgSG91ciAke2guaG91cn1gLFxuICAgICAgICAgIGNvbnRlbnQ6IGAke2guY3VtX2Rpc3Rfa20udG9GaXhlZCgxKX0ga20gZG93bnN0cmVhbSDCtyAke2gudmVsb2NpdHlfbXBoLnRvRml4ZWQoMSl9IG1waGAsXG4gICAgICAgIH0gYXMgYW55LFxuICAgICAgfSkpXG4gICAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xuICAgICAgICBnZW9tZXRyeTogbmV3IFBvaW50KHsgbGF0aXR1ZGU6IGgubGF0LCBsb25naXR1ZGU6IGgubG9uIH0pLFxuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgdGV4dDogYCR7aC5ob3VyfSBocmAsXG4gICAgICAgICAgY29sb3I6IGJhbmRDb2xvcihoLmhvdXIpLFxuICAgICAgICAgIGhhbG9Db2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgIGhhbG9TaXplOiAxLjUsXG4gICAgICAgICAgeW9mZnNldDogOSxcbiAgICAgICAgICBmb250OiB7IHNpemU6IDEwLCB3ZWlnaHQ6ICdib2xkJywgZmFtaWx5OiAnc2Fucy1zZXJpZicgfSxcbiAgICAgICAgfSBhcyBhbnksXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tIG9wZW4td2F0ZXIgZHJhd2luZyAoZW5naW5lIHYxLjc6IGxha2VzL3Jlc2Vydm9pcnMsIEdOT01FLWNsYXNzKSAtLS0tXG4gIGNvbnN0IG93SHVsbEhvdXJzID0gKG93OiBhbnkpOiBudW1iZXJbXSA9PiB7XG4gICAgY29uc3QgYXZhaWwgPSBvdy5ob3VybHkubWFwKChoOiBhbnkpID0+IGguaG91cilcbiAgICBjb25zdCB3YW50ID0gWzMsIDYsIDEyLCBvdy5kdXJhdGlvbl9ocl0uZmlsdGVyKChoKSA9PiBhdmFpbC5pbmNsdWRlcyhoKSlcbiAgICBpZiAoIXdhbnQubGVuZ3RoICYmIGF2YWlsLmxlbmd0aCkgd2FudC5wdXNoKGF2YWlsW2F2YWlsLmxlbmd0aCAtIDFdKVxuICAgIHJldHVybiB3YW50XG4gIH1cblxuICBjb25zdCBkcmF3T3BlbldhdGVyID0gKHZpZXc6IF9fZXNyaS5NYXBWaWV3LCBvdzogYW55LCBhcHBlbmQgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IGxheWVyID0gZW5zdXJlTGF5ZXIodmlldylcbiAgICBpZiAoIWFwcGVuZCkgbGF5ZXIucmVtb3ZlQWxsKClcbiAgICBjb25zdCBhYnNIciA9IChoOiBudW1iZXIpID0+IChvdy5zdGFydF9vZmZzZXRfaHIgfHwgMCkgKyBoXG4gICAgLy8gbWluaW11bS1yZWdyZXQgZW52ZWxvcGUgKGZpbmFsIHVuY2VydGFpbnR5IGh1bGwpIHVuZGVyIGV2ZXJ5dGhpbmdcbiAgICBjb25zdCBsYXN0VSA9IG93LnVuY2VydGFpbnR5X2hvdXJseVtvdy51bmNlcnRhaW50eV9ob3VybHkubGVuZ3RoIC0gMV1cbiAgICBpZiAobGFzdFU/Lmh1bGwpIHtcbiAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICAgIGdlb21ldHJ5OiB7IHR5cGU6ICdwb2x5Z29uJywgcmluZ3M6IFtsYXN0VS5odWxsXSwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gfSBhcyBhbnksXG4gICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsIGNvbG9yOiBbMTIwLCAxMjAsIDEyMCwgMC4wOF0sXG4gICAgICAgICAgb3V0bGluZTogeyBjb2xvcjogWzkwLCA5MCwgOTAsIDAuOF0sIHdpZHRoOiAxLjUsIHN0eWxlOiAnZGFzaCcgfSxcbiAgICAgICAgfSBhcyBhbnksXG4gICAgICAgIHBvcHVwVGVtcGxhdGU6IHtcbiAgICAgICAgICB0aXRsZTogJ1VuY2VydGFpbnR5IGVudmVsb3BlJyxcbiAgICAgICAgICBjb250ZW50OiBgTWluaW11bS1yZWdyZXQgZm9vdHByaW50IGF0IGhvdXIgJHtsYXN0VS5ob3VyfSDigJQgcGxhbiB0byB0aGlzIG91dGxpbmUsIG5vdCB0aGUgYmVzdCBndWVzcy5gLFxuICAgICAgICB9IGFzIGFueSxcbiAgICAgIH0pKVxuICAgIH1cbiAgICAvLyBiZXN0LWd1ZXNzIGh1bGxzLCBsYXRlc3QgZmlyc3Qgc28gZWFybHkgKHNtYWxsKSBodWxscyBzdGF5IG9uIHRvcFxuICAgIGNvbnN0IGhycyA9IG93SHVsbEhvdXJzKG93KVxuICAgIGZvciAoY29uc3QgaHIgb2YgWy4uLmhyc10ucmV2ZXJzZSgpKSB7XG4gICAgICBjb25zdCBoID0gb3cuaG91cmx5LmZpbmQoKHg6IGFueSkgPT4geC5ob3VyID09PSBocilcbiAgICAgIGlmICghaD8uaHVsbCkgY29udGludWVcbiAgICAgIGNvbnN0IGMgPSBiYW5kQ29sb3IoYWJzSHIoaHIpKVxuICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IHsgdHlwZTogJ3BvbHlnb24nLCByaW5nczogW2guaHVsbF0sIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9IH0gYXMgYW55LFxuICAgICAgICBzeW1ib2w6IHsgdHlwZTogJ3NpbXBsZS1maWxsJywgY29sb3I6IFsuLi5oZXhUb1JnYihjKSwgMC4xNV0sIG91dGxpbmU6IHsgY29sb3I6IGMsIHdpZHRoOiAyIH0gfSBhcyBhbnksXG4gICAgICAgIHBvcHVwVGVtcGxhdGU6IHtcbiAgICAgICAgICB0aXRsZTogYEhvdXIgJHthYnNIcihocil9JHtvdy5zdGFydF9vZmZzZXRfaHIgPyAnIChhYnNvbHV0ZSBmcm9tIHNwaWxsKScgOiAnJ31gLFxuICAgICAgICAgIGNvbnRlbnQ6IGBCZXN0LWd1ZXNzIHBsdW1lIGZvb3RwcmludCDCtyAke2guYmVhY2hlZF9jb3VudH0vJHtvdy5zdGF0cy5uX3BhcnRpY2xlc30gcGFydGljbGVzIGFzaG9yZWAsXG4gICAgICAgIH0gYXMgYW55LFxuICAgICAgfSkpXG4gICAgfVxuICAgIC8vIGNlbnRyb2lkIGRyaWZ0IHRyYWNrICsgbGFiZWxzIGF0IGRyYXduIGh1bGxzXG4gICAgaWYgKG93LmhvdXJseS5sZW5ndGggPiAxKSB7XG4gICAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xuICAgICAgICBnZW9tZXRyeTogbmV3IFBvbHlsaW5lKHtcbiAgICAgICAgICBwYXRoczogW293LmhvdXJseS5tYXAoKGg6IGFueSkgPT4gW2guY2VudHJvaWQubG9uLCBoLmNlbnRyb2lkLmxhdF0pXSBhcyBhbnksXG4gICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gYXMgYW55LFxuICAgICAgICB9KSxcbiAgICAgICAgc3ltYm9sOiB7IHR5cGU6ICdzaW1wbGUtbGluZScsIGNvbG9yOiBbNDAsIDQwLCA0MCwgMC45XSwgd2lkdGg6IDIsIHN0eWxlOiAnc2hvcnQtZG90JyB9IGFzIGFueSxcbiAgICAgIH0pKVxuICAgICAgZm9yIChjb25zdCBociBvZiBocnMpIHtcbiAgICAgICAgY29uc3QgaCA9IG93LmhvdXJseS5maW5kKCh4OiBhbnkpID0+IHguaG91ciA9PT0gaHIpXG4gICAgICAgIGlmICghaCkgY29udGludWVcbiAgICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgICAgICBnZW9tZXRyeTogbmV3IFBvaW50KHsgbGF0aXR1ZGU6IGguY2VudHJvaWQubGF0LCBsb25naXR1ZGU6IGguY2VudHJvaWQubG9uIH0pLFxuICAgICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLCB0ZXh0OiBgJHthYnNIcihocil9IGhyYCwgY29sb3I6IGJhbmRDb2xvcihhYnNIcihocikpLFxuICAgICAgICAgICAgaGFsb0NvbG9yOiAnI2ZmZmZmZicsIGhhbG9TaXplOiAxLjUsIHlvZmZzZXQ6IDgsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDEwLCB3ZWlnaHQ6ICdib2xkJywgZmFtaWx5OiAnc2Fucy1zZXJpZicgfSxcbiAgICAgICAgICB9IGFzIGFueSxcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHNob3JlbGluZSBpbXBhY3RzIOKAlCB0aGUgYWN0aW9uYWJsZSBvdXRwdXRcbiAgICBmb3IgKGNvbnN0IHMgb2Ygb3cuc2hvcmVfaW1wYWN0cykge1xuICAgICAgY29uc3QgYyA9IGJhbmRDb2xvcihzLmZpcnN0X2Fic19ociA/PyBzLmZpcnN0X2hyKVxuICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2x5bGluZSh7IHBhdGhzOiBbcy5saW5lXSBhcyBhbnksIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9IGFzIGFueSB9KSxcbiAgICAgICAgc3ltYm9sOiB7IHR5cGU6ICdzaW1wbGUtbGluZScsIGNvbG9yOiBjLCB3aWR0aDogNiwgY2FwOiAncm91bmQnIH0gYXMgYW55LFxuICAgICAgICBwb3B1cFRlbXBsYXRlOiB7XG4gICAgICAgICAgdGl0bGU6IGBTaG9yZWxpbmUgaW1wYWN0IOKAlCBmaXJzdCBhcnJpdmFsIH4ke3MuZmlyc3RfYWJzX2hyID8/IHMuZmlyc3RfaHJ9IGhyYCxcbiAgICAgICAgICBjb250ZW50OiBgJHtzLnNoYXJlX3BjdH0lIG9mIHNwaWxsICgke3MuY291bnR9IHBhcnRpY2xlcykgwrcgbWVkaWFuIGFycml2YWwgJHtzLm1lZGlhbl9ocn0gaHIgwrcgYCArXG4gICAgICAgICAgICBgJHsocy5sZW5ndGhfbSAvIDEwMDApLnRvRml4ZWQoMSl9IGttIG9mIHNob3JlYCArXG4gICAgICAgICAgICAocy5ib29tID8gYCDCtyBwcm90ZWN0aXZlIGJvb20gfiR7cy5ib29tLmJvb21fZnQudG9Mb2NhbGVTdHJpbmcoKX0gZnQgKCR7cy5ib29tLmFuY2hvcnN9IGFuY2hvciBzZXRzKWAgOiAnJyksXG4gICAgICAgIH0gYXMgYW55LFxuICAgICAgfSkpXG4gICAgfVxuICAgIC8vIGVudHJ5L3NwaWxsIHBvaW50XG4gICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQoeyBsYXRpdHVkZTogb3cuc3BpbGxfcG9pbnQubGF0LCBsb25naXR1ZGU6IG93LnNwaWxsX3BvaW50LmxvbiB9KSxcbiAgICAgIHN5bWJvbDogeyB0eXBlOiAnc2ltcGxlLW1hcmtlcicsIHN0eWxlOiAneCcsIHNpemU6IDE0LCBvdXRsaW5lOiB7IGNvbG9yOiAnIzAwMCcsIHdpZHRoOiAzIH0gfSBhcyBhbnksXG4gICAgICBwb3B1cFRlbXBsYXRlOiB7XG4gICAgICAgIHRpdGxlOiBhcHBlbmQgPyAnV2F0ZXIgZW50cnkgcG9pbnQnIDogJ1NwaWxsIHBvaW50JyxcbiAgICAgICAgY29udGVudDogYCR7b3cuc3BpbGxfcG9pbnQubGF0LnRvRml4ZWQoNSl9LCAke293LnNwaWxsX3BvaW50Lmxvbi50b0ZpeGVkKDUpfWAgK1xuICAgICAgICAgIChvdy5zdGFydF9vZmZzZXRfaHIgPyBgIMK3IHJpdmVyIHBsdW1lIGFycml2ZXMgfiR7b3cuc3RhcnRfb2Zmc2V0X2hyfSBocmAgOiAnJyksXG4gICAgICB9IGFzIGFueSxcbiAgICB9KSlcbiAgfVxuXG4gIGNvbnN0IG93Q29uZmlnID0gKCkgPT4gKHtcbiAgICB2ZXJib3NlOiBmYWxzZSxcbiAgICBvcGVuV2F0ZXI6IChwcm9wcy5jb25maWcub3BlbldhdGVyIGFzIGFueSk/LmFzTXV0YWJsZT8uKHsgZGVlcDogdHJ1ZSB9KSA/PyBwcm9wcy5jb25maWcub3BlbldhdGVyID8/IHt9LFxuICB9KVxuXG4gIC8vIHJlc2Vydm9pciBjb250aW51YXRpb246IHJpdmVyIHRyYWNlIGVuZGVkIGluIGEgbGFrZSDihpIga2VlcCBnb2luZyBhcyBvcGVuIHdhdGVyXG4gIGNvbnN0IGNvbnRpbnVhdGlvbkZvciA9IGFzeW5jIChyZXM6IGFueSk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgY29uc3Qgc3AgPSByZXMuaW1wb3VuZF9zdG9wX3BvaW50XG4gICAgY29uc3Qga2V5ID0gYCR7c3AubGF0LnRvRml4ZWQoNCl9LCR7c3AubG9uLnRvRml4ZWQoNCl9YFxuICAgIGlmICghb3dDb250UmVmLmN1cnJlbnQgfHwgb3dDb250UmVmLmN1cnJlbnQua2V5ICE9PSBrZXkpIHtcbiAgICAgIC8vIHJldXNlIHRoZSByaXZlciBydW4ncyBhbHJlYWR5LWZldGNoZWQgc2l0ZSBmZWF0dXJlcyAobm8gc2Vjb25kIGxheWVyIHF1ZXJ5KVxuICAgICAgY29uc3QgY2FjaGVkUHJvdmlkZXJzID0gKGNhY2hlUmVmLmN1cnJlbnQ/LmRhdGE/LnNpdGVTZXRzIHx8IFtdKS5tYXAoKHM6IGFueSkgPT4gKHtcbiAgICAgICAgbmFtZTogcy5uYW1lLCBidWZmZXJfbTogcy5idWZmZXJfbSwgZmV0Y2g6IGFzeW5jICgpID0+IHMuZmVhdHMsXG4gICAgICB9KSlcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaE9wZW5XYXRlckRhdGEoXG4gICAgICAgIHNwLmxhdCwgc3AubG9uLCB7IC4uLm93Q29uZmlnKCksIHNpdGVQcm92aWRlcnM6IGNhY2hlZFByb3ZpZGVycyB9LCBudWxsLCBzcC5ldGFfaHIpXG4gICAgICBvd0NvbnRSZWYuY3VycmVudCA9IHsga2V5LCBkYXRhIH1cbiAgICB9XG4gICAgY29uc3Qgb3cgPSBjb21wdXRlT3BlbldhdGVyKHJlYmFzZU9wZW5XYXRlckRhdGEob3dDb250UmVmLmN1cnJlbnQuZGF0YSwgc3AuZXRhX2hyKSwgb3dDb25maWcoKSlcbiAgICBvdy5jb250aW51YXRpb25fb2YgPSB7IHJpdmVyOiByZXMucml2ZXJfbmFtZSwgZW50ZXJlZDogc3AubmFtZSwgcml2ZXJfZXRhX2hyOiBzcC5ldGFfaHIgfVxuICAgIG93Lndhcm5pbmdzLnVuc2hpZnQoXG4gICAgICBgQ29udGludWF0aW9uOiByaXZlciBwbHVtZSBlbnRlcnMgJHtzcC5uYW1lfSBhdCB+JHtzcC5ldGFfaHJ9IGgg4oCUIG9wZW4td2F0ZXIgaG91cnMgYXJlIEFCU09MVVRFIGZyb20gdGhlIHNwaWxsLmApXG4gICAgcmV0dXJuIG93XG4gIH1cblxuICAvLyAtLS0tIG1vZGVsIGNvbmZpZyArIGVxdWlwbWVudCArIGNvbXB1dGUvcmVuZGVyIChwdXJlLCByZXVzYWJsZSBvbiBjYWNoZWQgZGF0YSkgLS0tLVxuICBjb25zdCBtb2RlbENmZyA9IChzZjogbnVtYmVyKSA9PiAoe1xuICAgIHNhZmV0eUZhY3Rvcjogc2YsXG4gICAgdGltaW5nTW9kZWw6IHByb3BzLmNvbmZpZy50aW1pbmdNb2RlbCA/PyAnaHlkcmF1bGljJyxcbiAgICBtaW5TdHJlYW1PcmRlcjogcHJvcHMuY29uZmlnLm1pblN0cmVhbU9yZGVyID8/IDQsXG4gICAgbWF4SG91cnM6IHByb3BzLmNvbmZpZy5tYXhIb3VycyA/PyAyNCxcbiAgICBtYXhEaXN0YW5jZUttOiBwcm9wcy5jb25maWcubWF4RGlzdGFuY2VLbSA/PyAzMDAsXG4gICAgLy8gQ2FuYWRpYW4gY29ycmlkb3IgZmlsZXMgKGVuZ2luZSB2MS42KSDigJQgVVJMcyBvciBpbmxpbmUgZG9jc1xuICAgIGNvcnJpZG9yczogKHByb3BzLmNvbmZpZy5jb3JyaWRvcnMgYXMgYW55KT8uYXNNdXRhYmxlPy4oeyBkZWVwOiB0cnVlIH0pID8/IHByb3BzLmNvbmZpZy5jb3JyaWRvcnMgPz8gW10sXG4gICAgdmVyYm9zZTogZmFsc2UsXG4gIH0pXG5cbiAgY29uc3QgYXBwbHlFcXVpcG1lbnQgPSAocmVzOiBhbnksIGRyYXduOiBNYXA8c3RyaW5nLCBudW1iZXI+KSA9PiB7XG4gICAgY29uc3QgZXEgPSBwcm9wcy5jb25maWcuZXF1aXBtZW50XG4gICAgaWYgKGVxPy5lbmFibGVkID09PSBmYWxzZSkgcmV0dXJuXG4gICAgY29uc3QgcnVsZXMgPSB7XG4gICAgICBlbnRyYWlubWVudE1zOiBlcT8uZW50cmFpbm1lbnRNcyA/PyAwLjM1LFxuICAgICAgYW5jaG9yU3BhY2luZ0Z0OiBlcT8uYW5jaG9yU3BhY2luZ0Z0ID8/IDEwMCxcbiAgICAgIHJlc2VydmVQY3Q6IGVxPy5yZXNlcnZlUGN0ID8/IDIwLFxuICAgIH1cbiAgICBmb3IgKGNvbnN0IHMgb2YgcmVzLnNpdGVzKSB7XG4gICAgICBjb25zdCBrZXkgPSBub3JtR3VpZChzLkdsb2JhbElEID8/IHMuZ2xvYmFsaWQgPz8gcy5HTE9CQUxJRClcbiAgICAgIGNvbnN0IGRyYXduRnQgPSBrZXkgPyBkcmF3bi5nZXQoa2V5KSA6IHVuZGVmaW5lZFxuICAgICAgaWYgKGRyYXduRnQpIHtcbiAgICAgICAgY29uc3QgYm9vbUZ0ID0gTWF0aC5jZWlsKGRyYXduRnQgLyA1MCkgKiA1MFxuICAgICAgICBzLmJvb20gPSB7XG4gICAgICAgICAgYm9vbV9mdDogYm9vbUZ0LFxuICAgICAgICAgIGFuY2hvcnM6IE1hdGgubWF4KDIsIE1hdGguY2VpbChib29tRnQgLyBydWxlcy5hbmNob3JTcGFjaW5nRnQpICsgMSksXG4gICAgICAgICAgc291cmNlOiAnZHJhd24nLFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlc3QgPSBlc3RpbWF0ZUJvb21OZWVkcyhzLnJpdmVyX3dpZHRoX20sIHMudmVsb2NpdHlfbXMsIHJ1bGVzKVxuICAgICAgICBpZiAoZXN0KSBzLmJvb20gPSB7IC4uLmVzdCwgc291cmNlOiAnZXN0JyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY29tcHV0ZUFuZFJlbmRlciA9IChzZjogbnVtYmVyLCBmcm9tQ2FjaGUgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IGMgPSBjYWNoZVJlZi5jdXJyZW50XG4gICAgaWYgKCFjIHx8ICFqbXYpIHJldHVyblxuICAgIGNvbnN0IHJlcyA9IGNvbXB1dGVUcmFjZShjLmRhdGEsIG1vZGVsQ2ZnKHNmKSlcbiAgICBhcHBseUVxdWlwbWVudChyZXMsIGMuZHJhd24pXG4gICAgZHJhdyhqbXYudmlldyBhcyBfX2VzcmkuTWFwVmlldywgcmVzLCB7IGxhdDogYy5sYXQsIGxvbjogYy5sb24gfSlcbiAgICBpZiAobGF5ZXJSZWYuY3VycmVudCkgbGF5ZXJSZWYuY3VycmVudC52aXNpYmxlID0gdHJ1ZVxuICAgIHNldEhpZGRlbihmYWxzZSlcbiAgICBzZXRSZXN1bHQocmVzKVxuICAgIHNldERpYWcoWy4uLmMuZmV0Y2hOb3RlcywgYCR7cmVzLnNpdGVzLmxlbmd0aH0gc2l0ZShzKSB3aXRoaW4gYnVmZmVyIG9mIHRoZSB0cmFjZS5gXSlcbiAgICBzZXRTdGF0dXMoXG4gICAgICBgJHtyZXMucml2ZXJfbmFtZSB8fCAnVHJhY2UnfSDigJQgJHtyZXMuZGlzdGFuY2Vfa21fMjRoLnRvRml4ZWQoMSl9IGttIGluIOKJpCAke3Byb3BzLmNvbmZpZy5tYXhIb3VycyA/PyAyNH0gaGAgK1xuICAgICAgKGZyb21DYWNoZSA/ICcgwrcgcmVjb21wdXRlZCBpbnN0YW50bHkgZnJvbSBjYWNoZWQgaHlkcm9sb2d5JyA6ICcnKSxcbiAgICApXG4gICAgLy8gcmVzZXJ2b2lyIGNvbnRpbnVhdGlvbiAoYXN5bmMg4oCUIHJpdmVyIHJlc3VsdCBpcyBhbHJlYWR5IG9uIHNjcmVlbilcbiAgICBjb25zdCBvd0NmZyA9IChwcm9wcy5jb25maWcub3BlbldhdGVyIGFzIGFueSkgfHwge31cbiAgICBpZiAocmVzLmltcG91bmRfc3RvcF9wb2ludCAmJiAob3dDZmcuZW5hYmxlZCA/PyB0cnVlKSAmJiAob3dDZmcuY29udGludWVBdEltcG91bmRtZW50ID8/IHRydWUpKSB7XG4gICAgICBjb250aW51YXRpb25Gb3IocmVzKS50aGVuKChvdykgPT4ge1xuICAgICAgICBpZiAoY2FjaGVSZWYuY3VycmVudCAhPT0gYykgcmV0dXJuIC8vIHN1cGVyc2VkZWQgYnkgYSBuZXdlciBydW5cbiAgICAgICAgcmVzLm9wZW5fd2F0ZXIgPSBvd1xuICAgICAgICBkcmF3T3BlbldhdGVyKGptdi52aWV3IGFzIF9fZXNyaS5NYXBWaWV3LCBvdywgdHJ1ZSlcbiAgICAgICAgc2V0UmVzdWx0KHsgLi4ucmVzIH0pXG4gICAgICAgIHNldFN0YXR1cygocykgPT4gYCR7c30gwrcgY29udGludWVzIGludG8gJHtvdy53YXRlcmJvZHkubmFtZX1gKVxuICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGNhY2hlUmVmLmN1cnJlbnQgIT09IGMpIHJldHVyblxuICAgICAgICBzZXRTdGF0dXMoKHMpID0+IGAke3N9IMK3IGNvbnRpbnVhdGlvbiB1bmF2YWlsYWJsZSAoJHtTdHJpbmcoZSkuc2xpY2UoMCwgNjApfSlgKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tIHJ1biAtLS0tXG4gIGNvbnN0IGFybUNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICgham12IHx8IGFybWluZyB8fCBydW5uaW5nKSByZXR1cm5cbiAgICBzZXRBcm1pbmcodHJ1ZSlcbiAgICBzZXRTdGF0dXMoJ0NsaWNrIHRoZSBzcGlsbCBsb2NhdGlvbiBvbiB0aGUgbWFw4oCmJylcbiAgICBjbGlja0hhbmRsZVJlZi5jdXJyZW50ID0gam12LnZpZXcub24oJ2NsaWNrJywgYXN5bmMgKGV2dCkgPT4ge1xuICAgICAgY2xpY2tIYW5kbGVSZWYuY3VycmVudC5yZW1vdmUoKVxuICAgICAgY2xpY2tIYW5kbGVSZWYuY3VycmVudCA9IG51bGxcbiAgICAgIHNldEFybWluZyhmYWxzZSlcbiAgICAgIGNvbnN0IG1wID0gZXZ0Lm1hcFBvaW50XG4gICAgICBjb25zdCBsYXQgPSBtcC5sYXRpdHVkZSwgbG9uID0gbXAubG9uZ2l0dWRlXG4gICAgICBzZXRSdW5uaW5nKHRydWUpXG4gICAgICBzZXRSZXN1bHQobnVsbClcbiAgICAgIHNldERpYWcoW10pXG4gICAgICBzZXRTdGF0dXMoYFRyYWNpbmcgZnJvbSAke2xhdC50b0ZpeGVkKDQpfSwgJHtsb24udG9GaXhlZCg0KX3igKZgKVxuICAgICAgY29uc3Qgbm90ZXM6IHN0cmluZ1tdID0gW11cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNmZyA9IHByb3BzLmNvbmZpZ1xuICAgICAgICBjb25zdCBzaXRlTGF5ZXJzID0gKGNmZy5zaXRlTGF5ZXJzIHx8IFtdKSBhcyBhbnlcbiAgICAgICAgY29uc3QgcmVjZXB0b3JMYXllcnMgPSAoY2ZnLnJlY2VwdG9yTGF5ZXJzIHx8IFtdKSBhcyBhbnlcbiAgICAgICAgaWYgKCFzaXRlTGF5ZXJzLmxlbmd0aCkgbm90ZXMucHVzaCgnTm8gc2l0ZSBsYXllcnMgY29uZmlndXJlZCDigJQgYWRkIHRoZW0gaW4gdGhlIHdpZGdldCBzZXR0aW5ncyAoU2l0ZSBsYXllcnMgSlNPTikuJylcblxuICAgICAgICAvLyB2MS43IGRpc3BhdGNoOiBhIGNsaWNrIGluc2lkZSBhIGxha2UvcmVzZXJ2b2lyIHJ1bnMgdGhlIG9wZW4td2F0ZXJcbiAgICAgICAgLy8gcGFydGljbGUgbW9kZWwgKGRhbSB0YWlscmFjZXMgc3RpbGwgcm91dGUgdG8gdGhlIHJpdmVyKVxuICAgICAgICBjb25zdCBkaXNwID0gYXdhaXQgcmVzb2x2ZVRyYWNlTW9kZShsYXQsIGxvbiwgeyAuLi5tb2RlbENmZygxKSwgLi4ub3dDb25maWcoKSB9KVxuICAgICAgICBpZiAoZGlzcC5tb2RlID09PSAnb3Blbi13YXRlcicpIHtcbiAgICAgICAgICBzZXRTdGF0dXMoYE9wZW4gd2F0ZXIgKCR7ZGlzcC53YXRlcmJvZHkubmFtZX0pIOKAlCBydW5uaW5nIHdpbmQtZHJpZnQgcGFydGljbGUgbW9kZWzigKZgKVxuICAgICAgICAgIGNvbnN0IG93RGF0YSA9IGF3YWl0IGZldGNoT3BlbldhdGVyRGF0YShsYXQsIGxvbiwge1xuICAgICAgICAgICAgLi4ub3dDb25maWcoKSxcbiAgICAgICAgICAgIHNpdGVQcm92aWRlcnM6IHNpdGVMYXllcnMubWFwKChsYywgaSkgPT4gbWFrZVNpdGVQcm92aWRlcihsYywgNTAwLCBgU2l0ZSBsYXllciAke2kgKyAxfWAsIG5vdGVzKSksXG4gICAgICAgICAgfSwgZGlzcC53YXRlcmJvZHkpXG4gICAgICAgICAgY29uc3Qgb3dSZXMgPSBjb21wdXRlT3BlbldhdGVyKG93RGF0YSwgb3dDb25maWcoKSlcbiAgICAgICAgICBjYWNoZVJlZi5jdXJyZW50ID0geyBsYXQsIGxvbiwgbW9kZTogJ29wZW4td2F0ZXInLCBvd0RhdGEsIGZldGNoTm90ZXM6IG5vdGVzLnNsaWNlKCkgfVxuICAgICAgICAgIGRyYXdPcGVuV2F0ZXIoam12LnZpZXcgYXMgX19lc3JpLk1hcFZpZXcsIG93UmVzKVxuICAgICAgICAgIGlmIChsYXllclJlZi5jdXJyZW50KSBsYXllclJlZi5jdXJyZW50LnZpc2libGUgPSB0cnVlXG4gICAgICAgICAgc2V0SGlkZGVuKGZhbHNlKVxuICAgICAgICAgIHNldFJlc3VsdChvd1JlcylcbiAgICAgICAgICBzZXREaWFnKFsuLi5ub3RlcyxcbiAgICAgICAgICAgIGAke293UmVzLnN0YXRzLm5fcGFydGljbGVzfSBwYXJ0aWNsZXMgwrcgJHtvd1Jlcy5ydW5SZWNvcmQuc2hvcmVsaW5lX3NlZ21lbnRzfSBzaG9yZWxpbmUgc2VnbWVudHMgwrcgJHtvd1Jlcy5zdGF0cy5jb21wdXRlX21zfSBtc2BdKVxuICAgICAgICAgIHNldFN0YXR1cyhgJHtkaXNwLndhdGVyYm9keS5uYW1lfSDigJQgb3Blbi13YXRlciBkcmlmdCwgJHtvd1Jlcy5kdXJhdGlvbl9ocn0gaCDCtyAke293UmVzLnNob3JlX2ltcGFjdHMubGVuZ3RofSBzaG9yZWxpbmUgaW1wYWN0KHMpYClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZldGNoIGV2ZXJ5dGhpbmcgb25jZSAodHJhY2UsIGZsb3dzLCB3aWR0aHMsIHNpdGUvcmVjZXB0b3IgZmVhdHVyZXMpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFRyYWNlRGF0YShsYXQsIGxvbiwge1xuICAgICAgICAgIC4uLm1vZGVsQ2ZnKHNhZmV0eSksXG4gICAgICAgICAgd2lkdGhQcm92aWRlcjogbWFrZVdpZHRoUHJvdmlkZXIoKSxcbiAgICAgICAgICBzaXRlUHJvdmlkZXJzOiBzaXRlTGF5ZXJzLm1hcCgobGMsIGkpID0+IG1ha2VTaXRlUHJvdmlkZXIobGMsIDUwMCwgYFNpdGUgbGF5ZXIgJHtpICsgMX1gLCBub3RlcykpLFxuICAgICAgICAgIHJlY2VwdG9yUHJvdmlkZXJzOiByZWNlcHRvckxheWVycy5tYXAoKGxjLCBpKSA9PiBtYWtlU2l0ZVByb3ZpZGVyKGxjLCA4MDAsIGBSZWNlcHRvciBsYXllciAke2kgKyAxfWAsIG5vdGVzKSksXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gZHJhd24gYm9vbSBsaW5lczogcGVyLXNpdGUtbGF5ZXIgYm9vbUxheWVyICgrIGxlZ2FjeSBnbG9iYWwgZXF1aXBtZW50LmJvb21MYXllcilcbiAgICAgICAgY29uc3QgZHJhd24gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpXG4gICAgICAgIGNvbnN0IGVxID0gY2ZnLmVxdWlwbWVudFxuICAgICAgICBpZiAoZXE/LmVuYWJsZWQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgY29uc3QgYm9vbUNmZ3M6IGFueVtdID0gW11cbiAgICAgICAgICBmb3IgKGNvbnN0IGxjIG9mIHNpdGVMYXllcnMpIGlmIChsYy5ib29tTGF5ZXI/LnVybCkgYm9vbUNmZ3MucHVzaChsYy5ib29tTGF5ZXIpXG4gICAgICAgICAgaWYgKGVxPy5ib29tTGF5ZXI/LnVybCkgYm9vbUNmZ3MucHVzaChlcS5ib29tTGF5ZXIpXG4gICAgICAgICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gICAgICAgICAgZm9yIChjb25zdCBiYyBvZiBib29tQ2Zncykge1xuICAgICAgICAgICAgY29uc3Qgc2lnID0gYCR7YmMudXJsfXwke2JjLnNpdGVLZXlGaWVsZH1gXG4gICAgICAgICAgICBpZiAoc2Vlbi5oYXMoc2lnKSkgY29udGludWVcbiAgICAgICAgICAgIHNlZW4uYWRkKHNpZylcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IG0gPSBhd2FpdCBmZXRjaERyYXduQm9vbShiYyBhcyBhbnkpXG4gICAgICAgICAgICAgIG0uZm9yRWFjaCgodiwgaykgPT4gZHJhd24uc2V0KGssIChkcmF3bi5nZXQoaykgfHwgMCkgKyB2KSlcbiAgICAgICAgICAgICAgbm90ZXMucHVzaChgQm9vbSBsaW5lcyAoJHtzaWcuc3BsaXQoJy8nKS5zbGljZSgtMilbMF19KTogZHJhd24gZm9vdGFnZSBmb3IgJHttLnNpemV9IHNpdGUocylgKVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBub3Rlcy5wdXNoKGBCb29tIGxheWVyIEZBSUxFRDogJHtTdHJpbmcoZSkuc2xpY2UoMCwgOTApfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2FjaGVSZWYuY3VycmVudCA9IHsgbGF0LCBsb24sIGRhdGEsIGRyYXduLCBmZXRjaE5vdGVzOiBub3Rlcy5zbGljZSgpIH1cbiAgICAgICAgY29tcHV0ZUFuZFJlbmRlcihzYWZldHkpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNldFN0YXR1cyhgVHJhY2UgZmFpbGVkOiAke1N0cmluZyhlKS5zbGljZSgwLCAxMjApfWApXG4gICAgICAgIHNldERpYWcobm90ZXMpXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRSdW5uaW5nKGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIFtqbXYsIGFybWluZywgcnVubmluZywgc2FmZXR5LCBwcm9wcy5jb25maWddKVxuXG4gIGNvbnN0IGNsZWFyQWxsID0gKCkgPT4ge1xuICAgIGlmIChjbGlja0hhbmRsZVJlZi5jdXJyZW50KSB7IGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQucmVtb3ZlKCk7IGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQgPSBudWxsIH1cbiAgICBpZiAobGF5ZXJSZWYuY3VycmVudCkgbGF5ZXJSZWYuY3VycmVudC5yZW1vdmVBbGwoKVxuICAgIGNhY2hlUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgb3dDb250UmVmLmN1cnJlbnQgPSBudWxsXG4gICAgc2V0QXJtaW5nKGZhbHNlKVxuICAgIHNldFJlc3VsdChudWxsKVxuICAgIHNldERpYWcoW10pXG4gICAgc2V0SGlkZGVuKGZhbHNlKVxuICAgIHNldFN0YXR1cygnQ2xlYXJlZC4gQ2xpY2sgXCJTZXQgc3BpbGwgcG9pbnRcIiB0byBydW4gYWdhaW4uJylcbiAgfVxuXG4gIC8vIGJyaWVmaW5nIHRvZ2dsZTogaGlkZS9zaG93IHRoZSB0cmFqZWN0b3J5IGdyYXBoaWNzIFdJVEhPVVQgdG91Y2hpbmcgdGhlXG4gIC8vIGNhY2hlZCBydW4g4oCUIHByZXNlbnRlciBjYW4gZmxpcCB0aGUgbW9kZWwgb2ZmIGR1cmluZyBhIHNsaWRlIGFuZCBiYWNrXG4gIGNvbnN0IHRvZ2dsZVZpc2libGUgPSAoKSA9PiB7XG4gICAgaWYgKCFsYXllclJlZi5jdXJyZW50KSByZXR1cm5cbiAgICBjb25zdCB2ID0gIWxheWVyUmVmLmN1cnJlbnQudmlzaWJsZVxuICAgIGxheWVyUmVmLmN1cnJlbnQudmlzaWJsZSA9IHZcbiAgICBzZXRIaWRkZW4oIXYpXG4gIH1cblxuICBjb25zdCBpc09wZW5XYXRlciA9IHJlc3VsdD8ubW9kZSA9PT0gJ29wZW4td2F0ZXInXG4gIGNvbnN0IHNpdGVzOiBTaXRlUm93W10gPSAoaXNPcGVuV2F0ZXIgPyBbXSA6IHJlc3VsdD8uc2l0ZXMpIHx8IFtdXG4gIGNvbnN0IHdhcm5pbmdzOiBzdHJpbmdbXSA9IHJlc3VsdD8ud2FybmluZ3MgfHwgW11cblxuICAvLyBzaGFyZWQgcGFuZWwgZm9yIGEgbGFrZS9yZXNlcnZvaXIgcmVzdWx0IChwcmltYXJ5IHJ1biBvciBjb250aW51YXRpb24pXG4gIGNvbnN0IE9wZW5XYXRlclBhbmVsID0gKHsgb3cgfTogeyBvdzogYW55IH0pID0+IChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDYgfX0+PGI+e293LmhlYWRsaW5lfTwvYj48L2Rpdj5cbiAgICAgIHtvdy5zaG9yZV9pbXBhY3RzLmxlbmd0aCA+IDBcbiAgICAgICAgPyA8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScgfX0+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0ciBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNjY2MnIH19PlxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+Rmlyc3QgYXJyaXZhbDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT5TaG9yZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT4lPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PkJvb20gKHByb3RlY3RpdmUpPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtvdy5zaG9yZV9pbXBhY3RzLm1hcCgoczogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBociA9IHMuZmlyc3RfYWJzX2hyID8/IHMuZmlyc3RfaHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWUnIH19XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgJHtzLmNvdW50fSBwYXJ0aWNsZXMgwrcgbWVkaWFuIGFycml2YWwgJHtzLm1lZGlhbl9ocn0gaHJgfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogMTAsIGhlaWdodDogMTAsIGJvcmRlclJhZGl1czogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJhbmRDb2xvcihociksIG1hcmdpblJpZ2h0OiA0LFxuICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAge2hyfSBoclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19Pnsocy5sZW5ndGhfbSAvIDEwMDApLnRvRml4ZWQoMSl9IGttPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT57cy5zaGFyZV9wY3R9JTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtzLmJvb20gPyBgJHtzLmJvb20uYm9vbV9mdC50b0xvY2FsZVN0cmluZygpfSBmdGAgOiAn4oCUJ31cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgOiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzc3NycgfX0+XG4gICAgICAgICAgICBObyBzaG9yZWxpbmUgYXJyaXZhbCB3aXRoaW4ge293LmR1cmF0aW9uX2hyfSBoIChiZXN0IGd1ZXNzKSDigJQgd2F0Y2ggdGhlIHVuY2VydGFpbnR5IGVudmVsb3BlLlxuICAgICAgICAgIDwvZGl2Pn1cbiAgICAgIHtvdy5zaXRlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnLCBtYXJnaW5Ub3A6IDYgfX0+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2NjYycgfX0+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+RVRBPC90aD5cbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT5TaXRlPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7b3cuc2l0ZXMubWFwKChzOiBhbnksIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtpfSBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZScgfX0+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLCBib3JkZXJSYWRpdXM6IDUsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJhbmRDb2xvcihzLmV0YV9ociksIG1hcmdpblJpZ2h0OiA0LFxuICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgIHtzLmV0YV9oci50b0ZpeGVkKDEpfSBoclxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT57cy5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgKX1cbiAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjNzc3JywgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICBGaWxsZWQgb3V0bGluZXMgPSBiZXN0LWd1ZXNzIHBsdW1lIGF0IGxhYmVsZWQgaG91cnMgwrcgZGFzaGVkIGdyZXkgPSBtaW5pbXVtLXJlZ3JldCBlbnZlbG9wZSAocGxhbiB0byB0aGlzKSDCt1xuICAgICAgICB0aGljayBzaG9yZSBsaW5lcyA9IHByZWRpY3RlZCBpbXBhY3RzIMK3IHByb3RlY3RpdmUgYm9vbSA9IHNob3JlIGxlbmd0aCArMjAlLCA1MC1mdCBzdGlja3MuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldFwiIHN0eWxlPXt7IHBhZGRpbmc6IDEwLCBvdmVyZmxvdzogJ2F1dG8nLCBmb250U2l6ZTogMTMgfX0+XG4gICAgICB7cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkc1swXX1cbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyh2KSA9PiBzZXRKbXYodil9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgeyFwcm9wcy51c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjYjAwJyB9fT5TZWxlY3QgYSBNYXAgd2lkZ2V0IGluIHRoaXMgd2lkZ2V0J3Mgc2V0dGluZ3MuPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA2LCBtYXJnaW5Cb3R0b206IDggfX0+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIGRpc2FibGVkPXsham12IHx8IGFybWluZyB8fCBydW5uaW5nfSBvbkNsaWNrPXthcm1DbGlja30+XG4gICAgICAgICAge2FybWluZyA/ICdDbGljayB0aGUgbWFw4oCmJyA6IHJ1bm5pbmcgPyAnVHJhY2luZ+KApicgOiAnU2V0IHNwaWxsIHBvaW50J31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgZGlzYWJsZWQ9e3J1bm5pbmd9IG9uQ2xpY2s9e2NsZWFyQWxsfT5DbGVhcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIGRpc2FibGVkPXshcmVzdWx0fSBvbkNsaWNrPXt0b2dnbGVWaXNpYmxlfVxuICAgICAgICAgIHRpdGxlPVwiSGlkZS9zaG93IHRoZSB0cmFqZWN0b3J5IG9uIHRoZSBtYXAgd2l0aG91dCBsb3NpbmcgdGhlIHJ1biAoYnJpZWZpbmdzKVwiPlxuICAgICAgICAgIHtoaWRkZW4gPyAn8J+RgSBTaG93JyA6ICfwn5GBIEhpZGUnfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiBkaXNhYmxlZD17IXJlc3VsdH0gdGl0bGU9XCJDb3B5IHJ1biBwcm92ZW5hbmNlIHJlY29yZCAoSlNPTikgZm9yIGFmdGVyLWFjdGlvbiBkb2N1bWVudGF0aW9uIOKAlCBpbmNsdWRlcyBhIHJlcGxheSBVUkxcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzdWx0Py5ydW5SZWNvcmQgfHwgIWNhY2hlUmVmLmN1cnJlbnQpIHJldHVyblxuICAgICAgICAgICAgY29uc3QgcmVjOiBhbnkgPSB7IC4uLnJlc3VsdC5ydW5SZWNvcmQgfVxuICAgICAgICAgICAgY29uc3QgdSA9IG5ldyBVUkwoJ2h0dHBzOi8vd2hpdGV3YXRlcnJlc2N1ZS5naXRodWIuaW8vd3JpLWV4Yi13aWRnZXRzL2VtYmVkLycpXG4gICAgICAgICAgICB1LnNlYXJjaFBhcmFtcy5zZXQoJ2NvbmZpZycsICdhbGwtZ3JwcycpXG4gICAgICAgICAgICB1LnNlYXJjaFBhcmFtcy5zZXQoJ2xhdCcsIGNhY2hlUmVmLmN1cnJlbnQubGF0LnRvRml4ZWQoNSkpXG4gICAgICAgICAgICB1LnNlYXJjaFBhcmFtcy5zZXQoJ2xvbicsIGNhY2hlUmVmLmN1cnJlbnQubG9uLnRvRml4ZWQoNSkpXG4gICAgICAgICAgICBpZiAocmVjLmFzX29mKSB1LnNlYXJjaFBhcmFtcy5zZXQoJ2FzT2YnLCByZWMuYXNfb2YgIT09ICdsaXZlJyA/IHJlYy5hc19vZiA6IHJlYy5nZW5lcmF0ZWRfYXQuc2xpY2UoMCwgMTApKVxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdzZicsIFN0cmluZyhzYWZldHkpKVxuICAgICAgICAgICAgcmVjLnJlcGxheV91cmwgPSB1LnRvU3RyaW5nKClcbiAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KEpTT04uc3RyaW5naWZ5KHJlYywgbnVsbCwgMSkpLnRoZW4oKCkgPT4gc2V0U3RhdHVzKCdSdW4gcmVjb3JkIGNvcGllZCAoaW5jbHVkZXMgcmVwbGF5X3VybCkuJykpXG4gICAgICAgICAgfX0+XG4gICAgICAgICAg4o6YIFJlY29yZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGxhYmVsIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICdhdXRvJywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA0IH19XG4gICAgICAgICAgdGl0bGU9XCJTYWZldHkgZmFjdG9yIOKAlCBjaGFuZ2luZyBpdCByZS1ydW5zIGluc3RhbnRseSBmcm9tIGNhY2hlZCBoeWRyb2xvZ3lcIj5cbiAgICAgICAgICBTRlxuICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3NhZmV0eX0gZGlzYWJsZWQ9e3J1bm5pbmd9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdiA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIHNldFNhZmV0eSh2KVxuICAgICAgICAgICAgICBpZiAoIWNhY2hlUmVmLmN1cnJlbnQgfHwgcnVubmluZykgcmV0dXJuXG4gICAgICAgICAgICAgIGlmIChjYWNoZVJlZi5jdXJyZW50Lm1vZGUgPT09ICdvcGVuLXdhdGVyJykge1xuICAgICAgICAgICAgICAgIHNldFN0YXR1cygnU2FmZXR5IGZhY3RvciBkb2VzIG5vdCBhcHBseSB0byBvcGVuLXdhdGVyICh3aW5kLWRyaWZ0KSBydW5zIOKAlCB1bmNlcnRhaW50eSBpcyB0aGUgZGFzaGVkIGVudmVsb3BlLicpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29tcHV0ZUFuZFJlbmRlcih2LCB0cnVlKVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxLjB9PjEuMDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MS4yNX0+MS4yNTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MS41fT4xLjU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezIuMH0+Mi4wPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDgsIG1pbkhlaWdodDogMTggfX0+e3J1bm5pbmcgJiYgPHNwYW4gY2xhc3NOYW1lPVwiamltdS1zZWNvbmRhcnktbG9hZGluZ1wiIC8+fSB7c3RhdHVzfTwvZGl2PlxuXG4gICAgICB7ZGlhZy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJyM4ODgnLCBmb250U2l6ZTogMTEsIG1hcmdpbkJvdHRvbTogOCB9fT5cbiAgICAgICAgICB7ZGlhZy5tYXAoKGQsIGkpID0+IDxkaXYga2V5PXtpfT57ZH08L2Rpdj4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHt3YXJuaW5ncy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2ZmZjNjZCcsIGNvbG9yOiAnIzMzMycsIGJvcmRlcjogJzFweCBzb2xpZCAjZmZlZWJhJywgcGFkZGluZzogNiwgbWFyZ2luQm90dG9tOiA4LCBib3JkZXJSYWRpdXM6IDQgfX0+XG4gICAgICAgICAge3dhcm5pbmdzLm1hcCgodywgaSkgPT4gPGRpdiBrZXk9e2l9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMiB9fT7imqAge3d9PC9kaXY+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7cmVzdWx0ICYmICFpc09wZW5XYXRlciAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4LCBjb2xvcjogJyM5OTknIH19PlxuICAgICAgICAgIEVUQXMgYXJlIGVzdGltYXRlcyAowrEyMCUpLCBzYWZldHkgZmFjdG9yIMOXe3Jlc3VsdC5zYWZldHlfZmFjdG9yfSBhcHBsaWVkIOKAlCB0cmVhdCBhcyBiYW5kcywgbm90IGFwcG9pbnRtZW50cy5cbiAgICAgICAgICB7cmVzdWx0LmdhdWdlc191c2VkLmxlbmd0aFxuICAgICAgICAgICAgPyBgIEZsb3dzOiAke3Jlc3VsdC5nYXVnZXNfdXNlZC5tYXAoKGc6IGFueSkgPT4gZy5zdGF0aW9uX2lkKS5qb2luKCcsICcpfS5gXG4gICAgICAgICAgICA6ICcgTm8gbGl2ZSBnYXVnZXMgZm91bmQg4oCUIGRyYWluYWdlLWFyZWEgZmxvdyBlc3RpbWF0ZS4nfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtpc09wZW5XYXRlciAmJiA8T3BlbldhdGVyUGFuZWwgb3c9e3Jlc3VsdH0gLz59XG5cbiAgICAgIHtzaXRlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnIH19PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0ciBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNjY2MnIH19PlxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PkVUQTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+U2l0ZTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+a208L3RoPlxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PkJvb208L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtzaXRlcy5tYXAoKHMsIGkpID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17aX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWUnIH19PlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT17cy5ldGFfZWFybHlfaHIgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IGBlYXJsaWVzdCBjcmVkaWJsZSAke3MuZXRhX2Vhcmx5X2hyfSBociDCtyBmaXJzdCBhcnJpdmFsICR7cy5ldGFfaHJ9IGhyIMK3IHBlYWsgJHtzLmV0YV9wZWFrX2hyfSBociR7cy5jbGVhcl9ociA/IGAgwrcgY2xlYXIgfiR7cy5jbGVhcl9ocn0gaHJgIDogJyd9YFxuICAgICAgICAgICAgICAgICAgICA6ICcnfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogMTAsIGhlaWdodDogMTAsIGJvcmRlclJhZGl1czogNSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmFuZENvbG9yKHMuZXRhX2hyKSwgbWFyZ2luUmlnaHQ6IDQsXG4gICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAge3MuZXRhX2Vhcmx5X2hyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyBgJHtzLmV0YV9lYXJseV9oci50b0ZpeGVkKDEpfeKAkyR7cy5ldGFfaHIudG9GaXhlZCgxKX0gaHJgXG4gICAgICAgICAgICAgICAgICAgIDogcy5ldGFfaHIgPCAxID8gYCR7TWF0aC5yb3VuZChzLmV0YV9ociAqIDYwKX0gbWluYCA6IGAke3MuZXRhX2hyLnRvRml4ZWQoMSl9IGhyYH1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+e3MubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+e3MuZGlzdF9rbS50b0ZpeGVkKDEpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0gdGl0bGU9e3MuYm9vbVxuICAgICAgICAgICAgICAgICAgPyBgJHtzLmJvb20uYW5jaG9yc30gYW5jaG9yIHNldHMke3MuYm9vbS5ib29tX2FuZ2xlX2RlZyA/IGAgwrcgJHtzLmJvb20uYm9vbV9hbmdsZV9kZWd9wrAgZGVwbG95bWVudGAgOiAnJ30ke3MuYm9vbS5jYXNjYWRlX2FkdmlzZWQgPyAnIMK3IGZhc3Qgd2F0ZXI6IGNhc2NhZGUgbXVsdGlwbGUgYm9vbXMnIDogJyd9ICgke3MuYm9vbS5zb3VyY2UgPT09ICdkcmF3bicgPyAnZnJvbSBkcmF3biBib29tIGxpbmVzJyA6ICdlc3RpbWF0ZWQgZnJvbSBtb2RlbGVkIHdpZHRoL3ZlbG9jaXR5J30pYFxuICAgICAgICAgICAgICAgICAgOiAnJ30+XG4gICAgICAgICAgICAgICAgICB7cy5ib29tXG4gICAgICAgICAgICAgICAgICAgID8gPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzLmJvb20uYm9vbV9mdC50b0xvY2FsZVN0cmluZygpfSBmdFxuICAgICAgICAgICAgICAgICAgICAgICAge3MuYm9vbS5jYXNjYWRlX2FkdmlzZWQgJiYgJyDimqEnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjOTk5JyB9fT4ge3MuYm9vbS5zb3VyY2UgPT09ICdkcmF3bicgPyAn4pyTJyA6ICdlc3QuJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIDogJ+KAlCd9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAge3NpdGVzLnNvbWUoKHMpID0+IHMuYm9vbSkgJiYgKFxuICAgICAgICAgICAgPHRmb290PlxuICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyVG9wOiAnMnB4IHNvbGlkICNjY2MnLCBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9IHN0eWxlPXt7IHBhZGRpbmc6ICczcHggNHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgIFRvdGFscyAoe3NpdGVzLmZpbHRlcigocykgPT4gcy5ib29tKS5sZW5ndGh9IGJvb20gc2l0ZXMpXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzNweCA0cHgnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cbiAgICAgICAgICAgICAgICAgIHtzaXRlcy5yZWR1Y2UoKHQsIHMpID0+IHQgKyAocy5ib29tPy5ib29tX2Z0IHx8IDApLCAwKS50b0xvY2FsZVN0cmluZygpfSBmdCDCt3snICd9XG4gICAgICAgICAgICAgICAgICB7c2l0ZXMucmVkdWNlKCh0LCBzKSA9PiB0ICsgKHMuYm9vbT8uYW5jaG9ycyB8fCAwKSwgMCl9IGFuY2hvcnNcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Zm9vdD5cbiAgICAgICAgICApfVxuICAgICAgICA8L3RhYmxlPlxuICAgICAgKX1cbiAgICAgIHtyZXN1bHQgJiYgc2l0ZXMuc29tZSgocykgPT4gcy5ib29tKSAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjNzc3JywgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICAgIOKckyA9IGRyYXduIGJvb20gbGluZXMgwrcgZXN0LiA9IHNpemVkIGZyb20gbW9kZWxlZCB3aWR0aC92ZWxvY2l0eVxuICAgICAgICAgIChib29tIGFuZ2xlZCB0byBrZWVwIG5vcm1hbCBmbG93IOKJpCB7KHByb3BzLmNvbmZpZy5lcXVpcG1lbnQ/LmVudHJhaW5tZW50TXMgPz8gMC4zNSl9IG0vcyxcbiAgICAgICAgICAre3Byb3BzLmNvbmZpZy5lcXVpcG1lbnQ/LnJlc2VydmVQY3QgPz8gMjB9JSByZXNlcnZlKSDCtyDimqEgPSBmYXN0IHdhdGVyLCBjYXNjYWRlIGJvb21zXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtyZXN1bHQgJiYgIWlzT3BlbldhdGVyICYmIHNpdGVzLmxlbmd0aCA9PT0gMCAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzc3NycgfX0+Tm8gY29uZmlndXJlZCBzaXRlcyB3aXRoaW4gcmVhY2ggb2YgdGhpcyB0cmFjZS48L2Rpdj59XG5cbiAgICAgIHtyZXN1bHQ/Lm9wZW5fd2F0ZXIgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTAsIHBhZGRpbmdUb3A6IDYsIGJvcmRlclRvcDogJzJweCBzb2xpZCAjY2NjJyB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNCB9fT48Yj5JbnRvIHtyZXN1bHQub3Blbl93YXRlci53YXRlcmJvZHkubmFtZX0gKG9wZW4gd2F0ZXIpPC9iPjwvZGl2PlxuICAgICAgICAgIHtyZXN1bHQub3Blbl93YXRlci53YXJuaW5ncy5tYXAoKHc6IHN0cmluZywgaTogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3sgYmFja2dyb3VuZDogJyNmZmYzY2QnLCBib3JkZXI6ICcxcHggc29saWQgI2ZmZWViYScsIHBhZGRpbmc6IDQsIG1hcmdpbkJvdHRvbTogNCwgYm9yZGVyUmFkaXVzOiA0IH19PuKaoCB7d308L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8T3BlbldhdGVyUGFuZWwgb3c9e3Jlc3VsdC5vcGVuX3dhdGVyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9