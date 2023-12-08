import React from "react";
import "./BabySittingJobsDetailCenter.scss";
import BabySittingJobsDetailRating from "../BabySittingJobsDetailRating/BabySittingJobsDetailRating";
import BabySittingJobsDetailRightPrice from "../BabySittingJobsDetailRightPrice/BabySittingJobsDetailRightPrice";
import BabySittingJobsDetailCildren from "./../BabySittingJobsDetailCildren/BabySittingJobsDetailCildren";
import BabySittingJobsDetailAchievements from "../BabySittingJobsDetailAchievements/BabySittingJobsDetailAchievements";
import BabySittingJobsDetailSafety from "../BabySittingJobsDetailSafety/BabySittingJobsDetailSafety";
import BabySittingJobsDetailAvailability from "../BabySittingJobsDetailAvailability/BabySittingJobsDetailAvailability";
import BabySittingJobDetailAbout from "./../BabySittingJobsDetailAbout/BabySittingJobsDetailAbout";
import BabySittingJobsDetailCom from "./../BabySittingJobsDetailCom/BabySittingJobsDetailCom";
import BabySittingJobsDetailReview from "../BabySittingJobsDetailReview/BabySittingJobsDetailReview";
import BabySittingJobsDetailReferences from "../BabySittingJobsDetailReferences/BabySittingJobsDetailReferences";
const BabySittingJobsDetailCenter = () => {
  let isLogin = JSON.parse(localStorage.getItem("login"));

  return (
    <>
      <div>
        <div className="container">
          <div className="baby_sttiers_datail_center">
            <div className="baby_sttiers_datail_center_left">
              <BabySittingJobsDetailRating />
              <BabySittingJobsDetailCildren />
              {/* <BabySittingJobsDetailAchievements /> */}
              <BabySittingJobsDetailSafety />
              {/* <BabySittingJobsDetailAvailability/> */}
              <BabySittingJobDetailAbout />
              {/* <BabySittingJobsDetailCom /> */}
              {/* /// */}

              {isLogin ? <BabySittingJobsDetailReview /> : null}

              {/* <BabySittingJobsDetailReferences/> */}
            </div>
            <div className="baby_sttiers_datail_center_right">
              <BabySittingJobsDetailRightPrice />
            </div>
          </div>
        </div>
        {/* // */}
      </div>
    </>
  ); ///
};

export default BabySittingJobsDetailCenter;
