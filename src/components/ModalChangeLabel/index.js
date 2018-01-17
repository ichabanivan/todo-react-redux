import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { toggleTodo } from '../../actions/todo';

class ModalChangeLabel extends Component {
  constructor(props) {
    super(props);
  }

  handleHide = () => {
    this.props.push(`/${this.props.match.params.filter}/${this.props.match.params.id}`);
  };

  stopPropagation = (e) => {
    e.stopPropagation();
  };

  agree = () => {
    this.handleHide();
    this.props.toggleTodo(this.props.match.params.id);
  };

  disagree = () => {
    this.handleHide();
  };

  render() {
    return (
      <div>
        <div className="modal-overlay" onClick={ this.handleHide }>
          <div className="modal" onClick={ this.stopPropagation }>
            <div className="modal-content">
              <h4> Do you want remove this todo? </h4>
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
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { push, toggleTodo })(ModalChangeLabel)

