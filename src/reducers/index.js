import {combineReducers} from 'redux'
import todos from './todos'
import filter from './filter'
import modal from './modal'
import inputText from './inputText'

export default combineReducers({
  todos,
  filter,
  modal,
  inputText
});
