import { combineReducers } from "redux";
import usersReducer from "./users/UsersReducer";
import userReducer from "./user/UserReducer";
import addEditReducer from "./clickAdd&Edit/AddEditReducer";

const rootReducer = combineReducers({
    usersDataAPI: usersReducer,
    user: userReducer,
    wantToEditI: addEditReducer
})

export default rootReducer