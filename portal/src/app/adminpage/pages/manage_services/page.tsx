"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import SettingsIcon from "@mui/icons-material/Settings";
import RemoveIcon from "@mui/icons-material/Remove";
import Collapse from "@mui/material/Collapse";
import AddIcon from "@mui/icons-material/Add";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { useRouter } from "next/navigation";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function ManageServices() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [topen, setTopen] = React.useState(false);
  const [eopen, setEopen] = React.useState(false);

  const router = useRouter();

  const handleClick = () => {
    setTopen(!topen);
  };

  const eopenClick = () => {
    setEopen(!eopen);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => router.push("/")}
          >
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => router.push("/adminpage/pages/admin_cars")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                fontSize: "12px",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <TimeToLeaveIcon />
              </ListItemIcon>
              <ListItemText
                primary="Cars"
                sx={{ opacity: open ? 1 : 0, fontSize: "5px" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon sx={{ minWidth: "52px" }}>
                <SettingsIcon sx={{ marginLeft: "4px" }} />
              </ListItemIcon>
              <ListItemText primary="Car Settings" />
              {topen ? (
                <RemoveIcon sx={{ fontSize: "13px" }} />
              ) : (
                <AddIcon sx={{ fontSize: "13px" }} />
              )}
            </ListItemButton>
            <Collapse in={topen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4, fontSize: "5px" }}
                  onClick={() => router.push("/adminpage/pages/manage_catego")}
                >
                  {/* <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon> */}
                  <ListItemText
                    sx={{ fontSize: "5px" }}
                    primary="Manage Categories"
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => router.push("/adminpage/pages/car_brands")}
                >
                  {/* <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon> */}
                  <ListItemText primary="Car Brands" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => router.push("/adminpage/pages/car_models")}
                >
                  {/* <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon> */}
                  <ListItemText primary="Car Models" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => router.push("/adminpage/pages/car_features")}
                >
                  {/* <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon> */}
                  <ListItemText primary="Car Features" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>router.push("/adminpage/pages/manage_services")}>
                  {/* <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon> */}
                  <ListItemText primary="Manage Services" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>router.push("/adminpage/pages/engine_capacities")}>
                  {/* <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon> */}
                  <ListItemText primary="Engine Capacities" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>router.push("/adminpage/pages/required_docs")}>
                  {/* <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon> */}
                  <ListItemText primary="Required Documents" />
                </ListItemButton>
              </List>
            </Collapse>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton onClick={eopenClick}>
              <ListItemIcon sx={{ minWidth: "52px" }}>
                <MailOutlineIcon sx={{ marginLeft: "4px" }} />
              </ListItemIcon>
              <ListItemText primary="Enquiries" />
              {eopen ? (
                <RemoveIcon sx={{ fontSize: "13px" }} />
              ) : (
                <AddIcon sx={{ fontSize: "13px" }} />
              )}
            </ListItemButton>
            <Collapse in={eopen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>router.push("/adminpage/pages/car_enquiries")}>
                  {/* <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon> */}
                  <ListItemText primary="Car Enquiries" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>router.push("/adminpage/pages/contact_enquiries")}>
                  {/* <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon> */}
                  <ListItemText primary="Contact Enquiries" />
                </ListItemButton>
              </List>
            </Collapse>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }} onClick={()=>router.push("/adminpage/pages/admin_location")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText
                primary="Locations"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }} onClick={()=>router.push("/adminpage/pages/admin_faqs")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary="FAQs" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <h1>Manage Services</h1>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main>
    </Box>
  );
}
