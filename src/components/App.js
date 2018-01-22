import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { chooseModal, showModal, hideModals } from '../actions/modal';

import EditTodo from '../components/EditTodo/';
import Input from '../components/Input/';
import TodoList from '../components/TodoList/';
import Filters from '../components/Filters/';
import ModalError from '../components/ModalError/';
import ModalRemoveTodo from '../components/ModalRemoveTodo/';
import ModalChangeStatus from '../components/ModalChangeStatus/';

import 'normalize.css';
import './index.scss';

const Todos = (props) => {
  const { id } = props.match.params;

  return (
    <div>
      <Input id={ id } />
      <Route path="/:id/:modal?" component={ EditTodo } />
      <TodoList id={ id } />
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id } = this.props;

    return (
      <div className="todo">

        <h1>Todos</h1>
        <Filters />
        <Route path="/:id?/:modal?" component={ Todos } />

        <ModalError id={ id } />
        <ModalRemoveTodo id={ id } />
        <ModalChangeStatus id={ id } />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.id
  }
};

export default connect(mapStateToProps, { chooseModal, showModal, hideModals })(App)
