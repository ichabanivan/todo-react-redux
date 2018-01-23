import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Todos from './Todos/';
import Filters from './Filters/';

import 'normalize.css';
import './index.scss';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="todo">

        <h1>Todos</h1>
        <Filters />
        <Route path="/:id?/:modal?" component={ Todos } />

      </div>
    );
  }
}
