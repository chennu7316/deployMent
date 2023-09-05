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
  title: string,
  status: string,
  createdDate: string,
  updatedDate: string,
) {
  return { title, status, createdDate, updatedDate };
}

const rows = [
  createData("Reserve Camera", "Active", "30/08/2023", "30/08/2023"),
  createData("Reserve Camera", "Active", "30/08/2023", "30/08/2023"),
  createData("Reserve Camera", "Active", "30/08/2023", "30/08/2023"),
  createData("Reserve Camera", "Active", "30/08/2023", "30/08/2023"),
  createData("Reserve Camera", "Active", "30/08/2023", "30/08/2023"),
  createData("Reserve Camera", "Active", "30/08/2023", "30/08/2023"),
];

export default function FeatDataTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Status
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Created Date
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Updated Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.createdDate}</TableCell>
              <TableCell align="center">{row.updatedDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
