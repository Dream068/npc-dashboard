import { all } from 'redux-saga/effects';
import home from './home';
import authSaga from './authSaga';
import microSaga from './microSaga';

const sagas = function* sagas() {
  yield all([
    home(),
    authSaga(),
    microSaga(),
  ]);
};

export default sagas;
