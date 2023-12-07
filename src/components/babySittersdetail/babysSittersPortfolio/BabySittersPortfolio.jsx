import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BabySittersPortfolio.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserByIdDetail } from "../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const BabySittersPortfolio = () => {
  const babysittersData = useSelector((state) => state.babysitters.babysitter);
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(fetchUserByIdDetail(id));
  }, []);

  return (
    <section id="baby_sitters_portfolioo">
      <div className="container">
        <div className="baby_sitters_portfolio">
          <div className="baby_sitters_portfolio_image">
            <img src={babysittersData.image} alt="" />
          </div>
          <div>
            <div className="baby_sitters_portfolio_name_age_icon">
              <div className="baby_sitters_portfolio_name">
                <p style={{ color: "white" }}> {babysittersData.firstName}</p>
              </div>
              <div className="baby_sitters_portfolio_icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
            </div>
            <div className="baby_sitters_portfolio_age">
              <p style={{ color: "white" }}>{babysittersData.age}</p>
            </div>
            <div className="baby_sitters_portfolio_country">
              <span style={{ color: "white" }}>
                Babysitter in {babysittersData.country}
              </span>
            </div>
          </div>
          <div className="comets">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 8.4 }}
              className="comet"
            >
              {" "}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 8 }}
              className="comet"
            >
              {" "}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 7.3 }}
              className="comet"
            >
              {" "}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 6.7 }}
              className="comet"
            >
              {" "}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 6.3 }}
              className="comet"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 5.9 }}
              className="comet"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 5.3 }}
              className="comet"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 4.9 }}
              className="comet"
            >
              {" "}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 4.4 }}
              className="comet"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 3.4 }}
              className="comet"
            >
              {" "}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 2.8 }}
              className="comet"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 2.4 }}
              className="comet"
            >
              {" "}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 1.7 }}
              className="comet"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 1.22 }}
              className="comet"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 11.22 }}
              className="comet"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 10.22 }}
              className="comet"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 3.7 }}
              className="comet"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -1600, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 23 }}
              className="comet"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.8, 2, 0.8] }}
                transition={{ duration: 1 }}
                className="comett"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabySittersPortfolio;
