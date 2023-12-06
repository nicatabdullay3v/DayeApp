import React from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav_left">
        <div className="nav_logo"  onClick={() => {
              navigate("/")
              }}>
          <img src="./../../../src/assets/images/logo.main.png" alt="" />
        </div>
      </div>
      <div className="nav_center">
        <div className="nav_center_text">
          <Link to="/BabySitters" className="link">
            Babysitters
          </Link>
        </div>
        <div className="nav_center_text">
          <Link to="/BabySittingJobs" className="link">
            Babysitting jobs
          </Link>
        </div>
        <div className="nav_center_text">
          <Link className="link" to="/Howitworks">
            {" "}
            How it works
          </Link>
        </div>
        <div className="nav_center_text">
          <Link className="link" to="/Pricing">
            Pricing
          </Link>
        </div>
      </div>
      <div className="nav_right">
        <div className="nav_right_button_login">
          <Link to="/Login" className="link">
            Log in
          </Link>
        </div>
        <div className="nav_right_button_sign_up">
          <Link to="/Register">
            <button
              onClick={() => {
                localStorage.removeItem("login");
                localStorage.removeItem("userParent");
                localStorage.removeItem("userBabysitter");
              }}
            >
              Sing up
            </button>
          </Link>
        </div>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
