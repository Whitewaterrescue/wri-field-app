System.register(["jimu-core/emotion","jimu-core","jimu-arcgis","esri/layers/GraphicsLayer","esri/layers/FeatureLayer","esri/Graphic","esri/geometry/Polygon","esri/geometry/Point"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__, "__esModule", { value: true });
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
				__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/fire-cone/src/fire-cone.ts"
/*!************************************************************!*\
  !*** ./your-extensions/widgets/fire-cone/src/fire-cone.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONE_VERSION: () => (/* binding */ CONE_VERSION),
/* harmony export */   DEFAULT_CONE_CONFIG: () => (/* binding */ DEFAULT_CONE_CONFIG),
/* harmony export */   computeCone: () => (/* binding */ computeCone),
/* harmony export */   fetchFireData: () => (/* binding */ fetchFireData),
/* harmony export */   fetchPerimeterData: () => (/* binding */ fetchPerimeterData),
/* harmony export */   runCone: () => (/* binding */ runCone),
/* harmony export */   runPerimeterCone: () => (/* binding */ runPerimeterCone),
/* harmony export */   toGeoJson: () => (/* binding */ toGeoJson)
/* harmony export */ });
/* harmony import */ var _fire_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fire-engine */ "./your-extensions/widgets/fire-cone/src/fire-engine.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-nocheck
/**
 * fire-cone.js — Fire threat cone: ray-marched isochrones + asset ETAs
 * =====================================================================
 *
 * Same architecture as the WRI spill-trajectory engine:
 *   fetchFireData(lat, lon, opts)  — ALL network I/O: LANDFIRE fuels/slope/aspect
 *                                    sampled along every ray (batched multipoint
 *                                    getSamples), NWS wind at the origin.
 *   computeCone(data, opts)        — pure math: Rothermel directional spread per
 *                                    step (fire-engine.js, golden-tested vs
 *                                    pyretechnics), cumulative time per ray,
 *                                    isochrone rings, asset ETAs, provenance.
 *
 * PLANNING-LEVEL: surface spread only — no spotting, no crowning, no suppression.
 * Nonburnable fuels (NB 91-99) stop rays (roads/water/urban act as barriers,
 * which real fires sometimes jump). Outputs are bands for deployment decisions.
 */

const CONE_VERSION = "0.1.0";
const LANDFIRE = {
    fuel: "https://lfps.usgs.gov/arcgis/rest/services/Landfire_LF2024/LF2024_FBFM40_CONUS/ImageServer/getSamples",
    slopeDeg: "https://lfps.usgs.gov/arcgis/rest/services/Landfire_Topo/LF2020_SlpD_CONUS/ImageServer/getSamples",
    aspect: "https://lfps.usgs.gov/arcgis/rest/services/Landfire_Topo/LF2020_Asp_CONUS/ImageServer/getSamples",
};
const NWS_UA = { "User-Agent": "WRI-Fire-Cone/0.1 (cody@whitewaterrescue.com)" };
const DEFAULT_CONE_CONFIG = {
    bearings: 24, // rays every 15 degrees
    stepM: 500, // sample spacing along each ray
    maxRadiusKm: 30, // sampling extent (surface fires rarely average > 1.25 km/h)
    maxHours: 24,
    isochroneHours: [1, 3, 6, 12, 24],
    // fixed dry-season moisture scenario (dead 6/7/8%, live herb 60%, woody 90%)
    moisture: [0.06, 0.07, 0.08, 0.0, 0.60, 0.90],
    minRosMmin: 0.05, // below ~3 m/h treat as stalled (barrier)
    windOverride: null, // {mph, fromDeg} — deterministic tests / what-ifs
    assets: [], // [{name, lat, lon, ...}] each gets a dedicated ray
    // Rothermel's effective-wind limit (0.9 I_R) demonstrably under-predicts
    // extreme wind-driven grass runs (Smokehouse Creek validation: 40 and 49 mph
    // produced identical spread with the limit on). Off by default for planning.
    useWindLimit: false,
    // envelope mode: barriers/stalls are crossed at the last good spread rate
    // ("fire finds a way" — spotting). Used for the outer credible-max rings.
    ignoreBarriers: false,
    spreadAdjustment: 1.0, // optional calibration multiplier (surfaceFireMin hook)
    verbose: true,
};
const R_M = 6371008.8;
const DEG = Math.PI / 180;
const MPH_TO_M_MIN = 26.8224;
function destination(lat, lon, bearingDeg, distM) {
    const br = bearingDeg * DEG, d = distM / R_M;
    const p1 = lat * DEG, l1 = lon * DEG;
    const p2 = Math.asin(Math.sin(p1) * Math.cos(d) + Math.cos(p1) * Math.sin(d) * Math.cos(br));
    const l2 = l1 + Math.atan2(Math.sin(br) * Math.sin(d) * Math.cos(p1), Math.cos(d) - Math.sin(p1) * Math.sin(p2));
    return [p2 / DEG, l2 / DEG];
}
function haversineM(lat1, lon1, lat2, lon2) {
    const p1 = lat1 * DEG, p2 = lat2 * DEG;
    const dp = p2 - p1, dl = (lon2 - lon1) * DEG;
    const a = Math.pow(Math.sin(dp / 2), 2) + Math.cos(p1) * Math.cos(p2) * Math.pow(Math.sin(dl / 2), 2);
    return 2 * R_M * Math.asin(Math.sqrt(a));
}
function bearingDeg(lat1, lon1, lat2, lon2) {
    const p1 = lat1 * DEG, p2 = lat2 * DEG, dl = (lon2 - lon1) * DEG;
    const y = Math.sin(dl) * Math.cos(p2);
    const x = Math.cos(p1) * Math.sin(p2) - Math.sin(p1) * Math.cos(p2) * Math.cos(dl);
    return (Math.atan2(y, x) / DEG + 360) % 360;
}
function getJson(url_1, params_1) {
    return __awaiter(this, arguments, void 0, function* (url, params, tries = 3) {
        let last;
        for (let i = 0; i < tries; i++) {
            try {
                const body = new URLSearchParams(params).toString();
                const r = yield fetch(url, {
                    method: "POST", body,
                    headers: Object.assign({ "Content-Type": "application/x-www-form-urlencoded" }, NWS_UA),
                });
                if (!r.ok)
                    throw new Error(`HTTP ${r.status}`);
                return yield r.json();
            }
            catch (e) {
                last = e;
                yield new Promise((res) => setTimeout(res, 1200 * (i + 1)));
            }
        }
        throw new Error(`${url}: ${last}`);
    });
}
/** Batched multipoint getSamples; returns float values aligned to points order. */
function sampleService(url, points) {
    return __awaiter(this, void 0, void 0, function* () {
        const CHUNK = 200;
        const out = new Array(points.length).fill(null);
        for (let i0 = 0; i0 < points.length; i0 += CHUNK) {
            const chunk = points.slice(i0, i0 + CHUNK);
            const j = yield getJson(url, {
                geometry: JSON.stringify({ points: chunk.map((p) => [p[1], p[0]]), spatialReference: { wkid: 4326 } }),
                geometryType: "esriGeometryMultipoint",
                returnFirstValueOnly: "true",
                f: "json",
            });
            for (const s of j.samples || []) {
                const v = parseFloat(s.value);
                if (Number.isFinite(v) && s.locationId !== undefined)
                    out[i0 + s.locationId] = v;
            }
        }
        return out;
    });
}
function windAtOrigin(lat, lon) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const pt = yield (yield fetch(`https://api.weather.gov/points/${lat.toFixed(4)},${lon.toFixed(4)}`, { headers: NWS_UA })).json();
        const rel = ((_b = (_a = pt.properties) === null || _a === void 0 ? void 0 : _a.relativeLocation) === null || _b === void 0 ? void 0 : _b.properties) || {};
        const hourly = yield (yield fetch(pt.properties.forecastHourly, { headers: NWS_UA })).json();
        const periods = hourly.properties.periods.slice(0, 24);
        const p0 = periods[0];
        const mph = parseFloat(String(p0.windSpeed || "10 mph"));
        const comp = p0.windDirection || "N";
        const deg = (_c = { N: 0, NNE: 22.5, NE: 45, ENE: 67.5, E: 90, ESE: 112.5, SE: 135, SSE: 157.5,
            S: 180, SSW: 202.5, SW: 225, WSW: 247.5, W: 270, WNW: 292.5, NW: 315, NNW: 337.5 }[comp]) !== null && _c !== void 0 ? _c : 0;
        // gusts: max windGust over next 24h when NWS provides it; else 1.6x sustained
        let gustMph = 0;
        for (const p of periods) {
            const g = parseFloat(String((_d = p.windGust) !== null && _d !== void 0 ? _d : ""));
            if (Number.isFinite(g) && g > gustMph)
                gustMph = g;
        }
        if (!gustMph)
            gustMph = mph * 1.6;
        return { mph, gustMph, fromDeg: deg, compass: comp, place: rel.city ? `${rel.city}, ${rel.state}` : null };
    });
}
// ---------------------------------------------------------------- fetch
function fetchFireData(lat_1, lon_1) {
    return __awaiter(this, arguments, void 0, function* (lat, lon, config = {}) {
        var _a, _b;
        const cfg = Object.assign(Object.assign({}, DEFAULT_CONE_CONFIG), config);
        const log = cfg.verbose ? (...a) => console.log(...a) : () => { };
        // ray set: evenly spaced bearings + one dedicated ray per asset in range
        const rays = [];
        for (let i = 0; i < cfg.bearings; i++)
            rays.push({ bearing: (360 / cfg.bearings) * i, kind: "ring" });
        const assetsInRange = [];
        for (const a of cfg.assets || []) {
            const d = haversineM(lat, lon, a.lat, a.lon);
            if (d <= cfg.maxRadiusKm * 1000) {
                assetsInRange.push(Object.assign(Object.assign({}, a), { distM: d, bearing: bearingDeg(lat, lon, a.lat, a.lon) }));
                rays.push({ bearing: bearingDeg(lat, lon, a.lat, a.lon), kind: "asset", asset: a.name });
            }
        }
        const nSteps = Math.ceil((cfg.maxRadiusKm * 1000) / cfg.stepM);
        const points = [];
        for (const ray of rays) {
            ray.i0 = points.length;
            const oLat = (_a = ray.olat) !== null && _a !== void 0 ? _a : lat, oLon = (_b = ray.olon) !== null && _b !== void 0 ? _b : lon; // perimeter seeds carry own origins
            for (let s = 1; s <= nSteps; s++) {
                points.push(destination(oLat, oLon, ray.bearing, s * cfg.stepM));
            }
            ray.n = nSteps;
        }
        log(`rays: ${rays.length} (${assetsInRange.length} asset rays) x ${nSteps} steps = ${points.length} sample points`);
        const [fuel, slopeDeg, aspect] = yield Promise.all([
            sampleService(LANDFIRE.fuel, points),
            sampleService(LANDFIRE.slopeDeg, points),
            sampleService(LANDFIRE.aspect, points),
        ]);
        const sampled = fuel.filter((v) => v !== null).length;
        log(`LANDFIRE sampled: fuels ${sampled}/${points.length}`);
        const wind = cfg.windOverride
            ? { mph: cfg.windOverride.mph, fromDeg: cfg.windOverride.fromDeg, compass: "override", place: null }
            : yield windAtOrigin(lat, lon);
        log(`wind: ${wind.mph} mph from ${wind.compass} (${wind.fromDeg} deg)${wind.place ? " near " + wind.place : ""}`);
        return {
            origin: { lat, lon }, rays, nSteps, stepM: cfg.stepM,
            fuel, slopeDeg, aspect, wind, assetsInRange,
            fetchedAt: new Date().toISOString(),
        };
    });
}
// ---------------------------------------------------------------- compute
function computeCone(data, config = {}) {
    const cfg = Object.assign(Object.assign({}, DEFAULT_CONE_CONFIG), config);
    const { origin, rays, nSteps, stepM, fuel, slopeDeg, aspect, wind } = data;
    const wind20mMin = wind.mph * MPH_TO_M_MIN;
    const sfminCache = new Map(); // fuel# -> {sfmin, waf} or null (nonburnable/unknown)
    const behaviorFor = (fm) => {
        if (!sfminCache.has(fm)) {
            if (!fm || !(0,_fire_engine__WEBPACK_IMPORTED_MODULE_0__.isBurnable)(fm))
                sfminCache.set(fm, null);
            else {
                const m = (0,_fire_engine__WEBPACK_IMPORTED_MODULE_0__.moisturize)(fm, cfg.moisture);
                sfminCache.set(fm, m ? { sfmin: (0,_fire_engine__WEBPACK_IMPORTED_MODULE_0__.surfaceFireMin)(m, cfg.spreadAdjustment), waf: (0,_fire_engine__WEBPACK_IMPORTED_MODULE_0__.windAdjustmentFactor)(m.delta) } : null);
            }
        }
        return sfminCache.get(fm);
    };
    let blockedSteps = 0, unknownSteps = 0;
    const rayResults = rays.map((ray) => {
        var _a, _b;
        const cum = new Array(ray.n).fill(null); // hours to END of step s
        let t = 0, stopped = null, lastRos = null;
        for (let s = 0; s < ray.n; s++) {
            const idx = ray.i0 + s;
            const fm = fuel[idx];
            let ros = null;
            if (fm === null) {
                unknownSteps++;
                if (!cfg.ignoreBarriers) {
                    stopped = "no-data";
                    break;
                }
            }
            else {
                const beh = behaviorFor(Math.round(fm));
                if (!beh) {
                    blockedSteps++;
                    if (!cfg.ignoreBarriers) {
                        stopped = "nonburnable";
                        break;
                    }
                }
                else {
                    const slopeTan = Math.tan(((_a = slopeDeg[idx]) !== null && _a !== void 0 ? _a : 0) * DEG);
                    const asp = (_b = aspect[idx]) !== null && _b !== void 0 ? _b : 0;
                    const midflame = wind20mMin * beh.waf;
                    const fbmax = (0,_fire_engine__WEBPACK_IMPORTED_MODULE_0__.surfaceFireBehaviorMax)(beh.sfmin, midflame, wind.fromDeg, slopeTan, asp, cfg.useWindLimit, "behave");
                    ros = (0,_fire_engine__WEBPACK_IMPORTED_MODULE_0__.spreadRateInDirection)(fbmax, ray.bearing, slopeTan, asp); // m/min
                }
            }
            if (ros !== null && ros >= cfg.minRosMmin)
                lastRos = ros;
            else if (!cfg.ignoreBarriers && ros !== null) {
                stopped = "stalled";
                break;
            }
            const useRos = (ros !== null && ros >= cfg.minRosMmin) ? ros : (cfg.ignoreBarriers ? lastRos : null);
            if (useRos === null) {
                stopped = stopped || "stalled";
                break;
            } // envelope with no prior good step
            t += stepM / useRos / 60; // hours
            if (t > cfg.maxHours) {
                stopped = "time";
                break;
            }
            cum[s] = t;
        }
        return Object.assign(Object.assign({}, ray), { cumHours: cum, stopped });
    });
    // isochrone rings: position along each ring-ray where cum crosses h
    const posAt = (ray, h) => {
        let prevT = 0, prevD = 0;
        for (let s = 0; s < ray.n; s++) {
            const tEnd = ray.cumHours[s];
            if (tEnd === null)
                break;
            const dEnd = (s + 1) * stepM;
            if (tEnd >= h) {
                const f = (h - prevT) / (tEnd - prevT);
                return prevD + f * (dEnd - prevD);
            }
            prevT = tEnd;
            prevD = dEnd;
        }
        return prevD; // barrier/stall/time cap: isochrone collapses to farthest reached
    };
    const isochrones = cfg.isochroneHours.filter((h) => h <= cfg.maxHours).map((h) => ({
        hour: h,
        ring: rayResults.filter((r) => r.kind === "ring").map((r) => {
            var _a, _b;
            const d = posAt(r, h);
            const [la, lo] = destination((_a = r.olat) !== null && _a !== void 0 ? _a : origin.lat, (_b = r.olon) !== null && _b !== void 0 ? _b : origin.lon, r.bearing, d);
            return { bearing: r.bearing, dist_km: d / 1000, lat: la, lon: lo };
        }),
    }));
    // asset ETAs along their dedicated rays
    const assets = (data.assetsInRange || []).map((a) => {
        const ray = rayResults.find((r) => r.kind === "asset" && r.asset === a.name);
        let eta = null;
        if (ray) {
            let prevT = 0, prevD = 0, found = false;
            for (let s = 0; s < ray.n && !found; s++) {
                const tEnd = ray.cumHours[s];
                if (tEnd === null)
                    break;
                const dEnd = (s + 1) * stepM;
                if (dEnd >= a.distM) {
                    eta = prevT + (tEnd - prevT) * ((a.distM - prevD) / (dEnd - prevD));
                    found = true;
                }
                prevT = tEnd;
                prevD = dEnd;
            }
        }
        return Object.assign(Object.assign({}, a), { dist_km: Math.round(a.distM / 100) / 10, eta_hr: eta !== null ? Math.round(eta * 10) / 10 : null, blocked: eta === null ? ((ray === null || ray === void 0 ? void 0 : ray.stopped) || "out-of-window") : null });
    }).sort((x, y) => { var _a, _b; return ((_a = x.eta_hr) !== null && _a !== void 0 ? _a : 1e9) - ((_b = y.eta_hr) !== null && _b !== void 0 ? _b : 1e9); });
    const runRecord = {
        cone_version: CONE_VERSION, engine_version: _fire_engine__WEBPACK_IMPORTED_MODULE_0__.ENGINE_VERSION,
        generated_at: new Date().toISOString(), data_fetched_at: data.fetchedAt,
        origin, wind: { mph: wind.mph, from_deg: wind.fromDeg, source: wind.compass === "override" ? "override" : "NWS hourly forecast", near: wind.place },
        moisture_scenario: cfg.moisture,
        fuels_source: "LANDFIRE LF2024 FBFM40 CONUS (30 m)", topo_source: "LANDFIRE LF2020 SlpD/Asp",
        rays: rays.length, step_m: stepM, max_radius_km: cfg.maxRadiusKm, max_hours: cfg.maxHours,
        nonburnable_ray_stops: rayResults.filter((r) => r.stopped === "nonburnable").length,
        stalled_ray_stops: rayResults.filter((r) => r.stopped === "stalled").length,
        no_data_stops: rayResults.filter((r) => r.stopped === "no-data").length,
        caveats: "Surface spread only (Rothermel/Albini via pyretechnics-verified engine). No spotting, crowning, or suppression. Planning bands, not fire behavior forecasting.",
    };
    return { origin, wind, isochrones, assets, rays: rayResults, runRecord };
}
function runCone(lat_1, lon_1) {
    return __awaiter(this, arguments, void 0, function* (lat, lon, config = {}) {
        const data = yield fetchFireData(lat, lon, config);
        return computeCone(data, config);
    });
}
/**
 * ACTIVE-fire mode: seed the march from the CURRENT perimeter instead of a
 * point. Seeds = simplified perimeter vertices (in order); each marches
 * OUTWARD (bearing from perimeter centroid through the seed). The hour-h
 * "isochrone" is then the PREDICTED PERIMETER at +h hours (burned interior
 * contributes nothing — rays start at the fire edge). Assets get a dedicated
 * ray from their nearest seed. This is also the daily self-validation loop:
 * predict tomorrow's perimeter from today's, score against tomorrow's actual.
 */
function fetchPerimeterData(rings_1) {
    return __awaiter(this, arguments, void 0, function* (rings, config = {}) {
        var _a;
        const cfg = Object.assign(Object.assign({}, DEFAULT_CONE_CONFIG), config);
        const targetSeeds = (_a = cfg.perimeterSeeds) !== null && _a !== void 0 ? _a : 48;
        const verts = rings.flat();
        const every = Math.max(1, Math.floor(verts.length / targetSeeds));
        const seeds = verts.filter((_, i) => i % every === 0).slice(0, targetSeeds * 2);
        const cLat = seeds.reduce((s, v) => s + v[1], 0) / seeds.length;
        const cLon = seeds.reduce((s, v) => s + v[0], 0) / seeds.length;
        const rays = seeds.map((v, i) => ({
            kind: "ring", seedIndex: i, olat: v[1], olon: v[0],
            bearing: bearingDeg(cLat, cLon, v[1], v[0]), // outward
        }));
        const assetsInRange = [];
        for (const a of cfg.assets || []) {
            // nearest seed = spread source toward this asset
            let best = null;
            for (const v of seeds) {
                const d = haversineM(v[1], v[0], a.lat, a.lon);
                if (!best || d < best.d)
                    best = { v, d };
            }
            if (best && best.d <= cfg.maxRadiusKm * 1000) {
                assetsInRange.push(Object.assign(Object.assign({}, a), { distM: best.d, bearing: bearingDeg(best.v[1], best.v[0], a.lat, a.lon) }));
                rays.push({ kind: "asset", asset: a.name, olat: best.v[1], olon: best.v[0],
                    bearing: bearingDeg(best.v[1], best.v[0], a.lat, a.lon) });
            }
        }
        // reuse fetchFireData's sampling by handing it prebuilt rays via a shim
        const nSteps = Math.ceil((cfg.maxRadiusKm * 1000) / cfg.stepM);
        const points = [];
        for (const ray of rays) {
            ray.i0 = points.length;
            for (let s = 1; s <= nSteps; s++)
                points.push(destination(ray.olat, ray.olon, ray.bearing, s * cfg.stepM));
            ray.n = nSteps;
        }
        if (cfg.verbose)
            console.log(`perimeter mode: ${seeds.length} seeds + ${assetsInRange.length} asset rays = ${points.length} sample points`);
        const [fuel, slopeDeg, aspect] = yield Promise.all([
            sampleService(LANDFIRE.fuel, points),
            sampleService(LANDFIRE.slopeDeg, points),
            sampleService(LANDFIRE.aspect, points),
        ]);
        const wind = cfg.windOverride
            ? { mph: cfg.windOverride.mph, fromDeg: cfg.windOverride.fromDeg, compass: "override", place: null }
            : yield windAtOrigin(cLat, cLon);
        return {
            origin: { lat: cLat, lon: cLon }, rays, nSteps, stepM: cfg.stepM,
            fuel, slopeDeg, aspect, wind, assetsInRange,
            perimeterSeeds: seeds, fetchedAt: new Date().toISOString(),
        };
    });
}
function runPerimeterCone(rings_1) {
    return __awaiter(this, arguments, void 0, function* (rings, config = {}) {
        const data = yield fetchPerimeterData(rings, config);
        return computeCone(data, config);
    });
}
/** Isochrone rings + origin as GeoJSON (for map display / validation overlays). */
function toGeoJson(result) {
    const fc = { type: "FeatureCollection", features: [
            { type: "Feature", properties: { kind: "origin" },
                geometry: { type: "Point", coordinates: [result.origin.lon, result.origin.lat] } },
        ] };
    for (const iso of result.isochrones) {
        const coords = iso.ring.map((p) => [p.lon, p.lat]);
        coords.push(coords[0]);
        fc.features.push({ type: "Feature", properties: { kind: "isochrone", hour: iso.hour },
            geometry: { type: "Polygon", coordinates: [coords] } });
    }
    return fc;
}


/***/ },

/***/ "./your-extensions/widgets/fire-cone/src/fire-engine.ts"
/*!**************************************************************!*\
  !*** ./your-extensions/widgets/fire-cone/src/fire-engine.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ENGINE_VERSION: () => (/* binding */ ENGINE_VERSION),
/* harmony export */   expandFuelModel: () => (/* binding */ expandFuelModel),
/* harmony export */   fireEccentricity: () => (/* binding */ fireEccentricity),
/* harmony export */   getPhiS: () => (/* binding */ getPhiS),
/* harmony export */   getPhiW: () => (/* binding */ getPhiW),
/* harmony export */   headSpreadRate: () => (/* binding */ headSpreadRate),
/* harmony export */   isBurnable: () => (/* binding */ isBurnable),
/* harmony export */   lengthToWidthRatio: () => (/* binding */ lengthToWidthRatio),
/* harmony export */   moisturize: () => (/* binding */ moisturize),
/* harmony export */   spreadRateInDirection: () => (/* binding */ spreadRateInDirection),
/* harmony export */   surfaceFireBehaviorMax: () => (/* binding */ surfaceFireBehaviorMax),
/* harmony export */   surfaceFireMin: () => (/* binding */ surfaceFireMin),
/* harmony export */   windAdjustmentFactor: () => (/* binding */ windAdjustmentFactor)
/* harmony export */ });
/* harmony import */ var _fuel_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fuel-models */ "./your-extensions/widgets/fire-cone/src/fuel-models.ts");
// @ts-nocheck
/**
 * fire-engine.js — Rothermel surface fire spread (core for the BNSF fire threat cone)
 * ====================================================================================
 *
 * Independent re-implementation of the Rothermel (1972) / Albini (1976) surface
 * fire spread model, ported from and golden-tested against Pyregence's
 * pyretechnics (EPL-2.0, https://github.com/pyregence/pyretechnics) — the same
 * oracle discipline as the WRI spill-trajectory engine. Fuel data: Scott &
 * Burgan (2005) FBFM40 + Anderson 13, in fuel-models.js (generated verbatim).
 *
 * Units (matching pyretechnics conventions):
 *   fuel-model table: delta ft, w_o lb/ft^2, sigma ft^-1, h kBtu/lb, M_x_dead %
 *   moisture M_f: fractions, 6 classes (dead 1h, 10h, 100h, dead-herb, live herb, live woody)
 *   surfaceFireMin(): baseSpreadRate m/min, maxEffectiveWindSpeed m/min
 *   getPhiW(midflame m/min), getPhiS(slope tan)
 *   head ROS (m/min) = baseSpreadRate * (1 + phiW + phiS)
 *
 * Dependency-free ESM: runs in Node and the browser.
 */

const ENGINE_VERSION = "1.0.0";
const ALMOST_ZERO = 1e-6;
const M_TO_FT = 3.281; // pyretechnics conversion.py
const FT_TO_M = 0.30478512648582745; // = 1 / 3.281
// ---------------------------------------------------------------- fuel models
const firemodSizeClass = (s) => s >= 1200 ? 1 : s >= 192 ? 2 : s >= 96 ? 3 : s >= 48 ? 4 : s >= 16 ? 5 : 6;
const expASigma = (A, s) => (s > ALMOST_ZERO ? Math.exp(A / s) : 0);
const isBurnable = (n) => !(n >= 91 && n <= 99);
/** Expand a compact table entry into the working FuelModel object. */
function expandFuelModel(number) {
    const c = _fuel_models__WEBPACK_IMPORTED_MODULE_0__.FUEL_MODELS[number];
    if (!c)
        return null;
    const [w1, w10, w100, wHerb, wWoody] = c.w_o;
    const [s1, s10, s100, sHerb, sWoody] = c.sigma;
    const MxDead = c.M_x_dead_pct * 0.01;
    const h = c.h_kbtu * 1000;
    const dynamic = number > 100 && wHerb > ALMOST_ZERO;
    const sDeadHerb = dynamic ? sHerb : 0;
    return {
        number, name: c.name, delta: c.delta, dynamic, burnable: isBurnable(number),
        M_x: [MxDead, MxDead, MxDead, dynamic ? MxDead : 0, 0, 0],
        M_f: [0, 0, 0, 0, 0, 0],
        w_o: [w1, w10, w100, 0, wHerb, wWoody],
        sigma: [s1, s10, s100, sDeadHerb, sHerb, sWoody],
        h: [h, h, h, h, h, h],
        rho_p: [32, 32, 32, 32, 32, 32],
        S_T: [0.0555, 0.0555, 0.0555, 0.0555, 0.0555, 0.0555],
        S_e: [0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
        exp_A_sigma: [expASigma(-138, s1), expASigma(-138, s10), expASigma(-138, s100),
            expASigma(-138, sDeadHerb), expASigma(-500, sHerb), expASigma(-500, sWoody)],
        firemod_size_classes: [s1, s10, s100, sDeadHerb, sHerb, sWoody].map(firemodSizeClass),
        f_ij: [0, 0, 0, 0, 0, 0], f_i: [0, 0], g_ij: [0, 0, 0, 0, 0, 0],
    };
}
function addDynamicFuelLoading(fm, M_f) {
    if (fm.dynamic) {
        const herbLoad = fm.w_o[4];
        const herbMoist = M_f[4];
        const green = Math.max(0, Math.min(1, herbMoist / 0.9 - 1 / 3));
        const cured = 1 - green;
        fm.M_f = [M_f[0], M_f[1], M_f[2], M_f[0], M_f[4], M_f[5]];
        fm.w_o = [fm.w_o[0], fm.w_o[1], fm.w_o[2], herbLoad * cured, herbLoad * green, fm.w_o[5]];
    }
    else {
        fm.M_f = M_f.slice();
    }
    return fm;
}
function addWeightingFactors(fm) {
    const A = fm.sigma.map((s, i) => (s * fm.w_o[i]) / fm.rho_p[i]);
    const A0 = A[0] + A[1] + A[2] + A[3], A1 = A[4] + A[5], AT = A0 + A1;
    const f = [0, 0, 0, 0, 0, 0];
    if (A0 > ALMOST_ZERO)
        for (let i = 0; i < 4; i++)
            f[i] = A[i] / A0;
    if (A1 > ALMOST_ZERO)
        for (let i = 4; i < 6; i++)
            f[i] = A[i] / A1;
    fm.f_ij = f;
    fm.f_i = AT > ALMOST_ZERO ? [A0 / AT, A1 / AT] : [0, 0];
    const cls = fm.firemod_size_classes;
    const gij = (k, isDead) => {
        let sum = 0;
        const [lo, hi] = isDead ? [0, 4] : [4, 6];
        for (let i = lo; i < hi; i++)
            if (cls[i] === cls[k])
                sum += f[i];
        return sum;
    };
    fm.g_ij = [gij(0, true), gij(1, true), gij(2, true), gij(3, true), gij(4, false), gij(5, false)];
    return fm;
}
function addLiveMoistureOfExtinction(fm) {
    const lf = fm.w_o.map((w, i) => w * fm.exp_A_sigma[i]);
    const deadMoistF = fm.M_f[0] * lf[0] + fm.M_f[1] * lf[1] + fm.M_f[2] * lf[2] + fm.M_f[3] * lf[3];
    const deadLoadF = lf[0] + lf[1] + lf[2] + lf[3];
    const liveLoadF = lf[4] + lf[5];
    const MxDead = fm.M_x[0];
    let MxLive = MxDead;
    if (deadLoadF > ALMOST_ZERO && liveLoadF > ALMOST_ZERO) {
        const deadMoist = deadMoistF / deadLoadF;
        const d2l = deadLoadF / liveLoadF;
        MxLive = Math.max(MxDead, 2.9 * d2l * (1 - deadMoist / MxDead) - 0.226);
    }
    fm.M_x = [fm.M_x[0], fm.M_x[1], fm.M_x[2], fm.M_x[3], MxLive, MxLive];
    return fm;
}
/** Fresh moisturized copy: dynamic herb curing + weighting + live M_x. */
function moisturize(number, M_f) {
    const fm = expandFuelModel(number);
    if (!fm)
        return null;
    return addLiveMoistureOfExtinction(addWeightingFactors(addDynamicFuelLoading(fm, M_f)));
}
// ---------------------------------------------------------------- Rothermel core
const dotCat = (x, y) => [
    x[0] * y[0] + x[1] * y[1] + x[2] * y[2] + x[3] * y[3],
    x[4] * y[4] + x[5] * y[5],
];
/**
 * No-wind-no-slope surface fire behavior + wind/slope factor coefficients.
 * Returns { baseSpreadRate m/min, maxEffectiveWindSpeed m/min, phiS_G,
 *           phiW_scalr, phiW_expnt } — use getPhiW/getPhiS then
 *           ROS = baseSpreadRate * (1 + phiW + phiS).
 */
function surfaceFireMin(fm, spreadRateAdjustment = 1.0) {
    const { delta, w_o, rho_p, sigma, M_f, f_ij, f_i } = fm;
    const sigmaPrimeCat = dotCat(f_ij, sigma);
    const sigmaPrime = f_i[0] * sigmaPrimeCat[0] + f_i[1] * sigmaPrimeCat[1];
    let beta = 0;
    if (delta > 0) {
        const b = dotCat(w_o, rho_p.map((r) => 1 / r));
        beta = (b[0] + b[1]) / delta;
    }
    const betaOp = sigmaPrime > 0 ? 3.348 * Math.pow(sigmaPrime, -0.8189) : 1.0;
    // reaction intensity
    const SeCat = dotCat(f_ij, fm.S_e);
    const etaS = SeCat.map((s) => (s > 0 ? 0.174 * Math.pow(s, -0.19) : 1.0));
    const MfCat = dotCat(f_ij, M_f);
    const MxCat = dotCat(f_ij, fm.M_x);
    const etaM = MfCat.map((mf, i) => {
        const mx = MxCat[i];
        if (mx <= 0)
            return 0;
        const r = Math.min(1, mf / mx);
        return 1 - 2.59 * r + 5.11 * r * r - 3.52 * r * r * r;
    });
    const hCat = dotCat(f_ij, fm.h);
    const Wn = [
        fm.g_ij[0] * w_o[0] * (1 - fm.S_T[0]) + fm.g_ij[1] * w_o[1] * (1 - fm.S_T[1]) +
            fm.g_ij[2] * w_o[2] * (1 - fm.S_T[2]) + fm.g_ij[3] * w_o[3] * (1 - fm.S_T[3]),
        fm.g_ij[4] * w_o[4] * (1 - fm.S_T[4]) + fm.g_ij[5] * w_o[5] * (1 - fm.S_T[5]),
    ];
    const btus = Wn[0] * hCat[0] * etaM[0] * etaS[0] + Wn[1] * hCat[1] * etaM[1] * etaS[1];
    const A = sigmaPrime > 0 ? 133 * Math.pow(sigmaPrime, -0.7913) : 0;
    const Bv = Math.pow(sigmaPrime, 1.5);
    const Cratio = beta / betaOp;
    const gammaMax = Bv / (495 + 0.0594 * Bv);
    const gamma = gammaMax * Math.pow(Cratio, A) * Math.exp(A * (1 - Cratio));
    const I_R = btus * gamma; // Btu/ft^2/min
    const xi = Math.exp((0.792 + 0.681 * Math.sqrt(sigmaPrime)) * (beta + 0.1)) /
        (192 + 0.2595 * sigmaPrime);
    const heatSource = I_R * xi;
    const rhoB = delta > 0 ? w_o.reduce((s, w) => s + w, 0) / delta : 0;
    const eps = sigma.map((s) => (s > 0 ? Math.exp(-138 / s) : 0));
    const Qig = M_f.map((m) => (m > 0 ? 250 + 1116 * m : 0));
    const heatPreCat = [
        f_ij[0] * eps[0] * Qig[0] + f_ij[1] * eps[1] * Qig[1] +
            f_ij[2] * eps[2] * Qig[2] + f_ij[3] * eps[3] * Qig[3],
        f_ij[4] * eps[4] * Qig[4] + f_ij[5] * eps[5] * Qig[5],
    ];
    const heatSink = rhoB * (f_i[0] * heatPreCat[0] + f_i[1] * heatPreCat[1]); // Btu/ft^3
    const R0 = heatSink > 0 ? heatSource / heatSink : 0; // ft/min
    // wind/slope coefficient pre-computation (Rothermel/Albini)
    const B = 0.02526 * Math.pow(sigmaPrime, 0.54);
    const C = 7.47 * Math.exp(-0.133 * Math.pow(sigmaPrime, 0.55));
    const E = 0.715 * Math.exp(-3.59 * (sigmaPrime * 1e-4));
    const F = Math.pow(beta / betaOp, E);
    const phiS_G = beta > 0 ? 5.275 * Math.pow(beta, -0.3) : 0;
    let phiW_scalr = 0, phiW_expnt = 0;
    if (F > 0) {
        phiW_scalr = (C / F) * Math.pow(M_TO_FT, B);
        phiW_expnt = B;
    }
    let ws_scalr = 0, ws_expnt = 0;
    if (B > 0) {
        ws_scalr = Math.pow(F / C, 1 / B) * FT_TO_M;
        ws_expnt = 1 / B;
    }
    return {
        baseSpreadRate: R0 * spreadRateAdjustment * FT_TO_M, // m/min
        maxEffectiveWindSpeed: 0.9 * I_R * FT_TO_M, // m/min
        reactionIntensity: I_R, // Btu/ft^2/min
        phiS_G, phiW_scalr, phiW_expnt, ws_scalr, ws_expnt,
    };
}
/** Wind factor. midflameWindSpeed in m/min. */
const getPhiW = (sfmin, midflameWindSpeed) => sfmin.phiW_scalr * Math.pow(midflameWindSpeed, sfmin.phiW_expnt);
/** Slope factor. slope = rise/run (tan of slope angle). */
const getPhiS = (sfmin, slope) => sfmin.phiS_G * slope * slope;
/** Convenience: head-fire ROS (m/min) for fuel model n at given conditions. */
function headSpreadRate(fuelModelNumber, M_f, midflameWindMmin, slopeTan) {
    if (!isBurnable(fuelModelNumber))
        return 0;
    const fm = moisturize(fuelModelNumber, M_f);
    if (!fm)
        return 0;
    const s = surfaceFireMin(fm, 1.0);
    return s.baseSpreadRate * (1 + getPhiW(s, midflameWindMmin) + getPhiS(s, slopeTan));
}
// ---------------------------------------------------------------- directional spread
// (ports of pyretechnics surface_fire.py: WAF, wind/slope vector combination,
//  elliptical L/W + eccentricity, behavior_max, behavior_in_direction)
const DEG = Math.PI / 180;
const M_MIN_TO_MPH = 0.0372840909091;
/** Andrews 2012 wind adjustment factor (20-ft wind -> midflame). */
function windAdjustmentFactor(fuelBedDepthFt, canopyHeightFt = 0, canopyCover = 0) {
    if (canopyCover > 0 && canopyHeightFt > 0) {
        const A = Math.sqrt((canopyCover / 3) * canopyHeightFt);
        const B = Math.log((20 + 0.36 * canopyHeightFt) / (0.13 * canopyHeightFt));
        return 0.555 / (A * B);
    }
    if (fuelBedDepthFt > 0) {
        return 1.83 / Math.log((20 + 0.36 * fuelBedDepthFt) / (0.13 * fuelBedDepthFt));
    }
    return 0;
}
const azToCart = (r, az) => [r * Math.sin(az * DEG), r * Math.cos(az * DEG)];
const dot2 = (a, b) => a[0] * b[0] + a[1] * b[1];
const toSlopePlane = (v2, grad2) => [v2[0], v2[1], dot2(v2, grad2)];
const mag3 = (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
const unit3 = (v) => { const m = mag3(v); return m === 0 ? v : [v[0] / m, v[1] / m, v[2] / m]; };
const dot3 = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
function lengthToWidthRatio(effWindMmin, model = "behave") {
    const mph = effWindMmin * M_MIN_TO_MPH;
    if (model === "rothermel")
        return 1 + 0.25 * mph;
    return Math.min(8, 0.936 * Math.exp(0.1147 * mph) + 0.461 * Math.exp(-0.0692 * mph) - 0.397);
}
const fireEccentricity = (lw) => Math.sqrt(lw * lw - 1) / lw;
/**
 * Max (heading) surface fire behavior from wind + slope, faithful to
 * calc_surface_fire_behavior_max. Directions in degrees clockwise from N;
 * upwindDirection = direction wind comes FROM; aspect = downslope-facing.
 */
function surfaceFireBehaviorMax(sfmin, midflameWindMmin, upwindDirection, slopeTan, aspect, useWindLimit = true, lwModel = "behave") {
    const downwind = (upwindDirection + 180) % 360;
    const upslope = (aspect + 180) % 360;
    const slopeVec2 = azToCart(slopeTan, upslope);
    const windVec3 = toSlopePlane(azToCart(midflameWindMmin, downwind), slopeVec2);
    const slopeVec3 = toSlopePlane(slopeVec2, slopeVec2);
    const phiW = getPhiW(sfmin, mag3(windVec3));
    const phiS = getPhiS(sfmin, slopeTan);
    const wU = phiW > 0 ? unit3(windVec3) : windVec3;
    const sU = phiS > 0 ? unit3(slopeVec3) : slopeVec3;
    const phiE3 = [phiW * wU[0] + phiS * sU[0], phiW * wU[1] + phiS * sU[1], phiW * wU[2] + phiS * sU[2]];
    let phiE = mag3(phiE3);
    let maxDir;
    if (phiE > 0)
        maxDir = unit3(phiE3);
    else if (phiS > 0)
        maxDir = unit3(slopeVec3);
    else
        maxDir = [0, 1, 0];
    // wind-limit: effective wind speed implied by phi_E, capped at 0.9 I_R
    let effWind = sfmin.ws_scalr * Math.pow(phiE, sfmin.ws_expnt);
    if (useWindLimit && effWind > sfmin.maxEffectiveWindSpeed) {
        effWind = sfmin.maxEffectiveWindSpeed;
        phiE = getPhiW(sfmin, effWind);
    }
    const lw = lengthToWidthRatio(effWind, lwModel);
    return {
        maxSpreadRate: sfmin.baseSpreadRate * (1 + phiE), // m/min
        maxSpreadDirection: maxDir, // 3D unit vector, slope-tangential
        lengthToWidthRatio: lw,
        eccentricity: fireEccentricity(lw),
    };
}
/** ROS (m/min) toward a compass bearing, on the slope-tangential ellipse. */
function spreadRateInDirection(fbmax, bearingDeg, slopeTan, aspect) {
    const upslope = (aspect + 180) % 360;
    const slopeVec2 = azToCart(slopeTan, upslope);
    const ray3 = unit3(toSlopePlane(azToCart(1, bearingDeg), slopeVec2));
    const cosW = dot3(fbmax.maxSpreadDirection, ray3);
    const e = fbmax.eccentricity;
    return fbmax.maxSpreadRate * (1 - e) / (1 - e * cosW);
}


/***/ },

/***/ "./your-extensions/widgets/fire-cone/src/fuel-models.ts"
/*!**************************************************************!*\
  !*** ./your-extensions/widgets/fire-cone/src/fuel-models.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FUEL_MODELS: () => (/* binding */ FUEL_MODELS)
/* harmony export */ });
// @ts-nocheck
// GENERATED from fuel-models.json (exported verbatim from pyretechnics compact
// table; Anderson 13 + Scott & Burgan FBFM40 + nonburnable 91-99). Do not hand-edit.
// Columns: delta ft | M_x_dead % | h kBtu/lb | w_o[d1h,d10h,d100h,herb,woody] lb/ft2 | sigma[same 5] ft^-1
const FUEL_MODELS = { "1": { "name": "R01", "delta": 1.0, "M_x_dead_pct": 12.0, "h_kbtu": 8.0, "w_o": [0.034, 0.0, 0.0, 0.0, 0.0], "sigma": [3500.0, 0.0, 0.0, 0.0, 0.0] }, "2": { "name": "R02", "delta": 1.0, "M_x_dead_pct": 15.0, "h_kbtu": 8.0, "w_o": [0.092, 0.046, 0.023, 0.023, 0.0], "sigma": [3000.0, 109.0, 30.0, 1500.0, 0.0] }, "3": { "name": "R03", "delta": 2.5, "M_x_dead_pct": 25.0, "h_kbtu": 8.0, "w_o": [0.138, 0.0, 0.0, 0.0, 0.0], "sigma": [1500.0, 0.0, 0.0, 0.0, 0.0] }, "4": { "name": "R04", "delta": 6.0, "M_x_dead_pct": 20.0, "h_kbtu": 8.0, "w_o": [0.23, 0.184, 0.092, 0.23, 0.0], "sigma": [2000.0, 109.0, 30.0, 1500.0, 0.0] }, "5": { "name": "R05", "delta": 2.0, "M_x_dead_pct": 20.0, "h_kbtu": 8.0, "w_o": [0.046, 0.023, 0.0, 0.092, 0.0], "sigma": [2000.0, 109.0, 0.0, 1500.0, 0.0] }, "6": { "name": "R06", "delta": 2.5, "M_x_dead_pct": 25.0, "h_kbtu": 8.0, "w_o": [0.069, 0.115, 0.092, 0.0, 0.0], "sigma": [1750.0, 109.0, 30.0, 0.0, 0.0] }, "7": { "name": "R07", "delta": 2.5, "M_x_dead_pct": 40.0, "h_kbtu": 8.0, "w_o": [0.052, 0.086, 0.069, 0.017, 0.0], "sigma": [1750.0, 109.0, 30.0, 1550.0, 0.0] }, "8": { "name": "R08", "delta": 0.2, "M_x_dead_pct": 30.0, "h_kbtu": 8.0, "w_o": [0.069, 0.046, 0.115, 0.0, 0.0], "sigma": [2000.0, 109.0, 30.0, 0.0, 0.0] }, "9": { "name": "R09", "delta": 0.2, "M_x_dead_pct": 25.0, "h_kbtu": 8.0, "w_o": [0.134, 0.019, 0.007, 0.0, 0.0], "sigma": [2500.0, 109.0, 30.0, 0.0, 0.0] }, "10": { "name": "R10", "delta": 1.0, "M_x_dead_pct": 25.0, "h_kbtu": 8.0, "w_o": [0.138, 0.092, 0.23, 0.092, 0.0], "sigma": [2000.0, 109.0, 30.0, 1500.0, 0.0] }, "11": { "name": "R11", "delta": 1.0, "M_x_dead_pct": 15.0, "h_kbtu": 8.0, "w_o": [0.069, 0.207, 0.253, 0.0, 0.0], "sigma": [1500.0, 109.0, 30.0, 0.0, 0.0] }, "12": { "name": "R12", "delta": 2.3, "M_x_dead_pct": 20.0, "h_kbtu": 8.0, "w_o": [0.184, 0.644, 0.759, 0.0, 0.0], "sigma": [1500.0, 109.0, 30.0, 0.0, 0.0] }, "13": { "name": "R13", "delta": 3.0, "M_x_dead_pct": 25.0, "h_kbtu": 8.0, "w_o": [0.322, 1.058, 1.288, 0.0, 0.0], "sigma": [1500.0, 109.0, 30.0, 0.0, 0.0] }, "91": { "name": "NB1", "delta": 0.0, "M_x_dead_pct": 0.0, "h_kbtu": 0.0, "w_o": [0.0, 0.0, 0.0, 0.0, 0.0], "sigma": [0.0, 0.0, 0.0, 0.0, 0.0] }, "92": { "name": "NB2", "delta": 0.0, "M_x_dead_pct": 0.0, "h_kbtu": 0.0, "w_o": [0.0, 0.0, 0.0, 0.0, 0.0], "sigma": [0.0, 0.0, 0.0, 0.0, 0.0] }, "93": { "name": "NB3", "delta": 0.0, "M_x_dead_pct": 0.0, "h_kbtu": 0.0, "w_o": [0.0, 0.0, 0.0, 0.0, 0.0], "sigma": [0.0, 0.0, 0.0, 0.0, 0.0] }, "98": { "name": "NB4", "delta": 0.0, "M_x_dead_pct": 0.0, "h_kbtu": 0.0, "w_o": [0.0, 0.0, 0.0, 0.0, 0.0], "sigma": [0.0, 0.0, 0.0, 0.0, 0.0] }, "99": { "name": "NB5", "delta": 0.0, "M_x_dead_pct": 0.0, "h_kbtu": 0.0, "w_o": [0.0, 0.0, 0.0, 0.0, 0.0], "sigma": [0.0, 0.0, 0.0, 0.0, 0.0] }, "101": { "name": "GR1", "delta": 0.4, "M_x_dead_pct": 15.0, "h_kbtu": 8.0, "w_o": [0.0046, 0.0, 0.0, 0.0138, 0.0], "sigma": [2200.0, 109.0, 30.0, 2000.0, 0.0] }, "102": { "name": "GR2", "delta": 1.0, "M_x_dead_pct": 15.0, "h_kbtu": 8.0, "w_o": [0.0046, 0.0, 0.0, 0.0459, 0.0], "sigma": [2000.0, 109.0, 30.0, 1800.0, 0.0] }, "103": { "name": "GR3", "delta": 2.0, "M_x_dead_pct": 30.0, "h_kbtu": 8.0, "w_o": [0.0046, 0.0184, 0.0, 0.0689, 0.0], "sigma": [1500.0, 109.0, 30.0, 1300.0, 0.0] }, "104": { "name": "GR4", "delta": 2.0, "M_x_dead_pct": 15.0, "h_kbtu": 8.0, "w_o": [0.0115, 0.0, 0.0, 0.0872, 0.0], "sigma": [2000.0, 109.0, 30.0, 1800.0, 0.0] }, "105": { "name": "GR5", "delta": 1.5, "M_x_dead_pct": 40.0, "h_kbtu": 8.0, "w_o": [0.0184, 0.0, 0.0, 0.1148, 0.0], "sigma": [1800.0, 109.0, 30.0, 1600.0, 0.0] }, "106": { "name": "GR6", "delta": 1.5, "M_x_dead_pct": 40.0, "h_kbtu": 9.0, "w_o": [0.0046, 0.0, 0.0, 0.1561, 0.0], "sigma": [2200.0, 109.0, 30.0, 2000.0, 0.0] }, "107": { "name": "GR7", "delta": 3.0, "M_x_dead_pct": 15.0, "h_kbtu": 8.0, "w_o": [0.0459, 0.0, 0.0, 0.2479, 0.0], "sigma": [2000.0, 109.0, 30.0, 1800.0, 0.0] }, "108": { "name": "GR8", "delta": 4.0, "M_x_dead_pct": 30.0, "h_kbtu": 8.0, "w_o": [0.023, 0.0459, 0.0, 0.3352, 0.0], "sigma": [1500.0, 109.0, 30.0, 1300.0, 0.0] }, "109": { "name": "GR9", "delta": 5.0, "M_x_dead_pct": 40.0, "h_kbtu": 8.0, "w_o": [0.0459, 0.0459, 0.0, 0.4132, 0.0], "sigma": [1800.0, 109.0, 30.0, 1600.0, 0.0] }, "121": { "name": "GS1", "delta": 0.9, "M_x_dead_pct": 15.0, "h_kbtu": 8.0, "w_o": [0.0092, 0.0, 0.0, 0.023, 0.0298], "sigma": [2000.0, 109.0, 30.0, 1800.0, 1800.0] }, "122": { "name": "GS2", "delta": 1.5, "M_x_dead_pct": 15.0, "h_kbtu": 8.0, "w_o": [0.023, 0.023, 0.0, 0.0275, 0.0459], "sigma": [2000.0, 109.0, 30.0, 1800.0, 1800.0] }, "123": { "name": "GS3", "delta": 1.8, "M_x_dead_pct": 40.0, "h_kbtu": 8.0, "w_o": [0.0138, 0.0115, 0.0, 0.0666, 0.0574], "sigma": [1800.0, 109.0, 30.0, 1600.0, 1600.0] }, "124": { "name": "GS4", "delta": 2.1, "M_x_dead_pct": 40.0, "h_kbtu": 8.0, "w_o": [0.0872, 0.0138, 0.0046, 0.1561, 0.326], "sigma": [1800.0, 109.0, 30.0, 1600.0, 1600.0] }, "141": { "name": "SH1", "delta": 1.0, "M_x_dead_pct": 15.0, "h_kbtu": 8.0, "w_o": [0.0115, 0.0115, 0.0, 0.0069, 0.0597], "sigma": [2000.0, 109.0, 30.0, 1800.0, 1600.0] }, "142": { "name": "SH2", "delta": 1.0, "M_x_dead_pct": 15.0, "h_kbtu": 8.0, "w_o": [0.062, 0.1102, 0.0344, 0.0, 0.1768], "sigma": [2000.0, 109.0, 30.0, 0.0, 1600.0] }, "143": { "name": "SH3", "delta": 2.4, "M_x_dead_pct": 40.0, "h_kbtu": 8.0, "w_o": [0.0207, 0.1377, 0.0, 0.0, 0.2847], "sigma": [1600.0, 109.0, 30.0, 0.0, 1400.0] }, "144": { "name": "SH4", "delta": 3.0, "M_x_dead_pct": 30.0, "h_kbtu": 8.0, "w_o": [0.039, 0.0528, 0.0092, 0.0, 0.1171], "sigma": [2000.0, 109.0, 30.0, 1800.0, 1600.0] }, "145": { "name": "SH5", "delta": 6.0, "M_x_dead_pct": 15.0, "h_kbtu": 8.0, "w_o": [0.1653, 0.0964, 0.0, 0.0, 0.1331], "sigma": [750.0, 109.0, 30.0, 0.0, 1600.0] }, "146": { "name": "SH6", "delta": 2.0, "M_x_dead_pct": 30.0, "h_kbtu": 8.0, "w_o": [0.1331, 0.0666, 0.0, 0.0, 0.0643], "sigma": [750.0, 109.0, 30.0, 0.0, 1600.0] }, "147": { "name": "SH7", "delta": 6.0, "M_x_dead_pct": 15.0, "h_kbtu": 8.0, "w_o": [0.1607, 0.2433, 0.101, 0.0, 0.1561], "sigma": [750.0, 109.0, 30.0, 0.0, 1600.0] }, "148": { "name": "SH8", "delta": 3.0, "M_x_dead_pct": 40.0, "h_kbtu": 8.0, "w_o": [0.0941, 0.1561, 0.039, 0.0, 0.1997], "sigma": [750.0, 109.0, 30.0, 0.0, 1600.0] }, "149": { "name": "SH9", "delta": 4.4, "M_x_dead_pct": 40.0, "h_kbtu": 8.0, "w_o": [0.2066, 0.1125, 0.0, 0.0712, 0.3214], "sigma": [750.0, 109.0, 30.0, 1800.0, 1500.0] }, "161": { "name": "TU1", "delta": 0.6, "M_x_dead_pct": 20.0, "h_kbtu": 8.0, "w_o": [0.0092, 0.0413, 0.0689, 0.0092, 0.0413], "sigma": [2000.0, 109.0, 30.0, 1800.0, 1600.0] }, "162": { "name": "TU2", "delta": 1.0, "M_x_dead_pct": 30.0, "h_kbtu": 8.0, "w_o": [0.0436, 0.0826, 0.0574, 0.0, 0.0092], "sigma": [2000.0, 109.0, 30.0, 0.0, 1600.0] }, "163": { "name": "TU3", "delta": 1.3, "M_x_dead_pct": 30.0, "h_kbtu": 8.0, "w_o": [0.0505, 0.0069, 0.0115, 0.0298, 0.0505], "sigma": [1800.0, 109.0, 30.0, 1600.0, 1400.0] }, "164": { "name": "TU4", "delta": 0.5, "M_x_dead_pct": 12.0, "h_kbtu": 8.0, "w_o": [0.2066, 0.0, 0.0, 0.0, 0.0918], "sigma": [2300.0, 109.0, 30.0, 0.0, 2000.0] }, "165": { "name": "TU5", "delta": 1.0, "M_x_dead_pct": 25.0, "h_kbtu": 8.0, "w_o": [0.1837, 0.1837, 0.1377, 0.0, 0.1377], "sigma": [1500.0, 109.0, 30.0, 0.0, 750.0] }, "181": { "name": "TL1", "delta": 0.2, "M_x_dead_pct": 30.0, "h_kbtu": 8.0, "w_o": [0.0459, 0.101, 0.1653, 0.0, 0.0], "sigma": [2000.0, 109.0, 30.0, 0.0, 0.0] }, "182": { "name": "TL2", "delta": 0.2, "M_x_dead_pct": 25.0, "h_kbtu": 8.0, "w_o": [0.0643, 0.1056, 0.101, 0.0, 0.0], "sigma": [2000.0, 109.0, 30.0, 0.0, 0.0] }, "183": { "name": "TL3", "delta": 0.3, "M_x_dead_pct": 20.0, "h_kbtu": 8.0, "w_o": [0.023, 0.101, 0.1286, 0.0, 0.0], "sigma": [2000.0, 109.0, 30.0, 0.0, 0.0] }, "184": { "name": "TL4", "delta": 0.4, "M_x_dead_pct": 25.0, "h_kbtu": 8.0, "w_o": [0.023, 0.0689, 0.1928, 0.0, 0.0], "sigma": [2000.0, 109.0, 30.0, 0.0, 0.0] }, "185": { "name": "TL5", "delta": 0.6, "M_x_dead_pct": 25.0, "h_kbtu": 8.0, "w_o": [0.0528, 0.1148, 0.202, 0.0, 0.0], "sigma": [2000.0, 109.0, 30.0, 0.0, 1600.0] }, "186": { "name": "TL6", "delta": 0.3, "M_x_dead_pct": 25.0, "h_kbtu": 8.0, "w_o": [0.1102, 0.0551, 0.0551, 0.0, 0.0], "sigma": [2000.0, 109.0, 30.0, 0.0, 0.0] }, "187": { "name": "TL7", "delta": 0.4, "M_x_dead_pct": 25.0, "h_kbtu": 8.0, "w_o": [0.0138, 0.0643, 0.3719, 0.0, 0.0], "sigma": [2000.0, 109.0, 30.0, 0.0, 0.0] }, "188": { "name": "TL8", "delta": 0.3, "M_x_dead_pct": 35.0, "h_kbtu": 8.0, "w_o": [0.2663, 0.0643, 0.0505, 0.0, 0.0], "sigma": [1800.0, 109.0, 30.0, 0.0, 0.0] }, "189": { "name": "TL9", "delta": 0.6, "M_x_dead_pct": 35.0, "h_kbtu": 8.0, "w_o": [0.3053, 0.1515, 0.1905, 0.0, 0.0], "sigma": [1800.0, 109.0, 30.0, 0.0, 1600.0] }, "201": { "name": "SB1", "delta": 1.0, "M_x_dead_pct": 25.0, "h_kbtu": 8.0, "w_o": [0.0689, 0.1377, 0.5051, 0.0, 0.0], "sigma": [2000.0, 109.0, 30.0, 0.0, 0.0] }, "202": { "name": "SB2", "delta": 1.0, "M_x_dead_pct": 25.0, "h_kbtu": 8.0, "w_o": [0.2066, 0.1951, 0.1837, 0.0, 0.0], "sigma": [2000.0, 109.0, 30.0, 0.0, 0.0] }, "203": { "name": "SB3", "delta": 1.2, "M_x_dead_pct": 25.0, "h_kbtu": 8.0, "w_o": [0.2525, 0.1263, 0.1377, 0.0, 0.0], "sigma": [2000.0, 109.0, 30.0, 0.0, 0.0] }, "204": { "name": "SB4", "delta": 2.7, "M_x_dead_pct": 25.0, "h_kbtu": 8.0, "w_o": [0.241, 0.1607, 0.241, 0.0, 0.0], "sigma": [2000.0, 109.0, 30.0, 0.0, 0.0] } };


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

/***/ "esri/geometry/Polygon"
/*!****************************************!*\
  !*** external "esri/geometry/Polygon" ***!
  \****************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__;

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
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/fire-cone/src/runtime/widget.tsx ***!
  \******************************************************************/
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
/* harmony import */ var esri_geometry_Polygon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/geometry/Polygon */ "esri/geometry/Polygon");
/* harmony import */ var esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/geometry/Point */ "esri/geometry/Point");
/* harmony import */ var _fire_cone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fire-cone */ "./your-extensions/widgets/fire-cone/src/fire-cone.ts");
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
 * Fire Threat Cone widget — click a fire origin, get ray-marched hourly
 * isochrones (Rothermel physics, LANDFIRE fuels/topo, NWS wind) plus ETAs to
 * BNSF wildfire-strategy assets within range. Planning-level; ephemeral.
 */








const WFIGS_CURRENT_PERIMS = 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/USA_Wildfires_v1/FeatureServer/1';
const { useState, useRef, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React;
// hour ring colors: warm near, cool far
const HOUR_COLORS = { 1: '#d7191c', 3: '#f07c4a', 6: '#fdae61', 12: '#e3c700', 24: '#2c7bb6' };
const ringColor = (h) => HOUR_COLORS[h] || '#2c7bb6';
const hexToRgb = (hex) => [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
const MOISTURE_PRESETS = {
    cured: { label: 'Fire season (cured grass)', m: [0.03, 0.04, 0.05, 0.0, 0.30, 0.60] },
    moderate: { label: 'Shoulder season', m: [0.06, 0.07, 0.08, 0.0, 0.60, 0.90] },
    green: { label: 'Green-up (spring)', m: [0.09, 0.10, 0.11, 0.0, 1.20, 1.20] },
};
const Widget = (props) => {
    var _a, _b, _c, _d;
    const [jmv, setJmv] = useState(null);
    const [arming, setArming] = useState(false);
    const [running, setRunning] = useState(false);
    const [status, setStatus] = useState('Click "Set fire origin", then click the map.');
    const [result, setResult] = useState(null);
    const [moistKey, setMoistKey] = useState('cured');
    const [hidden, setHidden] = useState(false);
    const layerRef = useRef(null);
    const clickRef = useRef(null);
    const cacheRef = useRef(null);
    useEffect(() => () => {
        if (clickRef.current)
            clickRef.current.remove();
        if (layerRef.current && jmv)
            jmv.view.map.remove(layerRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jmv]);
    const ensureLayer = (view) => {
        if (!layerRef.current) {
            layerRef.current = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_3__["default"]({ title: 'Fire threat cone (ephemeral)', listMode: 'hide' });
            view.map.add(layerRef.current);
        }
        return layerRef.current;
    };
    const coneCfg = () => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return ({
            maxHours: (_a = props.config.maxHours) !== null && _a !== void 0 ? _a : 24,
            isochroneHours: (_e = (_d = (_c = ((_b = props.config.isochroneHours) !== null && _b !== void 0 ? _b : [1, 3, 6, 12, 24])).asMutable) === null || _d === void 0 ? void 0 : _d.call(_c)) !== null && _e !== void 0 ? _e : props.config.isochroneHours,
            maxRadiusKm: (_f = props.config.maxRadiusKm) !== null && _f !== void 0 ? _f : 30,
            bearings: (_g = props.config.bearings) !== null && _g !== void 0 ? _g : 24,
            stepM: (_h = props.config.stepM) !== null && _h !== void 0 ? _h : 500,
            moisture: MOISTURE_PRESETS[moistKey].m,
            verbose: false,
        });
    };
    function loadAssets(lat, lon, radiusKm) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const out = [];
            for (const lc of ((_a = props.config.assetLayers) !== null && _a !== void 0 ? _a : [])) {
                try {
                    const fl = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({ url: lc.url });
                    const q = fl.createQuery();
                    q.where = '1=1';
                    q.outFields = [lc.nameField, ...(lc.extraFields || [])];
                    q.returnGeometry = true;
                    q.outSpatialReference = { wkid: 4326 };
                    const fs = yield fl.queryFeatures(q);
                    for (const f of fs.features) {
                        const g = f.geometry;
                        if (!g || g.type !== 'point')
                            continue;
                        const dKm = 6371.0088 * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin((g.y - lat) * Math.PI / 360), 2) +
                            Math.cos(lat * Math.PI / 180) * Math.cos(g.y * Math.PI / 180) * Math.pow(Math.sin((g.x - lon) * Math.PI / 360), 2)));
                        if (dKm <= radiusKm) {
                            const detail = (lc.extraFields || []).map((e) => f.attributes[e]).filter(Boolean).join(' · ');
                            out.push({ name: `${f.attributes[lc.nameField] || 'asset'}${detail ? ' (' + detail + ')' : ''}`, lat: g.y, lon: g.x });
                        }
                    }
                }
                catch ( /* per-layer failure tolerated */_b) { /* per-layer failure tolerated */ }
            }
            return out;
        });
    }
    const draw = (view, res) => {
        var _a;
        const layer = ensureLayer(view);
        layer.removeAll();
        // outer uncertainty bands first (24h rings only, faint): EXTREME dotted, MAX dashed
        for (const [band, style] of [['extreme', 'dot'], ['max', 'dash']]) {
            const bres = (_a = res.bands) === null || _a === void 0 ? void 0 : _a[band];
            if (!bres)
                continue;
            const iso = bres.isochrones[bres.isochrones.length - 1];
            if (!iso)
                continue;
            const coords = iso.ring.map((p) => [p.lon, p.lat]);
            coords.push(coords[0]);
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: new esri_geometry_Polygon__WEBPACK_IMPORTED_MODULE_6__["default"]({ rings: [coords], spatialReference: { wkid: 4326 } }),
                symbol: {
                    type: 'simple-fill', color: [215, 25, 28, band === 'extreme' ? 0.04 : 0.07],
                    outline: { color: band === 'extreme' ? '#8b0000' : '#d7191c', width: 1.5, style },
                },
                popupTemplate: {
                    title: band === 'extreme' ? `${iso.hour}-hr HISTORICAL EXTREME (spotting-driven ×1.5)` : `${iso.hour}-hr CREDIBLE MAX (gusts, barriers crossed)`,
                    content: 'Outer uncertainty band — see validation notes.',
                },
            }));
        }
        // farthest rings first so near rings render on top
        const isos = [...res.isochrones].sort((a, b) => b.hour - a.hour);
        for (const iso of isos) {
            const coords = iso.ring.map((p) => [p.lon, p.lat]);
            coords.push(coords[0]);
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: new esri_geometry_Polygon__WEBPACK_IMPORTED_MODULE_6__["default"]({ rings: [coords], spatialReference: { wkid: 4326 } }),
                symbol: {
                    type: 'simple-fill', color: [...hexToRgb(ringColor(iso.hour)), 0.12],
                    outline: { color: ringColor(iso.hour), width: 2 },
                },
                popupTemplate: { title: `${iso.hour}-hour reach`, content: 'Planning-level surface spread envelope.' },
            }));
            // hour label at the ring's farthest point
            const far = iso.ring.reduce((m, p) => (p.dist_km > m.dist_km ? p : m), iso.ring[0]);
            if (far.dist_km > 0.05) {
                layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                    geometry: new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({ latitude: far.lat, longitude: far.lon }),
                    symbol: { type: 'text', text: `${iso.hour} hr`, color: ringColor(iso.hour), haloColor: '#fff', haloSize: 1.5, font: { size: 10, weight: 'bold' } },
                }));
            }
        }
        if (res.mode === 'perimeter' && res.sourcePerimeter) {
            // current fire footprint (the prediction's starting edge)
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: new esri_geometry_Polygon__WEBPACK_IMPORTED_MODULE_6__["default"]({ rings: res.sourcePerimeter.rings, spatialReference: { wkid: 4326 } }),
                symbol: { type: 'simple-fill', color: [90, 20, 10, 0.35], outline: { color: '#5a140a', width: 2 } },
                popupTemplate: { title: `${res.sourcePerimeter.name} — current perimeter`, content: `${(res.sourcePerimeter.acres || 0).toFixed(0)} ac (WFIGS)` },
            }));
        }
        else {
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({ latitude: res.origin.lat, longitude: res.origin.lon }),
                symbol: { type: 'simple-marker', style: 'diamond', size: 12, color: '#d7191c', outline: { color: '#fff', width: 1.5 } },
                popupTemplate: { title: 'Fire origin', content: `wind ${res.wind.mph} mph from ${res.wind.compass}` },
            }));
        }
    };
    /** Perimeter mode: find the active WFIGS fire at/near the click. */
    function findActivePerimeter(lat, lon) {
        return __awaiter(this, void 0, void 0, function* () {
            const fl = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({ url: WFIGS_CURRENT_PERIMS });
            const q = fl.createQuery();
            q.geometry = new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({ latitude: lat, longitude: lon });
            q.distance = 3000;
            q.units = 'meters';
            q.spatialRelationship = 'intersects';
            q.outFields = ['IncidentName', 'GISAcres'];
            q.returnGeometry = true;
            q.outSpatialReference = { wkid: 4326 };
            const fs = yield fl.queryFeatures(q);
            const f = fs.features.sort((a, b) => (b.attributes.GISAcres || 0) - (a.attributes.GISAcres || 0))[0];
            if (!f)
                return null;
            return { name: f.attributes.IncidentName, acres: f.attributes.GISAcres, rings: f.geometry.rings };
        });
    }
    const runPerimAt = (lat, lon) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        setRunning(true);
        setResult(null);
        setStatus('Looking for an active fire perimeter at the click…');
        try {
            const fire = yield findActivePerimeter(lat, lon);
            if (!fire) {
                setStatus('No active WFIGS perimeter within 3 km of that click — use point mode for a hypothetical start.');
                return;
            }
            setStatus(`${fire.name} (${(_a = fire.acres) === null || _a === void 0 ? void 0 : _a.toFixed(0)} ac): sampling fuels around the perimeter…`);
            const cfg = coneCfg();
            cfg.perimeterSeeds = 40;
            cfg.assets = yield loadAssets(lat, lon, cfg.maxRadiusKm + 20);
            const data = yield (0,_fire_cone__WEBPACK_IMPORTED_MODULE_8__.fetchPerimeterData)(fire.rings, cfg);
            cacheRef.current = { lat, lon, data };
            const gust = data.wind.gustMph || data.wind.mph * 1.6;
            const likely = (0,_fire_cone__WEBPACK_IMPORTED_MODULE_8__.computeCone)(data, cfg);
            const dataG = Object.assign(Object.assign({}, data), { wind: Object.assign(Object.assign({}, data.wind), { mph: gust }) });
            const max = (0,_fire_cone__WEBPACK_IMPORTED_MODULE_8__.computeCone)(dataG, Object.assign(Object.assign({}, cfg), { ignoreBarriers: true }));
            const extreme = (0,_fire_cone__WEBPACK_IMPORTED_MODULE_8__.computeCone)(dataG, Object.assign(Object.assign({}, cfg), { ignoreBarriers: true, spreadAdjustment: 1.5 }));
            const res = likely;
            res.bands = { max, extreme, gustMph: gust };
            res.mode = 'perimeter';
            res.sourcePerimeter = { name: fire.name, acres: fire.acres, rings: fire.rings };
            draw(jmv.view, res);
            if (layerRef.current)
                layerRef.current.visible = true;
            setHidden(false);
            setResult(res);
            setStatus(`${fire.name}: predicted perimeters +${(cfg.isochroneHours || []).join('/')}h — wind ${res.wind.mph} mph (gusts ~${Math.round(gust)}) from ${res.wind.compass}; ${cfg.assets.length} assets checked from nearest fire edge.`);
        }
        catch (e) {
            setStatus(`Perimeter prediction failed: ${String(e).slice(0, 140)}`);
        }
        finally {
            setRunning(false);
        }
    });
    const runAt = (lat, lon) => __awaiter(void 0, void 0, void 0, function* () {
        setRunning(true);
        setResult(null);
        setStatus(`Sampling fuels/terrain and running cone from ${lat.toFixed(4)}, ${lon.toFixed(4)}…`);
        try {
            const cfg = coneCfg();
            cfg.assets = yield loadAssets(lat, lon, cfg.maxRadiusKm);
            const data = yield (0,_fire_cone__WEBPACK_IMPORTED_MODULE_8__.fetchFireData)(lat, lon, cfg);
            cacheRef.current = { lat, lon, data };
            // three validated bands from ONE fetch (Smokehouse/High Lonesome/Travin):
            //   LIKELY  = sustained wind, barriers respected (0.92x on uncontained moderate)
            //   MAX     = gusts + envelope (barriers crossed via spotting)
            //   EXTREME = MAX x1.5 (plume-driven megafire residual)
            const gust = data.wind.gustMph || data.wind.mph * 1.6;
            const likely = (0,_fire_cone__WEBPACK_IMPORTED_MODULE_8__.computeCone)(data, cfg);
            const dataG = Object.assign(Object.assign({}, data), { wind: Object.assign(Object.assign({}, data.wind), { mph: gust }) });
            const max = (0,_fire_cone__WEBPACK_IMPORTED_MODULE_8__.computeCone)(dataG, Object.assign(Object.assign({}, cfg), { ignoreBarriers: true }));
            const extreme = (0,_fire_cone__WEBPACK_IMPORTED_MODULE_8__.computeCone)(dataG, Object.assign(Object.assign({}, cfg), { ignoreBarriers: true, spreadAdjustment: 1.5 }));
            const res = likely;
            res.bands = { max, extreme, gustMph: gust };
            draw(jmv.view, res);
            if (layerRef.current)
                layerRef.current.visible = true;
            setHidden(false);
            setResult(res);
            setStatus(`Cone from ${res.wind.place || 'origin'} — wind ${res.wind.mph} mph (gusts ~${Math.round(gust)}) from ${res.wind.compass}; ${cfg.assets.length} assets in range.`);
        }
        catch (e) {
            setStatus(`Cone failed: ${String(e).slice(0, 140)}`);
        }
        finally {
            setRunning(false);
        }
    });
    const arm = (mode) => {
        if (!jmv || arming || running)
            return;
        setArming(true);
        setStatus(mode === 'perim' ? 'Click an ACTIVE FIRE perimeter on the map…' : 'Click the fire origin on the map…');
        clickRef.current = jmv.view.on('click', (evt) => {
            clickRef.current.remove();
            clickRef.current = null;
            setArming(false);
            const run = mode === 'perim' ? runPerimAt : runAt;
            run(evt.mapPoint.latitude, evt.mapPoint.longitude);
        });
    };
    const clearAll = () => {
        if (clickRef.current) {
            clickRef.current.remove();
            clickRef.current = null;
        }
        if (layerRef.current)
            layerRef.current.removeAll();
        cacheRef.current = null;
        setArming(false);
        setResult(null);
        setHidden(false);
        setStatus('Cleared. Click "Set fire origin" to run again.');
    };
    const assets = (result === null || result === void 0 ? void 0 : result.assets) || [];
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "jimu-widget", style: { padding: 10, overflow: 'auto', fontSize: 13 }, children: [((_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a.length) > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: (v) => setJmv(v) })), !((_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b.length) && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#b00' }, children: "Select a Map widget in this widget's settings." }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', gap: 6, marginBottom: 6, flexWrap: 'wrap' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-primary btn-sm", disabled: !jmv || arming || running, onClick: () => arm('point'), children: arming ? 'Click the map…' : running ? 'Running…' : '🔥 Point origin' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-primary btn-sm", disabled: !jmv || arming || running, onClick: () => arm('perim'), title: "Click an active WFIGS fire: predicts its perimeter at +6/12/24h from the current fire edge", children: "\u2B55 Active fire" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: running, onClick: clearAll, children: "Clear" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: !result, onClick: () => { if (layerRef.current) {
                            layerRef.current.visible = !layerRef.current.visible;
                            setHidden(!layerRef.current.visible);
                        } }, children: hidden ? '👁 Show' : '👁 Hide' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: !result, title: "Copy run provenance record (JSON)", onClick: () => { if (result === null || result === void 0 ? void 0 : result.runRecord)
                            navigator.clipboard.writeText(JSON.stringify(result.runRecord, null, 1)).then(() => setStatus('Run record copied.')); }, children: "\u2398 Record" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 8 }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Fuels: ", (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { value: moistKey, disabled: running, onChange: (e) => setMoistKey(e.target.value), children: Object.entries(MOISTURE_PRESETS).map(([k, v]) => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: k, children: v.label }, k)) })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { minHeight: 18, marginBottom: 8 }, children: [running && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "jimu-secondary-loading" }), " ", status] }), result && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 8, border: '1px solid #e2e2e2', borderRadius: 4, padding: '6px 8px', background: '#fafafa' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontWeight: 600 }, children: "Reach by hour:" }), [1, 3, 6, 12, 24].map((h) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { display: 'flex', alignItems: 'center', gap: 3 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { width: 14, height: 14, borderRadius: 3, background: ringColor(h), opacity: 0.85, display: 'inline-block', border: `2px solid ${ringColor(h)}` } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [h, "h"] })] }, h)))] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { display: 'flex', alignItems: 'center', gap: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: "34", height: "8", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "0", y1: "4", x2: "34", y2: "4", stroke: "#d7191c", strokeWidth: "3" }) }), "likely"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { display: 'flex', alignItems: 'center', gap: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: "34", height: "8", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "0", y1: "4", x2: "34", y2: "4", stroke: "#d7191c", strokeWidth: "2.5", strokeDasharray: "7,4" }) }), "max (gusts ~", Math.round(((_c = result.bands) === null || _c === void 0 ? void 0 : _c.gustMph) || 0), " mph, jumps barriers)"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { display: 'flex', alignItems: 'center', gap: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: "34", height: "8", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "0", y1: "4", x2: "34", y2: "4", stroke: "#8b0000", strokeWidth: "2.5", strokeDasharray: "2,4" }) }), "extreme (\u00D71.5)"] }), result.mode === 'perimeter' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { display: 'flex', alignItems: 'center', gap: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { width: 14, height: 14, background: 'rgba(90,20,10,0.5)', border: '2px solid #5a140a', display: 'inline-block' } }), "current fire"] }))] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#777', fontSize: 11, marginTop: 4 }, children: "Validated vs Travin / High Lonesome / Smokehouse Creek \u2014 surface spread, suppression not modeled." })] })), assets.length > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { style: { width: '100%', borderCollapse: 'collapse' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { textAlign: 'left', borderBottom: '1px solid #ccc' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "Likely" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "Max" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "Asset" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "km" })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: assets.map((a, i) => {
                            var _a, _b, _c;
                            const mx = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.bands) === null || _a === void 0 ? void 0 : _a.max) === null || _b === void 0 ? void 0 : _b.assets) === null || _c === void 0 ? void 0 : _c.find((m) => m.name === a.name);
                            return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { borderBottom: '1px solid #eee' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { padding: '2px 4px', whiteSpace: 'nowrap' }, children: a.eta_hr !== null
                                            ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { display: 'inline-block', width: 10, height: 10, borderRadius: 5, background: ringColor(a.eta_hr <= 1 ? 1 : a.eta_hr <= 3 ? 3 : a.eta_hr <= 6 ? 6 : a.eta_hr <= 12 ? 12 : 24), marginRight: 4 } }), a.eta_hr, " hr"] })
                                            : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: '#2a7' }, title: `barriers/slow fuel shield this asset in the window (${a.blocked})`, children: "shielded" }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { padding: '2px 4px', whiteSpace: 'nowrap', color: '#a33' }, children: mx && mx.eta_hr !== null ? `${mx.eta_hr} hr` : '—' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { padding: '2px 4px' }, children: a.name }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { padding: '2px 4px' }, children: a.dist_km })] }, i));
                        }) })] })), result && assets.length === 0 && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { color: '#777' }, children: ["No configured assets within ", (_d = props.config.maxRadiusKm) !== null && _d !== void 0 ? _d : 30, " km."] })] }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maXJlLWNvbmUvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGNBQWM7QUFDZDs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUlvQjtBQUVoQixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUM7QUFFcEMsTUFBTSxRQUFRLEdBQUc7SUFDZixJQUFJLEVBQUUsdUdBQXVHO0lBQzdHLFFBQVEsRUFBRSxtR0FBbUc7SUFDN0csTUFBTSxFQUFFLGtHQUFrRztDQUMzRyxDQUFDO0FBQ0YsTUFBTSxNQUFNLEdBQUcsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUUsQ0FBQztBQUUxRSxNQUFNLG1CQUFtQixHQUFHO0lBQ2pDLFFBQVEsRUFBRSxFQUFFLEVBQWMsd0JBQXdCO0lBQ2xELEtBQUssRUFBRSxHQUFHLEVBQWdCLGdDQUFnQztJQUMxRCxXQUFXLEVBQUUsRUFBRSxFQUFXLDZEQUE2RDtJQUN2RixRQUFRLEVBQUUsRUFBRTtJQUNaLGNBQWMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDakMsNkVBQTZFO0lBQzdFLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQzdDLFVBQVUsRUFBRSxJQUFJLEVBQVUsMENBQTBDO0lBQ3BFLFlBQVksRUFBRSxJQUFJLEVBQVEsa0RBQWtEO0lBQzVFLE1BQU0sRUFBRSxFQUFFLEVBQWdCLG9EQUFvRDtJQUM5RSx5RUFBeUU7SUFDekUsNkVBQTZFO0lBQzdFLDZFQUE2RTtJQUM3RSxZQUFZLEVBQUUsS0FBSztJQUNuQiwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLGdCQUFnQixFQUFFLEdBQUcsRUFBSyx3REFBd0Q7SUFDbEYsT0FBTyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBRUYsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDO0FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQzFCLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQztBQUU3QixTQUFTLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLO0lBQzlDLE1BQU0sRUFBRSxHQUFHLFVBQVUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDN0MsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdGLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLE9BQU8sQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUN4QyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3ZDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM3QyxNQUFNLENBQUMsR0FBRyxhQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBSSxDQUFDLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFJLENBQUMsRUFBQztJQUN0RixPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDeEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2pFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUks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QUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDaEUsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUVoRSxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRCxPQUFPLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVU7U0FDeEQsQ0FBQyxDQUFD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QWdCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUM3QixDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTdFLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFN0QsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUV2RCxzRUFBc0U7QUFDL0QsU0FBUyxlQUFlLENBQUMsTUFBTTtJQUNwQyxNQUFNLENBQUMsR0FBRyxxREFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLElBQUksQ0FBQyxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDcEIsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvQyxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUNyQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUMxQixNQUFNLE9BQU8sR0FBRyxNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUM7SUFDcEQsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxPQUFPO1FBQ0wsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUMzRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekQsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUM7UUFDdEMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUM7UUFDaEQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDL0IsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVB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LE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLENBQUM7SUFDRixFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRyxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUM7QUFFRCxTQUFTLDJCQUEyQixDQUFDLEVBQUU7SUFDckMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3BCLElBQUksU0FBUyxHQUFHLFdBQVcsSUFBSSxTQUFTLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFDdkQsTUFBTSxTQUFTLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN6QyxNQUFNLEdBQUcsR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ2xDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0QsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RFLE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUVELDBFQUEwRTtBQUNuRSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRztJQUNwQyxNQUFNLEVBQUUsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsSUFBSSxDQUFDLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQztJQUNyQixPQUFPLDJCQUEyQixDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUYsQ0FBQztBQUVELGtGQUFrRjtBQUVsRixNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDMUIsQ0FBQztBQUVGOzs7OztHQUtHO0FBQ0ksU0FBUyxjQUFjLENBQUMsRUFBRSxFQUFFLG9CQUFvQixHQUFHLEdBQUc7SUFDM0QsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUV4RCxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV6RSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNkLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0QsTUFBTSxNQUFNLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUU1RSxxQkFBcUI7SUFDckIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxRSxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0IsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksRUFBRSxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxNQUFNLEVBQUUsR0FBRztRQUNULEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzlFLENBQUM7SUFDRixNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLE1BQU0sQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckMsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUM3QixNQUFNLFFBQVEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sS0FBSyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFFLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxlQUFlO0lBRXpDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNoRSxDQUFDLEdBQUcsR0FBRyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7SUFDdkMsTUFBTSxVQUFVLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUU1QixNQUFNLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxNQUFNLFVBQVUsR0FBRztRQUNqQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN0RCxDQUFDO0lBQ0YsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO0lBQ3RGLE1BQU0sRUFBRSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7SUFFOUQsNERBQTREO0lBQzVELE1BQU0sQ0FBQyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQyxNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9ELE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFD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RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUMvRixDQUFDO0FBRU0sTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUVwRTs7OztHQUlHO0FBQ0ksU0FBUyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQzFELFlBQVksR0FBRyxJQUFJLEVBQUUsT0FBTyxHQUFHLFFBQVE7SUFDNUUsTUFBTSxRQUFRLEdBQUcsQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQy9DLE1BQU0sT0FBTyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNyQyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0UsTUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyRCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxD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QU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtB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QUFVLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsYUFDcEUsMEVBQU0sS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLGFBQWEsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBSSxFQUNsSyxzRkFBTyxDQUFDLFNBQVMsS0FGUixDQUFDLENBR0wsQ0FDUixDQUFDLElBQ0UsRUFDTiwwRUFBSyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGFBQzlFLDJFQUFNLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLGFBQzVELHlFQUFLLEtBQUssRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEdBQUcsWUFBQywwRUFBTSxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLEdBQUcsR0FBRyxHQUFNLGNBRWxHLEVBQ1AsMkVBQU0sS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsYUFDNUQseUVBQUssS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsR0FBRyxZQUFDLDBFQUFNLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxH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RUQsaUVBQWUsTUFBTTtBQUViLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ZpcmUtY29uZS9zcmMvZmlyZS1jb25lLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maXJlLWNvbmUvc3JjL2ZpcmUtZW5naW5lLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maXJlLWNvbmUvc3JjL2Z1ZWwtbW9kZWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9HcmFwaGljXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvaW50XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvbHlnb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ZpcmUtY29uZS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1ub2NoZWNrXG4vKipcbiAqIGZpcmUtY29uZS5qcyDigJQgRmlyZSB0aHJlYXQgY29uZTogcmF5LW1hcmNoZWQgaXNvY2hyb25lcyArIGFzc2V0IEVUQXNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIFNhbWUgYXJjaGl0ZWN0dXJlIGFzIHRoZSBXUkkgc3BpbGwtdHJhamVjdG9yeSBlbmdpbmU6XG4gKiAgIGZldGNoRmlyZURhdGEobGF0LCBsb24sIG9wdHMpICDigJQgQUxMIG5ldHdvcmsgSS9POiBMQU5ERklSRSBmdWVscy9zbG9wZS9hc3BlY3RcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlZCBhbG9uZyBldmVyeSByYXkgKGJhdGNoZWQgbXVsdGlwb2ludFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTYW1wbGVzKSwgTldTIHdpbmQgYXQgdGhlIG9yaWdpbi5cbiAqICAgY29tcHV0ZUNvbmUoZGF0YSwgb3B0cykgICAgICAgIOKAlCBwdXJlIG1hdGg6IFJvdGhlcm1lbCBkaXJlY3Rpb25hbCBzcHJlYWQgcGVyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXAgKGZpcmUtZW5naW5lLmpzLCBnb2xkZW4tdGVzdGVkIHZzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5cmV0ZWNobmljcyksIGN1bXVsYXRpdmUgdGltZSBwZXIgcmF5LFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc29jaHJvbmUgcmluZ3MsIGFzc2V0IEVUQXMsIHByb3ZlbmFuY2UuXG4gKlxuICogUExBTk5JTkctTEVWRUw6IHN1cmZhY2Ugc3ByZWFkIG9ubHkg4oCUIG5vIHNwb3R0aW5nLCBubyBjcm93bmluZywgbm8gc3VwcHJlc3Npb24uXG4gKiBOb25idXJuYWJsZSBmdWVscyAoTkIgOTEtOTkpIHN0b3AgcmF5cyAocm9hZHMvd2F0ZXIvdXJiYW4gYWN0IGFzIGJhcnJpZXJzLFxuICogd2hpY2ggcmVhbCBmaXJlcyBzb21ldGltZXMganVtcCkuIE91dHB1dHMgYXJlIGJhbmRzIGZvciBkZXBsb3ltZW50IGRlY2lzaW9ucy5cbiAqL1xuaW1wb3J0IHtcbiAgbW9pc3R1cml6ZSwgc3VyZmFjZUZpcmVNaW4sIHN1cmZhY2VGaXJlQmVoYXZpb3JNYXgsIHNwcmVhZFJhdGVJbkRpcmVjdGlvbixcbiAgd2luZEFkanVzdG1lbnRGYWN0b3IsIGlzQnVybmFibGUsIEVOR0lORV9WRVJTSU9OLFxufSBmcm9tIFwiLi9maXJlLWVuZ2luZVwiO1xuXG5leHBvcnQgY29uc3QgQ09ORV9WRVJTSU9OID0gXCIwLjEuMFwiO1xuXG5jb25zdCBMQU5ERklSRSA9IHtcbiAgZnVlbDogXCJodHRwczovL2xmcHMudXNncy5nb3YvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvTGFuZGZpcmVfTEYyMDI0L0xGMjAyNF9GQkZNNDBfQ09OVVMvSW1hZ2VTZXJ2ZXIvZ2V0U2FtcGxlc1wiLFxuICBzbG9wZURlZzogXCJodHRwczovL2xmcHMudXNncy5nb3YvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvTGFuZGZpcmVfVG9wby9MRjIwMjBfU2xwRF9DT05VUy9JbWFnZVNlcnZlci9nZXRTYW1wbGVzXCIsXG4gIGFzcGVjdDogXCJodHRwczovL2xmcHMudXNncy5nb3YvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvTGFuZGZpcmVfVG9wby9MRjIwMjBfQXNwX0NPTlVTL0ltYWdlU2VydmVyL2dldFNhbXBsZXNcIixcbn07XG5jb25zdCBOV1NfVUEgPSB7IFwiVXNlci1BZ2VudFwiOiBcIldSSS1GaXJlLUNvbmUvMC4xIChjb2R5QHdoaXRld2F0ZXJyZXNjdWUuY29tKVwiIH07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0NPTkVfQ09ORklHID0ge1xuICBiZWFyaW5nczogMjQsICAgICAgICAgICAgIC8vIHJheXMgZXZlcnkgMTUgZGVncmVlc1xuICBzdGVwTTogNTAwLCAgICAgICAgICAgICAgIC8vIHNhbXBsZSBzcGFjaW5nIGFsb25nIGVhY2ggcmF5XG4gIG1heFJhZGl1c0ttOiAzMCwgICAgICAgICAgLy8gc2FtcGxpbmcgZXh0ZW50IChzdXJmYWNlIGZpcmVzIHJhcmVseSBhdmVyYWdlID4gMS4yNSBrbS9oKVxuICBtYXhIb3VyczogMjQsXG4gIGlzb2Nocm9uZUhvdXJzOiBbMSwgMywgNiwgMTIsIDI0XSxcbiAgLy8gZml4ZWQgZHJ5LXNlYXNvbiBtb2lzdHVyZSBzY2VuYXJpbyAoZGVhZCA2LzcvOCUsIGxpdmUgaGVyYiA2MCUsIHdvb2R5IDkwJSlcbiAgbW9pc3R1cmU6IFswLjA2LCAwLjA3LCAwLjA4LCAwLjAsIDAuNjAsIDAuOTBdLFxuICBtaW5Sb3NNbWluOiAwLjA1LCAgICAgICAgIC8vIGJlbG93IH4zIG0vaCB0cmVhdCBhcyBzdGFsbGVkIChiYXJyaWVyKVxuICB3aW5kT3ZlcnJpZGU6IG51bGwsICAgICAgIC8vIHttcGgsIGZyb21EZWd9IOKAlCBkZXRlcm1pbmlzdGljIHRlc3RzIC8gd2hhdC1pZnNcbiAgYXNzZXRzOiBbXSwgICAgICAgICAgICAgICAvLyBbe25hbWUsIGxhdCwgbG9uLCAuLi59XSBlYWNoIGdldHMgYSBkZWRpY2F0ZWQgcmF5XG4gIC8vIFJvdGhlcm1lbCdzIGVmZmVjdGl2ZS13aW5kIGxpbWl0ICgwLjkgSV9SKSBkZW1vbnN0cmFibHkgdW5kZXItcHJlZGljdHNcbiAgLy8gZXh0cmVtZSB3aW5kLWRyaXZlbiBncmFzcyBydW5zIChTbW9rZWhvdXNlIENyZWVrIHZhbGlkYXRpb246IDQwIGFuZCA0OSBtcGhcbiAgLy8gcHJvZHVjZWQgaWRlbnRpY2FsIHNwcmVhZCB3aXRoIHRoZSBsaW1pdCBvbikuIE9mZiBieSBkZWZhdWx0IGZvciBwbGFubmluZy5cbiAgdXNlV2luZExpbWl0OiBmYWxzZSxcbiAgLy8gZW52ZWxvcGUgbW9kZTogYmFycmllcnMvc3RhbGxzIGFyZSBjcm9zc2VkIGF0IHRoZSBsYXN0IGdvb2Qgc3ByZWFkIHJhdGVcbiAgLy8gKFwiZmlyZSBmaW5kcyBhIHdheVwiIOKAlCBzcG90dGluZykuIFVzZWQgZm9yIHRoZSBvdXRlciBjcmVkaWJsZS1tYXggcmluZ3MuXG4gIGlnbm9yZUJhcnJpZXJzOiBmYWxzZSxcbiAgc3ByZWFkQWRqdXN0bWVudDogMS4wLCAgICAvLyBvcHRpb25hbCBjYWxpYnJhdGlvbiBtdWx0aXBsaWVyIChzdXJmYWNlRmlyZU1pbiBob29rKVxuICB2ZXJib3NlOiB0cnVlLFxufTtcblxuY29uc3QgUl9NID0gNjM3MTAwOC44O1xuY29uc3QgREVHID0gTWF0aC5QSSAvIDE4MDtcbmNvbnN0IE1QSF9UT19NX01JTiA9IDI2LjgyMjQ7XG5cbmZ1bmN0aW9uIGRlc3RpbmF0aW9uKGxhdCwgbG9uLCBiZWFyaW5nRGVnLCBkaXN0TSkge1xuICBjb25zdCBiciA9IGJlYXJpbmdEZWcgKiBERUcsIGQgPSBkaXN0TSAvIFJfTTtcbiAgY29uc3QgcDEgPSBsYXQgKiBERUcsIGwxID0gbG9uICogREVHO1xuICBjb25zdCBwMiA9IE1hdGguYXNpbihNYXRoLnNpbihwMSkgKiBNYXRoLmNvcyhkKSArIE1hdGguY29zKHAxKSAqIE1hdGguc2luKGQpICogTWF0aC5jb3MoYnIpKTtcbiAgY29uc3QgbDIgPSBsMSArIE1hdGguYXRhbjIoTWF0aC5zaW4oYnIpICogTWF0aC5zaW4oZCkgKiBNYXRoLmNvcyhwMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguY29zKGQpIC0gTWF0aC5zaW4ocDEpICogTWF0aC5zaW4ocDIpKTtcbiAgcmV0dXJuIFtwMiAvIERFRywgbDIgLyBERUddO1xufVxuXG5mdW5jdGlvbiBoYXZlcnNpbmVNKGxhdDEsIGxvbjEsIGxhdDIsIGxvbjIpIHtcbiAgY29uc3QgcDEgPSBsYXQxICogREVHLCBwMiA9IGxhdDIgKiBERUc7XG4gIGNvbnN0IGRwID0gcDIgLSBwMSwgZGwgPSAobG9uMiAtIGxvbjEpICogREVHO1xuICBjb25zdCBhID0gTWF0aC5zaW4oZHAgLyAyKSAqKiAyICsgTWF0aC5jb3MocDEpICogTWF0aC5jb3MocDIpICogTWF0aC5zaW4oZGwgLyAyKSAqKiAyO1xuICByZXR1cm4gMiAqIFJfTSAqIE1hdGguYXNpbihNYXRoLnNxcnQoYSkpO1xufVxuXG5mdW5jdGlvbiBiZWFyaW5nRGVnKGxhdDEsIGxvbjEsIGxhdDIsIGxvbjIpIHtcbiAgY29uc3QgcDEgPSBsYXQxICogREVHLCBwMiA9IGxhdDIgKiBERUcsIGRsID0gKGxvbjIgLSBsb24xKSAqIERFRztcbiAgY29uc3QgeSA9IE1hdGguc2luKGRsKSAqIE1hdGguY29zKHAyKTtcbiAgY29uc3QgeCA9IE1hdGguY29zKHAxKSAqIE1hdGguc2luKHAyKSAtIE1hdGguc2luKHAxKSAqIE1hdGguY29zKHAyKSAqIE1hdGguY29zKGRsKTtcbiAgcmV0dXJuIChNYXRoLmF0YW4yKHksIHgpIC8gREVHICsgMzYwKSAlIDM2MDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0SnNvbih1cmwsIHBhcmFtcywgdHJpZXMgPSAzKSB7XG4gIGxldCBsYXN0O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWVzOyBpKyspIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKS50b1N0cmluZygpO1xuICAgICAgY29uc3QgciA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCBib2R5LFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsIC4uLk5XU19VQSB9LFxuICAgICAgfSk7XG4gICAgICBpZiAoIXIub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCAke3Iuc3RhdHVzfWApO1xuICAgICAgcmV0dXJuIGF3YWl0IHIuanNvbigpO1xuICAgIH0gY2F0Y2ggKGUpIHsgbGFzdCA9IGU7IGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQocmVzLCAxMjAwICogKGkgKyAxKSkpOyB9XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGAke3VybH06ICR7bGFzdH1gKTtcbn1cblxuLyoqIEJhdGNoZWQgbXVsdGlwb2ludCBnZXRTYW1wbGVzOyByZXR1cm5zIGZsb2F0IHZhbHVlcyBhbGlnbmVkIHRvIHBvaW50cyBvcmRlci4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNhbXBsZVNlcnZpY2UodXJsLCBwb2ludHMpIHtcbiAgY29uc3QgQ0hVTksgPSAyMDA7XG4gIGNvbnN0IG91dCA9IG5ldyBBcnJheShwb2ludHMubGVuZ3RoKS5maWxsKG51bGwpO1xuICBmb3IgKGxldCBpMCA9IDA7IGkwIDwgcG9pbnRzLmxlbmd0aDsgaTAgKz0gQ0hVTkspIHtcbiAgICBjb25zdCBjaHVuayA9IHBvaW50cy5zbGljZShpMCwgaTAgKyBDSFVOSyk7XG4gICAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24odXJsLCB7XG4gICAgICBnZW9tZXRyeTogSlNPTi5zdHJpbmdpZnkoeyBwb2ludHM6IGNodW5rLm1hcCgocCkgPT4gW3BbMV0sIHBbMF1dKSwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gfSksXG4gICAgICBnZW9tZXRyeVR5cGU6IFwiZXNyaUdlb21ldHJ5TXVsdGlwb2ludFwiLFxuICAgICAgcmV0dXJuRmlyc3RWYWx1ZU9ubHk6IFwidHJ1ZVwiLFxuICAgICAgZjogXCJqc29uXCIsXG4gICAgfSk7XG4gICAgZm9yIChjb25zdCBzIG9mIGouc2FtcGxlcyB8fCBbXSkge1xuICAgICAgY29uc3QgdiA9IHBhcnNlRmxvYXQocy52YWx1ZSk7XG4gICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHYpICYmIHMubG9jYXRpb25JZCAhPT0gdW5kZWZpbmVkKSBvdXRbaTAgKyBzLmxvY2F0aW9uSWRdID0gdjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gd2luZEF0T3JpZ2luKGxhdCwgbG9uKSB7XG4gIGNvbnN0IHB0ID0gYXdhaXQgKGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyLmdvdi9wb2ludHMvJHtsYXQudG9GaXhlZCg0KX0sJHtsb24udG9GaXhlZCg0KX1gLCB7IGhlYWRlcnM6IE5XU19VQSB9KSkuanNvbigpO1xuICBjb25zdCByZWwgPSBwdC5wcm9wZXJ0aWVzPy5yZWxhdGl2ZUxvY2F0aW9uPy5wcm9wZXJ0aWVzIHx8IHt9O1xuICBjb25zdCBob3VybHkgPSBhd2FpdCAoYXdhaXQgZmV0Y2gocHQucHJvcGVydGllcy5mb3JlY2FzdEhvdXJseSwgeyBoZWFkZXJzOiBOV1NfVUEgfSkpLmpzb24oKTtcbiAgY29uc3QgcGVyaW9kcyA9IGhvdXJseS5wcm9wZXJ0aWVzLnBlcmlvZHMuc2xpY2UoMCwgMjQpO1xuICBjb25zdCBwMCA9IHBlcmlvZHNbMF07XG4gIGNvbnN0IG1waCA9IHBhcnNlRmxvYXQoU3RyaW5nKHAwLndpbmRTcGVlZCB8fCBcIjEwIG1waFwiKSk7XG4gIGNvbnN0IGNvbXAgPSBwMC53aW5kRGlyZWN0aW9uIHx8IFwiTlwiO1xuICBjb25zdCBkZWcgPSB7IE46IDAsIE5ORTogMjIuNSwgTkU6IDQ1LCBFTkU6IDY3LjUsIEU6IDkwLCBFU0U6IDExMi41LCBTRTogMTM1LCBTU0U6IDE1Ny41LFxuICAgICAgICAgICAgICAgIFM6IDE4MCwgU1NXOiAyMDIuNSwgU1c6IDIyNSwgV1NXOiAyNDcuNSwgVzogMjcwLCBXTlc6IDI5Mi41LCBOVzogMzE1LCBOTlc6IDMzNy41IH1bY29tcF0gPz8gMDtcbiAgLy8gZ3VzdHM6IG1heCB3aW5kR3VzdCBvdmVyIG5leHQgMjRoIHdoZW4gTldTIHByb3ZpZGVzIGl0OyBlbHNlIDEuNnggc3VzdGFpbmVkXG4gIGxldCBndXN0TXBoID0gMDtcbiAgZm9yIChjb25zdCBwIG9mIHBlcmlvZHMpIHtcbiAgICBjb25zdCBnID0gcGFyc2VGbG9hdChTdHJpbmcocC53aW5kR3VzdCA/PyBcIlwiKSk7XG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShnKSAmJiBnID4gZ3VzdE1waCkgZ3VzdE1waCA9IGc7XG4gIH1cbiAgaWYgKCFndXN0TXBoKSBndXN0TXBoID0gbXBoICogMS42O1xuICByZXR1cm4geyBtcGgsIGd1c3RNcGgsIGZyb21EZWc6IGRlZywgY29tcGFzczogY29tcCwgcGxhY2U6IHJlbC5jaXR5ID8gYCR7cmVsLmNpdHl9LCAke3JlbC5zdGF0ZX1gIDogbnVsbCB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZldGNoXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEZpcmVEYXRhKGxhdCwgbG9uLCBjb25maWcgPSB7fSkge1xuICBjb25zdCBjZmcgPSB7IC4uLkRFRkFVTFRfQ09ORV9DT05GSUcsIC4uLmNvbmZpZyB9O1xuICBjb25zdCBsb2cgPSBjZmcudmVyYm9zZSA/ICguLi5hKSA9PiBjb25zb2xlLmxvZyguLi5hKSA6ICgpID0+IHt9O1xuXG4gIC8vIHJheSBzZXQ6IGV2ZW5seSBzcGFjZWQgYmVhcmluZ3MgKyBvbmUgZGVkaWNhdGVkIHJheSBwZXIgYXNzZXQgaW4gcmFuZ2VcbiAgY29uc3QgcmF5cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNmZy5iZWFyaW5nczsgaSsrKSByYXlzLnB1c2goeyBiZWFyaW5nOiAoMzYwIC8gY2ZnLmJlYXJpbmdzKSAqIGksIGtpbmQ6IFwicmluZ1wiIH0pO1xuICBjb25zdCBhc3NldHNJblJhbmdlID0gW107XG4gIGZvciAoY29uc3QgYSBvZiBjZmcuYXNzZXRzIHx8IFtdKSB7XG4gICAgY29uc3QgZCA9IGhhdmVyc2luZU0obGF0LCBsb24sIGEubGF0LCBhLmxvbik7XG4gICAgaWYgKGQgPD0gY2ZnLm1heFJhZGl1c0ttICogMTAwMCkge1xuICAgICAgYXNzZXRzSW5SYW5nZS5wdXNoKHsgLi4uYSwgZGlzdE06IGQsIGJlYXJpbmc6IGJlYXJpbmdEZWcobGF0LCBsb24sIGEubGF0LCBhLmxvbikgfSk7XG4gICAgICByYXlzLnB1c2goeyBiZWFyaW5nOiBiZWFyaW5nRGVnKGxhdCwgbG9uLCBhLmxhdCwgYS5sb24pLCBraW5kOiBcImFzc2V0XCIsIGFzc2V0OiBhLm5hbWUgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgblN0ZXBzID0gTWF0aC5jZWlsKChjZmcubWF4UmFkaXVzS20gKiAxMDAwKSAvIGNmZy5zdGVwTSk7XG4gIGNvbnN0IHBvaW50cyA9IFtdO1xuICBmb3IgKGNvbnN0IHJheSBvZiByYXlzKSB7XG4gICAgcmF5LmkwID0gcG9pbnRzLmxlbmd0aDtcbiAgICBjb25zdCBvTGF0ID0gcmF5Lm9sYXQgPz8gbGF0LCBvTG9uID0gcmF5Lm9sb24gPz8gbG9uOyAvLyBwZXJpbWV0ZXIgc2VlZHMgY2Fycnkgb3duIG9yaWdpbnNcbiAgICBmb3IgKGxldCBzID0gMTsgcyA8PSBuU3RlcHM7IHMrKykge1xuICAgICAgcG9pbnRzLnB1c2goZGVzdGluYXRpb24ob0xhdCwgb0xvbiwgcmF5LmJlYXJpbmcsIHMgKiBjZmcuc3RlcE0pKTtcbiAgICB9XG4gICAgcmF5Lm4gPSBuU3RlcHM7XG4gIH1cbiAgbG9nKGByYXlzOiAke3JheXMubGVuZ3RofSAoJHthc3NldHNJblJhbmdlLmxlbmd0aH0gYXNzZXQgcmF5cykgeCAke25TdGVwc30gc3RlcHMgPSAke3BvaW50cy5sZW5ndGh9IHNhbXBsZSBwb2ludHNgKTtcblxuICBjb25zdCBbZnVlbCwgc2xvcGVEZWcsIGFzcGVjdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgc2FtcGxlU2VydmljZShMQU5ERklSRS5mdWVsLCBwb2ludHMpLFxuICAgIHNhbXBsZVNlcnZpY2UoTEFOREZJUkUuc2xvcGVEZWcsIHBvaW50cyksXG4gICAgc2FtcGxlU2VydmljZShMQU5ERklSRS5hc3BlY3QsIHBvaW50cyksXG4gIF0pO1xuICBjb25zdCBzYW1wbGVkID0gZnVlbC5maWx0ZXIoKHYpID0+IHYgIT09IG51bGwpLmxlbmd0aDtcbiAgbG9nKGBMQU5ERklSRSBzYW1wbGVkOiBmdWVscyAke3NhbXBsZWR9LyR7cG9pbnRzLmxlbmd0aH1gKTtcblxuICBjb25zdCB3aW5kID0gY2ZnLndpbmRPdmVycmlkZVxuICAgID8geyBtcGg6IGNmZy53aW5kT3ZlcnJpZGUubXBoLCBmcm9tRGVnOiBjZmcud2luZE92ZXJyaWRlLmZyb21EZWcsIGNvbXBhc3M6IFwib3ZlcnJpZGVcIiwgcGxhY2U6IG51bGwgfVxuICAgIDogYXdhaXQgd2luZEF0T3JpZ2luKGxhdCwgbG9uKTtcbiAgbG9nKGB3aW5kOiAke3dpbmQubXBofSBtcGggZnJvbSAke3dpbmQuY29tcGFzc30gKCR7d2luZC5mcm9tRGVnfSBkZWcpJHt3aW5kLnBsYWNlID8gXCIgbmVhciBcIiArIHdpbmQucGxhY2UgOiBcIlwifWApO1xuXG4gIHJldHVybiB7XG4gICAgb3JpZ2luOiB7IGxhdCwgbG9uIH0sIHJheXMsIG5TdGVwcywgc3RlcE06IGNmZy5zdGVwTSxcbiAgICBmdWVsLCBzbG9wZURlZywgYXNwZWN0LCB3aW5kLCBhc3NldHNJblJhbmdlLFxuICAgIGZldGNoZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbXB1dGVcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVDb25lKGRhdGEsIGNvbmZpZyA9IHt9KSB7XG4gIGNvbnN0IGNmZyA9IHsgLi4uREVGQVVMVF9DT05FX0NPTkZJRywgLi4uY29uZmlnIH07XG4gIGNvbnN0IHsgb3JpZ2luLCByYXlzLCBuU3RlcHMsIHN0ZXBNLCBmdWVsLCBzbG9wZURlZywgYXNwZWN0LCB3aW5kIH0gPSBkYXRhO1xuXG4gIGNvbnN0IHdpbmQyMG1NaW4gPSB3aW5kLm1waCAqIE1QSF9UT19NX01JTjtcbiAgY29uc3Qgc2ZtaW5DYWNoZSA9IG5ldyBNYXAoKTsgLy8gZnVlbCMgLT4ge3NmbWluLCB3YWZ9IG9yIG51bGwgKG5vbmJ1cm5hYmxlL3Vua25vd24pXG4gIGNvbnN0IGJlaGF2aW9yRm9yID0gKGZtKSA9PiB7XG4gICAgaWYgKCFzZm1pbkNhY2hlLmhhcyhmbSkpIHtcbiAgICAgIGlmICghZm0gfHwgIWlzQnVybmFibGUoZm0pKSBzZm1pbkNhY2hlLnNldChmbSwgbnVsbCk7XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgbSA9IG1vaXN0dXJpemUoZm0sIGNmZy5tb2lzdHVyZSk7XG4gICAgICAgIHNmbWluQ2FjaGUuc2V0KGZtLCBtID8geyBzZm1pbjogc3VyZmFjZUZpcmVNaW4obSwgY2ZnLnNwcmVhZEFkanVzdG1lbnQpLCB3YWY6IHdpbmRBZGp1c3RtZW50RmFjdG9yKG0uZGVsdGEpIH0gOiBudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNmbWluQ2FjaGUuZ2V0KGZtKTtcbiAgfTtcblxuICBsZXQgYmxvY2tlZFN0ZXBzID0gMCwgdW5rbm93blN0ZXBzID0gMDtcbiAgY29uc3QgcmF5UmVzdWx0cyA9IHJheXMubWFwKChyYXkpID0+IHtcbiAgICBjb25zdCBjdW0gPSBuZXcgQXJyYXkocmF5Lm4pLmZpbGwobnVsbCk7IC8vIGhvdXJzIHRvIEVORCBvZiBzdGVwIHNcbiAgICBsZXQgdCA9IDAsIHN0b3BwZWQgPSBudWxsLCBsYXN0Um9zID0gbnVsbDtcbiAgICBmb3IgKGxldCBzID0gMDsgcyA8IHJheS5uOyBzKyspIHtcbiAgICAgIGNvbnN0IGlkeCA9IHJheS5pMCArIHM7XG4gICAgICBjb25zdCBmbSA9IGZ1ZWxbaWR4XTtcbiAgICAgIGxldCByb3MgPSBudWxsO1xuICAgICAgaWYgKGZtID09PSBudWxsKSB7IHVua25vd25TdGVwcysrOyBpZiAoIWNmZy5pZ25vcmVCYXJyaWVycykgeyBzdG9wcGVkID0gXCJuby1kYXRhXCI7IGJyZWFrOyB9IH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBiZWggPSBiZWhhdmlvckZvcihNYXRoLnJvdW5kKGZtKSk7XG4gICAgICAgIGlmICghYmVoKSB7IGJsb2NrZWRTdGVwcysrOyBpZiAoIWNmZy5pZ25vcmVCYXJyaWVycykgeyBzdG9wcGVkID0gXCJub25idXJuYWJsZVwiOyBicmVhazsgfSB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNsb3BlVGFuID0gTWF0aC50YW4oKHNsb3BlRGVnW2lkeF0gPz8gMCkgKiBERUcpO1xuICAgICAgICAgIGNvbnN0IGFzcCA9IGFzcGVjdFtpZHhdID8/IDA7XG4gICAgICAgICAgY29uc3QgbWlkZmxhbWUgPSB3aW5kMjBtTWluICogYmVoLndhZjtcbiAgICAgICAgICBjb25zdCBmYm1heCA9IHN1cmZhY2VGaXJlQmVoYXZpb3JNYXgoYmVoLnNmbWluLCBtaWRmbGFtZSwgd2luZC5mcm9tRGVnLCBzbG9wZVRhbiwgYXNwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZmcudXNlV2luZExpbWl0LCBcImJlaGF2ZVwiKTtcbiAgICAgICAgICByb3MgPSBzcHJlYWRSYXRlSW5EaXJlY3Rpb24oZmJtYXgsIHJheS5iZWFyaW5nLCBzbG9wZVRhbiwgYXNwKTsgLy8gbS9taW5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJvcyAhPT0gbnVsbCAmJiByb3MgPj0gY2ZnLm1pblJvc01taW4pIGxhc3RSb3MgPSByb3M7XG4gICAgICBlbHNlIGlmICghY2ZnLmlnbm9yZUJhcnJpZXJzICYmIHJvcyAhPT0gbnVsbCkgeyBzdG9wcGVkID0gXCJzdGFsbGVkXCI7IGJyZWFrOyB9XG4gICAgICBjb25zdCB1c2VSb3MgPSAocm9zICE9PSBudWxsICYmIHJvcyA+PSBjZmcubWluUm9zTW1pbikgPyByb3MgOiAoY2ZnLmlnbm9yZUJhcnJpZXJzID8gbGFzdFJvcyA6IG51bGwpO1xuICAgICAgaWYgKHVzZVJvcyA9PT0gbnVsbCkgeyBzdG9wcGVkID0gc3RvcHBlZCB8fCBcInN0YWxsZWRcIjsgYnJlYWs7IH0gLy8gZW52ZWxvcGUgd2l0aCBubyBwcmlvciBnb29kIHN0ZXBcbiAgICAgIHQgKz0gc3RlcE0gLyB1c2VSb3MgLyA2MDsgLy8gaG91cnNcbiAgICAgIGlmICh0ID4gY2ZnLm1heEhvdXJzKSB7IHN0b3BwZWQgPSBcInRpbWVcIjsgYnJlYWs7IH1cbiAgICAgIGN1bVtzXSA9IHQ7XG4gICAgfVxuICAgIHJldHVybiB7IC4uLnJheSwgY3VtSG91cnM6IGN1bSwgc3RvcHBlZCB9O1xuICB9KTtcblxuICAvLyBpc29jaHJvbmUgcmluZ3M6IHBvc2l0aW9uIGFsb25nIGVhY2ggcmluZy1yYXkgd2hlcmUgY3VtIGNyb3NzZXMgaFxuICBjb25zdCBwb3NBdCA9IChyYXksIGgpID0+IHtcbiAgICBsZXQgcHJldlQgPSAwLCBwcmV2RCA9IDA7XG4gICAgZm9yIChsZXQgcyA9IDA7IHMgPCByYXkubjsgcysrKSB7XG4gICAgICBjb25zdCB0RW5kID0gcmF5LmN1bUhvdXJzW3NdO1xuICAgICAgaWYgKHRFbmQgPT09IG51bGwpIGJyZWFrO1xuICAgICAgY29uc3QgZEVuZCA9IChzICsgMSkgKiBzdGVwTTtcbiAgICAgIGlmICh0RW5kID49IGgpIHtcbiAgICAgICAgY29uc3QgZiA9IChoIC0gcHJldlQpIC8gKHRFbmQgLSBwcmV2VCk7XG4gICAgICAgIHJldHVybiBwcmV2RCArIGYgKiAoZEVuZCAtIHByZXZEKTtcbiAgICAgIH1cbiAgICAgIHByZXZUID0gdEVuZDsgcHJldkQgPSBkRW5kO1xuICAgIH1cbiAgICByZXR1cm4gcHJldkQ7IC8vIGJhcnJpZXIvc3RhbGwvdGltZSBjYXA6IGlzb2Nocm9uZSBjb2xsYXBzZXMgdG8gZmFydGhlc3QgcmVhY2hlZFxuICB9O1xuICBjb25zdCBpc29jaHJvbmVzID0gY2ZnLmlzb2Nocm9uZUhvdXJzLmZpbHRlcigoaCkgPT4gaCA8PSBjZmcubWF4SG91cnMpLm1hcCgoaCkgPT4gKHtcbiAgICBob3VyOiBoLFxuICAgIHJpbmc6IHJheVJlc3VsdHMuZmlsdGVyKChyKSA9PiByLmtpbmQgPT09IFwicmluZ1wiKS5tYXAoKHIpID0+IHtcbiAgICAgIGNvbnN0IGQgPSBwb3NBdChyLCBoKTtcbiAgICAgIGNvbnN0IFtsYSwgbG9dID0gZGVzdGluYXRpb24oci5vbGF0ID8/IG9yaWdpbi5sYXQsIHIub2xvbiA/PyBvcmlnaW4ubG9uLCByLmJlYXJpbmcsIGQpO1xuICAgICAgcmV0dXJuIHsgYmVhcmluZzogci5iZWFyaW5nLCBkaXN0X2ttOiBkIC8gMTAwMCwgbGF0OiBsYSwgbG9uOiBsbyB9O1xuICAgIH0pLFxuICB9KSk7XG5cbiAgLy8gYXNzZXQgRVRBcyBhbG9uZyB0aGVpciBkZWRpY2F0ZWQgcmF5c1xuICBjb25zdCBhc3NldHMgPSAoZGF0YS5hc3NldHNJblJhbmdlIHx8IFtdKS5tYXAoKGEpID0+IHtcbiAgICBjb25zdCByYXkgPSByYXlSZXN1bHRzLmZpbmQoKHIpID0+IHIua2luZCA9PT0gXCJhc3NldFwiICYmIHIuYXNzZXQgPT09IGEubmFtZSk7XG4gICAgbGV0IGV0YSA9IG51bGw7XG4gICAgaWYgKHJheSkge1xuICAgICAgbGV0IHByZXZUID0gMCwgcHJldkQgPSAwLCBmb3VuZCA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgcyA9IDA7IHMgPCByYXkubiAmJiAhZm91bmQ7IHMrKykge1xuICAgICAgICBjb25zdCB0RW5kID0gcmF5LmN1bUhvdXJzW3NdO1xuICAgICAgICBpZiAodEVuZCA9PT0gbnVsbCkgYnJlYWs7XG4gICAgICAgIGNvbnN0IGRFbmQgPSAocyArIDEpICogc3RlcE07XG4gICAgICAgIGlmIChkRW5kID49IGEuZGlzdE0pIHtcbiAgICAgICAgICBldGEgPSBwcmV2VCArICh0RW5kIC0gcHJldlQpICogKChhLmRpc3RNIC0gcHJldkQpIC8gKGRFbmQgLSBwcmV2RCkpO1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwcmV2VCA9IHRFbmQ7IHByZXZEID0gZEVuZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgLi4uYSwgZGlzdF9rbTogTWF0aC5yb3VuZChhLmRpc3RNIC8gMTAwKSAvIDEwLFxuICAgICAgICAgICAgIGV0YV9ocjogZXRhICE9PSBudWxsID8gTWF0aC5yb3VuZChldGEgKiAxMCkgLyAxMCA6IG51bGwsXG4gICAgICAgICAgICAgYmxvY2tlZDogZXRhID09PSBudWxsID8gKHJheT8uc3RvcHBlZCB8fCBcIm91dC1vZi13aW5kb3dcIikgOiBudWxsIH07XG4gIH0pLnNvcnQoKHgsIHkpID0+ICh4LmV0YV9ociA/PyAxZTkpIC0gKHkuZXRhX2hyID8/IDFlOSkpO1xuXG4gIGNvbnN0IHJ1blJlY29yZCA9IHtcbiAgICBjb25lX3ZlcnNpb246IENPTkVfVkVSU0lPTiwgZW5naW5lX3ZlcnNpb246IEVOR0lORV9WRVJTSU9OLFxuICAgIGdlbmVyYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLCBkYXRhX2ZldGNoZWRfYXQ6IGRhdGEuZmV0Y2hlZEF0LFxuICAgIG9yaWdpbiwgd2luZDogeyBtcGg6IHdpbmQubXBoLCBmcm9tX2RlZzogd2luZC5mcm9tRGVnLCBzb3VyY2U6IHdpbmQuY29tcGFzcyA9PT0gXCJvdmVycmlkZVwiID8gXCJvdmVycmlkZVwiIDogXCJOV1MgaG91cmx5IGZvcmVjYXN0XCIsIG5lYXI6IHdpbmQucGxhY2UgfSxcbiAgICBtb2lzdHVyZV9zY2VuYXJpbzogY2ZnLm1vaXN0dXJlLFxuICAgIGZ1ZWxzX3NvdXJjZTogXCJMQU5ERklSRSBMRjIwMjQgRkJGTTQwIENPTlVTICgzMCBtKVwiLCB0b3BvX3NvdXJjZTogXCJMQU5ERklSRSBMRjIwMjAgU2xwRC9Bc3BcIixcbiAgICByYXlzOiByYXlzLmxlbmd0aCwgc3RlcF9tOiBzdGVwTSwgbWF4X3JhZGl1c19rbTogY2ZnLm1heFJhZGl1c0ttLCBtYXhfaG91cnM6IGNmZy5tYXhIb3VycyxcbiAgICBub25idXJuYWJsZV9yYXlfc3RvcHM6IHJheVJlc3VsdHMuZmlsdGVyKChyKSA9PiByLnN0b3BwZWQgPT09IFwibm9uYnVybmFibGVcIikubGVuZ3RoLFxuICAgIHN0YWxsZWRfcmF5X3N0b3BzOiByYXlSZXN1bHRzLmZpbHRlcigocikgPT4gci5zdG9wcGVkID09PSBcInN0YWxsZWRcIikubGVuZ3RoLFxuICAgIG5vX2RhdGFfc3RvcHM6IHJheVJlc3VsdHMuZmlsdGVyKChyKSA9PiByLnN0b3BwZWQgPT09IFwibm8tZGF0YVwiKS5sZW5ndGgsXG4gICAgY2F2ZWF0czogXCJTdXJmYWNlIHNwcmVhZCBvbmx5IChSb3RoZXJtZWwvQWxiaW5pIHZpYSBweXJldGVjaG5pY3MtdmVyaWZpZWQgZW5naW5lKS4gTm8gc3BvdHRpbmcsIGNyb3duaW5nLCBvciBzdXBwcmVzc2lvbi4gUGxhbm5pbmcgYmFuZHMsIG5vdCBmaXJlIGJlaGF2aW9yIGZvcmVjYXN0aW5nLlwiLFxuICB9O1xuXG4gIHJldHVybiB7IG9yaWdpbiwgd2luZCwgaXNvY2hyb25lcywgYXNzZXRzLCByYXlzOiByYXlSZXN1bHRzLCBydW5SZWNvcmQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bkNvbmUobGF0LCBsb24sIGNvbmZpZyA9IHt9KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEZpcmVEYXRhKGxhdCwgbG9uLCBjb25maWcpO1xuICByZXR1cm4gY29tcHV0ZUNvbmUoZGF0YSwgY29uZmlnKTtcbn1cblxuLyoqXG4gKiBBQ1RJVkUtZmlyZSBtb2RlOiBzZWVkIHRoZSBtYXJjaCBmcm9tIHRoZSBDVVJSRU5UIHBlcmltZXRlciBpbnN0ZWFkIG9mIGFcbiAqIHBvaW50LiBTZWVkcyA9IHNpbXBsaWZpZWQgcGVyaW1ldGVyIHZlcnRpY2VzIChpbiBvcmRlcik7IGVhY2ggbWFyY2hlc1xuICogT1VUV0FSRCAoYmVhcmluZyBmcm9tIHBlcmltZXRlciBjZW50cm9pZCB0aHJvdWdoIHRoZSBzZWVkKS4gVGhlIGhvdXItaFxuICogXCJpc29jaHJvbmVcIiBpcyB0aGVuIHRoZSBQUkVESUNURUQgUEVSSU1FVEVSIGF0ICtoIGhvdXJzIChidXJuZWQgaW50ZXJpb3JcbiAqIGNvbnRyaWJ1dGVzIG5vdGhpbmcg4oCUIHJheXMgc3RhcnQgYXQgdGhlIGZpcmUgZWRnZSkuIEFzc2V0cyBnZXQgYSBkZWRpY2F0ZWRcbiAqIHJheSBmcm9tIHRoZWlyIG5lYXJlc3Qgc2VlZC4gVGhpcyBpcyBhbHNvIHRoZSBkYWlseSBzZWxmLXZhbGlkYXRpb24gbG9vcDpcbiAqIHByZWRpY3QgdG9tb3Jyb3cncyBwZXJpbWV0ZXIgZnJvbSB0b2RheSdzLCBzY29yZSBhZ2FpbnN0IHRvbW9ycm93J3MgYWN0dWFsLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQZXJpbWV0ZXJEYXRhKHJpbmdzLCBjb25maWcgPSB7fSkge1xuICBjb25zdCBjZmcgPSB7IC4uLkRFRkFVTFRfQ09ORV9DT05GSUcsIC4uLmNvbmZpZyB9O1xuICBjb25zdCB0YXJnZXRTZWVkcyA9IGNmZy5wZXJpbWV0ZXJTZWVkcyA/PyA0ODtcbiAgY29uc3QgdmVydHMgPSByaW5ncy5mbGF0KCk7XG4gIGNvbnN0IGV2ZXJ5ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih2ZXJ0cy5sZW5ndGggLyB0YXJnZXRTZWVkcykpO1xuICBjb25zdCBzZWVkcyA9IHZlcnRzLmZpbHRlcigoXywgaSkgPT4gaSAlIGV2ZXJ5ID09PSAwKS5zbGljZSgwLCB0YXJnZXRTZWVkcyAqIDIpO1xuICBjb25zdCBjTGF0ID0gc2VlZHMucmVkdWNlKChzLCB2KSA9PiBzICsgdlsxXSwgMCkgLyBzZWVkcy5sZW5ndGg7XG4gIGNvbnN0IGNMb24gPSBzZWVkcy5yZWR1Y2UoKHMsIHYpID0+IHMgKyB2WzBdLCAwKSAvIHNlZWRzLmxlbmd0aDtcblxuICBjb25zdCByYXlzID0gc2VlZHMubWFwKCh2LCBpKSA9PiAoe1xuICAgIGtpbmQ6IFwicmluZ1wiLCBzZWVkSW5kZXg6IGksIG9sYXQ6IHZbMV0sIG9sb246IHZbMF0sXG4gICAgYmVhcmluZzogYmVhcmluZ0RlZyhjTGF0LCBjTG9uLCB2WzFdLCB2WzBdKSwgLy8gb3V0d2FyZFxuICB9KSk7XG4gIGNvbnN0IGFzc2V0c0luUmFuZ2UgPSBbXTtcbiAgZm9yIChjb25zdCBhIG9mIGNmZy5hc3NldHMgfHwgW10pIHtcbiAgICAvLyBuZWFyZXN0IHNlZWQgPSBzcHJlYWQgc291cmNlIHRvd2FyZCB0aGlzIGFzc2V0XG4gICAgbGV0IGJlc3QgPSBudWxsO1xuICAgIGZvciAoY29uc3QgdiBvZiBzZWVkcykge1xuICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0odlsxXSwgdlswXSwgYS5sYXQsIGEubG9uKTtcbiAgICAgIGlmICghYmVzdCB8fCBkIDwgYmVzdC5kKSBiZXN0ID0geyB2LCBkIH07XG4gICAgfVxuICAgIGlmIChiZXN0ICYmIGJlc3QuZCA8PSBjZmcubWF4UmFkaXVzS20gKiAxMDAwKSB7XG4gICAgICBhc3NldHNJblJhbmdlLnB1c2goeyAuLi5hLCBkaXN0TTogYmVzdC5kLCBiZWFyaW5nOiBiZWFyaW5nRGVnKGJlc3QudlsxXSwgYmVzdC52WzBdLCBhLmxhdCwgYS5sb24pIH0pO1xuICAgICAgcmF5cy5wdXNoKHsga2luZDogXCJhc3NldFwiLCBhc3NldDogYS5uYW1lLCBvbGF0OiBiZXN0LnZbMV0sIG9sb246IGJlc3QudlswXSxcbiAgICAgICAgICAgICAgICAgIGJlYXJpbmc6IGJlYXJpbmdEZWcoYmVzdC52WzFdLCBiZXN0LnZbMF0sIGEubGF0LCBhLmxvbikgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmV1c2UgZmV0Y2hGaXJlRGF0YSdzIHNhbXBsaW5nIGJ5IGhhbmRpbmcgaXQgcHJlYnVpbHQgcmF5cyB2aWEgYSBzaGltXG4gIGNvbnN0IG5TdGVwcyA9IE1hdGguY2VpbCgoY2ZnLm1heFJhZGl1c0ttICogMTAwMCkgLyBjZmcuc3RlcE0pO1xuICBjb25zdCBwb2ludHMgPSBbXTtcbiAgZm9yIChjb25zdCByYXkgb2YgcmF5cykge1xuICAgIHJheS5pMCA9IHBvaW50cy5sZW5ndGg7XG4gICAgZm9yIChsZXQgcyA9IDE7IHMgPD0gblN0ZXBzOyBzKyspIHBvaW50cy5wdXNoKGRlc3RpbmF0aW9uKHJheS5vbGF0LCByYXkub2xvbiwgcmF5LmJlYXJpbmcsIHMgKiBjZmcuc3RlcE0pKTtcbiAgICByYXkubiA9IG5TdGVwcztcbiAgfVxuICBpZiAoY2ZnLnZlcmJvc2UpIGNvbnNvbGUubG9nKGBwZXJpbWV0ZXIgbW9kZTogJHtzZWVkcy5sZW5ndGh9IHNlZWRzICsgJHthc3NldHNJblJhbmdlLmxlbmd0aH0gYXNzZXQgcmF5cyA9ICR7cG9pbnRzLmxlbmd0aH0gc2FtcGxlIHBvaW50c2ApO1xuICBjb25zdCBbZnVlbCwgc2xvcGVEZWcsIGFzcGVjdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgc2FtcGxlU2VydmljZShMQU5ERklSRS5mdWVsLCBwb2ludHMpLFxuICAgIHNhbXBsZVNlcnZpY2UoTEFOREZJUkUuc2xvcGVEZWcsIHBvaW50cyksXG4gICAgc2FtcGxlU2VydmljZShMQU5ERklSRS5hc3BlY3QsIHBvaW50cyksXG4gIF0pO1xuICBjb25zdCB3aW5kID0gY2ZnLndpbmRPdmVycmlkZVxuICAgID8geyBtcGg6IGNmZy53aW5kT3ZlcnJpZGUubXBoLCBmcm9tRGVnOiBjZmcud2luZE92ZXJyaWRlLmZyb21EZWcsIGNvbXBhc3M6IFwib3ZlcnJpZGVcIiwgcGxhY2U6IG51bGwgfVxuICAgIDogYXdhaXQgd2luZEF0T3JpZ2luKGNMYXQsIGNMb24pO1xuICByZXR1cm4ge1xuICAgIG9yaWdpbjogeyBsYXQ6IGNMYXQsIGxvbjogY0xvbiB9LCByYXlzLCBuU3RlcHMsIHN0ZXBNOiBjZmcuc3RlcE0sXG4gICAgZnVlbCwgc2xvcGVEZWcsIGFzcGVjdCwgd2luZCwgYXNzZXRzSW5SYW5nZSxcbiAgICBwZXJpbWV0ZXJTZWVkczogc2VlZHMsIGZldGNoZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuUGVyaW1ldGVyQ29uZShyaW5ncywgY29uZmlnID0ge30pIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoUGVyaW1ldGVyRGF0YShyaW5ncywgY29uZmlnKTtcbiAgcmV0dXJuIGNvbXB1dGVDb25lKGRhdGEsIGNvbmZpZyk7XG59XG5cbi8qKiBJc29jaHJvbmUgcmluZ3MgKyBvcmlnaW4gYXMgR2VvSlNPTiAoZm9yIG1hcCBkaXNwbGF5IC8gdmFsaWRhdGlvbiBvdmVybGF5cykuICovXG5leHBvcnQgZnVuY3Rpb24gdG9HZW9Kc29uKHJlc3VsdCkge1xuICBjb25zdCBmYyA9IHsgdHlwZTogXCJGZWF0dXJlQ29sbGVjdGlvblwiLCBmZWF0dXJlczogW1xuICAgIHsgdHlwZTogXCJGZWF0dXJlXCIsIHByb3BlcnRpZXM6IHsga2luZDogXCJvcmlnaW5cIiB9LFxuICAgICAgZ2VvbWV0cnk6IHsgdHlwZTogXCJQb2ludFwiLCBjb29yZGluYXRlczogW3Jlc3VsdC5vcmlnaW4ubG9uLCByZXN1bHQub3JpZ2luLmxhdF0gfSB9LFxuICBdfTtcbiAgZm9yIChjb25zdCBpc28gb2YgcmVzdWx0Lmlzb2Nocm9uZXMpIHtcbiAgICBjb25zdCBjb29yZHMgPSBpc28ucmluZy5tYXAoKHApID0+IFtwLmxvbiwgcC5sYXRdKTtcbiAgICBjb29yZHMucHVzaChjb29yZHNbMF0pO1xuICAgIGZjLmZlYXR1cmVzLnB1c2goeyB0eXBlOiBcIkZlYXR1cmVcIiwgcHJvcGVydGllczogeyBraW5kOiBcImlzb2Nocm9uZVwiLCBob3VyOiBpc28uaG91ciB9LFxuICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogeyB0eXBlOiBcIlBvbHlnb25cIiwgY29vcmRpbmF0ZXM6IFtjb29yZHNdIH0gfSk7XG4gIH1cbiAgcmV0dXJuIGZjO1xufVxuIiwiLy8gQHRzLW5vY2hlY2tcbi8qKlxuICogZmlyZS1lbmdpbmUuanMg4oCUIFJvdGhlcm1lbCBzdXJmYWNlIGZpcmUgc3ByZWFkIChjb3JlIGZvciB0aGUgQk5TRiBmaXJlIHRocmVhdCBjb25lKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogSW5kZXBlbmRlbnQgcmUtaW1wbGVtZW50YXRpb24gb2YgdGhlIFJvdGhlcm1lbCAoMTk3MikgLyBBbGJpbmkgKDE5NzYpIHN1cmZhY2VcbiAqIGZpcmUgc3ByZWFkIG1vZGVsLCBwb3J0ZWQgZnJvbSBhbmQgZ29sZGVuLXRlc3RlZCBhZ2FpbnN0IFB5cmVnZW5jZSdzXG4gKiBweXJldGVjaG5pY3MgKEVQTC0yLjAsIGh0dHBzOi8vZ2l0aHViLmNvbS9weXJlZ2VuY2UvcHlyZXRlY2huaWNzKSDigJQgdGhlIHNhbWVcbiAqIG9yYWNsZSBkaXNjaXBsaW5lIGFzIHRoZSBXUkkgc3BpbGwtdHJhamVjdG9yeSBlbmdpbmUuIEZ1ZWwgZGF0YTogU2NvdHQgJlxuICogQnVyZ2FuICgyMDA1KSBGQkZNNDAgKyBBbmRlcnNvbiAxMywgaW4gZnVlbC1tb2RlbHMuanMgKGdlbmVyYXRlZCB2ZXJiYXRpbSkuXG4gKlxuICogVW5pdHMgKG1hdGNoaW5nIHB5cmV0ZWNobmljcyBjb252ZW50aW9ucyk6XG4gKiAgIGZ1ZWwtbW9kZWwgdGFibGU6IGRlbHRhIGZ0LCB3X28gbGIvZnReMiwgc2lnbWEgZnReLTEsIGgga0J0dS9sYiwgTV94X2RlYWQgJVxuICogICBtb2lzdHVyZSBNX2Y6IGZyYWN0aW9ucywgNiBjbGFzc2VzIChkZWFkIDFoLCAxMGgsIDEwMGgsIGRlYWQtaGVyYiwgbGl2ZSBoZXJiLCBsaXZlIHdvb2R5KVxuICogICBzdXJmYWNlRmlyZU1pbigpOiBiYXNlU3ByZWFkUmF0ZSBtL21pbiwgbWF4RWZmZWN0aXZlV2luZFNwZWVkIG0vbWluXG4gKiAgIGdldFBoaVcobWlkZmxhbWUgbS9taW4pLCBnZXRQaGlTKHNsb3BlIHRhbilcbiAqICAgaGVhZCBST1MgKG0vbWluKSA9IGJhc2VTcHJlYWRSYXRlICogKDEgKyBwaGlXICsgcGhpUylcbiAqXG4gKiBEZXBlbmRlbmN5LWZyZWUgRVNNOiBydW5zIGluIE5vZGUgYW5kIHRoZSBicm93c2VyLlxuICovXG5pbXBvcnQgeyBGVUVMX01PREVMUyB9IGZyb20gXCIuL2Z1ZWwtbW9kZWxzXCI7XG5cbmV4cG9ydCBjb25zdCBFTkdJTkVfVkVSU0lPTiA9IFwiMS4wLjBcIjtcblxuY29uc3QgQUxNT1NUX1pFUk8gPSAxZS02O1xuY29uc3QgTV9UT19GVCA9IDMuMjgxOyAgICAgICAgICAgICAgICAgICAgICAgLy8gcHlyZXRlY2huaWNzIGNvbnZlcnNpb24ucHlcbmNvbnN0IEZUX1RPX00gPSAwLjMwNDc4NTEyNjQ4NTgyNzQ1OyAgICAgICAgIC8vID0gMSAvIDMuMjgxXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZnVlbCBtb2RlbHNcblxuY29uc3QgZmlyZW1vZFNpemVDbGFzcyA9IChzKSA9PlxuICBzID49IDEyMDAgPyAxIDogcyA+PSAxOTIgPyAyIDogcyA+PSA5NiA/IDMgOiBzID49IDQ4ID8gNCA6IHMgPj0gMTYgPyA1IDogNjtcblxuY29uc3QgZXhwQVNpZ21hID0gKEEsIHMpID0+IChzID4gQUxNT1NUX1pFUk8gPyBNYXRoLmV4cChBIC8gcykgOiAwKTtcblxuZXhwb3J0IGNvbnN0IGlzQnVybmFibGUgPSAobikgPT4gIShuID49IDkxICYmIG4gPD0gOTkpO1xuXG4vKiogRXhwYW5kIGEgY29tcGFjdCB0YWJsZSBlbnRyeSBpbnRvIHRoZSB3b3JraW5nIEZ1ZWxNb2RlbCBvYmplY3QuICovXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kRnVlbE1vZGVsKG51bWJlcikge1xuICBjb25zdCBjID0gRlVFTF9NT0RFTFNbbnVtYmVyXTtcbiAgaWYgKCFjKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgW3cxLCB3MTAsIHcxMDAsIHdIZXJiLCB3V29vZHldID0gYy53X287XG4gIGNvbnN0IFtzMSwgczEwLCBzMTAwLCBzSGVyYiwgc1dvb2R5XSA9IGMuc2lnbWE7XG4gIGNvbnN0IE14RGVhZCA9IGMuTV94X2RlYWRfcGN0ICogMC4wMTtcbiAgY29uc3QgaCA9IGMuaF9rYnR1ICogMTAwMDtcbiAgY29uc3QgZHluYW1pYyA9IG51bWJlciA+IDEwMCAmJiB3SGVyYiA+IEFMTU9TVF9aRVJPO1xuICBjb25zdCBzRGVhZEhlcmIgPSBkeW5hbWljID8gc0hlcmIgOiAwO1xuICByZXR1cm4ge1xuICAgIG51bWJlciwgbmFtZTogYy5uYW1lLCBkZWx0YTogYy5kZWx0YSwgZHluYW1pYywgYnVybmFibGU6IGlzQnVybmFibGUobnVtYmVyKSxcbiAgICBNX3g6IFtNeERlYWQsIE14RGVhZCwgTXhEZWFkLCBkeW5hbWljID8gTXhEZWFkIDogMCwgMCwgMF0sXG4gICAgTV9mOiBbMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgd19vOiBbdzEsIHcxMCwgdzEwMCwgMCwgd0hlcmIsIHdXb29keV0sXG4gICAgc2lnbWE6IFtzMSwgczEwLCBzMTAwLCBzRGVhZEhlcmIsIHNIZXJiLCBzV29vZHldLFxuICAgIGg6IFtoLCBoLCBoLCBoLCBoLCBoXSxcbiAgICByaG9fcDogWzMyLCAzMiwgMzIsIDMyLCAzMiwgMzJdLFxuICAgIFNfVDogWzAuMDU1NSwgMC4wNTU1LCAwLjA1NTUsIDAuMDU1NSwgMC4wNTU1LCAwLjA1NTVdLFxuICAgIFNfZTogWzAuMDEsIDAuMDEsIDAuMDEsIDAuMDEsIDAuMDEsIDAuMDFdLFxuICAgIGV4cF9BX3NpZ21hOiBbZXhwQVNpZ21hKC0xMzgsIHMxKSwgZXhwQVNpZ21hKC0xMzgsIHMxMCksIGV4cEFTaWdtYSgtMTM4LCBzMTAwKSxcbiAgICAgICAgICAgICAgICAgIGV4cEFTaWdtYSgtMTM4LCBzRGVhZEhlcmIpLCBleHBBU2lnbWEoLTUwMCwgc0hlcmIpLCBleHBBU2lnbWEoLTUwMCwgc1dvb2R5KV0sXG4gICAgZmlyZW1vZF9zaXplX2NsYXNzZXM6IFtzMSwgczEwLCBzMTAwLCBzRGVhZEhlcmIsIHNIZXJiLCBzV29vZHldLm1hcChmaXJlbW9kU2l6ZUNsYXNzKSxcbiAgICBmX2lqOiBbMCwgMCwgMCwgMCwgMCwgMF0sIGZfaTogWzAsIDBdLCBnX2lqOiBbMCwgMCwgMCwgMCwgMCwgMF0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZER5bmFtaWNGdWVsTG9hZGluZyhmbSwgTV9mKSB7XG4gIGlmIChmbS5keW5hbWljKSB7XG4gICAgY29uc3QgaGVyYkxvYWQgPSBmbS53X29bNF07XG4gICAgY29uc3QgaGVyYk1vaXN0ID0gTV9mWzRdO1xuICAgIGNvbnN0IGdyZWVuID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgaGVyYk1vaXN0IC8gMC45IC0gMSAvIDMpKTtcbiAgICBjb25zdCBjdXJlZCA9IDEgLSBncmVlbjtcbiAgICBmbS5NX2YgPSBbTV9mWzBdLCBNX2ZbMV0sIE1fZlsyXSwgTV9mWzBdLCBNX2ZbNF0sIE1fZls1XV07XG4gICAgZm0ud19vID0gW2ZtLndfb1swXSwgZm0ud19vWzFdLCBmbS53X29bMl0sIGhlcmJMb2FkICogY3VyZWQsIGhlcmJMb2FkICogZ3JlZW4sIGZtLndfb1s1XV07XG4gIH0gZWxzZSB7XG4gICAgZm0uTV9mID0gTV9mLnNsaWNlKCk7XG4gIH1cbiAgcmV0dXJuIGZtO1xufVxuXG5mdW5jdGlvbiBhZGRXZWlnaHRpbmdGYWN0b3JzKGZtKSB7XG4gIGNvbnN0IEEgPSBmbS5zaWdtYS5tYXAoKHMsIGkpID0+IChzICogZm0ud19vW2ldKSAvIGZtLnJob19wW2ldKTtcbiAgY29uc3QgQTAgPSBBWzBdICsgQVsxXSArIEFbMl0gKyBBWzNdLCBBMSA9IEFbNF0gKyBBWzVdLCBBVCA9IEEwICsgQTE7XG4gIGNvbnN0IGYgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gIGlmIChBMCA+IEFMTU9TVF9aRVJPKSBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykgZltpXSA9IEFbaV0gLyBBMDtcbiAgaWYgKEExID4gQUxNT1NUX1pFUk8pIGZvciAobGV0IGkgPSA0OyBpIDwgNjsgaSsrKSBmW2ldID0gQVtpXSAvIEExO1xuICBmbS5mX2lqID0gZjtcbiAgZm0uZl9pID0gQVQgPiBBTE1PU1RfWkVSTyA/IFtBMCAvIEFULCBBMSAvIEFUXSA6IFswLCAwXTtcbiAgY29uc3QgY2xzID0gZm0uZmlyZW1vZF9zaXplX2NsYXNzZXM7XG4gIGNvbnN0IGdpaiA9IChrLCBpc0RlYWQpID0+IHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBjb25zdCBbbG8sIGhpXSA9IGlzRGVhZCA/IFswLCA0XSA6IFs0LCA2XTtcbiAgICBmb3IgKGxldCBpID0gbG87IGkgPCBoaTsgaSsrKSBpZiAoY2xzW2ldID09PSBjbHNba10pIHN1bSArPSBmW2ldO1xuICAgIHJldHVybiBzdW07XG4gIH07XG4gIGZtLmdfaWogPSBbZ2lqKDAsIHRydWUpLCBnaWooMSwgdHJ1ZSksIGdpaigyLCB0cnVlKSwgZ2lqKDMsIHRydWUpLCBnaWooNCwgZmFsc2UpLCBnaWooNSwgZmFsc2UpXTtcbiAgcmV0dXJuIGZtO1xufVxuXG5mdW5jdGlvbiBhZGRMaXZlTW9pc3R1cmVPZkV4dGluY3Rpb24oZm0pIHtcbiAgY29uc3QgbGYgPSBmbS53X28ubWFwKCh3LCBpKSA9PiB3ICogZm0uZXhwX0Ffc2lnbWFbaV0pO1xuICBjb25zdCBkZWFkTW9pc3RGID0gZm0uTV9mWzBdICogbGZbMF0gKyBmbS5NX2ZbMV0gKiBsZlsxXSArIGZtLk1fZlsyXSAqIGxmWzJdICsgZm0uTV9mWzNdICogbGZbM107XG4gIGNvbnN0IGRlYWRMb2FkRiA9IGxmWzBdICsgbGZbMV0gKyBsZlsyXSArIGxmWzNdO1xuICBjb25zdCBsaXZlTG9hZEYgPSBsZls0XSArIGxmWzVdO1xuICBjb25zdCBNeERlYWQgPSBmbS5NX3hbMF07XG4gIGxldCBNeExpdmUgPSBNeERlYWQ7XG4gIGlmIChkZWFkTG9hZEYgPiBBTE1PU1RfWkVSTyAmJiBsaXZlTG9hZEYgPiBBTE1PU1RfWkVSTykge1xuICAgIGNvbnN0IGRlYWRNb2lzdCA9IGRlYWRNb2lzdEYgLyBkZWFkTG9hZEY7XG4gICAgY29uc3QgZDJsID0gZGVhZExvYWRGIC8gbGl2ZUxvYWRGO1xuICAgIE14TGl2ZSA9IE1hdGgubWF4KE14RGVhZCwgMi45ICogZDJsICogKDEgLSBkZWFkTW9pc3QgLyBNeERlYWQpIC0gMC4yMjYpO1xuICB9XG4gIGZtLk1feCA9IFtmbS5NX3hbMF0sIGZtLk1feFsxXSwgZm0uTV94WzJdLCBmbS5NX3hbM10sIE14TGl2ZSwgTXhMaXZlXTtcbiAgcmV0dXJuIGZtO1xufVxuXG4vKiogRnJlc2ggbW9pc3R1cml6ZWQgY29weTogZHluYW1pYyBoZXJiIGN1cmluZyArIHdlaWdodGluZyArIGxpdmUgTV94LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vaXN0dXJpemUobnVtYmVyLCBNX2YpIHtcbiAgY29uc3QgZm0gPSBleHBhbmRGdWVsTW9kZWwobnVtYmVyKTtcbiAgaWYgKCFmbSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBhZGRMaXZlTW9pc3R1cmVPZkV4dGluY3Rpb24oYWRkV2VpZ2h0aW5nRmFjdG9ycyhhZGREeW5hbWljRnVlbExvYWRpbmcoZm0sIE1fZikpKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSb3RoZXJtZWwgY29yZVxuXG5jb25zdCBkb3RDYXQgPSAoeCwgeSkgPT4gW1xuICB4WzBdICogeVswXSArIHhbMV0gKiB5WzFdICsgeFsyXSAqIHlbMl0gKyB4WzNdICogeVszXSxcbiAgeFs0XSAqIHlbNF0gKyB4WzVdICogeVs1XSxcbl07XG5cbi8qKlxuICogTm8td2luZC1uby1zbG9wZSBzdXJmYWNlIGZpcmUgYmVoYXZpb3IgKyB3aW5kL3Nsb3BlIGZhY3RvciBjb2VmZmljaWVudHMuXG4gKiBSZXR1cm5zIHsgYmFzZVNwcmVhZFJhdGUgbS9taW4sIG1heEVmZmVjdGl2ZVdpbmRTcGVlZCBtL21pbiwgcGhpU19HLFxuICogICAgICAgICAgIHBoaVdfc2NhbHIsIHBoaVdfZXhwbnQgfSDigJQgdXNlIGdldFBoaVcvZ2V0UGhpUyB0aGVuXG4gKiAgICAgICAgICAgUk9TID0gYmFzZVNwcmVhZFJhdGUgKiAoMSArIHBoaVcgKyBwaGlTKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1cmZhY2VGaXJlTWluKGZtLCBzcHJlYWRSYXRlQWRqdXN0bWVudCA9IDEuMCkge1xuICBjb25zdCB7IGRlbHRhLCB3X28sIHJob19wLCBzaWdtYSwgTV9mLCBmX2lqLCBmX2kgfSA9IGZtO1xuXG4gIGNvbnN0IHNpZ21hUHJpbWVDYXQgPSBkb3RDYXQoZl9paiwgc2lnbWEpO1xuICBjb25zdCBzaWdtYVByaW1lID0gZl9pWzBdICogc2lnbWFQcmltZUNhdFswXSArIGZfaVsxXSAqIHNpZ21hUHJpbWVDYXRbMV07XG5cbiAgbGV0IGJldGEgPSAwO1xuICBpZiAoZGVsdGEgPiAwKSB7XG4gICAgY29uc3QgYiA9IGRvdENhdCh3X28sIHJob19wLm1hcCgocikgPT4gMSAvIHIpKTtcbiAgICBiZXRhID0gKGJbMF0gKyBiWzFdKSAvIGRlbHRhO1xuICB9XG4gIGNvbnN0IGJldGFPcCA9IHNpZ21hUHJpbWUgPiAwID8gMy4zNDggKiBNYXRoLnBvdyhzaWdtYVByaW1lLCAtMC44MTg5KSA6IDEuMDtcblxuICAvLyByZWFjdGlvbiBpbnRlbnNpdHlcbiAgY29uc3QgU2VDYXQgPSBkb3RDYXQoZl9paiwgZm0uU19lKTtcbiAgY29uc3QgZXRhUyA9IFNlQ2F0Lm1hcCgocykgPT4gKHMgPiAwID8gMC4xNzQgKiBNYXRoLnBvdyhzLCAtMC4xOSkgOiAxLjApKTtcbiAgY29uc3QgTWZDYXQgPSBkb3RDYXQoZl9paiwgTV9mKTtcbiAgY29uc3QgTXhDYXQgPSBkb3RDYXQoZl9paiwgZm0uTV94KTtcbiAgY29uc3QgZXRhTSA9IE1mQ2F0Lm1hcCgobWYsIGkpID0+IHtcbiAgICBjb25zdCBteCA9IE14Q2F0W2ldO1xuICAgIGlmIChteCA8PSAwKSByZXR1cm4gMDtcbiAgICBjb25zdCByID0gTWF0aC5taW4oMSwgbWYgLyBteCk7XG4gICAgcmV0dXJuIDEgLSAyLjU5ICogciArIDUuMTEgKiByICogciAtIDMuNTIgKiByICogciAqIHI7XG4gIH0pO1xuICBjb25zdCBoQ2F0ID0gZG90Q2F0KGZfaWosIGZtLmgpO1xuICBjb25zdCBXbiA9IFtcbiAgICBmbS5nX2lqWzBdICogd19vWzBdICogKDEgLSBmbS5TX1RbMF0pICsgZm0uZ19palsxXSAqIHdfb1sxXSAqICgxIC0gZm0uU19UWzFdKSArXG4gICAgZm0uZ19palsyXSAqIHdfb1syXSAqICgxIC0gZm0uU19UWzJdKSArIGZtLmdfaWpbM10gKiB3X29bM10gKiAoMSAtIGZtLlNfVFszXSksXG4gICAgZm0uZ19pals0XSAqIHdfb1s0XSAqICgxIC0gZm0uU19UWzRdKSArIGZtLmdfaWpbNV0gKiB3X29bNV0gKiAoMSAtIGZtLlNfVFs1XSksXG4gIF07XG4gIGNvbnN0IGJ0dXMgPSBXblswXSAqIGhDYXRbMF0gKiBldGFNWzBdICogZXRhU1swXSArIFduWzFdICogaENhdFsxXSAqIGV0YU1bMV0gKiBldGFTWzFdO1xuICBjb25zdCBBID0gc2lnbWFQcmltZSA+IDAgPyAxMzMgKiBNYXRoLnBvdyhzaWdtYVByaW1lLCAtMC43OTEzKSA6IDA7XG4gIGNvbnN0IEJ2ID0gTWF0aC5wb3coc2lnbWFQcmltZSwgMS41KTtcbiAgY29uc3QgQ3JhdGlvID0gYmV0YSAvIGJldGFPcDtcbiAgY29uc3QgZ2FtbWFNYXggPSBCdiAvICg0OTUgKyAwLjA1OTQgKiBCdik7XG4gIGNvbnN0IGdhbW1hID0gZ2FtbWFNYXggKiBNYXRoLnBvdyhDcmF0aW8sIEEpICogTWF0aC5leHAoQSAqICgxIC0gQ3JhdGlvKSk7XG4gIGNvbnN0IElfUiA9IGJ0dXMgKiBnYW1tYTsgLy8gQnR1L2Z0XjIvbWluXG5cbiAgY29uc3QgeGkgPSBNYXRoLmV4cCgoMC43OTIgKyAwLjY4MSAqIE1hdGguc3FydChzaWdtYVByaW1lKSkgKiAoYmV0YSArIDAuMSkpIC9cbiAgICAgICAgICAgICAoMTkyICsgMC4yNTk1ICogc2lnbWFQcmltZSk7XG4gIGNvbnN0IGhlYXRTb3VyY2UgPSBJX1IgKiB4aTtcblxuICBjb25zdCByaG9CID0gZGVsdGEgPiAwID8gd19vLnJlZHVjZSgocywgdykgPT4gcyArIHcsIDApIC8gZGVsdGEgOiAwO1xuICBjb25zdCBlcHMgPSBzaWdtYS5tYXAoKHMpID0+IChzID4gMCA/IE1hdGguZXhwKC0xMzggLyBzKSA6IDApKTtcbiAgY29uc3QgUWlnID0gTV9mLm1hcCgobSkgPT4gKG0gPiAwID8gMjUwICsgMTExNiAqIG0gOiAwKSk7XG4gIGNvbnN0IGhlYXRQcmVDYXQgPSBbXG4gICAgZl9palswXSAqIGVwc1swXSAqIFFpZ1swXSArIGZfaWpbMV0gKiBlcHNbMV0gKiBRaWdbMV0gK1xuICAgIGZfaWpbMl0gKiBlcHNbMl0gKiBRaWdbMl0gKyBmX2lqWzNdICogZXBzWzNdICogUWlnWzNdLFxuICAgIGZfaWpbNF0gKiBlcHNbNF0gKiBRaWdbNF0gKyBmX2lqWzVdICogZXBzWzVdICogUWlnWzVdLFxuICBdO1xuICBjb25zdCBoZWF0U2luayA9IHJob0IgKiAoZl9pWzBdICogaGVhdFByZUNhdFswXSArIGZfaVsxXSAqIGhlYXRQcmVDYXRbMV0pOyAvLyBCdHUvZnReM1xuICBjb25zdCBSMCA9IGhlYXRTaW5rID4gMCA/IGhlYXRTb3VyY2UgLyBoZWF0U2luayA6IDA7IC8vIGZ0L21pblxuXG4gIC8vIHdpbmQvc2xvcGUgY29lZmZpY2llbnQgcHJlLWNvbXB1dGF0aW9uIChSb3RoZXJtZWwvQWxiaW5pKVxuICBjb25zdCBCID0gMC4wMjUyNiAqIE1hdGgucG93KHNpZ21hUHJpbWUsIDAuNTQpO1xuICBjb25zdCBDID0gNy40NyAqIE1hdGguZXhwKC0wLjEzMyAqIE1hdGgucG93KHNpZ21hUHJpbWUsIDAuNTUpKTtcbiAgY29uc3QgRSA9IDAuNzE1ICogTWF0aC5leHAoLTMuNTkgKiAoc2lnbWFQcmltZSAqIDFlLTQpKTtcbiAgY29uc3QgRiA9IE1hdGgucG93KGJldGEgLyBiZXRhT3AsIEUpO1xuXG4gIGNvbnN0IHBoaVNfRyA9IGJldGEgPiAwID8gNS4yNzUgKiBNYXRoLnBvdyhiZXRhLCAtMC4zKSA6IDA7XG4gIGxldCBwaGlXX3NjYWxyID0gMCwgcGhpV19leHBudCA9IDA7XG4gIGlmIChGID4gMCkge1xuICAgIHBoaVdfc2NhbHIgPSAoQyAvIEYpICogTWF0aC5wb3coTV9UT19GVCwgQik7XG4gICAgcGhpV19leHBudCA9IEI7XG4gIH1cbiAgbGV0IHdzX3NjYWxyID0gMCwgd3NfZXhwbnQgPSAwO1xuICBpZiAoQiA+IDApIHtcbiAgICB3c19zY2FsciA9IE1hdGgucG93KEYgLyBDLCAxIC8gQikgKiBGVF9UT19NO1xuICAgIHdzX2V4cG50ID0gMSAvIEI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJhc2VTcHJlYWRSYXRlOiBSMCAqIHNwcmVhZFJhdGVBZGp1c3RtZW50ICogRlRfVE9fTSwgICAgICAgLy8gbS9taW5cbiAgICBtYXhFZmZlY3RpdmVXaW5kU3BlZWQ6IDAuOSAqIElfUiAqIEZUX1RPX00sICAgICAgICAgICAgICAgIC8vIG0vbWluXG4gICAgcmVhY3Rpb25JbnRlbnNpdHk6IElfUiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCdHUvZnReMi9taW5cbiAgICBwaGlTX0csIHBoaVdfc2NhbHIsIHBoaVdfZXhwbnQsIHdzX3NjYWxyLCB3c19leHBudCxcbiAgfTtcbn1cblxuLyoqIFdpbmQgZmFjdG9yLiBtaWRmbGFtZVdpbmRTcGVlZCBpbiBtL21pbi4gKi9cbmV4cG9ydCBjb25zdCBnZXRQaGlXID0gKHNmbWluLCBtaWRmbGFtZVdpbmRTcGVlZCkgPT5cbiAgc2ZtaW4ucGhpV19zY2FsciAqIE1hdGgucG93KG1pZGZsYW1lV2luZFNwZWVkLCBzZm1pbi5waGlXX2V4cG50KTtcblxuLyoqIFNsb3BlIGZhY3Rvci4gc2xvcGUgPSByaXNlL3J1biAodGFuIG9mIHNsb3BlIGFuZ2xlKS4gKi9cbmV4cG9ydCBjb25zdCBnZXRQaGlTID0gKHNmbWluLCBzbG9wZSkgPT4gc2ZtaW4ucGhpU19HICogc2xvcGUgKiBzbG9wZTtcblxuLyoqIENvbnZlbmllbmNlOiBoZWFkLWZpcmUgUk9TIChtL21pbikgZm9yIGZ1ZWwgbW9kZWwgbiBhdCBnaXZlbiBjb25kaXRpb25zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhlYWRTcHJlYWRSYXRlKGZ1ZWxNb2RlbE51bWJlciwgTV9mLCBtaWRmbGFtZVdpbmRNbWluLCBzbG9wZVRhbikge1xuICBpZiAoIWlzQnVybmFibGUoZnVlbE1vZGVsTnVtYmVyKSkgcmV0dXJuIDA7XG4gIGNvbnN0IGZtID0gbW9pc3R1cml6ZShmdWVsTW9kZWxOdW1iZXIsIE1fZik7XG4gIGlmICghZm0pIHJldHVybiAwO1xuICBjb25zdCBzID0gc3VyZmFjZUZpcmVNaW4oZm0sIDEuMCk7XG4gIHJldHVybiBzLmJhc2VTcHJlYWRSYXRlICogKDEgKyBnZXRQaGlXKHMsIG1pZGZsYW1lV2luZE1taW4pICsgZ2V0UGhpUyhzLCBzbG9wZVRhbikpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRpcmVjdGlvbmFsIHNwcmVhZFxuLy8gKHBvcnRzIG9mIHB5cmV0ZWNobmljcyBzdXJmYWNlX2ZpcmUucHk6IFdBRiwgd2luZC9zbG9wZSB2ZWN0b3IgY29tYmluYXRpb24sXG4vLyAgZWxsaXB0aWNhbCBML1cgKyBlY2NlbnRyaWNpdHksIGJlaGF2aW9yX21heCwgYmVoYXZpb3JfaW5fZGlyZWN0aW9uKVxuXG5jb25zdCBERUcgPSBNYXRoLlBJIC8gMTgwO1xuY29uc3QgTV9NSU5fVE9fTVBIID0gMC4wMzcyODQwOTA5MDkxO1xuXG4vKiogQW5kcmV3cyAyMDEyIHdpbmQgYWRqdXN0bWVudCBmYWN0b3IgKDIwLWZ0IHdpbmQgLT4gbWlkZmxhbWUpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpbmRBZGp1c3RtZW50RmFjdG9yKGZ1ZWxCZWREZXB0aEZ0LCBjYW5vcHlIZWlnaHRGdCA9IDAsIGNhbm9weUNvdmVyID0gMCkge1xuICBpZiAoY2Fub3B5Q292ZXIgPiAwICYmIGNhbm9weUhlaWdodEZ0ID4gMCkge1xuICAgIGNvbnN0IEEgPSBNYXRoLnNxcnQoKGNhbm9weUNvdmVyIC8gMykgKiBjYW5vcHlIZWlnaHRGdCk7XG4gICAgY29uc3QgQiA9IE1hdGgubG9nKCgyMCArIDAuMzYgKiBjYW5vcHlIZWlnaHRGdCkgLyAoMC4xMyAqIGNhbm9weUhlaWdodEZ0KSk7XG4gICAgcmV0dXJuIDAuNTU1IC8gKEEgKiBCKTtcbiAgfVxuICBpZiAoZnVlbEJlZERlcHRoRnQgPiAwKSB7XG4gICAgcmV0dXJuIDEuODMgLyBNYXRoLmxvZygoMjAgKyAwLjM2ICogZnVlbEJlZERlcHRoRnQpIC8gKDAuMTMgKiBmdWVsQmVkRGVwdGhGdCkpO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG5jb25zdCBhelRvQ2FydCA9IChyLCBheikgPT4gW3IgKiBNYXRoLnNpbihheiAqIERFRyksIHIgKiBNYXRoLmNvcyhheiAqIERFRyldO1xuY29uc3QgZG90MiA9IChhLCBiKSA9PiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdO1xuY29uc3QgdG9TbG9wZVBsYW5lID0gKHYyLCBncmFkMikgPT4gW3YyWzBdLCB2MlsxXSwgZG90Mih2MiwgZ3JhZDIpXTtcbmNvbnN0IG1hZzMgPSAodikgPT4gTWF0aC5zcXJ0KHZbMF0gKiB2WzBdICsgdlsxXSAqIHZbMV0gKyB2WzJdICogdlsyXSk7XG5jb25zdCB1bml0MyA9ICh2KSA9PiB7IGNvbnN0IG0gPSBtYWczKHYpOyByZXR1cm4gbSA9PT0gMCA/IHYgOiBbdlswXSAvIG0sIHZbMV0gLyBtLCB2WzJdIC8gbV07IH07XG5jb25zdCBkb3QzID0gKGEsIGIpID0+IGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aFRvV2lkdGhSYXRpbyhlZmZXaW5kTW1pbiwgbW9kZWwgPSBcImJlaGF2ZVwiKSB7XG4gIGNvbnN0IG1waCA9IGVmZldpbmRNbWluICogTV9NSU5fVE9fTVBIO1xuICBpZiAobW9kZWwgPT09IFwicm90aGVybWVsXCIpIHJldHVybiAxICsgMC4yNSAqIG1waDtcbiAgcmV0dXJuIE1hdGgubWluKDgsIDAuOTM2ICogTWF0aC5leHAoMC4xMTQ3ICogbXBoKSArIDAuNDYxICogTWF0aC5leHAoLTAuMDY5MiAqIG1waCkgLSAwLjM5Nyk7XG59XG5cbmV4cG9ydCBjb25zdCBmaXJlRWNjZW50cmljaXR5ID0gKGx3KSA9PiBNYXRoLnNxcnQobHcgKiBsdyAtIDEpIC8gbHc7XG5cbi8qKlxuICogTWF4IChoZWFkaW5nKSBzdXJmYWNlIGZpcmUgYmVoYXZpb3IgZnJvbSB3aW5kICsgc2xvcGUsIGZhaXRoZnVsIHRvXG4gKiBjYWxjX3N1cmZhY2VfZmlyZV9iZWhhdmlvcl9tYXguIERpcmVjdGlvbnMgaW4gZGVncmVlcyBjbG9ja3dpc2UgZnJvbSBOO1xuICogdXB3aW5kRGlyZWN0aW9uID0gZGlyZWN0aW9uIHdpbmQgY29tZXMgRlJPTTsgYXNwZWN0ID0gZG93bnNsb3BlLWZhY2luZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1cmZhY2VGaXJlQmVoYXZpb3JNYXgoc2ZtaW4sIG1pZGZsYW1lV2luZE1taW4sIHVwd2luZERpcmVjdGlvbiwgc2xvcGVUYW4sIGFzcGVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVdpbmRMaW1pdCA9IHRydWUsIGx3TW9kZWwgPSBcImJlaGF2ZVwiKSB7XG4gIGNvbnN0IGRvd253aW5kID0gKHVwd2luZERpcmVjdGlvbiArIDE4MCkgJSAzNjA7XG4gIGNvbnN0IHVwc2xvcGUgPSAoYXNwZWN0ICsgMTgwKSAlIDM2MDtcbiAgY29uc3Qgc2xvcGVWZWMyID0gYXpUb0NhcnQoc2xvcGVUYW4sIHVwc2xvcGUpO1xuICBjb25zdCB3aW5kVmVjMyA9IHRvU2xvcGVQbGFuZShhelRvQ2FydChtaWRmbGFtZVdpbmRNbWluLCBkb3dud2luZCksIHNsb3BlVmVjMik7XG4gIGNvbnN0IHNsb3BlVmVjMyA9IHRvU2xvcGVQbGFuZShzbG9wZVZlYzIsIHNsb3BlVmVjMik7XG4gIGNvbnN0IHBoaVcgPSBnZXRQaGlXKHNmbWluLCBtYWczKHdpbmRWZWMzKSk7XG4gIGNvbnN0IHBoaVMgPSBnZXRQaGlTKHNmbWluLCBzbG9wZVRhbik7XG4gIGNvbnN0IHdVID0gcGhpVyA+IDAgPyB1bml0Myh3aW5kVmVjMykgOiB3aW5kVmVjMztcbiAgY29uc3Qgc1UgPSBwaGlTID4gMCA/IHVuaXQzKHNsb3BlVmVjMykgOiBzbG9wZVZlYzM7XG4gIGNvbnN0IHBoaUUzID0gW3BoaVcgKiB3VVswXSArIHBoaVMgKiBzVVswXSwgcGhpVyAqIHdVWzFdICsgcGhpUyAqIHNVWzFdLCBwaGlXICogd1VbMl0gKyBwaGlTICogc1VbMl1dO1xuICBsZXQgcGhpRSA9IG1hZzMocGhpRTMpO1xuICBsZXQgbWF4RGlyO1xuICBpZiAocGhpRSA+IDApIG1heERpciA9IHVuaXQzKHBoaUUzKTtcbiAgZWxzZSBpZiAocGhpUyA+IDApIG1heERpciA9IHVuaXQzKHNsb3BlVmVjMyk7XG4gIGVsc2UgbWF4RGlyID0gWzAsIDEsIDBdO1xuICAvLyB3aW5kLWxpbWl0OiBlZmZlY3RpdmUgd2luZCBzcGVlZCBpbXBsaWVkIGJ5IHBoaV9FLCBjYXBwZWQgYXQgMC45IElfUlxuICBsZXQgZWZmV2luZCA9IHNmbWluLndzX3NjYWxyICogTWF0aC5wb3cocGhpRSwgc2ZtaW4ud3NfZXhwbnQpO1xuICBpZiAodXNlV2luZExpbWl0ICYmIGVmZldpbmQgPiBzZm1pbi5tYXhFZmZlY3RpdmVXaW5kU3BlZWQpIHtcbiAgICBlZmZXaW5kID0gc2ZtaW4ubWF4RWZmZWN0aXZlV2luZFNwZWVkO1xuICAgIHBoaUUgPSBnZXRQaGlXKHNmbWluLCBlZmZXaW5kKTtcbiAgfVxuICBjb25zdCBsdyA9IGxlbmd0aFRvV2lkdGhSYXRpbyhlZmZXaW5kLCBsd01vZGVsKTtcbiAgcmV0dXJuIHtcbiAgICBtYXhTcHJlYWRSYXRlOiBzZm1pbi5iYXNlU3ByZWFkUmF0ZSAqICgxICsgcGhpRSksICAgLy8gbS9taW5cbiAgICBtYXhTcHJlYWREaXJlY3Rpb246IG1heERpciwgICAgICAgICAgICAgICAgICAgICAgICAgLy8gM0QgdW5pdCB2ZWN0b3IsIHNsb3BlLXRhbmdlbnRpYWxcbiAgICBsZW5ndGhUb1dpZHRoUmF0aW86IGx3LFxuICAgIGVjY2VudHJpY2l0eTogZmlyZUVjY2VudHJpY2l0eShsdyksXG4gIH07XG59XG5cbi8qKiBST1MgKG0vbWluKSB0b3dhcmQgYSBjb21wYXNzIGJlYXJpbmcsIG9uIHRoZSBzbG9wZS10YW5nZW50aWFsIGVsbGlwc2UuICovXG5leHBvcnQgZnVuY3Rpb24gc3ByZWFkUmF0ZUluRGlyZWN0aW9uKGZibWF4LCBiZWFyaW5nRGVnLCBzbG9wZVRhbiwgYXNwZWN0KSB7XG4gIGNvbnN0IHVwc2xvcGUgPSAoYXNwZWN0ICsgMTgwKSAlIDM2MDtcbiAgY29uc3Qgc2xvcGVWZWMyID0gYXpUb0NhcnQoc2xvcGVUYW4sIHVwc2xvcGUpO1xuICBjb25zdCByYXkzID0gdW5pdDModG9TbG9wZVBsYW5lKGF6VG9DYXJ0KDEsIGJlYXJpbmdEZWcpLCBzbG9wZVZlYzIpKTtcbiAgY29uc3QgY29zVyA9IGRvdDMoZmJtYXgubWF4U3ByZWFkRGlyZWN0aW9uLCByYXkzKTtcbiAgY29uc3QgZSA9IGZibWF4LmVjY2VudHJpY2l0eTtcbiAgcmV0dXJuIGZibWF4Lm1heFNwcmVhZFJhdGUgKiAoMSAtIGUpIC8gKDEgLSBlICogY29zVyk7XG59XG4iLCIvLyBAdHMtbm9jaGVja1xuLy8gR0VORVJBVEVEIGZyb20gZnVlbC1tb2RlbHMuanNvbiAoZXhwb3J0ZWQgdmVyYmF0aW0gZnJvbSBweXJldGVjaG5pY3MgY29tcGFjdFxuLy8gdGFibGU7IEFuZGVyc29uIDEzICsgU2NvdHQgJiBCdXJnYW4gRkJGTTQwICsgbm9uYnVybmFibGUgOTEtOTkpLiBEbyBub3QgaGFuZC1lZGl0LlxuLy8gQ29sdW1uczogZGVsdGEgZnQgfCBNX3hfZGVhZCAlIHwgaCBrQnR1L2xiIHwgd19vW2QxaCxkMTBoLGQxMDBoLGhlcmIsd29vZHldIGxiL2Z0MiB8IHNpZ21hW3NhbWUgNV0gZnReLTFcbmV4cG9ydCBjb25zdCBGVUVMX01PREVMUyA9IHtcIjFcIjoge1wibmFtZVwiOiBcIlIwMVwiLCBcImRlbHRhXCI6IDEuMCwgXCJNX3hfZGVhZF9wY3RcIjogMTIuMCwgXCJoX2tidHVcIjogOC4wLCBcIndfb1wiOiBbMC4wMzQsIDAuMCwgMC4wLCAwLjAsIDAuMF0sIFwic2lnbWFcIjogWzM1MDAuMCwgMC4wLCAwLjAsIDAuMCwgMC4wXX0sIFwiMlwiOiB7XCJuYW1lXCI6IFwiUjAyXCIsIFwiZGVsdGFcIjogMS4wLCBcIk1feF9kZWFkX3BjdFwiOiAxNS4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjA5MiwgMC4wNDYsIDAuMDIzLCAwLjAyMywgMC4wXSwgXCJzaWdtYVwiOiBbMzAwMC4wLCAxMDkuMCwgMzAuMCwgMTUwMC4wLCAwLjBdfSwgXCIzXCI6IHtcIm5hbWVcIjogXCJSMDNcIiwgXCJkZWx0YVwiOiAyLjUsIFwiTV94X2RlYWRfcGN0XCI6IDI1LjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMTM4LCAwLjAsIDAuMCwgMC4wLCAwLjBdLCBcInNpZ21hXCI6IFsxNTAwLjAsIDAuMCwgMC4wLCAwLjAsIDAuMF19LCBcIjRcIjoge1wibmFtZVwiOiBcIlIwNFwiLCBcImRlbHRhXCI6IDYuMCwgXCJNX3hfZGVhZF9wY3RcIjogMjAuMCwgXCJoX2tidHVcIjogOC4wLCBcIndfb1wiOiBbMC4yMywgMC4xODQsIDAuMDkyLCAwLjIzLCAwLjBdLCBcInNpZ21hXCI6IFsyMDAwLjAsIDEwOS4wLCAzMC4wLCAxNTAwLjAsIDAuMF19LCBcIjVcIjoge1wibmFtZVwiOiBcIlIwNVwiLCBcImRlbHRhXCI6IDIuMCwgXCJNX3hfZGVhZF9wY3RcIjogMjAuMCwgXCJoX2tidHVcIjogOC4wLCBcIndfb1wiOiBbMC4wNDYsIDAuMDIzLCAwLjAsIDAuMDkyLCAwLjBdLCBcInNpZ21hXCI6IFsyMDAwLjAsIDEwOS4wLCAwLjAsIDE1MDAuMCwgMC4wXX0sIFwiNlwiOiB7XCJuYW1lXCI6IFwiUjA2XCIsIFwiZGVsdGFcIjogMi41LCBcIk1feF9kZWFkX3BjdFwiOiAyNS4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjA2OSwgMC4xMTUsIDAuMDkyLCAwLjAsIDAuMF0sIFwic2lnbWFcIjogWzE3NTAuMCwgMTA5LjAsIDMwLjAsIDAuMCwgMC4wXX0sIFwiN1wiOiB7XCJuYW1lXCI6IFwiUjA3XCIsIFwiZGVsdGFcIjogMi41LCBcIk1feF9kZWFkX3BjdFwiOiA0MC4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjA1MiwgMC4wODYsIDAuMDY5LCAwLjAxNywgMC4wXSwgXCJzaWdtYVwiOiBbMTc1MC4wLCAxMDkuMCwgMzAuMCwgMTU1MC4wLCAwLjBdfSwgXCI4XCI6IHtcIm5hbWVcIjogXCJSMDhcIiwgXCJkZWx0YVwiOiAwLjIsIFwiTV94X2RlYWRfcGN0XCI6IDMwLjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMDY5LCAwLjA0NiwgMC4xMTUsIDAuMCwgMC4wXSwgXCJzaWdtYVwiOiBbMjAwMC4wLCAxMDkuMCwgMzAuMCwgMC4wLCAwLjBdfSwgXCI5XCI6IHtcIm5hbWVcIjogXCJSMDlcIiwgXCJkZWx0YVwiOiAwLjIsIFwiTV94X2RlYWRfcGN0XCI6IDI1LjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMTM0LCAwLjAxOSwgMC4wMDcsIDAuMCwgMC4wXSwgXCJzaWdtYVwiOiBbMjUwMC4wLCAxMDkuMCwgMzAuMCwgMC4wLCAwLjBdfSwgXCIxMFwiOiB7XCJuYW1lXCI6IFwiUjEwXCIsIFwiZGVsdGFcIjogMS4wLCBcIk1feF9kZWFkX3BjdFwiOiAyNS4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjEzOCwgMC4wOTIsIDAuMjMsIDAuMDkyLCAwLjBdLCBcInNpZ21hXCI6IFsyMDAwLjAsIDEwOS4wLCAzMC4wLCAxNTAwLjAsIDAuMF19LCBcIjExXCI6IHtcIm5hbWVcIjogXCJSMTFcIiwgXCJkZWx0YVwiOiAxLjAsIFwiTV94X2RlYWRfcGN0XCI6IDE1LjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMDY5LCAwLjIwNywgMC4yNTMsIDAuMCwgMC4wXSwgXCJzaWdtYVwiOiBbMTUwMC4wLCAxMDkuMCwgMzAuMCwgMC4wLCAwLjBdfSwgXCIxMlwiOiB7XCJuYW1lXCI6IFwiUjEyXCIsIFwiZGVsdGFcIjogMi4zLCBcIk1feF9kZWFkX3BjdFwiOiAyMC4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjE4NCwgMC42NDQsIDAuNzU5LCAwLjAsIDAuMF0sIFwic2lnbWFcIjogWzE1MDAuMCwgMTA5LjAsIDMwLjAsIDAuMCwgMC4wXX0sIFwiMTNcIjoge1wibmFtZVwiOiBcIlIxM1wiLCBcImRlbHRhXCI6IDMuMCwgXCJNX3hfZGVhZF9wY3RcIjogMjUuMCwgXCJoX2tidHVcIjogOC4wLCBcIndfb1wiOiBbMC4zMjIsIDEuMDU4LCAxLjI4OCwgMC4wLCAwLjBdLCBcInNpZ21hXCI6IFsxNTAwLjAsIDEwOS4wLCAzMC4wLCAwLjAsIDAuMF19LCBcIjkxXCI6IHtcIm5hbWVcIjogXCJOQjFcIiwgXCJkZWx0YVwiOiAwLjAsIFwiTV94X2RlYWRfcGN0XCI6IDAuMCwgXCJoX2tidHVcIjogMC4wLCBcIndfb1wiOiBbMC4wLCAwLjAsIDAuMCwgMC4wLCAwLjBdLCBcInNpZ21hXCI6IFswLjAsIDAuMCwgMC4wLCAwLjAsIDAuMF19LCBcIjkyXCI6IHtcIm5hbWVcIjogXCJOQjJcIiwgXCJkZWx0YVwiOiAwLjAsIFwiTV94X2RlYWRfcGN0XCI6IDAuMCwgXCJoX2tidHVcIjogMC4wLCBcIndfb1wiOiBbMC4wLCAwLjAsIDAuMCwgMC4wLCAwLjBdLCBcInNpZ21hXCI6IFswLjAsIDAuMCwgMC4wLCAwLjAsIDAuMF19LCBcIjkzXCI6IHtcIm5hbWVcIjogXCJOQjNcIiwgXCJkZWx0YVwiOiAwLjAsIFwiTV94X2RlYWRfcGN0XCI6IDAuMCwgXCJoX2tidHVcIjogMC4wLCBcIndfb1wiOiBbMC4wLCAwLjAsIDAuMCwgMC4wLCAwLjBdLCBcInNpZ21hXCI6IFswLjAsIDAuMCwgMC4wLCAwLjAsIDAuMF19LCBcIjk4XCI6IHtcIm5hbWVcIjogXCJOQjRcIiwgXCJkZWx0YVwiOiAwLjAsIFwiTV94X2RlYWRfcGN0XCI6IDAuMCwgXCJoX2tidHVcIjogMC4wLCBcIndfb1wiOiBbMC4wLCAwLjAsIDAuMCwgMC4wLCAwLjBdLCBcInNpZ21hXCI6IFswLjAsIDAuMCwgMC4wLCAwLjAsIDAuMF19LCBcIjk5XCI6IHtcIm5hbWVcIjogXCJOQjVcIiwgXCJkZWx0YVwiOiAwLjAsIFwiTV94X2RlYWRfcGN0XCI6IDAuMCwgXCJoX2tidHVcIjogMC4wLCBcIndfb1wiOiBbMC4wLCAwLjAsIDAuMCwgMC4wLCAwLjBdLCBcInNpZ21hXCI6IFswLjAsIDAuMCwgMC4wLCAwLjAsIDAuMF19LCBcIjEwMVwiOiB7XCJuYW1lXCI6IFwiR1IxXCIsIFwiZGVsdGFcIjogMC40LCBcIk1feF9kZWFkX3BjdFwiOiAxNS4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjAwNDYsIDAuMCwgMC4wLCAwLjAxMzgsIDAuMF0sIFwic2lnbWFcIjogWzIyMDAuMCwgMTA5LjAsIDMwLjAsIDIwMDAuMCwgMC4wXX0sIFwiMTAyXCI6IHtcIm5hbWVcIjogXCJHUjJcIiwgXCJkZWx0YVwiOiAxLjAsIFwiTV94X2RlYWRfcGN0XCI6IDE1LjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMDA0NiwgMC4wLCAwLjAsIDAuMDQ1OSwgMC4wXSwgXCJzaWdtYVwiOiBbMjAwMC4wLCAxMDkuMCwgMzAuMCwgMTgwMC4wLCAwLjBdfSwgXCIxMDNcIjoge1wibmFtZVwiOiBcIkdSM1wiLCBcImRlbHRhXCI6IDIuMCwgXCJNX3hfZGVhZF9wY3RcIjogMzAuMCwgXCJoX2tidHVcIjogOC4wLCBcIndfb1wiOiBbMC4wMDQ2LCAwLjAxODQsIDAuMCwgMC4wNjg5LCAwLjBdLCBcInNpZ21hXCI6IFsxNTAwLjAsIDEwOS4wLCAzMC4wLCAxMzAwLjAsIDAuMF19LCBcIjEwNFwiOiB7XCJuYW1lXCI6IFwiR1I0XCIsIFwiZGVsdGFcIjogMi4wLCBcIk1feF9kZWFkX3BjdFwiOiAxNS4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjAxMTUsIDAuMCwgMC4wLCAwLjA4NzIsIDAuMF0sIFwic2lnbWFcIjogWzIwMDAuMCwgMTA5LjAsIDMwLjAsIDE4MDAuMCwgMC4wXX0sIFwiMTA1XCI6IHtcIm5hbWVcIjogXCJHUjVcIiwgXCJkZWx0YVwiOiAxLjUsIFwiTV94X2RlYWRfcGN0XCI6IDQwLjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMDE4NCwgMC4wLCAwLjAsIDAuMTE0OCwgMC4wXSwgXCJzaWdtYVwiOiBbMTgwMC4wLCAxMDkuMCwgMzAuMCwgMTYwMC4wLCAwLjBdfSwgXCIxMDZcIjoge1wibmFtZVwiOiBcIkdSNlwiLCBcImRlbHRhXCI6IDEuNSwgXCJNX3hfZGVhZF9wY3RcIjogNDAuMCwgXCJoX2tidHVcIjogOS4wLCBcIndfb1wiOiBbMC4wMDQ2LCAwLjAsIDAuMCwgMC4xNTYxLCAwLjBdLCBcInNpZ21hXCI6IFsyMjAwLjAsIDEwOS4wLCAzMC4wLCAyMDAwLjAsIDAuMF19LCBcIjEwN1wiOiB7XCJuYW1lXCI6IFwiR1I3XCIsIFwiZGVsdGFcIjogMy4wLCBcIk1feF9kZWFkX3BjdFwiOiAxNS4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjA0NTksIDAuMCwgMC4wLCAwLjI0NzksIDAuMF0sIFwic2lnbWFcIjogWzIwMDAuMCwgMTA5LjAsIDMwLjAsIDE4MDAuMCwgMC4wXX0sIFwiMTA4XCI6IHtcIm5hbWVcIjogXCJHUjhcIiwgXCJkZWx0YVwiOiA0LjAsIFwiTV94X2RlYWRfcGN0XCI6IDMwLjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMDIzLCAwLjA0NTksIDAuMCwgMC4zMzUyLCAwLjBdLCBcInNpZ21hXCI6IFsxNTAwLjAsIDEwOS4wLCAzMC4wLCAxMzAwLjAsIDAuMF19LCBcIjEwOVwiOiB7XCJuYW1lXCI6IFwiR1I5XCIsIFwiZGVsdGFcIjogNS4wLCBcIk1feF9kZWFkX3BjdFwiOiA0MC4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjA0NTksIDAuMDQ1OSwgMC4wLCAwLjQxMzIsIDAuMF0sIFwic2lnbWFcIjogWzE4MDAuMCwgMTA5LjAsIDMwLjAsIDE2MDAuMCwgMC4wXX0sIFwiMTIxXCI6IHtcIm5hbWVcIjogXCJHUzFcIiwgXCJkZWx0YVwiOiAwLjksIFwiTV94X2RlYWRfcGN0XCI6IDE1LjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMDA5MiwgMC4wLCAwLjAsIDAuMDIzLCAwLjAyOThdLCBcInNpZ21hXCI6IFsyMDAwLjAsIDEwOS4wLCAzMC4wLCAxODAwLjAsIDE4MDAuMF19LCBcIjEyMlwiOiB7XCJuYW1lXCI6IFwiR1MyXCIsIFwiZGVsdGFcIjogMS41LCBcIk1feF9kZWFkX3BjdFwiOiAxNS4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjAyMywgMC4wMjMsIDAuMCwgMC4wMjc1LCAwLjA0NTldLCBcInNpZ21hXCI6IFsyMDAwLjAsIDEwOS4wLCAzMC4wLCAxODAwLjAsIDE4MDAuMF19LCBcIjEyM1wiOiB7XCJuYW1lXCI6IFwiR1MzXCIsIFwiZGVsdGFcIjogMS44LCBcIk1feF9kZWFkX3BjdFwiOiA0MC4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjAxMzgsIDAuMDExNSwgMC4wLCAwLjA2NjYsIDAuMDU3NF0sIFwic2lnbWFcIjogWzE4MDAuMCwgMTA5LjAsIDMwLjAsIDE2MDAuMCwgMTYwMC4wXX0sIFwiMTI0XCI6IHtcIm5hbWVcIjogXCJHUzRcIiwgXCJkZWx0YVwiOiAyLjEsIFwiTV94X2RlYWRfcGN0XCI6IDQwLjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMDg3MiwgMC4wMTM4LCAwLjAwNDYsIDAuMTU2MSwgMC4zMjZdLCBcInNpZ21hXCI6IFsxODAwLjAsIDEwOS4wLCAzMC4wLCAxNjAwLjAsIDE2MDAuMF19LCBcIjE0MVwiOiB7XCJuYW1lXCI6IFwiU0gxXCIsIFwiZGVsdGFcIjogMS4wLCBcIk1feF9kZWFkX3BjdFwiOiAxNS4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjAxMTUsIDAuMDExNSwgMC4wLCAwLjAwNjksIDAuMDU5N10sIFwic2lnbWFcIjogWzIwMDAuMCwgMTA5LjAsIDMwLjAsIDE4MDAuMCwgMTYwMC4wXX0sIFwiMTQyXCI6IHtcIm5hbWVcIjogXCJTSDJcIiwgXCJkZWx0YVwiOiAxLjAsIFwiTV94X2RlYWRfcGN0XCI6IDE1LjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMDYyLCAwLjExMDIsIDAuMDM0NCwgMC4wLCAwLjE3NjhdLCBcInNpZ21hXCI6IFsyMDAwLjAsIDEwOS4wLCAzMC4wLCAwLjAsIDE2MDAuMF19LCBcIjE0M1wiOiB7XCJuYW1lXCI6IFwiU0gzXCIsIFwiZGVsdGFcIjogMi40LCBcIk1feF9kZWFkX3BjdFwiOiA0MC4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjAyMDcsIDAuMTM3NywgMC4wLCAwLjAsIDAuMjg0N10sIFwic2lnbWFcIjogWzE2MDAuMCwgMTA5LjAsIDMwLjAsIDAuMCwgMTQwMC4wXX0sIFwiMTQ0XCI6IHtcIm5hbWVcIjogXCJTSDRcIiwgXCJkZWx0YVwiOiAzLjAsIFwiTV94X2RlYWRfcGN0XCI6IDMwLjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMDM5LCAwLjA1MjgsIDAuMDA5MiwgMC4wLCAwLjExNzFdLCBcInNpZ21hXCI6IFsyMDAwLjAsIDEwOS4wLCAzMC4wLCAxODAwLjAsIDE2MDAuMF19LCBcIjE0NVwiOiB7XCJuYW1lXCI6IFwiU0g1XCIsIFwiZGVsdGFcIjogNi4wLCBcIk1feF9kZWFkX3BjdFwiOiAxNS4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjE2NTMsIDAuMDk2NCwgMC4wLCAwLjAsIDAuMTMzMV0sIFwic2lnbWFcIjogWzc1MC4wLCAxMDkuMCwgMzAuMCwgMC4wLCAxNjAwLjBdfSwgXCIxNDZcIjoge1wibmFtZVwiOiBcIlNINlwiLCBcImRlbHRhXCI6IDIuMCwgXCJNX3hfZGVhZF9wY3RcIjogMzAuMCwgXCJoX2tidHVcIjogOC4wLCBcIndfb1wiOiBbMC4xMzMxLCAwLjA2NjYsIDAuMCwgMC4wLCAwLjA2NDNdLCBcInNpZ21hXCI6IFs3NTAuMCwgMTA5LjAsIDMwLjAsIDAuMCwgMTYwMC4wXX0sIFwiMTQ3XCI6IHtcIm5hbWVcIjogXCJTSDdcIiwgXCJkZWx0YVwiOiA2LjAsIFwiTV94X2RlYWRfcGN0XCI6IDE1LjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMTYwNywgMC4yNDMzLCAwLjEwMSwgMC4wLCAwLjE1NjFdLCBcInNpZ21hXCI6IFs3NTAuMCwgMTA5LjAsIDMwLjAsIDAuMCwgMTYwMC4wXX0sIFwiMTQ4XCI6IHtcIm5hbWVcIjogXCJTSDhcIiwgXCJkZWx0YVwiOiAzLjAsIFwiTV94X2RlYWRfcGN0XCI6IDQwLjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMDk0MSwgMC4xNTYxLCAwLjAzOSwgMC4wLCAwLjE5OTddLCBcInNpZ21hXCI6IFs3NTAuMCwgMTA5LjAsIDMwLjAsIDAuMCwgMTYwMC4wXX0sIFwiMTQ5XCI6IHtcIm5hbWVcIjogXCJTSDlcIiwgXCJkZWx0YVwiOiA0LjQsIFwiTV94X2RlYWRfcGN0XCI6IDQwLjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMjA2NiwgMC4xMTI1LCAwLjAsIDAuMDcxMiwgMC4zMjE0XSwgXCJzaWdtYVwiOiBbNzUwLjAsIDEwOS4wLCAzMC4wLCAxODAwLjAsIDE1MDAuMF19LCBcIjE2MVwiOiB7XCJuYW1lXCI6IFwiVFUxXCIsIFwiZGVsdGFcIjogMC42LCBcIk1feF9kZWFkX3BjdFwiOiAyMC4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjAwOTIsIDAuMDQxMywgMC4wNjg5LCAwLjAwOTIsIDAuMDQxM10sIFwic2lnbWFcIjogWzIwMDAuMCwgMTA5LjAsIDMwLjAsIDE4MDAuMCwgMTYwMC4wXX0sIFwiMTYyXCI6IHtcIm5hbWVcIjogXCJUVTJcIiwgXCJkZWx0YVwiOiAxLjAsIFwiTV94X2RlYWRfcGN0XCI6IDMwLjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMDQzNiwgMC4wODI2LCAwLjA1NzQsIDAuMCwgMC4wMDkyXSwgXCJzaWdtYVwiOiBbMjAwMC4wLCAxMDkuMCwgMzAuMCwgMC4wLCAxNjAwLjBdfSwgXCIxNjNcIjoge1wibmFtZVwiOiBcIlRVM1wiLCBcImRlbHRhXCI6IDEuMywgXCJNX3hfZGVhZF9wY3RcIjogMzAuMCwgXCJoX2tidHVcIjogOC4wLCBcIndfb1wiOiBbMC4wNTA1LCAwLjAwNjksIDAuMDExNSwgMC4wMjk4LCAwLjA1MDVdLCBcInNpZ21hXCI6IFsxODAwLjAsIDEwOS4wLCAzMC4wLCAxNjAwLjAsIDE0MDAuMF19LCBcIjE2NFwiOiB7XCJuYW1lXCI6IFwiVFU0XCIsIFwiZGVsdGFcIjogMC41LCBcIk1feF9kZWFkX3BjdFwiOiAxMi4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjIwNjYsIDAuMCwgMC4wLCAwLjAsIDAuMDkxOF0sIFwic2lnbWFcIjogWzIzMDAuMCwgMTA5LjAsIDMwLjAsIDAuMCwgMjAwMC4wXX0sIFwiMTY1XCI6IHtcIm5hbWVcIjogXCJUVTVcIiwgXCJkZWx0YVwiOiAxLjAsIFwiTV94X2RlYWRfcGN0XCI6IDI1LjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMTgzNywgMC4xODM3LCAwLjEzNzcsIDAuMCwgMC4xMzc3XSwgXCJzaWdtYVwiOiBbMTUwMC4wLCAxMDkuMCwgMzAuMCwgMC4wLCA3NTAuMF19LCBcIjE4MVwiOiB7XCJuYW1lXCI6IFwiVEwxXCIsIFwiZGVsdGFcIjogMC4yLCBcIk1feF9kZWFkX3BjdFwiOiAzMC4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjA0NTksIDAuMTAxLCAwLjE2NTMsIDAuMCwgMC4wXSwgXCJzaWdtYVwiOiBbMjAwMC4wLCAxMDkuMCwgMzAuMCwgMC4wLCAwLjBdfSwgXCIxODJcIjoge1wibmFtZVwiOiBcIlRMMlwiLCBcImRlbHRhXCI6IDAuMiwgXCJNX3hfZGVhZF9wY3RcIjogMjUuMCwgXCJoX2tidHVcIjogOC4wLCBcIndfb1wiOiBbMC4wNjQzLCAwLjEwNTYsIDAuMTAxLCAwLjAsIDAuMF0sIFwic2lnbWFcIjogWzIwMDAuMCwgMTA5LjAsIDMwLjAsIDAuMCwgMC4wXX0sIFwiMTgzXCI6IHtcIm5hbWVcIjogXCJUTDNcIiwgXCJkZWx0YVwiOiAwLjMsIFwiTV94X2RlYWRfcGN0XCI6IDIwLjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMDIzLCAwLjEwMSwgMC4xMjg2LCAwLjAsIDAuMF0sIFwic2lnbWFcIjogWzIwMDAuMCwgMTA5LjAsIDMwLjAsIDAuMCwgMC4wXX0sIFwiMTg0XCI6IHtcIm5hbWVcIjogXCJUTDRcIiwgXCJkZWx0YVwiOiAwLjQsIFwiTV94X2RlYWRfcGN0XCI6IDI1LjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMDIzLCAwLjA2ODksIDAuMTkyOCwgMC4wLCAwLjBdLCBcInNpZ21hXCI6IFsyMDAwLjAsIDEwOS4wLCAzMC4wLCAwLjAsIDAuMF19LCBcIjE4NVwiOiB7XCJuYW1lXCI6IFwiVEw1XCIsIFwiZGVsdGFcIjogMC42LCBcIk1feF9kZWFkX3BjdFwiOiAyNS4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjA1MjgsIDAuMTE0OCwgMC4yMDIsIDAuMCwgMC4wXSwgXCJzaWdtYVwiOiBbMjAwMC4wLCAxMDkuMCwgMzAuMCwgMC4wLCAxNjAwLjBdfSwgXCIxODZcIjoge1wibmFtZVwiOiBcIlRMNlwiLCBcImRlbHRhXCI6IDAuMywgXCJNX3hfZGVhZF9wY3RcIjogMjUuMCwgXCJoX2tidHVcIjogOC4wLCBcIndfb1wiOiBbMC4xMTAyLCAwLjA1NTEsIDAuMDU1MSwgMC4wLCAwLjBdLCBcInNpZ21hXCI6IFsyMDAwLjAsIDEwOS4wLCAzMC4wLCAwLjAsIDAuMF19LCBcIjE4N1wiOiB7XCJuYW1lXCI6IFwiVEw3XCIsIFwiZGVsdGFcIjogMC40LCBcIk1feF9kZWFkX3BjdFwiOiAyNS4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjAxMzgsIDAuMDY0MywgMC4zNzE5LCAwLjAsIDAuMF0sIFwic2lnbWFcIjogWzIwMDAuMCwgMTA5LjAsIDMwLjAsIDAuMCwgMC4wXX0sIFwiMTg4XCI6IHtcIm5hbWVcIjogXCJUTDhcIiwgXCJkZWx0YVwiOiAwLjMsIFwiTV94X2RlYWRfcGN0XCI6IDM1LjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMjY2MywgMC4wNjQzLCAwLjA1MDUsIDAuMCwgMC4wXSwgXCJzaWdtYVwiOiBbMTgwMC4wLCAxMDkuMCwgMzAuMCwgMC4wLCAwLjBdfSwgXCIxODlcIjoge1wibmFtZVwiOiBcIlRMOVwiLCBcImRlbHRhXCI6IDAuNiwgXCJNX3hfZGVhZF9wY3RcIjogMzUuMCwgXCJoX2tidHVcIjogOC4wLCBcIndfb1wiOiBbMC4zMDUzLCAwLjE1MTUsIDAuMTkwNSwgMC4wLCAwLjBdLCBcInNpZ21hXCI6IFsxODAwLjAsIDEwOS4wLCAzMC4wLCAwLjAsIDE2MDAuMF19LCBcIjIwMVwiOiB7XCJuYW1lXCI6IFwiU0IxXCIsIFwiZGVsdGFcIjogMS4wLCBcIk1feF9kZWFkX3BjdFwiOiAyNS4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjA2ODksIDAuMTM3NywgMC41MDUxLCAwLjAsIDAuMF0sIFwic2lnbWFcIjogWzIwMDAuMCwgMTA5LjAsIDMwLjAsIDAuMCwgMC4wXX0sIFwiMjAyXCI6IHtcIm5hbWVcIjogXCJTQjJcIiwgXCJkZWx0YVwiOiAxLjAsIFwiTV94X2RlYWRfcGN0XCI6IDI1LjAsIFwiaF9rYnR1XCI6IDguMCwgXCJ3X29cIjogWzAuMjA2NiwgMC4xOTUxLCAwLjE4MzcsIDAuMCwgMC4wXSwgXCJzaWdtYVwiOiBbMjAwMC4wLCAxMDkuMCwgMzAuMCwgMC4wLCAwLjBdfSwgXCIyMDNcIjoge1wibmFtZVwiOiBcIlNCM1wiLCBcImRlbHRhXCI6IDEuMiwgXCJNX3hfZGVhZF9wY3RcIjogMjUuMCwgXCJoX2tidHVcIjogOC4wLCBcIndfb1wiOiBbMC4yNTI1LCAwLjEyNjMsIDAuMTM3NywgMC4wLCAwLjBdLCBcInNpZ21hXCI6IFsyMDAwLjAsIDEwOS4wLCAzMC4wLCAwLjAsIDAuMF19LCBcIjIwNFwiOiB7XCJuYW1lXCI6IFwiU0I0XCIsIFwiZGVsdGFcIjogMi43LCBcIk1feF9kZWFkX3BjdFwiOiAyNS4wLCBcImhfa2J0dVwiOiA4LjAsIFwid19vXCI6IFswLjI0MSwgMC4xNjA3LCAwLjI0MSwgMC4wLCAwLjBdLCBcInNpZ21hXCI6IFsyMDAwLjAsIDEwOS4wLCAzMC4wLCAwLjAsIDAuMF19fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX0dyYXBoaWNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9Qb2ludF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X1BvbHlnb25fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfRmVhdHVyZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0dyYXBoaWNzTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKipcbiAqIEZpcmUgVGhyZWF0IENvbmUgd2lkZ2V0IOKAlCBjbGljayBhIGZpcmUgb3JpZ2luLCBnZXQgcmF5LW1hcmNoZWQgaG91cmx5XG4gKiBpc29jaHJvbmVzIChSb3RoZXJtZWwgcGh5c2ljcywgTEFOREZJUkUgZnVlbHMvdG9wbywgTldTIHdpbmQpIHBsdXMgRVRBcyB0b1xuICogQk5TRiB3aWxkZmlyZS1zdHJhdGVneSBhc3NldHMgd2l0aGluIHJhbmdlLiBQbGFubmluZy1sZXZlbDsgZXBoZW1lcmFsLlxuICovXG5pbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCB0eXBlIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJ1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInXG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnXG5pbXBvcnQgUG9seWdvbiBmcm9tICdlc3JpL2dlb21ldHJ5L1BvbHlnb24nXG5pbXBvcnQgUG9pbnQgZnJvbSAnZXNyaS9nZW9tZXRyeS9Qb2ludCdcbmltcG9ydCB7IGZldGNoRmlyZURhdGEsIGZldGNoUGVyaW1ldGVyRGF0YSwgY29tcHV0ZUNvbmUgfSBmcm9tICcuLi9maXJlLWNvbmUnXG5cbmNvbnN0IFdGSUdTX0NVUlJFTlRfUEVSSU1TID0gJ2h0dHBzOi8vc2VydmljZXM5LmFyY2dpcy5jb20vUkhWUEtLaUZUT05LdHhxMy9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9VU0FfV2lsZGZpcmVzX3YxL0ZlYXR1cmVTZXJ2ZXIvMSdcblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSA9IFJlYWN0XG5cbi8vIGhvdXIgcmluZyBjb2xvcnM6IHdhcm0gbmVhciwgY29vbCBmYXJcbmNvbnN0IEhPVVJfQ09MT1JTOiB7IFtoOiBudW1iZXJdOiBzdHJpbmcgfSA9IHsgMTogJyNkNzE5MWMnLCAzOiAnI2YwN2M0YScsIDY6ICcjZmRhZTYxJywgMTI6ICcjZTNjNzAwJywgMjQ6ICcjMmM3YmI2JyB9XG5jb25zdCByaW5nQ29sb3IgPSAoaDogbnVtYmVyKSA9PiBIT1VSX0NPTE9SU1toXSB8fCAnIzJjN2JiNidcbmNvbnN0IGhleFRvUmdiID0gKGhleDogc3RyaW5nKSA9PiBbcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNiksIHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpLCBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KV1cblxuY29uc3QgTU9JU1RVUkVfUFJFU0VUUzogeyBbazogc3RyaW5nXTogeyBsYWJlbDogc3RyaW5nLCBtOiBudW1iZXJbXSB9IH0gPSB7XG4gIGN1cmVkOiB7IGxhYmVsOiAnRmlyZSBzZWFzb24gKGN1cmVkIGdyYXNzKScsIG06IFswLjAzLCAwLjA0LCAwLjA1LCAwLjAsIDAuMzAsIDAuNjBdIH0sXG4gIG1vZGVyYXRlOiB7IGxhYmVsOiAnU2hvdWxkZXIgc2Vhc29uJywgbTogWzAuMDYsIDAuMDcsIDAuMDgsIDAuMCwgMC42MCwgMC45MF0gfSxcbiAgZ3JlZW46IHsgbGFiZWw6ICdHcmVlbi11cCAoc3ByaW5nKScsIG06IFswLjA5LCAwLjEwLCAwLjExLCAwLjAsIDEuMjAsIDEuMjBdIH0sXG59XG5cbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8YW55PikgPT4ge1xuICBjb25zdCBbam12LCBzZXRKbXZdID0gdXNlU3RhdGU8SmltdU1hcFZpZXc+KG51bGwpXG4gIGNvbnN0IFthcm1pbmcsIHNldEFybWluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3J1bm5pbmcsIHNldFJ1bm5pbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnQ2xpY2sgXCJTZXQgZmlyZSBvcmlnaW5cIiwgdGhlbiBjbGljayB0aGUgbWFwLicpXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpXG4gIGNvbnN0IFttb2lzdEtleSwgc2V0TW9pc3RLZXldID0gdXNlU3RhdGUoJ2N1cmVkJylcbiAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBsYXllclJlZiA9IHVzZVJlZjxfX2VzcmkuR3JhcGhpY3NMYXllcj4obnVsbClcbiAgY29uc3QgY2xpY2tSZWYgPSB1c2VSZWY8X19lc3JpLkhhbmRsZT4obnVsbClcbiAgY29uc3QgY2FjaGVSZWYgPSB1c2VSZWY8eyBsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIsIGRhdGE6IGFueSB9IHwgbnVsbD4obnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4ge1xuICAgIGlmIChjbGlja1JlZi5jdXJyZW50KSBjbGlja1JlZi5jdXJyZW50LnJlbW92ZSgpXG4gICAgaWYgKGxheWVyUmVmLmN1cnJlbnQgJiYgam12KSBqbXYudmlldy5tYXAucmVtb3ZlKGxheWVyUmVmLmN1cnJlbnQpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbam12XSlcblxuICBjb25zdCBlbnN1cmVMYXllciA9ICh2aWV3OiBfX2VzcmkuTWFwVmlldykgPT4ge1xuICAgIGlmICghbGF5ZXJSZWYuY3VycmVudCkge1xuICAgICAgbGF5ZXJSZWYuY3VycmVudCA9IG5ldyBHcmFwaGljc0xheWVyKHsgdGl0bGU6ICdGaXJlIHRocmVhdCBjb25lIChlcGhlbWVyYWwpJywgbGlzdE1vZGU6ICdoaWRlJyB9KVxuICAgICAgdmlldy5tYXAuYWRkKGxheWVyUmVmLmN1cnJlbnQpXG4gICAgfVxuICAgIHJldHVybiBsYXllclJlZi5jdXJyZW50XG4gIH1cblxuICBjb25zdCBjb25lQ2ZnID0gKCkgPT4gKHtcbiAgICBtYXhIb3VyczogcHJvcHMuY29uZmlnLm1heEhvdXJzID8/IDI0LFxuICAgIGlzb2Nocm9uZUhvdXJzOiAocHJvcHMuY29uZmlnLmlzb2Nocm9uZUhvdXJzID8/IFsxLCAzLCA2LCAxMiwgMjRdKS5hc011dGFibGU/LigpID8/IHByb3BzLmNvbmZpZy5pc29jaHJvbmVIb3VycyxcbiAgICBtYXhSYWRpdXNLbTogcHJvcHMuY29uZmlnLm1heFJhZGl1c0ttID8/IDMwLFxuICAgIGJlYXJpbmdzOiBwcm9wcy5jb25maWcuYmVhcmluZ3MgPz8gMjQsXG4gICAgc3RlcE06IHByb3BzLmNvbmZpZy5zdGVwTSA/PyA1MDAsXG4gICAgbW9pc3R1cmU6IE1PSVNUVVJFX1BSRVNFVFNbbW9pc3RLZXldLm0sXG4gICAgdmVyYm9zZTogZmFsc2UsXG4gIH0pXG5cbiAgYXN5bmMgZnVuY3Rpb24gbG9hZEFzc2V0cyhsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIsIHJhZGl1c0ttOiBudW1iZXIpIHtcbiAgICBjb25zdCBvdXQ6IGFueVtdID0gW11cbiAgICBmb3IgKGNvbnN0IGxjIG9mIChwcm9wcy5jb25maWcuYXNzZXRMYXllcnMgPz8gW10pIGFzIGFueSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmwgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiBsYy51cmwgfSlcbiAgICAgICAgY29uc3QgcSA9IGZsLmNyZWF0ZVF1ZXJ5KClcbiAgICAgICAgcS53aGVyZSA9ICcxPTEnXG4gICAgICAgIHEub3V0RmllbGRzID0gW2xjLm5hbWVGaWVsZCwgLi4uKGxjLmV4dHJhRmllbGRzIHx8IFtdKV1cbiAgICAgICAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcbiAgICAgICAgcS5vdXRTcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiA0MzI2IH0gYXMgYW55XG4gICAgICAgIGNvbnN0IGZzID0gYXdhaXQgZmwucXVlcnlGZWF0dXJlcyhxKVxuICAgICAgICBmb3IgKGNvbnN0IGYgb2YgZnMuZmVhdHVyZXMpIHtcbiAgICAgICAgICBjb25zdCBnID0gZi5nZW9tZXRyeSBhcyBfX2VzcmkuUG9pbnRcbiAgICAgICAgICBpZiAoIWcgfHwgZy50eXBlICE9PSAncG9pbnQnKSBjb250aW51ZVxuICAgICAgICAgIGNvbnN0IGRLbSA9IDYzNzEuMDA4OCAqIDIgKiBNYXRoLmFzaW4oTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5zaW4oKGcueSAtIGxhdCkgKiBNYXRoLlBJIC8gMzYwKSAqKiAyICtcbiAgICAgICAgICAgIE1hdGguY29zKGxhdCAqIE1hdGguUEkgLyAxODApICogTWF0aC5jb3MoZy55ICogTWF0aC5QSSAvIDE4MCkgKiBNYXRoLnNpbigoZy54IC0gbG9uKSAqIE1hdGguUEkgLyAzNjApICoqIDIpKVxuICAgICAgICAgIGlmIChkS20gPD0gcmFkaXVzS20pIHtcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbCA9IChsYy5leHRyYUZpZWxkcyB8fCBbXSkubWFwKChlOiBzdHJpbmcpID0+IGYuYXR0cmlidXRlc1tlXSkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyDCtyAnKVxuICAgICAgICAgICAgb3V0LnB1c2goeyBuYW1lOiBgJHtmLmF0dHJpYnV0ZXNbbGMubmFtZUZpZWxkXSB8fCAnYXNzZXQnfSR7ZGV0YWlsID8gJyAoJyArIGRldGFpbCArICcpJyA6ICcnfWAsIGxhdDogZy55LCBsb246IGcueCB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCB7IC8qIHBlci1sYXllciBmYWlsdXJlIHRvbGVyYXRlZCAqLyB9XG4gICAgfVxuICAgIHJldHVybiBvdXRcbiAgfVxuXG4gIGNvbnN0IGRyYXcgPSAodmlldzogX19lc3JpLk1hcFZpZXcsIHJlczogYW55KSA9PiB7XG4gICAgY29uc3QgbGF5ZXIgPSBlbnN1cmVMYXllcih2aWV3KVxuICAgIGxheWVyLnJlbW92ZUFsbCgpXG4gICAgLy8gb3V0ZXIgdW5jZXJ0YWludHkgYmFuZHMgZmlyc3QgKDI0aCByaW5ncyBvbmx5LCBmYWludCk6IEVYVFJFTUUgZG90dGVkLCBNQVggZGFzaGVkXG4gICAgZm9yIChjb25zdCBbYmFuZCwgc3R5bGVdIG9mIFtbJ2V4dHJlbWUnLCAnZG90J10sIFsnbWF4JywgJ2Rhc2gnXV0gYXMgYW55KSB7XG4gICAgICBjb25zdCBicmVzID0gcmVzLmJhbmRzPy5bYmFuZF1cbiAgICAgIGlmICghYnJlcykgY29udGludWVcbiAgICAgIGNvbnN0IGlzbyA9IGJyZXMuaXNvY2hyb25lc1ticmVzLmlzb2Nocm9uZXMubGVuZ3RoIC0gMV1cbiAgICAgIGlmICghaXNvKSBjb250aW51ZVxuICAgICAgY29uc3QgY29vcmRzID0gaXNvLnJpbmcubWFwKChwOiBhbnkpID0+IFtwLmxvbiwgcC5sYXRdKTsgY29vcmRzLnB1c2goY29vcmRzWzBdKVxuICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2x5Z29uKHsgcmluZ3M6IFtjb29yZHNdIGFzIGFueSwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gYXMgYW55IH0pLFxuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLCBjb2xvcjogWzIxNSwgMjUsIDI4LCBiYW5kID09PSAnZXh0cmVtZScgPyAwLjA0IDogMC4wN10sXG4gICAgICAgICAgb3V0bGluZTogeyBjb2xvcjogYmFuZCA9PT0gJ2V4dHJlbWUnID8gJyM4YjAwMDAnIDogJyNkNzE5MWMnLCB3aWR0aDogMS41LCBzdHlsZSB9IGFzIGFueSxcbiAgICAgICAgfSBhcyBhbnksXG4gICAgICAgIHBvcHVwVGVtcGxhdGU6IHtcbiAgICAgICAgICB0aXRsZTogYmFuZCA9PT0gJ2V4dHJlbWUnID8gYCR7aXNvLmhvdXJ9LWhyIEhJU1RPUklDQUwgRVhUUkVNRSAoc3BvdHRpbmctZHJpdmVuIMOXMS41KWAgOiBgJHtpc28uaG91cn0taHIgQ1JFRElCTEUgTUFYIChndXN0cywgYmFycmllcnMgY3Jvc3NlZClgLFxuICAgICAgICAgIGNvbnRlbnQ6ICdPdXRlciB1bmNlcnRhaW50eSBiYW5kIOKAlCBzZWUgdmFsaWRhdGlvbiBub3Rlcy4nLFxuICAgICAgICB9IGFzIGFueSxcbiAgICAgIH0pKVxuICAgIH1cbiAgICAvLyBmYXJ0aGVzdCByaW5ncyBmaXJzdCBzbyBuZWFyIHJpbmdzIHJlbmRlciBvbiB0b3BcbiAgICBjb25zdCBpc29zID0gWy4uLnJlcy5pc29jaHJvbmVzXS5zb3J0KChhLCBiKSA9PiBiLmhvdXIgLSBhLmhvdXIpXG4gICAgZm9yIChjb25zdCBpc28gb2YgaXNvcykge1xuICAgICAgY29uc3QgY29vcmRzID0gaXNvLnJpbmcubWFwKChwOiBhbnkpID0+IFtwLmxvbiwgcC5sYXRdKVxuICAgICAgY29vcmRzLnB1c2goY29vcmRzWzBdKVxuICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2x5Z29uKHsgcmluZ3M6IFtjb29yZHNdIGFzIGFueSwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gYXMgYW55IH0pLFxuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLCBjb2xvcjogWy4uLmhleFRvUmdiKHJpbmdDb2xvcihpc28uaG91cikpLCAwLjEyXSxcbiAgICAgICAgICBvdXRsaW5lOiB7IGNvbG9yOiByaW5nQ29sb3IoaXNvLmhvdXIpLCB3aWR0aDogMiB9LFxuICAgICAgICB9IGFzIGFueSxcbiAgICAgICAgcG9wdXBUZW1wbGF0ZTogeyB0aXRsZTogYCR7aXNvLmhvdXJ9LWhvdXIgcmVhY2hgLCBjb250ZW50OiAnUGxhbm5pbmctbGV2ZWwgc3VyZmFjZSBzcHJlYWQgZW52ZWxvcGUuJyB9IGFzIGFueSxcbiAgICAgIH0pKVxuICAgICAgLy8gaG91ciBsYWJlbCBhdCB0aGUgcmluZydzIGZhcnRoZXN0IHBvaW50XG4gICAgICBjb25zdCBmYXIgPSBpc28ucmluZy5yZWR1Y2UoKG06IGFueSwgcDogYW55KSA9PiAocC5kaXN0X2ttID4gbS5kaXN0X2ttID8gcCA6IG0pLCBpc28ucmluZ1swXSlcbiAgICAgIGlmIChmYXIuZGlzdF9rbSA+IDAuMDUpIHtcbiAgICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgICAgICBnZW9tZXRyeTogbmV3IFBvaW50KHsgbGF0aXR1ZGU6IGZhci5sYXQsIGxvbmdpdHVkZTogZmFyLmxvbiB9KSxcbiAgICAgICAgICBzeW1ib2w6IHsgdHlwZTogJ3RleHQnLCB0ZXh0OiBgJHtpc28uaG91cn0gaHJgLCBjb2xvcjogcmluZ0NvbG9yKGlzby5ob3VyKSwgaGFsb0NvbG9yOiAnI2ZmZicsIGhhbG9TaXplOiAxLjUsIGZvbnQ6IHsgc2l6ZTogMTAsIHdlaWdodDogJ2JvbGQnIH0gfSBhcyBhbnksXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmVzLm1vZGUgPT09ICdwZXJpbWV0ZXInICYmIHJlcy5zb3VyY2VQZXJpbWV0ZXIpIHtcbiAgICAgIC8vIGN1cnJlbnQgZmlyZSBmb290cHJpbnQgKHRoZSBwcmVkaWN0aW9uJ3Mgc3RhcnRpbmcgZWRnZSlcbiAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgUG9seWdvbih7IHJpbmdzOiByZXMuc291cmNlUGVyaW1ldGVyLnJpbmdzIGFzIGFueSwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gYXMgYW55IH0pLFxuICAgICAgICBzeW1ib2w6IHsgdHlwZTogJ3NpbXBsZS1maWxsJywgY29sb3I6IFs5MCwgMjAsIDEwLCAwLjM1XSwgb3V0bGluZTogeyBjb2xvcjogJyM1YTE0MGEnLCB3aWR0aDogMiB9IH0gYXMgYW55LFxuICAgICAgICBwb3B1cFRlbXBsYXRlOiB7IHRpdGxlOiBgJHtyZXMuc291cmNlUGVyaW1ldGVyLm5hbWV9IOKAlCBjdXJyZW50IHBlcmltZXRlcmAsIGNvbnRlbnQ6IGAkeyhyZXMuc291cmNlUGVyaW1ldGVyLmFjcmVzIHx8IDApLnRvRml4ZWQoMCl9IGFjIChXRklHUylgIH0gYXMgYW55LFxuICAgICAgfSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQoeyBsYXRpdHVkZTogcmVzLm9yaWdpbi5sYXQsIGxvbmdpdHVkZTogcmVzLm9yaWdpbi5sb24gfSksXG4gICAgICAgIHN5bWJvbDogeyB0eXBlOiAnc2ltcGxlLW1hcmtlcicsIHN0eWxlOiAnZGlhbW9uZCcsIHNpemU6IDEyLCBjb2xvcjogJyNkNzE5MWMnLCBvdXRsaW5lOiB7IGNvbG9yOiAnI2ZmZicsIHdpZHRoOiAxLjUgfSB9IGFzIGFueSxcbiAgICAgICAgcG9wdXBUZW1wbGF0ZTogeyB0aXRsZTogJ0ZpcmUgb3JpZ2luJywgY29udGVudDogYHdpbmQgJHtyZXMud2luZC5tcGh9IG1waCBmcm9tICR7cmVzLndpbmQuY29tcGFzc31gIH0gYXMgYW55LFxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgLyoqIFBlcmltZXRlciBtb2RlOiBmaW5kIHRoZSBhY3RpdmUgV0ZJR1MgZmlyZSBhdC9uZWFyIHRoZSBjbGljay4gKi9cbiAgYXN5bmMgZnVuY3Rpb24gZmluZEFjdGl2ZVBlcmltZXRlcihsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIpIHtcbiAgICBjb25zdCBmbCA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmw6IFdGSUdTX0NVUlJFTlRfUEVSSU1TIH0pXG4gICAgY29uc3QgcSA9IGZsLmNyZWF0ZVF1ZXJ5KClcbiAgICBxLmdlb21ldHJ5ID0gbmV3IFBvaW50KHsgbGF0aXR1ZGU6IGxhdCwgbG9uZ2l0dWRlOiBsb24gfSlcbiAgICBxLmRpc3RhbmNlID0gMzAwMDsgcS51bml0cyA9ICdtZXRlcnMnIGFzIGFueVxuICAgIHEuc3BhdGlhbFJlbGF0aW9uc2hpcCA9ICdpbnRlcnNlY3RzJ1xuICAgIHEub3V0RmllbGRzID0gWydJbmNpZGVudE5hbWUnLCAnR0lTQWNyZXMnXVxuICAgIHEucmV0dXJuR2VvbWV0cnkgPSB0cnVlXG4gICAgcS5vdXRTcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiA0MzI2IH0gYXMgYW55XG4gICAgY29uc3QgZnMgPSBhd2FpdCBmbC5xdWVyeUZlYXR1cmVzKHEpXG4gICAgY29uc3QgZiA9IGZzLmZlYXR1cmVzLnNvcnQoKGEsIGIpID0+IChiLmF0dHJpYnV0ZXMuR0lTQWNyZXMgfHwgMCkgLSAoYS5hdHRyaWJ1dGVzLkdJU0FjcmVzIHx8IDApKVswXVxuICAgIGlmICghZikgcmV0dXJuIG51bGxcbiAgICByZXR1cm4geyBuYW1lOiBmLmF0dHJpYnV0ZXMuSW5jaWRlbnROYW1lLCBhY3JlczogZi5hdHRyaWJ1dGVzLkdJU0FjcmVzLCByaW5nczogKGYuZ2VvbWV0cnkgYXMgYW55KS5yaW5ncyB9XG4gIH1cblxuICBjb25zdCBydW5QZXJpbUF0ID0gYXN5bmMgKGxhdDogbnVtYmVyLCBsb246IG51bWJlcikgPT4ge1xuICAgIHNldFJ1bm5pbmcodHJ1ZSk7IHNldFJlc3VsdChudWxsKVxuICAgIHNldFN0YXR1cygnTG9va2luZyBmb3IgYW4gYWN0aXZlIGZpcmUgcGVyaW1ldGVyIGF0IHRoZSBjbGlja+KApicpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpcmUgPSBhd2FpdCBmaW5kQWN0aXZlUGVyaW1ldGVyKGxhdCwgbG9uKVxuICAgICAgaWYgKCFmaXJlKSB7IHNldFN0YXR1cygnTm8gYWN0aXZlIFdGSUdTIHBlcmltZXRlciB3aXRoaW4gMyBrbSBvZiB0aGF0IGNsaWNrIOKAlCB1c2UgcG9pbnQgbW9kZSBmb3IgYSBoeXBvdGhldGljYWwgc3RhcnQuJyk7IHJldHVybiB9XG4gICAgICBzZXRTdGF0dXMoYCR7ZmlyZS5uYW1lfSAoJHtmaXJlLmFjcmVzPy50b0ZpeGVkKDApfSBhYyk6IHNhbXBsaW5nIGZ1ZWxzIGFyb3VuZCB0aGUgcGVyaW1ldGVy4oCmYClcbiAgICAgIGNvbnN0IGNmZyA9IGNvbmVDZmcoKSBhcyBhbnlcbiAgICAgIGNmZy5wZXJpbWV0ZXJTZWVkcyA9IDQwXG4gICAgICBjZmcuYXNzZXRzID0gYXdhaXQgbG9hZEFzc2V0cyhsYXQsIGxvbiwgY2ZnLm1heFJhZGl1c0ttICsgMjApXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hQZXJpbWV0ZXJEYXRhKGZpcmUucmluZ3MsIGNmZylcbiAgICAgIGNhY2hlUmVmLmN1cnJlbnQgPSB7IGxhdCwgbG9uLCBkYXRhIH1cbiAgICAgIGNvbnN0IGd1c3QgPSBkYXRhLndpbmQuZ3VzdE1waCB8fCBkYXRhLndpbmQubXBoICogMS42XG4gICAgICBjb25zdCBsaWtlbHkgPSBjb21wdXRlQ29uZShkYXRhLCBjZmcpXG4gICAgICBjb25zdCBkYXRhRyA9IHsgLi4uZGF0YSwgd2luZDogeyAuLi5kYXRhLndpbmQsIG1waDogZ3VzdCB9IH1cbiAgICAgIGNvbnN0IG1heCA9IGNvbXB1dGVDb25lKGRhdGFHLCB7IC4uLmNmZywgaWdub3JlQmFycmllcnM6IHRydWUgfSlcbiAgICAgIGNvbnN0IGV4dHJlbWUgPSBjb21wdXRlQ29uZShkYXRhRywgeyAuLi5jZmcsIGlnbm9yZUJhcnJpZXJzOiB0cnVlLCBzcHJlYWRBZGp1c3RtZW50OiAxLjUgfSlcbiAgICAgIGNvbnN0IHJlczogYW55ID0gbGlrZWx5XG4gICAgICByZXMuYmFuZHMgPSB7IG1heCwgZXh0cmVtZSwgZ3VzdE1waDogZ3VzdCB9XG4gICAgICByZXMubW9kZSA9ICdwZXJpbWV0ZXInXG4gICAgICByZXMuc291cmNlUGVyaW1ldGVyID0geyBuYW1lOiBmaXJlLm5hbWUsIGFjcmVzOiBmaXJlLmFjcmVzLCByaW5nczogZmlyZS5yaW5ncyB9XG4gICAgICBkcmF3KGptdi52aWV3IGFzIF9fZXNyaS5NYXBWaWV3LCByZXMpXG4gICAgICBpZiAobGF5ZXJSZWYuY3VycmVudCkgbGF5ZXJSZWYuY3VycmVudC52aXNpYmxlID0gdHJ1ZVxuICAgICAgc2V0SGlkZGVuKGZhbHNlKVxuICAgICAgc2V0UmVzdWx0KHJlcylcbiAgICAgIHNldFN0YXR1cyhgJHtmaXJlLm5hbWV9OiBwcmVkaWN0ZWQgcGVyaW1ldGVycyArJHsoY2ZnLmlzb2Nocm9uZUhvdXJzIHx8IFtdKS5qb2luKCcvJyl9aCDigJQgd2luZCAke3Jlcy53aW5kLm1waH0gbXBoIChndXN0cyB+JHtNYXRoLnJvdW5kKGd1c3QpfSkgZnJvbSAke3Jlcy53aW5kLmNvbXBhc3N9OyAke2NmZy5hc3NldHMubGVuZ3RofSBhc3NldHMgY2hlY2tlZCBmcm9tIG5lYXJlc3QgZmlyZSBlZGdlLmApXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2V0U3RhdHVzKGBQZXJpbWV0ZXIgcHJlZGljdGlvbiBmYWlsZWQ6ICR7U3RyaW5nKGUpLnNsaWNlKDAsIDE0MCl9YClcbiAgICB9IGZpbmFsbHkgeyBzZXRSdW5uaW5nKGZhbHNlKSB9XG4gIH1cblxuICBjb25zdCBydW5BdCA9IGFzeW5jIChsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIpID0+IHtcbiAgICBzZXRSdW5uaW5nKHRydWUpOyBzZXRSZXN1bHQobnVsbClcbiAgICBzZXRTdGF0dXMoYFNhbXBsaW5nIGZ1ZWxzL3RlcnJhaW4gYW5kIHJ1bm5pbmcgY29uZSBmcm9tICR7bGF0LnRvRml4ZWQoNCl9LCAke2xvbi50b0ZpeGVkKDQpfeKApmApXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNmZyA9IGNvbmVDZmcoKSBhcyBhbnlcbiAgICAgIGNmZy5hc3NldHMgPSBhd2FpdCBsb2FkQXNzZXRzKGxhdCwgbG9uLCBjZmcubWF4UmFkaXVzS20pXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hGaXJlRGF0YShsYXQsIGxvbiwgY2ZnKVxuICAgICAgY2FjaGVSZWYuY3VycmVudCA9IHsgbGF0LCBsb24sIGRhdGEgfVxuICAgICAgLy8gdGhyZWUgdmFsaWRhdGVkIGJhbmRzIGZyb20gT05FIGZldGNoIChTbW9rZWhvdXNlL0hpZ2ggTG9uZXNvbWUvVHJhdmluKTpcbiAgICAgIC8vICAgTElLRUxZICA9IHN1c3RhaW5lZCB3aW5kLCBiYXJyaWVycyByZXNwZWN0ZWQgKDAuOTJ4IG9uIHVuY29udGFpbmVkIG1vZGVyYXRlKVxuICAgICAgLy8gICBNQVggICAgID0gZ3VzdHMgKyBlbnZlbG9wZSAoYmFycmllcnMgY3Jvc3NlZCB2aWEgc3BvdHRpbmcpXG4gICAgICAvLyAgIEVYVFJFTUUgPSBNQVggeDEuNSAocGx1bWUtZHJpdmVuIG1lZ2FmaXJlIHJlc2lkdWFsKVxuICAgICAgY29uc3QgZ3VzdCA9IGRhdGEud2luZC5ndXN0TXBoIHx8IGRhdGEud2luZC5tcGggKiAxLjZcbiAgICAgIGNvbnN0IGxpa2VseSA9IGNvbXB1dGVDb25lKGRhdGEsIGNmZylcbiAgICAgIGNvbnN0IGRhdGFHID0geyAuLi5kYXRhLCB3aW5kOiB7IC4uLmRhdGEud2luZCwgbXBoOiBndXN0IH0gfVxuICAgICAgY29uc3QgbWF4ID0gY29tcHV0ZUNvbmUoZGF0YUcsIHsgLi4uY2ZnLCBpZ25vcmVCYXJyaWVyczogdHJ1ZSB9KVxuICAgICAgY29uc3QgZXh0cmVtZSA9IGNvbXB1dGVDb25lKGRhdGFHLCB7IC4uLmNmZywgaWdub3JlQmFycmllcnM6IHRydWUsIHNwcmVhZEFkanVzdG1lbnQ6IDEuNSB9KVxuICAgICAgY29uc3QgcmVzOiBhbnkgPSBsaWtlbHlcbiAgICAgIHJlcy5iYW5kcyA9IHsgbWF4LCBleHRyZW1lLCBndXN0TXBoOiBndXN0IH1cbiAgICAgIGRyYXcoam12LnZpZXcgYXMgX19lc3JpLk1hcFZpZXcsIHJlcylcbiAgICAgIGlmIChsYXllclJlZi5jdXJyZW50KSBsYXllclJlZi5jdXJyZW50LnZpc2libGUgPSB0cnVlXG4gICAgICBzZXRIaWRkZW4oZmFsc2UpXG4gICAgICBzZXRSZXN1bHQocmVzKVxuICAgICAgc2V0U3RhdHVzKGBDb25lIGZyb20gJHtyZXMud2luZC5wbGFjZSB8fCAnb3JpZ2luJ30g4oCUIHdpbmQgJHtyZXMud2luZC5tcGh9IG1waCAoZ3VzdHMgfiR7TWF0aC5yb3VuZChndXN0KX0pIGZyb20gJHtyZXMud2luZC5jb21wYXNzfTsgJHtjZmcuYXNzZXRzLmxlbmd0aH0gYXNzZXRzIGluIHJhbmdlLmApXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2V0U3RhdHVzKGBDb25lIGZhaWxlZDogJHtTdHJpbmcoZSkuc2xpY2UoMCwgMTQwKX1gKVxuICAgIH0gZmluYWxseSB7IHNldFJ1bm5pbmcoZmFsc2UpIH1cbiAgfVxuXG4gIGNvbnN0IGFybSA9IChtb2RlOiAncG9pbnQnIHwgJ3BlcmltJykgPT4ge1xuICAgIGlmICgham12IHx8IGFybWluZyB8fCBydW5uaW5nKSByZXR1cm5cbiAgICBzZXRBcm1pbmcodHJ1ZSlcbiAgICBzZXRTdGF0dXMobW9kZSA9PT0gJ3BlcmltJyA/ICdDbGljayBhbiBBQ1RJVkUgRklSRSBwZXJpbWV0ZXIgb24gdGhlIG1hcOKApicgOiAnQ2xpY2sgdGhlIGZpcmUgb3JpZ2luIG9uIHRoZSBtYXDigKYnKVxuICAgIGNsaWNrUmVmLmN1cnJlbnQgPSBqbXYudmlldy5vbignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICBjbGlja1JlZi5jdXJyZW50LnJlbW92ZSgpOyBjbGlja1JlZi5jdXJyZW50ID0gbnVsbFxuICAgICAgc2V0QXJtaW5nKGZhbHNlKVxuICAgICAgY29uc3QgcnVuID0gbW9kZSA9PT0gJ3BlcmltJyA/IHJ1blBlcmltQXQgOiBydW5BdFxuICAgICAgcnVuKGV2dC5tYXBQb2ludC5sYXRpdHVkZSwgZXZ0Lm1hcFBvaW50LmxvbmdpdHVkZSlcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgY2xlYXJBbGwgPSAoKSA9PiB7XG4gICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQpIHsgY2xpY2tSZWYuY3VycmVudC5yZW1vdmUoKTsgY2xpY2tSZWYuY3VycmVudCA9IG51bGwgfVxuICAgIGlmIChsYXllclJlZi5jdXJyZW50KSBsYXllclJlZi5jdXJyZW50LnJlbW92ZUFsbCgpXG4gICAgY2FjaGVSZWYuY3VycmVudCA9IG51bGxcbiAgICBzZXRBcm1pbmcoZmFsc2UpOyBzZXRSZXN1bHQobnVsbCk7IHNldEhpZGRlbihmYWxzZSlcbiAgICBzZXRTdGF0dXMoJ0NsZWFyZWQuIENsaWNrIFwiU2V0IGZpcmUgb3JpZ2luXCIgdG8gcnVuIGFnYWluLicpXG4gIH1cblxuICBjb25zdCBhc3NldHMgPSByZXN1bHQ/LmFzc2V0cyB8fCBbXVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiamltdS13aWRnZXRcIiBzdHlsZT17eyBwYWRkaW5nOiAxMCwgb3ZlcmZsb3c6ICdhdXRvJywgZm9udFNpemU6IDEzIH19PlxuICAgICAge3Byb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudCB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyh2KSA9PiBzZXRKbXYodil9IC8+XG4gICAgICApfVxuICAgICAgeyFwcm9wcy51c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnI2IwMCcgfX0+U2VsZWN0IGEgTWFwIHdpZGdldCBpbiB0aGlzIHdpZGdldCdzIHNldHRpbmdzLjwvZGl2Pn1cblxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogNiwgbWFyZ2luQm90dG9tOiA2LCBmbGV4V3JhcDogJ3dyYXAnIH19PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBkaXNhYmxlZD17IWptdiB8fCBhcm1pbmcgfHwgcnVubmluZ30gb25DbGljaz17KCkgPT4gYXJtKCdwb2ludCcpfT5cbiAgICAgICAgICB7YXJtaW5nID8gJ0NsaWNrIHRoZSBtYXDigKYnIDogcnVubmluZyA/ICdSdW5uaW5n4oCmJyA6ICfwn5SlIFBvaW50IG9yaWdpbid9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBkaXNhYmxlZD17IWptdiB8fCBhcm1pbmcgfHwgcnVubmluZ30gb25DbGljaz17KCkgPT4gYXJtKCdwZXJpbScpfVxuICAgICAgICAgIHRpdGxlPVwiQ2xpY2sgYW4gYWN0aXZlIFdGSUdTIGZpcmU6IHByZWRpY3RzIGl0cyBwZXJpbWV0ZXIgYXQgKzYvMTIvMjRoIGZyb20gdGhlIGN1cnJlbnQgZmlyZSBlZGdlXCI+XG4gICAgICAgICAg4q2VIEFjdGl2ZSBmaXJlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIGRpc2FibGVkPXtydW5uaW5nfSBvbkNsaWNrPXtjbGVhckFsbH0+Q2xlYXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiBkaXNhYmxlZD17IXJlc3VsdH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IGlmIChsYXllclJlZi5jdXJyZW50KSB7IGxheWVyUmVmLmN1cnJlbnQudmlzaWJsZSA9ICFsYXllclJlZi5jdXJyZW50LnZpc2libGU7IHNldEhpZGRlbighbGF5ZXJSZWYuY3VycmVudC52aXNpYmxlKSB9IH19PlxuICAgICAgICAgIHtoaWRkZW4gPyAn8J+RgSBTaG93JyA6ICfwn5GBIEhpZGUnfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiBkaXNhYmxlZD17IXJlc3VsdH0gdGl0bGU9XCJDb3B5IHJ1biBwcm92ZW5hbmNlIHJlY29yZCAoSlNPTilcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgaWYgKHJlc3VsdD8ucnVuUmVjb3JkKSBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChKU09OLnN0cmluZ2lmeShyZXN1bHQucnVuUmVjb3JkLCBudWxsLCAxKSkudGhlbigoKSA9PiBzZXRTdGF0dXMoJ1J1biByZWNvcmQgY29waWVkLicpKSB9fT5cbiAgICAgICAgICDijpggUmVjb3JkXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCB9fT5cbiAgICAgICAgPGxhYmVsPkZ1ZWxzOiA8c2VsZWN0IHZhbHVlPXttb2lzdEtleX0gZGlzYWJsZWQ9e3J1bm5pbmd9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TW9pc3RLZXkoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoTU9JU1RVUkVfUFJFU0VUUykubWFwKChbaywgdl0pID0+IDxvcHRpb24ga2V5PXtrfSB2YWx1ZT17a30+e3YubGFiZWx9PC9vcHRpb24+KX1cbiAgICAgICAgPC9zZWxlY3Q+PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1pbkhlaWdodDogMTgsIG1hcmdpbkJvdHRvbTogOCB9fT57cnVubmluZyAmJiA8c3BhbiBjbGFzc05hbWU9XCJqaW11LXNlY29uZGFyeS1sb2FkaW5nXCIgLz59IHtzdGF0dXN9PC9kaXY+XG5cbiAgICAgIHtyZXN1bHQgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCwgYm9yZGVyOiAnMXB4IHNvbGlkICNlMmUyZTInLCBib3JkZXJSYWRpdXM6IDQsIHBhZGRpbmc6ICc2cHggOHB4JywgYmFja2dyb3VuZDogJyNmYWZhZmEnIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA4LCBmbGV4V3JhcDogJ3dyYXAnLCBtYXJnaW5Cb3R0b206IDQgfX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAgfX0+UmVhY2ggYnkgaG91cjo8L3NwYW4+XG4gICAgICAgICAgICB7WzEsIDMsIDYsIDEyLCAyNF0ubWFwKChoKSA9PiAoXG4gICAgICAgICAgICAgIDxzcGFuIGtleT17aH0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAzIH19PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHdpZHRoOiAxNCwgaGVpZ2h0OiAxNCwgYm9yZGVyUmFkaXVzOiAzLCBiYWNrZ3JvdW5kOiByaW5nQ29sb3IoaCksIG9wYWNpdHk6IDAuODUsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBib3JkZXI6IGAycHggc29saWQgJHtyaW5nQ29sb3IoaCl9YCB9fSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPntofWg8L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAxMiwgZmxleFdyYXA6ICd3cmFwJyB9fT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNCB9fT5cbiAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjM0XCIgaGVpZ2h0PVwiOFwiPjxsaW5lIHgxPVwiMFwiIHkxPVwiNFwiIHgyPVwiMzRcIiB5Mj1cIjRcIiBzdHJva2U9XCIjZDcxOTFjXCIgc3Ryb2tlV2lkdGg9XCIzXCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgbGlrZWx5XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDQgfX0+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIzNFwiIGhlaWdodD1cIjhcIj48bGluZSB4MT1cIjBcIiB5MT1cIjRcIiB4Mj1cIjM0XCIgeTI9XCI0XCIgc3Ryb2tlPVwiI2Q3MTkxY1wiIHN0cm9rZVdpZHRoPVwiMi41XCIgc3Ryb2tlRGFzaGFycmF5PVwiNyw0XCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgbWF4IChndXN0cyB+e01hdGgucm91bmQocmVzdWx0LmJhbmRzPy5ndXN0TXBoIHx8IDApfSBtcGgsIGp1bXBzIGJhcnJpZXJzKVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA0IH19PlxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzRcIiBoZWlnaHQ9XCI4XCI+PGxpbmUgeDE9XCIwXCIgeTE9XCI0XCIgeDI9XCIzNFwiIHkyPVwiNFwiIHN0cm9rZT1cIiM4YjAwMDBcIiBzdHJva2VXaWR0aD1cIjIuNVwiIHN0cm9rZURhc2hhcnJheT1cIjIsNFwiIC8+PC9zdmc+XG4gICAgICAgICAgICAgIGV4dHJlbWUgKMOXMS41KVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAge3Jlc3VsdC5tb2RlID09PSAncGVyaW1ldGVyJyAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNCB9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyB3aWR0aDogMTQsIGhlaWdodDogMTQsIGJhY2tncm91bmQ6ICdyZ2JhKDkwLDIwLDEwLDAuNSknLCBib3JkZXI6ICcycHggc29saWQgIzVhMTQwYScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19IC8+XG4gICAgICAgICAgICAgICAgY3VycmVudCBmaXJlXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJyM3NzcnLCBmb250U2l6ZTogMTEsIG1hcmdpblRvcDogNCB9fT5cbiAgICAgICAgICAgIFZhbGlkYXRlZCB2cyBUcmF2aW4gLyBIaWdoIExvbmVzb21lIC8gU21va2Vob3VzZSBDcmVlayDigJQgc3VyZmFjZSBzcHJlYWQsIHN1cHByZXNzaW9uIG5vdCBtb2RlbGVkLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHthc3NldHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyB9fT5cbiAgICAgICAgICA8dGhlYWQ+PHRyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2NjYycgfX0+XG4gICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19Pkxpa2VseTwvdGg+PHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT5NYXg8L3RoPlxuICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT5Bc3NldDwvdGg+PHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT5rbTwvdGg+XG4gICAgICAgICAgPC90cj48L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHthc3NldHMubWFwKChhOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBteCA9IHJlc3VsdD8uYmFuZHM/Lm1heD8uYXNzZXRzPy5maW5kKChtOiBhbnkpID0+IG0ubmFtZSA9PT0gYS5uYW1lKVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVlJyB9fT5cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxuICAgICAgICAgICAgICAgICAgICB7YS5ldGFfaHIgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICA/IDw+PHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCwgYm9yZGVyUmFkaXVzOiA1LCBiYWNrZ3JvdW5kOiByaW5nQ29sb3IoYS5ldGFfaHIgPD0gMSA/IDEgOiBhLmV0YV9ociA8PSAzID8gMyA6IGEuZXRhX2hyIDw9IDYgPyA2IDogYS5ldGFfaHIgPD0gMTIgPyAxMiA6IDI0KSwgbWFyZ2luUmlnaHQ6IDQgfX0gLz57YS5ldGFfaHJ9IGhyPC8+XG4gICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyMyYTcnIH19IHRpdGxlPXtgYmFycmllcnMvc2xvdyBmdWVsIHNoaWVsZCB0aGlzIGFzc2V0IGluIHRoZSB3aW5kb3cgKCR7YS5ibG9ja2VkfSlgfT5zaGllbGRlZDwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcsIGNvbG9yOiAnI2EzMycgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtteCAmJiBteC5ldGFfaHIgIT09IG51bGwgPyBgJHtteC5ldGFfaHJ9IGhyYCA6ICfigJQnfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+e2EubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT57YS5kaXN0X2ttfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICl9XG4gICAgICB7cmVzdWx0ICYmIGFzc2V0cy5sZW5ndGggPT09IDAgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJyM3NzcnIH19Pk5vIGNvbmZpZ3VyZWQgYXNzZXRzIHdpdGhpbiB7cHJvcHMuY29uZmlnLm1heFJhZGl1c0ttID8/IDMwfSBrbS48L2Rpdj59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9