import React, { useEffect, createContext, useReducer } from "react";
import reducer from "./Reducer";

// Create Context
export const UsersContext = createContext();

// Provider component
export const UsersProvider = ({ children }) => {
  //Initial State
  const initialState = {
    wantToEditI: false,
    user: {
      id: "",
      first_name: "",
      last_name: "",
      avatar: "",
      email: "",
    },
    usersDataAPI: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromAPI = await fetchUsers();
      dispatch({
        type: "GET_USERS_DATA",
        usersFromAPI: usersFromAPI,
      });
    };
    getUsers();
  }, []);

  // Fetch Users
  const fetchUsers = async () => {
    const res = await fetch("https://reqres.in/api/users?page=1");
    const data = await res.json();
    return data.data;
  };

  //Add User
  const addUser = (user) => {
    dispatch({
      type: "ADD_NEW_USER",
      newUser: user,
    });
  };

  // Edit User
  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      newUserData: user
    });
  };

  // change data in Add & Edit Form
  const onChange = ({ target }) => {
    const { name, value } = target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  };

  // on click Edit Button
  const onClickEdit = (data) => {
    dispatch({
      type: "CLICK_EDIT",
      data: data,
    });
  };

  // on click Add New User Button
  const onClickAdd = () => {
    dispatch({
      type: "CLICK_ADD",
    });
  };

  //Delete User
  const deleteUser = (id) => {
    dispatch({
      type: "DELETE_USER",
      userID: id,
    });
  };

  return (
    <UsersContext.Provider
      value={{
        wantToEditI: state.wantToEditI,
        user: state.user,
        usersDataAPI: state.usersDataAPI,
        addUser,
        deleteUser,
        onChange,
        onClickEdit,
        onClickAdd,
        editUser
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
