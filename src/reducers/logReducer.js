import ActionType from '../actionTypes';

const initialAuthState = {
  logData: [],
};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case ActionType.GET_LOG_LIST_SUCCESS:
      return {
        ...state,
        logData: action.payload,
      };
    case ActionType.GET_LOG_LIST_FAILED:
      return {
        ...state,
        logData: [],
      };
    default:
      return state;
  }
};
