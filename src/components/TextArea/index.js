import React, {Component} from 'react';

import './index.scss';

import { addTodo } from 'actions/'
import { connect } from 'react-redux'

@connect(null, { addTodo })
export default class TextArea extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    value: ''
  };

  addItem = (e) => {
    if (e.key === 'Enter') {
      this.props.addTodo(this.state.value);

      this.setState({
        value: ''
      })
    }
  };

  changeValue = (e) => {
    this.setState({
      value: e.target.value
    })
  };

  render() {
    return (
      <input
        className="form-control create-todo"
        placeholder="What needs to be done?"
        onChange={this.changeValue}
        onKeyPress={this.addItem}
        value={this.state.value}
      />
    );
  }
}
