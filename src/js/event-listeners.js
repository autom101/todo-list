const addToList = (newChild) => {
  const sidebarMain = document.querySelector(".project-list");
  const newTitle = document.createElement("h3");
  newTitle.classList.add("project-title");
  newTitle.textContent = newChild.name;
  sidebarMain.appendChild(newTitle);
};

let count = 1;

const createListeners = (projectsObject, createProject) => {
  const addProject = document.querySelector(".plus");
  addProject.addEventListener("click", (e) => {
    projectsObject[`newProject${count}`] = createProject(`${count}`);
    addToList(projectsObject[`newProject${count}`]);
    count++;
  });
};

export { createListeners };
