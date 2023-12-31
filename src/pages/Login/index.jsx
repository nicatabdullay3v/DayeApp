import React, { useEffect, useState } from "react";
import "./Login.scss";
import axios from "axios";
import NavbarSecond from "../../components/NavbarSecond/NavbarSecond";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import NavbarLoginRegister from "./../../components/NavbarLoginregister/NavbarLoginregister";
function index() {
  const [parents, setParents] = useState([]);
  const [babysitters, setBabysitters] = useState([]);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios("http://localhost:3000/babysitterswanted").then((res) => {
      setParents(res.data);
    });
    axios("http://localhost:3000/babysitters").then((res) => {
      setBabysitters(res.data);
    });

    axios("http://localhost:3000/admin").then((res) => {
      setAdmins(res.data);
    });
  }, []);

  return (
    <>
      <NavbarLoginRegister />
      <div className="LoginBox">
        <div className="BoxHeader">
          <div className="header">
            <div className="sign-up-text">
              <p>Welcome to Babysits</p>
            </div>
          </div>
        </div>
        <div className="inputs-button">
          <div className="LoginText">Log in or sign up</div>

          <div className="email-input">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              type="text"
            />
          </div>

          <div className="pass-input">
            <input
              onChange={(e) => {
                setPass(e.target.value);
              }}
              placeholder="Password "
              type="text"
            />
            {/* <FontAwesomeIcon icon={faEye} /> */}
          </div>

          <div className="button-signUp">
            <button
              onClick={() => {
                let findParent = parents.find(
                  (elem) => elem.email == email && elem.password == pass
                );
                let findBabysitter = babysitters.find(
                  (elem) => elem.email == email && elem.password == pass
                );
                let findAdmin = admins.find(
                  (elem) => elem.email == email && elem.password == pass
                );
                if (findParent || findBabysitter || findAdmin) {
                  console.log("salam");
                  if (findParent) {
                    localStorage.setItem("login", JSON.stringify(findParent));
                    localStorage.setItem("isParent", true);
                    navigate("/");
                  } else if (findBabysitter) {
                    localStorage.setItem(
                      "login",
                      JSON.stringify(findBabysitter)
                    );
                    localStorage.setItem("isBabysitter", true);
                    navigate("/");
                  } else if (findAdmin) {
                    localStorage.setItem("login", JSON.stringify(findAdmin));
                    navigate("/admin");
                    localStorage.setItem("admin", JSON.stringify(true));
                  }
                }
              }}
            >
              Log in
            </button>
          </div>
        </div>
        <div className="text">or continue with</div>
        <div className="elements">
          <div className="element google">
            <img
              src="https://seoultra.ru/wp-content/uploads/2019/04/Google.png"
              alt=""
            />
          </div>
          <div className="element facebook">
            <img
              src="https://www.interviewbit.com/blog/wp-content/uploads/2021/07/f_logo_RGB-Blue_1024-2048x2048.png"
              alt=""
            />
          </div>
          <div className="element apple">
            <img
              src="https://www.svgrepo.com/show/177244/apple-apple.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
