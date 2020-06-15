webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Window.js":
/*!******************************!*\
  !*** ./components/Window.js ***!
  \******************************/
/*! exports provided: default, Bars, FgWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bars\", function() { return Bars; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FgWrapper\", function() { return FgWrapper; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgirard/Documents/Git/alexgirard/components/Window.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  display: \", \";\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  position: absolute;\\n  left: 0;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  background: \", \";\\n  cursor: \", \";\\n  padding: 0 0.4rem;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  background-image: url('/static/three_lines.png');\\n  background-position: 50% 50%;\\n  background-repeat: repeat-x;\\n  margin: 0;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  background: \", \";\\n  border-bottom: 3px solid black;\\n  border-radius: 3px 3px 0 0;\\n  position: relative;\\n\\n  @media (max-width: 576px) {    \\n    border-radius: 0;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  box-shadow: 0.3rem 0.3rem 0 black;\\n  background: \", \";\\n  border: 3px solid black;\\n  border-radius: 7px;\\n  width: fit-content;\\n\\n  display: \", \";\\n  z-index: \", \";\\n\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n\\n  @media (min-width: 768px) {\\n    max-width: \", \";\\n  }\\n\\n  @media (max-width: 576px) {\\n    box-shadow: none;\\n    border: none;\\n    border-radius: 0;\\n    height: 100%;\\n    position: relative;\\n    top: 0;\\n    left: 0;\\n    overflow-y: scroll;\\n    width: 100%;\\n    z-index: 10;\\n    position: absolute;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n // import Draggable from 'react-draggable';\n\n\n\nvar Draggable = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\")];\n    },\n    modules: ['react-draggable']\n  }\n});\n_c2 = Draggable;\nvar WindowOutline = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject(), function (props) {\n  return props.bg || 'yellow';\n}, function (props) {\n  return props.minimized || props.closed ? \"none\" : \"block\";\n}, function (props) {\n  return props.globalZ;\n}, function (props) {\n  return props.maxWidth || \"940px\";\n});\n_c3 = WindowOutline;\nvar TitleBarOutline = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].section(_templateObject2(), function (props) {\n  return props.fg || 'red';\n});\n_c4 = TitleBarOutline;\nvar Bars = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Row\"])(_templateObject3());\n_c5 = Bars;\nvar FgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].span(_templateObject4(), function (props) {\n  return props.fg || 'red';\n}, function (props) {\n  return props.cursor;\n});\n_c6 = FgWrapper;\nvar ControlsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject5());\n_c7 = ControlsWrapper;\nvar DraggableWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Draggable)(_templateObject6(), function (props) {\n  return props.disabled ? \"none\" : \"block\";\n});\n_c8 = DraggableWrapper;\n\nvar Controls = function Controls(_ref) {\n  var fg = _ref.fg,\n      title = _ref.title,\n      minimizeTab = _ref.minimizeTab,\n      closeTab = _ref.closeTab,\n      mobileHistory = _ref.mobileHistory,\n      setHistory = _ref.setHistory;\n  return __jsx(ControlsWrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 3\n    }\n  }, __jsx(FgWrapper, {\n    fg: fg,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    className: \"d-none d-sm-inline\",\n    onClick: function onClick() {\n      return closeTab(title);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"/static/close.png\",\n    alt: \"close button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  })), __jsx(\"button\", {\n    className: \"d-none d-sm-inline\",\n    onClick: function onClick() {\n      return minimizeTab(title);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"/static/minimize.png\",\n    alt: \"minimize button\",\n    className: \"pl-2 mr-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  })), !!mobileHistory && __jsx(\"button\", {\n    className: \"d-sm-none pr-1\",\n    onClick: function onClick() {\n      openTab(mobileHistory);\n      setHistory(null);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"/static/back.png\",\n    alt: \"back button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_c9 = Controls;\n\nvar TitleBar = function TitleBar(_ref2) {\n  var fg = _ref2.fg,\n      title = _ref2.title,\n      minimizeTab = _ref2.minimizeTab,\n      closeTab = _ref2.closeTab,\n      updateZ = _ref2.updateZ,\n      mobileHistory = _ref2.mobileHistory,\n      setHistory = _ref2.setHistory;\n  return __jsx(TitleBarOutline, {\n    fg: fg,\n    className: \"px-2 py-1 move\",\n    onMouseDown: function onMouseDown() {\n      return updateZ(title);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 3\n    }\n  }, __jsx(Controls, {\n    fg: fg,\n    title: title,\n    minimizeTab: minimizeTab,\n    closeTab: closeTab,\n    mobileHistory: mobileHistory,\n    setHistory: setHistory,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 5\n    }\n  }), __jsx(Bars, {\n    className: \"justify-content-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 5\n    }\n  }, __jsx(FgWrapper, {\n    fg: fg,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }\n  }, title)));\n};\n\n_c10 = TitleBar;\n\nvar Window = function Window(_ref3) {\n  var bg = _ref3.bg,\n      minimized = _ref3.minimized,\n      closed = _ref3.closed,\n      children = _ref3.children,\n      maxWidth = _ref3.maxWidth,\n      globalZ = _ref3.globalZ,\n      updateZ = _ref3.updateZ,\n      title = _ref3.title,\n      titlebarProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3, [\"bg\", \"minimized\", \"closed\", \"children\", \"maxWidth\", \"globalZ\", \"updateZ\", \"title\"]);\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"d-none d-sm-block\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 5\n    }\n  }, __jsx(DraggableWrapper, {\n    handle: \"section\",\n    positionOffset: {\n      x: '-50%',\n      y: '-50%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }, __jsx(WindowOutline, {\n    bg: bg,\n    minimized: minimized,\n    closed: closed,\n    maxWidth: maxWidth,\n    globalZ: lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(globalZ, title),\n    className: \"p-0\",\n    onClick: function onClick() {\n      return updateZ(title);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }\n  }, __jsx(TitleBar, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    title: title,\n    updateZ: updateZ\n  }, titlebarProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], {\n    className: \"p-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 11\n    }\n  }, children)))), __jsx(WindowOutline, {\n    bg: bg,\n    closed: closed,\n    maxWidth: maxWidth,\n    globalZ: lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(globalZ, title),\n    className: \"p-0 d-sm-none\",\n    onClick: function onClick() {\n      return updateZ(title);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 5\n    }\n  }, __jsx(TitleBar, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    title: title,\n    updateZ: updateZ\n  }, titlebarProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], {\n    className: \"p-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 9\n    }\n  }, __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, children))));\n};\n\n_c11 = Window;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Window);\n\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;\n\n$RefreshReg$(_c, \"Draggable$dynamic\");\n$RefreshReg$(_c2, \"Draggable\");\n$RefreshReg$(_c3, \"WindowOutline\");\n$RefreshReg$(_c4, \"TitleBarOutline\");\n$RefreshReg$(_c5, \"Bars\");\n$RefreshReg$(_c6, \"FgWrapper\");\n$RefreshReg$(_c7, \"ControlsWrapper\");\n$RefreshReg$(_c8, \"DraggableWrapper\");\n$RefreshReg$(_c9, \"Controls\");\n$RefreshReg$(_c10, \"TitleBar\");\n$RefreshReg$(_c11, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dpbmRvdy5qcz8wNDg0Il0sIm5hbWVzIjpbIkRyYWdnYWJsZSIsImR5bmFtaWMiLCJzc3IiLCJXaW5kb3dPdXRsaW5lIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJiZyIsIm1pbmltaXplZCIsImNsb3NlZCIsImdsb2JhbFoiLCJtYXhXaWR0aCIsIlRpdGxlQmFyT3V0bGluZSIsInNlY3Rpb24iLCJmZyIsIkJhcnMiLCJSb3ciLCJGZ1dyYXBwZXIiLCJzcGFuIiwiY3Vyc29yIiwiQ29udHJvbHNXcmFwcGVyIiwiRHJhZ2dhYmxlV3JhcHBlciIsImRpc2FibGVkIiwiQ29udHJvbHMiLCJ0aXRsZSIsIm1pbmltaXplVGFiIiwiY2xvc2VUYWIiLCJtb2JpbGVIaXN0b3J5Iiwic2V0SGlzdG9yeSIsIm9wZW5UYWIiLCJUaXRsZUJhciIsInVwZGF0ZVoiLCJXaW5kb3ciLCJjaGlsZHJlbiIsInRpdGxlYmFyUHJvcHMiLCJ4IiwieSIsIl8iLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG1EQUFPLE1BQ3ZCO0FBQUEsU0FBTSw0SkFBTjtBQUFBLENBRHVCLEVBRXZCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQURhLHdFQUNiO0FBQUE7QUFBQSxjQURhLGlCQUNiO0FBQUE7QUFBQSxDQUZ1QixDQUF6QjtNQUFNRixTO0FBS04sSUFBTUcsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG9CQUVILFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEVBQU4sSUFBYSxRQUFqQjtBQUFBLENBRkYsRUFPTixVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxT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c0JFLE1BQUMsYUFBRDtBQUNJLE1BQUUsRUFBRTFCLEVBRFI7QUFFSSxVQUFNLEVBQUVFLE1BRlo7QUFHSSxZQUFRLEVBQUVFLFFBSGQ7QUFJSSxXQUFPLEVBQUUwQiw2Q0FBQyxDQUFDQyxHQUFGLENBQU01QixPQUFOLEVBQWVjLEtBQWYsQ0FKYjtBQUtJLGFBQVMsRUFBQyxlQUxkO0FBTUksV0FBTyxFQUFFO0FBQUEsYUFBTU8sT0FBTyxDQUFDUCxLQUFELENBQWI7QUFBQSxLQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRSSxNQUFDLFFBQUQ7QUFBVSxTQUFLLEVBQUVBLEtBQWpCO0FBQXdCLFdBQU8sRUFBRU87QUFBakMsS0FBOENHLGFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FSSixFQVNJLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLG1FQUFHRCxRQUFILENBREYsQ0FUSixDQXRCRixDQURhO0FBQUEsQ0FBZjs7T0FBTUQsTTtBQXVDU0EscUVBQWY7QUFFQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2luZG93LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8vIGltcG9ydCBEcmFnZ2FibGUgZnJvbSAncmVhY3QtZHJhZ2dhYmxlJztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcblxuY29uc3QgRHJhZ2dhYmxlID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCdyZWFjdC1kcmFnZ2FibGUnKSxcbiAgeyBzc3I6IGZhbHNlIH1cbik7XG5cbmNvbnN0IFdpbmRvd091dGxpbmUgPSBzdHlsZWQuZGl2YFxuICBib3gtc2hhZG93OiAwLjNyZW0gMC4zcmVtIDAgYmxhY2s7XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMuYmcgIHx8ICd5ZWxsb3cnfTtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gIGRpc3BsYXk6ICR7cHJvcHMgPT4gcHJvcHMubWluaW1pemVkIHx8IHByb3BzLmNsb3NlZCA/IFwibm9uZVwiIDogXCJibG9ja1wifTtcbiAgei1pbmRleDogJHtwcm9wcyA9PiBwcm9wcy5nbG9iYWxafTtcblxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLm1heFdpZHRoIHx8IFwiOTQwcHhcIn07XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuYDtcblxuY29uc3QgVGl0bGVCYXJPdXRsaW5lID0gc3R5bGVkLnNlY3Rpb25gXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMuZmcgIHx8ICdyZWQnfTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkgeyAgICBcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5gO1xuXG5jb25zdCBCYXJzID0gc3R5bGVkKFJvdylgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy90aHJlZV9saW5lcy5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBtYXJnaW46IDA7XG5gO1xuXG5jb25zdCBGZ1dyYXBwZXIgPSBzdHlsZWQuc3BhbmBcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy5mZyAgfHwgJ3JlZCd9O1xuICBjdXJzb3I6ICR7cHJvcHMgPT4gcHJvcHMuY3Vyc29yfTtcbiAgcGFkZGluZzogMCAwLjRyZW07XG5gO1xuXG5jb25zdCBDb250cm9sc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG5gO1xuXG5jb25zdCBEcmFnZ2FibGVXcmFwcGVyID0gc3R5bGVkKERyYWdnYWJsZSlgXG4gIGRpc3BsYXk6ICR7cHJvcHMgPT4gcHJvcHMuZGlzYWJsZWQgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIn07XG5gO1xuXG5jb25zdCBDb250cm9scyA9ICh7IGZnLCB0aXRsZSwgbWluaW1pemVUYWIsIGNsb3NlVGFiLCBtb2JpbGVIaXN0b3J5LCBzZXRIaXN0b3J5IH0pID0+IChcbiAgPENvbnRyb2xzV3JhcHBlcj5cbiAgICA8RmdXcmFwcGVyIGZnPXtmZ30+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImQtbm9uZSBkLXNtLWlubGluZVwiIG9uQ2xpY2s9eygpID0+IGNsb3NlVGFiKHRpdGxlKX0+XG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9jbG9zZS5wbmdcIiBhbHQ9XCJjbG9zZSBidXR0b25cIiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImQtbm9uZSBkLXNtLWlubGluZVwiIG9uQ2xpY2s9eygpID0+IG1pbmltaXplVGFiKHRpdGxlKX0+XG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9taW5pbWl6ZS5wbmdcIiBhbHQ9XCJtaW5pbWl6ZSBidXR0b25cIiBjbGFzc05hbWU9XCJwbC0yIG1yLTFcIiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICB7ISFtb2JpbGVIaXN0b3J5ICYmIChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkLXNtLW5vbmUgcHItMVwiIG9uQ2xpY2s9eygpID0+IHsgb3BlblRhYihtb2JpbGVIaXN0b3J5KTsgc2V0SGlzdG9yeShudWxsKTsgfX0+XG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2JhY2sucG5nXCIgYWx0PVwiYmFjayBidXR0b25cIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9GZ1dyYXBwZXI+XG4gIDwvQ29udHJvbHNXcmFwcGVyPlxuKTtcblxuY29uc3QgVGl0bGVCYXIgPSAoeyBmZywgdGl0bGUsIG1pbmltaXplVGFiLCBjbG9zZVRhYiwgdXBkYXRlWiwgbW9iaWxlSGlzdG9yeSwgc2V0SGlzdG9yeSB9KT0+IChcbiAgPFRpdGxlQmFyT3V0bGluZSBmZz17Zmd9IGNsYXNzTmFtZT1cInB4LTIgcHktMSBtb3ZlXCIgb25Nb3VzZURvd249eygpID0+IHVwZGF0ZVoodGl0bGUpfT5cbiAgICA8Q29udHJvbHMgZmc9e2ZnfSB0aXRsZT17dGl0bGV9IG1pbmltaXplVGFiPXttaW5pbWl6ZVRhYn0gY2xvc2VUYWI9e2Nsb3NlVGFifSBtb2JpbGVIaXN0b3J5PXttb2JpbGVIaXN0b3J5fSBzZXRIaXN0b3J5PXtzZXRIaXN0b3J5fSAvPlxuICAgIDxCYXJzIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxGZ1dyYXBwZXIgZmc9e2ZnfT57dGl0bGV9PC9GZ1dyYXBwZXI+XG4gICAgPC9CYXJzPlxuICA8L1RpdGxlQmFyT3V0bGluZT5cbik7XG5cbmNvbnN0IFdpbmRvdyA9ICh7IGJnLCBtaW5pbWl6ZWQsIGNsb3NlZCwgY2hpbGRyZW4sIG1heFdpZHRoLCBnbG9iYWxaLCB1cGRhdGVaLCB0aXRsZSwgLi4udGl0bGViYXJQcm9wcyB9KSA9PiAoXG4gIDw+XG4gICAgey8qIERlc2t0b3AgKi99XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLW5vbmUgZC1zbS1ibG9ja1wiPlxuICAgICAgPERyYWdnYWJsZVdyYXBwZXIgaGFuZGxlPVwic2VjdGlvblwiIHBvc2l0aW9uT2Zmc2V0PXt7eDogJy01MCUnLCB5OiAnLTUwJSd9fT5cbiAgICAgICAgPFdpbmRvd091dGxpbmUgXG4gICAgICAgICAgYmc9e2JnfVxuICAgICAgICAgIG1pbmltaXplZD17bWluaW1pemVkfVxuICAgICAgICAgIGNsb3NlZD17Y2xvc2VkfVxuICAgICAgICAgIG1heFdpZHRoPXttYXhXaWR0aH1cbiAgICAgICAgICBnbG9iYWxaPXtfLmdldChnbG9iYWxaLCB0aXRsZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0wXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVaKHRpdGxlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUaXRsZUJhciB0aXRsZT17dGl0bGV9IHVwZGF0ZVo9e3VwZGF0ZVp9IHsuLi50aXRsZWJhclByb3BzfSAvPlxuICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvV2luZG93T3V0bGluZT5cbiAgICAgIDwvRHJhZ2dhYmxlV3JhcHBlcj5cbiAgICA8L2Rpdj5cblxuICAgIHsvKiBNb2JpbGUgKi99XG4gICAgPFdpbmRvd091dGxpbmUgXG4gICAgICAgIGJnPXtiZ31cbiAgICAgICAgY2xvc2VkPXtjbG9zZWR9XG4gICAgICAgIG1heFdpZHRoPXttYXhXaWR0aH1cbiAgICAgICAgZ2xvYmFsWj17Xy5nZXQoZ2xvYmFsWiwgdGl0bGUpfVxuICAgICAgICBjbGFzc05hbWU9XCJwLTAgZC1zbS1ub25lXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlWih0aXRsZSl9XG4gICAgICA+XG4gICAgICAgIDxUaXRsZUJhciB0aXRsZT17dGl0bGV9IHVwZGF0ZVo9e3VwZGF0ZVp9IHsuLi50aXRsZWJhclByb3BzfSAvPlxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgIDw+e2NoaWxkcmVufTwvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvV2luZG93T3V0bGluZT5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3c7XG5cbmV4cG9ydCB7IEJhcnMsIEZnV3JhcHBlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Window.js\n");

/***/ })

})