import Table from './components/Table';
import { useEffect,useState } from 'react';
function App() {
  const [users, setUsers] = useState([]);

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
  return (
    <div className="container">
      <h1>User Table</h1>
      <Table users={users}/>
    </div>
  );
}

export default App;
