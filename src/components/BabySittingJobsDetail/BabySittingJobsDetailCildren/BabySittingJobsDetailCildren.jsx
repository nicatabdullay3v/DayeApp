import React from "react";
import "./BabySittingJobsDetailCildren.scss";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { fetcBabysitterJobsDeatil } from "../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useSelector, useDispatch } from "react-redux";
import { faBriefcase, faCakeCandles } from "@fortawesome/free-solid-svg-icons";
const BabySittersExperience = () => {
  const babysitterswantedData = useSelector(
    (state) => state.babysitters.babysitterwanted
  );
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(fetcBabysitterJobsDeatil(id));
  }, []);
  ///
  return (
    <section id="experince">
      <div className="experince">
        <div className="experience_babysitting sa">
          <div className="experience_babysitting_icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div className="experince_babysitting_text">
            <div className="experience_babysitting_title">
              <h2>Number of children</h2>
            </div>
            <div className="experience_babysitting_description">
              <p> {babysitterswantedData.numberofChildren}</p>
            </div>
          </div>
        </div>
        <div className="experience_babysitting">
          <div className="experience_babysitting_icon">
            <FontAwesomeIcon icon={faCakeCandles} />
          </div>
          <div className="experince_babysitting_text">
            <div className="experience_babysitting_title">
              <h2>Age of children</h2>
            </div>
            <div className="experience_babysitting_description">
              <p>
                {" "}
                {babysitterswantedData?.childrenAge === "5-7" ? (
                  <p>Gradeschooler</p>
                ) : babysitterswantedData?.childrenAge === "3-5" ? (
                  <p>Presschooler</p>
                ) : babysitterswantedData?.childrenAge === "1-3" ? (
                  <p>Toddler</p>
                ) : babysitterswantedData?.childrenAge === "0-1" ? (
                  <p>Baby</p>
                ) : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabySittersExperience;
