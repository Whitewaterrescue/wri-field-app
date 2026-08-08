System.register(["jimu-core/emotion","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
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
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/checkin-status/src/runtime/widget.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");

/**
 * Check-In Status button — runtime.
 *
 * Invisible layout slot (1px in the header). While checked in, a single
 * compact button renders IN the header where the "WRI Field App" title sits
 * (the title widget is hidden while the button is visible and restored when
 * it goes away): "● 3h 12m — CHECK OUT". First tap arms it (CONFIRM
 * CHECK-OUT?, auto-reverts after 5s), second tap checks out via the
 * check-in app's JSON API.
 *
 * State flow:
 *  - The embedded wri-check-in survey posts {type:'wri-checkin', action,
 *    name, location, time} to window.top on a successful submit. A check-in
 *    saves device state and jumps to the Home page; a check-out clears it.
 *  - State persists in localStorage and is reconciled against ?api=status on
 *    startup (checked out elsewhere → clears; still checked in while landing
 *    on the Check In page → jump to Home).
 *  - On site longer than REMIND_MS → amber pulse as a check-out reminder.
 */

const STORAGE_KEY = 'wri_checkin_state';
const DEFAULT_URL = 'https://script.google.com/macros/s/AKfycbyR4Jppf7ddQ4N1rtNkD-Hhrntm9iYmLuC16jWPwAiv9vulbDCTWquogksW_WSzhMHT/exec';
const REMIND_MS = 10 * 60 * 60 * 1000; // amber reminder after 10h on site
const CONFIRM_MS = 5000; // armed CHECK OUT reverts after 5s
const CSS = `
.wri-ci-wrap{position:fixed;left:12px;top:0;height:67px;z-index:10050;display:flex;align-items:center;pointer-events:none;max-width:calc(100vw - 240px)}
@media(max-width:640px){.wri-ci-wrap{height:56px;left:8px;max-width:calc(100vw - 222px)}}
.wri-ci-hbtn{pointer-events:auto;display:flex;align-items:center;gap:8px;border:1px solid #EC2329;background:#1c1e21;color:#fff;border-radius:999px;padding:8px 14px;font-size:13px;font-weight:800;letter-spacing:.3px;cursor:pointer;white-space:nowrap;overflow:hidden;max-width:100%}
@media(max-width:640px){.wri-ci-hbtn{font-size:12px;padding:7px 10px;gap:5px;letter-spacing:0}}
.wri-ci-hbtn.armed{background:#EC2329}
.wri-ci-long{animation:wriCiPulse 1.6s infinite;border-color:#f59e0b}
@keyframes wriCiPulse{0%,100%{box-shadow:none}50%{box-shadow:0 0 14px rgba(245,158,11,.9)}}
.wri-ci-dot{width:9px;height:9px;border-radius:50%;background:#22c55e;box-shadow:0 0 6px #22c55e;flex:none}
@media(max-width:640px){.wri-ci-dot{display:none}}
.wri-ci-time{color:#e5e7eb;font-weight:600;flex:none}
.wri-ci-note{pointer-events:auto;background:#1c1e21;border:1px solid #3a3c3c;color:#e5e7eb;border-radius:999px;padding:8px 14px;font-size:13px;font-weight:600;white-space:nowrap}
`;
const loadState = () => {
    try {
        const s = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
        return s && s.name ? s : null;
    }
    catch (e) {
        return null;
    }
};
const saveState = (s) => {
    try {
        if (s)
            localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
        else
            localStorage.removeItem(STORAGE_KEY);
    }
    catch (e) { }
};
const fmtElapsed = (sinceIso) => {
    const ms = Date.now() - new Date(sinceIso).getTime();
    if (!isFinite(ms) || ms < 0)
        return '';
    const m = Math.floor(ms / 60000);
    const h = Math.floor(m / 60);
    return h > 0 ? `${h}h${m % 60}m` : `${m}m`;
};
const currentPageId = () => { var _a, _b; return (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appRuntimeInfo) === null || _b === void 0 ? void 0 : _b.currentPageId; };
const Widget = (props) => {
    const cfg = (props.config || {});
    const apiUrl = cfg.checkinUrl || DEFAULT_URL;
    const homePage = cfg.homePage || 'page_1';
    const checkinPage = cfg.checkinPage || 'page_10';
    const titleWidget = cfg.titleWidget || 'widget_10';
    const [state, setState] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(loadState);
    const [armed, setArmed] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [busy, setBusy] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [note, setNote] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('');
    const [, tick] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(0);
    const disarmTimer = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(null);
    const disarm = () => {
        if (disarmTimer.current) {
            clearTimeout(disarmTimer.current);
            disarmTimer.current = null;
        }
        setArmed(false);
    };
    const visible = !!state || !!note;
    // Swap with the header title: hide the title widget while the button is
    // visible, restore it when the button goes away (and on unmount).
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        const els = document.querySelectorAll(`[data-widgetid="${titleWidget}"]`);
        els.forEach(el => { el.style.visibility = visible ? 'hidden' : ''; });
        return () => els.forEach(el => { el.style.visibility = ''; });
    }, [visible, titleWidget]);
    // Re-render each minute so the elapsed time stays current.
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        const t = setInterval(() => tick(n => n + 1), 60000);
        return () => clearInterval(t);
    }, []);
    // Survey → app messages.
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        const onMsg = (e) => {
            const d = e.data;
            if (!d || d.type !== 'wri-checkin' || !d.name)
                return;
            if (d.action === 'checkin') {
                const s = {
                    name: String(d.name),
                    since: String(d.time || new Date().toISOString()),
                    location: String(d.location || '')
                };
                saveState(s);
                setState(s);
                setNote('');
                disarm();
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.jimuHistory.changePage(homePage);
            }
            else if (d.action === 'checkout') {
                saveState(null);
                setState(null);
                setNote('');
                disarm();
            }
        };
        window.addEventListener('message', onMsg);
        return () => window.removeEventListener('message', onMsg);
    }, [homePage]);
    // Startup reconciliation with the server (device state can be stale if
    // they checked out from another device or an admin cleared them).
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        const s = loadState();
        if (!s)
            return;
        fetch(`${apiUrl}?api=status&name=${encodeURIComponent(s.name)}`)
            .then(r => r.json())
            .then(j => {
            if (!j || !j.success)
                return;
            if (j.checkedIn) {
                const upd = { name: j.name || s.name, since: j.since || s.since, location: j.location || s.location };
                saveState(upd);
                setState(upd);
                if (currentPageId() === checkinPage)
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.jimuHistory.changePage(homePage);
            }
            else {
                saveState(null);
                setState(null);
            }
        })
            .catch(() => { }); // offline — keep device state
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => disarm, []);
    const onTap = () => {
        if (busy || !state)
            return;
        if (!armed) {
            setArmed(true);
            disarmTimer.current = setTimeout(() => setArmed(false), CONFIRM_MS);
            return;
        }
        disarm();
        setBusy(true);
        setNote('');
        fetch(`${apiUrl}?api=checkout&name=${encodeURIComponent(state.name)}`)
            .then(r => r.json())
            .then(j => {
            setBusy(false);
            if (j && (j.success || j.checkedIn === false)) {
                saveState(null);
                setState(null);
                setNote(j.success ? 'Checked out ✓' : 'Already checked out');
                setTimeout(() => setNote(''), 4000);
            }
            else {
                setNote((j && j.message) || 'Check-out failed — use the Check In page');
                setTimeout(() => setNote(''), 6000);
            }
        })
            .catch(() => {
            setBusy(false);
            setNote('Offline — try again later');
            setTimeout(() => setNote(''), 6000);
        });
    };
    if (!visible)
        return null;
    const long = state ? Date.now() - new Date(state.since).getTime() > REMIND_MS : false;
    // Portal to <body>: the widget's slot lives inside the header's stacking
    // context, and page embed iframes hit-test over anything leaking out of it.
    return jimu_core__WEBPACK_IMPORTED_MODULE_1__.ReactDOM.createPortal((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "wri-ci-wrap", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", { children: CSS }), state ? ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: 'wri-ci-hbtn' + (armed ? ' armed' : '') + (long ? ' wri-ci-long' : ''), disabled: busy, onClick: onTap, children: busy ? '…' : armed ? 'CONFIRM CHECK-OUT' : ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "wri-ci-dot" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "wri-ci-time", children: fmtElapsed(state.since) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "CHECK OUT" })] })) })) : ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "wri-ci-note", children: note }))] }), document.body);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaGVja2luLXN0YXR1cy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFDdUY7QUFXMUYsTUFBTSxXQUFXLEdBQUcsbUJBQW1CO0FBQ3ZDLE1BQU0sV0FBVyxHQUFHLGtIQUFrSDtBQUN0SSxNQUFNLFNBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLEVBQUMsbUNBQW1DO0FBQ3pFLE1BQU0sVUFBVSxHQUFHLElBQUksRUFBZSxtQ0FBbUM7QUFFekUsTUFBTSxHQUFHLEdBQUc7Ozs7Ozs7Ozs7OztDQVlYO0FBRUQsTUFBTSxTQUFTLEdBQUcsR0FBd0IsRUFBRTtJQUMxQyxJQUFJLENBQUM7UUFDSCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksTUFBTSxDQUFDO1FBQ2pFLE9BQU8sQ0FBQyxJQUFJLENB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YSxZQUFFLElBQUksR0FBTyxDQUMxQyxJQUNHLEVBQ04sUUFBUSxDQUFDLElBQUksQ0FDZDtBQUNILENBQUM7QUFFRCxpRUFBZSxNQUFNO0FBRWIsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NoZWNraW4tc3RhdHVzL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZW1vdGlvbl9yZWFjdF9qc3hfcnVudGltZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqXG4gKiBDaGVjay1JbiBTdGF0dXMgYnV0dG9uIOKAlCBydW50aW1lLlxuICpcbiAqIEludmlzaWJsZSBsYXlvdXQgc2xvdCAoMXB4IGluIHRoZSBoZWFkZXIpLiBXaGlsZSBjaGVja2VkIGluLCBhIHNpbmdsZVxuICogY29tcGFjdCBidXR0b24gcmVuZGVycyBJTiB0aGUgaGVhZGVyIHdoZXJlIHRoZSBcIldSSSBGaWVsZCBBcHBcIiB0aXRsZSBzaXRzXG4gKiAodGhlIHRpdGxlIHdpZGdldCBpcyBoaWRkZW4gd2hpbGUgdGhlIGJ1dHRvbiBpcyB2aXNpYmxlIGFuZCByZXN0b3JlZCB3aGVuXG4gKiBpdCBnb2VzIGF3YXkpOiBcIuKXjyAzaCAxMm0g4oCUIENIRUNLIE9VVFwiLiBGaXJzdCB0YXAgYXJtcyBpdCAoQ09ORklSTVxuICogQ0hFQ0stT1VUPywgYXV0by1yZXZlcnRzIGFmdGVyIDVzKSwgc2Vjb25kIHRhcCBjaGVja3Mgb3V0IHZpYSB0aGVcbiAqIGNoZWNrLWluIGFwcCdzIEpTT04gQVBJLlxuICpcbiAqIFN0YXRlIGZsb3c6XG4gKiAgLSBUaGUgZW1iZWRkZWQgd3JpLWNoZWNrLWluIHN1cnZleSBwb3N0cyB7dHlwZTond3JpLWNoZWNraW4nLCBhY3Rpb24sXG4gKiAgICBuYW1lLCBsb2NhdGlvbiwgdGltZX0gdG8gd2luZG93LnRvcCBvbiBhIHN1Y2Nlc3NmdWwgc3VibWl0LiBBIGNoZWNrLWluXG4gKiAgICBzYXZlcyBkZXZpY2Ugc3RhdGUgYW5kIGp1bXBzIHRvIHRoZSBIb21lIHBhZ2U7IGEgY2hlY2stb3V0IGNsZWFycyBpdC5cbiAqICAtIFN0YXRlIHBlcnNpc3RzIGluIGxvY2FsU3RvcmFnZSBhbmQgaXMgcmVjb25jaWxlZCBhZ2FpbnN0ID9hcGk9c3RhdHVzIG9uXG4gKiAgICBzdGFydHVwIChjaGVja2VkIG91dCBlbHNld2hlcmUg4oaSIGNsZWFyczsgc3RpbGwgY2hlY2tlZCBpbiB3aGlsZSBsYW5kaW5nXG4gKiAgICBvbiB0aGUgQ2hlY2sgSW4gcGFnZSDihpIganVtcCB0byBIb21lKS5cbiAqICAtIE9uIHNpdGUgbG9uZ2VyIHRoYW4gUkVNSU5EX01TIOKGkiBhbWJlciBwdWxzZSBhcyBhIGNoZWNrLW91dCByZW1pbmRlci5cbiAqL1xuaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NLCBnZXRBcHBTdG9yZSwgamltdUhpc3RvcnksIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXG5cbmludGVyZmFjZSBDb25maWcge1xuICBjaGVja2luVXJsPzogc3RyaW5nXG4gIGhvbWVQYWdlPzogc3RyaW5nXG4gIGNoZWNraW5QYWdlPzogc3RyaW5nXG4gIHRpdGxlV2lkZ2V0Pzogc3RyaW5nXG59XG5cbmludGVyZmFjZSBDaGVja2luU3RhdGUgeyBuYW1lOiBzdHJpbmc7IHNpbmNlOiBzdHJpbmc7IGxvY2F0aW9uPzogc3RyaW5nIH1cblxuY29uc3QgU1RPUkFHRV9LRVkgPSAnd3JpX2NoZWNraW5fc3RhdGUnXG5jb25zdCBERUZBVUxUX1VSTCA9ICdodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL0FLZnljYnlSNEpwcGY3ZGRRNE4xcnROa0QtSGhybnRtOWlZbUx1QzE2aldQd0Fpdjl2dWxiRENUV3F1b2drc1dfV1N6aE1IVC9leGVjJ1xuY29uc3QgUkVNSU5EX01TID0gMTAgKiA2MCAqIDYwICogMTAwMCAvLyBhbWJlciByZW1pbmRlciBhZnRlciAxMGggb24gc2l0ZVxuY29uc3QgQ09ORklSTV9NUyA9IDUwMDAgICAgICAgICAgICAgICAvLyBhcm1lZCBDSEVDSyBPVVQgcmV2ZXJ0cyBhZnRlciA1c1xuXG5jb25zdCBDU1MgPSBgXG4ud3JpLWNpLXdyYXB7cG9zaXRpb246Zml4ZWQ7bGVmdDoxMnB4O3RvcDowO2hlaWdodDo2N3B4O3otaW5kZXg6MTAwNTA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtwb2ludGVyLWV2ZW50czpub25lO21heC13aWR0aDpjYWxjKDEwMHZ3IC0gMjQwcHgpfVxuQG1lZGlhKG1heC13aWR0aDo2NDBweCl7LndyaS1jaS13cmFwe2hlaWdodDo1NnB4O2xlZnQ6OHB4O21heC13aWR0aDpjYWxjKDEwMHZ3IC0gMjIycHgpfX1cbi53cmktY2ktaGJ0bntwb2ludGVyLWV2ZW50czphdXRvO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjhweDtib3JkZXI6MXB4IHNvbGlkICNFQzIzMjk7YmFja2dyb3VuZDojMWMxZTIxO2NvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo5OTlweDtwYWRkaW5nOjhweCAxNHB4O2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjgwMDtsZXR0ZXItc3BhY2luZzouM3B4O2N1cnNvcjpwb2ludGVyO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47bWF4LXdpZHRoOjEwMCV9XG5AbWVkaWEobWF4LXdpZHRoOjY0MHB4KXsud3JpLWNpLWhidG57Zm9udC1zaXplOjEycHg7cGFkZGluZzo3cHggMTBweDtnYXA6NXB4O2xldHRlci1zcGFjaW5nOjB9fVxuLndyaS1jaS1oYnRuLmFybWVke2JhY2tncm91bmQ6I0VDMjMyOX1cbi53cmktY2ktbG9uZ3thbmltYXRpb246d3JpQ2lQdWxzZSAxLjZzIGluZmluaXRlO2JvcmRlci1jb2xvcjojZjU5ZTBifVxuQGtleWZyYW1lcyB3cmlDaVB1bHNlezAlLDEwMCV7Ym94LXNoYWRvdzpub25lfTUwJXtib3gtc2hhZG93OjAgMCAxNHB4IHJnYmEoMjQ1LDE1OCwxMSwuOSl9fVxuLndyaS1jaS1kb3R7d2lkdGg6OXB4O2hlaWdodDo5cHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDojMjJjNTVlO2JveC1zaGFkb3c6MCAwIDZweCAjMjJjNTVlO2ZsZXg6bm9uZX1cbkBtZWRpYShtYXgtd2lkdGg6NjQwcHgpey53cmktY2ktZG90e2Rpc3BsYXk6bm9uZX19XG4ud3JpLWNpLXRpbWV7Y29sb3I6I2U1ZTdlYjtmb250LXdlaWdodDo2MDA7ZmxleDpub25lfVxuLndyaS1jaS1ub3Rle3BvaW50ZXItZXZlbnRzOmF1dG87YmFja2dyb3VuZDojMWMxZTIxO2JvcmRlcjoxcHggc29saWQgIzNhM2MzYztjb2xvcjojZTVlN2ViO2JvcmRlci1yYWRpdXM6OTk5cHg7cGFkZGluZzo4cHggMTRweDtmb250LXNpemU6MTNweDtmb250LXdlaWdodDo2MDA7d2hpdGUtc3BhY2U6bm93cmFwfVxuYFxuXG5jb25zdCBsb2FkU3RhdGUgPSAoKTogQ2hlY2tpblN0YXRlIHwgbnVsbCA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpIHx8ICdudWxsJylcbiAgICByZXR1cm4gcyAmJiBzLm5hbWUgPyBzIDogbnVsbFxuICB9IGNhdGNoIChlKSB7IHJldHVybiBudWxsIH1cbn1cbmNvbnN0IHNhdmVTdGF0ZSA9IChzOiBDaGVja2luU3RhdGUgfCBudWxsKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKHMpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShzKSlcbiAgICBlbHNlIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFNUT1JBR0VfS0VZKVxuICB9IGNhdGNoIChlKSB7fVxufVxuXG5jb25zdCBmbXRFbGFwc2VkID0gKHNpbmNlSXNvOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBtcyA9IERhdGUubm93KCkgLSBuZXcgRGF0ZShzaW5jZUlzbykuZ2V0VGltZSgpXG4gIGlmICghaXNGaW5pdGUobXMpIHx8IG1zIDwgMCkgcmV0dXJuICcnXG4gIGNvbnN0IG0gPSBNYXRoLmZsb29yKG1zIC8gNjAwMDApXG4gIGNvbnN0IGggPSBNYXRoLmZsb29yKG0gLyA2MClcbiAgcmV0dXJuIGggPiAwID8gYCR7aH1oJHttICUgNjB9bWAgOiBgJHttfW1gXG59XG5cbmNvbnN0IGN1cnJlbnRQYWdlSWQgPSAoKTogc3RyaW5nID0+XG4gIChnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkgYXMgYW55KT8uYXBwUnVudGltZUluZm8/LmN1cnJlbnRQYWdlSWRcblxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxDb25maWc+KSA9PiB7XG4gIGNvbnN0IGNmZyA9IChwcm9wcy5jb25maWcgfHwge30pIGFzIENvbmZpZ1xuICBjb25zdCBhcGlVcmwgPSBjZmcuY2hlY2tpblVybCB8fCBERUZBVUxUX1VSTFxuICBjb25zdCBob21lUGFnZSA9IGNmZy5ob21lUGFnZSB8fCAncGFnZV8xJ1xuICBjb25zdCBjaGVja2luUGFnZSA9IGNmZy5jaGVja2luUGFnZSB8fCAncGFnZV8xMCdcbiAgY29uc3QgdGl0bGVXaWRnZXQgPSBjZmcudGl0bGVXaWRnZXQgfHwgJ3dpZGdldF8xMCdcblxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlPENoZWNraW5TdGF0ZSB8IG51bGw+KGxvYWRTdGF0ZSlcbiAgY29uc3QgW2FybWVkLCBzZXRBcm1lZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2J1c3ksIHNldEJ1c3ldID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCBbLCB0aWNrXSA9IFJlYWN0LnVzZVN0YXRlKDApXG4gIGNvbnN0IGRpc2FybVRpbWVyID0gUmVhY3QudXNlUmVmPGFueT4obnVsbClcblxuICBjb25zdCBkaXNhcm0gPSAoKSA9PiB7XG4gICAgaWYgKGRpc2FybVRpbWVyLmN1cnJlbnQpIHsgY2xlYXJUaW1lb3V0KGRpc2FybVRpbWVyLmN1cnJlbnQpOyBkaXNhcm1UaW1lci5jdXJyZW50ID0gbnVsbCB9XG4gICAgc2V0QXJtZWQoZmFsc2UpXG4gIH1cblxuICBjb25zdCB2aXNpYmxlID0gISFzdGF0ZSB8fCAhIW5vdGVcblxuICAvLyBTd2FwIHdpdGggdGhlIGhlYWRlciB0aXRsZTogaGlkZSB0aGUgdGl0bGUgd2lkZ2V0IHdoaWxlIHRoZSBidXR0b24gaXNcbiAgLy8gdmlzaWJsZSwgcmVzdG9yZSBpdCB3aGVuIHRoZSBidXR0b24gZ29lcyBhd2F5IChhbmQgb24gdW5tb3VudCkuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oYFtkYXRhLXdpZGdldGlkPVwiJHt0aXRsZVdpZGdldH1cIl1gKVxuICAgIGVscy5mb3JFYWNoKGVsID0+IHsgZWwuc3R5bGUudmlzaWJpbGl0eSA9IHZpc2libGUgPyAnaGlkZGVuJyA6ICcnIH0pXG4gICAgcmV0dXJuICgpID0+IGVscy5mb3JFYWNoKGVsID0+IHsgZWwuc3R5bGUudmlzaWJpbGl0eSA9ICcnIH0pXG4gIH0sIFt2aXNpYmxlLCB0aXRsZVdpZGdldF0pXG5cbiAgLy8gUmUtcmVuZGVyIGVhY2ggbWludXRlIHNvIHRoZSBlbGFwc2VkIHRpbWUgc3RheXMgY3VycmVudC5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0ID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGljayhuID0+IG4gKyAxKSwgNjAwMDApXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodClcbiAgfSwgW10pXG5cbiAgLy8gU3VydmV5IOKGkiBhcHAgbWVzc2FnZXMuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb25Nc2cgPSAoZTogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkID0gZS5kYXRhIGFzIGFueVxuICAgICAgaWYgKCFkIHx8IGQudHlwZSAhPT0gJ3dyaS1jaGVja2luJyB8fCAhZC5uYW1lKSByZXR1cm5cbiAgICAgIGlmIChkLmFjdGlvbiA9PT0gJ2NoZWNraW4nKSB7XG4gICAgICAgIGNvbnN0IHM6IENoZWNraW5TdGF0ZSA9IHtcbiAgICAgICAgICBuYW1lOiBTdHJpbmcoZC5uYW1lKSxcbiAgICAgICAgICBzaW5jZTogU3RyaW5nKGQudGltZSB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkpLFxuICAgICAgICAgIGxvY2F0aW9uOiBTdHJpbmcoZC5sb2NhdGlvbiB8fCAnJylcbiAgICAgICAgfVxuICAgICAgICBzYXZlU3RhdGUocyk7IHNldFN0YXRlKHMpOyBzZXROb3RlKCcnKTsgZGlzYXJtKClcbiAgICAgICAgamltdUhpc3RvcnkuY2hhbmdlUGFnZShob21lUGFnZSlcbiAgICAgIH0gZWxzZSBpZiAoZC5hY3Rpb24gPT09ICdjaGVja291dCcpIHtcbiAgICAgICAgc2F2ZVN0YXRlKG51bGwpOyBzZXRTdGF0ZShudWxsKTsgc2V0Tm90ZSgnJyk7IGRpc2FybSgpXG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Nc2cpXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Nc2cpXG4gIH0sIFtob21lUGFnZV0pXG5cbiAgLy8gU3RhcnR1cCByZWNvbmNpbGlhdGlvbiB3aXRoIHRoZSBzZXJ2ZXIgKGRldmljZSBzdGF0ZSBjYW4gYmUgc3RhbGUgaWZcbiAgLy8gdGhleSBjaGVja2VkIG91dCBmcm9tIGFub3RoZXIgZGV2aWNlIG9yIGFuIGFkbWluIGNsZWFyZWQgdGhlbSkuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcyA9IGxvYWRTdGF0ZSgpXG4gICAgaWYgKCFzKSByZXR1cm5cbiAgICBmZXRjaChgJHthcGlVcmx9P2FwaT1zdGF0dXMmbmFtZT0ke2VuY29kZVVSSUNvbXBvbmVudChzLm5hbWUpfWApXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4oaiA9PiB7XG4gICAgICAgIGlmICghaiB8fCAhai5zdWNjZXNzKSByZXR1cm5cbiAgICAgICAgaWYgKGouY2hlY2tlZEluKSB7XG4gICAgICAgICAgY29uc3QgdXBkOiBDaGVja2luU3RhdGUgPSB7IG5hbWU6IGoubmFtZSB8fCBzLm5hbWUsIHNpbmNlOiBqLnNpbmNlIHx8IHMuc2luY2UsIGxvY2F0aW9uOiBqLmxvY2F0aW9uIHx8IHMubG9jYXRpb24gfVxuICAgICAgICAgIHNhdmVTdGF0ZSh1cGQpOyBzZXRTdGF0ZSh1cGQpXG4gICAgICAgICAgaWYgKGN1cnJlbnRQYWdlSWQoKSA9PT0gY2hlY2tpblBhZ2UpIGppbXVIaXN0b3J5LmNoYW5nZVBhZ2UoaG9tZVBhZ2UpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2F2ZVN0YXRlKG51bGwpOyBzZXRTdGF0ZShudWxsKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHt9KSAvLyBvZmZsaW5lIOKAlCBrZWVwIGRldmljZSBzdGF0ZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IGRpc2FybSwgW10pXG5cbiAgY29uc3Qgb25UYXAgPSAoKSA9PiB7XG4gICAgaWYgKGJ1c3kgfHwgIXN0YXRlKSByZXR1cm5cbiAgICBpZiAoIWFybWVkKSB7XG4gICAgICBzZXRBcm1lZCh0cnVlKVxuICAgICAgZGlzYXJtVGltZXIuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4gc2V0QXJtZWQoZmFsc2UpLCBDT05GSVJNX01TKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGRpc2FybSgpOyBzZXRCdXN5KHRydWUpOyBzZXROb3RlKCcnKVxuICAgIGZldGNoKGAke2FwaVVybH0/YXBpPWNoZWNrb3V0Jm5hbWU9JHtlbmNvZGVVUklDb21wb25lbnQoc3RhdGUubmFtZSl9YClcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihqID0+IHtcbiAgICAgICAgc2V0QnVzeShmYWxzZSlcbiAgICAgICAgaWYgKGogJiYgKGouc3VjY2VzcyB8fCBqLmNoZWNrZWRJbiA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgc2F2ZVN0YXRlKG51bGwpOyBzZXRTdGF0ZShudWxsKVxuICAgICAgICAgIHNldE5vdGUoai5zdWNjZXNzID8gJ0NoZWNrZWQgb3V0IOKckycgOiAnQWxyZWFkeSBjaGVja2VkIG91dCcpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXROb3RlKCcnKSwgNDAwMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXROb3RlKChqICYmIGoubWVzc2FnZSkgfHwgJ0NoZWNrLW91dCBmYWlsZWQg4oCUIHVzZSB0aGUgQ2hlY2sgSW4gcGFnZScpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXROb3RlKCcnKSwgNjAwMClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHNldEJ1c3koZmFsc2UpXG4gICAgICAgIHNldE5vdGUoJ09mZmxpbmUg4oCUIHRyeSBhZ2FpbiBsYXRlcicpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Tm90ZSgnJyksIDYwMDApXG4gICAgICB9KVxuICB9XG5cbiAgaWYgKCF2aXNpYmxlKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IGxvbmcgPSBzdGF0ZSA/IERhdGUubm93KCkgLSBuZXcgRGF0ZShzdGF0ZS5zaW5jZSkuZ2V0VGltZSgpID4gUkVNSU5EX01TIDogZmFsc2VcblxuICAvLyBQb3J0YWwgdG8gPGJvZHk+OiB0aGUgd2lkZ2V0J3Mgc2xvdCBsaXZlcyBpbnNpZGUgdGhlIGhlYWRlcidzIHN0YWNraW5nXG4gIC8vIGNvbnRleHQsIGFuZCBwYWdlIGVtYmVkIGlmcmFtZXMgaGl0LXRlc3Qgb3ZlciBhbnl0aGluZyBsZWFraW5nIG91dCBvZiBpdC5cbiAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyaS1jaS13cmFwXCI+XG4gICAgICA8c3R5bGU+e0NTU308L3N0eWxlPlxuICAgICAge3N0YXRlID8gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXsnd3JpLWNpLWhidG4nICsgKGFybWVkID8gJyBhcm1lZCcgOiAnJykgKyAobG9uZyA/ICcgd3JpLWNpLWxvbmcnIDogJycpfVxuICAgICAgICAgIGRpc2FibGVkPXtidXN5fVxuICAgICAgICAgIG9uQ2xpY2s9e29uVGFwfVxuICAgICAgICA+XG4gICAgICAgICAge2J1c3kgPyAn4oCmJyA6IGFybWVkID8gJ0NPTkZJUk0gQ0hFQ0stT1VUJyA6IChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid3JpLWNpLWRvdFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndyaS1jaS10aW1lXCI+e2ZtdEVsYXBzZWQoc3RhdGUuc2luY2UpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+Q0hFQ0sgT1VUPC9zcGFuPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JpLWNpLW5vdGVcIj57bm90ZX08L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+LFxuICAgIGRvY3VtZW50LmJvZHlcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=