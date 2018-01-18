import {combineReducers} from 'redux';
import todos from './todos';
import filter from './filter';
import inputText from './inputText';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  router: routerReducer,
  todos,
  filter,
  inputText
});
