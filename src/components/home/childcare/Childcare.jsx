import React from "react";
import "./Childcare.scss"
const Childcare = () => {
  return (
    <section id="child_care">
      <div className="container">
        <div className="child_care">
          <div className="child_care_boxs">
            <div className="child_care_box">
              <div className="child_care_box_image">
                <img src="./../../../../src/assets/images/easy.png" alt="" />
              </div>
              <div className="child_care_box_text">
                <div className="child_care_box_text_title"><h2>You know what’s best for you - we just make it easier</h2></div>
                <div className="child_care_box_text_description"><p>Whether you are looking for a trustworthy babysitter or babysitting job, Babysits helps make childcare decisions as easy as possible.</p></div>
              </div>
            </div>

            <div className="child_care_box">
              <div className="child_care_box_image">
                <img src="./../../../../src/assets/images/safety.png" alt="" />
              </div>
              <div className="child_care_box_text">
                <div className="child_care_box_text_title"><h2>We take care of your safety</h2></div>
                <div className="child_care_box_text_description"><p>With ID verification, reviews, criminal checks, secure messaging and payments, keeping you and your family safe is our top priority.</p></div>
              </div>
            </div>
            <div className="child_care_box">
              <div className="child_care_box_image">
                <img src="./../../../../src/assets/images/peace-of-mind.png" alt="" />
              </div>
              <div className="child_care_box_text">
                <div className="child_care_box_text_title"></div>
                <div className="child_care_box_text_description"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Childcare;
