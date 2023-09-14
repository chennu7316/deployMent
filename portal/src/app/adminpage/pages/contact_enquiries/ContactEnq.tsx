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
  name: string,
  phoneNo: number,
  email: string,
  message: string,
  date: string,
) {
  return { name, phoneNo, email, message, date};
}

const rows = [
  createData("Subhash", +917032613796 , "Subhashmangalam786@gmail.com", "Hi, I Want To Book A Cab", "05/09/2023"),
  createData("Subhash", +917032613796 , "Subhashmangalam786@gmail.com", "Hi, I Want To Book A Cab", "05/09/2023"),
  createData("Subhash", +917032613796 , "Subhashmangalam786@gmail.com", "Hi, I Want To Book A Cab", "05/09/2023"),
  createData("Subhash", +917032613796 , "Subhashmangalam786@gmail.com", "Hi, I Want To Book A Cab", "05/09/2023"),
  createData("Subhash", +917032613796 , "Subhashmangalam786@gmail.com", "Hi, I Want To Book A Cab", "05/09/2023"),
  createData("Subhash", +917032613796 , "Subhashmangalam786@gmail.com", "Hi, I Want To Book A Cab", "05/09/2023"),
];

export default function ContactEnq() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Email
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
            Phone Number
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Message
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phoneNo}</TableCell>
              <TableCell align="center">{row.message}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
