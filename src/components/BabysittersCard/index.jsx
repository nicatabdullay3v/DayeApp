import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./BabysittersCard.scss";
import axios from "axios";
function index({elem}) {
  return (
    <div className="babysitter">
      <Link className="card-link" style={{ textDecoration: "none" }}>
        <div className="babysitter-card">
          <div className="card-left">
            <div className="image">
              <img
                src={elem.image}
                alt=""
              />
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
              <p>Jaida</p>

              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "#59bec9" }}
              />
              <div className="heart">
                <FontAwesomeIcon id={elem.id} onClick={(e)=>{
                  console.log(e.currentTarget.id);
                  

                }} icon={faHeart} style={{ color: "#bdc6ce" }} />
              </div>
            </div>
            <div className="supersitter">
              <p>SUPPERSITTER</p>
            </div>

            <div className="description">
              <p>Babysitter in Raleigh</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                a repudiandae tenetur quos ex eos recusandae praesentium ullam
                perferendis iure.
              </p>
            </div>
            <div className="experience">
              <FontAwesomeIcon
                icon={faSuitcaseRolling}
                style={{ color: "#59bac9" }}
              />
              <p>Experience: 6 years</p>
            </div>
            <div className="experience">
              <FontAwesomeIcon icon={faCalendar} style={{ color: "#59bac9" }} />
              <p>Bookings: 1</p>
            </div>
          </div>
          <div className="price">$14.00/hr</div>
        </div>
      </Link>
    </div>
  );
}

export default index;
