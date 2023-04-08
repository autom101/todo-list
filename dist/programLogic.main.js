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

/***/ "./src/js/program-logic.js":
/*!*********************************!*\
  !*** ./src/js/program-logic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToProjectsList\": () => (/* binding */ addToProjectsList),\n/* harmony export */   \"createLogic\": () => (/* binding */ createLogic)\n/* harmony export */ });\n/*\n  This module handles program logic such as event listeners, and other functions \n*/\n\nlet currentView = {};\n\n//Add project title to projects list on sidebar\nconst addToProjectsList = (newProject, index) => {\n  const sidebarMain = document.querySelector(\".project-list\");\n  const newTitle = document.createElement(\"h3\");\n  newTitle.classList.add(\"project-title\");\n  newTitle.classList.add(`project-${index}`);\n  newTitle.textContent = newProject.name;\n  sidebarMain.appendChild(newTitle);\n\n  displayProjectTodos(newProject, index);\n};\n\n//Shows all todos inside a specific project to the user\nconst showProjectTodos = (project) => {\n  const todoList = document.querySelector(\".todo-list\");\n  todoList.innerHTML = \" \";\n  let index = 0;\n  for (const todo in project) {\n    if (project[todo].title) {\n      index++;\n      setTimeout(() => {\n        let todoTitle = createTodoInDom(project[todo].title);\n        project[todo].isCrossed && strikethroughTodo(todoTitle);\n        todoList.appendChild(todoTitle);\n      }, 100 * index);\n    }\n  }\n};\n\n//Calls showProjectTodos everytime a project's title is clicked on the sidebar\nconst displayProjectTodos = (currentProject, index) => {\n  const project = document.querySelector(`.project-${index}`);\n  if (document.body.contains(project)) {\n    project.addEventListener(\"click\", () => {\n      currentView = currentProject;\n      showProjectTodos(currentView);\n    });\n  }\n};\n\n// Creates a new project whenever the plus sign on the page is clicked\nconst createProjectTitleListener = (projectsObject, createProject, index) => {\n  const addProject = document.querySelector(\".plus\");\n\n  addProject.addEventListener(\"click\", () => {\n    const newProject = createProject(`${index}`);\n    projectsObject[`newProject${index}`] = newProject;\n    addToProjectsList(newProject, index);\n\n    index++;\n  });\n};\n\nconst strikethroughTodo = (todoDom) => {\n  const strikethroughDiv = document.createElement(\"div\");\n  strikethroughDiv.classList.add(\"strikethrough-todo\");\n  todoDom.classList.toggle(\"crossed\");\n  todoDom.appendChild(strikethroughDiv);\n};\n\n//Strikes through or removes strikethrough from an existing todo\nconst strikethroughTodoDom = (todoDom, todoObject) => {\n  if (todoObject.isCrossed) {\n    const strikethroughDiv = document.querySelector(\".strikethrough-todo\");\n    todoDom.classList.toggle(\"crossed\");\n    todoDom.removeChild(strikethroughDiv);\n    todoObject.isCrossed = false;\n  } else {\n    strikethroughTodo(todoDom);\n    todoObject.isCrossed = true;\n  }\n  console.log(todoObject);\n};\n\n// Creates an event listener to \"strikethrough\" or \"cross out\" a to-do when a user clicks on it\nconst strikethroughListener = (todoTitle, newTodo = {}) => {\n  todoTitle.addEventListener(\"click\", () => {\n    strikethroughTodoDom(todoTitle, newTodo);\n  });\n};\n\nconst createTodoInDom = (content, todoObject) => {\n  const todoDom = document.createElement(\"li\");\n  todoDom.textContent = content;\n  todoDom.classList.add(\"to-do\");\n  strikethroughListener(todoDom, todoObject);\n  return todoDom;\n};\n\n// Gets form data whenever users presss submit or hit enter and creates a new todo with that information then inserts it into the document\nconst handleFormSubmit = (todoForm, createToDo, index) => {\n  const formData = new FormData(todoForm);\n  const todoTitle = formData.get(\"todo-title\");\n  const newTodo = createToDo(todoTitle);\n\n  currentView[`new-todo-${index}`] = newTodo;\n  const todoDom = createTodoInDom(todoTitle, newTodo);\n  todoDom.textContent = todoTitle;\n\n  const todoList = document.querySelector(\".todo-list\");\n  todoList.insertAdjacentElement(\"beforeend\", todoDom);\n\n  localStorage.setItem(`${currentView.name}`, JSON.stringify(currentView));\n};\n\n// Checks for any todo's that are submitted, whether that be through pressing the enter key, or through clicking the submit button\nconst createTodoSubmitListener = (createToDo) => {\n  let index = 1;\n  const todoForm = document.querySelector(\".todo-form\");\n\n  todoForm.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    handleFormSubmit(todoForm, createToDo, index);\n    todoForm.reset();\n    index++;\n  });\n};\n\nconst createLogic = (projectsObject, createProject, createToDo, index) => {\n  createProjectTitleListener(projectsObject, createProject, index);\n  createTodoSubmitListener(createToDo);\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/js/program-logic.js?");

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
/******/ 	__webpack_modules__["./src/js/program-logic.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;