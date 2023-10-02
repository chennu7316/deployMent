"use client"
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
  const handleInstagramClick =()=>{
    window.open('https://www.instagram.com/', '_blank');
  }
  const handleFacebookClick= () => {
    window.open('https://www.facebook.com/', '_blank');
  }
  const handleTwitterClick = ()=> {
    window.open('https://twitter.com/', '_blank')
  }
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/home', '_blank')
  }
  return (
    <div className="top_Bar_section">
      <div className="top_bar_icon">
        <InstagramIcon onClick={handleInstagramClick} className="topbar_icons" />
        <FacebookIcon onClick={handleFacebookClick} className="topbar_icons" />
        <TwitterIcon onClick={handleTwitterClick} className="topbar_icons" />
        <LinkedInIcon onClick={handleLinkedInClick} className="topbar_icons" />
      </div>
      <div className="top_email_n">
        <div className="top_email">
          <MailOutlineIcon className="top_mail_icon" />
          <p><a href="mailto:your-email@gmail.com">info@injaz.ae</a></p>
        </div>
        <div className="top_num">
          <CallIcon className="top_mail_icon" />
          <p><a href="tel:+97150 996 1569">+97150 996 1569</a></p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
