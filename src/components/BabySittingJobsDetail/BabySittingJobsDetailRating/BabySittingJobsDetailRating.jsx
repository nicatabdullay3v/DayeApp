import React from "react";
import "./BabySittingJobsDetailRating.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faStar } from "@fortawesome/free-solid-svg-icons";
const BabySittersDetailrating = () => {
  return (
    <>
      <section id="baby_sitters_detail_rating">
        <div className="baby_sitters_detail_rating">
         
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
         <p style={{fontWeight:"600",textDecoration:"underline",marginTop:"10px"}}>Read more</p>
         <p style={{marginTop:"10px",marginBottom:"10px"}}>Characteristics of the children</p>
         <span>Energetic</span>
         <span> Curious </span>
         <span>Calm</span>
        </div>
      </section>
    </>
  );
};

export default BabySittersDetailrating;
