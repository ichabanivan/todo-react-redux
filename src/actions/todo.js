import ACTIONS from '../constants/';

export const updateText = (obj) => ({
  type: ACTIONS.UPDATE_TEXT,
  payload: {
    body: obj.body,
    id: obj.id,
    date: `${new Date(Date.now())}`
  }
});

export const newText = (text) => ({
  type: ACTIONS.NEW_TEXT,
  text
});

export const addTodo = (text) => ({
  type: ACTIONS.ADD_TODO,
  payload: {
    date: `${new Date(Date.now())}`,
    body: text,
    status: 'new'
  }
});

export const removeTodo = (id) => ({
  type: ACTIONS.REMOVE_TODO,
  id
});

export const toggleTodo = (id) => ({
  type: ACTIONS.TOGGLE_TODO,
  payload: {
    id,
    date: `${new Date(Date.now())}`
  }
});
