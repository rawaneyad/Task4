import { GET_USERS_DATA } from "./UsersTypes"

const initialState ={
    usersDataAPI: []
}

const usersReducer = (state = initialState, action) => {
    switch( action.type) {
        case GET_USERS_DATA : return {
            ...state,
            usersDataAPI: action.usersFromAPI,
          };
        default: return state
    }
}

export default usersReducer