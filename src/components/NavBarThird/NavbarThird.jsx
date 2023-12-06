import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import "./NavbatThird.scss";
const NavbarThird = () => {
  let User = JSON.parse(localStorage.getItem("login"));

  return (
    <nav
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid lightgray",
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
          <button style={{ backgroundColor: "white" }}>
            <Link to="/Login">Log in</Link>
          </button>
        </div>
        <div className="nav_right_button_sign_up">
          <Link to="/Register">
            <button>Sing up</button>
          </Link>
        </div>
        {User ? <h2>{User.firstName}</h2> : null}

        <FontAwesomeIcon icon={faBars} />
      </div>
      <Outlet />
    </nav>
  );
};

export default NavbarThird;
