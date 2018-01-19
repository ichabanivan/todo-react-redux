import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { removeTodo } from '../../actions/todo';
import { newText } from '../../actions/todo';

import CONSTANTS from '../../constants/'

class ModalRemoveTodo extends Component {
  constructor(props) {
    super(props)
  }

  handleHide = () => {
    this.props.push('/');
  };

  stopPropagation = (e) => {
    e.stopPropagation();
  };

  agree = (e) => {
    e.preventDefault();
    const id = this.props.id;

    this.props.removeTodo(id);
    this.props.newText('');
    this.handleHide();
  };

  disagree = (e) => {
    e.preventDefault();

    this.handleHide();
  };

  render() {
    if (this.props.isVisible) {
      return (
        <div>
          <div className="modal-overlay" onClick={ this.handleHide }>
            <form className="modal" onClick={ this.stopPropagation }>
              <div className="modal-content">
                <h4> Do you want to remove this todo? </h4>
              </div>
              <div className="modal-footer">
                <button
                  className="modal-action"
                  onClick={ this.disagree }
                > Disagree </button>
                <button
                  className="modal-action"
                  onClick={ this.agree }
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

const mapStateToProps = (state) => {
  return {
    isVisible: state.modals[CONSTANTS.MODAL_REMOVE].isVisible
  }
};

export default connect(mapStateToProps, { push, removeTodo, newText })(ModalRemoveTodo)
