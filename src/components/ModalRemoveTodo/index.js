import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todo';
import { goBack } from 'react-router-redux';
import { newText } from '../../actions/todo';

class ModalRemoveTodo extends Component {
  constructor(props) {
    super(props)
  }

  handleHide = () => {
    this.props.goBack();
  };

  stopPropagation = (e) => {
    e.stopPropagation();
  };

  agree = () => {
    const id = this.props.match.params.id;

    this.props.removeTodo(id);
    this.props.newText('');
    this.handleHide();
  };

  disagree = () => {
    this.handleHide()
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

const mapStateToProps = (state, ownProps) => ({filter: ownProps.match.params.filter});

export default connect(mapStateToProps, { goBack, removeTodo, newText })(ModalRemoveTodo)

