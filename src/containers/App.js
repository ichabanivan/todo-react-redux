import React, {Component} from 'react';

import '../../node_modules/normalize.css/normalize.css';
import 'assets/css/style.scss';
import './index.scss';

import TextArea from 'components/TextArea'
import TodoList from 'components/TodoList'
import Filters from 'components/Filters'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="todo-app">
        <h1>Todos</h1>
        <TextArea/>
        <TodoList/>
        <Filters/>
      </div>
    );
  }
}
