module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Geison\\Desktop\\celke\\site\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Home() {
  const {
    0: orcamento,
    1: setOrcamento
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: '',
    email: '',
    phone: '',
    whatsApp: '',
    msg: ''
  });
  const {
    0: response,
    1: setResponse
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    formSave: false,
    type: '',
    message: ''
  });

  const onChangeInput = e => setOrcamento(_objectSpread(_objectSpread({}, orcamento), {}, {
    [e.target.name]: e.target.value
  }));

  const sendOrcamento = async e => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8080/orcamento', {
        method: 'POST',
        body: JSON.stringify(orcamento),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const responseEnv = await res.json(); //console.log(responseEnv.error);

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
    } catch (err) {}
  };

  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      color: "info",
      dark: true,
      expand: "md",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
          href: "/",
          children: "Geison"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
          onClick: toggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
          isOpen: isOpen,
          navbar: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
            className: "mr-auto",
            navbar: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: `.pg-orcamento {
                background-color: #f5fbfa;
                color: #17a2b8;
                padding-top: 50px;
                padding-bottom: 150px;
                margin-bottom: 0rem ! import;
            }`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        className: "pg-orcamento",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "display-4 text-center",
          children: "Nosso consultores est\xE3o prontos para lhe ajudar!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "lead text-center mb-4",
          children: "Deixe seus contatos abaixo que retornaremos com uma proposta espec\xEDfica para sua necessidade."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, this), response.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
          color: "danger",
          children: response.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 42
        }, this) : "", response.type === 'success' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
          color: "success",
          children: response.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 44
        }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
          onSubmit: sendOrcamento,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
              for: "name",
              children: "Nome"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
              type: "text",
              name: "name",
              id: "name",
              placeholder: "Preencha com o nome completo",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
              for: "email",
              children: "E-mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
              type: "email",
              name: "email",
              id: "email",
              placeholder: "Preencha com o seu melhor email",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
              for: "phone",
              children: "Telefone"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
              type: "text",
              name: "phone",
              id: "phone",
              placeholder: "(xx) xxxx xxxx",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
              for: "whatsapp",
              children: "Whatsapp"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
              type: "text",
              name: "whatsapp",
              id: "whatsapp",
              placeholder: "(xx) xxxx xxxx",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
              for: "msg",
              children: "Conte\xFAdo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
              type: "textarea",
              name: "msg",
              id: "msg",
              placeholder: "Fale um pouco do seu projeto",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: "submit",
            outline: true,
            color: "info",
            children: "Enviar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
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

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwibmFtZXMiOlsiSG9tZSIsIm9yY2FtZW50byIsInNldE9yY2FtZW50byIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJ3aGF0c0FwcCIsIm1zZyIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJmb3JtU2F2ZSIsInR5cGUiLCJtZXNzYWdlIiwib25DaGFuZ2VJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmRPcmNhbWVudG8iLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2VFbnYiLCJqc29uIiwiZXJyb3IiLCJlcnIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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TUFBWjtBQUFtQixrQkFBSSxFQUFDLFVBQXhCO0FBQW1DLGdCQUFFLEVBQUMsVUFBdEM7QUFBaUQseUJBQVcsRUFBQyxnQkFBN0Q7QUFDQSxzQkFBUSxFQUFHQTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQW5CRixlQXlCRSxxRUFBQyxvREFBRDtBQUFBLG9DQUNFLHFFQUFDLGdEQUFEO0FBQU8saUJBQUcsRUFBQyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUUscUVBQUMsZ0RBQUQ7QUFBTyxrQkFBSSxFQUFDLFVBQVo7QUFBdUIsa0JBQUksRUFBQyxLQUE1QjtBQUFrQyxnQkFBRSxFQUFDLEtBQXJDO0FBQTJDLHlCQUFXLEVBQUMsOEJBQXZEO0FBQ0Esc0JBQVEsRUFBR0E7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF6QkYsZUErQkUscUVBQUMsaURBQUQ7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQU8sTUFBN0I7QUFBOEIsaUJBQUssRUFBQyxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUVEOztBQUVjZCxtRUFBZixFOzs7Ozs7Ozs7OztBQy9JRixrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENvbGxhcHNlLFxyXG4gIE5hdmJhcixcclxuICBOYXZiYXJUb2dnbGVyLFxyXG4gIE5hdmJhckJyYW5kLFxyXG4gIE5hdixcclxuICBOYXZJdGVtLFxyXG4gIE5hdkxpbmssXHJcbiAgQ29udGFpbmVyLFxyXG4gIEp1bWJvdHJvbixcclxuICBGb3JtLFxyXG4gIEZvcm1Hcm91cCxcclxuICBMYWJlbCxcclxuICBJbnB1dCxcclxuICBCdXR0b24sXHJcbiAgQWxlcnRcclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW29yY2FtZW50bywgc2V0T3JjYW1lbnRvXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGhvbmU6ICcnLFxyXG4gICAgd2hhdHNBcHA6ICcnLFxyXG4gICAgbXNnOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICB0eXBlOiAnJyxcclxuICAgIG1lc3NhZ2U6ICcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUlucHV0ID0gZSA9PiBzZXRPcmNhbWVudG8oey4uLm9yY2FtZW50bywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZX0pO1xyXG5cclxuICBjb25zdCBzZW5kT3JjYW1lbnRvID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICB0cnl7XHJcbiAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9vcmNhbWVudG8nLCB7XHJcbiAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9yY2FtZW50byksXHJcbiAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ31cclxuICAgICB9KTtcclxuXHJcbiAgICAgY29uc3QgcmVzcG9uc2VFbnYgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlRW52LmVycm9yKTtcclxuICAgICBpZihyZXNwb25zZUVudi5lcnJvcikge1xyXG4gICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICBtZXNzYWdlOiByZXNwb25zZUVudi5tZXNzYWdlXHJcbiAgICAgICB9KTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlRW52Lm1lc3NhZ2VcclxuICAgICAgIH0pXHJcbiAgICAgfVxyXG4gICB9IGNhdGNoKGVycikge1xyXG5cclxuICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxOYXZiYXIgY29sb3I9XCJpbmZvXCIgZGFyayBleHBhbmQ9XCJtZFwiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPkdlaXNvbjwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cclxuICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvXCI+T3JjYW1lbnRvPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcblxyXG4gICAgICAgIDxKdW1ib3Ryb24+XHJcbiAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgIHtgLnBnLW9yY2FtZW50byB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmYmZhO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gISBpbXBvcnQ7XHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicGctb3JjYW1lbnRvXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgdGV4dC1jZW50ZXJcIj5Ob3NzbyBjb25zdWx0b3JlcyBlc3TDo28gcHJvbnRvcyBwYXJhIGxoZSBhanVkYXIhPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCB0ZXh0LWNlbnRlciBtYi00XCI+RGVpeGUgc2V1cyBjb250YXRvcyBhYmFpeG8gcXVlIHJldG9ybmFyZW1vcyBjb20gdW1hIHByb3Bvc3RhIGVzcGVjw61maWNhIHBhcmEgc3VhIG5lY2Vzc2lkYWRlLjwvcD5cclxuXHJcbiAgICAgICAgICAgIHtyZXNwb25zZS50eXBlID09PSAnZXJyb3InID8gPEFsZXJ0IGNvbG9yPVwiZGFuZ2VyXCI+e3Jlc3BvbnNlLm1lc3NhZ2V9PC9BbGVydD4gOiBcIlwifVxyXG4gICAgICAgICAgICB7cmVzcG9uc2UudHlwZSA9PT0gJ3N1Y2Nlc3MnID8gPEFsZXJ0IGNvbG9yPVwic3VjY2Vzc1wiPntyZXNwb25zZS5tZXNzYWdlfTwvQWxlcnQ+IDogXCJcIn1cclxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3NlbmRPcmNhbWVudG99PlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwibmFtZVwiPk5vbWU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIlByZWVuY2hhIGNvbSBvIG5vbWUgY29tcGxldG9cIiAgXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT0ge29uQ2hhbmdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJlbWFpbFwiPkUtbWFpbDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiUHJlZW5jaGEgY29tIG8gc2V1IG1lbGhvciBlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9IHtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwicGhvbmVcIj5UZWxlZm9uZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVcIiBpZD1cInBob25lXCIgcGxhY2Vob2xkZXI9XCIoeHgpIHh4eHggeHh4eFwiIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9IHtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwid2hhdHNhcHBcIj5XaGF0c2FwcDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwid2hhdHNhcHBcIiBpZD1cIndoYXRzYXBwXCIgcGxhY2Vob2xkZXI9XCIoeHgpIHh4eHggeHh4eFwiIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9IHtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwibXNnXCI+Q29udGXDumRvPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwibXNnXCIgaWQ9XCJtc2dcIiBwbGFjZWhvbGRlcj1cIkZhbGUgdW0gcG91Y28gZG8gc2V1IHByb2pldG9cIiBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPSB7b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgRW52aWFyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==