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
import NavbarSecond from "../../components/NavbarSecond/NavbarSecond";
import NavbarParents from "./../../components/NavbarParents/NavbarParents";
import NavBar from "./../../components/Navbar/Navbar";

const BabySittersDetailPage = () => {
  let isParent = JSON.parse(localStorage.getItem("login"));
  return (
    <>
      {/* <NavbarThird /> */}

      {isParent ? <NavbarParents /> : <NavBar />}
      <BabySittersHeader />
      <BabySittersPortfolio />
      <BabySittersDetailCenter />
      <BabySittersDetailLocation />
      <BabySittersDetailActivities />
      <BabySittersDetailShare />
      <FooterMiddle />
      <FooterDown />
      <div className="down_bar">
        <div className="price">99$</div>
        <div className="text">Salam</div>
        <div className="name">Contact Eldar</div>
      </div>
    </>
  );
};

export default BabySittersDetailPage;
