import ACTIONS from '../constants/';

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
}

export const removeTodo = (id) => {
  return {
    type: ACTIONS.REMOVE_TODO,
    id
  };
};

export const changeStatus = (todo) => {
  let date = new Date().toString()

  return {
    type: ACTIONS.UPDATE_TODO,
    payload: {
      ...todo,
      date
    }
  };
};
