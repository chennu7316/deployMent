"use client";
import { CardActionArea, CardMedia, Container, Grid } from "@mui/material";
import React from "react";
import "../footer/footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const Footer = () => {
  return (
    <section className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={2.4} md={2.4} lg={2.4}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                image="injaz new final logo 1122 1.png"
                alt="footer_logo"
              />
            </CardActionArea>
            <p className="foot_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              ratione, blanditiis corporis temporibus ducimus adipisci.
            </p>
            <div className="foot_icons">
              <Grid container>
                <Grid item xs={2.4} sm={2.4} md={2.4} lg={2.4}>
                  <img
                    style={{ width: "30px" }}
                    src="/facebook.png"
                    alt="facebook"
                  />
                </Grid>
                <Grid item xs={2.4} sm={2.4} md={2.4} lg={2.4}>
                  <img
                    style={{ width: "30px" }}
                    src="/google.png"
                    alt="google"
                  />
                </Grid>
                <Grid item xs={2.4} sm={2.4} md={2.4} lg={2.4}>
                  <img
                    style={{ width: "30px" }}
                    src="/instagram.png"
                    alt="google"
                  />
                </Grid>
                <Grid item xs={2.4} sm={2.4} md={2.4} lg={2.4}>
                  <img
                    style={{ width: "30px" }}
                    src="/twitter.png"
                    alt="google"
                  />
                </Grid>
                <Grid item xs={2.4} sm={2.4} md={2.4} lg={2.4}>
                  <img
                    style={{ width: "30px" }}
                    src="/linkedin.png"
                    alt="google"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={2.4} md={2.4} lg={2.4}>
            <div className="link_two">
              <h4>QUICK LINKS</h4>
              <ul>
                <li>Home</li>
                <li>Service</li>
                <li>About Us</li>
                <li>Vehicle</li>
                <li>FAQs</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={2.4} md={2.4} lg={2.4}>
            <div className="link_two">
              <h4>TOP CITIES</h4>
              <ul>
                <li>Dubai</li>
                <li>Abu Dhabi</li>
                <li>Sharjah</li>
                <li>Ajman</li>
                <li>Fujairah</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={2.4} md={2.4} lg={2.4}>
            <div className="link_two">
              <h4>LEGAL</h4>
              <ul>
                <li>Terms & Conditions</li>
                <li>Cookies Policy</li>
                <li>Privacy Policy</li>
                <li>Feedback</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={2.4} md={2.4} lg={2.4}>
            <div className="link_two">
              <h4>CONTACT</h4>
              <ul>
                <li>82, New Street, NY</li>
                <li>abcdef@gmail.com</li>
                <li>(406) 555-0120</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Footer;
