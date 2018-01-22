import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import todos from './todos';
import filter from './filter';
import modals from './modals';
import inputText from './inputText';
import id from './id';

export default combineReducers({
  router: routerReducer,
  todos,
  modals,
  filter,
  inputText,
  id
});
