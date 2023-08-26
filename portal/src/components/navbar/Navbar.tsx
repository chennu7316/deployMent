"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import EnquiryForm from "../enquiry-form/EnquiryForm";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useRouter} from "next/navigation"

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact", "Services", "Blogs"];

function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const router = useRouter();
  console.log("new commit")

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        INJAZ
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item}  />
            </ListItemButton>
          </ListItem>

        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box sx={{ display: "flex", height: "83px"  }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="div"
              sx={{ flexGrow: 1, height: "83px" , display: { xs: "none", sm: "block" } }}
            >
              <img src="/injaz-logo-two.png" alt="logo" />
            </Typography>
            
            <Box className="header_links" sx={{ display: { xs: "none", sm: "block" } }}>
              {/* {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item} 
                </Button>
              ))} */}
              <Button onClick={() => router.push("/signup")} className="signLog_btn" variant="contained" sx={{ color: "#fff" }}><AccountCircleIcon className="login_icon"/>Login / Signup</Button>
            <EnquiryForm />
              
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography>
            
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
