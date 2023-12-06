import React from "react";
import "./BabySittingJobsDetailReview.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { fetcBabysitterJobs } from "../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
const BabySittersDetailReview = () => {
  const [inputOpen, setInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const parents = useSelector((state) => state.babysitters.babysitterswanted);
  const dispatch = useDispatch();
  let { id } = useParams();
  let babysitter = JSON.parse(localStorage.getItem("login")) || [];
  console.log(id);
  useEffect(() => {
    dispatch(fetcBabysitterJobs());
  }, []);
  let parent = parents.find((x) => x.id == id);
  return (
    <>
      <section id="review">
        <div className="review">
            <h2 style={{marginBottom:"20px"}}> <span>1</span> Reviews</h2>
         <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>   {parent?.reviews.map((elem) => {
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
            })}</div>
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
            <button
              onClick={() => {
                setInputOpen(inputOpen === true ? false : true);
              }}
            >
              Add Review
            </button>
          </div>
          {inputOpen === true ? (
            <div>
              <button
                onClick={() => {
                  if (inputValue == "") {
                    alert("bosdu ");
                  } else {
                    axios
                      .patch(`http://localhost:3000/babysitterswanted/${id}`, {
                        reviews: [
                          ...parent.reviews,
                          {
                            comment: inputValue,
                            whoSend: babysitter.firstName,
                            id: babysitter.id,
                            image: babysitter.image,
                          },
                        ],
                      })
                      .then(()=>{
                        dispatch(fetcBabysitterJobs())
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
