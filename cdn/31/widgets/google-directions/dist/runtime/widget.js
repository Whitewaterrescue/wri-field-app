System.register(["jimu-core/emotion","jimu-core","jimu-arcgis","esri/support/actions/ActionButton","esri/core/reactiveUtils"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_support_actions_ActionButton__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_support_actions_ActionButton__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__, "__esModule", { value: true });
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
				__WEBPACK_EXTERNAL_MODULE_esri_support_actions_ActionButton__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_support_actions_ActionButton__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "esri/core/reactiveUtils"
/*!******************************************!*\
  !*** external "esri/core/reactiveUtils" ***!
  \******************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__;

/***/ },

/***/ "esri/support/actions/ActionButton"
/*!****************************************************!*\
  !*** external "esri/support/actions/ActionButton" ***!
  \****************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_support_actions_ActionButton__;

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
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/google-directions/src/runtime/widget.tsx ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_support_actions_ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/support/actions/ActionButton */ "esri/support/actions/ActionButton");
/* harmony import */ var esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/core/reactiveUtils */ "esri/core/reactiveUtils");

/**
 * Google Directions popup action — runtime.
 *
 * Invisible companion widget: binds to one map widget and adds a
 * "Directions" button to the map popup's action bar. Tapping it opens
 * Google Maps driving directions to the selected feature — the exact
 * coordinates for point features, the tapped location for lines and
 * polygons. Uses the public Maps URL scheme (no API key); on phones the
 * link opens the native Google Maps app straight into navigation.
 */




const ACTION_ID = 'wri-google-directions';
const Widget = (props) => {
    var _a;
    const handlesRef = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef([]);
    const clearHandles = () => {
        handlesRef.current.forEach((h) => { try {
            h.remove();
        }
        catch (e) { } });
        handlesRef.current = [];
    };
    const onActiveViewChange = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((jmv) => {
        clearHandles();
        if (!(jmv === null || jmv === void 0 ? void 0 : jmv.view))
            return;
        const view = jmv.view;
        view.when(() => {
            // view.popup is a lazy stub until the popup first opens (4.27+):
            // popup.actions doesn't exist yet, so watch for the real instance and
            // let reactiveUtils.on re-attach the listener when it appears.
            handlesRef.current.push((0,esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_4__.watch)(() => { var _a; return (_a = view.popup) === null || _a === void 0 ? void 0 : _a.actions; }, (acts) => {
                if ((acts === null || acts === void 0 ? void 0 : acts.some) && !acts.some((a) => a.id === ACTION_ID)) {
                    acts.push(new esri_support_actions_ActionButton__WEBPACK_IMPORTED_MODULE_3__["default"]({
                        id: ACTION_ID,
                        title: 'Directions',
                        icon: 'car',
                        className: 'esri-icon-directions',
                    }));
                }
            }, { initial: true }), (0,esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_4__.on)(() => view.popup, 'trigger-action', (evt) => {
                var _a, _b;
                if (((_a = evt === null || evt === void 0 ? void 0 : evt.action) === null || _a === void 0 ? void 0 : _a.id) !== ACTION_ID)
                    return;
                const popup = view.popup;
                const geom = (_b = popup.selectedFeature) === null || _b === void 0 ? void 0 : _b.geometry;
                const pt = (geom && geom.type === 'point')
                    ? geom
                    : popup.location;
                // Point.latitude/longitude auto-convert from Web Mercator
                const lat = pt === null || pt === void 0 ? void 0 : pt.latitude;
                const lon = pt === null || pt === void 0 ? void 0 : pt.longitude;
                if (lat == null || lon == null)
                    return;
                const url = 'https://www.google.com/maps/dir/?api=1' +
                    `&destination=${lat.toFixed(6)},${lon.toFixed(6)}&travelmode=driving`;
                window.open(url, '_blank', 'noopener');
            }));
        });
    }, []);
    // Remove listeners on unmount; the guard above keeps the popup
    // action from duplicating when the widget remounts on the same view.
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => clearHandles, []);
    return ((_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a.length) > 0
        ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: onActiveViewChange })
        : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9nb29nbGUtZGlyZWN0aW9ucy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5EOzs7Ozs7Ozs7R0FTRztBQUNtRDtBQUNjO0FBQ1I7QUFDVDtBQUVuRCxNQUFNLFNBQVMsR0FBRyx1QkFBdUI7QUFFekMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUE4QixFQUFFLEVBQUU7O0lBQ2hELE1BQU0sVUFBVSxHQUFHLDRDQUFLLENBQUMsTUFBTSxDQUFrQixFQUFFLENBQUM7SUFFcEQsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO1FBQ3hCLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFBQyxDQUFDLENBQUMsTUFBTSxFQUFFO1FBQUMsQ0FBQztRQUFD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QUFDLEVBQ3hDLGtCQUFrQixFQUFFLGtCQUFrQixHQUN0QztRQUNKLENBQUMsQ0FBQyxJQUFJO0FBQ1YsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9jb3JlL3JlYWN0aXZlVXRpbHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvc3VwcG9ydC9hY3Rpb25zL0FjdGlvbkJ1dHRvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2dvb2dsZS1kaXJlY3Rpb25zL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfY29yZV9yZWFjdGl2ZVV0aWxzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfc3VwcG9ydF9hY3Rpb25zX0FjdGlvbkJ1dHRvbl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKlxuICogR29vZ2xlIERpcmVjdGlvbnMgcG9wdXAgYWN0aW9uIOKAlCBydW50aW1lLlxuICpcbiAqIEludmlzaWJsZSBjb21wYW5pb24gd2lkZ2V0OiBiaW5kcyB0byBvbmUgbWFwIHdpZGdldCBhbmQgYWRkcyBhXG4gKiBcIkRpcmVjdGlvbnNcIiBidXR0b24gdG8gdGhlIG1hcCBwb3B1cCdzIGFjdGlvbiBiYXIuIFRhcHBpbmcgaXQgb3BlbnNcbiAqIEdvb2dsZSBNYXBzIGRyaXZpbmcgZGlyZWN0aW9ucyB0byB0aGUgc2VsZWN0ZWQgZmVhdHVyZSDigJQgdGhlIGV4YWN0XG4gKiBjb29yZGluYXRlcyBmb3IgcG9pbnQgZmVhdHVyZXMsIHRoZSB0YXBwZWQgbG9jYXRpb24gZm9yIGxpbmVzIGFuZFxuICogcG9seWdvbnMuIFVzZXMgdGhlIHB1YmxpYyBNYXBzIFVSTCBzY2hlbWUgKG5vIEFQSSBrZXkpOyBvbiBwaG9uZXMgdGhlXG4gKiBsaW5rIG9wZW5zIHRoZSBuYXRpdmUgR29vZ2xlIE1hcHMgYXBwIHN0cmFpZ2h0IGludG8gbmF2aWdhdGlvbi5cbiAqL1xuaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgdHlwZSBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tICdlc3JpL3N1cHBvcnQvYWN0aW9ucy9BY3Rpb25CdXR0b24nXG5pbXBvcnQgeyBvbiwgd2F0Y2ggfSBmcm9tICdlc3JpL2NvcmUvcmVhY3RpdmVVdGlscydcblxuY29uc3QgQUNUSU9OX0lEID0gJ3dyaS1nb29nbGUtZGlyZWN0aW9ucydcblxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczx1bmtub3duPikgPT4ge1xuICBjb25zdCBoYW5kbGVzUmVmID0gUmVhY3QudXNlUmVmPF9fZXNyaS5IYW5kbGVbXT4oW10pXG5cbiAgY29uc3QgY2xlYXJIYW5kbGVzID0gKCkgPT4ge1xuICAgIGhhbmRsZXNSZWYuY3VycmVudC5mb3JFYWNoKChoKSA9PiB7IHRyeSB7IGgucmVtb3ZlKCkgfSBjYXRjaCAoZSkge30gfSlcbiAgICBoYW5kbGVzUmVmLmN1cnJlbnQgPSBbXVxuICB9XG5cbiAgY29uc3Qgb25BY3RpdmVWaWV3Q2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICBjbGVhckhhbmRsZXMoKVxuICAgIGlmICgham12Py52aWV3KSByZXR1cm5cbiAgICBjb25zdCB2aWV3ID0gam12LnZpZXcgYXMgX19lc3JpLk1hcFZpZXdcblxuICAgIHZpZXcud2hlbigoKSA9PiB7XG4gICAgICAvLyB2aWV3LnBvcHVwIGlzIGEgbGF6eSBzdHViIHVudGlsIHRoZSBwb3B1cCBmaXJzdCBvcGVucyAoNC4yNyspOlxuICAgICAgLy8gcG9wdXAuYWN0aW9ucyBkb2Vzbid0IGV4aXN0IHlldCwgc28gd2F0Y2ggZm9yIHRoZSByZWFsIGluc3RhbmNlIGFuZFxuICAgICAgLy8gbGV0IHJlYWN0aXZlVXRpbHMub24gcmUtYXR0YWNoIHRoZSBsaXN0ZW5lciB3aGVuIGl0IGFwcGVhcnMuXG4gICAgICBoYW5kbGVzUmVmLmN1cnJlbnQucHVzaChcbiAgICAgICAgd2F0Y2goKCkgPT4gKHZpZXcucG9wdXAgYXMgYW55KT8uYWN0aW9ucywgKGFjdHM6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChhY3RzPy5zb21lICYmICFhY3RzLnNvbWUoKGE6IGFueSkgPT4gYS5pZCA9PT0gQUNUSU9OX0lEKSkge1xuICAgICAgICAgICAgYWN0cy5wdXNoKG5ldyBBY3Rpb25CdXR0b24oe1xuICAgICAgICAgICAgICBpZDogQUNUSU9OX0lELFxuICAgICAgICAgICAgICB0aXRsZTogJ0RpcmVjdGlvbnMnLFxuICAgICAgICAgICAgICBpY29uOiAnY2FyJyxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZXNyaS1pY29uLWRpcmVjdGlvbnMnLFxuICAgICAgICAgICAgfSBhcyBhbnkpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgeyBpbml0aWFsOiB0cnVlIH0pLFxuICAgICAgICBvbigoKSA9PiB2aWV3LnBvcHVwIGFzIGFueSwgJ3RyaWdnZXItYWN0aW9uJywgKGV2dDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGV2dD8uYWN0aW9uPy5pZCAhPT0gQUNUSU9OX0lEKSByZXR1cm5cbiAgICAgICAgICBjb25zdCBwb3B1cCA9IHZpZXcucG9wdXAgYXMgX19lc3JpLlBvcHVwXG4gICAgICAgICAgY29uc3QgZ2VvbSA9IHBvcHVwLnNlbGVjdGVkRmVhdHVyZT8uZ2VvbWV0cnlcbiAgICAgICAgICBjb25zdCBwdCA9IChnZW9tICYmIGdlb20udHlwZSA9PT0gJ3BvaW50JylcbiAgICAgICAgICAgID8gZ2VvbSBhcyBfX2VzcmkuUG9pbnRcbiAgICAgICAgICAgIDogcG9wdXAubG9jYXRpb25cbiAgICAgICAgICAvLyBQb2ludC5sYXRpdHVkZS9sb25naXR1ZGUgYXV0by1jb252ZXJ0IGZyb20gV2ViIE1lcmNhdG9yXG4gICAgICAgICAgY29uc3QgbGF0ID0gcHQ/LmxhdGl0dWRlXG4gICAgICAgICAgY29uc3QgbG9uID0gcHQ/LmxvbmdpdHVkZVxuICAgICAgICAgIGlmIChsYXQgPT0gbnVsbCB8fCBsb24gPT0gbnVsbCkgcmV0dXJuXG4gICAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9kaXIvP2FwaT0xJyArXG4gICAgICAgICAgICBgJmRlc3RpbmF0aW9uPSR7bGF0LnRvRml4ZWQoNil9LCR7bG9uLnRvRml4ZWQoNil9JnRyYXZlbG1vZGU9ZHJpdmluZ2BcbiAgICAgICAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnLCAnbm9vcGVuZXInKVxuICAgICAgICB9KVxuICAgICAgKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIC8vIFJlbW92ZSBsaXN0ZW5lcnMgb24gdW5tb3VudDsgdGhlIGd1YXJkIGFib3ZlIGtlZXBzIHRoZSBwb3B1cFxuICAvLyBhY3Rpb24gZnJvbSBkdXBsaWNhdGluZyB3aGVuIHRoZSB3aWRnZXQgcmVtb3VudHMgb24gdGhlIHNhbWUgdmlldy5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IGNsZWFySGFuZGxlcywgW10pXG5cbiAgcmV0dXJuIHByb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoID4gMFxuICAgID8gPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHNbMF19XG4gICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17b25BY3RpdmVWaWV3Q2hhbmdlfVxuICAgICAgLz5cbiAgICA6IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9