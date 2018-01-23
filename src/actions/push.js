import { push } from 'react-router-redux';

import { setId } from './modal';

export function pushTo(url, id) {
  return (dispatch) => {
    dispatch(push(url));
    dispatch(setId(id));
  };
}
