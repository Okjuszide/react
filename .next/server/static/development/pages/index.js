module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Color.js":
/*!*****************************!*\
  !*** ./components/Color.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/okjuszide/Desktop/tipitaptap/react/components/Color.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Color({
  colors
}) {
  return __jsx("div", {
    className: "jsx-2558793635" + " " + "color",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, colors.map((item, key) => {
    return __jsx("div", {
      key: key,
      style: {
        backgroundColor: item
      },
      className: "jsx-2558793635" + " " + 'box',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2558793635",
    __self: this
  }, ".color.jsx-2558793635{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 4em;}.box.jsx-2558793635{width:10em;height:10em;border:1px solid black;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29ranVzemlkZS9EZXNrdG9wL3RpcGl0YXB0YXAvcmVhY3QvY29tcG9uZW50cy9Db2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRd0IsQUFHa0MsQUFJRixXQUNDLFlBQ1csdUJBQ1osV0FDZixpQkFQaUIsYUFDakIiLCJmaWxlIjoiL2hvbWUvb2tqdXN6aWRlL0Rlc2t0b3AvdGlwaXRhcHRhcC9yZWFjdC9jb21wb25lbnRzL0NvbG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQ29sb3IoIHtjb2xvcnN9ICkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvclwiPlxyXG4gICAgICAgICAgICB7IGNvbG9ycy5tYXAoKCBpdGVtLCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9eyBrZXkgfSBjbGFzc05hbWU9J2JveCcgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBpdGVtIH19PjwvZGl2PlxyXG4gICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5jb2xvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbG9yIl19 */\n/*@ sourceURL=/home/okjuszide/Desktop/tipitaptap/react/components/Color.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Color);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section */ "./components/Section.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Color */ "./components/Color.js");
/* harmony import */ var _Headings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Headings */ "./components/Headings.js");
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Paragraph */ "./components/Paragraph.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu */ "./components/Menu.js");

var _jsxFileName = "/home/okjuszide/Desktop/tipitaptap/react/components/Container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const whiteToBlack = ["white", "rgba(0,0,0, .19)", "rgba(0,0,0, .39)", "rgba(0,0,0, .59)", "rgba(0,0,0, .79)", "rgba(0,0,0, .89", "black"];

class Container extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      font: 'sans-serif',
      color: ['rgba(0, 0, 255, .3)', 'rgba(0, 0, 255, .7)', 'blue']
    };
    this.changeFont = this.changeFont.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  changeFont(e) {
    this.setState({
      font: e.target[e.target.selectedIndex].value
    });
  }

  changeColor(e) {
    let hex = e.target.value.replace('#', '');

    let r = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(hex.substring(0, 2), 16);

    let g = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(hex.substring(2, 4), 16);

    let b = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(hex.substring(4, 6), 16);

    this.setState({
      color: [`rgba(${r}, ${g}, ${b}, .3)`, `rgba(${r}, ${g}, ${b}, .7)`, `rgb(${r}, ${g}, ${b})`]
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
      changeFont: this.changeFont,
      changeColor: this.changeColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), __jsx(_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "01.Typography",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx(_Headings__WEBPACK_IMPORTED_MODULE_4__["default"], {
      font: this.state.font,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), __jsx(_Paragraph__WEBPACK_IMPORTED_MODULE_5__["default"], {
      font: this.state.font,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })), __jsx(_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "02.Color",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(_Color__WEBPACK_IMPORTED_MODULE_3__["default"], {
      colors: whiteToBlack,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), __jsx(_Color__WEBPACK_IMPORTED_MODULE_3__["default"], {
      colors: this.state.color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/Headings.js":
/*!********************************!*\
  !*** ./components/Headings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/okjuszide/Desktop/tipitaptap/react/components/Headings.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Headings extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["478199762", [this.props.font]]]) + " " + "headings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("h1", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["478199762", [this.props.font]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Heading 1"), __jsx("h2", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["478199762", [this.props.font]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Heading 2"), __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["478199762", [this.props.font]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Heading 3"), __jsx("h4", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["478199762", [this.props.font]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Heading 4"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "478199762",
      dynamic: [this.props.font],
      __self: this
    }, `h1.__jsx-style-dynamic-selector,h2.__jsx-style-dynamic-selector,h3.__jsx-style-dynamic-selector,h4.__jsx-style-dynamic-selector,p.__jsx-style-dynamic-selector{font-family:${this.props.font};}.headings.__jsx-style-dynamic-selector{width:40em;margin:2em 4em;}h1.__jsx-style-dynamic-selector{font-size:5.6em;}h2.__jsx-style-dynamic-selector{font-size:4.2em;}h3.__jsx-style-dynamic-selector{font-size:3.15em;}h4.__jsx-style-dynamic-selector{font-size:2.3625em;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29ranVzemlkZS9EZXNrdG9wL3RpcGl0YXB0YXAvcmVhY3QvY29tcG9uZW50cy9IZWFkaW5ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlNEIsQUFJb0IsQUFHZ0IsQUFLSyxBQUlBLEFBSUMsQUFJRSxXQWhCSixLQUtuQixBQUlBLENBSUEsRUFJQSxPQWhCQSxlQUxBIiwiZmlsZSI6Ii9ob21lL29ranVzemlkZS9EZXNrdG9wL3RpcGl0YXB0YXAvcmVhY3QvY29tcG9uZW50cy9IZWFkaW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY2xhc3MgSGVhZGluZ3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoIHByb3BzICkge1xyXG4gICAgICAgIHN1cGVyKCBwcm9wcyApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+SGVhZGluZyAxPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMj5IZWFkaW5nIDI8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgzPkhlYWRpbmcgMzwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDQ+SGVhZGluZyA0PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgaDEsIGgyLCBoMywgaDQsIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHsgdGhpcy5wcm9wcy5mb250IH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkaW5ncyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJlbSA0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNC4yZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy4xNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMzYyNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5ncyJdfQ== */
/*@ sourceURL=/home/okjuszide/Desktop/tipitaptap/react/components/Headings.js */`));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Headings);

/***/ }),

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/okjuszide/Desktop/tipitaptap/react/components/Hero.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Hero() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3197636068" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3197636068",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Style Guide")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3197636068",
    __self: this
  }, ".hero.jsx-3197636068{height:15em;background-color:rgba(0,0,0,0.79);}.hero.jsx-3197636068>h1.jsx-3197636068{font-size:5.6em;color:white;font-weight:lighter;padding:.5em;}.hero.jsx-3197636068>h1.jsx-3197636068:after{content:\"\";position:absolute;top:1.05em;left:6em;width:65%;height:3px;background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29ranVzemlkZS9EZXNrdG9wL3RpcGl0YXB0YXAvcmVhY3QvY29tcG9uZW50cy9IZXJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9vQixBQUc2QixBQUtJLEFBT0wsV0FDTyxDQVptQixJQUt6QixZQUNRLENBT1QsV0FDRixNQWJiLEVBTWlCLENBUUgsVUFDQyxFQVJmLFNBUzJCLHVCQUMzQiIsImZpbGUiOiIvaG9tZS9va2p1c3ppZGUvRGVza3RvcC90aXBpdGFwdGFwL3JlYWN0L2NvbXBvbmVudHMvSGVyby5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEhlcm8oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XHJcbiAgICAgICAgICAgIDxoMT5TdHlsZSBHdWlkZTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuaGVybyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaGVybyA+IGgxIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNS42ZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZXJvID4gaDE6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMS4wNWVtO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9cclxuIl19 */\n/*@ sourceURL=/home/okjuszide/Desktop/tipitaptap/react/components/Hero.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/okjuszide/Desktop/tipitaptap/react/components/Menu.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

var obj = {
  fonts: ['Sans-serif', 'Serif']
};

class Menu extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleClick", () => {
      this.setState({
        show: !this.state.show
      });
    });

    this.state = {
      show: false
    };
  }

  render() {
    return __jsx("nav", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1234583047", [this.state.show ? 'block' : 'none', this.state.show && 'border: none']]]) + " " + "menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("div", {
      onClick: this.handleClick,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1234583047", [this.state.show ? 'block' : 'none', this.state.show && 'border: none']]]) + " " + "hamburger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1234583047", [this.state.show ? 'block' : 'none', this.state.show && 'border: none']]]) + " " + (this.state.show && 'show' || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })), __jsx("ul", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1234583047", [this.state.show ? 'block' : 'none', this.state.show && 'border: none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1234583047", [this.state.show ? 'block' : 'none', this.state.show && 'border: none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("select", {
      name: "fonts",
      onChange: this.props.changeFont,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1234583047", [this.state.show ? 'block' : 'none', this.state.show && 'border: none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, obj.fonts.map(font => __jsx("option", {
      style: {
        font
      },
      value: font,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1234583047", [this.state.show ? 'block' : 'none', this.state.show && 'border: none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, font)))), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1234583047", [this.state.show ? 'block' : 'none', this.state.show && 'border: none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("input", {
      type: "color",
      onChange: this.props.changeColor,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1234583047", [this.state.show ? 'block' : 'none', this.state.show && 'border: none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1234583047",
      dynamic: [this.state.show ? 'block' : 'none', this.state.show && 'border: none'],
      __self: this
    }, `.menu.__jsx-style-dynamic-selector{position:fixed;right:0;background-color:white;border:2px solid black;background-color:white;border-top:2px solid black;border-left:2px solid black;border-bottom:2px solid black;border-right:2px solid black;padding-bottom:4px;}.menu.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector{display:${this.state.show ? 'block' : 'none'};list-style:none;}.menu.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector>li.__jsx-style-dynamic-selector{padding:20px;}.hamburger.__jsx-style-dynamic-selector{position:relative;width:62px;height:62px;cursor:pointer;${this.state.show && 'border: none'};}.hamburger.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{position:absolute;margin-top:31px;left:10px;width:42px;height:2px;display:block;background-color:black;}.hamburger.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:before{content:"";position:absolute;left:0px;top:-15px;width:42px;height:2px;background-color:black;}.hamburger.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:after{content:"";position:absolute;left:0px;top:15px;width:42px;height:2px;background-color:black;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29ranVzemlkZS9EZXNrdG9wL3RpcGl0YXB0YXAvcmVhY3QvY29tcG9uZW50cy9NZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9ENEIsQUFHd0MsQUFZc0IsQUFJeEIsQUFHSyxBQU9BLEFBU1AsQUFVQSxXQVRPLEFBVUEsRUE3QnRCLEVBaEJZLEdBbUJHLEFBT0ssS0F6Qk8sTUFtQlgsQUFnQkgsQUFVQSxLQW5CQyxHQWZNLENBeUJOLEFBVUQsR0ExQk0sR0FPSixFQTFCWSxDQThDWixDQVRBLEtBMUJmLEVBZ0JlLENBTmhCLEVBMEJnQixDQVRBLE9BVkcsR0EzQlMsQUErQ0EsQ0FUQSxVQVZBLEtBUjNCLE9BbkIrQixBQStDL0IsQ0FUQSxVQVZBLGdCQTNCZ0MsNEJBQ0UsOEJBQ0QsNkJBQ1YsbUJBQ3ZCIiwiZmlsZSI6Ii9ob21lL29ranVzemlkZS9EZXNrdG9wL3RpcGl0YXB0YXAvcmVhY3QvY29tcG9uZW50cy9NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG52YXIgb2JqID0ge1xyXG4gICAgZm9udHM6IFtcclxuICAgICAgICAnU2Fucy1zZXJpZicsXHJcbiAgICAgICAgJ1NlcmlmJ1xyXG4gICAgXSxcclxufVxyXG5cclxuY2xhc3MgTWVudSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3c6ICF0aGlzLnN0YXRlLnNob3dcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNob3cgJiYgJ3Nob3cnfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJmb250c1wiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZUZvbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29iai5mb250cy5tYXAoIGZvbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9udH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb250fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VDb2xvcn0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tZW51ID4gdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUuc2hvdyA/ICdibG9jaycgOiAnbm9uZSd9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubWVudSA+IHVsID4gbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ2VyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5zdGF0ZS5zaG93ICYmICdib3JkZXI6IG5vbmUnfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ2VyIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ2VyIHNwYW46YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ2VyIHNwYW46YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudSJdfQ== */
/*@ sourceURL=/home/okjuszide/Desktop/tipitaptap/react/components/Menu.js */`));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/Paragraph.js":
/*!*********************************!*\
  !*** ./components/Paragraph.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/okjuszide/Desktop/tipitaptap/react/components/Paragraph.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Paragraph(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723418153", [props.font]]]) + " " + "paragraph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3723418153", [props.font]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3723418153",
    dynamic: [props.font],
    __self: this
  }, `.paragraph.__jsx-style-dynamic-selector{width:40em;text-align:justify;font-family:${props.font};margin:2em 0;}p.__jsx-style-dynamic-selector{font-size:1.8em;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29ranVzemlkZS9EZXNrdG9wL3RpcGl0YXB0YXAvcmVhY3QvY29tcG9uZW50cy9QYXJhZ3JhcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3dCLEFBR2dDLEFBT0ssV0FORyxLQU92QixjQU42Qyx5Q0FDNUIsYUFDakIiLCJmaWxlIjoiL2hvbWUvb2tqdXN6aWRlL0Rlc2t0b3AvdGlwaXRhcHRhcC9yZWFjdC9jb21wb25lbnRzL1BhcmFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFBhcmFncmFwaCggcHJvcHMgKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5Mb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5wYXJhZ3JhcGgge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7IHByb3BzLmZvbnQgfTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJlbSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcmFncmFwaCJdfQ== */
/*@ sourceURL=/home/okjuszide/Desktop/tipitaptap/react/components/Paragraph.js */`));
}

/* harmony default export */ __webpack_exports__["default"] = (Paragraph);

/***/ }),

/***/ "./components/Section.js":
/*!*******************************!*\
  !*** ./components/Section.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./components/Title.js");
var _jsxFileName = "/home/okjuszide/Desktop/tipitaptap/react/components/Section.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Section(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    className: "jsx-3838512130" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3838512130" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.children)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3838512130",
    __self: this
  }, ".container.jsx-3838512130{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}p.jsx-3838512130{font-size:1.8em;}.content.jsx-3838512130{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:100em;}.content.jsx-3838512130>div.jsx-3838512130{padding:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29ranVzemlkZS9EZXNrdG9wL3RpcGl0YXB0YXAvcmVhY3QvY29tcG9uZW50cy9TZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlvQixBQUc4QixBQUlHLEFBSUgsQUFNQSxhQUNqQixHQVZBLDBEQUpBLEFBUW1CLHlEQUNDLGdCQUNwQiIsImZpbGUiOiIvaG9tZS9va2p1c3ppZGUvRGVza3RvcC90aXBpdGFwdGFwL3JlYWN0L2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiXHJcblxyXG5mdW5jdGlvbiBTZWN0aW9uKCBwcm9wcyApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIiA+XHJcbiAgICAgICAgICAgIDxUaXRsZSB0aXRsZT17IHByb3BzLnRpdGxlIH0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuY29udGVudCA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICB9ICBcclxuXHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uIl19 */\n/*@ sourceURL=/home/okjuszide/Desktop/tipitaptap/react/components/Section.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./components/Title.js":
/*!*****************************!*\
  !*** ./components/Title.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/okjuszide/Desktop/tipitaptap/react/components/Title.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Title(props) {
  let h2Style = {
    fontSize: "2em",
    fontFamily: "Courier New",
    fontWeight: 300,
    textAlign: "center",
    paddingTop: "2.6em"
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2244433638" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h2", {
    style: h2Style,
    className: "jsx-2244433638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2244433638",
    __self: this
  }, ".title.jsx-2244433638{width:25em;padding:2em 3em;background-color:#63ccff;text-align:center;color:rgba(0,0,0,0.89);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29ranVzemlkZS9EZXNrdG9wL3RpcGl0YXB0YXAvcmVhY3QvY29tcG9uZW50cy9UaXRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQm9CLEFBR2dDLFdBQ0ssZ0JBQ1MseUJBQ1Asa0JBQ1EsdUJBQ2hDIiwiZmlsZSI6Ii9ob21lL29ranVzemlkZS9EZXNrdG9wL3RpcGl0YXB0YXAvcmVhY3QvY29tcG9uZW50cy9UaXRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFRpdGxlKCBwcm9wcyApIHtcclxuICAgIGxldCBoMlN0eWxlID0ge1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjJlbVwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQ291cmllciBOZXdcIixcclxuICAgICAgICBmb250V2VpZ2h0OiAzMDAsXHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMi42ZW1cIlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDIgc3R5bGU9eyBoMlN0eWxlIH0+XHJcbiAgICAgICAgICAgICAgICB7IHByb3BzLnRpdGxlIH1cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyZW0gM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2M2NjZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlIl19 */\n/*@ sourceURL=/home/okjuszide/Desktop/tipitaptap/react/components/Title.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
var _jsxFileName = "/home/okjuszide/Desktop/tipitaptap/react/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1162110350",
    __self: this
  }, "*{margin:0;padding:0;}html{font-size:62.5%;font-family:Roboto,Arial,Sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29ranVzemlkZS9EZXNrdG9wL3RpcGl0YXB0YXAvcmVhY3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVTJCLEFBRzBCLEFBS08sU0FKTixPQUs0QixHQUoxQyxpQ0FLQSIsImZpbGUiOiIvaG9tZS9va2p1c3ppZGUvRGVza3RvcC90aXBpdGFwdGFwL3JlYWN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlcm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVyb1wiXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCJcclxuXHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVybyAvPlxyXG4gICAgICAgIDxDb250YWluZXIgLz5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjIuNSU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgU2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=/home/okjuszide/Desktop/tipitaptap/react/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/okjuszide/Desktop/tipitaptap/react/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map