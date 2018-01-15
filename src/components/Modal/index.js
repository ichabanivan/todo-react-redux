import React, {Component} from 'react'
import { connect } from 'react-redux'
import './index.scss'
import { hideModal } from '../../actions/'

class Modal extends Component {
  constructor(props) {
    super(props)
  }

  handleHide = () => {
    this.props.hideModal()
  };

  stopPropagation = (e) => {
    e.stopPropagation()
  };

  render() {
    const {
      modal,
      text,
      label,
      del
    } = this.props;

    if (modal.isVisible) {
      return (
        <div>
          <div className="modal-overlay" onClick={ this.handleHide }>
            <div className="modal" onClick={ this.stopPropagation }>
              <div className="modal-content">
                <h4>{ text }</h4>
              </div>
              <div className="modal-footer">
                <button
                  className="modal-action"
                  onClick={ this.handleHide }>Disagree</button>
                <button
                  className="modal-action"
                  onClick={ modal.type === 'label' ? label : del }
                >
                  Agree
                </button>
              </div>
            </div>
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
    modal: state.Modal
  }
};

export default connect(mapStateToProps, { hideModal })(Modal)

