import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import "./Navbarparents.scss";
import { motion } from "framer-motion";

function NavbarFourth() {
  let User = JSON.parse(localStorage.getItem("login"));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [situation, setsituation] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <nav
        className="fourth"
        style={{
          backgroundColor: "#edf7f8",
          borderBottom: "1px solid lightgray",
        }}
      >
        <div className="navbar_parent">
          <div className="nav_left">
            <div className="nav_logo">
              <motion.img
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 1 }}
                onClick={() => {
                  navigate("/");
                }}
                src="./../../../src/assets/images/logo.main.png"
                alt=""
              />
            </div>
          </div>

          <div className="nav_center">
            <div className="nav_center_text">
              <Link to="/BabySitters" className="link">
                Babysitters
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

            <div className="comment-icon">
              <button
                onClick={() => {
                  navigate("/Login");
                  localStorage.removeItem("login");
                  localStorage.removeItem("isParent");
                  localStorage.removeItem("isBabysitter");
                  setsituation((state) => !state);
                }}
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </button>
            </div>

            <Link to="/Profile" className="link">
            <div className="profile_img"></div>
            </Link>
            {User ? (
              <h2 style={{ fontSize: "16px" }}>{User.firstName}</h2>
            ) : null}
            <FontAwesomeIcon
              onClick={() => {
                setSidebarOpen(sidebarOpen ? false : true);
              }}
              className="bars"
              icon={faBars}
            />
          </div>
        </div>
        <Outlet />
      </nav>
      {sidebarOpen ? (
        <div className="side_bar">
            <Link to="/Profile" className="link">
            <div className="profile_img"></div>
            </Link>
          <Link to="/BabySitters" className="link">
            Babysitters
          </Link>
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
          <Link className="link" to="/Howitworks">
            {" "}
            How it works
          </Link>
          <br />
          <Link className="link" to="/Pricing">
            Pricing
          </Link>

          <Link to="/" className="link">
            Home
          </Link>
        </div>
      ) : null}
    </>
  );
}

export default NavbarFourth;
