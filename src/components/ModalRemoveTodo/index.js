import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todo';
import { push } from 'react-router-redux'

class ModalRemoveTodo extends Component {
  constructor(props) {
    super(props)
  }

  handleHide = () => {
    this.props.push(`/${this.props.match.params.filter}/${this.props.match.params.id}`)
  };

  stopPropagation = (e) => {
    e.stopPropagation()
  };

  agree = () => {
    this.props.removeTodo(this.props.match.params.id)
    this.props.push(`/${this.props.filter}`)
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

export default connect(mapStateToProps, { push, removeTodo })(ModalRemoveTodo)

