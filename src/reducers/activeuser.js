const activeUser = (state = null, action) => {
    switch (action.type) {

      case 'USER_LOGOUT':
        return null;

      case 'USER_LOGIN':
          return action.user;

      case 'ADD_NEWTODO':
          return {
                   ...action.user,
                   todos: [
                   ...action.user.todos,
                   {
                     text: action.text,
                     id: action.id,
                     completed: false
                   }
                ]}

      case 'SET_ACTUALTODO':
        return {
                ...state,
                todos: state.todos.map(todo =>
                    (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
                    )
        }

      default:
        return state;
    }
}

export default activeUser;
