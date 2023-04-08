//import js files
import { createProject } from "./projects.js";
import { createToDo } from "./to-dos.js";
import { createTodoUI } from "./dom.js";
import { createLogic, addToProjectsList } from "./program-logic.js";

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

  createLogic(My_Projects, createProject, createToDo, localStorage.length || 1);

  if (localStorage != null) {
    for (let i = 1; i <= localStorage.length; i++) {
      if (localStorage.getItem(localStorage.key(i))) {
        My_Projects[`Project-${i}`] = JSON.parse(
          localStorage.getItem(localStorage.key(i))
        );
        addToProjectsList(My_Projects[`Project-${i}`], localStorage.length + i);
      }
    }
    console.log(My_Projects);
  }
};
