import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NavbarAdmin from "../../../NavbarAdmin/NavbarAdmin";
import TableAdminParents from "./TableAdminParents/TableAdminParents";
import ButtonsAdmin from "../babysitters/buttonsAdmin/ButtonsAdmin";
import EditPage from "./EditPage/EditPage";
import CreatePage from "./CreatePage/CreatePage";
import DetailPage from "./DetailPage/DetailPage";
const Parents = () => {
  let IsAdmin = JSON.parse(localStorage.getItem("admin"));
  const [editPage, seteditPage] = useState(false);
  const [createPage, setcreatePage] = useState(false);
  const [detailPage, setdetailPage] = useState(false);

  const [editID, seteditID] = useState(0);
  return IsAdmin ? (
    <section className="admin_babysitters">
      <NavbarAdmin />
      <div className="container">
        <div className="justify" style={{ display: "flex", gap: "20px" }}>
          <h1>Parents</h1>
          <ButtonsAdmin
            seteditPage={seteditPage}
            setcreatePage={setcreatePage}
            setdetailPage={setdetailPage}
          />
        </div>

        <TableAdminParents
          setdetailPage={setdetailPage}
          seteditPage={seteditPage}
          setcreatePage={setcreatePage}
          seteditID={seteditID}
          editID={editID}
        />
      </div>

      {detailPage ? (
        <DetailPage
          seteditID={seteditID}
          editID={editID}
          setdetailPage={setdetailPage}
        />
      ) : null}

      {editPage ? (
        <EditPage
          seteditID={seteditID}
          editID={editID}
          seteditPage={seteditPage}
        />
      ) : null}
      {createPage ? <CreatePage setcreatePage={setcreatePage} /> : null}
    </section>
  ) : null;
};

export default Parents;
