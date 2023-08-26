"use client";
import React from "react";
import "../compoverview/compoverview.css";
import { Container, Grid } from "@mui/material";

const CompanyOverview = () => {
  return (
    <section className="company_overview">
      <Container maxWidth="lg">
        <div className="faq_head">
          <h1>Find the best car rental company for you</h1>
        </div>
        <Grid container sx={{alignItems:"center"}} spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className="overview_text">
              <p>
                INJAZ is the first-ever global car rental and leasing
                marketplace. We work with 200+ local car rental companies in
                Dubai. You can choose among their 2000+ verified cars to find
                the best rental car for you.
              </p>
              <p>
                Find cheap car rental deals and discounts for all types of cars:
                be it for personal or business use. Access competitive,
                commission-free car rental service in Dubai, Abu Dhabi, Sharjah
                and Ajman.
              </p>
              <p>
                Our car rental partners’ fleet include every car you’ve ever
                dreamed of. From high-end supercar rentals such as Ferrari,
                Lamborghini and Rolls Royce to luxury SUVs Range Rover, Mercedes
                Benz and even economy cars such as Kia Picanto, Nissan Sunny and
                Renault Duster.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img
              style={{ width: "100%" }}
              src="/car rental 1@2x.png"
              alt="company image"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default CompanyOverview;
