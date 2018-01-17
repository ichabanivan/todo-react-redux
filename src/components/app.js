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
import ModalChangeLabel from '../components/ModalChangeLabel/';
import { Switch, Route, Redirect } from 'react-router-dom'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="todo-app">
        <h1>Todos</h1>

        <div className="todo">
          <div className="todo__list">
            <Route exact path="/" render={ () => (<Redirect to="/all" />) } />
            <Route path="/" component={ Input } />
            <Route path="/:filter" component={ TodoList } />
          </div>
          <Route className="todo__edit" path="/:filter/:id/" component={ EditTodo } />
        </div>

        <Switch>
          <Route path="/:filter/:id/error" component={ ModalError } />
          <Route path="/:filter/:id/remove-todo" component={ ModalRemoveTodo } />
          <Route path="/:filter/:id/change-label" component={ ModalChangeLabel } />
        </Switch>

        <Filters />
      </div>
    );
  }
}
