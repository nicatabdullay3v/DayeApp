import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./navbaradmin.scss";
import { useState } from "react";

const NavbarAdmin = () => {
  const [situation, setsituation] = useState(true);
  const navigate = useNavigate();
  return (
    <nav
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid lightgray",
      }}
    >
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
        <div className="comment-icon">
          <button
            onClick={() => {
              navigate("/Login");
              localStorage.removeItem("login");
              localStorage.removeItem("isParent");
              localStorage.removeItem("isBabysitter");
              setsituation((state) => !state);
              localStorage.removeItem("admin");
            }}
          >
            Log Out
          </button>
        </div>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <Outlet />
    </nav>
  );
};

export default NavbarAdmin;
