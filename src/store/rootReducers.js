import { combineReducers } from 'redux';
import auth from './infra/auth.reducer';
import menu from './infra/menu.reducer';

export default combineReducers({
  auth,
  menu
})


