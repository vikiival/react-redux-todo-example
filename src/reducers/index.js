import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import users from './users';
import activeUser from './activeuser';

const todoApp = combineReducers({
  visibilityFilter,
  users,
  activeUser,
});

export default todoApp;
