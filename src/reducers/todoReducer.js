
const defaultTodos = {
  0: {
    isDone: false,
    title: "Hello World!",
    description: "Say hello to the world."
  }
};

export default (todos = defaultTodos, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return { ...todos, [Object.keys(todos).length]:action.todo };
    case 'SET_DONE':
      return {
        ...todos,
        [action.id]: {
          ...todos[action.id],
          isDone: action.isDone
        }
      };
    case 'EDIT_TODO':
      return {
        ...todos,
        [action.id]: {
          ...todos[action.id],
          isEditing: action.isEditing
        }
      };
    case 'REMOVE_TODO':
      return {
        ...todos,
        [action.id]: {
          ...todos[action.id],
          removed: true
        }
      };
    default:
      return todos;
  }
};