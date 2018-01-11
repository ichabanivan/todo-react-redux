import ACTIONS from '../constants/index';

export default function Textarea(state = '', action) {
  switch (action.type) {
    case ACTIONS.NEW_TEXT:
      return action.text;
    default:
      return state;
  }
}
