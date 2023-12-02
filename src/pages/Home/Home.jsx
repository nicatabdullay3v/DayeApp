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

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Cards />
      <WeKnow/>
      <FindBaby/>
      <Support/>
      <Childcare/>
      <Discover/>
      <Climate/>
    </>
  );
};

export default Home;
