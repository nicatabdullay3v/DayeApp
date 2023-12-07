import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../../parents/DetailPage/DetailPage.scss";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { fetchUserById } from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useDispatch, useSelector } from "react-redux";

const DetailPage = ({ editID, setdetailPage }) => {
  const dispatch = useDispatch();


  const babysittersData = useSelector((state) => state.babysitters.babysitters);
  const currentlySister = babysittersData.find((elem) => elem.id === editID);


  useEffect(() => {
    dispatch(fetchUserById(editID));
  }, [dispatch, editID]);

  const deleteReview = (reviewId) => {
    const updatedReviews = [...currentlySister.reviews];
    const filteredReviews = updatedReviews.filter(
      (review) => review.id !== reviewId
    );
    // currentlySister.reviews = filteredReviews;
    axios
      .patch(`http://localhost:3000/babysitters/${editID}`, {
        reviews: filteredReviews,
      })
      .then(() => {
        dispatch(fetchUserById());
        // setdetailPage(false);
      });
  };
  return (
    <section id="detail_page">
      <div className="container">
        <h1>Detail {currentlySister.firstName}</h1>
        <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
          {currentlySister?.reviews.map((elem) => (
            <div className="review_boxx" key={elem.id}>
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
                    <FontAwesomeIcon className="icon" icon={faStar} />
                    <FontAwesomeIcon className="icon" icon={faStar} />
                    <FontAwesomeIcon className="icon" icon={faStar} />
                    <FontAwesomeIcon className="icon" icon={faStar} />
                    <FontAwesomeIcon className="icon" icon={faStar} />
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
              <div
                className="review_box_down_time"
                style={{ display: "flex", gap: "10px" }}
              >
                <p>May 2022</p>
                <button onClick={() => deleteReview(elem.id)}>delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
