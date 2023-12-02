import React from "react";
import "./weknow.scss";

const WeKnow = () => {
  return (
    <section id="we_know">
      <div className="container">
        {/* <div className="circles">
        </div> */}
        <div className="we_know_details">
          <div className="one_detail">
            <div className="justify_center">
              <div className="circle_know"></div>
            </div>
            <div className="detail_one">
              <h3>You know what’s best for you - we just make it easier</h3>
              <p>
                Whether you are looking for a trustworthy babysitter or
                babysitting job, Babysits helps make childcare decisions as easy
                as possible
              </p>
            </div>
          </div>
          <div className="two_detail">
            <div className="justify_center">
              <div className="circle_care"></div>
            </div>
            <div className="detail_two">
              <h3>We take care of your safety</h3>
              <p>
                With ID verification, reviews, criminal checks, secure messaging
                and payments, keeping you and your family safe is our top
                priority.
              </p>
              <a href="">Learn more</a>
            </div>
          </div>
         <div className="three_detail">
         <div className="justify_center">
            <div className="circle_worry"></div>
          </div>
          <div className="detail_three">
            <h3>Less worry - more peace of mind</h3>
            <p>
              Transparent profiles, helpful tools, and our reliable support team
              help remove childcare related stress and give you peace of mind!
            </p>
          </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default WeKnow;
