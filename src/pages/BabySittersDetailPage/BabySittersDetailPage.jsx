import React from "react";
import NavbarThird from "../../components/NavBarThird/NavbarThird";
import BabySittersHeader from "../../components/babySittersdetail/babySittersHeader/babySittersHeader";
import BabySittersPortfolio from "../../components/babySittersdetail/babysSittersPortfolio/BabySittersPortfolio";
import BabySittersDetailCenter from "../../components/babySittersdetail/babySittersDetailcenter/BabySittersDetailCenter";
const BabySittersDetailPage = () => {
  return (
    <>
      <NavbarThird />
      <BabySittersHeader />
      <BabySittersPortfolio/>
      <BabySittersDetailCenter/>
    </>
  );
};

export default BabySittersDetailPage;
