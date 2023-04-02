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

/***/ "./src/js/event-listeners.js":
/*!***********************************!*\
  !*** ./src/js/event-listeners.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createListeners\": () => (/* binding */ createListeners)\n/* harmony export */ });\nconst addToList = (newChild) => {\n  const sidebarMain = document.querySelector(\".project-list\");\n  const newTitle = document.createElement(\"h3\");\n  newTitle.classList.add(\"project-title\");\n  newTitle.textContent = newChild.name;\n  sidebarMain.appendChild(newTitle);\n};\n\nconst createProjectTitleListener = (projectsObject, createProject) => {\n  const addProject = document.querySelector(\".plus\");\n  let count = 1;\n\n  addProject.addEventListener(\"click\", (e) => {\n    projectsObject[`newProject${count}`] = createProject(`${count}`);\n    addToList(projectsObject[`newProject${count}`]);\n    count++;\n  });\n};\n\nconst handleFormSubmit = (todoForm, createToDo) => {\n  const formData = new FormData(todoForm);\n  const todoTitle = document.createElement(\"li\");\n  todoTitle.textContent = formData.get(\"todo-title\");\n  const newTodo = createToDo(todoTitle.textContent);\n\n  const todoList = document.querySelector(\".todo-list\");\n  todoList.insertAdjacentElement(\"beforeend\", todoTitle);\n\n  return false;\n};\n\nconst createTodoSubmitListener = (createToDo) => {\n  const todoForm = document.querySelector(\".todo-form\");\n\n  todoForm.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    handleFormSubmit(todoForm, createToDo);\n    todoForm.reset();\n  });\n};\n\nconst createListeners = (projectsObject, createProject, createToDo) => {\n  createProjectTitleListener(projectsObject, createProject);\n  createTodoSubmitListener(createToDo);\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/js/event-listeners.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/event-listeners.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;