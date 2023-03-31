//import js files
import { createProject } from "./projects.js";
import { createToDo } from "./to-dos.js";

const My_Projects = {};

My_Projects[`Test`] = createProject(`Test`);
My_Projects[`Test`][`TestToDo`] = createToDo(`TestToDo`);
console.log(My_Projects);
