import React, { useEffect } from "react";
import "./BabysitterStepOne.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAdress,
  getNumberofChildren,
  getChildrenAge,
  getAbout,
  getBabysitterEducation,
  getExperienceYear,
  getPrice,
} from "../../../redux/Slice/RegisterSlice/RegisterSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
function BabysitterStepOne() {
  const [post, setPost] = useState(false);

  const [selected, setSelected] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const dispatch = useDispatch();
  const userBabysitter = useSelector(
    (state) => state.babysitterswanted.userBabysitter
  );
  const isParent = useSelector((state) => state.babysitterswanted.isParent);
  const isBabysitter = useSelector(
    (state) => state.babysitterswanted.isBabysitter
  );
  useEffect(() => {
    axios
      .post("http://localhost:3000/babysitters", userBabysitter)
      .then((res) => {
        console.log(res.data);
      });
  }, [post]);
  console.log(userBabysitter);

  let navigate = useNavigate();
  const handleChangeRadio = (event) => {
    setSelected(event.target.value);
  };
  const handleChange = (event) => {
    setSelectedAge(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      address: "",
      about: "",
      childrenAge: "",
    },
    onSubmit: (values) => {
      if (isBabysitter) {
        dispatch(getAdress(values.address));
        dispatch(getBabysitterEducation(values.education));
        dispatch(getExperienceYear(selected));
        dispatch(getChildrenAge(selectedAge));
        dispatch(getPrice(values.money));
        dispatch(getAbout(values.about));
        setPost((post) => !post);

        // navigate("/");
      }
    },
  });
  return (
    <div>
      <div className="babysitter-step-one">
        <div className="head-img">
          <div className="text">
            <p>Create you profile</p>
          </div>
          <div className="img-box"></div>
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
              <label htmlFor="education">
                What is your level of education?
              </label>
              <input
                id="education"
                onChange={formik.handleChange}
                value={formik.values.education}
                name="education"
                type="text"
              />
            </div>
            <div className="age-children">
              <p>How many years of experience do you have?</p>
              <div className="input">
                <input
                  name="select"
                  value="Less than 1 year"
                  onChange={handleChangeRadio}
                  id="lessone"
                  type="radio"
                />
                <label htmlFor="lessone">Less than 1 year</label>
              </div>
              <div className="input">
                <input
                  name="select"
                  value="More than 1 year"
                  onChange={handleChangeRadio}
                  id="moreone"
                  type="radio"
                />
                <label htmlFor="moreone">More than 1 year</label>
              </div>
              <div className="input">
                <input
                  name="select"
                  value="More than 2 year"
                  onChange={handleChangeRadio}
                  id="moretwo"
                  type="radio"
                />
                <label htmlFor="moretwo">More than 2 year</label>
              </div>
              <div className="input">
                <input
                  name="select"
                  value="More than 3 year"
                  onChange={handleChangeRadio}
                  id="morethree"
                  type="radio"
                />
                <label htmlFor="morethree">More than 3 year</label>
              </div>
              <div className="input">
                <input
                  name="select"
                  value="More than 4 year"
                  onChange={handleChangeRadio}
                  id="morefour"
                  type="radio"
                />
                <label htmlFor="morefour">More than 4 year</label>
              </div>
              <div className="input">
                <input
                  name="select"
                  value="More than 5 year"
                  onChange={handleChangeRadio}
                  id="morefive"
                  type="radio"
                />
                <label htmlFor="morefive">More than 5 year</label>
              </div>
            </div>
            <div className="age-children">
              <p>With which ages do you have experience?</p>

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
            <div className="moneyInp">
              <label htmlFor="money">
                What will be your babysitting rate?($)
              </label>
              <input
                id="money"
                onChange={formik.handleChange}
                value={formik.values.money}
                name="money"
                type="number"
              />
            </div>
          </div>
          <div className="description">
            <label htmlFor="about">
              Tell a little about yourself, so families can get to know you.
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

export default BabysitterStepOne;
