/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/HomePage/index.js":
/*!******************************!*\
  !*** ./js/HomePage/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomeClass)\n/* harmony export */ });\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Store */ \"./js/Store/index.js\");\n\n\nclass HomeClass extends _Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  title = \"Home\";\n\n  render() {\n    return /*js*/ `<div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"card mt-5\">\n                      <div class=\"card-body text-center\">Welcome To The Vanilla Js And Php Setup</div>\n                    </div>\n                  </div>\n              </div>\n         </div>`;\n  }\n}\n\n\n//# sourceURL=webpack://vanilla-php-and-js/./js/HomePage/index.js?");

/***/ }),

/***/ "./js/LoginPage/index.js":
/*!*******************************!*\
  !*** ./js/LoginPage/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginPage)\n/* harmony export */ });\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Store */ \"./js/Store/index.js\");\n\n\nclass LoginPage extends _Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  render() {\n    return /*js*/ `<div class=\"row\">\n                   <div class=\"col-sm-12\">\n                    <div class=\"card mt-5\">\n                      <div class=\"card-body text-center\">Login Page</div>\n                    </div>\n                  </div>\n              </div>`;\n  }\n}\n\n\n//# sourceURL=webpack://vanilla-php-and-js/./js/LoginPage/index.js?");

/***/ }),

/***/ "./js/NotFoundPage/index.js":
/*!**********************************!*\
  !*** ./js/NotFoundPage/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NotFoundPage)\n/* harmony export */ });\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Store */ \"./js/Store/index.js\");\n\n\nclass NotFoundPage extends _Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  render() {\n    return `NOT FOUND`;\n  }\n}\n\n\n//# sourceURL=webpack://vanilla-php-and-js/./js/NotFoundPage/index.js?");

/***/ }),

/***/ "./js/RegisterPage/index.js":
/*!**********************************!*\
  !*** ./js/RegisterPage/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RegisterPage)\n/* harmony export */ });\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Store */ \"./js/Store/index.js\");\n\n\nclass RegisterPage extends _Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n  }\n\n  render() {\n    return /*js*/ `<div class=\"row\">\n                   <div class=\"col-sm-12\">\n                    <div class=\"card mt-5\">\n                      <div class=\"card-body text-center\">Register Page</div>\n                    </div>\n                  </div>\n              </div>`;\n  }\n}\n\n\n//# sourceURL=webpack://vanilla-php-and-js/./js/RegisterPage/index.js?");

/***/ }),

/***/ "./js/Store/index.js":
/*!***************************!*\
  !*** ./js/Store/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\nclass Store {\n  setState(key = \"\", value = null) {\n    if (!value) return;\n    localStorage.setItem(key, JSON.stringify(value));\n  }\n  getState(key) {\n    const item = localStorage.getItem(key);\n    return JSON.parse(item);\n  }\n}\n\n\n//# sourceURL=webpack://vanilla-php-and-js/./js/Store/index.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage */ \"./js/HomePage/index.js\");\n/* harmony import */ var _NotFoundPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotFoundPage */ \"./js/NotFoundPage/index.js\");\n/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginPage */ \"./js/LoginPage/index.js\");\n/* harmony import */ var _RegisterPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegisterPage */ \"./js/RegisterPage/index.js\");\nconst CURRENT_PAGE_STORAGE_KEY = \"CURRENT_PAGE_STORAGE_KEY\";\n\n// Importing the Pages\n\n\n\n\n\n// Instatiating the pages as a class\nconst HomeClass = new _HomePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst NotFoundClass = new _NotFoundPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst LoginClass = new _LoginPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst RegisterClass = new _RegisterPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n// Maping the classes to a key used in the navbar to identify which page the user is requesting\nconst pages = {\n  Home: HomeClass,\n  NotFound: NotFoundClass,\n  Login: LoginClass,\n  Register: RegisterClass,\n};\n\n(() => {\n  // getting all the links in the app that has a class name of .nav-item-link\n  const appLinks = document.querySelectorAll(\".nav-item-link\");\n  // getting the entry of the app\n  const entry = document.querySelector(\"#entry\");\n  //setting up the no found page\n  const notfound = pages[\"NotFound\"]?.render();\n  //setting the app to the page it was before refresh\n  entry.innerHTML =\n    pages[localStorage.getItem(CURRENT_PAGE_STORAGE_KEY)]?.render() ?? notfound;\n  //rendering or showing a page when the user clicks a curresponding link\n  appLinks.forEach((link) => {\n    // adding a even listener to all the links\n    link.addEventListener(\"click\", function (e) {\n      // getting the page property from the link that was clicked\n      const page = link.getAttribute(\"data-page\");\n      // add it to local storage in case of refresh\n      localStorage.setItem(CURRENT_PAGE_STORAGE_KEY, page);\n      //rendering the page else the notfound page\n      entry.innerHTML = pages[page]?.render() ?? notfound;\n    });\n  });\n})();\n\n\n//# sourceURL=webpack://vanilla-php-and-js/./js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;