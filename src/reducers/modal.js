import ACTIONS from '../constants/'

export default function Modal(state = {}, action) {
  switch (action.type) {
    case ACTIONS.SHOW_MODAL:
      return action.modal;
    case ACTIONS.HIDE_MODAL:
      return { isVisible: false };
    default:
      return state;
  }
}
