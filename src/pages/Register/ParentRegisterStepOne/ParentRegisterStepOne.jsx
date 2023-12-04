import React, { useEffect } from "react";
import "./ParendRegister.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getParentAdress,
  getNumberofChildren,
  getChildrenAge,
  getParentAbout,
} from "../../../redux/Slice/RegisterSlice/RegisterSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
function ParentRegisterStepOne() {
  const dispatch = useDispatch();
  const userParent = useSelector((state) => state.babysitterswanted.userParent);
  const [selected, setSelected] = useState("");
  useEffect(() => {
    axios
      .post("http://localhost:3000/babysitterswanted", userParent)
      .then((res) => console.log(res.data));
  }, [userParent]);
  console.log(userParent);
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
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(getParentAdress(values.address));
      dispatch(getNumberofChildren(values.numberofchildren));
      dispatch(getParentAbout(values.about));
      dispatch(getChildrenAge(selected));

      navigate("/");
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
            </div>
            <div className="age-children">
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
          </div>
          <div className="buttons">
            <div className="back-button">
              <Link style={{ color: "black" }}>Back</Link>
            </div>
            <button type="submit">Finish</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ParentRegisterStepOne;
