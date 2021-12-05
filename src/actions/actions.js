import { v4 } from 'uuid';

export const addTodo = text => ({
  type: 'ADD_TODO',
  text,
  id: v4(),
});

export const setTodo = id => ({
  type: 'SET_TODO',
  id,
});

export const setVisibilityFilter = visibilityFilter => ({
  type: visibilityFilter,
});

export const userLogout = () => ({
  type: 'USER_LOGOUT',
});

export const userLogin = user => ({
  type: 'USER_LOGIN',
  user,
});

export const addUser = user => ({
  type: 'ADD_USER',
  user,
  id: v4(),
});

export const updateUser = user => ({
  type: 'UPDATE_USER',
  user,
});

export const addMemo = memos => ({
  type: 'ADD_MEMO',
  memos,
});
