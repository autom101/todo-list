const createProject = (
  name = "test",
  dateCreated = new Date(),
  todosCount = 0,
  todosCrossedCount = 0
) => {
  return { name, dateCreated, todosCount, todosCrossedCount };
};

export { createProject };
