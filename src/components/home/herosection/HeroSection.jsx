import React from "react";
import "./HeroSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero_text">
            <div className="hero_text_title">
              <p>
                The childcare platform trusted by <span>nanies</span>
              </p>
            </div>
            <div className="hero_text_wanted_jobs">
              <div className="hero_text_wanted">
                <p>Babysitter wanted </p>
              </div>
              <div className="hero_text_jobs">
                <p>Babysitting jobs</p>
              </div>
            </div>
            <div className="hero_text_line">
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
            <div className="hero_input">
                <input  type="text" />
                <FontAwesomeIcon className="glass" icon={faMagnifyingGlass} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
