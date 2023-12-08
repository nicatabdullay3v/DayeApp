import React from "react";
import "./BabySittersdetailrating.scss";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faStar } from "@fortawesome/free-solid-svg-icons";
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
          <div className="baby_sitters_detail_rate">
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <span className="rew">
              {babysittersData.reviews && babysittersData.reviews.length} Review
            </span>
            ·
            <FontAwesomeIcon className="medal" icon={faMedal} />
            <span>SuperSitter</span>
          </div>
          <div className="baby_sitters_detail_rating_text">
            <p>
              Hello to all inquires. My name is Jaida Morris, I am 19 years old
              and I am passionate about reading, painting, writing, music and
              even photography. I love children and believe that they are the
              gateway to heaven. I spent time watching kids for most of my life
              that includes cousins, nieces, nephews and even kids I didn’t
              know. I love children … any child is a safe child with me.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BabySittersDetailrating;
