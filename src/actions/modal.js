import ACTIONS from '../constants/';

export const showModal = (obj) => {
  let modal = {
    id: obj.id,
    isVisible: true,
    text: obj.text,
    type: obj.type
  };

  return {
    type: ACTIONS.SHOW_MODAL,
    modal
  }
};

export const hideModal = () => ({
  type: ACTIONS.HIDE_MODAL
});
