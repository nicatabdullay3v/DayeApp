import React from 'react'
import BabySittersPortfolio from  "./../../components/BabySittingJobsDetail/BabySittingJobsDetailPortfolio/BabySittingJobsDetailPortfolio"

import BabySittingJobsDetailCenter from '../../components/BabySittingJobsDetail/BabySittingJobsDetailCenter/BabySittingJobsDetailCenter'
import BabySittingJobsDetailLocation from "../../components/BabySittingJobsDetail/BabySittingJobsDetailLocation/BabySittingJobsDetailLocation";
import  BabySittingJobsDetailActivities from "./../../components/BabySittingJobsDetail/BabySittingJobsDetailActivities/BabySittingJobsDetailActivities"
import BabySittingJobsDetailShare from "./../../components/BabySittingJobsDetail/BabySittingJobsDetailShare/BabySittingJobsDetailShare"
import FooterMiddle from "./../../components/home/footermiddle/FooterMiddle"
import FooterDown from "./../../components/home/footerdown/FooterDown"
import NavbarThird from '../../components/NavBarThird/NavBarThird';
const BabySittingJobsDetail = () => {
  return (
<>
<NavbarThird/>
<BabySittersPortfolio/>
<BabySittingJobsDetailCenter/>
<BabySittingJobsDetailLocation/>
<BabySittingJobsDetailActivities/>
<BabySittingJobsDetailShare/>
<FooterMiddle/>
<FooterDown/>
</>
  )
}

export default BabySittingJobsDetail