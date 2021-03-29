import { call, put, takeEvery } from 'redux-saga/effects';
import ActionType from '../actionTypes';
import { authService } from '../services/micro.service';

function* getAuthService() {
  const result = yield call(authService);
  if (result.status === 200) {
    yield put({
      type: ActionType.GET_AUTH_SERVICE_SUCCESS,
      payload: result.data,
    });
  } else {
    yield put({ type: ActionType.GET_AUTH_SERVICE_FAIL });
  }
}

export default function* rootMicroSaga() {
  yield takeEvery(ActionType.GET_AUTH_SERVICE, getAuthService);
}
