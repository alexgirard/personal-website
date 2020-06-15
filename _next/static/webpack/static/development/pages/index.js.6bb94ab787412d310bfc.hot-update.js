webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Window.js":
/*!******************************!*\
  !*** ./components/Window.js ***!
  \******************************/
/*! exports provided: default, Bars, FgWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bars\", function() { return Bars; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FgWrapper\", function() { return FgWrapper; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgirard/Documents/Git/alexgirard/components/Window.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  display: \", \";\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  position: absolute;\\n  left: 0;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  background: \", \";\\n  cursor: \", \";\\n  padding: 0 0.4rem;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  background-image: url('/static/three_lines.png');\\n  background-position: 50% 50%;\\n  background-repeat: repeat-x;\\n  margin: 0;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  background: \", \";\\n  border-bottom: 3px solid black;\\n  border-radius: 3px 3px 0 0;\\n  position: relative;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  box-shadow: 0.3rem 0.3rem 0 black;\\n  background: \", \";\\n  border: 3px solid black;\\n  border-radius: 7px;\\n  width: fit-content;\\n\\n  display: \", \";\\n  z-index: \", \";\\n\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n\\n  @media (min-width: 768px) {\\n    max-width: \", \";\\n  }\\n\\n  @media (max-width: 576px) {\\n    box-shadow: none;\\n    border-radius: 0;\\n    height: 100%;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n // import Draggable from 'react-draggable';\n\n\n\nvar Draggable = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\")];\n    },\n    modules: ['react-draggable']\n  }\n});\n_c2 = Draggable;\nvar WindowOutline = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject(), function (props) {\n  return props.bg || 'yellow';\n}, function (props) {\n  return props.minimized || props.closed ? \"none\" : \"block\";\n}, function (props) {\n  return props.globalZ;\n}, function (props) {\n  return props.maxWidth || \"940px\";\n});\n_c3 = WindowOutline;\nvar TitleBarOutline = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].section(_templateObject2(), function (props) {\n  return props.fg || 'red';\n});\n_c4 = TitleBarOutline;\nvar Bars = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Row\"])(_templateObject3());\n_c5 = Bars;\nvar FgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].span(_templateObject4(), function (props) {\n  return props.fg || 'red';\n}, function (props) {\n  return props.cursor;\n});\n_c6 = FgWrapper;\nvar ControlsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject5());\n_c7 = ControlsWrapper;\nvar DraggableWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Draggable)(_templateObject6(), function (props) {\n  return props.disabled ? \"none\" : \"block\";\n});\n_c8 = DraggableWrapper;\n\nvar Controls = function Controls(_ref) {\n  var fg = _ref.fg,\n      title = _ref.title,\n      minimizeTab = _ref.minimizeTab,\n      closeTab = _ref.closeTab;\n  return __jsx(ControlsWrapper, {\n    className: \"d-none d-sm-inline\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 3\n    }\n  }, __jsx(FgWrapper, {\n    fg: fg,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return closeTab(title);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"/static/close.png\",\n    alt: \"close button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  })), __jsx(\"button\", {\n    onClick: function onClick() {\n      return minimizeTab(title);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"/static/minimize.png\",\n    alt: \"minimize button\",\n    className: \"pl-2 mr-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }))));\n};\n\n_c9 = Controls;\n\nvar TitleBar = function TitleBar(_ref2) {\n  var fg = _ref2.fg,\n      title = _ref2.title,\n      minimizeTab = _ref2.minimizeTab,\n      closeTab = _ref2.closeTab,\n      updateZ = _ref2.updateZ;\n  return __jsx(TitleBarOutline, {\n    fg: fg,\n    className: \"px-2 py-1 move\",\n    onMouseDown: function onMouseDown() {\n      return updateZ(title);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 3\n    }\n  }, __jsx(Controls, {\n    fg: fg,\n    title: title,\n    minimizeTab: minimizeTab,\n    closeTab: closeTab,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }\n  }), __jsx(Bars, {\n    className: \"justify-content-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 5\n    }\n  }, __jsx(FgWrapper, {\n    fg: fg,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }\n  }, title)));\n};\n\n_c10 = TitleBar;\n\nvar Window = function Window(_ref3) {\n  var bg = _ref3.bg,\n      minimized = _ref3.minimized,\n      closed = _ref3.closed,\n      children = _ref3.children,\n      maxWidth = _ref3.maxWidth,\n      globalZ = _ref3.globalZ,\n      updateZ = _ref3.updateZ,\n      title = _ref3.title,\n      titlebarProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3, [\"bg\", \"minimized\", \"closed\", \"children\", \"maxWidth\", \"globalZ\", \"updateZ\", \"title\"]);\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"d-none d-sm-block\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 5\n    }\n  }, __jsx(DraggableWrapper, {\n    handle: \"section\",\n    positionOffset: {\n      x: '-50%',\n      y: '-50%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }, __jsx(WindowOutline, {\n    bg: bg,\n    minimized: minimized,\n    closed: closed,\n    maxWidth: maxWidth,\n    globalZ: lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(globalZ, title),\n    className: \"p-0\",\n    onClick: function onClick() {\n      return updateZ(title);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }, __jsx(TitleBar, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    title: title,\n    updateZ: updateZ\n  }, titlebarProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], {\n    className: \"p-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, children)))), __jsx(WindowOutline, {\n    bg: bg,\n    closed: closed,\n    maxWidth: maxWidth,\n    globalZ: lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(globalZ, title),\n    className: \"p-0 d-sm-none\",\n    onClick: function onClick() {\n      return updateZ(title);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 5\n    }\n  }, __jsx(TitleBar, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    title: title,\n    updateZ: updateZ\n  }, titlebarProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 9\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], {\n    className: \"p-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  }, children)));\n};\n\n_c11 = Window;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Window);\n\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;\n\n$RefreshReg$(_c, \"Draggable$dynamic\");\n$RefreshReg$(_c2, \"Draggable\");\n$RefreshReg$(_c3, \"WindowOutline\");\n$RefreshReg$(_c4, \"TitleBarOutline\");\n$RefreshReg$(_c5, \"Bars\");\n$RefreshReg$(_c6, \"FgWrapper\");\n$RefreshReg$(_c7, \"ControlsWrapper\");\n$RefreshReg$(_c8, \"DraggableWrapper\");\n$RefreshReg$(_c9, \"Controls\");\n$RefreshReg$(_c10, \"TitleBar\");\n$RefreshReg$(_c11, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dpbmRvdy5qcz8wNDg0Il0sIm5hbWVzIjpbIkRyYWdnYWJsZSIsImR5bmFtaWMiLCJzc3IiLCJXaW5kb3dPdXRsaW5lIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJiZyIsIm1pbmltaXplZCIsImNsb3NlZCIsImdsb2JhbFoiLCJtYXhXaWR0aCIsIlRpdGxlQmFyT3V0bGluZSIsInNlY3Rpb24iLCJmZyIsIkJhcnMiLCJSb3ciLCJGZ1dyYXBwZXIiLCJzcGFuIiwiY3Vyc29yIiwiQ29udHJvbHNXcmFwcGVyIiwiRHJhZ2dhYmxlV3JhcHBlciIsImRpc2FibGVkIiwiQ29udHJvbHMiLCJ0aXRsZSIsIm1pbmltaXplVGFiIiwiY2xvc2VUYWIiLCJUaXRsZUJhciIsInVwZGF0ZVoiLCJXaW5kb3ciLCJjaGlsZHJlbiIsInRpdGxlYmFyUHJvcHMiLCJ4IiwieSIsIl8iLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG1EQUFPLE1BQ3ZCO0FBQUEsU0FBTSw0SkFBTjtBQUFBLENBRHVCLEVBRXZCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQURhLHdFQUNiO0FBQUE7QUFBQSxjQURhLGlCQUNiO0FBQUE7QUFBQSxDQUZ1QixDQUF6QjtNQUFNRixTO0FBS04sSUFBTUcsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG9CQUVILFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEVBQU4sSUFBYSxRQUFqQjtBQUFBLENBRkYsRUFPTixVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxTQUFOLElBQW1CRixLQUFLLENBQUNHLE1BQXpCLEdBQWtDLE1BQWxD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LCJmaWxlIjoiLi9jb21wb25lbnRzL1dpbmRvdy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBpbXBvcnQgRHJhZ2dhYmxlIGZyb20gJ3JlYWN0LWRyYWdnYWJsZSc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5cbmNvbnN0IERyYWdnYWJsZSA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgncmVhY3QtZHJhZ2dhYmxlJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pO1xuXG5jb25zdCBXaW5kb3dPdXRsaW5lID0gc3R5bGVkLmRpdmBcbiAgYm94LXNoYWRvdzogMC4zcmVtIDAuM3JlbSAwIGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLmJnICB8fCAneWVsbG93J307XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcblxuICBkaXNwbGF5OiAke3Byb3BzID0+IHByb3BzLm1pbmltaXplZCB8fCBwcm9wcy5jbG9zZWQgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIn07XG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMuZ2xvYmFsWn07XG5cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy5tYXhXaWR0aCB8fCBcIjk0MHB4XCJ9O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgVGl0bGVCYXJPdXRsaW5lID0gc3R5bGVkLnNlY3Rpb25gXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMuZmcgIHx8ICdyZWQnfTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgQmFycyA9IHN0eWxlZChSb3cpYFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvdGhyZWVfbGluZXMucG5nJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgbWFyZ2luOiAwO1xuYDtcblxuY29uc3QgRmdXcmFwcGVyID0gc3R5bGVkLnNwYW5gXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMuZmcgIHx8ICdyZWQnfTtcbiAgY3Vyc29yOiAke3Byb3BzID0+IHByb3BzLmN1cnNvcn07XG4gIHBhZGRpbmc6IDAgMC40cmVtO1xuYDtcblxuY29uc3QgQ29udHJvbHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgRHJhZ2dhYmxlV3JhcHBlciA9IHN0eWxlZChEcmFnZ2FibGUpYFxuICBkaXNwbGF5OiAke3Byb3BzID0+IHByb3BzLmRpc2FibGVkID8gXCJub25lXCIgOiBcImJsb2NrXCJ9O1xuYDtcblxuY29uc3QgQ29udHJvbHMgPSAoeyBmZywgdGl0bGUsIG1pbmltaXplVGFiLCBjbG9zZVRhYiB9KSA9PiAoXG4gIDxDb250cm9sc1dyYXBwZXIgY2xhc3NOYW1lPVwiZC1ub25lIGQtc20taW5saW5lXCI+XG4gICAgPEZnV3JhcHBlciBmZz17Zmd9PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjbG9zZVRhYih0aXRsZSl9PlxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvY2xvc2UucG5nXCIgYWx0PVwiY2xvc2UgYnV0dG9uXCIgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBtaW5pbWl6ZVRhYih0aXRsZSl9PlxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbWluaW1pemUucG5nXCIgYWx0PVwibWluaW1pemUgYnV0dG9uXCIgY2xhc3NOYW1lPVwicGwtMiBtci0xXCIgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvRmdXcmFwcGVyPlxuICA8L0NvbnRyb2xzV3JhcHBlcj5cbik7XG5cbmNvbnN0IFRpdGxlQmFyID0gKHsgZmcsIHRpdGxlLCBtaW5pbWl6ZVRhYiwgY2xvc2VUYWIsIHVwZGF0ZVogfSk9PiAoXG4gIDxUaXRsZUJhck91dGxpbmUgZmc9e2ZnfSBjbGFzc05hbWU9XCJweC0yIHB5LTEgbW92ZVwiIG9uTW91c2VEb3duPXsoKSA9PiB1cGRhdGVaKHRpdGxlKX0+XG4gICAgPENvbnRyb2xzIGZnPXtmZ30gdGl0bGU9e3RpdGxlfSBtaW5pbWl6ZVRhYj17bWluaW1pemVUYWJ9IGNsb3NlVGFiPXtjbG9zZVRhYn0gLz5cbiAgICA8QmFycyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8RmdXcmFwcGVyIGZnPXtmZ30+e3RpdGxlfTwvRmdXcmFwcGVyPlxuICAgIDwvQmFycz5cbiAgPC9UaXRsZUJhck91dGxpbmU+XG4pO1xuXG5jb25zdCBXaW5kb3cgPSAoeyBiZywgbWluaW1pemVkLCBjbG9zZWQsIGNoaWxkcmVuLCBtYXhXaWR0aCwgZ2xvYmFsWiwgdXBkYXRlWiwgdGl0bGUsIC4uLnRpdGxlYmFyUHJvcHMgfSkgPT4gKFxuICA8PlxuICAgIHsvKiBEZXNrdG9wICovfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ub25lIGQtc20tYmxvY2tcIj5cbiAgICAgIDxEcmFnZ2FibGVXcmFwcGVyIGhhbmRsZT1cInNlY3Rpb25cIiBwb3NpdGlvbk9mZnNldD17e3g6ICctNTAlJywgeTogJy01MCUnfX0+XG4gICAgICAgIDxXaW5kb3dPdXRsaW5lIFxuICAgICAgICAgIGJnPXtiZ31cbiAgICAgICAgICBtaW5pbWl6ZWQ9e21pbmltaXplZH1cbiAgICAgICAgICBjbG9zZWQ9e2Nsb3NlZH1cbiAgICAgICAgICBtYXhXaWR0aD17bWF4V2lkdGh9XG4gICAgICAgICAgZ2xvYmFsWj17Xy5nZXQoZ2xvYmFsWiwgdGl0bGUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlWih0aXRsZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8VGl0bGVCYXIgdGl0bGU9e3RpdGxlfSB1cGRhdGVaPXt1cGRhdGVafSB7Li4udGl0bGViYXJQcm9wc30gLz5cbiAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L1dpbmRvd091dGxpbmU+XG4gICAgICA8L0RyYWdnYWJsZVdyYXBwZXI+XG4gICAgPC9kaXY+XG5cbiAgICB7LyogTW9iaWxlICovfVxuICAgIDxXaW5kb3dPdXRsaW5lIFxuICAgICAgICBiZz17Ymd9XG4gICAgICAgIGNsb3NlZD17Y2xvc2VkfVxuICAgICAgICBtYXhXaWR0aD17bWF4V2lkdGh9XG4gICAgICAgIGdsb2JhbFo9e18uZ2V0KGdsb2JhbFosIHRpdGxlKX1cbiAgICAgICAgY2xhc3NOYW1lPVwicC0wIGQtc20tbm9uZVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVoodGl0bGUpfVxuICAgICAgPlxuICAgICAgICA8VGl0bGVCYXIgdGl0bGU9e3RpdGxlfSB1cGRhdGVaPXt1cGRhdGVafSB7Li4udGl0bGViYXJQcm9wc30gLz5cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9XaW5kb3dPdXRsaW5lPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvdztcblxuZXhwb3J0IHsgQmFycywgRmdXcmFwcGVyIH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Window.js\n");

/***/ })

})