import React from "react";
import "./Register.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  getFirstName,
  getEmail,
  getLastName,
  getPassword,
} from "../../../redux/Slice/RegisterSlice/RegisterSlice";
import NavbarSecond from "../../../components/NavbarSecond/NavbarSecond";
function RegisterStepOne() {
  const dispatch = useDispatch();
  const Parent = JSON.parse(localStorage.getItem("userParent"));
  const Babysitter = JSON.parse(localStorage.getItem("userBabysitter"));

  const userParent = useSelector((state) => state.babysitterswanted.userParent);
  const userBabysitter = useSelector(
    (state) => state.babysitterswanted.userBabysitter
  );
  // console.log(userParent);
  // console.log(userBabysitter);
  const [parents, setParents] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/babysitterswanted").then((res) => {
      setParents(res.data);
    });
  }, []);

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
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
    <div>
      <NavbarSecond />
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
              {formik.errors.firstName ? (
                <div style={{ textAlign: "center", color: "red" }}>
                  {formik.errors.firstName}
                </div>
              ) : (
                <div style={{ color: "white" }}>sadasd</div>
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
            {formik.errors.lastName ? (
              <div
                style={{
                  textAlign: "center",
                  color: "red",
                  paddingBottom: "15px",
                }}
              >
                {formik.errors.lastName}
              </div>
            ) : (
              <div style={{ color: "white", paddingBottom: "15px" }}>
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
              <div style={{ textAlign: "center", color: "red" }}>
                {formik.errors.email}
              </div>
            ) : (
              <div style={{ color: "white" }}>sadasd</div>
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
              {formik.errors.password ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    paddingBottom: "15px",
                  }}
                >
                  {formik.errors.password}
                </div>
              ) : (
                <div style={{ color: "white", paddingBottom: "15px" }}>
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
  );
}

export default RegisterStepOne;
