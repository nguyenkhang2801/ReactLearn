
import { all, call, put, takeLatest } from 'redux-saga/effects';

function* signInSaga(action) {
  const { id } = action.payload;
  const result = yield call(() => {
    return id === 1 ? { ...action.payload } : {};
  });
  if (result) {
    yield put({
      type: 'SIGN_IN_SUCCESS',
      payload: result,
    })
  }
}

function* rootSaga() {
  yield all([
    takeLatest('SIGN_IN', signInSaga),
  ]);
}

export default rootSaga;