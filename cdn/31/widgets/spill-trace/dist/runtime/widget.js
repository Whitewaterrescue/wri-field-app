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
/* harmony export */   fetchCurrentStations: () => (/* binding */ fetchCurrentStations),
/* harmony export */   fetchOpenWaterData: () => (/* binding */ fetchOpenWaterData),
/* harmony export */   fetchTraceData: () => (/* binding */ fetchTraceData),
/* harmony export */   haversineM: () => (/* binding */ haversineM),
/* harmony export */   isCoastalBody: () => (/* binding */ isCoastalBody),
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
/* harmony export */   tidalFrontTimes: () => (/* binding */ tidalFrontTimes),
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
const ENGINE_VERSION = "1.8.0";
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
    // coastal (Tier 3): estuary/sound clicks blend CO-OPS tidal-current
    // predictions from the nearest stations into the advection
    coastalCurrents: true,
    currentStationsMax: 3,
    currentStationMaxKm: 15,
    coastalDiffusionM2s: 10, // GNOME coastal default (lakes stay at 1)
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
// ---- tidal corridor support (v1.8, Tier 2) ----------------------------------
//
// A corridor may carry a `tidal` block:
//   { from_km, provider: 'iwls-wlp-slope', station_code, station_name,
//     u_max_ms, phase_lag_min, phase_uncert_min, note }
// The predicted water-level curve at the station is differentiated to a
// normalized signed tide signal T(t) in [-1,1]; along-channel tidal velocity
// is u(t) = -u_maxÂ·T(t) (rising level = flood = upstream = negative). This is
// the standing-wave assumption â€” `phase_lag_min` shifts it for progressive
// reaches, and `phase_uncert_min` feeds the earliest-credible envelope run.
// Amplitude is AUTHORED (warned): tides are deterministic, the amplitude is
// the calibration knob.
const IWLS_API = "https://api-iwls.dfo-mpo.gc.ca/api/v1";
function fetchIwlsTidalSeries(tidalCfg, asOf, maxHours, log) {
    return __awaiter(this, void 0, void 0, function* () {
        var _c, _d;
        const sts = yield getJson(`${IWLS_API}/stations`, {
            params: { code: tidalCfg.station_code }, timeoutMs: 30000,
        });
        if (!Array.isArray(sts) || !sts.length)
            throw new Error(`IWLS station ${tidalCfg.station_code} not found`);
        const st = sts[0];
        const t0Ms = asOf ? Date.parse(asOf + "T00:00:00Z") : Date.now();
        const iso = (ms) => new Date(ms).toISOString().replace(/\.\d+Z/, "Z");
        const raw = yield getJson(`${IWLS_API}/stations/${st.id}/data`, {
            params: {
                "time-series-code": "wlp",
                from: iso(t0Ms - 3 * 3600e3),
                to: iso(t0Ms + (2 * maxHours + 12) * 3600e3),
            },
            timeoutMs: 45000,
        });
        if (!Array.isArray(raw) || raw.length < 20)
            throw new Error("IWLS wlp series empty");
        // resample to 15-min buckets, central-difference slope, normalize to [-1,1]
        const BUCKET = 900e3;
        const buckets = new Map();
        for (const r of raw) {
            const t = Date.parse(r.eventDate);
            const k = Math.round(t / BUCKET);
            if (!buckets.has(k))
                buckets.set(k, Number(r.value));
        }
        const ks = [...buckets.keys()].sort((a, b) => a - b);
        const slopes = [];
        for (let i = 1; i < ks.length - 1; i++) {
            if (ks[i + 1] - ks[i - 1] !== 2)
                continue; // gap â€” skip
            slopes.push({ t: ks[i] * BUCKET, s: (buckets.get(ks[i + 1]) - buckets.get(ks[i - 1])) / (2 * 900) });
        }
        if (slopes.length < 10)
            throw new Error("IWLS series too gappy for slope");
        const maxAbs = Math.max(...slopes.map((x) => Math.abs(x.s)));
        if (!(maxAbs > 0))
            throw new Error("IWLS series is flat");
        const lagMs = (tidalCfg.phase_lag_min || 0) * 60e3;
        const uMax = tidalCfg.u_max_ms;
        // series value = along-channel tidal velocity (+downstream); T(t)=slope(t+lag)
        const series = slopes.map((x) => ({ t: x.t - lagMs, u: -uMax * (x.s / maxAbs), v: 0 }));
        log(`  tidal: IWLS ${tidalCfg.station_code} ${st.officialName} â€” ${series.length} pts, u_max ${uMax} m/s, lag ${tidalCfg.phase_lag_min || 0} min`);
        return {
            series,
            t0Ms,
            station_code: tidalCfg.station_code,
            station_name: tidalCfg.station_name || st.officialName,
            u_max_ms: uMax,
            phase_lag_min: tidalCfg.phase_lag_min || 0,
            phase_uncert_min: (_c = tidalCfg.phase_uncert_min) !== null && _c !== void 0 ? _c : 60,
            from_km: (_d = tidalCfg.from_km) !== null && _d !== void 0 ? _d : 0,
            source: tidalCfg.provider || "iwls-wlp-slope",
            note: tidalCfg.note || null,
        };
    });
}
/**
 * 1-D leading-edge front through tidal rows: s' = vNet(s) + uTide(t), floored
 * at the head of tide (flood can push the front back, not above the tidal
 * zone). Returns FIRST-PASSAGE hours per df index (Infinity = never reached
 * within maxHours) â€” first-passage is monotonic in distance, so hourly
 * markers and site ETAs stay well-defined. Exported for unit tests.
 *
 *   vNetAt(s): net downstream velocity (m/s) at trace distance s (meters)
 *   uTideAt(hr): along-channel tidal velocity (+downstream) at sim-hour hr
 */
function tidalFrontTimes(df, i0, entryHr, vNetAt, uTideAt, maxHours, dtS = 300) {
    const n = df.length;
    const times = new Array(n).fill(null);
    const sStart = i0 > 0 ? df[i0 - 1].cum_dist : 0;
    let s = sStart;
    let j = i0;
    const tEnd = maxHours * 3600;
    for (let t = entryHr * 3600; t <= tEnd && j < n; t += dtS) {
        const v = vNetAt(s) + uTideAt(t / 3600);
        s = Math.max(sStart, s + v * dtS);
        while (j < n && s >= df[j].cum_dist) {
            times[j] = (t + dtS) / 3600;
            j++;
        }
    }
    for (let k = i0; k < n; k++)
        if (times[k] === null)
            times[k] = Infinity;
    return times;
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
        // 6. tidal series (v1.8) â€” first corridor in the chain with a tidal block.
        // Failure degrades to steady net-drift timing with the legacy warning.
        let tidal = null;
        const tidalCorr = corridorMeta.map((m) => byId.get(m.id)).find((c) => c.tidal && c.tidal.station_code);
        if (tidalCorr) {
            try {
                tidal = yield fetchIwlsTidalSeries(tidalCorr.tidal, cfg.asOf || null, cfg.maxHours, log);
            }
            catch (e) {
                corridorWarnings.push(`Tide feed unavailable (${String(e).slice(0, 70)}) â€” tidal reach ETAs are NET-DRIFT ONLY; ` +
                    `flood tides can stall or reverse transport, treat as bands of Â± several hours.`);
                log(`  tidal fetch FAILED: ${e}`);
            }
        }
        return {
            lat, lon, comid: null, snapName: corr.name, snapDistM, riverName,
            rows, gd, siteSets, receptorSets, tidal,
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
    // 6b. tidal corridor override (v1.8): rows flagged tidal get FIRST-PASSAGE
    // times from a 1-D oscillating front (net drift + predicted tide) instead of
    // steady integration. Net velocity comes from the steady time GRADIENT, so
    // it inherits safety-factor/Jobson semantics for either timing model.
    let tidalApplied = null;
    if (data.tidal && data.tidal.series.length) {
        const i0 = df.findIndex((r) => r.tidal);
        if (i0 !== -1 && df.length > 1) {
            const td = data.tidal;
            const gradVel = (tField) => {
                var _c;
                const dist = df.map((r) => r.cum_dist);
                const segV = new Array(df.length).fill(0.1);
                for (let i = 1; i < df.length; i++) {
                    const dt = (df[i][tField] - df[i - 1][tField]) * 3600;
                    segV[i] = dt > 0 ? df[i].distance / dt : segV[i - 1];
                }
                segV[0] = (_c = segV[1]) !== null && _c !== void 0 ? _c : 0.1;
                return (s) => {
                    if (s <= dist[0])
                        return segV[0];
                    if (s >= dist[dist.length - 1])
                        return segV[segV.length - 1];
                    let lo = 0, hi = dist.length - 1;
                    while (hi - lo > 1) {
                        const m = (lo + hi) >> 1;
                        if (dist[m] <= s)
                            lo = m;
                        else
                            hi = m;
                    }
                    return segV[lo + 1];
                };
            };
            const uAt = (shiftMin, scale) => (hr) => {
                const [u] = owWindAt(td.series, td.t0Ms + (hr * 60 + shiftMin) * 60e3);
                return u * scale;
            };
            const tMain = jobson ? "t_lead" : "cum_time";
            const entryHr = i0 > 0 ? df[i0 - 1][tMain] : 0;
            const times = tidalFrontTimes(df, i0, entryHr, gradVel(tMain), uAt(0, 1), cfg.maxHours);
            // earliest-credible envelope: tide phase advanced by the authored
            // uncertainty + 10% amplitude, entered at the fast river time
            const entryFastHr = i0 > 0 ? (jobson ? df[i0 - 1].t_lead_min : df[i0 - 1].cum_time) : 0;
            const vFast = jobson ? gradVel("t_lead_min") : gradVel("cum_time");
            const timesFast = tidalFrontTimes(df, i0, entryFastHr, vFast, uAt(td.phase_uncert_min, 1.1), cfg.maxHours);
            for (let k = i0; k < df.length; k++) {
                df[k].cum_time = times[k];
                if (jobson) {
                    df[k].t_peak = times[k];
                    df[k].t_lead = times[k];
                    df[k].t_lead_min = Math.min(timesFast[k], times[k]);
                    df[k].t_clear = null; // Jobson passage regressions don't apply to tidal reaches
                }
            }
            tidalApplied = {
                station_code: td.station_code, station_name: td.station_name,
                u_max_ms: td.u_max_ms, phase_lag_min: td.phase_lag_min,
                phase_uncert_min: td.phase_uncert_min, source: td.source,
                tide_points: td.series.length, entry_hr: Math.round(entryHr * 100) / 100,
                rows_tidal: df.length - i0,
            };
            log(`  TIDAL: front integration from row ${i0} (entry ${entryHr.toFixed(2)} h), ` +
                `${td.station_name} u_max ${td.u_max_ms} m/s`);
        }
    }
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
    if (tidalApplied) {
        warnings.unshift(`Tidal reach MODELED with predicted tide at ${tidalApplied.station_name} ` +
            `(authored amplitude ${tidalApplied.u_max_ms} m/s): ETAs are FIRST ARRIVAL of an oscillating ` +
            `front â€” product re-crosses sites on later cycles; phase uncertainty Â±${tidalApplied.phase_uncert_min} min.`);
    }
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
        tidal: tidalApplied,
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
// NHD FType: 390 LakePond, 436 Reservoir, 493 Estuary, 445 SeaOcean (numeric
// on the MapServer; accept the string forms for robustness). Estuary/SeaOcean
// = coastal â€” the particle model adds a blended tidal-current field (Tier 3).
function isOpenWaterBody(wb) {
    const f = wb && wb.ftype;
    return f === 390 || f === 436 || f === 493 || f === 445 ||
        f === "LakePond" || f === "Reservoir" || f === "Estuary" || f === "SeaOcean";
}
function isCoastalBody(wb) {
    const f = wb && wb.ftype;
    return f === 493 || f === 445 || f === "Estuary" || f === "SeaOcean";
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
// ---- CO-OPS tidal-current predictions (Tier 3 coastal) ----------------------
const COOPS_DATA_URL = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter";
const COOPS_MDAPI_URL = "https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations.json";
let COOPS_CATALOG = null; // module cache â€” ~4,400 stations, fetched once per session
/**
 * Nearest CO-OPS current-prediction stations with their signed 6-min series
 * projected onto flood/ebb axes â†’ [{id, name, lat, lon, dist_km,
 * series: [{t, u, v}] (m/s true-vector)}]. Tries nearest candidates until
 * `maxN` succeed (subordinate stations reject 6-min interval â€” skipped).
 */
function fetchCurrentStations(lat, lon, ow, hoursNeeded, startTMs, log) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!COOPS_CATALOG) {
            const j = yield getJson(COOPS_MDAPI_URL, { params: { type: "currentpredictions", units: "metric" }, timeoutMs: 60000 });
            // the catalog lists one row per bin/depth â€” dedupe to one per station id
            const seen = new Set();
            COOPS_CATALOG = [];
            for (const s of j.stations || []) {
                if (seen.has(s.id))
                    continue;
                seen.add(s.id);
                COOPS_CATALOG.push({ id: s.id, name: s.name, lat: s.lat, lon: s.lng });
            }
        }
        const cands = COOPS_CATALOG
            .map((s) => (Object.assign(Object.assign({}, s), { dist_m: haversineM(lat, lon, s.lat, s.lon) })))
            .filter((s) => s.dist_m <= ow.currentStationMaxKm * 1000)
            .sort((a, b) => a.dist_m - b.dist_m)
            .slice(0, ow.currentStationsMax * 3); // spare candidates for failures
        const beginMs = startTMs - 2 * 3600e3;
        const d = new Date(beginMs);
        const pad = (x) => String(x).padStart(2, "0");
        const begin = `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;
        const range = Math.ceil(hoursNeeded + 8);
        const out = [];
        for (const c of cands) {
            if (out.length >= ow.currentStationsMax)
                break;
            try {
                const j = yield getJson(COOPS_DATA_URL, {
                    params: {
                        station: c.id, product: "currents_predictions",
                        begin_date: begin, range: String(range),
                        time_zone: "gmt", interval: "6", units: "metric", format: "json",
                    },
                    tries: 1, timeoutMs: 30000,
                });
                const cp = j.current_predictions && j.current_predictions.cp;
                if (!Array.isArray(cp) || cp.length < 10)
                    throw new Error("empty");
                const series = cp.map((r) => {
                    const spd = Number(r.Velocity_Major) / 100; // cm/s (metric) â†’ m/s, signed +flood/âˆ’ebb
                    const dir = ((spd >= 0 ? Number(r.meanFloodDir) : Number(r.meanEbbDir)) * Math.PI) / 180;
                    const mag = Math.abs(spd);
                    return { t: Date.parse(r.Time.replace(" ", "T") + "Z"), u: mag * Math.sin(dir), v: mag * Math.cos(dir) };
                }).filter((x) => Number.isFinite(x.t) && Number.isFinite(x.u));
                if (series.length < 10)
                    throw new Error("unparseable");
                out.push({ id: c.id, name: c.name, lat: c.lat, lon: c.lon, dist_km: Math.round(c.dist_m / 100) / 10, series });
                if (log)
                    log(`  current station ${c.id} ${c.name} @ ${(c.dist_m / 1000).toFixed(1)} km â€” ${series.length} pts`);
            }
            catch (e) {
                if (log)
                    log(`  current station ${c.id} skipped: ${String(e).slice(0, 60)}`);
            }
        }
        return out;
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
/** One particle set. Pure + deterministic (seeded). Internal.
 *  currentAt(x, y, tMs) â†’ [u, v] m/s (optional â€” coastal tidal blend);
 *  currents advect at 100% (GNOME), windage rides on top. */
function owSimulate({ x0, y0, tMs0, windSeries, index, ow, uncertainty, seed, currentAt = null }) {
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
            curF: 1, curA: 0,
        };
        if (uncertainty)
            drawPerturb(P[i]);
    }
    function drawPerturb(p) {
        p.pertF = Math.exp(rng.gaussian() * 0.3); // lognormal speed factor, median 1
        p.pertA = Math.max(-angCap, Math.min(angCap, (rng.gaussian() * 20 * Math.PI) / 180));
        p.pertAgeS = 0;
        // current perturbation (GNOME Â§15 spirit): Â±20% scale + small rotation,
        // held for the run (currents re-randomize on the 48 h scale, > our runs)
        p.curF = Math.exp(rng.gaussian() * 0.2);
        p.curA = Math.max(-0.52, Math.min(0.52, (rng.gaussian() * 10 * Math.PI) / 180));
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
            let cu = 0, cv = 0;
            if (currentAt) {
                [cu, cv] = currentAt(p.x, p.y, tMs);
                if (uncertainty) {
                    const cc = Math.cos(p.curA), cs = Math.sin(p.curA);
                    const ru = p.curF * (cu * cc - cv * cs);
                    cv = p.curF * (cu * cs + cv * cc);
                    cu = ru;
                }
            }
            const nx = p.x + (cu + p.windage * wu) * dt + rng.uniform(-1, 1) * diffStep;
            const ny = p.y + (cv + p.windage * wv) * dt + rng.uniform(-1, 1) * diffStep;
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
        const startTMs = Date.now() + startOffsetHr * 3600000;
        const coastal = isCoastalBody(wb);
        const log = cfg.verbose ? (...a) => console.log(...a) : null;
        const windP = fetchWindSeries(lat, lon, startOffsetHr + ow.durationHr);
        // coastal: blended tidal-current field from the nearest prediction stations
        let stationsP = Promise.resolve([]);
        if (coastal && ow.coastalCurrents) {
            stationsP = fetchCurrentStations(lat, lon, ow, ow.durationHr, startTMs, log)
                .catch((e) => { if (log)
                log(`  current stations FAILED: ${e}`); return []; });
        }
        const fetchSets = (providers) => __awaiter(this, void 0, void 0, function* () {
            return Promise.all((providers || []).map((p) => __awaiter(this, void 0, void 0, function* () {
                var _c;
                return ({
                    name: p.name, buffer_m: (_c = p.buffer_m) !== null && _c !== void 0 ? _c : 400, feats: yield p.fetch(),
                });
            })));
        });
        const [wind, currentStations, siteSets, receptorSets] = yield Promise.all([windP, stationsP, fetchSets(cfg.siteProviders), fetchSets(cfg.receptorProviders)]);
        return {
            lat, lon, waterbody: wb, coastal,
            windSeries: wind.series, windSource: wind.source,
            currentStations,
            siteSets, receptorSets,
            startOffsetHr,
            startTMs,
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
    var _c, _d;
    const ow = Object.assign(Object.assign({}, DEFAULT_OPENWATER), (config.openWater || {}));
    // coastal water is more energetic â€” bump the diffusion default unless the
    // config explicitly set one
    if (data.coastal && (((_c = config.openWater) === null || _c === void 0 ? void 0 : _c.diffusionM2s) === undefined)) {
        ow.diffusionM2s = ow.coastalDiffusionM2s;
    }
    const log = (m) => (Object.assign(Object.assign({}, DEFAULT_CONFIG), config)).verbose && console.log(m);
    const t0 = Date.now();
    const proj = owProjection(data.lat, data.lon);
    const ringsXY = data.waterbody.rings.map((r) => r.map(([lo, la]) => proj.toXY(la, lo)));
    const index = owShorelineIndex(ringsXY);
    // coastal tidal-current field: inverse-distance-squared blend of the
    // station vectors (100 m floor keeps a click on top of a station finite)
    let currentAt = null;
    if (data.currentStations && data.currentStations.length) {
        const sts = data.currentStations.map((s) => {
            const [sx, sy] = proj.toXY(s.lat, s.lon);
            return { sx, sy, series: s.series };
        });
        currentAt = (x, y, tMs) => {
            let wu = 0, wv = 0, wsum = 0;
            for (const s of sts) {
                const dx = x - s.sx, dy = y - s.sy;
                const w = 1 / Math.max(dx * dx + dy * dy, 1e4);
                const [u, v] = owWindAt(s.series, tMs);
                wu += w * u;
                wv += w * v;
                wsum += w;
            }
            return [wu / wsum, wv / wsum];
        };
    }
    const simArgs = {
        x0: 0, y0: 0, tMs0: data.startTMs, windSeries: data.windSeries, index, ow, currentAt,
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
        const buf = (_d = set.buffer_m) !== null && _d !== void 0 ? _d : 400;
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
        const curNote = currentAt
            ? ` + tidal currents (${data.currentStations.length} station${data.currentStations.length > 1 ? "s" : ""})`
            : "";
        headline =
            `Wind ${spd.toFixed(1)} m/s â†’ drifting ${compass(towardDeg)}${curNote}` +
                (bestFirst
                    ? `; first shoreline arrival ~${early !== null && early < bestFirst.first_hr ? early + "â€“" : ""}${bestFirst.first_hr} h`
                    : `; no shoreline arrival within ${ow.durationHr} h (best guess)`);
        if (spd < 1.5 && !currentAt)
            warnings.push("Light/variable wind â€” drift direction is LOW CONFIDENCE; treat the uncertainty envelope as the planning footprint.");
    }
    if (data.coastal && !currentAt) {
        warnings.unshift(`No CO-OPS current-prediction station within range â€” COASTAL drift is wind-only here; ` +
            `tidal transport is NOT modeled and can dominate. Treat with caution.`);
    }
    if (currentAt) {
        warnings.push(`Tidal currents blended from ${data.currentStations.map((s) => s.id).join(", ")} ` +
            `(nearest ${data.currentStations[0].dist_km} km) â€” station-axis predictions, not a circulation model; ` +
            `accuracy degrades away from the stations.`);
    }
    warnings.push("Open-water model: surface transport only (GNOME-class physics) â€” no weathering; ETAs depend on the wind forecast" +
        (currentAt ? " and predicted tidal currents." : "; lake-circulation currents are not modeled."));
    const result = {
        mode: "open-water",
        coastal: !!data.coastal,
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
            coastal: !!data.coastal,
            current_stations: (data.currentStations || []).map((s) => ({ id: s.id, name: s.name, dist_km: s.dist_km })),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zcGlsbC10cmFjZS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxjQUFjO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUksTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDO0FBRXRDLE1BQU0sU0FBUyxHQUFHLGlDQUFpQyxDQUFDO0FBQ3BELE1BQU0sU0FBUyxHQUFHLGtEQUFrRCxDQUFDO0FBQ3JFLE1BQU0sT0FBTyxHQUFHLHlDQUF5QyxDQUFDO0FBQzFELE1BQU0sU0FBUyxHQUFHLDJDQUEyQyxDQUFDO0FBQzlELE1BQU0sU0FBUyxHQUFHLDJDQUEyQyxDQUFDO0FBQzlELE1BQU0sUUFBUSxHQUFHLHVDQUF1QyxDQUFDO0FBRXpEOzs7O0dBSUc7QUFDSSxNQUFNLDBCQUEwQixHQUFHLElBQUksR0FBRyxDQUFDO0lBQ2hELDRGQUE0RjtJQUM1RixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVE7Q0FDN0IsQ0FBQyxDQUFDO0FBRUksTUFBTSxjQUFjLEdBQUc7SUFDNUIsYUFBYSxFQUFFLEdBQUc7SUFDbEIsUUFBUSxFQUFFLEVBQUU7SUFDWixXQUFXLEVBQUUsS0FBSztJQUNsQixZQUFZLEVBQUUsR0FBRztJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLGFBQWEsRUFBRSxJQUFJLEVBQVMsMkRBQTJEO0lBQ3ZGLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsaUJBQWlCLEVBQUUsR0FBRyxFQUFNLHFEQUFxRDtJQUNqRixhQUFhLEVBQUUsRUFBRTtJQUNqQixpQkFBaUIsRUFBRSxFQUFFO0lBQ3JCLGVBQWUsRUFB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RSxFQUFFLFFBQVEsR0FBRyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTTtRQUFFLE9BQU8sUUFBUSxDQUFDO0lBQ3pDLElBQUksRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBRSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNwQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdELE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELENBQUM7SUFDSCxDQUFDO0lBQ0QsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFD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QUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRCxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN2QyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUFFLFNBQVMsQ0FBQyxlQUFlO1lBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RyxDQUFDO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUU7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7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RCxTQUFTLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRztJQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07UUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbkMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ25CLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztZQUFFLEVBQUUsR0FBRyxHQUFHLENBQUM7O1lBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsT0FBTyxD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R0FBRyxFQUFFLENBQUM7QUFDOUMsQ0FBQztBQUVELFNBQVMsZUFBZSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQzVDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDMUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMzRixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzNGLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM5QixNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsR0FBRztnQkFBRSxTQUFTO1lBQ25CLEtBQUssTUFBTSxHQUFHLElBQUksR0FB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UUFDOUIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDaEQsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNELE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNuQixLQUFLLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLENBQUM7WUFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLFlBQVks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QVksRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSx3QkFBSyxDQUFDLEtBQXBILENBQUMsQ0FBMEgsQ0FDdEksQ0FBQyxFQUNGLGdFQUFDLGNBQWMsSUFBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLFVBQVUsR0FBSSxJQUNyQyxDQUNQLElBQ0csQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxNQUFNO0FBRWIsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc3BpbGwtdHJhY2Uvc3JjL3RyYWNlLWVuZ2luZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvR3JhcGhpY1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9Qb2ludFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9Qb2x5bGluZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc3BpbGwtdHJhY2Uvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtbm9jaGVja1xuLyoqXHJcbiAqIHRyYWNlLWVuZ2luZS5qcyDDouKCrOKAnSBOYXRpb25hbCBzcGlsbCB0cmFqZWN0b3J5IGVuZ2luZSAoSlMgcG9ydCBvZiBzcGlsbF90cmFjZS5weSlcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqXHJcbiAqIEZhaXRoZnVsIHBvcnQgb2YgdGhlIFB5dGhvbiBvcmFjbGUuIERlcGVuZGVuY3ktZnJlZSBFU006IHJ1bnMgaW4gcGxhaW4gTm9kZVxyXG4gKiAoPj0xOCwgZ2xvYmFsIGZldGNoKSBmb3IgZ29sZGVuIHRlc3RpbmcgYW5kIGluIHRoZSBicm93c2VyIGluc2lkZSB0aGUgRXhCXHJcbiAqIHdpZGdldC4gTk8gQGFyY2dpcyBpbXBvcnRzIGhlcmUgw6LigqzigJ0gdGhlIHdpZGdldCB3cmFwcyB0aGlzIG1vZHVsZSBhbmQgc3VwcGxpZXNcclxuICogbGF5ZXIgYWNjZXNzIHRocm91Z2ggaW5qZWN0YWJsZSBwcm92aWRlcnM6XHJcbiAqXHJcbiAqICAgY29uZmlnLndpZHRoUHJvdmlkZXIoZW52ZWxvcGUpICAtPiBbe2xhdCwgbG9uLCB3aWR0aH1dICAgKEdMT1cgbWlkcG9pbnRzIGluIGJib3gpXHJcbiAqICAgY29uZmlnLnNpdGVQcm92aWRlcnMgICAgICAgICAgICAtPiBbe25hbWUsIGJ1ZmZlcl9tLCBmZXRjaDogYXN5bmMgKCkgPT4gW3tuYW1lLCBsYXQsIGxvbiwgLi4uZXh0cmF9XX1dXHJcbiAqICAgY29uZmlnLnJlY2VwdG9yUHJvdmlkZXJzICAgICAgICAtPiBzYW1lIHNoYXBlIGFzIHNpdGVQcm92aWRlcnNcclxuICpcclxuICogUG9ydCBnb3RjaGFzIGhvbm9yZWQgKHNlZSBSRUFETUUpOlxyXG4gKiAgIDEuIGdlb3NlcnZlciBDUUwgQkJPWCBpcyBsYXQsbG9uIGF4aXMgb3JkZXIgKEVQU0c6NDI2OSAvIFdGUyAyLjApXHJcbiAqICAgMi4gSFIgTkhEUGx1c0lEICE9IE1SIGNvbWlkIMOi4oKs4oCdIHdpZHRocyBzYW1wbGVkIHNwYXRpYWxseSwgbmV2ZXIgSUQtam9pbmVkXHJcbiAqICAgMy4gaW1wb3VuZG1lbnQgPSB3YmFyZWF0eXBlIGluIChMYWtlUG9uZCwgUmVzZXJ2b2lyKVxyXG4gKiAgIDQuIHdpZHRoIG92ZXJyaWRlIHNhbXBsZWQgaW4gd2luZG93czsgZmFpbHVyZSBkZWdyYWRlcyB0byBmb3JtdWxhIHdpZHRoc1xyXG4gKiAgIDUuIE5MREkvZ2Vvc2VydmVyIGVtcHR5LTIwMCAtPiByZXRyeSAzeCB3aXRoIGJhY2tvZmZcclxuICogICA2LiBzbmFwIGNsaWNrIHRvIHN0cmVhbW9yZGUgPj0gbWluU3RyZWFtT3JkZXJcclxuICpcclxuICogQ29ycmlkb3IgbW9kZSAodjEuNik6IFVTIGZlZGVyYWwgc2VydmljZXMgKE5MREkvTkhEUGx1cy9OV0lTKSBlbmQgYXQgdGhlXHJcbiAqIGJvcmRlci4gY29uZmlnLmNvcnJpZG9ycyBsaXN0cyBwcmVjb21wdXRlZCBjb3JyaWRvciBmaWxlcyAoc2VlXHJcbiAqIGNvcnJpZG9ycy9idWlsZF9jb3JyaWRvcnMucHkpIMOi4oKs4oCdIGEgc3RhdGlvbmVkIGNlbnRlcmxpbmUgKyBhdXRob3JlZCBoeWRyYXVsaWNcclxuICogYXR0cmlidXRlcyArIGEgZmxvdyBtb2RlbCBib3VuZCB0byBFQ0NDIChXYXRlciBTdXJ2ZXkgb2YgQ2FuYWRhKSBnYXVnZXMuXHJcbiAqIEEgY2xpY2sgdGhhdCBsYW5kcyB3aXRoaW4gYSBjb3JyaWRvcidzIHNuYXBfbSBydW5zIGVudGlyZWx5IG9uIGNvcnJpZG9yXHJcbiAqIGRhdGE7IGNvcnJpZG9ycyBjaGFpbiBkb3duc3RyZWFtIHZpYSBjb250aW51ZXNfdG8gKEJydW5ldHRlIC0+IEZyYXNlciksXHJcbiAqIHdpdGggc2hvcnQgY29uZmx1ZW5jZSBnYXBzIGJyaWRnZWQgYnkgYSBzdHJhaWdodCBjb25uZWN0b3IgdGhhdCBpbmhlcml0c1xyXG4gKiB0aGUgRE9XTlNUUkVBTSBjb3JyaWRvcidzIGh5ZHJhdWxpY3MuIEFsbCBwaHlzaWNzIChjb21wdXRlVHJhY2UpIGlzIHNoYXJlZFxyXG4gKiB3aXRoIHRoZSBVUyBwYXRoLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBFTkdJTkVfVkVSU0lPTiA9IFwiMS44LjBcIjtcclxuXHJcbmNvbnN0IE5MRElfQkFTRSA9IFwiaHR0cHM6Ly9hcGkud2F0ZXIudXNncy5nb3YvbmxkaVwiO1xyXG5jb25zdCBHRU9TRVJWRVIgPSBcImh0dHBzOi8vYXBpLndhdGVyLnVzZ3MuZ292L2dlb3NlcnZlci93bWFkYXRhL293c1wiO1xyXG5jb25zdCBOV0lTX0lWID0gXCJodHRwczovL3dhdGVyc2VydmljZXMudXNncy5nb3Yvbndpcy9pdi9cIjtcclxuY29uc3QgTldJU19TSVRFID0gXCJodHRwczovL3dhdGVyc2VydmljZXMudXNncy5nb3Yvbndpcy9zaXRlL1wiO1xyXG5jb25zdCBOV0lTX1NUQVQgPSBcImh0dHBzOi8vd2F0ZXJzZXJ2aWNlcy51c2dzLmdvdi9ud2lzL3N0YXQvXCI7XHJcbmNvbnN0IEVDQ0NfQVBJID0gXCJodHRwczovL2FwaS53ZWF0aGVyLmdjLmNhL2NvbGxlY3Rpb25zXCI7XHJcblxyXG4vKipcclxuICogTkhEUGx1cyBNUiB3YXRlcmJvZHkgZmxhZ3MgbGFnIHJlYWxpdHkgw6LigqzigJ0gcmVhY2hlcyB0aHJvdWdoIFJFTU9WRUQgZGFtcyBzdGlsbFxyXG4gKiBjYXJyeSB3YmFyZWF0eXBlIExha2VQb25kIGFuZCB3b3VsZCBmYWxzZS1zdG9wIHRoZSBjbG9jay4gS25vd24gcmVtb3ZhbHNcclxuICogYXJlIGV4Y2x1ZGVkIGhlcmUgKGV4dGVuZGFibGUgcGVyLXJ1biB2aWEgY29uZmlnLmltcG91bmRFeGNsdWRlQ29taWRzKS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVEX0lNUE9VTkRNRU5UX0NPTUlEUyA9IG5ldyBTZXQoW1xyXG4gIC8vIE1pbGx0b3duIERhbSwgQ2xhcmsgRm9yayBhdCBCb25uZXIgTVQgw6LigqzigJ0gcmVtb3ZlZCAyMDA4LTIwMTAgKHJlcG9ydGVkIGJ5IENvZHkgMjAyNi0wNy0wNylcclxuICAyNDI5MzEyMCwgMjQyOTMxMjIsIDI0MjkzMTI0LFxyXG5dKTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcclxuICBtYXhEaXN0YW5jZUttOiAzMDAsXHJcbiAgbWF4SG91cnM6IDI0LFxyXG4gIHJlc29sdXRpb25NOiAxMDAuMCxcclxuICBzYWZldHlGYWN0b3I6IDEuNSxcclxuICBtYW5uaW5nTjogMC4wNDUsXHJcbiAgbWluU3RyZWFtT3JkZXI6IDQsXHJcbiAgd2lkdGhQcm92aWRlcjogbnVsbCwgICAgICAgIC8vIGFzeW5jIChlbnYge3htaW4seW1pbix4bWF4LHltYXh9KSA9PiBbe2xhdCwgbG9uLCB3aWR0aH1dXHJcbiAgd2lkdGhTYW1wbGVSYWRpdXNNOiA4MDAsXHJcbiAgd2lkdGhXaW5kb3dQb2ludHM6IDEwMCwgICAgIC8vIHRyYWNlIHBvaW50cyBwZXIgb3ZlcnJpZGUgc2FtcGxpbmcgd2luZG93ICh+MTAga20pXHJcbiAgc2l0ZVByb3ZpZGVyczogW10sXHJcbiAgcmVjZXB0b3JQcm92aWRlcnM6IFtdLFxyXG4gIHVwc3RyZWFtR2F1Z2VLbTogMzAsICAgICAgICAvLyBzZWFyY2ggVU0gdGhpcyBmYXIgZm9yIGFuIHVwc3RyZWFtIGFuY2hvciBnYXVnZTsgMCA9IG9mZlxyXG4gIHFJbnRlcnA6IFwiZHJhaW5hZ2UtYXJlYVwiLCAgIC8vICdkcmFpbmFnZS1hcmVhJyAoUSBqdW1wcyBhdCBjb25mbHVlbmNlcykgfCAnZGlzdGFuY2UnIChsZWdhY3kgbGluZWFyIHNtZWFyKVxyXG4gIGdhdWdlU3RhdEZhbGxiYWNrOiB0cnVlLCAgICAvLyBnYXVnZSBJViBmZWVkIGRvd24gLT4gcGVyaW9kLW9mLXJlY29yZCBtZWRpYW4gZGFpbHkgZmxvdyAoUGF5dG9uJ3MgZ2V0X2Rpc2NoYXJnZSBwYXR0ZXJuKVxyXG4gIGltcG91bmRTdG9wS206IDIuMCxcclxuICBpbXBvdW5kRXhjbHVkZUNvbWlkczogW10sICAgLy8gZXh0cmEgcmVtb3ZlZC1kYW0gY29taWRzIGJleW9uZCBSRU1PVkVEX0lNUE9VTkRNRU5UX0NPTUlEU1xyXG4gIGNvcnJpZG9yczogW10sICAgICAgICAgICAgICAvLyBjb3JyaWRvciBkb2NzIG9yIFVSTHMgKENhbmFkaWFuIHJpdmVycywgc2VlIGNvcnJpZG9ycy8pXHJcbiAgY29ycmlkb3JHYXBNYXhNOiAyMDAwLCAgICAgIC8vIG1heCBjb25mbHVlbmNlIGdhcCBicmlkZ2VkIHdoZW4gY2hhaW5pbmcgY29ycmlkb3JzXHJcbiAgdGltaW5nTW9kZWw6IFwiaHlkcmF1bGljXCIsICAgLy8gJ2h5ZHJhdWxpYycgKFY9US9BIHggc2FmZXR5KSB8ICdqb2Jzb24nIChVU0dTIFdSSVIgOTYtNDAxMyBkeWUtc3R1ZHkgcmVncmVzc2lvbnMpXHJcbiAgYXNPZjogbnVsbCwgICAgICAgICAgICAgICAgIC8vICdZWVlZLU1NLUREJyBoaXN0b3JpY2FsIFE7IG51bGwgPSBsaXZlXHJcbiAgdmVyYm9zZTogdHJ1ZSxcclxuICBvcGVuV2F0ZXI6IHt9LCAgICAgICAgICAgICAgLy8gb3ZlcnJpZGVzIGZvciBERUZBVUxUX09QRU5XQVRFUiAodjEuNyBsYWtlL3Jlc2Vydm9pciBtb2RlKVxyXG59O1xyXG5cclxuLyoqIE9wZW4td2F0ZXIgKGxha2UvcmVzZXJ2b2lyKSBtb2RlIMOi4oKs4oCdIEdOT01FLXN0eWxlIHBhcnRpY2xlIHRyYW5zcG9ydFxyXG4gKiAgKE5PQUEgVGVjaCBEb2MgTk9TIE9SJlIgNDAsIHB1YmxpYyBkb21haW4pLiBWYWxpZGF0ZWQgaW4gb3BlbndhdGVyLXNwaWtlLy4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfT1BFTldBVEVSID0ge1xyXG4gIGVuYWJsZWQ6IHRydWUsICAgICAgICAgICAgICAvLyBsYWtlLWNsaWNrIGRpc3BhdGNoICsgaW1wb3VuZG1lbnQgY29udGludWF0aW9uXHJcbiAgbWluTGFrZVNxS206IDEuMCwgICAgICAgICAgIC8vIFBJUCBoaXRzIHNtYWxsZXIgdGhhbiB0aGlzIHN0YXkgb24gdGhlIHJpdmVyIHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKGd1YXJkcyByZW1vdmVkLWRhbSByZWxpYyBwb2x5Z29ucywgZmFybSBwb25kcylcclxuICByaXZlck92ZXJyaWRlTTogNDAwLCAgICAgICAgLy8gbm9uLWltcG91bmRlZCByZWFjaCB0aGlzIGNsb3NlIMOi4oCg4oCZIHJpdmVyIG1vZGUgd2luc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAoZGFtIHRhaWxyYWNlcyBzaXQgaW5zaWRlIHJlc2Vydm9pciBwb2x5Z29ucylcclxuICBuUGFydGljbGVzOiAxMDAwLFxyXG4gIGR1cmF0aW9uSHI6IDI0LCAgICAgICAgICAgICAvLyBzaW0gbGVuZ3RoIGZyb20gd2F0ZXIgZW50cnkgKGNvbnRpbnVhdGlvbnMgdG9vKVxyXG4gIHRpbWVzdGVwUzogOTAwLFxyXG4gIHdpbmRhZ2VNaW46IDAuMDEsICAgICAgICAgICAvLyBHTk9NRSAxw6LigqzigJw0JSBvZiBVMTAsIHVuaWZvcm0gcGVyIHBhcnRpY2xlXHJcbiAgd2luZGFnZU1heDogMC4wNCxcclxuICB3aW5kYWdlUGVyc2lzdFM6IDkwMCxcclxuICBkaWZmdXNpb25NMnM6IDEuMCwgICAgICAgICAgLy8gbGFrZXMvcHJvdGVjdGVkIHdhdGVyIChHTk9NRSBcImxvd1wiKTsgY29hc3RhbCA9IDEwXHJcbiAgcmVmbG9hdEhhbGZMaWZlSHI6IDEuMCxcclxuICBjb250aW51ZUF0SW1wb3VuZG1lbnQ6IHRydWUsXHJcbiAgc2hvcmVHYXBTZWdzOiAzLCAgICAgICAgICAgIC8vIGJlYWNoZWQtY2x1c3RlciBtZXJnZSB0b2xlcmFuY2UgKHNob3JlbGluZSBzZWdtZW50cylcclxuICBtYXhTaG9yZUltcGFjdHM6IDEwLFxyXG4gIHNlZWQ6IDEyMzQ1LCAgICAgICAgICAgICAgICAvLyBkZXRlcm1pbmlzdGljIHJlcGxheXM7IHJ1blJlY29yZCBjYXJyaWVzIGl0XHJcbiAgLy8gY29hc3RhbCAoVGllciAzKTogZXN0dWFyeS9zb3VuZCBjbGlja3MgYmxlbmQgQ08tT1BTIHRpZGFsLWN1cnJlbnRcclxuICAvLyBwcmVkaWN0aW9ucyBmcm9tIHRoZSBuZWFyZXN0IHN0YXRpb25zIGludG8gdGhlIGFkdmVjdGlvblxyXG4gIGNvYXN0YWxDdXJyZW50czogdHJ1ZSxcclxuICBjdXJyZW50U3RhdGlvbnNNYXg6IDMsXHJcbiAgY3VycmVudFN0YXRpb25NYXhLbTogMTUsXHJcbiAgY29hc3RhbERpZmZ1c2lvbk0yczogMTAsICAgIC8vIEdOT01FIGNvYXN0YWwgZGVmYXVsdCAobGFrZXMgc3RheSBhdCAxKVxyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzXHJcblxyXG5jb25zdCBSX0VBUlRIID0gNjM3MTAwOC44O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhdmVyc2luZU0obGF0MSwgbG9uMSwgbGF0MiwgbG9uMikge1xyXG4gIGNvbnN0IHAxID0gKGxhdDEgKiBNYXRoLlBJKSAvIDE4MDtcclxuICBjb25zdCBwMiA9IChsYXQyICogTWF0aC5QSSkgLyAxODA7XHJcbiAgY29uc3QgZHAgPSBwMiAtIHAxO1xyXG4gIGNvbnN0IGRsID0gKChsb24yIC0gbG9uMSkgKiBNYXRoLlBJKSAvIDE4MDtcclxuICBjb25zdCBhID0gTWF0aC5zaW4oZHAgLyAyKSAqKiAyICsgTWF0aC5jb3MocDEpICogTWF0aC5jb3MocDIpICogTWF0aC5zaW4oZGwgLyAyKSAqKiAyO1xyXG4gIHJldHVybiAyICogUl9FQVJUSCAqIE1hdGguYXNpbihNYXRoLnNxcnQoYSkpO1xyXG59XHJcblxyXG4vKiogUGF5dG9uJ3Mgd2lkdGgvZGVwdGggZm9ybXVsYXMgKGZhbGxiYWNrIHdoZW4gbm8gR0xPVyBkYXRhKS4gVmVyYmF0aW0uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlc3RpbWF0ZUdlb21ldHJ5UGF5dG9uKGRyYWluYWdlQXJlYVNxTWkpIHtcclxuICBsZXQgd2lkdGgsIGRlcHRoO1xyXG4gIGlmIChkcmFpbmFnZUFyZWFTcU1pIDwgMTAwKSB7XHJcbiAgICB3aWR0aCA9IDEwLjAgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAsIDAuNSk7XHJcbiAgICBkZXB0aCA9IDAuNSAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MCwgMC4zKTtcclxuICB9IGVsc2UgaWYgKGRyYWluYWdlQXJlYVNxTWkgPCAxMDAwKSB7XHJcbiAgICB3aWR0aCA9IDUwLjAgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAwLCAwLjUpO1xyXG4gICAgZGVwdGggPSAxLjUgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAwLCAwLjMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aWR0aCA9IDE1MC4wICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwMDAsIDAuNCk7XHJcbiAgICBkZXB0aCA9IDMuMCAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MDAwLCAwLjMpO1xyXG4gIH1cclxuICByZXR1cm4gW3dpZHRoLCBkZXB0aF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYW5uaW5nJ3MgZGVwdGggdmlhIGJpc2VjdGlvbiAoUHl0aG9uIHVzZWQgc2NpcHkgYnJlbnRxIG9uIFswLjEsIDIwXSkuXHJcbiAqIFRoZSByZXNpZHVhbCBpcyBtb25vdG9uaWNhbGx5IGluY3JlYXNpbmcgaW4gZGVwdGgsIHNvIGJpc2VjdGlvbiBjb252ZXJnZXMgdG9cclxuICogdGhlIHNhbWUgcm9vdC4gUmVwbGljYXRlcyBicmVudHEncyBmYWlsdXJlIG1vZGU6IG5vIHNpZ24gY2hhbmdlIGFjcm9zcyB0aGVcclxuICogYnJhY2tldCAtPiBudWxsIChjYWxsZXIgZmFsbHMgYmFjayB0byBmb3JtdWxhIGRlcHRoKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVEZXB0aE1hbm5pbmcoUW0zcywgd2lkdGhNLCBzbG9wZSwgbiA9IDAuMDQ1KSB7XHJcbiAgaWYgKFFtM3MgPD0gMCB8fCB3aWR0aE0gPD0gMCB8fCBzbG9wZSA8PSAwLjAwMDAxKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCByZXNpZHVhbCA9IChkZXB0aCkgPT4ge1xyXG4gICAgaWYgKGRlcHRoIDw9IDAuMDEpIHJldHVybiAtUW0zcztcclxuICAgIGNvbnN0IEEgPSB3aWR0aE0gKiBkZXB0aDtcclxuICAgIGNvbnN0IFAgPSB3aWR0aE0gKyAyICogZGVwdGg7XHJcbiAgICBjb25zdCBSID0gQSAvIFA7XHJcbiAgICByZXR1cm4gKDEgLyBuKSAqIEEgKiBNYXRoLnBvdyhSLCAyIC8gMykgKiBNYXRoLnNxcnQoc2xvcGUpIC0gUW0zcztcclxuICB9O1xyXG4gIGxldCBsbyA9IDAuMSwgaGkgPSAyMC4wO1xyXG4gIGxldCBmbG8gPSByZXNpZHVhbChsbyksIGZoaSA9IHJlc2lkdWFsKGhpKTtcclxuICBpZiAoZmxvID09PSAwKSByZXR1cm4gbG87XHJcbiAgaWYgKGZoaSA9PT0gMCkgcmV0dXJuIGhpO1xyXG4gIGlmIChmbG8gKiBmaGkgPiAwKSByZXR1cm4gbnVsbDsgLy8gYnJlbnRxIHJhaXNlcyAtPiBQeXRob24gcmV0dXJucyBOb25lXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gICAgY29uc3QgbWlkID0gMC41ICogKGxvICsgaGkpO1xyXG4gICAgY29uc3QgZm0gPSByZXNpZHVhbChtaWQpO1xyXG4gICAgaWYgKGZtID09PSAwIHx8IChoaSAtIGxvKSAvIDIgPCAxZS0xMCkgcmV0dXJuIG1pZDtcclxuICAgIGlmIChmbG8gKiBmbSA8IDApIHsgaGkgPSBtaWQ7IGZoaSA9IGZtOyB9IGVsc2UgeyBsbyA9IG1pZDsgZmxvID0gZm07IH1cclxuICB9XHJcbiAgcmV0dXJuIDAuNSAqIChsbyArIGhpKTtcclxufVxyXG5cclxuY29uc3Qgc2xlZXAgPSAobXMpID0+IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIG1zKSk7XHJcblxyXG4vKiogR0VUL1BPU1Qgd2l0aCByZXRyeSDDouKCrOKAnSBOTERJL2dlb3NlcnZlciBpbnRlcm1pdHRlbnRseSByZXR1cm4gZW1wdHkgMjAwIGJvZGllcy4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0SnNvbih1cmwsIHsgcGFyYW1zID0gbnVsbCwgZGF0YSA9IG51bGwsIHRyaWVzID0gMywgdGltZW91dE1zID0gOTAwMDAgfSA9IHt9KSB7XHJcbiAgbGV0IGxhc3QgPSBudWxsO1xyXG4gIGZvciAobGV0IGF0dGVtcHQgPSAwOyBhdHRlbXB0IDwgdHJpZXM7IGF0dGVtcHQrKykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3RybCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IGN0cmwuYWJvcnQoKSwgdGltZW91dE1zKTtcclxuICAgICAgbGV0IHJlc3A7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKGRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgIHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoZGF0YSkudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgc2lnbmFsOiBjdHJsLnNpZ25hbCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBxcyA9IHBhcmFtcyA/IFwiP1wiICsgbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpLnRvU3RyaW5nKCkgOiBcIlwiO1xyXG4gICAgICAgICAgcmVzcCA9IGF3YWl0IGZldGNoKHVybCArIHFzLCB7IHNpZ25hbDogY3RybC5zaWduYWwgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFyZXNwLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgJHtyZXNwLnN0YXR1c31gKTtcclxuICAgICAgcmV0dXJuIGF3YWl0IHJlc3AuanNvbigpOyAvLyBlbXB0eSBib2R5IC0+IFN5bnRheEVycm9yIC0+IHJldHJ5XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGxhc3QgPSBlO1xyXG4gICAgICBhd2FpdCBzbGVlcCgxNTAwICogKGF0dGVtcHQgKyAxKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRocm93IG5ldyBFcnJvcihgJHt1cmx9IGZhaWxlZCBhZnRlciAke3RyaWVzfSB0cmllczogJHtsYXN0fWApO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRUZXh0KHVybCwgcGFyYW1zLCB0aW1lb3V0TXMgPSAzMDAwMCkge1xyXG4gIGNvbnN0IGN0cmwgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IGN0cmwuYWJvcnQoKSwgdGltZW91dE1zKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHVybCArIFwiP1wiICsgbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpLnRvU3RyaW5nKCksIHsgc2lnbmFsOiBjdHJsLnNpZ25hbCB9KTtcclxuICAgIHJldHVybiBhd2FpdCByZXNwLnRleHQoKTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGF0YSBmZXRjaFxyXG5cclxuLyoqIFNuYXAgdG8gbmVhcmVzdCByZWFjaCB3aXRoIHN0cmVhbW9yZGUgPj0gbWluT3JkZXIgKGdlb3NlcnZlciBiYm94IHNlYXJjaCkuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHNuYXBDb21pZChsYXQsIGxvbiwgbWluT3JkZXIpIHtcclxuICBjb25zdCBib3ggPSAwLjI7XHJcbiAgLy8gTk9URTogRVBTRzo0MjY5IHVuZGVyIFdGUyAyLjAgdXNlcyBsYXQsbG9uIGF4aXMgb3JkZXIgaW4gQ1FMIEJCT1hcclxuICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihHRU9TRVJWRVIsIHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgc2VydmljZTogXCJXRlNcIiwgdmVyc2lvbjogXCIyLjAuMFwiLCByZXF1ZXN0OiBcIkdldEZlYXR1cmVcIixcclxuICAgICAgdHlwZU5hbWU6IFwid21hZGF0YTpuaGRmbG93bGluZV9uZXR3b3JrXCIsIG91dHB1dEZvcm1hdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIGNxbF9maWx0ZXI6XHJcbiAgICAgICAgYHN0cmVhbW9yZGUgPj0gJHttaW5PcmRlcn0gQU5EIEJCT1godGhlX2dlb20sYCArXHJcbiAgICAgICAgYCR7bGF0IC0gYm94fSwke2xvbiAtIGJveH0sJHtsYXQgKyBib3h9LCR7bG9uICsgYm94fSlgLFxyXG4gICAgICBjb3VudDogXCI1MDBcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgbGV0IGJlc3QgPSBudWxsLCBiZXN0RCA9IEluZmluaXR5O1xyXG4gIGZvciAoY29uc3QgZiBvZiBqLmZlYXR1cmVzIHx8IFtdKSB7XHJcbiAgICBjb25zdCBnID0gZi5nZW9tZXRyeTtcclxuICAgIGNvbnN0IHBhdGhzID0gZy50eXBlID09PSBcIkxpbmVTdHJpbmdcIiA/IFtnLmNvb3JkaW5hdGVzXSA6IGcuY29vcmRpbmF0ZXM7XHJcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgcGF0aHMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSArPSAzKSB7IC8vIGV2ZXJ5IDNyZCB2ZXJ0ZXhcclxuICAgICAgICBjb25zdCBwID0gcGF0aFtpXTtcclxuICAgICAgICBjb25zdCBkID0gaGF2ZXJzaW5lTShsYXQsIGxvbiwgcFsxXSwgcFswXSk7XHJcbiAgICAgICAgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGJlc3QgPSBmLnByb3BlcnRpZXM7IH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoYmVzdCAhPT0gbnVsbCkgcmV0dXJuIFtOdW1iZXIoYmVzdC5jb21pZCksIGJlc3QuZ25pc19uYW1lID8/IG51bGwsIGJlc3REXTtcclxuICByZXR1cm4gW2F3YWl0IG5sZGlQb3NpdGlvbkNvbWlkKGxhdCwgbG9uKSwgbnVsbCwgbnVsbF07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG5sZGlQb3NpdGlvbkNvbWlkKGxhdCwgbG9uKSB7XHJcbiAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oYCR7TkxESV9CQVNFfS9saW5rZWQtZGF0YS9jb21pZC9wb3NpdGlvbmAsIHtcclxuICAgIHBhcmFtczogeyBjb29yZHM6IGBQT0lOVCgke2xvbn0gJHtsYXR9KWAgfSwgdGltZW91dE1zOiAzMDAwMCxcclxuICB9KTtcclxuICByZXR1cm4gTnVtYmVyKGouZmVhdHVyZXNbMF0ucHJvcGVydGllcy5pZGVudGlmaWVyKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbmxkaURtRmxvd2xpbmVzKGNvbWlkLCBkaXN0YW5jZUttKSB7XHJcbiAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oYCR7TkxESV9CQVNFfS9saW5rZWQtZGF0YS9jb21pZC8ke2NvbWlkfS9uYXZpZ2F0aW9uL0RNL2Zsb3dsaW5lc2AsIHtcclxuICAgIHBhcmFtczogeyBkaXN0YW5jZTogU3RyaW5nKE1hdGgudHJ1bmMoZGlzdGFuY2VLbSkpIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgZ2VvbXMgPSBuZXcgTWFwKCk7IC8vIGNvbWlkIC0+IFtwYXRoc10gKFtbbG9uLGxhdF0sLi4uXSlcclxuICBmb3IgKGNvbnN0IGYgb2Ygai5mZWF0dXJlcyB8fCBbXSkge1xyXG4gICAgY29uc3QgY2lkID0gTnVtYmVyKGYucHJvcGVydGllcy5uaGRwbHVzX2NvbWlkKTtcclxuICAgIGNvbnN0IGcgPSBmLmdlb21ldHJ5O1xyXG4gICAgaWYgKGcudHlwZSA9PT0gXCJMaW5lU3RyaW5nXCIpIGdlb21zLnNldChjaWQsIFtnLmNvb3JkaW5hdGVzXSk7XHJcbiAgICBlbHNlIGlmIChnLnR5cGUgPT09IFwiTXVsdGlMaW5lU3RyaW5nXCIpIGdlb21zLnNldChjaWQsIGcuY29vcmRpbmF0ZXMpO1xyXG4gIH1cclxuICByZXR1cm4gZ2VvbXM7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG5sZGlHYXVnZXMoY29taWQsIGRpc3RhbmNlS20sIG1vZGUpIHtcclxuICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihgJHtOTERJX0JBU0V9L2xpbmtlZC1kYXRhL2NvbWlkLyR7Y29taWR9L25hdmlnYXRpb24vJHttb2RlfS9ud2lzc2l0ZWAsIHtcclxuICAgIHBhcmFtczogeyBkaXN0YW5jZTogU3RyaW5nKE1hdGgudHJ1bmMoZGlzdGFuY2VLbSkpIH0sXHJcbiAgfSk7XHJcbiAgY29uc3Qgb3V0ID0gW107XHJcbiAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcclxuICAgIGNvbnN0IHNpZCA9IChmLnByb3BlcnRpZXMuaWRlbnRpZmllciB8fCBcIlwiKS5yZXBsYWNlKFwiVVNHUy1cIiwgXCJcIik7XHJcbiAgICBpZiAoc2lkLmxlbmd0aCA+IDE1KSBjb250aW51ZTsgLy8gY29vcmRpbmF0ZS1zdHlsZSBJRHMgKG5vdGVib29rIHJ1bGUpXHJcbiAgICBvdXQucHVzaCh7XHJcbiAgICAgIHN0YXRpb25faWQ6IHNpZCxcclxuICAgICAgbmFtZTogZi5wcm9wZXJ0aWVzLm5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgIGxhdDogZi5nZW9tZXRyeS5jb29yZGluYXRlc1sxXSxcclxuICAgICAgbG9uOiBmLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBvdXQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXJnZSB0aGUgbmVhcmVzdCB1cHN0cmVhbSBtYWluLXN0ZW0gZ2F1Z2UgaW50byB0aGUgbG9jYXRlZC1nYXVnZSBsaXN0IGFzIGFcclxuICogdmlydHVhbCBnYXVnZSBhdCB0aGUgc3BpbGwgcG9pbnQgKHRyYWNlX2Rpc3QgMCkuIFdpdGhvdXQgdGhpcywgY2xpY2tpbmcganVzdFxyXG4gKiBET1dOU1RSRUFNIG9mIGEgZ2F1Z2UgZHJvcHMgaXQgZnJvbSB0aGUgRE0gbmF2aWdhdGlvbiBhbmQgdGhlIG5leHQgZ2F1Z2UncyBRXHJcbiAqIGlzIGJhY2stY2xhbXBlZCBvbnRvIHRoZSBmaXJzdCByZWFjaCDDouKCrOKAnSB3aWxkbHkgd3Jvbmcgd2hlbiB0aGF0IGdhdWdlIHNpdHNcclxuICogYmVsb3cgYSBtYWpvciBjb25mbHVlbmNlIChHYWxsYXRpbiBiZWxvdyBMb2dhbiAtPiBNaXNzb3VyaSBhdCBUb3N0b24pLlxyXG4gKiBRIGlzIHRyYW5zZmVycmVkIGJ5IGRyYWluYWdlLWFyZWEgcmF0aW8gKHN0YW5kYXJkIFVTR1MgdHJhbnNmZXIpLCB3aGljaCBhbHNvXHJcbiAqIGtlZXBzIHRoZSBhbmNob3IgaG9uZXN0IHdoZW4gdGhlIFVNIHBhdGggY3Jvc3NlcyBhIGNvbmZsdWVuY2U6IHRoZSByYXRpb1xyXG4gKiBzY2FsZXMgYSB0cmlidXRhcnkgZ2F1Z2UgYmFjayB1cCB0byB0aGUgZmxvdyBhdCB0aGUgY2xpY2suXHJcbiAqIE5vLW9wIHdoZW4gYW4gb24tdHJhY2UgZ2F1Z2UgYWxyZWFkeSBzaXRzIHdpdGhpbiBhbmNob3JTa2lwTSBvZiB0aGUgc3RhcnRcclxuICogKGl0IGFscmVhZHkgYW5jaG9ycyB0aGUgYm91bmRhcnkpLCB0aGUgc3RhdGlvbiBpcyBhbHJlYWR5IGxvY2F0ZWQsIG9yIHRoZVxyXG4gKiBEQSB0cmFuc2ZlciBpcyBvdXRzaWRlIGl0cyBjcmVkaWJsZSByYW5nZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVVwc3RyZWFtQW5jaG9yKGdkLCB1cCwgc3BpbGxEYVNxbWksIHsgYW5jaG9yU2tpcE0gPSA1MDAsIGRhUmF0aW9NYXggPSA0IH0gPSB7fSkge1xyXG4gIGlmICghdXAgfHwgISh1cC5kaXNjaGFyZ2UgPj0gMCkgfHwgISh1cC5kcmFpbmFnZV9hcmVhID4gMCkgfHwgIShzcGlsbERhU3FtaSA+IDApKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKGdkLnNvbWUoKGcpID0+IGcuc3RhdGlvbl9pZCA9PT0gdXAuc3RhdGlvbl9pZCkpIHJldHVybiBmYWxzZTtcclxuICBpZiAoZ2Quc29tZSgoZykgPT4gZy50cmFjZV9kaXN0IDw9IGFuY2hvclNraXBNKSkgcmV0dXJuIGZhbHNlO1xyXG4gIGNvbnN0IHJhdGlvID0gc3BpbGxEYVNxbWkgLyB1cC5kcmFpbmFnZV9hcmVhO1xyXG4gIGlmIChyYXRpbyA8IDEgLyBkYVJhdGlvTWF4IHx8IHJhdGlvID4gZGFSYXRpb01heCkgcmV0dXJuIGZhbHNlO1xyXG4gIGNvbnN0IFt3LCBkZXBdID0gZXN0aW1hdGVHZW9tZXRyeVBheXRvbihzcGlsbERhU3FtaSk7XHJcbiAgZ2QucHVzaCh7XHJcbiAgICBzdGF0aW9uX2lkOiB1cC5zdGF0aW9uX2lkLCBuYW1lOiB1cC5uYW1lLCBsYXQ6IHVwLmxhdCwgbG9uOiB1cC5sb24sXHJcbiAgICBkaXNjaGFyZ2U6IHVwLmRpc2NoYXJnZSAqIHJhdGlvLCBkcmFpbmFnZV9hcmVhOiBzcGlsbERhU3FtaSxcclxuICAgIHFfc291cmNlOiB1cC5xX3NvdXJjZSB8fCBcIml2XCIsXHJcbiAgICBhcmVhOiB3ICogZGVwLCB0cmFjZV9kaXN0OiAwLjAsXHJcbiAgICB1cHN0cmVhbV9hbmNob3I6IHRydWUsXHJcbiAgICBhbmNob3JfZ2F1Z2VfcV9jZnM6IHVwLmRpc2NoYXJnZSwgYW5jaG9yX2dhdWdlX2RhX3NxbWk6IHVwLmRyYWluYWdlX2FyZWEsXHJcbiAgICBhbmNob3JfdXBzdHJlYW1fbTogdXAudXBzdHJlYW1fbSA/PyBudWxsLFxyXG4gIH0pO1xyXG4gIGdkLnNvcnQoKGEsIGIpID0+IGEudHJhY2VfZGlzdCAtIGIudHJhY2VfZGlzdCk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKiBWQUFzIGZvciBhIGxpc3Qgb2YgQ09NSURzIGZyb20gVVNHUyBnZW9zZXJ2ZXIgKGJhdGNoZWQgUE9TVCkuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHZhYUJhdGNoKGNvbWlkcykge1xyXG4gIGNvbnN0IG91dCA9IG5ldyBNYXAoKTtcclxuICBjb25zdCBDSFVOSyA9IDE1MDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbWlkcy5sZW5ndGg7IGkgKz0gQ0hVTkspIHtcclxuICAgIGNvbnN0IGNodW5rID0gY29taWRzLnNsaWNlKGksIGkgKyBDSFVOSyk7XHJcbiAgICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihHRU9TRVJWRVIsIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHNlcnZpY2U6IFwiV0ZTXCIsIHZlcnNpb246IFwiMi4wLjBcIiwgcmVxdWVzdDogXCJHZXRGZWF0dXJlXCIsXHJcbiAgICAgICAgdHlwZU5hbWU6IFwid21hZGF0YTpuaGRmbG93bGluZV9uZXR3b3JrXCIsXHJcbiAgICAgICAgb3V0cHV0Rm9ybWF0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBjcWxfZmlsdGVyOiBgY29taWQgSU4gKCR7Y2h1bmsuam9pbihcIixcIil9KWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGZvciAoY29uc3QgZiBvZiBqLmZlYXR1cmVzIHx8IFtdKSB7XHJcbiAgICAgIGNvbnN0IHAgPSBmLnByb3BlcnRpZXM7XHJcbiAgICAgIC8vIEVST00gbW9udGhseSBtb2RlbGVkIGZsb3cgKGdhdWdlLWFkanVzdGVkLCBjZnMpIMOi4oKs4oCdIHVuZ2F1Z2VkIGZhbGxiYWNrICsgSm9ic29uIFFhXHJcbiAgICAgIGNvbnN0IHFlID0ge307XHJcbiAgICAgIGZvciAobGV0IG0gPSAxOyBtIDw9IDEyOyBtKyspIHtcclxuICAgICAgICBjb25zdCBrID0gYHFlXyR7U3RyaW5nKG0pLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xyXG4gICAgICAgIHFlW21dID0gcFtrXSA/PyBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIG91dC5zZXQoTnVtYmVyKHAuY29taWQpLCB7XHJcbiAgICAgICAgaHlkcm9zZXE6IHAuaHlkcm9zZXEgPz8gbnVsbCxcclxuICAgICAgICBzdHJlYW1vcmRlOiBwLnN0cmVhbW9yZGUgPz8gbnVsbCxcclxuICAgICAgICBzbG9wZTogcC5zbG9wZSA/PyBudWxsLFxyXG4gICAgICAgIHRvdGRhc3FrbTogcC50b3RkYXNxa20gPz8gbnVsbCxcclxuICAgICAgICBmdHlwZTogcC5mdHlwZSA/PyBudWxsLFxyXG4gICAgICAgIGZjb2RlOiBwLmZjb2RlID8/IG51bGwsXHJcbiAgICAgICAgZ25pc19uYW1lOiBwLmduaXNfbmFtZSA/PyBudWxsLFxyXG4gICAgICAgIC8vIExha2VQb25kL1Jlc2Vydm9pciA9IGltcG91bmRlZDsgU3RyZWFtUml2ZXIgPSBicmFpZGVkIGZyZWUtZmxvd2luZ1xyXG4gICAgICAgIHdiYXJlYXR5cGU6IHAud2JhcmVhdHlwZSA/PyBudWxsLFxyXG4gICAgICAgIHZlX21hOiBwLnZlX21hID8/IG51bGwsXHJcbiAgICAgICAgcWVfbWE6IHAucWVfbWEgPz8gbnVsbCwgICAvLyBFUk9NIG1lYW4gYW5udWFsIGZsb3cgKGNmcykgw6LigqzigJ0gSm9ic29uIFFhXHJcbiAgICAgICAgcWVfbW9udGhseTogcWUsXHJcbiAgICAgICAgLy8gTkhEUGx1cyBkaXZlcmdlbmNlOiAwID0gbm9uZSwgMSA9IG1haW4gcGF0aCwgMiA9IG1pbm9yIHBhdGggb2YgYSBzcGxpdFxyXG4gICAgICAgIGRpdmVyZ2VuY2U6IHAuZGl2ZXJnZW5jZSA/PyAwLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG91dDtcclxufVxyXG5cclxuLyoqIERpc2NoYXJnZSAoY2ZzKSArIGRyYWluYWdlIGFyZWEgKHNxIG1pKSBwZXIgZ2F1Z2UgdmlhIHBsYWluIE5XSVMgUkVTVC5cclxuICogIHN0YXRGYWxsYmFjayAodjEuNSwgUGF5dG9uJ3MgZ2V0X2Rpc2NoYXJnZSBwYXR0ZXJuKTogZ2F1Z2VzIHdob3NlIElWIGZlZWRcclxuICogIGlzIGRvd24vbmVnYXRpdmUgZ2V0IHRoZSBwZXJpb2Qtb2YtcmVjb3JkIE1FRElBTiBkYWlseSBmbG93IChzdGF0IHNlcnZpY2VcclxuICogIHA1MCwgbmVlZHMgPjMgeWVhcnMgb2YgcmVjb3JkKSBmb3IgdGhlIHJ1biBkYXRlJ3MgY2FsZW5kYXIgZGF5LCBmbGFnZ2VkXHJcbiAqICBxX3NvdXJjZT0nc3RhdC1wNTAnIHNvIHRoZSBydW4gY2FuIHdhcm4gaXQgaXNuJ3QgbGl2ZSBjb25kaXRpb25zLiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnYXVnZUluZm8oc3RhdGlvbklkcywgYXNPZiA9IG51bGwsIHN0YXRGYWxsYmFjayA9IGZhbHNlKSB7XHJcbiAgY29uc3QgaW5mbyA9IG5ldyBNYXAoKTtcclxuICBpZiAoIXN0YXRpb25JZHMubGVuZ3RoKSByZXR1cm4gaW5mbztcclxuICBjb25zdCBzaXRlcyA9IHN0YXRpb25JZHMuam9pbihcIixcIik7XHJcblxyXG4gIC8vIGRyYWluYWdlIGFyZWFzIChyZGIsIGV4cGFuZGVkIG91dHB1dClcclxuICB0cnkge1xyXG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IGdldFRleHQoTldJU19TSVRFLCB7IGZvcm1hdDogXCJyZGJcIiwgc2l0ZXMsIHNpdGVPdXRwdXQ6IFwiZXhwYW5kZWRcIiB9KTtcclxuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGwpID0+IGwgJiYgIWwuc3RhcnRzV2l0aChcIiNcIikpO1xyXG4gICAgaWYgKGxpbmVzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgIGNvbnN0IGhkciA9IGxpbmVzWzBdLnNwbGl0KFwiXFx0XCIpO1xyXG4gICAgICBjb25zdCBpU2l0ZSA9IGhkci5pbmRleE9mKFwic2l0ZV9ub1wiKTtcclxuICAgICAgY29uc3QgaURhID0gaGRyLmluZGV4T2YoXCJkcmFpbl9hcmVhX3ZhXCIpOyAvLyAtMSBpZiBhYnNlbnRcclxuICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzLnNsaWNlKDIpKSB7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBsaW5lLnNwbGl0KFwiXFx0XCIpO1xyXG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPD0gTWF0aC5tYXgoaVNpdGUsIGlEYSA+IC0xID8gaURhIDogMCkpIGNvbnRpbnVlO1xyXG4gICAgICAgIGxldCBkYSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGlEYSA+IC0xKSB7XHJcbiAgICAgICAgICBjb25zdCB2ID0gcGFyc2VGbG9hdChwYXJ0c1tpRGFdKTtcclxuICAgICAgICAgIGRhID0gTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZm8uc2V0KHBhcnRzW2lTaXRlXSwgeyBkcmFpbmFnZV9hcmVhOiBkYSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggeyAvKiBpZ25vcmUgw6LigqzigJ0gbWF0Y2hlcyBQeXRob24gKi8gfVxyXG5cclxuICAvLyBkaXNjaGFyZ2VcclxuICBjb25zdCBwYXJhbXMgPSB7IGZvcm1hdDogXCJqc29uXCIsIHNpdGVzLCBwYXJhbWV0ZXJDZDogXCIwMDA2MFwiIH07XHJcbiAgaWYgKGFzT2YpIHsgcGFyYW1zLnN0YXJ0RFQgPSBhc09mOyBwYXJhbXMuZW5kRFQgPSBhc09mOyB9XHJcbiAgZWxzZSBwYXJhbXMucGVyaW9kID0gXCJQMURcIjtcclxuICB0cnkge1xyXG4gICAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oTldJU19JViwgeyBwYXJhbXMsIHRpbWVvdXRNczogNjAwMDAsIHRyaWVzOiAxIH0pO1xyXG4gICAgZm9yIChjb25zdCB0cyBvZiBqPy52YWx1ZT8udGltZVNlcmllcyB8fCBbXSkge1xyXG4gICAgICBjb25zdCBzaWQgPSB0cy5zb3VyY2VJbmZvLnNpdGVDb2RlWzBdLnZhbHVlO1xyXG4gICAgICBjb25zdCB2YWxzID0gdHMudmFsdWVzWzBdLnZhbHVlO1xyXG4gICAgICBpZiAoIXZhbHMgfHwgIXZhbHMubGVuZ3RoKSBjb250aW51ZTtcclxuICAgICAgY29uc3QgcSA9IHBhcnNlRmxvYXQodmFsc1t2YWxzLmxlbmd0aCAtIDFdLnZhbHVlKTtcclxuICAgICAgaWYgKHEgPj0gMCkge1xyXG4gICAgICAgIGlmICghaW5mby5oYXMoc2lkKSkgaW5mby5zZXQoc2lkLCB7fSk7XHJcbiAgICAgICAgaW5mby5nZXQoc2lkKS5kaXNjaGFyZ2UgPSBxO1xyXG4gICAgICAgIGluZm8uZ2V0KHNpZCkucV9zb3VyY2UgPSBcIml2XCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGNhdGNoIHsgLyogaWdub3JlIMOi4oKs4oCdIG1hdGNoZXMgUHl0aG9uICovIH1cclxuXHJcbiAgLy8gbWVkaWFuLWRhaWx5LWZsb3cgZmFsbGJhY2sgZm9yIGdhdWdlcyB0aGUgSVYgcGFzcyBkaWRuJ3QgY292ZXJcclxuICBpZiAoc3RhdEZhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBtaXNzaW5nID0gc3RhdGlvbklkcy5maWx0ZXIoKHMpID0+IGluZm8uZ2V0KHMpPy5kaXNjaGFyZ2UgPT09IHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBbbW9udGgsIGRheV0gPSBhc09mXHJcbiAgICAgID8gW3BhcnNlSW50KGFzT2Yuc2xpY2UoNSwgNyksIDEwKSwgcGFyc2VJbnQoYXNPZi5zbGljZSg4LCAxMCksIDEwKV1cclxuICAgICAgOiBbbmV3IERhdGUoKS5nZXRNb250aCgpICsgMSwgbmV3IERhdGUoKS5nZXREYXRlKCldO1xyXG4gICAgY29uc3QgU1RBVF9DSFVOSyA9IDEwOyAvLyBzdGF0IHNlcnZpY2UgNDAwcyBhYm92ZSAxMCBzaXRlcyBwZXIgcmVxdWVzdFxyXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCBtaXNzaW5nLmxlbmd0aDsgYyArPSBTVEFUX0NIVU5LKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IGdldFRleHQoTldJU19TVEFULCB7XHJcbiAgICAgICAgICBmb3JtYXQ6IFwicmRiXCIsIHNpdGVzOiBtaXNzaW5nLnNsaWNlKGMsIGMgKyBTVEFUX0NIVU5LKS5qb2luKFwiLFwiKSwgcGFyYW1ldGVyQ2Q6IFwiMDAwNjBcIixcclxuICAgICAgICAgIHN0YXRSZXBvcnRUeXBlOiBcImRhaWx5XCIsIHN0YXRUeXBlQ2Q6IFwicDUwXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobCkgPT4gbCAmJiAhbC5zdGFydHNXaXRoKFwiI1wiKSk7XHJcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICBjb25zdCBoZHIgPSBsaW5lc1swXS5zcGxpdChcIlxcdFwiKTtcclxuICAgICAgICAgIGNvbnN0IGNvbCA9IChuYW1lKSA9PiBoZHIuaW5kZXhPZihuYW1lKTtcclxuICAgICAgICAgIGNvbnN0IFtpU2l0ZSwgaU1vbiwgaURheSwgaUNvdW50LCBpUDUwXSA9XHJcbiAgICAgICAgICAgIFtcInNpdGVfbm9cIiwgXCJtb250aF9udVwiLCBcImRheV9udVwiLCBcImNvdW50X251XCIsIFwicDUwX3ZhXCJdLm1hcChjb2wpO1xyXG4gICAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzLnNsaWNlKDIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBsaW5lLnNwbGl0KFwiXFx0XCIpO1xyXG4gICAgICAgICAgICBpZiAocC5sZW5ndGggPD0gTWF0aC5tYXgoaVNpdGUsIGlNb24sIGlEYXksIGlDb3VudCwgaVA1MCkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBjb25zdCBzaWQgPSBwW2lTaXRlXTtcclxuICAgICAgICAgICAgaWYgKGluZm8uZ2V0KHNpZCk/LmRpc2NoYXJnZSAhPT0gdW5kZWZpbmVkKSBjb250aW51ZTsgLy8gZmlyc3QgbWF0Y2hpbmcgc2VyaWVzIHdpbnNcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHBbaU1vbl0sIDEwKSAhPT0gbW9udGggfHwgcGFyc2VJbnQocFtpRGF5XSwgMTApICE9PSBkYXkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoIShwYXJzZUludChwW2lDb3VudF0sIDEwKSA+IDMpKSBjb250aW51ZTsgLy8gUGF5dG9uJ3MgcmVjb3JkLWxlbmd0aCBydWxlXHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBwYXJzZUZsb2F0KHBbaVA1MF0pO1xyXG4gICAgICAgICAgICBpZiAoIShxID49IDApKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKCFpbmZvLmhhcyhzaWQpKSBpbmZvLnNldChzaWQsIHt9KTtcclxuICAgICAgICAgICAgaW5mby5nZXQoc2lkKS5kaXNjaGFyZ2UgPSBxO1xyXG4gICAgICAgICAgICBpbmZvLmdldChzaWQpLnFfc291cmNlID0gXCJzdGF0LXA1MFwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCB7IC8qIHN0YXQgc2VydmljZSBkb3duIC0+IHRoaXMgY2h1bmsncyBnYXVnZXMgc3RheSBkcm9wcGVkLCBhcyBiZWZvcmUgKi8gfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gaW5mbztcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0cmFjZSBhc3NlbWJseVxyXG5cclxuLyoqIE9yZGVyIHNlZ21lbnRzIGRvd25zdHJlYW0gKGh5ZHJvc2VxIGRlc2MpLCBvcmllbnQsIHRyaW0gdG8gc3BpbGwgcG9pbnQsXHJcbiAqICBlbWl0IH5yZXNvbHV0aW9uTSBzcGFjZWQgcG9pbnRzIGNhcnJ5aW5nIFZBQSBhdHRyaWJ1dGVzLiAqL1xyXG5mdW5jdGlvbiBhc3NlbWJsZVRyYWNlKGxhdCwgbG9uLCBnZW9tcywgdmFhLCByZXNvbHV0aW9uTSwgbG9nKSB7XHJcbiAgY29uc3Qgc2VncyA9IFtdO1xyXG4gIGZvciAoY29uc3QgW2NpZCwgcGF0aHNdIG9mIGdlb21zKSB7XHJcbiAgICBjb25zdCB2ID0gdmFhLmdldChjaWQpO1xyXG4gICAgaWYgKCF2IHx8IHYuaHlkcm9zZXEgPT09IG51bGwgfHwgdi5oeWRyb3NlcSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgIGNvbnN0IGNvb3JkcyA9IHBhdGhzLmZsYXQoKTsgLy8gZmxhdHRlbiBtdWx0aWxpbmUgaW50byBvbmUgdmVydGV4IGxpc3RcclxuICAgIGlmIChjb29yZHMubGVuZ3RoIDwgMikgY29udGludWU7XHJcbiAgICBzZWdzLnB1c2goeyBjb21pZDogY2lkLCBjb29yZHMsIC4uLnYgfSk7XHJcbiAgfVxyXG4gIHNlZ3Muc29ydCgoYSwgYikgPT4gYi5oeWRyb3NlcSAtIGEuaHlkcm9zZXEpOyAvLyBkb3duc3RyZWFtID0gZGVjcmVhc2luZyBoeWRyb3NlcVxyXG5cclxuICAvLyBvcmllbnQgZWFjaCBzZWdtZW50IHNvIGl0IGZsb3dzIHN0YXJ0LT5lbmQsIGNoYWluaW5nIGVuZHMgdG8gc3RhcnRzXHJcbiAgbGV0IHByZXZFbmQgPSBudWxsO1xyXG4gIGZvciAoY29uc3QgcyBvZiBzZWdzKSB7XHJcbiAgICBsZXQgYyA9IHMuY29vcmRzO1xyXG4gICAgaWYgKHByZXZFbmQgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgZFN0YXJ0ID0gaGF2ZXJzaW5lTShwcmV2RW5kWzFdLCBwcmV2RW5kWzBdLCBjWzBdWzFdLCBjWzBdWzBdKTtcclxuICAgICAgY29uc3QgZEVuZCA9IGhhdmVyc2luZU0ocHJldkVuZFsxXSwgcHJldkVuZFswXSwgY1tjLmxlbmd0aCAtIDFdWzFdLCBjW2MubGVuZ3RoIC0gMV1bMF0pO1xyXG4gICAgICBpZiAoZEVuZCA8IGRTdGFydCkgYyA9IGMuc2xpY2UoKS5yZXZlcnNlKCk7XHJcbiAgICB9XHJcbiAgICBzLmNvb3JkcyA9IGM7XHJcbiAgICBwcmV2RW5kID0gY1tjLmxlbmd0aCAtIDFdO1xyXG4gIH1cclxuXHJcbiAgLy8gdHJpbSB0aGUgZmlyc3Qgc2VnbWVudCB0byBzdGFydCBhdCB0aGUgdmVydGV4IG5lYXJlc3QgdGhlIHNwaWxsIHBvaW50XHJcbiAgaWYgKHNlZ3MubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBjMCA9IHNlZ3NbMF0uY29vcmRzO1xyXG4gICAgbGV0IG1pbkkgPSAwLCBtaW5EID0gSW5maW5pdHk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGMwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmVNKGxhdCwgbG9uLCBjMFtpXVsxXSwgYzBbaV1bMF0pO1xyXG4gICAgICBpZiAoZCA8IG1pbkQpIHsgbWluRCA9IGQ7IG1pbkkgPSBpOyB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB0cmltbWVkID0gYzAuc2xpY2UobWluSSk7XHJcbiAgICBzZWdzWzBdLmNvb3JkcyA9IHRyaW1tZWQubGVuZ3RoID8gdHJpbW1lZCA6IFtjMFtjMC5sZW5ndGggLSAxXV07XHJcbiAgfVxyXG5cclxuICAvLyBmbGF0dGVuIHRvIGF0dHJpYnV0ZWQgcG9pbnRzLCBkb3duc2FtcGxlIHRvIHJlc29sdXRpb25NXHJcbiAgbGV0IHB0cyA9IFtdO1xyXG4gIGZvciAoY29uc3QgcyBvZiBzZWdzKSB7XHJcbiAgICBsZXQgc2xvcGUgPSBzLnNsb3BlO1xyXG4gICAgaWYgKHNsb3BlID09PSBudWxsIHx8IHNsb3BlID09PSB1bmRlZmluZWQgfHwgc2xvcGUgPCAwKSBzbG9wZSA9IDAuMDAxOyAvLyAtOTk5OCA9IG1pc3NpbmdcclxuICAgIGZvciAoY29uc3QgcCBvZiBzLmNvb3Jkcykge1xyXG4gICAgICBwdHMucHVzaCh7XHJcbiAgICAgICAgbG9uOiBwWzBdLCBsYXQ6IHBbMV0sXHJcbiAgICAgICAgZHJhaW5hZ2VfYXJlYV9rbTI6IHMudG90ZGFzcWttIHx8IDAsXHJcbiAgICAgICAgc2xvcGUsXHJcbiAgICAgICAgZnR5cGU6IHMuZnR5cGUsIHdiYXJlYXR5cGU6IHMud2JhcmVhdHlwZSxcclxuICAgICAgICBjb21pZDogcy5jb21pZCxcclxuICAgICAgICBnbmlzX25hbWU6IHMuZ25pc19uYW1lLFxyXG4gICAgICAgIHFlX21hOiBzLnFlX21hLCBxZV9tb250aGx5OiBzLnFlX21vbnRobHksXHJcbiAgICAgICAgZGl2ZXJnZW5jZTogcy5kaXZlcmdlbmNlIHx8IDAsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAocHRzLmxlbmd0aCA+IDEpIHtcclxuICAgIGNvbnN0IGtlZXAgPSBbcHRzWzBdXTtcclxuICAgIGxldCBjdW0gPSAwLjA7XHJcbiAgICBsZXQgbGFzdCA9IHB0c1swXTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHAgPSBwdHNbaV07XHJcbiAgICAgIGN1bSArPSBoYXZlcnNpbmVNKGxhc3QubGF0LCBsYXN0LmxvbiwgcC5sYXQsIHAubG9uKTtcclxuICAgICAgbGFzdCA9IHA7XHJcbiAgICAgIGlmIChjdW0gPj0gcmVzb2x1dGlvbk0pIHsga2VlcC5wdXNoKHApOyBjdW0gPSAwLjA7IH1cclxuICAgIH1cclxuICAgIHB0cyA9IGtlZXA7XHJcbiAgfVxyXG4gIGxvZyhgICB0cmFjZTogJHtzZWdzLmxlbmd0aH0gc2VnbWVudHMgLT4gJHtwdHMubGVuZ3RofSBwb2ludHMgKCR7c2Vncy5sZW5ndGggPyBzZWdzWzBdLmduaXNfbmFtZSA6IFwiP1wifSAuLi4pYCk7XHJcbiAgcmV0dXJuIFtwdHMsIHNlZ3MubGVuZ3RoID8gc2Vnc1swXS5nbmlzX25hbWUgOiBudWxsXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERBLXdlaWdodGVkIGRpc2NoYXJnZSBpbnRlcnBvbGF0b3IgKHYxLjQpOiBRIGFzIGEgcGllY2V3aXNlLWxpbmVhciBmdW5jdGlvblxyXG4gKiBvZiBkcmFpbmFnZSBhcmVhIGJldHdlZW4gZ2F1Z2VzLCBEQS1yYXRpbyBleHRyYXBvbGF0ZWQgb3V0c2lkZSB0aGUgZ2F1Z2VcclxuICogcmFuZ2UgKHVuaWZvcm0teWllbGQgYXNzdW1wdGlvbiDDouKCrOKAnSBzYW1lIHNlbWFudGljcyBhcyB0aGUgc2luZ2xlLWdhdWdlIHBhdGgpLlxyXG4gKiBCZWNhdXNlIERBIGp1bXBzIGF0IGNvbmZsdWVuY2VzLCB0aGUgUSBqdW1wIGxhbmRzIEFUIHRoZSBjb25mbHVlbmNlIGluc3RlYWRcclxuICogb2Ygc21lYXJpbmcgbGluZWFybHkgb3ZlciB0aGUgaW50ZXItZ2F1Z2UgZGlzdGFuY2U7IGl0IGFsc28gY2FuJ3QgYmFjay1jbGFtcFxyXG4gKiBhIHBvc3QtY29uZmx1ZW5jZSBnYXVnZSdzIGZ1bGwgUSBvbnRvIGEgc21hbGwgdXBzdHJlYW0gdHJpYnV0YXJ5LlxyXG4gKiBHYXVnZXMgd2hvc2UgTldJUyBEQSBicmVha3MgZG93bnN0cmVhbSBtb25vdG9uaWNpdHkgYXJlIGRyb3BwZWQgKE5XSVMgYW5kXHJcbiAqIE5IRFBsdXMgZGVsaW5lYXRpb25zIGRpc2FncmVlIG9jY2FzaW9uYWxseSkuIFJldHVybnMgbnVsbCB3aGVuIGZld2VyIHRoYW4gMlxyXG4gKiBtb25vdG9uaWMgZ2F1Z2VzIHJlbWFpbiDDouKCrOKAnSBjYWxsZXIgZmFsbHMgYmFjayB0byBkaXN0YW5jZSBpbnRlcnBvbGF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRhV2VpZ2h0ZWRRKGdkKSB7XHJcbiAgY29uc3Qga2VwdCA9IFtdO1xyXG4gIGZvciAoY29uc3QgZyBvZiBnZCkge1xyXG4gICAgaWYgKCEoZy5kcmFpbmFnZV9hcmVhID4gMCkgfHwgIShnLmRpc2NoYXJnZSA+PSAwKSkgY29udGludWU7XHJcbiAgICBpZiAoa2VwdC5sZW5ndGggJiYgZy5kcmFpbmFnZV9hcmVhIDw9IGtlcHRba2VwdC5sZW5ndGggLSAxXS5kcmFpbmFnZV9hcmVhKSBjb250aW51ZTtcclxuICAgIGtlcHQucHVzaChnKTtcclxuICB9XHJcbiAgaWYgKGtlcHQubGVuZ3RoIDwgMikgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgZlEgPSBpbnRlcnBDbGFtcGVkKGtlcHQubWFwKChnKSA9PiBnLmRyYWluYWdlX2FyZWEpLCBrZXB0Lm1hcCgoZykgPT4gZy5kaXNjaGFyZ2UpKTtcclxuICBjb25zdCBkYTAgPSBrZXB0WzBdLmRyYWluYWdlX2FyZWEsIHEwID0ga2VwdFswXS5kaXNjaGFyZ2U7XHJcbiAgY29uc3QgZGFOID0ga2VwdFtrZXB0Lmxlbmd0aCAtIDFdLmRyYWluYWdlX2FyZWEsIHFOID0ga2VwdFtrZXB0Lmxlbmd0aCAtIDFdLmRpc2NoYXJnZTtcclxuICByZXR1cm4ge1xyXG4gICAga2VwdCxcclxuICAgIHE6IChkYSkgPT4ge1xyXG4gICAgICBpZiAoIShkYSA+IDApKSByZXR1cm4gMS4wO1xyXG4gICAgICBpZiAoZGEgPD0gZGEwKSByZXR1cm4gcTAgKiAoZGEgLyBkYTApO1xyXG4gICAgICBpZiAoZGEgPj0gZGFOKSByZXR1cm4gcU4gKiAoZGEgLyBkYU4pO1xyXG4gICAgICByZXR1cm4gZlEoZGEpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG4vKiogQ2xhbXBlZCBsaW5lYXIgaW50ZXJwb2xhdGlvbiAoc2NpcHkgaW50ZXJwMWQgd2l0aCBjbGFtcGVkIGZpbGxfdmFsdWUpLiAqL1xyXG5mdW5jdGlvbiBpbnRlcnBDbGFtcGVkKHhzLCB5cykge1xyXG4gIHJldHVybiAoeCkgPT4ge1xyXG4gICAgaWYgKHggPD0geHNbMF0pIHJldHVybiB5c1swXTtcclxuICAgIGlmICh4ID49IHhzW3hzLmxlbmd0aCAtIDFdKSByZXR1cm4geXNbeXMubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgaSA9IDE7XHJcbiAgICB3aGlsZSAoeHNbaV0gPCB4KSBpKys7XHJcbiAgICBjb25zdCB0ID0gKHggLSB4c1tpIC0gMV0pIC8gKHhzW2ldIC0geHNbaSAtIDFdKTtcclxuICAgIHJldHVybiB5c1tpIC0gMV0gKyB0ICogKHlzW2ldIC0geXNbaSAtIDFdKTtcclxuICB9O1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvcnJpZG9ycyAodjEuNilcclxuLy9cclxuLy8gQSBjb3JyaWRvciBkb2MgKGJ1aWx0IG9mZmxpbmUgYnkgY29ycmlkb3JzL2J1aWxkX2NvcnJpZG9ycy5weSk6XHJcbi8vICAgeyBpZCwgbmFtZSwgc25hcF9tLCBjb250aW51ZXNfdG8sIHRpZGFsX2Zyb21fa20sIGltcG91bmRtZW50czpbe2Zyb21fa20sXHJcbi8vICAgICB0b19rbSwgbmFtZX1dLCB3YXJuaW5nczpbLi4uXSwgYXR0cnM6e2RhX2ttMnxzbG9wZXx3aWR0aF9tfGRlcHRoX206XHJcbi8vICAgICBbW2ttLCB2YWx1ZV0sIC4uLl19LCBmbG93Ontwcm92aWRlciwgLi4ufSwgc3RhdGlvbl9rbTpbLi4uXSxcclxuLy8gICAgIHZlcnRpY2VzOltbbG9uLGxhdF0sIC4uLl0gfVxyXG4vLyBGbG93IHByb3ZpZGVyczpcclxuLy8gICBlY2NjLWxpdmUtc3VtICDDouKCrOKAnSBzdW0gbGl2ZSBFQ0NDIGRpc2NoYXJnZSBvdmVyIGZsb3cuc3RhdGlvbnMgKGVhY2hcclxuLy8gICAgICAgICAgICAgICAgICAgIHtpZCwgbmFtZSwgZGFfa20yfSk7IERBLXJhdGlvIHRyYW5zZmVycmVkIGFsb25nIHRoZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgY29ycmlkb3IuIGFzT2YgdXNlcyB0aGUgRUNDQyBkYWlseS1tZWFuIGFyY2hpdmUuXHJcbi8vICAgbW9udGhseS1tZWRpYW4gw6LigqzigJ0gZmxvdy5tb250aGx5X21lZGlhbl9tM3NbbW9udGhdIGF0IGZsb3cucmVmX2RhX2ttMlxyXG4vLyAgICAgICAgICAgICAgICAgICAgKHJpdmVycyB3aXRoIG5vIGFjdGl2ZSBnYXVnZSwgZS5nLiB0aGUgQnJ1bmV0dGUpLlxyXG5cclxuY29uc3QgQ09SUklET1JfQ0FDSEUgPSBuZXcgTWFwKCk7IC8vIHVybCAtPiBjb3JyaWRvciBkb2NcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRDb3JyaWRvcnMobGlzdCwgbG9nKSB7XHJcbiAgY29uc3Qgb3V0ID0gW107XHJcbiAgZm9yIChjb25zdCBlbnRyeSBvZiBsaXN0IHx8IFtdKSB7XHJcbiAgICBpZiAoZW50cnkgJiYgdHlwZW9mIGVudHJ5ID09PSBcIm9iamVjdFwiICYmIGVudHJ5LnZlcnRpY2VzKSB7IG91dC5wdXNoKGVudHJ5KTsgY29udGludWU7IH1cclxuICAgIGNvbnN0IHVybCA9IHR5cGVvZiBlbnRyeSA9PT0gXCJzdHJpbmdcIiA/IGVudHJ5IDogZW50cnk/LnVybDtcclxuICAgIGlmICghdXJsKSBjb250aW51ZTtcclxuICAgIGlmICghQ09SUklET1JfQ0FDSEUuaGFzKHVybCkpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBDT1JSSURPUl9DQUNIRS5zZXQodXJsLCBhd2FpdCBnZXRKc29uKHVybCwgeyB0aW1lb3V0TXM6IDMwMDAwIH0pKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGxvZyhgICBjb3JyaWRvciBsb2FkIEZBSUxFRCAoJHt1cmx9KTogJHtTdHJpbmcoZSkuc2xpY2UoMCwgODApfWApO1xyXG4gICAgICAgIENPUlJJRE9SX0NBQ0hFLnNldCh1cmwsIG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBkb2MgPSBDT1JSSURPUl9DQUNIRS5nZXQodXJsKTtcclxuICAgIGlmIChkb2MpIG91dC5wdXNoKGRvYyk7XHJcbiAgfVxyXG4gIHJldHVybiBvdXQ7XHJcbn1cclxuXHJcbi8qKiBDbGFtcGVkIGxpbmVhciBpbnRlcnBvbGF0aW9uIG92ZXIgYXV0aG9yZWQgW1trbSwgdmFsdWVdLCAuLi5dIGJyZWFrcG9pbnRzLiAqL1xyXG5mdW5jdGlvbiBjb3JyaWRvckF0dHIoYnBzLCBrbSwgZmFsbGJhY2sgPSAwKSB7XHJcbiAgaWYgKCFicHMgfHwgIWJwcy5sZW5ndGgpIHJldHVybiBmYWxsYmFjaztcclxuICBpZiAoa20gPD0gYnBzWzBdWzBdKSByZXR1cm4gYnBzWzBdWzFdO1xyXG4gIGNvbnN0IGxhc3QgPSBicHNbYnBzLmxlbmd0aCAtIDFdO1xyXG4gIGlmIChrbSA+PSBsYXN0WzBdKSByZXR1cm4gbGFzdFsxXTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IGJwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGJwc1tpXVswXSA+PSBrbSkge1xyXG4gICAgICBjb25zdCB0ID0gKGttIC0gYnBzW2kgLSAxXVswXSkgLyAoYnBzW2ldWzBdIC0gYnBzW2kgLSAxXVswXSk7XHJcbiAgICAgIHJldHVybiBicHNbaSAtIDFdWzFdICsgdCAqIChicHNbaV1bMV0gLSBicHNbaSAtIDFdWzFdKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGxhc3RbMV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5lYXJlc3RDb3JyaWRvclZlcnRleChsYXQsIGxvbiwgY29ycikge1xyXG4gIGxldCBiZXN0ID0gSW5maW5pdHksIGlkeCA9IDA7XHJcbiAgY29uc3QgdiA9IGNvcnIudmVydGljZXM7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBkID0gaGF2ZXJzaW5lTShsYXQsIGxvbiwgdltpXVsxXSwgdltpXVswXSk7XHJcbiAgICBpZiAoZCA8IGJlc3QpIHsgYmVzdCA9IGQ7IGlkeCA9IGk7IH1cclxuICB9XHJcbiAgcmV0dXJuIHsgaWR4LCBkaXN0TTogYmVzdCB9O1xyXG59XHJcblxyXG4vKiogUG9pbnQgYXR0cmlidXRlcyBzYW1wbGVkIGZyb20gYSBjb3JyaWRvciBhdCBpdHMgbmF0aXZlIHN0YXRpb25pbmcgKGttKS4gKi9cclxuZnVuY3Rpb24gY29ycmlkb3JQb2ludChjb3JyLCBsb24sIGxhdCwga20sIGNvbm5lY3RvciA9IGZhbHNlKSB7XHJcbiAgY29uc3QgYSA9IGNvcnIuYXR0cnMgfHwge307XHJcbiAgY29uc3QgaW1wb3VuZCA9IChjb3JyLmltcG91bmRtZW50cyB8fCBbXSkuZmluZCgoeikgPT4ga20gPj0gei5mcm9tX2ttICYmIGttIDw9IHoudG9fa20pO1xyXG4gIHJldHVybiB7XHJcbiAgICBsb24sIGxhdCxcclxuICAgIGRyYWluYWdlX2FyZWFfa20yOiBjb3JyaWRvckF0dHIoYS5kYV9rbTIsIGttLCAwKSxcclxuICAgIHNsb3BlOiBNYXRoLm1heChjb3JyaWRvckF0dHIoYS5zbG9wZSwga20sIDAuMDAxKSwgMC4wMDAwMSksXHJcbiAgICBjb3JyaWRvcl93aWR0aF9tOiBjb3JyaWRvckF0dHIoYS53aWR0aF9tLCBrbSwgMCksXHJcbiAgICBkZXB0aF9vdmVycmlkZTogY29ycmlkb3JBdHRyKGEuZGVwdGhfbSwga20sIDApLFxyXG4gICAgdGlkYWw6IGNvcnIudGlkYWxfZnJvbV9rbSAhPT0gbnVsbCAmJiBjb3JyLnRpZGFsX2Zyb21fa20gIT09IHVuZGVmaW5lZCAmJiBrbSA+PSBjb3JyLnRpZGFsX2Zyb21fa20sXHJcbiAgICBmdHlwZTogY29ubmVjdG9yID8gXCJDb3JyaWRvckNvbm5lY3RvclwiIDogXCJDb3JyaWRvclwiLFxyXG4gICAgd2JhcmVhdHlwZTogaW1wb3VuZCA/IFwiUmVzZXJ2b2lyXCIgOiBcIlN0cmVhbVJpdmVyXCIsXHJcbiAgICBjb21pZDogbnVsbCxcclxuICAgIGduaXNfbmFtZTogaW1wb3VuZCA/IChpbXBvdW5kLm5hbWUgfHwgY29yci5uYW1lKSA6IGNvcnIubmFtZSxcclxuICAgIHFlX21hOiBudWxsLCBxZV9tb250aGx5OiBudWxsLFxyXG4gICAgZGl2ZXJnZW5jZTogMCxcclxuICAgIGNvcnJpZG9yX2lkOiBjb3JyLmlkLFxyXG4gICAgY29ycmlkb3Jfa206IGttLFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKiBMaXZlL21lZGlhbiBkaXNjaGFyZ2UgZm9yIGEgY29ycmlkb3IncyBmbG93IG1vZGVsLlxyXG4gKiAgUmV0dXJucyB7IHFNM3MsIGRhS20yLCBzb3VyY2UsIG5vdGUgfSBvciBudWxsIChjYWxsZXIgd2FybnMgKyBlcnJvcnMpLiAqL1xyXG5hc3luYyBmdW5jdGlvbiBjb3JyaWRvckZsb3coY29yciwgYXNPZiwgbG9nKSB7XHJcbiAgY29uc3QgZmxvdyA9IGNvcnIuZmxvdyB8fCB7fTtcclxuICBjb25zdCBtb250aCA9IGFzT2YgPyBwYXJzZUludChhc09mLnNsaWNlKDUsIDcpLCAxMCkgOiBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxO1xyXG5cclxuICBjb25zdCBtZWRpYW5zID0gZmxvdy5tb250aGx5X21lZGlhbl9tM3MgfHwgbnVsbDtcclxuICBjb25zdCBtZWRpYW4gPSBtZWRpYW5zICYmIG1lZGlhbnNbU3RyaW5nKG1vbnRoKV0gPiAwXHJcbiAgICA/IHsgcU0zczogbWVkaWFuc1tTdHJpbmcobW9udGgpXSwgZGFLbTI6IGZsb3cucmVmX2RhX2ttMiwgc291cmNlOiBcIm1vbnRobHktbWVkaWFuXCIsXHJcbiAgICAgICAgbm90ZTogZmxvdy5zb3VyY2Vfbm90ZSB8fCBudWxsIH1cclxuICAgIDogbnVsbDtcclxuXHJcbiAgaWYgKGZsb3cucHJvdmlkZXIgPT09IFwiZWNjYy1saXZlLXN1bVwiKSB7XHJcbiAgICBsZXQgcVN1bSA9IDAsIGRhU3VtID0gMDtcclxuICAgIGNvbnN0IGxpdmUgPSBbXSwgZG93biA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBzdCBvZiBmbG93LnN0YXRpb25zIHx8IFtdKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHEgPSBudWxsO1xyXG4gICAgICAgIGlmIChhc09mKSB7XHJcbiAgICAgICAgICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihgJHtFQ0NDX0FQSX0vaHlkcm9tZXRyaWMtZGFpbHktbWVhbi9pdGVtc2AsIHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7IFNUQVRJT05fTlVNQkVSOiBzdC5pZCwgREFURTogYXNPZiwgZjogXCJqc29uXCIsIGxpbWl0OiBcIjVcIiwgc2tpcEdlb21ldHJ5OiBcInRydWVcIiB9LFxyXG4gICAgICAgICAgICB0aW1lb3V0TXM6IDMwMDAwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGYgb2Ygai5mZWF0dXJlcyB8fCBbXSkge1xyXG4gICAgICAgICAgICBjb25zdCB2ID0gZi5wcm9wZXJ0aWVzPy5ESVNDSEFSR0U7XHJcbiAgICAgICAgICAgIGlmICh2ICE9PSBudWxsICYmIHYgIT09IHVuZGVmaW5lZCAmJiB2ID49IDApIHsgcSA9IE51bWJlcih2KTsgYnJlYWs7IH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oYCR7RUNDQ19BUEl9L2h5ZHJvbWV0cmljLXJlYWx0aW1lL2l0ZW1zYCwge1xyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICBTVEFUSU9OX05VTUJFUjogc3QuaWQsIGY6IFwianNvblwiLCBsaW1pdDogXCI0OFwiLFxyXG4gICAgICAgICAgICAgIHNvcnRieTogXCItREFURVRJTUVcIiwgc2tpcEdlb21ldHJ5OiBcInRydWVcIixcclxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBcIkRJU0NIQVJHRSxEQVRFVElNRSxTVEFUSU9OX05VTUJFUlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aW1lb3V0TXM6IDMwMDAwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGYgb2Ygai5mZWF0dXJlcyB8fCBbXSkge1xyXG4gICAgICAgICAgICBjb25zdCB2ID0gZi5wcm9wZXJ0aWVzPy5ESVNDSEFSR0U7XHJcbiAgICAgICAgICAgIGlmICh2ICE9PSBudWxsICYmIHYgIT09IHVuZGVmaW5lZCAmJiB2ID49IDApIHsgcSA9IE51bWJlcih2KTsgYnJlYWs7IH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHEgIT09IG51bGwpIHsgcVN1bSArPSBxOyBkYVN1bSArPSBzdC5kYV9rbTIgfHwgMDsgbGl2ZS5wdXNoKHN0LmlkKTsgfVxyXG4gICAgICAgIGVsc2UgZG93bi5wdXNoKHN0LmlkKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRvd24ucHVzaChzdC5pZCk7XHJcbiAgICAgICAgbG9nKGAgIEVDQ0MgZ2F1Z2UgJHtzdC5pZH0gZmFpbGVkOiAke1N0cmluZyhlKS5zbGljZSgwLCA2MCl9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHN0YXRpb25zIHdpdGhvdXQgcGVyLXN0YXRpb24gZGFfa20yOiB1c2FibGUgb25seSB3aGVuIEFMTCByZXBvcnQgbGl2ZVxyXG4gICAgaWYgKGxpdmUubGVuZ3RoID09PSAoZmxvdy5zdGF0aW9ucyB8fCBbXSkubGVuZ3RoICYmICEoZGFTdW0gPiAwKSkgZGFTdW0gPSBmbG93LnJlZl9kYV9rbTIgfHwgMDtcclxuICAgIGlmIChsaXZlLmxlbmd0aCAmJiBkYVN1bSA+IDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBxTTNzOiBxU3VtLCBkYUttMjogZGFTdW0sIHNvdXJjZTogXCJlY2NjLWl2XCIsXHJcbiAgICAgICAgbm90ZTogYEVDQ0MgbGl2ZTogJHtsaXZlLmpvaW4oXCIrXCIpfWAgKyAoZG93bi5sZW5ndGggPyBgIChmZWVkIGRvd246ICR7ZG93bi5qb2luKFwiLFwiKX0pYCA6IFwiXCIpLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKG1lZGlhbikge1xyXG4gICAgICBsb2coYCAgRUNDQyBmZWVkIGRvd24gZm9yICR7Y29yci5pZH0gw6LigqzigJ0gZmFsbGluZyBiYWNrIHRvIG1vbnRobHkgbWVkaWFuYCk7XHJcbiAgICAgIHJldHVybiB7IC4uLm1lZGlhbiwgbm90ZTogYEVDQ0MgZmVlZCBET1dOICgke2Rvd24uam9pbihcIixcIil9KSDDouKCrOKAnSAke21lZGlhbi5ub3RlIHx8IFwiaGlzdG9yaWNhbCBtb250aGx5IG1lZGlhblwifWAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgaWYgKGZsb3cucHJvdmlkZXIgPT09IFwibW9udGhseS1tZWRpYW5cIikgcmV0dXJuIG1lZGlhbjtcclxuICByZXR1cm4gbWVkaWFuOyAvLyB1bmtub3duIHByb3ZpZGVyIMOi4oKs4oCdIGJlc3QgZWZmb3J0XHJcbn1cclxuXHJcbi8vIC0tLS0gdGlkYWwgY29ycmlkb3Igc3VwcG9ydCAodjEuOCwgVGllciAyKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vXHJcbi8vIEEgY29ycmlkb3IgbWF5IGNhcnJ5IGEgYHRpZGFsYCBibG9jazpcclxuLy8gICB7IGZyb21fa20sIHByb3ZpZGVyOiAnaXdscy13bHAtc2xvcGUnLCBzdGF0aW9uX2NvZGUsIHN0YXRpb25fbmFtZSxcclxuLy8gICAgIHVfbWF4X21zLCBwaGFzZV9sYWdfbWluLCBwaGFzZV91bmNlcnRfbWluLCBub3RlIH1cclxuLy8gVGhlIHByZWRpY3RlZCB3YXRlci1sZXZlbCBjdXJ2ZSBhdCB0aGUgc3RhdGlvbiBpcyBkaWZmZXJlbnRpYXRlZCB0byBhXHJcbi8vIG5vcm1hbGl6ZWQgc2lnbmVkIHRpZGUgc2lnbmFsIFQodCkgaW4gWy0xLDFdOyBhbG9uZy1jaGFubmVsIHRpZGFsIHZlbG9jaXR5XHJcbi8vIGlzIHUodCkgPSAtdV9tYXjDgsK3VCh0KSAocmlzaW5nIGxldmVsID0gZmxvb2QgPSB1cHN0cmVhbSA9IG5lZ2F0aXZlKS4gVGhpcyBpc1xyXG4vLyB0aGUgc3RhbmRpbmctd2F2ZSBhc3N1bXB0aW9uIMOi4oKs4oCdIGBwaGFzZV9sYWdfbWluYCBzaGlmdHMgaXQgZm9yIHByb2dyZXNzaXZlXHJcbi8vIHJlYWNoZXMsIGFuZCBgcGhhc2VfdW5jZXJ0X21pbmAgZmVlZHMgdGhlIGVhcmxpZXN0LWNyZWRpYmxlIGVudmVsb3BlIHJ1bi5cclxuLy8gQW1wbGl0dWRlIGlzIEFVVEhPUkVEICh3YXJuZWQpOiB0aWRlcyBhcmUgZGV0ZXJtaW5pc3RpYywgdGhlIGFtcGxpdHVkZSBpc1xyXG4vLyB0aGUgY2FsaWJyYXRpb24ga25vYi5cclxuXHJcbmNvbnN0IElXTFNfQVBJID0gXCJodHRwczovL2FwaS1pd2xzLmRmby1tcG8uZ2MuY2EvYXBpL3YxXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEl3bHNUaWRhbFNlcmllcyh0aWRhbENmZywgYXNPZiwgbWF4SG91cnMsIGxvZykge1xyXG4gIGNvbnN0IHN0cyA9IGF3YWl0IGdldEpzb24oYCR7SVdMU19BUEl9L3N0YXRpb25zYCwge1xyXG4gICAgcGFyYW1zOiB7IGNvZGU6IHRpZGFsQ2ZnLnN0YXRpb25fY29kZSB9LCB0aW1lb3V0TXM6IDMwMDAwLFxyXG4gIH0pO1xyXG4gIGlmICghQXJyYXkuaXNBcnJheShzdHMpIHx8ICFzdHMubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoYElXTFMgc3RhdGlvbiAke3RpZGFsQ2ZnLnN0YXRpb25fY29kZX0gbm90IGZvdW5kYCk7XHJcbiAgY29uc3Qgc3QgPSBzdHNbMF07XHJcbiAgY29uc3QgdDBNcyA9IGFzT2YgPyBEYXRlLnBhcnNlKGFzT2YgKyBcIlQwMDowMDowMFpcIikgOiBEYXRlLm5vdygpO1xyXG4gIGNvbnN0IGlzbyA9IChtcykgPT4gbmV3IERhdGUobXMpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFwuXFxkK1ovLCBcIlpcIik7XHJcbiAgY29uc3QgcmF3ID0gYXdhaXQgZ2V0SnNvbihgJHtJV0xTX0FQSX0vc3RhdGlvbnMvJHtzdC5pZH0vZGF0YWAsIHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBcInRpbWUtc2VyaWVzLWNvZGVcIjogXCJ3bHBcIixcclxuICAgICAgZnJvbTogaXNvKHQwTXMgLSAzICogMzYwMGUzKSxcclxuICAgICAgdG86IGlzbyh0ME1zICsgKDIgKiBtYXhIb3VycyArIDEyKSAqIDM2MDBlMyksXHJcbiAgICB9LFxyXG4gICAgdGltZW91dE1zOiA0NTAwMCxcclxuICB9KTtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkocmF3KSB8fCByYXcubGVuZ3RoIDwgMjApIHRocm93IG5ldyBFcnJvcihcIklXTFMgd2xwIHNlcmllcyBlbXB0eVwiKTtcclxuXHJcbiAgLy8gcmVzYW1wbGUgdG8gMTUtbWluIGJ1Y2tldHMsIGNlbnRyYWwtZGlmZmVyZW5jZSBzbG9wZSwgbm9ybWFsaXplIHRvIFstMSwxXVxyXG4gIGNvbnN0IEJVQ0tFVCA9IDkwMGUzO1xyXG4gIGNvbnN0IGJ1Y2tldHMgPSBuZXcgTWFwKCk7XHJcbiAgZm9yIChjb25zdCByIG9mIHJhdykge1xyXG4gICAgY29uc3QgdCA9IERhdGUucGFyc2Uoci5ldmVudERhdGUpO1xyXG4gICAgY29uc3QgayA9IE1hdGgucm91bmQodCAvIEJVQ0tFVCk7XHJcbiAgICBpZiAoIWJ1Y2tldHMuaGFzKGspKSBidWNrZXRzLnNldChrLCBOdW1iZXIoci52YWx1ZSkpO1xyXG4gIH1cclxuICBjb25zdCBrcyA9IFsuLi5idWNrZXRzLmtleXMoKV0uc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gIGNvbnN0IHNsb3BlcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwga3MubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICBpZiAoa3NbaSArIDFdIC0ga3NbaSAtIDFdICE9PSAyKSBjb250aW51ZTsgLy8gZ2FwIMOi4oKs4oCdIHNraXBcclxuICAgIHNsb3Blcy5wdXNoKHsgdDoga3NbaV0gKiBCVUNLRVQsIHM6IChidWNrZXRzLmdldChrc1tpICsgMV0pIC0gYnVja2V0cy5nZXQoa3NbaSAtIDFdKSkgLyAoMiAqIDkwMCkgfSk7XHJcbiAgfVxyXG4gIGlmIChzbG9wZXMubGVuZ3RoIDwgMTApIHRocm93IG5ldyBFcnJvcihcIklXTFMgc2VyaWVzIHRvbyBnYXBweSBmb3Igc2xvcGVcIik7XHJcbiAgY29uc3QgbWF4QWJzID0gTWF0aC5tYXgoLi4uc2xvcGVzLm1hcCgoeCkgPT4gTWF0aC5hYnMoeC5zKSkpO1xyXG4gIGlmICghKG1heEFicyA+IDApKSB0aHJvdyBuZXcgRXJyb3IoXCJJV0xTIHNlcmllcyBpcyBmbGF0XCIpO1xyXG4gIGNvbnN0IGxhZ01zID0gKHRpZGFsQ2ZnLnBoYXNlX2xhZ19taW4gfHwgMCkgKiA2MGUzO1xyXG4gIGNvbnN0IHVNYXggPSB0aWRhbENmZy51X21heF9tcztcclxuICAvLyBzZXJpZXMgdmFsdWUgPSBhbG9uZy1jaGFubmVsIHRpZGFsIHZlbG9jaXR5ICgrZG93bnN0cmVhbSk7IFQodCk9c2xvcGUodCtsYWcpXHJcbiAgY29uc3Qgc2VyaWVzID0gc2xvcGVzLm1hcCgoeCkgPT4gKHsgdDogeC50IC0gbGFnTXMsIHU6IC11TWF4ICogKHgucyAvIG1heEFicyksIHY6IDAgfSkpO1xyXG4gIGxvZyhgICB0aWRhbDogSVdMUyAke3RpZGFsQ2ZnLnN0YXRpb25fY29kZX0gJHtzdC5vZmZpY2lhbE5hbWV9IMOi4oKs4oCdICR7c2VyaWVzLmxlbmd0aH0gcHRzLCB1X21heCAke3VNYXh9IG0vcywgbGFnICR7dGlkYWxDZmcucGhhc2VfbGFnX21pbiB8fCAwfSBtaW5gKTtcclxuICByZXR1cm4ge1xyXG4gICAgc2VyaWVzLFxyXG4gICAgdDBNcyxcclxuICAgIHN0YXRpb25fY29kZTogdGlkYWxDZmcuc3RhdGlvbl9jb2RlLFxyXG4gICAgc3RhdGlvbl9uYW1lOiB0aWRhbENmZy5zdGF0aW9uX25hbWUgfHwgc3Qub2ZmaWNpYWxOYW1lLFxyXG4gICAgdV9tYXhfbXM6IHVNYXgsXHJcbiAgICBwaGFzZV9sYWdfbWluOiB0aWRhbENmZy5waGFzZV9sYWdfbWluIHx8IDAsXHJcbiAgICBwaGFzZV91bmNlcnRfbWluOiB0aWRhbENmZy5waGFzZV91bmNlcnRfbWluID8/IDYwLFxyXG4gICAgZnJvbV9rbTogdGlkYWxDZmcuZnJvbV9rbSA/PyAwLFxyXG4gICAgc291cmNlOiB0aWRhbENmZy5wcm92aWRlciB8fCBcIml3bHMtd2xwLXNsb3BlXCIsXHJcbiAgICBub3RlOiB0aWRhbENmZy5ub3RlIHx8IG51bGwsXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEtRCBsZWFkaW5nLWVkZ2UgZnJvbnQgdGhyb3VnaCB0aWRhbCByb3dzOiBzJyA9IHZOZXQocykgKyB1VGlkZSh0KSwgZmxvb3JlZFxyXG4gKiBhdCB0aGUgaGVhZCBvZiB0aWRlIChmbG9vZCBjYW4gcHVzaCB0aGUgZnJvbnQgYmFjaywgbm90IGFib3ZlIHRoZSB0aWRhbFxyXG4gKiB6b25lKS4gUmV0dXJucyBGSVJTVC1QQVNTQUdFIGhvdXJzIHBlciBkZiBpbmRleCAoSW5maW5pdHkgPSBuZXZlciByZWFjaGVkXHJcbiAqIHdpdGhpbiBtYXhIb3Vycykgw6LigqzigJ0gZmlyc3QtcGFzc2FnZSBpcyBtb25vdG9uaWMgaW4gZGlzdGFuY2UsIHNvIGhvdXJseVxyXG4gKiBtYXJrZXJzIGFuZCBzaXRlIEVUQXMgc3RheSB3ZWxsLWRlZmluZWQuIEV4cG9ydGVkIGZvciB1bml0IHRlc3RzLlxyXG4gKlxyXG4gKiAgIHZOZXRBdChzKTogbmV0IGRvd25zdHJlYW0gdmVsb2NpdHkgKG0vcykgYXQgdHJhY2UgZGlzdGFuY2UgcyAobWV0ZXJzKVxyXG4gKiAgIHVUaWRlQXQoaHIpOiBhbG9uZy1jaGFubmVsIHRpZGFsIHZlbG9jaXR5ICgrZG93bnN0cmVhbSkgYXQgc2ltLWhvdXIgaHJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0aWRhbEZyb250VGltZXMoZGYsIGkwLCBlbnRyeUhyLCB2TmV0QXQsIHVUaWRlQXQsIG1heEhvdXJzLCBkdFMgPSAzMDApIHtcclxuICBjb25zdCBuID0gZGYubGVuZ3RoO1xyXG4gIGNvbnN0IHRpbWVzID0gbmV3IEFycmF5KG4pLmZpbGwobnVsbCk7XHJcbiAgY29uc3Qgc1N0YXJ0ID0gaTAgPiAwID8gZGZbaTAgLSAxXS5jdW1fZGlzdCA6IDA7XHJcbiAgbGV0IHMgPSBzU3RhcnQ7XHJcbiAgbGV0IGogPSBpMDtcclxuICBjb25zdCB0RW5kID0gbWF4SG91cnMgKiAzNjAwO1xyXG4gIGZvciAobGV0IHQgPSBlbnRyeUhyICogMzYwMDsgdCA8PSB0RW5kICYmIGogPCBuOyB0ICs9IGR0Uykge1xyXG4gICAgY29uc3QgdiA9IHZOZXRBdChzKSArIHVUaWRlQXQodCAvIDM2MDApO1xyXG4gICAgcyA9IE1hdGgubWF4KHNTdGFydCwgcyArIHYgKiBkdFMpO1xyXG4gICAgd2hpbGUgKGogPCBuICYmIHMgPj0gZGZbal0uY3VtX2Rpc3QpIHsgdGltZXNbal0gPSAodCArIGR0UykgLyAzNjAwOyBqKys7IH1cclxuICB9XHJcbiAgZm9yIChsZXQgayA9IGkwOyBrIDwgbjsgaysrKSBpZiAodGltZXNba10gPT09IG51bGwpIHRpbWVzW2tdID0gSW5maW5pdHk7XHJcbiAgcmV0dXJuIHRpbWVzO1xyXG59XHJcblxyXG4vKipcclxuICogQ29ycmlkb3ItbW9kZSBmZXRjaFRyYWNlRGF0YTogcm93cyArIHZpcnR1YWwgZ2F1Z2VzIGZyb20gY29ycmlkb3IgZG9jcy5cclxuICogTWlycm9ycyB0aGUgVVMgcGF0aCdzIG91dHB1dCBzaGFwZSBleGFjdGx5LCBzbyBjb21wdXRlVHJhY2UgaXMgdW5jaGFuZ2VkLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb3JyaWRvclRyYWNlRGF0YShsYXQsIGxvbiwgY29yciwgYWxsQ29ycmlkb3JzLCBjZmcsIGxvZykge1xyXG4gIGNvbnN0IGJ5SWQgPSBuZXcgTWFwKGFsbENvcnJpZG9ycy5tYXAoKGMpID0+IFtjLmlkLCBjXSkpO1xyXG5cclxuICAvLyAxLiBkb3duc3RyZWFtIGNoYWluLCBjeWNsZS1ndWFyZGVkXHJcbiAgY29uc3QgY2hhaW4gPSBbY29ycl07XHJcbiAgY29uc3Qgc2VlbiA9IG5ldyBTZXQoW2NvcnIuaWRdKTtcclxuICBsZXQgY3VyID0gY29ycjtcclxuICB3aGlsZSAoY3VyLmNvbnRpbnVlc190byAmJiBieUlkLmhhcyhjdXIuY29udGludWVzX3RvKSAmJiAhc2Vlbi5oYXMoY3VyLmNvbnRpbnVlc190bykpIHtcclxuICAgIGN1ciA9IGJ5SWQuZ2V0KGN1ci5jb250aW51ZXNfdG8pO1xyXG4gICAgY2hhaW4ucHVzaChjdXIpO1xyXG4gICAgc2Vlbi5hZGQoY3VyLmlkKTtcclxuICB9XHJcblxyXG4gIC8vIDIuIGFzc2VtYmxlIGF0dHJpYnV0ZWQgcG9pbnRzOiBjbGljayAtPiBjb3JyaWRvciBlbmQsIHRoZW4gY2hhaW5lZFxyXG4gIC8vICAgIGNvcnJpZG9ycyBmcm9tIHRoZWlyIGpvaW4gdmVydGV4LCBicmlkZ2luZyBnYXBzIHdpdGggY29ubmVjdG9yc1xyXG4gIGNvbnN0IHsgaWR4OiBzdGFydElkeCwgZGlzdE06IHNuYXBEaXN0TSB9ID0gbmVhcmVzdENvcnJpZG9yVmVydGV4KGxhdCwgbG9uLCBjb3JyKTtcclxuICBjb25zdCBwdHMgPSBbXTtcclxuICBjb25zdCBjb3JyaWRvck1ldGEgPSBbXTtcclxuICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgY2hhaW4ubGVuZ3RoOyBjaSsrKSB7XHJcbiAgICBjb25zdCBjID0gY2hhaW5bY2ldO1xyXG4gICAgbGV0IGZyb21JZHg7XHJcbiAgICBpZiAoY2kgPT09IDApIGZyb21JZHggPSBzdGFydElkeDtcclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCBwcmV2ID0gcHRzW3B0cy5sZW5ndGggLSAxXTtcclxuICAgICAgY29uc3QgeyBpZHgsIGRpc3RNIH0gPSBuZWFyZXN0Q29ycmlkb3JWZXJ0ZXgocHJldi5sYXQsIHByZXYubG9uLCBjKTtcclxuICAgICAgaWYgKGRpc3RNID4gY2ZnLmNvcnJpZG9yR2FwTWF4TSkge1xyXG4gICAgICAgIGxvZyhgICBjb3JyaWRvciBjaGFpbiBzdG9wczogJHtjaGFpbltjaSAtIDFdLmlkfSAtPiAke2MuaWR9IGdhcCAkeyhkaXN0TSAvIDEwMDApLnRvRml4ZWQoMil9IGttID4gbWF4YCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgLy8gc3RyYWlnaHQgY29ubmVjdG9yIHRocm91Z2ggdGhlIGNvbmZsdWVuY2UgZ2FwLCBhdHRyaWJ1dGVkIHdpdGggdGhlXHJcbiAgICAgIC8vIERPV05TVFJFQU0gY29ycmlkb3IncyBoeWRyYXVsaWNzIGF0IHRoZSBqb2luIChpdCBpcyB0aGF0IHJpdmVyJ3Mgd2F0ZXIpXHJcbiAgICAgIGlmIChkaXN0TSA+IDMwKSB7XHJcbiAgICAgICAgY29uc3Qgam9pbkttID0gYy5zdGF0aW9uX2ttW2lkeF07XHJcbiAgICAgICAgY29uc3QgW2pMb24sIGpMYXRdID0gYy52ZXJ0aWNlc1tpZHhdO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKGRpc3RNIC8gY2ZnLnJlc29sdXRpb25NKSk7XHJcbiAgICAgICAgZm9yIChsZXQgcyA9IDE7IHMgPD0gc3RlcHM7IHMrKykge1xyXG4gICAgICAgICAgY29uc3QgdCA9IHMgLyBzdGVwcztcclxuICAgICAgICAgIHB0cy5wdXNoKGNvcnJpZG9yUG9pbnQoYywgcHJldi5sb24gKyAoakxvbiAtIHByZXYubG9uKSAqIHQsXHJcbiAgICAgICAgICAgIHByZXYubGF0ICsgKGpMYXQgLSBwcmV2LmxhdCkgKiB0LCBqb2luS20sIHRydWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nKGAgIGNvbm5lY3RvcjogJHtjaGFpbltjaSAtIDFdLmlkfSAtPiAke2MuaWR9ICgke01hdGgucm91bmQoZGlzdE0pfSBtLCAke2MubmFtZX0gaHlkcmF1bGljcylgKTtcclxuICAgICAgfVxyXG4gICAgICBmcm9tSWR4ID0gaWR4O1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmlyc3RQdCA9IHB0cy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gZnJvbUlkeDsgaSA8IGMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcHRzLnB1c2goY29ycmlkb3JQb2ludChjLCBjLnZlcnRpY2VzW2ldWzBdLCBjLnZlcnRpY2VzW2ldWzFdLCBjLnN0YXRpb25fa21baV0pKTtcclxuICAgIH1cclxuICAgIGNvcnJpZG9yTWV0YS5wdXNoKHsgaWQ6IGMuaWQsIG5hbWU6IGMubmFtZSwgZnJvbV9rbTogYy5zdGF0aW9uX2ttW2Zyb21JZHhdLCBmaXJzdF9wdDogZmlyc3RQdCB9KTtcclxuICB9XHJcbiAgaWYgKHB0cy5sZW5ndGggPCAyKSB0aHJvdyBuZXcgRXJyb3IoXCJjb3JyaWRvciB0cmFjZSB0b28gc2hvcnRcIik7XHJcblxyXG4gIC8vIGRvd25zYW1wbGUgdG8gY2ZnLnJlc29sdXRpb25NIChjb3JyaWRvciB2ZXJ0aWNlcyBhcmUgfjUwIG0pXHJcbiAgbGV0IHNhbXBsZWQgPSBbcHRzWzBdXTtcclxuICBsZXQgYWNjID0gMDtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgYWNjICs9IGhhdmVyc2luZU0ocHRzW2kgLSAxXS5sYXQsIHB0c1tpIC0gMV0ubG9uLCBwdHNbaV0ubGF0LCBwdHNbaV0ubG9uKTtcclxuICAgIGlmIChhY2MgPj0gY2ZnLnJlc29sdXRpb25NIHx8IGkgPT09IHB0cy5sZW5ndGggLSAxKSB7IHNhbXBsZWQucHVzaChwdHNbaV0pOyBhY2MgPSAwOyB9XHJcbiAgfVxyXG5cclxuICAvLyAzLiByb3dzIMOi4oKs4oCdIHNhbWUgc2hhcGUvZGVyaXZlZCBmaWVsZHMgYXMgdGhlIFVTIHBhdGhcclxuICBjb25zdCByb3dzID0gc2FtcGxlZC5tYXAoKHApID0+ICh7IC4uLnAgfSkpO1xyXG4gIGNvbnN0IG4gPSByb3dzLmxlbmd0aDtcclxuICByb3dzWzBdLmRpc3RhbmNlID0gMC4wO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbjsgaSsrKSB7XHJcbiAgICByb3dzW2ldLmRpc3RhbmNlID0gaGF2ZXJzaW5lTShyb3dzW2kgLSAxXS5sYXQsIHJvd3NbaSAtIDFdLmxvbiwgcm93c1tpXS5sYXQsIHJvd3NbaV0ubG9uKTtcclxuICB9XHJcbiAgbGV0IGN1bSA9IDAuMDtcclxuICBmb3IgKGNvbnN0IHIgb2Ygcm93cykgeyBjdW0gKz0gci5kaXN0YW5jZTsgci5jdW1fZGlzdCA9IGN1bTsgfVxyXG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7XHJcbiAgICByLmRyYWluYWdlX2FyZWFfc3FtaSA9IHIuZHJhaW5hZ2VfYXJlYV9rbTIgKiAwLjM4NjEwMjtcclxuICAgIHIuZm9ybXVsYV93aWR0aCA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oci5kcmFpbmFnZV9hcmVhX3NxbWkpWzBdO1xyXG4gICAgci5icmFpZGVkID0gZmFsc2U7XHJcbiAgICAvLyBhdXRob3JlZCBjb3JyaWRvciB3aWR0aCBpcyB0cnVzdGVkOiBubyBHTE9XIGNhcCwgYnV0IGtlZXAgdGhlIHNhbWVcclxuICAgIC8vIDUxLXB0IHRyYWlsaW5nIHNtb290aGluZyBzbyBicmVha3BvaW50IHN0ZXBzIGRvbid0IGtpbmsgdGhlIHZlbG9jaXR5XHJcbiAgICByLndpZHRoX20gPSByLmNvcnJpZG9yX3dpZHRoX207XHJcbiAgICByLndpZHRoX2ZpbmFsX3JhdyA9IHIuY29ycmlkb3Jfd2lkdGhfbSA+IDAgPyByLmNvcnJpZG9yX3dpZHRoX20gOiByLmZvcm11bGFfd2lkdGg7XHJcbiAgfVxyXG4gIHtcclxuICAgIGNvbnN0IFcgPSA1MTtcclxuICAgIGxldCBzdW0gPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgc3VtICs9IHJvd3NbaV0ud2lkdGhfZmluYWxfcmF3O1xyXG4gICAgICBpZiAoaSA+PSBXKSBzdW0gLT0gcm93c1tpIC0gV10ud2lkdGhfZmluYWxfcmF3O1xyXG4gICAgICByb3dzW2ldLndpZHRoX2ZpbmFsID0gc3VtIC8gTWF0aC5taW4oaSArIDEsIFcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gNC4gdmlydHVhbCBnYXVnZXM6IGVudHJ5ICsgZXhpdCBvZiBlYWNoIGNoYWluZWQgY29ycmlkb3IsIERBLXJhdGlvXHJcbiAgLy8gICAgdHJhbnNmZXJyZWQgZnJvbSB0aGF0IGNvcnJpZG9yJ3MgZmxvdyByZWZlcmVuY2UuIEZlZWRzIHRoZSBzdGFuZGFyZFxyXG4gIC8vICAgIERBLXdlaWdodGVkIGludGVycG9sYXRpb24gw6LigqzigJ0gZmxvdyBqdW1wcyBsYW5kIEFUIHRoZSBjb25mbHVlbmNlLlxyXG4gIGNvbnN0IENGU19QRVJfTTNTID0gTWF0aC5wb3coMy4yODEsIDMpO1xyXG4gIGNvbnN0IGdkID0gW107XHJcbiAgY29uc3QgY29ycmlkb3JXYXJuaW5ncyA9IFtdO1xyXG4gIGNvbnN0IGZsb3dOb3RlcyA9IFtdO1xyXG4gIGZvciAoY29uc3QgbWV0YSBvZiBjb3JyaWRvck1ldGEpIHtcclxuICAgIGNvbnN0IGMgPSBieUlkLmdldChtZXRhLmlkKTtcclxuICAgIGNvbnN0IGYgPSBhd2FpdCBjb3JyaWRvckZsb3coYywgY2ZnLmFzT2YsIGxvZyk7XHJcbiAgICBpZiAoIWYpIHtcclxuICAgICAgY29ycmlkb3JXYXJuaW5ncy5wdXNoKGAke2MubmFtZX06IG5vIGZsb3cgZGF0YSBhdmFpbGFibGUgKGdhdWdlIGZlZWQgZG93biwgbm8gZmFsbGJhY2spIMOi4oKs4oCdIGZsb3cgYXNzdW1lZCBmcm9tIGRyYWluYWdlIGFyZWEgb25seS5gKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYVJlZlNxbWkgPSBmLmRhS20yICogMC4zODYxMDI7XHJcbiAgICBjb25zdCBjcm93cyA9IHJvd3MuZmlsdGVyKChyKSA9PiByLmNvcnJpZG9yX2lkID09PSBtZXRhLmlkICYmIHIuZnR5cGUgPT09IFwiQ29ycmlkb3JcIik7XHJcbiAgICBpZiAoIWNyb3dzLmxlbmd0aCkgY29udGludWU7XHJcbiAgICBmb3IgKGNvbnN0IGF0IG9mIFtjcm93c1swXSwgY3Jvd3NbY3Jvd3MubGVuZ3RoIC0gMV1dKSB7XHJcbiAgICAgIGNvbnN0IGRhU3FtaSA9IGF0LmRyYWluYWdlX2FyZWFfc3FtaTtcclxuICAgICAgaWYgKCEoZGFTcW1pID4gMCkgfHwgIShkYVJlZlNxbWkgPiAwKSkgY29udGludWU7XHJcbiAgICAgIGNvbnN0IHEgPSBmLnFNM3MgKiBDRlNfUEVSX00zUyAqIChkYVNxbWkgLyBkYVJlZlNxbWkpO1xyXG4gICAgICBpZiAoZ2Quc29tZSgoZykgPT4gTWF0aC5hYnMoZy50cmFjZV9kaXN0IC0gYXQuY3VtX2Rpc3QpIDwgMSkpIGNvbnRpbnVlO1xyXG4gICAgICBjb25zdCBbdywgZGVwXSA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oZGFTcW1pKTtcclxuICAgICAgZ2QucHVzaCh7XHJcbiAgICAgICAgc3RhdGlvbl9pZDogYCR7bWV0YS5pZH06JHtmLnNvdXJjZX1gLFxyXG4gICAgICAgIG5hbWU6IGAke2MubmFtZX0gKCR7Zi5ub3RlIHx8IGYuc291cmNlfSlgLFxyXG4gICAgICAgIGxhdDogYXQubGF0LCBsb246IGF0LmxvbixcclxuICAgICAgICBkaXNjaGFyZ2U6IHEsIGRyYWluYWdlX2FyZWE6IGRhU3FtaSxcclxuICAgICAgICBxX3NvdXJjZTogZi5zb3VyY2UsXHJcbiAgICAgICAgYXJlYTogdyAqIGRlcCwgdHJhY2VfZGlzdDogYXQuY3VtX2Rpc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGYuc291cmNlICE9PSBcImVjY2MtaXZcIikge1xyXG4gICAgICBjb3JyaWRvcldhcm5pbmdzLnB1c2goXHJcbiAgICAgICAgYCR7Yy5uYW1lfTogZmxvdyBpcyBhIEhJU1RPUklDQUwgTU9OVEhMWSBNRURJQU4gKCR7Zi5ub3RlIHx8IFwiYXJjaGl2ZWQgcmVjb3JkXCJ9KSDDouKCrOKAnSBOT1QgbGl2ZSBjb25kaXRpb25zLmApO1xyXG4gICAgfVxyXG4gICAgZmxvd05vdGVzLnB1c2goYCR7Yy5uYW1lfTogJHtmLnFNM3MudG9GaXhlZCgyKX0gbTMvcyBhdCByZWYgREEgJHtNYXRoLnJvdW5kKGYuZGFLbTIpfSBrbTIgKCR7Zi5zb3VyY2V9KWApO1xyXG4gICAgZm9yIChjb25zdCB3dGV4dCBvZiBjLndhcm5pbmdzIHx8IFtdKSB7XHJcbiAgICAgIGlmICghY29ycmlkb3JXYXJuaW5ncy5pbmNsdWRlcyh3dGV4dCkpIGNvcnJpZG9yV2FybmluZ3MucHVzaCh3dGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdkLnNvcnQoKGEsIGIpID0+IGEudHJhY2VfZGlzdCAtIGIudHJhY2VfZGlzdCk7XHJcbiAgZm9yIChjb25zdCBnIG9mIGdkKSB7XHJcbiAgICBsb2coYCAgY29ycmlkb3IgZ2F1Z2UgJHtnLnN0YXRpb25faWQucGFkRW5kKDI4KX0gJHtTdHJpbmcoTWF0aC5yb3VuZChnLmRpc2NoYXJnZSkpLnBhZFN0YXJ0KDkpfSBjZnMgQCAkeyhnLnRyYWNlX2Rpc3QgLyAxMDAwKS50b0ZpeGVkKDEpLnBhZFN0YXJ0KDYpfSBrbSAoJHtnLnFfc291cmNlfSlgKTtcclxuICB9XHJcblxyXG4gIC8vIDUuIHNpdGUvcmVjZXB0b3IgZmVhdHVyZXMgw6LigqzigJ0gaWRlbnRpY2FsIHRvIHRoZSBVUyBwYXRoXHJcbiAgY29uc3QgZmV0Y2hTZXRzID0gYXN5bmMgKHByb3ZpZGVycykgPT4gUHJvbWlzZS5hbGwoXHJcbiAgICAocHJvdmlkZXJzIHx8IFtdKS5tYXAoYXN5bmMgKHApID0+ICh7XHJcbiAgICAgIGJ1ZmZlcl9tOiBwLmJ1ZmZlcl9tID8/IDQwMCxcclxuICAgICAgZmVhdHM6IGF3YWl0IHAuZmV0Y2goKSxcclxuICAgIH0pKSxcclxuICApO1xyXG4gIGNvbnN0IFtzaXRlU2V0cywgcmVjZXB0b3JTZXRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgW2ZldGNoU2V0cyhjZmcuc2l0ZVByb3ZpZGVycyksIGZldGNoU2V0cyhjZmcucmVjZXB0b3JQcm92aWRlcnMpXSxcclxuICApO1xyXG5cclxuICBjb25zdCByaXZlck5hbWUgPSBjb3JyaWRvck1ldGEubWFwKChtKSA9PiBieUlkLmdldChtLmlkKS5uYW1lKS5qb2luKFwiIMOi4oCg4oCZIFwiKTtcclxuICBsb2coYCAgY29ycmlkb3IgdHJhY2U6ICR7cml2ZXJOYW1lfSwgJHtufSBwb2ludHMsICR7KHJvd3NbbiAtIDFdLmN1bV9kaXN0IC8gMTAwMCkudG9GaXhlZCgxKX0ga20sICR7Z2QubGVuZ3RofSB2aXJ0dWFsIGdhdWdlc2ApO1xyXG5cclxuICAvLyA2LiB0aWRhbCBzZXJpZXMgKHYxLjgpIMOi4oKs4oCdIGZpcnN0IGNvcnJpZG9yIGluIHRoZSBjaGFpbiB3aXRoIGEgdGlkYWwgYmxvY2suXHJcbiAgLy8gRmFpbHVyZSBkZWdyYWRlcyB0byBzdGVhZHkgbmV0LWRyaWZ0IHRpbWluZyB3aXRoIHRoZSBsZWdhY3kgd2FybmluZy5cclxuICBsZXQgdGlkYWwgPSBudWxsO1xyXG4gIGNvbnN0IHRpZGFsQ29yciA9IGNvcnJpZG9yTWV0YS5tYXAoKG0pID0+IGJ5SWQuZ2V0KG0uaWQpKS5maW5kKChjKSA9PiBjLnRpZGFsICYmIGMudGlkYWwuc3RhdGlvbl9jb2RlKTtcclxuICBpZiAodGlkYWxDb3JyKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aWRhbCA9IGF3YWl0IGZldGNoSXdsc1RpZGFsU2VyaWVzKHRpZGFsQ29yci50aWRhbCwgY2ZnLmFzT2YgfHwgbnVsbCwgY2ZnLm1heEhvdXJzLCBsb2cpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb3JyaWRvcldhcm5pbmdzLnB1c2goXHJcbiAgICAgICAgYFRpZGUgZmVlZCB1bmF2YWlsYWJsZSAoJHtTdHJpbmcoZSkuc2xpY2UoMCwgNzApfSkgw6LigqzigJ0gdGlkYWwgcmVhY2ggRVRBcyBhcmUgTkVULURSSUZUIE9OTFk7IGAgK1xyXG4gICAgICAgIGBmbG9vZCB0aWRlcyBjYW4gc3RhbGwgb3IgcmV2ZXJzZSB0cmFuc3BvcnQsIHRyZWF0IGFzIGJhbmRzIG9mIMOCwrEgc2V2ZXJhbCBob3Vycy5gKTtcclxuICAgICAgbG9nKGAgIHRpZGFsIGZldGNoIEZBSUxFRDogJHtlfWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxhdCwgbG9uLCBjb21pZDogbnVsbCwgc25hcE5hbWU6IGNvcnIubmFtZSwgc25hcERpc3RNLCByaXZlck5hbWUsXHJcbiAgICByb3dzLCBnZCwgc2l0ZVNldHMsIHJlY2VwdG9yU2V0cywgdGlkYWwsXHJcbiAgICBhc09mOiBjZmcuYXNPZiB8fCBcImxpdmVcIixcclxuICAgIGZldGNoZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgY29ycmlkb3JXYXJuaW5ncyxcclxuICAgIGNvcnJpZG9yTWV0YToge1xyXG4gICAgICBjaGFpbjogY29ycmlkb3JNZXRhLm1hcCgobSkgPT4gKHsgaWQ6IG0uaWQsIGZyb21fa206IE1hdGgucm91bmQobS5mcm9tX2ttICogMTAwKSAvIDEwMCB9KSksXHJcbiAgICAgIGZsb3c6IGZsb3dOb3RlcyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYWluIG1vZGVsXHJcbi8vXHJcbi8vIFNwbGl0IGludG8gdHdvIHN0YWdlcyBzbyB0aGUgZXhwZW5zaXZlIHBhcnQgaXMgY2FjaGVhYmxlOlxyXG4vLyAgIGZldGNoVHJhY2VEYXRhKGxhdCwgbG9uLCBjb25maWcpICDDouKCrOKAnSBBTEwgbmV0d29yayBJL086IHRyYWNlIGdlb21ldHJ5LCBWQUFzLFxyXG4vLyAgICAgd2lkdGggc2FtcGxpbmcsIGdhdWdlcyArIGZsb3dzLCBzaXRlL3JlY2VwdG9yIGZlYXR1cmVzLiBTYWZldHkgZmFjdG9yLFxyXG4vLyAgICAgbWF4IGhvdXJzIGV0Yy4gZG8gTk9UIGFmZmVjdCB0aGlzIHN0YWdlLlxyXG4vLyAgIGNvbXB1dGVUcmFjZShkYXRhLCBjb25maWcpICAgICAgICDDouKCrOKAnSBwdXJlIG1hdGg6IFEgaW50ZXJwLCBNYW5uaW5nIGRlcHRoLFxyXG4vLyAgICAgdmVsb2NpdHkgeCBzYWZldHksIGltcG91bmRtZW50LCB0cmF2ZWwgdGltZSwgaG91cmx5IG1hcmtlcnMsIHNpdGUgRVRBcy5cclxuLy8gICAgIERldGVybWluaXN0aWMgYW5kIHJlLXJ1bm5hYmxlIG9uIHRoZSBzYW1lIGRhdGEgKGZpZWxkcyBhcmUgb3ZlcndyaXR0ZW4sXHJcbi8vICAgICByb3dzIGFyZSBuZXZlciBzdHJ1Y3R1cmFsbHkgbXV0YXRlZCkuXHJcbi8vIHJ1blRyYWNlKCkgY29tcG9zZXMgdGhlIHR3byDDouKCrOKAnSBpZGVudGljYWwgYmVoYXZpb3IgdG8gdGhlIG9yaWdpbmFsLlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVHJhY2VEYXRhKGxhdCwgbG9uLCBjb25maWcgPSB7fSkge1xyXG4gIGNvbnN0IGNmZyA9IHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9O1xyXG4gIGNvbnN0IGxvZyA9IGNmZy52ZXJib3NlID8gKC4uLmEpID0+IGNvbnNvbGUubG9nKC4uLmEpIDogKCkgPT4ge307XHJcblxyXG4gIGxvZyhgZmV0Y2hUcmFjZURhdGEoJHtsYXQudG9GaXhlZCg0KX0sICR7bG9uLnRvRml4ZWQoNCl9KSAgYXNPZj0ke2NmZy5hc09mIHx8IFwibGl2ZVwifWApO1xyXG5cclxuICAvLyAwLiBjb3JyaWRvciBtb2RlICh2MS42KTogaWYgdGhlIGNsaWNrIGxhbmRzIG9uIGEgY29uZmlndXJlZCBjb3JyaWRvclxyXG4gIC8vIChDYW5hZGlhbiByaXZlcnMgw6LigqzigJ0gbm8gTkxESS9OSERQbHVzL05XSVMgY292ZXJhZ2UpLCBydW4gb24gY29ycmlkb3IgZGF0YS5cclxuICBpZiAoY2ZnLmNvcnJpZG9ycyAmJiBjZmcuY29ycmlkb3JzLmxlbmd0aCkge1xyXG4gICAgY29uc3QgZG9jcyA9IGF3YWl0IGxvYWRDb3JyaWRvcnMoY2ZnLmNvcnJpZG9ycywgbG9nKTtcclxuICAgIGxldCBiZXN0ID0gbnVsbDtcclxuICAgIGZvciAoY29uc3QgYyBvZiBkb2NzKSB7XHJcbiAgICAgIGNvbnN0IHsgZGlzdE0gfSA9IG5lYXJlc3RDb3JyaWRvclZlcnRleChsYXQsIGxvbiwgYyk7XHJcbiAgICAgIGlmIChkaXN0TSA8PSAoYy5zbmFwX20gfHwgNTAwKSAmJiAoIWJlc3QgfHwgZGlzdE0gPCBiZXN0LmRpc3RNKSkgYmVzdCA9IHsgYywgZGlzdE0gfTtcclxuICAgIH1cclxuICAgIGlmIChiZXN0KSB7XHJcbiAgICAgIGxvZyhgICBjb3JyaWRvciBtYXRjaDogJHtiZXN0LmMuaWR9ICgke01hdGgucm91bmQoYmVzdC5kaXN0TSl9IG0gZnJvbSBjZW50ZXJsaW5lKWApO1xyXG4gICAgICByZXR1cm4gZmV0Y2hDb3JyaWRvclRyYWNlRGF0YShsYXQsIGxvbiwgYmVzdC5jLCBkb2NzLCBjZmcsIGxvZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAxLiB0cmFjZSBnZW9tZXRyeSAob25lIE5MREkgY2FsbCkgKyBWQUEgYmF0Y2ggam9pblxyXG4gIGNvbnN0IFtjb21pZCwgc25hcE5hbWUsIHNuYXBEXSA9IGF3YWl0IHNuYXBDb21pZChsYXQsIGxvbiwgY2ZnLm1pblN0cmVhbU9yZGVyKTtcclxuICBsb2coYCAgQ09NSUQgJHtjb21pZH1gICsgKHNuYXBOYW1lID8gYCAoJHtzbmFwTmFtZX0sIHNuYXBwZWQgJHsoc25hcEQgLyAxMDAwKS50b0ZpeGVkKDIpfSBrbSlgIDogXCJcIikpO1xyXG4gIGNvbnN0IGdlb21zID0gYXdhaXQgbmxkaURtRmxvd2xpbmVzKGNvbWlkLCBjZmcubWF4RGlzdGFuY2VLbSk7XHJcbiAgbG9nKGAgIE5MREkgRE0gZmxvd2xpbmVzOiAke2dlb21zLnNpemV9YCk7XHJcbiAgY29uc3QgdmFhID0gYXdhaXQgdmFhQmF0Y2goWy4uLmdlb21zLmtleXMoKV0pO1xyXG4gIGNvbnN0IFtwdHMsIHJpdmVyTmFtZV0gPSBhc3NlbWJsZVRyYWNlKGxhdCwgbG9uLCBnZW9tcywgdmFhLCBjZmcucmVzb2x1dGlvbk0sIGxvZyk7XHJcbiAgaWYgKHB0cy5sZW5ndGggPCAyKSB0aHJvdyBuZXcgRXJyb3IoXCJ0cmFjZSB0b28gc2hvcnRcIik7XHJcblxyXG4gIC8vIHBlci1wb2ludCBhcnJheXMgKG1pcnJvcnMgdGhlIERhdGFGcmFtZSlcclxuICBjb25zdCBuID0gcHRzLmxlbmd0aDtcclxuICBjb25zdCByb3dzID0gcHRzLm1hcCgocCkgPT4gKHsgLi4ucCB9KSk7XHJcbiAgcm93c1swXS5kaXN0YW5jZSA9IDAuMDtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IG47IGkrKykge1xyXG4gICAgcm93c1tpXS5kaXN0YW5jZSA9IGhhdmVyc2luZU0ocm93c1tpIC0gMV0ubGF0LCByb3dzW2kgLSAxXS5sb24sIHJvd3NbaV0ubGF0LCByb3dzW2ldLmxvbik7XHJcbiAgfVxyXG4gIGxldCBjdW0gPSAwLjA7XHJcbiAgZm9yIChjb25zdCByIG9mIHJvd3MpIHsgY3VtICs9IHIuZGlzdGFuY2U7IHIuY3VtX2Rpc3QgPSBjdW07IH1cclxuICBmb3IgKGNvbnN0IHIgb2Ygcm93cykgci5kcmFpbmFnZV9hcmVhX3NxbWkgPSByLmRyYWluYWdlX2FyZWFfa20yICogMC4zODYxMDI7XHJcblxyXG4gIC8vIDIuIHdpZHRoczogZm9ybXVsYSBiYXNlbGluZSwgb3B0aW9uYWwgb3ZlcnJpZGUgcHJvdmlkZXIsIDJ4IGNhcCwgYmFja3dhcmQgc21vb3RoaW5nXHJcbiAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcclxuICAgIHIuZm9ybXVsYV93aWR0aCA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oci5kcmFpbmFnZV9hcmVhX3NxbWkpWzBdO1xyXG4gICAgci53aWR0aF9tID0gMC4wO1xyXG4gIH1cclxuICAvLyBicmFpZGVkLXJlYWNoIGZsYWc6IGFueSBOSERQbHVzIGRpdmVyZ2VuY2Ugd2l0aGluIH4xIGttICgxMCByb3dzKSDDouKCrOKAnSBHTE9XIHdpZHRoc1xyXG4gIC8vIHRoZXJlIG1lYXN1cmUgdG90YWwgd2V0dGVkIHdpZHRoIGFjcm9zcyBiYXJzLCBpbmZsYXRpbmcgQSBhbmQga2lsbGluZyB2ZWxvY2l0eVxyXG4gIHtcclxuICAgIGNvbnN0IFcgPSAxMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIGxldCBicmFpZGVkID0gZmFsc2U7XHJcbiAgICAgIGZvciAobGV0IGsgPSBNYXRoLm1heCgwLCBpIC0gVyk7IGsgPD0gTWF0aC5taW4obiAtIDEsIGkgKyBXKTsgaysrKSB7XHJcbiAgICAgICAgaWYgKHJvd3Nba10uZGl2ZXJnZW5jZSA+IDApIHsgYnJhaWRlZCA9IHRydWU7IGJyZWFrOyB9XHJcbiAgICAgIH1cclxuICAgICAgcm93c1tpXS5icmFpZGVkID0gYnJhaWRlZDtcclxuICAgIH1cclxuICAgIGNvbnN0IG5iID0gcm93cy5maWx0ZXIoKHIpID0+IHIuYnJhaWRlZCkubGVuZ3RoO1xyXG4gICAgaWYgKG5iKSBsb2coYCAgYnJhaWRlZCBmbGFnOiAke25ifS8ke259IHRyYWNlIHBvaW50cyBuZWFyIGNoYW5uZWwgZGl2ZXJnZW5jZXMgKEdMT1cgb3ZlcnJpZGUgZGlzYWJsZWQgdGhlcmUpYCk7XHJcbiAgfVxyXG5cclxuICBpZiAoY2ZnLndpZHRoUHJvdmlkZXIpIHtcclxuICAgIC8vIEhSIE5IRFBsdXNJRCAhPSBNUiBjb21pZCDDouKCrOKAnSBzYW1wbGUgc3BhdGlhbGx5LCBpbiB3aW5kb3dzOyBuZXZlciBsZXQgdGhlXHJcbiAgICAvLyBvdmVycmlkZSBraWxsIHRoZSBydW4gKGRlZ3JhZGUgdG8gZm9ybXVsYSB3aWR0aHMpLlxyXG4gICAgbGV0IG1pZHMgPSBbXTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IFNURVAgPSBjZmcud2lkdGhXaW5kb3dQb2ludHM7XHJcbiAgICAgIGNvbnN0IHBhZCA9IDAuMDM7XHJcbiAgICAgIGZvciAobGV0IGkwID0gMDsgaTAgPCBuOyBpMCArPSBTVEVQKSB7XHJcbiAgICAgICAgY29uc3Qgd2luID0gcm93cy5zbGljZShpMCwgaTAgKyBTVEVQKTtcclxuICAgICAgICBjb25zdCBlbnYgPSB7XHJcbiAgICAgICAgICB4bWluOiBNYXRoLm1pbiguLi53aW4ubWFwKChyKSA9PiByLmxvbikpIC0gcGFkLFxyXG4gICAgICAgICAgeW1pbjogTWF0aC5taW4oLi4ud2luLm1hcCgocikgPT4gci5sYXQpKSAtIHBhZCxcclxuICAgICAgICAgIHhtYXg6IE1hdGgubWF4KC4uLndpbi5tYXAoKHIpID0+IHIubG9uKSkgKyBwYWQsXHJcbiAgICAgICAgICB5bWF4OiBNYXRoLm1heCguLi53aW4ubWFwKChyKSA9PiByLmxhdCkpICsgcGFkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZmVhdHMgPSBhd2FpdCBjZmcud2lkdGhQcm92aWRlcihlbnYpOyAvLyBbe2xhdCwgbG9uLCB3aWR0aH1dXHJcbiAgICAgICAgbWlkcy5wdXNoKC4uLmZlYXRzKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBsb2coYCAgV0lEVEggT1ZFUlJJREUgRkFJTEVEICgke1N0cmluZyhlKS5zbGljZSgwLCA4MCl9KSAtIGZhbGxpbmcgYmFjayB0byBmb3JtdWxhIHdpZHRoc2ApO1xyXG4gICAgICBtaWRzID0gW107XHJcbiAgICB9XHJcbiAgICBpZiAobWlkcy5sZW5ndGgpIHtcclxuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcclxuICAgICAgICBpZiAoci5icmFpZGVkKSB7IHIud2lkdGhfbSA9IDAuMDsgY29udGludWU7IH0gLy8gZm9ybXVsYSB3aWR0aCBvbiBicmFpZGVkIHJlYWNoZXNcclxuICAgICAgICBsZXQgYmVzdEQgPSBJbmZpbml0eSwgYmVzdFcgPSAwO1xyXG4gICAgICAgIGZvciAoY29uc3QgbSBvZiBtaWRzKSB7XHJcbiAgICAgICAgICBjb25zdCBkID0gaGF2ZXJzaW5lTShyLmxhdCwgci5sb24sIG0ubGF0LCBtLmxvbik7XHJcbiAgICAgICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgYmVzdFcgPSBtLndpZHRoIHx8IDA7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgci53aWR0aF9tID0gYmVzdEQgPD0gY2ZnLndpZHRoU2FtcGxlUmFkaXVzTSA/IGJlc3RXIDogMC4wO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1hdGNoZWQgPSByb3dzLmZpbHRlcigocikgPT4gci53aWR0aF9tID4gMCkubGVuZ3RoO1xyXG4gICAgICBsb2coYCAgR0xPVyBzcGF0aWFsIHNhbXBsZTogJHttaWRzLmxlbmd0aH0gSFIgc2VnbWVudHMsIHdpZHRocyBtYXRjaGVkIGF0ICR7bWF0Y2hlZH0vJHtufSB0cmFjZSBwb2ludHNgKTtcclxuICAgIH1cclxuICB9XHJcbiAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcclxuICAgIHIud2lkdGhfZmluYWxfcmF3ID1cclxuICAgICAgci53aWR0aF9tID4gMCAmJiByLndpZHRoX20gPD0gci5mb3JtdWxhX3dpZHRoICogMi4wID8gci53aWR0aF9tIDogci5mb3JtdWxhX3dpZHRoO1xyXG4gIH1cclxuICAvLyBwYW5kYXMgcm9sbGluZyh3aW5kb3c9NTEsIG1pbl9wZXJpb2RzPTEpLm1lYW4oKSDDouKCrOKAnSB0cmFpbGluZyB3aW5kb3dcclxuICB7XHJcbiAgICBjb25zdCBXID0gNTE7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHN1bSArPSByb3dzW2ldLndpZHRoX2ZpbmFsX3JhdztcclxuICAgICAgaWYgKGkgPj0gVykgc3VtIC09IHJvd3NbaSAtIFddLndpZHRoX2ZpbmFsX3JhdztcclxuICAgICAgcm93c1tpXS53aWR0aF9maW5hbCA9IHN1bSAvIE1hdGgubWluKGkgKyAxLCBXKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIDMuIGRpc2NoYXJnZSBpbnB1dHM6IE5MREkgZG93bnN0cmVhbSBnYXVnZXMgLT4gTldJUyBRICgrREEpLCBsb2NhdGVkIG9uIHRyYWNlXHJcbiAgY29uc3QgZ2F1Z2VzID0gYXdhaXQgbmxkaUdhdWdlcyhjb21pZCwgY2ZnLm1heERpc3RhbmNlS20sIFwiRE1cIik7XHJcbiAgLy8gdXBzdHJlYW0tYW5jaG9yIGNhbmRpZGF0ZXM6IG5lYXJlc3QgVU0gZ2F1Z2VzIChmaXhlcyB0aGUgZGlzY29udGludWl0eSB3aGVuXHJcbiAgLy8gdGhlIGNsaWNrIGlzIGp1c3QgYmVsb3cgYSBnYXVnZSBhbmQgRE0gbmF2aWdhdGlvbiBubyBsb25nZXIgc2VlcyBpdClcclxuICBsZXQgdXBDYW5kcyA9IFtdO1xyXG4gIGlmIChjZmcudXBzdHJlYW1HYXVnZUttID4gMCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZG1JZHMgPSBuZXcgU2V0KGdhdWdlcy5tYXAoKGcpID0+IGcuc3RhdGlvbl9pZCkpO1xyXG4gICAgICB1cENhbmRzID0gKGF3YWl0IG5sZGlHYXVnZXMoY29taWQsIGNmZy51cHN0cmVhbUdhdWdlS20sIFwiVU1cIikpXHJcbiAgICAgICAgLmZpbHRlcigodSkgPT4gIWRtSWRzLmhhcyh1LnN0YXRpb25faWQpKVxyXG4gICAgICAgIC5tYXAoKHUpID0+ICh7IC4uLnUsIHVwc3RyZWFtX206IGhhdmVyc2luZU0obGF0LCBsb24sIHUubGF0LCB1LmxvbikgfSkpXHJcbiAgICAgICAgLmZpbHRlcigodSkgPT4gdS51cHN0cmVhbV9tIDw9IGNmZy51cHN0cmVhbUdhdWdlS20gKiAxMDAwKVxyXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnVwc3RyZWFtX20gLSBiLnVwc3RyZWFtX20pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBsb2coYCAgVU0gZ2F1Z2UgbG9va3VwIGZhaWxlZCAoJHtTdHJpbmcoZSkuc2xpY2UoMCwgODApfSkgw6LigqzigJ0gbm8gdXBzdHJlYW0gYW5jaG9yYCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGFsbElkcyA9IFsuLi5uZXcgU2V0KFsuLi5nYXVnZXMsIC4uLnVwQ2FuZHNdLm1hcCgoZykgPT4gZy5zdGF0aW9uX2lkKSldO1xyXG4gIGNvbnN0IGdpbmZvID0gYXdhaXQgZ2F1Z2VJbmZvKGFsbElkcywgY2ZnLmFzT2YsIGNmZy5nYXVnZVN0YXRGYWxsYmFjayk7XHJcbiAgY29uc3QgZ2QgPSBbXTtcclxuICBmb3IgKGNvbnN0IGcgb2YgZ2F1Z2VzKSB7XHJcbiAgICBjb25zdCBpID0gZ2luZm8uZ2V0KGcuc3RhdGlvbl9pZCkgfHwge307XHJcbiAgICBpZiAoaS5kaXNjaGFyZ2UgPT09IHVuZGVmaW5lZCB8fCAhaS5kcmFpbmFnZV9hcmVhKSBjb250aW51ZTtcclxuICAgIGxldCBiZXN0RCA9IEluZmluaXR5LCBpZHggPSAwO1xyXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcclxuICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0ocm93c1trXS5sYXQsIHJvd3Nba10ubG9uLCBnLmxhdCwgZy5sb24pO1xyXG4gICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgaWR4ID0gazsgfVxyXG4gICAgfVxyXG4gICAgaWYgKGJlc3REID4gNTAwMCkgY29udGludWU7IC8vIGdhdWdlIG5vdCBvbiBvdXIgdHJhY2UgY29ycmlkb3JcclxuICAgIGNvbnN0IFt3LCBkZXBdID0gZXN0aW1hdGVHZW9tZXRyeVBheXRvbihpLmRyYWluYWdlX2FyZWEpO1xyXG4gICAgZ2QucHVzaCh7XHJcbiAgICAgIC4uLmcsIGRpc2NoYXJnZTogaS5kaXNjaGFyZ2UsIGRyYWluYWdlX2FyZWE6IGkuZHJhaW5hZ2VfYXJlYSxcclxuICAgICAgcV9zb3VyY2U6IGkucV9zb3VyY2UgfHwgXCJpdlwiLFxyXG4gICAgICBhcmVhOiB3ICogZGVwLCB0cmFjZV9kaXN0OiByb3dzW2lkeF0uY3VtX2Rpc3QsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2Quc29ydCgoYSwgYikgPT4gYS50cmFjZV9kaXN0IC0gYi50cmFjZV9kaXN0KTtcclxuICAvLyBtZWRpYW4tZmxvdyBnYXVnZXMgYXJlIGEgcmVzY3VlLCBub3QgYSBzdXBwbGVtZW50OiB3aXRoIEFOWSBsaXZlIGdhdWdlIG9uXHJcbiAgLy8gdGhlIHRyYWNlLCBsaXZlLW9ubHkgaW50ZXJwb2xhdGlvbiBiZWF0cyBzcGxpY2luZyBhIGhpc3RvcmljYWwgbWVkaWFuIGludG9cclxuICAvLyB0aGUgcHJvZmlsZSAobWVkaWFuICE9IHRvZGF5J3MgZmxvdyBpbiBydW5vZmYgb3IgZHJvdWdodCkuIFRoZXkgZW5nYWdlXHJcbiAgLy8gb25seSBvbiBhIGZ1bGwgZmVlZCBvdXRhZ2Ugb3IgYSBwcmUtSVYtZXJhIGFzT2YgZGF0ZS5cclxuICBpZiAoZ2Quc29tZSgoZykgPT4gZy5xX3NvdXJjZSA9PT0gXCJpdlwiKSAmJiBnZC5zb21lKChnKSA9PiBnLnFfc291cmNlID09PSBcInN0YXQtcDUwXCIpKSB7XHJcbiAgICBjb25zdCBkcm9wcGVkID0gZ2QuZmlsdGVyKChnKSA9PiBnLnFfc291cmNlID09PSBcInN0YXQtcDUwXCIpLm1hcCgoZykgPT4gZy5zdGF0aW9uX2lkKTtcclxuICAgIGxvZyhgICBtZWRpYW4tZmFsbGJhY2sgZ2F1Z2VzIHN1cHByZXNzZWQgKGxpdmUgZ2F1Z2VzIGF2YWlsYWJsZSk6ICR7ZHJvcHBlZC5qb2luKFwiLCBcIil9YCk7XHJcbiAgICBmb3IgKGxldCBpID0gZ2QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChnZFtpXS5xX3NvdXJjZSA9PT0gXCJzdGF0LXA1MFwiKSBnZC5zcGxpY2UoaSwgMSk7XHJcbiAgfVxyXG4gIGNvbnN0IHNwaWxsRGFTcW1pID0gcm93c1swXS5kcmFpbmFnZV9hcmVhX3NxbWk7XHJcbiAgZm9yIChjb25zdCB1IG9mIHVwQ2FuZHMpIHtcclxuICAgIGNvbnN0IGkgPSBnaW5mby5nZXQodS5zdGF0aW9uX2lkKSB8fCB7fTtcclxuICAgIGlmIChpLmRpc2NoYXJnZSA9PT0gdW5kZWZpbmVkIHx8ICFpLmRyYWluYWdlX2FyZWEpIGNvbnRpbnVlO1xyXG4gICAgLy8gc2FtZSByZXNjdWUtb25seSBydWxlIGZvciB0aGUgdXBzdHJlYW0gYW5jaG9yOiBubyBtZWRpYW4gYW5jaG9ycyB3aGVuXHJcbiAgICAvLyBsaXZlIGdhdWdlcyBhcmUgb24gdGhlIHRyYWNlXHJcbiAgICBpZiAoKGkucV9zb3VyY2UgfHwgXCJpdlwiKSA9PT0gXCJzdGF0LXA1MFwiICYmIGdkLnNvbWUoKGcpID0+IGcucV9zb3VyY2UgPT09IFwiaXZcIikpIGNvbnRpbnVlO1xyXG4gICAgaWYgKG1lcmdlVXBzdHJlYW1BbmNob3IoZ2QsIHsgLi4udSwgZGlzY2hhcmdlOiBpLmRpc2NoYXJnZSwgZHJhaW5hZ2VfYXJlYTogaS5kcmFpbmFnZV9hcmVhLCBxX3NvdXJjZTogaS5xX3NvdXJjZSB8fCBcIml2XCIgfSwgc3BpbGxEYVNxbWkpKSB7XHJcbiAgICAgIGxvZyhcclxuICAgICAgICBgICB1cHN0cmVhbSBhbmNob3IgJHt1LnN0YXRpb25faWR9ICR7dS5uYW1lLnNsaWNlKDAsIDMwKX06ICR7TWF0aC5yb3VuZChpLmRpc2NoYXJnZSl9IGNmcyBgICtcclxuICAgICAgICBgQCAkeyh1LnVwc3RyZWFtX20gLyAxMDAwKS50b0ZpeGVkKDEpfSBrbSB1cHN0cmVhbSAtPiAke01hdGgucm91bmQoaS5kaXNjaGFyZ2UgKiAoc3BpbGxEYVNxbWkgLyBpLmRyYWluYWdlX2FyZWEpKX0gY2ZzIGAgK1xyXG4gICAgICAgIGBhdCBzcGlsbCBwb2ludCAoREEgeCR7KHNwaWxsRGFTcW1pIC8gaS5kcmFpbmFnZV9hcmVhKS50b0ZpeGVkKDIpfSlgLFxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIC8vIGFuIG9uLXRyYWNlIGdhdWdlIG5lYXIgdGhlIHN0YXJ0IGFscmVhZHkgYW5jaG9ycyB0aGUgYm91bmRhcnkgw6LigqzigJ0gc3RvcCBsb29raW5nXHJcbiAgICBpZiAoZ2Quc29tZSgoZykgPT4gIWcudXBzdHJlYW1fYW5jaG9yICYmIGcudHJhY2VfZGlzdCA8PSA1MDApKSBicmVhaztcclxuICB9XHJcbiAgZm9yIChjb25zdCBnIG9mIGdkKSB7XHJcbiAgICBsb2coYCAgZ2F1Z2UgJHtnLnN0YXRpb25faWR9ICR7Zy5uYW1lLnNsaWNlKDAsIDM4KS5wYWRFbmQoMzgpfSAke1N0cmluZyhNYXRoLnJvdW5kKGcuZGlzY2hhcmdlKSkucGFkU3RhcnQoOCl9IGNmcyBAICR7KGcudHJhY2VfZGlzdCAvIDEwMDApLnRvRml4ZWQoMSkucGFkU3RhcnQoNil9IGttJHtnLnVwc3RyZWFtX2FuY2hvciA/IFwiICh1cHN0cmVhbSBhbmNob3IpXCIgOiBcIlwifSR7Zy5xX3NvdXJjZSA9PT0gXCJzdGF0LXA1MFwiID8gXCIgKE1FRElBTiBmYWxsYmFjaylcIiA6IFwiXCJ9YCk7XHJcbiAgfVxyXG5cclxuICAvLyA0LiBzaXRlL3JlY2VwdG9yIGZlYXR1cmVzIChmZXRjaGVkIGluIHBhcmFsbGVsOyBqb2luZWQgaW4gY29tcHV0ZVRyYWNlKVxyXG4gIGNvbnN0IGZldGNoU2V0cyA9IGFzeW5jIChwcm92aWRlcnMpID0+IFByb21pc2UuYWxsKFxyXG4gICAgKHByb3ZpZGVycyB8fCBbXSkubWFwKGFzeW5jIChwKSA9PiAoe1xyXG4gICAgICBidWZmZXJfbTogcC5idWZmZXJfbSA/PyA0MDAsXHJcbiAgICAgIGZlYXRzOiBhd2FpdCBwLmZldGNoKCksIC8vIFt7bmFtZSwgbGF0LCBsb24sIC4uLmV4dHJhfV1cclxuICAgIH0pKSxcclxuICApO1xyXG4gIGNvbnN0IFtzaXRlU2V0cywgcmVjZXB0b3JTZXRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgW2ZldGNoU2V0cyhjZmcuc2l0ZVByb3ZpZGVycyksIGZldGNoU2V0cyhjZmcucmVjZXB0b3JQcm92aWRlcnMpXSxcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbGF0LCBsb24sIGNvbWlkLCBzbmFwTmFtZSwgc25hcERpc3RNOiBzbmFwRCwgcml2ZXJOYW1lLFxyXG4gICAgcm93cywgZ2QsIHNpdGVTZXRzLCByZWNlcHRvclNldHMsXHJcbiAgICBhc09mOiBjZmcuYXNPZiB8fCBcImxpdmVcIixcclxuICAgIGZldGNoZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gIH07XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSm9ic29uIChVU0dTIFdSSVIgOTYtNDAxMylcclxuLy9cclxuLy8gRHllLXRyYWNlciByZWdyZXNzaW9ucyBmcm9tIH45ODAgc3VicmVhY2hlcyAvIH45MCBVUyByaXZlcnMuIFVuaXRzOiBEYSBtXjIsXHJcbi8vIFEgJiBRYSBtXjMvcywgUyBkaW1lbnNpb25sZXNzLCB2ZWxvY2l0aWVzIG0vcy4gRXEgMTIvMTMgKHdpdGggc2xvcGUpIG9yXHJcbi8vIDE0LzE1ICh3aXRob3V0KS4gTGVhZGluZyBlZGdlIFRsID0gMC44OTAgeCBUcCAoZXEgMTgpLiBQYXNzYWdlOiB1bml0LXBlYWtcclxuLy8gY29uY2VudHJhdGlvbiBDdXAgPSA4NTcgeCBUcF4tMC43NjAgeCBRJ2FeLTAuMDc5IChUcCBob3VycywgZXEgNyksIGFuZFxyXG4vLyBUZDEwID0gMmU2IC8gQ3VwIHNlY29uZHMgKGVxIDE5KSA9IGxlYWRpbmcgZWRnZSAtPiAxMCUtb2YtcGVhayB0cmFpbGluZy5cclxuZXhwb3J0IGZ1bmN0aW9uIGpvYnNvblZlbG9jaXRpZXMoZGFNMiwgUW0zcywgUWFNM3MsIHNsb3BlKSB7XHJcbiAgaWYgKCEoZGFNMiA+IDApIHx8ICEoUW0zcyA+IDApIHx8ICEoUWFNM3MgPiAwKSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgZyA9IDkuODtcclxuICBjb25zdCBEcCA9IChNYXRoLnBvdyhkYU0yLCAxLjI1KSAqIE1hdGguc3FydChnKSkgLyBRYU0zczsgLy8gRCdhLCBlcSAxMFxyXG4gIGNvbnN0IFFwID0gUW0zcyAvIFFhTTNzOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUSdhLCBlcSAxMVxyXG4gIGNvbnN0IHFPdmVyRGEgPSBRbTNzIC8gZGFNMjtcclxuICBsZXQgdnAsIHZtcDtcclxuICBpZiAoc2xvcGUgPiAwLjAwMDAxKSB7XHJcbiAgICBjb25zdCBYID0gTWF0aC5wb3coRHAsIDAuOTE5KSAqIE1hdGgucG93KFFwLCAtMC40NjkpICogTWF0aC5wb3coc2xvcGUsIDAuMTU5KSAqIHFPdmVyRGE7XHJcbiAgICB2cCA9IDAuMDk0ICsgMC4wMTQzICogWDsgICAvLyBlcSAxMlxyXG4gICAgdm1wID0gMC4yNSArIDAuMDIgKiBYOyAgICAgLy8gZXEgMTMgKDk5JSBlbnZlbG9wZSDDouKCrOKAnSBmYXN0ZXN0IHByb2JhYmxlKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBYID0gTWF0aC5wb3coRHAsIDAuODIxKSAqIE1hdGgucG93KFFwLCAtMC40NjUpICogcU92ZXJEYTtcclxuICAgIHZwID0gMC4wMjAgKyAwLjA1MSAqIFg7ICAgIC8vIGVxIDE0XHJcbiAgICB2bXAgPSAwLjIgKyAwLjA5MyAqIFg7ICAgICAvLyBlcSAxNVxyXG4gIH1cclxuICByZXR1cm4geyB2cCwgdm1wLCBxUHJpbWU6IFFwIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBqb2Jzb25QYXNzYWdlSG91cnModHBIb3VycywgcVByaW1lKSB7XHJcbiAgLy8gZXEgNyArIGVxIDE5OiBkdXJhdGlvbiBmcm9tIGxlYWRpbmcgZWRnZSB0byAxMCUtb2YtcGVhayB0cmFpbGluZyBlZGdlXHJcbiAgaWYgKCEodHBIb3VycyA+IDApIHx8ICEocVByaW1lID4gMCkpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGN1cCA9IDg1NyAqIE1hdGgucG93KHRwSG91cnMsIC0wLjc2MCkgKiBNYXRoLnBvdyhxUHJpbWUsIC0wLjA3OSk7IC8vIHNeLTFcclxuICByZXR1cm4gMmU2IC8gY3VwIC8gMzYwMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVUcmFjZShkYXRhLCBjb25maWcgPSB7fSkge1xyXG4gIGNvbnN0IGNmZyA9IHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9O1xyXG4gIGNvbnN0IGxvZyA9IGNmZy52ZXJib3NlID8gKC4uLmEpID0+IGNvbnNvbGUubG9nKC4uLmEpIDogKCkgPT4ge307XHJcbiAgY29uc3QgeyBjb21pZCwgcml2ZXJOYW1lLCByb3dzLCBnZCwgc2l0ZVNldHMsIHJlY2VwdG9yU2V0cyB9ID0gZGF0YTtcclxuICBjb25zdCBuID0gcm93cy5sZW5ndGg7XHJcblxyXG4gIC8vIDUuIGRpc2NoYXJnZTogaW50ZXJwb2xhdGUgYWxvbmcgdHJhY2VcclxuICAvLyBtb250aCBmb3IgRVJPTSBsb29rdXBzOiBhc19vZiBtb250aCBpZiBwaW5uZWQsIGVsc2UgY3VycmVudFxyXG4gIGNvbnN0IGVyb21Nb250aCA9IGRhdGEuYXNPZiAmJiBkYXRhLmFzT2YgIT09IFwibGl2ZVwiXHJcbiAgICA/IHBhcnNlSW50KGRhdGEuYXNPZi5zbGljZSg1LCA3KSwgMTApXHJcbiAgICA6IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDE7XHJcblxyXG4gIGxldCBxTWV0aG9kLCBxQ29uZmlkZW5jZTtcclxuICBjb25zdCBhbmNob3JlZCA9IGdkLnNvbWUoKGcpID0+IGcudXBzdHJlYW1fYW5jaG9yKTtcclxuICBsZXQgcUludGVycFVzZWQgPSBudWxsO1xyXG4gIGlmIChnZC5sZW5ndGggPj0gMikge1xyXG4gICAgY29uc3QgZGFRID0gY2ZnLnFJbnRlcnAgPT09IFwiZHJhaW5hZ2UtYXJlYVwiID8gZGFXZWlnaHRlZFEoZ2QpIDogbnVsbDtcclxuICAgIGlmIChkYVEpIHtcclxuICAgICAgLy8gaW50ZXJwb2xhdGUgb24gdGhlIHJ1bm5pbmctbWF4IERBOiBBcnRpZmljaWFsUGF0aC9kaXZlcmdlbmNlIHJlYWNoZXMgY2FuXHJcbiAgICAgIC8vIGNhcnJ5IDAvZGlwcGluZyB0b3RkYXNxa20sIHdoaWNoIG11c3Qgbm90IGNyYXRlciBRIG1pZC10cmFjZVxyXG4gICAgICBpZiAoZGFRLmtlcHQubGVuZ3RoIDwgZ2QubGVuZ3RoKVxyXG4gICAgICAgIGxvZyhgICBEQSBpbnRlcnA6IGRyb3BwZWQgJHtnZC5sZW5ndGggLSBkYVEua2VwdC5sZW5ndGh9IGdhdWdlKHMpIHdpdGggbm9uLW1vbm90b25pYyBOV0lTIERBYCk7XHJcbiAgICAgIGxldCBydW5NYXggPSAwO1xyXG4gICAgICBmb3IgKGNvbnN0IHIgb2Ygcm93cykge1xyXG4gICAgICAgIHJ1bk1heCA9IE1hdGgubWF4KHJ1bk1heCwgci5kcmFpbmFnZV9hcmVhX3NxbWkpO1xyXG4gICAgICAgIHIuUV9jZnMgPSBNYXRoLm1heChkYVEucShydW5NYXgpLCAxLjApO1xyXG4gICAgICB9XHJcbiAgICAgIHFNZXRob2QgPSBhbmNob3JlZCA/IFwiZ2F1Z2UtREEtaW50ZXJwb2xhdGlvbit1cHN0cmVhbS1hbmNob3JcIiA6IFwiZ2F1Z2UtREEtaW50ZXJwb2xhdGlvblwiO1xyXG4gICAgICBxSW50ZXJwVXNlZCA9IFwiZHJhaW5hZ2UtYXJlYVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGNmZy5xSW50ZXJwID09PSBcImRyYWluYWdlLWFyZWFcIilcclxuICAgICAgICBsb2coXCIgIERBIGludGVycCB1bmF2YWlsYWJsZSAoPDIgbW9ub3RvbmljIGdhdWdlIERBcykgw6LigqzigJ0gZmFsbGluZyBiYWNrIHRvIGRpc3RhbmNlIGludGVycG9sYXRpb25cIik7XHJcbiAgICAgIGNvbnN0IGZRID0gaW50ZXJwQ2xhbXBlZChnZC5tYXAoKGcpID0+IGcudHJhY2VfZGlzdCksIGdkLm1hcCgoZykgPT4gZy5kaXNjaGFyZ2UpKTtcclxuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHIuUV9jZnMgPSBNYXRoLm1heChmUShyLmN1bV9kaXN0KSwgMS4wKTtcclxuICAgICAgcU1ldGhvZCA9IGFuY2hvcmVkID8gXCJnYXVnZS1pbnRlcnBvbGF0aW9uK3Vwc3RyZWFtLWFuY2hvclwiIDogXCJnYXVnZS1pbnRlcnBvbGF0aW9uXCI7XHJcbiAgICAgIHFJbnRlcnBVc2VkID0gXCJkaXN0YW5jZVwiO1xyXG4gICAgfVxyXG4gICAgcUNvbmZpZGVuY2UgPSBcIkhJR0hcIjtcclxuICB9IGVsc2UgaWYgKGdkLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgY29uc3QgZyA9IGdkWzBdO1xyXG4gICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcclxuICAgICAgci5RX2NmcyA9IE1hdGgubWF4KGcuZGlzY2hhcmdlICogKHIuZHJhaW5hZ2VfYXJlYV9zcW1pIC8gZy5kcmFpbmFnZV9hcmVhKSwgMS4wKTtcclxuICAgIH1cclxuICAgIHFNZXRob2QgPSBhbmNob3JlZCA/IFwidXBzdHJlYW0tYW5jaG9yLURBLXJhdGlvXCIgOiBcInNpbmdsZS1nYXVnZS1EQS1yYXRpb1wiO1xyXG4gICAgcUNvbmZpZGVuY2UgPSBcIk1FRElVTVwiO1xyXG4gICAgbG9nKFwiICAxIGdhdWdlOiBzY2FsaW5nIGJ5IGRyYWluYWdlLWFyZWEgcmF0aW9cIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEVST00gcGVyLXJlYWNoIG1vbnRobHkgbW9kZWxlZCBmbG93IChnYXVnZS1hZGp1c3RlZDsgY2FwdHVyZXMgc2Vhc29uYWxcclxuICAgIC8vIHlpZWxkIMOi4oKs4oCdIE1vbnRhbmEgSnVuZSB2cyBTZXB0ZW1iZXIgZGlmZmVycyB+NXgpIGJlZm9yZSB0aGUgZmxhdCBjb25zdGFudFxyXG4gICAgY29uc3QgZXJvbU9rID0gcm93cy5maWx0ZXIoKHIpID0+IHIucWVfbW9udGhseSAmJiByLnFlX21vbnRobHlbZXJvbU1vbnRoXSA+IDApLmxlbmd0aDtcclxuICAgIGlmIChlcm9tT2sgPj0gcm93cy5sZW5ndGggKiAwLjgpIHtcclxuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcclxuICAgICAgICBjb25zdCBxZSA9IHIucWVfbW9udGhseSA/IHIucWVfbW9udGhseVtlcm9tTW9udGhdIDogbnVsbDtcclxuICAgICAgICByLlFfY2ZzID0gTWF0aC5tYXgocWUgPiAwID8gcWUgOiByLmRyYWluYWdlX2FyZWFfc3FtaSAqIDIuMCwgMS4wKTtcclxuICAgICAgfVxyXG4gICAgICBxTWV0aG9kID0gYGVyb20tbW9udGhseSAobW9udGggJHtlcm9tTW9udGh9KWA7IHFDb25maWRlbmNlID0gXCJNT0RFUkFURSDDouKCrOKAnSBtb2RlbGVkIGZsb3csIG5vIGxpdmUgZ2F1Z2VcIjtcclxuICAgICAgbG9nKGAgIE5PIGdhdWdlczogRVJPTSBtb250aGx5IG1vZGVsZWQgZmxvdyAobW9udGggJHtlcm9tTW9udGh9LCAke2Vyb21Pa30vJHtyb3dzLmxlbmd0aH0gcmVhY2hlcylgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAoY29uc3QgciBvZiByb3dzKSByLlFfY2ZzID0gTWF0aC5tYXgoci5kcmFpbmFnZV9hcmVhX3NxbWkgKiAyLjAsIDEuMCk7XHJcbiAgICAgIHFNZXRob2QgPSBcImRyYWluYWdlLWFyZWEtY29uc3RhbnRcIjsgcUNvbmZpZGVuY2UgPSBcIkxPVyBDT05GSURFTkNFIMOi4oKs4oCdIE5PIEdBVUdFXCI7XHJcbiAgICAgIGxvZyhcIiAgTk8gZ2F1Z2VzLCBubyBFUk9NOiBRIH4gMiBjZnMgcGVyIHNxIG1pIGRyYWluYWdlIMOi4oKs4oCdIExPVyBDT05GSURFTkNFXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gNC4gTWFubmluZydzIGRlcHRoIHBlciBwb2ludCAoZm9ybXVsYSBmYWxsYmFjayksIFYgPSBRL0EsIHNhZmV0eSBmYWN0b3IuXHJcbiAgLy8gQ29ycmlkb3Igcm93cyBtYXkgY2FycnkgYW4gYXV0aG9yZWQgZGVwdGhfb3ZlcnJpZGUgKHN1cnZleWVkL2NoYXJ0ZWRcclxuICAvLyBkZXB0aCDDouKCrOKAnSBlLmcuIHRpZGFsIHJlYWNoZXMgd2hlcmUgYW4gZW5lcmd5IHNsb3BlIGlzIG1lYW5pbmdsZXNzKS5cclxuICBjb25zdCBDRlNfVE9fTTNTID0gTWF0aC5wb3coMy4yODEsIDMpO1xyXG4gIGxldCBvayA9IDA7XHJcbiAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcclxuICAgIHIuUV9tM3MgPSByLlFfY2ZzIC8gQ0ZTX1RPX00zUztcclxuICAgIGNvbnN0IGRlcHRoRm9ybXVsYSA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oci5kcmFpbmFnZV9hcmVhX3NxbWkpWzFdO1xyXG4gICAgaWYgKHIuZGVwdGhfb3ZlcnJpZGUgPiAwKSB7IHIuZGVwdGggPSByLmRlcHRoX292ZXJyaWRlOyBvaysrOyByLmFyZWEgPSByLndpZHRoX2ZpbmFsICogci5kZXB0aDsgci52ZWxvY2l0eSA9IChyLlFfbTNzIC8gci5hcmVhKSAqIGNmZy5zYWZldHlGYWN0b3I7IGNvbnRpbnVlOyB9XHJcbiAgICBjb25zdCBkbSA9IGNhbGN1bGF0ZURlcHRoTWFubmluZyhyLlFfbTNzLCByLndpZHRoX2ZpbmFsLCByLnNsb3BlLCBjZmcubWFubmluZ04pO1xyXG4gICAgaWYgKGRtICE9PSBudWxsICYmIGRtID4gMC4xICYmIGRtIDwgMjApIHsgci5kZXB0aCA9IGRtOyBvaysrOyB9XHJcbiAgICBlbHNlIHIuZGVwdGggPSBkZXB0aEZvcm11bGE7XHJcbiAgICByLmFyZWEgPSByLndpZHRoX2ZpbmFsICogci5kZXB0aDtcclxuICAgIHIudmVsb2NpdHkgPSAoci5RX20zcyAvIHIuYXJlYSkgKiBjZmcuc2FmZXR5RmFjdG9yO1xyXG4gIH1cclxuICBsb2coYCAgTWFubmluZydzIGRlcHRoOiAke29rfS8ke259IHBvaW50cyAoJHtNYXRoLnJvdW5kKCgxMDAgKiBvaykgLyBuKX0lKWApO1xyXG5cclxuICAvLyA1LiBpbXBvdW5kbWVudCBydWxlOiBmbG93bGluZSBwYXNzZXMgdGhyb3VnaCBhIExha2VQb25kL1Jlc2Vydm9pciB3YXRlcmJvZHlcclxuICAvLyAobWludXMga25vd24gUkVNT1ZFRCBkYW1zIHdob3NlIHdhdGVyYm9keSBmbGFncyBsaW5nZXIgaW4gTkhEUGx1cylcclxuICBjb25zdCBleGNsdWRlZCA9IG5ldyBTZXQoWy4uLlJFTU9WRURfSU1QT1VORE1FTlRfQ09NSURTLCAuLi4oY2ZnLmltcG91bmRFeGNsdWRlQ29taWRzIHx8IFtdKV0pO1xyXG4gIGxldCBzdG9wSWR4ID0gbnVsbCwgcnVuTSA9IDAuMDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGltcCA9IChyb3dzW2ldLndiYXJlYXR5cGUgPT09IFwiTGFrZVBvbmRcIiB8fCByb3dzW2ldLndiYXJlYXR5cGUgPT09IFwiUmVzZXJ2b2lyXCIpICYmXHJcbiAgICAgICFleGNsdWRlZC5oYXMocm93c1tpXS5jb21pZCk7XHJcbiAgICByb3dzW2ldLmltcG91bmRlZCA9IGltcDtcclxuICAgIGlmIChpbXApIHtcclxuICAgICAgcnVuTSArPSByb3dzW2ldLmRpc3RhbmNlO1xyXG4gICAgICBpZiAocnVuTSA+PSBjZmcuaW1wb3VuZFN0b3BLbSAqIDEwMDApIHsgc3RvcElkeCA9IGk7IGJyZWFrOyB9XHJcbiAgICB9IGVsc2UgcnVuTSA9IDAuMDtcclxuICB9XHJcbiAgbGV0IGltcG91bmROb3RlID0gbnVsbDtcclxuICBsZXQgZGYgPSByb3dzO1xyXG4gIGlmIChzdG9wSWR4ICE9PSBudWxsKSB7XHJcbiAgICBjb25zdCBuYW1lID0gcm93c1tzdG9wSWR4XS5nbmlzX25hbWUgfHwgXCJpbXBvdW5kbWVudFwiO1xyXG4gICAgaW1wb3VuZE5vdGUgPVxyXG4gICAgICBgVHJhY2UgcmVhY2hlcyBhbiBpbXBvdW5kZWQgcmVhY2ggKCR7bmFtZX0pIGF0IGAgK1xyXG4gICAgICBgJHsocm93c1tzdG9wSWR4XS5jdW1fZGlzdCAvIDEwMDApLnRvRml4ZWQoMSl9IGttIMOi4oKs4oCdIHRyYXZlbCB0aW1lIGJleW9uZCBgICtcclxuICAgICAgYHRoaXMgcG9pbnQgaXMgTk9UIG1vZGVsZWQgKHJlc2Vydm9pciB0cmFuc2l0KS5gO1xyXG4gICAgZGYgPSByb3dzLnNsaWNlKDAsIHN0b3BJZHggKyAxKTtcclxuICAgIGxvZyhgICBJTVBPVU5ETUVOVCBTVE9QOiAke2ltcG91bmROb3RlfWApO1xyXG4gIH1cclxuXHJcbiAgLy8gNi4gdHJhdmVsIHRpbWUsIGN1dG9mZiwgaG91cmx5IG1hcmtlcnNcclxuICBjb25zdCBqb2Jzb24gPSBjZmcudGltaW5nTW9kZWwgPT09IFwiam9ic29uXCI7XHJcbiAgY29uc3QgQ0ZTID0gTWF0aC5wb3coMy4yODEsIDMpO1xyXG4gIGxldCBjdW1UID0gMC4wLCB0UGVhayA9IDAuMCwgdEZhc3QgPSAwLjAsIGpvYnNvbkRlZ3JhZGVkID0gMDtcclxuICBmb3IgKGNvbnN0IHIgb2YgZGYpIHtcclxuICAgIHIuc2VnX3RpbWUgPSByLmRpc3RhbmNlIC8gci52ZWxvY2l0eTtcclxuICAgIGN1bVQgKz0gci5zZWdfdGltZTtcclxuICAgIHIuY3VtX3RpbWUgPSBjdW1UIC8gMzYwMDsgLy8gaHlkcmF1bGljICh4IHNhZmV0eSkgw6LigqzigJ0gYWx3YXlzIGNvbXB1dGVkOyBmZWVkcyBsZWdhY3kgbW9kZVxyXG4gICAgaWYgKGpvYnNvbikge1xyXG4gICAgICBjb25zdCBkYU0yID0gKHIuZHJhaW5hZ2VfYXJlYV9rbTIgfHwgMCkgKiAxZTY7XHJcbiAgICAgIGNvbnN0IFFhTTNzID0gci5xZV9tYSA+IDAgPyByLnFlX21hIC8gQ0ZTIDogbnVsbDtcclxuICAgICAgY29uc3QganYgPSBRYU0zcyA/IGpvYnNvblZlbG9jaXRpZXMoZGFNMiwgci5RX20zcywgUWFNM3MsIHIuc2xvcGUpIDogbnVsbDtcclxuICAgICAgbGV0IHZwLCB2bXAsIHFQcmltZTtcclxuICAgICAgaWYgKGp2KSB7ICh7IHZwLCB2bXAsIHFQcmltZSB9ID0ganYpOyB9XHJcbiAgICAgIGVsc2UgeyB2cCA9IHIudmVsb2NpdHkgLyBjZmcuc2FmZXR5RmFjdG9yOyB2bXAgPSB2cCAqIDI7IHFQcmltZSA9IDE7IGpvYnNvbkRlZ3JhZGVkKys7IH1cclxuICAgICAgdFBlYWsgKz0gci5kaXN0YW5jZSAvIHZwO1xyXG4gICAgICB0RmFzdCArPSByLmRpc3RhbmNlIC8gdm1wO1xyXG4gICAgICByLnRfcGVhayA9IHRQZWFrIC8gMzYwMDtcclxuICAgICAgci50X2xlYWQgPSAwLjg5MCAqIHIudF9wZWFrOyAgICAgICAgICAgICAgLy8gZXEgMTggw6LigqzigJ0gbW9zdCBwcm9iYWJsZSBmaXJzdCBhcnJpdmFsXHJcbiAgICAgIHIudF9sZWFkX21pbiA9IDAuODkwICogKHRGYXN0IC8gMzYwMCk7ICAgIC8vIDk5JSBlbnZlbG9wZSDDouKCrOKAnSBlYXJsaWVzdCBjcmVkaWJsZSBhcnJpdmFsXHJcbiAgICAgIGNvbnN0IHRkMTAgPSBqb2Jzb25QYXNzYWdlSG91cnMoci50X3BlYWssIHFQcmltZSk7XHJcbiAgICAgIHIudF9jbGVhciA9IHRkMTAgIT09IG51bGwgPyByLnRfbGVhZCArIHRkMTAgOiBudWxsOyAvLyAxMCUtb2YtcGVhayB0cmFpbGluZyBlZGdlXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChqb2Jzb24gJiYgam9ic29uRGVncmFkZWQpIGxvZyhgICBKb2Jzb246ICR7am9ic29uRGVncmFkZWR9IHBvaW50cyBsYWNrZWQgRVJPTSBRYSAoaHlkcmF1bGljIGZhbGxiYWNrKWApO1xyXG4gIGNvbnN0IHRpbWVPZiA9IChyKSA9PiAoam9ic29uID8gci50X2xlYWQgOiByLmN1bV90aW1lKTtcclxuXHJcbiAgLy8gNmIuIHRpZGFsIGNvcnJpZG9yIG92ZXJyaWRlICh2MS44KTogcm93cyBmbGFnZ2VkIHRpZGFsIGdldCBGSVJTVC1QQVNTQUdFXHJcbiAgLy8gdGltZXMgZnJvbSBhIDEtRCBvc2NpbGxhdGluZyBmcm9udCAobmV0IGRyaWZ0ICsgcHJlZGljdGVkIHRpZGUpIGluc3RlYWQgb2ZcclxuICAvLyBzdGVhZHkgaW50ZWdyYXRpb24uIE5ldCB2ZWxvY2l0eSBjb21lcyBmcm9tIHRoZSBzdGVhZHkgdGltZSBHUkFESUVOVCwgc29cclxuICAvLyBpdCBpbmhlcml0cyBzYWZldHktZmFjdG9yL0pvYnNvbiBzZW1hbnRpY3MgZm9yIGVpdGhlciB0aW1pbmcgbW9kZWwuXHJcbiAgbGV0IHRpZGFsQXBwbGllZCA9IG51bGw7XHJcbiAgaWYgKGRhdGEudGlkYWwgJiYgZGF0YS50aWRhbC5zZXJpZXMubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBpMCA9IGRmLmZpbmRJbmRleCgocikgPT4gci50aWRhbCk7XHJcbiAgICBpZiAoaTAgIT09IC0xICYmIGRmLmxlbmd0aCA+IDEpIHtcclxuICAgICAgY29uc3QgdGQgPSBkYXRhLnRpZGFsO1xyXG4gICAgICBjb25zdCBncmFkVmVsID0gKHRGaWVsZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpc3QgPSBkZi5tYXAoKHIpID0+IHIuY3VtX2Rpc3QpO1xyXG4gICAgICAgIGNvbnN0IHNlZ1YgPSBuZXcgQXJyYXkoZGYubGVuZ3RoKS5maWxsKDAuMSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBkZi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgZHQgPSAoZGZbaV1bdEZpZWxkXSAtIGRmW2kgLSAxXVt0RmllbGRdKSAqIDM2MDA7XHJcbiAgICAgICAgICBzZWdWW2ldID0gZHQgPiAwID8gZGZbaV0uZGlzdGFuY2UgLyBkdCA6IHNlZ1ZbaSAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWdWWzBdID0gc2VnVlsxXSA/PyAwLjE7XHJcbiAgICAgICAgcmV0dXJuIChzKSA9PiB7XHJcbiAgICAgICAgICBpZiAocyA8PSBkaXN0WzBdKSByZXR1cm4gc2VnVlswXTtcclxuICAgICAgICAgIGlmIChzID49IGRpc3RbZGlzdC5sZW5ndGggLSAxXSkgcmV0dXJuIHNlZ1Zbc2VnVi5sZW5ndGggLSAxXTtcclxuICAgICAgICAgIGxldCBsbyA9IDAsIGhpID0gZGlzdC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgd2hpbGUgKGhpIC0gbG8gPiAxKSB7IGNvbnN0IG0gPSAobG8gKyBoaSkgPj4gMTsgaWYgKGRpc3RbbV0gPD0gcykgbG8gPSBtOyBlbHNlIGhpID0gbTsgfVxyXG4gICAgICAgICAgcmV0dXJuIHNlZ1ZbbG8gKyAxXTtcclxuICAgICAgICB9O1xyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCB1QXQgPSAoc2hpZnRNaW4sIHNjYWxlKSA9PiAoaHIpID0+IHtcclxuICAgICAgICBjb25zdCBbdV0gPSBvd1dpbmRBdCh0ZC5zZXJpZXMsIHRkLnQwTXMgKyAoaHIgKiA2MCArIHNoaWZ0TWluKSAqIDYwZTMpO1xyXG4gICAgICAgIHJldHVybiB1ICogc2NhbGU7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHRNYWluID0gam9ic29uID8gXCJ0X2xlYWRcIiA6IFwiY3VtX3RpbWVcIjtcclxuICAgICAgY29uc3QgZW50cnlIciA9IGkwID4gMCA/IGRmW2kwIC0gMV1bdE1haW5dIDogMDtcclxuICAgICAgY29uc3QgdGltZXMgPSB0aWRhbEZyb250VGltZXMoZGYsIGkwLCBlbnRyeUhyLCBncmFkVmVsKHRNYWluKSwgdUF0KDAsIDEpLCBjZmcubWF4SG91cnMpO1xyXG4gICAgICAvLyBlYXJsaWVzdC1jcmVkaWJsZSBlbnZlbG9wZTogdGlkZSBwaGFzZSBhZHZhbmNlZCBieSB0aGUgYXV0aG9yZWRcclxuICAgICAgLy8gdW5jZXJ0YWludHkgKyAxMCUgYW1wbGl0dWRlLCBlbnRlcmVkIGF0IHRoZSBmYXN0IHJpdmVyIHRpbWVcclxuICAgICAgY29uc3QgZW50cnlGYXN0SHIgPSBpMCA+IDAgPyAoam9ic29uID8gZGZbaTAgLSAxXS50X2xlYWRfbWluIDogZGZbaTAgLSAxXS5jdW1fdGltZSkgOiAwO1xyXG4gICAgICBjb25zdCB2RmFzdCA9IGpvYnNvbiA/IGdyYWRWZWwoXCJ0X2xlYWRfbWluXCIpIDogZ3JhZFZlbChcImN1bV90aW1lXCIpO1xyXG4gICAgICBjb25zdCB0aW1lc0Zhc3QgPSB0aWRhbEZyb250VGltZXMoZGYsIGkwLCBlbnRyeUZhc3RIciwgdkZhc3QsIHVBdCh0ZC5waGFzZV91bmNlcnRfbWluLCAxLjEpLCBjZmcubWF4SG91cnMpO1xyXG4gICAgICBmb3IgKGxldCBrID0gaTA7IGsgPCBkZi5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIGRmW2tdLmN1bV90aW1lID0gdGltZXNba107XHJcbiAgICAgICAgaWYgKGpvYnNvbikge1xyXG4gICAgICAgICAgZGZba10udF9wZWFrID0gdGltZXNba107XHJcbiAgICAgICAgICBkZltrXS50X2xlYWQgPSB0aW1lc1trXTtcclxuICAgICAgICAgIGRmW2tdLnRfbGVhZF9taW4gPSBNYXRoLm1pbih0aW1lc0Zhc3Rba10sIHRpbWVzW2tdKTtcclxuICAgICAgICAgIGRmW2tdLnRfY2xlYXIgPSBudWxsOyAvLyBKb2Jzb24gcGFzc2FnZSByZWdyZXNzaW9ucyBkb24ndCBhcHBseSB0byB0aWRhbCByZWFjaGVzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRpZGFsQXBwbGllZCA9IHtcclxuICAgICAgICBzdGF0aW9uX2NvZGU6IHRkLnN0YXRpb25fY29kZSwgc3RhdGlvbl9uYW1lOiB0ZC5zdGF0aW9uX25hbWUsXHJcbiAgICAgICAgdV9tYXhfbXM6IHRkLnVfbWF4X21zLCBwaGFzZV9sYWdfbWluOiB0ZC5waGFzZV9sYWdfbWluLFxyXG4gICAgICAgIHBoYXNlX3VuY2VydF9taW46IHRkLnBoYXNlX3VuY2VydF9taW4sIHNvdXJjZTogdGQuc291cmNlLFxyXG4gICAgICAgIHRpZGVfcG9pbnRzOiB0ZC5zZXJpZXMubGVuZ3RoLCBlbnRyeV9ocjogTWF0aC5yb3VuZChlbnRyeUhyICogMTAwKSAvIDEwMCxcclxuICAgICAgICByb3dzX3RpZGFsOiBkZi5sZW5ndGggLSBpMCxcclxuICAgICAgfTtcclxuICAgICAgbG9nKGAgIFRJREFMOiBmcm9udCBpbnRlZ3JhdGlvbiBmcm9tIHJvdyAke2kwfSAoZW50cnkgJHtlbnRyeUhyLnRvRml4ZWQoMil9IGgpLCBgICtcclxuICAgICAgICBgJHt0ZC5zdGF0aW9uX25hbWV9IHVfbWF4ICR7dGQudV9tYXhfbXN9IG0vc2ApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gd2hlcmUgKyB3aGVuIHRoZSBwbHVtZSBlbnRlcnMgdGhlIGltcG91bmRtZW50IMOi4oKs4oCdIHNlZWRzIHRoZSBvcGVuLXdhdGVyXHJcbiAgLy8gY29udGludWF0aW9uICh2MS43KS4gVGltaW5nIGZpZWxkcyBleGlzdCBvbiByb3dzW3N0b3BJZHhdIGJlY2F1c2UgZGYgd2FzXHJcbiAgLy8gc2xpY2VkIGZyb20gcm93cyAoc2hhcmVkIHJlZmVyZW5jZXMpIGJlZm9yZSB0aGUgdGltZSBjdXRvZmYgYmVsb3cuXHJcbiAgbGV0IGltcG91bmRTdG9wUG9pbnQgPSBudWxsO1xyXG4gIGlmIChzdG9wSWR4ICE9PSBudWxsKSB7XHJcbiAgICBjb25zdCBzciA9IHJvd3Nbc3RvcElkeF07XHJcbiAgICBjb25zdCBldGFTdG9wID0gdGltZU9mKHNyKTtcclxuICAgIGlmIChldGFTdG9wICE9PSB1bmRlZmluZWQgJiYgZXRhU3RvcCA8IGNmZy5tYXhIb3Vycykge1xyXG4gICAgICBpbXBvdW5kU3RvcFBvaW50ID0ge1xyXG4gICAgICAgIGxhdDogc3IubGF0LCBsb246IHNyLmxvbixcclxuICAgICAgICBldGFfaHI6IE1hdGgucm91bmQoZXRhU3RvcCAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgbmFtZTogc3IuZ25pc19uYW1lIHx8IFwiaW1wb3VuZG1lbnRcIixcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbiAgZGYgPSBkZi5maWx0ZXIoKHIpID0+IHRpbWVPZihyKSA8IGNmZy5tYXhIb3Vycyk7XHJcbiAgY29uc3QgbWF4Q3VtVGltZSA9IGRmLmxlbmd0aCA/IHRpbWVPZihkZltkZi5sZW5ndGggLSAxXSkgOiAwO1xyXG4gIGNvbnN0IG5lYXJlc3RSb3cgPSAoZmllbGQsIHRhcmdldCkgPT4ge1xyXG4gICAgbGV0IGJlc3REID0gSW5maW5pdHksIGkgPSAwO1xyXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBkZi5sZW5ndGg7IGsrKykge1xyXG4gICAgICBjb25zdCBkID0gTWF0aC5hYnMoZGZba11bZmllbGRdIC0gdGFyZ2V0KTtcclxuICAgICAgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGkgPSBrOyB9IC8vIGZpcnN0IG9jY3VycmVuY2Ugb2YgbWluIChwYW5kYXMgaWR4bWluKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGk7XHJcbiAgfTtcclxuICBjb25zdCBob3VybHkgPSBbXTtcclxuICBmb3IgKGxldCBob3VyID0gMTsgaG91ciA8PSBjZmcubWF4SG91cnM7IGhvdXIrKykge1xyXG4gICAgaWYgKG1heEN1bVRpbWUgPCBob3VyICYmIE1hdGguYWJzKG1heEN1bVRpbWUgLSBob3VyKSA+IDAuNSkgYnJlYWs7XHJcbiAgICBjb25zdCBpID0gbmVhcmVzdFJvdyhqb2Jzb24gPyBcInRfbGVhZFwiIDogXCJjdW1fdGltZVwiLCBob3VyKTtcclxuICAgIGNvbnN0IGggPSB7XHJcbiAgICAgIGhvdXIsXHJcbiAgICAgIGxhdDogZGZbaV0ubGF0LCBsb246IGRmW2ldLmxvbixcclxuICAgICAgY3VtX2Rpc3Rfa206IGRmW2ldLmN1bV9kaXN0IC8gMTAwMCxcclxuICAgICAgdmVsb2NpdHlfbXBoOiBkZltpXS52ZWxvY2l0eSAqIDIuMjM2OTQsXHJcbiAgICB9O1xyXG4gICAgaWYgKGpvYnNvbikge1xyXG4gICAgICAvLyBiYW5kIGF0IHRoaXMgaG91cjogYnVsayAocGVhaykgcG9zaXRpb24gLi4gZmFydGhlc3QgY3JlZGlibGUgKDk5JSBsZWFkaW5nKVxyXG4gICAgICBjb25zdCBpUGVhayA9IG5lYXJlc3RSb3coXCJ0X3BlYWtcIiwgaG91cik7XHJcbiAgICAgIGNvbnN0IGlGYXIgPSBuZWFyZXN0Um93KFwidF9sZWFkX21pblwiLCBob3VyKTtcclxuICAgICAgaC5iYW5kID0ge1xyXG4gICAgICAgIHBlYWs6IHsgaTogaVBlYWssIGxhdDogZGZbaVBlYWtdLmxhdCwgbG9uOiBkZltpUGVha10ubG9uLCBjdW1fZGlzdF9rbTogZGZbaVBlYWtdLmN1bV9kaXN0IC8gMTAwMCB9LFxyXG4gICAgICAgIGZhc3Rlc3Q6IHsgaTogaUZhciwgbGF0OiBkZltpRmFyXS5sYXQsIGxvbjogZGZbaUZhcl0ubG9uLCBjdW1fZGlzdF9rbTogZGZbaUZhcl0uY3VtX2Rpc3QgLyAxMDAwIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBob3VybHkucHVzaChoKTtcclxuICB9XHJcblxyXG4gIC8vIDcuIHNpdGUgRVRBcyArIHJlY2VwdG9yIHdhcm5pbmdzIChuZWFyZXN0IHRyYWNlIHBvaW50IHdpdGhpbiBidWZmZXIpO1xyXG4gIC8vIGZlYXR1cmVzIHdlcmUgcHJlLWZldGNoZWQgaW50byBkYXRhLnNpdGVTZXRzL3JlY2VwdG9yU2V0c1xyXG4gIGZ1bmN0aW9uIHByb3hpbWl0eShzZXQpIHtcclxuICAgIGNvbnN0IGZlYXRzID0gc2V0LmZlYXRzOyAvLyBbe25hbWUsIGxhdCwgbG9uLCAuLi5leHRyYX1dXHJcbiAgICBjb25zdCBidWYgPSBzZXQuYnVmZmVyX20gPz8gNDAwO1xyXG4gICAgY29uc3Qgb3V0ID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGYgb2YgZmVhdHMpIHtcclxuICAgICAgaWYgKGYubGF0ID09PSB1bmRlZmluZWQgfHwgZi5sb24gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgIGxldCBiZXN0RCA9IEluZmluaXR5LCBpID0gMDtcclxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBkZi5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmVNKGRmW2tdLmxhdCwgZGZba10ubG9uLCBmLmxhdCwgZi5sb24pO1xyXG4gICAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBpID0gazsgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChiZXN0RCA8PSBidWYpIHtcclxuICAgICAgICBjb25zdCB7IGxhdDogX2EsIGxvbjogX2IsIC4uLnJlc3QgfSA9IGY7XHJcbiAgICAgICAgY29uc3Qgcm93ID0ge1xyXG4gICAgICAgICAgLi4ucmVzdCxcclxuICAgICAgICAgIGV0YV9ocjogTWF0aC5yb3VuZCh0aW1lT2YoZGZbaV0pICogMTAwKSAvIDEwMCxcclxuICAgICAgICAgIGRpc3Rfa206IE1hdGgucm91bmQoKGRmW2ldLmN1bV9kaXN0IC8gMTAwMCkgKiAxMCkgLyAxMCxcclxuICAgICAgICAgIG9mZnNldF9tOiBNYXRoLnJvdW5kKGJlc3REKSxcclxuICAgICAgICAgIC8vIG1vZGVsZWQgaHlkcmF1bGljcyBhdCB0aGUgc2l0ZSdzIHRyYWNlIHBvaW50IMOi4oKs4oCdIGZlZWRzIGJvb20gc2l6aW5nXHJcbiAgICAgICAgICByaXZlcl93aWR0aF9tOiBNYXRoLnJvdW5kKGRmW2ldLndpZHRoX2ZpbmFsICogMTApIC8gMTAsXHJcbiAgICAgICAgICB2ZWxvY2l0eV9tczogTWF0aC5yb3VuZChkZltpXS52ZWxvY2l0eSAqIDEwMDApIC8gMTAwMCxcclxuICAgICAgICAgIGRlcHRoX206IE1hdGgucm91bmQoZGZbaV0uZGVwdGggKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGpvYnNvbikge1xyXG4gICAgICAgICAgcm93LmV0YV9lYXJseV9ociA9IE1hdGgucm91bmQoZGZbaV0udF9sZWFkX21pbiAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICByb3cuZXRhX3BlYWtfaHIgPSBNYXRoLnJvdW5kKGRmW2ldLnRfcGVhayAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICByb3cuY2xlYXJfaHIgPSBkZltpXS50X2NsZWFyICE9PSBudWxsID8gTWF0aC5yb3VuZChkZltpXS50X2NsZWFyICogMTAwKSAvIDEwMCA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dC5wdXNoKHJvdyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG91dC5zb3J0KChhLCBiKSA9PiBhLmV0YV9ociAtIGIuZXRhX2hyKTtcclxuICAgIHJldHVybiBvdXQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaXRlcyA9IFtdO1xyXG4gIGZvciAoY29uc3QgcyBvZiBzaXRlU2V0cyB8fCBbXSkgc2l0ZXMucHVzaCguLi5wcm94aW1pdHkocykpO1xyXG4gIHNpdGVzLnNvcnQoKGEsIGIpID0+IGEuZXRhX2hyIC0gYi5ldGFfaHIpO1xyXG4gIGNvbnN0IHdhcm5pbmdzID0gaW1wb3VuZE5vdGUgPyBbaW1wb3VuZE5vdGVdIDogW107XHJcbiAgaWYgKHRpZGFsQXBwbGllZCkge1xyXG4gICAgd2FybmluZ3MudW5zaGlmdChcclxuICAgICAgYFRpZGFsIHJlYWNoIE1PREVMRUQgd2l0aCBwcmVkaWN0ZWQgdGlkZSBhdCAke3RpZGFsQXBwbGllZC5zdGF0aW9uX25hbWV9IGAgK1xyXG4gICAgICBgKGF1dGhvcmVkIGFtcGxpdHVkZSAke3RpZGFsQXBwbGllZC51X21heF9tc30gbS9zKTogRVRBcyBhcmUgRklSU1QgQVJSSVZBTCBvZiBhbiBvc2NpbGxhdGluZyBgICtcclxuICAgICAgYGZyb250IMOi4oKs4oCdIHByb2R1Y3QgcmUtY3Jvc3NlcyBzaXRlcyBvbiBsYXRlciBjeWNsZXM7IHBoYXNlIHVuY2VydGFpbnR5IMOCwrEke3RpZGFsQXBwbGllZC5waGFzZV91bmNlcnRfbWlufSBtaW4uYCk7XHJcbiAgfVxyXG4gIC8vIGNvcnJpZG9yIG1vZGU6IGF1dGhvcmVkIHdhcm5pbmdzICh0aWRhbCByZWFjaCwgbm8tbGl2ZS1nYXVnZSwgYXJtIHNwbGl0cylcclxuICAvLyArIGRvd25ncmFkZSBjb25maWRlbmNlIHdoZW4gYW55IGZsb3cgaW5wdXQgaXMgYSBoaXN0b3JpY2FsIG1lZGlhblxyXG4gIGlmIChnZC5zb21lKChnKSA9PiBnLnFfc291cmNlID09PSBcIm1vbnRobHktbWVkaWFuXCIpICYmIHFDb25maWRlbmNlID09PSBcIkhJR0hcIikge1xyXG4gICAgcUNvbmZpZGVuY2UgPSBcIk1PREVSQVRFIMOi4oKs4oCdIGluY2x1ZGVzIGhpc3RvcmljYWwtbWVkaWFuIGZsb3cgKG5vIGxpdmUgZ2F1Z2UpXCI7XHJcbiAgfVxyXG4gIGZvciAoY29uc3QgdyBvZiBkYXRhLmNvcnJpZG9yV2FybmluZ3MgfHwgW10pIHdhcm5pbmdzLnB1c2godyk7XHJcbiAgaWYgKHFDb25maWRlbmNlICE9PSBcIkhJR0hcIikgd2FybmluZ3MudW5zaGlmdChgRmxvdyBlc3RpbWF0ZTogJHtxQ29uZmlkZW5jZX0gKCR7cU1ldGhvZH0pYCk7XHJcbiAge1xyXG4gICAgY29uc3Qgc3RhdEcgPSBnZC5maWx0ZXIoKGcpID0+IGcucV9zb3VyY2UgPT09IFwic3RhdC1wNTBcIik7XHJcbiAgICBpZiAoc3RhdEcubGVuZ3RoKSB7XHJcbiAgICAgIHdhcm5pbmdzLnVuc2hpZnQoXHJcbiAgICAgICAgYEdhdWdlIGZlZWQgZG93bjogJHtzdGF0Ry5tYXAoKGcpID0+IGcuc3RhdGlvbl9pZCkuam9pbihcIiwgXCIpfSB1c2luZyBgICtcclxuICAgICAgICBgcGVyaW9kLW9mLXJlY29yZCBNRURJQU4gZmxvdyBmb3IgdGhpcyBkYXRlIMOi4oKs4oCdIE5PVCBsaXZlIGNvbmRpdGlvbnNgLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKGNvbnN0IHMgb2YgcmVjZXB0b3JTZXRzIHx8IFtdKSB7XHJcbiAgICBmb3IgKGNvbnN0IHIgb2YgcHJveGltaXR5KHMpKSB7XHJcbiAgICAgIHdhcm5pbmdzLnB1c2goXHJcbiAgICAgICAgYFJlY2VwdG9yICcke3IubmFtZX0nIH4ke3Iub2Zmc2V0X219IG0gb2ZmIHRyYWNlIGF0IGhyICR7ci5ldGFfaHJ9ICgke3IuZGlzdF9rbX0ga20gZG93bnN0cmVhbSlgLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlzdGFuY2VLbSA9IGRmLmxlbmd0aCA/IGRmW2RmLmxlbmd0aCAtIDFdLmN1bV9kaXN0IC8gMTAwMCA6IDA7XHJcbiAgY29uc3QgYXZnVmVsID0gZGYubGVuZ3RoID8gZGYucmVkdWNlKChzLCByKSA9PiBzICsgci52ZWxvY2l0eSwgMCkgLyBkZi5sZW5ndGggOiAwO1xyXG4gIGNvbnN0IGdsb3dNYXRjaGVkID0gcm93cy5maWx0ZXIoKHIpID0+IHIud2lkdGhfbSA+IDApLmxlbmd0aDtcclxuICBjb25zdCBicmFpZGVkTiA9IHJvd3MuZmlsdGVyKChyKSA9PiByLmJyYWlkZWQpLmxlbmd0aDtcclxuXHJcbiAgLy8gcHJvdmVuYW5jZSDDouKCrOKAnSBlbm91Z2ggdG8gcmVjb25zdHJ1Y3QgYW55IG91dHB1dCBpbiBhbiBhZnRlci1hY3Rpb24gcmV2aWV3XHJcbiAgY29uc3QgcnVuUmVjb3JkID0ge1xyXG4gICAgZW5naW5lX3ZlcnNpb246IEVOR0lORV9WRVJTSU9OLFxyXG4gICAgZ2VuZXJhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICBkYXRhX2ZldGNoZWRfYXQ6IGRhdGEuZmV0Y2hlZEF0IHx8IG51bGwsXHJcbiAgICBzcGlsbF9wb2ludDogeyBsYXQ6IGRhdGEubGF0LCBsb246IGRhdGEubG9uIH0sXHJcbiAgICBzbmFwOiB7IGNvbWlkLCByaXZlcjogcml2ZXJOYW1lLCBzbmFwcGVkX2Zyb21fbTogZGF0YS5zbmFwRGlzdE0gIT09IHVuZGVmaW5lZCA/IE1hdGgucm91bmQoZGF0YS5zbmFwRGlzdE0gfHwgMCkgOiBudWxsIH0sXHJcbiAgICB0aW1pbmdfbW9kZWw6IGNmZy50aW1pbmdNb2RlbCxcclxuICAgIHNhZmV0eV9mYWN0b3I6IGNmZy5zYWZldHlGYWN0b3IsXHJcbiAgICBtYXhfaG91cnM6IGNmZy5tYXhIb3VycyxcclxuICAgIGFzX29mOiBkYXRhLmFzT2YgfHwgXCJsaXZlXCIsXHJcbiAgICBxX21ldGhvZDogcU1ldGhvZCxcclxuICAgIHFfY29uZmlkZW5jZTogcUNvbmZpZGVuY2UsXHJcbiAgICBxX2ludGVycDogcUludGVycFVzZWQsXHJcbiAgICBnYXVnZXM6IGdkLm1hcCgoZykgPT4gKHtcclxuICAgICAgc3RhdGlvbl9pZDogZy5zdGF0aW9uX2lkLCBuYW1lOiBnLm5hbWUsIGRpc2NoYXJnZV9jZnM6IGcuZGlzY2hhcmdlLCB0cmFjZV9rbTogTWF0aC5yb3VuZChnLnRyYWNlX2Rpc3QgLyAxMDApIC8gMTAsXHJcbiAgICAgIHFfc291cmNlOiBnLnFfc291cmNlIHx8IFwiaXZcIixcclxuICAgICAgLi4uKGcudXBzdHJlYW1fYW5jaG9yID8ge1xyXG4gICAgICAgIHVwc3RyZWFtX2FuY2hvcjogdHJ1ZSxcclxuICAgICAgICBhbmNob3JfZ2F1Z2VfcV9jZnM6IGcuYW5jaG9yX2dhdWdlX3FfY2ZzLFxyXG4gICAgICAgIGFuY2hvcl9nYXVnZV9kYV9zcW1pOiBnLmFuY2hvcl9nYXVnZV9kYV9zcW1pLFxyXG4gICAgICAgIGFuY2hvcl91cHN0cmVhbV9rbTogZy5hbmNob3JfdXBzdHJlYW1fbSAhPT0gbnVsbCA/IE1hdGgucm91bmQoZy5hbmNob3JfdXBzdHJlYW1fbSAvIDEwMCkgLyAxMCA6IG51bGwsXHJcbiAgICAgIH0gOiB7fSksXHJcbiAgICB9KSksXHJcbiAgICBlcm9tX21vbnRoOiBxTWV0aG9kLnN0YXJ0c1dpdGgoXCJlcm9tXCIpID8gZXJvbU1vbnRoIDogbnVsbCxcclxuICAgIHdpZHRoX3NvdXJjZTogeyBnbG93X21hdGNoZWRfcG9pbnRzOiBnbG93TWF0Y2hlZCwgdG90YWxfcG9pbnRzOiByb3dzLmxlbmd0aCwgYnJhaWRlZF9wb2ludHNfZm9ybXVsYV93aWR0aDogYnJhaWRlZE4gfSxcclxuICAgIGpvYnNvbl9kZWdyYWRlZF9wb2ludHM6IGpvYnNvbiA/IGpvYnNvbkRlZ3JhZGVkIDogbnVsbCxcclxuICAgIGltcG91bmRfZXhjbHVzaW9uc19hcHBsaWVkOiBbLi4uZXhjbHVkZWRdLmZpbHRlcigoYykgPT4gcm93cy5zb21lKChyKSA9PiByLmNvbWlkID09PSBjKSksXHJcbiAgICBpbXBvdW5kX3N0b3Bfa206IHN0b3BJZHggIT09IG51bGwgPyBNYXRoLnJvdW5kKHJvd3Nbc3RvcElkeF0uY3VtX2Rpc3QgLyAxMDApIC8gMTAgOiBudWxsLFxyXG4gICAgY29ycmlkb3I6IGRhdGEuY29ycmlkb3JNZXRhIHx8IG51bGwsXHJcbiAgICB0aWRhbDogdGlkYWxBcHBsaWVkLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgIG1vZGU6IFwicml2ZXJcIixcclxuICAgIHJpdmVyX25hbWU6IHJpdmVyTmFtZSxcclxuICAgIGNvbWlkLFxyXG4gICAgYXNfb2Y6IGRhdGEuYXNPZiB8fCBcImxpdmVcIixcclxuICAgIHNhZmV0eV9mYWN0b3I6IGNmZy5zYWZldHlGYWN0b3IsXHJcbiAgICB0aW1pbmdfbW9kZWw6IGNmZy50aW1pbmdNb2RlbCxcclxuICAgIHFfbWV0aG9kOiBxTWV0aG9kLFxyXG4gICAgcV9jb25maWRlbmNlOiBxQ29uZmlkZW5jZSxcclxuICAgIGdhdWdlc191c2VkOiBnZC5tYXAoKGcpID0+ICh7XHJcbiAgICAgIHN0YXRpb25faWQ6IGcuc3RhdGlvbl9pZCwgbmFtZTogZy5uYW1lLFxyXG4gICAgICBkaXNjaGFyZ2U6IGcuZGlzY2hhcmdlLCB0cmFjZV9kaXN0OiBnLnRyYWNlX2Rpc3QsXHJcbiAgICB9KSksXHJcbiAgICBkaXN0YW5jZV9rbV8yNGg6IGRpc3RhbmNlS20sXHJcbiAgICBhdmdfdmVsb2NpdHlfbXBoOiBhdmdWZWwgKiAyLjIzNjk0LFxyXG4gICAgaW1wb3VuZF9zdG9wOiBpbXBvdW5kTm90ZSxcclxuICAgIGltcG91bmRfc3RvcF9wb2ludDogaW1wb3VuZFN0b3BQb2ludCxcclxuICAgIGhvdXJseSxcclxuICAgIHNpdGVzLFxyXG4gICAgd2FybmluZ3MsXHJcbiAgICBydW5SZWNvcmQsXHJcbiAgICB0cmFjZTogZGYsIC8vIGZ1bGwgcm93IGFycmF5IGZvciBpbnNwZWN0aW9uL2dlb2pzb24gZXhwb3J0XHJcbiAgfTtcclxuICBsb2coXHJcbiAgICBgICBSRVNVTFQ6ICR7ZGlzdGFuY2VLbS50b0ZpeGVkKDEpfSBrbSBpbiA8PSAke2NmZy5tYXhIb3Vyc30gaCwgYCArXHJcbiAgICBgYXZnICR7cmVzdWx0LmF2Z192ZWxvY2l0eV9tcGgudG9GaXhlZCgyKX0gbXBoLCAke3NpdGVzLmxlbmd0aH0gc2l0ZXMsICR7d2FybmluZ3MubGVuZ3RofSB3YXJuaW5nc2AsXHJcbiAgKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogV2hpY2ggbW9kZWwgZG9lcyBhIGNsaWNrIGdldD8gJ29wZW4td2F0ZXInIHdoZW4gdGhlIHBvaW50IHNpdHMgaW5zaWRlIGFcclxuICogbGFrZS9yZXNlcnZvaXIgcG9seWdvbiAoPj0gbWluTGFrZVNxS20pIMOi4oKs4oCdIFVOTEVTUyBhIG5vbi1pbXBvdW5kZWQgcmVhY2ggaXNcclxuICogbmVhcmJ5IChkYW0gdGFpbHJhY2VzIHNpdCBpbnNpZGUgcmVzZXJ2b2lyIHBvbHlnb25zOyB0aGF0IGNsaWNrIG1lYW5zIHRoZVxyXG4gKiByaXZlciBiZWxvdyB0aGUgZGFtKS4gUmV0dXJucyB7IG1vZGUsIHdhdGVyYm9keT8gfSDDouKCrOKAnSB0aGUgd2F0ZXJib2R5IGlzXHJcbiAqIHBhc3NlZCBvbiBzbyB0aGUgb3Blbi13YXRlciBmZXRjaCBza2lwcyBhIGR1cGxpY2F0ZSBQSVAgcXVlcnkuXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZVRyYWNlTW9kZShsYXQsIGxvbiwgY29uZmlnID0ge30pIHtcclxuICBjb25zdCBvdyA9IHsgLi4uREVGQVVMVF9PUEVOV0FURVIsIC4uLihjb25maWcub3BlbldhdGVyIHx8IHt9KSB9O1xyXG4gIGlmICghb3cuZW5hYmxlZCkgcmV0dXJuIHsgbW9kZTogXCJyaXZlclwiIH07XHJcbiAgY29uc3Qgd2IgPSBhd2FpdCBxdWVyeVdhdGVyYm9keShsYXQsIGxvbiwgY29uZmlnKTtcclxuICBpZiAoIXdiIHx8ICFpc09wZW5XYXRlckJvZHkod2IpIHx8ICEod2IuYXJlYV9zcWttID49IG93Lm1pbkxha2VTcUttKSkgcmV0dXJuIHsgbW9kZTogXCJyaXZlclwiIH07XHJcbiAgY29uc3QgY2ZnID0geyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH07XHJcbiAgdHJ5IHtcclxuICAgIGlmIChhd2FpdCBuZWFyUml2ZXJSZWFjaChsYXQsIGxvbiwgY2ZnLm1pblN0cmVhbU9yZGVyLCBvdy5yaXZlck92ZXJyaWRlTSkpIHtcclxuICAgICAgcmV0dXJuIHsgbW9kZTogXCJyaXZlclwiLCB3YXRlcmJvZHk6IHdiIH07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCB7IC8qIHRpZWJyZWFrIHVuYXZhaWxhYmxlIMOi4oCg4oCZIG9wZW4gd2F0ZXIgKHRoZSBQSVAgaGl0IHN0YW5kcykgKi8gfVxyXG4gIHJldHVybiB7IG1vZGU6IFwib3Blbi13YXRlclwiLCB3YXRlcmJvZHk6IHdiIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5UcmFjZShsYXQsIGxvbiwgY29uZmlnID0ge30pIHtcclxuICBjb25zdCBvdyA9IHsgLi4uREVGQVVMVF9PUEVOV0FURVIsIC4uLihjb25maWcub3BlbldhdGVyIHx8IHt9KSB9O1xyXG4gIGNvbnN0IGRpc3AgPSBhd2FpdCByZXNvbHZlVHJhY2VNb2RlKGxhdCwgbG9uLCBjb25maWcpO1xyXG4gIGlmIChkaXNwLm1vZGUgPT09IFwib3Blbi13YXRlclwiKSByZXR1cm4gcnVuT3BlbldhdGVyKGxhdCwgbG9uLCBjb25maWcsIGRpc3Aud2F0ZXJib2R5KTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hUcmFjZURhdGEobGF0LCBsb24sIGNvbmZpZyk7XHJcbiAgY29uc3QgcmVzdWx0ID0gY29tcHV0ZVRyYWNlKGRhdGEsIGNvbmZpZyk7XHJcbiAgaWYgKG93LmVuYWJsZWQgJiYgb3cuY29udGludWVBdEltcG91bmRtZW50ICYmIHJlc3VsdC5pbXBvdW5kX3N0b3BfcG9pbnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJlc3VsdC5vcGVuX3dhdGVyID0gYXdhaXQgcnVuT3BlbldhdGVyQ29udGludWF0aW9uKHJlc3VsdCwgY29uZmlnKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmVzdWx0Lndhcm5pbmdzLnB1c2goYE9wZW4td2F0ZXIgY29udGludWF0aW9uIHVuYXZhaWxhYmxlOiAke2UubWVzc2FnZSB8fCBlfWApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogQm9vbSBzaXppbmcgZnJvbSBtb2RlbGVkIGh5ZHJhdWxpY3MgKHBsYW5uaW5nLWxldmVsLCBmb3IgR1JQcyB0aGF0IGNhcnJ5IG5vXHJcbiAqIGVxdWlwbWVudCBxdWFudGl0aWVzKS4gU3RhbmRhcmQgY29udGFpbm1lbnQgcnVsZTogb2lsIGVudHJhaW5zIHVuZGVyIGEgYm9vbVxyXG4gKiB3aGVuIHRoZSBmbG93IGNvbXBvbmVudCBub3JtYWwgdG8gaXQgZXhjZWVkcyB+MC4zNSBtL3MgKDAuNyBrdCksIHNvIGluXHJcbiAqIGZhc3RlciB3YXRlciB0aGUgYm9vbSBpcyBhbmdsZWQgd2l0aCBzaW4odGhldGEpID0gZW50cmFpbm1lbnQvdmVsb2NpdHkgYW5kXHJcbiAqIHRoZSByZXF1aXJlZCBsZW5ndGggZ3Jvd3MgdG8gd2lkdGgvc2luKHRoZXRhKS4gQW5jaG9yIHNldHMgZnJvbSBsZW5ndGguXHJcbiAqIEFuZ2xlcyBiZWxvdyB+MTUgZGVnICh2ID4gfjEuMzUgbS9zKSBhcmUgZmxhZ2dlZDogdXNlIGNhc2NhZGVkIHNob3J0ZXIgYm9vbXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXN0aW1hdGVCb29tTmVlZHMod2lkdGhNLCB2ZWxvY2l0eU1zLCBvcHRzID0ge30pIHtcclxuICBjb25zdCBlbnRyYWluID0gb3B0cy5lbnRyYWlubWVudE1zID8/IDAuMzU7XHJcbiAgY29uc3QgcmVzZXJ2ZVBjdCA9IG9wdHMucmVzZXJ2ZVBjdCA/PyAyMDtcclxuICBjb25zdCBhbmNob3JTcGFjaW5nRnQgPSBvcHRzLmFuY2hvclNwYWNpbmdGdCA/PyAxMDA7XHJcbiAgaWYgKCEod2lkdGhNID4gMCkgfHwgISh2ZWxvY2l0eU1zID49IDApKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBzaW5UaGV0YSA9IHZlbG9jaXR5TXMgPiBlbnRyYWluID8gZW50cmFpbiAvIHZlbG9jaXR5TXMgOiAxO1xyXG4gIGNvbnN0IGFuZ2xlRGVnID0gKE1hdGguYXNpbihzaW5UaGV0YSkgKiAxODApIC8gTWF0aC5QSTtcclxuICBjb25zdCBsZW5ndGhGdCA9ICh3aWR0aE0gLyBzaW5UaGV0YSkgKiAzLjI4MDg0ICogKDEgKyByZXNlcnZlUGN0IC8gMTAwKTtcclxuICBjb25zdCBib29tRnQgPSBNYXRoLmNlaWwobGVuZ3RoRnQgLyA1MCkgKiA1MDsgLy8gcm91bmQgdXAgdG8gNTAtZnQgc3RpY2tzXHJcbiAgY29uc3QgYW5jaG9ycyA9IE1hdGgubWF4KDIsIE1hdGguY2VpbChib29tRnQgLyBhbmNob3JTcGFjaW5nRnQpICsgMSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGJvb21fZnQ6IGJvb21GdCxcclxuICAgIGJvb21fYW5nbGVfZGVnOiBNYXRoLnJvdW5kKGFuZ2xlRGVnKSxcclxuICAgIGFuY2hvcnMsXHJcbiAgICBkZWZsZWN0aW9uOiB2ZWxvY2l0eU1zID4gZW50cmFpbixcclxuICAgIGNhc2NhZGVfYWR2aXNlZDogYW5nbGVEZWcgPCAxNSwgLy8gdG9vIGZhc3QgZm9yIGEgc2luZ2xlIHN3ZWVwIMOi4oKs4oCdIGNhc2NhZGUgYm9vbXNcclxuICB9O1xyXG59XHJcblxyXG4vKiogVHJhY2UgbGluZSArIGhvdXJseSBtYXJrZXJzIGFzIGEgR2VvSlNPTiBGZWF0dXJlQ29sbGVjdGlvbiAod2lkZ2V0IHByZXZpZXcpLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9HZW9Kc29uKHJlc3VsdCkge1xyXG4gIGNvbnN0IGRmID0gcmVzdWx0LnRyYWNlO1xyXG4gIGNvbnN0IGZjID0ge1xyXG4gICAgdHlwZTogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxyXG4gICAgZmVhdHVyZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgIGtpbmQ6IFwidHJhY2VcIiwgcml2ZXI6IHJlc3VsdC5yaXZlcl9uYW1lLFxyXG4gICAgICAgICAgZGlzdGFuY2Vfa21fMjRoOiByZXN1bHQuZGlzdGFuY2Vfa21fMjRoLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxyXG4gICAgICAgICAgY29vcmRpbmF0ZXM6IGRmLm1hcCgocikgPT4gW1xyXG4gICAgICAgICAgICBNYXRoLnJvdW5kKHIubG9uICogMWU2KSAvIDFlNiwgTWF0aC5yb3VuZChyLmxhdCAqIDFlNikgLyAxZTYsXHJcbiAgICAgICAgICBdKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG4gIGZvciAoY29uc3QgaCBvZiByZXN1bHQuaG91cmx5KSB7XHJcbiAgICBmYy5mZWF0dXJlcy5wdXNoKHtcclxuICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgIHByb3BlcnRpZXM6IHsga2luZDogXCJob3VyXCIsIGhvdXI6IGguaG91ciwgY3VtX2Rpc3Rfa206IGguY3VtX2Rpc3Rfa20sIHZlbG9jaXR5X21waDogaC52ZWxvY2l0eV9tcGggfSxcclxuICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICB0eXBlOiBcIlBvaW50XCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZXM6IFtNYXRoLnJvdW5kKGgubG9uICogMWU2KSAvIDFlNiwgTWF0aC5yb3VuZChoLmxhdCAqIDFlNikgLyAxZTZdLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChyZXN1bHQub3Blbl93YXRlcikge1xyXG4gICAgZmMuZmVhdHVyZXMucHVzaCguLi50b09wZW5XYXRlckdlb0pzb24ocmVzdWx0Lm9wZW5fd2F0ZXIpLmZlYXR1cmVzKTtcclxuICB9XHJcbiAgcmV0dXJuIGZjO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIE9QRU4tV0FURVIgTU9ERSAodjEuNykgw6LigqzigJ0gbGFrZXMgJiByZXNlcnZvaXJzXHJcbi8vXHJcbi8vIEdOT01FLXN0eWxlIExhZ3JhbmdpYW4gcGFydGljbGUgdHJhbnNwb3J0IChOT0FBIFRlY2ggRG9jIE5PUyBPUiZSIDQwLFxyXG4vLyBwdWJsaWMgZG9tYWluOyBhbGdvcml0aG1zIHZhbGlkYXRlZCBhZ2FpbnN0IGl0cyBjbG9zZWQgZm9ybXMgaW5cclxuLy8gb3BlbndhdGVyLXNwaWtlL3Rlc3RfY29yZS5tanMgw6LigqzigJ0gMTgvMTgpLiBXaW5kLWRyaWZ0IG9ubHk6IGZvciByZXNlcnZvaXJzXHJcbi8vIHdpdGggbm8gb3BlcmF0aW9uYWwgY3VycmVudCBtb2RlbCB0aGlzIElTIGFjY2VwdGVkIHJlc3BvbmRlciBwcmFjdGljZVxyXG4vLyAodGhlIFwiMyUgb2Ygd2luZCB0b3dhcmQgdGhlIGRvd253aW5kIHNob3JlXCIgcnVsZSwgZG9uZSBwcm9wZXJseSB3aXRoIGFuXHJcbi8vIGhvdXJseSBmb3JlY2FzdCArIG1pbmltdW0tcmVncmV0IHVuY2VydGFpbnR5IHNldCkuXHJcbi8vXHJcbi8vIEdvdGNoYXMgaG9ub3JlZCAoc3Bpa2UgZmluZGluZ3MpOlxyXG4vLyAgIDEuIGV4cGxpY2l0IHdpbmRhZ2UgcGVyc2lzdGVuY2UgYW5kIEdOT01FJ3MgQXBwLiBDIHNxcnQocGVyc2lzdC9kdClcclxuLy8gICAgICByYW5nZSByZXNjYWxlIERPVUJMRS1DT1VOVCDDouKCrOKAnSByZXNjYWxlIG9ubHkgd2hlbiBkdCA+IHBlcnNpc3RlbmNlXHJcbi8vICAgMi4gTkhEIE1hcFNlcnZlciBmaWVsZCBuYW1lcyBhcmUgVVBQRVJDQVNFIChHTklTX05BTUUsIEFSRUFTUUtNLCBGVFlQRSlcclxuLy8gICAzLiB3YXRlcmJvZHkgcXVlcnkgbmVlZHMgbWF4QWxsb3dhYmxlT2Zmc2V0ICh+MzAgbSkgb3IgRmxhdGhlYWQtc2l6ZVxyXG4vLyAgICAgIHBvbHlnb25zIHJldHVybiB0aG91c2FuZHMgb2YgdmVydGljZXM7IE11bHRpUG9seWdvbiByaW5ncyBmbGF0dGVuZWRcclxuLy8gICAgICAoaXNsYW5kcyBiZWFjaCBwYXJ0aWNsZXMgdG9vKVxyXG4vLyAgIDQuIHJlZmxvYXRIYWxmTGlmZUhyIDw9IDAgd291bGQgbWVhbiBJTlNUQU5UIHJlZmxvYXQgw6LigqzigJ0gdHJlYXRlZCBhcyBcIm9mZlwiXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IE5IRF9XQVRFUkJPRFlfVVJMID1cclxuICBcImh0dHBzOi8vaHlkcm8ubmF0aW9uYWxtYXAuZ292L2FyY2dpcy9yZXN0L3NlcnZpY2VzL25oZC9NYXBTZXJ2ZXIvMTIvcXVlcnlcIjtcclxuY29uc3QgT1BFTl9NRVRFT19VUkwgPSBcImh0dHBzOi8vYXBpLm9wZW4tbWV0ZW8uY29tL3YxL2ZvcmVjYXN0XCI7XHJcbmNvbnN0IE1fUEVSX0RFR19MQVQgPSAxMTExMjAuMDAwMjQ7IC8vIEdOT01FIFRlY2ggRG9jIMOCwqc0XHJcblxyXG4vLyBOSEQgRlR5cGU6IDM5MCBMYWtlUG9uZCwgNDM2IFJlc2Vydm9pciwgNDkzIEVzdHVhcnksIDQ0NSBTZWFPY2VhbiAobnVtZXJpY1xyXG4vLyBvbiB0aGUgTWFwU2VydmVyOyBhY2NlcHQgdGhlIHN0cmluZyBmb3JtcyBmb3Igcm9idXN0bmVzcykuIEVzdHVhcnkvU2VhT2NlYW5cclxuLy8gPSBjb2FzdGFsIMOi4oKs4oCdIHRoZSBwYXJ0aWNsZSBtb2RlbCBhZGRzIGEgYmxlbmRlZCB0aWRhbC1jdXJyZW50IGZpZWxkIChUaWVyIDMpLlxyXG5leHBvcnQgZnVuY3Rpb24gaXNPcGVuV2F0ZXJCb2R5KHdiKSB7XHJcbiAgY29uc3QgZiA9IHdiICYmIHdiLmZ0eXBlO1xyXG4gIHJldHVybiBmID09PSAzOTAgfHwgZiA9PT0gNDM2IHx8IGYgPT09IDQ5MyB8fCBmID09PSA0NDUgfHxcclxuICAgIGYgPT09IFwiTGFrZVBvbmRcIiB8fCBmID09PSBcIlJlc2Vydm9pclwiIHx8IGYgPT09IFwiRXN0dWFyeVwiIHx8IGYgPT09IFwiU2VhT2NlYW5cIjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNDb2FzdGFsQm9keSh3Yikge1xyXG4gIGNvbnN0IGYgPSB3YiAmJiB3Yi5mdHlwZTtcclxuICByZXR1cm4gZiA9PT0gNDkzIHx8IGYgPT09IDQ0NSB8fCBmID09PSBcIkVzdHVhcnlcIiB8fCBmID09PSBcIlNlYU9jZWFuXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBOZWFyZXN0IGZsb3dsaW5lIHJlYWNoIHdpdGhpbiByYWRpdXNNICh3YmFyZWF0eXBlIGluY2x1ZGVkKSDDouKCrOKAnSBkaXNwYXRjaFxyXG4gKiB0aWVicmVhazogTkhEIHJlc2Vydm9pciBwb2x5Z29ucyBleHRlbmQgb3ZlciBkYW0gdGFpbHJhY2VzLCBhbmQgYSBjbGlja1xyXG4gKiB0aGVyZSBtZWFucyB0aGUgUklWRVIgYmVsb3csIG5vdCB0aGUgcG9vbCAoY2F1Z2h0IGxpdmUgYXQgQW1lcmljYW4gRmFsbHM6XHJcbiAqIHRoZSByZXNlcnZvaXIgcG9seWdvbiBjb250YWlucyB0aGUgdGFpbHJhY2UgYXQgNDIuNzgwMywtMTEyLjg3NjcpLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbmVhclJpdmVyUmVhY2gobGF0LCBsb24sIG1pbk9yZGVyLCByYWRpdXNNKSB7XHJcbiAgY29uc3QgYm94ID0gcmFkaXVzTSAvIDExMTAwMDsgLy8gZGVncmVlcywgZ2VuZXJvdXMgYXQgdGhlc2UgbGF0aXR1ZGVzXHJcbiAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oR0VPU0VSVkVSLCB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHNlcnZpY2U6IFwiV0ZTXCIsIHZlcnNpb246IFwiMi4wLjBcIiwgcmVxdWVzdDogXCJHZXRGZWF0dXJlXCIsXHJcbiAgICAgIHR5cGVOYW1lOiBcIndtYWRhdGE6bmhkZmxvd2xpbmVfbmV0d29ya1wiLCBvdXRwdXRGb3JtYXQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBjcWxfZmlsdGVyOlxyXG4gICAgICAgIGBzdHJlYW1vcmRlID49ICR7bWluT3JkZXJ9IEFORCBCQk9YKHRoZV9nZW9tLGAgK1xyXG4gICAgICAgIGAke2xhdCAtIGJveH0sJHtsb24gLSBib3h9LCR7bGF0ICsgYm94fSwke2xvbiArIGJveH0pYCwgLy8gbGF0LGxvbiBheGlzIG9yZGVyXHJcbiAgICAgIGNvdW50OiBcIjUwXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIC8vIG5lYXJlc3QgTk9OLWltcG91bmRlZCByZWFjaDogYXQgYSBkYW0gYm90aCB0aGUgcG9vbCdzIExha2VQb25kIHJlYWNoIGFuZFxyXG4gIC8vIHRoZSBmcmVlLWZsb3dpbmcgcmVhY2ggYmVsb3cgYXJlIGNsb3NlIMOi4oKs4oCdIGFueSBmcmVlLWZsb3dpbmcgcmVhY2ggaW4gcmFkaXVzXHJcbiAgLy8gbWVhbnMgdGhlIGNsaWNrIGlzIHJpdmVyIGNvbnRleHQgKG1pZC1wb29sIGhhcyBvbmx5IHRoZSBMYWtlUG9uZFxyXG4gIC8vIEFydGlmaWNpYWxQYXRoIG5lYXJieSkuIEEgdHJpYnV0YXJ5IG1vdXRoIGZsaXBwaW5nIHRvIHJpdmVyIG1vZGUgaXMgZmluZTpcclxuICAvLyB0aGUgdHJhY2UgaW1wb3VuZC1zdG9wcyBpbnRvIHRoZSBsYWtlIGltbWVkaWF0ZWx5IGFuZCBjb250aW51ZXMgYXNcclxuICAvLyBvcGVuIHdhdGVyIGFueXdheS5cclxuICBsZXQgYmVzdCA9IG51bGwsIGJlc3REID0gSW5maW5pdHk7XHJcbiAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcclxuICAgIGNvbnN0IHdiYSA9IGYucHJvcGVydGllcy53YmFyZWF0eXBlO1xyXG4gICAgaWYgKHdiYSA9PT0gXCJMYWtlUG9uZFwiIHx8IHdiYSA9PT0gXCJSZXNlcnZvaXJcIikgY29udGludWU7XHJcbiAgICBjb25zdCBnID0gZi5nZW9tZXRyeTtcclxuICAgIGNvbnN0IHBhdGhzID0gZy50eXBlID09PSBcIkxpbmVTdHJpbmdcIiA/IFtnLmNvb3JkaW5hdGVzXSA6IGcuY29vcmRpbmF0ZXM7XHJcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgcGF0aHMpXHJcbiAgICAgIGZvciAoY29uc3QgcCBvZiBwYXRoKSB7XHJcbiAgICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0obGF0LCBsb24sIHBbMV0sIHBbMF0pO1xyXG4gICAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBiZXN0ID0gZi5wcm9wZXJ0aWVzOyB9XHJcbiAgICAgIH1cclxuICB9XHJcbiAgaWYgKGJlc3QgPT09IG51bGwgfHwgYmVzdEQgPiByYWRpdXNNKSByZXR1cm4gbnVsbDtcclxuICByZXR1cm4geyBkaXN0X206IGJlc3RELCB3YmFyZWF0eXBlOiBiZXN0LndiYXJlYXR5cGUgPz8gbnVsbCwgY29taWQ6IE51bWJlcihiZXN0LmNvbWlkKSB9O1xyXG59XHJcblxyXG4vKiogQ29udGFpbmluZyBOSEQgd2F0ZXJib2R5IGF0IGEgcG9pbnQsIG9yIG51bGwuIEdlb21ldHJ5IHNpbXBsaWZpZWQgdG8gfjMwIG0uICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBxdWVyeVdhdGVyYm9keShsYXQsIGxvbiwgY29uZmlnID0ge30pIHtcclxuICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihOSERfV0FURVJCT0RZX1VSTCwge1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIGdlb21ldHJ5OiBgJHtsb259LCR7bGF0fWAsXHJcbiAgICAgIGdlb21ldHJ5VHlwZTogXCJlc3JpR2VvbWV0cnlQb2ludFwiLFxyXG4gICAgICBpblNSOiBcIjQzMjZcIixcclxuICAgICAgc3BhdGlhbFJlbDogXCJlc3JpU3BhdGlhbFJlbEludGVyc2VjdHNcIixcclxuICAgICAgb3V0RmllbGRzOiBcIkdOSVNfTkFNRSxBUkVBU1FLTSxGVFlQRVwiLCAvLyBVUFBFUkNBU0Ugb24gdGhpcyBsYXllclxyXG4gICAgICByZXR1cm5HZW9tZXRyeTogXCJ0cnVlXCIsXHJcbiAgICAgIG1heEFsbG93YWJsZU9mZnNldDogXCIwLjAwMDNcIixcclxuICAgICAgZjogXCJnZW9qc29uXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IGYgPSBqLmZlYXR1cmVzICYmIGouZmVhdHVyZXNbMF07XHJcbiAgaWYgKCFmKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCByaW5ncyA9IGYuZ2VvbWV0cnkudHlwZSA9PT0gXCJQb2x5Z29uXCJcclxuICAgID8gZi5nZW9tZXRyeS5jb29yZGluYXRlc1xyXG4gICAgOiBmLmdlb21ldHJ5LmNvb3JkaW5hdGVzLmZsYXQoMSk7IC8vIE11bHRpUG9seWdvbiDDouKAoOKAmSBhbGwgcmluZ3MgaW5jbC4gaXNsYW5kc1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBmLnByb3BlcnRpZXMuR05JU19OQU1FIHx8IFwidW5uYW1lZCB3YXRlcmJvZHlcIixcclxuICAgIGFyZWFfc3FrbTogZi5wcm9wZXJ0aWVzLkFSRUFTUUtNID8/IG51bGwsXHJcbiAgICBmdHlwZTogZi5wcm9wZXJ0aWVzLkZUWVBFLFxyXG4gICAgcmluZ3MsXHJcbiAgfTtcclxufVxyXG5cclxuLy8gLS0tLSBDTy1PUFMgdGlkYWwtY3VycmVudCBwcmVkaWN0aW9ucyAoVGllciAzIGNvYXN0YWwpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IENPT1BTX0RBVEFfVVJMID0gXCJodHRwczovL2FwaS50aWRlc2FuZGN1cnJlbnRzLm5vYWEuZ292L2FwaS9wcm9kL2RhdGFnZXR0ZXJcIjtcclxuY29uc3QgQ09PUFNfTURBUElfVVJMID0gXCJodHRwczovL2FwaS50aWRlc2FuZGN1cnJlbnRzLm5vYWEuZ292L21kYXBpL3Byb2Qvd2ViYXBpL3N0YXRpb25zLmpzb25cIjtcclxubGV0IENPT1BTX0NBVEFMT0cgPSBudWxsOyAvLyBtb2R1bGUgY2FjaGUgw6LigqzigJ0gfjQsNDAwIHN0YXRpb25zLCBmZXRjaGVkIG9uY2UgcGVyIHNlc3Npb25cclxuXHJcbi8qKlxyXG4gKiBOZWFyZXN0IENPLU9QUyBjdXJyZW50LXByZWRpY3Rpb24gc3RhdGlvbnMgd2l0aCB0aGVpciBzaWduZWQgNi1taW4gc2VyaWVzXHJcbiAqIHByb2plY3RlZCBvbnRvIGZsb29kL2ViYiBheGVzIMOi4oCg4oCZIFt7aWQsIG5hbWUsIGxhdCwgbG9uLCBkaXN0X2ttLFxyXG4gKiBzZXJpZXM6IFt7dCwgdSwgdn1dIChtL3MgdHJ1ZS12ZWN0b3IpfV0uIFRyaWVzIG5lYXJlc3QgY2FuZGlkYXRlcyB1bnRpbFxyXG4gKiBgbWF4TmAgc3VjY2VlZCAoc3Vib3JkaW5hdGUgc3RhdGlvbnMgcmVqZWN0IDYtbWluIGludGVydmFsIMOi4oKs4oCdIHNraXBwZWQpLlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQ3VycmVudFN0YXRpb25zKGxhdCwgbG9uLCBvdywgaG91cnNOZWVkZWQsIHN0YXJ0VE1zLCBsb2cpIHtcclxuICBpZiAoIUNPT1BTX0NBVEFMT0cpIHtcclxuICAgIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKENPT1BTX01EQVBJX1VSTCwgeyBwYXJhbXM6IHsgdHlwZTogXCJjdXJyZW50cHJlZGljdGlvbnNcIiwgdW5pdHM6IFwibWV0cmljXCIgfSwgdGltZW91dE1zOiA2MDAwMCB9KTtcclxuICAgIC8vIHRoZSBjYXRhbG9nIGxpc3RzIG9uZSByb3cgcGVyIGJpbi9kZXB0aCDDouKCrOKAnSBkZWR1cGUgdG8gb25lIHBlciBzdGF0aW9uIGlkXHJcbiAgICBjb25zdCBzZWVuID0gbmV3IFNldCgpO1xyXG4gICAgQ09PUFNfQ0FUQUxPRyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBzIG9mIGouc3RhdGlvbnMgfHwgW10pIHtcclxuICAgICAgaWYgKHNlZW4uaGFzKHMuaWQpKSBjb250aW51ZTtcclxuICAgICAgc2Vlbi5hZGQocy5pZCk7XHJcbiAgICAgIENPT1BTX0NBVEFMT0cucHVzaCh7IGlkOiBzLmlkLCBuYW1lOiBzLm5hbWUsIGxhdDogcy5sYXQsIGxvbjogcy5sbmcgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGNhbmRzID0gQ09PUFNfQ0FUQUxPR1xyXG4gICAgLm1hcCgocykgPT4gKHsgLi4ucywgZGlzdF9tOiBoYXZlcnNpbmVNKGxhdCwgbG9uLCBzLmxhdCwgcy5sb24pIH0pKVxyXG4gICAgLmZpbHRlcigocykgPT4gcy5kaXN0X20gPD0gb3cuY3VycmVudFN0YXRpb25NYXhLbSAqIDEwMDApXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYS5kaXN0X20gLSBiLmRpc3RfbSlcclxuICAgIC5zbGljZSgwLCBvdy5jdXJyZW50U3RhdGlvbnNNYXggKiAzKTsgLy8gc3BhcmUgY2FuZGlkYXRlcyBmb3IgZmFpbHVyZXNcclxuICBjb25zdCBiZWdpbk1zID0gc3RhcnRUTXMgLSAyICogMzYwMGUzO1xyXG4gIGNvbnN0IGQgPSBuZXcgRGF0ZShiZWdpbk1zKTtcclxuICBjb25zdCBwYWQgPSAoeCkgPT4gU3RyaW5nKHgpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICBjb25zdCBiZWdpbiA9IGAke2QuZ2V0VVRDRnVsbFllYXIoKX0ke3BhZChkLmdldFVUQ01vbnRoKCkgKyAxKX0ke3BhZChkLmdldFVUQ0RhdGUoKSl9ICR7cGFkKGQuZ2V0VVRDSG91cnMoKSl9OiR7cGFkKGQuZ2V0VVRDTWludXRlcygpKX1gO1xyXG4gIGNvbnN0IHJhbmdlID0gTWF0aC5jZWlsKGhvdXJzTmVlZGVkICsgOCk7XHJcbiAgY29uc3Qgb3V0ID0gW107XHJcbiAgZm9yIChjb25zdCBjIG9mIGNhbmRzKSB7XHJcbiAgICBpZiAob3V0Lmxlbmd0aCA+PSBvdy5jdXJyZW50U3RhdGlvbnNNYXgpIGJyZWFrO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oQ09PUFNfREFUQV9VUkwsIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHN0YXRpb246IGMuaWQsIHByb2R1Y3Q6IFwiY3VycmVudHNfcHJlZGljdGlvbnNcIixcclxuICAgICAgICAgIGJlZ2luX2RhdGU6IGJlZ2luLCByYW5nZTogU3RyaW5nKHJhbmdlKSxcclxuICAgICAgICAgIHRpbWVfem9uZTogXCJnbXRcIiwgaW50ZXJ2YWw6IFwiNlwiLCB1bml0czogXCJtZXRyaWNcIiwgZm9ybWF0OiBcImpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRyaWVzOiAxLCB0aW1lb3V0TXM6IDMwMDAwLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgY3AgPSBqLmN1cnJlbnRfcHJlZGljdGlvbnMgJiYgai5jdXJyZW50X3ByZWRpY3Rpb25zLmNwO1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY3ApIHx8IGNwLmxlbmd0aCA8IDEwKSB0aHJvdyBuZXcgRXJyb3IoXCJlbXB0eVwiKTtcclxuICAgICAgY29uc3Qgc2VyaWVzID0gY3AubWFwKChyKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3BkID0gTnVtYmVyKHIuVmVsb2NpdHlfTWFqb3IpIC8gMTAwOyAvLyBjbS9zIChtZXRyaWMpIMOi4oCg4oCZIG0vcywgc2lnbmVkICtmbG9vZC/DosuG4oCZZWJiXHJcbiAgICAgICAgY29uc3QgZGlyID0gKChzcGQgPj0gMCA/IE51bWJlcihyLm1lYW5GbG9vZERpcikgOiBOdW1iZXIoci5tZWFuRWJiRGlyKSkgKiBNYXRoLlBJKSAvIDE4MDtcclxuICAgICAgICBjb25zdCBtYWcgPSBNYXRoLmFicyhzcGQpO1xyXG4gICAgICAgIHJldHVybiB7IHQ6IERhdGUucGFyc2Uoci5UaW1lLnJlcGxhY2UoXCIgXCIsIFwiVFwiKSArIFwiWlwiKSwgdTogbWFnICogTWF0aC5zaW4oZGlyKSwgdjogbWFnICogTWF0aC5jb3MoZGlyKSB9O1xyXG4gICAgICB9KS5maWx0ZXIoKHgpID0+IE51bWJlci5pc0Zpbml0ZSh4LnQpICYmIE51bWJlci5pc0Zpbml0ZSh4LnUpKTtcclxuICAgICAgaWYgKHNlcmllcy5sZW5ndGggPCAxMCkgdGhyb3cgbmV3IEVycm9yKFwidW5wYXJzZWFibGVcIik7XHJcbiAgICAgIG91dC5wdXNoKHsgaWQ6IGMuaWQsIG5hbWU6IGMubmFtZSwgbGF0OiBjLmxhdCwgbG9uOiBjLmxvbiwgZGlzdF9rbTogTWF0aC5yb3VuZChjLmRpc3RfbSAvIDEwMCkgLyAxMCwgc2VyaWVzIH0pO1xyXG4gICAgICBpZiAobG9nKSBsb2coYCAgY3VycmVudCBzdGF0aW9uICR7Yy5pZH0gJHtjLm5hbWV9IEAgJHsoYy5kaXN0X20gLyAxMDAwKS50b0ZpeGVkKDEpfSBrbSDDouKCrOKAnSAke3Nlcmllcy5sZW5ndGh9IHB0c2ApO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAobG9nKSBsb2coYCAgY3VycmVudCBzdGF0aW9uICR7Yy5pZH0gc2tpcHBlZDogJHtTdHJpbmcoZSkuc2xpY2UoMCwgNjApfWApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gb3V0O1xyXG59XHJcblxyXG4vKiogSG91cmx5IGZvcmVjYXN0IHdpbmQgYXQgYSBwb2ludCBhcyBbe3Q6IG1zLCB1LCB2fV0gKDEwIG0sIG0vcykuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2luZFNlcmllcyhsYXQsIGxvbiwgaG91cnNOZWVkZWQpIHtcclxuICBjb25zdCBkYXlzID0gTWF0aC5taW4oMTYsIE1hdGguY2VpbChob3Vyc05lZWRlZCAvIDI0KSArIDEpO1xyXG4gIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKE9QRU5fTUVURU9fVVJMLCB7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgbGF0aXR1ZGU6IGxhdC50b0ZpeGVkKDQpLCBsb25naXR1ZGU6IGxvbi50b0ZpeGVkKDQpLFxyXG4gICAgICBob3VybHk6IFwid2luZF9zcGVlZF8xMG0sd2luZF9kaXJlY3Rpb25fMTBtXCIsXHJcbiAgICAgIHdpbmRfc3BlZWRfdW5pdDogXCJtc1wiLCBmb3JlY2FzdF9kYXlzOiBTdHJpbmcoZGF5cyksIHRpbWV6b25lOiBcIlVUQ1wiLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCBoID0gai5ob3VybHk7XHJcbiAgY29uc3Qgc2VyaWVzID0gaC50aW1lLm1hcCgodCwgaSkgPT4ge1xyXG4gICAgY29uc3QgciA9IChoLndpbmRfZGlyZWN0aW9uXzEwbVtpXSAqIE1hdGguUEkpIC8gMTgwOyAvLyBtZXRlb3JvbG9naWNhbCBGUk9NXHJcbiAgICBjb25zdCBzID0gaC53aW5kX3NwZWVkXzEwbVtpXTtcclxuICAgIHJldHVybiB7IHQ6IERhdGUucGFyc2UodCArIFwiOjAwWlwiKSwgdTogLXMgKiBNYXRoLnNpbihyKSwgdjogLXMgKiBNYXRoLmNvcyhyKSB9O1xyXG4gIH0pO1xyXG4gIHJldHVybiB7IHNlcmllcywgc291cmNlOiBcIm9wZW4tbWV0ZW9cIiwgcG9pbnRzOiBzZXJpZXMubGVuZ3RoIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG93V2luZEF0KHNlcmllcywgdE1zKSB7XHJcbiAgaWYgKCFzZXJpZXMubGVuZ3RoKSByZXR1cm4gWzAsIDBdO1xyXG4gIGlmICh0TXMgPD0gc2VyaWVzWzBdLnQpIHJldHVybiBbc2VyaWVzWzBdLnUsIHNlcmllc1swXS52XTtcclxuICBjb25zdCBsYXN0ID0gc2VyaWVzW3Nlcmllcy5sZW5ndGggLSAxXTtcclxuICBpZiAodE1zID49IGxhc3QudCkgcmV0dXJuIFtsYXN0LnUsIGxhc3Qudl07XHJcbiAgbGV0IGxvID0gMCwgaGkgPSBzZXJpZXMubGVuZ3RoIC0gMTtcclxuICB3aGlsZSAoaGkgLSBsbyA+IDEpIHtcclxuICAgIGNvbnN0IG1pZCA9IChsbyArIGhpKSA+PiAxO1xyXG4gICAgaWYgKHNlcmllc1ttaWRdLnQgPD0gdE1zKSBsbyA9IG1pZDsgZWxzZSBoaSA9IG1pZDtcclxuICB9XHJcbiAgY29uc3QgQSA9IHNlcmllc1tsb10sIEIgPSBzZXJpZXNbaGldO1xyXG4gIGNvbnN0IGYgPSAodE1zIC0gQS50KSAvIChCLnQgLSBBLnQpO1xyXG4gIHJldHVybiBbQS51ICsgZiAqIChCLnUgLSBBLnUpLCBBLnYgKyBmICogKEIudiAtIEEudildO1xyXG59XHJcblxyXG4vLyBzZWVkZWQgUk5HIChtdWxiZXJyeTMyICsgQm94LU11bGxlcikgw6LigqzigJ0gZGV0ZXJtaW5pc3RpYyByZXBsYXlzXHJcbmZ1bmN0aW9uIG93TWFrZVJuZyhzZWVkKSB7XHJcbiAgbGV0IGEgPSBzZWVkID4+PiAwO1xyXG4gIGxldCBzcGFyZSA9IG51bGw7XHJcbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcclxuICAgIGEgfD0gMDsgYSA9IChhICsgMHg2ZDJiNzlmNSkgfCAwO1xyXG4gICAgbGV0IHQgPSBNYXRoLmltdWwoYSBeIChhID4+PiAxNSksIDEgfCBhKTtcclxuICAgIHQgPSAodCArIE1hdGguaW11bCh0IF4gKHQgPj4+IDcpLCA2MSB8IHQpKSBeIHQ7XHJcbiAgICByZXR1cm4gKCh0IF4gKHQgPj4+IDE0KSkgPj4+IDApIC8gNDI5NDk2NzI5NjtcclxuICB9O1xyXG4gIHJldHVybiB7XHJcbiAgICBuZXh0LFxyXG4gICAgdW5pZm9ybTogKGxvLCBoaSkgPT4gbG8gKyAoaGkgLSBsbykgKiBuZXh0KCksXHJcbiAgICBnYXVzc2lhbigpIHtcclxuICAgICAgaWYgKHNwYXJlICE9PSBudWxsKSB7IGNvbnN0IHYgPSBzcGFyZTsgc3BhcmUgPSBudWxsOyByZXR1cm4gdjsgfVxyXG4gICAgICBsZXQgdTEgPSAwO1xyXG4gICAgICB3aGlsZSAodTEgPT09IDApIHUxID0gbmV4dCgpO1xyXG4gICAgICBjb25zdCB1MiA9IG5leHQoKTtcclxuICAgICAgY29uc3QgciA9IE1hdGguc3FydCgtMiAqIE1hdGgubG9nKHUxKSk7XHJcbiAgICAgIHNwYXJlID0gciAqIE1hdGguc2luKDIgKiBNYXRoLlBJICogdTIpO1xyXG4gICAgICByZXR1cm4gciAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogdTIpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBvd1Byb2plY3Rpb24obGF0MCwgbG9uMCkge1xyXG4gIGNvbnN0IG1QZXJEZWdMb24gPSBNX1BFUl9ERUdfTEFUICogTWF0aC5jb3MoKGxhdDAgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRvWFk6IChsYXQsIGxvbikgPT4gWyhsb24gLSBsb24wKSAqIG1QZXJEZWdMb24sIChsYXQgLSBsYXQwKSAqIE1fUEVSX0RFR19MQVRdLFxyXG4gICAgdG9MYXRMb246ICh4LCB5KSA9PiBbbGF0MCArIHkgLyBNX1BFUl9ERUdfTEFULCBsb24wICsgeCAvIG1QZXJEZWdMb25dLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG93U2VnSW50ZXJzZWN0VChheCwgYXksIGJ4LCBieSwgY3gsIGN5LCBkeCwgZHkpIHtcclxuICBjb25zdCByeCA9IGJ4IC0gYXgsIHJ5ID0gYnkgLSBheSwgc3ggPSBkeCAtIGN4LCBzeSA9IGR5IC0gY3k7XHJcbiAgY29uc3QgZGVub20gPSByeCAqIHN5IC0gcnkgKiBzeDtcclxuICBpZiAoZGVub20gPT09IDApIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IHQgPSAoKGN4IC0gYXgpICogc3kgLSAoY3kgLSBheSkgKiBzeCkgLyBkZW5vbTtcclxuICBjb25zdCB1ID0gKChjeCAtIGF4KSAqIHJ5IC0gKGN5IC0gYXkpICogcngpIC8gZGVub207XHJcbiAgcmV0dXJuIHQgPj0gMCAmJiB0IDw9IDEgJiYgdSA+PSAwICYmIHUgPD0gMSA/IHQgOiBudWxsO1xyXG59XHJcblxyXG4vKiogVW5pZm9ybSBncmlkIG92ZXIgc2hvcmVsaW5lIHNlZ21lbnRzOyBzZWdtZW50cyByZW1lbWJlciByaW5nICsgb3JkaW5hbCBzb1xyXG4gKiAgYmVhY2hlZCBwYXJ0aWNsZXMgY2FuIGJlIGNsdXN0ZXJlZCBpbnRvIGNvbnRpZ3VvdXMgc2hvcmVsaW5lIGFyY3MuICovXHJcbmZ1bmN0aW9uIG93U2hvcmVsaW5lSW5kZXgocmluZ3NYWSwgY2VsbE0gPSA1MDApIHtcclxuICBjb25zdCBzZWdzID0gW10sIHNlZ01ldGEgPSBbXTtcclxuICByaW5nc1hZLmZvckVhY2goKHJpbmcsIHJpbmdJZHgpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBhID0gcmluZ1tpXSwgYiA9IHJpbmdbKGkgKyAxKSAlIHJpbmcubGVuZ3RoXTtcclxuICAgICAgaWYgKGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSkgY29udGludWU7XHJcbiAgICAgIHNlZ3MucHVzaChbYVswXSwgYVsxXSwgYlswXSwgYlsxXV0pO1xyXG4gICAgICBzZWdNZXRhLnB1c2goeyByaW5nOiByaW5nSWR4LCBvcmQ6IGkgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3QgY2VsbHMgPSBuZXcgTWFwKCk7XHJcbiAgY29uc3Qga2V5ID0gKGksIGopID0+IGkgKyBcIixcIiArIGo7XHJcbiAgc2Vncy5mb3JFYWNoKChzLCBpZHgpID0+IHtcclxuICAgIGNvbnN0IGkwID0gTWF0aC5mbG9vcihNYXRoLm1pbihzWzBdLCBzWzJdKSAvIGNlbGxNKSwgaTEgPSBNYXRoLmZsb29yKE1hdGgubWF4KHNbMF0sIHNbMl0pIC8gY2VsbE0pO1xyXG4gICAgY29uc3QgajAgPSBNYXRoLmZsb29yKE1hdGgubWluKHNbMV0sIHNbM10pIC8gY2VsbE0pLCBqMSA9IE1hdGguZmxvb3IoTWF0aC5tYXgoc1sxXSwgc1szXSkgLyBjZWxsTSk7XHJcbiAgICBmb3IgKGxldCBpID0gaTA7IGkgPD0gaTE7IGkrKylcclxuICAgICAgZm9yIChsZXQgaiA9IGowOyBqIDw9IGoxOyBqKyspIHtcclxuICAgICAgICBjb25zdCBrID0ga2V5KGksIGopO1xyXG4gICAgICAgIGxldCBhcnIgPSBjZWxscy5nZXQoayk7XHJcbiAgICAgICAgaWYgKCFhcnIpIHsgYXJyID0gW107IGNlbGxzLnNldChrLCBhcnIpOyB9XHJcbiAgICAgICAgYXJyLnB1c2goaWR4KTtcclxuICAgICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiB7IHNlZ3MsIHNlZ01ldGEsIGNlbGxzLCBjZWxsTSwga2V5IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG93Rmlyc3RDcm9zc2luZyhpbmRleCwgeDEsIHkxLCB4MiwgeTIpIHtcclxuICBjb25zdCB7IHNlZ3MsIGNlbGxzLCBjZWxsTSwga2V5IH0gPSBpbmRleDtcclxuICBjb25zdCBpMCA9IE1hdGguZmxvb3IoTWF0aC5taW4oeDEsIHgyKSAvIGNlbGxNKSwgaTEgPSBNYXRoLmZsb29yKE1hdGgubWF4KHgxLCB4MikgLyBjZWxsTSk7XHJcbiAgY29uc3QgajAgPSBNYXRoLmZsb29yKE1hdGgubWluKHkxLCB5MikgLyBjZWxsTSksIGoxID0gTWF0aC5mbG9vcihNYXRoLm1heCh5MSwgeTIpIC8gY2VsbE0pO1xyXG4gIGNvbnN0IHNlZW4gPSBuZXcgU2V0KCk7XHJcbiAgbGV0IGJlc3QgPSBudWxsO1xyXG4gIGZvciAobGV0IGkgPSBpMDsgaSA8PSBpMTsgaSsrKVxyXG4gICAgZm9yIChsZXQgaiA9IGowOyBqIDw9IGoxOyBqKyspIHtcclxuICAgICAgY29uc3QgYXJyID0gY2VsbHMuZ2V0KGtleShpLCBqKSk7XHJcbiAgICAgIGlmICghYXJyKSBjb250aW51ZTtcclxuICAgICAgZm9yIChjb25zdCBpZHggb2YgYXJyKSB7XHJcbiAgICAgICAgaWYgKHNlZW4uaGFzKGlkeCkpIGNvbnRpbnVlO1xyXG4gICAgICAgIHNlZW4uYWRkKGlkeCk7XHJcbiAgICAgICAgY29uc3QgcyA9IHNlZ3NbaWR4XTtcclxuICAgICAgICBjb25zdCB0ID0gb3dTZWdJbnRlcnNlY3RUKHgxLCB5MSwgeDIsIHkyLCBzWzBdLCBzWzFdLCBzWzJdLCBzWzNdKTtcclxuICAgICAgICBpZiAodCAhPT0gbnVsbCAmJiAoYmVzdCA9PT0gbnVsbCB8fCB0IDwgYmVzdC50KSkgYmVzdCA9IHsgdCwgaWR4IH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBpZiAoYmVzdCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIHtcclxuICAgIHQ6IGJlc3QudCwgaWR4OiBiZXN0LmlkeCxcclxuICAgIHg6IHgxICsgYmVzdC50ICogKHgyIC0geDEpLCB5OiB5MSArIGJlc3QudCAqICh5MiAtIHkxKSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmV4SHVsbChwb2ludHNYWSkge1xyXG4gIGNvbnN0IHB0cyA9IFsuLi5wb2ludHNYWV0uc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0gfHwgYVsxXSAtIGJbMV0pO1xyXG4gIGlmIChwdHMubGVuZ3RoIDwgMykgcmV0dXJuIHB0cztcclxuICBjb25zdCBjcm9zcyA9IChvLCBhLCBiKSA9PiAoYVswXSAtIG9bMF0pICogKGJbMV0gLSBvWzFdKSAtIChhWzFdIC0gb1sxXSkgKiAoYlswXSAtIG9bMF0pO1xyXG4gIGNvbnN0IGxvd2VyID0gW107XHJcbiAgZm9yIChjb25zdCBwIG9mIHB0cykge1xyXG4gICAgd2hpbGUgKGxvd2VyLmxlbmd0aCA+PSAyICYmIGNyb3NzKGxvd2VyW2xvd2VyLmxlbmd0aCAtIDJdLCBsb3dlcltsb3dlci5sZW5ndGggLSAxXSwgcCkgPD0gMCkgbG93ZXIucG9wKCk7XHJcbiAgICBsb3dlci5wdXNoKHApO1xyXG4gIH1cclxuICBjb25zdCB1cHBlciA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSBwdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgIGNvbnN0IHAgPSBwdHNbaV07XHJcbiAgICB3aGlsZSAodXBwZXIubGVuZ3RoID49IDIgJiYgY3Jvc3ModXBwZXJbdXBwZXIubGVuZ3RoIC0gMl0sIHVwcGVyW3VwcGVyLmxlbmd0aCAtIDFdLCBwKSA8PSAwKSB1cHBlci5wb3AoKTtcclxuICAgIHVwcGVyLnB1c2gocCk7XHJcbiAgfVxyXG4gIGxvd2VyLnBvcCgpOyB1cHBlci5wb3AoKTtcclxuICByZXR1cm4gbG93ZXIuY29uY2F0KHVwcGVyKTtcclxufVxyXG5cclxuLyoqIFByb3RlY3RpdmUvZXhjbHVzaW9uIGJvb20gZm9yIGEgc2hvcmVsaW5lIGFyYyAob3BlbiB3YXRlciDDouKCrOKAnSB0aGUgcml2ZXJcclxuICogIGRlZmxlY3Rpb24gcnVsZSBzaW4odGhldGEpPTAuMzUvdiBkb2VzIE5PVCBhcHBseSB3aXRoIG5vIHBlcnNpc3RlbnRcclxuICogIGN1cnJlbnQpLiBQbGFubmluZy1sZXZlbDogYXJjIGxlbmd0aCArIHJlc2VydmUsIDUwLWZ0IHN0aWNrcy4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVzdGltYXRlU2hvcmVsaW5lQm9vbShsZW5ndGhNLCBvcHRzID0ge30pIHtcclxuICBjb25zdCByZXNlcnZlUGN0ID0gb3B0cy5yZXNlcnZlUGN0ID8/IDIwO1xyXG4gIGNvbnN0IGFuY2hvclNwYWNpbmdGdCA9IG9wdHMuYW5jaG9yU3BhY2luZ0Z0ID8/IDEwMDtcclxuICBpZiAoIShsZW5ndGhNID4gMCkpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGJvb21GdCA9IE1hdGguY2VpbCgobGVuZ3RoTSAqIDMuMjgwODQgKiAoMSArIHJlc2VydmVQY3QgLyAxMDApKSAvIDUwKSAqIDUwO1xyXG4gIHJldHVybiB7IGJvb21fZnQ6IGJvb21GdCwgYW5jaG9yczogTWF0aC5tYXgoMiwgTWF0aC5jZWlsKGJvb21GdCAvIGFuY2hvclNwYWNpbmdGdCkgKyAxKSwgcHJvdGVjdGl2ZTogdHJ1ZSB9O1xyXG59XHJcblxyXG4vKiogT25lIHBhcnRpY2xlIHNldC4gUHVyZSArIGRldGVybWluaXN0aWMgKHNlZWRlZCkuIEludGVybmFsLlxyXG4gKiAgY3VycmVudEF0KHgsIHksIHRNcykgw6LigKDigJkgW3UsIHZdIG0vcyAob3B0aW9uYWwgw6LigqzigJ0gY29hc3RhbCB0aWRhbCBibGVuZCk7XHJcbiAqICBjdXJyZW50cyBhZHZlY3QgYXQgMTAwJSAoR05PTUUpLCB3aW5kYWdlIHJpZGVzIG9uIHRvcC4gKi9cclxuZnVuY3Rpb24gb3dTaW11bGF0ZSh7IHgwLCB5MCwgdE1zMCwgd2luZFNlcmllcywgaW5kZXgsIG93LCB1bmNlcnRhaW50eSwgc2VlZCwgY3VycmVudEF0ID0gbnVsbCB9KSB7XHJcbiAgY29uc3Qgcm5nID0gb3dNYWtlUm5nKHNlZWQpO1xyXG4gIGNvbnN0IGR0ID0gb3cudGltZXN0ZXBTO1xyXG4gIGNvbnN0IG5TdGVwcyA9IE1hdGgucm91bmQoKG93LmR1cmF0aW9uSHIgKiAzNjAwKSAvIGR0KTtcclxuICBjb25zdCBzdGVwc1BlckhvdXIgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKDM2MDAgLyBkdCkpO1xyXG5cclxuICAvLyB3aW5kYWdlOiBleHBsaWNpdCBwZXJzaXN0ZW5jZSBmb3IgZHQgPD0gcGVyc2lzdCAocmVmZXJlbmNlIHJhbmdlIGFzLWlzKTtcclxuICAvLyBwZXItc3RlcCBkcmF3cyB3aXRoIHRoZSBBcHAuIEMgcmVzY2FsZWQgcmFuZ2Ugb25seSBmb3IgZHQgPiBwZXJzaXN0XHJcbiAgY29uc3Qgd01lYW4gPSAob3cud2luZGFnZU1pbiArIG93LndpbmRhZ2VNYXgpIC8gMjtcclxuICBsZXQgd0hhbGYgPSAob3cud2luZGFnZU1heCAtIG93LndpbmRhZ2VNaW4pIC8gMjtcclxuICBsZXQgd1BlcnNpc3RTID0gb3cud2luZGFnZVBlcnNpc3RTO1xyXG4gIGlmIChkdCA+IHdQZXJzaXN0Uykge1xyXG4gICAgd0hhbGYgKj0gTWF0aC5zcXJ0KHdQZXJzaXN0UyAvIGR0KTtcclxuICAgIHdQZXJzaXN0UyA9IGR0O1xyXG4gIH1cclxuICBjb25zdCBkcmF3V2luZGFnZSA9ICgpID0+IE1hdGgubWF4KDAsIHdNZWFuICsgcm5nLnVuaWZvcm0oLXdIYWxmLCB3SGFsZikpO1xyXG4gIGNvbnN0IGRpZmZTdGVwID0gTWF0aC5zcXJ0KDYgKiBvdy5kaWZmdXNpb25NMnMgKiBkdCk7XHJcbiAgY29uc3QgYW5nQ2FwID0gTWF0aC5QSSAvIDM7IC8vIMOCwrE2MMOCwrAgY2FwIG9uIHdpbmQtYW5nbGUgcGVydHVyYmF0aW9uIChHTk9NRSDDgsKnMTUpXHJcbiAgY29uc3QgcFJlZmxvYXQgPSBvdy5yZWZsb2F0SGFsZkxpZmVIciA+IDBcclxuICAgID8gMSAtIE1hdGgucG93KDIsIC0oZHQgLyAzNjAwKSAvIG93LnJlZmxvYXRIYWxmTGlmZUhyKVxyXG4gICAgOiAwOyAvLyA8PSAwIGRpc2FibGVzIHJlZmxvYXRpbmcgKE5PVCBcImluc3RhbnRcIilcclxuXHJcbiAgY29uc3QgTiA9IG93Lm5QYXJ0aWNsZXM7XHJcbiAgY29uc3QgUCA9IG5ldyBBcnJheShOKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IE47IGkrKykge1xyXG4gICAgUFtpXSA9IHtcclxuICAgICAgeDogeDAsIHk6IHkwLCBiZWFjaGVkOiBmYWxzZSwgbGFzdFg6IHgwLCBsYXN0WTogeTAsXHJcbiAgICAgIGJlYWNoVE1zOiBudWxsLCBiZWFjaFNlZzogbnVsbCxcclxuICAgICAgd2luZGFnZTogZHJhd1dpbmRhZ2UoKSwgd2luZGFnZUFnZVM6IDAsXHJcbiAgICAgIHBlcnRGOiAxLCBwZXJ0QTogMCwgcGVydEFnZVM6IDAsXHJcbiAgICAgIGN1ckY6IDEsIGN1ckE6IDAsXHJcbiAgICB9O1xyXG4gICAgaWYgKHVuY2VydGFpbnR5KSBkcmF3UGVydHVyYihQW2ldKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gZHJhd1BlcnR1cmIocCkge1xyXG4gICAgcC5wZXJ0RiA9IE1hdGguZXhwKHJuZy5nYXVzc2lhbigpICogMC4zKTsgLy8gbG9nbm9ybWFsIHNwZWVkIGZhY3RvciwgbWVkaWFuIDFcclxuICAgIHAucGVydEEgPSBNYXRoLm1heCgtYW5nQ2FwLCBNYXRoLm1pbihhbmdDYXAsIChybmcuZ2F1c3NpYW4oKSAqIDIwICogTWF0aC5QSSkgLyAxODApKTtcclxuICAgIHAucGVydEFnZVMgPSAwO1xyXG4gICAgLy8gY3VycmVudCBwZXJ0dXJiYXRpb24gKEdOT01FIMOCwqcxNSBzcGlyaXQpOiDDgsKxMjAlIHNjYWxlICsgc21hbGwgcm90YXRpb24sXHJcbiAgICAvLyBoZWxkIGZvciB0aGUgcnVuIChjdXJyZW50cyByZS1yYW5kb21pemUgb24gdGhlIDQ4IGggc2NhbGUsID4gb3VyIHJ1bnMpXHJcbiAgICBwLmN1ckYgPSBNYXRoLmV4cChybmcuZ2F1c3NpYW4oKSAqIDAuMik7XHJcbiAgICBwLmN1ckEgPSBNYXRoLm1heCgtMC41MiwgTWF0aC5taW4oMC41MiwgKHJuZy5nYXVzc2lhbigpICogMTAgKiBNYXRoLlBJKSAvIDE4MCkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaG91cmx5ID0gW107XHJcbiAgY29uc3Qgc25hcHNob3QgPSAoaHIpID0+IHtcclxuICAgIGNvbnN0IHBvcyA9IG5ldyBBcnJheShOKTtcclxuICAgIGxldCBjeCA9IDAsIGN5ID0gMCwgbmIgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyBpKyspIHtcclxuICAgICAgcG9zW2ldID0gW1BbaV0ueCwgUFtpXS55XTtcclxuICAgICAgY3ggKz0gUFtpXS54OyBjeSArPSBQW2ldLnk7XHJcbiAgICAgIGlmIChQW2ldLmJlYWNoZWQpIG5iKys7XHJcbiAgICB9XHJcbiAgICBob3VybHkucHVzaCh7IGhyLCBjZW50cm9pZFhZOiBbY3ggLyBOLCBjeSAvIE5dLCBiZWFjaGVkQ291bnQ6IG5iLCBwb3NpdGlvbnM6IHBvcyB9KTtcclxuICB9O1xyXG4gIHNuYXBzaG90KDApO1xyXG5cclxuICBmb3IgKGxldCBzdGVwID0gMTsgc3RlcCA8PSBuU3RlcHM7IHN0ZXArKykge1xyXG4gICAgY29uc3QgdE1zID0gdE1zMCArIChzdGVwIC0gMSkgKiBkdCAqIDEwMDA7IC8vIGZvcmNpbmcgYXQgaW50ZXJ2YWwgc3RhcnQgKGZvcndhcmQgRXVsZXIpXHJcbiAgICBjb25zdCBbd3UwLCB3djBdID0gb3dXaW5kQXQod2luZFNlcmllcywgdE1zKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHAgPSBQW2ldO1xyXG4gICAgICBpZiAocC5iZWFjaGVkKSB7XHJcbiAgICAgICAgaWYgKHBSZWZsb2F0ID4gMCAmJiBybmcubmV4dCgpIDwgcFJlZmxvYXQpIHtcclxuICAgICAgICAgIHAuYmVhY2hlZCA9IGZhbHNlOyBwLnggPSBwLmxhc3RYOyBwLnkgPSBwLmxhc3RZO1xyXG4gICAgICAgIH0gZWxzZSBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBwLndpbmRhZ2VBZ2VTICs9IGR0O1xyXG4gICAgICBpZiAocC53aW5kYWdlQWdlUyA+PSB3UGVyc2lzdFMpIHsgcC53aW5kYWdlID0gZHJhd1dpbmRhZ2UoKTsgcC53aW5kYWdlQWdlUyA9IDA7IH1cclxuICAgICAgbGV0IHd1ID0gd3UwLCB3diA9IHd2MDtcclxuICAgICAgaWYgKHVuY2VydGFpbnR5KSB7XHJcbiAgICAgICAgcC5wZXJ0QWdlUyArPSBkdDtcclxuICAgICAgICBpZiAocC5wZXJ0QWdlUyA+PSAxMDgwMCkgZHJhd1BlcnR1cmIocCk7IC8vIDMgaCBwZXJzaXN0ZW5jZVxyXG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhwLnBlcnRBKSwgcyA9IE1hdGguc2luKHAucGVydEEpO1xyXG4gICAgICAgIHd1ID0gcC5wZXJ0RiAqICh3dTAgKiBjIC0gd3YwICogcyk7XHJcbiAgICAgICAgd3YgPSBwLnBlcnRGICogKHd1MCAqIHMgKyB3djAgKiBjKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgY3UgPSAwLCBjdiA9IDA7XHJcbiAgICAgIGlmIChjdXJyZW50QXQpIHtcclxuICAgICAgICBbY3UsIGN2XSA9IGN1cnJlbnRBdChwLngsIHAueSwgdE1zKTtcclxuICAgICAgICBpZiAodW5jZXJ0YWludHkpIHtcclxuICAgICAgICAgIGNvbnN0IGNjID0gTWF0aC5jb3MocC5jdXJBKSwgY3MgPSBNYXRoLnNpbihwLmN1ckEpO1xyXG4gICAgICAgICAgY29uc3QgcnUgPSBwLmN1ckYgKiAoY3UgKiBjYyAtIGN2ICogY3MpO1xyXG4gICAgICAgICAgY3YgPSBwLmN1ckYgKiAoY3UgKiBjcyArIGN2ICogY2MpO1xyXG4gICAgICAgICAgY3UgPSBydTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbnggPSBwLnggKyAoY3UgKyBwLndpbmRhZ2UgKiB3dSkgKiBkdCArIHJuZy51bmlmb3JtKC0xLCAxKSAqIGRpZmZTdGVwO1xyXG4gICAgICBjb25zdCBueSA9IHAueSArIChjdiArIHAud2luZGFnZSAqIHd2KSAqIGR0ICsgcm5nLnVuaWZvcm0oLTEsIDEpICogZGlmZlN0ZXA7XHJcbiAgICAgIGlmIChpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGhpdCA9IG93Rmlyc3RDcm9zc2luZyhpbmRleCwgcC54LCBwLnksIG54LCBueSk7XHJcbiAgICAgICAgaWYgKGhpdCkge1xyXG4gICAgICAgICAgcC5sYXN0WCA9IHAueDsgcC5sYXN0WSA9IHAueTsgLy8gbGFzdCB3YXRlciBwb3NpdGlvbiAoR05PTUUgw4LCpzE0KVxyXG4gICAgICAgICAgY29uc3QgbGVuID0gTWF0aC5oeXBvdChueCAtIHAueCwgbnkgLSBwLnkpIHx8IDE7XHJcbiAgICAgICAgICBwLnggPSBoaXQueCAtIChueCAtIHAueCkgLyBsZW47IC8vIGxhbmQgMSBtIHNob3J0IG9mIHRoZSBjcm9zc2luZ1xyXG4gICAgICAgICAgcC55ID0gaGl0LnkgLSAobnkgLSBwLnkpIC8gbGVuO1xyXG4gICAgICAgICAgcC5iZWFjaGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHAuYmVhY2hTZWcgPSBoaXQuaWR4O1xyXG4gICAgICAgICAgaWYgKHAuYmVhY2hUTXMgPT09IG51bGwpIHAuYmVhY2hUTXMgPSB0TXMgKyBkdCAqIDEwMDA7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcC54ID0gbng7IHAueSA9IG55O1xyXG4gICAgfVxyXG4gICAgaWYgKHN0ZXAgJSBzdGVwc1BlckhvdXIgPT09IDApIHNuYXBzaG90KHN0ZXAgLyBzdGVwc1BlckhvdXIpO1xyXG4gIH1cclxuICByZXR1cm4geyBwYXJ0aWNsZXM6IFAsIGhvdXJseSB9O1xyXG59XHJcblxyXG4vKipcclxuICogZmV0Y2hPcGVuV2F0ZXJEYXRhIMOi4oKs4oCdIGFsbCBuZXR3b3JrIGZvciBvbmUgb3Blbi13YXRlciBydW4uIFdhdGVyYm9keSBtYXkgYmVcclxuICogcGFzc2VkIHByZS1mZXRjaGVkIChydW5UcmFjZSBkaXNwYXRjaCBhbHJlYWR5IHF1ZXJpZWQgaXQpLlxyXG4gKiBzdGFydE9mZnNldEhyIHNoaWZ0cyB0aGUgc2ltIHN0YXJ0IGludG8gdGhlIGZvcmVjYXN0IChpbXBvdW5kbWVudFxyXG4gKiBjb250aW51YXRpb25zIHN0YXJ0IHdoZW4gdGhlIHJpdmVyIHBsdW1lIEFSUklWRVMsIG5vdCBub3cpLlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoT3BlbldhdGVyRGF0YShsYXQsIGxvbiwgY29uZmlnID0ge30sIHdhdGVyYm9keSA9IG51bGwsIHN0YXJ0T2Zmc2V0SHIgPSAwKSB7XHJcbiAgY29uc3QgY2ZnID0geyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH07XHJcbiAgY29uc3Qgb3cgPSB7IC4uLkRFRkFVTFRfT1BFTldBVEVSLCAuLi4oY29uZmlnLm9wZW5XYXRlciB8fCB7fSkgfTtcclxuICBjb25zdCB3YiA9IHdhdGVyYm9keSB8fCAoYXdhaXQgcXVlcnlXYXRlcmJvZHkobGF0LCBsb24sIGNvbmZpZykpO1xyXG4gIGlmICghd2IpIHRocm93IG5ldyBFcnJvcihcInBvaW50IGlzIG5vdCBpbnNpZGUgYW4gTkhEIHdhdGVyYm9keVwiKTtcclxuICBjb25zdCBzdGFydFRNcyA9IERhdGUubm93KCkgKyBzdGFydE9mZnNldEhyICogMzYwMDAwMDtcclxuICBjb25zdCBjb2FzdGFsID0gaXNDb2FzdGFsQm9keSh3Yik7XHJcbiAgY29uc3QgbG9nID0gY2ZnLnZlcmJvc2UgPyAoLi4uYSkgPT4gY29uc29sZS5sb2coLi4uYSkgOiBudWxsO1xyXG4gIGNvbnN0IHdpbmRQID0gZmV0Y2hXaW5kU2VyaWVzKGxhdCwgbG9uLCBzdGFydE9mZnNldEhyICsgb3cuZHVyYXRpb25Icik7XHJcbiAgLy8gY29hc3RhbDogYmxlbmRlZCB0aWRhbC1jdXJyZW50IGZpZWxkIGZyb20gdGhlIG5lYXJlc3QgcHJlZGljdGlvbiBzdGF0aW9uc1xyXG4gIGxldCBzdGF0aW9uc1AgPSBQcm9taXNlLnJlc29sdmUoW10pO1xyXG4gIGlmIChjb2FzdGFsICYmIG93LmNvYXN0YWxDdXJyZW50cykge1xyXG4gICAgc3RhdGlvbnNQID0gZmV0Y2hDdXJyZW50U3RhdGlvbnMobGF0LCBsb24sIG93LCBvdy5kdXJhdGlvbkhyLCBzdGFydFRNcywgbG9nKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHsgaWYgKGxvZykgbG9nKGAgIGN1cnJlbnQgc3RhdGlvbnMgRkFJTEVEOiAke2V9YCk7IHJldHVybiBbXTsgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGZldGNoU2V0cyA9IGFzeW5jIChwcm92aWRlcnMpID0+IFByb21pc2UuYWxsKFxyXG4gICAgKHByb3ZpZGVycyB8fCBbXSkubWFwKGFzeW5jIChwKSA9PiAoe1xyXG4gICAgICBuYW1lOiBwLm5hbWUsIGJ1ZmZlcl9tOiBwLmJ1ZmZlcl9tID8/IDQwMCwgZmVhdHM6IGF3YWl0IHAuZmV0Y2goKSxcclxuICAgIH0pKSxcclxuICApO1xyXG4gIGNvbnN0IFt3aW5kLCBjdXJyZW50U3RhdGlvbnMsIHNpdGVTZXRzLCByZWNlcHRvclNldHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICBbd2luZFAsIHN0YXRpb25zUCwgZmV0Y2hTZXRzKGNmZy5zaXRlUHJvdmlkZXJzKSwgZmV0Y2hTZXRzKGNmZy5yZWNlcHRvclByb3ZpZGVycyldLFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxhdCwgbG9uLCB3YXRlcmJvZHk6IHdiLCBjb2FzdGFsLFxyXG4gICAgd2luZFNlcmllczogd2luZC5zZXJpZXMsIHdpbmRTb3VyY2U6IHdpbmQuc291cmNlLFxyXG4gICAgY3VycmVudFN0YXRpb25zLFxyXG4gICAgc2l0ZVNldHMsIHJlY2VwdG9yU2V0cyxcclxuICAgIHN0YXJ0T2Zmc2V0SHIsXHJcbiAgICBzdGFydFRNcyxcclxuICAgIGZldGNoZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKiBSZS1haW0gY2FjaGVkIG9wZW4td2F0ZXIgZGF0YSBhdCBhIG5ldyBzdGFydCBvZmZzZXQgKHNhZmV0eS1mYWN0b3JcclxuICogIHJlLXJ1bnMgbW92ZSB0aGUgcml2ZXIgRVRBIGludG8gdGhlIGltcG91bmRtZW50IMOi4oKs4oCdIHdpbmQgKyBwb2x5Z29uIGFyZVxyXG4gKiAgcmV1c2FibGUsIG9ubHkgdGhlIGNsb2NrIHNoaWZ0cykuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWJhc2VPcGVuV2F0ZXJEYXRhKGRhdGEsIHN0YXJ0T2Zmc2V0SHIpIHtcclxuICByZXR1cm4geyAuLi5kYXRhLCBzdGFydE9mZnNldEhyLCBzdGFydFRNczogRGF0ZS5ub3coKSArIHN0YXJ0T2Zmc2V0SHIgKiAzNjAwMDAwIH07XHJcbn1cclxuXHJcbmNvbnN0IENPTVBBU1MgPSBbXCJOXCIsIFwiTk5FXCIsIFwiTkVcIiwgXCJFTkVcIiwgXCJFXCIsIFwiRVNFXCIsIFwiU0VcIiwgXCJTU0VcIiwgXCJTXCIsIFwiU1NXXCIsIFwiU1dcIiwgXCJXU1dcIiwgXCJXXCIsIFwiV05XXCIsIFwiTldcIiwgXCJOTldcIl07XHJcbmNvbnN0IGNvbXBhc3MgPSAoZGVnKSA9PiBDT01QQVNTW01hdGgucm91bmQoKCgoZGVnICUgMzYwKSArIDM2MCkgJSAzNjApIC8gMjIuNSkgJSAxNl07XHJcblxyXG4vKiogY29tcHV0ZU9wZW5XYXRlciDDouKCrOKAnSBwdXJlIGdpdmVuIGRhdGEgKyBjb25maWcgKHNlZWRlZCBSTkcgaW4gcnVuUmVjb3JkKS4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVPcGVuV2F0ZXIoZGF0YSwgY29uZmlnID0ge30pIHtcclxuICBjb25zdCBvdyA9IHsgLi4uREVGQVVMVF9PUEVOV0FURVIsIC4uLihjb25maWcub3BlbldhdGVyIHx8IHt9KSB9O1xyXG4gIC8vIGNvYXN0YWwgd2F0ZXIgaXMgbW9yZSBlbmVyZ2V0aWMgw6LigqzigJ0gYnVtcCB0aGUgZGlmZnVzaW9uIGRlZmF1bHQgdW5sZXNzIHRoZVxyXG4gIC8vIGNvbmZpZyBleHBsaWNpdGx5IHNldCBvbmVcclxuICBpZiAoZGF0YS5jb2FzdGFsICYmIChjb25maWcub3BlbldhdGVyPy5kaWZmdXNpb25NMnMgPT09IHVuZGVmaW5lZCkpIHtcclxuICAgIG93LmRpZmZ1c2lvbk0ycyA9IG93LmNvYXN0YWxEaWZmdXNpb25NMnM7XHJcbiAgfVxyXG4gIGNvbnN0IGxvZyA9IChtKSA9PiAoeyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH0pLnZlcmJvc2UgJiYgY29uc29sZS5sb2cobSk7XHJcbiAgY29uc3QgdDAgPSBEYXRlLm5vdygpO1xyXG4gIGNvbnN0IHByb2ogPSBvd1Byb2plY3Rpb24oZGF0YS5sYXQsIGRhdGEubG9uKTtcclxuICBjb25zdCByaW5nc1hZID0gZGF0YS53YXRlcmJvZHkucmluZ3MubWFwKChyKSA9PiByLm1hcCgoW2xvLCBsYV0pID0+IHByb2oudG9YWShsYSwgbG8pKSk7XHJcbiAgY29uc3QgaW5kZXggPSBvd1Nob3JlbGluZUluZGV4KHJpbmdzWFkpO1xyXG5cclxuICAvLyBjb2FzdGFsIHRpZGFsLWN1cnJlbnQgZmllbGQ6IGludmVyc2UtZGlzdGFuY2Utc3F1YXJlZCBibGVuZCBvZiB0aGVcclxuICAvLyBzdGF0aW9uIHZlY3RvcnMgKDEwMCBtIGZsb29yIGtlZXBzIGEgY2xpY2sgb24gdG9wIG9mIGEgc3RhdGlvbiBmaW5pdGUpXHJcbiAgbGV0IGN1cnJlbnRBdCA9IG51bGw7XHJcbiAgaWYgKGRhdGEuY3VycmVudFN0YXRpb25zICYmIGRhdGEuY3VycmVudFN0YXRpb25zLmxlbmd0aCkge1xyXG4gICAgY29uc3Qgc3RzID0gZGF0YS5jdXJyZW50U3RhdGlvbnMubWFwKChzKSA9PiB7XHJcbiAgICAgIGNvbnN0IFtzeCwgc3ldID0gcHJvai50b1hZKHMubGF0LCBzLmxvbik7XHJcbiAgICAgIHJldHVybiB7IHN4LCBzeSwgc2VyaWVzOiBzLnNlcmllcyB9O1xyXG4gICAgfSk7XHJcbiAgICBjdXJyZW50QXQgPSAoeCwgeSwgdE1zKSA9PiB7XHJcbiAgICAgIGxldCB3dSA9IDAsIHd2ID0gMCwgd3N1bSA9IDA7XHJcbiAgICAgIGZvciAoY29uc3QgcyBvZiBzdHMpIHtcclxuICAgICAgICBjb25zdCBkeCA9IHggLSBzLnN4LCBkeSA9IHkgLSBzLnN5O1xyXG4gICAgICAgIGNvbnN0IHcgPSAxIC8gTWF0aC5tYXgoZHggKiBkeCArIGR5ICogZHksIDFlNCk7XHJcbiAgICAgICAgY29uc3QgW3UsIHZdID0gb3dXaW5kQXQocy5zZXJpZXMsIHRNcyk7XHJcbiAgICAgICAgd3UgKz0gdyAqIHU7IHd2ICs9IHcgKiB2OyB3c3VtICs9IHc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFt3dSAvIHdzdW0sIHd2IC8gd3N1bV07XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2ltQXJncyA9IHtcclxuICAgIHgwOiAwLCB5MDogMCwgdE1zMDogZGF0YS5zdGFydFRNcywgd2luZFNlcmllczogZGF0YS53aW5kU2VyaWVzLCBpbmRleCwgb3csIGN1cnJlbnRBdCxcclxuICB9O1xyXG4gIGNvbnN0IGJlc3QgPSBvd1NpbXVsYXRlKHsgLi4uc2ltQXJncywgdW5jZXJ0YWludHk6IGZhbHNlLCBzZWVkOiBvdy5zZWVkIH0pO1xyXG4gIGNvbnN0IHJlZ3JldCA9IG93U2ltdWxhdGUoeyAuLi5zaW1BcmdzLCB1bmNlcnRhaW50eTogdHJ1ZSwgc2VlZDogb3cuc2VlZCArIDEgfSk7XHJcblxyXG4gIGNvbnN0IHRvTGF0TG9uUmluZyA9IChodWxsWFkpID0+XHJcbiAgICBodWxsWFkubGVuZ3RoID49IDMgPyBbLi4uaHVsbFhZLCBodWxsWFlbMF1dLm1hcCgoW3gsIHldKSA9PiB7XHJcbiAgICAgIGNvbnN0IFtsYSwgbG9dID0gcHJvai50b0xhdExvbih4LCB5KTtcclxuICAgICAgcmV0dXJuIFtNYXRoLnJvdW5kKGxvICogMWU2KSAvIDFlNiwgTWF0aC5yb3VuZChsYSAqIDFlNikgLyAxZTZdO1xyXG4gICAgfSkgOiBudWxsO1xyXG5cclxuICBjb25zdCBob3VybHkgPSBiZXN0LmhvdXJseS5maWx0ZXIoKGgpID0+IGguaHIgPiAwKS5tYXAoKGgpID0+IHtcclxuICAgIGNvbnN0IFtjbGEsIGNsb10gPSBwcm9qLnRvTGF0TG9uKC4uLmguY2VudHJvaWRYWSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBob3VyOiBoLmhyLFxyXG4gICAgICBhYnNfaHI6IE1hdGgucm91bmQoKGRhdGEuc3RhcnRPZmZzZXRIciArIGguaHIpICogMTAwKSAvIDEwMCxcclxuICAgICAgY2VudHJvaWQ6IHsgbGF0OiBNYXRoLnJvdW5kKGNsYSAqIDFlNikgLyAxZTYsIGxvbjogTWF0aC5yb3VuZChjbG8gKiAxZTYpIC8gMWU2IH0sXHJcbiAgICAgIGh1bGw6IHRvTGF0TG9uUmluZyhjb252ZXhIdWxsKGgucG9zaXRpb25zKSksXHJcbiAgICAgIGJlYWNoZWRfY291bnQ6IGguYmVhY2hlZENvdW50LFxyXG4gICAgfTtcclxuICB9KTtcclxuICBjb25zdCB1bmNlcnRhaW50eUhvdXJseSA9IHJlZ3JldC5ob3VybHkuZmlsdGVyKChoKSA9PiBoLmhyID4gMCkubWFwKChoKSA9PiAoe1xyXG4gICAgaG91cjogaC5ociwgaHVsbDogdG9MYXRMb25SaW5nKGNvbnZleEh1bGwoaC5wb3NpdGlvbnMpKSxcclxuICB9KSk7XHJcblxyXG4gIC8vIHNob3JlbGluZSBpbXBhY3RzOiBjbHVzdGVyIGJlYWNoZWQgcGFydGljbGVzIGludG8gY29udGlndW91cyBzaG9yZSBhcmNzXHJcbiAgY29uc3QgeyBzZWdNZXRhIH0gPSBpbmRleDtcclxuICBjb25zdCBieVJpbmcgPSBuZXcgTWFwKCk7XHJcbiAgZm9yIChjb25zdCBwIG9mIGJlc3QucGFydGljbGVzKSB7XHJcbiAgICBpZiAocC5iZWFjaFNlZyA9PT0gbnVsbCkgY29udGludWU7XHJcbiAgICBjb25zdCBtID0gc2VnTWV0YVtwLmJlYWNoU2VnXTtcclxuICAgIGxldCBhcnIgPSBieVJpbmcuZ2V0KG0ucmluZyk7XHJcbiAgICBpZiAoIWFycikgeyBhcnIgPSBbXTsgYnlSaW5nLnNldChtLnJpbmcsIGFycik7IH1cclxuICAgIGFyci5wdXNoKHsgb3JkOiBtLm9yZCwgaHI6IChwLmJlYWNoVE1zIC0gZGF0YS5zdGFydFRNcykgLyAzNjAwMDAwIH0pO1xyXG4gIH1cclxuICBjb25zdCBpbXBhY3RzID0gW107XHJcbiAgZm9yIChjb25zdCBbcmluZ0lkeCwgaGl0c10gb2YgYnlSaW5nKSB7XHJcbiAgICBoaXRzLnNvcnQoKGEsIGIpID0+IGEub3JkIC0gYi5vcmQpO1xyXG4gICAgY29uc3QgcmluZyA9IGRhdGEud2F0ZXJib2R5LnJpbmdzW3JpbmdJZHhdO1xyXG4gICAgbGV0IGNsID0gbnVsbDtcclxuICAgIGNvbnN0IGZsdXNoID0gKCkgPT4geyBpZiAoY2wpIHsgaW1wYWN0cy5wdXNoKGNsKTsgY2wgPSBudWxsOyB9IH07XHJcbiAgICBmb3IgKGNvbnN0IGggb2YgaGl0cykge1xyXG4gICAgICBpZiAoY2wgJiYgaC5vcmQgLSBjbC5tYXhPcmQgPD0gb3cuc2hvcmVHYXBTZWdzKSB7XHJcbiAgICAgICAgY2wubWF4T3JkID0gTWF0aC5tYXgoY2wubWF4T3JkLCBoLm9yZCk7XHJcbiAgICAgICAgY2wuaHJzLnB1c2goaC5ocik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmx1c2goKTtcclxuICAgICAgICBjbCA9IHsgcmluZzogcmluZ0lkeCwgbWluT3JkOiBoLm9yZCwgbWF4T3JkOiBoLm9yZCwgaHJzOiBbaC5ocl0gfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmx1c2goKTtcclxuICAgIC8vIE5PVEU6IGEgY2x1c3RlciB3cmFwcGluZyBhIHJpbmcncyBpbmRleCBvcmlnaW4gc3BsaXRzIGluIHR3byDDouKCrOKAnSBjb3NtZXRpY1xyXG4gICAgZm9yIChjb25zdCBjIG9mIGltcGFjdHMuZmlsdGVyKChjKSA9PiBjLnJpbmcgPT09IHJpbmdJZHggJiYgIWMubGluZSkpIHtcclxuICAgICAgY29uc3QgcHRzID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSBjLm1pbk9yZDsgaSA8PSBNYXRoLm1pbihjLm1heE9yZCArIDEsIHJpbmcubGVuZ3RoIC0gMSk7IGkrKykgcHRzLnB1c2gocmluZ1tpXSk7XHJcbiAgICAgIGlmIChwdHMubGVuZ3RoIDwgMikgcHRzLnB1c2gocmluZ1tNYXRoLm1pbihjLm1heE9yZCwgcmluZy5sZW5ndGggLSAxKV0pO1xyXG4gICAgICBsZXQgbGVuTSA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBsZW5NICs9IGhhdmVyc2luZU0ocHRzW2kgLSAxXVsxXSwgcHRzW2kgLSAxXVswXSwgcHRzW2ldWzFdLCBwdHNbaV1bMF0pO1xyXG4gICAgICBjLmhycy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgICAgIGNvbnN0IG1pZCA9IHB0c1socHRzLmxlbmd0aCAvIDIpIHwgMF07XHJcbiAgICAgIGMubGluZSA9IHB0cy5tYXAoKFtsbywgbGFdKSA9PiBbTWF0aC5yb3VuZChsbyAqIDFlNikgLyAxZTYsIE1hdGgucm91bmQobGEgKiAxZTYpIC8gMWU2XSk7XHJcbiAgICAgIGMub3V0ID0ge1xyXG4gICAgICAgIGNvdW50OiBjLmhycy5sZW5ndGgsXHJcbiAgICAgICAgc2hhcmVfcGN0OiBNYXRoLnJvdW5kKCgxMDAwICogYy5ocnMubGVuZ3RoKSAvIG93Lm5QYXJ0aWNsZXMpIC8gMTAsXHJcbiAgICAgICAgZmlyc3RfaHI6IE1hdGgucm91bmQoYy5ocnNbMF0gKiAxMCkgLyAxMCxcclxuICAgICAgICBmaXJzdF9hYnNfaHI6IE1hdGgucm91bmQoKGRhdGEuc3RhcnRPZmZzZXRIciArIGMuaHJzWzBdKSAqIDEwKSAvIDEwLFxyXG4gICAgICAgIG1lZGlhbl9ocjogTWF0aC5yb3VuZChjLmhyc1soYy5ocnMubGVuZ3RoIC8gMikgfCAwXSAqIDEwKSAvIDEwLFxyXG4gICAgICAgIGxlbmd0aF9tOiBNYXRoLnJvdW5kKGxlbk0pLFxyXG4gICAgICAgIGNlbnRlcjogeyBsYXQ6IG1pZFsxXSwgbG9uOiBtaWRbMF0gfSxcclxuICAgICAgICBsaW5lOiBjLmxpbmUsXHJcbiAgICAgICAgYm9vbTogZXN0aW1hdGVTaG9yZWxpbmVCb29tKGxlbk0pLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBzaG9yZUltcGFjdHMgPSBpbXBhY3RzLm1hcCgoYykgPT4gYy5vdXQpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYi5jb3VudCAtIGEuY291bnQpXHJcbiAgICAuc2xpY2UoMCwgb3cubWF4U2hvcmVJbXBhY3RzKVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IGEuZmlyc3RfaHIgLSBiLmZpcnN0X2hyKTtcclxuXHJcbiAgLy8gc2l0ZSBFVEFzOiBmaXJzdCBob3VyIGFueSBiZXN0LWd1ZXNzIHBhcnRpY2xlIGNvbWVzIHdpdGhpbiB0aGUgYnVmZmVyXHJcbiAgY29uc3Qgc2l0ZXMgPSBbXTtcclxuICBmb3IgKGNvbnN0IHNldCBvZiBkYXRhLnNpdGVTZXRzIHx8IFtdKSB7XHJcbiAgICBjb25zdCBidWYgPSBzZXQuYnVmZmVyX20gPz8gNDAwO1xyXG4gICAgZm9yIChjb25zdCBmIG9mIHNldC5mZWF0cyB8fCBbXSkge1xyXG4gICAgICBpZiAoZi5sYXQgPT09IHVuZGVmaW5lZCB8fCBmLmxvbiA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgY29uc3QgW2Z4LCBmeV0gPSBwcm9qLnRvWFkoZi5sYXQsIGYubG9uKTtcclxuICAgICAgbGV0IGV0YSA9IG51bGwsIG9mZnNldCA9IG51bGw7XHJcbiAgICAgIGZvciAoY29uc3QgaCBvZiBiZXN0LmhvdXJseSkge1xyXG4gICAgICAgIGlmIChoLmhyID09PSAwKSBjb250aW51ZTtcclxuICAgICAgICBsZXQgZG1pbiA9IEluZmluaXR5O1xyXG4gICAgICAgIGZvciAoY29uc3QgW3gsIHldIG9mIGgucG9zaXRpb25zKSB7XHJcbiAgICAgICAgICBjb25zdCBkID0gTWF0aC5oeXBvdCh4IC0gZngsIHkgLSBmeSk7XHJcbiAgICAgICAgICBpZiAoZCA8IGRtaW4pIGRtaW4gPSBkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZG1pbiA8PSBidWYpIHsgZXRhID0gaC5ocjsgb2Zmc2V0ID0gTWF0aC5yb3VuZChkbWluKTsgYnJlYWs7IH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoZXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgeyBsYXQ6IF9hLCBsb246IF9iLCAuLi5yZXN0IH0gPSBmO1xyXG4gICAgICAgIHNpdGVzLnB1c2goe1xyXG4gICAgICAgICAgLi4ucmVzdCxcclxuICAgICAgICAgIGV0YV9ocjogTWF0aC5yb3VuZCgoZGF0YS5zdGFydE9mZnNldEhyICsgZXRhKSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgICBvZmZzZXRfbTogb2Zmc2V0LFxyXG4gICAgICAgICAgb3Blbl93YXRlcjogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzaXRlcy5zb3J0KChhLCBiKSA9PiBhLmV0YV9ociAtIGIuZXRhX2hyKTtcclxuXHJcbiAgLy8gZG93bndpbmQgaGVhZGxpbmUgZnJvbSB0aGUgZmlyc3QtMTJoIG1lYW4gd2luZCArIGVhcmxpZXN0IGFycml2YWxzXHJcbiAgY29uc3Qgd2FybmluZ3MgPSBbXTtcclxuICBsZXQgaGVhZGxpbmUgPSBudWxsO1xyXG4gIHtcclxuICAgIGxldCBzdSA9IDAsIHN2ID0gMCwgbiA9IDA7XHJcbiAgICBmb3IgKGxldCBociA9IDA7IGhyIDwgMTI7IGhyKyspIHtcclxuICAgICAgY29uc3QgW3UsIHZdID0gb3dXaW5kQXQoZGF0YS53aW5kU2VyaWVzLCBkYXRhLnN0YXJ0VE1zICsgaHIgKiAzNjAwMDAwKTtcclxuICAgICAgc3UgKz0gdTsgc3YgKz0gdjsgbisrO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3BkID0gTWF0aC5oeXBvdChzdSAvIG4sIHN2IC8gbik7XHJcbiAgICBjb25zdCB0b3dhcmREZWcgPSAoTWF0aC5hdGFuMihzdSAvIG4sIHN2IC8gbikgKiAxODApIC8gTWF0aC5QSTtcclxuICAgIGNvbnN0IGJlc3RGaXJzdCA9IHNob3JlSW1wYWN0cy5sZW5ndGggPyBzaG9yZUltcGFjdHNbMF0gOiBudWxsO1xyXG4gICAgY29uc3QgcmVncmV0VGltZXMgPSByZWdyZXQucGFydGljbGVzLmZpbHRlcigocCkgPT4gcC5iZWFjaFRNcyAhPT0gbnVsbClcclxuICAgICAgLm1hcCgocCkgPT4gKHAuYmVhY2hUTXMgLSBkYXRhLnN0YXJ0VE1zKSAvIDM2MDAwMDApLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICAgIGNvbnN0IGVhcmx5ID0gcmVncmV0VGltZXMubGVuZ3RoID8gTWF0aC5yb3VuZChyZWdyZXRUaW1lc1swXSAqIDEwKSAvIDEwIDogbnVsbDtcclxuICAgIGNvbnN0IGN1ck5vdGUgPSBjdXJyZW50QXRcclxuICAgICAgPyBgICsgdGlkYWwgY3VycmVudHMgKCR7ZGF0YS5jdXJyZW50U3RhdGlvbnMubGVuZ3RofSBzdGF0aW9uJHtkYXRhLmN1cnJlbnRTdGF0aW9ucy5sZW5ndGggPiAxID8gXCJzXCIgOiBcIlwifSlgXHJcbiAgICAgIDogXCJcIjtcclxuICAgIGhlYWRsaW5lID1cclxuICAgICAgYFdpbmQgJHtzcGQudG9GaXhlZCgxKX0gbS9zIMOi4oCg4oCZIGRyaWZ0aW5nICR7Y29tcGFzcyh0b3dhcmREZWcpfSR7Y3VyTm90ZX1gICtcclxuICAgICAgKGJlc3RGaXJzdFxyXG4gICAgICAgID8gYDsgZmlyc3Qgc2hvcmVsaW5lIGFycml2YWwgfiR7ZWFybHkgIT09IG51bGwgJiYgZWFybHkgPCBiZXN0Rmlyc3QuZmlyc3RfaHIgPyBlYXJseSArIFwiw6LigqzigJxcIiA6IFwiXCJ9JHtiZXN0Rmlyc3QuZmlyc3RfaHJ9IGhgXHJcbiAgICAgICAgOiBgOyBubyBzaG9yZWxpbmUgYXJyaXZhbCB3aXRoaW4gJHtvdy5kdXJhdGlvbkhyfSBoIChiZXN0IGd1ZXNzKWApO1xyXG4gICAgaWYgKHNwZCA8IDEuNSAmJiAhY3VycmVudEF0KSB3YXJuaW5ncy5wdXNoKFxyXG4gICAgICBcIkxpZ2h0L3ZhcmlhYmxlIHdpbmQgw6LigqzigJ0gZHJpZnQgZGlyZWN0aW9uIGlzIExPVyBDT05GSURFTkNFOyB0cmVhdCB0aGUgdW5jZXJ0YWludHkgZW52ZWxvcGUgYXMgdGhlIHBsYW5uaW5nIGZvb3RwcmludC5cIik7XHJcbiAgfVxyXG4gIGlmIChkYXRhLmNvYXN0YWwgJiYgIWN1cnJlbnRBdCkge1xyXG4gICAgd2FybmluZ3MudW5zaGlmdChcclxuICAgICAgYE5vIENPLU9QUyBjdXJyZW50LXByZWRpY3Rpb24gc3RhdGlvbiB3aXRoaW4gcmFuZ2Ugw6LigqzigJ0gQ09BU1RBTCBkcmlmdCBpcyB3aW5kLW9ubHkgaGVyZTsgYCArXHJcbiAgICAgIGB0aWRhbCB0cmFuc3BvcnQgaXMgTk9UIG1vZGVsZWQgYW5kIGNhbiBkb21pbmF0ZS4gVHJlYXQgd2l0aCBjYXV0aW9uLmApO1xyXG4gIH1cclxuICBpZiAoY3VycmVudEF0KSB7XHJcbiAgICB3YXJuaW5ncy5wdXNoKFxyXG4gICAgICBgVGlkYWwgY3VycmVudHMgYmxlbmRlZCBmcm9tICR7ZGF0YS5jdXJyZW50U3RhdGlvbnMubWFwKChzKSA9PiBzLmlkKS5qb2luKFwiLCBcIil9IGAgK1xyXG4gICAgICBgKG5lYXJlc3QgJHtkYXRhLmN1cnJlbnRTdGF0aW9uc1swXS5kaXN0X2ttfSBrbSkgw6LigqzigJ0gc3RhdGlvbi1heGlzIHByZWRpY3Rpb25zLCBub3QgYSBjaXJjdWxhdGlvbiBtb2RlbDsgYCArXHJcbiAgICAgIGBhY2N1cmFjeSBkZWdyYWRlcyBhd2F5IGZyb20gdGhlIHN0YXRpb25zLmApO1xyXG4gIH1cclxuICB3YXJuaW5ncy5wdXNoKFxyXG4gICAgXCJPcGVuLXdhdGVyIG1vZGVsOiBzdXJmYWNlIHRyYW5zcG9ydCBvbmx5IChHTk9NRS1jbGFzcyBwaHlzaWNzKSDDouKCrOKAnSBubyB3ZWF0aGVyaW5nOyBFVEFzIGRlcGVuZCBvbiB0aGUgd2luZCBmb3JlY2FzdFwiICtcclxuICAgIChjdXJyZW50QXQgPyBcIiBhbmQgcHJlZGljdGVkIHRpZGFsIGN1cnJlbnRzLlwiIDogXCI7IGxha2UtY2lyY3VsYXRpb24gY3VycmVudHMgYXJlIG5vdCBtb2RlbGVkLlwiKSk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgIG1vZGU6IFwib3Blbi13YXRlclwiLFxyXG4gICAgY29hc3RhbDogISFkYXRhLmNvYXN0YWwsXHJcbiAgICB3YXRlcmJvZHk6IHsgbmFtZTogZGF0YS53YXRlcmJvZHkubmFtZSwgYXJlYV9zcWttOiBkYXRhLndhdGVyYm9keS5hcmVhX3Nxa20sIGZ0eXBlOiBkYXRhLndhdGVyYm9keS5mdHlwZSB9LFxyXG4gICAgc3BpbGxfcG9pbnQ6IHsgbGF0OiBkYXRhLmxhdCwgbG9uOiBkYXRhLmxvbiB9LFxyXG4gICAgc3RhcnRfb2Zmc2V0X2hyOiBkYXRhLnN0YXJ0T2Zmc2V0SHIsXHJcbiAgICBkdXJhdGlvbl9ocjogb3cuZHVyYXRpb25IcixcclxuICAgIGhlYWRsaW5lLFxyXG4gICAgaG91cmx5LFxyXG4gICAgdW5jZXJ0YWludHlfaG91cmx5OiB1bmNlcnRhaW50eUhvdXJseSxcclxuICAgIHNob3JlX2ltcGFjdHM6IHNob3JlSW1wYWN0cyxcclxuICAgIHNpdGVzLFxyXG4gICAgd2FybmluZ3MsXHJcbiAgICBzdGF0czoge1xyXG4gICAgICBuX3BhcnRpY2xlczogb3cublBhcnRpY2xlcyxcclxuICAgICAgYmVhY2hlZF9maW5hbDogYmVzdC5wYXJ0aWNsZXMuZmlsdGVyKChwKSA9PiBwLmJlYWNoZWQpLmxlbmd0aCxcclxuICAgICAgZXZlcl9iZWFjaGVkOiBiZXN0LnBhcnRpY2xlcy5maWx0ZXIoKHApID0+IHAuYmVhY2hUTXMgIT09IG51bGwpLmxlbmd0aCxcclxuICAgICAgY29tcHV0ZV9tczogRGF0ZS5ub3coKSAtIHQwLFxyXG4gICAgfSxcclxuICAgIHJ1blJlY29yZDoge1xyXG4gICAgICBlbmdpbmVfdmVyc2lvbjogRU5HSU5FX1ZFUlNJT04sXHJcbiAgICAgIG1vZGU6IFwib3Blbi13YXRlclwiLFxyXG4gICAgICBnZW5lcmF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgZGF0YV9mZXRjaGVkX2F0OiBkYXRhLmZldGNoZWRBdCxcclxuICAgICAgc3BpbGxfcG9pbnQ6IHsgbGF0OiBkYXRhLmxhdCwgbG9uOiBkYXRhLmxvbiB9LFxyXG4gICAgICB3YXRlcmJvZHk6IHsgbmFtZTogZGF0YS53YXRlcmJvZHkubmFtZSwgYXJlYV9zcWttOiBkYXRhLndhdGVyYm9keS5hcmVhX3Nxa20sIGZ0eXBlOiBkYXRhLndhdGVyYm9keS5mdHlwZSwgcmluZ3M6IGRhdGEud2F0ZXJib2R5LnJpbmdzLmxlbmd0aCB9LFxyXG4gICAgICB3aW5kX3NvdXJjZTogZGF0YS53aW5kU291cmNlLFxyXG4gICAgICB3aW5kX3BvaW50czogZGF0YS53aW5kU2VyaWVzLmxlbmd0aCxcclxuICAgICAgY29hc3RhbDogISFkYXRhLmNvYXN0YWwsXHJcbiAgICAgIGN1cnJlbnRfc3RhdGlvbnM6IChkYXRhLmN1cnJlbnRTdGF0aW9ucyB8fCBbXSkubWFwKChzKSA9PiAoeyBpZDogcy5pZCwgbmFtZTogcy5uYW1lLCBkaXN0X2ttOiBzLmRpc3Rfa20gfSkpLFxyXG4gICAgICBzdGFydF9vZmZzZXRfaHI6IGRhdGEuc3RhcnRPZmZzZXRIcixcclxuICAgICAgc2VlZDogb3cuc2VlZCxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgbl9wYXJ0aWNsZXM6IG93Lm5QYXJ0aWNsZXMsIGR1cmF0aW9uX2hyOiBvdy5kdXJhdGlvbkhyLCB0aW1lc3RlcF9zOiBvdy50aW1lc3RlcFMsXHJcbiAgICAgICAgd2luZGFnZTogW293LndpbmRhZ2VNaW4sIG93LndpbmRhZ2VNYXhdLCBkaWZmdXNpb25fbTJzOiBvdy5kaWZmdXNpb25NMnMsXHJcbiAgICAgICAgcmVmbG9hdF9oYWxmX2xpZmVfaHI6IG93LnJlZmxvYXRIYWxmTGlmZUhyLFxyXG4gICAgICB9LFxyXG4gICAgICBzaG9yZWxpbmVfc2VnbWVudHM6IGluZGV4LnNlZ3MubGVuZ3RoLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxvZyhgICBPUEVOIFdBVEVSOiAke2RhdGEud2F0ZXJib2R5Lm5hbWV9IMOi4oKs4oCdICR7cmVzdWx0LnN0YXRzLmV2ZXJfYmVhY2hlZH0vJHtvdy5uUGFydGljbGVzfSBiZWFjaGVkLCBgICtcclxuICAgIGAke3Nob3JlSW1wYWN0cy5sZW5ndGh9IHNob3JlIGltcGFjdHMsICR7c2l0ZXMubGVuZ3RofSBzaXRlcywgJHtyZXN1bHQuc3RhdHMuY29tcHV0ZV9tc30gbXNgKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuT3BlbldhdGVyKGxhdCwgbG9uLCBjb25maWcgPSB7fSwgd2F0ZXJib2R5ID0gbnVsbCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaE9wZW5XYXRlckRhdGEobGF0LCBsb24sIGNvbmZpZywgd2F0ZXJib2R5KTtcclxuICByZXR1cm4gY29tcHV0ZU9wZW5XYXRlcihkYXRhLCBjb25maWcpO1xyXG59XHJcblxyXG4vKiogUml2ZXIgdHJhY2UgZW5kZWQgYXQgYW4gaW1wb3VuZG1lbnQgw6LigKDigJkgY29udGludWUgYXMgb3BlbiB3YXRlciBmcm9tIHRoZVxyXG4gKiAgZW50cnkgcG9pbnQsIGNsb2NrIG9mZnNldCBieSB0aGUgcml2ZXIgRVRBLiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuT3BlbldhdGVyQ29udGludWF0aW9uKHJpdmVyUmVzdWx0LCBjb25maWcgPSB7fSkge1xyXG4gIGNvbnN0IHNwID0gcml2ZXJSZXN1bHQuaW1wb3VuZF9zdG9wX3BvaW50O1xyXG4gIGlmICghc3ApIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaE9wZW5XYXRlckRhdGEoc3AubGF0LCBzcC5sb24sIGNvbmZpZywgbnVsbCwgc3AuZXRhX2hyKTtcclxuICBjb25zdCBvd1JlcyA9IGNvbXB1dGVPcGVuV2F0ZXIoZGF0YSwgY29uZmlnKTtcclxuICBvd1Jlcy5jb250aW51YXRpb25fb2YgPSB7XHJcbiAgICByaXZlcjogcml2ZXJSZXN1bHQucml2ZXJfbmFtZSxcclxuICAgIGVudGVyZWQ6IHNwLm5hbWUsXHJcbiAgICByaXZlcl9ldGFfaHI6IHNwLmV0YV9ocixcclxuICB9O1xyXG4gIG93UmVzLndhcm5pbmdzLnVuc2hpZnQoXHJcbiAgICBgQ29udGludWF0aW9uOiByaXZlciBwbHVtZSBlbnRlcnMgJHtzcC5uYW1lfSBhdCB+JHtzcC5ldGFfaHJ9IGg7IG9wZW4td2F0ZXIgaG91cnMgYmVsb3cgYXJlIEFCU09MVVRFIGZyb20gdGhlIHNwaWxsIChhYnNfaHIpLmApO1xyXG4gIHJldHVybiBvd1JlcztcclxufVxyXG5cclxuLyoqIE9wZW4td2F0ZXIgcmVzdWx0IGFzIEdlb0pTT04gKGh1bGxzLCBjZW50cm9pZCB0cmFjaywgc2hvcmUgaW1wYWN0cykuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b09wZW5XYXRlckdlb0pzb24ob3cpIHtcclxuICBjb25zdCBmZWF0dXJlcyA9IFt7XHJcbiAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgIHByb3BlcnRpZXM6IHsga2luZDogXCJvd19zcGlsbF9wb2ludFwiLCB3YXRlcmJvZHk6IG93LndhdGVyYm9keS5uYW1lLCBoZWFkbGluZTogb3cuaGVhZGxpbmUgfSxcclxuICAgIGdlb21ldHJ5OiB7IHR5cGU6IFwiUG9pbnRcIiwgY29vcmRpbmF0ZXM6IFtvdy5zcGlsbF9wb2ludC5sb24sIG93LnNwaWxsX3BvaW50LmxhdF0gfSxcclxuICB9XTtcclxuICBmZWF0dXJlcy5wdXNoKHtcclxuICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgcHJvcGVydGllczogeyBraW5kOiBcIm93X2NlbnRyb2lkX3RyYWNrXCIgfSxcclxuICAgIGdlb21ldHJ5OiB7IHR5cGU6IFwiTGluZVN0cmluZ1wiLCBjb29yZGluYXRlczogb3cuaG91cmx5Lm1hcCgoaCkgPT4gW2guY2VudHJvaWQubG9uLCBoLmNlbnRyb2lkLmxhdF0pIH0sXHJcbiAgfSk7XHJcbiAgZm9yIChjb25zdCBoIG9mIG93LmhvdXJseSkge1xyXG4gICAgaWYgKGguaHVsbCkgZmVhdHVyZXMucHVzaCh7XHJcbiAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICBwcm9wZXJ0aWVzOiB7IGtpbmQ6IFwib3dfaHVsbFwiLCBob3VyOiBoLmhvdXIsIGFic19ocjogaC5hYnNfaHIsIGJlYWNoZWRfY291bnQ6IGguYmVhY2hlZF9jb3VudCB9LFxyXG4gICAgICBnZW9tZXRyeTogeyB0eXBlOiBcIlBvbHlnb25cIiwgY29vcmRpbmF0ZXM6IFtoLmh1bGxdIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZm9yIChjb25zdCBoIG9mIG93LnVuY2VydGFpbnR5X2hvdXJseSkge1xyXG4gICAgaWYgKGguaHVsbCkgZmVhdHVyZXMucHVzaCh7XHJcbiAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICBwcm9wZXJ0aWVzOiB7IGtpbmQ6IFwib3dfdW5jZXJ0YWludHlfaHVsbFwiLCBob3VyOiBoLmhvdXIgfSxcclxuICAgICAgZ2VvbWV0cnk6IHsgdHlwZTogXCJQb2x5Z29uXCIsIGNvb3JkaW5hdGVzOiBbaC5odWxsXSB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGZvciAoY29uc3QgcyBvZiBvdy5zaG9yZV9pbXBhY3RzKSB7XHJcbiAgICBmZWF0dXJlcy5wdXNoKHtcclxuICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBraW5kOiBcIm93X3Nob3JlX2ltcGFjdFwiLCBmaXJzdF9ocjogcy5maXJzdF9ociwgbWVkaWFuX2hyOiBzLm1lZGlhbl9ocixcclxuICAgICAgICBzaGFyZV9wY3Q6IHMuc2hhcmVfcGN0LCBsZW5ndGhfbTogcy5sZW5ndGhfbSwgYm9vbV9mdDogcy5ib29tID8gcy5ib29tLmJvb21fZnQgOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgICBnZW9tZXRyeTogeyB0eXBlOiBcIkxpbmVTdHJpbmdcIiwgY29vcmRpbmF0ZXM6IHMubGluZSB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiB7IHR5cGU6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIiwgZmVhdHVyZXMgfTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9HcmFwaGljX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfUG9pbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9Qb2x5bGluZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2dlb21ldHJ5RW5naW5lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19HcmFwaGljc0xheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZW1vdGlvbl9yZWFjdF9qc3hfcnVudGltZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqXG4gKiBTcGlsbCBUcmFqZWN0b3J5IHdpZGdldCDigJQgcnVudGltZS5cbiAqXG4gKiBDbGljayBcIlNldCBzcGlsbCBwb2ludFwiIOKGkiBjbGljayB0aGUgbWFwIOKGkiB0aGUgZ29sZGVuLXRlc3RlZCB0cmFjZSBlbmdpbmVcbiAqICh0cmFjZS1lbmdpbmUudHMsIHBhcml0eS12ZXJpZmllZCB2cyB0aGUgUHl0aG9uIG9yYWNsZSkgZHJhd3MgYW4gZXBoZW1lcmFsXG4gKiB0aW1lLWNvbG9yZWQgcGx1bWUgb24gYSBjbGllbnQtc2lkZSBHcmFwaGljc0xheWVyIHdpdGggaG91cmx5IG1hcmtlcnMsXG4gKiBwbHVzIGFuIEVUQS1zb3J0ZWQgc3RyYXRlZ3ktc2l0ZSBsaXN0IGFuZCByZWNlcHRvciB3YXJuaW5ncy5cbiAqIE5vdGhpbmcgaXMgcGVyc2lzdGVkIOKAlCBDbGVhciAob3Igd2lkZ2V0IHVubW91bnQpIHJlbW92ZXMgZXZlcnl0aGluZy5cbiAqL1xuaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgdHlwZSBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcidcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJ1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJ1xuaW1wb3J0IFBvbHlsaW5lIGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9seWxpbmUnXG5pbXBvcnQgUG9pbnQgZnJvbSAnZXNyaS9nZW9tZXRyeS9Qb2ludCdcbmltcG9ydCB7IGdlb2Rlc2ljTGVuZ3RoIH0gZnJvbSAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZSdcbmltcG9ydCB0eXBlIHsgSU1Db25maWcsIFNpdGVMYXllckNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7XG4gIGZldGNoVHJhY2VEYXRhLCBjb21wdXRlVHJhY2UsIGVzdGltYXRlQm9vbU5lZWRzLFxuICByZXNvbHZlVHJhY2VNb2RlLCBmZXRjaE9wZW5XYXRlckRhdGEsIGNvbXB1dGVPcGVuV2F0ZXIsIHJlYmFzZU9wZW5XYXRlckRhdGEsXG59IGZyb20gJy4uL3RyYWNlLWVuZ2luZSdcblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gPSBSZWFjdFxuXG4vLyBFVEEgY29sb3IgYmFuZHM6IDwzIGhyIC8gM+KAkzEyIGhyIC8gMTLigJMyNCBoclxuY29uc3QgQkFORF9DT0xPUlM6IEFycmF5PFtudW1iZXIsIHN0cmluZ10+ID0gW1xuICBbMywgJyNkNzE5MWMnXSxcbiAgWzEyLCAnI2ZkYWU2MSddLFxuICBbMjQsICcjMmM3YmI2J10sXG5dXG5jb25zdCBiYW5kQ29sb3IgPSAoaHI6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGZvciAoY29uc3QgW2xpbSwgY10gb2YgQkFORF9DT0xPUlMpIGlmIChociA8IGxpbSkgcmV0dXJuIGNcbiAgcmV0dXJuICcjMmM3YmI2J1xufVxuY29uc3QgaGV4VG9SZ2IgPSAoaGV4OiBzdHJpbmcpOiBudW1iZXJbXSA9PiBbXG4gIHBhcnNlSW50KGhleC5zbGljZSgxLCAzKSwgMTYpLCBwYXJzZUludChoZXguc2xpY2UoMywgNSksIDE2KSwgcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNiksXG5dXG5cbmludGVyZmFjZSBTaXRlUm93IHtcbiAgbmFtZTogc3RyaW5nXG4gIGV0YV9ocjogbnVtYmVyXG4gIGRpc3Rfa206IG51bWJlclxuICBvZmZzZXRfbTogbnVtYmVyXG4gIHJpdmVyX3dpZHRoX20/OiBudW1iZXJcbiAgdmVsb2NpdHlfbXM/OiBudW1iZXJcbiAgYm9vbT86IHsgYm9vbV9mdDogbnVtYmVyLCBhbmNob3JzOiBudW1iZXIsIGJvb21fYW5nbGVfZGVnPzogbnVtYmVyLCBjYXNjYWRlX2FkdmlzZWQ/OiBib29sZWFuLCBzb3VyY2U6ICdkcmF3bicgfCAnZXN0JyB9XG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuY29uc3Qgbm9ybUd1aWQgPSAodjogYW55KTogc3RyaW5nID0+IFN0cmluZyh2IHx8ICcnKS5yZXBsYWNlKC9be31dL2csICcnKS50b0xvd2VyQ2FzZSgpXG5cbi8qKiBTdW0gZ2VvZGVzaWMgZmVldCBvZiBkcmF3biBib29tIGxpbmVzIHBlciBzaXRlIGtleSAoZS5nLiBTbmFrZSBCb29tX0xpbmVzKS4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRHJhd25Cb29tKGNmZzogeyB1cmw6IHN0cmluZywgc2l0ZUtleUZpZWxkOiBzdHJpbmcsIHdoZXJlPzogc3RyaW5nIH0pOiBQcm9taXNlPE1hcDxzdHJpbmcsIG51bWJlcj4+IHtcbiAgY29uc3QgZmwgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiBjZmcudXJsIH0pXG4gIGNvbnN0IHEgPSBmbC5jcmVhdGVRdWVyeSgpXG4gIHEud2hlcmUgPSBjZmcud2hlcmUgfHwgJzE9MSdcbiAgcS5vdXRGaWVsZHMgPSBbY2ZnLnNpdGVLZXlGaWVsZF1cbiAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcbiAgcS5vdXRTcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiA0MzI2IH0gYXMgYW55XG4gIGNvbnN0IGZzID0gYXdhaXQgZmwucXVlcnlGZWF0dXJlcyhxKVxuICBjb25zdCBvdXQgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpXG4gIGZvciAoY29uc3QgZiBvZiBmcy5mZWF0dXJlcykge1xuICAgIGNvbnN0IGtleSA9IG5vcm1HdWlkKGYuYXR0cmlidXRlc1tjZmcuc2l0ZUtleUZpZWxkXSlcbiAgICBpZiAoIWtleSB8fCAhZi5nZW9tZXRyeSkgY29udGludWVcbiAgICBjb25zdCBmdCA9IGdlb2Rlc2ljTGVuZ3RoKGYuZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlsaW5lLCAnZmVldCcpXG4gICAgaWYgKGZ0ID4gMCkgb3V0LnNldChrZXksIChvdXQuZ2V0KGtleSkgfHwgMCkgKyBmdClcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSA9PiB7XG4gIGNvbnN0IFtqbXYsIHNldEptdl0gPSB1c2VTdGF0ZTxKaW11TWFwVmlldz4obnVsbClcbiAgY29uc3QgW2FybWluZywgc2V0QXJtaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbcnVubmluZywgc2V0UnVubmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCdDbGljayBcIlNldCBzcGlsbCBwb2ludFwiLCB0aGVuIGNsaWNrIHRoZSB3YXRlciAocml2ZXIsIGxha2UsIG9yIHJlc2Vydm9pcikuJylcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPGFueT4obnVsbClcbiAgY29uc3QgW3NhZmV0eSwgc2V0U2FmZXR5XSA9IHVzZVN0YXRlPG51bWJlcj4ocHJvcHMuY29uZmlnLnNhZmV0eUZhY3RvciA/PyAxLjUpXG4gIGNvbnN0IFtkaWFnLCBzZXREaWFnXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcbiAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBsYXllclJlZiA9IHVzZVJlZjxfX2VzcmkuR3JhcGhpY3NMYXllcj4obnVsbClcbiAgY29uc3QgY2xpY2tIYW5kbGVSZWYgPSB1c2VSZWY8X19lc3JpLkhhbmRsZT4obnVsbClcbiAgLy8gY2FjaGVkIGh5ZHJvbG9neSBmb3IgdGhlIGN1cnJlbnQgc3BpbGwgcG9pbnQg4oCUIHNhZmV0eS1mYWN0b3IgY2hhbmdlc1xuICAvLyByZWNvbXB1dGUgZnJvbSB0aGlzIGluc3RhbnRseSBpbnN0ZWFkIG9mIHJlLWZldGNoaW5nIE5MREkvTldJUy5cbiAgLy8gbW9kZSAnb3Blbi13YXRlcicgY2FjaGVzIG93RGF0YSBpbnN0ZWFkIChTRiBkb2VzIG5vdCBhcHBseSB0aGVyZSkuXG4gIGNvbnN0IGNhY2hlUmVmID0gdXNlUmVmPHsgbGF0OiBudW1iZXIsIGxvbjogbnVtYmVyLCBtb2RlPzogc3RyaW5nLCBkYXRhPzogYW55LCBvd0RhdGE/OiBhbnksIGRyYXduPzogTWFwPHN0cmluZywgbnVtYmVyPiwgZmV0Y2hOb3Rlczogc3RyaW5nW10gfSB8IG51bGw+KG51bGwpXG4gIC8vIHJlc2Vydm9pci1jb250aW51YXRpb24gY2FjaGU6IHdpbmQgKyBsYWtlIHBvbHlnb24gcGVyIGltcG91bmRtZW50IHN0b3BcbiAgLy8gcG9pbnQg4oCUIFNGIHJlLXJ1bnMgb25seSBzaGlmdCB0aGUgZW50cnkgY2xvY2sgKHJlYmFzZU9wZW5XYXRlckRhdGEpXG4gIGNvbnN0IG93Q29udFJlZiA9IHVzZVJlZjx7IGtleTogc3RyaW5nLCBkYXRhOiBhbnkgfSB8IG51bGw+KG51bGwpXG5cbiAgLy8gb25lIGdyYXBoaWNzIGxheWVyIHBlciB3aWRnZXQgbGlmZXRpbWU7IHJlbW92ZWQgb24gdW5tb3VudCAoZXBoZW1lcmFsKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoY2xpY2tIYW5kbGVSZWYuY3VycmVudCkgY2xpY2tIYW5kbGVSZWYuY3VycmVudC5yZW1vdmUoKVxuICAgICAgaWYgKGxheWVyUmVmLmN1cnJlbnQgJiYgam12KSBqbXYudmlldy5tYXAucmVtb3ZlKGxheWVyUmVmLmN1cnJlbnQpXG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2ptdl0pXG5cbiAgY29uc3QgZW5zdXJlTGF5ZXIgPSAodmlldzogX19lc3JpLk1hcFZpZXcpOiBfX2VzcmkuR3JhcGhpY3NMYXllciA9PiB7XG4gICAgaWYgKCFsYXllclJlZi5jdXJyZW50KSB7XG4gICAgICBsYXllclJlZi5jdXJyZW50ID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyB0aXRsZTogJ1NwaWxsIHRyYWplY3RvcnkgKGVwaGVtZXJhbCknLCBsaXN0TW9kZTogJ2hpZGUnIH0pXG4gICAgICB2aWV3Lm1hcC5hZGQobGF5ZXJSZWYuY3VycmVudClcbiAgICB9XG4gICAgcmV0dXJuIGxheWVyUmVmLmN1cnJlbnRcbiAgfVxuXG4gIC8vIC0tLS0gcHJvdmlkZXJzOiB3cmFwIGNvbmZpZ3VyZWQgbGF5ZXJzIGZvciB0aGUgZW5naW5lIC0tLS1cbiAgLy8gRmFpbHVyZXMgYXJlIHJlcG9ydGVkIHRvIHRoZSBkaWFnbm9zdGljcyBsaXN0IGluc3RlYWQgb2Yga2lsbGluZyB0aGUgdHJhY2UuXG4gIGNvbnN0IG1ha2VTaXRlUHJvdmlkZXIgPSAobGM6IFNpdGVMYXllckNvbmZpZywgZGVmYXVsdEJ1ZmZlcjogbnVtYmVyLCBsYWJlbDogc3RyaW5nLCBub3Rlczogc3RyaW5nW10pID0+ICh7XG4gICAgYnVmZmVyX206IGxjLmJ1ZmZlck0gPz8gZGVmYXVsdEJ1ZmZlcixcbiAgICBmZXRjaDogYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmwgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiBsYy51cmwgfSlcbiAgICAgICAgY29uc3QgcSA9IGZsLmNyZWF0ZVF1ZXJ5KClcbiAgICAgICAgcS53aGVyZSA9IGxjLndoZXJlIHx8ICcxPTEnXG4gICAgICAgIHEub3V0RmllbGRzID0gW2xjLm5hbWVGaWVsZCwgLi4uKGxjLmV4dHJhRmllbGRzIHx8IFtdKV1cbiAgICAgICAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcbiAgICAgICAgcS5vdXRTcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiA0MzI2IH0gYXMgYW55XG4gICAgICAgIGNvbnN0IGZzID0gYXdhaXQgZmwucXVlcnlGZWF0dXJlcyhxKVxuICAgICAgICBjb25zdCByb3dzID0gZnMuZmVhdHVyZXNcbiAgICAgICAgICAuZmlsdGVyKChmKSA9PiBmLmdlb21ldHJ5ICYmIGYuZ2VvbWV0cnkudHlwZSA9PT0gJ3BvaW50JylcbiAgICAgICAgICAubWFwKChmKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZi5nZW9tZXRyeSBhcyBfX2VzcmkuUG9pbnRcbiAgICAgICAgICAgIGNvbnN0IHJvdzogYW55ID0geyBuYW1lOiBmLmF0dHJpYnV0ZXNbbGMubmFtZUZpZWxkXSwgbGF0OiBnLnksIGxvbjogZy54IH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgZWYgb2YgbGMuZXh0cmFGaWVsZHMgfHwgW10pIHJvd1tlZl0gPSBmLmF0dHJpYnV0ZXNbZWZdXG4gICAgICAgICAgICByZXR1cm4gcm93XG4gICAgICAgICAgfSlcbiAgICAgICAgbm90ZXMucHVzaChgJHtsYWJlbH06ICR7cm93cy5sZW5ndGh9IHBvaW50IGZlYXR1cmVzIGxvYWRlZCAoYnVmZmVyICR7bGMuYnVmZmVyTSA/PyBkZWZhdWx0QnVmZmVyfSBtKWApXG4gICAgICAgIHJldHVybiByb3dzXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG5vdGVzLnB1c2goYCR7bGFiZWx9IEZBSUxFRDogJHtTdHJpbmcoZSkuc2xpY2UoMCwgMTAwKX1gKVxuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICB9LFxuICB9KVxuXG4gIGNvbnN0IG1ha2VXaWR0aFByb3ZpZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHdsID0gcHJvcHMuY29uZmlnLndpZHRoTGF5ZXJcbiAgICBpZiAoIXdsIHx8ICF3bC51cmwpIHJldHVybiBudWxsXG4gICAgY29uc3QgZmwgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiB3bC51cmwgfSlcbiAgICByZXR1cm4gYXN5bmMgKGVudjogeyB4bWluOiBudW1iZXIsIHltaW46IG51bWJlciwgeG1heDogbnVtYmVyLCB5bWF4OiBudW1iZXIgfSkgPT4ge1xuICAgICAgY29uc3QgcSA9IGZsLmNyZWF0ZVF1ZXJ5KClcbiAgICAgIHEud2hlcmUgPSB3bC53aGVyZSB8fCAnMT0xJ1xuICAgICAgcS5nZW9tZXRyeSA9IHsgdHlwZTogJ2V4dGVudCcsIC4uLmVudiwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gfSBhcyBhbnlcbiAgICAgIHEuc3BhdGlhbFJlbGF0aW9uc2hpcCA9ICdpbnRlcnNlY3RzJ1xuICAgICAgcS5vdXRGaWVsZHMgPSBbd2wud2lkdGhGaWVsZF1cbiAgICAgIHEucmV0dXJuR2VvbWV0cnkgPSB0cnVlXG4gICAgICBxLm91dFNwYXRpYWxSZWZlcmVuY2UgPSB7IHdraWQ6IDQzMjYgfSBhcyBhbnlcbiAgICAgIGNvbnN0IGZzID0gYXdhaXQgZmwucXVlcnlGZWF0dXJlcyhxKVxuICAgICAgY29uc3QgbWlkczogQXJyYXk8eyBsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIsIHdpZHRoOiBudW1iZXIgfT4gPSBbXVxuICAgICAgZm9yIChjb25zdCBmIG9mIGZzLmZlYXR1cmVzKSB7XG4gICAgICAgIGNvbnN0IGcgPSBmLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5bGluZVxuICAgICAgICBpZiAoZyAmJiBnLnBhdGhzICYmIGcucGF0aHMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgcCA9IGcucGF0aHNbMF1cbiAgICAgICAgICBjb25zdCBtID0gcFtNYXRoLmZsb29yKHAubGVuZ3RoIC8gMildXG4gICAgICAgICAgbWlkcy5wdXNoKHsgbGF0OiBtWzFdLCBsb246IG1bMF0sIHdpZHRoOiBmLmF0dHJpYnV0ZXNbd2wud2lkdGhGaWVsZF0gfHwgMCB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbWlkc1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0gZHJhd2luZyAtLS0tXG4gIGNvbnN0IGRyYXcgPSAodmlldzogX19lc3JpLk1hcFZpZXcsIHJlczogYW55LCBzcGlsbDogeyBsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIgfSkgPT4ge1xuICAgIGNvbnN0IGxheWVyID0gZW5zdXJlTGF5ZXIodmlldylcbiAgICBsYXllci5yZW1vdmVBbGwoKVxuXG4gICAgLy8gc3BpbGwgcG9pbnRcbiAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xuICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludCh7IGxhdGl0dWRlOiBzcGlsbC5sYXQsIGxvbmdpdHVkZTogc3BpbGwubG9uIH0pLFxuICAgICAgc3ltYm9sOiB7XG4gICAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJywgc3R5bGU6ICd4Jywgc2l6ZTogMTQsXG4gICAgICAgIG91dGxpbmU6IHsgY29sb3I6ICcjMDAwJywgd2lkdGg6IDMgfSxcbiAgICAgIH0gYXMgYW55LFxuICAgICAgcG9wdXBUZW1wbGF0ZTogeyB0aXRsZTogJ1NwaWxsIHBvaW50JywgY29udGVudDogYCR7c3BpbGwubGF0LnRvRml4ZWQoNSl9LCAke3NwaWxsLmxvbi50b0ZpeGVkKDUpfWAgfSBhcyBhbnksXG4gICAgfSkpXG5cbiAgICAvLyB0cmFjZSBwb2x5bGluZSwgc3BsaXQgaW50byBFVEEgY29sb3IgYmFuZHNcbiAgICBjb25zdCByb3dzOiBhbnlbXSA9IHJlcy50cmFjZVxuICAgIGxldCBiYW5kU3RhcnQgPSAwXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZG9uZSA9IGkgPT09IHJvd3MubGVuZ3RoXG4gICAgICBjb25zdCBiYW5kQ2hhbmdlZCA9ICFkb25lICYmIGJhbmRDb2xvcihyb3dzW2ldLmN1bV90aW1lKSAhPT0gYmFuZENvbG9yKHJvd3NbYmFuZFN0YXJ0XS5jdW1fdGltZSlcbiAgICAgIGlmIChkb25lIHx8IGJhbmRDaGFuZ2VkKSB7XG4gICAgICAgIGNvbnN0IHNlZyA9IHJvd3Muc2xpY2UoYmFuZFN0YXJ0LCBNYXRoLm1pbihpICsgMSwgcm93cy5sZW5ndGgpKVxuICAgICAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xuICAgICAgICAgIGdlb21ldHJ5OiBuZXcgUG9seWxpbmUoeyBwYXRoczogW3NlZy5tYXAoKHIpID0+IFtyLmxvbiwgci5sYXRdKV0gYXMgYW55LCBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSBhcyBhbnkgfSksXG4gICAgICAgICAgc3ltYm9sOiB7IHR5cGU6ICdzaW1wbGUtbGluZScsIGNvbG9yOiBiYW5kQ29sb3Iocm93c1tiYW5kU3RhcnRdLmN1bV90aW1lKSwgd2lkdGg6IDQgfSBhcyBhbnksXG4gICAgICAgIH0pKVxuICAgICAgICBiYW5kU3RhcnQgPSBpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSm9ic29uIHVuY2VydGFpbnR5IGJhbmRzOiB0cmFuc2x1Y2VudCB1bmRlcmxheSBmcm9tIGJ1bGsgKHBlYWspIHBvc2l0aW9uXG4gICAgLy8gdG8gZmFydGhlc3QgY3JlZGlibGUgKDk5JSBsZWFkaW5nKSBwb3NpdGlvbiBhdCBlYWNoIGhvdXJcbiAgICBmb3IgKGNvbnN0IGggb2YgcmVzLmhvdXJseSkge1xuICAgICAgaWYgKCFoLmJhbmQpIGNvbnRpbnVlXG4gICAgICBjb25zdCBpMCA9IE1hdGgubWluKGguYmFuZC5wZWFrLmksIGguYmFuZC5mYXN0ZXN0LmkpXG4gICAgICBjb25zdCBpMSA9IE1hdGgubWF4KGguYmFuZC5wZWFrLmksIGguYmFuZC5mYXN0ZXN0LmkpXG4gICAgICBpZiAoaTEgPD0gaTApIGNvbnRpbnVlXG4gICAgICBjb25zdCBzZWcgPSByb3dzLnNsaWNlKGkwLCBpMSArIDEpXG4gICAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xuICAgICAgICBnZW9tZXRyeTogbmV3IFBvbHlsaW5lKHsgcGF0aHM6IFtzZWcubWFwKChyOiBhbnkpID0+IFtyLmxvbiwgci5sYXRdKV0gYXMgYW55LCBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSBhcyBhbnkgfSksXG4gICAgICAgIHN5bWJvbDogeyB0eXBlOiAnc2ltcGxlLWxpbmUnLCBjb2xvcjogWy4uLmhleFRvUmdiKGJhbmRDb2xvcihoLmhvdXIpKSwgMC4yOF0sIHdpZHRoOiAxNCwgY2FwOiAncm91bmQnIH0gYXMgYW55LFxuICAgICAgfSkpXG4gICAgfVxuICAgIC8vIGhvdXJseSBtYXJrZXJzICsgbGFiZWxzXG4gICAgZm9yIChjb25zdCBoIG9mIHJlcy5ob3VybHkpIHtcbiAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQoeyBsYXRpdHVkZTogaC5sYXQsIGxvbmdpdHVkZTogaC5sb24gfSksXG4gICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJywgc2l6ZTogNywgY29sb3I6IGJhbmRDb2xvcihoLmhvdXIpLFxuICAgICAgICAgIG91dGxpbmU6IHsgY29sb3I6ICcjZmZmJywgd2lkdGg6IDEgfSxcbiAgICAgICAgfSBhcyBhbnksXG4gICAgICAgIHBvcHVwVGVtcGxhdGU6IHtcbiAgICAgICAgICB0aXRsZTogYEhvdXIgJHtoLmhvdXJ9YCxcbiAgICAgICAgICBjb250ZW50OiBgJHtoLmN1bV9kaXN0X2ttLnRvRml4ZWQoMSl9IGttIGRvd25zdHJlYW0gwrcgJHtoLnZlbG9jaXR5X21waC50b0ZpeGVkKDEpfSBtcGhgLFxuICAgICAgICB9IGFzIGFueSxcbiAgICAgIH0pKVxuICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludCh7IGxhdGl0dWRlOiBoLmxhdCwgbG9uZ2l0dWRlOiBoLmxvbiB9KSxcbiAgICAgICAgc3ltYm9sOiB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHRleHQ6IGAke2guaG91cn0gaHJgLFxuICAgICAgICAgIGNvbG9yOiBiYW5kQ29sb3IoaC5ob3VyKSxcbiAgICAgICAgICBoYWxvQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICBoYWxvU2l6ZTogMS41LFxuICAgICAgICAgIHlvZmZzZXQ6IDksXG4gICAgICAgICAgZm9udDogeyBzaXplOiAxMCwgd2VpZ2h0OiAnYm9sZCcsIGZhbWlseTogJ3NhbnMtc2VyaWYnIH0sXG4gICAgICAgIH0gYXMgYW55LFxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLSBvcGVuLXdhdGVyIGRyYXdpbmcgKGVuZ2luZSB2MS43OiBsYWtlcy9yZXNlcnZvaXJzLCBHTk9NRS1jbGFzcykgLS0tLVxuICBjb25zdCBvd0h1bGxIb3VycyA9IChvdzogYW55KTogbnVtYmVyW10gPT4ge1xuICAgIGNvbnN0IGF2YWlsID0gb3cuaG91cmx5Lm1hcCgoaDogYW55KSA9PiBoLmhvdXIpXG4gICAgY29uc3Qgd2FudCA9IFszLCA2LCAxMiwgb3cuZHVyYXRpb25faHJdLmZpbHRlcigoaCkgPT4gYXZhaWwuaW5jbHVkZXMoaCkpXG4gICAgaWYgKCF3YW50Lmxlbmd0aCAmJiBhdmFpbC5sZW5ndGgpIHdhbnQucHVzaChhdmFpbFthdmFpbC5sZW5ndGggLSAxXSlcbiAgICByZXR1cm4gd2FudFxuICB9XG5cbiAgY29uc3QgZHJhd09wZW5XYXRlciA9ICh2aWV3OiBfX2VzcmkuTWFwVmlldywgb3c6IGFueSwgYXBwZW5kID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBsYXllciA9IGVuc3VyZUxheWVyKHZpZXcpXG4gICAgaWYgKCFhcHBlbmQpIGxheWVyLnJlbW92ZUFsbCgpXG4gICAgY29uc3QgYWJzSHIgPSAoaDogbnVtYmVyKSA9PiAob3cuc3RhcnRfb2Zmc2V0X2hyIHx8IDApICsgaFxuICAgIC8vIG1pbmltdW0tcmVncmV0IGVudmVsb3BlIChmaW5hbCB1bmNlcnRhaW50eSBodWxsKSB1bmRlciBldmVyeXRoaW5nXG4gICAgY29uc3QgbGFzdFUgPSBvdy51bmNlcnRhaW50eV9ob3VybHlbb3cudW5jZXJ0YWludHlfaG91cmx5Lmxlbmd0aCAtIDFdXG4gICAgaWYgKGxhc3RVPy5odWxsKSB7XG4gICAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xuICAgICAgICBnZW9tZXRyeTogeyB0eXBlOiAncG9seWdvbicsIHJpbmdzOiBbbGFzdFUuaHVsbF0sIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9IH0gYXMgYW55LFxuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLCBjb2xvcjogWzEyMCwgMTIwLCAxMjAsIDAuMDhdLFxuICAgICAgICAgIG91dGxpbmU6IHsgY29sb3I6IFs5MCwgOTAsIDkwLCAwLjhdLCB3aWR0aDogMS41LCBzdHlsZTogJ2Rhc2gnIH0sXG4gICAgICAgIH0gYXMgYW55LFxuICAgICAgICBwb3B1cFRlbXBsYXRlOiB7XG4gICAgICAgICAgdGl0bGU6ICdVbmNlcnRhaW50eSBlbnZlbG9wZScsXG4gICAgICAgICAgY29udGVudDogYE1pbmltdW0tcmVncmV0IGZvb3RwcmludCBhdCBob3VyICR7bGFzdFUuaG91cn0g4oCUIHBsYW4gdG8gdGhpcyBvdXRsaW5lLCBub3QgdGhlIGJlc3QgZ3Vlc3MuYCxcbiAgICAgICAgfSBhcyBhbnksXG4gICAgICB9KSlcbiAgICB9XG4gICAgLy8gYmVzdC1ndWVzcyBodWxscywgbGF0ZXN0IGZpcnN0IHNvIGVhcmx5IChzbWFsbCkgaHVsbHMgc3RheSBvbiB0b3BcbiAgICBjb25zdCBocnMgPSBvd0h1bGxIb3VycyhvdylcbiAgICBmb3IgKGNvbnN0IGhyIG9mIFsuLi5ocnNdLnJldmVyc2UoKSkge1xuICAgICAgY29uc3QgaCA9IG93LmhvdXJseS5maW5kKCh4OiBhbnkpID0+IHguaG91ciA9PT0gaHIpXG4gICAgICBpZiAoIWg/Lmh1bGwpIGNvbnRpbnVlXG4gICAgICBjb25zdCBjID0gYmFuZENvbG9yKGFic0hyKGhyKSlcbiAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICAgIGdlb21ldHJ5OiB7IHR5cGU6ICdwb2x5Z29uJywgcmluZ3M6IFtoLmh1bGxdLCBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSB9IGFzIGFueSxcbiAgICAgICAgc3ltYm9sOiB7IHR5cGU6ICdzaW1wbGUtZmlsbCcsIGNvbG9yOiBbLi4uaGV4VG9SZ2IoYyksIDAuMTVdLCBvdXRsaW5lOiB7IGNvbG9yOiBjLCB3aWR0aDogMiB9IH0gYXMgYW55LFxuICAgICAgICBwb3B1cFRlbXBsYXRlOiB7XG4gICAgICAgICAgdGl0bGU6IGBIb3VyICR7YWJzSHIoaHIpfSR7b3cuc3RhcnRfb2Zmc2V0X2hyID8gJyAoYWJzb2x1dGUgZnJvbSBzcGlsbCknIDogJyd9YCxcbiAgICAgICAgICBjb250ZW50OiBgQmVzdC1ndWVzcyBwbHVtZSBmb290cHJpbnQgwrcgJHtoLmJlYWNoZWRfY291bnR9LyR7b3cuc3RhdHMubl9wYXJ0aWNsZXN9IHBhcnRpY2xlcyBhc2hvcmVgLFxuICAgICAgICB9IGFzIGFueSxcbiAgICAgIH0pKVxuICAgIH1cbiAgICAvLyBjZW50cm9pZCBkcmlmdCB0cmFjayArIGxhYmVscyBhdCBkcmF3biBodWxsc1xuICAgIGlmIChvdy5ob3VybHkubGVuZ3RoID4gMSkge1xuICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2x5bGluZSh7XG4gICAgICAgICAgcGF0aHM6IFtvdy5ob3VybHkubWFwKChoOiBhbnkpID0+IFtoLmNlbnRyb2lkLmxvbiwgaC5jZW50cm9pZC5sYXRdKV0gYXMgYW55LFxuICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9IGFzIGFueSxcbiAgICAgICAgfSksXG4gICAgICAgIHN5bWJvbDogeyB0eXBlOiAnc2ltcGxlLWxpbmUnLCBjb2xvcjogWzQwLCA0MCwgNDAsIDAuOV0sIHdpZHRoOiAyLCBzdHlsZTogJ3Nob3J0LWRvdCcgfSBhcyBhbnksXG4gICAgICB9KSlcbiAgICAgIGZvciAoY29uc3QgaHIgb2YgaHJzKSB7XG4gICAgICAgIGNvbnN0IGggPSBvdy5ob3VybHkuZmluZCgoeDogYW55KSA9PiB4LmhvdXIgPT09IGhyKVxuICAgICAgICBpZiAoIWgpIGNvbnRpbnVlXG4gICAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludCh7IGxhdGl0dWRlOiBoLmNlbnRyb2lkLmxhdCwgbG9uZ2l0dWRlOiBoLmNlbnRyb2lkLmxvbiB9KSxcbiAgICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JywgdGV4dDogYCR7YWJzSHIoaHIpfSBocmAsIGNvbG9yOiBiYW5kQ29sb3IoYWJzSHIoaHIpKSxcbiAgICAgICAgICAgIGhhbG9Db2xvcjogJyNmZmZmZmYnLCBoYWxvU2l6ZTogMS41LCB5b2Zmc2V0OiA4LFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAxMCwgd2VpZ2h0OiAnYm9sZCcsIGZhbWlseTogJ3NhbnMtc2VyaWYnIH0sXG4gICAgICAgICAgfSBhcyBhbnksXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBzaG9yZWxpbmUgaW1wYWN0cyDigJQgdGhlIGFjdGlvbmFibGUgb3V0cHV0XG4gICAgZm9yIChjb25zdCBzIG9mIG93LnNob3JlX2ltcGFjdHMpIHtcbiAgICAgIGNvbnN0IGMgPSBiYW5kQ29sb3Iocy5maXJzdF9hYnNfaHIgPz8gcy5maXJzdF9ocilcbiAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgUG9seWxpbmUoeyBwYXRoczogW3MubGluZV0gYXMgYW55LCBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSBhcyBhbnkgfSksXG4gICAgICAgIHN5bWJvbDogeyB0eXBlOiAnc2ltcGxlLWxpbmUnLCBjb2xvcjogYywgd2lkdGg6IDYsIGNhcDogJ3JvdW5kJyB9IGFzIGFueSxcbiAgICAgICAgcG9wdXBUZW1wbGF0ZToge1xuICAgICAgICAgIHRpdGxlOiBgU2hvcmVsaW5lIGltcGFjdCDigJQgZmlyc3QgYXJyaXZhbCB+JHtzLmZpcnN0X2Fic19ociA/PyBzLmZpcnN0X2hyfSBocmAsXG4gICAgICAgICAgY29udGVudDogYCR7cy5zaGFyZV9wY3R9JSBvZiBzcGlsbCAoJHtzLmNvdW50fSBwYXJ0aWNsZXMpIMK3IG1lZGlhbiBhcnJpdmFsICR7cy5tZWRpYW5faHJ9IGhyIMK3IGAgK1xuICAgICAgICAgICAgYCR7KHMubGVuZ3RoX20gLyAxMDAwKS50b0ZpeGVkKDEpfSBrbSBvZiBzaG9yZWAgK1xuICAgICAgICAgICAgKHMuYm9vbSA/IGAgwrcgcHJvdGVjdGl2ZSBib29tIH4ke3MuYm9vbS5ib29tX2Z0LnRvTG9jYWxlU3RyaW5nKCl9IGZ0ICgke3MuYm9vbS5hbmNob3JzfSBhbmNob3Igc2V0cylgIDogJycpLFxuICAgICAgICB9IGFzIGFueSxcbiAgICAgIH0pKVxuICAgIH1cbiAgICAvLyBlbnRyeS9zcGlsbCBwb2ludFxuICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICBnZW9tZXRyeTogbmV3IFBvaW50KHsgbGF0aXR1ZGU6IG93LnNwaWxsX3BvaW50LmxhdCwgbG9uZ2l0dWRlOiBvdy5zcGlsbF9wb2ludC5sb24gfSksXG4gICAgICBzeW1ib2w6IHsgdHlwZTogJ3NpbXBsZS1tYXJrZXInLCBzdHlsZTogJ3gnLCBzaXplOiAxNCwgb3V0bGluZTogeyBjb2xvcjogJyMwMDAnLCB3aWR0aDogMyB9IH0gYXMgYW55LFxuICAgICAgcG9wdXBUZW1wbGF0ZToge1xuICAgICAgICB0aXRsZTogYXBwZW5kID8gJ1dhdGVyIGVudHJ5IHBvaW50JyA6ICdTcGlsbCBwb2ludCcsXG4gICAgICAgIGNvbnRlbnQ6IGAke293LnNwaWxsX3BvaW50LmxhdC50b0ZpeGVkKDUpfSwgJHtvdy5zcGlsbF9wb2ludC5sb24udG9GaXhlZCg1KX1gICtcbiAgICAgICAgICAob3cuc3RhcnRfb2Zmc2V0X2hyID8gYCDCtyByaXZlciBwbHVtZSBhcnJpdmVzIH4ke293LnN0YXJ0X29mZnNldF9ocn0gaHJgIDogJycpLFxuICAgICAgfSBhcyBhbnksXG4gICAgfSkpXG4gIH1cblxuICBjb25zdCBvd0NvbmZpZyA9ICgpID0+ICh7XG4gICAgdmVyYm9zZTogZmFsc2UsXG4gICAgb3BlbldhdGVyOiAocHJvcHMuY29uZmlnLm9wZW5XYXRlciBhcyBhbnkpPy5hc011dGFibGU/Lih7IGRlZXA6IHRydWUgfSkgPz8gcHJvcHMuY29uZmlnLm9wZW5XYXRlciA/PyB7fSxcbiAgfSlcblxuICAvLyByZXNlcnZvaXIgY29udGludWF0aW9uOiByaXZlciB0cmFjZSBlbmRlZCBpbiBhIGxha2Ug4oaSIGtlZXAgZ29pbmcgYXMgb3BlbiB3YXRlclxuICBjb25zdCBjb250aW51YXRpb25Gb3IgPSBhc3luYyAocmVzOiBhbnkpOiBQcm9taXNlPGFueT4gPT4ge1xuICAgIGNvbnN0IHNwID0gcmVzLmltcG91bmRfc3RvcF9wb2ludFxuICAgIGNvbnN0IGtleSA9IGAke3NwLmxhdC50b0ZpeGVkKDQpfSwke3NwLmxvbi50b0ZpeGVkKDQpfWBcbiAgICBpZiAoIW93Q29udFJlZi5jdXJyZW50IHx8IG93Q29udFJlZi5jdXJyZW50LmtleSAhPT0ga2V5KSB7XG4gICAgICAvLyByZXVzZSB0aGUgcml2ZXIgcnVuJ3MgYWxyZWFkeS1mZXRjaGVkIHNpdGUgZmVhdHVyZXMgKG5vIHNlY29uZCBsYXllciBxdWVyeSlcbiAgICAgIGNvbnN0IGNhY2hlZFByb3ZpZGVycyA9IChjYWNoZVJlZi5jdXJyZW50Py5kYXRhPy5zaXRlU2V0cyB8fCBbXSkubWFwKChzOiBhbnkpID0+ICh7XG4gICAgICAgIG5hbWU6IHMubmFtZSwgYnVmZmVyX206IHMuYnVmZmVyX20sIGZldGNoOiBhc3luYyAoKSA9PiBzLmZlYXRzLFxuICAgICAgfSkpXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hPcGVuV2F0ZXJEYXRhKFxuICAgICAgICBzcC5sYXQsIHNwLmxvbiwgeyAuLi5vd0NvbmZpZygpLCBzaXRlUHJvdmlkZXJzOiBjYWNoZWRQcm92aWRlcnMgfSwgbnVsbCwgc3AuZXRhX2hyKVxuICAgICAgb3dDb250UmVmLmN1cnJlbnQgPSB7IGtleSwgZGF0YSB9XG4gICAgfVxuICAgIGNvbnN0IG93ID0gY29tcHV0ZU9wZW5XYXRlcihyZWJhc2VPcGVuV2F0ZXJEYXRhKG93Q29udFJlZi5jdXJyZW50LmRhdGEsIHNwLmV0YV9ociksIG93Q29uZmlnKCkpXG4gICAgb3cuY29udGludWF0aW9uX29mID0geyByaXZlcjogcmVzLnJpdmVyX25hbWUsIGVudGVyZWQ6IHNwLm5hbWUsIHJpdmVyX2V0YV9ocjogc3AuZXRhX2hyIH1cbiAgICBvdy53YXJuaW5ncy51bnNoaWZ0KFxuICAgICAgYENvbnRpbnVhdGlvbjogcml2ZXIgcGx1bWUgZW50ZXJzICR7c3AubmFtZX0gYXQgfiR7c3AuZXRhX2hyfSBoIOKAlCBvcGVuLXdhdGVyIGhvdXJzIGFyZSBBQlNPTFVURSBmcm9tIHRoZSBzcGlsbC5gKVxuICAgIHJldHVybiBvd1xuICB9XG5cbiAgLy8gLS0tLSBtb2RlbCBjb25maWcgKyBlcXVpcG1lbnQgKyBjb21wdXRlL3JlbmRlciAocHVyZSwgcmV1c2FibGUgb24gY2FjaGVkIGRhdGEpIC0tLS1cbiAgY29uc3QgbW9kZWxDZmcgPSAoc2Y6IG51bWJlcikgPT4gKHtcbiAgICBzYWZldHlGYWN0b3I6IHNmLFxuICAgIHRpbWluZ01vZGVsOiBwcm9wcy5jb25maWcudGltaW5nTW9kZWwgPz8gJ2h5ZHJhdWxpYycsXG4gICAgbWluU3RyZWFtT3JkZXI6IHByb3BzLmNvbmZpZy5taW5TdHJlYW1PcmRlciA/PyA0LFxuICAgIG1heEhvdXJzOiBwcm9wcy5jb25maWcubWF4SG91cnMgPz8gMjQsXG4gICAgbWF4RGlzdGFuY2VLbTogcHJvcHMuY29uZmlnLm1heERpc3RhbmNlS20gPz8gMzAwLFxuICAgIC8vIENhbmFkaWFuIGNvcnJpZG9yIGZpbGVzIChlbmdpbmUgdjEuNikg4oCUIFVSTHMgb3IgaW5saW5lIGRvY3NcbiAgICBjb3JyaWRvcnM6IChwcm9wcy5jb25maWcuY29ycmlkb3JzIGFzIGFueSk/LmFzTXV0YWJsZT8uKHsgZGVlcDogdHJ1ZSB9KSA/PyBwcm9wcy5jb25maWcuY29ycmlkb3JzID8/IFtdLFxuICAgIHZlcmJvc2U6IGZhbHNlLFxuICB9KVxuXG4gIGNvbnN0IGFwcGx5RXF1aXBtZW50ID0gKHJlczogYW55LCBkcmF3bjogTWFwPHN0cmluZywgbnVtYmVyPikgPT4ge1xuICAgIGNvbnN0IGVxID0gcHJvcHMuY29uZmlnLmVxdWlwbWVudFxuICAgIGlmIChlcT8uZW5hYmxlZCA9PT0gZmFsc2UpIHJldHVyblxuICAgIGNvbnN0IHJ1bGVzID0ge1xuICAgICAgZW50cmFpbm1lbnRNczogZXE/LmVudHJhaW5tZW50TXMgPz8gMC4zNSxcbiAgICAgIGFuY2hvclNwYWNpbmdGdDogZXE/LmFuY2hvclNwYWNpbmdGdCA/PyAxMDAsXG4gICAgICByZXNlcnZlUGN0OiBlcT8ucmVzZXJ2ZVBjdCA/PyAyMCxcbiAgICB9XG4gICAgZm9yIChjb25zdCBzIG9mIHJlcy5zaXRlcykge1xuICAgICAgY29uc3Qga2V5ID0gbm9ybUd1aWQocy5HbG9iYWxJRCA/PyBzLmdsb2JhbGlkID8/IHMuR0xPQkFMSUQpXG4gICAgICBjb25zdCBkcmF3bkZ0ID0ga2V5ID8gZHJhd24uZ2V0KGtleSkgOiB1bmRlZmluZWRcbiAgICAgIGlmIChkcmF3bkZ0KSB7XG4gICAgICAgIGNvbnN0IGJvb21GdCA9IE1hdGguY2VpbChkcmF3bkZ0IC8gNTApICogNTBcbiAgICAgICAgcy5ib29tID0ge1xuICAgICAgICAgIGJvb21fZnQ6IGJvb21GdCxcbiAgICAgICAgICBhbmNob3JzOiBNYXRoLm1heCgyLCBNYXRoLmNlaWwoYm9vbUZ0IC8gcnVsZXMuYW5jaG9yU3BhY2luZ0Z0KSArIDEpLFxuICAgICAgICAgIHNvdXJjZTogJ2RyYXduJyxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZXN0ID0gZXN0aW1hdGVCb29tTmVlZHMocy5yaXZlcl93aWR0aF9tLCBzLnZlbG9jaXR5X21zLCBydWxlcylcbiAgICAgICAgaWYgKGVzdCkgcy5ib29tID0geyAuLi5lc3QsIHNvdXJjZTogJ2VzdCcgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNvbXB1dGVBbmRSZW5kZXIgPSAoc2Y6IG51bWJlciwgZnJvbUNhY2hlID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBjID0gY2FjaGVSZWYuY3VycmVudFxuICAgIGlmICghYyB8fCAham12KSByZXR1cm5cbiAgICBjb25zdCByZXMgPSBjb21wdXRlVHJhY2UoYy5kYXRhLCBtb2RlbENmZyhzZikpXG4gICAgYXBwbHlFcXVpcG1lbnQocmVzLCBjLmRyYXduKVxuICAgIGRyYXcoam12LnZpZXcgYXMgX19lc3JpLk1hcFZpZXcsIHJlcywgeyBsYXQ6IGMubGF0LCBsb246IGMubG9uIH0pXG4gICAgaWYgKGxheWVyUmVmLmN1cnJlbnQpIGxheWVyUmVmLmN1cnJlbnQudmlzaWJsZSA9IHRydWVcbiAgICBzZXRIaWRkZW4oZmFsc2UpXG4gICAgc2V0UmVzdWx0KHJlcylcbiAgICBzZXREaWFnKFsuLi5jLmZldGNoTm90ZXMsIGAke3Jlcy5zaXRlcy5sZW5ndGh9IHNpdGUocykgd2l0aGluIGJ1ZmZlciBvZiB0aGUgdHJhY2UuYF0pXG4gICAgc2V0U3RhdHVzKFxuICAgICAgYCR7cmVzLnJpdmVyX25hbWUgfHwgJ1RyYWNlJ30g4oCUICR7cmVzLmRpc3RhbmNlX2ttXzI0aC50b0ZpeGVkKDEpfSBrbSBpbiDiiaQgJHtwcm9wcy5jb25maWcubWF4SG91cnMgPz8gMjR9IGhgICtcbiAgICAgIChmcm9tQ2FjaGUgPyAnIMK3IHJlY29tcHV0ZWQgaW5zdGFudGx5IGZyb20gY2FjaGVkIGh5ZHJvbG9neScgOiAnJyksXG4gICAgKVxuICAgIC8vIHJlc2Vydm9pciBjb250aW51YXRpb24gKGFzeW5jIOKAlCByaXZlciByZXN1bHQgaXMgYWxyZWFkeSBvbiBzY3JlZW4pXG4gICAgY29uc3Qgb3dDZmcgPSAocHJvcHMuY29uZmlnLm9wZW5XYXRlciBhcyBhbnkpIHx8IHt9XG4gICAgaWYgKHJlcy5pbXBvdW5kX3N0b3BfcG9pbnQgJiYgKG93Q2ZnLmVuYWJsZWQgPz8gdHJ1ZSkgJiYgKG93Q2ZnLmNvbnRpbnVlQXRJbXBvdW5kbWVudCA/PyB0cnVlKSkge1xuICAgICAgY29udGludWF0aW9uRm9yKHJlcykudGhlbigob3cpID0+IHtcbiAgICAgICAgaWYgKGNhY2hlUmVmLmN1cnJlbnQgIT09IGMpIHJldHVybiAvLyBzdXBlcnNlZGVkIGJ5IGEgbmV3ZXIgcnVuXG4gICAgICAgIHJlcy5vcGVuX3dhdGVyID0gb3dcbiAgICAgICAgZHJhd09wZW5XYXRlcihqbXYudmlldyBhcyBfX2VzcmkuTWFwVmlldywgb3csIHRydWUpXG4gICAgICAgIHNldFJlc3VsdCh7IC4uLnJlcyB9KVxuICAgICAgICBzZXRTdGF0dXMoKHMpID0+IGAke3N9IMK3IGNvbnRpbnVlcyBpbnRvICR7b3cud2F0ZXJib2R5Lm5hbWV9YClcbiAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChjYWNoZVJlZi5jdXJyZW50ICE9PSBjKSByZXR1cm5cbiAgICAgICAgc2V0U3RhdHVzKChzKSA9PiBgJHtzfSDCtyBjb250aW51YXRpb24gdW5hdmFpbGFibGUgKCR7U3RyaW5nKGUpLnNsaWNlKDAsIDYwKX0pYClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLSBydW4gLS0tLVxuICBjb25zdCBhcm1DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWptdiB8fCBhcm1pbmcgfHwgcnVubmluZykgcmV0dXJuXG4gICAgc2V0QXJtaW5nKHRydWUpXG4gICAgc2V0U3RhdHVzKCdDbGljayB0aGUgc3BpbGwgbG9jYXRpb24gb24gdGhlIG1hcOKApicpXG4gICAgY2xpY2tIYW5kbGVSZWYuY3VycmVudCA9IGptdi52aWV3Lm9uKCdjbGljaycsIGFzeW5jIChldnQpID0+IHtcbiAgICAgIGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQucmVtb3ZlKClcbiAgICAgIGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICBzZXRBcm1pbmcoZmFsc2UpXG4gICAgICBjb25zdCBtcCA9IGV2dC5tYXBQb2ludFxuICAgICAgY29uc3QgbGF0ID0gbXAubGF0aXR1ZGUsIGxvbiA9IG1wLmxvbmdpdHVkZVxuICAgICAgc2V0UnVubmluZyh0cnVlKVxuICAgICAgc2V0UmVzdWx0KG51bGwpXG4gICAgICBzZXREaWFnKFtdKVxuICAgICAgc2V0U3RhdHVzKGBUcmFjaW5nIGZyb20gJHtsYXQudG9GaXhlZCg0KX0sICR7bG9uLnRvRml4ZWQoNCl94oCmYClcbiAgICAgIGNvbnN0IG5vdGVzOiBzdHJpbmdbXSA9IFtdXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjZmcgPSBwcm9wcy5jb25maWdcbiAgICAgICAgY29uc3Qgc2l0ZUxheWVycyA9IChjZmcuc2l0ZUxheWVycyB8fCBbXSkgYXMgYW55XG4gICAgICAgIGNvbnN0IHJlY2VwdG9yTGF5ZXJzID0gKGNmZy5yZWNlcHRvckxheWVycyB8fCBbXSkgYXMgYW55XG4gICAgICAgIGlmICghc2l0ZUxheWVycy5sZW5ndGgpIG5vdGVzLnB1c2goJ05vIHNpdGUgbGF5ZXJzIGNvbmZpZ3VyZWQg4oCUIGFkZCB0aGVtIGluIHRoZSB3aWRnZXQgc2V0dGluZ3MgKFNpdGUgbGF5ZXJzIEpTT04pLicpXG5cbiAgICAgICAgLy8gdjEuNyBkaXNwYXRjaDogYSBjbGljayBpbnNpZGUgYSBsYWtlL3Jlc2Vydm9pciBydW5zIHRoZSBvcGVuLXdhdGVyXG4gICAgICAgIC8vIHBhcnRpY2xlIG1vZGVsIChkYW0gdGFpbHJhY2VzIHN0aWxsIHJvdXRlIHRvIHRoZSByaXZlcilcbiAgICAgICAgY29uc3QgZGlzcCA9IGF3YWl0IHJlc29sdmVUcmFjZU1vZGUobGF0LCBsb24sIHsgLi4ubW9kZWxDZmcoMSksIC4uLm93Q29uZmlnKCkgfSlcbiAgICAgICAgaWYgKGRpc3AubW9kZSA9PT0gJ29wZW4td2F0ZXInKSB7XG4gICAgICAgICAgc2V0U3RhdHVzKGBPcGVuIHdhdGVyICgke2Rpc3Aud2F0ZXJib2R5Lm5hbWV9KSDigJQgcnVubmluZyB3aW5kLWRyaWZ0IHBhcnRpY2xlIG1vZGVs4oCmYClcbiAgICAgICAgICBjb25zdCBvd0RhdGEgPSBhd2FpdCBmZXRjaE9wZW5XYXRlckRhdGEobGF0LCBsb24sIHtcbiAgICAgICAgICAgIC4uLm93Q29uZmlnKCksXG4gICAgICAgICAgICBzaXRlUHJvdmlkZXJzOiBzaXRlTGF5ZXJzLm1hcCgobGMsIGkpID0+IG1ha2VTaXRlUHJvdmlkZXIobGMsIDUwMCwgYFNpdGUgbGF5ZXIgJHtpICsgMX1gLCBub3RlcykpLFxuICAgICAgICAgIH0sIGRpc3Aud2F0ZXJib2R5KVxuICAgICAgICAgIGNvbnN0IG93UmVzID0gY29tcHV0ZU9wZW5XYXRlcihvd0RhdGEsIG93Q29uZmlnKCkpXG4gICAgICAgICAgY2FjaGVSZWYuY3VycmVudCA9IHsgbGF0LCBsb24sIG1vZGU6ICdvcGVuLXdhdGVyJywgb3dEYXRhLCBmZXRjaE5vdGVzOiBub3Rlcy5zbGljZSgpIH1cbiAgICAgICAgICBkcmF3T3BlbldhdGVyKGptdi52aWV3IGFzIF9fZXNyaS5NYXBWaWV3LCBvd1JlcylcbiAgICAgICAgICBpZiAobGF5ZXJSZWYuY3VycmVudCkgbGF5ZXJSZWYuY3VycmVudC52aXNpYmxlID0gdHJ1ZVxuICAgICAgICAgIHNldEhpZGRlbihmYWxzZSlcbiAgICAgICAgICBzZXRSZXN1bHQob3dSZXMpXG4gICAgICAgICAgc2V0RGlhZyhbLi4ubm90ZXMsXG4gICAgICAgICAgICBgJHtvd1Jlcy5zdGF0cy5uX3BhcnRpY2xlc30gcGFydGljbGVzIMK3ICR7b3dSZXMucnVuUmVjb3JkLnNob3JlbGluZV9zZWdtZW50c30gc2hvcmVsaW5lIHNlZ21lbnRzIMK3ICR7b3dSZXMuc3RhdHMuY29tcHV0ZV9tc30gbXNgXSlcbiAgICAgICAgICBzZXRTdGF0dXMoYCR7ZGlzcC53YXRlcmJvZHkubmFtZX0g4oCUIG9wZW4td2F0ZXIgZHJpZnQsICR7b3dSZXMuZHVyYXRpb25faHJ9IGggwrcgJHtvd1Jlcy5zaG9yZV9pbXBhY3RzLmxlbmd0aH0gc2hvcmVsaW5lIGltcGFjdChzKWApXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBmZXRjaCBldmVyeXRoaW5nIG9uY2UgKHRyYWNlLCBmbG93cywgd2lkdGhzLCBzaXRlL3JlY2VwdG9yIGZlYXR1cmVzKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hUcmFjZURhdGEobGF0LCBsb24sIHtcbiAgICAgICAgICAuLi5tb2RlbENmZyhzYWZldHkpLFxuICAgICAgICAgIHdpZHRoUHJvdmlkZXI6IG1ha2VXaWR0aFByb3ZpZGVyKCksXG4gICAgICAgICAgc2l0ZVByb3ZpZGVyczogc2l0ZUxheWVycy5tYXAoKGxjLCBpKSA9PiBtYWtlU2l0ZVByb3ZpZGVyKGxjLCA1MDAsIGBTaXRlIGxheWVyICR7aSArIDF9YCwgbm90ZXMpKSxcbiAgICAgICAgICByZWNlcHRvclByb3ZpZGVyczogcmVjZXB0b3JMYXllcnMubWFwKChsYywgaSkgPT4gbWFrZVNpdGVQcm92aWRlcihsYywgODAwLCBgUmVjZXB0b3IgbGF5ZXIgJHtpICsgMX1gLCBub3RlcykpLFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGRyYXduIGJvb20gbGluZXM6IHBlci1zaXRlLWxheWVyIGJvb21MYXllciAoKyBsZWdhY3kgZ2xvYmFsIGVxdWlwbWVudC5ib29tTGF5ZXIpXG4gICAgICAgIGNvbnN0IGRyYXduID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKVxuICAgICAgICBjb25zdCBlcSA9IGNmZy5lcXVpcG1lbnRcbiAgICAgICAgaWYgKGVxPy5lbmFibGVkICE9PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnN0IGJvb21DZmdzOiBhbnlbXSA9IFtdXG4gICAgICAgICAgZm9yIChjb25zdCBsYyBvZiBzaXRlTGF5ZXJzKSBpZiAobGMuYm9vbUxheWVyPy51cmwpIGJvb21DZmdzLnB1c2gobGMuYm9vbUxheWVyKVxuICAgICAgICAgIGlmIChlcT8uYm9vbUxheWVyPy51cmwpIGJvb21DZmdzLnB1c2goZXEuYm9vbUxheWVyKVxuICAgICAgICAgIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKVxuICAgICAgICAgIGZvciAoY29uc3QgYmMgb2YgYm9vbUNmZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpZyA9IGAke2JjLnVybH18JHtiYy5zaXRlS2V5RmllbGR9YFxuICAgICAgICAgICAgaWYgKHNlZW4uaGFzKHNpZykpIGNvbnRpbnVlXG4gICAgICAgICAgICBzZWVuLmFkZChzaWcpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBtID0gYXdhaXQgZmV0Y2hEcmF3bkJvb20oYmMgYXMgYW55KVxuICAgICAgICAgICAgICBtLmZvckVhY2goKHYsIGspID0+IGRyYXduLnNldChrLCAoZHJhd24uZ2V0KGspIHx8IDApICsgdikpXG4gICAgICAgICAgICAgIG5vdGVzLnB1c2goYEJvb20gbGluZXMgKCR7c2lnLnNwbGl0KCcvJykuc2xpY2UoLTIpWzBdfSk6IGRyYXduIGZvb3RhZ2UgZm9yICR7bS5zaXplfSBzaXRlKHMpYClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgbm90ZXMucHVzaChgQm9vbSBsYXllciBGQUlMRUQ6ICR7U3RyaW5nKGUpLnNsaWNlKDAsIDkwKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNhY2hlUmVmLmN1cnJlbnQgPSB7IGxhdCwgbG9uLCBkYXRhLCBkcmF3biwgZmV0Y2hOb3Rlczogbm90ZXMuc2xpY2UoKSB9XG4gICAgICAgIGNvbXB1dGVBbmRSZW5kZXIoc2FmZXR5KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZXRTdGF0dXMoYFRyYWNlIGZhaWxlZDogJHtTdHJpbmcoZSkuc2xpY2UoMCwgMTIwKX1gKVxuICAgICAgICBzZXREaWFnKG5vdGVzKVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0UnVubmluZyhmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBbam12LCBhcm1pbmcsIHJ1bm5pbmcsIHNhZmV0eSwgcHJvcHMuY29uZmlnXSlcblxuICBjb25zdCBjbGVhckFsbCA9ICgpID0+IHtcbiAgICBpZiAoY2xpY2tIYW5kbGVSZWYuY3VycmVudCkgeyBjbGlja0hhbmRsZVJlZi5jdXJyZW50LnJlbW92ZSgpOyBjbGlja0hhbmRsZVJlZi5jdXJyZW50ID0gbnVsbCB9XG4gICAgaWYgKGxheWVyUmVmLmN1cnJlbnQpIGxheWVyUmVmLmN1cnJlbnQucmVtb3ZlQWxsKClcbiAgICBjYWNoZVJlZi5jdXJyZW50ID0gbnVsbFxuICAgIG93Q29udFJlZi5jdXJyZW50ID0gbnVsbFxuICAgIHNldEFybWluZyhmYWxzZSlcbiAgICBzZXRSZXN1bHQobnVsbClcbiAgICBzZXREaWFnKFtdKVxuICAgIHNldEhpZGRlbihmYWxzZSlcbiAgICBzZXRTdGF0dXMoJ0NsZWFyZWQuIENsaWNrIFwiU2V0IHNwaWxsIHBvaW50XCIgdG8gcnVuIGFnYWluLicpXG4gIH1cblxuICAvLyBicmllZmluZyB0b2dnbGU6IGhpZGUvc2hvdyB0aGUgdHJhamVjdG9yeSBncmFwaGljcyBXSVRIT1VUIHRvdWNoaW5nIHRoZVxuICAvLyBjYWNoZWQgcnVuIOKAlCBwcmVzZW50ZXIgY2FuIGZsaXAgdGhlIG1vZGVsIG9mZiBkdXJpbmcgYSBzbGlkZSBhbmQgYmFja1xuICBjb25zdCB0b2dnbGVWaXNpYmxlID0gKCkgPT4ge1xuICAgIGlmICghbGF5ZXJSZWYuY3VycmVudCkgcmV0dXJuXG4gICAgY29uc3QgdiA9ICFsYXllclJlZi5jdXJyZW50LnZpc2libGVcbiAgICBsYXllclJlZi5jdXJyZW50LnZpc2libGUgPSB2XG4gICAgc2V0SGlkZGVuKCF2KVxuICB9XG5cbiAgY29uc3QgaXNPcGVuV2F0ZXIgPSByZXN1bHQ/Lm1vZGUgPT09ICdvcGVuLXdhdGVyJ1xuICBjb25zdCBzaXRlczogU2l0ZVJvd1tdID0gKGlzT3BlbldhdGVyID8gW10gOiByZXN1bHQ/LnNpdGVzKSB8fCBbXVxuICBjb25zdCB3YXJuaW5nczogc3RyaW5nW10gPSByZXN1bHQ/Lndhcm5pbmdzIHx8IFtdXG5cbiAgLy8gc2hhcmVkIHBhbmVsIGZvciBhIGxha2UvcmVzZXJ2b2lyIHJlc3VsdCAocHJpbWFyeSBydW4gb3IgY29udGludWF0aW9uKVxuICBjb25zdCBPcGVuV2F0ZXJQYW5lbCA9ICh7IG93IH06IHsgb3c6IGFueSB9KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA2IH19PjxiPntvdy5oZWFkbGluZX08L2I+PC9kaXY+XG4gICAgICB7b3cuc2hvcmVfaW1wYWN0cy5sZW5ndGggPiAwXG4gICAgICAgID8gPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnIH19PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjY2NjJyB9fT5cbiAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PkZpcnN0IGFycml2YWw8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+U2hvcmU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+JTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT5Cb29tIChwcm90ZWN0aXZlKTwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7b3cuc2hvcmVfaW1wYWN0cy5tYXAoKHM6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaHIgPSBzLmZpcnN0X2Fic19ociA/PyBzLmZpcnN0X2hyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVlJyB9fVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17YCR7cy5jb3VudH0gcGFydGljbGVzIMK3IG1lZGlhbiBhcnJpdmFsICR7cy5tZWRpYW5faHJ9IGhyYH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLCBib3JkZXJSYWRpdXM6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiYW5kQ29sb3IoaHIpLCBtYXJnaW5SaWdodDogNCxcbiAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtocn0gaHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT57KHMubGVuZ3RoX20gLyAxMDAwKS50b0ZpeGVkKDEpfSBrbTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+e3Muc2hhcmVfcGN0fSU8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7cy5ib29tID8gYCR7cy5ib29tLmJvb21fZnQudG9Mb2NhbGVTdHJpbmcoKX0gZnRgIDogJ+KAlCd9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDogPGRpdiBzdHlsZT17eyBjb2xvcjogJyM3NzcnIH19PlxuICAgICAgICAgICAgTm8gc2hvcmVsaW5lIGFycml2YWwgd2l0aGluIHtvdy5kdXJhdGlvbl9ocn0gaCAoYmVzdCBndWVzcykg4oCUIHdhdGNoIHRoZSB1bmNlcnRhaW50eSBlbnZlbG9wZS5cbiAgICAgICAgICA8L2Rpdj59XG4gICAgICB7b3cuc2l0ZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJywgbWFyZ2luVG9wOiA2IH19PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0ciBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNjY2MnIH19PlxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PkVUQTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+U2l0ZTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge293LnNpdGVzLm1hcCgoczogYW55LCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17aX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWUnIH19PlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCwgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiYW5kQ29sb3Iocy5ldGFfaHIpLCBtYXJnaW5SaWdodDogNCxcbiAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICB7cy5ldGFfaHIudG9GaXhlZCgxKX0gaHJcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+e3MubmFtZX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICl9XG4gICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzc3NycsIG1hcmdpblRvcDogNCB9fT5cbiAgICAgICAgRmlsbGVkIG91dGxpbmVzID0gYmVzdC1ndWVzcyBwbHVtZSBhdCBsYWJlbGVkIGhvdXJzIMK3IGRhc2hlZCBncmV5ID0gbWluaW11bS1yZWdyZXQgZW52ZWxvcGUgKHBsYW4gdG8gdGhpcykgwrdcbiAgICAgICAgdGhpY2sgc2hvcmUgbGluZXMgPSBwcmVkaWN0ZWQgaW1wYWN0cyDCtyBwcm90ZWN0aXZlIGJvb20gPSBzaG9yZSBsZW5ndGggKzIwJSwgNTAtZnQgc3RpY2tzLlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiamltdS13aWRnZXRcIiBzdHlsZT17eyBwYWRkaW5nOiAxMCwgb3ZlcmZsb3c6ICdhdXRvJywgZm9udFNpemU6IDEzIH19PlxuICAgICAge3Byb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHNbMF19XG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXsodikgPT4gc2V0Sm12KHYpfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHshcHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5sZW5ndGggJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnI2IwMCcgfX0+U2VsZWN0IGEgTWFwIHdpZGdldCBpbiB0aGlzIHdpZGdldCdzIHNldHRpbmdzLjwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogNiwgbWFyZ2luQm90dG9tOiA4IH19PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBkaXNhYmxlZD17IWptdiB8fCBhcm1pbmcgfHwgcnVubmluZ30gb25DbGljaz17YXJtQ2xpY2t9PlxuICAgICAgICAgIHthcm1pbmcgPyAnQ2xpY2sgdGhlIG1hcOKApicgOiBydW5uaW5nID8gJ1RyYWNpbmfigKYnIDogJ1NldCBzcGlsbCBwb2ludCd9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIGRpc2FibGVkPXtydW5uaW5nfSBvbkNsaWNrPXtjbGVhckFsbH0+Q2xlYXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiBkaXNhYmxlZD17IXJlc3VsdH0gb25DbGljaz17dG9nZ2xlVmlzaWJsZX1cbiAgICAgICAgICB0aXRsZT1cIkhpZGUvc2hvdyB0aGUgdHJhamVjdG9yeSBvbiB0aGUgbWFwIHdpdGhvdXQgbG9zaW5nIHRoZSBydW4gKGJyaWVmaW5ncylcIj5cbiAgICAgICAgICB7aGlkZGVuID8gJ/CfkYEgU2hvdycgOiAn8J+RgSBIaWRlJ31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgZGlzYWJsZWQ9eyFyZXN1bHR9IHRpdGxlPVwiQ29weSBydW4gcHJvdmVuYW5jZSByZWNvcmQgKEpTT04pIGZvciBhZnRlci1hY3Rpb24gZG9jdW1lbnRhdGlvbiDigJQgaW5jbHVkZXMgYSByZXBsYXkgVVJMXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdD8ucnVuUmVjb3JkIHx8ICFjYWNoZVJlZi5jdXJyZW50KSByZXR1cm5cbiAgICAgICAgICAgIGNvbnN0IHJlYzogYW55ID0geyAuLi5yZXN1bHQucnVuUmVjb3JkIH1cbiAgICAgICAgICAgIGNvbnN0IHUgPSBuZXcgVVJMKCdodHRwczovL3doaXRld2F0ZXJyZXNjdWUuZ2l0aHViLmlvL3dyaS1leGItd2lkZ2V0cy9lbWJlZC8nKVxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdjb25maWcnLCAnYWxsLWdycHMnKVxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdsYXQnLCBjYWNoZVJlZi5jdXJyZW50LmxhdC50b0ZpeGVkKDUpKVxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdsb24nLCBjYWNoZVJlZi5jdXJyZW50Lmxvbi50b0ZpeGVkKDUpKVxuICAgICAgICAgICAgaWYgKHJlYy5hc19vZikgdS5zZWFyY2hQYXJhbXMuc2V0KCdhc09mJywgcmVjLmFzX29mICE9PSAnbGl2ZScgPyByZWMuYXNfb2YgOiByZWMuZ2VuZXJhdGVkX2F0LnNsaWNlKDAsIDEwKSlcbiAgICAgICAgICAgIHUuc2VhcmNoUGFyYW1zLnNldCgnc2YnLCBTdHJpbmcoc2FmZXR5KSlcbiAgICAgICAgICAgIHJlYy5yZXBsYXlfdXJsID0gdS50b1N0cmluZygpXG4gICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChKU09OLnN0cmluZ2lmeShyZWMsIG51bGwsIDEpKS50aGVuKCgpID0+IHNldFN0YXR1cygnUnVuIHJlY29yZCBjb3BpZWQgKGluY2x1ZGVzIHJlcGxheV91cmwpLicpKVxuICAgICAgICAgIH19PlxuICAgICAgICAgIOKOmCBSZWNvcmRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxsYWJlbCBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNCB9fVxuICAgICAgICAgIHRpdGxlPVwiU2FmZXR5IGZhY3RvciDigJQgY2hhbmdpbmcgaXQgcmUtcnVucyBpbnN0YW50bHkgZnJvbSBjYWNoZWQgaHlkcm9sb2d5XCI+XG4gICAgICAgICAgU0ZcbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtzYWZldHl9IGRpc2FibGVkPXtydW5uaW5nfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICBzZXRTYWZldHkodilcbiAgICAgICAgICAgICAgaWYgKCFjYWNoZVJlZi5jdXJyZW50IHx8IHJ1bm5pbmcpIHJldHVyblxuICAgICAgICAgICAgICBpZiAoY2FjaGVSZWYuY3VycmVudC5tb2RlID09PSAnb3Blbi13YXRlcicpIHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0dXMoJ1NhZmV0eSBmYWN0b3IgZG9lcyBub3QgYXBwbHkgdG8gb3Blbi13YXRlciAod2luZC1kcmlmdCkgcnVucyDigJQgdW5jZXJ0YWludHkgaXMgdGhlIGRhc2hlZCBlbnZlbG9wZS4nKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbXB1dGVBbmRSZW5kZXIodiwgdHJ1ZSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MS4wfT4xLjA8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEuMjV9PjEuMjU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEuNX0+MS41PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsyLjB9PjIuMDwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4LCBtaW5IZWlnaHQ6IDE4IH19PntydW5uaW5nICYmIDxzcGFuIGNsYXNzTmFtZT1cImppbXUtc2Vjb25kYXJ5LWxvYWRpbmdcIiAvPn0ge3N0YXR1c308L2Rpdj5cblxuICAgICAge2RpYWcubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjODg4JywgZm9udFNpemU6IDExLCBtYXJnaW5Cb3R0b206IDggfX0+XG4gICAgICAgICAge2RpYWcubWFwKChkLCBpKSA9PiA8ZGl2IGtleT17aX0+e2R9PC9kaXY+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7d2FybmluZ3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJyNmZmYzY2QnLCBjb2xvcjogJyMzMzMnLCBib3JkZXI6ICcxcHggc29saWQgI2ZmZWViYScsIHBhZGRpbmc6IDYsIG1hcmdpbkJvdHRvbTogOCwgYm9yZGVyUmFkaXVzOiA0IH19PlxuICAgICAgICAgIHt3YXJuaW5ncy5tYXAoKHcsIGkpID0+IDxkaXYga2V5PXtpfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIgfX0+4pqgIHt3fTwvZGl2Pil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge3Jlc3VsdCAmJiAhaXNPcGVuV2F0ZXIgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCwgY29sb3I6ICcjOTk5JyB9fT5cbiAgICAgICAgICBFVEFzIGFyZSBlc3RpbWF0ZXMgKMKxMjAlKSwgc2FmZXR5IGZhY3RvciDDl3tyZXN1bHQuc2FmZXR5X2ZhY3Rvcn0gYXBwbGllZCDigJQgdHJlYXQgYXMgYmFuZHMsIG5vdCBhcHBvaW50bWVudHMuXG4gICAgICAgICAge3Jlc3VsdC5nYXVnZXNfdXNlZC5sZW5ndGhcbiAgICAgICAgICAgID8gYCBGbG93czogJHtyZXN1bHQuZ2F1Z2VzX3VzZWQubWFwKChnOiBhbnkpID0+IGcuc3RhdGlvbl9pZCkuam9pbignLCAnKX0uYFxuICAgICAgICAgICAgOiAnIE5vIGxpdmUgZ2F1Z2VzIGZvdW5kIOKAlCBkcmFpbmFnZS1hcmVhIGZsb3cgZXN0aW1hdGUuJ31cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7aXNPcGVuV2F0ZXIgJiYgPE9wZW5XYXRlclBhbmVsIG93PXtyZXN1bHR9IC8+fVxuXG4gICAgICB7c2l0ZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyB9fT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHIgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjY2NjJyB9fT5cbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT5FVEE8L3RoPlxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PlNpdGU8L3RoPlxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PmttPC90aD5cbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT5Cb29tPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7c2l0ZXMubWFwKChzLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2l9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVlJyB9fT5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3MuZXRhX2Vhcmx5X2hyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyBgZWFybGllc3QgY3JlZGlibGUgJHtzLmV0YV9lYXJseV9ocn0gaHIgwrcgZmlyc3QgYXJyaXZhbCAke3MuZXRhX2hyfSBociDCtyBwZWFrICR7cy5ldGFfcGVha19ocn0gaHIke3MuY2xlYXJfaHIgPyBgIMK3IGNsZWFyIH4ke3MuY2xlYXJfaHJ9IGhyYCA6ICcnfWBcbiAgICAgICAgICAgICAgICAgICAgOiAnJ30+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLCBib3JkZXJSYWRpdXM6IDUsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJhbmRDb2xvcihzLmV0YV9ociksIG1hcmdpblJpZ2h0OiA0LFxuICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgIHtzLmV0YV9lYXJseV9ociAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gYCR7cy5ldGFfZWFybHlfaHIudG9GaXhlZCgxKX3igJMke3MuZXRhX2hyLnRvRml4ZWQoMSl9IGhyYFxuICAgICAgICAgICAgICAgICAgICA6IHMuZXRhX2hyIDwgMSA/IGAke01hdGgucm91bmQocy5ldGFfaHIgKiA2MCl9IG1pbmAgOiBgJHtzLmV0YV9oci50b0ZpeGVkKDEpfSBocmB9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PntzLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PntzLmRpc3Rfa20udG9GaXhlZCgxKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19IHRpdGxlPXtzLmJvb21cbiAgICAgICAgICAgICAgICAgID8gYCR7cy5ib29tLmFuY2hvcnN9IGFuY2hvciBzZXRzJHtzLmJvb20uYm9vbV9hbmdsZV9kZWcgPyBgIMK3ICR7cy5ib29tLmJvb21fYW5nbGVfZGVnfcKwIGRlcGxveW1lbnRgIDogJyd9JHtzLmJvb20uY2FzY2FkZV9hZHZpc2VkID8gJyDCtyBmYXN0IHdhdGVyOiBjYXNjYWRlIG11bHRpcGxlIGJvb21zJyA6ICcnfSAoJHtzLmJvb20uc291cmNlID09PSAnZHJhd24nID8gJ2Zyb20gZHJhd24gYm9vbSBsaW5lcycgOiAnZXN0aW1hdGVkIGZyb20gbW9kZWxlZCB3aWR0aC92ZWxvY2l0eSd9KWBcbiAgICAgICAgICAgICAgICAgIDogJyd9PlxuICAgICAgICAgICAgICAgICAge3MuYm9vbVxuICAgICAgICAgICAgICAgICAgICA/IDw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cy5ib29tLmJvb21fZnQudG9Mb2NhbGVTdHJpbmcoKX0gZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzLmJvb20uY2FzY2FkZV9hZHZpc2VkICYmICcg4pqhJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzk5OScgfX0+IHtzLmJvb20uc291cmNlID09PSAnZHJhd24nID8gJ+KckycgOiAnZXN0Lid9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICA6ICfigJQnfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIHtzaXRlcy5zb21lKChzKSA9PiBzLmJvb20pICYmIChcbiAgICAgICAgICAgIDx0Zm9vdD5cbiAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlclRvcDogJzJweCBzb2xpZCAjY2NjJywgZm9udFdlaWdodDogNjAwIH19PlxuICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfSBzdHlsZT17eyBwYWRkaW5nOiAnM3B4IDRweCcgfX0+XG4gICAgICAgICAgICAgICAgICBUb3RhbHMgKHtzaXRlcy5maWx0ZXIoKHMpID0+IHMuYm9vbSkubGVuZ3RofSBib29tIHNpdGVzKVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICczcHggNHB4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XG4gICAgICAgICAgICAgICAgICB7c2l0ZXMucmVkdWNlKCh0LCBzKSA9PiB0ICsgKHMuYm9vbT8uYm9vbV9mdCB8fCAwKSwgMCkudG9Mb2NhbGVTdHJpbmcoKX0gZnQgwrd7JyAnfVxuICAgICAgICAgICAgICAgICAge3NpdGVzLnJlZHVjZSgodCwgcykgPT4gdCArIChzLmJvb20/LmFuY2hvcnMgfHwgMCksIDApfSBhbmNob3JzXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGZvb3Q+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICl9XG4gICAgICB7cmVzdWx0ICYmIHNpdGVzLnNvbWUoKHMpID0+IHMuYm9vbSkgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzc3NycsIG1hcmdpblRvcDogNCB9fT5cbiAgICAgICAgICDinJMgPSBkcmF3biBib29tIGxpbmVzIMK3IGVzdC4gPSBzaXplZCBmcm9tIG1vZGVsZWQgd2lkdGgvdmVsb2NpdHlcbiAgICAgICAgICAoYm9vbSBhbmdsZWQgdG8ga2VlcCBub3JtYWwgZmxvdyDiiaQgeyhwcm9wcy5jb25maWcuZXF1aXBtZW50Py5lbnRyYWlubWVudE1zID8/IDAuMzUpfSBtL3MsXG4gICAgICAgICAgK3twcm9wcy5jb25maWcuZXF1aXBtZW50Py5yZXNlcnZlUGN0ID8/IDIwfSUgcmVzZXJ2ZSkgwrcg4pqhID0gZmFzdCB3YXRlciwgY2FzY2FkZSBib29tc1xuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7cmVzdWx0ICYmICFpc09wZW5XYXRlciAmJiBzaXRlcy5sZW5ndGggPT09IDAgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJyM3NzcnIH19Pk5vIGNvbmZpZ3VyZWQgc2l0ZXMgd2l0aGluIHJlYWNoIG9mIHRoaXMgdHJhY2UuPC9kaXY+fVxuXG4gICAgICB7cmVzdWx0Py5vcGVuX3dhdGVyICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwLCBwYWRkaW5nVG9wOiA2LCBib3JkZXJUb3A6ICcycHggc29saWQgI2NjYycgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQgfX0+PGI+SW50byB7cmVzdWx0Lm9wZW5fd2F0ZXIud2F0ZXJib2R5Lm5hbWV9IChvcGVuIHdhdGVyKTwvYj48L2Rpdj5cbiAgICAgICAgICB7cmVzdWx0Lm9wZW5fd2F0ZXIud2FybmluZ3MubWFwKCh3OiBzdHJpbmcsIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZmZmM2NkJywgYm9yZGVyOiAnMXB4IHNvbGlkICNmZmVlYmEnLCBwYWRkaW5nOiA0LCBtYXJnaW5Cb3R0b206IDQsIGJvcmRlclJhZGl1czogNCB9fT7imqAge3d9PC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPE9wZW5XYXRlclBhbmVsIG93PXtyZXN1bHQub3Blbl93YXRlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpZGdldFxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==