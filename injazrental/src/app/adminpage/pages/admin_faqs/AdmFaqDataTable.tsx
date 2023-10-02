"use client";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(
  question: string,
  answer: string,
  status: string,
  createdDate: string,
  updatedDate: string
) {
  return {question, answer, status, createdDate, updatedDate };
}

const rows = [
  createData(
    "What Should I Do When My Vehicle Needs Servicing And Maintenance?",
    "Please inform Logic Car Rental or use the Book A Service feature from our website to arrange an appointment with one of our customer service representatives. We will book your vehicle in for service and arrange a replacement vehicle.",
    "Active",
    "30/08/2023",
    "30/08/2023",
  ),
  createData(
    "What Should I Do When My Vehicle Needs Servicing And Maintenance?",
    "Please inform Logic Car Rental or use the Book A Service feature from our website to arrange an appointment with one of our customer service representatives. We will book your vehicle in for service and arrange a replacement vehicle.",
    "Active",
    "30/08/2023",
    "30/08/2023"
  ),
  createData(
    "What Should I Do When My Vehicle Needs Servicing And Maintenance?",
    "Please inform Logic Car Rental or use the Book A Service feature from our website to arrange an appointment with one of our customer service representatives. We will book your vehicle in for service and arrange a replacement vehicle.",
    "Active",
    "30/08/2023",
    "30/08/2023"
  ),
  createData(
    "What Should I Do When My Vehicle Needs Servicing And Maintenance?",
    "Please inform Logic Car Rental or use the Book A Service feature from our website to arrange an appointment with one of our customer service representatives. We will book your vehicle in for service and arrange a replacement vehicle.",
    "Active",
    "30/08/2023",
    "30/08/2023"
  ),
  createData(
    "What Should I Do When My Vehicle Needs Servicing And Maintenance?",
    "Please inform Logic Car Rental or use the Book A Service feature from our website to arrange an appointment with one of our customer service representatives. We will book your vehicle in for service and arrange a replacement vehicle.",
    "Active",
    "30/08/2023",
    "30/08/2023"
  ),
  createData(
    "What Should I Do When My Vehicle Needs Servicing And Maintenance?",
    "Please inform Logic Car Rental or use the Book A Service feature from our website to arrange an appointment with one of our customer service representatives. We will book your vehicle in for service and arrange a replacement vehicle.",
    "Active",
    "30/08/2023",
    "30/08/2023"
  ),
];

export default function AdmFaqDataTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Question</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Answer
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Status
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Created Date
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Updated Date
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.question}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell  component="th" scope="row">
                {row.question}
              </TableCell>
              <TableCell size="small" sx={{textAlign:"justify"}} align="center">{row.answer}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.createdDate}</TableCell>
              <TableCell align="center">{row.updatedDate}</TableCell>
              <TableCell align="center"><Button variant="contained" sx={{marginBottom:"5px"}} size="small" color="primary">edit</Button>   <Button variant="contained" size="small" color="error">delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
