import {
  FETCH_MOVIES_SEARCH,
  FETCH_MOVIES_SEARCH_SUCCESS,
  FETCH_MOVIES_SEARCH_FAILURE
} from '../../constants/ActionTypes';

const INITSTATE = {
  data: [],
  loading: false,
  error: false,
  errorMessage: '',
}

const reducer = (state = INITSTATE, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SEARCH:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      }
    case FETCH_MOVIES_SEARCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
        errorMessage: '',
      }
    case FETCH_MOVIES_SEARCH_FAILURE:
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