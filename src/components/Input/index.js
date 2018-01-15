import React, {Component} from 'react'
import './index.scss'
import { addTodo, newText } from '../../actions/'
import { connect } from 'react-redux'
import history from '../../history'

class Input extends Component {
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
      }, () => {
        this.props.newText(this.state.value)
      });
    }
  };

  changeValue = (e) => {
    this.setState({
      value: e.target.value
    }, () => {
      this.props.newText(this.state.value)
    });
  };

  hideEditing = () => {
    history.push('/')
  };

  render() {
    return (
      <input
        className="create-todo"
        placeholder="What needs to be done?"
        onChange={ this.changeValue }
        onKeyPress={ this.addItem }
        value={ this.state.value }
        onFocus={ this.hideEditing }
      />
    );
  }
}

export default connect(null, { addTodo, newText })(Input)
