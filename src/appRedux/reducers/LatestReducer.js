import {
  FETCH_MOVIES_LATEST,
  FETCH_MOVIES_LATEST_SUCCESS,
  FETCH_MOVIES_LATEST_FAILURE
} from '../../constants/ActionTypes';

const INITSTATE = {
  data: [],
  loading: false,
  error: false,
  errorMessage: '',
}

const reducer = (state = INITSTATE, action) => {
  switch (action.type) {
    case FETCH_MOVIES_LATEST:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      }
    case FETCH_MOVIES_LATEST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
        errorMessage: '',
      }
    case FETCH_MOVIES_LATEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      }
    default:
      return state
    }
}

export default reducer;