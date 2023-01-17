import Table from './components/Table';
import { useEffect,useState } from 'react';
import Button from './components/Button';
import UserForm from './components/UserForm';
function App() {
  const [users, setUsers] = useState([]);
  const [formName, setFormName] = useState('Add New User');
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

  //Delete User
  const deleteUser = async (id)=>{
    // console.log(id);
    await fetch(`https://reqres.in/api/users?page=1/${id}`, {method:'Delete'});
    setUsers(users.filter((user)=>user.id !==id))
  }

  return (
    <div className="container">
      <h1>User Table</h1>
      <UserForm formName={formName}/>
      <Button name='Add New User'/>
      <Table users={users} onDelete={deleteUser}/>
    </div>
  );
}

export default App;
