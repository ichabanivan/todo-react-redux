import {combineReducers} from 'redux';
import todos from './todos';
import inputText from './inputText';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  router: routerReducer,
  todos,
  inputText
});
