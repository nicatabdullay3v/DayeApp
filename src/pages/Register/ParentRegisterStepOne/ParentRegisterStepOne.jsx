import React, { useEffect } from "react";
import "./ParendRegister.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import YupPassword from "yup-password";
YupPassword(Yup);
import axios from "axios";
function ParentRegisterStepOne() {
  const Parent = JSON.parse(localStorage.getItem("userParent"));
  const [post, setPost] = useState(false);
  const [selected, setSelected] = useState("");
  useEffect(() => {}, [post]);
  let navigate = useNavigate();
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      address: "",
      numberofchildren: "",
      about: "",
      childrenAge: "",
    },
    validationSchema: Yup.object({
      address: Yup.string()

        .min(10, "Must be 10 characters or more")
        .required("Required"),
      about: Yup.string()
        .max(60, "Must be 60 characters or less")
        .min(20, "Must be 20 characters or more")

        .required("Required"),
      numberofchildren: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      if (Parent && Parent.isParent == true) {
        Parent.address = values.address;
        Parent.numberofChildren = values.numberofchildren;
        Parent.about = values.about;
        Parent.childrenAge = selected;
        Parent.wishList = [];
        axios
          .post("http://localhost:3000/babysitterswanted", Parent)
          .then((res) => console.log(res.data));
        setPost((post) => !post);
        localStorage.removeItem("userParent");

        navigate("/");
      }
    },
  });

  return (
    <div>
      <div className="parent-step-one">
        <div className="head-img">
          <div className="text">
            <p>Create you profile</p>
          </div>
          <div className="img-box">
            <div className="left">
              <img
                src="../../../assets/images/sign-language-hello-animation.gif"
                alt=""
              />
            </div>
            <div className="right">
              <p>
                Tell us about <br /> your family
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} action="">
          <div className="inputs">
            <div className="addressInp">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                onChange={formik.handleChange}
                value={formik.values.address}
                name="address"
                type="text"
              />
              <p>Your address will never be shared with anyone</p>
              {formik.touched.address && formik.errors.address ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "16px",
                  }}
                >
                  {formik.errors.address}
                </div>
              ) : (
                <div style={{ color: "white", fontSize: "16px" }}>sadasd</div>
              )}
            </div>
            <div className="numberChildren">
              <label htmlFor="childrenNumber">Number of children</label>
              <input
                id="numberofchildren"
                onChange={formik.handleChange}
                value={formik.values.numberofchildren}
                name="numberofchildren"
                type="text"
              />
              {formik.touched.numberofchildren &&
              formik.errors.numberofchildren ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "16px",
                  }}
                >
                  {formik.errors.numberofchildren}
                </div>
              ) : (
                <div style={{ color: "white", fontSize: "16px" }}>sadasd</div>
              )}
            </div>
            <div className="age-children">
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "large",
                  paddingBottom: "9px",
                }}
              >
                Age of children
              </p>
              <div className="input">
                <input
                  name="baby"
                  value="0-1"
                  onChange={handleChange}
                  id="baby"
                  type="checkbox"
                />
                <label htmlFor="baby">Baby</label>
              </div>
              <div className="input">
                <input
                  name="toddler"
                  value="1-3"
                  onChange={handleChange}
                  id="toddler"
                  type="checkbox"
                />
                <label htmlFor="toddler">Toddler</label>
              </div>
              <div className="input">
                <input
                  name="presschool"
                  value="3-5"
                  onChange={handleChange}
                  id="presschool"
                  type="checkbox"
                />
                <label htmlFor="presschool">Presschooler</label>
              </div>
              <div className="input">
                <input
                  name="grade"
                  value="5-7"
                  onChange={handleChange}
                  id="grade"
                  type="checkbox"
                />
                <label htmlFor="grade">Gradeschooler</label>
              </div>
              {!selected ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "16px",
                  }}
                >
                  no selected
                </div>
              ) : (
                <div style={{ color: "white", fontSize: "16px" }}>sadasd</div>
              )}
            </div>
          </div>
          <div className="description">
            <label htmlFor="about">
              Tell a little about your family, so babysitters can get to know
              you.
            </label>
            <div className="input">
              <textarea
                id="about"
                onChange={formik.handleChange}
                value={formik.values.about}
                name="about"
                type="text"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            {formik.touched.about && formik.errors.about ? (
              <div
                style={{
                  textAlign: "center",
                  color: "red",
                  fontSize: "16px",
                  paddingBottom: "20px",
                }}
              >
                {formik.errors.about}
              </div>
            ) : (
              <div
                style={{
                  color: "white",
                  fontSize: "16px",
                  paddingBottom: "20px",
                }}
              >
                sadasd
              </div>
            )}
          </div>
          <div className="buttons">
            <div className="back-button">
              <button
                onClick={() => {
                  navigate(-1);
                }}
              >
                Back
              </button>
            </div>
            <button type="submit">Finish</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ParentRegisterStepOne;
