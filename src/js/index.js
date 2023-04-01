//import js files
import { createProject } from "./projects.js";
import { createToDo } from "./to-dos.js";
import { createTodoUI } from "./dom.js";
import { createListeners } from "./event-listeners.js";

//import css files
import "../css/reset.css";
import "../css/styles.css";

//import img files
import "../img/side-bar-images/pencil-outline.svg";

const body = document.querySelector("body");
const My_Projects = {};

body.appendChild(createTodoUI(My_Projects));

createListeners(My_Projects, createProject);
