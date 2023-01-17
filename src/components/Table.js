import React from "react";
import Row from "./Row";

const Table = ({ users, onDelete, setWantToEditI, user, setUser }) => {
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
              <Row
                item={item}
                onDelete={onDelete}
                setWantToEditI={setWantToEditI}
                user={user}
                setUser={setUser}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
