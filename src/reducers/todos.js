import ACTIONS from '../constants/';

let initialState =  [
  {
    id: 1515751026748,
    body: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh.',
    status: 'new',
    date: 'Fri Jan 12 2018 11:57:06 GMT+0200 (EET)'
  },
  {
    id: 1515751021473,
    body: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
    status: 'review',
    date: 'Fri Jan 12 2018 11:37:01 GMT+0200 (EET)'
  },
  {
    id: 1515751015376,
    body: 'Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    status: 'completed',
    date: 'Fri Jan 12 2018 11:56:55 GMT+0200 (EET)'
  },
  {
    id: 1515751015379,
    body: 'Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    status: 'completed',
    date: 'Fri Jan 12 2018 11:56:55 GMT+0200 (EET)'
  }
];

export default function Todos(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      let isUnic = true;

      // if empty
      if (!action.todo.body) {
        isUnic = false;
      }

      state.map((todo) => {
        if (todo.body === action.todo.body) {
          isUnic = false;
        }
      });

      if (isUnic) {
        return [action.todo, ...state];
      } else {
        return state
      }

    case ACTIONS.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    case ACTIONS.UPDATE_TEXT:
      return state.map(todo => {
        if (todo.id === action.obj.id) {
          return {
            ...todo,
            body: action.obj.body,
            date: `${new Date(Date.now())}`
          }
        } else {
          return todo
        }
      });

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
