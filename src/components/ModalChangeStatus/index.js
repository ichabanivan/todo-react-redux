import React, {Component} from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

import CONSTANTS from '../../constants/'
import { changeStatus } from '../../actions/todo';

class ModalChangeLabel extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    label: this.props.todo.status
  };

  handleHide = () => {
    this.props.goBack();
  };

  stopPropagation = (e) => {
    e.stopPropagation();
  };

  agree = (e) => {
    e.preventDefault();
    const todo = this.props.todo;
    todo.status = this.state.label;
    todo.date = `${new Date(Date.now())}`
    this.props.changeStatus(todo);
    this.handleHide();
  };

  disagree = (e) => {
    e.preventDefault();
    this.handleHide();
  };

  changeStatus = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  render() {
    const { status } = this.props.todo;
    const { label } = this.state;

    if (this.props.isVisible) {
      return (
        <div>
          <div className="modal-overlay" onClick={ this.handleHide }>
            <form className="modal" onClick={ this.stopPropagation }>
              <div className="modal-content">
                <h4> Do you want change label? </h4>

                <select defaultValue={ status } onChange={ this.changeStatus }>
                  <option value="new">new</option>
                  <option value="in progress">in progress</option>
                  <option value="review">review</option>
                  <option value="completed">completed</option>
                </select>
              </div>
              <div className="modal-footer">
                <button
                  className="modal-action"
                  onClick={ this.disagree }
                > Disagree </button>

                <button
                  className="modal-action"
                  onClick={ this.agree }
                  disabled={ label === status }
                > Agree </button>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return null
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.id || 0;
  let todo = state.todos.filter((el, index) => index === Number(id))[0];
  return {
    todo,
    isVisible: state.modals[CONSTANTS.MODAL_STATUS].isVisible
  }
};

export default connect(mapStateToProps, { goBack, changeStatus })(ModalChangeLabel)

