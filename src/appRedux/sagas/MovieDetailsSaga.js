import {
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAILURE
} from '../../constants/ActionTypes';

// sasa effects
import { put, takeEvery, all, fork } from 'redux-saga/effects';
import { API_KEY, BASE_API_URL } from '../../config/Config';

const fetchDataAPI = function* fetchDataAPI(action) {
  const { id } = action.payload;
  try {
    const response = yield fetch(`${BASE_API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`);
    const data = yield response.json();
    yield put({ type: FETCH_MOVIE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_MOVIE_DETAILS_FAILURE, payload: error });
  }
}

export const watchFetchDataAPI = function* watchFetchDataAPI() {
  yield takeEvery(FETCH_MOVIE_DETAILS, fetchDataAPI);
}

export default function* rootSaga() {
  yield all([fork(watchFetchDataAPI)]);
}
