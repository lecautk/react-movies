import {
  SHOW_POPUP_MESSAGE,
  HIDE_POPUP_MESSAGE
} from '../../constants/ActionTypes';

const INITIAL_STATE = {
  content: null,
  show: false,
  timeout: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_POPUP_MESSAGE:
      return {
        ...state,
        content: action.payload,
        show: true,
        timeout: action.timeout
      }
    case HIDE_POPUP_MESSAGE:
      return {
        ...state,
        content: null,
        show: false,
        timeout: null
      }
    default:
      return state
  }
}

export default reducer;
