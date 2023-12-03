import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./ButtonsAdmin.scss";
const ButtonsAdmin = ({ seteditPage, setdeletePage, setcreatePage }) => {
  return (
    <section id="buttons_admin">
      <div className="edit_delete">
        <button
          className="button_employee"
          onClick={() => {
            seteditPage(true);
            setdeletePage(false);
            setcreatePage(false);

          }}
        >
          Edit
        </button>

        <button
          className="button_employee"
          onClick={() => {
            setdeletePage(true);
            seteditPage(false);
            setcreatePage(false);

          }}
        >
          Delete
        </button>
      </div>
    </section>
  );
};

export default ButtonsAdmin;
