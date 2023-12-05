import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link, json } from "react-router-dom";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./BabysittersCard.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  PatchWishList,
  fetcBabysitterJobsDeatil,
} from "../../redux/Slice/BabySittersSlice/BabySittersSlice";
import axios from "axios";
import { fetchUserById } from "../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { fetcBabysitterJobs } from "../../redux/Slice/BabySittersSlice/BabySittersSlice";

function index({ elem }) {
  let babysitters = useSelector((state) => state.babysitters.babysitters);
  let parents = useSelector((state) => state.babysitters.babysitterswanted);

  let loginParent = JSON.parse(localStorage.getItem("login")) || [];

  let dispatch = useDispatch();
  let isBabysitter = JSON.parse(localStorage.getItem("isBabysitter")) || [];
  useEffect(() => {
    dispatch(fetcBabysitterJobs());
    // dispatch(fetchUserById())
  }, []);
  let isParent = JSON.parse(localStorage.getItem("isParent")) || [];
  let parent = parents.find((x) => x.id == loginParent.id);
  console.log(parent?.wishList);
  let color = parent?.wishList.find((x) => x.id == elem.id) ? "blue" : "gray";

  return (
    <div className="babysitter">
      <Link
        // to={`/babysittersDetail/${elem.id}`}
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
                  onClick={() => {
                    console.log("salam");
                    if (isParent) {
                      if (parent.wishList.find((x) => x.id == elem.id)) {
                        axios
                          .patch(
                            `http://localhost:3000/babysitterswanted/${loginParent.id}`,
                            {
                              wishList: parent.wishList.filter(
                                (x) => x.id != elem.id
                              ),
                            }
                          )
                          .then(dispatch(fetcBabysitterJobs()));
                      } else {
                        axios
                          .patch(
                            `http://localhost:3000/babysitterswanted/${loginParent.id}`,
                            {
                              wishList: [...parent?.wishList, elem],
                            }
                          )
                          .then(dispatch(fetcBabysitterJobs()));
                      }
                    }
                  }}
                  icon={faHeart}
                  style={{ color: isParent === true ? color : "gray" }}
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
