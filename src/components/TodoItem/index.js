import React, {Component} from 'react';
import './index.scss';
import { removeTodo, toggleTodo, showModal } from '../../actions/index'
import { connect } from 'react-redux'

class TodoItem extends Component {
  constructor(props) {
    super(props)
  }

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
        >
          { this.props.status }
        </span>
        <span className="item__date">
          {this.props.date}
        </span>
        <span className="item__text">{this.props.text}</span>
        <i
          onClick={this.showModalDelete}
          className="delete"
        > X </i>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.Todos }
};

export default connect(mapStateToProps, {removeTodo, toggleTodo, showModal})(TodoItem)
