import ActionType from '../actionTypes';

export const login = (payload) => ({
  type: ActionType.LOGIN_LOAD,
  payload,
});