import { EDIT_USER } from "./UsersTypes";

export const editUser = (user) => {
  return{
    type: EDIT_USER,
    newUserData: user,
  };
};
