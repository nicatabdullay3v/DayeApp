import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

const NavbarSecond = () => {
  return (
    <nav style={{backgroundColor:"white",borderBottom:"1px solid lightgray"}}>
      <div className="nav_left">
        <div className="nav_logo">
          <img src="./../../../src/assets/images/logo.main.png" alt="" />
        </div>
      </div>
     
      <div className="nav_right">
        <div className="nav_right_button_login">
        <button  style={{backgroundColor:"white"}} >Log in</button>
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

export default NavbarSecond;
