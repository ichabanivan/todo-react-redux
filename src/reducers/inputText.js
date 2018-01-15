import CONSTANTS from '../constants/';

export default function inputText(state = '', action) {
  switch (action.type) {
    case CONSTANTS.NEW_TEXT:
      return action.text;
    default:
      return state;
  }
}
