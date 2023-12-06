import React from 'react'
import BabySittersPortfolio from  "./../../components/BabySittingJobsDetail/BabySittingJobsDetailPortfolio/BabySittingJobsDetailPortfolio"
import NavBarThird from "./../../components/NavBarThird/NavbarThird"
import BabySittingJobsDetailCenter from '../../components/BabySittingJobsDetail/BabySittingJobsDetailCenter/BabySittingJobsDetailCenter'
import BabySittingJobsDetailLocation from "../../components/BabySittingJobsDetail/BabySittingJobsDetailLocation/BabySittingJobsDetailLocation";
import  BabySittingJobsDetailActivities from "./../../components/BabySittingJobsDetail/BabySittingJobsDetailActivities/BabySittingJobsDetailActivities"
import BabySittingJobsDetailShare from "./../../components/BabySittingJobsDetail/BabySittingJobsDetailShare/BabySittingJobsDetailShare"
import FooterMiddle from "./../../components/home/footermiddle/FooterMiddle"
import FooterDown from "./../../components/home/footerdown/FooterDown"
import BabySittersHeader from '../../components/BabySittingJobsDetail/BabySittingJobsDetailHeader/BabySittingJobsDetailHeader';
import NavbarSecond from '../../components/NavbarSecond/NavbarSecond';
const BabySittingJobsDetail = () => {
  return (
<>
{/* <NavBarThird/>
 */}
 <NavbarSecond/>
<BabySittersHeader/>
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