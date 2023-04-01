import pencil from "../img/side-bar-images/pencil-outline.svg";
import plusSign from "../img/side-bar-images/plus.svg";

const createSidebarHeader = () => {
  const sidebarHeader = document.createElement("header");
  sidebarHeader.classList.add("sidebar-header");

  const sidebarHeading = document.createElement("h1");
  sidebarHeading.textContent = "My Todo List";

  const sidebarPencil = document.createElement("img");
  sidebarPencil.src = pencil;

  sidebarHeader.appendChild(sidebarHeading);
  sidebarHeader.appendChild(sidebarPencil);

  return sidebarHeader;
};

const displayProjects = (projectsContainer) => {
  const projects = document.createElement("main");

  const projectObjects = Object.keys(projectsContainer);

  let index = 0;
  projectObjects.forEach((project) => {
    projectObjects[index] = document.createElement("h3");
    projectObjects[index].textContent = projectsContainer[project].name;

    projects.appendChild(projectObjects[index]);

    index++;
  });

  return projects;
};

const createSidebarMain = (projectsContainer) => {
  const sidebarMain = document.createElement("main");
  sidebarMain.classList.add("sidebar-main");

  const sidebarMainHeading = document.createElement("header");

  const headingTitle = document.createElement("h2");
  headingTitle.textContent = "Projects";

  const sidebarPlusSign = document.createElement("img");
  sidebarPlusSign.src = plusSign;
  sidebarPlusSign.classList.add("add-project");

  sidebarMainHeading.appendChild(headingTitle);
  sidebarMainHeading.appendChild(sidebarPlusSign);

  sidebarMain.appendChild(sidebarMainHeading);
  sidebarMain.appendChild(displayProjects(projectsContainer));

  return sidebarMain;
};

const createSidebar = (projectsContainer) => {
  const sidebar = document.createElement("section");
  sidebar.classList.add("sidebar");

  sidebar.appendChild(createSidebarHeader());
  sidebar.appendChild(createSidebarMain(projectsContainer));

  return sidebar;
};

const createTodoMain = (projectsContainer) => {
  const todoMain = document.createElement("section");
  todoMain.classList.add("todo-main");
  return todoMain;
};

const createTodoUI = (projectsContainer) => {
  //
  const todoContainer = document.createElement("main");
  todoContainer.classList.add("todo-container");

  todoContainer.appendChild(createSidebar(projectsContainer));
  todoContainer.appendChild(createTodoMain(projectsContainer));
  return todoContainer;
};

export { createTodoUI };
