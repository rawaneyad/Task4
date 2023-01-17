import React from "react";
import Row from "./Row";

const Table = ({users}) => {
  return (
    <div>
      <table className="table">
        <thead>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Avatar</th>
          <th>Email</th>
        </thead>
        {users.map((user) => (
            <tbody key={user.id}>
                <Row user={user}/>
            </tbody>
        ))}
        
      </table>
    </div>
  );
};

export default Table;
