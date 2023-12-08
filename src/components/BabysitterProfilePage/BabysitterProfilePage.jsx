import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";
import axios from "axios";
// import { useParams } from "react-router-dom";
import { Link, Outlet, useNavigate } from "react-router-dom";

import {
  fetchUserById,
  fetcBabysitterJobs,
} from "../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import "./BabysitterProfilePage.scss";
import EditProfilePage from "./EditProfilePage/EditProfilePage";
import AboutProfilePage from "./AboutProfilePage/AboutProfilePage";

const BabysitterProfilePage = () => {
  let isBabySitters = JSON.parse(localStorage.getItem("isBabysitter"));
  let isParent = JSON.parse(localStorage.getItem("isParent"));
  const [situation, setsituation] = useState(true);
  const [editPage, setEditPage] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserById());
  }, []);

  useEffect(() => {
    dispatch(fetcBabysitterJobs());
  }, []);

  //   let { id } = useParams();
  let login = JSON.parse(localStorage.getItem("login"));
  const handleDelete = (id) => {
    const url = isBabySitters
      ? `http://localhost:3000/babysitters/${id}`
      : `http://localhost:3000/babysitterswanted/${id}`;
    axios.delete(url).then(() => {
      isBabySitters
        ? dispatch(fetchUserById())
        : dispatch(fetcBabysitterJobs());
      navigate("/");
      localStorage.removeItem("login");
      localStorage.removeItem("isParent");
      localStorage.removeItem("isBabysitter");
      setsituation((state) => !state);
      localStorage.removeItem("admin");
    });
  };

  return (
    <section id="baby_profile">
      <div className="profile-container">
        <Avatar
          className="avatar"
          sx={{ width: 100, height: 100, mt: 3, mb: 1 }}
        ></Avatar>
        <Typography variant="h5" gutterBottom className="name">
          {login.firstName}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Email: {login.email}
          {/* Age: {login.age} */}
        </Typography>
        <div className="profile_buttons">
          <Button
            variant="contained"
            color="error"
            className="delete-button"
            onClick={() => handleDelete(login.id)}
          >
            Delete
          </Button>

          <Button
            variant="outlined"
            className="edit-button"
            onClick={() => {
              setEditPage(true);
            }}
          >
            Edit
          </Button>
        </div>
      </div>

      {/* Detail Section */}

      <AboutProfilePage />

      {editPage ? <EditProfilePage /> : null}

      {/* Reviews Section */}
      <div className="container reviewscards">
        <Typography variant="h4" gutterBottom>
          Reviews
        </Typography>
        <div
          className="reviews-section"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="review_media" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {login?.reviews.map((elem, index) => {
              return (
                <div key={index} className="review_boxx">
                  <div className="review_box_up">
                    <div className="review_box_image">
                      <img
                        src="./../../../../src/assets/images/babysitter-5257240-1695824808-rc-w350-h350.avif"
                        alt=""
                      />
                    </div>
                    <div className="review_box_name_rate">
                      <div className="name">
                        <h3>{elem.whoSend}</h3>
                      </div>
                      <div className="rate">
                        {[...Array(5)].map((_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            className="icon"
                            icon={faStar}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="review_box_middle">
                    <div className="review_box_middle_text">
                      <p>{elem.comment}</p>
                    </div>
                    <div className="read">
                      <p>Read more</p>
                    </div>
                  </div>
                  <div className="review_box_down_time">
                    <p>May 2023</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabysitterProfilePage;
