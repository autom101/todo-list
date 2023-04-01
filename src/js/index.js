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

My_Projects["0"] = createProject("Test");
My_Projects["1"] = createProject("Test2");
My_Projects["2"] = createProject("Slkjasdf");
console.log(My_Projects);

body.appendChild(createTodoUI(My_Projects));

createListeners(My_Projects, createProject);
