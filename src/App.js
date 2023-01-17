import Table from "./components/Table";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import UserForm from "./components/UserForm";
function App() {
  const [users, setUsers] = useState([]);
  const [formName, setFormName] = useState("Add New User");
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
    // console.log(user);
    setUsers([...users, user]);
  };

  //Delete User
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1>User Table</h1>
      <UserForm formName={formName} onSave={addUser} />
      <Button name="Add New User" onClick={() => setFormName("Add New User")} />
      <Table users={users} onDelete={deleteUser} setFormName={setFormName} />
    </div>
  );
}

export default App;
