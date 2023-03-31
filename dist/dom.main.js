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

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodoUI\": () => (/* binding */ createTodoUI)\n/* harmony export */ });\n/* harmony import */ var _img_side_bar_images_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/side-bar-images/pencil-outline.svg */ \"./src/img/side-bar-images/pencil-outline.svg\");\n\nconst createSidebarHeader = () => {\n  const sidebarHeader = document.createElement(\"header\");\n  sidebarHeader.classList.add(\"sidebar-header\");\n\n  const sidebarHeading = document.createElement(\"h1\");\n  sidebarHeading.classList.add(\"sidebar-heading\");\n  sidebarHeading.textContent = \"My Todo List\";\n\n  sidebarHeader.appendChild(sidebarHeading);\n\n  return sidebarHeader;\n};\n\nconst createSidebarMain = () => {\n  const sidebarMain = document.createElement(\"main\");\n  sidebarMain.classList.add(\"sidebar-main\");\n\n  const sidebarMainHeading = document.createElement(\"h2\");\n  sidebarMainHeading.textContent = \"Projects\";\n\n  sidebarMain.appendChild(sidebarMainHeading);\n\n  return sidebarMain;\n};\n\nconst createSidebar = () => {\n  const sidebar = document.createElement(\"section\");\n  sidebar.classList.add(\"sidebar\");\n\n  sidebar.appendChild(createSidebarHeader());\n  sidebar.appendChild(createSidebarMain());\n\n  return sidebar;\n};\n\nconst createTodoMain = () => {\n  const todoMain = document.createElement(\"section\");\n  todoMain.classList.add(\"todo-main\");\n  return todoMain;\n};\n\nconst createTodoUI = () => {\n  //\n  const todoContainer = document.createElement(\"main\");\n  todoContainer.classList.add(\"todo-container\");\n\n  todoContainer.appendChild(createSidebar());\n  todoContainer.appendChild(createTodoMain());\n  return todoContainer;\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/js/dom.js?");

/***/ }),

/***/ "./src/img/side-bar-images/pencil-outline.svg":
/*!****************************************************!*\
  !*** ./src/img/side-bar-images/pencil-outline.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c11ca64583db9195885d.svg\";\n\n//# sourceURL=webpack://todo-list/./src/img/side-bar-images/pencil-outline.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/dom.js");
/******/ 	
/******/ })()
;