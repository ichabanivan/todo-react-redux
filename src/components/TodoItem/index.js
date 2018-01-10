import React, {Component} from 'react';
/**
 * Styles for application
 */
import './index.scss';

import { removeTodo, toggleTodo } from 'actions/'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return { todos: state.Todos }
};

@connect(mapStateToProps, {removeTodo, toggleTodo})
export default class TodoItem extends Component {
  constructor(props) {
    super(props)
  }

  checkTodo = () => {
    let todo = {
      id: this.props.id,
      body: this.props.text,
      finished: this.props.finished
    };

    this.props.toggleTodo(todo);
  };

  removeTodo = () => {
    this.props.removeTodo(this.props.id);
  };

  render() {
    const checkboxClass = this.props.finished ? 'fa-check-square-o' : 'fa-square-o';
    return (
      <li className="list-group-item">
        <i
          onClick={this.checkTodo}
          className={`checkbox fa ${checkboxClass}`}
          aria-hidden="true"
        />
        <span>{this.props.text}</span>
        <i
          onClick={this.removeTodo}
          className="fa fa-times delete"
          aria-hidden="true"
        />
      </li>
    );
  }
}
