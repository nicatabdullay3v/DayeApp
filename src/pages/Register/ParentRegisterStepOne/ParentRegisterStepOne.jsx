import React from "react";
import "./ParendRegister.scss";
import { Link } from "react-router-dom";
function ParentRegisterStepOne() {
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
        <div className="inputs">
          <div className="addressInp">
            <label htmlFor="address">Address</label>
            <input id="address" type="text" />
            <p>Your address will never be shared with anyone</p>
          </div>
          <div className="numberChildren">
            <label htmlFor="childrenNumber">Number of children</label>
            <input id="childrenNumber" type="number" />
          </div>
          <div className="age-children">
            <div className="input">
              <input id="baby" type="checkbox" />
              <label htmlFor="baby">Baby</label>
            </div>
            <div className="input">
              <input id="toddler" type="checkbox" />
              <label htmlFor="toddler">Toddler</label>
            </div>
            <div className="input">
              <input id="presschool" type="checkbox" />
              <label htmlFor="presschool">Presschooler</label>
            </div>
            <div className="input">
              <input id="grade" type="checkbox" />
              <label htmlFor="grade">Gradeschooler</label>
            </div>
          </div>
        </div>
        <div className="description">
          <label htmlFor="description">
            Tell a little about your family, so babysitters can get to know you.
          </label>
          <div className="input">
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="buttons">
          <div className="back-button">
            <Link style={{ color: "black" }}>Back</Link>
          </div>
          <button>Finish</button>
        </div>
      </div>
    </div>
  );
}

export default ParentRegisterStepOne;
