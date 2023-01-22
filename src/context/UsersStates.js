import React, {
  useEffect,
  useState,
  createContext,
  useMemo,
  useCallback,
} from "react";

// Create Context
export const UsersContext = createContext();

// Provider component
export const UsersProvider = ({ children }) => {
  //Initial State
  const initialState = [];

  const [users, setUsers] = useState(initialState);
  const [user, setUser] = useState({
    id: "",
    first_name: "",
    last_name: "",
    avatar: "",
    email: "",
  });
  
  const [wantToEditI, setWantToEditI] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromAPI = await fetchUsers();
      setUsers(usersFromAPI);
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
    setUsers([...users, { ...user, id: Math.random() }]);
    setUser({ ...user, first_name: "", last_name: "", avatar: "", email: "" });
  };

  // Edit User
  const editUser = (user) => {
    setUsers(
      users.map((item) =>
        item.id === user.id
          ? {
              ...item,
              first_name: user.first_name,
              last_name: user.last_name,
              avatar: user.avatar,
              email: user.email,
            }
          : item
      )
    );
    setUser({ ...user, first_name: "", last_name: "", avatar: "", email: "" });
  };

  // change data in Add & Edit Form
  const onChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  // on click Edit Button
  const onClickEdit = (data) => {
    setWantToEditI(true);
    const { id, first_name, last_name, avatar, email } = data;
    setUser({ id, first_name, last_name, avatar, email });
  };

  // on click Add New User Button
  const onClickAdd = () => {
    setWantToEditI(false);
    setUser({ ...user, first_name: "", last_name: "", avatar: "", email: "" });
  };

  //Delete User
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const contextValue = useMemo(
    () => ({
      users,
      user,
      wantToEditI,
      onClickAdd,
      deleteUser,
      onClickEdit,
      onChange,
      editUser,
      addUser,
    }),
    [
      users,
      user,
      wantToEditI,
      onClickAdd,
      deleteUser,
      onClickEdit,
      onChange,
      editUser,
      addUser,
    ]
  );
  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
};
