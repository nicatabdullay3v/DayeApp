import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./navbaradmin.scss";

const NavbarAdmin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [situation, setsituation] = useState(true);
  const navigate = useNavigate();
  const [admins, setAdmins] = useState([]);

  let IsAdmin = JSON.parse(localStorage.getItem("admin"));
  let adminUser = JSON.parse(localStorage.getItem("login"));

  return (
    <>
    <nav
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid lightgray",
      }}
    >
      <div className="nav_center">
        {IsAdmin ? <h2>{adminUser.firstName}</h2> : null}
        {/* <input placeholder="Start your search" type="text" /> */}
        {/* <FontAwesomeIcon className="search_icon" icon={faMagnifyingGlass} /> */}
      </div>
      <div className="nav_rightt">
        <div className="nav_right_button_login">
          <Link to="/Admin/Parents" className="link">
            <button className="button_parent">Parents</button>
          </Link>
        </div>
        <div className="nav_right_button_sign_up">
          <Link to="/Admin/Babysittersemployee">
            <button className="button_employee">BabySitters</button>
          </Link>
        </div>
        <div className="comment-icon logoutbutton">
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
        <FontAwesomeIcon
            onClick={() => {
              setSidebarOpen(sidebarOpen ? false : true);
            }}
            className="bars"
            icon={faBars}
          />
      </div>
      <Outlet />
    </nav>




    {sidebarOpen ? (
        <div className="side_bar">
       

       <Link to="/Admin/Parents" className="link">
            <button className="button_parent">Parents</button>
          </Link>



         <Link to="/Admin/Babysittersemployee" className="link">
            <button className="button_employee">BabySitters</button>
          </Link>

     

          <div className="comment-icon link" >
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


        </div>
      ) : null}
</>
  );
};

export default NavbarAdmin;
