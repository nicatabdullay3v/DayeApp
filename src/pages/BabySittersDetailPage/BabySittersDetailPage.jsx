import React from "react";
import NavbarThird from "../../components/NavBarThird/NavbarThird";
import BabySittersHeader from "../../components/babySittersdetail/babySittersHeader/babySittersHeader";
import BabySittersPortfolio from "../../components/babySittersdetail/babysSittersPortfolio/BabySittersPortfolio";
import BabySittersDetailCenter from "../../components/babySittersdetail/babySittersDetailcenter/BabySittersDetailCenter";
import BabySittersDetailLocation from "../../components/babySittersdetail/BabySittersDetailLocation/BabySittersDetailLocation";
import BabySittersDetailActivities from "../../components/babySittersdetail/BabySittersDetailActivities/BabySittersDetailActivities";
import BabySittersDetailShare from "../../components/babySittersdetail/BabySittersDetailShare/BabySittersDetailShare";
import FooterMiddle from "./../../components/home/footermiddle/FooterMiddle";
import FooterDown from "./../../components/home/footerdown/FooterDown";

const BabySittersDetailPage = () => {
  return (
    <>
      <NavbarThird />
      <BabySittersHeader />
      <BabySittersPortfolio />
      <BabySittersDetailCenter />
      <BabySittersDetailLocation />
      <BabySittersDetailActivities />
      <BabySittersDetailShare />
      <FooterMiddle />
      <FooterDown />
    </>
  );
};

export default BabySittersDetailPage;
