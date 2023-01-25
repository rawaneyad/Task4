import React from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteUser, onClickEdit } from "../redux";

const Row = ({ item }) => {
  const dispatch = useDispatch();
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
            dispatch(onClickEdit(item));
          }}
        />
        <Button name="Delete" 
        onClick={() => dispatch(deleteUser(item.id))} 
        />
      </td>
    </>
  );
};

export default Row;
