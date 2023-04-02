const addToList = (newChild) => {
  const sidebarMain = document.querySelector(".project-list");
  const newTitle = document.createElement("h3");
  newTitle.classList.add("project-title");
  newTitle.textContent = newChild.name;
  sidebarMain.appendChild(newTitle);
};

const createProjectTitleListener = (projectsObject, createProject) => {
  const addProject = document.querySelector(".plus");
  let count = 1;

  addProject.addEventListener("click", (e) => {
    projectsObject[`newProject${count}`] = createProject(`${count}`);
    addToList(projectsObject[`newProject${count}`]);
    count++;
  });
};

const handleFormSubmit = (todoForm, createToDo) => {
  const formData = new FormData(todoForm);
  const todoTitle = document.createElement("li");
  todoTitle.textContent = formData.get("todo-title");
  const newTodo = createToDo(todoTitle.textContent);

  const todoList = document.querySelector(".todo-list");
  todoList.insertAdjacentElement("beforeend", todoTitle);

  return false;
};

const createTodoSubmitListener = (createToDo) => {
  const todoForm = document.querySelector(".todo-form");

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleFormSubmit(todoForm, createToDo);
    todoForm.reset();
  });
};

const createListeners = (projectsObject, createProject, createToDo) => {
  createProjectTitleListener(projectsObject, createProject);
  createTodoSubmitListener(createToDo);
};

export { createListeners };
