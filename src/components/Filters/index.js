import React, {Component} from 'react';
import './index.scss';
import { filterAll, filterActive, filterCompleted } from '../../actions/'
import constants from '../../constants/'
import { connect } from 'react-redux'
import history from '../../history'

class Filters extends Component {
  constructor(props) {
    super(props)
  }

  filterAll = () => {
    history.push('/');
    this.props.filterAll();
  };

  filterActive = () => {
    history.push('/');
    this.props.filterActive()
  };

  filterCompleted = () => {
    history.push('/');
    this.props.filterCompleted()
  };

  render() {
    const {
      filter
    } = this.props;

    return (
      <div className="filters">
        <button
          className={ filter ===  constants.FILTER_ALL ? 'filter active' : 'filter'}
          onClick={ this.filterAll }
        >
          All
        </button>
        <button
          className={ filter ===  constants.FILTER_ACTIVE ? 'filter active' : 'filter'}
          onClick={ this.filterActive }
        >
          Active
        </button>
        <button
          className={ filter ===  constants.FILTER_COMPLETED ? 'filter active' : 'filter'}
          onClick={ this.filterCompleted }
        >
          Completed
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.Filters
  }
};

export default connect(mapStateToProps, { filterAll, filterActive, filterCompleted })(Filters)

