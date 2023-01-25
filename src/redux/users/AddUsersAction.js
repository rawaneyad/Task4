import { ADD_NEW_USER } from "./UsersTypes";

export const addUser = (user) => {
  return{
    type: ADD_NEW_USER,
    newUser: user,
  };
};
