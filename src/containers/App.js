import React, {Component} from 'react';

import '../../node_modules/normalize.css/normalize.css';
import '../assets/css/style.scss';
import './index.scss';

import TextArea from '../components/TextArea'
import TodoList from '../components/TodoList'
import Filters from '../components/Filters'
import Modal from '../components/Modal'
import { hideModal, toggleTodo, removeTodo } from '../actions/index'
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
  }

  confirmDelete = () => {
    this.props.hideModal();
    this.props.removeTodo(this.props.modal.id);
  };

  confirmChangeLabel = () => {
    this.props.toggleTodo(this.props.modal.id);
    this.props.hideModal();
  };

  render() {
    return (
      <div className="todo-app">
        <h1>Todos</h1>
        <TextArea />
        <TodoList />
        <Filters />
        <Modal
          label={ this.confirmChangeLabel }
          delete={ this.confirmDelete }
          isVisible={ this.props.modal.isVisible }
          text={ this.props.modal.text }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { modal: state.Modal}
};

export default connect(mapStateToProps, {hideModal, removeTodo, toggleTodo})(App)
