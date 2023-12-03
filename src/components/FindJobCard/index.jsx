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
function index() {
  return (
    <div className="babysitter">
      <Link to="/BabySittingJobsDetail" className="card-link" style={{ textDecoration: "none" }}>
        <div className="babysitter-card">
          <div className="card-left">
            <div className="image">
              <img
                src="https://cdn.babysits.com/users/8/a/9/5341452/babysitter-job-5341452-1698093480-rc-w350-h350.avif"
                alt=""
              />
            </div>
          </div>
          <div className="card-right">
            <div className="name">
              <p>Caitlin</p>
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "#59bec9" }}
              />
              <div className="heart">
                <FontAwesomeIcon icon={faHeart} style={{ color: "#bdc6ce" }} />
              </div>
            </div>

            <div className="description">
              <p>Babysitting in Raleigh</p>
              <p>
                First time parents. 7 month old baby girl. Not yet crawling but
                trying to move around more. We have two dogs that can be out of
                the home if needed. Dad’s days off changed from Wednesday and
                Thursday to Sunday Monday and I have to be in office on
                Wednesdays.
              </p>
            </div>
            <div className="experience">
              <FontAwesomeIcon icon={faChildren} style={{ color: "#59bec9" }} />
              <p>Number of children: 1</p>
            </div>
            <div className="experience">
              <FontAwesomeIcon
                icon={faCakeCandles}
                style={{ color: "#59bec9" }}
              />
              <p>Age of children: Baby</p>
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
