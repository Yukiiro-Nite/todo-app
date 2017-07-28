export const createTodo = (todo) => ({
  type: "CREATE_TODO",
  todo
});

export const setDone = (id, isDone) => ({
  type: "SET_DONE",
  id,
  isDone
});

export const editTodo = (id, isEditing) => ({
  type: "EDIT_TODO",
  id,
  isEditing
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  id
});