import CONSTANTS from '../constants/';

export default function filter(state = CONSTANTS.FILTER_ALL, action) {
  switch (action.type) {
    case CONSTANTS.SET_FILTER:
      return action.filter;

    default:
      return state;
  }
}
