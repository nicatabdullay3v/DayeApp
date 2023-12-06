import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NavbarAdmin from "../../../NavbarAdmin/NavbarAdmin";
import CardsAdmin from "./CardsAdmin/CardsAdmin";
import EditPage from "./EditPage/EditPage";

import CreatePage from "./CreatePage/CreatePage";
import ButtonsAdmin from "./buttonsAdmin/ButtonsAdmin";

const BabysittersEmployee = () => {
  const [editPage, seteditPage] = useState(false);
  let IsAdmin = JSON.parse(localStorage.getItem("admin"));

  const [createPage, setcreatePage] = useState(false);
  const [editID, seteditID] = useState(0);

  return IsAdmin ? (
    <section className="admin_babysitters">
      <NavbarAdmin />
      <div className="container">
        <div className="justify" style={{ display: "flex", gap: "20px" }}>
          <h1>BabySitters</h1>
          <ButtonsAdmin
            setcreatePage={setcreatePage}
            seteditPage={seteditPage}
          />
        </div>
        <CardsAdmin
          seteditPage={seteditPage}
          setcreatePage={setcreatePage}
          seteditID={seteditID}
          editID={editID}
        />
      </div>
      {editPage ? <EditPage editID={editID} seteditPage={seteditPage} /> : null}
      {createPage ? <CreatePage setcreatePage={setcreatePage} /> : null}
    </section>
  ) : null;
};

export default BabysittersEmployee;
