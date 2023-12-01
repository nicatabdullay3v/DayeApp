import React from "react";
import "./Navbar.scss";
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
          <p>How it works</p>
        </div>
        <div className="nav_center_text">
          <p>Pricing</p>
        </div>
      </div>
      <div className="nav_right">
        <div className="nav_right_button_login">
        <button >Login</button>
        </div>
        <div className="nav_right_button_sign_up">
         <button>Sing up</button>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
