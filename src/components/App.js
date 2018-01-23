import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { chooseModal, showModal, hideModals } from '../actions/modal';

import Todos from './Todos/';
import Filters from './Filters/';
import ModalError from './ModalError/';
import ModalRemoveTodo from './ModalRemoveTodo/';
import ModalChangeStatus from './ModalChangeStatus/';

import 'normalize.css';
import './index.scss';

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

        <ModalError />
        <ModalRemoveTodo />
        <ModalChangeStatus />

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
