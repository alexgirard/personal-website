webpackHotUpdate("static/development/pages/index.js",{

/***/ "./windows/Social.js":
/*!***************************!*\
  !*** ./windows/Social.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Window */ \"./components/Window.js\");\n/* harmony import */ var _components_NextLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NextLink */ \"./components/NextLink.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgirard/Documents/Git/alexgirard/windows/Social.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  color: #CFCFCF !important;\\n  cursor: alias;\\n  :hover {\\n    color: white !important;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar SocialLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_components_NextLink__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_templateObject());\n_c = SocialLink;\n\nvar Social = function Social(_ref) {\n  var socialLinks = _ref.socialLinks,\n      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"socialLinks\"]);\n\n  return __jsx(_components_Window__WEBPACK_IMPORTED_MODULE_7__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, restProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 3\n    }\n  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Row\"], {\n    className: \"px-3 text-center text-white justify-content-center flex-column\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, lodash__WEBPACK_IMPORTED_MODULE_4___default.a.map(socialLinks, function (_ref2, index) {\n    var name = _ref2.name,\n        link = _ref2.link;\n    return __jsx(\"h5\", {\n      className: \"m-0 py-3 py-sm-0\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }\n    }, __jsx(SocialLink, {\n      href: link,\n      external: true,\n      className: \"px-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }\n    }, name), __jsx(\"span\", {\n      className: \"d-none d-sm-inline\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }\n    }, \"/\"));\n  }), ' ', __jsx(SocialLink, {\n    href: \"mailto:alexgirard999@gmail.com\",\n    external: true,\n    className: \"px-2 py-3 py-sm-0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 12\n    }\n  }, \"Email\")));\n};\n\n_c2 = Social;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Social);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SocialLink\");\n$RefreshReg$(_c2, \"Social\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93aW5kb3dzL1NvY2lhbC5qcz9iNTU2Il0sIm5hbWVzIjpbIlNvY2lhbExpbmsiLCJzdHlsZWQiLCJOZXh0TGluayIsIlNvY2lhbCIsInNvY2lhbExpbmtzIiwicmVzdFByb3BzIiwiXyIsIm1hcCIsImluZGV4IiwibmFtZSIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLGlFQUFNLENBQUNDLDREQUFELENBQVQsbUJBQWhCO0tBQU1GLFU7O0FBUU4sSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFHQyxXQUFILFFBQUdBLFdBQUg7QUFBQSxNQUFtQkMsU0FBbkI7O0FBQUEsU0FDYixNQUFDLDBEQUFELHlGQUFZQSxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLGdFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsNkNBQUMsQ0FBQ0MsR0FBRixDQUFNSCxXQUFOLEVBQW1CLGlCQUFpQkksS0FBakI7QUFBQSxRQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxRQUFTQyxJQUFULFNBQVNBLElBQVQ7QUFBQSxXQUNsQjtBQUFJLGVBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxVQUFEO0FBQVksVUFBSSxFQUFFQSxJQUFsQjtBQUF3QixjQUFRLE1BQWhDO0FBQWlDLGVBQVMsRUFBQyxNQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW1ERCxJQUFuRCxDQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRixDQURrQjtBQUFBLEdBQW5CLENBREgsRUFPRyxHQVBILEVBT08sTUFBQyxVQUFEO0FBQVksUUFBSSxFQUFDLGdDQUFqQjtBQUFrRCxZQUFRLE1BQTFEO0FBQTJELGFBQVMsRUFBQyxtQkFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBQLENBREYsQ0FEYTtBQUFBLENBQWY7O01BQU1OLE07QUFjU0EscUVBQWYiLCJmaWxlIjoiLi93aW5kb3dzL1NvY2lhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgV2luZG93IGZyb20gJy4uL2NvbXBvbmVudHMvV2luZG93JztcbmltcG9ydCBOZXh0TGluayBmcm9tICcuLi9jb21wb25lbnRzL05leHRMaW5rJztcblxuY29uc3QgU29jaWFsTGluayA9IHN0eWxlZChOZXh0TGluaylgXG4gIGNvbG9yOiAjQ0ZDRkNGICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogYWxpYXM7XG4gIDpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmNvbnN0IFNvY2lhbCA9ICh7IHNvY2lhbExpbmtzLCAuLi5yZXN0UHJvcHN9KSA9PiAoXG4gIDxXaW5kb3cgey4uLnJlc3RQcm9wc30+XG4gICAgPFJvdyBjbGFzc05hbWU9XCJweC0zIHRleHQtY2VudGVyIHRleHQtd2hpdGUganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LWNvbHVtblwiPlxuICAgICAge18ubWFwKHNvY2lhbExpbmtzLCAoeyBuYW1lLCBsaW5rIH0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtLTAgcHktMyBweS1zbS0wXCI+XG4gICAgICAgICAgPFNvY2lhbExpbmsgaHJlZj17bGlua30gZXh0ZXJuYWwgY2xhc3NOYW1lPVwicHgtMlwiPntuYW1lfTwvU29jaWFsTGluaz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1zbS1pbmxpbmVcIj4vPC9zcGFuPlxuICAgICAgICA8L2g1PlxuICAgICAgKSl9XG4gICAgICB7JyAnfTxTb2NpYWxMaW5rIGhyZWY9XCJtYWlsdG86YWxleGdpcmFyZDk5OUBnbWFpbC5jb21cIiBleHRlcm5hbCBjbGFzc05hbWU9XCJweC0yIHB5LTMgcHktc20tMFwiPkVtYWlsPC9Tb2NpYWxMaW5rPlxuICAgIDwvUm93PlxuICA8L1dpbmRvdz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./windows/Social.js\n");

/***/ })

})