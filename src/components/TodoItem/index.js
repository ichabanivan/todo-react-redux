import React, {Component} from 'react';
import './index.scss';
import { removeTodo, toggleTodo, showModal } from '../../actions/';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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

  showModalDelete = (e) => {
    e.preventDefault();

    this.props.showModal({
      id: this.props.id,
      text: 'do you want delete this item?',
      type: 'delete'
    })
  };

  render() {
    const {
      body,
      status,
      date
    } = this.props.todo;

    return (
      <div className="todo__item item" >
        <div className="item__top">
          <button
            onClick={ this.showModalLabel }
            className="item__label"
          >
          { status }
          </button>

          <span className="item__text">{ body }</span>
          <i
            onClick={ this.showModalDelete }
            className="delete"
          > X </i>
        </div>

        <div>
          <span className="item__date">
          { date }
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

export default withRouter(connect(mapStateToProps, { removeTodo, toggleTodo, showModal })(TodoItem))
