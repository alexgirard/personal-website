webpackHotUpdate("static/development/pages/index.js",{

/***/ "./windows/Work.js":
/*!*************************!*\
  !*** ./windows/Work.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Window */ \"./components/Window.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgirard/Documents/Git/alexgirard/windows/Work.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  max-height: 77px;\\n  width: auto;\\n\\n  :hover {\\n    transform: translateX(0) scale(1.1);\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  cursor: pointer;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar Cursor = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = Cursor;\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].img(_templateObject2());\n_c2 = Image;\n\nvar Work = function Work(_ref) {\n  var workData = _ref.workData,\n      openTab = _ref.openTab,\n      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"workData\", \"openTab\"]);\n\n  return __jsx(_components_Window__WEBPACK_IMPORTED_MODULE_7__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, restProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 3\n    }\n  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Row\"], {\n    className: \"justify-content-center d-none d-sm-inline\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, lodash__WEBPACK_IMPORTED_MODULE_4___default.a.map(workData, function (_ref2) {\n    var title = _ref2.title,\n        name = _ref2.name,\n        src = _ref2.src,\n        alt = _ref2.alt;\n    return __jsx(Cursor, {\n      className: \"px-3 d-flex flex-column justify-content-center align-items-center\",\n      onClick: function onClick(e) {\n        e.stopPropagation();\n        openTab(title);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }\n    }, __jsx(Image, {\n      src: src,\n      alt: alt,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }\n    }), __jsx(\"p\", {\n      className: \"text-white pt-2 mb-0 text-center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 11\n      }\n    }, name));\n  })));\n};\n\n_c3 = Work;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Cursor\");\n$RefreshReg$(_c2, \"Image\");\n$RefreshReg$(_c3, \"Work\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93aW5kb3dzL1dvcmsuanM/MjVjYyJdLCJuYW1lcyI6WyJDdXJzb3IiLCJzdHlsZWQiLCJkaXYiLCJJbWFnZSIsImltZyIsIldvcmsiLCJ3b3JrRGF0YSIsIm9wZW5UYWIiLCJyZXN0UHJvcHMiLCJfIiwibWFwIiwidGl0bGUiLCJuYW1lIiwic3JjIiwiYWx0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQVo7S0FBTUYsTTtBQUlOLElBQU1HLEtBQUssR0FBR0YseURBQU0sQ0FBQ0csR0FBVixvQkFBWDtNQUFNRCxLOztBQVNOLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUMsT0FBYixRQUFhQSxPQUFiO0FBQUEsTUFBeUJDLFNBQXpCOztBQUFBLFNBQ1gsTUFBQywwREFBRCx5RkFBWUEsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0UsTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQywyQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLDZDQUFDLENBQUNDLEdBQUYsQ0FBTUosUUFBTixFQUFnQjtBQUFBLFFBQUdLLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFFBQVVDLElBQVYsU0FBVUEsSUFBVjtBQUFBLFFBQWdCQyxHQUFoQixTQUFnQkEsR0FBaEI7QUFBQSxRQUFxQkMsR0FBckIsU0FBcUJBLEdBQXJCO0FBQUEsV0FDZixNQUFDLE1BQUQ7QUFBUSxlQUFTLEVBQUMsbUVBQWxCO0FBQXNGLGFBQU8sRUFBRSxpQkFBQUMsQ0FBQyxFQUFJO0FBQUVBLFNBQUMsQ0FBQ0MsZUFBRjtBQUFxQlQsZUFBTyxDQUFDSSxLQUFELENBQVA7QUFBaUIsT0FBNUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsS0FBRDtBQUFPLFNBQUcsRUFBRUUsR0FBWjtBQUFpQixTQUFHLEVBQUVDLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUcsZUFBUyxFQUFDLGtDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaURGLElBQWpELENBRkYsQ0FEZTtBQUFBLEdBQWhCLENBREgsQ0FERixDQURXO0FBQUEsQ0FBYjs7TUFBTVAsSTtBQWFTQSxtRUFBZiIsImZpbGUiOiIuL3dpbmRvd3MvV29yay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgV2luZG93IGZyb20gJy4uL2NvbXBvbmVudHMvV2luZG93JztcblxuY29uc3QgQ3Vyc29yID0gc3R5bGVkLmRpdmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtaGVpZ2h0OiA3N3B4O1xuICB3aWR0aDogYXV0bztcblxuICA6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSBzY2FsZSgxLjEpO1xuICB9XG5gO1xuXG5jb25zdCBXb3JrID0gKHsgd29ya0RhdGEsIG9wZW5UYWIsIC4uLnJlc3RQcm9wcyB9KSA9PiAoXG4gIDxXaW5kb3cgey4uLnJlc3RQcm9wc30+XG4gICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGQtbm9uZSBkLXNtLWlubGluZVwiPlxuICAgICAge18ubWFwKHdvcmtEYXRhLCAoeyB0aXRsZSwgbmFtZSwgc3JjLCBhbHQgfSkgPT4gKFxuICAgICAgICA8Q3Vyc29yIGNsYXNzTmFtZT1cInB4LTMgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgb25DbGljaz17ZSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IG9wZW5UYWIodGl0bGUpOyB9fT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtzcmN9IGFsdD17YWx0fSAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcHQtMiBtYi0wIHRleHQtY2VudGVyXCI+e25hbWV9PC9wPlxuICAgICAgICA8L0N1cnNvcj5cbiAgICAgICkpfVxuICAgIDwvUm93PlxuICA8L1dpbmRvdz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFdvcms7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./windows/Work.js\n");

/***/ })

})