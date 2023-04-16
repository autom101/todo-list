/*
  This module handles program logic such as event listeners, and other functions 
*/
import { format } from "date-fns";
import cog from "../img/todo-images/cog.svg";
import checkmarkIcon from "../img/todo-images/check.svg";

let currentView = {};
let My_Projects;

//Shows all todos inside a specific project to the user
const showProjectTodos = (project) => {
  const todoList = document.querySelector(".todo-list");
  todoList.innerHTML = " ";
  let index = 0;
  for (const todo in project) {
    if (project[todo].title) {
      index++;
      setTimeout(() => {
        let todoTitle = createTodoInDom(
          project[todo].title,
          project[todo].dateCreated,
          project[todo]
        );
        project[todo].isCrossed && strikethroughTodo(todoTitle);

        todoList.appendChild(todoTitle);
      }, 150 * index);
    }
  }
};

// Calls showProjectTodos everytime a project's title is clicked on the sidebar
const displayProjectTodos = (currentProject, index) => {
  const project = document.querySelector(`.project-${index}`);
  if (document.body.contains(project)) {
    project.addEventListener("click", () => {
      currentView = currentProject;
      showProjectTodos(currentView);
    });
  }
};

//Add project title to projects list on sidebar and a "cog" next to it
const addToProjectsList = (newProject, index) => {
  const sidebarMain = document.querySelector(".project-list");
  const projectTitle = document.createElement("div");
  const newTitle = document.createElement("h3");
  const changeProjectTitle = document.createElement("img");
  changeProjectTitle.classList.add("cog");

  projectTitle.classList.add("project-title-container");

  newTitle.classList.add("project-title");
  newTitle.classList.add(`project-${index}`);
  newTitle.textContent = newProject.name;

  changeProjectTitle.src = cog;

  projectTitle.appendChild(newTitle);
  projectTitle.appendChild(changeProjectTitle);

  sidebarMain.appendChild(projectTitle);

  displayProjectTodos(newProject, index);
};

// Creates a new project whenever the plus sign on the page is clicked
const createProjectTitleListener = (createProject, index) => {
  const addProject = document.querySelector(".plus");

  addProject.addEventListener("click", () => {
    const newProject = createProject(index);
    My_Projects["newProject" + index] = newProject;
    addToProjectsList(newProject, index);

    index++;
  });
};

// When the 'X' is clicked, it deletes the todo from the dom and the project object itself. Also, it updates the local storage with those changes
const deleteTodoListener = (todoDom, deleteTodo, currentTodo) => {
  deleteTodo.addEventListener("click", () => {
    document.querySelector(".todo-list").removeChild(todoDom);
    delete currentView[currentTodo.designation];
    localStorage.removeItem("My_Projects");
    localStorage.setItem("My_Projects", JSON.stringify(My_Projects));
  });
};

// Adds a line on the middle of the todo in dom, and also creates an 'X' at the end of the todo
const strikethroughTodo = (
  todoDom,
  currentTodo,
  circle = todoDom.querySelector(".circle"),
  todoCog = todoDom.querySelector(".cog")
) => {
  const checkmark = document.createElement("img");
  checkmark.src = checkmarkIcon;
  checkmark.classList.add("check-mark");

  const deleteTodo = document.createElement("p");
  deleteTodo.textContent = "X";
  deleteTodo.classList.add("delete-icon");

  deleteTodoListener(todoDom, deleteTodo, currentTodo);

  todoDom.querySelector("p").classList.toggle("crossed");

  todoDom.removeChild(todoCog);

  circle.appendChild(checkmark);
  todoDom.appendChild(deleteTodo);
};

//Strikes through or removes strikethrough from an existing todo
const strikethroughTodoDom = (todoDom, newTodo, circle, todoCog) => {
  if (newTodo.isCrossed) {
    todoDom.querySelector("p").classList.toggle("crossed");

    circle.removeChild(todoDom.querySelector(".check-mark"));
    todoDom.removeChild(todoDom.querySelector(".delete-icon"));

    todoDom.appendChild(todoCog);

    newTodo.isCrossed = false;
  } else {
    strikethroughTodo(todoDom, newTodo, circle, todoCog);

    newTodo.isCrossed = true;
  }
  localStorage.removeItem("My_Projects");
  localStorage.setItem("My_Projects", JSON.stringify(My_Projects));
};

// Creates an event listener to "strikethrough" or "cross out" a to-do when a user clicks on it
const strikethroughListener = (todoTitle, newTodo, circle, todoCog) => {
  circle.addEventListener("click", () => {
    strikethroughTodoDom(todoTitle, newTodo, circle, todoCog);
  });
};

const modifyTodoDom = () => {
  //
};

const modifyTodoObject = () => {
  //
};

const displayTodoInformation = (todoItem) => {
  const todoContainer = document.querySelector(".todo-container");

  const todoInfo = document.createElement("section");
  todoInfo.classList.add("todo-info");

  const todoInfoTitle = document.createElement("h2");
  todoInfoTitle.textContent = "Todo Information";

  const todoNameInfoRow = document.createElement("div");
  const todoDateCreatedInfoRow = document.createElement("div");
  const todoPriorityInfoRow = document.createElement("div");
  const todoDateDueInfoRow = document.createElement("div");

  const todoNameInfoTitle = document.createElement("h3");
  todoNameInfoTitle.textContent = "Todo Content:";
  const todoNameInfo = document.createElement("p");
  todoNameInfo.textContent = todoItem.title;

  todoNameInfoRow.appendChild(todoNameInfoTitle);
  todoNameInfoRow.appendChild(todoNameInfo);

  const todoDateCreatedInfoTitle = document.createElement("h3");
  todoDateCreatedInfoTitle.textContent = "Date Created:";
  const todoDateCreatedInfo = document.createElement("p");
  todoDateCreatedInfo.textContent = format(
    todoItem.dateCreated,
    "cccc MMM dd, yyyy"
  );

  todoDateCreatedInfoRow.appendChild(todoDateCreatedInfoTitle);
  todoDateCreatedInfoRow.appendChild(todoDateCreatedInfo);

  const todoPriorityInfoTitle = document.createElement("h3");
  todoPriorityInfoTitle.textContent = "Priority:";
  const todoPriorityInfo = document.createElement("p");
  todoPriorityInfo.textContent = todoItem.priority;

  todoPriorityInfoRow.appendChild(todoPriorityInfoTitle);
  todoPriorityInfoRow.appendChild(todoPriorityInfo);

  const todoDateDueInfoTitle = document.createElement("h3");
  todoDateDueInfoTitle.textContent = "Date Due:";
  const todoDateDueInfo = document.createElement("p");
  todoDateDueInfo.textContent = todoItem.dateDue;

  todoDateDueInfoRow.appendChild(todoDateDueInfoTitle);
  todoDateDueInfoRow.appendChild(todoDateDueInfo);

  todoInfo.appendChild(todoInfoTitle);
  todoInfo.appendChild(todoNameInfoRow);
  todoInfo.appendChild(todoDateCreatedInfoRow);
  todoInfo.appendChild(todoPriorityInfoRow);
  todoInfo.appendChild(todoDateDueInfoRow);

  todoContainer.appendChild(todoInfo);
};

const createcogEventListener = (cogItem, itemToChange, itemKind) => {
  if (itemKind == "todo") {
    cogItem.addEventListener("click", () => {
      displayTodoInformation(itemToChange);
      document
        .querySelector(".todo-main")
        .setAttribute("style", "width: calc(50% - 4rem);");
    });
  } else if (itemKind == "project") {
    cogItem.addEventListener("click", () => {
      //
    });
  }
};

//Create the todo element inside the dom along with its options such as the cog and circle
const createTodoInDom = (content, date, newTodo) => {
  const todoDom = document.createElement("li");
  const circle = document.createElement("div");
  const todoText = document.createElement("p");
  const todoDate = document.createElement("span");
  const changeTodo = document.createElement("img");

  todoText.textContent = content;
  try {
    todoDate.textContent = `Created: ${format(date, "EE MMM do, yyyy")}`;
  } catch (e) {
    console.log(e);
  }

  circle.classList.add("circle");

  changeTodo.src = cog;
  changeTodo.classList.add("cog");
  createcogEventListener(changeTodo, newTodo, "todo");

  todoDom.classList.add("to-do");
  todoDom.appendChild(circle);
  todoDom.appendChild(todoText);
  todoDom.appendChild(todoDate);
  todoDom.appendChild(changeTodo);
  strikethroughListener(todoDom, newTodo, circle, changeTodo);
  return todoDom;
};

// Gets form data whenever users presss submit or hit enter and creates a new todo with that information then inserts it into the document
const parseTodoFormSubmit = (todoForm, createToDo) => {
  const formData = new FormData(todoForm);
  const todoDateCreated = Date.now();
  const todoTitle = formData.get("todo-title");

  const todoDesignation = `new-todo` + Object.keys(currentView).length;

  const newTodo = createToDo(todoTitle, todoDesignation, todoDateCreated);

  currentView[todoDesignation] = newTodo;
  const todoDom = createTodoInDom(todoTitle, todoDateCreated, newTodo);

  const todoList = document.querySelector(".todo-list");
  todoList.insertAdjacentElement("beforeend", todoDom);

  localStorage.setItem("My_Projects", JSON.stringify(My_Projects));
};

// Checks for any todo's that are submitted, whether that be through pressing the enter key, or through clicking the submit button
const createTodoSubmitListener = (createToDo) => {
  const todoForm = document.querySelector(".todo-form");

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    parseTodoFormSubmit(todoForm, createToDo);
    todoForm.reset();
  });
};

const parseHeaderFormSubmit = (headerForm) => {
  const headerData = new FormData(headerForm);
  const currentHeader = document.querySelector(".todo-list-title");
  const newHeader = headerData.get("header-name");

  currentHeader.textContent = newHeader;
  localStorage.setItem("list-title", newHeader);
};

const createHeaderForm = () => {
  const headerForm = document.createElement("form");
  headerForm.classList.add("header-form");
  headerForm.setAttribute("action", "#");
  headerForm.setAttribute("method", "post");

  const headerName = document.createElement("input");
  headerName.setAttribute("id", "header-name");
  headerName.setAttribute("name", "header-name");
  headerName.setAttribute("type", "text");
  headerName.setAttribute("maxLength", 30);

  const headerNameLabel = document.createElement("label");
  headerNameLabel.setAttribute("for", "header-name");
  headerNameLabel.classList.add("header-name-label");
  headerNameLabel.textContent = "New Todo List Title";

  // const headerNameButton = document.createElement("button");
  // headerNameButton.textContent = "Submit";
  // headerNameButton.setAttribute("type", "submit");
  // headerNameButton.classList.add("todo-title-button");

  headerForm.appendChild(headerNameLabel);
  headerForm.appendChild(headerName);
  // headerForm.appendChild(headerNameButton);
  document.querySelector(".sidebar-header").appendChild(headerForm);

  headerName.focus();

  const sidebarHeader = document.querySelector(".sidebar-header");
  const listHeader = document.querySelector(".todo-list-header");

  listHeader.setAttribute("style", "display: none");

  headerForm.addEventListener(
    "blur",
    () => {
      sidebarHeader.contains(headerForm) &&
        sidebarHeader.removeChild(headerForm);
      listHeader.removeAttribute("style");
    },
    true
  );

  headerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    parseHeaderFormSubmit(headerForm);
    listHeader.removeAttribute("style");
    try {
      if (sidebarHeader.contains(headerForm)) {
        sidebarHeader.removeChild(headerForm);
      }
    } catch (e) {}
  });
};

const changeHeaderTitle = () => {
  const pencil = document.querySelector(".pencil");

  pencil.addEventListener("click", (e) => {
    createHeaderForm();
  });
};

const createLogic = (projectsContainer, createProject, createToDo, index) => {
  createProjectTitleListener(createProject, index);
  createTodoSubmitListener(createToDo);
  changeHeaderTitle();
  My_Projects = projectsContainer;
};

export { createLogic, addToProjectsList };
