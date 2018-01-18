import ACTIONS from '../constants/';
// import { push } from 'react-router-redux'
// import store from '../store'

export const updateText = (obj) => ({
  type: ACTIONS.UPDATE_TODO,
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

export const removeTodo = (id) => {
  // store.dispatch(push('/'));

  return {
    type: ACTIONS.REMOVE_TODO,
    id
  };
};

export const changeStatus = (todo) => {
  let date = `${new Date(Date.now())}`;

  return {
    type: ACTIONS.UPDATE_TODO,
    payload: {
      ...todo,
      date
    }
  };
};
