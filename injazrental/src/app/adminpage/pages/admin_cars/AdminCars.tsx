"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';

function createData(
  name: string,
  year: number,
  company: string,
  color: string
) {
  return { name, year, company, color };
}

const rows = [
  createData("Montero", 2002, "Mitsubishi", "Yellow"),
  createData("Montero", 2002, "Mitsubishi", "Yellow"),
  createData("Montero", 2002, "Mitsubishi", "Yellow"),
  createData("Montero", 2002, "Mitsubishi", "Yellow"),
  createData("Montero", 2002, "Mitsubishi", "Yellow"),
  createData("Montero", 2002, "Mitsubishi", "Yellow"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Year
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Company
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Color
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Action
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
              <TableCell align="center">{row.year}</TableCell>
              <TableCell align="center">{row.company}</TableCell>
              <TableCell align="center">{row.color}</TableCell>
              <TableCell align="center">
                <Button sx={{ fontSize:"12px", margin:"5px"}} size="small" variant="contained" color="primary">
                  View
                </Button>
                <Button sx={{ fontSize:"12px", margin:"5px"}} size="small" variant="contained" color="success">
                  Edit
                </Button>
                <Button sx={{ fontSize:"12px", margin:"5px"}} size="small" variant="contained" color="error">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
