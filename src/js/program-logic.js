/*
  This module handles program logic such as event listeners, and other functions 
*/
import { format } from "date-fns";
import cog from "../img/todo-images/cog.svg";
import checkmarkIcon from "../img/todo-images/check.svg";
import xTodoInfo from "../img/todo-images/close-thick.svg";

let currentView = {};
let My_Projects;
let infoBeingShown = false;

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

const removeInfoBoxListener = (closeIcon, todoContainer, infoBox) => {
  closeIcon.addEventListener("click", () => {
    todoContainer.removeChild(infoBox);
    infoBeingShown = false;
  });
};

// Shows information about a project to the user such as the project's title, when it was created, how many todos it has, as well as how many todos a user has crossed out in that project
const displayProjectInfo = (projectItem) => {
  const todoContainer = document.querySelector(".todo-container");

  const projectInfo = document.createElement("section");
  projectInfo.classList.add("item-info");
  projectInfo.classList.add("project-info");

  const projectInfoTitle = document.createElement("h2");
  projectInfoTitle.textContent = "Project Information";

  const projectInfoDelete = document.createElement("img");
  projectInfoDelete.classList.add("info-delete");
  projectInfoDelete.src = xTodoInfo;

  const projectNameInfoRow = document.createElement("div");
  const projectDateCreatedInfoRow = document.createElement("div");
  const projectTodosCountInfoRow = document.createElement("div");
  const projectTodosCrossedCountInfoRow = document.createElement("div");

  const projectNameInfoTitle = document.createElement("h3");
  projectNameInfoTitle.textContent = "Project Name:";
  const projectNameInfo = document.createElement("p");
  projectNameInfo.textContent = projectItem.name;

  projectNameInfoRow.appendChild(projectNameInfoTitle);
  projectNameInfoRow.appendChild(projectNameInfo);

  const projectDateCreatedInfoTitle = document.createElement("h3");
  projectDateCreatedInfoTitle.textContent = "Date Created:";
  const projectDateCreatedInfo = document.createElement("p");
  projectDateCreatedInfo.textContent = format(
    projectItem.dateCreated,
    "cccc MMM dd, yyyy"
  );

  projectDateCreatedInfoRow.appendChild(projectDateCreatedInfoTitle);
  projectDateCreatedInfoRow.appendChild(projectDateCreatedInfo);

  const projectTodosCountInfoTitle = document.createElement("h3");
  projectTodosCountInfoTitle.textContent = "Todos Count:";
  const projectTodosCountInfo = document.createElement("p");
  projectTodosCountInfo.textContent = projectItem.todosCount;

  projectTodosCountInfoRow.appendChild(projectTodosCountInfoTitle);
  projectTodosCountInfoRow.appendChild(projectTodosCountInfo);

  const projectTodosCrossedCountInfoTitle = document.createElement("h3");
  projectTodosCrossedCountInfoTitle.textContent = "Todos Finished:";
  const projectTodosCrossedCountInfo = document.createElement("p");
  projectTodosCrossedCountInfo.textContent = projectItem.todosCrossedCount;

  projectTodosCrossedCountInfoRow.appendChild(
    projectTodosCrossedCountInfoTitle
  );
  projectTodosCrossedCountInfoRow.appendChild(projectTodosCrossedCountInfo);

  projectInfo.appendChild(projectInfoTitle);
  projectInfo.appendChild(projectNameInfoRow);
  projectInfo.appendChild(projectDateCreatedInfoRow);
  projectInfo.appendChild(projectTodosCountInfoRow);
  projectInfo.appendChild(projectTodosCrossedCountInfoRow);
  projectInfo.appendChild(projectInfoDelete);

  todoContainer.appendChild(projectInfo);

  removeInfoBoxListener(projectInfoDelete, todoContainer, projectInfo);
};

const createcogEventListener = (cogItem, itemToChange, itemKind) => {
  cogItem.addEventListener("click", () => {
    if (!infoBeingShown) {
      document
        .querySelector(".todo-main")
        .setAttribute("style", "width: calc(50% - 4rem);");
      itemKind == "todo"
        ? displayTodoInfo(itemToChange)
        : displayProjectInfo(itemToChange);

      infoBeingShown = true;
    }
  });
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

  createcogEventListener(changeProjectTitle, newProject, "Project");

  sidebarMain.appendChild(projectTitle);

  displayProjectTodos(newProject, index);
};

// Creates a new project whenever the plus sign on the page is clicked
const createProjectTitleListener = (createProject, index) => {
  const addProject = document.querySelector(".plus");

  addProject.addEventListener("click", () => {
    const newProject = createProject("Project " + index, Date.now());
    My_Projects["newProject" + index] = newProject;
    addToProjectsList(newProject, index);
    index++;
    localStorage.removeItem("My_Projects");
    localStorage.setItem("My_Projects", JSON.stringify(My_Projects));
  });
};

// When the 'X' is clicked, it deletes the todo from the dom and the project object itself. Also, it updates the local storage with those changes
const deleteTodoListener = (todoDom, deleteTodo, currentTodo) => {
  deleteTodo.addEventListener("click", () => {
    document.querySelector(".todo-list").removeChild(todoDom);
    delete currentView[currentTodo.designation];
    currentView.todosCount--;
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
    currentView.todosCrossedCount--;
  } else {
    strikethroughTodo(todoDom, newTodo, circle, todoCog);

    newTodo.isCrossed = true;
    currentView.todosCrossedCount++;
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

const modifyTodoObject = (todoItem) => {
  const todoInfoBottom = document.createElement("div");
  todoInfoBottom.classList.add("item-info-bottom");

  const changeTodoTitle = document.createElement("h2");
  changeTodoTitle.textContent = "Change Todo";

  const FORMROWS = 5;
  // change todo form
  const changeTodoForm = document.createElement("form");
  changeTodoForm.setAttribute("Action", "#");
  changeTodoForm.setAttribute("Method", "Post");

  // todo name
  const newTodoNameLabel = document.createElement("label");
  newTodoNameLabel.textContent = "New Todo Content:";
  newTodoNameLabel.setAttribute("for", "todo-name");

  const newTodoNameInput = document.createElement("input");
  newTodoNameInput.setAttribute("name", "todo-name");
  newTodoNameInput.setAttribute("id", "todo-name");
  newTodoNameInput.setAttribute("type", "text");
  newTodoNameInput.setAttribute("maxLength", "70");

  // todo priority
  const newtodoPriorityLabel = document.createElement("label");
  newtodoPriorityLabel.textContent = "New Todo Priority:";
  newtodoPriorityLabel.setAttribute("for", "todo-priority");

  const newtodoPriority = document.createElement("select");
  newtodoPriority.setAttribute("name", "todo-priority");
  newtodoPriority.setAttribute("id", "todo-priority");

  // priority select options
  const newtodoPriorityEmptyOption = document.createElement("option");
  newtodoPriorityEmptyOption.setAttribute("value", "");
  newtodoPriorityEmptyOption.textContent = "~Pick an option below~";
  const newtodoPriorityRed = document.createElement("option");
  newtodoPriorityRed.setAttribute("value", "red");
  const newtodoPriorityYellow = document.createElement("option");
  newtodoPriorityYellow.setAttribute("value", "yellow");
  const newtodoPriorityGreen = document.createElement("option");
  newtodoPriorityGreen.setAttribute("value", "green");

  newtodoPriority.appendChild(newtodoPriorityEmptyOption);
  newtodoPriority.appendChild(newtodoPriorityRed);
  newtodoPriority.appendChild(newtodoPriorityYellow);
  newtodoPriority.appendChild(newtodoPriorityGreen);

  // todo date due
  const newTodoDateLabel = document.createElement("label");
  newTodoDateLabel.textContent = "Date Due:";
  newTodoDateLabel.setAttribute("for", "todo-date");

  const newTodoDateInput = document.createElement("input");
  newTodoDateInput.setAttribute("id", "todo-date");
  newTodoDateInput.setAttribute("name", "todo-date");
  newTodoDateInput.setAttribute("type", "date");

  // todo description
  const newTodoDescriptionLabel = document.createElement("label");
  newTodoDescriptionLabel.textContent = "Todo Description:";
  newTodoDescriptionLabel.setAttribute("for", "todo-description");

  const newTodoDescriptionInput = document.createElement("textarea");
  newTodoDescriptionInput.setAttribute("id", "todo-description");
  newTodoDescriptionInput.setAttribute("name", "todo-description");

  const changeTodoSubmitButton = document.createElement("button");
  changeTodoSubmitButton.setAttribute("type", "submit");
  changeTodoSubmitButton.classList.add("change-todo-button");
  changeTodoSubmitButton.textContent = "Submit";

  // todo form rows
  const changeTodoFormDivs = [];

  for (let i = 0; i < FORMROWS; i++) {
    changeTodoFormDivs[i] = document.createElement("div");
  }

  changeTodoFormDivs[0].appendChild(newTodoNameLabel);
  changeTodoFormDivs[0].appendChild(newTodoNameInput);
  changeTodoFormDivs[1].appendChild(newtodoPriorityLabel);
  changeTodoFormDivs[1].appendChild(newtodoPriority);
  changeTodoFormDivs[2].appendChild(newTodoDateLabel);
  changeTodoFormDivs[2].appendChild(newTodoDateInput);
  changeTodoFormDivs[3].appendChild(newTodoDescriptionLabel);
  changeTodoFormDivs[3].appendChild(newTodoDescriptionInput);
  changeTodoFormDivs[4].appendChild(changeTodoSubmitButton);

  for (let i = 0; i < FORMROWS; i++) {
    changeTodoForm.appendChild(changeTodoFormDivs[i]);
  }

  todoInfoBottom.appendChild(changeTodoTitle);
  todoInfoBottom.appendChild(changeTodoForm);

  return todoInfoBottom;
};

//Displays information about todo to the user including its content (name), date created, date due, and priority
const displayTodoInfo = (todoItem) => {
  const todoContainer = document.querySelector(".todo-container");

  const todoInfo = document.createElement("section");
  todoInfo.classList.add("item-info");

  const todoInfoTop = document.createElement("div");
  todoInfoTop.classList.add("item-info-top");

  const todoInfoTitle = document.createElement("h2");
  todoInfoTitle.textContent = "Todo Information";

  const todoInfoDelete = document.createElement("img");
  todoInfoDelete.classList.add("info-delete");
  todoInfoDelete.src = xTodoInfo;

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

  todoInfoTop.appendChild(todoInfoTitle);
  todoInfoTop.appendChild(todoNameInfoRow);
  todoInfoTop.appendChild(todoDateCreatedInfoRow);
  todoInfoTop.appendChild(todoPriorityInfoRow);
  todoInfoTop.appendChild(todoDateDueInfoRow);

  todoInfo.appendChild(todoInfoTop);
  todoInfo.appendChild(todoInfoDelete);
  todoInfo.appendChild(modifyTodoObject(todoInfo, todoItem));

  todoContainer.appendChild(todoInfo);

  removeInfoBoxListener(todoInfoDelete, todoContainer, todoInfo);
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
  currentView.todosCount++;
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

  headerForm.appendChild(headerNameLabel);
  headerForm.appendChild(headerName);
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
