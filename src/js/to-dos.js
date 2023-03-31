const createToDo = (title, dueDate = "none", priority = "none") => {
  return { title, dueDate, priority };
};

export { createToDo };
