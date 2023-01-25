import { GET_USERS_DATA, DELETE_USER } from "./UsersTypes"

const initialState ={
    usersDataAPI: []
}

const usersReducer = (state = initialState, action) => {
    switch( action.type) {
        case GET_USERS_DATA : return {
            ...state,
            usersDataAPI: action.usersFromAPI,
          };
          case DELETE_USER:  return {
              ...state,
              usersDataAPI: [
                ...state.usersDataAPI.filter((user) => user.id !== action.userID),
              ],
            };
    
        default: return state
    }
}

export default usersReducer