import {combineReducers} from 'redux'
import Todos from './todos'
import Filters from './filters'

export default combineReducers({
  Todos,
  Filters
});
