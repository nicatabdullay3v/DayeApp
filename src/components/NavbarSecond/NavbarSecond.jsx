import React ,{useState}from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useNavigate } from "react-router-dom";

const NavbarSecond = () => {
  const navigate = useNavigate();
  const [situation, setsituation] = useState(true);
  let login = JSON.parse(localStorage.getItem("login"));
  return (
    <nav
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid lightgray",
        marginBottom: "20px",
      }}
    >
      <div className="nav_left">
        <div className="nav_logo">
          <img src="./../../../src/assets/images/logo.main.png" alt="" />
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

        <FontAwesomeIcon icon={faBars} />
      </div>
      <Outlet />
    </nav>
  );
};

export default NavbarSecond;
