import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import { updateText, changeStatus } from '../../actions/todo';

import './index.scss';

class EditTodo extends Component {
  constructor(props) {
    super(props)
  }

  changeItem = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      let obj = {
        id: this.props.match.params.id,
        body: e.target.value
      };

      this.props.updateText(obj)
    }
  };

  state = {
    body: ''
  };

  componentDidMount() {
    this.setState({
      body: this.props.todo.body
    })
  }

  changeInput = (e) => {
    this.setState({
      body: e.target.value
    })
  };


  componentWillReceiveProps(nextProps) {
    this.setState({
      body: nextProps.todo.body
    })
  }

  pushLink = (url) => {
    this.props.push(url)
  };

  render() {
    const {
      body,
      date,
      status,
      id
    } = this.props.todo;

    if (body) {
      return (
        <form className="todo__edit edit">
          <h2>Edit todo</h2>
          <p> id: { id } </p>
          <input
            className="edit__field"
            onKeyPress={ this.changeItem }
            value={ this.state.body }
            onChange={ this.changeInput }
          />
          <p>{ date }</p>
          <button
            className="item__label"
            onClick={ (e) => {
              e.preventDefault();
              this.pushLink(`/${ id }/change-label`)
            }}
          >
            { status }
          </button>

          <button
            onClick={ (e) => {
              e.preventDefault();
              this.pushLink('/')
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
  return {
    todo: editTodo(state.todos, parseInt(ownProps.match.params.id))
  }
};

export default connect(mapStateToProps, { updateText, changeStatus, push })(EditTodo)
