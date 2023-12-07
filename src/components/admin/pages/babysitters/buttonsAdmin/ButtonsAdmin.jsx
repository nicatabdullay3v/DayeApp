import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./ButtonsAdmin.scss";
const ButtonsAdmin = ({ seteditPage, setcreatePage, setdetailPage }) => {
  return (
    <section id="buttons_admin">
      <div className="edit_delete">
        <button
          className="button_employee"
          onClick={() => {
            setcreatePage(true);
            seteditPage(false);
            setdetailPage(false);
          }}
        >
          Create
        </button>
      </div>
    </section>
  );
};

export default ButtonsAdmin;
