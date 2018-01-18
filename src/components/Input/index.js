import React, {Component} from 'react';
import './index.scss';
import { addTodo, newText } from '../../actions/todo';
import { connect } from 'react-redux';

import { push } from 'react-router-redux'

class Input extends Component {
  constructor(props) {
    super(props)
  }

  addItem = (e) => {
    if (e.key === 'Enter') {
      let isUnic = true,
        text = e.target.value,
        length = this.props.todos.length;

      // if empty
      if (!text) {
        this.props.push(`/all/${ length + 1 }/error`);
        return false
      }

      this.props.todos.map(el => {
        if (el.body === e.target.value) {
          isUnic = false;
        }
      });

      if (isUnic) {
        this.props.addTodo(text);
        this.props.newText('');
      } else {
        this.props.push(`/${ length + 1 }/error`)
      }
    }
  };

  changeValue = (e) => {
    this.props.newText(e.target.value)
  };

  hideEditing = () => {
    this.props.push('/')
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
    todos: state.todos,
    text: state.inputText
  }
};

export default connect(mapStateToProps, { addTodo, newText, push })(Input)
