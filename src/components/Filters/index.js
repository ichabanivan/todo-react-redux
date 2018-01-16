import React, {Component} from 'react';
import './index.scss';
import { filterAll, filterActive, filterCompleted } from '../../actions/filter';
import constants from '../../constants/';
import { connect } from 'react-redux';

import {Link} from 'react-router-dom'

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
        <Link
          to="/all"
          className={`filter ${ filter === constants.FILTER_ALL ? 'active' : ''}`}
          onClick={ filterAll }
        >
          All
        </Link>
        <Link
          to="/active"
          className={`filter ${filter === constants.FILTER_ACTIVE ? 'active' : ''}`}
          onClick={ filterActive }
        >
          Active
        </Link>
        <Link
          to="/completed"
          className={`filter ${filter === constants.FILTER_COMPLETED ? 'active' : ''}`}
          onClick={ filterCompleted }
        >
          Completed
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.filter
});

export default connect(mapStateToProps, { filterAll, filterActive, filterCompleted })(Filters)

