import React from "react";
import Row from "./Row";

const Table = ({ users }) => {
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
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <Row user={user} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
