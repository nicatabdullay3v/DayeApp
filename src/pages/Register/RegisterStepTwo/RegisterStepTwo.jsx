import React from "react";
import "./RegisterStepTwo.scss";
function RegisterStepTwo() {
  return (
    <div>
      <div className="steptwo">
        <div className="head-text">
          <p>Complete sign up</p>
        </div>
        <div className="register-box">
          <div className="input babysitterInp">
            <input id="babysitter" name="babysitter" type="radio" />
            <label htmlFor="babysitter">I am a babysitter</label>
          </div>
          <div className="or">or</div>
          <div className="input parentInp">
            <input id="lookingforabysitter" name="babysitter" type="radio" />
            <label htmlFor="lookingforabysitter">
              I am looking for a babysitter
            </label>
          </div>
        </div>
        <div className="button">
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterStepTwo;
