import {
  USER_ROLE,
} from '../actions/user-action-type';

const initialState = {
  userrole: 'admin',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_ROLE:
      return {
        ...state,
        userrole: action.payload,
      };
    default:
      return state;
  }
};

export default user;
