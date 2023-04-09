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

  let error = "";
  try {
    JSON.parse(localStorage.getItem("My_Projects"));
  } catch (e) {
    error = e;
    console.log(error);
  } finally {
    if (error) {
      localStorage.removeItem("My_Projects");
    }
  }

  const My_Projects = JSON.parse(localStorage.getItem("My_Projects")) || {};

  body.appendChild(createTodoUI(My_Projects));
  console.log(My_Projects);
  createLogic(
    My_Projects,
    createProject,
    createToDo,
    Object.keys(My_Projects).length + 1 || 1
  );

  if (localStorage != null) {
    if (localStorage.getItem("My_Projects")) {
      let count = 1;
      for (let key in My_Projects) {
        addToProjectsList(My_Projects[key], count);
        count++;
      }
    }
  }
};
