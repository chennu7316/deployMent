"use client";
import React from "react";
import { useState,useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

function createData(
  car: string,
  name: string,
  phoneNo: number,
  email: string,
  from: string,
  to: string,
  enquiryDate: string,
) {
  return { car, name, phoneNo, email, from, to, enquiryDate };
}

// const rows = [
//   createData("fortuner", "injaz", 987456123 , "injaz@gmail.com", "01/09/2023", "05/09/2023", "05/09/2023"),
//   createData("fortuner", "injaz", 987456123 , "injaz@gmail.com", "01/09/2023", "05/09/2023", "05/09/2023"),
//   createData("fortuner", "injaz", 987456123 , "injaz@gmail.com", "01/09/2023", "05/09/2023", "05/09/2023"),
//   createData("fortuner", "injaz", 987456123 , "injaz@gmail.com", "01/09/2023", "05/09/2023", "05/09/2023"),
//   createData("fortuner", "injaz", 987456123 , "injaz@gmail.com", "01/09/2023", "05/09/2023", "05/09/2023"),
//   createData("fortuner", "injaz", 987456123 , "injaz@gmail.com", "01/09/2023", "05/09/2023", "05/09/2023"),
// ];

export default function CarEnqDataTable() {

   const [rows,setrows]=useState([])
   useEffect(()=>{
    axios.get("http://localhost:4000/user/getInquirys")
    .then((res)=>{
      console.log(res,"responseeeeeeeeeee")
      console.log(res.data.data,"responseeeeeeeee")
      setrows(res.data.data)
    })
    .catch((err)=>{
      console.log("error")
    })
   },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Car</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Name
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Email
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Phone No.
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              From
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              To
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Enquiry Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row:any) => (
            <TableRow
              key={row.car}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.carName}
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {row.carName}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phoneNumber}</TableCell>
              <TableCell align="center">{row.pickUpLoc}</TableCell>
              <TableCell align="center">{row.dropLocation}</TableCell>
              <TableCell align="center">{row.startDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}