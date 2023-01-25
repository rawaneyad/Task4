import { combineReducers } from "redux";
import usersReducer from "./users/UsersReducer";

const rootReducer = combineReducers({
    usersDataAPI: usersReducer
})

export default rootReducer