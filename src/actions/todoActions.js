export const createTodo = () => ({
  type: "CREATE_TODO"
});

export const setDone = (id, isDone) => ({
  type: "SET_DONE",
  id,
  isDone
});

export const setEdit = (id, isEditing) => ({
  type: "SET_EDIT",
  id,
  isEditing
});

export const editTodo = (id, todo) => ({
  type: "EDIT_TODO",
  id,
  todo
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  id
});