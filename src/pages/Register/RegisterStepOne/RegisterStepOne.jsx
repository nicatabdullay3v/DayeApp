import React from "react";
import "./Register.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
function RegisterStepOne() {
  return (
    <div>
      <div className="SignUpBox">
        <div className="BoxHeader">
          <div className="header">
            <div className="icon">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="sign-up-text">
              <p>Sign up</p>
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
          <div className="first-last-name-inputs">
            <input placeholder="First name" type="text" />
            <input placeholder="Last name" type="text" />
          </div>
          <div className="lastname-info">
            Make sure it matches the name on your government ID.
          </div>
          <div className="email-input">
            <input placeholder="Email" type="text" />
          </div>
          <div className="email-info">
            We'll email you updates about your account, messaging, and support.
          </div>
          <div className="pass-input">
            <input placeholder="Password " type="text" />
            {/* <FontAwesomeIcon icon={faEye} /> */}
          </div>
          <div className="button-signUp">
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterStepOne;
