import { all, put, takeLatest } from 'redux-saga/effects';
import {
  changeTheme,
  CHANGE_REQUEST,
} from '../actions/home-action-type';

function* changeThemeHandler({ payload: data }) {
  yield put(
    changeTheme({
      themedata: data,
    }),
  );
}

function* Home() {
  yield all([
    takeLatest(CHANGE_REQUEST, changeThemeHandler),
  ]);
}

export default Home;
