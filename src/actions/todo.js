import ACTIONS from '../constants/';

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

export const removeTodo = (id) => ({
  type: ACTIONS.REMOVE_TODO,
  id
});

export const toggleTodo = (todo) => {
  let status,
    body = todo.body,
    id = todo.index,
    date = `${new Date(Date.now())}`;

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

  return {
    type: ACTIONS.UPDATE_TODO,
    payload: {
      body,
      id,
      status,
      date
    }
  };
};
