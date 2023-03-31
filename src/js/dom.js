const createLeftSidebarContent = () => {
  const content = document.createElement("section");
  content.classList.add("left-sidebar-content");

  const contentHeading = document.createElement("h2");
  contentHeading.textContent = "Projects";

  content.appendChild(contentHeading);

  return content;
};

const createLeftSidebar = () => {
  const leftSidebar = document.createElement("section");
  leftSidebar.classList.add("left-sidebar");

  const leftSidebarHeading = document.createElement("h1");
  leftSidebarHeading.classList.add("left-sidebar-heading");
  leftSidebarHeading.textContent = "Todo List";

  leftSidebar.appendChild(leftSidebarHeading);
  leftSidebar.appendChild(createLeftSidebarContent());

  return leftSidebar;
};

const createRightSidebar = () => {
  const rightSidebar = document.createElement("section");
  rightSidebar.classList.add("right-sidebar");
  return rightSidebar;
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

  todoContainer.appendChild(createLeftSidebar());
  todoContainer.appendChild(createTodoMain());
  todoContainer.appendChild(createRightSidebar());
  return todoContainer;
};

export { createTodoUI };
