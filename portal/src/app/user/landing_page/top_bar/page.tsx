import { Container, Grid } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import "../top_bar/TopBar.css";

const TopBar = () => {
  return (
    <div className="top_Bar_section">
      {/* <Container maxWidth="lg"> */}
      {/* <Grid container spacing={2}> */}
        {/* <Grid item xs={6} sm={6} md={6} lg={6}> */}
          <div className="top_bar_icon">
            <InstagramIcon className="topbar_icons" />
            <FacebookIcon className="topbar_icons" />
            <TwitterIcon className="topbar_icons" />
            <LinkedInIcon className="topbar_icons" />
          </div>
        {/* </Grid> */}
        {/* <Grid item xs={6} sm={6} md={6} lg={6}> */}
          <div className="top_email_n">
            <div className="top_email">
              <MailOutlineIcon className="top_mail_icon" />
              <p>info@injaz.ae</p>
            </div>
            <div className="top_num">
              <CallIcon className="top_mail_icon" />
              <p>+97150 996 1569</p>
            </div>
          </div>
        {/* </Grid> */}
      {/* </Grid> */}
      {/* </Container> */}
    </div>
  );
};

export default TopBar;
