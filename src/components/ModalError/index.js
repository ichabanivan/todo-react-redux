import React, {Component} from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

import CONSTANTS from '../../constants/';

class ModalError extends Component {
  constructor(props) {
    super(props);
  }

  handleHide = () => {
    this.props.goBack();
  };

  stopPropagation = (e) => {
    e.stopPropagation();
  };

  agree = (e) => {
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
                <h4> Error </h4>
              </div>
              <div className="modal-footer">
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
    isVisible: state.modals[CONSTANTS.MODAL_ERROR].isVisible
  }
};

export default connect(mapStateToProps, { goBack })(ModalError);
