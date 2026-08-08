System.register(["jimu-core/emotion","jimu-core","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
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
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ },

/***/ "jimu-ui"
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ },

/***/ "jimu-ui/advanced/setting-components"
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/spill-trace/src/setting/setting.tsx ***!
  \*********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");

/**
 * Spill Trajectory widget — settings panel.
 * Map selector + numeric model params + JSON editors for site/receptor/width
 * layer configs (kept as JSON for MVP; the per-app configs are short).
 */



const { useState } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React;
const Setting = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const { config, id, onSettingChange } = props;
    // always apply against the LATEST config — a stale render-time snapshot let a
    // paste into one JSON box clobber a just-applied paste in another
    const cfgRef = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(config);
    cfgRef.current = config;
    const [siteJson, setSiteJson] = useState(JSON.stringify((_c = (_b = (_a = config.siteLayers) === null || _a === void 0 ? void 0 : _a.asMutable) === null || _b === void 0 ? void 0 : _b.call(_a, { deep: true })) !== null && _c !== void 0 ? _c : [], null, 1));
    const [receptorJson, setReceptorJson] = useState(JSON.stringify((_f = (_e = (_d = config.receptorLayers) === null || _d === void 0 ? void 0 : _d.asMutable) === null || _e === void 0 ? void 0 : _e.call(_d, { deep: true })) !== null && _f !== void 0 ? _f : [], null, 1));
    const [widthJson, setWidthJson] = useState(JSON.stringify((_j = (_h = (_g = config.widthLayer) === null || _g === void 0 ? void 0 : _g.asMutable) === null || _h === void 0 ? void 0 : _h.call(_g, { deep: true })) !== null && _j !== void 0 ? _j : null, null, 1));
    const [equipJson, setEquipJson] = useState(JSON.stringify((_m = (_l = (_k = config.equipment) === null || _k === void 0 ? void 0 : _k.asMutable) === null || _l === void 0 ? void 0 : _l.call(_k, { deep: true })) !== null && _m !== void 0 ? _m : { enabled: true, entrainmentMs: 0.35, anchorSpacingFt: 100, reservePct: 20 }, null, 1));
    const [jsonErr, setJsonErr] = useState('');
    const set = (key, value) => {
        const next = cfgRef.current.set(key, value);
        cfgRef.current = next;
        onSettingChange({ id, config: next });
    };
    const onMapChange = (useMapWidgetIds) => {
        onSettingChange({ id, useMapWidgetIds });
    };
    const applyJson = (key, text) => {
        try {
            const v = text.trim()
                ? JSON.parse(text)
                : (key === 'widthLayer' || key === 'equipment' ? null : []);
            set(key, v);
            setJsonErr('');
            return true;
        }
        catch (e) {
            setJsonErr(`${key}: ${String(e).slice(0, 80)}`);
            return false;
        }
    };
    // apply live on every keystroke — valid JSON saves immediately, invalid shows error
    const liveEdit = (key, setText) => (e) => { const t = e.target.value; setText(t); applyJson(key, t); };
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "jimu-widget-setting", style: { fontSize: 13 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Map", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { useMapWidgetIds: props.useMapWidgetIds, onSelect: onMapChange }) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Model", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: "Safety factor", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.NumericInput, { size: "sm", value: config.safetyFactor, min: 1, max: 3, step: 0.25, onChange: (v) => set('safetyFactor', v) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: "Min stream order (snap)", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.NumericInput, { size: "sm", value: config.minStreamOrder, min: 1, max: 8, step: 1, onChange: (v) => set('minStreamOrder', v) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: "Max hours", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.NumericInput, { size: "sm", value: config.maxHours, min: 1, max: 72, step: 1, onChange: (v) => set('maxHours', v) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: "Max distance (km)", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.NumericInput, { size: "sm", value: config.maxDistanceKm, min: 10, max: 500, step: 10, onChange: (v) => set('maxDistanceKm', v) }) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Site layers (JSON)", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { flow: "wrap", label: '[{"url","nameField","bufferM","where","extraFields":[]}]', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextArea, { style: { minHeight: 110, fontFamily: 'monospace' }, value: siteJson, onChange: liveEdit('siteLayers', setSiteJson) }) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Receptor layers (JSON)", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { flow: "wrap", label: "Warnings when trace passes within bufferM", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextArea, { style: { minHeight: 90, fontFamily: 'monospace' }, value: receptorJson, onChange: liveEdit('receptorLayers', setReceptorJson) }) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Width override layer (JSON, optional)", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { flow: "wrap", label: '{"url","widthField","where"} or empty', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextArea, { style: { minHeight: 70, fontFamily: 'monospace' }, value: widthJson, onChange: liveEdit('widthLayer', setWidthJson) }) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Equipment (JSON)", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { flow: "wrap", label: 'Boom sizing. Optional "boomLayer":{"url","siteKeyField"} uses drawn boom lines (add "GlobalID" to the site layer extraFields to match).', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextArea, { style: { minHeight: 100, fontFamily: 'monospace' }, value: equipJson, onChange: liveEdit('equipment', setEquipJson) }) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { padding: 6, color: jsonErr ? '#b00' : '#2a7', fontSize: 12 }, children: jsonErr || 'Config OK — applied.' })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zcGlsbC10cmFjZS9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxpRjs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLDJCOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRDs7OztHQUlHO0FBQzhCO0FBRWtFO0FBQ25EO0FBR2hELE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyw0Q0FBSztBQUUxQixNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQXNDLEVBQUUsRUFBRTs7SUFDekQsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEdBQUcsS0FBSztJQUM3Qyw4RUFBOEU7SUFDOUUsa0VBQWtFO0lBQ2xFLE1BQU0sTUFBTSxHQUFHLDRDQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNuQyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU07SUFDdkIsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFD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RUFBQywrRUFBYyxJQUFDLEtBQUssRUFBQyx1Q0FBdUMsWUFDM0QsZ0VBQUMsMkVBQVUsSUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyx1Q0FBdUMsWUFDbkUsZ0VBQUMsNkNBQVEsSUFBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUMzRSxRQUFRLEVBQUUsUUFBUSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsR0FBSSxHQUN6QyxHQUNFLEVBRWpCLGdFQUFDLCtFQUFjLElBQUMsS0FBSyxFQUFDLGtCQUFrQixZQUN0QyxnRUFBQywyRUFBVSxJQUFDLElBQUksRUFBQyxNQUFNLEVBQ3JCLEtBQUssRUFBQyx5SUFBeUksWUFDL0ksZ0VBQUMsNkNBQVEsSUFBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUM1RSxRQUFRLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsR0FBSSxHQUN4QyxHQUNFLEVBRWpCLHlFQUFLLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxZQUN2RSxPQUFPLElBQUksc0JBQXNCLEdBQzlCLElBQ0YsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxPQUFPO0FBRWQsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zcGlsbC10cmFjZS9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKlxuICogU3BpbGwgVHJhamVjdG9yeSB3aWRnZXQg4oCUIHNldHRpbmdzIHBhbmVsLlxuICogTWFwIHNlbGVjdG9yICsgbnVtZXJpYyBtb2RlbCBwYXJhbXMgKyBKU09OIGVkaXRvcnMgZm9yIHNpdGUvcmVjZXB0b3Ivd2lkdGhcbiAqIGxheWVyIGNvbmZpZ3MgKGtlcHQgYXMgSlNPTiBmb3IgTVZQOyB0aGUgcGVyLWFwcCBjb25maWdzIGFyZSBzaG9ydCkuXG4gKi9cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHR5cGUgeyBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xuaW1wb3J0IHsgTWFwV2lkZ2V0U2VsZWN0b3IsIFNldHRpbmdTZWN0aW9uLCBTZXR0aW5nUm93IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOdW1lcmljSW5wdXQsIFRleHRBcmVhIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbmNvbnN0IHsgdXNlU3RhdGUgfSA9IFJlYWN0XG5cbmNvbnN0IFNldHRpbmcgPSAocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4pID0+IHtcbiAgY29uc3QgeyBjb25maWcsIGlkLCBvblNldHRpbmdDaGFuZ2UgfSA9IHByb3BzXG4gIC8vIGFsd2F5cyBhcHBseSBhZ2FpbnN0IHRoZSBMQVRFU1QgY29uZmlnIOKAlCBhIHN0YWxlIHJlbmRlci10aW1lIHNuYXBzaG90IGxldCBhXG4gIC8vIHBhc3RlIGludG8gb25lIEpTT04gYm94IGNsb2JiZXIgYSBqdXN0LWFwcGxpZWQgcGFzdGUgaW4gYW5vdGhlclxuICBjb25zdCBjZmdSZWYgPSBSZWFjdC51c2VSZWYoY29uZmlnKVxuICBjZmdSZWYuY3VycmVudCA9IGNvbmZpZ1xuICBjb25zdCBbc2l0ZUpzb24sIHNldFNpdGVKc29uXSA9IHVzZVN0YXRlKEpTT04uc3RyaW5naWZ5KGNvbmZpZy5zaXRlTGF5ZXJzPy5hc011dGFibGU/Lih7IGRlZXA6IHRydWUgfSkgPz8gW10sIG51bGwsIDEpKVxuICBjb25zdCBbcmVjZXB0b3JKc29uLCBzZXRSZWNlcHRvckpzb25dID0gdXNlU3RhdGUoSlNPTi5zdHJpbmdpZnkoY29uZmlnLnJlY2VwdG9yTGF5ZXJzPy5hc011dGFibGU/Lih7IGRlZXA6IHRydWUgfSkgPz8gW10sIG51bGwsIDEpKVxuICBjb25zdCBbd2lkdGhKc29uLCBzZXRXaWR0aEpzb25dID0gdXNlU3RhdGUoSlNPTi5zdHJpbmdpZnkoY29uZmlnLndpZHRoTGF5ZXI/LmFzTXV0YWJsZT8uKHsgZGVlcDogdHJ1ZSB9KSA/PyBudWxsLCBudWxsLCAxKSlcbiAgY29uc3QgW2VxdWlwSnNvbiwgc2V0RXF1aXBKc29uXSA9IHVzZVN0YXRlKEpTT04uc3RyaW5naWZ5KFxuICAgIGNvbmZpZy5lcXVpcG1lbnQ/LmFzTXV0YWJsZT8uKHsgZGVlcDogdHJ1ZSB9KSA/P1xuICAgIHsgZW5hYmxlZDogdHJ1ZSwgZW50cmFpbm1lbnRNczogMC4zNSwgYW5jaG9yU3BhY2luZ0Z0OiAxMDAsIHJlc2VydmVQY3Q6IDIwIH0sIG51bGwsIDEpKVxuICBjb25zdCBbanNvbkVyciwgc2V0SnNvbkVycl0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBzZXQgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gY2ZnUmVmLmN1cnJlbnQuc2V0KGtleSwgdmFsdWUpXG4gICAgY2ZnUmVmLmN1cnJlbnQgPSBuZXh0XG4gICAgb25TZXR0aW5nQ2hhbmdlKHsgaWQsIGNvbmZpZzogbmV4dCB9KVxuICB9XG5cbiAgY29uc3Qgb25NYXBDaGFuZ2UgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSkgPT4ge1xuICAgIG9uU2V0dGluZ0NoYW5nZSh7IGlkLCB1c2VNYXBXaWRnZXRJZHMgfSlcbiAgfVxuXG4gIGNvbnN0IGFwcGx5SnNvbiA9IChrZXk6IHN0cmluZywgdGV4dDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHYgPSB0ZXh0LnRyaW0oKVxuICAgICAgICA/IEpTT04ucGFyc2UodGV4dClcbiAgICAgICAgOiAoa2V5ID09PSAnd2lkdGhMYXllcicgfHwga2V5ID09PSAnZXF1aXBtZW50JyA/IG51bGwgOiBbXSlcbiAgICAgIHNldChrZXksIHYpXG4gICAgICBzZXRKc29uRXJyKCcnKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXRKc29uRXJyKGAke2tleX06ICR7U3RyaW5nKGUpLnNsaWNlKDAsIDgwKX1gKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgLy8gYXBwbHkgbGl2ZSBvbiBldmVyeSBrZXlzdHJva2Ug4oCUIHZhbGlkIEpTT04gc2F2ZXMgaW1tZWRpYXRlbHksIGludmFsaWQgc2hvd3MgZXJyb3JcbiAgY29uc3QgbGl2ZUVkaXQgPSAoa2V5OiBzdHJpbmcsIHNldFRleHQ6ICh0OiBzdHJpbmcpID0+IHZvaWQpID0+XG4gICAgKGU6IGFueSkgPT4geyBjb25zdCB0ID0gZS50YXJnZXQudmFsdWU7IHNldFRleHQodCk7IGFwcGx5SnNvbihrZXksIHQpIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiamltdS13aWRnZXQtc2V0dGluZ1wiIHN0eWxlPXt7IGZvbnRTaXplOiAxMyB9fT5cbiAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIk1hcFwiPlxuICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICA8TWFwV2lkZ2V0U2VsZWN0b3IgdXNlTWFwV2lkZ2V0SWRzPXtwcm9wcy51c2VNYXBXaWRnZXRJZHN9IG9uU2VsZWN0PXtvbk1hcENoYW5nZX0gLz5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cblxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiTW9kZWxcIj5cbiAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJTYWZldHkgZmFjdG9yXCI+XG4gICAgICAgICAgPE51bWVyaWNJbnB1dCBzaXplPVwic21cIiB2YWx1ZT17Y29uZmlnLnNhZmV0eUZhY3Rvcn0gbWluPXsxfSBtYXg9ezN9IHN0ZXA9ezAuMjV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHNldCgnc2FmZXR5RmFjdG9yJywgdil9IC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJNaW4gc3RyZWFtIG9yZGVyIChzbmFwKVwiPlxuICAgICAgICAgIDxOdW1lcmljSW5wdXQgc2l6ZT1cInNtXCIgdmFsdWU9e2NvbmZpZy5taW5TdHJlYW1PcmRlcn0gbWluPXsxfSBtYXg9ezh9IHN0ZXA9ezF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHNldCgnbWluU3RyZWFtT3JkZXInLCB2KX0gLz5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIk1heCBob3Vyc1wiPlxuICAgICAgICAgIDxOdW1lcmljSW5wdXQgc2l6ZT1cInNtXCIgdmFsdWU9e2NvbmZpZy5tYXhIb3Vyc30gbWluPXsxfSBtYXg9ezcyfSBzdGVwPXsxfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiBzZXQoJ21heEhvdXJzJywgdil9IC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJNYXggZGlzdGFuY2UgKGttKVwiPlxuICAgICAgICAgIDxOdW1lcmljSW5wdXQgc2l6ZT1cInNtXCIgdmFsdWU9e2NvbmZpZy5tYXhEaXN0YW5jZUttfSBtaW49ezEwfSBtYXg9ezUwMH0gc3RlcD17MTB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHNldCgnbWF4RGlzdGFuY2VLbScsIHYpfSAvPlxuICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxuXG4gICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJTaXRlIGxheWVycyAoSlNPTilcIj5cbiAgICAgICAgPFNldHRpbmdSb3cgZmxvdz1cIndyYXBcIlxuICAgICAgICAgIGxhYmVsPSdbe1widXJsXCIsXCJuYW1lRmllbGRcIixcImJ1ZmZlck1cIixcIndoZXJlXCIsXCJleHRyYUZpZWxkc1wiOltdfV0nPlxuICAgICAgICAgIDxUZXh0QXJlYSBzdHlsZT17eyBtaW5IZWlnaHQ6IDExMCwgZm9udEZhbWlseTogJ21vbm9zcGFjZScgfX0gdmFsdWU9e3NpdGVKc29ufVxuICAgICAgICAgICAgb25DaGFuZ2U9e2xpdmVFZGl0KCdzaXRlTGF5ZXJzJywgc2V0U2l0ZUpzb24pfSAvPlxuICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxuXG4gICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJSZWNlcHRvciBsYXllcnMgKEpTT04pXCI+XG4gICAgICAgIDxTZXR0aW5nUm93IGZsb3c9XCJ3cmFwXCIgbGFiZWw9XCJXYXJuaW5ncyB3aGVuIHRyYWNlIHBhc3NlcyB3aXRoaW4gYnVmZmVyTVwiPlxuICAgICAgICAgIDxUZXh0QXJlYSBzdHlsZT17eyBtaW5IZWlnaHQ6IDkwLCBmb250RmFtaWx5OiAnbW9ub3NwYWNlJyB9fSB2YWx1ZT17cmVjZXB0b3JKc29ufVxuICAgICAgICAgICAgb25DaGFuZ2U9e2xpdmVFZGl0KCdyZWNlcHRvckxheWVycycsIHNldFJlY2VwdG9ySnNvbil9IC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIldpZHRoIG92ZXJyaWRlIGxheWVyIChKU09OLCBvcHRpb25hbClcIj5cbiAgICAgICAgPFNldHRpbmdSb3cgZmxvdz1cIndyYXBcIiBsYWJlbD0ne1widXJsXCIsXCJ3aWR0aEZpZWxkXCIsXCJ3aGVyZVwifSBvciBlbXB0eSc+XG4gICAgICAgICAgPFRleHRBcmVhIHN0eWxlPXt7IG1pbkhlaWdodDogNzAsIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnIH19IHZhbHVlPXt3aWR0aEpzb259XG4gICAgICAgICAgICBvbkNoYW5nZT17bGl2ZUVkaXQoJ3dpZHRoTGF5ZXInLCBzZXRXaWR0aEpzb24pfSAvPlxuICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxuXG4gICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJFcXVpcG1lbnQgKEpTT04pXCI+XG4gICAgICAgIDxTZXR0aW5nUm93IGZsb3c9XCJ3cmFwXCJcbiAgICAgICAgICBsYWJlbD0nQm9vbSBzaXppbmcuIE9wdGlvbmFsIFwiYm9vbUxheWVyXCI6e1widXJsXCIsXCJzaXRlS2V5RmllbGRcIn0gdXNlcyBkcmF3biBib29tIGxpbmVzIChhZGQgXCJHbG9iYWxJRFwiIHRvIHRoZSBzaXRlIGxheWVyIGV4dHJhRmllbGRzIHRvIG1hdGNoKS4nPlxuICAgICAgICAgIDxUZXh0QXJlYSBzdHlsZT17eyBtaW5IZWlnaHQ6IDEwMCwgZm9udEZhbWlseTogJ21vbm9zcGFjZScgfX0gdmFsdWU9e2VxdWlwSnNvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtsaXZlRWRpdCgnZXF1aXBtZW50Jywgc2V0RXF1aXBKc29uKX0gLz5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cblxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA2LCBjb2xvcjoganNvbkVyciA/ICcjYjAwJyA6ICcjMmE3JywgZm9udFNpemU6IDEyIH19PlxuICAgICAgICB7anNvbkVyciB8fCAnQ29uZmlnIE9LIOKAlCBhcHBsaWVkLid9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9