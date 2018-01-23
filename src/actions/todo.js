import moment from 'moment';

import ACTIONS from '../constants/';

import { push } from 'react-router-redux'

export const updateText = (obj) => {
  return ({
    type: ACTIONS.UPDATE_TODO,
    payload: {
      body: obj.body,
      id: obj.id,
      modified: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
  });
};

export const newText = (text) => ({
  type: ACTIONS.NEW_TEXT,
  text
});

export const addTodo = (text) => {
  let date = moment().format('MMMM Do YYYY, h:mm:ss a');

  return {
    type: ACTIONS.ADD_TODO,
    payload: {
      created: date,
      modified: date,
      body: text,
      status: 'new',
      id: Math.floor(Math.random() * 10000)
    }
  }
};

export const removeTodo = (id) => {
  return {
    type: ACTIONS.REMOVE_TODO,
    id
  };
};

export const changeStatus = (todo) => {
  let modified = moment().format('MMMM Do YYYY, h:mm:ss a');

  return {
    type: ACTIONS.UPDATE_TODO,
    payload: {
      ...todo,
      modified
    }
  };
};

export function addNewTodo(text) {
  return (dispatch, getState) => {
    let state = getState();
    let isUnic = true,
      id = Math.floor(Math.random() * 10000);

    // if empty
    if (!text) {
      dispatch(push(`/${ id }/error`));
      return false
    }

    state.todos.forEach((todo) => {
      if ( todo.body === text ) {
        isUnic = false
      }
    });

    if (isUnic) {
      dispatch(addTodo(text));
      dispatch(newText(''));
    } else {
      dispatch(push(`/${ id }/error`));
    }
  };
}

export function actionRemoveTodo(id) {
  return (dispatch) => {
    dispatch(removeTodo(id));
    dispatch(newText(''));
    dispatch(push('/'));
  };
}

export function actionChangeStatus(id, status) {
  return (dispatch, getState) => {
    let state = getState();
    let todo = state.todos.filter((todo) => state.id === todo.id)[0];
    todo.status = status;

    dispatch(changeStatus(todo));
  };
}
