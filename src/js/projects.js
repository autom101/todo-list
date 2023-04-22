const createProject = (
  name = "test",
  dateCreated = new Date(),
  todosCount = 0,
  todosCrossedCount = 0,
  description = "none"
) => {
  return { name, dateCreated, todosCount, todosCrossedCount, description };
};

export { createProject };
