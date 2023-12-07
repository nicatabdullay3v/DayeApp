import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./discover.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
const Discover = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section id="discover_more">
      <div className="container">
        <h3>
          Discover more
          <svg
            class="svg-inline--fa fa-caret-right"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
            ></path>
          </svg>
        </h3>
        <div className="discover_cards">
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
            spaceBetween={10}
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
            <SwiperSlide>
              <div className="discover_card">
                <div className="discover_card_image1"></div>
                <p>Platform tips</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discover_card">
                <div className="discover_card_image2"></div>
                <p>trust & Safety</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discover_card">
                <div className="discover_card_image3"></div>
                <p>Tips for Parents</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discover_card">
                <div className="discover_card_image4"></div>
                <p>Tips for Babysitters</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discover_card">
                <div className="discover_card_image5"></div>
                <p>Babysits for Special Needs</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discover_card">
                <div className="discover_card_image6"></div>
                <p>Babysits for Work</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discover_card">
                <div className="discover_card_image7"></div>
                <p>Climate action</p>
              </div>
            </SwiperSlide>
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
    </section>
  );
};

export default Discover;
