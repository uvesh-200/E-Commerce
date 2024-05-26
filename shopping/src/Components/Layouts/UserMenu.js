import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <h3>User Panel</h3>
      <div className="list-group">
        <NavLink
          to="/dashboard/user/profile"
          className="list-group-item list-group-item-action"
        >
          My Profile
        </NavLink>
      </div>
    </>
  );
};

export default UserMenu;
