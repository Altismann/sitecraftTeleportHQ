/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./locales lazy recursive ^\\.\\/.*\\.json$":
/*!*******************************************************!*\
  !*** ./locales/ lazy ^\.\/.*\.json$ namespace object ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en.json": [
		"./locales/en.json",
		"locales_en_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./locales lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst NotFound = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-2458e1769bc4b2a3\" + \" \" + \"not-found-container1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            className: \"jsx-2458e1769bc4b2a3\",\n                            children: \"404 - Not Found\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/sitecraftTeleportHQ/pages/404.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/sitecraftTeleportHQ/pages/404.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"jsx-2458e1769bc4b2a3\",\n                        children: \"OOPS! PAGE NOT FOUND\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/sitecraftTeleportHQ/pages/404.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-2458e1769bc4b2a3\" + \" \" + \"not-found-container2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"jsx-2458e1769bc4b2a3\" + \" \" + \"not-found-text2\",\n                            children: \"404\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/sitecraftTeleportHQ/pages/404.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/sitecraftTeleportHQ/pages/404.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-2458e1769bc4b2a3\" + \" \" + \"not-found-container3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"jsx-2458e1769bc4b2a3\" + \" \" + \"not-found-text3\",\n                            children: \"WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/sitecraftTeleportHQ/pages/404.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/sitecraftTeleportHQ/pages/404.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/sitecraftTeleportHQ/pages/404.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"2458e1769bc4b2a3\",\n                children: \".not-found-container1.jsx-2458e1769bc4b2a3{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:auto;min-height:100vh;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.not-found-container2.jsx-2458e1769bc4b2a3{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.not-found-text2.jsx-2458e1769bc4b2a3{color:rgb(38,38,38);font-size:252px;margin-top:-20px;font-weight:900;margin-bottom:-20px;letter-spacing:-20px}.not-found-container3.jsx-2458e1769bc4b2a3{width:421px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.not-found-text3.jsx-2458e1769bc4b2a3{text-align:center;font-weight:400}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);\nasync function getStaticProps(context) {\n    const messages = (await __webpack_require__(\"./locales lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\" + context.locale + \".json\")).default;\n    return {\n        props: {\n            messages,\n            ...context\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy80MDQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlCO0FBQ0c7QUFFZTtBQUUzQyxNQUFNRyxRQUFRLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO0lBQzFCLHFCQUNFOzswQkFDRSw4REFBQ0MsS0FBRzswREFBVyxzQkFBc0I7O2tDQUNuQyw4REFBQ0osa0RBQUk7a0NBQ0gsNEVBQUNLLE9BQUs7O3NDQUFDLGlCQUFlOzs7OztxQ0FBUTs7Ozs7aUNBQ3pCO2tDQUNQLDhEQUFDQyxJQUFFOztrQ0FBQyxzQkFBb0I7Ozs7O2lDQUFLO2tDQUM3Qiw4REFBQ0YsS0FBRztrRUFBVyxzQkFBc0I7a0NBQ25DLDRFQUFDRyxJQUFFO3NFQUFXLGlCQUFpQjtzQ0FBQyxLQUFHOzs7OztxQ0FBSzs7Ozs7aUNBQ3BDO2tDQUNOLDhEQUFDSCxLQUFHO2tFQUFXLHNCQUFzQjtrQ0FDbkMsNEVBQUNJLElBQUU7c0VBQVcsaUJBQWlCO3NDQUFDLHdEQUVoQzs7Ozs7cUNBQUs7Ozs7O2lDQUNEOzs7Ozs7eUJBQ0Y7Ozs7OztvQkF3Q0wsQ0FDSjtBQUNILENBQUM7QUFFRCxpRUFBZU4sUUFBUTtBQUVoQixlQUFlTyxjQUFjLENBQUNDLE9BQU8sRUFBRTtJQUM1QyxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLGtFQUFPLElBQVcsR0FBR0QsT0FBTyxDQUFDRSxNQUFNLEdBQUcsT0FBTyxDQUFDLEVBQ25FQyxPQUFPO0lBQ1YsT0FBTztRQUNMVixLQUFLLEVBQUU7WUFDTFEsUUFBUTtZQUNSLEdBQUdELE9BQU87U0FDWDtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhbGkvLi9wYWdlcy80MDQuanM/M2VkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9ucyB9IGZyb20gJ25leHQtaW50bCdcblxuY29uc3QgTm90Rm91bmQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3QtZm91bmQtY29udGFpbmVyMVwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+NDA0IC0gTm90IEZvdW5kPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8aDM+T09QUyEgUEFHRSBOT1QgRk9VTkQ8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdC1mb3VuZC1jb250YWluZXIyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm5vdC1mb3VuZC10ZXh0MlwiPjQwNDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdC1mb3VuZC1jb250YWluZXIzXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5vdC1mb3VuZC10ZXh0M1wiPlxuICAgICAgICAgICAgV0UgQVJFIFNPUlJZLCBCVVQgVEhFIFBBR0UgWU9VIFJFUVVFU1RFRCBXQVMgTk9UIEZPVU5EXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm5vdC1mb3VuZC1jb250YWluZXIxIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubm90LWZvdW5kLWNvbnRhaW5lcjIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3QtZm91bmQtdGV4dDIge1xuICAgICAgICAgICAgY29sb3I6IHJnYigzOCwgMzgsIDM4KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjUycHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdC1mb3VuZC1jb250YWluZXIzIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MjFweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubm90LWZvdW5kLXRleHQzIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBtZXNzYWdlcyA9IChhd2FpdCBpbXBvcnQoJy9sb2NhbGVzLycgKyBjb250ZXh0LmxvY2FsZSArICcuanNvbicpKVxuICAgIC5kZWZhdWx0XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgLi4uY29udGV4dCxcbiAgICB9LFxuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwidXNlVHJhbnNsYXRpb25zIiwiTm90Rm91bmQiLCJwcm9wcyIsImRpdiIsInRpdGxlIiwiaDMiLCJoMSIsImgyIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwibWVzc2FnZXMiLCJsb2NhbGUiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/404.js\n");

/***/ }),

/***/ "next-intl":
/*!****************************!*\
  !*** external "next-intl" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/404.js"));
module.exports = __webpack_exports__;

})();