import React, { useEffect } from "react";
import "./BabysitterStepOne.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import YupPassword from "yup-password";
YupPassword(Yup);
import axios from "axios";
import { Language, Sledding } from "@mui/icons-material";
function BabysitterStepOne() {
  const Babysitter = JSON.parse(localStorage.getItem("userBabysitter"));
  const regex = /^(055|050|070|051)/;
  const [selected, setSelected] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectDrive, setSelectDrive] = useState("secilmedi");
  const [haveChildren, sethaveChildren] = useState("secilmedi");
  const [location, setLocation] = useState("");
  const [haveCar, setHaveCar] = useState("secilmedi");
  const [smoke, setSmoke] = useState("secilmedi");
  const [selectLanguage, setSelectLanguage] = useState("");
  ///

  let navigate = useNavigate();
  const handleChangeRadio = (event) => {
    setSelected(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedAge(event.target.value);
  };
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleChangeLanguage = (event) => {
    setSelectLanguage(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      address: "",
      about: "",
      childrenAge: "",
      education: "",
      money: "",
      driverLicense: "",
      selectHaveChildren: "",
      selectLocation: "",
      haveCar: "",
      Smoke: "",
    },
    validationSchema: Yup.object({
      address: Yup.string()

        .min(10, "Must be 10 characters or more")
        .required("Required"),
      about: Yup.string()
        .max(60, "Must be 60 characters or less")
        .min(20, "Must be 20 characters or more")

        .required("Required"),
      money: Yup.number().required("Required").min(0, "Must be 0 or more"),

      education: Yup.string().required("Required"),
      phone: Yup.string()
        .required("A phone number is required")
        .matches(regex, "Phone number is not valid"),
    }),
    ///
    onSubmit: (values) => {
      console.log("salam");
      if (
        Babysitter &&
        Babysitter.isBabysitter == true &&
        selected &&
        selectedAge &&
        selectDrive !== "secilmedi" &&
        haveChildren !== "secilmedi" &&
        haveCar !== "secilmedi" &&
        smoke !== "secilmedi" &&
        location &&
        selectLanguage
      ) {
        Babysitter.address == values.address;
        Babysitter.education = values.education;
        Babysitter.experienceYear = selected;
        Babysitter.experienceChildrenAge = selectedAge;
        Babysitter.price = values.money;
        Babysitter.about = values.about;
        Babysitter.wishList = [];
        Babysitter.driverLicense = selectDrive;
        Babysitter.Haschildren = haveChildren;
        Babysitter.location = location;
        Babysitter.car = haveCar;
        Babysitter.smoker = smoke;
        Babysitter.Languages = selectLanguage;
        Babysitter.reviews = [];
        Babysitter.references = [];
        Babysitter.provided = [];
        Babysitter.activities = [];
        Babysitter.phone = values.phone;
        Babysitter.Favorited = 10;

        axios
          .post("http://localhost:3000/babysitters", Babysitter)
          .then((res) => {
            console.log(res.data);
          });
        localStorage.removeItem("userBabysitter");

        navigate("/");
      }
    },
  });
  console.log(Babysitter);
  return (
    <div>
      <div className="babysitter-step-one">
        <div className="head-img">
          <div className="text">
            <div className="back-button">
              <button
                onClick={() => {
                  navigate(-1);
                }}
              >
                Back
              </button>
            </div>
            <p>Create your profile</p>
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
            <div className="addressInp">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                name="phone"
                type="phone"
              />

              {formik.touched.phone && formik.errors.phone ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "16px",
                  }}
                >
                  {formik.errors.phone}
                </div>
              ) : (
                <div style={{ color: "white", fontSize: "16px" }}>sadasd</div>
              )}
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
              {formik.touched.education && formik.errors.education ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "16px",
                  }}
                >
                  {formik.errors.education}
                </div>
              ) : (
                <div style={{ color: "white", fontSize: "16px" }}>sadasd</div>
              )}
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
              {!selectedAge ? (
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
            <div className="driver">
              <p>Do you have Driver's license ?</p>
              <div className="input">
                <input
                  name="selectDriver"
                  value="Yes"
                  id="driveryes"
                  onChange={() => {
                    setSelectDrive(true);
                  }}
                  type="radio"
                />
                <label htmlFor="driveryes">Yes</label>
              </div>
              <div className="input">
                <input
                  name="selectDriver"
                  value="No"
                  id="driverno"
                  onChange={() => {
                    setSelectDrive(false);
                  }}
                  type="radio"
                />
                <label htmlFor="driverno">No</label>
              </div>
              {selectDrive === "secilmedi" ? (
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
            <div className="haveChildren">
              <p>Do you Have Children ?</p>
              <div className="input">
                <input
                  name="selectHaveChildren"
                  value="Yes"
                  id="havechildyes"
                  type="radio"
                  onChange={() => {
                    sethaveChildren(true);
                  }}
                />
                <label htmlFor="havechildyes">Yes</label>
              </div>
              <div className="input">
                <input
                  name="selectHaveChildren"
                  value="No"
                  id="havechildno"
                  onChange={() => {
                    sethaveChildren(false);
                  }}
                  type="radio"
                />
                <label htmlFor="havechildno">No</label>
              </div>
              {haveChildren === "secilmedi" ? (
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
            <div className="location">
              <p>Preferred babysitting location:</p>
              <div className="input">
                <input
                  name="selectLocation"
                  value="At the babysitters's"
                  id="locationBabysitter"
                  type="radio"
                  onChange={handleChangeLocation}
                />
                <label htmlFor="locationBabysitter">At the babysitters's</label>
              </div>
              <div className="input">
                <input
                  name="selectLocation"
                  value="At the my home"
                  id="locationHome"
                  type="radio"
                  onChange={handleChangeLocation}
                />
                <label htmlFor="havechildno">At the my home</label>
              </div>
              {!location ? (
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
            <div className="haveCar">
              <p>Do you have a car ?</p>
              <div className="input">
                <input
                  onChange={() => {
                    setHaveCar(true);
                  }}
                  name="haveCar"
                  value="Yes"
                  id="carYes"
                  type="radio"
                />
                <label htmlFor="carYes">Yes</label>
              </div>
              <div className="input">
                <input
                  onChange={() => {
                    setHaveCar(false);
                  }}
                  name="haveCar"
                  value="No"
                  id="carNo"
                  type="radio"
                />
                <label htmlFor="carNo">No</label>
              </div>
              {haveCar === "secilmedi" ? (
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
            <div className="smoker">
              <p>Do you smoke ?</p>
              <div className="input">
                <input
                  onChange={() => {
                    setSmoke(true);
                  }}
                  name="Smoke"
                  value="Yes"
                  id="smokeYes"
                  type="radio"
                />
                <label htmlFor="smokeYes">Yes</label>
              </div>
              <div className="input">
                <input
                  onChange={() => {
                    setSmoke(false);
                  }}
                  name="Smoke"
                  value="No"
                  id="smokeNO"
                  type="radio"
                />
                <label htmlFor="smokeNO">No</label>
              </div>
              {smoke === "secilmedi" ? (
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
            <div className="selectLanguage">
              <p>which language do you know better?</p>
              <div className="input">
                <input
                  name="selectlanguage"
                  value="English"
                  onChange={handleChangeLanguage}
                  id="langeageOne"
                  type="radio"
                />
                <label htmlFor="langeageOne">English</label>
              </div>
              <div className="input">
                <input
                  onChange={handleChangeLanguage}
                  name="selectlanguage"
                  value="Russian"
                  id="languageTwo"
                  type="radio"
                />
                <label htmlFor="languageTwo">Russian</label>
              </div>
              {!selectLanguage ? (
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
              {formik.touched.money && formik.errors.money ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "16px",
                    paddingBottom: "20px",
                  }}
                >
                  {formik.errors.money}
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

export default BabysitterStepOne;
