import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import "../FavoritesCard/FavoritesCard.scss";
function index() {
  return (
    <div>
      <Link style={{ textDecoration: "none" }}>
        <div className="fav-card">
          <div className="card-left">
            <div className="image">
              <img
                src="https://cdn.babysits.com/users/a/5/6/3896224/babysitter-3896224-1697038409-rc-w350-h350.avif"
                alt=""
              />
            </div>
          </div>

          <dv className="card-right">
            <div className="name">
              Amanda
              <div className="icon">
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: "#59bec9", fontSize: "19px" }}
                />
              </div>
            </div>
            <div className="information">
              <div className="city">Dodge City</div>
              <div className="review">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#59bec9", fontSize: "13px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#59bec9", fontSize: "13px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#59bec9", fontSize: "13px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#59bec9", fontSize: "13px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#59bec9", fontSize: "13px" }}
                />
                <span>1 review</span>
              </div>
              <div className="ref">2 references</div>
            </div>
          </dv>
        </div>
      </Link>
    </div>
  );
}

export default index;
