/*
  This module handles program logic such as event listeners, and other functions 
*/

let currentView = {};

//Add project title to projects list on sidebar
const addToProjectsList = (newProject, index) => {
  const sidebarMain = document.querySelector(".project-list");
  const newTitle = document.createElement("h3");
  newTitle.classList.add("project-title");
  newTitle.classList.add(`project-${index}`);
  newTitle.textContent = newProject.name;
  sidebarMain.appendChild(newTitle);

  displayProjectTodos(newProject, index);
};

//Shows all todos inside a specific project to the user
const showProjectTodos = (project) => {
  const todoList = document.querySelector(".todo-list");
  todoList.innerHTML = " ";
  let index = 0;
  for (const todo in project) {
    if (project[todo].title) {
      index++;
      setTimeout(() => {
        let todoTitle = createTodoInDom(project[todo].title);
        project[todo].isCrossed && strikethroughTodo(todoTitle);
        todoList.appendChild(todoTitle);
      }, 100 * index);
    }
  }
};

//Calls showProjectTodos everytime a project's title is clicked on the sidebar
const displayProjectTodos = (currentProject, index) => {
  const project = document.querySelector(`.project-${index}`);
  if (document.body.contains(project)) {
    project.addEventListener("click", () => {
      currentView = currentProject;
      showProjectTodos(currentView);
    });
  }
};

// Creates a new project whenever the plus sign on the page is clicked
const createProjectTitleListener = (projectsObject, createProject, index) => {
  const addProject = document.querySelector(".plus");

  addProject.addEventListener("click", () => {
    const newProject = createProject(`${index}`);
    projectsObject[`newProject${index}`] = newProject;
    addToProjectsList(newProject, index);

    index++;
  });
};

const strikethroughTodo = (todoDom) => {
  const strikethroughDiv = document.createElement("div");
  strikethroughDiv.classList.add("strikethrough-todo");
  todoDom.classList.toggle("crossed");
  todoDom.appendChild(strikethroughDiv);
};

//Strikes through or removes strikethrough from an existing todo
const strikethroughTodoDom = (todoDom, todoObject) => {
  if (todoObject.isCrossed) {
    const strikethroughDiv = document.querySelector(".strikethrough-todo");
    todoDom.classList.toggle("crossed");
    todoDom.removeChild(strikethroughDiv);
    todoObject.isCrossed = false;
  } else {
    strikethroughTodo(todoDom);
    todoObject.isCrossed = true;
  }
  console.log(todoObject);
};

// Creates an event listener to "strikethrough" or "cross out" a to-do when a user clicks on it
const strikethroughListener = (todoTitle, newTodo = {}) => {
  todoTitle.addEventListener("click", () => {
    strikethroughTodoDom(todoTitle, newTodo);
  });
};

const createTodoInDom = (content, todoObject) => {
  const todoDom = document.createElement("li");
  todoDom.textContent = content;
  todoDom.classList.add("to-do");
  strikethroughListener(todoDom, todoObject);
  return todoDom;
};

// Gets form data whenever users presss submit or hit enter and creates a new todo with that information then inserts it into the document
const handleFormSubmit = (todoForm, createToDo, index) => {
  const formData = new FormData(todoForm);
  const todoTitle = formData.get("todo-title");
  const newTodo = createToDo(todoTitle);

  currentView[`new-todo-${index}`] = newTodo;
  const todoDom = createTodoInDom(todoTitle, newTodo);
  todoDom.textContent = todoTitle;

  const todoList = document.querySelector(".todo-list");
  todoList.insertAdjacentElement("beforeend", todoDom);

  localStorage.setItem(`${currentView.name}`, JSON.stringify(currentView));
};

// Checks for any todo's that are submitted, whether that be through pressing the enter key, or through clicking the submit button
const createTodoSubmitListener = (createToDo) => {
  let index = 1;
  const todoForm = document.querySelector(".todo-form");

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleFormSubmit(todoForm, createToDo, index);
    todoForm.reset();
    index++;
  });
};

const createLogic = (projectsObject, createProject, createToDo, index) => {
  createProjectTitleListener(projectsObject, createProject, index);
  createTodoSubmitListener(createToDo);
};

export { createLogic, addToProjectsList };
