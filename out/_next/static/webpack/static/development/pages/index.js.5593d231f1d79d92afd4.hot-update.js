webpackHotUpdate("static/development/pages/index.js",{

/***/ "./windows/Tabs.js":
/*!*************************!*\
  !*** ./windows/Tabs.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Tab */ \"./components/Tab.js\");\n/* harmony import */ var _components_MobileIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MobileIcon */ \"./components/MobileIcon.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgirard/Documents/Git/alexgirard/windows/Tabs.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Tabs = function Tabs(_ref) {\n  var tabs = _ref.tabs,\n      minimized = _ref.minimized,\n      expandTab = _ref.expandTab,\n      globalZ = _ref.globalZ;\n  var appsPerRow = 4;\n\n  var mobileRows = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.range(0, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.floor(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.size(tabs) / appsPerRow));\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    className: \"fixed-bottom m-0 flex-wrap-reverse d-none d-sm-flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(minimized, function (title, index) {\n    return __jsx(_components_Tab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      first: index === 0,\n      z: globalZ + lodash__WEBPACK_IMPORTED_MODULE_1___default.a.size(minimized) - index,\n      title: title,\n      fg: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(tabs, ['title', title]), \"fg\"),\n      expandTab: expandTab,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }\n    });\n  })), __jsx(\"div\", {\n    className: \"w-100 pt-3 d-sm-none\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(mobileRows, function (rowMultiplier, index) {\n    var rowBegin = rowMultiplier * 4;\n\n    var apps = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.slice(tabs, rowBegin, rowBegin + 4);\n\n    return __jsx(\"div\", {\n      className: \"px-3 pb-3 d-flex justify-content-between flex-wrap\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 13\n      }\n    }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(apps, function (_ref2) {\n      var title = _ref2.title,\n          name = _ref2.name;\n      return __jsx(_components_MobileIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: name,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 17\n        }\n      }, name);\n    }));\n  })));\n};\n\n_c = Tabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tabs);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tabs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93aW5kb3dzL1RhYnMuanM/NTY2NCJdLCJuYW1lcyI6WyJUYWJzIiwidGFicyIsIm1pbmltaXplZCIsImV4cGFuZFRhYiIsImdsb2JhbFoiLCJhcHBzUGVyUm93IiwibW9iaWxlUm93cyIsIl8iLCJyYW5nZSIsImZsb29yIiwic2l6ZSIsIm1hcCIsInRpdGxlIiwiaW5kZXgiLCJnZXQiLCJmaW5kIiwicm93TXVsdGlwbGllciIsInJvd0JlZ2luIiwiYXBwcyIsInNsaWNlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE2QztBQUFBLE1BQTFDQyxJQUEwQyxRQUExQ0EsSUFBMEM7QUFBQSxNQUFwQ0MsU0FBb0MsUUFBcENBLFNBQW9DO0FBQUEsTUFBekJDLFNBQXlCLFFBQXpCQSxTQUF5QjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUN4RCxNQUFNQyxVQUFVLEdBQUcsQ0FBbkI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHQyw2Q0FBQyxDQUFDQyxLQUFGLENBQVEsQ0FBUixFQUFXRCw2Q0FBQyxDQUFDRSxLQUFGLENBQVFGLDZDQUFDLENBQUNHLElBQUYsQ0FBT1QsSUFBUCxJQUFlSSxVQUF2QixDQUFYLENBQW5COztBQUVBLFNBQ0UsbUVBRUUsTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQyxxREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLDZDQUFDLENBQUNJLEdBQUYsQ0FBTVQsU0FBTixFQUFpQixVQUFDVSxLQUFELEVBQVFDLEtBQVI7QUFBQSxXQUNoQixNQUFDLHVEQUFEO0FBQUssV0FBSyxFQUFFQSxLQUFLLEtBQUssQ0FBdEI7QUFBeUIsT0FBQyxFQUFFVCxPQUFPLEdBQUdHLDZDQUFDLENBQUNHLElBQUYsQ0FBT1IsU0FBUCxDQUFWLEdBQThCVyxLQUExRDtBQUFpRSxXQUFLLEVBQUVELEtBQXhFO0FBQStFLFFBQUUsRUFBRUwsNkNBQUMsQ0FBQ08sR0FBRixDQUFNUCw2Q0FBQyxDQUFDUSxJQUFGLENBQU9kLElBQVAsRUFBYSxDQUFDLE9BQUQsRUFBVVcsS0FBVixDQUFiLENBQU4sRUFBc0MsSUFBdEMsQ0FBbkY7QUFBZ0ksZUFBUyxFQUFFVCxTQUEzSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGdCO0FBQUEsR0FBakIsQ0FESCxDQUZGLEVBU0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSSw2Q0FBQyxDQUFDSSxHQUFGLENBQU1MLFVBQU4sRUFBa0IsVUFBQ1UsYUFBRCxFQUFnQkgsS0FBaEIsRUFBMEI7QUFDM0MsUUFBTUksUUFBUSxHQUFHRCxhQUFhLEdBQUcsQ0FBakM7O0FBQ0EsUUFBTUUsSUFBSSxHQUFHWCw2Q0FBQyxDQUFDWSxLQUFGLENBQVFsQixJQUFSLEVBQWNnQixRQUFkLEVBQXdCQSxRQUFRLEdBQUcsQ0FBbkMsQ0FBYjs7QUFFQSxXQUNFO0FBQUssZUFBUyxFQUFDLG9EQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1YsNkNBQUMsQ0FBQ0ksR0FBRixDQUFNTyxJQUFOLEVBQVk7QUFBQSxVQUFHTixLQUFILFNBQUdBLEtBQUg7QUFBQSxVQUFVUSxJQUFWLFNBQVVBLElBQVY7QUFBQSxhQUNYLE1BQUMsOERBQUQ7QUFBWSxhQUFLLEVBQUVBLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBMEJBLElBQTFCLENBRFc7QUFBQSxLQUFaLENBREgsQ0FERjtBQU9ELEdBWEEsQ0FESCxDQVRGLENBREY7QUEwQkQsQ0E5QkQ7O0tBQU1wQixJO0FBZ0NTQSxtRUFBZiIsImZpbGUiOiIuL3dpbmRvd3MvVGFicy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IFRhYiBmcm9tICcuLi9jb21wb25lbnRzL1RhYic7XG5pbXBvcnQgTW9iaWxlSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL01vYmlsZUljb24nO1xuXG5jb25zdCBUYWJzID0gKHsgdGFicywgbWluaW1pemVkLCBleHBhbmRUYWIsIGdsb2JhbFogfSkgPT4ge1xuICBjb25zdCBhcHBzUGVyUm93ID0gNDtcbiAgY29uc3QgbW9iaWxlUm93cyA9IF8ucmFuZ2UoMCwgXy5mbG9vcihfLnNpemUodGFicykgLyBhcHBzUGVyUm93KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIERlc2t0b3AgKi99XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImZpeGVkLWJvdHRvbSBtLTAgZmxleC13cmFwLXJldmVyc2UgZC1ub25lIGQtc20tZmxleFwiPlxuICAgICAgICB7Xy5tYXAobWluaW1pemVkLCAodGl0bGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFRhYiBmaXJzdD17aW5kZXggPT09IDB9IHo9e2dsb2JhbFogKyBfLnNpemUobWluaW1pemVkKSAtIGluZGV4fSB0aXRsZT17dGl0bGV9IGZnPXtfLmdldChfLmZpbmQodGFicywgWyd0aXRsZScsIHRpdGxlXSksIFwiZmdcIil9IGV4cGFuZFRhYj17ZXhwYW5kVGFifSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvUm93PlxuXG4gICAgICB7LyogTW9iaWxlICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBwdC0zIGQtc20tbm9uZVwiPlxuICAgICAgICB7Xy5tYXAobW9iaWxlUm93cywgKHJvd011bHRpcGxpZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgcm93QmVnaW4gPSByb3dNdWx0aXBsaWVyICogNDtcbiAgICAgICAgICBjb25zdCBhcHBzID0gXy5zbGljZSh0YWJzLCByb3dCZWdpbiwgcm93QmVnaW4gKyA0KTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMgcGItMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgIHtfLm1hcChhcHBzLCAoeyB0aXRsZSwgbmFtZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPE1vYmlsZUljb24gdGl0bGU9e25hbWV9PntuYW1lfTwvTW9iaWxlSWNvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFiczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./windows/Tabs.js\n");

/***/ })

})