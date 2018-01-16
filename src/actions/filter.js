import ACTIONS from '../constants/';

export const filterAll = () => ({
  type: ACTIONS.FILTER_ALL
});

export const filterActive = () => ({
  type: ACTIONS.FILTER_ACTIVE
});

export const filterCompleted = () => ({
  type: ACTIONS.FILTER_COMPLETED
});
