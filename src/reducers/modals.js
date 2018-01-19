import CONSTANTS from '../constants/';

export default function filter(state = CONSTANTS.FILTER_ALL, action) {
  switch (action.type) {
    case CONSTANTS.SHOW_MODAL:
      console.log(action.payload)
      return state;

    default:
      return state;
  }
}
