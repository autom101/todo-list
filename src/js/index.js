//import js files
import { createProject } from "./projects.js";
import { createToDo } from "./to-dos.js";
import { createTodoUI } from "./dom.js";

//import css
import "../css/reset.css";
import "../css/styles.css";

const body = document.querySelector("body");
body.appendChild(createTodoUI());

const My_Projects = {};

My_Projects[`Test`] = createProject(`Test`);
My_Projects[`Test`][`TestToDo`] = createToDo(`TestToDo`);
console.log(My_Projects);
