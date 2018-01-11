import {combineReducers} from 'redux'
import Todos from './todos'
import Filters from './filters'
import Modal from './modal'
import Textarea from './textarea'

export default combineReducers({
  Todos,
  Filters,
  Modal,
  Textarea
});
