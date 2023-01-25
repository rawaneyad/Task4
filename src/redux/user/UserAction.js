import { CHANGE_INPUT } from "./UserTypes";

export const onChange = ({ target }) => {
  const { name, value } = target;
  return {
    type: CHANGE_INPUT,
    name,
    value
    };
};

