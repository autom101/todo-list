const createProject = (
  name = "test",
  dateCreated = new Date(),
  designation,
  todosCount = 0,
  todosCrossedCount = 0,
  description = "none"
) => {
  return {
    name,
    dateCreated,
    designation,
    todosCount,
    todosCrossedCount,
    description,
  };
};

export { createProject };
