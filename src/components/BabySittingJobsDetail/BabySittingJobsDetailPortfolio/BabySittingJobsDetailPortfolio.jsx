import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './BabySittingJobsDetailPortfolio.scss'
const BabySittersPortfolio = () => {
  return (
    <section id="baby_sitters_portfolio">
      <div className="container">
        <div className="baby_sitters_portfolio">
          <div className="baby_sitters_portfolio_image">
            <img src="https://as1.ftcdn.net/v2/jpg/00/56/14/04/1000_F_56140454_q4nbUmTCcC1ovIJrOL1SxJuaYXwvSz68.jpg" alt="" />
          </div>
      <div>
      <div className="baby_sitters_portfolio_name_age_icon">
            <div className="baby_sitters_portfolio_name">
              <p>Mira</p>
            </div>
            <div className="baby_sitters_portfolio_icon">
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
            <div className="baby_sitters_portfolio_age">
              <p>99</p>
            </div>
          </div>
          <div className="baby_sitters_portfolio_country">
            <span>Babysitting Job in Azerbaijan</span>
          </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default BabySittersPortfolio;
