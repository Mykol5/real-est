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
    text: 'Shelter'
  }, {
    id: 2,
    imgSrc: assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    altText: 'Secure Contents',
    title: 'Excellent Service Delivery',
    text: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3NlcnZpY2Utc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3ViVGl0bGUiLCJ0aXRsZSIsImZlYXR1cmVzIiwiaWQiLCJpbWdTcmMiLCJTbWFydCIsImFsdFRleHQiLCJ0ZXh0IiwiU2VjdXJlIiwiU2VydmljZVNlY3Rpb24iLCJ1c2VTdGF0ZSIsInZpZGVvT3BlbiIsInNldFZpZGVvT3BlbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFyaWFudCIsInN0eWxlcyIsImNvbnRhaW5lckJveCIsInRodW1ibmFpbCIsIlNlcnZpY2VUaHVtYiIsInZpZGVvQnRuIiwic2hhcGVCb3giLCJzaGFwZVBhdHRlcm4iLCJjb250ZW50Qm94IiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJjYXJkIiwiaWNvbiIsIndyYXBwZXIiLCJwbGF5UGx1c2UiLCJrZXlmcmFtZXMiLCJjb3JlRmVhdHVyZSIsInB5IiwicG9zaXRpb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsInBiIiwibXIiLCJvcmRlciIsIm1sIiwiekluZGV4IiwiaGVpZ2h0IiwiYm90dG9tIiwibGVmdCIsInRvcCIsInRyYW5zZm9ybSIsIndpZHRoIiwicCIsImJhY2tncm91bmRDb2xvciIsImNvbnRlbnQiLCJib3JkZXJSYWRpdXMiLCJhbmltYXRpb24iLCJvcGFjaXR5IiwidGV4dEFsaWduIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsInN2ZyIsImZvbnRTaXplIiwiZmxleFNocmluayIsIm1iIiwicHIiLCJwbCIsInB0IiwibXgiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm10IiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsInZpZGVvV3JhcHBlciIsIm1heFdpZHRoIiwicGFkZGluZ1RvcCIsImlmcmFtZSJdLCJtYXBwaW5ncyI6Ijs7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SCxHQXBHSTtBQXdIYkUsY0FBWSxFQUFFO0FBQ1pDLFlBQVEsRUFBRSxNQURFO0FBRVp4QyxZQUFRLEVBQUUsVUFGRTtBQUdaZSxTQUFLLEVBQUUsT0FISztBQUlaLGdCQUFZO0FBQ1ZHLGFBQU8sRUFBRSxJQURDO0FBRVZqQixhQUFPLEVBQUUsT0FGQztBQUdWd0MsZ0JBQVUsRUFBRTtBQUhGLEtBSkE7QUFTWkMsVUFBTSxFQUFFO0FBQ04zQixXQUFLLEVBQUUsTUFERDtBQUVOTCxZQUFNLEVBQUUsTUFGRjtBQUdOVixjQUFRLEVBQUUsVUFISjtBQUlOYSxTQUFHLEVBQUUsQ0FKQztBQUtORCxVQUFJLEVBQUU7QUFMQTtBQVRJO0FBeEhELENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTkzZGVkNjYzNDQ0ODkxNmE4YWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAganN4LFxuICBDb250YWluZXIsXG4gIEJveCxcbiAgR3JpZCxcbiAgVGV4dCxcbiAgSGVhZGluZyxcbiAgQnV0dG9uLFxuICBJbWFnZSxcbn0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nO1xuaW1wb3J0IHsgSW9Jb3NQbGF5IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuXG5pbXBvcnQgU2VydmljZVRodW1iIGZyb20gJ2Fzc2V0cy9zZXJ2aWNlLXRodW1iLnBuZyc7XG5pbXBvcnQgc2hhcGVQYXR0ZXJuIGZyb20gJ2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMS5wbmcnO1xuXG5pbXBvcnQgU21hcnQgZnJvbSAnYXNzZXRzL3NlcnZpY2VzL3NtYXJ0LnN2Zyc7XG5pbXBvcnQgU2VjdXJlIGZyb20gJ2Fzc2V0cy9zZXJ2aWNlcy9zZWN1cmUuc3ZnJztcblxuY29uc3QgZGF0YSA9IHtcbiAgc3ViVGl0bGU6ICdvdXIgYnVzaW5lc3MgZ29hbHMnLFxuICB0aXRsZTogJ1JlZGVmaW5pbmcgUmVhbCBFc3RhdGUgaW4gQWZyaWNhJyxcbiAgZmVhdHVyZXM6IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIGltZ1NyYzogU21hcnQsXG4gICAgICBhbHRUZXh0OiAnU21hcnQgRmVhdHVyZXMnLFxuICAgICAgdGl0bGU6ICdEaWdpdGFsaXplIFJlYWwgRXN0YXRlJyxcbiAgICAgIHRleHQ6XG4gICAgICAgICdTaGVsdGVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgaW1nU3JjOiBTZWN1cmUsXG4gICAgICBhbHRUZXh0OiAnU2VjdXJlIENvbnRlbnRzJyxcbiAgICAgIHRpdGxlOiAnRXhjZWxsZW50IFNlcnZpY2UgRGVsaXZlcnknLFxuICAgICAgdGV4dDpcbiAgICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cy4geW91ciBibG9vZCB0ZXN0cy4nLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlU2VjdGlvbigpIHtcbiAgLy8gbW9kYWwgcG9wdXAgdmlkZW8gaGFuZGxlclxuICBjb25zdCBbdmlkZW9PcGVuLCBzZXRWaWRlb09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFZpZGVvT3Blbih0cnVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5zZXJ2aWNlcycgfX0+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRodW1ibmFpbH0+XG4gICAgICAgICAgPEltYWdlIHNyYz17U2VydmljZVRodW1ifSBhbHQ9XCJUaHVtYm5haWxcIiAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHN4PXtzdHlsZXMudmlkZW9CdG59XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQbGF5IEJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxJb0lvc1BsYXkgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5zaGFwZUJveH0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzaGFwZVBhdHRlcm59IGFsdD1cIlNoYXBlXCIgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cbiAgICAgICAgICA8VGV4dEZlYXR1cmUgc3ViVGl0bGU9e2RhdGEuc3ViVGl0bGV9IHRpdGxlPXtkYXRhLnRpdGxlfSAvPlxuXG4gICAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltZ1NyY30gYWx0PXtpdGVtLmFsdFRleHR9IHN4PXtzdHlsZXMuaWNvbn0gLz5cblxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e2l0ZW0udGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57aXRlbS50ZXh0fTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8TW9kYWxWaWRlb1xuICAgICAgICBjaGFubmVsPVwieW91dHViZVwiXG4gICAgICAgIGlzT3Blbj17dmlkZW9PcGVufVxuICAgICAgICB2aWRlb0lkPVwiWk5BOXJtRHNZVkVcIlxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaWRlb09wZW4oZmFsc2UpfVxuICAgICAgLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHBsYXlQbHVzZSA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWigwKSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDApIHNjYWxlKDEuNSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuYDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb3JlRmVhdHVyZToge1xuICAgIHB5OiBbMCwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgN10sXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIH0sXG4gIGNvbnRhaW5lckJveDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiBbJ2ZsZXgtc3RhcnQnLCBudWxsLCBudWxsLCAnY2VudGVyJ10sXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnZmxleC1zdGFydCcsIG51bGwsIG51bGwsICdzcGFjZS1iZXR3ZWVuJ10sXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXG4gICAgcGI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3XSxcbiAgfSxcbiAgdGh1bWJuYWlsOiB7XG4gICAgbXI6IFsnYXV0bycsIG51bGwsIG51bGwsIDYsIDYwLCA4NV0sXG4gICAgb3JkZXI6IFsyLCBudWxsLCBudWxsLCAwXSxcbiAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgMF0sXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnPiBpbWcnOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIGhlaWdodDogWzMxMCwgJ2F1dG8nXSxcbiAgICB9LFxuICB9LFxuICBzaGFwZUJveDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogLTY4LFxuICAgIGxlZnQ6IC0xNjAsXG4gICAgekluZGV4OiAtMSxcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXG4gIH0sXG4gIHZpZGVvQnRuOiB7XG4gICAgekluZGV4OiAyLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICB3aWR0aDogWyc2MHB4JywgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcbiAgICBoZWlnaHQ6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgcDogJzBweCAhaW1wb3J0YW50JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgbGVmdDogJzUwJScsXG4gICAgICB0b3A6ICc1MCUnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogWyc2MHB4JywgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcbiAgICAgIGhlaWdodDogWyc2MHB4JywgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGFuaW1hdGlvbjogYCR7cGxheVBsdXNlfSAxLjVzIGVhc2Utb3V0IGluZmluaXRlYCxcbiAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICB9LFxuICAgICc+IHNwYW4nOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxuICAgICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICAgIGhlaWdodDogJ2luaGVyaXQnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC41cycsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgekluZGV4OiAyLFxuICAgIH0sXG4gICAgc3ZnOiB7XG4gICAgICBmb250U2l6ZTogWzQwLCBudWxsLCA0OCwgbnVsbCwgNjJdLFxuICAgIH0sXG4gIH0sXG4gIGNvbnRlbnRCb3g6IHtcbiAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgMzE1LCAzOTAsIDQ1MCwgbnVsbCwgNTAwXSxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG1iOiBbNywgbnVsbCwgNjAsIDBdLFxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxuICB9LFxuICBncmlkOiB7XG4gICAgcHI6IFsyLCAwLCBudWxsLCBudWxsLCA2LCAnNzBweCddLFxuICAgIHBsOiBbMiwgMF0sXG4gICAgcHQ6IFsyLCBudWxsLCBudWxsLCBudWxsLCAzXSxcbiAgICBteDogJ2F1dG8nLFxuICAgIHdpZHRoOiBbJzEwMCUnLCAzNzAsIDQyMCwgJzEwMCUnXSxcbiAgICBncmlkR2FwOiBbJzM1cHggMCcsIG51bGwsIG51bGwsIG51bGwsICc1MHB4IDAnXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJ3JlcGVhdCgxLDFmciknXSxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgfSxcblxuICBpY29uOiB7XG4gICAgd2lkdGg6IFsnNDVweCcsIG51bGwsIG51bGwsIG51bGwsICc1NXB4J10sXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgZmxleFNocmluazogMCxcbiAgICBtcjogWzMsIG51bGwsIG51bGwsIG51bGwsIDRdLFxuICB9LFxuICB3cmFwcGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgbXQ6ICctNXB4JyxcbiAgICB0aXRsZToge1xuICAgICAgZm9udFNpemU6IDMsXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIG1iOiBbMiwgbnVsbCwgMywgMiwgM10sXG4gICAgfSxcblxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsICcxNHB4JywgMV0sXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjksXG4gICAgfSxcbiAgfSxcbiAgdmlkZW9XcmFwcGVyOiB7XG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB3aWR0aDogJzkwMHB4JyxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsXG4gICAgfSxcbiAgICBpZnJhbWU6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=