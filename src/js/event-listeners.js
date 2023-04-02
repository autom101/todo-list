let currentView = {};

const addToList = (projectsContainer, newChild, index) => {
  const sidebarMain = document.querySelector(".project-list");
  const newTitle = document.createElement("h3");
  newTitle.classList.add("project-title");
  newTitle.classList.add(`project-${index}`);
  newTitle.textContent = newChild.name;
  sidebarMain.appendChild(newTitle);

  displayProjectTodos(projectsContainer, newChild, index);
};

const displayProjectTodos = (projectsContainer, currentProject, index) => {
  const project = document.querySelector(`.project-${index}`);
  if (document.body.contains(project)) {
    project.addEventListener("click", (e) => {
      currentView = currentProject;
      console.log(`Hi from project ${index}`);
    });
  }

  return false;
};

const createProjectTitleListener = (projectsObject, createProject) => {
  const addProject = document.querySelector(".plus");
  let index = 1;

  addProject.addEventListener("click", (e) => {
    const newProject = createProject(`${index}`);
    projectsObject[`newProject${index}`] = newProject;
    addToList(projectsObject, newProject, index);

    index++;
  });
};

const handleTodoStrikeThrough = (todoTitle, newTodo) => {
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

const handleFormSubmit = (todoForm, createToDo, index) => {
  const formData = new FormData(todoForm);
  const todoTitle = document.createElement("li");
  todoTitle.classList.add("to-do");
  todoTitle.textContent = formData.get("todo-title");
  const newTodo = createToDo(todoTitle.textContent);
  currentView[`new-todo-${index}`] = newTodo;
  console.log(currentView);

  handleTodoStrikeThrough(todoTitle, newTodo);

  const todoList = document.querySelector(".todo-list");
  todoList.insertAdjacentElement("beforeend", todoTitle);

  return false;
};

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
