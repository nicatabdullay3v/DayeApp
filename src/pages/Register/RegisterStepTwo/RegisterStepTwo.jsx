import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";

import "./RegisterStepTwo.scss";
function RegisterStepTwo() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

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
                let obj = {
                  isParent: true,
                };
                localStorage.setItem("userParent", JSON.stringify(obj));
                navigate("/Register/CreateProfile");
              } else if (selected && selected === "babysitter") {
                let obj = {
                  isBabysitter: true,
                };
                localStorage.setItem("userBabysitter", JSON.stringify(obj));

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
