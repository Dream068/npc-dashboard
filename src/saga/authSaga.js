import { call, put, takeEvery, select } from 'redux-saga/effects';
import { login } from '../services/auth.service';
import ActionType from '../actionTypes';
import { handleSuccess, handleError } from '../utils/toast';

function* loginSaga(action) {
  try {
    const result = yield call(login, action.payload);
    if (result.status === 200) {
      if (result.data.accessToken) {
        handleSuccess('Login successfully', 'Welcome to NPC.');
        yield put({
          type: ActionType.LOGIN_SUCCESS,
          payload: result.data,
        });
      } else  {
        handleError(result.data.message);
        yield put({ type: ActionType.LOGIN_FAILED });
      }
    } else {
      yield put({ type: ActionType.LOGIN_FAILED });
    }
  } catch (error) {
    yield put({
      type: ActionType.LOGIN_FAILED,
    });
  }
}

export default function* rootAuthSaga() {
  yield takeEvery(ActionType.LOGIN_LOAD, loginSaga);
}
