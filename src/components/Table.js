import React, { useEffect } from "react";
import Row from "./Row";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux";

const Table = () => {
  const {usersDataAPI} = useSelector(state => state.usersDataAPI)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            usersDataAPI.map((item) => (
              <tr key={item.id}>
                <Row item={item} />
              </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
