import React, {Component} from 'react'
import '../../node_modules/normalize.css/normalize.css'
import '../assets/css/style.scss'
import './index.scss'
import Input from '../components/Input/'
import TodoList from '../components/TodoList/'
import Filters from '../components/Filters/'
import Modal from '../components/Modal/'
import { hideModal, toggleTodo, removeTodo } from '../actions/'
import {connect} from 'react-redux'
import history from '../history'

class App extends Component {
  constructor(props) {
    super(props)
  }

  confirmDelete = () => {
    this.props.hideModal();
    this.props.removeTodo(this.props.modal.id);
    history.push('/')
  };

  confirmChangeLabel = () => {
    this.props.toggleTodo(this.props.modal.id);
    this.props.hideModal();
  };

  render() {
    return (
      <div className="todo-app">
        <h1>Todos</h1>
        <Input />
        <TodoList />
        <Filters />
        <Modal
          label={ this.confirmChangeLabel }
          del={ this.confirmDelete }
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
