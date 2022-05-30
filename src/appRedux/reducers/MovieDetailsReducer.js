import {
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAILURE,
  FETCH_MOVIE_DETAILS
} from '../../constants/ActionTypes'

const INITSTATE = {
  data: {},
  loading: false,
  error: false,
  errorMessage: '',
}

const reducer = (state = INITSTATE, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      }
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
        errorMessage: '',
      }
    case FETCH_MOVIE_DETAILS_FAILURE:
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