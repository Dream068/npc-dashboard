import ActionType from '../actionTypes';

const initialAuthState = {
  createUserloading: false,
  createUserSuccess: false,
  searchUserloading: false,
  users: [],
};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case ActionType.CREATE_USER_LOAD:
      return {
        ...state,
        createUserloading: true,
      };
    case ActionType.CREATE_USER_SUCCESS:
      return {
        ...state,
        createUserloading: false,
        createUserSuccess: true,
      };
    case ActionType.CREATE_USER_FAILED:
      return {
        ...state,
        createUserloading: false,
        createUserSuccess: false,
      };
    case ActionType.GET_USER_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        createUserSuccess: false,
      };
    case ActionType.GET_USER_LIST_FAILED:
      return {
        ...state,
        users: [],
        createUserSuccess: false,
      };
    case ActionType.GET_SEARCH_USER_LOAD:
      return {
        ...state,
        searchUserloading: true,
      };
    case ActionType.GET_SEARCH_USER_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        searchUserloading: false,
      };
    case ActionType.GET_SEARCH_USER_FAILED:
      return {
        ...state,
        users: [],
        searchUserloading: false,
      };
    default:
      return state;
  }
};
