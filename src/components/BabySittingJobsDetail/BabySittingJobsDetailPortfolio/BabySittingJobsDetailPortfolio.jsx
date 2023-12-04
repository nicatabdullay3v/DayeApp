import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BabySittingJobsDetailPortfolio.scss";
import { useParams } from "react-router-dom";
import { fetcBabysitterJobsDeatil } from "../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useSelector, useDispatch } from "react-redux";
const BabySittersPortfolio = () => {
  const babysitterswantedData = useSelector(
    (state) => state.babysitters.babysitterwanted
  );
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(fetcBabysitterJobsDeatil(id));
  }, []);
  console.log(babysitterswantedData);
  return (
    <section id="baby_sitters_portfolio">
      <div className="container">
        <div className="baby_sitters_portfolio">
          <div className="baby_sitters_portfolio_image">
            <img src={babysitterswantedData.image} alt="" />
          </div>
          <div>
            <div className="baby_sitters_portfolio_name_age_icon">
              <div className="baby_sitters_portfolio_name">
                <p>{babysitterswantedData.firstName}</p>
              </div>
              <div className="baby_sitters_portfolio_icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <div className="baby_sitters_portfolio_age">
                <p>99</p>
              </div>
            </div>
            <div className="baby_sitters_portfolio_country">
              <span>
                Babysitting Job in {babysitterswantedData.address?.country}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabySittersPortfolio;
