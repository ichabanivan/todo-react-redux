import React, {Component} from 'react';
import '../../node_modules/normalize.css/normalize.css';
import '../assets/css/style.scss';
import './index.scss';
import Input from '../components/Input/';
import TodoList from '../components/TodoList/';
import Filters from '../components/Filters/';
import Modal from '../components/Modal/';
import { hideModal } from '../actions/modal';
import { toggleTodo, removeTodo } from '../actions/todo';
import { filterAll } from '../actions/filter';
import { connect } from 'react-redux';
import history from '../history';
import { Route, withRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
  }

  confirmDelete = () => {
    this.props.hideModal();
    this.props.removeTodo(this.props.modal.id);
    history.push(`/${history.location.pathname.split('/')[1]}`);
  };

  confirmChangeLabel = () => {
    this.props.toggleTodo(this.props.modal.id);
    this.props.hideModal();
    history.push(`/${history.location.pathname.split('/')[1]}`);
  };

  render() {
    return (
      <div className="todo-app">
        <h1>Todos</h1>
        <Input />
        <Route path="/:filter" component={TodoList} />
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
  return { modal: state.modal}
};

export default withRouter(connect(mapStateToProps, { hideModal, removeTodo, toggleTodo, filterAll })(App))
