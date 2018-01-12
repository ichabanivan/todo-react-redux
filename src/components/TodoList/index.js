import React, {Component} from 'react'
import { removeTodo, toggleTodo } from '../../actions/'
import { connect } from 'react-redux'
import TodoItem from '../../components/TodoItem'
import Actions from '../../constants/'
import EditTodo from '../EditTodo/'
import './index.scss'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      todos
    } = this.props;
    return (
      <Router>
        <div className="todo-edit">
          <div className="todo__list">
            {
              todos.map(todo => {
                if (this.props.filter === Actions.FILTER_ALL) {
                  if (todo.body.indexOf(this.props.textarea) >= 0) {
                    return <Link to={`/${todo.id}`} key={todo.id} className="todo__item">
                      <TodoItem todo={todo} />
                    </Link>
                  }
                } else if (this.props.filter === Actions.FILTER_ACTIVE && (todo.status === 'new' || todo.status === 'review')) {
                  if (todo.body.indexOf(this.props.textarea) >= 0) {
                    return <Link to={`/${todo.id}`} key={todo.id} className="todo__item">
                      <TodoItem todo={todo} />
                    </Link>
                  }
                } else if (this.props.filter === Actions.FILTER_COMPLETED && todo.status === 'completed') {
                  if (todo.body.indexOf(this.props.textarea) >= 0) {
                    return <Link to={`/${todo.id}`} key={todo.id} className="todo__item">
                      <TodoItem todo={todo} />
                    </Link>
                  }
                }
              })
            }
          </div>
          <Route path="/:id" component={EditTodo}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.Todos, filter: state.Filters, textarea: state.Textarea }
};

export default connect(mapStateToProps, { removeTodo, toggleTodo })(TodoList)
