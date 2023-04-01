import pencil from "../img/side-bar-images/pencil-outline.svg";
import plusSign from "../img/side-bar-images/plus.svg";

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
