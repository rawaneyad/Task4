import React, { useContext } from "react";
import { UsersContext } from "../context/UsersStates";
import Button from "./Button";

const Row = ({ item }) => {
  const { onClickEdit, deleteUser } = useContext(UsersContext);

  return (
    <>
      <td>{item.id}</td>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>
        <img src={item.avatar} alt={item.id} width="60" height="40" />
      </td>
      <td>{item.email}</td>
      <td>
        <Button
          name="Edit"
          onClick={() => {
            onClickEdit(item);
          }}
        />
        <Button name="Delete" onClick={() => deleteUser(item.id)} />
      </td>
    </>
  );
};

export default Row;
