import React from "react";
import NavbarAdmin from "../../../NavbarAdmin/NavbarAdmin";
import CardsAdmin from "../babysitters/CardsAdmin/CardsAdmin";

const Parents = () => {
  return (
    <section className="admin_babysitters">
      <NavbarAdmin />
      <div className="container">
        <h1>Parents</h1>

        <CardsAdmin/>
      </div>
    </section>
  );
};

export default Parents;
