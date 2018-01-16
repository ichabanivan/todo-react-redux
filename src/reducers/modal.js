import CONSTANTS from '../constants/';

export default function modal(state = {}, action) {
  switch (action.type) {
    case CONSTANTS.SHOW_MODAL:
      return action.modal;

    case CONSTANTS.HIDE_MODAL:
      return { isVisible: false };

    default:
      return state;
  }
}
