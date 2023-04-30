exports.id = 323;
exports.ids = [323];
exports.modules = {

/***/ 9646:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": function() { return /* binding */ Grid; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Grid_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1230);
/* harmony import */ var _Grid_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Grid_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const Grid = (_ref) => {
  let {
    className,
    centerX,
    centerY,
    column,
    reverse,
    between,
    around,
    children,
    onStart,
    onEnd,
    autoX,
    wrap
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "centerX", "centerY", "column", "reverse", "between", "around", "children", "onStart", "onEnd", "autoX", "wrap"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", _objectSpread(_objectSpread({
    className: `
      ${(_Grid_module_scss__WEBPACK_IMPORTED_MODULE_1___default().grid)}
      ${centerX ? (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_1___default().centerX) : ''}
      ${centerY ? (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_1___default().centerY) : ''}
      ${autoX ? (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_1___default().widthAuto) : (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_1___default().widthFull)}
      ${column ? (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_1___default().column) : ''}
      ${reverse ? (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_1___default().columnReverse) : ''}
      ${between ? (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_1___default().between) : ''}
      ${around ? (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_1___default().around) : ''}
      ${onStart ? (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_1___default().start) : ''}
      ${onEnd ? (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_1___default().end) : ''}
      ${wrap ? (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_1___default().wrap) : ''}
      ${className}
      `.replace(/\s\s+/g, ' ')
  }, props), {}, {
    children: children
  }));
};

/***/ }),

/***/ 1085:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": function() { return /* binding */ Menu; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7040);
/* harmony import */ var _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Atoms_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9646);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const menu = [{
  name: 'About',
  route: 'about'
}, {
  name: 'Collection',
  route: 'collection'
}, {
  name: 'Roadmap',
  route: 'roadmap'
}, {
  name: 'Team',
  route: 'team'
}, {
  name: 'Faq',
  route: 'faq'
}];
const Menu = (_ref) => {
  let {
    column
  } = _ref,
      props = _objectWithoutProperties(_ref, ["column"]);

  const scrollIt = route => {
    const to = document.getElementById(`${route}`);

    if (to) {
      window.scrollTo({
        top: to.offsetTop + window.innerHeight * 3 + 550,
        behavior: 'smooth'
      });
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Atoms_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Grid */ .r, _objectSpread(_objectSpread({
    className: (_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default().menu),
    column: column,
    centerX: true,
    centerY: true
  }, props), {}, {
    children: menu.map(({
      name,
      name1,
      href,
      route
    }) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default().link),
        onClick: () => scrollIt(route),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          children: name
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          href: href,
          target: "_blank",
          style: {
            textDecoration: 'none'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: name1
          })
        })]
      }, name || name1);
    })
  }));
};

/***/ }),

/***/ 5188:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": function() { return /* binding */ Socials; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Socials_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7865);
/* harmony import */ var _Socials_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Socials_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Atoms_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9646);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const baseUrl = "/vider";
const socials = [{
  icon: baseUrl + '/socials/instagram.svg',
  href: '',
  name: 'instagram'
}, {
  icon: baseUrl + '/socials/twitter.svg',
  href: '',
  name: 'twitter'
}, {
  icon: baseUrl + '/socials/discord.svg',
  href: '',
  name: 'dicord'
}];
const Socials = (_ref) => {
  let props = Object.assign({}, _ref);
  const {
    0: mounted,
    1: setMounted
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: slider,
    1: setSlider
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    console.log('mounted');
    setMounted(true);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Atoms_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Grid */ .r, _objectSpread(_objectSpread({}, props), {}, {
    children: socials.map(({
      icon,
      href,
      name
    }) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: href,
        target: "_blank",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          className: (_Socials_module_scss__WEBPACK_IMPORTED_MODULE_3___default().socials),
          src: icon,
          alt: name
        }, name)
      }, name);
    })
  }));
};

/***/ }),

/***/ 8880:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useMobile() {
  const {
    0: mobile,
    1: setMobile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const mobileHandler = () => {
    setMobile(window.innerWidth < 960);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    mobileHandler();
    window.addEventListener('resize', () => {
      mobileHandler();
    });
    return () => {
      window.removeEventListener('resize', mobileHandler);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    mobileHandler;
  }, [mobile]);
  return mobile;
}

/* harmony default export */ __webpack_exports__["Z"] = (useMobile);

/***/ }),

/***/ 7647:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": function() { return /* binding */ withLayout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/Atoms/Grid/Grid.tsx
var Grid = __webpack_require__(9646);
// EXTERNAL MODULE: ./components/Features/Menu/Menu.tsx
var Menu = __webpack_require__(1085);
// EXTERNAL MODULE: ./layout/Header/Header.module.scss
var Header_module = __webpack_require__(4234);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./hooks/useMobile.ts
var useMobile = __webpack_require__(8880);
// EXTERNAL MODULE: ./components/Features/Socials/Socials.tsx
var Socials = __webpack_require__(5188);
;// CONCATENATED MODULE: ./layout/Header/Header.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Header = (_ref) => {
  let props = Object.assign({}, _ref);
  const mobile = (0,useMobile/* default */.Z)();
  const baseUrl = "/vider";
  return /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread(_objectSpread({
    id: "header",
    className: `${(Header_module_default()).header} noSelect`
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Grid */.r, {
      between: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: '/',
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Header_module_default()).logo,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: `${baseUrl}/logo.png`,
            alt: 'logo'
          })
        })
      }), mobile ? undefined : /*#__PURE__*/jsx_runtime_.jsx(Menu/* Menu */.v, {}), mobile ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {},
        children: /*#__PURE__*/jsx_runtime_.jsx(Socials/* Socials */.I, {})
      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "socialsheader",
        children: /*#__PURE__*/jsx_runtime_.jsx(Socials/* Socials */.I, {})
      })]
    })
  }));
};
;// CONCATENATED MODULE: ./layout/Layout.tsx



function Layout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Layout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Layout_ownKeys(Object(source), true).forEach(function (key) { Layout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Layout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Layout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Grid */.r, {
    column: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
      style: {
        position: 'fixed'
      }
    }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Grid */.r, {
      children: children
    })]
  });
};

const withLayout = Component => {
  return function withLayoutComponent(props) {
    return /*#__PURE__*/jsx_runtime_.jsx(Layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, Layout_objectSpread({}, props))
    });
  };
};

/***/ }),

/***/ 1230:
/***/ (function(module) {

// Exports
module.exports = {
	"grid": "Grid_grid__3MtPr",
	"column": "Grid_column__3NdJN",
	"columnReverse": "Grid_columnReverse__2T0ks",
	"centerX": "Grid_centerX___HM46",
	"widthAuto": "Grid_widthAuto__Fdh54",
	"widthFull": "Grid_widthFull__5DU3n",
	"centerY": "Grid_centerY__1h8xq",
	"between": "Grid_between__iRNmS",
	"around": "Grid_around__2pqhu",
	"start": "Grid_start__3jmcj",
	"end": "Grid_end__1jPF0",
	"wrap": "Grid_wrap__5Hdrb"
};


/***/ }),

/***/ 7040:
/***/ (function(module) {

// Exports
module.exports = {
	"link": "Menu_link__3asKp",
	"menuFooter": "Menu_menuFooter__12TQP",
	"a": "Menu_a__1SZ6v"
};


/***/ }),

/***/ 7865:
/***/ (function(module) {

// Exports
module.exports = {
	"socials": "Socials_socials__MW5Pi"
};


/***/ }),

/***/ 4234:
/***/ (function(module) {

// Exports
module.exports = {
	"header": "Header_header__C9Hvv",
	"logo": "Header_logo__jfQ4x",
	"menu": "Header_menu__1AEZv"
};


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;