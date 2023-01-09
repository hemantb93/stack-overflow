import React from "react";
// import { useLocation } from "react-router-dom";
import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = () => {
  // const location = useLocation();

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        {/* <div className="home-container-2" style={{ marginTop: "30px" }}> */}

        {/* <h1 style={{ fontWeight: "400" }}>User's</h1> */}
        <div className="user">
          <h1>User's</h1>
          <UsersList />
        </div>
      </div>
    </div>
  );
};

export default Users;
