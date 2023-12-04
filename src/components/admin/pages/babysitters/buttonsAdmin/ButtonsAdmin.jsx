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
            setcreatePage(true);
            setdeletePage(false);
            seteditPage(false);
          }}
        >
          Create
        </button>
      </div>
    </section>
  );
};

export default ButtonsAdmin;
