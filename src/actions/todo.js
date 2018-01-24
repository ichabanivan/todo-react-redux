import ACTIONS from '../constants/';

import { push } from 'react-router-redux'

export const updateTodo = (todo, id) => {
  return dispatch => {
    if (todo.body) {
      fetch('/updateTodo', {
        method: 'POST',
        body: id
      })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response) {
          dispatch({
            type: ACTIONS.UPDATE_TODO,
            todo: {
              body: todo.body,
              id,
              modified: new Date().toLocaleDateString()
            }
          });
          dispatch(push(`/${ id }`))
        } else {
          dispatch(push(`/${ id }/error`));
        }
      })
      .catch(error => console.log(error));
    } else {
      dispatch(push(`/${ id }/error`));
    }
  }
};

export const resetText = () => ({
  type: ACTIONS.RESET_TEXT
});

export const newText = (text) => ({
  type: ACTIONS.NEW_TEXT,
  text
});

export const addTodo = (todo) => {
  return {
    type: ACTIONS.ADD_TODO,
    payload: {
      created: todo.date,
      modified: todo.date,
      body: todo.text,
      status: 'new',
      id: todo.id
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
  return {
    type: ACTIONS.UPDATE_TODO,
    todo
  };
};

export function addNewTodo(text) {
  return (dispatch, getState) => {
    let date = new Date().toLocaleDateString();

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

    let todo = {
      text,
      id,
      date
    };

    if (isUnic) {
      fetch('/addTodo', {
        method: 'POST',
        body: JSON.stringify(todo)
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          dispatch(addTodo(todo));
          dispatch(resetText());
        } else {
          dispatch(push(`/${ id }/error`));
        }
      })
      .catch(error => console.log(error));
    } else {
      dispatch(push(`/${ id }/error`));
    }
  };
}

export function actionRemoveTodo(id) {
  return (dispatch) => {
    fetch('/removeTodo', {
      method: 'POST',
      body: id
    })
    .then(response => response.json())
    .then(response => {
      if (response) {
        dispatch(removeTodo(id));
        dispatch(resetText());
        dispatch(push('/'));
      } else {
        dispatch(push(`/${ id }/error`));
      }
    })
    .catch(error => console.log(error));
  }
}

export function actionChangeStatus(id, status) {
  return (dispatch, getState) => {
    let modified = new Date().toLocaleDateString();
    let state = getState();
    let todo = state.todos.filter((todo) => id === todo.id)[0];
    todo.status = status;
    todo.modified = modified;

    fetch('/changeStatus', {
      method: 'POST',
      body: JSON.stringify(todo)
    })
    .then(response => response.json())
    .then(response => {
      if (response) {
        dispatch(changeStatus(todo));
      } else {
        dispatch(push(`/${ id }/error`));
      }
    })
    .catch(error => console.log(error));
  };
}

export function initTodos() {
  return (dispatch) => {
    fetch('/getTodos', {
      method: 'POST'
    })
    .then(response => response.json())
    .then(todos => {
      dispatch({
        type: ACTIONS.INIT_TODOS,
        todos
      })
    })
    .catch(error => console.log(error));
  };
}
