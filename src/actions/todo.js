import ACTIONS from '../constants/';

import { push } from 'react-router-redux'

export const updateTodo = (todo, id) => {
  return dispatch => {
    if (todo.body) {
      dispatch({
        type: ACTIONS.UPDATE_TODO,
        payload: {
          body: todo.body,
          id: todo.id,
          modified: new Date().toLocaleDateString()
        }
      });
      push(`/${id}`)
    } else {
      dispatch(push(`/${ id }/error`));
    }
  }
};

export const resetText = () => ({
  type: ACTIONS.NEW_TEXT,
  text: ''
});

export const newText = (text) => ({
  type: ACTIONS.NEW_TEXT,
  text
});

export const addTodo = (text, id) => {
  let date = new Date().toLocaleDateString();

  return {
    type: ACTIONS.ADD_TODO,
    payload: {
      created: date,
      modified: date,
      body: text,
      status: 'new',
      id
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
  let modified = new Date().toLocaleDateString();

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
      id = Math.floor(Math.random() * 10000).toString();

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
      dispatch(addTodo(text, id));
      dispatch(resetText());
    } else {
      dispatch(push(`/${ id }/error`));
    }
  };
}

export function actionRemoveTodo(id) {
  return (dispatch) => {
    dispatch(removeTodo(id));
    dispatch(resetText());
    dispatch(push('/'));
  };
}

export function actionChangeStatus(id, status) {
  return (dispatch, getState) => {
    let state = getState();
    let todo = state.todos.filter((todo) => id === todo.id)[0];
    todo.status = status;

    dispatch(changeStatus(todo));
  };
}
