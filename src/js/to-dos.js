const createToDo = (
  title,
  designation,
  dateCreated,
  priority = "none",
  dateDue = "none",
  isCrossed = false
) => {
  return { title, designation, dateCreated, priority, dateDue, isCrossed };
};

export { createToDo };
