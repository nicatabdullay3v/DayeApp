import React, { useEffect } from "react";
import "./BabySittersExperince.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserByIdDetail } from "../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useDispatch } from "react-redux";
const BabySittersExperience = () => {
  const babysittersData = useSelector((state) => state.babysitters.babysitter);

  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(fetchUserByIdDetail(id));
  }, []);
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
              <p>{babysittersData?.experienceYear} year</p>
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
              <p>
                {babysittersData.experienceChildrenAge === "0-1"
                  ? "Baby"
                  : babysittersData.experienceChildrenAge === "1-3"
                  ? "Toddler"
                  : babysittersData.experienceChildrenAge === "3-5"
                  ? "Presschooler"
                  : babysittersData.experienceChildrenAge === "5-7"
                  ? "Gradeschooler"
                  : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabySittersExperience;
