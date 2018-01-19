import React, {Component} from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { filterActive, filterCompleted, filterAll } from '../../actions/filter';
import CONSTANTS from '../../constants/';

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
          className={`filter ${filter === CONSTANTS.FILTER_ALL ? 'active' : ''}`}
          onClick={ filterAll }
        >
          All
        </button>
        <button
          className={`filter ${filter === CONSTANTS.FILTER_ACTIVE ? 'active' : ''}`}
          onClick={ filterActive }
        >
          Active
        </button>
        <button
          className={`filter ${filter === CONSTANTS.FILTER_COMPLETED ? 'active' : ''}`}
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
    filter: state.filter
  }
};

export default connect(mapStateToProps, { filterAll, filterActive, filterCompleted })(Filters)
