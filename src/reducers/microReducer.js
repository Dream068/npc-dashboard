import ActionType from '../actionTypes';

const initialMicroState = {
  authIp: '',
  authPort: '',
  loading: false,
};

const user = (state = initialMicroState, action) => {
  switch (action.type) {
    case ActionType.GET_AUTH_SERVICE_SUCCESS:
      return {
        ...state,
        authIp: action.payload.ip,
        authPort: action.payload.port
      };
    case ActionType.GET_AUTH_SERVICE_FAIL:
      return {
        ...state,
        authIp: '',
        authPort: ''
      };
    default:
      return state;
  }
};

export default user;
