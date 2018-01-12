import ACTIONS from '../constants/';
import store from '../store'

export const updateText = (obj) => {
  let state = store.getState().Todos;

  let payload = state.map(todo => {
    if (todo.id === obj.id) {
      return {
        ...todo,
        body: obj.body,
        date: `${new Date(Date.now())}`
      }
    } else {
      return todo
    }
  });

  return ({
    type: ACTIONS.UPDATE_TEXT,
    payload
  });
};

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
  let dateNow = Date.now(),
    payload,
    isUnic = true;

  const state = store.getState().Todos;

  let todo = {
    id: dateNow,
    body: text,
    status: 'new',
    date: `${new Date(dateNow)}`
  };


  // if empty
  if (!todo.body) {
    isUnic = false;
  }

  state.map((el) => {
    if (el.body === todo.body) {
      isUnic = false;
    }
  });

  let isTodo = isUnic ? todo : null;

  if (isTodo) {
    payload = [
      todo,
      ...state
    ]
  } else {
    payload = state;
  }

  return {
    type: ACTIONS.ADD_TODO,
    payload
  }
};

export const removeTodo = (id) => {
  let state = store.getState().Todos;

  let payload = state.filter((todo) => todo.id !== id);

  return {
    type: ACTIONS.REMOVE_TODO,
    payload
  };
};

export const toggleTodo = (id) => {
  let state = store.getState().Todos;

  let payload = state.map(todo => {
    if (todo.id === id) {
      let status;
      let body = todo.body;
      let id = todo.id;
      let date = `${new Date(Date.now())}`;
      switch (todo.status) {
        case 'new': {
          status = 'review';
          break;
        }
        case 'review': {
          status = 'completed';
          break;
        }
        case 'completed': {
          status = 'new';
          break;
        }
        default: {
          break;
        }
      }
      return { body, id, status, date }
    } else {
      return todo
    }
  });

  return {
    type: ACTIONS.TOGGLE_TODO,
    payload
  };
};

export const filterAll = () => ({
  type: ACTIONS.FILTER_ALL
});

export const filterActive = () => ({
  type: ACTIONS.FILTER_ACTIVE
});

export const filterCompleted = () => ({
  type: ACTIONS.FILTER_COMPLETED
});
