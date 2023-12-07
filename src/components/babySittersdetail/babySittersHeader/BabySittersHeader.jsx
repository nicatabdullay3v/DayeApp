import React, { useEffect } from "react";
import "./babySittersHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faShareFromSquare, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link, json, useParams } from "react-router-dom";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetcBabysitterJobs } from "../../../redux/Slice/BabySittersSlice/BabySittersSlice";
const BabySittersHeader = () => {
  let { id } = useParams();
  let babysitters = useSelector((state) => state.babysitters.babysitters);
  let parents = useSelector((state) => state.babysitters.babysitterswanted);
  let babysitter = babysitters.find((x) => x.id == id);
  let loginParent = JSON.parse(localStorage.getItem("login")) || [];

  let dispatch = useDispatch();
  let isBabysitter = JSON.parse(localStorage.getItem("isBabysitter")) || [];
  useEffect(() => {
    dispatch(fetcBabysitterJobs());
    // dispatch(fetchUserById())
  }, []);
  let isParent = JSON.parse(localStorage.getItem("isParent")) || [];
  let parent = parents?.find((x) => x.id == loginParent.id);
  console.log(parent?.wishList);
  let color = parent?.wishList?.find((x) => x.id == id) ? "blue" : "gray";
  return (
    <header>
      <div className="container">
        <div className="baby_sitters_headerr">
          <div className="header_left">
            <span>Babysits</span>/<span>Babysitter wanted</span>/
            <span>Babysitter Raleigh</span>/<span>Jaida</span>
          </div>

          <div className="header_right">
            <div className="header_right_share">
              <FontAwesomeIcon className="icon" icon={faShareFromSquare} />
              <span>Share</span>
            </div>
            <div className="header_right_save">
              <FontAwesomeIcon
                onClick={() => {
                  if (isParent === true) {
                    if (parent.wishList.find((x) => x.id == id)) {
                      axios
                        .patch(
                          `http://localhost:3000/babysitterswanted/${loginParent.id}`,
                          {
                            wishList: parent.wishList.filter((x) => x.id != id),
                          }
                        )
                        .then(dispatch(fetcBabysitterJobs()));
                    } else {
                      axios
                        .patch(
                          `http://localhost:3000/babysitterswanted/${loginParent.id}`,
                          {
                            wishList: [...parent?.wishList, babysitter],
                          }
                        )
                        .then(dispatch(fetcBabysitterJobs()));
                    }
                  }
                }}
                className="icon"
                style={{ color: isParent === true ? color : "gray" }}
                icon={faHeart}
              />
              <span>Save</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BabySittersHeader;
