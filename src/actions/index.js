import ACTIONS from '../constants/';

export const updateText = (obj) => ({
  type: ACTIONS.UPDATE_TEXT,
  obj
});

export const newText = (text) => ({
  type: ACTIONS.NEW_TEXT,
  text
});

export const showModal = (obj) => {
  let modal = {
    id: obj.id,
    isVisible: true,
    text: obj.text,
    type: obj.type
  };

  return {
    type: ACTIONS.SHOW_MODAL,
    modal
  }
};

export const hideModal = () => ({
  type: ACTIONS.HIDE_MODAL
});

export const addTodo = (text) => {
  let dateNow = Date.now();

  let todo = {
    id: dateNow,
    body: text,
    status: 'new',
    date: `${new Date(dateNow)}`
  };

  return {
    type: ACTIONS.ADD_TODO,
    todo
  }
};

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
