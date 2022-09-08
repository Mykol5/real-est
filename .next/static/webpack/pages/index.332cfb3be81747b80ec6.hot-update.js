webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/package.js":
/*!*********************************!*\
  !*** ./src/sections/package.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Package; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Toshiba\\Desktop\\005-agency-modern-next\\src\\sections\\package.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** @jsx jsx */
var packages = {
  monthly: [{
    id: 1,
    name: 'Free Plan',
    description: 'For Small teams or office',
    buttonText: 'Start free trail',
    priceWithUnit: '$0',
    points: [{
      id: 1,
      text: 'Drag & Drop Builder',
      isAvailable: true
    }, {
      id: 2,
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 3,
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 4,
      text: 'eCommerce Store ',
      isAvailable: true
    }]
  }, {
    id: 2,
    name: 'Business king',
    description: 'For Enterprise business',
    priceWithUnit: '$15',
    buttonText: 'Create account',
    anotherOption: 'Or Start 14 Days trail',
    points: [{
      id: 1,
      text: 'Drag & Drop Builder',
      isAvailable: true
    }, {
      id: 2,
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 3,
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 4,
      text: 'eCommerce Store ',
      isAvailable: true
    }]
  }, {
    id: 3,
    header: 'Suggested',
    name: 'Pro Master',
    description: 'For pro level developers',
    priceWithUnit: '$24',
    buttonText: 'Create account',
    anotherOption: 'Or Start 14 Days trail',
    points: [{
      id: 1,
      text: 'Drag & Drop Builder',
      isAvailable: true
    }, {
      id: 2,
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 3,
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 4,
      text: 'eCommerce Store ',
      isAvailable: true
    }]
  }],
  annual: [{
    id: 1,
    name: 'Free Plan',
    description: 'For Small teams or office',
    buttonText: 'Start free trail',
    priceWithUnit: '$0',
    points: [{
      id: 1,
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 2,
      text: 'Drag & Drop Builder',
      isAvailable: true
    }, {
      id: 3,
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 4,
      text: 'eCommerce Store ',
      isAvailable: true
    }]
  }, {
    id: 2,
    name: 'Business king',
    description: 'For Enterprise business',
    priceWithUnit: '$25',
    buttonText: 'Create account',
    anotherOption: 'Or Start 10 Days trail',
    points: [{
      id: 1,
      text: 'eCommerce Store',
      isAvailable: true
    }, {
      id: 2,
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 3,
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 4,
      text: 'Drag & Drop Builder ',
      isAvailable: true
    }]
  }, {
    id: 3,
    header: 'Suggested',
    name: 'Pro Master',
    description: 'For pro level developers',
    priceWithUnit: '$39',
    buttonText: 'Create account',
    anotherOption: 'Or Start 10 Days trail',
    points: [{
      id: 1,
      text: 'eCommerce Store',
      isAvailable: true
    }, {
      id: 2,
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 3,
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 4,
      text: 'Drag & Drop Builder ',
      isAvailable: true
    }]
  }]
};
var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    draggable: false
  },
  tablet: {
    breakpoint: {
      max: 1023,
      min: 640
    },
    items: 2,
    draggable: true
  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    draggable: true
  }
};
function Package() {
  var _this = this;

  var monthly = packages.monthly,
      annual = packages.annual;

  var handlePricingPlan = function handlePricingPlan(plan) {
    if (plan === 'annual') {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        active: 'annual',
        pricingPlan: annual
      }));
    } else {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        active: 'monthly',
        pricingPlan: monthly
      }));
    }
  };

  var sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: ''
  };
  jsx("section", {
    id: "pricing",
    sx: {
      variant: 'section.pricing'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 5
    }
  }, jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }
  }, jsx(SectionHeader, {
    slogan: "",
    title: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }
  }), jsx(Flex, {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 9
    }
  }, jsx(Box, {
    sx: styles.buttonGroupInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 11
    }
  }, jsx("button", {
    className: state.active === 'monthly' ? 'active' : '',
    type: "button",
    "aria-label": "Monthly",
    onClick: function onClick() {
      return handlePricingPlan('monthly');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 13
    }
  }), jsx("button", {
    className: state.active === 'annual' ? 'active' : '',
    type: "button",
    "aria-label": "Annual",
    onClick: function onClick() {
      return handlePricingPlan('annual');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 13
    }
  }))), jsx(Box, {
    sx: styles.pricingWrapper,
    className: "pricing__wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 9
    }
  }, jsx(Carousel, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sliderParams, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 11
    }
  }), state.pricingPlan.map(function (packageData) {
    return jsx(Box, {
      sx: styles.pricingItem,
      key: "".concat(state.active, "-card--key").concat(packageData.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 15
      }
    }, jsx(PriceCard, {
      data: packageData,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 17
      }
    }));
  })))));
}
_c = Package;
var styles = {
  pricingWrapper: {
    mb: '',
    mt: '',
    mx: -3,
    display: '',
    flexDirection: '',
    flexWrap: '',
    '': {
      '': {
        animation: ""
      },
      'ul > li': {
        animation: ""
      },
      '.package__price': {
        animation: ""
      },
      button: {
        animation: ""
      }
    },
    '.carousel-container': {
      width: '',
      '> ul > li ': {
        display: ''
      }
    }
  },
  buttonGroupInner: {
    button: {}
  }
};

var _c;

$RefreshReg$(_c, "Package");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiXSwibmFtZXMiOlsicGFja2FnZXMiLCJtb250aGx5IiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJidXR0b25UZXh0IiwicHJpY2VXaXRoVW5pdCIsInBvaW50cyIsInRleHQiLCJpc0F2YWlsYWJsZSIsImFub3RoZXJPcHRpb24iLCJoZWFkZXIiLCJhbm51YWwiLCJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsImRyYWdnYWJsZSIsInRhYmxldCIsIm1vYmlsZSIsIlBhY2thZ2UiLCJoYW5kbGVQcmljaW5nUGxhbiIsInBsYW4iLCJzZXRTdGF0ZSIsInN0YXRlIiwiYWN0aXZlIiwicHJpY2luZ1BsYW4iLCJzbGlkZXJQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJzbGlkZXNUb1NsaWRlIiwiY29udGFpbmVyQ2xhc3MiLCJkb3RMaXN0Q2xhc3MiLCJmb2N1c09uU2VsZWN0IiwiaW5maW5pdGUiLCJrZXlCb2FyZENvbnRyb2wiLCJpdGVtQ2xhc3MiLCJtaW5pbXVtVG91Y2hEcmFnIiwicmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlIiwicmVuZGVyRG90c091dHNpZGUiLCJzaG93RG90cyIsInNsaWRlckNsYXNzIiwidmFyaWFudCIsInN0eWxlcyIsImJ1dHRvbkdyb3VwIiwiYnV0dG9uR3JvdXBJbm5lciIsInByaWNpbmdXcmFwcGVyIiwibWFwIiwicGFja2FnZURhdGEiLCJwcmljaW5nSXRlbSIsIm1iIiwibXQiLCJteCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJhbmltYXRpb24iLCJidXR0b24iLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBLElB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsQ0FEcUI7QUFBQSxHQUF0QixDQURILENBREYsQ0F6QkYsQ0FERjtBQXlDSDtLQW5GdUIvQixPO0FBc0Z4QixJQUFNMEIsTUFBTSxHQUFHO0FBQ2JHLGdCQUFjLEVBQUU7QUFDZEksTUFBRSxFQUFFLEVBRFU7QUFFZEMsTUFBRSxFQUFFLEVBRlU7QUFHZEMsTUFBRSxFQUFFLENBQUMsQ0FIUztBQUlkQyxXQUFPLEVBQUUsRUFKSztBQUtkQyxpQkFBYSxFQUFFLEVBTEQ7QUFNZEMsWUFBUSxFQUFFLEVBTkk7QUFPZCxRQUFJO0FBQ0YsVUFBSTtBQUNGQyxpQkFBUztBQURQLE9BREY7QUFJRixpQkFBVztBQUNUQSxpQkFBUztBQURBLE9BSlQ7QUFPRix5QkFBbUI7QUFDakJBLGlCQUFTO0FBRFEsT0FQakI7QUFVRkMsWUFBTSxFQUFFO0FBQ05ELGlCQUFTO0FBREg7QUFWTixLQVBVO0FBcUJkLDJCQUF1QjtBQUNyQkUsV0FBSyxFQUFFLEVBRGM7QUFFckIsb0JBQWM7QUFDWkwsZUFBTyxFQUFFO0FBREc7QUFGTztBQXJCVCxHQURIO0FBK0JiUixrQkFBZ0IsRUFBRTtBQUNoQlksVUFBTSxFQUFFO0FBRFE7QUEvQkwsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMzJjZmIzYmU4MTc0N2I4MGVjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5cblxuY29uc3QgcGFja2FnZXMgPSB7XG4gIG1vbnRobHk6IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6ICdGcmVlIFBsYW4nLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgU21hbGwgdGVhbXMgb3Igb2ZmaWNlJyxcbiAgICAgIGJ1dHRvblRleHQ6ICdTdGFydCBmcmVlIHRyYWlsJyxcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMCcsXG4gICAgICBwb2ludHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIHRleHQ6ICdEcmFnICYgRHJvcCBCdWlsZGVyJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgdGV4dDogJ2VDb21tZXJjZSBTdG9yZSAnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbmFtZTogJ0J1c2luZXNzIGtpbmcnLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgRW50ZXJwcmlzZSBidXNpbmVzcycsXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDE1JyxcbiAgICAgIGJ1dHRvblRleHQ6ICdDcmVhdGUgYWNjb3VudCcsXG4gICAgICBhbm90aGVyT3B0aW9uOiAnT3IgU3RhcnQgMTQgRGF5cyB0cmFpbCcsXG4gICAgICBwb2ludHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdEcmFnICYgRHJvcCBCdWlsZGVyJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ2VDb21tZXJjZSBTdG9yZSAnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgaGVhZGVyOiAnU3VnZ2VzdGVkJyxcbiAgICAgIFxuICAgICAgbmFtZTogJ1BybyBNYXN0ZXInLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgcHJvIGxldmVsIGRldmVsb3BlcnMnLFxuICAgICAgcHJpY2VXaXRoVW5pdDogJyQyNCcsXG4gICAgICBidXR0b25UZXh0OiAnQ3JlYXRlIGFjY291bnQnLFxuICAgICAgYW5vdGhlck9wdGlvbjogJ09yIFN0YXJ0IDE0IERheXMgdHJhaWwnLFxuICAgICAgcG9pbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnRHJhZyAmIERyb3AgQnVpbGRlcicsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiBcIjEsMDAwJ3Mgb2YgVGVtcGxhdGVzXCIsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnQmxvZyBTdXBwb3J0IFRvb2xzJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdlQ29tbWVyY2UgU3RvcmUgJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgYW5udWFsOiBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiAnRnJlZSBQbGFuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIFNtYWxsIHRlYW1zIG9yIG9mZmljZScsXG4gICAgICBidXR0b25UZXh0OiAnU3RhcnQgZnJlZSB0cmFpbCcsXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDAnLFxuICAgICAgcG9pbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiBcIjEsMDAwJ3Mgb2YgVGVtcGxhdGVzXCIsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnRHJhZyAmIERyb3AgQnVpbGRlcicsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ0Jsb2cgU3VwcG9ydCBUb29scycsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNCxcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlICcsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBuYW1lOiAnQnVzaW5lc3Mga2luZycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvciBFbnRlcnByaXNlIGJ1c2luZXNzJyxcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMjUnLFxuICAgICAgYnV0dG9uVGV4dDogJ0NyZWF0ZSBhY2NvdW50JyxcbiAgICAgIGFub3RoZXJPcHRpb246ICdPciBTdGFydCAxMCBEYXlzIHRyYWlsJyxcbiAgICAgIHBvaW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ2VDb21tZXJjZSBTdG9yZScsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnQmxvZyBTdXBwb3J0IFRvb2xzJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdEcmFnICYgRHJvcCBCdWlsZGVyICcsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBoZWFkZXI6ICdTdWdnZXN0ZWQnLFxuICAgICAgXG4gICAgICBuYW1lOiAnUHJvIE1hc3RlcicsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvciBwcm8gbGV2ZWwgZGV2ZWxvcGVycycsXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDM5JyxcbiAgICAgIGJ1dHRvblRleHQ6ICdDcmVhdGUgYWNjb3VudCcsXG4gICAgICBhbm90aGVyT3B0aW9uOiAnT3IgU3RhcnQgMTAgRGF5cyB0cmFpbCcsXG4gICAgICBwb2ludHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdlQ29tbWVyY2UgU3RvcmUnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ0Jsb2cgU3VwcG9ydCBUb29scycsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiBcIjEsMDAwJ3Mgb2YgVGVtcGxhdGVzXCIsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNCxcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnRHJhZyAmIERyb3AgQnVpbGRlciAnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxufTtcblxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgZGVza3RvcDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcbiAgICBpdGVtczogMyxcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICB9LFxuICB0YWJsZXQ6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyMywgbWluOiA2NDAgfSxcbiAgICBpdGVtczogMixcbiAgICBkcmFnZ2FibGU6IHRydWUsXG4gIH0sXG4gIG1vYmlsZToge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxuICAgIGl0ZW1zOiAxLFxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhY2thZ2UoKSB7XG4gIGNvbnN0IHsgbW9udGhseSwgYW5udWFsIH0gPSBwYWNrYWdlcztcblxuICBjb25zdCBoYW5kbGVQcmljaW5nUGxhbiA9IChwbGFuKSA9PiB7XG4gICAgaWYgKHBsYW4gPT09ICdhbm51YWwnKSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhY3RpdmU6ICdhbm51YWwnLFxuICAgICAgICBwcmljaW5nUGxhbjogYW5udWFsLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZTogJ21vbnRobHknLFxuICAgICAgICBwcmljaW5nUGxhbjogbW9udGhseSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzbGlkZXJQYXJhbXMgPSB7XG4gICAgYWRkaXRpb25hbFRyYW5zZnJvbTogMCxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGF1dG9QbGF5U3BlZWQ6IDMwMDAsXG4gICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzbGlkZXNUb1NsaWRlOiAxLFxuICAgIGl0ZW1zOiAzLFxuICAgIGNvbnRhaW5lckNsYXNzOiAnY2Fyb3VzZWwtY29udGFpbmVyJyxcbiAgICBkb3RMaXN0Q2xhc3M6ICcnLFxuICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICBrZXlCb2FyZENvbnRyb2w6IGZhbHNlLFxuICAgIGl0ZW1DbGFzczogJycsXG4gICAgbWluaW11bVRvdWNoRHJhZzogODAsXG4gICAgcmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlOiB0cnVlLFxuICAgIHJlbmRlckRvdHNPdXRzaWRlOiBmYWxzZSxcbiAgICByZXNwb25zaXZlOiByZXNwb25zaXZlLFxuICAgIHNob3dEb3RzOiBmYWxzZSxcbiAgICBzbGlkZXJDbGFzczogJycsXG4gIH07XG5cbiAgXG4gICAgPHNlY3Rpb24gaWQ9XCJwcmljaW5nXCIgc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24ucHJpY2luZycgfX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIHNsb2dhbj1cIlwiXG4gICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAvPlxuICAgICAgICA8RmxleCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXBJbm5lcn0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhdGUuYWN0aXZlID09PSAnbW9udGhseScgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1vbnRobHlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmljaW5nUGxhbignbW9udGhseScpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0YXRlLmFjdGl2ZSA9PT0gJ2FubnVhbCcgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFubnVhbFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByaWNpbmdQbGFuKCdhbm51YWwnKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMucHJpY2luZ1dyYXBwZXJ9IGNsYXNzTmFtZT1cInByaWNpbmdfX3dyYXBwZXJcIj5cbiAgICAgICAgICA8Q2Fyb3VzZWwgey4uLnNsaWRlclBhcmFtc30+XG4gICAgICAgICAgICB7c3RhdGUucHJpY2luZ1BsYW4ubWFwKChwYWNrYWdlRGF0YSkgPT4gKFxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5wcmljaW5nSXRlbX1cbiAgICAgICAgICAgICAgICBrZXk9e2Ake3N0YXRlLmFjdGl2ZX0tY2FyZC0ta2V5JHtwYWNrYWdlRGF0YS5pZH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFByaWNlQ2FyZCBkYXRhPXtwYWNrYWdlRGF0YX0gLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cblxufVxuXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgcHJpY2luZ1dyYXBwZXI6IHtcbiAgICBtYjogJycsXG4gICAgbXQ6ICcnLFxuICAgIG14OiAtMyxcbiAgICBkaXNwbGF5OiAnJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnJyxcbiAgICBmbGV4V3JhcDogJycsXG4gICAgJyc6IHtcbiAgICAgICcnOiB7XG4gICAgICAgIGFuaW1hdGlvbjogYGAsXG4gICAgICB9LFxuICAgICAgJ3VsID4gbGknOiB7XG4gICAgICAgIGFuaW1hdGlvbjogYGAsXG4gICAgICB9LFxuICAgICAgJy5wYWNrYWdlX19wcmljZSc6IHtcbiAgICAgICAgYW5pbWF0aW9uOiBgYCxcbiAgICAgIH0sXG4gICAgICBidXR0b246IHtcbiAgICAgICAgYW5pbWF0aW9uOiBgYCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnLmNhcm91c2VsLWNvbnRhaW5lcic6IHtcbiAgICAgIHdpZHRoOiAnJyxcbiAgICAgICc+IHVsID4gbGkgJzoge1xuICAgICAgICBkaXNwbGF5OiAnJyxcbiAgICAgIH0sXG4gICAgfSxcblxuICB9LFxuICBcbiAgYnV0dG9uR3JvdXBJbm5lcjoge1xuICAgIGJ1dHRvbjoge1xuXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9