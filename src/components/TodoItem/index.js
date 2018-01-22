import React, { Component } from 'react';
import {connect} from 'react-redux'

import {pushLink} from '../../actions/router'

import './index.scss';

class TodoItem extends Component {
  constructor (props) {
    super(props);
  }

  push = (url) => {
    this.props.pushLink(url)
  };

  render () {
    const {
      todo
    } = this.props;

    return (
      <div className="todo__item item" >
        <div className="item__top">
          <button
            className="item__label"
            onClick={ () => this.props.pushLink(`/${todo.index}/change-label`)}
          > { todo.status } </button>

          <span className="item__text">{ todo.body }</span>

          <div className="item__btns">
            <button
              className="item__delete"
              onClick={ () => this.props.pushLink(`/${todo.index}/remove-todo`)}
            > X </button>
            <button
              className="item__edit"
              onClick={ () => this.props.pushLink(`/${todo.index}`)}
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

export default connect(null, { pushLink })(TodoItem)
