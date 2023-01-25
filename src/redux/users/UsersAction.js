import { GET_USERS_DATA } from "./UsersTypes";

export const getUsers = (usersDataAPI) => {
  return {
    type: GET_USERS_DATA,
    usersFromAPI: usersDataAPI,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    fetch("https://reqres.in/api/users?page=1")
      .then(res => res.json())
      .then(data => {
        const users = data.data;
        dispatch(getUsers(users));
      });
  };
};
