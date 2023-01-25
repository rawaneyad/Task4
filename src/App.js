import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Table from "./components/Table";
import UserForm from "./components/UserForm";
import AddNewUserBtn from "./components/AddNewUserBtn";
function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>User Table</h1>
        <UserForm />
        <AddNewUserBtn />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
