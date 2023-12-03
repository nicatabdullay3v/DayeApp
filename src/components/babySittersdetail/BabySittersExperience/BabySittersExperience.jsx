import React from "react";
import "./BabySittersExperince.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCakeCandles } from "@fortawesome/free-solid-svg-icons";
const BabySittersExperience = () => {
  return (
    <section id="experince">
      <div className="experince">
        <div className="experience_babysitting sa">
          <div className="experience_babysitting_icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div className="experince_babysitting_text">
            <div className="experience_babysitting_title">
              <h2>Experience with babysitting</h2>
            </div>
            <div className="experience_babysitting_description">
              <p> 6 years</p>
            </div>
          </div>
        </div>
        <div className="experience_babysitting">
          <div className="experience_babysitting_icon">
            <FontAwesomeIcon icon={faCakeCandles} />
          </div>
          <div className="experince_babysitting_text">
            <div className="experience_babysitting_title">
              <h2>Experience with age(s)</h2>
            </div>
            <div className="experience_babysitting_description">
              <p> Baby • Toddler • Preschooler • Gradeschooler • Teenager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabySittersExperience;
