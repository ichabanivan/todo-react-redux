import ACTIONS from 'constants/Actions';

let initialState = [];

export default function Todos(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      let todosArray = [...state];

      let todoItem = {
        id: Date.now(),
        body: action.text,
        finished: false
      };

      todosArray.unshift(todoItem);

      return todosArray;
    case ACTIONS.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case ACTIONS.TOGGLE_TODO:
      return state.map(todo => {
        return todo.id === action.todo.id ? { ...action.todo, finished: !action.todo.finished } : todo;
      });
    default:
      return state;
  }
}
