import React, { useContext } from "react";
import { UsersContext } from "../context/UsersStates";
import Row from "./Row";

const Table = () => {
  const { users } = useContext(UsersContext);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <Row item={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
