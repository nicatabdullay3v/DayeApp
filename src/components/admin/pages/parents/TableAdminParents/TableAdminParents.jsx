import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../../pages/babysitters/buttonsAdmin/ButtonsAdmin.scss'



const TableAdminParents = ({ seteditPage, setdeletePage, setcreatePage }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Parents Username</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Surname</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Child</TableCell>
                        <TableCell align="right">Edit</TableCell>
                        <TableCell align="right">Delete</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow

                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            MikeBonbomo
                        </TableCell>
                        <TableCell align="right">Mike</TableCell>
                        <TableCell align="right">Bonomo</TableCell>
                        <TableCell align="right">Mike@gmail.com</TableCell>
                        <TableCell align="right">2</TableCell>
                        <TableCell align="right">
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
                        </TableCell>
                        <TableCell align="right">

                            <button
                                className="button_employee"
                                onClick={() => {

                                    seteditPage(false);


                                }}
                            >
                                Delete
                            </button>
                        </TableCell>



      
                    </TableRow>
                 
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableAdminParents