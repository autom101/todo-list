import pencil from "../img/side-bar-images/pencil-outline.svg";

const createSidebarHeader = () => {
  const sidebarHeader = document.createElement("header");
  sidebarHeader.classList.add("sidebar-header");

  const sidebarHeading = document.createElement("h1");
  sidebarHeading.classList.add("sidebar-heading");
  sidebarHeading.textContent = "My Todo List";

  sidebarHeader.appendChild(sidebarHeading);

  return sidebarHeader;
};

const createSidebarMain = () => {
  const sidebarMain = document.createElement("main");
  sidebarMain.classList.add("sidebar-main");

  const sidebarMainHeading = document.createElement("h2");
  sidebarMainHeading.textContent = "Projects";

  sidebarMain.appendChild(sidebarMainHeading);

  return sidebarMain;
};

const createSidebar = () => {
  const sidebar = document.createElement("section");
  sidebar.classList.add("sidebar");

  sidebar.appendChild(createSidebarHeader());
  sidebar.appendChild(createSidebarMain());

  return sidebar;
};

const createTodoMain = () => {
  const todoMain = document.createElement("section");
  todoMain.classList.add("todo-main");
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
