import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NavbarAdmin from "../../../NavbarAdmin/NavbarAdmin";
import TableAdminParents from "./TableAdminParents/TableAdminParents";
import ButtonsAdmin from "../babysitters/buttonsAdmin/ButtonsAdmin";
import EditPage from "./EditPage/EditPage";
import CreatePage from './CreatePage/CreatePage'


const Parents = () => {
  const [editPage, seteditPage] = useState(false);
  const [deletePage, setdeletePage] = useState(false);
  const [createPage, setcreatePage] = useState(false);

  return (
    <section className="admin_babysitters">
      <NavbarAdmin />
      <div className="container">
      <div className="justify" style={{display: 'flex', gap:"20px"}}>
      <h1>Parents</h1>
<ButtonsAdmin seteditPage={seteditPage} setdeletePage={setdeletePage} setcreatePage={setcreatePage}/>
      </div>
 

        <TableAdminParents seteditPage={seteditPage} setdeletePage={setdeletePage} setcreatePage={setcreatePage} />

        </div>

        {editPage ? <EditPage /> : null}
        {deletePage ? <DeletePage /> : null}
        {createPage ? <CreatePage /> : null}
      
    </section>
  );
};

export default Parents;
