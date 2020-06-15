webpackHotUpdate("static/development/pages/index.js",{

/***/ "./windows/Tabs.js":
/*!*************************!*\
  !*** ./windows/Tabs.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Tab */ \"./components/Tab.js\");\n/* harmony import */ var _components_MobileIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MobileIcon */ \"./components/MobileIcon.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgirard/Documents/Git/alexgirard/windows/Tabs.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: grid;\\n  grid-column-gap: 1rem;\\n  grid-row-gap: 1rem;\\n  grid-template-columns: repeat(3, minmax(0, 1fr));\\n  height: fit-content;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar MobileGrid = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = MobileGrid;\n\nvar Tabs = function Tabs(_ref) {\n  var tabs = _ref.tabs,\n      minimized = _ref.minimized,\n      expandTab = _ref.expandTab,\n      globalZ = _ref.globalZ,\n      openMobileWindow = _ref.openMobileWindow;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    className: \"fixed-bottom m-0 flex-wrap-reverse d-none d-sm-flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(minimized, function (title, index) {\n    return __jsx(_components_Tab__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      first: index === 0,\n      z: globalZ + lodash__WEBPACK_IMPORTED_MODULE_2___default.a.size(minimized) - index,\n      title: title,\n      fg: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.find(tabs, ['title', title]), \"fg\"),\n      expandTab: expandTab,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }\n    });\n  })), __jsx(MobileGrid, {\n    className: \"w-100 m-3 p-3 d-sm-none\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(tabs, function (_ref2) {\n    var title = _ref2.title,\n        name = _ref2.name,\n        src = _ref2.src,\n        alt = _ref2.alt,\n        fg = _ref2.fg,\n        bg = _ref2.bg,\n        useFg = _ref2.useFg;\n    return __jsx(_components_MobileIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      title: title,\n      name: name,\n      src: src,\n      alt: alt,\n      bg: useFg ? fg : bg,\n      onClick: openMobileWindow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    });\n  })));\n};\n\n_c2 = Tabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tabs);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MobileGrid\");\n$RefreshReg$(_c2, \"Tabs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93aW5kb3dzL1RhYnMuanM/NTY2NCJdLCJuYW1lcyI6WyJNb2JpbGVHcmlkIiwic3R5bGVkIiwiZGl2IiwiVGFicyIsInRhYnMiLCJtaW5pbWl6ZWQiLCJleHBhbmRUYWIiLCJnbG9iYWxaIiwib3Blbk1vYmlsZVdpbmRvdyIsIl8iLCJtYXAiLCJ0aXRsZSIsImluZGV4Iiwic2l6ZSIsImdldCIsImZpbmQiLCJuYW1lIiwic3JjIiwiYWx0IiwiZmciLCJiZyIsInVzZUZnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWhCO0tBQU1GLFU7O0FBUU4sSUFBTUcsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTQyxTQUFULFFBQVNBLFNBQVQ7QUFBQSxNQUFvQkMsU0FBcEIsUUFBb0JBLFNBQXBCO0FBQUEsTUFBK0JDLE9BQS9CLFFBQStCQSxPQUEvQjtBQUFBLE1BQXdDQyxnQkFBeEMsUUFBd0NBLGdCQUF4QztBQUFBLFNBQ1gsbUVBRUUsTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQyxxREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLDZDQUFDLENBQUNDLEdBQUYsQ0FBTUwsU0FBTixFQUFpQixVQUFDTSxLQUFELEVBQVFDLEtBQVI7QUFBQSxXQUNoQixNQUFDLHVEQUFEO0FBQUssV0FBSyxFQUFFQSxLQUFLLEtBQUssQ0FBdEI7QUFBeUIsT0FBQyxFQUFFTCxPQUFPLEdBQUdFLDZDQUFDLENBQUNJLElBQUYsQ0FBT1IsU0FBUCxDQUFWLEdBQThCTyxLQUExRDtBQUFpRSxXQUFLLEVBQUVELEtBQXhFO0FBQStFLFFBQUUsRUFBRUYsNkNBQUMsQ0FBQ0ssR0FBRixDQUFNTCw2Q0FBQyxDQUFDTSxJQUFGLENBQU9YLElBQVAsRUFBYSxDQUFDLE9BQUQsRUFBVU8sS0FBVixDQUFiLENBQU4sRUFBc0MsSUFBdEMsQ0FBbkY7QUFBZ0ksZUFBUyxFQUFFTCxTQUEzSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGdCO0FBQUEsR0FBakIsQ0FESCxDQUZGLEVBU0UsTUFBQyxVQUFEO0FBQVksYUFBUyxFQUFDLHlCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLDZDQUFDLENBQUNDLEdBQUYsQ0FBTU4sSUFBTixFQUFZO0FBQUEsUUFBR08sS0FBSCxTQUFHQSxLQUFIO0FBQUEsUUFBVUssSUFBVixTQUFVQSxJQUFWO0FBQUEsUUFBZ0JDLEdBQWhCLFNBQWdCQSxHQUFoQjtBQUFBLFFBQXFCQyxHQUFyQixTQUFxQkEsR0FBckI7QUFBQSxRQUEwQkMsRUFBMUIsU0FBMEJBLEVBQTFCO0FBQUEsUUFBOEJDLEVBQTlCLFNBQThCQSxFQUE5QjtBQUFBLFFBQWtDQyxLQUFsQyxTQUFrQ0EsS0FBbEM7QUFBQSxXQUNYLE1BQUMsOERBQUQ7QUFBWSxXQUFLLEVBQUVWLEtBQW5CO0FBQTBCLFVBQUksRUFBRUssSUFBaEM7QUFBc0MsU0FBRyxFQUFFQyxHQUEzQztBQUFnRCxTQUFHLEVBQUVDLEdBQXJEO0FBQTBELFFBQUUsRUFBRUcsS0FBSyxHQUFHRixFQUFILEdBQVFDLEVBQTNFO0FBQStFLGFBQU8sRUFBRVosZ0JBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEVztBQUFBLEdBQVosQ0FESCxDQVRGLENBRFc7QUFBQSxDQUFiOztNQUFNTCxJO0FBa0JTQSxtRUFBZiIsImZpbGUiOiIuL3dpbmRvd3MvVGFicy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgVGFiIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiJztcbmltcG9ydCBNb2JpbGVJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvTW9iaWxlSWNvbic7XG5cbmNvbnN0IE1vYmlsZUdyaWQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XG4gIGdyaWQtcm93LWdhcDogMXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuYDtcblxuY29uc3QgVGFicyA9ICh7IHRhYnMsIG1pbmltaXplZCwgZXhwYW5kVGFiLCBnbG9iYWxaLCBvcGVuTW9iaWxlV2luZG93IH0pID0+IChcbiAgPD5cbiAgICB7LyogRGVza3RvcCAqL31cbiAgICA8Um93IGNsYXNzTmFtZT1cImZpeGVkLWJvdHRvbSBtLTAgZmxleC13cmFwLXJldmVyc2UgZC1ub25lIGQtc20tZmxleFwiPlxuICAgICAge18ubWFwKG1pbmltaXplZCwgKHRpdGxlLCBpbmRleCkgPT4gKFxuICAgICAgICA8VGFiIGZpcnN0PXtpbmRleCA9PT0gMH0gej17Z2xvYmFsWiArIF8uc2l6ZShtaW5pbWl6ZWQpIC0gaW5kZXh9IHRpdGxlPXt0aXRsZX0gZmc9e18uZ2V0KF8uZmluZCh0YWJzLCBbJ3RpdGxlJywgdGl0bGVdKSwgXCJmZ1wiKX0gZXhwYW5kVGFiPXtleHBhbmRUYWJ9IC8+XG4gICAgICApKX1cbiAgICA8L1Jvdz5cblxuICAgIHsvKiBNb2JpbGUgKi99XG4gICAgPE1vYmlsZUdyaWQgY2xhc3NOYW1lPVwidy0xMDAgbS0zIHAtMyBkLXNtLW5vbmVcIj5cbiAgICAgIHtfLm1hcCh0YWJzLCAoeyB0aXRsZSwgbmFtZSwgc3JjLCBhbHQsIGZnLCBiZywgdXNlRmcgIH0pID0+IChcbiAgICAgICAgPE1vYmlsZUljb24gdGl0bGU9e3RpdGxlfSBuYW1lPXtuYW1lfSBzcmM9e3NyY30gYWx0PXthbHR9IGJnPXt1c2VGZyA/IGZnIDogYmd9IG9uQ2xpY2s9e29wZW5Nb2JpbGVXaW5kb3d9IC8+XG4gICAgICApKX1cbiAgICA8L01vYmlsZUdyaWQ+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGFiczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./windows/Tabs.js\n");

/***/ })

})