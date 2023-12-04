import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./BabysittersCard.scss";
import { useDispatch } from "react-redux";
import { PatchWishList } from "../../redux/Slice/BabySittersSlice/BabySittersSlice";
import axios from "axios";
function index({ elem }) {
  let dispatch = useDispatch();
  return (
    <div className="babysitter">
      <Link
        to={`/babysittersDetail/${elem.id}`}
        className="card-link"
        style={{ textDecoration: "none" }}
      >
        <div className="babysitter-card">
          <div className="card-left">
            <div className="image">
              <img src={elem.image} alt="" />
            </div>
            <div className="rating">
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
              <span>(1)</span>
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
                <FontAwesomeIcon
                  id={elem.id}
                  onClick={(e) => {
                    console.log(e.currentTarget.id);
                  }}
                  icon={faHeart}
                  style={{ color: "#bdc6ce" }}
                />
              </div>
            </div>
            <div className="supersitter">
              <p>SUPPERSITTER</p>
            </div>

            <div className="description">
              <p>Babysitter in Raleigh</p>
              <p>{elem.about}</p>
            </div>
            <div className="experience">
              <FontAwesomeIcon
                icon={faSuitcaseRolling}
                style={{ color: "#59bac9" }}
              />
              <p>Experience: {elem.experience}</p>
            </div>
            <div className="experience">
              <FontAwesomeIcon icon={faCalendar} style={{ color: "#59bac9" }} />
              <p>Bookings: {elem.bookings}</p>
            </div>
          </div>
          <div className="price">${elem.price}/hr</div>
        </div>
      </Link>
    </div>
  );
}

export default index;
