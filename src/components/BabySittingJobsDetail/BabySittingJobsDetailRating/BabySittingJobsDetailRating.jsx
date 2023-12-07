import React from "react";
import "./BabySittingJobsDetailRating.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserByIdDetail } from "../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useDispatch } from "react-redux";
const BabySittersDetailrating = () => {
  const babysittersData = useSelector((state) => state.babysitters.babysitter);
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(fetchUserByIdDetail(id));
  }, []);
  console.log(babysittersData);
  return (
    <>
      <section id="baby_sitters_detail_rating">
        <div className="baby_sitters_detail_rating">
          <div className="baby_sitters_detail_rating_text">
            <p>{babysittersData.about}</p>
          </div>
          <p
            style={{
              fontWeight: "600",
              textDecoration: "underline",
              marginTop: "10px",
            }}
          >
            Read more
          </p>
          <p style={{ marginTop: "10px", marginBottom: "10px" }}>
            Characteristics of the children
          </p>
          <span>Energetic</span>
          <span> Curious </span>
          <span>Calm</span>
        </div>
      </section>
    </>
  );
};

export default BabySittersDetailrating;
