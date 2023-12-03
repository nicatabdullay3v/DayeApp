import React, { useRef, useState } from "react";
import  { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

const CardsAdmin = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const navigate = useNavigate()
  return (
    <div className="cards">
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={'auto'}
      spaceBetween={30}
      navigation={true}
    //   direction={'vertical'}
      modules={[Pagination, Navigation]}
      className="mySwiper hidden"
      breakpoints={{
        600: {
          slidesPerView: 2
        },
        767: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 4
        },
        1200: {
          slidesPerView: 5
        }
      }}
    >
      <SwiperSlide>
        <div onClick={()=>{
          navigate("/babysittersDetail")
        }} className="card">
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
  )
}

export default CardsAdmin