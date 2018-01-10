import ACTIONS from 'constants/Actions';

export const addTodo = (text) => ({
  type: ACTIONS.ADD_TODO,
  text
});

export const removeTodo = (id) => ({
  type: ACTIONS.REMOVE_TODO,
  id
});

export const toggleTodo = (todo) => ({
  type: ACTIONS.TOGGLE_TODO,
  todo
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
