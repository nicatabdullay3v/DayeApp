import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BabySittersPortfolio.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserByIdDetail } from "../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useDispatch } from "react-redux";
const BabySittersPortfolio = () => {
  const babysittersData = useSelector((state) => state.babysitters.babysitter);
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(fetchUserByIdDetail(id));
  }, []);

  return (
    <section id="baby_sitters_portfolio">
      <div className="container">
        <div className="baby_sitters_portfolio">
          <div className="baby_sitters_portfolio_image">
            <img src={babysittersData.image} alt="" />
          </div>
          <div>
            <div className="baby_sitters_portfolio_name_age_icon">
              <div className="baby_sitters_portfolio_name">
                <p> {babysittersData.name}</p>
              </div>
              <div className="baby_sitters_portfolio_icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <div className="baby_sitters_portfolio_age">
                <p>{babysittersData.age}</p>
              </div>
            </div>
            <div className="baby_sitters_portfolio_country">
              <span>Babysitter in {babysittersData.country}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabySittersPortfolio;
