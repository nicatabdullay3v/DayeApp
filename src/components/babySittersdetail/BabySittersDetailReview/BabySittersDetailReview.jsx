import React, { useEffect, useState } from "react";
import "./BabySittersDetailReview.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { fetchUserById } from "../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
const BabySittersDetailReview = () => {
  const [inputOpen, setInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const babysitters = useSelector((state) => state.babysitters.babysitters);
  const dispatch = useDispatch();
  let { id } = useParams();
  let parent = JSON.parse(localStorage.getItem("login")) || [];
  console.log(id);
  useEffect(() => {
    dispatch(fetchUserById());
  }, []);
  let babysitter = babysitters.find((x) => x.id == id);
  console.log('reviews: ',babysitter?.reviews);

  return (
    <>
      <section id="review">
        <div className="review">
          <h2 style={{ marginBottom: "20px" }}>
            {" "}
            <span>1</span> Reviews
          </h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {babysitter?.reviews.map((elem) => {
              return (
                <div className="review_boxx">
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
                  <div className="review_box_down_time">
                    <p>May 2022</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            marginTop: "70px",
          }}
          className="add_review"
        >
          {inputOpen === true ? (
            <textarea
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              type="text"
            />
          ) : null}
          <div>
          {inputOpen == false ? (
              <button
                onClick={() => {
                  setInputOpen(true);
                }}
              >
                Add Review
              </button>
            ) : null}
            {inputOpen == true ? (
              <button
                onClick={() => {
                  setInputOpen(false);
                }}
              >
                Cancel
              </button>
            ) : null}
          </div>
          {inputOpen === true ? (
            <div>
              <button
                onClick={() => {
                  if (inputValue == "") {
                    alert("bosdu ");
                  } else {
                    axios
                      .patch(`http://localhost:3000/babysitters/${id}`, {
                        reviews: [
                          ...babysitter.reviews,
                          {
                            comment: inputValue,
                            whoSend: parent.firstName,
                            id: parent.id,
                            image: parent.image,
                          },
                        ],
                      })
                      .then(()=>{
                        dispatch(fetchUserById())
                      });
                    setInputOpen(false);
                    setInputValue("");
                  }
                }}
              >
                Accept
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default BabySittersDetailReview;
