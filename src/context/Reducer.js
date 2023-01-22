export default function reducer(state, action) {
  switch (action.type) {
    case "GET_USERS_DATA": {
      return {
        ...state,
        usersDataAPI: action.usersFromAPI,
      };
    }
    case "ADD_NEW_USER": {
      return {
        ...state,
        usersDataAPI: [
          ...state.usersDataAPI,
          { ...action.newUser, id: Math.random() },
        ],
        user: { id: "", first_name: "", last_name: "", avatar: "", email: "" },
      };
    }
    case "DELETE_USER": {
      return {
        ...state,
        usersDataAPI: [
          ...state.usersDataAPI.filter((user) => user.id !== action.userID),
        ],
      };
    }
    case "EDIT_USER": {
      const index = state.usersDataAPI.findIndex(item =>
        item.id === action.newUserData.id
      );
      state.usersDataAPI[index] = action.newUserData;
      return {
        ...state,
      wantToEditI: false,
      user: { id: "", first_name: "", last_name: "", avatar: "", email: "" },
      };
      }
    case "CHANGE_INPUT": {
      return {
        ...state,
        user: { ...state.user, [action.name]: action.value },
      };
    }
    case "CLICK_ADD": {
      return {
        ...state,
        wantToEditI: false,
        user: { id: "", first_name: "", last_name: "", avatar: "", email: "" },
      };
    }
    case "CLICK_EDIT": {
      return {
        ...state,
        wantToEditI: true,
        user: action.data,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}