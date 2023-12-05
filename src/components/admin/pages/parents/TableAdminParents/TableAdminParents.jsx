import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { DataGrid } from "@mui/x-data-grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../../pages/babysitters/buttonsAdmin/ButtonsAdmin.scss";
import { useDispatch, useSelector } from "react-redux";
import { DeleteParent } from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";

import { fetcBabysitterJobs } from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import axios from "axios";
import 'swiper/css';
import 'swiper/css/pagination';
const TableAdminParents = ({
  seteditPage,
  setcreatePage,
  seteditID,
  editID,
}) => {
  const ParentsData = useSelector(
    (state) => state.babysitters.babysitterswanted
  );

  const dispatch = useDispatch();

<<<<<<< HEAD
console.log(ParentsData)
=======
>>>>>>> 630c4bf8441cd1e5f20b797060986b6d0c538335
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/babysitterswanted/${id}`)
      .then(dispatch(fetcBabysitterJobs()));
  };
  console.log(ParentsData);
  useEffect(() => {
    dispatch(fetcBabysitterJobs());
  }, []);
<<<<<<< HEAD


  const columns = [
    { field: "id", headerName: "Parents ID", flex: 1 },
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "numberofChildren", headerName: "Child", flex: 1 },
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
          onClick={() => handleDelete(params.row.id)}
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
=======
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Parents ID</TableCell>
            <TableCell align="right">firstName</TableCell>
            <TableCell align="right">lastName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Adress</TableCell>
            <TableCell align="right">Child</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ParentsData.map((elem) => {
            return (
              <TableRow
                key={uuidv4()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {elem.id}
                </TableCell>
                <TableCell align="right"> {elem.firstName}</TableCell>
                <TableCell align="right"> {elem.lastName}</TableCell>
                <TableCell align="right"> {elem.email}</TableCell>
                <TableCell align="right">
                  {" "}
                  {elem.address?.country}, {elem.address?.city}{" "}
                  {elem.address?.region}
                </TableCell>
                <TableCell align="right">{elem.numberofChildren}</TableCell>
                <TableCell align="right">
                  <button
                    className="button_employee"
                    id={elem.id}
                    onClick={() => {
                      seteditPage(true);

                      setcreatePage(false);
                      seteditID(elem.id);
                    }}
                  >
                    Edit
                  </button>
                </TableCell>
                <TableCell align="right">
                  <button
                    className="button_employee"
                    onClick={() => handleDelete(elem.id)}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
>>>>>>> 630c4bf8441cd1e5f20b797060986b6d0c538335
  );
};

export default TableAdminParents;
