import React, { Component } from 'react';

import { connect } from 'react-redux';

import { hideEditing } from '../../actions/router'
import { newText, addNewTodo } from '../../actions/todo';

import './index.scss';

class Input extends Component {
  constructor(props) {
    super(props)
  }

  addItem = (e) => {
    const { addNewTodo } = this.props;

    if (e.key === 'Enter') {
      addNewTodo(e.target.value)
    }
  };

  changeValue = (e) => {
    const { newText } = this.props;

    let text = e.target.value;

    newText(text)
  };

  render() {
    const {
      text,
      hideEditing
    } = this.props;

    return (
      <input
        className="create-todo"
        placeholder="What needs to be done?"
        onChange={ this.changeValue }
        onKeyPress={ this.addItem }
        value={ text }
        onFocus={ hideEditing }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.inputText
  }
};

export default connect(mapStateToProps, { newText, addNewTodo, hideEditing })(Input)
