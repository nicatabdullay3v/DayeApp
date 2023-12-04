import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { faChildren } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./FindJobCard.scss";
function index({ elem }) {
  return (
    <div className="babysitter">
      <Link
        to={`/BabySittingJobsDetail/${elem.id}`}
        className="card-link"
        style={{ textDecoration: "none" }}
      >
        <div className="babysitter-card">
          <div className="card-left">
            <div className="image">
              <img src={elem.image} />
            </div>
          </div>
          <div className="card-right">
            <div className="name">
              <p>{elem.name}</p>
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "#59bec9" }}
              />
              <div className="heart">
                <FontAwesomeIcon icon={faHeart} style={{ color: "#bdc6ce" }} />
              </div>
            </div>

            <div className="description">
              <p>Babysitting in {elem.address?.country}</p>
              <p>{elem.about}</p>
            </div>
            <div className="experience">
              <FontAwesomeIcon icon={faChildren} style={{ color: "#59bec9" }} />
              <p>Number of children: {elem.numberofChildren}</p>
            </div>
            <div className="experience">
              <FontAwesomeIcon
                icon={faCakeCandles}
                style={{ color: "#59bec9" }}
              />
              <p>Age of children: {elem.childrenAge}</p>
            </div>
            <div className="experience">
              <FontAwesomeIcon
                icon={faChartLine}
                style={{ color: "#59bec9" }}
              />
              <p>Last activity: Today</p>
            </div>
          </div>
          <div className="price">$14.00/hr</div>
        </div>
      </Link>
    </div>
  );
}

export default index;
