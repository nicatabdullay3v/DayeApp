import React from "react";
import "./admin.scss";
import Navbar from "../../components/NavbarAdmin/NavbarAdmin";
import AdminPage from "../../components/admin/pages/AdminPage/AdminPage";

const Admin = () => {
  return (
    <>
      <Navbar />
      <AdminPage />
    </>
  );
};

export default Admin;
