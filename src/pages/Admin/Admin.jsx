import React from "react";
import "./admin.scss";

import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin";
const Admin = () => {
  let IsAdmin = JSON.parse(localStorage.getItem("admin"));

  return IsAdmin ? (
    <>
      <NavbarAdmin /> 
     
    </>
  ) : null;
};

export default Admin;
