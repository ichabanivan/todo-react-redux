import CONSTANTS from '../constants/';

export default function id(state = null, action) {
  switch (action.type) {
    case CONSTANTS.SET_ID:
      return action.id;

    default:
      return state;
  }
}
