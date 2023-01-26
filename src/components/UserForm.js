import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onChange, addUser, editUser } from "../redux";

const UserForm = () => {
  const {user} = useSelector(state => state.user)
  const {wantToEditI} = useSelector(state => state.wantToEditI)
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    wantToEditI ? dispatch(editUser(user)) : 
    dispatch(addUser(user));
  };
  return (
    <form 
    onSubmit={onSubmit}
    >
      <h3>
        { 
        wantToEditI ? "Edit User" : 
        "Add New User"
        }
        </h3>
      <div className="inputs">
        <div className="input">
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={user.first_name}
            onChange={(e) => dispatch(onChange(e))}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={user.last_name}
            onChange={(e) => dispatch(onChange(e))}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="avatar">Avatar URL</label>
          <input
            type="text"
            id="avatar"
            name="avatar"
            value={user.avatar}
            onChange={(e) => dispatch(onChange(e))}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) => dispatch(onChange(e))}
            required
          />
        </div>
      </div>
      <input className="btn" type="submit" value="Save" />
    </form>
  );
};

export default UserForm;
