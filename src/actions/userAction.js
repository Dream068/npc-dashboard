import ActionType from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const createUser = (payload) => ({
  type: ActionType.CREATE_USER_LOAD,
  payload,
});

export const getUserList = (payload) => ({
  type: ActionType.GET_USER_LIST_LOAD,
  payload,
});

export const searchUserList = (payload) => ({
  type: ActionType.GET_SEARCH_USER_LOAD,
  payload,
});

export const updateProfile = (payload) => ({
  type: ActionType.UPDATE_PROFILE_LOAD,
  payload,
});
