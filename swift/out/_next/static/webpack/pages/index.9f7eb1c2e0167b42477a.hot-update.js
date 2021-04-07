webpackHotUpdate_N_E("pages/index",{

/***/ "./components/swift.reducer.ts":
/*!*************************************!*\
  !*** ./components/swift.reducer.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_jesse_python_swift_next_swift_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_jesse_python_swift_next_swift_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_jesse_python_swift_next_swift_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar DEFUALT_ELEMENTS = 3;\n\nvar formReducer = function formReducer(state, action) {\n  switch (action.type) {\n    case 'newElement':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        formElements: [].concat(Object(_home_jesse_python_swift_next_swift_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.formElements), [action.data])\n      });\n\n    case 'userInput':\n      var formData = _objectSpread({}, state.formData);\n\n      var formElements = Object(_home_jesse_python_swift_next_swift_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.formElements);\n\n      formData[action.index] = action.data;\n\n      if (action.valueName) {\n        formElements[action.index - DEFUALT_ELEMENTS][action.valueName] = action.value;\n      } // console.log(formData)\n\n\n      return {\n        formElements: formElements,\n        formData: formData\n      };\n\n    case 'wsUpdate':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        formElements: Object(_home_jesse_python_swift_next_swift_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.formElements)[action.index - DEFUALT_ELEMENTS] = action.data\n      });\n\n    case 'reset':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        formData: {}\n      });\n\n    default:\n      throw new Error();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (formReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zd2lmdC5yZWR1Y2VyLnRzP2MxYjQiXSwibmFtZXMiOlsiREVGVUFMVF9FTEVNRU5UUyIsImZvcm1SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZm9ybUVsZW1lbnRzIiwiZGF0YSIsImZvcm1EYXRhIiwiaW5kZXgiLCJ2YWx1ZU5hbWUiLCJ2YWx1ZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTUEsZ0JBQWdCLEdBQUcsQ0FBekI7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ25DLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUssWUFBTDtBQUNJLDZDQUNPRixLQURQO0FBRUlHLG9CQUFZLHlKQUFNSCxLQUFLLENBQUNHLFlBQVosSUFBMEJGLE1BQU0sQ0FBQ0csSUFBakM7QUFGaEI7O0FBS0osU0FBSyxXQUFMO0FBQ0ksVUFBTUMsUUFBUSxxQkFBUUwsS0FBSyxDQUFDSyxRQUFkLENBQWQ7O0FBQ0EsVUFBTUYsWUFBWSxHQUFHLDZJQUFJSCxLQUFLLENBQUNHLFlBQWIsQ0FBbEI7O0FBRUFFLGNBQVEsQ0FBQ0osTUFBTSxDQUFDSyxLQUFSLENBQVIsR0FBeUJMLE1BQU0sQ0FBQ0csSUFBaEM7O0FBRUEsVUFBSUgsTUFBTSxDQUFDTSxTQUFYLEVBQXNCO0FBQ2xCSixvQkFBWSxDQUFDRixNQUFNLENBQUNLLEtBQVAsR0FBZVIsZ0JBQWhCLENBQVosQ0FDSUcsTUFBTSxDQUFDTSxTQURYLElBRUlOLE1BQU0sQ0FBQ08sS0FGWDtBQUdILE9BVkwsQ0FZSTs7O0FBRUEsYUFBTztBQUNITCxvQkFBWSxFQUFFQSxZQURYO0FBRUhFLGdCQUFRLEVBQUVBO0FBRlAsT0FBUDs7QUFLSixTQUFLLFVBQUw7QUFDSSw2Q0FDT0wsS0FEUDtBQUVJRyxvQkFBWSxFQUFFLDZJQUFJSCxLQUFLLENBQUNHLFlBQVYsRUFBd0JGLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlUixnQkFBdkMsSUFBMkRHLE1BQU0sQ0FBQ0c7QUFGcEY7O0FBS0osU0FBSyxPQUFMO0FBQ0ksNkNBQ09KLEtBRFA7QUFFSUssZ0JBQVEsRUFBRTtBQUZkOztBQUtKO0FBQ0ksWUFBTSxJQUFJSSxLQUFKLEVBQU47QUF2Q1I7QUF5Q0gsQ0ExQ0Q7O0FBNENlViwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3dpZnQucmVkdWNlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERFRlVBTFRfRUxFTUVOVFMgPSAzO1xuXG5jb25zdCBmb3JtUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICduZXdFbGVtZW50JzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZm9ybUVsZW1lbnRzOiBbLi4uc3RhdGUuZm9ybUVsZW1lbnRzLCBhY3Rpb24uZGF0YV0sXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAndXNlcklucHV0JzpcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0geyAuLi5zdGF0ZS5mb3JtRGF0YSB9XG4gICAgICAgICAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBbLi4uc3RhdGUuZm9ybUVsZW1lbnRzXVxuXG4gICAgICAgICAgICBmb3JtRGF0YVthY3Rpb24uaW5kZXhdID0gYWN0aW9uLmRhdGFcblxuICAgICAgICAgICAgaWYgKGFjdGlvbi52YWx1ZU5hbWUpIHtcbiAgICAgICAgICAgICAgICBmb3JtRWxlbWVudHNbYWN0aW9uLmluZGV4IC0gREVGVUFMVF9FTEVNRU5UU11bXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi52YWx1ZU5hbWVcbiAgICAgICAgICAgICAgICBdID0gYWN0aW9uLnZhbHVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZvcm1EYXRhKVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZvcm1FbGVtZW50czogZm9ybUVsZW1lbnRzLFxuICAgICAgICAgICAgICAgIGZvcm1EYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICd3c1VwZGF0ZSc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGZvcm1FbGVtZW50czogWy4uLnN0YXRlLmZvcm1FbGVtZW50c11bYWN0aW9uLmluZGV4IC0gREVGVUFMVF9FTEVNRU5UU10gPSBhY3Rpb24uZGF0YSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGZvcm1EYXRhOiB7fSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1SZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/swift.reducer.ts\n");

/***/ })

})