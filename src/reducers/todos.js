import CONSTANTS from '../constants/';

let initialState =  [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.INIT_TODOS:
      return action.todos

    case CONSTANTS.ADD_TODO:
      return [
        action.payload,
        ...state
      ];

    case CONSTANTS.REMOVE_TODO:
      return state.filter((el) => el.id !== action.id);

    case CONSTANTS.UPDATE_TODO:
      console.log(action.todo)
      return state.map((todo) => (
        todo.id === action.todo.id
        ? Object.assign(todo, action.todo)
        : todo
      ));

    default:
      return state;
  }
}
