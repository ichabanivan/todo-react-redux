import React, {Component} from 'react';
import { removeTodo, toggleTodo } from '../../actions/index'
import { connect } from 'react-redux'
import TodoItem from '../../components/TodoItem'
import Actions from '../../constants/index'
import './index.scss';

class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul className="todo__list">
        {
          this.props.todos.map(todo => {
            if (this.props.filter === Actions.FILTER_ALL) {
              if (todo.body.indexOf(this.props.textarea) >= 0) {
                return <TodoItem key={todo.id} date={todo.date} id={todo.id} text={todo.body} status={todo.status} />
              }
            } else if (this.props.filter === Actions.FILTER_ACTIVE && (todo.status === 'new' || todo.status === 'review')) {
              if (todo.body.indexOf(this.props.textarea) >= 0) {
                return <TodoItem key={todo.id} date={todo.date} id={todo.id} text={todo.body} status={todo.status}/>
              }
            } else if (this.props.filter === Actions.FILTER_COMPLETED && todo.status === 'completed') {
              if (todo.body.indexOf(this.props.textarea) >= 0) {
                return <TodoItem key={todo.id} date={todo.date} id={todo.id} text={todo.body} status={todo.status}/>
              }
            }
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.Todos, filter: state.Filters, textarea: state.Textarea }
};

export default connect(mapStateToProps, { removeTodo, toggleTodo })(TodoList)
