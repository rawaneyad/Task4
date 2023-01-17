import React from "react";
import Button from './Button';

const Row = ({ user, onDelete }) => {
  return (
    <>
      <td>{user.id}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>
        <img src={user.avatar} alt={user.id} width="60" height="40" />
      </td>
      <td>{user.email}</td>
      <td>
        <Button name='Edit'/>
        <Button name='Delete' onClick={()=>onDelete(user.id)}/>
      </td>
    </>
  );
};

export default Row;
