import React from "react";
import Row from "./Row";

const Table = ({ users, onDelete, onClickEdit }) => {
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
              <Row item={item} onDelete={onDelete} onClickEdit={onClickEdit} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
