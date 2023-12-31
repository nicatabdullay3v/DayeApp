import React from "react";
import "./BabySittersDetailcenter.scss";
import BabySittersDetailrating from "../babySittersDetaitrating/BabySittersDetailrating";
import BabySittersdetailRightPrice from "../BabySittersDetailRightPrice/BabySittersdetailRightPriceLeft";
import BabySittersExperience from "../BabySittersExperience/babySittersExperience";
import BabySittersAchievements from "../BabySittersAchievements/BabySittersAchievements";
import BabySittersdetailSafety from "../BabySittersdetailSafety/BabySittersdetailSafety";
import BabySittersAvailability from "../BabySittersAvailability/BabySittersAvailability";
import BabySittersAbout from "../babySittersAbout/BabySittersAbout";
import BabiSittersDeatilSkillsCom from "../babiSittersDeatailSkillsCom/BabiSittersDeatailSkillsCom";
import BabySittersDetailReview from "../BabySittersDetailReview/BabySittersDetailReview";
import BabySittersDetailReferences from "../BabySittersDetailReferences/BabySittersDetailReferences";

const BabySittersDetailCenter = () => {
  let isLogin = JSON.parse(localStorage.getItem("login"));
  ///
  return (
    <>
      <div>
        <div className="container">
          <div className="baby_sttiers_datail_center">
            <div className="baby_sttiers_datail_center_left">
              <BabySittersDetailrating />
              <BabySittersExperience />
              {/* <BabySittersAchievements /> */}
              <BabySittersdetailSafety />
              {/* {isLogin ? <BabySittersAvailability /> : null} */}

              <BabySittersAbout />
              {/* <BabiSittersDeatilSkillsCom /> */}
              {isLogin ? <BabySittersDetailReview /> : null}

              {isLogin ? <BabySittersDetailReferences /> : null}
            </div>
            <div className="baby_sttiers_datail_center_right">
              <BabySittersdetailRightPrice />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BabySittersDetailCenter;
