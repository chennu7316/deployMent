"use client";
import { Stack, Button, Menu, MenuItem, Container, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../navlinks/navlinks.css"
import axios from "axios";

function Navlinks() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElTwo, setAnchorElTwo] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElThree, setAnchorElThree] = React.useState<null | HTMLElement>(
    null
  );

  const [drop,setdrop]=useState([])
  const open = Boolean(anchorEl);
  const openTwo = Boolean(anchorElTwo);
  const openThree = Boolean(anchorElThree);

  useEffect(()=>{
    axios.get("http://localhost:4000/user/getAllBrands")
    .then((res)=>{
      setdrop(res.data.data)
    })
    .catch((err)=>{
      console.log(err,"error")
    })
  })
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickTwo = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElTwo(event.currentTarget);
  };
  const handleClickThree = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElThree(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseTwo = () => {
    setAnchorElTwo(null);
  };
  const handleCloseThree = () => {
    setAnchorElThree(null);
  };

  return (
    <>
      <div
        className="Navlink"
        style={{ backgroundColor: "#f1f3f4", padding: "10px 0px" }}
      >
        <Box >
          <Stack spacing={5} direction="row" sx={{justifyContent:"center"}}>
            <Button variant="text">ABOUT US</Button>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              CAR RENTAL PACKAGES
              <ArrowDropDownIcon />
            </Button>
            <Menu
              id="basic-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{}}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                sx={{ width: "200px", fontSize: "14px" }}
                onClick={handleClose}
              >
                MONTHLY
              </MenuItem>
              <MenuItem
                sx={{ width: "200px", fontSize: "14px" }}
                onClick={handleClose}
              >
                WEEKLY
              </MenuItem>
              <MenuItem
                sx={{ width: "200px", fontSize: "14px" }}
                onClick={handleClose}
              >
                DAILY
              </MenuItem>
              <MenuItem
                sx={{ width: "200px", fontSize: "14px" }}
                onClick={handleClose}
              >
                CUSTOMIZE
              </MenuItem>
            </Menu>

            <Button
              id="basic-button-two"
              aria-controls={openTwo ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openTwo ? "true" : undefined}
              onClick={handleClickTwo}
              variant="text"
            >
              BRANDS
              <ArrowDropDownIcon />
            </Button>
            <Menu
              id="basic-button-two"
              anchorEl={anchorElTwo}
              open={openTwo}
              onClose={handleCloseTwo}
              MenuListProps={{
                "aria-labelledby": "basic-button-two",
              }}
            >
               {drop.length > 0 && // Check if data is not empty
          drop.map((item) => (
            <MenuItem key={item._id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
            </Menu>

            <Button
              id="basic-button-three"
              aria-controls={openThree ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openThree ? "true" : undefined}
              onClick={handleClickThree}
              variant="text"
            >
              ECONOMY CARS
              <ArrowDropDownIcon />
            </Button>
            <Menu
              id="basic-button-three"
              anchorEl={anchorElThree}
              open={openThree}
              onClose={handleCloseThree}
              MenuListProps={{
                "aria-labelledby": "basic-button-three",
              }}
            >
              <MenuItem
                sx={{ width: "210px", fontSize: "14px" }}
                onClick={handleCloseThree}
              >
                MIDSIZE CARS FOR RENT
              </MenuItem>
              <MenuItem
                sx={{ width: "210px", fontSize: "14px" }}
                onClick={handleCloseThree}
              >
                SUV CARS FOR RENT
              </MenuItem>
            </Menu>

            <Button variant="text">BLOGE </Button>
            <Button variant="text">PROMOTIONS</Button>
            <Button variant="text">FAQ </Button>
            <Button variant="text">CONTACT US</Button>
          </Stack>
        </Box>
      </div>
    </>
  );
}

export default Navlinks;
