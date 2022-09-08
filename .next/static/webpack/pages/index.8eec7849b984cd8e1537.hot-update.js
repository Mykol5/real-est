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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\Toshiba\\Desktop\\005-agency-modern-next\\src\\sections\\package.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

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

  var _active$pricingPlan = {
    active: 'monthly',
    pricingPlan: monthly
  },
      _active$pricingPlan2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_active$pricingPlan, 2),
      state = _active$pricingPlan2[0],
      setState = _active$pricingPlan2[1];

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
        lineNumber: 263,
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
      lineNumber: 278,
      columnNumber: 5
    }
  }, jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 7
    }
  }, jsx(SectionHeader, {
    slogan: "",
    title: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 9
    }
  }), jsx(Flex, {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 9
    }
  }, jsx(Box, {
    sx: styles.buttonGroupInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
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
      lineNumber: 286,
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
      lineNumber: 294,
      columnNumber: 13
    }
  }))), jsx(Box, {
    sx: styles.pricingWrapper,
    className: "pricing__wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 9
    }
  }, jsx(Carousel, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sliderParams, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 11
    }
  }), state.pricingPlan.map(function (packageData) {
    return jsx(Box, {
      sx: styles.pricingItem,
      key: "".concat(state.active, "-card--key").concat(packageData.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 15
      }
    }, jsx(PriceCard, {
      data: packageData,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiXSwibmFtZXMiOlsicGFja2FnZXMiLCJtb250aGx5IiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJidXR0b25UZXh0IiwicHJpY2VXaXRoVW5pdCIsInBvaW50cyIsInRleHQiLCJpc0F2YWlsYWJsZSIsImFub3RoZXJPcHRpb24iLCJoZWFkZXIiLCJhbm51YWwiLCJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsImRyYWdnYWJsZSIsInRhYmxldCIsIm1vYmlsZSIsIlBhY2thZ2UiLCJhY3RpdmUiLCJwcmljaW5nUGxhbiIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVQcmljaW5nUGxhbiIsInBsYW4iLCJzbGlkZXJQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJzbGlkZXNUb1NsaWRlIiwiY29udGFpbmVyQ2xhc3MiLCJjdXN0b21CdXR0b25Hcm91cCIsImRvdExpc3RDbGFzcyIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsImtleUJvYXJkQ29udHJvbCIsIml0ZW1DbGFzcyIsIm1pbmltdW1Ub3VjaERyYWciLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJyZW5kZXJEb3RzT3V0c2lkZSIsInNob3dEb3RzIiwic2xpZGVyQ2xhc3MiLCJ2YXJpYW50Iiwic3R5bGVzIiwiYnV0dG9uR3JvdXAiLCJidXR0b25Hcm91cElubmVyIiwicHJpY2luZ1dyYXBwZXIiLCJtYXAiLCJwYWNrYWdlRGF0YSIsInByaWNpbmdJdGVtIiwibWIiLCJtdCIsIm14IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImFuaW1hdGlvbiIsImJ1dHRvbiIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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QSxXQUNyQixJQUFDLEdBQUQ7QUFDRSxRQUFFLEVBQUVMLE1BQU0sQ0FBQ00sV0FEYjtBQUVFLFNBQUcsWUFBSzlCLEtBQUssQ0FBQ0YsTUFBWCx1QkFBOEIrQixXQUFXLENBQUNwRCxFQUExQyxDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRSxJQUFDLFNBQUQ7QUFBVyxVQUFJLEVBQUVvRCxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsQ0FEcUI7QUFBQSxHQUF0QixDQURILENBREYsQ0F6QkYsQ0FERixDQURGO0FBMENEO0tBeEZ1QmhDLE87QUEyRnhCLElBQU0yQixNQUFNLEdBQUc7QUFDYkcsZ0JBQWMsRUFBRTtBQUNkSSxNQUFFLEVBQUUsRUFEVTtBQUVkQyxNQUFFLEVBQUUsRUFGVTtBQUdkQyxNQUFFLEVBQUUsQ0FBQyxDQUhTO0FBSWRDLFdBQU8sRUFBRSxFQUpLO0FBS2RDLGlCQUFhLEVBQUUsRUFMRDtBQU1kQyxZQUFRLEVBQUUsRUFOSTtBQU9kLFFBQUk7QUFDRixVQUFJO0FBQ0ZDLGlCQUFTO0FBRFAsT0FERjtBQUlGLGlCQUFXO0FBQ1RBLGlCQUFTO0FBREEsT0FKVDtBQU9GLHlCQUFtQjtBQUNqQkEsaUJBQVM7QUFEUSxPQVBqQjtBQVVGQyxZQUFNLEVBQUU7QUFDTkQsaUJBQVM7QUFESDtBQVZOLEtBUFU7QUFxQmQsMkJBQXVCO0FBQ3JCRSxXQUFLLEVBQUUsRUFEYztBQUVyQixvQkFBYztBQUNaTCxlQUFPLEVBQUU7QUFERztBQUZPO0FBckJULEdBREg7QUErQmJSLGtCQUFnQixFQUFFO0FBQ2hCWSxVQUFNLEVBQUU7QUFEUTtBQS9CTCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhlZWM3ODQ5Yjk4NGNkOGUxNTM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cblxuXG5jb25zdCBwYWNrYWdlcyA9IHtcbiAgbW9udGhseTogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ0ZyZWUgUGxhbicsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvciBTbWFsbCB0ZWFtcyBvciBvZmZpY2UnLFxuICAgICAgYnV0dG9uVGV4dDogJ1N0YXJ0IGZyZWUgdHJhaWwnLFxuICAgICAgcHJpY2VXaXRoVW5pdDogJyQwJyxcbiAgICAgIHBvaW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXInLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgdGV4dDogXCIxLDAwMCdzIG9mIFRlbXBsYXRlc1wiLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgdGV4dDogJ0Jsb2cgU3VwcG9ydCBUb29scycsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNCxcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlICcsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBuYW1lOiAnQnVzaW5lc3Mga2luZycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvciBFbnRlcnByaXNlIGJ1c2luZXNzJyxcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMTUnLFxuICAgICAgYnV0dG9uVGV4dDogJ0NyZWF0ZSBhY2NvdW50JyxcbiAgICAgIGFub3RoZXJPcHRpb246ICdPciBTdGFydCAxNCBEYXlzIHRyYWlsJyxcbiAgICAgIHBvaW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXInLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogXCIxLDAwMCdzIG9mIFRlbXBsYXRlc1wiLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ0Jsb2cgU3VwcG9ydCBUb29scycsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNCxcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlICcsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBoZWFkZXI6ICdTdWdnZXN0ZWQnLFxuICAgICAgXG4gICAgICBuYW1lOiAnUHJvIE1hc3RlcicsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvciBwcm8gbGV2ZWwgZGV2ZWxvcGVycycsXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDI0JyxcbiAgICAgIGJ1dHRvblRleHQ6ICdDcmVhdGUgYWNjb3VudCcsXG4gICAgICBhbm90aGVyT3B0aW9uOiAnT3IgU3RhcnQgMTQgRGF5cyB0cmFpbCcsXG4gICAgICBwb2ludHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdEcmFnICYgRHJvcCBCdWlsZGVyJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ2VDb21tZXJjZSBTdG9yZSAnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBhbm51YWw6IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6ICdGcmVlIFBsYW4nLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgU21hbGwgdGVhbXMgb3Igb2ZmaWNlJyxcbiAgICAgIGJ1dHRvblRleHQ6ICdTdGFydCBmcmVlIHRyYWlsJyxcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMCcsXG4gICAgICBwb2ludHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdEcmFnICYgRHJvcCBCdWlsZGVyJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnQmxvZyBTdXBwb3J0IFRvb2xzJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdlQ29tbWVyY2UgU3RvcmUgJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIG5hbWU6ICdCdXNpbmVzcyBraW5nJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIEVudGVycHJpc2UgYnVzaW5lc3MnLFxuICAgICAgcHJpY2VXaXRoVW5pdDogJyQyNScsXG4gICAgICBidXR0b25UZXh0OiAnQ3JlYXRlIGFjY291bnQnLFxuICAgICAgYW5vdGhlck9wdGlvbjogJ09yIFN0YXJ0IDEwIERheXMgdHJhaWwnLFxuICAgICAgcG9pbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogXCIxLDAwMCdzIG9mIFRlbXBsYXRlc1wiLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXIgJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIGhlYWRlcjogJ1N1Z2dlc3RlZCcsXG4gICAgICBcbiAgICAgIG5hbWU6ICdQcm8gTWFzdGVyJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIHBybyBsZXZlbCBkZXZlbG9wZXJzJyxcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMzknLFxuICAgICAgYnV0dG9uVGV4dDogJ0NyZWF0ZSBhY2NvdW50JyxcbiAgICAgIGFub3RoZXJPcHRpb246ICdPciBTdGFydCAxMCBEYXlzIHRyYWlsJyxcbiAgICAgIHBvaW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ2VDb21tZXJjZSBTdG9yZScsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnQmxvZyBTdXBwb3J0IFRvb2xzJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdEcmFnICYgRHJvcCBCdWlsZGVyICcsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCByZXNwb25zaXZlID0ge1xuICBkZXNrdG9wOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuICAgIGl0ZW1zOiAzLFxuICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDIzLCBtaW46IDY0MCB9LFxuICAgIGl0ZW1zOiAyLFxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgfSxcbiAgbW9iaWxlOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDYzOSwgbWluOiAwIH0sXG4gICAgaXRlbXM6IDEsXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFja2FnZSgpIHtcbiAgY29uc3QgeyBtb250aGx5LCBhbm51YWwgfSA9IHBhY2thZ2VzO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9ICh7XG4gICAgYWN0aXZlOiAnbW9udGhseScsXG4gICAgcHJpY2luZ1BsYW46IG1vbnRobHksXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVByaWNpbmdQbGFuID0gKHBsYW4pID0+IHtcbiAgICBpZiAocGxhbiA9PT0gJ2FubnVhbCcpIHtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZTogJ2FubnVhbCcsXG4gICAgICAgIHByaWNpbmdQbGFuOiBhbm51YWwsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWN0aXZlOiAnbW9udGhseScsXG4gICAgICAgIHByaWNpbmdQbGFuOiBtb250aGx5LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNsaWRlclBhcmFtcyA9IHtcbiAgICBhZGRpdGlvbmFsVHJhbnNmcm9tOiAwLFxuICAgIGFycm93czogZmFsc2UsXG4gICAgYXV0b1BsYXlTcGVlZDogMzAwMCxcbiAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHNsaWRlc1RvU2xpZGU6IDEsXG4gICAgaXRlbXM6IDMsXG4gICAgY29udGFpbmVyQ2xhc3M6ICdjYXJvdXNlbC1jb250YWluZXInLFxuICAgIGN1c3RvbUJ1dHRvbkdyb3VwOiA8QnV0dG9uR3JvdXAgLz4sXG4gICAgZG90TGlzdENsYXNzOiAnJyxcbiAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAga2V5Qm9hcmRDb250cm9sOiBmYWxzZSxcbiAgICBpdGVtQ2xhc3M6ICcnLFxuICAgIG1pbmltdW1Ub3VjaERyYWc6IDgwLFxuICAgIHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZTogdHJ1ZSxcbiAgICByZW5kZXJEb3RzT3V0c2lkZTogZmFsc2UsXG4gICAgcmVzcG9uc2l2ZTogcmVzcG9uc2l2ZSxcbiAgICBzaG93RG90czogZmFsc2UsXG4gICAgc2xpZGVyQ2xhc3M6ICcnLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJwcmljaW5nXCIgc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24ucHJpY2luZycgfX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIHNsb2dhbj1cIlwiXG4gICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAvPlxuICAgICAgICA8RmxleCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXBJbm5lcn0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhdGUuYWN0aXZlID09PSAnbW9udGhseScgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1vbnRobHlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmljaW5nUGxhbignbW9udGhseScpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0YXRlLmFjdGl2ZSA9PT0gJ2FubnVhbCcgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFubnVhbFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByaWNpbmdQbGFuKCdhbm51YWwnKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMucHJpY2luZ1dyYXBwZXJ9IGNsYXNzTmFtZT1cInByaWNpbmdfX3dyYXBwZXJcIj5cbiAgICAgICAgICA8Q2Fyb3VzZWwgey4uLnNsaWRlclBhcmFtc30+XG4gICAgICAgICAgICB7c3RhdGUucHJpY2luZ1BsYW4ubWFwKChwYWNrYWdlRGF0YSkgPT4gKFxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5wcmljaW5nSXRlbX1cbiAgICAgICAgICAgICAgICBrZXk9e2Ake3N0YXRlLmFjdGl2ZX0tY2FyZC0ta2V5JHtwYWNrYWdlRGF0YS5pZH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFByaWNlQ2FyZCBkYXRhPXtwYWNrYWdlRGF0YX0gLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHByaWNpbmdXcmFwcGVyOiB7XG4gICAgbWI6ICcnLFxuICAgIG10OiAnJyxcbiAgICBteDogLTMsXG4gICAgZGlzcGxheTogJycsXG4gICAgZmxleERpcmVjdGlvbjogJycsXG4gICAgZmxleFdyYXA6ICcnLFxuICAgICcnOiB7XG4gICAgICAnJzoge1xuICAgICAgICBhbmltYXRpb246IGBgLFxuICAgICAgfSxcbiAgICAgICd1bCA+IGxpJzoge1xuICAgICAgICBhbmltYXRpb246IGBgLFxuICAgICAgfSxcbiAgICAgICcucGFja2FnZV9fcHJpY2UnOiB7XG4gICAgICAgIGFuaW1hdGlvbjogYGAsXG4gICAgICB9LFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIGFuaW1hdGlvbjogYGAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJy5jYXJvdXNlbC1jb250YWluZXInOiB7XG4gICAgICB3aWR0aDogJycsXG4gICAgICAnPiB1bCA+IGxpICc6IHtcbiAgICAgICAgZGlzcGxheTogJycsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgfSxcbiAgXG4gIGJ1dHRvbkdyb3VwSW5uZXI6IHtcbiAgICBidXR0b246IHtcblxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==