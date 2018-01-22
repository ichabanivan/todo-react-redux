import React, { Component } from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { chooseModal } from '../../actions/modal';
import { hideEditing } from '../../actions/router';
import { updateText, changeStatus } from '../../actions/todo';

import './index.scss';

class EditTodo extends Component {
  constructor(props) {
    super(props)
  }

  changeItem = (e) => {
    const {
      match,
      updateText
    } = this.props;

    if (e.key === 'Enter') {
      e.preventDefault();

      let obj = {
        id: match.params.id,
        body: e.target.value
      };

      updateText(obj)
    }
  };

  state = {
    body: ''
  };

  componentDidMount() {
    const {
      todo,
      chooseModal,
      match
    } = this.props;

    this.setState({
      body: todo.body
    });

    chooseModal(match.params.modal, Number(match.params.id))
  }

  changeInput = (e) => {
    this.setState({
      body: e.target.value
    })
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      body: nextProps.todo.body
    });

    // If url was changed
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.chooseModal(nextProps.match.params.modal, Number(nextProps.match.params.id))
    }
  }

  render() {
    if (this.props.isVisible) {

      const {
        todo,
        push,
        hideEditing
      } = this.props;

      const {
        body
      } = this.state;

      return (
        <form className="todo__edit edit">
          <h2>Edit todo</h2>
          <p> id: { todo.id } </p>
          <input
            className="edit__field"
            onKeyPress={ this.changeItem }
            value={ body }
            onChange={ this.changeInput }
          />
          <p>{ todo.date }</p>
          <button
            className="item__label"
            onClick={ (e) => {
              e.preventDefault();
              push(`/${ todo.id }/change-label`)
            }}
          >
            { todo.status }
          </button>

          <button
            onClick={ (e) => {
              e.preventDefault();
              hideEditing()
            }}

            className="edit__close"
          >
            X
          </button>
        </form>
      )
    } else {
      return null
    }
  }
}

const editTodo = (todos, id) => {
  let todo = todos.filter((el, index) => id === index)[0];
  return {
    ...todo,
    id
  }
};

const mapStateToProps = (state, ownProps) => {
  let id = Number(ownProps.match.params.id);
  return {
    todo: editTodo(state.todos, id),
    isVisible: state.id <= state.todos.length
  }
};

export default connect(mapStateToProps, { hideEditing, chooseModal, updateText, changeStatus, push })(EditTodo)
