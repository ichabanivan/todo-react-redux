import React, { Component } from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import './index.scss';

class TodoItem extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const {
      todo,
      push,
      isActive
    } = this.props;

    let activeClass = isActive ? 'item--active': '';

    return (
      <div className={`todo__item item ${activeClass}`} >
        <div className="item__top">
          <button
            className="item__label"
            onClick={ () => push(`/${todo.index}/change-label`)}
          > { todo.status } </button>

          <span className="item__text">{ todo.body }</span>

          <div className="item__btns">
            <button
              className="item__delete"
              onClick={ () => push(`/${todo.index}/remove-todo`)}
            > X </button>
            <button
              className="item__edit"
              onClick={ () => push(`/${todo.index}`)}
            > edit </button>
          </div>
        </div>

        <div>
          <span className="item__date"> { todo.date } </span>
        </div>
      </div>
    );
  }
}

export default connect(null, { push })(TodoItem)
