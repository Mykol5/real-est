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
    customButtonGroup: jsx(ButtonGroup, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 24
      }
    }),
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
  return jsx("section", {
    id: "pricing",
    sx: {
      variant: 'section.pricing'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 5
    }
  }, jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 7
    }
  }, jsx(SectionHeader, {
    slogan: "",
    title: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 9
    }
  }), jsx(Flex, {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 9
    }
  }, jsx(Box, {
    sx: styles.buttonGroupInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
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
      lineNumber: 283,
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
      lineNumber: 291,
      columnNumber: 13
    }
  }))), jsx(Box, {
    sx: styles.pricingWrapper,
    className: "pricing__wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 9
    }
  }, jsx(Carousel, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sliderParams, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 11
    }
  }), state.pricingPlan.map(function (packageData) {
    return jsx(Box, {
      sx: styles.pricingItem,
      key: "".concat(state.active, "-card--key").concat(packageData.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 15
      }
    }, jsx(PriceCard, {
      data: packageData,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiXSwibmFtZXMiOlsicGFja2FnZXMiLCJtb250aGx5IiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJidXR0b25UZXh0IiwicHJpY2VXaXRoVW5pdCIsInBvaW50cyIsInRleHQiLCJpc0F2YWlsYWJsZSIsImFub3RoZXJPcHRpb24iLCJoZWFkZXIiLCJhbm51YWwiLCJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsImRyYWdnYWJsZSIsInRhYmxldCIsIm1vYmlsZSIsIlBhY2thZ2UiLCJoYW5kbGVQcmljaW5nUGxhbiIsInBsYW4iLCJzZXRTdGF0ZSIsInN0YXRlIiwiYWN0aXZlIiwicHJpY2luZ1BsYW4iLCJzbGlkZXJQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJzbGlkZXNUb1NsaWRlIiwiY29udGFpbmVyQ2xhc3MiLCJjdXN0b21CdXR0b25Hcm91cCIsImRvdExpc3RDbGFzcyIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsImtleUJvYXJkQ29udHJvbCIsIml0ZW1DbGFzcyIsIm1pbmltdW1Ub3VjaERyYWciLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJyZW5kZXJEb3RzT3V0c2lkZSIsInNob3dEb3RzIiwic2xpZGVyQ2xhc3MiLCJ2YXJpYW50Iiwic3R5bGVzIiwiYnV0dG9uR3JvdXAiLCJidXR0b25Hcm91cElubmVyIiwicHJpY2luZ1dyYXBwZXIiLCJtYXAiLCJwYWNrYWdlRGF0YSIsInByaWNpbmdJdGVtIiwibWIiLCJtdCIsIm14IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImFuaW1hdGlvbiIsImJ1dHRvbiIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUExQyxDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRSxJQUFDLFNBQUQ7QUFBVyxVQUFJLEVBQUVvRCxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsQ0FEcUI7QUFBQSxHQUF0QixDQURILENBREYsQ0F6QkYsQ0FERixDQURGO0FBMENEO0tBckZ1QmhDLE87QUF3RnhCLElBQU0yQixNQUFNLEdBQUc7QUFDYkcsZ0JBQWMsRUFBRTtBQUNkSSxNQUFFLEVBQUUsRUFEVTtBQUVkQyxNQUFFLEVBQUUsRUFGVTtBQUdkQyxNQUFFLEVBQUUsQ0FBQyxDQUhTO0FBSWRDLFdBQU8sRUFBRSxFQUpLO0FBS2RDLGlCQUFhLEVBQUUsRUFMRDtBQU1kQyxZQUFRLEVBQUUsRUFOSTtBQU9kLFFBQUk7QUFDRixVQUFJO0FBQ0ZDLGlCQUFTO0FBRFAsT0FERjtBQUlGLGlCQUFXO0FBQ1RBLGlCQUFTO0FBREEsT0FKVDtBQU9GLHlCQUFtQjtBQUNqQkEsaUJBQVM7QUFEUSxPQVBqQjtBQVVGQyxZQUFNLEVBQUU7QUFDTkQsaUJBQVM7QUFESDtBQVZOLEtBUFU7QUFxQmQsMkJBQXVCO0FBQ3JCRSxXQUFLLEVBQUUsRUFEYztBQUVyQixvQkFBYztBQUNaTCxlQUFPLEVBQUU7QUFERztBQUZPO0FBckJULEdBREg7QUErQmJSLGtCQUFnQixFQUFFO0FBQ2hCWSxVQUFNLEVBQUU7QUFEUTtBQS9CTCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI3Mjk4YWIzOTFhMmVlN2ZkZmViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cblxuXG5jb25zdCBwYWNrYWdlcyA9IHtcbiAgbW9udGhseTogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ0ZyZWUgUGxhbicsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvciBTbWFsbCB0ZWFtcyBvciBvZmZpY2UnLFxuICAgICAgYnV0dG9uVGV4dDogJ1N0YXJ0IGZyZWUgdHJhaWwnLFxuICAgICAgcHJpY2VXaXRoVW5pdDogJyQwJyxcbiAgICAgIHBvaW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXInLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgdGV4dDogXCIxLDAwMCdzIG9mIFRlbXBsYXRlc1wiLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgdGV4dDogJ0Jsb2cgU3VwcG9ydCBUb29scycsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNCxcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlICcsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBuYW1lOiAnQnVzaW5lc3Mga2luZycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvciBFbnRlcnByaXNlIGJ1c2luZXNzJyxcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMTUnLFxuICAgICAgYnV0dG9uVGV4dDogJ0NyZWF0ZSBhY2NvdW50JyxcbiAgICAgIGFub3RoZXJPcHRpb246ICdPciBTdGFydCAxNCBEYXlzIHRyYWlsJyxcbiAgICAgIHBvaW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXInLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogXCIxLDAwMCdzIG9mIFRlbXBsYXRlc1wiLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ0Jsb2cgU3VwcG9ydCBUb29scycsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNCxcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlICcsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBoZWFkZXI6ICdTdWdnZXN0ZWQnLFxuICAgICAgXG4gICAgICBuYW1lOiAnUHJvIE1hc3RlcicsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvciBwcm8gbGV2ZWwgZGV2ZWxvcGVycycsXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDI0JyxcbiAgICAgIGJ1dHRvblRleHQ6ICdDcmVhdGUgYWNjb3VudCcsXG4gICAgICBhbm90aGVyT3B0aW9uOiAnT3IgU3RhcnQgMTQgRGF5cyB0cmFpbCcsXG4gICAgICBwb2ludHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdEcmFnICYgRHJvcCBCdWlsZGVyJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ2VDb21tZXJjZSBTdG9yZSAnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBhbm51YWw6IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6ICdGcmVlIFBsYW4nLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgU21hbGwgdGVhbXMgb3Igb2ZmaWNlJyxcbiAgICAgIGJ1dHRvblRleHQ6ICdTdGFydCBmcmVlIHRyYWlsJyxcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMCcsXG4gICAgICBwb2ludHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdEcmFnICYgRHJvcCBCdWlsZGVyJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnQmxvZyBTdXBwb3J0IFRvb2xzJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdlQ29tbWVyY2UgU3RvcmUgJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIG5hbWU6ICdCdXNpbmVzcyBraW5nJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIEVudGVycHJpc2UgYnVzaW5lc3MnLFxuICAgICAgcHJpY2VXaXRoVW5pdDogJyQyNScsXG4gICAgICBidXR0b25UZXh0OiAnQ3JlYXRlIGFjY291bnQnLFxuICAgICAgYW5vdGhlck9wdGlvbjogJ09yIFN0YXJ0IDEwIERheXMgdHJhaWwnLFxuICAgICAgcG9pbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogXCIxLDAwMCdzIG9mIFRlbXBsYXRlc1wiLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXIgJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIGhlYWRlcjogJ1N1Z2dlc3RlZCcsXG4gICAgICBcbiAgICAgIG5hbWU6ICdQcm8gTWFzdGVyJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIHBybyBsZXZlbCBkZXZlbG9wZXJzJyxcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMzknLFxuICAgICAgYnV0dG9uVGV4dDogJ0NyZWF0ZSBhY2NvdW50JyxcbiAgICAgIGFub3RoZXJPcHRpb246ICdPciBTdGFydCAxMCBEYXlzIHRyYWlsJyxcbiAgICAgIHBvaW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ2VDb21tZXJjZSBTdG9yZScsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnQmxvZyBTdXBwb3J0IFRvb2xzJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdEcmFnICYgRHJvcCBCdWlsZGVyICcsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCByZXNwb25zaXZlID0ge1xuICBkZXNrdG9wOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuICAgIGl0ZW1zOiAzLFxuICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDIzLCBtaW46IDY0MCB9LFxuICAgIGl0ZW1zOiAyLFxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgfSxcbiAgbW9iaWxlOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDYzOSwgbWluOiAwIH0sXG4gICAgaXRlbXM6IDEsXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFja2FnZSgpIHtcbiAgY29uc3QgeyBtb250aGx5LCBhbm51YWwgfSA9IHBhY2thZ2VzO1xuICBcblxuICBjb25zdCBoYW5kbGVQcmljaW5nUGxhbiA9IChwbGFuKSA9PiB7XG4gICAgaWYgKHBsYW4gPT09ICdhbm51YWwnKSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhY3RpdmU6ICdhbm51YWwnLFxuICAgICAgICBwcmljaW5nUGxhbjogYW5udWFsLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZTogJ21vbnRobHknLFxuICAgICAgICBwcmljaW5nUGxhbjogbW9udGhseSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzbGlkZXJQYXJhbXMgPSB7XG4gICAgYWRkaXRpb25hbFRyYW5zZnJvbTogMCxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGF1dG9QbGF5U3BlZWQ6IDMwMDAsXG4gICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzbGlkZXNUb1NsaWRlOiAxLFxuICAgIGl0ZW1zOiAzLFxuICAgIGNvbnRhaW5lckNsYXNzOiAnY2Fyb3VzZWwtY29udGFpbmVyJyxcbiAgICBjdXN0b21CdXR0b25Hcm91cDogPEJ1dHRvbkdyb3VwIC8+LFxuICAgIGRvdExpc3RDbGFzczogJycsXG4gICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIGtleUJvYXJkQ29udHJvbDogZmFsc2UsXG4gICAgaXRlbUNsYXNzOiAnJyxcbiAgICBtaW5pbXVtVG91Y2hEcmFnOiA4MCxcbiAgICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXG4gICAgcmVuZGVyRG90c091dHNpZGU6IGZhbHNlLFxuICAgIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmUsXG4gICAgc2hvd0RvdHM6IGZhbHNlLFxuICAgIHNsaWRlckNsYXNzOiAnJyxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwicHJpY2luZ1wiIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLnByaWNpbmcnIH19PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICBzbG9nYW49XCJcIlxuICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5idXR0b25Hcm91cH0+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwSW5uZXJ9PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0YXRlLmFjdGl2ZSA9PT0gJ21vbnRobHknID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNb250aGx5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUHJpY2luZ1BsYW4oJ21vbnRobHknKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGF0ZS5hY3RpdmUgPT09ICdhbm51YWwnID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJBbm51YWxcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmljaW5nUGxhbignYW5udWFsJyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnByaWNpbmdXcmFwcGVyfSBjbGFzc05hbWU9XCJwcmljaW5nX193cmFwcGVyXCI+XG4gICAgICAgICAgPENhcm91c2VsIHsuLi5zbGlkZXJQYXJhbXN9PlxuICAgICAgICAgICAge3N0YXRlLnByaWNpbmdQbGFuLm1hcCgocGFja2FnZURhdGEpID0+IChcbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMucHJpY2luZ0l0ZW19XG4gICAgICAgICAgICAgICAga2V5PXtgJHtzdGF0ZS5hY3RpdmV9LWNhcmQtLWtleSR7cGFja2FnZURhdGEuaWR9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQcmljZUNhcmQgZGF0YT17cGFja2FnZURhdGF9IC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cblxuY29uc3Qgc3R5bGVzID0ge1xuICBwcmljaW5nV3JhcHBlcjoge1xuICAgIG1iOiAnJyxcbiAgICBtdDogJycsXG4gICAgbXg6IC0zLFxuICAgIGRpc3BsYXk6ICcnLFxuICAgIGZsZXhEaXJlY3Rpb246ICcnLFxuICAgIGZsZXhXcmFwOiAnJyxcbiAgICAnJzoge1xuICAgICAgJyc6IHtcbiAgICAgICAgYW5pbWF0aW9uOiBgYCxcbiAgICAgIH0sXG4gICAgICAndWwgPiBsaSc6IHtcbiAgICAgICAgYW5pbWF0aW9uOiBgYCxcbiAgICAgIH0sXG4gICAgICAnLnBhY2thZ2VfX3ByaWNlJzoge1xuICAgICAgICBhbmltYXRpb246IGBgLFxuICAgICAgfSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBhbmltYXRpb246IGBgLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcuY2Fyb3VzZWwtY29udGFpbmVyJzoge1xuICAgICAgd2lkdGg6ICcnLFxuICAgICAgJz4gdWwgPiBsaSAnOiB7XG4gICAgICAgIGRpc3BsYXk6ICcnLFxuICAgICAgfSxcbiAgICB9LFxuXG4gIH0sXG4gIFxuICBidXR0b25Hcm91cElubmVyOiB7XG4gICAgYnV0dG9uOiB7XG5cbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=