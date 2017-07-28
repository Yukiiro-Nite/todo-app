
const defaultTodos = {
  // 0: {
  //   isDone: false,
  //   isEditing: false,
  //   title: "Hello World!",
  //   description: "Say hello to the world."
  // },
  // 1: {
  //   isDone: false,
  //   isEditing: false,
  //   title: "Hello World! 2",
  //   description: "Say hello to the world. 2"
  // }
};

export default (todos = defaultTodos, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return {
        ...todos,
        [Object.keys(todos).length]: {
          isEditing: true,
          _createDate: Date.now(),
          title: "",
          description: ""
        }
      };
    case 'SET_DONE':
      return {
        ...todos,
        [action.id]: {
          ...todos[action.id],
          isDone: action.isDone
        }
      };
    case 'SET_EDIT':
      return {
        ...todos,
        [action.id]: {
          ...todos[action.id],
          isEditing: action.isEditing
        }
      };
    case 'EDIT_TODO':
      return {
        ...todos,
        [action.id]: {
          ...todos[action.id],
          ...action.todo
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