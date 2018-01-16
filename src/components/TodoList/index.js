import React, {Component} from 'react';
import { connect } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import CONSTANTS from '../../constants/';
import EditTodo from '../EditTodo/';
import './index.scss';

import {
  Route,
  Link,
  withRouter
} from 'react-router-dom'

class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      todos,
      filter
    } = this.props;

    let url = filter === CONSTANTS.FILTER_COMPLETED
      ? 'completed' : filter === CONSTANTS.FILTER_ACTIVE
        ? 'active'
        : 'all';

    return (
      <div className="todo-edit">
        <div className="todo__list">
          {
            todos.map((todo) => <Link to={ `/${url}/${todo.index}` } key={ todo.index } className="todo__item">
              <TodoItem todo={ todo } id={ todo.index } />
            </Link>)
          }
        </div>
        <Route path="/:filter/:id" component={EditTodo}/>
      </div>
    );
  }
}

const filterTodos = (todos, filter, inputText) => {
  switch (filter) {
    case CONSTANTS.FILTER_ALL:
      return todos.filter((t, index) => {
        t.index = index;
        return t.body.search(new RegExp(inputText, 'i')) !== -1
      });
    case CONSTANTS.FILTER_COMPLETED:
      return todos.filter((t, index) => {
        t.index = index;
        return t.status === 'completed' && (t.body.search(new RegExp(inputText, 'i')) !== -1)
      });
    case CONSTANTS.FILTER_ACTIVE:
      return todos.filter((t, index) => {
        t.index = index;
        return t.status === 'new' && (t.body.search(new RegExp(inputText, 'i')) !== -1);
      });
  }
};

const mapStateToProps = (state) => {
  return { todos: filterTodos(state.todos, state.filter, state.inputText), filter: state.filter }
};

export default withRouter(connect(mapStateToProps, null )(TodoList))
