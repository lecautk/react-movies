import {
  FETCH_MOVIES_LATEST,
  FETCH_MOVIES_LATEST_SUCCESS,
  FETCH_MOVIES_LATEST_FAILURE
} from '../../constants/ActionTypes';

// sasa effects
import { put, takeEvery, all, fork } from 'redux-saga/effects';
import { API_KEY, BASE_API_URL } from '../../config/Config';

const fetchDataAPI = function* fetchDataAPI() {
  try {
    const response = yield fetch(`${BASE_API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US`);
    const data = yield response.json();
    yield put({ type: FETCH_MOVIES_LATEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_MOVIES_LATEST_FAILURE, payload: error });
  }
}

export const watchFetchDataAPI = function* watchFetchDataAPI() {
  yield takeEvery(FETCH_MOVIES_LATEST, fetchDataAPI);
}

export default function* rootSaga() {
  yield all([fork(watchFetchDataAPI)]);
}