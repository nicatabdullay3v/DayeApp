import React from "react";
import "./BabySittersAbout.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import {
  faCarSide,
  faGraduationCap,
  faHeart,
  faHouse,
  faIdCard,
  faLanguage,
  faPerson,
  faSmoking,
} from "@fortawesome/free-solid-svg-icons";

const BabySittersAbout = () => {
  let babysitter = useSelector((state) => state.babysitters.babysitter);

  return (
    <section id="baby_sitters_about">
      <h1 style={{ backgroundColor: "white", marginBottom: "20px" }}>
        About Me
      </h1>
      <div className="baby_sitters_abouts">
        <div className="baby_sitters_about_left">
          <div className="driver_license">
            <div className="driver_license_icon_text icon_text">
              <FontAwesomeIcon className="icon" icon={faIdCard} />

              <p> Driver's license</p>
            </div>
            <div className="driver_license_yes_no yes_no">No</div>
          </div>
          <div className="has_children">
            <div className="has_children_icon_text icon_text">
              <FontAwesomeIcon className="icon" icon={faPerson} />

              <p> Has children</p>
            </div>
            <div className="has_children_yes_no yes_no">
              {babysitter.Haschildren ? "yes" : "NO"}
            </div>
          </div>
          <div className="location">
            <div className="location_icon_text icon_text">
              <FontAwesomeIcon className="icon" icon={faHouse} />

              <p> Preferred babysitting location</p>
            </div>
            <div className="location_yes_no yes_no">{babysitter.location}</div>
          </div>
          <div className="education">
            <div className="education_icon_text icon_text">
              <FontAwesomeIcon className="icon" icon={faGraduationCap} />
              <p> Education</p>
            </div>
            <div className="education_yes_no yes_no">
              {babysitter.Education}
            </div>
          </div>
        </div>
        <div className="baby_sitters_about_right">
          <div className="car">
            <div className="car_icon_text icon_text">
              <FontAwesomeIcon className="icon" icon={faCarSide} />
              <p>Car</p>
            </div>
            <div className="car_yes_no yes_no">
              {babysitter.car ? "Yes" : "No"}
            </div>
          </div>
          <div className="smoker">
            <div className="smoker_icon_text icon_text">
              <FontAwesomeIcon className="icon" icon={faSmoking} />
              <p>Smoker</p>
            </div>
            <div className="smoker_yes_no yes_no">
              {babysitter.smoker ? "Yes" : "NO"}
            </div>
          </div>
          <div className="language">
            <div className="language_icon_text icon_text">
              <FontAwesomeIcon className="icon" icon={faLanguage} />
              <p>Languages that i speak</p>
            </div>
            <div className="language_yes_no yes_no">{babysitter.Languages}</div>
          </div>
          <div className="favorited">
            <div className="favorited_icon_text icon_text">
              <FontAwesomeIcon className="icon" icon={faHeart} />
              <p>Favorited</p>
            </div>
            <div className="favorited_yes_no yes_no">
              {babysitter.Favorited}times
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabySittersAbout;
