import React, { useEffect } from "react";
import "./BabySittingJobsDetailHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, json, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchUserById } from "../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { fetcBabysitterJobs } from "../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { motion } from "framer-motion";
const BabySittersHeader = () => {
  let { id } = useParams();
  console.log(id);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserById());
    dispatch(fetcBabysitterJobs());
  }, []);

  let parents = useSelector((state) => state.babysitters.babysitterswanted);
  console.log(parents);
  let parent = parents.find((x) => x.id == id);
  console.log(parent);
  let isBabysitter = JSON.parse(localStorage.getItem("isBabysitter")) || [];
  const babysitters = useSelector((state) => state.babysitters.babysitters);

  let loginBabysitter = JSON.parse(localStorage.getItem("login")) || [];
  let babysitter = babysitters?.find((x) => x.id == loginBabysitter.id);

  let color = babysitter?.wishList?.find((x) => x.id == id) ? "blue" : "gray";
  return (
    <header>
      <div className="container">
        <div className="baby_sitters_header">
          <div className="header_left">
            <span>Babysits</span>/<span>Babysitter wanted</span>/
            <span>Babysitter Raleigh</span>/<span>Jaida</span>
          </div>

          <div className="header_right">
            <div className="header_right_share">
              <FontAwesomeIcon className="icon" icon={faShareFromSquare} />
              <span>Share</span>
            </div>
            <motion.div whileTap={{ scale: 2 }} className="header_right_save">
              <FontAwesomeIcon
                onClick={() => {
                  console.log(isBabysitter);
                  if (isBabysitter) {
                    if (babysitter?.wishList.find((x) => x.id == id)) {
                      axios
                        .patch(
                          `http://localhost:3000/babysitters/${loginBabysitter.id}`,
                          {
                            wishList: babysitter?.wishList.filter(
                              (x) => x.id != id
                            ),
                          }
                        )
                        .then(dispatch(fetchUserById()));
                    } else {
                      axios
                        .patch(
                          `http://localhost:3000/babysitters/${loginBabysitter.id}`,
                          {
                            wishList: [...babysitter?.wishList, parent],
                          }
                        )
                        .then(dispatch(fetchUserById()));
                    }
                  }
                }}
                className="icon"
                style={{ color: isBabysitter ? color : "gray" }}
                icon={faHeart}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BabySittersHeader;
