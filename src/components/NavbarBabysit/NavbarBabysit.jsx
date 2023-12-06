import React,{useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet , useNavigate} from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./NavbarBabysit.scss";
const NavbarBabysit = () => {
  const navigate = useNavigate();
  const [situation, setsituation] = useState(true);
  let login = JSON.parse(localStorage.getItem("login"));
  return (
    <nav
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
      <div className="nav-center">
        <input placeholder="Start your search" type="text" />
        <div className="search-icon">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#389ba7" }}
          />
        </div>
      </div>

      <div className="nav_right">
        {login ? (
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
        ) : (
          <>
            <div className="nav_right_button_login">
              <button style={{ backgroundColor: "white" }}>
                <Link to="/Login">Log in</Link>
              </button>
            </div>
            <div className="nav_right_button_sign_up">
              <Link to="/Register">
                <button>Sing up</button>
              </Link>
            </div>
          </>
        )}

        <FontAwesomeIcon  icon={faBars} />
      </div>
      <Outlet />
    </nav>
  );
};

export default NavbarBabysit;
