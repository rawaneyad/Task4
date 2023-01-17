import React from "react";
import Button from "./Button";

const Row = ({ item, onDelete, setWantToEditI, user, setUser }) => {
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
            setWantToEditI(true);
            setUser({
              ...user,
              id: item.id,
              first_name: item.first_name,
              last_name: item.last_name,
              avatar: item.avatar,
              email: item.email,
            });
          }}
        />
        <Button name="Delete" onClick={() => onDelete(item.id)} />
      </td>
    </>
  );
};

export default Row;
