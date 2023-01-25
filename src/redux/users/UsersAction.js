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

// export const fetchUsers = () => {
//   // fetch => fetching a resource from a server.
//   // fetch => returns a Promise that resolves to a Response object.
//     return async (dispatch) => {

//   const res = await fetch("https://reqres.in/api/users?page=1");
//   const data = await res.json();
//   console.log(data);
//   const users = await data.data;
//   dispatch(getUsers(users));
// }
// };
