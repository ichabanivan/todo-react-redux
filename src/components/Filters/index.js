import React, {Component} from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

class Filters extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="filters">
        <NavLink
          to="/all"
          className="filter"
          activeClassName="active"
        >
          All
        </NavLink>
        <NavLink
          to="/active"
          className="filter"
          activeClassName="active"
        >
          Active
        </NavLink>
        <NavLink
          to="/completed"
          className="filter"
          activeClassName="active"
        >
          Completed
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  router: state.router
});

export default connect(mapStateToProps, null)(Filters)

