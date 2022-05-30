import { all } from 'redux-saga/effects';
import LatestSaga from './LatestSaga';
import MovieDetailsSaga from './MovieDetailsSaga';
import MovieSearchSaga from './MovieSearchSaga';

export default function* rootSaga() {
  yield all([
    LatestSaga(),
    MovieDetailsSaga(),
    MovieSearchSaga(),
  ]);
}
