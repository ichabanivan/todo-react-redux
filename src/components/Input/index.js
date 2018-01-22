import React, {Component} from 'react';
import { connect } from 'react-redux';

import { pushLink } from '../../actions/router'
import { newText, addNewTodo } from '../../actions/todo';

import './index.scss';

class Input extends Component {
  constructor(props) {
    super(props)
  }

  addItem = (e) => {
    if (e.key === 'Enter') {
      this.props.addNewTodo(e.target.value)
    }
  };

  changeValue = (e) => {
    this.props.newText(e.target.value)
  };

  hideEditing = () => {
    this.props.pushLink('/')
  };

  render() {
    return (
      <input
        className="create-todo"
        placeholder="What needs to be done?"
        onChange={ this.changeValue }
        onKeyPress={ this.addItem }
        value={ this.props.text }
        onFocus={ this.hideEditing }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.inputText
  }
};

export default connect(mapStateToProps, { newText, addNewTodo, pushLink })(Input)
