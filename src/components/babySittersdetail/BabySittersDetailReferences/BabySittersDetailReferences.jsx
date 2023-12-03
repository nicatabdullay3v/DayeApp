import React from "react";
import "./BabySittersDetailReferences.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const BabySittersDetailReferences = () => {
  return (
    <>
      <section id="references">
        <div className="references">
          <h2 style={{ marginBottom: "20px" }}>
            {" "}
            <span>1</span> References
          </h2>
          <div className="references_box">
            <div className="references_box_up">
              <div className="references_box_image">
                <img
                  src="./../../../../src/assets/images/babysitter-5257240-1695824808-rc-w350-h350.avif"
                  alt=""
                />
              </div>
              <div className="references_box_name_rate">
                <div className="name">
                  <h3>Steven</h3>
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
            <div className="references_box_middle">
              <div className="references_box_middle_text">
                <p>
                  Amanda was wonderful with our two little boys. Even though
                  they've never had a babysitter before, they wanted to crawl
                  over her like she was
                </p>
              </div>
              <div className="read">
                <p>Read more</p>
              </div>
            </div>
            <div className="references_box_down_time">
              <p>May 2022</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BabySittersDetailReferences;
