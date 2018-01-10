import React, { Component } from 'react';
/**
 * Styles for application
 */
import '../../node_modules/normalize.css/normalize.css';
import 'assets/css/style.scss';

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        Hello World
      </div>
    );
	}
}
