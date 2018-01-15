import CONSTANTS from '../constants/'

let initialState = CONSTANTS.FILTER_ALL;

export default function Filters(state = initialState, action) {
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
