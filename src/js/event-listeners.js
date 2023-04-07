/* To-dos:
1: Make 1 project hold to-dos when it is clicked (DONE)
2: Only display to-dos from that project (IN-PROGRESS) */

let currentView = {};

//Add project title to projects list on sidebar
const addToProjectsList = (projectsContainer, newChild, index) => {
  const sidebarMain = document.querySelector(".project-list");
  const newTitle = document.createElement("h3");
  newTitle.classList.add("project-title");
  newTitle.classList.add(`project-${index}`);
  newTitle.textContent = newChild.name;
  sidebarMain.appendChild(newTitle);

  displayProjectTodos(projectsContainer, newChild, index);
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
        todoList.appendChild(todoTitle);
      }, 250 * index);
    }
  }
};

//
const displayProjectTodos = (projectsContainer, currentProject, index) => {
  const project = document.querySelector(`.project-${index}`);
  if (document.body.contains(project)) {
    project.addEventListener("click", (e) => {
      currentView = currentProject;
      showProjectTodos(currentView);
      console.log(`Hi from project ${index}`);
      console.log(projectsContainer);
    });
  }
  return false;
};

// Creates a new project whenever the plus sign on the page is clicked
const createProjectTitleListener = (projectsObject, createProject) => {
  const addProject = document.querySelector(".plus");
  let index = 1;

  addProject.addEventListener("click", (e) => {
    const newProject = createProject(`${index}`);
    projectsObject[`newProject${index}`] = newProject;
    addToProjectsList(projectsObject, newProject, index);

    index++;
  });
};

// Creates an event listener to "strikethrough" or "cross out" a to-do when a user clicks on it
const handleTodoStrikeThrough = (todoTitle, newTodo = "") => {
  const strikethroughDiv = document.createElement("div");
  strikethroughDiv.classList.add("strikethrough-todo");

  todoTitle.addEventListener("click", (e) => {
    if (todoTitle.contains(strikethroughDiv)) {
      todoTitle.removeChild(strikethroughDiv);
    } else {
      todoTitle.appendChild(strikethroughDiv);
    }
    todoTitle.classList.toggle("crossed");
  });
};

const createTodoInDom = (content) => {
  const todoTitle = document.createElement("li");
  todoTitle.textContent = content;
  todoTitle.classList.add("to-do");
  handleTodoStrikeThrough(todoTitle);
  return todoTitle;
};
// Gets form data whenever users presss submit or hit enter and creates a new todo with that information then inserts it into the document
const handleFormSubmit = (todoForm, createToDo, index) => {
  const formData = new FormData(todoForm);
  const todoTitle = createTodoInDom(formData.get("todo-title"));
  todoTitle.textContent = formData.get("todo-title");
  const newTodo = createToDo(todoTitle.textContent);
  currentView[`new-todo-${index}`] = newTodo;
  console.log(currentView);

  handleTodoStrikeThrough(todoTitle, newTodo);

  const todoList = document.querySelector(".todo-list");
  todoList.insertAdjacentElement("beforeend", todoTitle);

  return false;
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

const createListeners = (projectsObject, createProject, createToDo) => {
  createProjectTitleListener(projectsObject, createProject);
  createTodoSubmitListener(createToDo);
};

export { createListeners };
