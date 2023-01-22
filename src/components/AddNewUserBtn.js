import React, { useContext } from "react";
import { UsersContext } from "../context/UsersStates";

import Button from "./Button";

const AddNewUserBtn = () => {
  const { onClickAdd } = useContext(UsersContext);
  return (
    <Button
      name="Add New User"
      onClick={() => {
        onClickAdd();
      }}
    />
  );
};

export default AddNewUserBtn;
