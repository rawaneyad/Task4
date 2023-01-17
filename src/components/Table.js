import React from "react";
import Row from "./Row";

const Table = ({ users, onDelete, setFormName }) => {
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
          {users.map((user) => (
            <tr key={user.id}>
              <Row user={user} onDelete={onDelete} setFormName={setFormName}/>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
