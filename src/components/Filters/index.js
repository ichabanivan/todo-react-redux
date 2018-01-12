import React, {Component} from 'react';
import './index.scss';
import { filterAll, filterActive, filterCompleted } from '../../actions/'
import constants from '../../constants/'
import { connect } from 'react-redux'

class Filters extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      filter,
      filterAll,
      filterActive,
      filterCompleted
    } = this.props;

    return (
      <div className="filters">
        <button
          className={ filter ===  constants.FILTER_ALL ? 'filter active' : 'filter'}
          onClick={ filterAll }
        >
          All
        </button>
        <button
          className={ filter ===  constants.FILTER_ACTIVE ? 'filter active' : 'filter'}
          onClick={ filterActive }
        >
          Active
        </button>
        <button
          className={ filter ===  constants.FILTER_COMPLETED ? 'filter active' : 'filter'}
          onClick={ filterCompleted }
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

