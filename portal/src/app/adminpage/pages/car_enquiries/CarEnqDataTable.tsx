"use client";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

const rows = [
  createData("fortuner", "injaz", 987456123 , "injaz@gmail.com", "01/09/2023", "05/09/2023", "05/09/2023"),
  createData("fortuner", "injaz", 987456123 , "injaz@gmail.com", "01/09/2023", "05/09/2023", "05/09/2023"),
  createData("fortuner", "injaz", 987456123 , "injaz@gmail.com", "01/09/2023", "05/09/2023", "05/09/2023"),
  createData("fortuner", "injaz", 987456123 , "injaz@gmail.com", "01/09/2023", "05/09/2023", "05/09/2023"),
  createData("fortuner", "injaz", 987456123 , "injaz@gmail.com", "01/09/2023", "05/09/2023", "05/09/2023"),
  createData("fortuner", "injaz", 987456123 , "injaz@gmail.com", "01/09/2023", "05/09/2023", "05/09/2023"),
];

export default function CarEnqDataTable() {
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
          {rows.map((row) => (
            <TableRow
              key={row.car}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.car}
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.phoneNo}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.from}</TableCell>
              <TableCell align="center">{row.to}</TableCell>
              <TableCell align="center">{row.enquiryDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}