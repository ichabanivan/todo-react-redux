import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { changeStatus } from '../../actions/todo';

class ModalChangeStatus extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isVisible: this.props.path === '/change-status',
    label: this.props.todo.status
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      isVisible: nextProps.path === '/change-status'
    });
  }

  handleHide = () => {
    let id = this.props.match.params.id;
    this.props.push(`/${id}`);
  };

  stopPropagation = (e) => {
    e.stopPropagation();
  };

  agree = () => {
    const todo = this.props.todo;
    todo.status = this.state.label;
    this.props.changeStatus(todo);
    this.handleHide();
  };

  disagree = () => {
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

    if (this.state.isVisible) {
      return (
        <div>
          <div className="modal-overlay" onClick={ this.handleHide }>
            <div className="modal" onClick={ this.stopPropagation }>
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
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  let id = 0; // todo
  let todo = state.todos.filter((el, index) => index === parseInt(id))[0];
  return {
    todo,
    path: state.router.location.pathname
  }
};

export default connect(mapStateToProps, { push, changeStatus })(ModalChangeStatus)
