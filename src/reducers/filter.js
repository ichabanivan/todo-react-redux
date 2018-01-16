import CONSTANTS from '../constants/';
import history from '../history';

let initialFilter;
let routeFilter = history.location.pathname.split('/')[1];

if (routeFilter === 'active') {
  initialFilter = CONSTANTS.FILTER_ACTIVE
} else if (routeFilter === 'completed') {
  initialFilter = CONSTANTS.FILTER_COMPLETED
} else {
  initialFilter = CONSTANTS.FILTER_ALL
}

export default function filter(state = initialFilter, action) {
  switch (action.type) {
    case CONSTANTS.FILTER_ALL:
      return CONSTANTS.FILTER_ALL;

    case CONSTANTS.FILTER_ACTIVE:
      return CONSTANTS.FILTER_ACTIVE;

    case CONSTANTS.FILTER_COMPLETED:
      return CONSTANTS.FILTER_COMPLETED;

    default:
      return state;
  }
}
