self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_nguyen_tinh_nextjs_shop_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\nguyen tinh\\nextjs\\shop\\src\\components\\Header.js",
    _s = $RefreshSig$();









function Header() {
  _s();

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__.useSession)(),
      _useSession2 = (0,D_nguyen_tinh_nextjs_shop_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 1),
      session = _useSession2[0];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_7__.selectItems);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      btnisHighlighted = _useState[0],
      setBtnisHighlighted = _useState[1];

  var basketButtonClasses = "sticky link flex items-center z-50 ".concat(btnisHighlighted ? ' bump' : '');
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    if (items.length === 0) {
      return;
    }

    setBtnisHighlighted(true);
    var timer = setTimeout(function () {
      setBtnisHighlighted(false);
    }, 300);
    return function () {
      clearTimeout(timer);
    };
  }, [items]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: "overflow-x-hidden",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center bg-shop_blue p-1 flex-grow py-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-grow items-center mt-2 sm:flex-grow-0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          onClick: function onClick() {
            router.push("/");
          },
          className: "cursor-pointer",
          src: "http://links.papareact.com/f90",
          width: 150,
          height: 40,
          objectFit: "contain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "hidden sm:flex items-center flex-grow h-10 rounded-md cursor-pointer bg-yellow-400 hover:bg-yellow-500",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "p-2 h-full w-6 flex-grow rounded-l-md focus:outline-none px-4",
          type: "text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {
          className: "h-12 p-4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-white text-xs space-x-6 mx-6 flex items-center whitespace-nowrap",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: !session ? next_auth_client__WEBPACK_IMPORTED_MODULE_4__.signIn : next_auth_client__WEBPACK_IMPORTED_MODULE_4__.signOut,
          className: "link",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: session ? "Hello, ".concat(session.user.name) : "Sign In"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "font-extrabold md:text-sm",
            children: "Account & Lists"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: function onClick() {
            return router.push("/orders");
          },
          className: "link",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Return"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "font-extrabold md:text-sm",
            children: "& Orders"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: function onClick() {
            router.push("/checkout");
          },
          className: basketButtonClasses,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold",
            children: items.length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ShoppingCartIcon, {
            className: "h-10"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "hidden md:inline font-extrabold md:text-sm mt-2",
            children: "Basket"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center space-x-3 p-2 pl-6 bg-shop_blue-light text-white text-sm",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link flex items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.MenuIcon, {
          className: "h-6 mr-1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this), "All"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link",
        children: "Prime Video"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link",
        children: "Amazon Business"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

_s(Header, "5rcOAAOEX9vIuG/IvEm7621rzeA=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_4__.useSession, next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXRlbXMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEl0ZW1zIiwidXNlU3RhdGUiLCJidG5pc0hpZ2hsaWdodGVkIiwic2V0QnRuaXNIaWdobGlnaHRlZCIsImJhc2tldEJ1dHRvbkNsYXNzZXMiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJwdXNoIiwic2lnbkluIiwic2lnbk91dCIsInVzZXIiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsb0JBQ0VDLDREQUFVLEVBRFo7QUFBQTtBQUFBLE1BQ1RDLE9BRFM7O0FBRWhCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLHdEQUFXLENBQUNDLDREQUFELENBQXpCOztBQUhnQixrQkFJZ0NDLCtDQUFRLENBQUMsS0FBRCxDQUp4QztBQUFBLE1BSVRDLGdCQUpTO0FBQUEsTUFJU0MsbUJBSlQ7O0FBTWhCLE1BQU1DLG1CQUFtQixnREFBeUNGLGdCQUFnQixHQUFHLE9BQUgsR0FBYSxFQUF0RSxDQUF6QjtBQUVBRyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJUCxLQUFLLENBQUNRLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEI7QUFDRDs7QUFFREgsdUJBQW1CLENBQUMsSUFBRCxDQUFuQjtBQUVBLFFBQU1JLEtBQUssR0FBR0MsVUFBVSxDQUFDLFlBQUs7QUFDOUJMLHlCQUFtQixDQUFDLEtBQUQsQ0FBbkI7QUFDQyxLQUZ1QixFQUVyQixHQUZx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QUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFHLGlCQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9FRDs7R0E3RlFiLE07VUFDV0Msd0QsRUFDSEcsa0QsRUFDREUsb0Q7OztLQUhQTixNO0FBK0ZULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMzZGM2NTBjZGY4MWRhMzczNzcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHtcclxuICBNZW51SWNvbixcclxuICBTZWFyY2hJY29uLFxyXG4gIFNob3BwaW5nQ2FydEljb24sXHJcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0SXRlbXMgfSBmcm9tIFwiLi4vc2xpY2VzL2Jhc2tldFNsaWNlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaXRlbXMgPSB1c2VTZWxlY3RvcihzZWxlY3RJdGVtcyk7XHJcbiAgY29uc3QgW2J0bmlzSGlnaGxpZ2h0ZWQsIHNldEJ0bmlzSGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGJhc2tldEJ1dHRvbkNsYXNzZXMgPSBgc3RpY2t5IGxpbmsgZmxleCBpdGVtcy1jZW50ZXIgei01MCAke2J0bmlzSGlnaGxpZ2h0ZWQgPyAnIGJ1bXAnIDogJyd9YFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QnRuaXNIaWdobGlnaHRlZCh0cnVlKVxyXG5cclxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PntcclxuICAgIHNldEJ0bmlzSGlnaGxpZ2h0ZWQoZmFsc2UpXHJcbiAgICB9LCAzMDApXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gICAgfVxyXG5cclxuICB9LCBbaXRlbXNdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWhpZGRlblwiPlxyXG4gICAgICB7LyogVG9wIG5hdiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBiZy1zaG9wX2JsdWUgcC0xIGZsZXgtZ3JvdyBweS0yXCI+XHJcbiAgICAgICAgey8qIGxvZ28gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtZ3JvdyBpdGVtcy1jZW50ZXIgbXQtMiBzbTpmbGV4LWdyb3ctMFwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgc3JjPVwiaHR0cDovL2xpbmtzLnBhcGFyZWFjdC5jb20vZjkwXCJcclxuICAgICAgICAgICAgd2lkdGg9ezE1MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs0MH1cclxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7Lyogc2VhcmNoICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmZsZXggaXRlbXMtY2VudGVyIGZsZXgtZ3JvdyBoLTEwIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXIgYmcteWVsbG93LTQwMCBob3ZlcjpiZy15ZWxsb3ctNTAwXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGgtZnVsbCB3LTYgZmxleC1ncm93IHJvdW5kZWQtbC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgcHgtNFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoLTEyIHAtNFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBSaWdodCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14cyBzcGFjZS14LTYgbXgtNiBmbGV4IGl0ZW1zLWNlbnRlciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXshc2Vzc2lvbiA/IHNpZ25JbiA6IHNpZ25PdXR9IGNsYXNzTmFtZT1cImxpbmtcIj5cclxuICAgICAgICAgICAgPHA+e3Nlc3Npb24gPyBgSGVsbG8sICR7c2Vzc2lvbi51c2VyLm5hbWV9YCA6IFwiU2lnbiBJblwifTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgbWQ6dGV4dC1zbVwiPkFjY291bnQgJmFtcDsgTGlzdHM8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL29yZGVyc1wiKX0gY2xhc3NOYW1lPVwibGlua1wiPlxyXG4gICAgICAgICAgICA8cD5SZXR1cm48L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIG1kOnRleHQtc21cIj4mYW1wOyBPcmRlcnM8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogQmFza2V0QnV0dG9uICovfVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvY2hlY2tvdXRcIik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YmFza2V0QnV0dG9uQ2xhc3Nlc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBtZDpyaWdodC0xMCBoLTQgdy00IGJnLXllbGxvdy00MDAgdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsIHRleHQtYmxhY2sgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAge2l0ZW1zLmxlbmd0aH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8U2hvcHBpbmdDYXJ0SWNvbiBjbGFzc05hbWU9XCJoLTEwXCIgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZSBmb250LWV4dHJhYm9sZCBtZDp0ZXh0LXNtIG10LTJcIj5cclxuICAgICAgICAgICAgICBCYXNrZXRcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIEJvdHRvbSBuYXYgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIHAtMiBwbC02IGJnLXNob3BfYmx1ZS1saWdodCB0ZXh0LXdoaXRlIHRleHQtc21cIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPVwiaC02IG1yLTFcIiAvPlxyXG4gICAgICAgICAgQWxsXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmtcIj5QcmltZSBWaWRlbzwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rXCI+QW1hem9uIEJ1c2luZXNzPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==