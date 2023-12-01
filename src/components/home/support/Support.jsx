import React from "react";
import "./support.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Support = () => {
  return (
    <section id="babysits_supports">
      <div className="baby_support">
        <div className="support_details">
          <h3>Babysits supports 5+ million members like you</h3>
          <div className="stars_support">
            <FontAwesomeIcon icon={faStar} style={{ color: "#c7f45e" }} />{" "}
            <FontAwesomeIcon icon={faStar} style={{ color: "#c7f45e" }} />{" "}
            <FontAwesomeIcon icon={faStar} style={{ color: "#c7f45e" }} />{" "}
            <FontAwesomeIcon icon={faStar} style={{ color: "#c7f45e" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#c7f45e" }} />
            <p>4.7 / 5</p>
          </div>
          <span>1800+reviews</span>
        </div>
        <div className="support_cards">
           <div className="support_card">
           <div className="vergul"></div>
            <div className="support_card_detail">
                <p>Beautiful and safe way to find babysitters and make the daily life of mothers and fathers who need help at home easier!</p>
                <span>Nerina</span>
            </div>
           </div>
           <div className="support_card">
           <div className="vergul"></div>
            <div className="support_card_detail">
                <p>This application is super easy to use, super useful, reliable, it has many security and identity verification systems that make users feel safe.</p>
                <span>Giovanna</span>
            </div>
           </div>
           <div className="support_card">
           <div className="vergul"></div>
            <div className="support_card_detail">
                <p>It is a fantastic and safe app, I discovered it last year, and I’ve had very good experiences working with very loving and caring families and children.</p>
                <span>Ana</span>
            </div>
           </div>
           <div className="support_card">
           <div className="vergul"></div>
            <div className="support_card_detail">
                <p>The application is very good, easy to access, fast and simple. It has many verification methods and easy contact. Highly recommended.</p>
                <span>Amanda</span>
            </div>
           </div>
           <div className="support_card">
           <div className="vergul"></div>
            <div className="support_card_detail">
                <p>It's more than good, it helped me make a life. It's a very nice experience spending time with children and being able to help them.</p>
                <span>Stefany</span>
            </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
