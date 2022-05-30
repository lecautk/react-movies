
import {
  FETCH_MOVIE_DETAILS
} from '../../constants/ActionTypes';

export const getMovieDetails = (id) => {
  return {
    type: FETCH_MOVIE_DETAILS,
    payload: {
      id
    }
  }
}