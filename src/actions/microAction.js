import ActionType from '../actionTypes';

export const getAuthService = (payload) => ({
  type: ActionType.GET_AUTH_SERVICE,
  payload,
});