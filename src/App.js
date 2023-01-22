import React from "react";
import { UsersProvider } from "./context/UsersStates";
import Table from "./components/Table";
import UserForm from "./components/UserForm";
import AddNewUserBtn from "./components/AddNewUserBtn";
function App() {
  return (
    <UsersProvider>
      <div className="container">
        <h1>User Table</h1>
        <UserForm />
        <AddNewUserBtn />
        <Table />
      </div>
    </UsersProvider>
  );
}

export default App;
