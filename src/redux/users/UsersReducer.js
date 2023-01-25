import {
  GET_USERS_DATA,
  ADD_NEW_USER,
  DELETE_USER,
  EDIT_USER,
} from "./UsersTypes";

const initialState = {
  usersDataAPI: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_DATA:
      return {
        ...state,
        usersDataAPI: action.usersFromAPI,
      };
    case ADD_NEW_USER:
      return {
        ...state,
        usersDataAPI: [
          ...state.usersDataAPI,
          { ...action.newUser, id: Math.random() },
        ],
      };
    case EDIT_USER:
      const index = state.usersDataAPI.findIndex(
        (item) => item.id === action.newUserData.id
      );
      state.usersDataAPI[index] = action.newUserData;
    case DELETE_USER:
      return {
        ...state,
        usersDataAPI: [
          ...state.usersDataAPI.filter((user) => user.id !== action.userID),
        ],
      };
    default:
      return state;
  }
};

export default usersReducer;
