import React, {Component} from 'react';
import './index.scss';
import { updateText, toggleTodo, showModal } from '../../actions/';
import { connect } from 'react-redux';

class EditTodo extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { body, date, status, id } = this.props.todo;

    this.setState({
      body,
      date,
      status,
      id
    })
  }

  componentWillReceiveProps(nextProps) {
    const { body, date, status, id } = nextProps.todo;

    this.setState({
      body,
      date,
      status,
      id
    })
  }

  showModalLabel = () => {
    this.props.showModal({
      id: this.props.match.params.id,
      text: 'do you want change label?',
      type: 'label'
    })
  };

  changeItem = (e) => {
    if (e.key === 'Enter') {
      let obj = {
        id: this.props.match.params.id,
        body: e.target.value
      };

      this.props.updateText(obj)
    }
  };

  changeInput = (e) => {
    this.setState({
      body: e.target.value
    })
  };

  render() {
    const { body, date, status, id } = this.state;

    return (
      <div className="todo__edit edit">
        <h2>Edit todo</h2>
        <p>
          <span>id:</span>{ id }
        </p>
        <input
          className="edit__field"
          onKeyPress={ this.changeItem }
          value={ body }
          onChange={ this.changeInput }/>
        <p>{ date }</p>
        <button
          onClick={ this.showModalLabel }
          className="item__label"
        >
          { status }
        </button>
      </div>
    );
  }
}

const editTodo = (todos, id) => {
  let todo = todos.filter((el, index) => id === index)[0];

  return {
    ...todo,
    id
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    todo: editTodo(state.todos, parseInt(ownProps.match.params.id))
  }
};

export default connect(mapStateToProps, { updateText, toggleTodo, showModal })(EditTodo)
