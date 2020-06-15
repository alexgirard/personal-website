webpackHotUpdate("static/development/pages/index.js",{

/***/ "./windows/Tabs.js":
/*!*************************!*\
  !*** ./windows/Tabs.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tab */ \"./components/Tab.js\");\n/* harmony import */ var _components_MobileIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MobileIcon */ \"./components/MobileIcon.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgirard/Documents/Git/alexgirard/windows/Tabs.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Tabs = function Tabs(_ref) {\n  var tabs = _ref.tabs,\n      minimized = _ref.minimized,\n      expandTab = _ref.expandTab,\n      globalZ = _ref.globalZ;\n  var appsPerRow = 4;\n\n  var mobileRows = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.range(0, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.ceil(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.size(tabs) / appsPerRow));\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    className: \"fixed-bottom m-0 flex-wrap-reverse d-none d-sm-flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(minimized, function (title, index) {\n    return __jsx(_components_Tab__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      first: index === 0,\n      z: globalZ + lodash__WEBPACK_IMPORTED_MODULE_1___default.a.size(minimized) - index,\n      title: title,\n      fg: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(tabs, ['title', title]), \"fg\"),\n      expandTab: expandTab,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 11\n      }\n    });\n  })), __jsx(\"div\", {\n    className: \"w-100 pt-3 d-sm-none\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(mobileRows, function (rowMultiplier, index) {\n    var rowBegin = rowMultiplier * 4;\n\n    var apps = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.slice(tabs, rowBegin, rowBegin + 4);\n\n    return __jsx(\"div\", {\n      className: \"px-3 pb-3 d-flex justify-content-between flex-wrap\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }\n    }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(apps, function (_ref2) {\n      var title = _ref2.title,\n          name = _ref2.name;\n      return __jsx(_components_MobileIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        title: name,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 17\n        }\n      });\n    }));\n  })));\n};\n\n_c = Tabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tabs);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tabs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93aW5kb3dzL1RhYnMuanM/NTY2NCJdLCJuYW1lcyI6WyJUYWJzIiwidGFicyIsIm1pbmltaXplZCIsImV4cGFuZFRhYiIsImdsb2JhbFoiLCJhcHBzUGVyUm93IiwibW9iaWxlUm93cyIsIl8iLCJyYW5nZSIsImNlaWwiLCJzaXplIiwibWFwIiwidGl0bGUiLCJpbmRleCIsImdldCIsImZpbmQiLCJyb3dNdWx0aXBsaWVyIiwicm93QmVnaW4iLCJhcHBzIiwic2xpY2UiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTZDO0FBQUEsTUFBMUNDLElBQTBDLFFBQTFDQSxJQUEwQztBQUFBLE1BQXBDQyxTQUFvQyxRQUFwQ0EsU0FBb0M7QUFBQSxNQUF6QkMsU0FBeUIsUUFBekJBLFNBQXlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ3hELE1BQU1DLFVBQVUsR0FBRyxDQUFuQjs7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLDZDQUFDLENBQUNDLEtBQUYsQ0FBUSxDQUFSLEVBQVdELDZDQUFDLENBQUNFLElBQUYsQ0FBT0YsNkNBQUMsQ0FBQ0csSUFBRixDQUFPVCxJQUFQLElBQWVJLFVBQXRCLENBQVgsQ0FBbkI7O0FBRUEsU0FDRSxtRUFFRSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLHFEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsNkNBQUMsQ0FBQ0ksR0FBRixDQUFNVCxTQUFOLEVBQWlCLFVBQUNVLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFdBQ2hCLE1BQUMsdURBQUQ7QUFBSyxXQUFLLEVBQUVBLEtBQUssS0FBSyxDQUF0QjtBQUF5QixPQUFDLEVBQUVULE9BQU8sR0FBR0csNkNBQUMsQ0FBQ0csSUFBRixDQUFPUixTQUFQLENBQVYsR0FBOEJXLEtBQTFEO0FBQWlFLFdBQUssRUFBRUQsS0FBeEU7QUFBK0UsUUFBRSxFQUFFTCw2Q0FBQyxDQUFDTyxHQUFGLENBQU1QLDZDQUFDLENBQUNRLElBQUYsQ0FBT2QsSUFBUCxFQUFhLENBQUMsT0FBRCxFQUFVVyxLQUFWLENBQWIsQ0FBTixFQUFzQyxJQUF0QyxDQUFuRjtBQUFnSSxlQUFTLEVBQUVULFNBQTNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEZ0I7QUFBQSxHQUFqQixDQURILENBRkYsRUFTRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dJLDZDQUFDLENBQUNJLEdBQUYsQ0FBTUwsVUFBTixFQUFrQixVQUFDVSxhQUFELEVBQWdCSCxLQUFoQixFQUEwQjtBQUMzQyxRQUFNSSxRQUFRLEdBQUdELGFBQWEsR0FBRyxDQUFqQzs7QUFDQSxRQUFNRSxJQUFJLEdBQUdYLDZDQUFDLENBQUNZLEtBQUYsQ0FBUWxCLElBQVIsRUFBY2dCLFFBQWQsRUFBd0JBLFFBQVEsR0FBRyxDQUFuQyxDQUFiOztBQUVBLFdBQ0U7QUFBSyxlQUFTLEVBQUMsb0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHViw2Q0FBQyxDQUFDSSxHQUFGLENBQU1PLElBQU4sRUFBWTtBQUFBLFVBQUdOLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFVBQVVRLElBQVYsU0FBVUEsSUFBVjtBQUFBLGFBQ1gsTUFBQyw4REFBRDtBQUFZLGFBQUssRUFBRUEsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURXO0FBQUEsS0FBWixDQURILENBREY7QUFPRCxHQVhBLENBREgsQ0FURixDQURGO0FBMEJELENBOUJEOztLQUFNcEIsSTtBQWdDU0EsbUVBQWYiLCJmaWxlIjoiLi93aW5kb3dzL1RhYnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IFRhYiBmcm9tICcuLi9jb21wb25lbnRzL1RhYic7XG5pbXBvcnQgTW9iaWxlSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL01vYmlsZUljb24nO1xuXG5jb25zdCBUYWJzID0gKHsgdGFicywgbWluaW1pemVkLCBleHBhbmRUYWIsIGdsb2JhbFogfSkgPT4ge1xuICBjb25zdCBhcHBzUGVyUm93ID0gNDtcbiAgY29uc3QgbW9iaWxlUm93cyA9IF8ucmFuZ2UoMCwgXy5jZWlsKF8uc2l6ZSh0YWJzKSAvIGFwcHNQZXJSb3cpKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogRGVza3RvcCAqL31cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiZml4ZWQtYm90dG9tIG0tMCBmbGV4LXdyYXAtcmV2ZXJzZSBkLW5vbmUgZC1zbS1mbGV4XCI+XG4gICAgICAgIHtfLm1hcChtaW5pbWl6ZWQsICh0aXRsZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8VGFiIGZpcnN0PXtpbmRleCA9PT0gMH0gej17Z2xvYmFsWiArIF8uc2l6ZShtaW5pbWl6ZWQpIC0gaW5kZXh9IHRpdGxlPXt0aXRsZX0gZmc9e18uZ2V0KF8uZmluZCh0YWJzLCBbJ3RpdGxlJywgdGl0bGVdKSwgXCJmZ1wiKX0gZXhwYW5kVGFiPXtleHBhbmRUYWJ9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9Sb3c+XG5cbiAgICAgIHsvKiBNb2JpbGUgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHB0LTMgZC1zbS1ub25lXCI+XG4gICAgICAgIHtfLm1hcChtb2JpbGVSb3dzLCAocm93TXVsdGlwbGllciwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCByb3dCZWdpbiA9IHJvd011bHRpcGxpZXIgKiA0O1xuICAgICAgICAgIGNvbnN0IGFwcHMgPSBfLnNsaWNlKHRhYnMsIHJvd0JlZ2luLCByb3dCZWdpbiArIDQpO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMyBwYi0zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAge18ubWFwKGFwcHMsICh7IHRpdGxlLCBuYW1lIH0pID0+IChcbiAgICAgICAgICAgICAgICA8TW9iaWxlSWNvbiB0aXRsZT17bmFtZX0vPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./windows/Tabs.js\n");

/***/ })

})