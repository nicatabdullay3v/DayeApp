import React from "react";
import "./FooterMiddle.scss";
const FooterMiddle = () => {
  return (
    <section id="footer_middle">
      <div className="container">
        <div className="footer_middles">
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
            <p>How it works Babysits Shop</p>
            <p>Help</p>
            <p>Terms & Privacy</p>
            <p>Pricing</p>
            <p>Company details</p>
            <p>Babysits for Work</p>
            <p>Babysits Shop</p>
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
  );
};

export default FooterMiddle;
