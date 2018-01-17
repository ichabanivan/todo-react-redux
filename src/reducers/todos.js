import CONSTANTS from '../constants/';

let initialState =  [
  {
    body: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh.',
    status: 'new',
    date: 'Fri Jan 12 2018 11:57:06 GMT+0200 (EET)'
  },
  {
    body: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
    status: 'review',
    date: 'Fri Jan 12 2018 11:37:01 GMT+0200 (EET)'
  },
  {
    body: '2Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    status: 'completed',
    date: 'Fri Jan 12 2018 11:56:55 GMT+0200 (EET)'
  },
  {
    body: '324 quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    status: 'review',
    date: 'Fri Jan 12 2018 11:56:00 GMT+0200 (EET)'
  }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.ADD_TODO:
      return [
        action.payload,
        ...state
      ];

    case CONSTANTS.REMOVE_TODO:
      return state.filter((el, index) => index !== parseInt(action.id));

    case CONSTANTS.UPDATE_TEXT:
      return state.map((todo, index) => (index === parseInt(action.payload.id)
        ? {
          ...todo,
          body: action.payload.body,
          date: action.payload.date
        }
        : todo
      ));

    case CONSTANTS.TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === parseInt(action.payload.id)) {
          let status,
            body = todo.body,
            id = index,
            date = action.payload.date;

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

          return {
            body,
            id,
            status,
            date
          }
        } else {
          return todo
        }
      });

    default:
      return state;
  }
}
