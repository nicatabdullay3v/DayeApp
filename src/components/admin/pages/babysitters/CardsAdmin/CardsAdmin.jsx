import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { DataGrid } from "@mui/x-data-grid";
import "../buttonsAdmin/ButtonsAdmin.scss";
import axios from "axios";
import "./CardsAdmin.scss";
import { fetchUserById } from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useDispatch, useSelector } from "react-redux";

const CardsAdmin = ({ seteditPage, setcreatePage, seteditID, editID }) => {
  const babysittersData = useSelector((state) => state.babysitters.babysitters);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/babysitters/${id}`)
      .then(dispatch(fetchUserById()));
  };

  useEffect(() => {
    dispatch(fetchUserById());
  }, []);

  const columns = [
    { field: "id", headerName: "BabySitters ID", flex: 1 },
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "country", headerName: "Country", flex: 1 },
    { field: "price", headerName: "Price", flex: 1 },
    {
      field: "edit",
      headerName: "Edit",
      flex: 1,
      renderCell: (params) => (
        <button
          className="button_employee"
          onClick={() => {
            seteditPage(true);
            setcreatePage(false);
            seteditID(params.row.id);
          }}
        >
          Edit
        </button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      renderCell: (params) => (
        <button
          className="button_employee"
          onClick={() => {
            seteditPage(false);
            setcreatePage(false);
            handleDelete(params.row.id);
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div className="CardsAdmin" style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={babysittersData}
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
};

export default CardsAdmin;
