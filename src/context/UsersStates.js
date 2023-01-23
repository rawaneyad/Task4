import React, { useEffect, createContext, useReducer } from "react";
import reducer from "./Reducer";

// Context API => solve prop drilling problem
// Create Context Object
export const UsersContext = createContext();

// Provider component
export const UsersProvider = ({ children }) => {
  // Initial State with default value
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

// useReducer => manage state
// useReducer => accepts two arguments function reducer , Initial State.
// useReducer => returns the current state a dispatch method.
const [state, dispatch] = useReducer(reducer, initialState);

// useEffect => Runs only on the first render because I use empty array
useEffect(() => {
  const getUsers = async () => {
    const usersFromAPI = await fetchUsers();
    // dispatch => update the state to a different value and re-render.
    // dispatch => pass argument the action.
      dispatch({
        type: "GET_USERS_DATA",
        usersFromAPI: usersFromAPI,
      });
    };
    getUsers();
  }, []);

  // Fetch Users
  const fetchUsers = async () => {
    // fetch => fetching a resource from a server.
    // fetch => returns a Promise that resolves to a Response object.
    const res = await fetch("https://reqres.in/api/users?page=1");
    const data = await res.json();
    return data.data;
  };

  // Add User
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

  // Change data in Add & Edit Form
  const onChange = ({ target }) => {
    const { name, value } = target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  };

  // On click Edit Button
  const onClickEdit = (data) => {
    dispatch({
      type: "CLICK_EDIT",
      data: data,
    });
  };

  // On click Add New User Button
  const onClickAdd = () => {
    dispatch({
      type: "CLICK_ADD",
    });
  };

  // Delete User
  const deleteUser = (id) => {
    dispatch({
      type: "DELETE_USER",
      userID: id,
    });
  };

  return (
    // Provider => to wrap the tree of components that need the state Context.
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
