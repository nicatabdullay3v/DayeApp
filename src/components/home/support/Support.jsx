import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./support.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Support = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section id="babysits_supports">
      <div className="baby_support container">
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
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="support_card">
                <div className="vergul">
                  <svg
                    class="svg-inline--fa fa-quote-left fa-fw fs-1 text-cyan-700"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                    ></path>
                  </svg>
                </div>
                <div className="support_card_detail">
                  <p>
                    Beautiful and safe way to find babysitters and make the
                    daily life of mothers and fathers who need help at home
                    easier!
                  </p>
                  <span>Nerina</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="support_card">
                <div className="vergul">
                  <svg
                    class="svg-inline--fa fa-quote-left fa-fw fs-1 text-cyan-700"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                    ></path>
                  </svg>
                </div>
                <div className="support_card_detail">
                  <p>
                    This application is super easy to use, super useful,
                    reliable, it has many security and identity verification
                    systems that make users feel safe.
                  </p>
                  <span>Giovanna</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="support_card">
                <div className="vergul">
                  <svg
                    class="svg-inline--fa fa-quote-left fa-fw fs-1 text-cyan-700"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                    ></path>
                  </svg>
                </div>
                <div className="support_card_detail">
                  <p>
                    It is a fantastic and safe app, I discovered it last year,
                    and I’ve had very good experiences working with very loving
                    and caring families and children.
                  </p>
                  <span>Ana</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="support_card">
                <div className="vergul">
                  {" "}
                  <svg
                    class="svg-inline--fa fa-quote-left fa-fw fs-1 text-cyan-700"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                    ></path>
                  </svg>
                </div>
                <div className="support_card_detail">
                  <p>
                    The application is very good, easy to access, fast and
                    simple. It has many verification methods and easy contact.
                    Highly recommended.
                  </p>
                  <span>Amanda</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="support_card">
                <div className="vergul">
                  {" "}
                  <svg
                    class="svg-inline--fa fa-quote-left fa-fw fs-1 text-cyan-700"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                    ></path>
                  </svg>
                </div>
                <div className="support_card_detail">
                  <p>
                    It's more than good, it helped me make a life. It's a very
                    nice experience spending time with children and being able
                    to help them.
                  </p>
                  <span>Stefany</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="support_button">
          <button>Sign me up!</button>
        </div>
      </div>
    </section>
  );
};

export default Support;
