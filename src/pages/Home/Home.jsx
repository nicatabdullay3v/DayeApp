import React from "react";
import Cards from "../../components/home/cards/Cards";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/home/herosection/HeroSection";
import FindBaby from "../../components/home/findbaby/FindBaby";
import WeKnow from "../../components/home/weknow/WeKnow";
import Support from "../../components/home/support/Support";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Cards />
      <WeKnow/>
      <FindBaby/>
      <Support/>
    </>
  );
};

export default Home;
