import React, {Component} from 'react';
import './index.scss';
import { updateText, removeTodo, toggleTodo, showModal } from '../../actions/'
import { connect } from 'react-redux'

class EditTodo extends Component {
  constructor(props) {
    super(props)
  }

  showModalLabel = () => {
    this.props.showModal({
      id: this.state.id,
      text: 'do you want change label?',
      type: 'label'
    })
  };

  componentWillMount() {
    let todo = this.props.todos.filter( todo => todo.id == this.props.match.params.id)[0];
    this.setState({...todo})
  }

  componentWillReceiveProps(nextProps) {
    let todo = nextProps.todos.filter( todo => todo.id == nextProps.match.params.id)[0];
    this.setState({...todo})
  }

  changeItem = (e) => {
    if (e.key === 'Enter') {
      let obj = {
        id: this.state.id,
        body: e.target.value
      }

      this.props.updateText(obj)
    }
  };

  changeInput = (e) => {
    this.setState({
      body: e.target.value
    })
  };

  render() {
    const {
      date,
      status,
      id
    } = this.state;

    return (
      <div className="todo__edit edit">
        <h2>Edit todo</h2>
        <div><span>id:</span>{id}</div>
        <input
          className="edit__field"
          onKeyPress={this.changeItem}
          value={this.state.body}
          onChange={this.changeInput}/>
        <p>{date}</p>
        <div
          onClick={this.showModalLabel}
          className="item__label"
        >
          { status }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.Todos
  }
};

export default connect(mapStateToProps, { updateText, removeTodo, toggleTodo, showModal })(EditTodo)
