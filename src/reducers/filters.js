import ACTIONS from '../constants/'

let initialState = ACTIONS.FILTER_ALL;

export default function Filters(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FILTER_ALL:
      return ACTIONS.FILTER_ALL;
    case ACTIONS.FILTER_ACTIVE:
      return ACTIONS.FILTER_ACTIVE;
    case ACTIONS.FILTER_COMPLETED:
      return ACTIONS.FILTER_COMPLETED;
    default:
      return state;
  }
}
