import React from "react";
import "./findbaby.scss";

const FindBaby = () => {
  return (
    <section id="find_baby">
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
                <span>
                  Filter based on your needs and review detailed profiles.
                </span>
              </div>
            </div>
          </div>
          <div className="connect">
            <div>
              <div className="circle_connect"></div>
              <div className="boxs_details">
                <p>Connect</p>
                <span>
                  Send messages, screen users and have an introductory meeting.
                </span>
              </div>
            </div>
          </div>
          <div className="book">
            <div>
              <div className="circle_book"></div>
              <div className="boxs_details">
                <p>Book</p>
                <span>
                  Book a babysitting appointment, pay or get paid and download
                  receipts for expenses.
                </span>
              </div>
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

export default FindBaby;
