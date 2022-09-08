webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/service-section.js":
/*!*****************************************!*\
  !*** ./src/sections/service-section.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceSection; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/service-thumb.png */ "./src/assets/service-thumb.png");
/* harmony import */ var assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/shape-pattern1.png */ "./src/assets/shape-pattern1.png");
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/services/smart.svg */ "./src/assets/services/smart.svg");
/* harmony import */ var assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/services/secure.svg */ "./src/assets/services/secure.svg");
/* harmony import */ var assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\Toshiba\\Desktop\\005-agency-modern-next\\src\\sections\\service-section.js",
    _s = $RefreshSig$(),
    _templateObject;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */










var data = {
  subTitle: 'our business goals',
  title: 'Redefining Real Estate in Africa',
  features: [{
    id: 1,
    imgSrc: assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    altText: 'Smart Features',
    title: 'Digitalize Real Estate',
    text: 'We aim at bringing great innovations into real estate sector in Africa through the power of Information Technology.'
  }, {
    id: 2,
    imgSrc: assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    altText: 'Secure Contents',
    title: 'Excellent Service Delivery',
    text: 'Easily verify properties in seconds from anywhere in the world with our technological means and acquire these properties privately at Shelters.'
  }]
};
function ServiceSection() {
  _s();

  var _this = this;

  // modal popup video handler
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      videoOpen = _useState[0],
      setVideoOpen = _useState[1];

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setVideoOpen(true);
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    sx: {
      variant: 'section.services'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    sx: styles.videoBtn,
    onClick: handleClick,
    "aria-label": "Play Button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosPlay"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.shapeBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "Shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, data.features.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.card,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: item.imgSrc,
      alt: item.altText,
      sx: styles.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.wrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      sx: styles.wrapper.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 19
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.wrapper.subTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 19
      }
    }, item.text)));
  })))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_modal_video__WEBPACK_IMPORTED_MODULE_5___default.a, {
    channel: "youtube",
    isOpen: videoOpen,
    videoId: "ZNA9rmDsYVE",
    onClose: function onClose() {
      return setVideoOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }));
}

_s(ServiceSection, "fjrTXSMqqo5cVpzR03nEXJYpFAo=");

_c = ServiceSection;
var playPluse = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);\n    opacity: 1;\n  }\n\n  to {\n\ttransform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);\n    opacity: 0;\n  }\n"])));
var styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative'
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7]
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block']
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: "".concat(playPluse, " 1.5s ease-out infinite"),
      opacity: 0.5
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2
    },
    svg: {
      fontSize: [40, null, 48, null, 62]
    }
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left']
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)']
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s'
  },
  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4]
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3]
    },
    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9
    }
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%'
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    }
  }
};

var _c;

$RefreshReg$(_c, "ServiceSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3NlcnZpY2Utc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3ViVGl0bGUiLCJ0aXRsZSIsImZlYXR1cmVzIiwiaWQiLCJpbWdTcmMiLCJTbWFydCIsImFsdFRleHQiLCJ0ZXh0IiwiU2VjdXJlIiwiU2VydmljZVNlY3Rpb24iLCJ1c2VTdGF0ZSIsInZpZGVvT3BlbiIsInNldFZpZGVvT3BlbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFyaWFudCIsInN0eWxlcyIsImNvbnRhaW5lckJveCIsInRodW1ibmFpbCIsIlNlcnZpY2VUaHVtYiIsInZpZGVvQnRuIiwic2hhcGVCb3giLCJzaGFwZVBhdHRlcm4iLCJjb250ZW50Qm94IiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJjYXJkIiwiaWNvbiIsIndyYXBwZXIiLCJwbGF5UGx1c2UiLCJrZXlmcmFtZXMiLCJjb3JlRmVhdHVyZSIsInB5IiwicG9zaXRpb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsInBiIiwibXIiLCJvcmRlciIsIm1sIiwiekluZGV4IiwiaGVpZ2h0IiwiYm90dG9tIiwibGVmdCIsInRvcCIsInRyYW5zZm9ybSIsIndpZHRoIiwicCIsImJhY2tncm91bmRDb2xvciIsImNvbnRlbnQiLCJib3JkZXJSYWRpdXMiLCJhbmltYXRpb24iLCJvcGFjaXR5IiwidGV4dEFsaWduIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsInN2ZyIsImZvbnRTaXplIiwiZmxleFNocmluayIsIm1iIiwicHIiLCJwbCIsInB0IiwibXgiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm10IiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsInZpZGVvV3JhcHBlciIsIm1heFdpZHRoIiwicGFkZGluZ1RvcCIsImlmcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsVUFBUSxFQUFFLG9CQURDO0FBRVhDLE9BQUssRUFBRSxrQ0FGSTtBQUdYQyxVQUFRLEVBQUUsQ0FDUjtBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFQyxVQUFNLEVBQUVDLGdFQUZWO0FBR0VDLFdBQU8sRUFBRSxnQkFIWDtBQUlFTCxTQUFLLEVBQUUsd0JBSlQ7QUFLRU0sUUFBSSxFQUNGO0FBTkosR0FEUSxFQVNSO0FBQ0VKLE1BQUUsRUFBRSxDQUROO0FBRUVDLFVBQU0sRUFBRUksa0VBRlY7QUFHRUYsV0FBTyxFQUFFLGlCQUhYO0FBSUVMLFNBQUssRUFBRSw0QkFKVDtBQUtFTSxRQUFJLEVBQ0Y7QUFOSixHQVRRO0FBSEMsQ0FBYjtBQXVCZSxTQUFTRSxjQUFULEdBQTBCO0FBQUE7O0FBQUE7O0FBQ3ZDO0FBQ0Esa0JBQWtDQyxzREFBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQSxNQUFPQyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FILGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsR0FIRDs7QUFJQSxTQUNFO0FBQVMsTUFBRSxFQUFFO0FBQUVJLGFBQU8sRUFBRTtBQUFYLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQVcsTUFBRSxFQUFFQyxNQUFNLENBQUNDLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUQsTUFBTSxDQUFDRSxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVDLCtEQUFaO0FBQTBCLE9BQUcsRUFBQyxXQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxxREFBQywrQ0FBRDtBQUNFLE1BQUUsRUFBRUgsTUFBTSxDQUFDSSxRQURiO0FBRUUsV0FBTyxFQUFFUixXQUZYO0FBR0Usa0JBQVcsYUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUxGLENBRkYsRUFZRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUksTUFBTSxDQUFDSyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVDLGdFQUFaO0FBQTBCLE9BQUcsRUFBQyxPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FaRixDQURGLEVBaUJFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFTixNQUFNLENBQUNPLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQywrREFBRDtBQUFhLFlBQVEsRUFBRXpCLElBQUksQ0FBQ0MsUUFBNUI7QUFBc0MsU0FBSyxFQUFFRCxJQUFJLENBQUNFLEtBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFZ0IsTUFBTSxDQUFDUSxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0cxQixJQUFJLENBQUNHLFFBQUwsQ0FBY3dCLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRDtBQUFBLFdBQ2pCLHFEQUFDLDRDQUFEO0FBQUssUUFBRSxFQUFFVixNQUFNLENBQUNXLElBQWhCO0FBQXNCLFNBQUcsRUFBRUQsSUFBSSxDQUFDeEIsRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLHFEQUFDLDhDQUFEO0FBQU8sU0FBRyxFQUFFd0IsSUFBSSxDQUFDdkIsTUFBakI7QUFBeUIsU0FBRyxFQUFFdUIsSUFBSSxDQUFDckIsT0FBbkM7QUFBNEMsUUFBRSxFQUFFVyxNQUFNLENBQUNZLElBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUdFLHFEQUFDLDRDQUFEO0FBQUssUUFBRSxFQUFFWixNQUFNLENBQUNhLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxxREFBQyxnREFBRDtBQUFTLFFBQUUsRUFBRWIsTUFBTSxDQUFDYSxPQUFQLENBQWU3QixLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9DMEIsSUFBSSxDQUFDMUIsS0FBekMsQ0FERixFQUVFLHFEQUFDLDZDQUFEO0FBQU0sUUFBRSxFQUFFZ0IsTUFBTSxDQUFDYSxPQUFQLENBQWU5QixRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9DMkIsSUFBSSxDQUFDcEIsSUFBekMsQ0FGRixDQUhGLENBRGlCO0FBQUEsR0FBbEIsQ0FESCxDQUhGLENBakJGLENBREYsRUFtQ0UscURBQUMsd0RBQUQ7QUFDRSxXQUFPLEVBQUMsU0FEVjtBQUVFLFVBQU0sRUFBRUksU0FGVjtBQUdFLFdBQU8sRUFBQyxhQUhWO0FBSUUsV0FBTyxFQUFFO0FBQUEsYUFBTUMsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxLQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQ0YsQ0FERjtBQTRDRDs7R0FuRHVCSCxjOztLQUFBQSxjO0FBcUR4QixJQUFNc0IsU0FBUyxHQUFHQywrREFBSCxxV0FBZjtBQVlBLElBQU1mLE1BQU0sR0FBRztBQUNiZ0IsYUFBVyxFQUFFO0FBQ1hDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixFQUFtQixJQUFuQixFQUF5QixDQUF6QixDQURPO0FBRVhDLFlBQVEsRUFBRTtBQUZDLEdBREE7QUFLYmpCLGNBQVksRUFBRTtBQUNaa0IsV0FBTyxFQUFFLE1BREc7QUFFWkMsY0FBVSxFQUFFLENBQUMsWUFBRCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsUUFBM0IsQ0FGQTtBQUdaQyxrQkFBYyxFQUFFLENBQUMsWUFBRCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsZUFBM0IsQ0FISjtBQUlaQyxpQkFBYSxFQUFFLENBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsS0FBdkIsQ0FKSDtBQUtaQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsRUFBNEIsQ0FBNUI7QUFMUSxHQUxEO0FBWWJyQixXQUFTLEVBQUU7QUFDVHNCLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixDQUFyQixFQUF3QixFQUF4QixFQUE0QixFQUE1QixDQURLO0FBRVRDLFNBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixDQUZFO0FBR1RDLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixDQUFyQixDQUhLO0FBSVRQLFdBQU8sRUFBRSxhQUpBO0FBS1RELFlBQVEsRUFBRSxVQUxEO0FBTVQsYUFBUztBQUNQQSxjQUFRLEVBQUUsVUFESDtBQUVQUyxZQUFNLEVBQUUsQ0FGRDtBQUdQQyxZQUFNLEVBQUUsQ0FBQyxHQUFELEVBQU0sTUFBTjtBQUhEO0FBTkEsR0FaRTtBQXdCYnZCLFVBQVEsRUFBRTtBQUNSYSxZQUFRLEVBQUUsVUFERjtBQUVSVyxVQUFNLEVBQUUsQ0FBQyxFQUZEO0FBR1JDLFFBQUksRUFBRSxDQUFDLEdBSEM7QUFJUkgsVUFBTSxFQUFFLENBQUMsQ0FKRDtBQUtSUixXQUFPLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUMsY0FBakM7QUFMRCxHQXhCRztBQStCYmYsVUFBUSxFQUFFO0FBQ1J1QixVQUFNLEVBQUUsQ0FEQTtBQUVSVCxZQUFRLEVBQUUsVUFGRjtBQUdSWSxRQUFJLEVBQUUsS0FIRTtBQUlSQyxPQUFHLEVBQUUsS0FKRztBQUtSQyxhQUFTLEVBQUUsdUJBTEg7QUFNUkMsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxNQUFmLEVBQXVCLElBQXZCLEVBQTZCLE9BQTdCLENBTkM7QUFPUkwsVUFBTSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxNQUFmLEVBQXVCLElBQXZCLEVBQTZCLE9BQTdCLENBUEE7QUFRUk0sS0FBQyxFQUFFLGdCQVJLO0FBU1JDLG1CQUFlLEVBQUUsYUFUVDtBQVVSLGlCQUFhO0FBQ1hqQixjQUFRLEVBQUUsVUFEQztBQUVYa0IsYUFBTyxFQUFFLElBRkU7QUFHWE4sVUFBSSxFQUFFLEtBSEs7QUFJWEMsU0FBRyxFQUFFLEtBSk07QUFLWEMsZUFBUyxFQUFFLG1DQUxBO0FBTVhiLGFBQU8sRUFBRSxPQU5FO0FBT1hjLFdBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsTUFBZixFQUF1QixJQUF2QixFQUE2QixPQUE3QixDQVBJO0FBUVhMLFlBQU0sRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsTUFBZixFQUF1QixJQUF2QixFQUE2QixPQUE3QixDQVJHO0FBU1hPLHFCQUFlLEVBQUUsU0FUTjtBQVVYRSxrQkFBWSxFQUFFLEtBVkg7QUFXWEMsZUFBUyxZQUFLeEIsU0FBTCw0QkFYRTtBQVlYeUIsYUFBTyxFQUFFO0FBWkUsS0FWTDtBQXdCUixjQUFVO0FBQ1JKLHFCQUFlLEVBQUUsdUJBRFQ7QUFFUkYsV0FBSyxFQUFFLFNBRkM7QUFHUkwsWUFBTSxFQUFFLFNBSEE7QUFJUlksZUFBUyxFQUFFLFFBSkg7QUFLUkgsa0JBQVksRUFBRSxLQUxOO0FBTVJJLFlBQU0sRUFBRSxTQU5BO0FBT1JDLGdCQUFVLEVBQUUsVUFQSjtBQVFSdkIsYUFBTyxFQUFFLE1BUkQ7QUFTUkUsb0JBQWMsRUFBRSxRQVRSO0FBVVJELGdCQUFVLEVBQUUsUUFWSjtBQVdSRixjQUFRLEVBQUUsVUFYRjtBQVlSUyxZQUFNLEVBQUU7QUFaQSxLQXhCRjtBQXNDUmdCLE9BQUcsRUFBRTtBQUNIQyxjQUFRLEVBQUUsQ0FBQyxFQUFELEVBQUssSUFBTCxFQUFXLEVBQVgsRUFBZSxJQUFmLEVBQXFCLEVBQXJCO0FBRFA7QUF0Q0csR0EvQkc7QUF5RWJyQyxZQUFVLEVBQUU7QUFDVjBCLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxJQUFwQyxFQUEwQyxHQUExQyxDQURHO0FBRVZZLGNBQVUsRUFBRSxDQUZGO0FBR1ZDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsRUFBVixFQUFjLENBQWQsQ0FITTtBQUlWTixhQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixNQUF2QjtBQUpELEdBekVDO0FBK0ViaEMsTUFBSSxFQUFFO0FBQ0p1QyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLENBQW5CLEVBQXNCLE1BQXRCLENBREE7QUFFSkMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGQTtBQUdKQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsQ0FBdEIsQ0FIQTtBQUlKQyxNQUFFLEVBQUUsTUFKQTtBQUtKakIsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLE1BQW5CLENBTEg7QUFNSmtCLFdBQU8sRUFBRSxDQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWlCLElBQWpCLEVBQXVCLElBQXZCLEVBQTZCLFFBQTdCLENBTkw7QUFPSkMsdUJBQW1CLEVBQUUsQ0FBQyxlQUFEO0FBUGpCLEdBL0VPO0FBd0ZiekMsTUFBSSxFQUFFO0FBQ0pRLFdBQU8sRUFBRSxNQURMO0FBRUpDLGNBQVUsRUFBRSxZQUZSO0FBR0pzQixjQUFVLEVBQUU7QUFIUixHQXhGTztBQThGYjlCLE1BQUksRUFBRTtBQUNKcUIsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLE1BQTNCLENBREg7QUFFSkwsVUFBTSxFQUFFLE1BRko7QUFHSmlCLGNBQVUsRUFBRSxDQUhSO0FBSUpyQixNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsQ0FBdEI7QUFKQSxHQTlGTztBQW9HYlgsU0FBTyxFQUFFO0FBQ1BvQixTQUFLLEVBQUUsTUFEQTtBQUVQZCxXQUFPLEVBQUUsTUFGRjtBQUdQRyxpQkFBYSxFQUFFLFFBSFI7QUFJUGtCLGFBQVMsRUFBRSxNQUpKO0FBS1BhLE1BQUUsRUFBRSxNQUxHO0FBTVByRSxTQUFLLEVBQUU7QUFDTDRELGNBQVEsRUFBRSxDQURMO0FBRUxVLFdBQUssRUFBRSxtQkFGRjtBQUdMQyxnQkFBVSxFQUFFLEdBSFA7QUFJTEMsZ0JBQVUsRUFBRSxHQUpQO0FBS0xWLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEI7QUFMQyxLQU5BO0FBY1AvRCxZQUFRLEVBQUU7QUFDUjZELGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixNQUFoQixFQUF3QixDQUF4QixDQURGO0FBRVJZLGdCQUFVLEVBQUUsR0FGSjtBQUdSRCxnQkFBVSxFQUFFO0FBSEo7QUFkSCxHQXBHSTtBQXdIYkUsY0FBWSxFQUFFO0FBQ1pDLFlBQVEsRUFBRSxNQURFO0FBRVp4QyxZQUFRLEVBQUUsVUFGRTtBQUdaZSxTQUFLLEVBQUUsT0FISztBQUlaLGdCQUFZO0FBQ1ZHLGFBQU8sRUFBRSxJQURDO0FBRVZqQixhQUFPLEVBQUUsT0FGQztBQUdWd0MsZ0JBQVUsRUFBRTtBQUhGLEtBSkE7QUFTWkMsVUFBTSxFQUFFO0FBQ04zQixXQUFLLEVBQUUsTUFERDtBQUVOTCxZQUFNLEVBQUUsTUFGRjtBQUdOVixjQUFRLEVBQUUsVUFISjtBQUlOYSxTQUFHLEVBQUUsQ0FKQztBQUtORCxVQUFJLEVBQUU7QUFMQTtBQVRJO0FBeEhELENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGM3N2M1NGNmMDQzNjBiYmVjZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAganN4LFxuICBDb250YWluZXIsXG4gIEJveCxcbiAgR3JpZCxcbiAgVGV4dCxcbiAgSGVhZGluZyxcbiAgQnV0dG9uLFxuICBJbWFnZSxcbn0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nO1xuaW1wb3J0IHsgSW9Jb3NQbGF5IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuXG5pbXBvcnQgU2VydmljZVRodW1iIGZyb20gJ2Fzc2V0cy9zZXJ2aWNlLXRodW1iLnBuZyc7XG5pbXBvcnQgc2hhcGVQYXR0ZXJuIGZyb20gJ2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMS5wbmcnO1xuXG5pbXBvcnQgU21hcnQgZnJvbSAnYXNzZXRzL3NlcnZpY2VzL3NtYXJ0LnN2Zyc7XG5pbXBvcnQgU2VjdXJlIGZyb20gJ2Fzc2V0cy9zZXJ2aWNlcy9zZWN1cmUuc3ZnJztcblxuY29uc3QgZGF0YSA9IHtcbiAgc3ViVGl0bGU6ICdvdXIgYnVzaW5lc3MgZ29hbHMnLFxuICB0aXRsZTogJ1JlZGVmaW5pbmcgUmVhbCBFc3RhdGUgaW4gQWZyaWNhJyxcbiAgZmVhdHVyZXM6IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIGltZ1NyYzogU21hcnQsXG4gICAgICBhbHRUZXh0OiAnU21hcnQgRmVhdHVyZXMnLFxuICAgICAgdGl0bGU6ICdEaWdpdGFsaXplIFJlYWwgRXN0YXRlJyxcbiAgICAgIHRleHQ6XG4gICAgICAgICdXZSBhaW0gYXQgYnJpbmdpbmcgZ3JlYXQgaW5ub3ZhdGlvbnMgaW50byByZWFsIGVzdGF0ZSBzZWN0b3IgaW4gQWZyaWNhIHRocm91Z2ggdGhlIHBvd2VyIG9mIEluZm9ybWF0aW9uIFRlY2hub2xvZ3kuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgaW1nU3JjOiBTZWN1cmUsXG4gICAgICBhbHRUZXh0OiAnU2VjdXJlIENvbnRlbnRzJyxcbiAgICAgIHRpdGxlOiAnRXhjZWxsZW50IFNlcnZpY2UgRGVsaXZlcnknLFxuICAgICAgdGV4dDpcbiAgICAgICAgJ0Vhc2lseSB2ZXJpZnkgcHJvcGVydGllcyBpbiBzZWNvbmRzIGZyb20gYW55d2hlcmUgaW4gdGhlIHdvcmxkIHdpdGggb3VyIHRlY2hub2xvZ2ljYWwgbWVhbnMgYW5kIGFjcXVpcmUgdGhlc2UgcHJvcGVydGllcyBwcml2YXRlbHkgYXQgU2hlbHRlcnMuJyxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZVNlY3Rpb24oKSB7XG4gIC8vIG1vZGFsIHBvcHVwIHZpZGVvIGhhbmRsZXJcbiAgY29uc3QgW3ZpZGVvT3Blbiwgc2V0VmlkZW9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRWaWRlb09wZW4odHJ1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24uc2VydmljZXMnIH19PlxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy50aHVtYm5haWx9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e1NlcnZpY2VUaHVtYn0gYWx0PVwiVGh1bWJuYWlsXCIgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBzeD17c3R5bGVzLnZpZGVvQnRufVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGxheSBCdXR0b25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8SW9Jb3NQbGF5IC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuc2hhcGVCb3h9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17c2hhcGVQYXR0ZXJufSBhbHQ9XCJTaGFwZVwiIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XG4gICAgICAgICAgPFRleHRGZWF0dXJlIHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfSB0aXRsZT17ZGF0YS50aXRsZX0gLz5cblxuICAgICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgICB7ZGF0YS5mZWF0dXJlcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWdTcmN9IGFsdD17aXRlbS5hbHRUZXh0fSBzeD17c3R5bGVzLmljb259IC8+XG5cbiAgICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PntpdGVtLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e2l0ZW0udGV4dH08L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPE1vZGFsVmlkZW9cbiAgICAgICAgY2hhbm5lbD1cInlvdXR1YmVcIlxuICAgICAgICBpc09wZW49e3ZpZGVvT3Blbn1cbiAgICAgICAgdmlkZW9JZD1cIlpOQTlybURzWVZFXCJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0VmlkZW9PcGVuKGZhbHNlKX1cbiAgICAgIC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBwbGF5UGx1c2UgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooMCkgc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWigwKSBzY2FsZSgxLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29yZUZlYXR1cmU6IHtcbiAgICBweTogWzAsIG51bGwsIG51bGwsIDIsIG51bGwsIDddLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICBjb250YWluZXJCb3g6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogWydmbGV4LXN0YXJ0JywgbnVsbCwgbnVsbCwgJ2NlbnRlciddLFxuICAgIGp1c3RpZnlDb250ZW50OiBbJ2ZsZXgtc3RhcnQnLCBudWxsLCBudWxsLCAnc3BhY2UtYmV0d2VlbiddLFxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgJ3JvdyddLFxuICAgIHBiOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgN10sXG4gIH0sXG4gIHRodW1ibmFpbDoge1xuICAgIG1yOiBbJ2F1dG8nLCBudWxsLCBudWxsLCA2LCA2MCwgODVdLFxuICAgIG9yZGVyOiBbMiwgbnVsbCwgbnVsbCwgMF0sXG4gICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIDBdLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJz4gaW1nJzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBoZWlnaHQ6IFszMTAsICdhdXRvJ10sXG4gICAgfSxcbiAgfSxcbiAgc2hhcGVCb3g6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IC02OCxcbiAgICBsZWZ0OiAtMTYwLFxuICAgIHpJbmRleDogLTEsXG4gICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2lubGluZS1ibG9jayddLFxuICB9LFxuICB2aWRlb0J0bjoge1xuICAgIHpJbmRleDogMixcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgd2lkdGg6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgaGVpZ2h0OiBbJzYwcHgnLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxuICAgIHA6ICcwcHggIWltcG9ydGFudCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgdG9wOiAnNTAlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgd2lkdGg6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgICBoZWlnaHQ6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBhbmltYXRpb246IGAke3BsYXlQbHVzZX0gMS41cyBlYXNlLW91dCBpbmZpbml0ZWAsXG4gICAgICBvcGFjaXR5OiAwLjUsXG4gICAgfSxcbiAgICAnPiBzcGFuJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHpJbmRleDogMixcbiAgICB9LFxuICAgIHN2Zzoge1xuICAgICAgZm9udFNpemU6IFs0MCwgbnVsbCwgNDgsIG51bGwsIDYyXSxcbiAgICB9LFxuICB9LFxuICBjb250ZW50Qm94OiB7XG4gICAgd2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIDMxNSwgMzkwLCA0NTAsIG51bGwsIDUwMF0sXG4gICAgZmxleFNocmluazogMCxcbiAgICBtYjogWzcsIG51bGwsIDYwLCAwXSxcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcbiAgfSxcbiAgZ3JpZDoge1xuICAgIHByOiBbMiwgMCwgbnVsbCwgbnVsbCwgNiwgJzcwcHgnXSxcbiAgICBwbDogWzIsIDBdLFxuICAgIHB0OiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXG4gICAgbXg6ICdhdXRvJyxcbiAgICB3aWR0aDogWycxMDAlJywgMzcwLCA0MjAsICcxMDAlJ10sXG4gICAgZ3JpZEdhcDogWyczNXB4IDAnLCBudWxsLCBudWxsLCBudWxsLCAnNTBweCAwJ10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogWydyZXBlYXQoMSwxZnIpJ10sXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIH0sXG5cbiAgaWNvbjoge1xuICAgIHdpZHRoOiBbJzQ1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnNTVweCddLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgbXI6IFszLCBudWxsLCBudWxsLCBudWxsLCA0XSxcbiAgfSxcbiAgd3JhcHBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIG10OiAnLTVweCcsXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiAzLFxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBtYjogWzIsIG51bGwsIDMsIDIsIDNdLFxuICAgIH0sXG5cbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAnMTRweCcsIDFdLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGluZUhlaWdodDogMS45LFxuICAgIH0sXG4gIH0sXG4gIHZpZGVvV3JhcHBlcjoge1xuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgd2lkdGg6ICc5MDBweCcsXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLFxuICAgIH0sXG4gICAgaWZyYW1lOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9