"use client";
import { Container } from "@material-ui/core";
import { Stack, Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Navlinks() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElTwo, setAnchorElTwo] = React.useState<null | HTMLElement>(null);
  const [anchorElThree, setAnchorElThree] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const openTwo = Boolean(anchorElTwo);
  const openThree = Boolean(anchorElThree);

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
      <div className="Navlink" style={{backgroundColor: "#f1f3f4",
    padding: "10px 0px"}}>
        <Container>
          <Stack spacing={5} direction="row">
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
              <MenuItem sx={{ width: "200px", fontSize: "14px"  }} onClick={handleClose}>
                MONTHLY
              </MenuItem>
              <MenuItem sx={{ width: "200px", fontSize: "14px"  }} onClick={handleClose}>WEEKLY</MenuItem>
              <MenuItem sx={{ width: "200px", fontSize: "14px"  }} onClick={handleClose}>DAILY</MenuItem>
              <MenuItem sx={{ width: "200px", fontSize: "14px"  }} onClick={handleClose}>CUSTOMIZE</MenuItem>
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
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>AUDI</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>BENTLEY</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>BMW</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>CHEVROLET</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>FERRARI</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>HYUNDAI</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>KIA</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>LAMBORGHINI</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>INFINITI</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>MITSUBISHI</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>LAND ROVER</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>MAZDA</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>MERCEDES</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>NISSAN</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>PEUGEOT</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>PORSCHE</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>ROLLS ROYCE</MenuItem>
              <MenuItem sx={{ fontSize: "14px"  }} onClick={handleCloseTwo}>TOYOTA</MenuItem>
              
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
              <MenuItem sx={{ width: "210px", fontSize: "14px"  }} onClick={handleCloseThree}>
              MIDSIZE CARS FOR RENT
              </MenuItem>
              <MenuItem sx={{ width: "210px", fontSize: "14px"  }} onClick={handleCloseThree}>SUV CARS FOR RENT</MenuItem>
            </Menu>

            <Button variant="text">BLOGE </Button>
            <Button variant="text">PROMOTIONS</Button>
            <Button variant="text">FAQ </Button>
            <Button variant="text">CONTACT US</Button>
          </Stack>
        </Container>
      </div>
    </>
  );
}

export default Navlinks;
