import React from "react";
import "./Register.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import YupPassword from "yup-password";
YupPassword(Yup);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import NavbarLoginregister from "./../../../components/NavbarLoginregister/NavbarLoginregister"

import NavbarSecond from "../../../components/NavbarSecond/NavbarSecond";
import Navbar from "../../../components/Navbar/Navbar";
function RegisterStepOne() {
  const Parent = JSON.parse(localStorage.getItem("userParent"));
  const Babysitter = JSON.parse(localStorage.getItem("userBabysitter"));

  const [parents, setParents] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/babysitterswanted").then((res) => {
      setParents(res.data);
    });
  }, []);

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 characters or more")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(
          8,
          "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
        )
        .minLowercase(1, "password must contain at least 1 lower case letter")
        .minUppercase(1, "password must contain at least 1 upper case letter")
        .minNumbers(1, "password must contain at least 1 number")
        .minSymbols(1, "password must contain at least 1 special character")
        .required("Required"),
    }),
    onSubmit: (values) => {
      let findEmail = parents.find((elem) => elem.email == values.email);
      console.log(findEmail);
      if (Parent && Parent.isParent == true) {
        if (!findEmail) {
          console.log(Parent);
          Parent.firstName = values.firstName;
          Parent.lastName = values.lastName;
          Parent.email = values.email;
          Parent.password = values.password;
          localStorage.setItem("userParent", JSON.stringify(Parent));
          navigate("/Register/CreateProfile/ComplateSignUp");
        } else {
          alert("this email already used!");
        }
      } else if (Babysitter && Babysitter.isBabysitter == true) {
        if (!findEmail) {
          Babysitter.firstName = values.firstName;
          Babysitter.lastName = values.lastName;
          Babysitter.email = values.email;
          Babysitter.password = values.password;
          localStorage.setItem("userBabysitter", JSON.stringify(Babysitter));
          navigate("/Register/CreateProfile/ComplateSignUpLikeBabysitter");

          ///
        } else {
          alert("this email already used!");
        }
      }
    },
  });
  return (
  <>
      <NavbarLoginregister />

   <div style={{marginTop:"50px"}}>
      <div className="SignUpBox">
        <div className="BoxHeader">
          <div className="header">
            <div className="icon">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="sign-up-text">
              <p>Complete sign up</p>
            </div>
          </div>
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
          <div className="or">or</div>
        </div>
        <div className="inputs-button">
          <form onSubmit={formik.handleSubmit} action="">
            <div className="first-last-name-inputs">
              <input
                id="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                name="firstName"
                placeholder="First name"
                type="text"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "small",
                  }}
                >
                  {formik.errors.firstName}
                </div>
              ) : (
                <div style={{ color: "white", fontSize: "small" }}>sadasd</div>
              )}

              <input
                id="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                name="lastName"
                placeholder="Last name"
                type="text"
              />
            </div>
            <div className="lastname-info">
              Make sure it matches the name on your government ID.
            </div>
            {formik.errors.lastName && formik.touched.firstName ? (
              <div
                style={{
                  fontSize: "small",
                  textAlign: "center",
                  color: "red",
                  paddingBottom: "15px",
                }}
              >
                {formik.errors.lastName}
              </div>
            ) : (
              <div
                style={{
                  color: "white",
                  paddingBottom: "15px",
                  fontSize: "small",
                }}
              >
                sadasd
              </div>
            )}
            <div className="email-input">
              <input
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="email-info">
              We'll email you updates about your account, messaging, and
              support.
            </div>
            {formik.errors.email ? (
              <div
                style={{ textAlign: "center", color: "red", fontSize: "small" }}
              >
                {formik.errors.email}
              </div>
            ) : (
              <div style={{ color: "white", fontSize: "small" }}>sadasd</div>
            )}
            <div className="pass-input">
              <input
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Password "
                type="password"
              />

              {formik.errors.password && formik.touched.firstName ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    paddingBottom: "15px",
                    fontSize: "small",
                  }}
                >
                  {formik.errors.password}
                </div>
              ) : (
                <div
                  style={{
                    color: "white",
                    paddingBottom: "15px",
                    fontSize: "small",
                  }}
                >
                  sadasd
                </div>
              )}
              {/* <FontAwesomeIcon icon={faEye} /> */}
            </div>
            <div className="button-signUp">
              <button type="submit" onClick={() => {}}>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
   
  );
}

export default RegisterStepOne;
