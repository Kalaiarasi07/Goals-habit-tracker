/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/Index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/Index.jsx":
/*!****************************************!*\
  !*** ./app/javascript/packs/Index.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/user/MP/rrapp/app/javascript/packs/Index.jsx: Identifier 'Route' has already been declared. (8:9)\n\n   6 | import ReactDOM from 'react-dom'\n   7 | import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom'\n>  8 | import { Route, Switch } from 'react-router-dom'\n     |          ^\n   9 |\n  10 | document.addEventListener('DOMContentLoaded', () => {\n  11 |   ReactDOM.render(\n    at instantiate (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:358:12)\n    at Object.raise (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:3335:19)\n    at ScopeHandler.checkRedeclarationInScope (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:3519:19)\n    at ScopeHandler.declareName (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:3485:12)\n    at Object.declareNameFromIdentifier (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:12058:16)\n    at Object.checkIdentifier (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:12053:12)\n    at Object.checkLVal (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:11979:12)\n    at Object.finishImportSpecifier (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:16191:10)\n    at Object.parseImportSpecifier (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:16372:17)\n    at Object.parseNamedImportSpecifiers (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:16345:36)\n    at Object.parseImport (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:16155:39)\n    at Object.parseStatementContent (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:14643:27)\n    at Object.parseStatement (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:14533:17)\n    at Object.parseBlockOrModuleBlockBody (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:15176:25)\n    at Object.parseBlockBody (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:15167:10)\n    at Object.parseProgram (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:14451:10)\n    at Object.parseTopLevel (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:14438:25)\n    at Object.parse (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:16401:10)\n    at parse (/home/user/MP/rrapp/node_modules/@babel/parser/lib/index.js:16453:38)\n    at parser (/home/user/MP/rrapp/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/user/MP/rrapp/node_modules/@babel/core/lib/transformation/normalize-file.js:87:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/user/MP/rrapp/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/home/user/MP/rrapp/node_modules/@babel/core/lib/transform.js:25:41)\n    at transform.next (<anonymous>)\n    at step (/home/user/MP/rrapp/node_modules/gensync/index.js:261:32)\n    at /home/user/MP/rrapp/node_modules/gensync/index.js:273:13");

/***/ })

/******/ });
//# sourceMappingURL=Index-fafbb74e0a4745f5f67b.js.map