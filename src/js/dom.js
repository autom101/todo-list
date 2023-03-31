const createLeftSidebar = () => {
  const leftSidebar = document.createElement("section");
  leftSidebar.classList.add("left-sidebar");
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
