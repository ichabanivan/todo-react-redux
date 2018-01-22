import { push } from 'react-router-redux'

import store from '../store/'

export const goTo = (url) => {
  store.dispatch(push(url))
  return {
    type: "REDIRECT",
    url
  }
};
