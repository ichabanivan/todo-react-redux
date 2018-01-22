import ACTIONS from '../constants/';

export const setId = (id) => ({
  type: ACTIONS.SET_ID,
  id
});

export const showModal = (type) => {
  return {
    type: type,
    payload: {
      isVisible: true
    }
  }
};

export const hideModals = () => {
  return {
    type: ACTIONS.HIDE_MODALS
  }
};

export function chooseModal(modal, id) {
  return (dispatch) => {
    dispatch(setId(id));

    if (modal === 'change-label') {
      dispatch(showModal(ACTIONS.MODAL_STATUS))
    } else if (modal === 'remove-todo') {
      dispatch(showModal(ACTIONS.MODAL_REMOVE))
    } else if (modal === 'error') {
      dispatch(showModal(ACTIONS.MODAL_ERROR))
    } else {
      dispatch(hideModals())
    }
  };
}
