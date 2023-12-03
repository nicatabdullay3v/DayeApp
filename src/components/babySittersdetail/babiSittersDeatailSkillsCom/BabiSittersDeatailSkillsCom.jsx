import React from "react";
import "./BabiSittersDeatailSkillsCom.scss";
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
          <h2 style={{ marginBottom: "10px", fontWeight: "500" }}>Skills</h2>
          <div className="baby_sitters_skills_com_left">
            <div className="crafting">
              <div className="crafting_icon_text icon_text">
                <FontAwesomeIcon className="icon" icon={faScissors} />

                <p>Crafting</p>
              </div>
            </div>
            <div className="drawing">
              <div className="drawing_icon_text icon_text">
                <FontAwesomeIcon className="icon" icon={faPencil} />

                <p> Drawing</p>
              </div>
            </div>
            <div className="reading">
              <div className="reading_icon_text icon_text">
                <FontAwesomeIcon className="icon" icon={faBookOpenReader} />

                <p>Reading</p>
              </div>
            </div>
            <div className="music">
              <div className="music_icon_text icon_text">
                <FontAwesomeIcon className="icon" icon={faMusic} />
                <p> Music</p>
              </div>
            </div>
            <div className="dice">
              <div className="dice_icon_text icon_text">
                <FontAwesomeIcon className="icon" icon={faDice} />
                <p> Games</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 style={{ marginBottom: "10px", fontWeight: "500" }}>
            I'm comfortable with
          </h1>
          <div className="baby_sitters_skills_com_right">
            <div className="pets">
              <div className="pets_icon_text icon_text">
                <FontAwesomeIcon className="icon" icon={faPaw} />
                <p>Pets</p>
              </div>
            </div>
            <div className="smoker">
              <div className="smoker_icon_text icon_text">
                <FontAwesomeIcon className="icon" icon={faUtensils} />
                <p>Cooking</p>
              </div>
            </div>
            <div className="language">
              <div className="language_icon_text icon_text">
                <FontAwesomeIcon className="icon" icon={faBroom} />
                <p>Chores</p>
              </div>
            </div>
            <div className="favorited">
              <div className="favorited_icon_text icon_text">
                <FontAwesomeIcon className="icon" icon={faSwatchbook} />
                <p>Homework assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabiSittersDeatilSkillsCom;
