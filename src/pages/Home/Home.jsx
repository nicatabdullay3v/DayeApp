import React from "react";
import Cards from "../../components/home/cards/Cards";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/home/herosection/HeroSection";
import Childcare from "../../components/home/childcare/Childcare";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Cards />
      <Childcare/>
    </>
  );
};

export default Home;
