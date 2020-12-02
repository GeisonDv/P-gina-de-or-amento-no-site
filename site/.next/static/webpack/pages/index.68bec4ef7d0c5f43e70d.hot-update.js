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
              console.log(responseEnv);
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
          lineNumber: 62,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavbarToggler"], {
          onClick: toggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
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
                lineNumber: 67,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("style", {
        children: ".pg-orcamento {\n                background-color: #f5fbfa;\n                color: #17a2b8;\n                padding-top: 50px;\n                padding-bottom: 150px;\n                margin-bottom: 0rem ! import;\n            }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        className: "pg-orcamento",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
          className: "display-4 text-center",
          children: "Nosso consultores est\xE3o prontos para lhe ajudar!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
          className: "lead text-center mb-4",
          children: "Deixe seus contatos abaixo que retornaremos com uma proposta espec\xEDfica para sua necessidade."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
          onSubmit: sendOrcamento,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
              "for": "name",
              children: "Nome"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "text",
              name: "name",
              id: "name",
              placeholder: "Preencha com o nome completo",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
              "for": "email",
              children: "E-mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "email",
              name: "email",
              id: "email",
              placeholder: "Preencha com o seu melhor email",
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
              "for": "phone",
              children: "Telefone"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "text",
              name: "phone",
              id: "phone",
              placeholder: "(xx) xxxx xxxx",
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
              "for": "whatsapp",
              children: "Whatsapp"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "text",
              name: "whatsapp",
              id: "whatsapp",
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
              "for": "msg",
              children: "Conte\xFAdo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "textarea",
              name: "msg",
              id: "msg",
              placeholder: "Fale um pouco do seu projeto",
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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            type: "submit",
            outline: true,
            color: "info",
            children: "Enviar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJ3aGF0c0FwcCIsIm1zZyIsIm9yY2FtZW50byIsInNldE9yY2FtZW50byIsImZvcm1TYXZlIiwidHlwZSIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsInNldFJlc3BvbnNlIiwib25DaGFuZ2VJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmRPcmNhbWVudG8iLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzIiwianNvbiIsInJlc3BvbnNlRW52IiwiY29uc29sZSIsImxvZyIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWlCQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ29CQyxzREFBUSxDQUFDO0FBQ3pDQyxRQUFJLEVBQUUsRUFEbUM7QUFFekNDLFNBQUssRUFBRSxFQUZrQztBQUd6Q0MsU0FBSyxFQUFFLEVBSGtDO0FBSXpDQyxZQUFRLEVBQUUsRUFKK0I7QUFLekNDLE9BQUcsRUFBRTtBQUxvQyxHQUFELENBRDVCO0FBQUEsTUFDUEMsU0FETztBQUFBLE1BQ0lDLFlBREo7O0FBQUEsbUJBU2tCUCxzREFBUSxDQUFDO0FBQ3ZDUSxZQUFRLEVBQUUsS0FENkI7QUFFdkNDLFFBQUksRUFBRSxFQUZpQztBQUd2Q0MsV0FBTyxFQUFFO0FBSDhCLEdBQUQsQ0FUMUI7QUFBQSxNQVNQQyxRQVRPO0FBQUEsTUFTR0MsV0FUSDs7QUFlZCxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLENBQUM7QUFBQSxXQUFJUCxZQUFZLGlDQUFLRCxTQUFMLG1KQUFpQlEsQ0FBQyxDQUFDQyxN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QTtBQUFBO0FBQUEsa0JBbkJGLGVBeUJFLHFFQUFDLG9EQUFEO0FBQUEsb0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTyxxQkFBSSxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUUscUVBQUMsZ0RBQUQ7QUFBTyxrQkFBSSxFQUFDLFVBQVo7QUFBdUIsa0JBQUksRUFBQyxLQUE1QjtBQUFrQyxnQkFBRSxFQUFDLEtBQXJDO0FBQTJDLHlCQUFXLEVBQUMsOEJBQXZEO0FBQ0Esc0JBQVEsRUFBR0E7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF6QkYsZUErQkUscUVBQUMsaURBQUQ7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQU8sTUFBN0I7QUFBOEIsaUJBQUssRUFBQyxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUVEOztHQTVHTWQsSTs7S0FBQUEsSTtBQThHUUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjhiZWM0ZWY3ZDBjNWY0M2U3MGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDb2xsYXBzZSxcclxuICBOYXZiYXIsXHJcbiAgTmF2YmFyVG9nZ2xlcixcclxuICBOYXZiYXJCcmFuZCxcclxuICBOYXYsXHJcbiAgTmF2SXRlbSxcclxuICBOYXZMaW5rLFxyXG4gIENvbnRhaW5lcixcclxuICBKdW1ib3Ryb24sXHJcbiAgRm9ybSxcclxuICBGb3JtR3JvdXAsXHJcbiAgTGFiZWwsXHJcbiAgSW5wdXQsXHJcbiAgQnV0dG9uXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtvcmNhbWVudG8sIHNldE9yY2FtZW50b10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBob25lOiAnJyxcclxuICAgIHdoYXRzQXBwOiAnJyxcclxuICAgIG1zZzogJycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGUoe1xyXG4gICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgdHlwZTogJycsXHJcbiAgICBtZXNzYWdlOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJbnB1dCA9IGUgPT4gc2V0T3JjYW1lbnRvKHsuLi5vcmNhbWVudG8sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWV9KTtcclxuXHJcbiAgY29uc3Qgc2VuZE9yY2FtZW50byA9IGFzeW5jIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgdHJ5e1xyXG4gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvb3JjYW1lbnRvJywge1xyXG4gICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcmNhbWVudG8pLFxyXG4gICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XHJcbiAgICAgfSk7XHJcblxyXG4gICAgIGNvbnN0IHJlc3BvbnNlRW52ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgY29uc29sZS5sb2cocmVzcG9uc2VFbnYpO1xyXG4gICB9IGNhdGNoKGVycikge1xyXG5cclxuICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxOYXZiYXIgY29sb3I9XCJpbmZvXCIgZGFyayBleHBhbmQ9XCJtZFwiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPkdlaXNvbjwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cclxuICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvXCI+T3JjYW1lbnRvPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcblxyXG4gICAgICAgIDxKdW1ib3Ryb24+XHJcbiAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgIHtgLnBnLW9yY2FtZW50byB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmYmZhO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gISBpbXBvcnQ7XHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicGctb3JjYW1lbnRvXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgdGV4dC1jZW50ZXJcIj5Ob3NzbyBjb25zdWx0b3JlcyBlc3TDo28gcHJvbnRvcyBwYXJhIGxoZSBhanVkYXIhPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCB0ZXh0LWNlbnRlciBtYi00XCI+RGVpeGUgc2V1cyBjb250YXRvcyBhYmFpeG8gcXVlIHJldG9ybmFyZW1vcyBjb20gdW1hIHByb3Bvc3RhIGVzcGVjw61maWNhIHBhcmEgc3VhIG5lY2Vzc2lkYWRlLjwvcD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtzZW5kT3JjYW1lbnRvfT5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cIm5hbWVcIj5Ob21lPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJQcmVlbmNoYSBjb20gbyBub21lIGNvbXBsZXRvXCIgIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9IHtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwiZW1haWxcIj5FLW1haWw8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlByZWVuY2hhIGNvbSBvIHNldSBtZWxob3IgZW1haWxcIiBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPSB7b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cInBob25lXCI+VGVsZWZvbmU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIgaWQ9XCJwaG9uZVwiIHBsYWNlaG9sZGVyPVwiKHh4KSB4eHh4IHh4eHhcIiBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPSB7b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cIndoYXRzYXBwXCI+V2hhdHNhcHA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIndoYXRzYXBwXCIgaWQ9XCJ3aGF0c2FwcFwiIHBsYWNlaG9sZGVyPVwiKHh4KSB4eHh4IHh4eHhcIiBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPSB7b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cIm1zZ1wiPkNvbnRlw7pkbzwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cIm1zZ1wiIGlkPVwibXNnXCIgcGxhY2Vob2xkZXI9XCJGYWxlIHVtIHBvdWNvIGRvIHNldSBwcm9qZXRvXCIgXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT0ge29uQ2hhbmdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb3V0bGluZSBjb2xvcj1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgIEVudmlhclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=