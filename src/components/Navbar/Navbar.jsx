import React from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="nav_left">
          <div
            className="nav_logo"
            onClick={() => {
              navigate("/");
            }}
          >
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
                  localStorage.removeItem("admin")
                }}
              >
                Sing up
              </button>
            </Link>
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
        <motion.div initial={{x:280 , opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5}}   exit={{ x: 280, opacity: 0 }} className="side_bar">
          <motion.div
            whileHover={{ scale: 1.2 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="nav_right_button_login"
          >
            <Link to="/Favorites">
              <FontAwesomeIcon
                className="heart"
                icon={faHeart}
                style={{ color: "#389BA7", fontSize: "19px" }}
              />
            </Link>
          </motion.div>

          <Link to="/BabySittingJobs" className="link">
            Babysitting jobs
          </Link>
          <Link to="/BabySitters" className="link">
            Babysitters
          </Link>
          <Link className="link" to="/Howitworks">
            {" "}
            How it works
          </Link>
          <Link className="link" to="/Pricing">
            Pricing
          </Link>
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
                  localStorage.removeItem("admin")
                }}
              >
                Sing up
              </button>
            </Link>
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default Navbar;
