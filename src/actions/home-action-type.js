import { createAction } from 'redux-actions';

export const CHANGE_REQUEST = 'CHANGE_REQUEST';
export const changeRequest = createAction(CHANGE_REQUEST);

export const CHANGE_THEME = 'CHANGE_THEME';
export const changeTheme = createAction(CHANGE_THEME);
