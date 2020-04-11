(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Sidebar/style.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/Sidebar/style.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\n  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#086788+0,07407a+100 */\n  background: #086788; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(\n        to bottom,\n        #086788 0%,\n        #07407a 100%\n    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#086788', endColorstr='#07407a',GradientType=0 ); /* IE6-9 */\n}\n", ""]);

// exports


/***/ }),

/***/ "./resources/img/logo.svg":
/*!********************************!*\
  !*** ./resources/img/logo.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.svg?a74723447561c8ff66abc44d640bc2ba";

/***/ }),

/***/ "./resources/js/components/Sidebar/index.js":
/*!**************************************************!*\
  !*** ./resources/js/components/Sidebar/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./resources/js/components/Sidebar/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);




var logo = __webpack_require__(/*! ../../../img/logo.svg */ "./resources/img/logo.svg");

var Sidebar = function Sidebar(_ref) {
  var active = _ref.active;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-64 mr-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "fixed top-0 w-56 ml-8 mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: logo,
    alt: "BudgetMate"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar fixed top-0 bottom-0 shadow-lg rounded-lg bg-blue w-64 mt-20 mb-4 mx-4 p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "font-display"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    to: "/",
    title: "Dashboard",
    active: active === 'dashboard'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    to: "/transactions",
    title: "Transactions",
    active: active === 'transactions'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    to: "/calendar",
    title: "Calendar",
    active: active === 'calendar'
  })))));
};

var MenuItem = function MenuItem(_ref2) {
  var to = _ref2.to,
      title = _ref2.title,
      active = _ref2.active;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "relative"
  }, active && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "absolute bg-yellow w-1 rounded-r-sm h-full left-0 top-0 bottom-0 -ml-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: to,
    className: "block transition duration-500 ease-in-out -mx-2 px-2 py-2 text-white hover:bg-transparent-white rounded"
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./resources/js/components/Sidebar/style.css":
/*!***************************************************!*\
  !*** ./resources/js/components/Sidebar/style.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/postcss-loader/src??ref--6-2!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Sidebar/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/screens/Transactions/index.js":
/*!****************************************************!*\
  !*** ./resources/js/screens/Transactions/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Sidebar */ "./resources/js/components/Sidebar/index.js");



var Transactions = function Transactions() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    active: "transactions"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Transactions"));
};

/* harmony default export */ __webpack_exports__["default"] = (Transactions);

/***/ })

}]);
//# sourceMappingURL=1.js.map