import React, { useEffect } from "react";
import "./BabySittingJobsDetailAbout.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { fetcBabysitterJobsDeatil } from "../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useSelector, useDispatch } from "react-redux";
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
  const babysitterswantedData = useSelector(
    (state) => state.babysitters.babysitterwanted
  );
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(fetcBabysitterJobsDeatil(id));
  }, []);

  return (
    <section id="baby_sitters_about">
      <h1 style={{ backgroundColor: "white", marginBottom: "20px" }}>
        About our family
      </h1>
      <div className="baby_sitters_about">
        <div className="baby_sitters_about_left">
          <div className="driver_license">
            <div className="driver_license_icon_text icon_text">
              <FontAwesomeIcon className="icon" icon={faIdCard} />

              <p>Type of babysitter needed</p>
              <div className="driver_license_yes_no yes_no">Babysitter</div>
            </div>
          </div>
          <div className="has_children">
            <div className="has_children_icon_text icon_text">
              <FontAwesomeIcon className="icon" icon={faLanguage} />

              <p> Languages we speak</p>
            </div>
            <div className="has_children_yes_no yes_no">
              {babysitterswantedData.Languages}
            </div>
          </div>
        </div>
        <div className="baby_sitters_about_right">
          <div className="car">
            <div className="car_icon_text icon_text">
              <FontAwesomeIcon className="icon" icon={faHouse} />
              <p>Preferred babysitting location</p>
            </div>
            <div className="car_yes_no yes_no">
              {babysitterswantedData.location}
            </div>
          </div>

          <div className="favorited">
            <div className="favorited_icon_text icon_text">
              <FontAwesomeIcon className="icon" icon={faHeart} />
              <p>Favorited</p>
              <br />
            </div>
            <div className="favorited_yes_no yes_no">
              {babysitterswantedData.Favorited}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabySittersAbout;
