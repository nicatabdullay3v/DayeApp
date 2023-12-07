import React from "react";
import Cards from "../../components/home/cards/Cards";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/home/herosection/HeroSection";
import FindBaby from "../../components/home/findbaby/FindBaby";
import WeKnow from "../../components/home/weknow/WeKnow";
import Support from "../../components/home/support/Support";
import Childcare from "../../components/home/childcare/Childcare";
import Discover from "../../components/home/discover/Discover";
import Climate from "../../components/home/climate/Climate";
import FooterUp from "../../components/home/footerup/FooterUp";
import FooterMiddle from "../../components/home/footermiddle/FooterMiddle";
import FooterDown from "../../components/home/footerdown/FooterDown";
import NavbarBabysitters from "../../components/NavbarBabysitters/NavbarBabysitters";
import NavbarParents from "../../components/NavbarParents/NavbarParents";


// import NavBarThird from "../../components/NavBarThird/NavBarThird";
// import NavbarBabysit from "../../components/NavbarBabysit/NavbarBabysit";

const Home = () => {
  let login = JSON.parse(localStorage.getItem("login"));
  let isBabySitters = JSON.parse(localStorage.getItem("isBabysitter"));
  let isParent = JSON.parse(localStorage.getItem("isParent"));

  return (
    <>
        {isBabySitters ? (
        <NavbarBabysitters />
      ) : isParent ? (
        <NavbarParents />
      ) : (
        <Navbar />
      )}

{/* <NavBarThird/>
<NavbarBabysit />
<Navbar />
<NavbarBabysitters /> */}

      <HeroSection />
      <Cards />
      <WeKnow />
      <FindBaby />
      <Support />
      <Childcare />
      <Discover />
      <Climate />
      <FooterUp />
      <FooterMiddle />
      <FooterDown />
    </>
  );
};

export default Home;
