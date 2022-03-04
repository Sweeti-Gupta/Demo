import React from "react";
import { fetchUsers } from "../redux/user/userActions";
import { connect } from "react-redux";
import { useEffect } from "react";

function UserContainer({userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData && userData.users && userData.users.map((user) => 
          <p>{user.name}</p>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
