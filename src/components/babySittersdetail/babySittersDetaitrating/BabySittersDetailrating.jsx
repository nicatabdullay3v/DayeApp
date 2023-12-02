import React from "react";
import "./BabySittersdetailrating.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const BabySittersDetailrating = () => {
  return (
    <>
      <section id="baby_sitters_detail_rating">
        <div className="container">
          <div className="baby_sitters_detail_rating">
            <div className="baby_sitters_detail_rate">
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />


              <span className="rew"> 1 Review</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BabySittersDetailrating;
