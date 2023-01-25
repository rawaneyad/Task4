import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";
// import { UsersContext } from "../context/UsersStates";
import Row from "./Row";

const Table = ({usersDataAPI, fetchUsers}) => {
  // const { usersDataAPI } = useContext(UsersContext);
  useEffect(() => {
    fetchUsers();
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
            usersDataAPI.usersDataAPI.map((item) => (
              <tr key={item.id}>
                <Row item={item} />
              </tr>
              // console.log(item)

          ))
          }
        </tbody>
      </table>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    usersDataAPI: state.usersDataAPI,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

