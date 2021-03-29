import {
  call, put, takeEvery,
} from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import {
  logalllist,
} from '../services/log.service';
// eslint-disable-next-line import/no-cycle
import ActionType from '../actionTypes';
import { handleSuccess, handleError } from '../utils/toast';

function* getLogListSaga() {
  try {
    const result = yield call(logalllist);
    if (result.status === 200) {
      yield put({
        type: ActionType.GET_LOG_LIST_SUCCESS,
        payload: result.data,
      });
    } else {
      yield put({ type: ActionType.GET_LOG_LIST_FAILED });
    }
  } catch (error) {
    yield put({
      type: ActionType.GET_LOG_LIST_FAILED,
    });
  }
}

export default function* rootAuthSaga() {
  yield takeEvery(ActionType.GET_LOG_LIST_LOAD, getLogListSaga);
}
