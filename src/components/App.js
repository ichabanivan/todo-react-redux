import React, { Component } from 'react';
import '../../node_modules/normalize.css/normalize.css';
import '../assets/css/style.scss';
import './index.scss';
import EditTodo from '../components/EditTodo/';
import Input from '../components/Input/';
import TodoList from '../components/TodoList/';
import Filters from '../components/Filters/';
import ModalError from '../components/ModalError/';
import ModalRemoveTodo from '../components/ModalRemoveTodo/';
import ModalChangeStatus from '../components/ModalChangeStatus/';
import { Switch, Route } from 'react-router-dom';

const Todos = () => (
  <div className="todo__all">
    <Input />
    <TodoList />
    <Filters />
  </div>
);

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="todo-app">
        <h1>Todos</h1>

        <div className="todo">
          <Route path="/" component={ Todos } />
          <Route path="/:id/" component={ EditTodo } />
        </div>

        <Route path="/:id/error" component={ ModalError } />
        <Route path="/:id/remove-todo" component={ ModalRemoveTodo } />
        <Route path="/:id/change-label" component={ ModalChangeStatus } />

      </div>
    );
  }
}
