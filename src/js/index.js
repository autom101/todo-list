//import js files
import { createProject } from "./projects.js";
import { createToDo } from "./to-dos.js";
import { createTodoUI } from "./dom.js";
import { createListeners } from "./program-logic.js";

//import css files
import "../css/reset.css";
import "../css/styles.css";

//import img files
import "../img/side-bar-images/pencil-outline.svg";
import "../img/side-bar-images/plus.svg";
import "../img/todo-images/keyboard-return.svg";

onload = () => {
  const body = document.querySelector("body");
  const My_Projects = {};

  body.appendChild(createTodoUI(My_Projects));

  createListeners(My_Projects, createProject, createToDo);

  if (localStorage != null) {
    console.log(JSON.parse(localStorage.getItem("1")));
  }
};
