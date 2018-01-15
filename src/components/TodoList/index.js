import React, {Component} from 'react';
import { removeTodo, toggleTodo } from '../../actions/';
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
      todos
    } = this.props;

    return (
      <div className="todo-edit">
        <div className="todo__list">
          {
            todos.map((todo, index) => <Link to={`/${index}`} key={index} className="todo__item">
              <TodoItem todo={todo} id={index} />
            </Link>)
          }
        </div>
        <Route path="/:id" component={EditTodo}/>
      </div>
    );
  }
}

const filterTodos = (todos, filter, inputText) => {
  switch (filter) {
    case CONSTANTS.FILTER_ALL:
      return todos.filter(t => t.body.search(new RegExp(inputText, 'i')) !== -1);
    case CONSTANTS.FILTER_COMPLETED:
      return todos.filter(t => t.status === 'completed' && (t.body.search(new RegExp(inputText, 'i')) !== -1));
    case CONSTANTS.FILTER_ACTIVE:
      return todos.filter(t => t.status === 'new' && (t.body.search(new RegExp(inputText, 'i')) !== -1));
  }
};

const mapStateToProps = (state) => {
  return { todos: filterTodos(state.todos, state.filter, state.inputText)}
};

export default withRouter(connect(mapStateToProps, { removeTodo, toggleTodo })(TodoList))
