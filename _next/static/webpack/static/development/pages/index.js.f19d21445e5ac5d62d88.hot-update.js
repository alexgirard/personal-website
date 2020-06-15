webpackHotUpdate("static/development/pages/index.js",{

/***/ "./windows/Tabs.js":
/*!*************************!*\
  !*** ./windows/Tabs.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Tab */ \"./components/Tab.js\");\n/* harmony import */ var _components_MobileIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MobileIcon */ \"./components/MobileIcon.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgirard/Documents/Git/alexgirard/windows/Tabs.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Tabs = function Tabs(_ref) {\n  var tabs = _ref.tabs,\n      minimized = _ref.minimized,\n      expandTab = _ref.expandTab,\n      globalZ = _ref.globalZ;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    className: \"fixed-bottom m-0 flex-wrap-reverse d-none d-sm-flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(minimized, function (title, index) {\n    return __jsx(_components_Tab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      first: index === 0,\n      z: globalZ + lodash__WEBPACK_IMPORTED_MODULE_1___default.a.size(minimized) - index,\n      title: title,\n      fg: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(tabs, ['title', title]), \"fg\"),\n      expandTab: expandTab,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }\n    });\n  })), __jsx(\"div\", {\n    className: \"p-3 w-100 d-flex justify-content-between d-sm-none\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(_components_MobileIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, \"test\"), __jsx(_components_MobileIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \"test\"), __jsx(_components_MobileIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, \"test\"), __jsx(_components_MobileIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, \"test\")));\n};\n\n_c = Tabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tabs);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tabs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93aW5kb3dzL1RhYnMuanM/NTY2NCJdLCJuYW1lcyI6WyJUYWJzIiwidGFicyIsIm1pbmltaXplZCIsImV4cGFuZFRhYiIsImdsb2JhbFoiLCJfIiwibWFwIiwidGl0bGUiLCJpbmRleCIsInNpemUiLCJnZXQiLCJmaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsTUFBU0MsU0FBVCxRQUFTQSxTQUFUO0FBQUEsTUFBb0JDLFNBQXBCLFFBQW9CQSxTQUFwQjtBQUFBLE1BQStCQyxPQUEvQixRQUErQkEsT0FBL0I7QUFBQSxTQUNYLG1FQUVFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMscURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyw2Q0FBQyxDQUFDQyxHQUFGLENBQU1KLFNBQU4sRUFBaUIsVUFBQ0ssS0FBRCxFQUFRQyxLQUFSO0FBQUEsV0FDaEIsTUFBQyx1REFBRDtBQUFLLFdBQUssRUFBRUEsS0FBSyxLQUFLLENBQXRCO0FBQXlCLE9BQUMsRUFBRUosT0FBTyxHQUFHQyw2Q0FBQyxDQUFDSSxJQUFGLENBQU9QLFNBQVAsQ0FBVixHQUE4Qk0sS0FBMUQ7QUFBaUUsV0FBSyxFQUFFRCxLQUF4RTtBQUErRSxRQUFFLEVBQUVGLDZDQUFDLENBQUNLLEdBQUYsQ0FBTUwsNkNBQUMsQ0FBQ00sSUFBRixDQUFPVixJQUFQLEVBQWEsQ0FBQyxPQUFELEVBQVVNLEtBQVYsQ0FBYixDQUFOLEVBQXNDLElBQXRDLENBQW5GO0FBQWdJLGVBQVMsRUFBRUosU0FBM0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURnQjtBQUFBLEdBQWpCLENBREgsQ0FGRixFQVNFO0FBQUssYUFBUyxFQUFDLG9EQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsRUFJRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixDQVRGLENBRFc7QUFBQSxDQUFiOztLQUFNSCxJO0FBbUJTQSxtRUFBZiIsImZpbGUiOiIuL3dpbmRvd3MvVGFicy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IFRhYiBmcm9tICcuLi9jb21wb25lbnRzL1RhYic7XG5pbXBvcnQgTW9iaWxlSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL01vYmlsZUljb24nO1xuXG5jb25zdCBUYWJzID0gKHsgdGFicywgbWluaW1pemVkLCBleHBhbmRUYWIsIGdsb2JhbFogfSkgPT4gKFxuICA8PlxuICAgIHsvKiBEZXNrdG9wICovfVxuICAgIDxSb3cgY2xhc3NOYW1lPVwiZml4ZWQtYm90dG9tIG0tMCBmbGV4LXdyYXAtcmV2ZXJzZSBkLW5vbmUgZC1zbS1mbGV4XCI+XG4gICAgICB7Xy5tYXAobWluaW1pemVkLCAodGl0bGUsIGluZGV4KSA9PiAoXG4gICAgICAgIDxUYWIgZmlyc3Q9e2luZGV4ID09PSAwfSB6PXtnbG9iYWxaICsgXy5zaXplKG1pbmltaXplZCkgLSBpbmRleH0gdGl0bGU9e3RpdGxlfSBmZz17Xy5nZXQoXy5maW5kKHRhYnMsIFsndGl0bGUnLCB0aXRsZV0pLCBcImZnXCIpfSBleHBhbmRUYWI9e2V4cGFuZFRhYn0gLz5cbiAgICAgICkpfVxuICAgIDwvUm93PlxuXG4gICAgey8qIE1vYmlsZSAqL31cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyB3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gZC1zbS1ub25lXCI+XG4gICAgICA8TW9iaWxlSWNvbj50ZXN0PC9Nb2JpbGVJY29uPlxuICAgICAgPE1vYmlsZUljb24+dGVzdDwvTW9iaWxlSWNvbj5cbiAgICAgIDxNb2JpbGVJY29uPnRlc3Q8L01vYmlsZUljb24+XG4gICAgICA8TW9iaWxlSWNvbj50ZXN0PC9Nb2JpbGVJY29uPlxuICAgIDwvZGl2PlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./windows/Tabs.js\n");

/***/ })

})