import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import {connect} from 'react-redux'

import CONSTANTS from '../constants/'
import {showModal, hideModals} from '../actions/modal';

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
    this.setState({
      id: urlSplit[1]
    });

    if (modal === 'change-label') {
      this.props.showModal(CONSTANTS.SHOW_MODAL, CONSTANTS.MODAL_STATUS)
    } else if (modal === 'remove-todo') {
      this.props.showModal(CONSTANTS.SHOW_MODAL, CONSTANTS.MODAL_REMOVE)
    } else if (modal === 'error') {
      this.props.showModal(CONSTANTS.SHOW_MODAL, CONSTANTS.MODAL_ERROR)
    } else {
      this.props.hideModals()
    }

  };

  render() {
    return (
      <div className="todo">

        <Route path="/" component={ Todos } />
        <Route path="/:id/" component={ EditTodo } />

        <ModalError id={this.state.id} />
        <ModalRemoveTodo id={this.state.id} />
        <ModalChangeStatus id={this.state.id} />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.router.location.pathname
  }
};

export default connect(mapStateToProps, {showModal, hideModals})(App)
