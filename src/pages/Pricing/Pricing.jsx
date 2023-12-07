import React, { useRef, useState } from "react";
import  { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NavbarParents from "../../components/NavbarParents/NavbarParents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faLinkedin,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import "./pricing.scss";
import NavbarSecond from "../../components/NavbarSecond/NavbarSecond";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Navbar from "../../components/Navbar/Navbar";
const Pricing = () => {
  let isParent = JSON.parse(localStorage.getItem("isParent"));
  const [swiperRef, setSwiperRef] = useState(null);
  let login = JSON.parse(localStorage.getItem("login"));
  return (
    <>
      <section id="pricing_section">


      {isParent ? (
        <NavbarParents />
      ) : (
        <Navbar />
      )}


        <div className="container">
          <div className="li_links">
          <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={'auto'}
              spaceBetween={0}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper hidden"
              breakpoints={{
                600: {
                  slidesPerView: 3
                },
                767: {
                  slidesPerView: 4
                },
                992: {
                  slidesPerView: 5
                },
                1200: {
                  slidesPerView: 6
                }
              }}
            >
               <SwiperSlide>

            <a href="">About us</a>
               </SwiperSlide>
               <SwiperSlide>
            <a href="">How it works</a>
            </SwiperSlide>
               <SwiperSlide>
            <a href="">Company details</a>
            </SwiperSlide>
               <SwiperSlide>
            <a href="">Dispute policy</a>
            </SwiperSlide>
               <SwiperSlide>
            <a href="">Partners</a>
            </SwiperSlide>
               <SwiperSlide>
            <a href="">For the press</a>
            </SwiperSlide>
               </Swiper>
          </div>
        </div>
        <div className="pricing_image">
          <h3>Affordable for families, free for babysitters</h3>
        </div>
        <div className="container">
          <div className="baby_learn">
            <div className="svg_pricing">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32"
                height="32"
              >
                <linearGradient
                  id="StripeClimate-gradient-a"
                  gradientUnits="userSpaceOnUse"
                  x1="16"
                  y1="20.6293"
                  x2="16"
                  y2="7.8394"
                  gradientTransform="matrix(1 0 0 -1 0 34)"
                >
                  <stop offset="0" stop-color="#00d924"></stop>
                  <stop offset="1" stop-color="#00cb1b"></stop>
                </linearGradient>
                <path
                  d="M0 10.82h32c0 8.84-7.16 16-16 16s-16-7.16-16-16z"
                  fill="url(#StripeClimate-gradient-a)"
                ></path>
                <linearGradient
                  id="StripeClimate-gradient-b"
                  gradientUnits="userSpaceOnUse"
                  x1="24"
                  y1="28.6289"
                  x2="24"
                  y2="17.2443"
                  gradientTransform="matrix(1 0 0 -1 0 34)"
                >
                  <stop offset=".1562" stop-color="#009c00"></stop>
                  <stop offset="1" stop-color="#00be20"></stop>
                </linearGradient>
                <path
                  d="M32 10.82c0 2.21-1.49 4.65-5.41 4.65-3.42 0-7.27-2.37-10.59-4.65 3.52-2.43 7.39-5.63 10.59-5.63C29.86 5.18 32 8.17 32 10.82z"
                  fill="url(#StripeClimate-gradient-b)"
                ></path>
                <linearGradient
                  id="StripeClimate-gradient-c"
                  gradientUnits="userSpaceOnUse"
                  x1="8"
                  y1="16.7494"
                  x2="8"
                  y2="29.1239"
                  gradientTransform="matrix(1 0 0 -1 0 34)"
                >
                  <stop offset="0" stop-color="#ffe37d"></stop>
                  <stop offset="1" stop-color="#ffc900"></stop>
                </linearGradient>
                <path
                  d="M0 10.82c0 2.21 1.49 4.65 5.41 4.65 3.42 0 7.27-2.37 10.59-4.65-3.52-2.43-7.39-5.64-10.59-5.64C2.14 5.18 0 8.17 0 10.82z"
                  fill="url(#StripeClimate-gradient-c)"
                ></path>
              </svg>
            </div>
            <div className="learn_more">
              Babysits will contribute a portion of your purchase to remove CO₂
              from the atmosphere. <a href="">Learn more</a>
            </div>
          </div>
        </div>
        <div className="line_bottom"></div>
        <div className="container">
          <div className="families_text_pricing">
            <div>
              <h3 className="h3h">Pricing for families</h3>
              <p className="pp">
                Parents can create an account and start looking for a babysitter
                for free. To connect with childcare providers, parents need a
                premium subscription. The subscription allows parents to send
                messages and requests. As a parent, you upgrade when you’re
                ready to contact.
              </p>
            </div>
          </div>
          <div className="pricing_for_families">
            <div className="cards_pricing pricing_media">
              <div className="babysits_card_classic">
                <h3>Babysits</h3>
                <span className="free_span">Free</span>
                <div className="hrrr"></div>
                <div className="svg_texts">
                  <div className="svg_text">
                    <svg
                      class="svg-inline--fa fa-check success-check color"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                      ></path>
                    </svg>
                    <p>Create a profile</p>
                  </div>
                  <div className="svg_text">
                    <svg
                      class="svg-inline--fa fa-check success-check color"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                      ></path>
                    </svg>
                    <p>Read full profiles</p>
                  </div>
                  <div className="svg_text">
                    <svg
                      class="svg-inline--fa fa-check success-check color"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                      ></path>
                    </svg>
                    <p>Updates on new babysitters in your area</p>
                  </div>
                  <div className="svg_text">
                    <svg
                      class="svg-inline--fa fa-check success-check graycolor"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                      ></path>
                    </svg>
                    <p className="graycolor">
                      Respond to interested babysitters
                    </p>
                  </div>
                  <div className="svg_text">
                    <svg
                      class="svg-inline--fa fa-check success-check graycolor"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                      ></path>
                    </svg>
                    <p className="graycolor">Contact babysitters</p>
                  </div>{" "}
                  <div className="svg_text">
                    <svg
                      class="svg-inline--fa fa-check success-check graycolor"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                      ></path>
                    </svg>
                    <p className="graycolor">Contact nannies</p>
                  </div>{" "}
                  <div className="svg_text">
                    <svg
                      class="svg-inline--fa fa-check success-check graycolor"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                      ></path>
                    </svg>
                    <p className="graycolor">Book and Pay through Babysits</p>
                  </div>{" "}
                  <div className="svg_text">
                    <svg
                      class="svg-inline--fa fa-check success-check graycolor"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                      ></path>
                    </svg>
                    <p className="graycolor">Download payment receipts</p>
                  </div>
                </div>
                <div className="hr"></div>
                <button className="get_free_button">Get Free</button>
              </div>
              <div className="babysits_card_premium">
                <h3>Babysits Premium</h3>
                <span>Only $19.99 per month</span>
                <br />
                <a href="">Cancel anytime</a>
                <div className="hrr"></div>
                <div className="svg_texts">
                  <div className="svg_text">
                    <svg
                      class="svg-inline--fa fa-check success-check color"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                      ></path>
                    </svg>
                    <p>Create a profile</p>
                  </div>
                  <div className="svg_text">
                    <svg
                      class="svg-inline--fa fa-check success-check color"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                      ></path>
                    </svg>
                    <p>Read full profiles</p>
                  </div>
                  <div className="svg_text">
                    <svg
                      class="svg-inline--fa fa-check success-check color"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                      ></path>
                    </svg>
                    <p>Updates on new babysitters in your area</p>
                  </div>
                  <div className="svg_text">
                    <svg
                      class="svg-inline--fa fa-check success-check color"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                      ></path>
                    </svg>
                    <p>Respond to interested babysitters</p>
                  </div>
                  <div className="svg_text">
                    <svg
                      class="svg-inline--fa fa-check success-check color"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                      ></path>
                    </svg>
                    <p>Contact babysitters</p>
                  </div>{" "}
                  <div className="svg_text">
                    <svg
                      class="svg-inline--fa fa-check success-check color"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                      ></path>
                    </svg>
                    <p>Contact nannies</p>
                  </div>{" "}
                  <div className="svg_text">
                    <svg
                      class="svg-inline--fa fa-check success-check color"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                      ></path>
                    </svg>
                    <p>Book and Pay through Babysits</p>
                  </div>{" "}
                  <div className="svg_text">
                    <svg
                      class="svg-inline--fa fa-check success-check color"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                      ></path>
                    </svg>
                    <p>Download payment receipts</p>
                  </div>
                </div>
                <div className="hr"></div>
                <button className="premium_button">Get Premium</button>
              </div>
            </div>
          </div>
          <div className="fair_policy">
            <p>
              * Fair use Policy: we set a limit on the number of messages that a
              user can send in order to prevent spam and other misuses. We can
              reset it after reviewing your account, simply contact our customer
              service.
            </p>
          </div>
          <div className="when_using">
            <p>
              ** When using the Babysits booking system (optional), an extra 5%
              is applied to the babysitting cost. This allows us to provide
              additional user protection measures. <a href="">Learn more</a>
            </p>
          </div>
          <div className="agency">
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
            <a href="">Are you an agency? View pricing for companies</a>
          </div>
        </div>
        <div className="line_bottom"></div>
        <div className="container">
          <div className="free_for_baby families_text_pricing">
            <div>
              <h3 className="h3h">Free for babysitters</h3>
              <p className="pp">
                Babysitters can create an account, search for babysitting jobs,
                and contact parents completely free of charge. If you want to
                enjoy extra security we recommend planning your bookings and
                receiving payments through Babysits. We believe it’s important
                that babysitters receive 100% of the money they’ve earned.
                That’s why no fee is deducted from a babysitter’s pay when using
                bookings.
              </p>
              <div className="button_sign_up">
                <button>Sign up for free</button>
              </div>
            </div>
          </div>
        </div>
        <div className="line_bottom"></div>
        <div className="container">
          <div className="hourly_rates_baby families_text_pricing">
            <div>
              <h3 className="h3h">Hourly rates for babysitting</h3>
              <p className="pp">
                Parents and childcare providers indicate their expected hourly
                rates to other community members via their profile. However,
                this is not a fixed rate and you are always able to negotiate.
              </p>
              <div className="link_average_ask">
                <ul>
                  <li>Average rate that babysitters ask: $14.74</li>
                  <br />
                  <li>Average rate that babysitters ask: $14.74</li>
                  <br />
                  <li>Average rate that babysitters ask: $14.74</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="line_bottom"></div>
        <div className="container">
          <div className="book_and_pay families_text_pricing">
            <div>
              <h3 className="h3h">Book and pay babysitters</h3>
              <p className="pp">
                Booking and paying through Babysits is simple, safe and highly
                recommended. Here's how:
              </p>
              <div className="side_to_side bookandpay_media">
                <div className="left_side_book">
                  <div className="simple_effective">
                    <h4>Simple & effective</h4>
                    <span>
                      When you book and communicate through Babysits, you have
                      the peace of mind of our built-in security features. Plus,
                      it's easy to use. Request a booking, get to know each
                      other and pay through Babysits.
                    </span>
                  </div>
                  <div className="automatic_payouts">
                    <h4>Automatic payouts</h4>
                    <span>
                      After successfully completing the babysitting appointment,
                      the babysitter will receive the payment within 3-8 days.
                    </span>
                  </div>
                </div>
                <div className="right_side_book">
                  <div className="simple_effective">
                    <h4>Safe & secure payments</h4>
                    <span>
                      We use a secure payment system that never shares any of
                      your credit card or bank account details with other users.
                      Paying through Babysits is cashless, convenient, and keeps
                      your personal details safe and secure. To provide this and
                      other user protection measures, we ask the parents for an
                      additional 5% of the babysitting cost when paying through
                      Babysits bookings.
                    </span>
                    <br />
                    <a href="">View all measures to protect users</a>
                  </div>
                  <div className="automatic_payouts">
                    <h4>Download receipts</h4>
                    <span>
                      Do you want to declare your childcare expenses with your
                      employer or for tax purposes? Simply download your payment
                      receipts via Babysits bookings. Childcare providers can
                      download payment receipts for any of their bookings too.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line_bottom"></div>
        <div className="container">
          <div className="satisfaction_and_guarantee families_text_pricing">
            <div>
              <h4>Satisfaction Guarantee</h4>

              <div className="side_side">
                <div className="imageguarantee"></div>
                <div className="text_right">
                  <span>
                    Not satisfied with our platform? Didn't find a babysitter?
                    Or are you not satisfied for another reason? Whatever your
                    reasons, you can request a full refund* of your premium
                    subscription within 14 days from the start. Simply contact
                    our customer service.
                  </span>

                  <p>
                    * This only applies to your first subscription and to
                    premium subscriptions purchased directly from Babysits.
                    Subscriptions through third parties such as Apple are not
                    direct purchases.
                  </p>
                </div>
              </div>
              <div className="links_customer">
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
                <a href=""> Customer service</a>
              </div>
              <div className="links_customer">
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
                <a href=""> Terms and conditions</a>
              </div>
            </div>
          </div>
        </div>

        <div className="line_bottom"></div>
        <div className="container">
          <div className="ready_to_join families_text_pricing">
            <div>
              <h3>Ready to join?</h3>
              <div className="baby_image"></div>
              <div className="button_sign_me_join">
                <button>Sign me up!</button>
              </div>
            </div>
          </div>
        </div>
      
          <section id="footer_middle">
            <div className="container">
              <div className="footer_middles">
                <div className="flags_baby">
                  <div className="footer_middle_select">
                    <div className="flags">
                      <img
                        src="./../../../../src/assets/images/Flags/germany.png"
                        alt=""
                      />
                    </div>
                    <p>▼</p>
                  </div>
                  <div className="footer_middle babysists">
                    <h2>Babysits</h2>
                    <p>How it work</p>
                    <p>Help</p>
                    <p>Terms & Privacy</p>
                    <p>Pricing</p>
                    <p>Company details</p>
                    <p>Babysits for Work</p>
                    <p>Babysits Shop</p>
                  </div>
                </div>

                <div className="footer_middle discover">
                  <h2>Discover</h2>
                  <p>About us</p>
                  <p>Tips & Articles</p>
                  <p>Trust & Safety</p>
                  <p>Community standards</p>
                  <p>Partners</p>
                  <p>Babysits for Special Needs</p>
                </div>
                <div className="footer_middle popular">
                  <h2>Popular</h2>
                  <p>Babysitter New York</p>
                  <p>Babysitter Los Angeles</p>
                  <p>Babysitter Chicago</p>
                  <p>Babysitter Brooklyn</p>
                  <p>Babysitter Houston</p>
                  <p>Babysitting jobs</p>
                </div>
              </div>
            </div>
          </section>
          <section id="footer_down">
          <div className="container">

              <div className="footer_down">
                <h2>Follow us on</h2>
                <div className="footer_down_icons">
                  <div className="icon">
                    <FontAwesomeIcon className="iconn" icon={faFacebookF} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon className="iconn" icon={faInstagram} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon className="iconn" icon={faTiktok} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon className="iconn" icon={faLinkedin} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon className="iconn" icon={faPinterest} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon className="iconn" icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon className="iconn" icon={faMartiniGlass} />
                  </div>
                </div>
                <div className="footer_down_description">
                  <p> © Babysits B.V.</p>
                </div>
              </div>
          </div>
            
          </section>
       
      </section>
    </>
  );
};

export default Pricing;
