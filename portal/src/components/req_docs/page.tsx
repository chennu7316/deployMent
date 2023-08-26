import React from "react";
import "../req_docs/reqdocs.css";
import { CardActionArea, CardMedia, Container, Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";


const ReqDocs = () => {
  return (
    <>
      <section className="required_documents">
        <Container maxWidth="lg">
          <div className="req_heading">
            <h1>Documents Required for Car Rental in the UAE</h1>
          </div>
          <div className="req_para">
            <p>
              If you’re planning a trip to the UAE, you’ll find that all major
              attractions in the UAE are spread far and wide. From unique
              shopping destinations like the Mall Of The Emirates, popular
              landmarks such as the Sheikh Zayed Grand Mosque in Abu Dhabi to
              exquisite hotels and resorts located in Ras Al Khaimah, the best
              way to get around is by car. You are eligible to rent a car across
              the emirates provided you have the below mentioned valid documents
              with you:
            </p>
          </div>
          <Container maxWidth="lg" sx={{marginTop:"50px", marginBottom:"50px"}}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sm={6} lg={6}>
                <div className="uae_res">
                  <h6>For UAE Residents</h6>
                  <Grid container spacing={2} sx={{alignItems:"center"}}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="100%"
                          image="/1675327062rent-a-car-uae-resident.jpg"
                          alt="green iguana"
                        />
                      </CardActionArea>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <CardActionArea>
                        <div className="int_icon">
                          <CheckIcon sx={{ color: "green", marginRight: "5px" }}/>{" "}
                          <p> UAE Driving License</p>
                        </div>
                        <div className="int_icon">
                          <CheckIcon sx={{ color: "green", marginRight: "5px" }}/>{" "}
                          <p> Emirates ID <br/>(Residential Visa may be acceptable)</p>
                        </div>
                      </CardActionArea>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={12} md={6} sm={6} lg={6}>
                <div className="uae_res">
                  <h6>For Tourists visiting the UAE</h6>
                  <Grid container spacing={2} sx={{alignItems:"center"}}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="100%"
                          image="/1675327062rent-a-car-tourist-uae.jpg"
                          alt="green iguana"
                        />
                      </CardActionArea>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <CardActionArea>
                        <div className="int_icon">
                          <CheckIcon sx={{ color: "green", marginRight: "5px" }}/>{" "}
                          <p> Passport</p>
                        </div>
                        <div className="int_icon">
                          <CheckIcon sx={{ color: "green", marginRight: "5px" }}/>{" "}
                          <p> Visit Visa</p>
                        </div>
                        <div className="int_icon">
                          <CheckIcon sx={{ color: "green", marginRight: "5px" }}/>{" "}
                          <p> Home Country Driving License</p>
                        </div>
                        <div className="int_icon">
                          <CheckIcon sx={{ color: "green", marginRight: "5px" }}/>{" "}
                          <p> International Driving Permit (IDP)</p>
                        </div>
                      </CardActionArea>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default ReqDocs;
