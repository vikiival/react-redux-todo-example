const users = (state = [], action) => {
    switch (action.type) {
      case 'ADD_USER':
          console.log(action.user);
          return [...state, action.user]
      default:
        return state;
    }
}

export default users;
 //...state,
