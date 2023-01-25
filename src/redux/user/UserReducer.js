import { CHANGE_INPUT } from "./UserTypes";
import { CLICK_ADD, CLICK_EDIT } from "../clickAdd&Edit/AddEditTypes";
import { ADD_NEW_USER, EDIT_USER } from "../users/UsersTypes";
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
    case ADD_NEW_USER:
      return {
        ...state,
        user: { id: "", first_name: "", last_name: "", avatar: "", email: "" },
      };
    case EDIT_USER:
      return {
        ...state,
        user: { id: "", first_name: "", last_name: "", avatar: "", email: "" },
      };
    default:
      return state;
  }
};

export default usersReducer;
