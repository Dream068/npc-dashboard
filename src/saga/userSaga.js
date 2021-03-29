import {
  call, put, takeEvery,
} from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import {
  userpaginate, usersearch, userupdate,
} from '../services/user.service';
// eslint-disable-next-line import/no-cycle
import { register } from '../services/auth.service';
import ActionType from '../actionTypes';
import { handleSuccess, handleError } from '../utils/toast';

function* createUserSaga(action) {
  try {
    const result = yield call(register, action.payload);
    if (result.status === 200) {
      if (result.data.email) {
        handleSuccess('User created successfully');
        yield put({
          type: ActionType.CREATE_USER_SUCCESS,
        });
      } else {
        handleError(result.data.message);
        yield put({ type: ActionType.CREATE_USER_FAILED });
      }
    } else {
      yield put({ type: ActionType.CREATE_USER_FAILED });
    }
  } catch (error) {
    yield put({
      type: ActionType.CREATE_USER_FAILED,
    });
  }
}

function* getUserListSaga() {
  try {
    const result = yield call(userpaginate);
    if (result.status === 200) {
      yield put({
        type: ActionType.GET_USER_LIST_SUCCESS,
        payload: result.data,
      });
    } else {
      yield put({ type: ActionType.GET_USER_LIST_FAILED });
    }
  } catch (error) {
    yield put({
      type: ActionType.GET_USER_LIST_FAILED,
    });
  }
}

function* searchUserListSaga(action) {
  try {
    const result = yield call(usersearch, action.payload);
    if (result.status === 200) {
      yield put({
        type: ActionType.GET_SEARCH_USER_SUCCESS,
        payload: result.data,
      });
    } else {
      yield put({ type: ActionType.GET_SEARCH_USER_FAILED });
    }
  } catch (error) {
    yield put({
      type: ActionType.GET_SEARCH_USER_FAILED,
    });
  }
}

function* updateProfileSaga(action) {
  try {
    const result = yield call(userupdate, action.payload);
    if (result.status === 200) {
      handleSuccess('Profile updated successfully');
      yield put({
        type: ActionType.UPDATE_PROFILE_SUCCESS,
        payload: result.data,
      });
    } else {
      handleError(result.data.message);
      yield put({ type: ActionType.UPDATE_PROFILE_FAILED });
    }
  } catch (error) {
    yield put({
      type: ActionType.UPDATE_PROFILE_FAILED,
    });
  }
}

export default function* rootAuthSaga() {
  yield takeEvery(ActionType.CREATE_USER_LOAD, createUserSaga);
  yield takeEvery(ActionType.GET_USER_LIST_LOAD, getUserListSaga);
  yield takeEvery(ActionType.GET_SEARCH_USER_LOAD, searchUserListSaga);
  yield takeEvery(ActionType.UPDATE_PROFILE_LOAD, updateProfileSaga);
}
