webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Section */ "./components/Section.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Color */ "./components/Color.js");
/* harmony import */ var _Headings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Headings */ "./components/Headings.js");
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Paragraph */ "./components/Paragraph.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Menu */ "./components/Menu.js");







var _jsxFileName = "/home/okjuszide/Desktop/tipitaptap/react/components/Container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






var whiteToBlack = ["white", "rgba(0,0,0, .19)", "rgba(0,0,0, .39)", "rgba(0,0,0, .59)", "rgba(0,0,0, .79)", "rgba(0,0,0, .89", "black"];

var Container =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Container, _Component);

  function Container(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Container);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Container).call(this, props));
    _this.state = {
      font: 'sans-serif',
      color: ['rgba(0, 0, 255, .3)', 'rgba(0, 0, 255, .7)', 'blue']
    };
    _this.changeFont = _this.changeFont.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.changeColor = _this.changeColor.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Container, [{
    key: "changeFont",
    value: function changeFont(e) {
      this.setState({
        font: e.target[e.target.selectedIndex].value
      });
    }
  }, {
    key: "changeColor",
    value: function changeColor(e) {
      var hex = e.target.value.replace('#', '');

      var r = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(hex.substring(0, 2), 16);

      var g = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(hex.substring(2, 4), 16);

      var b = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(hex.substring(4, 6), 16);

      this.setState({
        color: ["rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", .3)"), "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", .7)"), "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")")]
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_12__["default"], {
        changeFont: this.changeFont,
        changeColor: this.changeColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx(_Section__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "01.Typography",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx(_Headings__WEBPACK_IMPORTED_MODULE_10__["default"], {
        font: this.state.font,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), __jsx(_Paragraph__WEBPACK_IMPORTED_MODULE_11__["default"], {
        font: this.state.font,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })), __jsx(_Section__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "02.Color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx(_Color__WEBPACK_IMPORTED_MODULE_9__["default"], {
        colors: ["white", "rgba(0,0,0, .19)", "rgba(0,0,0, .39)", "rgba(0,0,0, .59)", "rgba(0,0,0, .79)", "rgba(0,0,0, .89", "black"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx(_Color__WEBPACK_IMPORTED_MODULE_9__["default"], {
        colors: this.state.color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })));
    }
  }]);

  return Container;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ })

})
//# sourceMappingURL=index.js.e7d20558ddf97ee16551.hot-update.js.map