import React, {Component} from 'react';

import './index.scss';

import { addTodo, newText } from '../../actions/index'
import { connect } from 'react-redux'

class TextArea extends Component {
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
      });

      this.props.newText('')
    }
  };

  changeValue = (e) => {
    this.setState({
      value: e.target.value
    });

    this.props.newText(e.target.value)
  };

  render() {
    return (
      <input
        className="create-todo"
        placeholder="What needs to be done?"
        onChange={ this.changeValue }
        onKeyPress={ this.addItem }
        value={ this.state.value }
      />
    );
  }
}

export default connect(null, { addTodo, newText })(TextArea)
