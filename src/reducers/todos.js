import CONSTANTS from '../constants/';

let initialState =  [
  {
    id: 10001,
    body: '1Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh.',
    status: 'new',
    created: 'January 11rd 2017, 2:44:12 pm',
    modified: 'January 11rd 2017, 2:44:12 pm'
  },
  {
    id: 10012,
    body: '2Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
    status: 'review',
    created: 'January 21rd 2018, 10:12:11 pm',
    modified: 'January 21rd 2018, 10:12:11 pm'
  },
  {
    id: 10023,
    body: '3Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    status: 'completed',
    created: 'January 23rd 2018, 1:12:17 pm',
    modified: 'January 23rd 2018, 1:12:17 pm'
  },
  {
    id: 10034,
    body: '4quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    status: 'review',
    created: 'January 23rd 2018, 11:12:37 am',
    modified: 'January 23rd 2018, 11:12:37 am'
  },
  {
    id: 10045,
    body: '5D elit, eget tincidunt nibh pulvinar a. 123',
    status: 'in progress',
    created: 'January 23rd 2018, 2:11:37 pm',
    modified: 'January 23rd 2018, 2:11:37 pm'
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
      return state.filter((el) => el.id !== action.id);

    case CONSTANTS.UPDATE_TODO:
      return state.map((todo) => (
        todo.id === action.payload.id
        ? Object.assign(todo, action.payload)
        : todo
      ));

    default:
      return state;
  }
}
