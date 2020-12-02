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
          lineNumber: 68,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavbarToggler"], {
          onClick: toggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
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
                lineNumber: 73,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("style", {
        children: ".pg-orcamento {\n                background-color: #f5fbfa;\n                color: #17a2b8;\n                padding-top: 50px;\n                padding-bottom: 150px;\n                margin-bottom: 0rem ! import;\n            }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        className: "pg-orcamento",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
          className: "display-4 text-center",
          children: "Nosso consultores est\xE3o prontos para lhe ajudar!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
          className: "lead text-center mb-4",
          children: "Deixe seus contatos abaixo que retornaremos com uma proposta espec\xEDfica para sua necessidade."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
          onSubmit: sendOrcamento,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
              "for": "name",
              children: "Nome"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "text",
              name: "name",
              id: "name",
              placeholder: "Preencha com o nome completo",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
              "for": "email",
              children: "E-mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "email",
              name: "email",
              id: "email",
              placeholder: "Preencha com o seu melhor email",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
              "for": "phone",
              children: "Telefone"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "text",
              name: "phone",
              id: "phone",
              placeholder: "(xx) xxxx xxxx",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
              "for": "whatsapp",
              children: "Whatsapp"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "text",
              name: "whatsapp",
              id: "whatsapp",
              placeholder: "(xx) xxxx xxxx",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
              "for": "msg",
              children: "Conte\xFAdo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "textarea",
              name: "msg",
              id: "msg",
              placeholder: "Fale um pouco do seu projeto",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            type: "submit",
            outline: true,
            color: "info",
            children: "Enviar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJ3aGF0c0FwcCIsIm1zZyIsIm9yY2FtZW50byIsInNldE9yY2FtZW50byIsImZvcm1TYXZlIiwidHlwZSIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsInNldFJlc3BvbnNlIiwib25DaGFuZ2VJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmRPcmNhbWVudG8iLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzIiwianNvbiIsInJlc3BvbnNlRW52IiwiZXJyb3IiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFpQkEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNvQkMsc0RBQVEsQ0FBQztBQUN6Q0MsUUFBSSxFQUFFLEVBRG1DO0FBRXpDQyxTQUFLLEVBQUUsRUFGa0M7QUFHekNDLFNBQUssRUFBRSxFQUhrQztBQUl6Q0MsWUFBUSxFQUFFLEVBSitCO0FBS3pDQyxPQUFHLEVBQUU7QUFMb0MsR0FBRCxDQUQ1QjtBQUFBLE1BQ1BDLFNBRE87QUFBQSxNQUNJQyxZQURKOztBQUFBLG1CQVNrQlAsc0RBQVEsQ0FBQztBQUN2Q1EsWUFBUSxFQUFFLEtBRDZCO0FBRXZDQyxRQUFJLEVBQUUsRUFGaUM7QUFHdkNDLFdBQU8sRUFBRTtBQUg4QixHQUFELENBVDFCO0FBQUEsTUFTUEMsUUFUTztBQUFBLE1BU0dDLFdBVEg7O0FBZWQsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxDQUFDO0FBQUEsV0FBSVAsWUFBWSxpQ0FBS0QsU0FBTCxtSkFBaUJRLENBQUMsQ0FBQ0MsTUFBRixDQUFT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QyxVQUF0QztBQUFpRCx5QkFBVyxFQUFDLGdCQUE3RDtBQUNBLHNCQUFRLEVBQUdBO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbkJGLGVBeUJFLHFFQUFDLG9EQUFEO0FBQUEsb0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTyxxQkFBSSxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUUscUVBQUMsZ0RBQUQ7QUFBTyxrQkFBSSxFQUFDLFVBQVo7QUFBdUIsa0JBQUksRUFBQyxLQUE1QjtBQUFrQyxnQkFBRSxFQUFDLEtBQXJDO0FBQTJDLHlCQUFXLEVBQUMsOEJBQXZEO0FBQ0Esc0JBQVEsRUFBR0E7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF6QkYsZUErQkUscUVBQUMsaURBQUQ7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQU8sTUFBN0I7QUFBOEIsaUJBQUssRUFBQyxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUVEOztHQWxITWQsSTs7S0FBQUEsSTtBQW9IUUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWY0N2RjZGNhMDZkNWE2ZWRiZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDb2xsYXBzZSxcclxuICBOYXZiYXIsXHJcbiAgTmF2YmFyVG9nZ2xlcixcclxuICBOYXZiYXJCcmFuZCxcclxuICBOYXYsXHJcbiAgTmF2SXRlbSxcclxuICBOYXZMaW5rLFxyXG4gIENvbnRhaW5lcixcclxuICBKdW1ib3Ryb24sXHJcbiAgRm9ybSxcclxuICBGb3JtR3JvdXAsXHJcbiAgTGFiZWwsXHJcbiAgSW5wdXQsXHJcbiAgQnV0dG9uXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtvcmNhbWVudG8sIHNldE9yY2FtZW50b10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBob25lOiAnJyxcclxuICAgIHdoYXRzQXBwOiAnJyxcclxuICAgIG1zZzogJycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGUoe1xyXG4gICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgdHlwZTogJycsXHJcbiAgICBtZXNzYWdlOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJbnB1dCA9IGUgPT4gc2V0T3JjYW1lbnRvKHsuLi5vcmNhbWVudG8sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWV9KTtcclxuXHJcbiAgY29uc3Qgc2VuZE9yY2FtZW50byA9IGFzeW5jIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgdHJ5e1xyXG4gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvb3JjYW1lbnRvJywge1xyXG4gICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcmNhbWVudG8pLFxyXG4gICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XHJcbiAgICAgfSk7XHJcblxyXG4gICAgIGNvbnN0IHJlc3BvbnNlRW52ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZUVudi5lcnJvcik7XHJcbiAgICAgaWYocmVzcG9uc2VFbnYuZXJyb3IpIHtcclxuICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2VFbnYubWVzc2FnZVxyXG4gICAgICAgfSlcclxuICAgICB9XHJcbiAgIH0gY2F0Y2goZXJyKSB7XHJcblxyXG4gICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgPE5hdmJhciBjb2xvcj1cImluZm9cIiBkYXJrIGV4cGFuZD1cIm1kXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPE5hdmJhckJyYW5kIGhyZWY9XCIvXCI+R2Vpc29uPC9OYXZiYXJCcmFuZD5cclxuICAgICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG4gICAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cclxuICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIj5PcmNhbWVudG88L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L05hdmJhcj5cclxuXHJcbiAgICAgICAgPEp1bWJvdHJvbj5cclxuICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAge2AucGctb3JjYW1lbnRvIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWZiZmE7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE3YTJiODtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhIGltcG9ydDtcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJwZy1vcmNhbWVudG9cIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNCB0ZXh0LWNlbnRlclwiPk5vc3NvIGNvbnN1bHRvcmVzIGVzdMOjbyBwcm9udG9zIHBhcmEgbGhlIGFqdWRhciE8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkIHRleHQtY2VudGVyIG1iLTRcIj5EZWl4ZSBzZXVzIGNvbnRhdG9zIGFiYWl4byBxdWUgcmV0b3JuYXJlbW9zIGNvbSB1bWEgcHJvcG9zdGEgZXNwZWPDrWZpY2EgcGFyYSBzdWEgbmVjZXNzaWRhZGUuPC9wPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3NlbmRPcmNhbWVudG99PlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwibmFtZVwiPk5vbWU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIlByZWVuY2hhIGNvbSBvIG5vbWUgY29tcGxldG9cIiAgXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT0ge29uQ2hhbmdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJlbWFpbFwiPkUtbWFpbDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiUHJlZW5jaGEgY29tIG8gc2V1IG1lbGhvciBlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9IHtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwicGhvbmVcIj5UZWxlZm9uZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVcIiBpZD1cInBob25lXCIgcGxhY2Vob2xkZXI9XCIoeHgpIHh4eHggeHh4eFwiIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9IHtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwid2hhdHNhcHBcIj5XaGF0c2FwcDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwid2hhdHNhcHBcIiBpZD1cIndoYXRzYXBwXCIgcGxhY2Vob2xkZXI9XCIoeHgpIHh4eHggeHh4eFwiIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9IHtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwibXNnXCI+Q29udGXDumRvPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwibXNnXCIgaWQ9XCJtc2dcIiBwbGFjZWhvbGRlcj1cIkZhbGUgdW0gcG91Y28gZG8gc2V1IHByb2pldG9cIiBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPSB7b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgRW52aWFyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==