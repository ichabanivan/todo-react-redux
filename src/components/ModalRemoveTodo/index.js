import React, { Component } from 'react';

import { connect } from 'react-redux';

import { newText, removeTodo } from '../../actions/todo';
import { hideModalAndRemoveTodo, hideModalRemoveTodo } from '../../actions/modal';

import CONSTANTS from '../../constants/';

class ModalRemoveTodo extends Component {
  constructor(props) {
    super(props)
  }

  stopPropagation = (e) => {
    e.stopPropagation();
  };

  agree = (e) => {
    e.preventDefault();
    const id = this.props.id;

    this.props.hideModalAndRemoveTodo(id);
  };

  disagree = (e) => {
    e.preventDefault();
    const id = this.props.id;

    this.props.hideModalRemoveTodo(id);
  };

  render() {
    const { isVisible } = this.props;

    if (isVisible) {
      return (
        <div>
          <div className="modal-overlay" onClick={ this.disagree }>
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

export default connect(mapStateToProps, { hideModalRemoveTodo, hideModalAndRemoveTodo, removeTodo, newText })(ModalRemoveTodo)
