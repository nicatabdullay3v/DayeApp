import React, { useRef, useState, useEffect } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./cards.scss";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import { fetchUserById } from "../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

const Cards = () => {
  const babysittersData = useSelector((state) => state.babysitters.babysitters);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById());
  }, []);

  const [swiperRef, setSwiperRef] = useState(null);
  const navigate = useNavigate();
  return (
    <>
      <section id="cards">
        <div className="container">
          <h3>Meet verified babysitters in your area</h3>
          <div className="cards">
            <button className="my-custom-prev-button">
              <FontAwesomeIcon
                className="arrow_icon"
                icon={faAngleLeft}
                style={{ color: "#3ba590" }}
              />
            </button>

            <Swiper
              onSwiper={(swiper) => {
                setSwiperRef(swiper);
              }}
              slidesPerView={"auto"}
              spaceBetween={30}
              navigation={{
                prevEl: ".my-custom-prev-button",
                nextEl: ".my-custom-next-button",
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper hidden"
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
            >
              {babysittersData.map((elem) => {
                return (
                  <SwiperSlide key={uuidv4()}>
                    <div
                      onClick={() => {
                        navigate(`/babysittersDetail/${elem.id}`);
                      }}
                      className="card"
                    >
                      <div className="card_image">
                        <img src={elem.image} alt="" />
                      </div>
                      <div className="card_detail">
                        <p>{elem.firstName}</p>
                        <span>{elem.country}</span>
                      </div>
                      <div className="raiting_stars">
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#c7f75e" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#c7f75e" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#c7f75e" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#c7f75e" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#c7f75e" }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <button className="my-custom-next-button">
              {" "}
              <FontAwesomeIcon
                className="arrow_icon"
                icon={faAngleRight}
                style={{ color: "#3ba590" }}
              />
            </button>
          </div>
        </div>
        <div className="cards_footer">
          <div className="links_see">
            <a href="">See all 11,344 active babysitters</a>
            <div className="view_button">
              <button>View all babysitting jobs</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
