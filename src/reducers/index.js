import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import navigationMenu from './navigationMenu';
import user from './user';
import micro from './microReducer';
import auth from './authReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  navigationMenu,
  user,
  micro,
  auth
});
