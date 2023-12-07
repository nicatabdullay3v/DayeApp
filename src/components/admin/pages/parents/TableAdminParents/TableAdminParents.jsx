import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { DataGrid } from "@mui/x-data-grid";
import "../../../pages/babysitters/buttonsAdmin/ButtonsAdmin.scss";
import { useDispatch, useSelector } from "react-redux";

import { fetcBabysitterJobs } from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
const TableAdminParents = ({
  seteditPage,
  setdetailPage,
  setcreatePage,
  seteditID,
  editID,
}) => {
  const ParentsData = useSelector(
    (state) => state.babysitters.babysitterswanted
  );
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/babysitterswanted/${id}`)
      .then(dispatch(fetcBabysitterJobs()));
  };
  // console.log(ParentsData);
  useEffect(() => {
    dispatch(fetcBabysitterJobs());
  }, []);
  const columns = [
    { field: "id", headerName: "Parents ID", flex: 1 },
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "numberofChildren", headerName: "Child", flex: 1 },
    { field: "childrenAge", headerName: "ChildAge", flex: 1 },

    {
      field: "detail",
      headerName: "Detail",
      flex: 1,
      renderCell: (params) => (
        <button
          className="button_employee"
          onClick={() => {
            setdetailPage(true);
            seteditPage(false);
            setcreatePage(false);
            seteditID(params.row.id);
          }}
        >
          Detail
        </button>
      ),
    },
    {
      field: "edit",
      headerName: "Edit",
      flex: 1,
      renderCell: (params) => (
        <button
          className="button_employee"
          onClick={() => {
            seteditPage(true);
            setdetailPage(false);
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
            setdetailPage(false);
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
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={ParentsData}
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
};

export default TableAdminParents;
