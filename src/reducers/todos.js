import CONSTANTS from '../constants/';

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
    case CONSTANTS.ADD_TODO:
      return action.payload;

    case CONSTANTS.REMOVE_TODO:
      return action.payload;

    case CONSTANTS.UPDATE_TEXT:
      return action.payload;

    case CONSTANTS.TOGGLE_TODO:
      return action.payload;

    default:
      return state;
  }
}
