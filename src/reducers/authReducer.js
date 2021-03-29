import ActionType from '../actionTypes';

const initialAuthState = {
  user: {},
  isAuthorized: false,
  authToken: undefined,
  loading: false,
};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_LOAD:
      return {
        ...state,
        loading: true,
      };
    case ActionType.LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        isAuthorized: true,
        loading: false,
      };
    }
    case ActionType.LOGIN_FAILED:
      return {
        ...state,
        user: {},
        isAuthorized: false,
        loading: false,
      };
    default:
      return state;
  }
};
