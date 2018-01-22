import ACTIONS from '../constants/';

import { push, goBack } from 'react-router-redux';

import { actionRemoveTodo, actionChangeStatus } from './todo';

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
    if (id >= 0) {
      dispatch(setId(id));
    } else {
      dispatch(setId(null));
    }

    if (modal === 'change-label') {
      dispatch(showModal(ACTIONS.MODAL_STATUS));
    } else if (modal === 'remove-todo') {
      dispatch(showModal(ACTIONS.MODAL_REMOVE));
    } else if (modal === 'error') {
      dispatch(showModal(ACTIONS.MODAL_ERROR));
    } else {
      dispatch(hideModals());
    }
  };
}

export const hideModalError = () => {
  return (dispatch) => {
    dispatch(hideModals());
    dispatch(setId(null));
    dispatch(goBack());
  }
};

export const hideModalAndRemoveTodo = (id) => {
  return (dispatch) => {
    dispatch(actionRemoveTodo(id));
    dispatch(hideModals());
    dispatch(setId(null));
    dispatch(push('/'));
  }
};

export const hideModalRemoveTodo = () => {
  return (dispatch) => {
    dispatch(hideModals());
    dispatch(setId(null));
    dispatch(goBack());
  }
};

export const hideModalAndChangeStatus = (id, status) => {
  return (dispatch) => {
    dispatch(actionChangeStatus(id, status));
    dispatch(hideModals());
    dispatch(setId(null));
    dispatch(goBack());
  }
};

export const hideModalChangeStatus = () => {
  return (dispatch) => {
    dispatch(hideModals());
    dispatch(setId(null));
    dispatch(goBack());
  }
};
