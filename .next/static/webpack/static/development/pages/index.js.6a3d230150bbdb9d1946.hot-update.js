webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Section */ "./components/Section.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Color */ "./components/Color.js");
/* harmony import */ var _Headings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Headings */ "./components/Headings.js");
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Paragraph */ "./components/Paragraph.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Menu */ "./components/Menu.js");






var _jsxFileName = "/home/okjuszide/Desktop/react/components/Container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







var Container =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Container, _Component);

  function Container(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Container);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Container).call(this, props));
    _this.state = {
      font: 'sans-serif',
      color: ['rgba( 255, 0, 0, .3 )', 'rgba( 255, 0, 0, .8 )', 'red']
    };
    _this.changeFont = _this.changeFont.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.changeColor = _this.changeColor.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Container, [{
    key: "changeFont",
    value: function changeFont(e) {
      this.setState({
        font: this.state.font == 'serif' ? 'sans-serif' : 'serif'
      });
    }
  }, {
    key: "changeColor",
    value: function changeColor(e) {
      switch (e.target.value) {
        case 'red':
          this.setState({
            color: ['rgba( 255, 0, 0, .3 )', 'rgba( 255, 0, 0, .8 )', 'red']
          });
          break;

        case 'blue':
          this.setState({
            color: ['rgba( 0, 0, 255, .3 )', 'rgba( 0, 0, 255, .8 )', 'blue']
          });
          break;

        default:
          this.setState({
            color: ['rgba( 255, 0, 0, 0, .3 )', 'rgba( 255, 0, 0, 0, .8 )', 'red']
          });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_11__["default"], {
        changeFont: this.chagneFont,
        changeColor: this.changeColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx(_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "01.Typography",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx(_Headings__WEBPACK_IMPORTED_MODULE_9__["default"], {
        font: this.state.font,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx(_Paragraph__WEBPACK_IMPORTED_MODULE_10__["default"], {
        font: this.state.font,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), __jsx(_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "02.Color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx(_Color__WEBPACK_IMPORTED_MODULE_8__["default"], {
        colors: ["white", "black-19a", "black-39a", "black-59a", "black-79a", "black-89a", "black-100a"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), __jsx(_Color__WEBPACK_IMPORTED_MODULE_8__["default"], {
        colors: this.state.color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      })));
    }
  }]);

  return Container;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ })

})
//# sourceMappingURL=index.js.6a3d230150bbdb9d1946.hot-update.js.map