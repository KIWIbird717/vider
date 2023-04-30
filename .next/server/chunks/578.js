exports.id = 578;
exports.ids = [578];
exports.modules = {

/***/ 9092:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": function() { return /* binding */ Text; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Text_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(366);
/* harmony import */ var _Text_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Text_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const {
  h1,
  h3,
  h4,
  b1,
  b2,
  b3,
  gr,
  bd,
  upp,
  primaryColor
} = (_Text_module_scss__WEBPACK_IMPORTED_MODULE_1___default());
const Text = (_ref) => {
  let {
    heading1,
    heading3,
    heading4,
    body1,
    body2,
    body3,
    bold,
    uppercase,
    noSelect,
    gradient,
    primary,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["heading1", "heading3", "heading4", "body1", "body2", "body3", "bold", "uppercase", "noSelect", "gradient", "primary", "children"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", _objectSpread(_objectSpread({
    className: `
        ${heading1 ? h1 : ''}
        ${body1 ? b1 : ''}
        ${body2 ? b2 : ''}
        ${body3 ? b3 : ''}
        ${heading3 ? h3 : ''}
        ${heading4 ? h4 : ''}
        ${gradient ? gr : ''}
        ${bold ? bd : ''}
        ${uppercase ? upp : ''}
        ${noSelect ? 'noSelect' : ''}
        ${primary ? primaryColor : ''}
        `.replace(/\s\s+/g, ' ')
  }, props), {}, {
    children: children
  }));
};

/***/ }),

/***/ 3578:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Atoms_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9646);
/* harmony import */ var _components_Atoms_Text_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9092);
/* harmony import */ var _hooks_useMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8880);
/* harmony import */ var _Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4234);
/* harmony import */ var _Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var _components_Features_Menu_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1085);
/* harmony import */ var _components_Features_Socials_Socials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5188);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Footer = (_ref) => {
  let props = Object.assign({}, _ref);
  const mobile = (0,_hooks_useMobile__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();
  const baseUrl = "/vider";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Atoms_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Grid */ .r, _objectSpread(_objectSpread({
      style: {
        textAlign: 'center'
      }
    }, props), {}, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", _objectSpread(_objectSpread({
        className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header)
      }, props), {}, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Atoms_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Grid */ .r, {
          centerX: true,
          column: mobile,
          centerY: mobile,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: '/',
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().logo),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: `${baseUrl}/logo.png`,
                alt: `logo`
              })
            })
          }), mobile ? undefined : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Features_Menu_Menu__WEBPACK_IMPORTED_MODULE_5__/* .Menu */ .v, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
              margin: 'calc(var(--index) * 1) 0'
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Features_Socials_Socials__WEBPACK_IMPORTED_MODULE_6__/* .Socials */ .I, {})
          }), mobile ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Features_Menu_Menu__WEBPACK_IMPORTED_MODULE_5__/* .Menu */ .v, {
            column: true
          }) : undefined]
        })
      }))
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Atoms_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Grid */ .r, {
      column: mobile,
      around: true,
      centerY: true,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Atoms_Text_Text__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .x, {
        body1: true,
        style: {
          opacity: 0.5
        },
        children: "\xA9 2022 VIDER. All rights reserved"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Atoms_Text_Text__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .x, {
        body1: true,
        style: {
          opacity: 0.5,
          margin: mobile ? 'calc(var(--index) * 1) 0' : ''
        },
        children: "Privacy policy"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Atoms_Text_Text__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .x, {
        body1: true,
        style: {
          opacity: 0.5
        },
        children: "Term & Condition"
      })]
    })]
  });
};

/***/ }),

/***/ 366:
/***/ (function(module) {

// Exports
module.exports = {
	"text": "Text_text__1Yfy0",
	"h1": "Text_h1__2AYxj",
	"h2": "Text_h2__21Kek",
	"h3": "Text_h3__2YmAU",
	"h4": "Text_h4__2Ozap",
	"b1": "Text_b1__17Ngr",
	"b2": "Text_b2__2jP8T",
	"b3": "Text_b3__kN3g8",
	"gr": "Text_gr__3pSYI",
	"primaryColor": "Text_primaryColor__3dfJY",
	"bd": "Text_bd__LsdK6",
	"upp": "Text_upp__1nKDf"
};


/***/ })

};
;