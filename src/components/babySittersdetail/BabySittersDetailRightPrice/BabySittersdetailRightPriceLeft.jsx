import React from "react";
import "./BabySittersDetailRightPrice.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserByIdDetail } from "../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useDispatch } from "react-redux";
const BabySittersdetailRightPrice = () => {
  const babysittersData = useSelector((state) => state.babysitters.babysitter);
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(fetchUserByIdDetail(id));
  }, []);
  return (
    <>
      <section id="price_left">
        <div className="price_left">
          <div className="price_left_box">
            <div className="price">
              <p>{babysittersData.price}$</p>
            </div>
            <div className="text">
              <p>{babysittersData.phone}</p>
            </div>
            <div className="button">
              <button>Contact {babysittersData.firstName}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BabySittersdetailRightPrice;
