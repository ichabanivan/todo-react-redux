import ACTIONS from '../constants/index';

let initialState = [];

export default function Todos(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      let todosArray = [...state];

      let todoItem = {
        id: Date.now(),
        body: action.text,
        status: 'new',
        date: `${new Date(Date.now())}`
      };

      let isUnic = true;

      if (!action.text) {
        isUnic = false;
      }

      todosArray.map((todo) => {
        if (todo.body === todoItem.body) {
          isUnic = false;
        }
      });

      if (isUnic) {
        todosArray.unshift(todoItem);
      }

      return todosArray;

    case ACTIONS.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    case ACTIONS.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          let status;
          let body = todo.body;
          let id = todo.id;
          let date = `${new Date(Date.now())}`;
          switch (todo.status) {
            case 'new': {
              status = 'review';
              break;
            }
            case 'review': {
              status = 'completed';
              break;
            }
            case 'completed': {
              status = 'new';
              break;
            }
            default: {
              break;
            }
          }
          return { body, id, status, date }
        } else {
          return todo
        }
      });

    default:
      return state;
  }
}
