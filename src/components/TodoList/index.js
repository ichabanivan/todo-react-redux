import React, {Component} from 'react';
import { connect } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import './index.scss';

class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      todos,
      filter
    } = this.props;

    return (
        <ul className="todo__list">
          {
            todos.map((todo) => <li key={ todo.index } className="todo__item">
              <TodoItem todo={ todo } id={ todo.index } filter={filter}/>
            </li>)
          }
        </ul>
    );
  }
}

const filterTodos = (todos, filter, text) => {
  switch (filter) {
    case 'all':
      return todos.filter((t, index) => {
        t.index = index;
        return t.body && t.body.indexOf(text) !== -1;
      });
    case 'completed':
      return todos.filter((t, index) => {
        t.index = index;
        return t.status === 'completed' && t.body.indexOf(text) !== -1;
      });
    case 'active':
      return todos.filter((t, index) => {
        t.index = index;
        return t.status === 'new' && t.body.indexOf(text) !== -1;
      });
  }
};

const mapStateToProps = (state, ownProps) => {
  let filter = ownProps.match.params.filter;
  return { todos: filterTodos(state.todos, filter, state.inputText), filter }
};

export default connect(mapStateToProps, null )(TodoList)
