import React from "react";
import "./Why.scss";
const Why = () => {
  return (
    <section id="why">
      <div className="container">
        <div className="why">
          <div className="why_use">
            <div className="why_use_title">
              <h1>Why use Babysits?</h1>
            </div>
            <div className="why_use_description">
              <p>
                Whether you are looking for a great babysitter or babysitting
                job, Babysits makes it easy and transparent. You are in full
                control of your profile, prices, who you choose to work with,
                and how you interact with other members.
              </p>
            </div>
          </div>
          <div className="why_control">
            <div className="why_control_title">
              <h1>We give you control</h1>
            </div>
            <div className="why_control_description">
              <p>
                Read reviews and detailed profiles with trustworthy user
                verifications. Screen, interview and make your choice. Plan and
                pay appointments via the platform. Babysits brings you peace of
                mind at every step, from finding a babysitter or babysitting job
                to planning appointments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
