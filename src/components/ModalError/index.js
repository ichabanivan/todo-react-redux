import React, {Component} from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

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

  agree = () => {
    this.handleHide();
  };

  render() {
    return (
      <div>
        <div className="modal-overlay" onClick={ this.handleHide }>
          <div className="modal" onClick={ this.stopPropagation }>
            <div className="modal-content">
              <h4> Error </h4>
            </div>
            <div className="modal-footer">
              <button
                className="modal-action"
                onClick={ this.agree }
              > Agree </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ filter: ownProps.match.params.filter });

export default connect(mapStateToProps, { goBack })(ModalError);
