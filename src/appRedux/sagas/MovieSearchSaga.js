import {
  FETCH_MOVIES_SEARCH,
  FETCH_MOVIES_SEARCH_SUCCESS,
  FETCH_MOVIES_SEARCH_FAILURE
} from '../../constants/ActionTypes';

// sasa effects
import { put, takeEvery, all, fork } from 'redux-saga/effects';
import { API_KEY, BASE_API_URL } from '../../config/Config';

const fetchDataAPI = function* fetchDataAPI(action) {
  const { keyword } = action.payload;
  try {
    const response = yield fetch(`${BASE_API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}`);
    const data = yield response.json();
    yield put({ type: FETCH_MOVIES_SEARCH_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_MOVIES_SEARCH_FAILURE, payload: error });
  }
}

export const watchFetchDataAPI = function* watchFetchDataAPI() {
  yield takeEvery(FETCH_MOVIES_SEARCH, fetchDataAPI);
}

export default function* rootSaga() {
  yield all([fork(watchFetchDataAPI)]);
}