import { push } from 'react-router-redux';
import { setId } from './modal';

export function hideEditing() {
  return (dispatch) => {
    dispatch(push('/'));
    dispatch(setId(null));
  };
}
