webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Geison_Desktop_celke_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Geison_Desktop_celke_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Geison_Desktop_celke_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Geison_Desktop_celke_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Geison_Desktop_celke_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "C:\\Users\\Geison\\Desktop\\celke\\site\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Geison_Desktop_celke_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: '',
    email: '',
    phone: '',
    whatsApp: '',
    msg: ''
  }),
      orcamento = _useState[0],
      setOrcamento = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    formSave: false,
    type: '',
    message: ''
  }),
      response = _useState2[0],
      setResponse = _useState2[1];

  var onChangeInput = function onChangeInput(e) {
    return setOrcamento(_objectSpread(_objectSpread({}, orcamento), {}, Object(C_Users_Geison_Desktop_celke_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
  };

  var sendOrcamento = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Geison_Desktop_celke_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Geison_Desktop_celke_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var res, responseEnv;
      return C_Users_Geison_Desktop_celke_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              _context.next = 4;
              return fetch('http://localhost:8080/orcamento', {
                method: 'POST',
                body: JSON.stringify(orcamento),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 4:
              res = _context.sent;
              _context.next = 7;
              return res.json();

            case 7:
              responseEnv = _context.sent;

              //console.log(responseEnv.error);
              if (responseEnv.error) {
                setResponse({
                  type: 'error',
                  message: responseEnv.message
                });
              } else {
                setResponse({
                  type: 'success',
                  message: responseEnv.message
                });
              }

              _context.next = 13;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function sendOrcamento(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isOpen = _useState3[0],
      setIsOpen = _useState3[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"], {
      color: "info",
      dark: true,
      expand: "md",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavbarBrand"], {
          href: "/",
          children: "Geison"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavbarToggler"], {
          onClick: toggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Collapse"], {
          isOpen: isOpen,
          navbar: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
            className: "mr-auto",
            navbar: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
                href: "/",
                children: "Orcamento"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("style", {
        children: ".pg-orcamento {\n                background-color: #f5fbfa;\n                color: #17a2b8;\n                padding-top: 50px;\n                padding-bottom: 150px;\n                margin-bottom: 0rem ! import;\n            }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        className: "pg-orcamento",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
          className: "display-4 text-center",
          children: "Nosso consultores est\xE3o prontos para lhe ajudar!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
          className: "lead text-center mb-4",
          children: "Deixe seus contatos abaixo que retornaremos com uma proposta espec\xEDfica para sua necessidade."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, this), response.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
          color: "danger"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 42
        }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
          onSubmit: sendOrcamento,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
              "for": "name",
              children: "Nome"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "text",
              name: "name",
              id: "name",
              placeholder: "Preencha com o nome completo",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
              "for": "email",
              children: "E-mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "email",
              name: "email",
              id: "email",
              placeholder: "Preencha com o seu melhor email",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
              "for": "phone",
              children: "Telefone"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "text",
              name: "phone",
              id: "phone",
              placeholder: "(xx) xxxx xxxx",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
              "for": "whatsapp",
              children: "Whatsapp"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "text",
              name: "whatsapp",
              id: "whatsapp",
              placeholder: "(xx) xxxx xxxx",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
              "for": "msg",
              children: "Conte\xFAdo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "textarea",
              name: "msg",
              id: "msg",
              placeholder: "Fale um pouco do seu projeto",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            type: "submit",
            outline: true,
            color: "info",
            children: "Enviar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 7
  }, this);
}

_s(Home, "eiu2J1TXrmrDugjGwhaSn1P9ea8=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJ3aGF0c0FwcCIsIm1zZyIsIm9yY2FtZW50byIsInNldE9yY2FtZW50byIsImZvcm1TYXZlIiwidHlwZSIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsInNldFJlc3BvbnNlIiwib25DaGFuZ2VJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmRPcmNhbWVudG8iLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzIiwianNvbiIsInJlc3BvbnNlRW52IiwiZXJyb3IiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFrQkEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNvQkMsc0RBQVEsQ0FBQztBQUN6Q0MsUUFBSSxFQUFFLEVBRG1DO0FBRXpDQyxTQUFLLEVBQUUsRUFGa0M7QUFHekNDLFNBQUssRUFBRSxFQUhrQztBQUl6Q0MsWUFBUSxFQUFFLEVBSitCO0FBS3pDQyxPQUFHLEVBQUU7QUFMb0MsR0FBRCxDQUQ1QjtBQUFBLE1BQ1BDLFNBRE87QUFBQSxNQUNJQyxZQURKOztBQUFBLG1CQVNrQlAsc0RBQVEsQ0FBQztBQUN2Q1EsWUFBUSxFQUFFLEtBRDZCO0FBRXZDQyxRQUFJLEVBQUUsRUFGaUM7QUFHdkNDLFdBQU8sRUFBRTtBQUg4QixHQUFELENBVDFCO0FBQUEsTUFTUEMsUUFUTztBQUFBLE1BU0dDLFdBVEg7O0FBZWQsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxDQUFDO0FBQUEsV0FBSVAsWUFBWSxpQ0FBS0QsU0FBTCxtSkFBaUJRLENBQUMsQ0FBQ0MsTUFBRixDQUFT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ZWJwYWNrL3BhZ2VzL2luZGV4LjIxMmEzOTQyODY0NmM5ZjQwYTA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENvbGxhcHNlLFxyXG4gIE5hdmJhcixcclxuICBOYXZiYXJUb2dnbGVyLFxyXG4gIE5hdmJhckJyYW5kLFxyXG4gIE5hdixcclxuICBOYXZJdGVtLFxyXG4gIE5hdkxpbmssXHJcbiAgQ29udGFpbmVyLFxyXG4gIEp1bWJvdHJvbixcclxuICBGb3JtLFxyXG4gIEZvcm1Hcm91cCxcclxuICBMYWJlbCxcclxuICBJbnB1dCxcclxuICBCdXR0b24sXHJcbiAgQWxlcnRcclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW29yY2FtZW50bywgc2V0T3JjYW1lbnRvXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGhvbmU6ICcnLFxyXG4gICAgd2hhdHNBcHA6ICcnLFxyXG4gICAgbXNnOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICB0eXBlOiAnJyxcclxuICAgIG1lc3NhZ2U6ICcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUlucHV0ID0gZSA9PiBzZXRPcmNhbWVudG8oey4uLm9yY2FtZW50bywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZX0pO1xyXG5cclxuICBjb25zdCBzZW5kT3JjYW1lbnRvID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICB0cnl7XHJcbiAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9vcmNhbWVudG8nLCB7XHJcbiAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9yY2FtZW50byksXHJcbiAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ31cclxuICAgICB9KTtcclxuXHJcbiAgICAgY29uc3QgcmVzcG9uc2VFbnYgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlRW52LmVycm9yKTtcclxuICAgICBpZihyZXNwb25zZUVudi5lcnJvcikge1xyXG4gICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICBtZXNzYWdlOiByZXNwb25zZUVudi5tZXNzYWdlXHJcbiAgICAgICB9KTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlRW52Lm1lc3NhZ2VcclxuICAgICAgIH0pXHJcbiAgICAgfVxyXG4gICB9IGNhdGNoKGVycikge1xyXG5cclxuICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxOYXZiYXIgY29sb3I9XCJpbmZvXCIgZGFyayBleHBhbmQ9XCJtZFwiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPkdlaXNvbjwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cclxuICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvXCI+T3JjYW1lbnRvPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcblxyXG4gICAgICAgIDxKdW1ib3Ryb24+XHJcbiAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgIHtgLnBnLW9yY2FtZW50byB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmYmZhO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gISBpbXBvcnQ7XHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicGctb3JjYW1lbnRvXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgdGV4dC1jZW50ZXJcIj5Ob3NzbyBjb25zdWx0b3JlcyBlc3TDo28gcHJvbnRvcyBwYXJhIGxoZSBhanVkYXIhPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCB0ZXh0LWNlbnRlciBtYi00XCI+RGVpeGUgc2V1cyBjb250YXRvcyBhYmFpeG8gcXVlIHJldG9ybmFyZW1vcyBjb20gdW1hIHByb3Bvc3RhIGVzcGVjw61maWNhIHBhcmEgc3VhIG5lY2Vzc2lkYWRlLjwvcD5cclxuXHJcbiAgICAgICAgICAgIHtyZXNwb25zZS50eXBlID09PSAnZXJyb3InID8gPEFsZXJ0IGNvbG9yPVwiZGFuZ2VyXCI+PC9BbGVydD4gOiBcIlwifVxyXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17c2VuZE9yY2FtZW50b30+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJuYW1lXCI+Tm9tZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiUHJlZW5jaGEgY29tIG8gbm9tZSBjb21wbGV0b1wiICBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPSB7b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cImVtYWlsXCI+RS1tYWlsPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJQcmVlbmNoYSBjb20gbyBzZXUgbWVsaG9yIGVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT0ge29uQ2hhbmdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJwaG9uZVwiPlRlbGVmb25lPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwaG9uZVwiIGlkPVwicGhvbmVcIiBwbGFjZWhvbGRlcj1cIih4eCkgeHh4eCB4eHh4XCIgXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT0ge29uQ2hhbmdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJ3aGF0c2FwcFwiPldoYXRzYXBwPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ3aGF0c2FwcFwiIGlkPVwid2hhdHNhcHBcIiBwbGFjZWhvbGRlcj1cIih4eCkgeHh4eCB4eHh4XCIgXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT0ge29uQ2hhbmdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJtc2dcIj5Db250ZcO6ZG88L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJtc2dcIiBpZD1cIm1zZ1wiIHBsYWNlaG9sZGVyPVwiRmFsZSB1bSBwb3VjbyBkbyBzZXUgcHJvamV0b1wiIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9IHtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG91dGxpbmUgY29sb3I9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICBFbnZpYXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvSnVtYm90cm9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9