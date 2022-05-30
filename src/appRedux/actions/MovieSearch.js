import {
  FETCH_MOVIES_SEARCH
} from '../../constants/ActionTypes';

export const getMovieSearch = (keyword) => {
  console.log('keyword', keyword);
  return {
    type: FETCH_MOVIES_SEARCH,
    payload: { keyword }
  }
}