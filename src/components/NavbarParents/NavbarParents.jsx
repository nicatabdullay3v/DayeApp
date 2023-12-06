import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import "../NavbarFourth/NavbarFourth.scss";
import { motion } from "framer-motion";


function NavbarFourth() {
  const [situation, setsituation] = useState(true);
  const navigate = useNavigate();
  return (
    <nav
      className="fourth"
      style={{
        backgroundColor: "#edf7f8",
        borderBottom: "1px solid lightgray",

      }}
    >
      <div className="nav_left">
        <div  className="nav_logo">
          <motion.img  whileHover={{ scale: 1.2 }} // Rotate 360 degrees on hover

  transition={{ duration: 1, }} onClick={()=>{
            navigate("/")
          }} src="./../../../src/assets/images/logo.main.png" alt="" />
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
              icon={faHeart}
              style={{ color: "#389BA7", fontSize: "19px" }}
            />
          </Link>
        </motion.div>


        <div className="comment-icon">
          <FontAwesomeIcon
            style={{ color: "#323940", fontSize: "19px" }}
            icon={faComment}
          />
        </div>
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
            Log Out
          </button>
        </div>

        <FontAwesomeIcon icon={faBars} />
      </div>
      <Outlet />
    </nav>
  );
}

export default NavbarFourth;
