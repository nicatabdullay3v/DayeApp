import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NavbarAdmin from "../../../NavbarAdmin/NavbarAdmin";
import CardsAdmin from "../babysitters/CardsAdmin/CardsAdmin";
import ButtonsAdminParent from "../babysitters/buttonsAdmin/ButtonsAdminParent";

import EditPage from "./EditPage/EditPage";
import DeletePage from "./DeletePage/DeletePage";
import CreatePage from './CreatePage/CreatePage'


const Parents = () => {
  const [editPage, seteditPage] = useState(false);
  const [deletePage, setdeletePage] = useState(false);
  const [createPage, setcreatePage] = useState(false);

  return (
    <section className="admin_babysitters">
      <NavbarAdmin />
      <div className="container">
        <h1>Parents</h1>

        <CardsAdmin/>
        <ButtonsAdminParent seteditPage={seteditPage} setdeletePage={setdeletePage} setcreatePage={setcreatePage}/>
        </div>

        {editPage ? <EditPage /> : null}
        {deletePage ? <DeletePage /> : null}
        {createPage ? <CreatePage /> : null}
      
    </section>
  );
};

export default Parents;
