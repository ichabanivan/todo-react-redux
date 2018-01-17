import React, {Component} from 'react';
import './index.scss';
import { updateText, toggleTodo } from '../../actions/todo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux'

class EditTodo extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const {body, date, status, id} = this.props.todo;

    if (!body) {
      this.props.push(`/${this.props.match.params.filter}/${id}/error`)
    }

    this.setState({
      body,
      date,
      status,
      id
    })
  }

  componentWillReceiveProps(nextProps) {
    const {body, date, status, id} = nextProps.todo;

    this.setState({
      body,
      date,
      status,
      id
    })
  }

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
    const {body, date, status, id} = this.state;
    if (body) {
      return (
        <div className="todo__edit edit">
          <h2>Edit todo</h2>
          <p>
            <span>id:</span>{id}
          </p>
          <input
            className="edit__field"
            onKeyPress={this.changeItem}
            value={body}
            onChange={this.changeInput}/>
          <p>{date}</p>
          <Link
            to={`/${this.props.match.params.filter}/${id}/change-label`}
            className="item__label"
          >
            {status}
          </Link>
        </div>
      )
    } else {
      return null
    }
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

export default connect(mapStateToProps, { updateText, toggleTodo, push })(EditTodo)
