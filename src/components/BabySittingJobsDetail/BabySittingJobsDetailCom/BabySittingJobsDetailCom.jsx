import React from "react";
import "./BabySittingJobsDetailCom.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faBroom,
  faCarSide,
  faDice,
  faGraduationCap,
  faHeart,
  faHouse,
  faIdCard,
  faLanguage,
  faMusic,
  faPaw,
  faPencil,
  faPerson,
  faScissors,
  faSmoking,
  faSwatchbook,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
const BabiSittersDeatilSkillsCom = () => {
  return (
    <section id="baby_sitters_skills_com">
      <div className="baby_sitters_skills_com">
        <div>
          <h1 style={{ marginBottom: "10px", fontWeight: "500" }}>
            We need a babysitter comfortable with
          </h1>
          <div className="baby_sitters_skills_com_right">
            <div className="pets">
              <div className="pets_icon_text icon_text">
                <FontAwesomeIcon className="icon" icon={faPaw} />
                <p>Pets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabiSittersDeatilSkillsCom;
