import { CLICK_EDIT } from "./AddEditTypes";

export const onClickEdit = (data) => {
  return {
    type: CLICK_EDIT,
    data: data,
    };
};
