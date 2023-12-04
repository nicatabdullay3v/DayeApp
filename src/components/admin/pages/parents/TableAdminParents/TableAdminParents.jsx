import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../../pages/babysitters/buttonsAdmin/ButtonsAdmin.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetcBabysitterJobs, DeleteParent } from "../../../../../redux/Slice/ParentsSlice/ParentsSlice";

const TableAdminParents = ({
  seteditPage,
  setcreatePage,
  seteditID,
  editID,
}) => {
  const ParentsData = useSelector((state) => state.babysitterswanted.babysitterswanted);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(DeleteParent(id));
  };
  useEffect(() => {
    dispatch(fetcBabysitterJobs());
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Parents Username</TableCell>
            <TableCell align="right">firstName</TableCell>
            <TableCell align="right">lastName</TableCell>
            <TableCell align="right">Email</TableCell>
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
                {elem.firstName}
                </TableCell>
                <TableCell align="right"> {elem.firstName}</TableCell>
                <TableCell align="right"> {elem.lastName}</TableCell>
                <TableCell align="right"> {elem.email}</TableCell>
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
  );
};

export default TableAdminParents;
