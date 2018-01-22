import ACTIONS from '../constants/';

import { push, goBack } from 'react-router-redux'

export const updateText = (obj) => ({
  type: ACTIONS.UPDATE_TODO,
  payload: {
    body: obj.body,
    id: obj.id,
    date: new Date().toString()
  }
});

export const newText = (text) => ({
  type: ACTIONS.NEW_TEXT,
  text
});

export const addTodo = (text) => {
  return {
    type: ACTIONS.ADD_TODO,
    payload: {
      date: new Date().toString(),
      body: text,
      status: 'new'
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
  let date = new Date().toString();

  return {
    type: ACTIONS.UPDATE_TODO,
    payload: {
      ...todo,
      date
    }
  };
};

export function addNewTodo(text) {
  return (dispatch, getState) => {
    let state = getState();
    let isUnic = true,
      length = state.todos.length,
      id;

    // if empty
    if (!text) {
      dispatch(push(`/${length}/error`))
      return false
    }

    state.todos.map((el, i) => {
      if (el.body === text) {
        isUnic = false;
        id = i;
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
    let todo = state.todos.filter((el, index) => index === Number(id))[0];
    todo.date = new Date().toString();
    todo.status = status;

    dispatch(changeStatus(todo));
    dispatch(goBack());
  };
}
