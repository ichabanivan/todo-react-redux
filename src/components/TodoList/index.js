import React, {Component} from 'react';

import { removeTodo, toggleTodo } from 'actions/'
import { connect } from 'react-redux'
import TodoItem from 'components/TodoItem'

import Actions from 'constants/Actions'

import './index.scss';

const mapStateToProps = (state) => {
  return { todos: state.Todos, filter: state.Filters }
};

@connect(mapStateToProps, { removeTodo, toggleTodo })
export default class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul className="list-group">
        {
          this.props.todos.map(todo => {
            if (this.props.filter === Actions.FILTER_ALL) {
              return <TodoItem key={todo.id} id={todo.id} finished={todo.finished} text={todo.body} />
            } else if (this.props.filter === Actions.FILTER_ACTIVE && !todo.finished) {
              return <TodoItem key={todo.id} id={todo.id} finished={todo.finished} text={todo.body} />
            } else if (this.props.filter === Actions.FILTER_COMPLETED && todo.finished) {
              return <TodoItem key={todo.id} id={todo.id} finished={todo.finished} text={todo.body} />
            }
          })
        }
      </ul>
    );
  }
}
