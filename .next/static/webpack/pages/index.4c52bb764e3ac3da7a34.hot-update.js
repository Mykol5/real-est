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
  return jsx("section", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiXSwibmFtZXMiOlsicGFja2FnZXMiLCJtb250aGx5IiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJidXR0b25UZXh0IiwicHJpY2VXaXRoVW5pdCIsInBvaW50cyIsInRleHQiLCJpc0F2YWlsYWJsZSIsImFub3RoZXJPcHRpb24iLCJoZWFkZXIiLCJhbm51YWwiLCJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsImRyYWdnYWJsZSIsInRhYmxldCIsIm1vYmlsZSIsIlBhY2thZ2UiLCJoYW5kbGVQcmljaW5nUGxhbiIsInBsYW4iLCJzZXRTdGF0ZSIsInN0YXRlIiwiYWN0aXZlIiwicHJpY2luZ1BsYW4iLCJzbGlkZXJQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJzbGlkZXNUb1NsaWRlIiwiY29udGFpbmVyQ2xhc3MiLCJkb3RMaXN0Q2xhc3MiLCJmb2N1c09uU2VsZWN0IiwiaW5maW5pdGUiLCJrZXlCb2FyZENvbnRyb2wiLCJpdGVtQ2xhc3MiLCJtaW5pbXVtVG91Y2hEcmFnIiwicmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlIiwicmVuZGVyRG90c091dHNpZGUiLCJzaG93RG90cyIsInNsaWRlckNsYXNzIiwidmFyaWFudCIsInN0eWxlcyIsImJ1dHRvbkdyb3VwIiwiYnV0dG9uR3JvdXBJbm5lciIsInByaWNpbmdXcmFwcGVyIiwibWFwIiwicGFja2FnZURhdGEiLCJwcmljaW5nSXRlbSIsIm1iIiwibXQiLCJteCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJhbmltYXRpb24iLCJidXR0b24iLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBLElBQU1BLFFBQVEsR0FBRztBQUNmQyxTQUFPLEVBQUUsQ0FDUDtBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFJLEVBQUUsV0FGUjtBQUdFQyxlQUFXLEVBQUUsMkJBSGY7QUFJRUMsY0FBVSxFQUFFLGtCQUpkO0FBS0VDLGlCQUFhLEVBQUUsSUFMakI7QUFNRUMsVUFBTSxFQUFFLENBQ047QUFDRUwsUUFBRSxFQUFFLENBRE47QUFFRU0sVUFBSSxFQUFFLHFCQUZSO0FBR0VDLGlCQUFXLEVBQUU7QUFIZixLQURNLEVBTU47QUFDRVAsUUFBRSxFQUFFLENBRE47QUFFRU0sVUFBSSxFQUFFLHNCQUZSO0FBR0VDLGlCQUFXLEVBQUU7QUFIZixLQU5NLEVBV047QUFDRVAsUUFBRSxFQUFFLENBRE47QUFFRU0sVUFBSSxFQUFFLG9CQUZSO0FBR0VDLGlCQUFXLEVBQUU7QUFIZixLQVhNLEVBZ0JOO0FBQ0VQLFFBQUUsRUFBRSxDQUROO0FBRUVNLFVBQUksRUFBRSxrQkFGUjtBQUdFQyxpQkFBVyxFQUFFO0FBSGYsS0FoQk07QUFOVixHQURPLEVBOEJQO0FBQ0VQLE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRSxlQUZSO0FBR0VDLGVBQVcsRUFBRSx5QkFIZjtBQUlFRSxpQkFBYSxFQUFFLEtBSmpCO0FBS0VELGNBQVUsRUFBRSxnQkFMZDtBQU1FSyxpQkFBYSxFQUFFLHdCQU5qQjtBQU9FSCxVQUFNLEVBQUUsQ0FDTjtBQUNFTCxRQUFFLEVBQUUsQ0FETjtBQUdFTSxVQUFJLEVBQUUscUJBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBRE0sRUFPTjtBQUNFUCxRQUFFLEVBQUUsQ0FETjtBQUdFTSxVQUFJLEVBQUUsc0JBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBUE0sRUFhTjtBQUNFUCxRQUFFLEVBQUUsQ0FETjtBQUdFTSxVQUFJLEVBQUUsb0JBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBYk0sRUFtQk47QUFDRVAsUUFBRSxFQUFFLENBRE47QUFHRU0sVUFBSSxFQUFFLGtCQUhSO0FBSUVDLGlCQUFXLEVBQUU7QUFKZixLQW5CTTtBQVBWLEdBOUJPLEVBZ0VQO0FBQ0VQLE1BQUUsRUFBRSxDQUROO0FBRUVTLFVBQU0sRUFBRSxXQUZWO0FBSUVSLFFBQUksRUFBRSxZQUpSO0FBS0VDLGVBQVcsRUFBRSwwQkFMZjtBQU1FRSxpQkFBYSxFQUFFLEtBTmpCO0FBT0VELGNBQVUsRUFBRSxnQkFQZDtBQVFFSyxpQkFBYSxFQUFFLHdCQVJqQjtBQVNFSCxVQUFNLEVBQUUsQ0FDTjtBQUNFTCxRQUFFLEVBQUUsQ0FETjtBQUdFTSxVQUFJLEVBQUUscUJBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBRE0sRUFPTjtBQUNFUCxRQUFFLEVBQUUsQ0FETjtBQUdFTSxVQUFJLEVBQUUsc0JBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBUE0sRUFhTjtBQUNFUCxRQUFFLEVBQUUsQ0FETjtBQUdFTSxVQUFJLEVBQUUsb0JBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBYk0sRUFtQk47QUFDRVAsUUFBRSxFQUFFLENBRE47QUFHRU0sVUFBSSxFQUFFLGtCQUhSO0FBSUVDLGlCQUFXLEVBQUU7QUFKZixLQW5CTTtBQVRWLEdBaEVPLENBRE07QUFzR2ZHLFFBQU0sRUFBRSxDQUNOO0FBQ0VWLE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRSxXQUZSO0FBR0VDLGVBQVcsRUFBRSwyQkFIZjtBQUlFQyxjQUFVLEVBQUUsa0JBSmQ7QUFLRUMsaUJBQWEsRUFBRSxJQUxqQjtBQU1FQyxVQUFNLEVBQUUsQ0FDTjtBQUNFTCxRQUFFLEVBQUUsQ0FETjtBQUdFTSxVQUFJLEVBQUUsc0JBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBRE0sRUFPTjtBQUNFUCxRQUFFLEVBQUUsQ0FETjtBQUdFTSxVQUFJLEVBQUUscUJBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBUE0sRUFhTjtBQUNFUCxRQUFFLEVBQUUsQ0FETjtBQUdFTSxVQUFJLEVBQUUsb0JBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBYk0sRUFtQk47QUFDRVAsUUFBRSxFQUFFLENBRE47QUFHRU0sVUFBSSxFQUFFLGtCQUhSO0FBSUVDLGlCQUFXLEVBQUU7QUFKZixLQW5CTTtBQU5WLEdBRE0sRUFrQ047QUFDRVAsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFLGVBRlI7QUFHRUMsZUFBVyxFQUFFLHlCQUhmO0FBSUVFLGlCQUFhLEVBQUUsS0FKakI7QUFLRUQsY0FBVSxFQUFFLGdCQUxkO0FBTUVLLGlCQUFhLEVBQUUsd0JBTmpCO0FBT0VILFVBQU0sRUFBRSxDQUNOO0FBQ0VMLFFBQUUsRUFBRSxDQUROO0FBR0VNLFVBQUksRUFBRSxpQkFIUjtBQUlFQyxpQkFBVyxFQUFFO0FBSmYsS0FETSxFQU9OO0FBQ0VQLFFBQUUsRUFBRSxDQUROO0FBR0VNLFVBQUksRUFBRSxvQkFIUjtBQUlFQyxpQkFBVyxFQUFFO0FBSmYsS0FQTSxFQWFOO0FBQ0VQLFFBQUUsRUFBRSxDQUROO0FBR0VNLFVBQUksRUFBRSxzQkFIUjtBQUlFQyxpQkFBVyxFQUFFO0FBSmYsS0FiTSxFQW1CTjtBQUNFUCxRQUFFLEVBQUUsQ0FETjtBQUdFTSxVQUFJLEVBQUUsc0JBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBbkJNO0FBUFYsR0FsQ00sRUFvRU47QUFDRVAsTUFBRSxFQUFFLENBRE47QUFFRVMsVUFBTSxFQUFFLFdBRlY7QUFJRVIsUUFBSSxFQUFFLFlBSlI7QUFLRUMsZUFBVyxFQUFFLDBCQUxmO0FBTUVFLGlCQUFhLEVBQUUsS0FOakI7QUFPRUQsY0FBVSxFQUFFLGdCQVBkO0FBUUVLLGlCQUFhLEVBQUUsd0JBUmpCO0FBU0VILFVBQU0sRUFBRSxDQUNOO0FBQ0VMLFFBQUUsRUFBRSxDQUROO0FBR0VNLFVBQUksRUFBRSxpQkFIUjtBQUlFQyxpQkFBVyxFQUFFO0FBSmYsS0FETSxFQU9OO0FBQ0VQLFFBQUUsRUFBRSxDQUROO0FBR0VNLFVBQUksRUFBRSxvQkFIUjtBQUlFQyxpQkFBVyxFQUFFO0FBSmYsS0FQTSxFQWFOO0FBQ0VQLFFBQUUsRUFBRSxDQUROO0FBR0VNLFVBQUksRUFBRSxzQkFIUjtBQUlFQyxpQkFBVyxFQUFFO0FBSmYsS0FiTSxFQW1CTjtBQUNFUCxRQUFFLEVBQUUsQ0FETjtBQUdFTSxVQUFJLEVBQUUsc0JBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBbkJNO0FBVFYsR0FwRU07QUF0R08sQ0FBakI7QUFpTkEsSUFBTUksVUFBVSxHQUFHO0FBQ2pCQyxTQUFPLEVBQUU7QUFDUEMsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQURMO0FBRVBDLFNBQUssRUFBRSxDQUZBO0FBR1BDLGFBQVMsRUFBRTtBQUhKLEdBRFE7QUFNakJDLFFBQU0sRUFBRTtBQUNOTCxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBRE47QUFFTkMsU0FBSyxFQUFFLENBRkQ7QUFHTkMsYUFBUyxFQUFFO0FBSEwsR0FOUztBQVdqQkUsUUFBTSxFQUFFO0FBQ05OLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsR0FBUDtBQUFZQyxTQUFHLEVBQUU7QUFBakIsS0FETjtBQUVOQyxTQUFLLEVBQUUsQ0FGRDtBQUdOQyxhQUFTLEVBQUU7QUFITDtBQVhTLENBQW5CO0FBa0JlLFNBQVNHLE9BQVQsR0FBbUI7QUFBQTs7QUFDaEMsTUFBUXJCLE9BQVIsR0FBNEJELFFBQTVCLENBQVFDLE9BQVI7QUFBQSxNQUFpQlcsTUFBakIsR0FBNEJaLFFBQTVCLENBQWlCWSxNQUFqQjs7QUFFQSxNQUFNVyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQsRUFBVTtBQUNsQyxRQUFJQSxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQkMsY0FBUSxpQ0FDSEMsS0FERztBQUVOQyxjQUFNLEVBQUUsUUFGRjtBQUdOQyxtQkFBVyxFQUFFaEI7QUFIUCxTQUFSO0FBS0QsS0FORCxNQU1PO0FBQ0xhLGNBQVEsaUNBQ0hDLEtBREc7QUFFTkMsY0FBTSxFQUFFLFNBRkY7QUFHTkMsbUJBQVcsRUFBRTNCO0FBSFAsU0FBUjtBQUtEO0FBQ0YsR0FkRDs7QUFnQkEsTUFBTTRCLFlBQVksR0FBRztBQUNuQkMsdUJBQW1CLEVBQUUsQ0FERjtBQUVuQkMsVUFBTSxFQUFFLEtBRlc7QUFHbkJDLGlCQUFhLEVBQUUsSUFISTtBQUluQkMsY0FBVSxFQUFFLEtBSk87QUFLbkJDLGFBQVMsRUFBRSxFQUxRO0FBTW5CQyxpQkFBYSxFQUFFLENBTkk7QUFPbkJqQixTQUFLLEVBQUUsQ0FQWTtBQVFuQmtCLGtCQUFjLEVBQUUsb0JBUkc7QUFTbkJDLGdCQUFZLEVBQUUsRUFUSztBQVVuQkMsaUJBQWEsRUFBRSxLQVZJO0FBV25CQyxZQUFRLEVBQUUsS0FYUztBQVluQkMsbUJBQWUsRUFBRSxLQVpFO0FBYW5CQyxhQUFTLEVBQUUsRUFiUTtBQWNuQkMsb0JBQWdCLEVBQUUsRUFkQztBQWVuQkMsNEJBQXdCLEVBQUUsSUFmUDtBQWdCbkJDLHFCQUFpQixFQUFFLEtBaEJBO0FBaUJuQi9CLGNBQVUsRUFBRUEsVUFqQk87QUFrQm5CZ0MsWUFBUSxFQUFFLEtBbEJTO0FBbUJuQkMsZUFBVyxFQUFFO0FBbkJNLEdBQXJCO0FBc0JBLFNBQ0U7QUFBUyxNQUFFLEVBQUMsU0FBWjtBQUFzQixNQUFFLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLElBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsSUFBQyxhQUFEO0FBQ0UsVUFBTSxFQUFDLEVBRFQ7QUFFRSxTQUFLLEVBQUMsRUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRSxJQUFDLElBQUQ7QUFBTSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLElBQUMsR0FBRDtBQUFLLE1BQUUsRUFBRUQsTUFBTSxDQUFDRSxnQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFFeEIsS0FBSyxDQUFDQyxNQUFOLEtBQWlCLFNBQWpCLEdBQTZCLFFBQTdCLEdBQXdDLEVBRHJEO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxrQkFBVyxTQUhiO0FBSUUsV0FBTyxFQUFFO0FBQUEsYUFBTUosaUJBQWlCLENBQUMsU0FBRCxDQUF2QjtBQUFBLEtBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBU0U7QUFDRSxhQUFTLEVBQUVHLEtBQUssQ0FBQ0MsTUFBTixLQUFpQixRQUFqQixHQUE0QixRQUE1QixHQUF1QyxFQURwRDtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0Usa0JBQVcsUUFIYjtBQUlFLFdBQU8sRUFBRTtBQUFBLGFBQU1KLGlCQUFpQixDQUFDLFFBQUQsQ0FBdkI7QUFBQSxLQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGLENBTEYsRUF5QkUsSUFBQyxHQUFEO0FBQUssTUFBRSxFQUFFeUIsTUFBTSxDQUFDRyxjQUFoQjtBQUFnQyxhQUFTLEVBQUMsa0JBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxJQUFDLFFBQUQseUZBQWN0QixZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDR0gsS0FBSyxDQUFDRSxXQUFOLENBQWtCd0IsR0FBbEIsQ0FBc0IsVUFBQ0MsV0FBRDtBQUFBLFdBQ3JCLElBQUMsR0FBRDtBQUNFLFFBQUUsRUFBRUwsTUFBTSxDQUFDTSxXQURiO0FBRUUsU0FBRyxZQUFLNUIsS0FBSyxDQUFDQyxNQUFYLHVCQUE4QjBCLFdBQVcsQ0FBQ25ELEVBQTFDLENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlFLElBQUMsU0FBRDtBQUFXLFVBQUksRUFBRW1ELFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixDQURxQjtBQUFBLEdBQXRCLENBREgsQ0FERixDQXpCRixDQURGLENBREY7QUEwQ0Q7S0FuRnVCL0IsTztBQXNGeEIsSUFBTTBCLE1BQU0sR0FBRztBQUNiRyxnQkFBYyxFQUFFO0FBQ2RJLE1BQUUsRUFBRSxFQURVO0FBRWRDLE1BQUUsRUFBRSxFQUZVO0FBR2RDLE1BQUUsRUFBRSxDQUFDLENBSFM7QUFJZEMsV0FBTyxFQUFFLEVBSks7QUFLZEMsaUJBQWEsRUFBRSxFQUxEO0FBTWRDLFlBQVEsRUFBRSxFQU5JO0FBT2QsUUFBSTtBQUNGLFVBQUk7QUFDRkMsaUJBQVM7QUFEUCxPQURGO0FBSUYsaUJBQVc7QUFDVEEsaUJBQVM7QUFEQSxPQUpUO0FBT0YseUJBQW1CO0FBQ2pCQSxpQkFBUztBQURRLE9BUGpCO0FBVUZDLFlBQU0sRUFBRTtBQUNORCxpQkFBUztBQURIO0FBVk4sS0FQVTtBQXFCZCwyQkFBdUI7QUFDckJFLFdBQUssRUFBRSxFQURjO0FBRXJCLG9CQUFjO0FBQ1pMLGVBQU8sRUFBRTtBQURHO0FBRk87QUFyQlQsR0FESDtBQStCYlIsa0JBQWdCLEVBQUU7QUFDaEJZLFVBQU0sRUFBRTtBQURRO0FBL0JMLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGM1MmJiNzY0ZTNhYzNkYTdhMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuXG5cbmNvbnN0IHBhY2thZ2VzID0ge1xuICBtb250aGx5OiBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiAnRnJlZSBQbGFuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIFNtYWxsIHRlYW1zIG9yIG9mZmljZScsXG4gICAgICBidXR0b25UZXh0OiAnU3RhcnQgZnJlZSB0cmFpbCcsXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDAnLFxuICAgICAgcG9pbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICB0ZXh0OiAnRHJhZyAmIERyb3AgQnVpbGRlcicsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICB0ZXh0OiBcIjEsMDAwJ3Mgb2YgVGVtcGxhdGVzXCIsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgICB0ZXh0OiAnQmxvZyBTdXBwb3J0IFRvb2xzJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgIHRleHQ6ICdlQ29tbWVyY2UgU3RvcmUgJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIG5hbWU6ICdCdXNpbmVzcyBraW5nJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIEVudGVycHJpc2UgYnVzaW5lc3MnLFxuICAgICAgcHJpY2VXaXRoVW5pdDogJyQxNScsXG4gICAgICBidXR0b25UZXh0OiAnQ3JlYXRlIGFjY291bnQnLFxuICAgICAgYW5vdGhlck9wdGlvbjogJ09yIFN0YXJ0IDE0IERheXMgdHJhaWwnLFxuICAgICAgcG9pbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnRHJhZyAmIERyb3AgQnVpbGRlcicsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiBcIjEsMDAwJ3Mgb2YgVGVtcGxhdGVzXCIsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnQmxvZyBTdXBwb3J0IFRvb2xzJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdlQ29tbWVyY2UgU3RvcmUgJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIGhlYWRlcjogJ1N1Z2dlc3RlZCcsXG4gICAgICBcbiAgICAgIG5hbWU6ICdQcm8gTWFzdGVyJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIHBybyBsZXZlbCBkZXZlbG9wZXJzJyxcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMjQnLFxuICAgICAgYnV0dG9uVGV4dDogJ0NyZWF0ZSBhY2NvdW50JyxcbiAgICAgIGFub3RoZXJPcHRpb246ICdPciBTdGFydCAxNCBEYXlzIHRyYWlsJyxcbiAgICAgIHBvaW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXInLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogXCIxLDAwMCdzIG9mIFRlbXBsYXRlc1wiLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ0Jsb2cgU3VwcG9ydCBUb29scycsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNCxcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlICcsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIGFubnVhbDogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ0ZyZWUgUGxhbicsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvciBTbWFsbCB0ZWFtcyBvciBvZmZpY2UnLFxuICAgICAgYnV0dG9uVGV4dDogJ1N0YXJ0IGZyZWUgdHJhaWwnLFxuICAgICAgcHJpY2VXaXRoVW5pdDogJyQwJyxcbiAgICAgIHBvaW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogXCIxLDAwMCdzIG9mIFRlbXBsYXRlc1wiLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXInLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDMsXG4gICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ2VDb21tZXJjZSBTdG9yZSAnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbmFtZTogJ0J1c2luZXNzIGtpbmcnLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgRW50ZXJwcmlzZSBidXNpbmVzcycsXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDI1JyxcbiAgICAgIGJ1dHRvblRleHQ6ICdDcmVhdGUgYWNjb3VudCcsXG4gICAgICBhbm90aGVyT3B0aW9uOiAnT3IgU3RhcnQgMTAgRGF5cyB0cmFpbCcsXG4gICAgICBwb2ludHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdlQ29tbWVyY2UgU3RvcmUnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ0Jsb2cgU3VwcG9ydCBUb29scycsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiBcIjEsMDAwJ3Mgb2YgVGVtcGxhdGVzXCIsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNCxcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnRHJhZyAmIERyb3AgQnVpbGRlciAnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgaGVhZGVyOiAnU3VnZ2VzdGVkJyxcbiAgICAgIFxuICAgICAgbmFtZTogJ1BybyBNYXN0ZXInLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgcHJvIGxldmVsIGRldmVsb3BlcnMnLFxuICAgICAgcHJpY2VXaXRoVW5pdDogJyQzOScsXG4gICAgICBidXR0b25UZXh0OiAnQ3JlYXRlIGFjY291bnQnLFxuICAgICAgYW5vdGhlck9wdGlvbjogJ09yIFN0YXJ0IDEwIERheXMgdHJhaWwnLFxuICAgICAgcG9pbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIFxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogXCIxLDAwMCdzIG9mIFRlbXBsYXRlc1wiLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXIgJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbn07XG5cbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXG4gICAgaXRlbXM6IDMsXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgfSxcbiAgdGFibGV0OiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjMsIG1pbjogNjQwIH0sXG4gICAgaXRlbXM6IDIsXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxuICB9LFxuICBtb2JpbGU6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogNjM5LCBtaW46IDAgfSxcbiAgICBpdGVtczogMSxcbiAgICBkcmFnZ2FibGU6IHRydWUsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWNrYWdlKCkge1xuICBjb25zdCB7IG1vbnRobHksIGFubnVhbCB9ID0gcGFja2FnZXM7XG5cbiAgY29uc3QgaGFuZGxlUHJpY2luZ1BsYW4gPSAocGxhbikgPT4ge1xuICAgIGlmIChwbGFuID09PSAnYW5udWFsJykge1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWN0aXZlOiAnYW5udWFsJyxcbiAgICAgICAgcHJpY2luZ1BsYW46IGFubnVhbCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhY3RpdmU6ICdtb250aGx5JyxcbiAgICAgICAgcHJpY2luZ1BsYW46IG1vbnRobHksXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2xpZGVyUGFyYW1zID0ge1xuICAgIGFkZGl0aW9uYWxUcmFuc2Zyb206IDAsXG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBhdXRvUGxheVNwZWVkOiAzMDAwLFxuICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc2xpZGVzVG9TbGlkZTogMSxcbiAgICBpdGVtczogMyxcbiAgICBjb250YWluZXJDbGFzczogJ2Nhcm91c2VsLWNvbnRhaW5lcicsXG4gICAgZG90TGlzdENsYXNzOiAnJyxcbiAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAga2V5Qm9hcmRDb250cm9sOiBmYWxzZSxcbiAgICBpdGVtQ2xhc3M6ICcnLFxuICAgIG1pbmltdW1Ub3VjaERyYWc6IDgwLFxuICAgIHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZTogdHJ1ZSxcbiAgICByZW5kZXJEb3RzT3V0c2lkZTogZmFsc2UsXG4gICAgcmVzcG9uc2l2ZTogcmVzcG9uc2l2ZSxcbiAgICBzaG93RG90czogZmFsc2UsXG4gICAgc2xpZGVyQ2xhc3M6ICcnLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJwcmljaW5nXCIgc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24ucHJpY2luZycgfX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIHNsb2dhbj1cIlwiXG4gICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAvPlxuICAgICAgICA8RmxleCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXBJbm5lcn0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhdGUuYWN0aXZlID09PSAnbW9udGhseScgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1vbnRobHlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmljaW5nUGxhbignbW9udGhseScpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0YXRlLmFjdGl2ZSA9PT0gJ2FubnVhbCcgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFubnVhbFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByaWNpbmdQbGFuKCdhbm51YWwnKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMucHJpY2luZ1dyYXBwZXJ9IGNsYXNzTmFtZT1cInByaWNpbmdfX3dyYXBwZXJcIj5cbiAgICAgICAgICA8Q2Fyb3VzZWwgey4uLnNsaWRlclBhcmFtc30+XG4gICAgICAgICAgICB7c3RhdGUucHJpY2luZ1BsYW4ubWFwKChwYWNrYWdlRGF0YSkgPT4gKFxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5wcmljaW5nSXRlbX1cbiAgICAgICAgICAgICAgICBrZXk9e2Ake3N0YXRlLmFjdGl2ZX0tY2FyZC0ta2V5JHtwYWNrYWdlRGF0YS5pZH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFByaWNlQ2FyZCBkYXRhPXtwYWNrYWdlRGF0YX0gLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHByaWNpbmdXcmFwcGVyOiB7XG4gICAgbWI6ICcnLFxuICAgIG10OiAnJyxcbiAgICBteDogLTMsXG4gICAgZGlzcGxheTogJycsXG4gICAgZmxleERpcmVjdGlvbjogJycsXG4gICAgZmxleFdyYXA6ICcnLFxuICAgICcnOiB7XG4gICAgICAnJzoge1xuICAgICAgICBhbmltYXRpb246IGBgLFxuICAgICAgfSxcbiAgICAgICd1bCA+IGxpJzoge1xuICAgICAgICBhbmltYXRpb246IGBgLFxuICAgICAgfSxcbiAgICAgICcucGFja2FnZV9fcHJpY2UnOiB7XG4gICAgICAgIGFuaW1hdGlvbjogYGAsXG4gICAgICB9LFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIGFuaW1hdGlvbjogYGAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJy5jYXJvdXNlbC1jb250YWluZXInOiB7XG4gICAgICB3aWR0aDogJycsXG4gICAgICAnPiB1bCA+IGxpICc6IHtcbiAgICAgICAgZGlzcGxheTogJycsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgfSxcbiAgXG4gIGJ1dHRvbkdyb3VwSW5uZXI6IHtcbiAgICBidXR0b246IHtcblxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==