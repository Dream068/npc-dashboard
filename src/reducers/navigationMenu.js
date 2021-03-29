import { SET_NAVIGATION_DRAWER_DESKTOP_STATUS, SET_NAVIGATION_DRAWER_MOBILE_STATUS } from '../actions/navigation-action-type';

const initialState = {
  navigationDrawerDesktopStatus: true,
  navigationDrawerMobileStatus: false,
};

export default function navigationMenu(state = initialState, action) {
  switch (action.type) {
    case SET_NAVIGATION_DRAWER_DESKTOP_STATUS:
      return {
        ...state,
        navigationDrawerDesktopStatus: action.payload,
      };

    case SET_NAVIGATION_DRAWER_MOBILE_STATUS:
      return {
        ...state,
        navigationDrawerMobileStatus: action.payload,
      };

    default:
      return state;
  }
}
