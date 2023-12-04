import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import "./navbaradmin.scss";

const NavbarAdmin = () => {
  return (
    <nav
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid lightgray",
        marginBottom: "20px",
      }}
    >
      <div className="nav_left">
        <div className="nav_logo">
          <img src="./../../../src/assets/images/logo.main.png" alt="" />
        </div>
      </div>

      <div className="nav_center">
        <div className="nav_search">
          <input placeholder="Start your search" type="text" />
          <FontAwesomeIcon className="search_icon" icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className="nav_right">
        <div className="nav_right_button_login"> 
          <Link to="/Parents" className="link">
            <button className="button_parent">Parents</button>
          </Link>
        </div>
        <div className="nav_right_button_sign_up">
          <Link to="/Babysittersemployee">
            <button className="button_employee">BabySitters</button>
          </Link>
        </div>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <Outlet />
    </nav>
  );
};

export default NavbarAdmin;
