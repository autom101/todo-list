const createToDo = (
  title,
  dueDate = "none",
  priority = "none",
  isCrossed = false
) => {
  return { title, dueDate, priority, isCrossed };
};

export { createToDo };
