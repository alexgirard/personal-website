webpackHotUpdate("static/development/pages/index.js",{

/***/ "./windows/Work.js":
/*!*************************!*\
  !*** ./windows/Work.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Window */ \"./components/Window.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgirard/Documents/Git/alexgirard/windows/Work.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  display: grid;\\n  grid-column-gap: 1rem;\\n  grid-row-gap: 1rem;\\n  grid-template-columns: repeat(2, minmax(0, 1fr));\\n  height: fit-content;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  max-height: 77px;\\n  width: auto;\\n\\n  :hover {\\n    transform: translateX(0) scale(1.1);\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  cursor: pointer;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar Cursor = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = Cursor;\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].img(_templateObject2());\n_c2 = Image;\nvar MobileGrid = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject3());\n_c3 = MobileGrid;\n\nvar Work = function Work(_ref) {\n  var workData = _ref.workData,\n      openTab = _ref.openTab,\n      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"workData\", \"openTab\"]);\n\n  return __jsx(_components_Window__WEBPACK_IMPORTED_MODULE_7__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, restProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 3\n    }\n  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Row\"], {\n    className: \"justify-content-center d-none d-sm-flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, lodash__WEBPACK_IMPORTED_MODULE_4___default.a.map(workData, function (_ref2) {\n    var title = _ref2.title,\n        name = _ref2.name,\n        src = _ref2.src,\n        alt = _ref2.alt;\n    return __jsx(Cursor, {\n      className: \"px-3 d-flex flex-column justify-content-center align-items-center\",\n      onClick: function onClick(e) {\n        e.stopPropagation();\n        openTab(title);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }\n    }, __jsx(Image, {\n      src: src,\n      alt: alt,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }\n    }), __jsx(\"p\", {\n      className: \"text-white pt-2 mb-0 text-center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }\n    }, name));\n  })), __jsx(MobileGrid, {\n    className: \"w-100 m-3 p-3 d-sm-none\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, lodash__WEBPACK_IMPORTED_MODULE_4___default.a.map(workData, function (_ref3) {\n    var title = _ref3.title,\n        name = _ref3.name,\n        src = _ref3.src,\n        alt = _ref3.alt;\n    return __jsx(Cursor, {\n      className: \"px-3 d-flex flex-column justify-content-center align-items-center\",\n      onClick: function onClick(e) {\n        e.stopPropagation();\n        openTab(title);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }\n    }, __jsx(Image, {\n      src: src,\n      alt: alt,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }\n    }), __jsx(\"p\", {\n      className: \"text-white pt-2 mb-0 text-center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }\n    }, name));\n  })));\n};\n\n_c4 = Work;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Cursor\");\n$RefreshReg$(_c2, \"Image\");\n$RefreshReg$(_c3, \"MobileGrid\");\n$RefreshReg$(_c4, \"Work\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93aW5kb3dzL1dvcmsuanM/MjVjYyJdLCJuYW1lcyI6WyJDdXJzb3IiLCJzdHlsZWQiLCJkaXYiLCJJbWFnZSIsImltZyIsIk1vYmlsZUdyaWQiLCJXb3JrIiwid29ya0RhdGEiLCJvcGVuVGFiIiwicmVzdFByb3BzIiwiXyIsIm1hcCIsInRpdGxlIiwibmFtZSIsInNyYyIsImFsdCIsImUiLCJzdG9wUHJvcGFnYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBWjtLQUFNRixNO0FBSU4sSUFBTUcsS0FBSyxHQUFHRix5REFBTSxDQUFDRyxHQUFWLG9CQUFYO01BQU1ELEs7QUFTTixJQUFNRSxVQUFVLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsb0JBQWhCO01BQU1HLFU7O0FBUU4sSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxPQUFiLFFBQWFBLE9BQWI7QUFBQSxNQUF5QkMsU0FBekI7O0FBQUEsU0FDWCxNQUFDLDBEQUFELHlGQUFZQSxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLHlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsNkNBQUMsQ0FBQ0MsR0FBRixDQUFNSixRQUFOLEVBQWdCO0FBQUEsUUFBR0ssS0FBSCxTQUFHQSxLQUFIO0FBQUEsUUFBVUMsSUFBVixTQUFVQSxJQUFWO0FBQUEsUUFBZ0JDLEdBQWhCLFNBQWdCQSxHQUFoQjtBQUFBLFFBQXFCQyxHQUFyQixTQUFxQkEsR0FBckI7QUFBQSxXQUNmLE1BQUMsTUFBRDtBQUFRLGVBQVMsRUFBQyxtRUFBbEI7QUFBc0YsYUFBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFBRUEsU0FBQyxDQUFDQyxlQUFGO0FBQXFCVCxlQUFPLENBQUNJLEtBQUQsQ0FBUDtBQUFpQixPQUE1STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxLQUFEO0FBQU8sU0FBRyxFQUFFRSxHQUFaO0FBQWlCLFNBQUcsRUFBRUMsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBRyxlQUFTLEVBQUMsa0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpREYsSUFBakQsQ0FGRixDQURlO0FBQUEsR0FBaEIsQ0FESCxDQUZGLEVBWUUsTUFBQyxVQUFEO0FBQVksYUFBUyxFQUFDLHlCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILDZDQUFDLENBQUNDLEdBQUYsQ0FBTUosUUFBTixFQUFnQjtBQUFBLFFBQUdLLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFFBQVVDLElBQVYsU0FBVUEsSUFBVjtBQUFBLFFBQWdCQyxHQUFoQixTQUFnQkEsR0FBaEI7QUFBQSxRQUFxQkMsR0FBckIsU0FBcUJBLEdBQXJCO0FBQUEsV0FDZixNQUFDLE1BQUQ7QUFBUSxlQUFTLEVBQUMsbUVBQWxCO0FBQXNGLGFBQU8sRUFBRSxpQkFBQUMsQ0FBQyxFQUFJO0FBQUVBLFNBQUMsQ0FBQ0MsZUFBRjtBQUFxQlQsZUFBTyxDQUFDSSxLQUFELENBQVA7QUFBaUIsT0FBNUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsS0FBRDtBQUFPLFNBQUcsRUFBRUUsR0FBWjtBQUFpQixTQUFHLEVBQUVDLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUcsZUFBUyxFQUFDLGtDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaURGLElBQWpELENBRkYsQ0FEZTtBQUFBLEdBQWhCLENBREgsQ0FaRixDQURXO0FBQUEsQ0FBYjs7TUFBTVAsSTtBQXdCU0EsbUVBQWYiLCJmaWxlIjoiLi93aW5kb3dzL1dvcmsuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IFdpbmRvdyBmcm9tICcuLi9jb21wb25lbnRzL1dpbmRvdyc7XG5cbmNvbnN0IEN1cnNvciA9IHN0eWxlZC5kaXZgXG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcbiAgbWF4LWhlaWdodDogNzdweDtcbiAgd2lkdGg6IGF1dG87XG5cbiAgOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgc2NhbGUoMS4xKTtcbiAgfVxuYDtcblxuY29uc3QgTW9iaWxlR3JpZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtY29sdW1uLWdhcDogMXJlbTtcbiAgZ3JpZC1yb3ctZ2FwOiAxcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG5gO1xuXG5jb25zdCBXb3JrID0gKHsgd29ya0RhdGEsIG9wZW5UYWIsIC4uLnJlc3RQcm9wcyB9KSA9PiAoXG4gIDxXaW5kb3cgey4uLnJlc3RQcm9wc30+XG4gICAgey8qIERlc2t0b3AgKi99XG4gICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGQtbm9uZSBkLXNtLWZsZXhcIj5cbiAgICAgIHtfLm1hcCh3b3JrRGF0YSwgKHsgdGl0bGUsIG5hbWUsIHNyYywgYWx0IH0pID0+IChcbiAgICAgICAgPEN1cnNvciBjbGFzc05hbWU9XCJweC0zIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiIG9uQ2xpY2s9e2UgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyBvcGVuVGFiKHRpdGxlKTsgfX0+XG4gICAgICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9e2FsdH0gLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHB0LTIgbWItMCB0ZXh0LWNlbnRlclwiPntuYW1lfTwvcD5cbiAgICAgICAgPC9DdXJzb3I+XG4gICAgICApKX1cbiAgICA8L1Jvdz5cblxuICAgIHsvKiBNb2JpbGUgKi99XG4gICAgPE1vYmlsZUdyaWQgY2xhc3NOYW1lPVwidy0xMDAgbS0zIHAtMyBkLXNtLW5vbmVcIj5cbiAgICAgIHtfLm1hcCh3b3JrRGF0YSwgKHsgdGl0bGUsIG5hbWUsIHNyYywgYWx0IH0pID0+IChcbiAgICAgICAgPEN1cnNvciBjbGFzc05hbWU9XCJweC0zIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiIG9uQ2xpY2s9e2UgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyBvcGVuVGFiKHRpdGxlKTsgfX0+XG4gICAgICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9e2FsdH0gLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHB0LTIgbWItMCB0ZXh0LWNlbnRlclwiPntuYW1lfTwvcD5cbiAgICAgICAgPC9DdXJzb3I+XG4gICAgICApKX1cbiAgICA8L01vYmlsZUdyaWQ+XG4gIDwvV2luZG93PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgV29yaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./windows/Work.js\n");

/***/ })

})