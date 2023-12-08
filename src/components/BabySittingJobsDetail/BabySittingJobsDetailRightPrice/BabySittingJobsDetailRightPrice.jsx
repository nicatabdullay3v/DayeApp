import React from "react";
import "./BabySittingJobsDetailRightPrice.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetcBabysitterJobsDeatil } from "../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useSelector, useDispatch } from "react-redux";
const BabySittersdetailRightPrice = () => {
  const babysitterswantedData = useSelector(
    (state) => state.babysitters.babysitterwanted
  );
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(fetcBabysitterJobsDeatil(id));
  }, []);
  return (
    <>
      <section id="price_left">
        <div className="price_left">
          <div className="price_left_box">
            <div className="price">
              <p>Telephone:</p>
            </div>
            <div className="text">
              <p>{babysitterswantedData.phone}</p>
            </div>
            <div className="button">
              <button>Contact {babysitterswantedData.firstName}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BabySittersdetailRightPrice;
