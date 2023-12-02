import React from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav_left">
        <div className="nav_logo">
          <img src="./../../../src/assets/images/logo.main.png" alt="" />
        </div>
      </div>
      <div className="nav_center">
        <div className="nav_center_text">
          <p>Babysitters</p>
        </div>
        <div className="nav_center_text">
          <p>Babysitting jobs</p>
        </div>
        <div className="nav_center_text">
        <Link className="link" to="/Howitworks"> How it works</Link>
        </div>
        <div className="nav_center_text">
          <Link to="/Pricing">Pricing</Link>
        </div>
      </div>
      <div className="nav_right">
        <div className="nav_right_button_login">
          <button>Log in</button>
        </div>
        <div className="nav_right_button_sign_up">
          <button>Sing up</button>
        </div>
        <FontAwesomeIcon icon={faBars} />
      </div>
    <Outlet/>

    </nav>
  );
};

export default Navbar;
