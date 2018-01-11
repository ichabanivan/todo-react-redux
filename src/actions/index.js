import ACTIONS from '../constants/index';

export const newText = (text) => ({
  type: ACTIONS.NEW_TEXT,
  text
});

export const showModal = (obj) => ({
  type: ACTIONS.SHOW_MODAL,
  obj
});

export const hideModal = () => ({
  type: ACTIONS.HIDE_MODAL
});

export const addTodo = (text) => ({
  type: ACTIONS.ADD_TODO,
  text
});

export const removeTodo = (id) => ({
  type: ACTIONS.REMOVE_TODO,
  id
});

export const toggleTodo = (id) => ({
  type: ACTIONS.TOGGLE_TODO,
  id
});

export const filterAll = () => ({
  type: ACTIONS.FILTER_ALL
});

export const filterActive = () => ({
  type: ACTIONS.FILTER_ACTIVE
});

export const filterCompleted = () => ({
  type: ACTIONS.FILTER_COMPLETED
});
