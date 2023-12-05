import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import "../NavbarFourth/NavbarFourth.scss";
function NavbarFourth() {
  const [situation, setsituation] = useState(true);
  const navigate = useNavigate();
  return (
    <nav
      className="fourth"
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

      <div className="nav_right">
        <div className="nav_right_button_login">
          <Link to="/Favorites">
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "#323940", fontSize: "19px" }}
            />
          </Link>
        </div>

        {/* <div className="nav_right_button_books">
          <Link to="/Admin">
            <FontAwesomeIcon
              icon={faCalendar}
              style={{ color: "#323940", fontSize: "19px" }}
            />
          </Link>
        </div> */}
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
