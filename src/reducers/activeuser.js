const activeUser = (state = null, action) => {
  switch (action.type) {
    case 'USER_LOGOUT':
      return null;

    case 'USER_LOGIN':
      return action.user;

    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            id: action.id,
            completed: false,
          },
        ],
      };

    case 'SET_TODO':
      return {
        ...state,
        todos: state.todos.map(
          todo =>
            todo.id === action.id
              ? { ...todo, completed: !todo.completed }
              : todo,
        ),
      };

    case 'ADD_MEMO':
      return {
        ...state,
        memos: action.memos,
      };

    default:
      return state;
  }
};

export default activeUser;
