import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./Navbar.css";
function Navbar() {
  return (
    <div className="Nav">
      <div className="compNav">
        <h1 className="display-1">Userfacet</h1>
        <div className="menu">
          <NavLink id="nl"  exact to="/">
            Game
          </NavLink>
          <NavLink id="nl"  to="/login">
            Login
          </NavLink>
          <NavLink id="nl"  to="/about">
            About
          </NavLink>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;
