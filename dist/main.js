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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showContact = (root) => {\n  const element = document.createElement('div');\n\n  element.textContent = 'Contact';\n  root.replaceChildren(element);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showContact);\n\n//# sourceURL=webpack://js-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showHome = (root) => {\n  const element = document.createElement('div');\n\n  element.textContent = 'Home';\n  // I guess I could use a card module to write a card with some content.\n  root.replaceChildren(element);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showHome);\n\n//# sourceURL=webpack://js-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction nav() {\n  const element = document.createElement('nav');\n\n  element.setAttribute('id', 'navigation');\n  element.textContent = 'Navigation';\n\n  let homeButton = document.createElement('span');\n  homeButton.setAttribute('data-nav-target', 'home');\n  homeButton.textContent = 'Home';\n\n  let menuButton = document.createElement('span');\n  menuButton.setAttribute('data-nav-target', 'menu');\n  menuButton.textContent = 'Menu';\n\n  let contactButton = document.createElement('span');\n  contactButton.setAttribute('data-nav-target', 'contact');\n  contactButton.textContent = 'Contact';\n  \n  element.append(homeButton, menuButton, contactButton);\n  return element;\n}\n\nfunction navigate(event) {\n  let destination = event.target.getAttribute('data-nav-target');\n  let root = document.getElementById('content');\n\n  switch(destination) {\n    case 'home':\n      (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(root);\n      break;\n    case 'menu':\n      (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(root);\n      break;\n    case 'contact':\n      (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(root);\n      break;\n    default:\n      (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(root);\n  }\n}\n\nconst contentRoot = document.getElementById('content');\nconst navigation = nav();\n\ndocument.body.prepend(navigation);\ndocument.getElementById('navigation').addEventListener(\"click\", navigate);\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentRoot);\n\n//# sourceURL=webpack://js-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showMenu = (root) => {\n  const element = document.createElement('div');\n\n  element.textContent = 'Menu';\n  root.replaceChildren(element);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMenu);\n\n//# sourceURL=webpack://js-restaurant-page/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;