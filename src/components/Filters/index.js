import React, {Component} from 'react';
import './index.scss';
import { filterAll, filterActive, filterCompleted } from '../../actions/index'
import constants from '../../constants/index'
import { connect } from 'react-redux'

class Filters extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="filters">
        <button className={this.props.filter ===  constants.FILTER_ALL ? 'filter active' : 'filter'} onClick={ this.props.filterAll }>All</button>
        <button className={this.props.filter ===  constants.FILTER_ACTIVE ? 'filter active' : 'filter'} onClick={ this.props.filterActive }>Active</button>
        <button className={this.props.filter ===  constants.FILTER_COMPLETED ? 'filter active' : 'filter'} onClick={ this.props.filterCompleted }>Completed</button>
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

