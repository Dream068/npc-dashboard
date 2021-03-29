import ActionType from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const getLogList = (payload) => ({
  type: ActionType.GET_LOG_LIST_LOAD,
  payload,
});
