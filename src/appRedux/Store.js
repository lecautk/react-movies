import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import createRootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
export default function configureStore() {
  const store = createStore(
    createRootReducer(),
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga);
  return store;
}

