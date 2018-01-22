import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import {connect} from 'react-redux'

import { chooseModal, showModal, hideModals } from '../actions/modal';

import EditTodo from '../components/EditTodo/';
import Input from '../components/Input/';
import TodoList from '../components/TodoList/';
import Filters from '../components/Filters/';
import ModalError from '../components/ModalError/';
import ModalRemoveTodo from '../components/ModalRemoveTodo/';
import ModalChangeStatus from '../components/ModalChangeStatus/';

import '../../node_modules/normalize.css/normalize.css';
import '../assets/css/style.scss';
import './index.scss';

const Todos = () => (
  <div className="todo__all">
    <h1>Todos</h1>
    <Input />
    <TodoList />
    <Filters />
  </div>
);

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.url(this.props.url)
  }

  componentWillReceiveProps(nextProps) {
    this.url(nextProps.url)
  }

  url = (url) => {
    let urlSplit = url.split('/'),
    modal = urlSplit[2];

    this.props.chooseModal(modal, Number(urlSplit[1]))
  };

  render() {
    const { id } = this.props;

    return (
      <div className="todo">

        <Route path="/" component={ Todos } />
        <Route path="/:id/" component={ EditTodo } />

        <ModalError id={ id } />
        <ModalRemoveTodo id={ id } />
        <ModalChangeStatus id={ id } />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.router.location.pathname,
    id: state.id
  }
};

export default connect(mapStateToProps, { chooseModal, showModal, hideModals })(App)
