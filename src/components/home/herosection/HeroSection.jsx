import React, { useEffect, useState } from "react";
import "./HeroSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faStar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import axios from "axios";
const HeroSection = () => {
  const [indexOfSpan, setIndexOfSpan] = useState(0);
  let heroTitleSpan = ["nanies", "families", "babysitters"];
  const [babysittersData, setbabysittersData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  let filteredData = babysittersData.filter((elem) => {
    return elem.firstName
      .toLowerCase()
      .trim()
      .includes(inputValue.toLowerCase().trim());
  });

  console.log(filteredData);
  useEffect(() => {
    axios("http://localhost:3000/babysitters").then((res) => {
      setbabysittersData(res.data);
    });
    setInterval(() => {
      setIndexOfSpan((prevIndex) =>
        prevIndex === heroTitleSpan.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
  }, []);

  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero_text">
            <div className="hero_text_title">
              <p>
                The childcare platform trusted by <span></span>
                <span> {heroTitleSpan[indexOfSpan]}</span>
              </p>
            </div>
            <div className="hero_text_wanted_jobs">
              <div className="hero_text_wanted">
                <p>Babysitter wanted </p>
              </div>
              <div className="hero_text_jobs">
                <p>Babysitting jobs</p>
              </div>
            </div>
            {/* <div className="hero_text_line"> */}
            {/* <div className="line1"></div> */}
            {/* <div className="line2"></div> */}
            {/* </div> */}
            <div className="hero_input">
              <div style={{ width: "100%" }}>
                <p style={{ fontSize: "11.2px" }}>Quickly find a babysitter</p>
                <input
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  placeholder="City or postal code"
                  type="text"
                />
              </div>
              <FontAwesomeIcon className="glass" icon={faMagnifyingGlass} />
              <div className="babysitters">
                { inputValue== ""? null : filteredData.map((elem, i) => {
                  return (
                    <div key={i} className="filtered_data">
                      {elem.firstName}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="sing_up_for_free">
              <button>Sign up for free</button>
            </div>
            <div className="slider">
              <div className="hero_text_slider">
                <img
                  src="./../../../../src/assets/images/us-cbs-news.png"
                  alt=""
                />
                <img
                  src="./../../../../src/assets/images/us-deseret.png"
                  alt=""
                />
                <img
                  src="./../../../../src/assets/images/ca-greenpeace.png"
                  alt=""
                />{" "}
                <img
                  src="./../../../../src/assets/images/us-cbs-news.png"
                  alt=""
                />
                <img
                  src="./../../../../src/assets/images/us-deseret.png"
                  alt=""
                />
                <img
                  src="./../../../../src/assets/images/ca-greenpeace.png"
                  alt=""
                />{" "}
                <img
                  src="./../../../../src/assets/images/us-cbs-news.png"
                  alt=""
                />
                <img
                  src="./../../../../src/assets/images/us-deseret.png"
                  alt=""
                />
                <img
                  src="./../../../../src/assets/images/ca-greenpeace.png"
                  alt=""
                />
              </div>
              <div className="hero_text_slider">
                <img
                  src="./../../../../src/assets/images/us-cbs-news.png"
                  alt=""
                />
                <img
                  src="./../../../../src/assets/images/us-deseret.png"
                  alt=""
                />
                <img
                  src="./../../../../src/assets/images/ca-greenpeace.png"
                  alt=""
                />{" "}
                <img
                  src="./../../../../src/assets/images/us-cbs-news.png"
                  alt=""
                />
                <img
                  src="./../../../../src/assets/images/us-deseret.png"
                  alt=""
                />
                <img
                  src="./../../../../src/assets/images/ca-greenpeace.png"
                  alt=""
                />{" "}
                <img
                  src="./../../../../src/assets/images/us-cbs-news.png"
                  alt=""
                />
                <img
                  src="./../../../../src/assets/images/us-deseret.png"
                  alt=""
                />
                <img
                  src="./../../../../src/assets/images/ca-greenpeace.png"
                  alt=""
                />
              </div>
            </div>
            <div className="hero_text_star">
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <p>4.7/5</p>
            </div>
          </div>
          <div className="babysitter_image">
            <img src="./../../../../src/assets/images/babysits_6.webp" alt="" />
          </div>
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="circle1"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="circle2"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
