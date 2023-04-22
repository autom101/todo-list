const createToDo = (
  title,
  designation,
  dateCreated,
  priority = "none",
  dateDue = "none",
  description = "none",
  isCrossed = false
) => {
  return {
    title,
    designation,
    dateCreated,
    priority,
    dateDue,
    description,
    isCrossed,
  };
};

export { createToDo };
