import { SET_OPEN_DIALOGUE } from '../actions/dialogue-action-type';

const initialState = {
  isOpenDialogue: false,
};

export default function dialogue(state = initialState, action) {
  switch (action.type) {
    case SET_OPEN_DIALOGUE:
      return {
        ...state,
        isOpenDialogue: true,
      };
    default:
      return state;
  }
}
