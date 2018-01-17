import React, { Component } from 'react';
import './index.scss';
import { removeTodo, toggleTodo, } from '../../actions/todo';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class TodoItem extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const {
      todo,
      filter,
      id
    } = this.props;

    return (
      <div className="todo__item item" >
        <div className="item__top">
          <Link
            to={`/${filter}/${id}/change-label`}
            className="item__label"
          > { todo.status } </Link>

          <span className="item__text">{ todo.body }</span>

          <div className="item__btns">
            <Link
              to={`/${filter}/${id}/remove-todo`}
              className="item__delete"
            > X </Link>
            <Link
              to={`/${filter}/${id}`}
              className="item__edit"
            > edit </Link>
          </div>
        </div>

          <div>
            <span className="item__date"> { todo.date } </span>
          </div>
      </div>
    );
  }
}

export default connect(null, { removeTodo, toggleTodo })(TodoItem);
