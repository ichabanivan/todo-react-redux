import React, { Component } from 'react';

import { connect } from 'react-redux';

import { setId } from '../../actions/modal';
import { chooseModal } from '../../actions/modal';

import Input from '../Input/';
import TodoList from '../TodoList/';

class Todos extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {
      chooseModal,
      match
    } = this.props;

    chooseModal(match.params.modal, Number(match.params.id))
  }

  componentWillMount() {
    const { match, setId } = this.props;

    setId(Number(match.params.id));

    const {
      todo
    } = this.props;

    if (todo) {
      this.setState({
        body: todo.body
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.todo) {
      this.setState({
        body: nextProps.todo.body
      })
    }

    // If url was changed
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.chooseModal(nextProps.match.params.modal, Number(nextProps.match.params.id))
    }
  }

  render() {

    const { id } = this.props.match.params;

    return (
      <div>
        <Input id={ id } />
        <TodoList id={ id } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.id
  }
};

export default connect(mapStateToProps, { chooseModal, setId })(Todos)
