import Table from "./components/Table";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import UserForm from "./components/UserForm";
function App() {
  const [users, setUsers] = useState([]);
  const [wantToEditI, setWantToEditI] = useState(false);
  const [user, setUser] = useState({
    id: "",
    first_name: "",
    last_name: "",
    avatar: "",
    email: "",
  });
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

  //Delete User
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
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

  return (
    <div className="container">
      <h1>User Table</h1>
      <UserForm
        wantToEditI={wantToEditI}
        onSave={wantToEditI ? editUser : addUser}
        user={user}
        onChange={onChange}
      />
      <Button
        name="Add New User"
        onClick={() => {
          setWantToEditI(false);
          setUser({
            ...user,
            first_name: "",
            last_name: "",
            avatar: "",
            email: "",
          });
        }}
      />
      <Table users={users} onDelete={deleteUser} onClickEdit={onClickEdit} />
    </div>
  );
}

export default App;
