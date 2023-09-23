"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { Button, Container, IconButton, InputAdornment, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import "../car_models/ModelsDataTable.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface Data {
  Title: string;
//   slag: string;
  Status: string;
  CreatedDate: string;
  UpdatedDate: string;
}

function createData(
  Title: string,
//   slag: string,
  Status: string,
  CreatedDate: string,
  UpdatedDate: string
): Data {
  return {
    Title,
    // slag,
    Status,
    CreatedDate,
    UpdatedDate,
  };
}

// const rows1 = [
//   createData("Toyota", "toyota", "Active", "5/08/2023", "5/08/2023"),
//   createData("Nissan", "nissan", "Active", "4/08/2023", "4/08/2023"),
//   createData("Mitsubishi", "mitsubishi", "Active", "3/08/2023", "3/08/2023"),
//   createData("Mazda", "mazda", "Active", "2/08/2023", "2/08/2023"),
//   createData("Kia", "kia", "Active", "1/08/2023", "1/08/2023"),
// ];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "Title",
    numeric: false,
    disablePadding: true,
    label: "Title",
  },
//   {
//     id: "slag",
//     numeric: true,
//     disablePadding: false,
//     label: "Slug",
//   },
  {
    id: "Status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "CreatedDate",
    numeric: true,
    disablePadding: false,
    label: "CreatedDate",
  },
  {
    id: "UpdatedDate",
    numeric: true,
    disablePadding: false,
    label: "UpdatedDate",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              sx={{ fontWeight: "700" }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell sx={{ fontWeight: "700" }} align="center">
          Action
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default function ReqDocsTableTest() {
  const [order, setOrder] = React.useState<Order>("desc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("Title");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([]);
  const [searched, setSearched] = React.useState<string>("");

  const [Rows, setrows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/user/getAllcarDocument")
      .then((res) => {
        setrows(res.data.data);
        setRows(res.data.data)
      })
      .catch((err) => {
        console.log("ddddddddddddd");
      });
  }, []);

  const requestSearch = (searchedVal: string) => {
    setSearched(searchedVal);
    const filteredRows = rows.filter((row1:any) => {
      return row1.Title.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setrows(filteredRows);
    const b =Rows
    debugger
  };

  const cancelSearch = () => {
    const a =Rows
    debugger
    setSearched("")
    setrows(rows);
   requestSearch(searched);
  };
  const router = useRouter();

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = Rows.map((n:any) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setDense(event.target.checked);
  // };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(Rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, searched,Rows,selected]
  );
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TextField
          //type="search"
          id="search"
          size="small"
          label="Search"
          sx={{ width: 600 }}
          
          value={searched}
          onChange={(e:any) => requestSearch(e.target.value)}
        />
        <TableContainer>
          <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            <Table
              sx={{ minWidth: 750, fontWeight: "700" }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={Rows.length}
              />
              <TableBody>
                {visibleRows.map((row:any, index) => {
                  const isItemSelected = isSelected(row.Title);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    // {Rows.map((row:any) => (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.Title)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.Title}
                      selected={isItemSelected}
                      sx={{ cursor: "pointer" }}
                    >
                        
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.Title}
                      </TableCell>
                      {/* <TableCell align="left">{row.slag}</TableCell> */}
                      <TableCell align="left">{row.Status}</TableCell>
                      <TableCell align="left">{row.CreatedDate}</TableCell>
                      <TableCell align="left">{row.UpdatedDate}</TableCell>
                      
                      <TableCell align="center">
                        <BorderColorIcon
                          color="success"
                          sx={{ marginRight: "5px" }}
                          onClick={() => {
                            localStorage.setItem(row._id, JSON.stringify(row));
                            router.push(
                              `/adminpage/pages/required_docs/req_docs_from?verify=${row._id}`
                            );
                          }}
                        />
                        <DeleteIcon 
                          onClick={() => {
                            axios
                              .delete(
                                `http://localhost:4000/user/deleteCarDocument/${row._id}`
                              )
                              .then((res) => {
                                //will integrate tostifire
                                Swal.fire(
                                  'Deleted!',
                                  'The car documents has been deleted.',
                                  'success'
                                )
                                axios
                              .get("http://localhost:4000/user/getAllcarDocument")
                              .then((res) => {
                               
                                setrows(res.data.data);
                                setRows(res.data.data);
                              })
                              .catch((err) => {
                                console.log("ddddddddddddd");
                              });
  
                              })
                              .catch((err) => {
                                console.log("ddddddddddddd");
                              });
                            
                          }}
                        
                        />
                      </TableCell>
                    </TableRow>
                    // ))}
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={Rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
