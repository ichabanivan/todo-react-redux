import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default class TodoItem extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const {
      todo
    } = this.props;

    return (
      <div className="todo__item item" >
        <div className="item__top">
          <Link
            to={`/${todo.index}/change-label`}
            className="item__label"
          > { todo.status } </Link>

          <span className="item__text">{ todo.body }</span>

          <div className="item__btns">
            <Link
              to={`/${todo.index}/remove-todo`}
              className="item__delete"
            > X </Link>
            <Link
              to={`/${todo.index}`}
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
