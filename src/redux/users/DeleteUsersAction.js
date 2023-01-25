import { DELETE_USER } from "./UsersTypes";

export const deleteUser = (id) => {
  return{
    type: DELETE_USER,
    userID: id,
  };
};
