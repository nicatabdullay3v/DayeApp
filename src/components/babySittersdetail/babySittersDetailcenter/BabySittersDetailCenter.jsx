import React from "react";
import "./BabySittersDetailcenter.scss";
import BabySittersDetailrating from "../babySittersDetaitrating/BabySittersDetailrating";
const BabySittersDetailCenter = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="baby_sttiers_datail_center">
            <div className="baby_sttiers_datail_center_left">
                <BabySittersDetailrating/>
            </div>
            <div className="baby_sttiers_datail_center_right"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BabySittersDetailCenter;
