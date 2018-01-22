import React, { Component } from 'react';
import { connect } from 'react-redux';

import { pushLink } from '../../actions/router';
import { removeTodo, actionRemoveTodo } from '../../actions/todo';
import { newText } from '../../actions/todo';

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

    this.props.actionRemoveTodo(id);
  };

  disagree = (e) => {
    e.preventDefault();

    this.props.pushLink('/');
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

export default connect(mapStateToProps, { actionRemoveTodo, pushLink, removeTodo, newText })(ModalRemoveTodo)
