import React, {Component} from 'react';
/**
 * Styles for application
 */
import './index.scss';

import { removeTodo, toggleTodo, showModal } from '../../actions/index'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return { todos: state.Todos }
};

class TodoItem extends Component {
  constructor(props) {
    super(props)
  }

  removeTodo = () => {
    this.props.removeTodo(this.props.id);
  };

  showModalLabel = () => {
    this.props.showModal({
      id: this.props.id,
      text: 'do you want change label?',
      type: 'label'
    })
  };

  showModalDelete = () => {
    this.props.showModal({
      id: this.props.id,
      text: 'do you want delete this item?',
      type: 'delete'
    })
  };

  render() {
    return (
      <li className="todo__item item">
        <span
          onClick={this.showModalLabel}
          className="item__label"
          aria-hidden="true"
        >
          {this.props.status}
        </span>
        <span className="todo__date">
          {this.props.date}
        </span>
        <span className="item__text">{this.props.text}</span>
        <i
          onClick={this.showModalDelete}
          className="fa fa-times delete"
          aria-hidden="true"
        />
      </li>
    );
  }
}

export default connect(mapStateToProps, {removeTodo, toggleTodo, showModal})(TodoItem)
