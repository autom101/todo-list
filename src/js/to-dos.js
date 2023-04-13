const createToDo = (
  title,
  dateCreated = "none",
  priority = "none",
  isCrossed = false
) => {
  return { title, dateCreated, priority, isCrossed };
};

export { createToDo };
