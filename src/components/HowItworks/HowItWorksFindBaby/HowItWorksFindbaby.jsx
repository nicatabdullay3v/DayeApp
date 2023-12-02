import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HowItWorksFindBaby.scss";
import {
  faCaretRight,
  faChevronCircleRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const HowItWorksFindBaby = () => {
  return (
    <section id="how_it_works_find_baby">
      <div className="container">
        <h3>Find a babysitter or job quick & easy</h3>
        <div className="one_two_three">
          <div className="circle">1</div>
          <div className="line"></div>
          <div className="circle">2</div>
          <div className="line"></div>
          <div className="circle">3</div>
        </div>
        <div className="boxs">
          <div className="search">
            <div>
              <div className="circle_search"></div>
              <div className="boxs_details">
                <p>Search</p>
              </div>
              <p>・Check detailed profiles</p>

              <p>・Review trustworthy user verifications</p>
              <p>・Filter based on your needs</p>
              <p style={{ textDecoration: "underline", fontWeight: "600" }}>
                <FontAwesomeIcon
                  style={{ marginLeft: "5px" }}
                  icon={faCaretRight}
                />{" "}
                Supersitter program
              </p>
              <p style={{ textDecoration: "underline", fontWeight: "600" }}>
                <FontAwesomeIcon
                  style={{ marginLeft: "5px" }}
                  icon={faCaretRight}
                />{" "}
                Sign up
              </p>
            </div>
          </div>
          <div className="connect">
            <div>
              <div className="circle_connect"></div>
              <div className="boxs_details">
                <p>Connect</p>
              </div>
              <p>・ Use our secure messaging service</p>

              <p>・ Screen, interview and choose</p>
              <p>・Free for babysitters</p>
              <p> ・ Affordable for families</p>
              <p style={{ textDecoration: "underline", fontWeight: "600" }}>
                <FontAwesomeIcon
                  style={{ marginLeft: "5px" }}
                  icon={faCaretRight}
                />{" "}
                Pricing for families and babysitters
              </p>
            </div>
          </div>
          <div className="book">
            <div>
              <div className="circle_book"></div>
              <div className="boxs_details">
                <p>Book</p>
              </div>
              <p>・ Plan and pay bookings</p>

              <p>・Download receipts for expense or tax declarations</p>
            </div>
          </div>
        </div>

        <div className="sign_button">
          <button>Sign up for free</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksFindBaby;
