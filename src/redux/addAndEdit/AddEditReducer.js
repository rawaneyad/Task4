import { CLICK_ADD, CLICK_EDIT } from "./AddEditTypes";

const initialState = {
  wantToEditI: false,
};

const addEditReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_ADD:
      return {
        ...state,
        wantToEditI: false,
      };
    case CLICK_EDIT:
      return {
        ...state,
        wantToEditI: true,
      };
    default:
      return state;
  }
};
export default addEditReducer;
