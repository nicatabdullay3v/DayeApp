import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../buttonsAdmin/ButtonsAdmin.scss";
import axios from "axios";
import {
  fetchUserById,
 
} from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useDispatch, useSelector } from "react-redux";

const CardsAdmin = ({ seteditPage, setcreatePage, seteditID, editID }) => {
  const babysittersData = useSelector((state) => state.babysitters.babysitters);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    axios.delete(
      `http://localhost:3000/babysitters/${id}`
    ).then(dispatch(fetchUserById()))
  };

  useEffect(() => {
    dispatch(fetchUserById());
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>BabySitters ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {babysittersData.map((elem) => {
            return (
              <TableRow
                key={uuidv4()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {elem.id}
                </TableCell>
                <TableCell align="right">{elem.name}</TableCell>
                <TableCell align="right">{elem.age}</TableCell>
                <TableCell align="right">{elem.email}</TableCell>
                <TableCell align="right">{elem.country}</TableCell>

                <TableCell align="right">{elem.price}$</TableCell>
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

export default CardsAdmin;
