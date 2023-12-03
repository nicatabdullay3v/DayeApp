import React from "react";
import "./BabySittersAchievements.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
const BabySittersAchievements = () => {
  return (
    <>
      <section id="achievments">
        <div className="achievments">
          <div className="achievments sa">
            <div className="achievments_icon">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div className="achievments_text">
              <div className="achievments_title">
                <h2>Experience with babysitting</h2>
              </div>
              <div className="achievments_description">
                <p> 6 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BabySittersAchievements;
