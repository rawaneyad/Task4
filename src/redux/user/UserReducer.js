import { CHANGE_INPUT } from "./UserTypes";
import { CLICK_ADD, CLICK_EDIT } from "../addAndEdit/AddEditTypes";

const initialState = {
  user: {
    id: "",
    first_name: "",
    last_name: "",
    avatar: "",
    email: "",
  },
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        user: { ...state.user, [action.name]: action.value },
      };
    case CLICK_ADD:
      return {
        ...state,

        user: { id: "", first_name: "", last_name: "", avatar: "", email: "" },
      };
    case CLICK_EDIT:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};

export default usersReducer;
