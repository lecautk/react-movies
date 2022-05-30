import {
  SHOW_POPUP_MESSAGE,
  HIDE_POPUP_MESSAGE
} from '../../constants/ActionTypes';

export const showPopupMessage = (content) => ({
  type: SHOW_POPUP_MESSAGE,
  payload: content
});

export const hidePopupMessage = () => ({
  type: HIDE_POPUP_MESSAGE,
  payload: null
});