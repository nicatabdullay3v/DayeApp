import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NavbarAdmin from "../../../NavbarAdmin/NavbarAdmin";
import CardsAdmin from "../babysitters/CardsAdmin/CardsAdmin";
import ButtonsAdmin from "../babysitters/buttonsAdmin/ButtonsAdmin";

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
        <ButtonsAdmin seteditPage={seteditPage} setdeletePage={setdeletePage} setcreatePage={setcreatePage}/>
        {editPage ? <EditPage /> : null}
        {deletePage ? <DeletePage /> : null}
        {createPage ? <CreatePage /> : null}
      </div>
    </section>
  );
};

export default Parents;
