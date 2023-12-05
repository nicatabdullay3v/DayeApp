import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import {
  getIsParent,
  getIsBabysitter,
} from "../../../redux/Slice/RegisterSlice/RegisterSlice";
import "./RegisterStepTwo.scss";
import { useDispatch, useSelector } from "react-redux";
function RegisterStepTwo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const isParent = useSelector((state) => state.babysitterswanted.isParent);

  console.log(isParent);
  console.log(selected);
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className="steptwo">
        <div className="head-text">
          <p>I am...</p>
        </div>
        <div className="register-box">
          <div className="input babysitterInp">
            <input
              id="babysitter"
              name="babysitter"
              value="babysitter"
              type="radio"
              onChange={handleChange}
            />
            <label htmlFor="babysitter">I am a babysitter</label>
          </div>
          <div className="or">or</div>
          <div className="input parentInp">
            <input
              id="lookingforabysitter"
              value="lookingforabysitter"
              name="babysitter"
              type="radio"
              onChange={handleChange}
            />
            <label htmlFor="lookingforabysitter">
              I am looking for a babysitter
            </label>
          </div>
        </div>
        <div className="button">
          <button
            onClick={() => {
              if (selected && selected === "lookingforabysitter") {
                dispatch(getIsParent(true));
                navigate("/Register/CreateProfile");
              } else if (selected && selected === "babysitter") {
                dispatch(getIsBabysitter(true));
                navigate("/Register/CreateProfile");
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterStepTwo;
