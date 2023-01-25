import { CLICK_ADD, CLICK_EDIT } from "./AddEditTypes";
import { EDIT_USER } from "../users/UsersTypes"

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
      case EDIT_USER:
        return {
          ...state,
          wantToEditI: false,
        };
    default:
      return state;
  }
};
export default addEditReducer;
