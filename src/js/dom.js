import pencil from "../img/side-bar-images/pencil-outline.svg";
import plusSign from "../img/side-bar-images/plus.svg";
import keyboardReturn from "../img/todo-images/keyboard-return.svg";

const createSidebarHeader = () => {
  const sidebarHeader = document.createElement("header");
  sidebarHeader.classList.add("sidebar-header");

  const sidebarHeading = document.createElement("h1");
  sidebarHeading.textContent = "My Todo List";

  const sidebarPencil = document.createElement("img");
  sidebarPencil.classList.add("pencil");
  sidebarPencil.src = pencil;

  sidebarHeader.appendChild(sidebarHeading);
  sidebarHeader.appendChild(sidebarPencil);

  return sidebarHeader;
};

const createSidebarMain = () => {
  const sidebarMain = document.createElement("main");
  sidebarMain.classList.add("sidebar-main");

  const sidebarMainHeading = document.createElement("header");

  const headingTitle = document.createElement("h2");
  headingTitle.textContent = "Projects";

  const sidebarPlusSign = document.createElement("img");
  sidebarPlusSign.src = plusSign;
  sidebarPlusSign.classList.add("plus");

  const projectTitleList = document.createElement("main");
  projectTitleList.classList.add("project-list");

  sidebarMainHeading.appendChild(headingTitle);
  sidebarMainHeading.appendChild(sidebarPlusSign);

  sidebarMain.appendChild(sidebarMainHeading);
  sidebarMain.appendChild(projectTitleList);

  return sidebarMain;
};

const createSidebar = () => {
  const sidebar = document.createElement("section");
  sidebar.classList.add("sidebar");

  sidebar.appendChild(createSidebarHeader());
  sidebar.appendChild(createSidebarMain());

  return sidebar;
};

const createTodoForm = () => {
  const todoForm = document.createElement("form");
  todoForm.classList.add("todo-form");
  todoForm.setAttribute("action", "#");
  todoForm.setAttribute("method", "post");

  const todoNameLabel = document.createElement("label");
  todoNameLabel.setAttribute("for", "todo-title");

  const todoTypingArea = document.createElement("div");
  todoTypingArea.classList.add("todo-typing-area");

  const todoName = document.createElement("input");
  todoName.setAttribute("id", "todo-title");
  todoName.setAttribute("name", "todo-title");
  todoName.setAttribute("type", "text");
  todoName.setAttribute("maxLength", "162");
  todoName.required = true;

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.classList.add("todo-button");

  const returnImage = document.createElement("img");
  returnImage.src = keyboardReturn;
  returnImage.classList.add("return-image");

  submitButton.appendChild(returnImage);

  todoTypingArea.appendChild(todoNameLabel);
  todoTypingArea.appendChild(todoName);
  todoTypingArea.appendChild(submitButton);

  todoForm.appendChild(todoTypingArea);

  return todoForm;
};

const createTodoMain = () => {
  const todoMain = document.createElement("section");
  todoMain.classList.add("todo-main");

  todoMain.appendChild(createTodoForm());
  return todoMain;
};

const createTodoUI = () => {
  //
  const todoContainer = document.createElement("main");
  todoContainer.classList.add("todo-container");

  todoContainer.appendChild(createSidebar());
  todoContainer.appendChild(createTodoMain());
  return todoContainer;
};

export { createTodoUI };
