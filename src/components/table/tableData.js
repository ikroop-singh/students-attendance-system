import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { customStyles } from './styles'
import { Typography } from '@mui/material';


const TableData = ({ data }) => {
    

    return (
        <TableContainer sx={customStyles.container} component={Paper}>
            <Typography variant='h5' sx={customStyles.text}> Students Present - {data.length}</Typography>
            <Table  sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Student name</TableCell>
                        <TableCell align="right">Roll number</TableCell>
                        <TableCell align="right">Checkin Time</TableCell>
                        <TableCell align="right">Checkout Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((student) => (
                        <TableRow key={student.rollno} >
                            <TableCell component="th" >{student.name}</TableCell>
                            <TableCell align="right">{student.rollno}</TableCell>
                            <TableCell align="right">{student.checkinTime.toString()}</TableCell>
                            <TableCell align="right">{student.checkoutTime}</TableCell> 
                        </TableRow>
                    ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableData;