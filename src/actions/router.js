import {push} from 'react-router-redux';

export function pushLink(url) {
  return (dispatch) => {
    dispatch(push(url));
  };
}
