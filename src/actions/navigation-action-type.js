import { createAction } from 'redux-actions';

export const SET_NAVIGATION_DRAWER_DESKTOP_STATUS = 'SET_NAVIGATION_DRAWER_DESKTOP_STATUS';
export const setNavigationDrawerDesktopStatus = createAction(SET_NAVIGATION_DRAWER_DESKTOP_STATUS);

export const SET_NAVIGATION_DRAWER_MOBILE_STATUS = 'SET_NAVIGATION_DRAWER_MOBILE_STATUS';
export const setNavigationDrawerMobileStatus = createAction(SET_NAVIGATION_DRAWER_MOBILE_STATUS);
