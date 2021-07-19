import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
import { all, call, put, takeLatest } from 'redux-saga/effects';

function* signInSaga(action) {
  const { id } = action.payload;
  const result = yield call(() => {
    return id === 1 ? { ...action.payload } : {};
  });

  yield put({
    type: 'SIGN_IN_SUCCESS',
    payload: result,
  })
}

function* rootSaga() {
  yield all([
    takeLatest('SIGN_IN', signInSaga),
  ]);
}

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

export default store;