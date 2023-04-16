const createToDo = (
  title,
  designation,
  dateCreated,
  priority = "none",
  isCrossed = false
) => {
  return { title, designation, dateCreated, priority, isCrossed };
};

export { createToDo };
