import React from "react";
import Cards from "../../components/home/cards/Cards";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/home/herosection/HeroSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Cards />
    </>
  );
};

export default Home;
