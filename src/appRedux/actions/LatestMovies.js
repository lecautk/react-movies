import {
  FETCH_MOVIES_LATEST
} from '../../constants/ActionTypes';

export const getLatMovies = () => {
  return {
    type: FETCH_MOVIES_LATEST
  }
}