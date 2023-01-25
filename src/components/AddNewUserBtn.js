import React from "react";
import { useDispatch } from "react-redux";
import { onClickAdd } from "../redux"

import Button from "./Button";

const AddNewUserBtn = () => {
  const dispatch = useDispatch();
  return (
    <Button
      name="Add New User"
      onClick={() => {
        dispatch(onClickAdd());
      }}
    />
  );
};

export default AddNewUserBtn;
