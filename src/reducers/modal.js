import ACTIONS from '../constants/index';

export default function Modal(state = {}, action) {
  switch (action.type) {
    case ACTIONS.SHOW_MODAL:
      return {
        id: action.obj.id,
        isVisible: true,
        text: action.obj.text,
        type: action.obj.type
      };
    case ACTIONS.HIDE_MODAL:
      return {
        isVisible: false
      };
    default:
      return state;
  }
}
