import React, {Component} from 'react';

import './index.scss';

import { filterAll, filterActive, filterCompleted } from 'actions/'
import Actions from 'constants/Actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {filter: state.Filters}
};

@connect(mapStateToProps, { filterAll, filterActive, filterCompleted })
export default class Filters extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="filters">
        <button className={this.props.filter ===  Actions.FILTER_ALL ? 'filter active' : 'filter'} onClick={ this.props.filterAll }>All</button>
        <button className={this.props.filter ===  Actions.FILTER_ACTIVE ? 'filter active' : 'filter'} onClick={ this.props.filterActive }>Active</button>
        <button className={this.props.filter ===  Actions.FILTER_COMPLETED ? 'filter active' : 'filter'} onClick={ this.props.filterCompleted }>Completed</button>
      </div>
    );
  }
}
