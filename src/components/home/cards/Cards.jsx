import React, { useRef, useState } from "react";
import  { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./cards.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Cards = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <section id="cards">
        <div className="container">
          <h3>Meet verified babysitters in your area</h3>
          <div className="cards">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={5}
              spaceBetween={30}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="card">
                  <div className="card_image"></div>
                  <div className="card_detail">
                    <p>Name</p>
                    <span>City</span>
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

              <SwiperSlide>
                <div className="card">
                  <div className="card_image"></div>
                  <div className="card_detail">
                    <p>Name</p>
                    <span>City</span>
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

              <SwiperSlide>
                <div className="card">
                  <div className="card_image"></div>
                  <div className="card_detail">
                    <p>Name</p>
                    <span>City</span>
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

              <SwiperSlide>
                <div className="card">
                  <div className="card_image"></div>
                  <div className="card_detail">
                    <p>Name</p>
                    <span>City</span>
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

              <SwiperSlide>
                <div className="card">
                  <div className="card_image"></div>
                  <div className="card_detail">
                    <p>Name</p>
                    <span>City</span>
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

              <SwiperSlide>
                <div className="card">
                  <div className="card_image"></div>
                  <div className="card_detail">
                    <p>Name</p>
                    <span>City</span>
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

              <SwiperSlide>
                <div className="card">
                  <div className="card_image"></div>
                  <div className="card_detail">
                    <p>Name</p>
                    <span>City</span>
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
            </Swiper>
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
