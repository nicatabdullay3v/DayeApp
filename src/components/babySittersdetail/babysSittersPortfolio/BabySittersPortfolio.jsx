import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BabySittersPortfolio.scss"
const BabySittersPortfolio = () => {
  return (
    <section id="baby_sitters_portfolio">
      <div className="container">
        <div className="baby_sitters_portfolio">
          <div className="baby_sitters_portfolio_image">
            <img src="./../../../../src/assets/images/babysitter-5257240-1695824808-rc-w350-h350.avif" alt="" />
          </div>
      <div>
      <div className="baby_sitters_portfolio_name_age_icon">
            <div className="baby_sitters_portfolio_name">
              <p> Jaida</p>
            </div>
            <div className="baby_sitters_portfolio_icon">
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
            <div className="baby_sitters_portfolio_age">
              <p>19</p>
            </div>
          </div>
          <div className="baby_sitters_portfolio_country">
            <span>Babysitter in Raleigh</span>
          </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default BabySittersPortfolio;
