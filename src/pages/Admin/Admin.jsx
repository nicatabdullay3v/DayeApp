import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.scss";
// import AdminPage from "../../components/admin/pages/AdminPage/AdminPage";
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin";
import { useNavigate } from "react-router";
const Admin = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [check, setCheck] = useState(false);
  const [admins, setAdmins] = useState([]);
  let admin = JSON.parse(localStorage.getItem("admin"));
  useEffect(() => {
    axios("http://localhost:3000/admin").then((res) => {
      setAdmins(res.data);
    });
  }, []);
  console.log(admins);
  return (
    <>
      {admin ? <NavbarAdmin /> : null}
      {!admin ? (
        <div className="containerAdmin">
          <h1>Are you admin?</h1>
          <div className="admin-code">
            <h1>Enter code of admin:</h1>
            <input
              onChange={(e) => {
                setCode(e.target.value);
              }}
              type="text"
            />
            <button
              onClick={() => {
                admins.forEach((elem) => {
                  if (elem?.adminCode == code) {
                    console.log("salam");
                    localStorage.setItem("admin", JSON.stringify(true));
                    setCheck(true);
                    navigate("/Parents");
                  }
                });
              }}
            >
              Submit
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Admin;
