import {combineReducers} from 'redux'
import Todos from './todos'
import Filters from './filters'
import Modal from './modal'
import InputText from './inputText'

export default combineReducers({
  Todos,
  Filters,
  Modal,
  InputText
});
