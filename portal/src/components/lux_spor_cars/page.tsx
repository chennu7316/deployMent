import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "../car-offers/caroffers.css";
import CheckIcon from "@mui/icons-material/Check";
import InfoIcon from "@mui/icons-material/Info";
const LuxSports = () => {
  return (
    <div className="car_offers">
      <Container maxWidth="lg">
        <div className="car_off_head">
          <h1>Luxury & Sports Cars</h1>
        </div>
        <div className="car_off_text">
          <p>
          Drive in style! Make your first car rental a great experience with luxury rental vehicles from top brands such as Rolls Royce, BMW, Land Rover, among others.
          </p>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sm={3} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100%"
                  image="/Lamborghini_Huracan-Evo-Spyder_2022_20512_20512_13010413501-4_small.webp"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Lamborghini Hurican
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h4>AED 3299 / day</h4>
                      <p>250 km</p>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h4>AED 65,000 / mon</h4>
                      <p>4500</p>
                    </Grid>
                  </Grid>
                  <div className="car_interior">
                    <div className="car_subint">Sportscar</div>
                    <div className="car_subint">2 Doors</div>
                    <div className="car_subint">2 Seater</div>
                    <div className="car_subint">2 bags</div>
                  </div>
                  <div className="car_info_sec6">
                    <div className="int_icon">
                      <CheckIcon sx={{ color: "green", marginRight: "5px" }} />{" "}
                      <p> Minimum 2 days rental</p>
                    </div>
                    <div className="int_icon">
                      <InfoIcon sx={{ color: "orange", marginRight: "5px" }} />{" "}
                      <p> Deposit: AED 5000</p>
                    </div>
                    <div className="int_icon">
                      <CheckIcon sx={{ color: "green", marginRight: "5px" }} />{" "}
                      <p> Insurance Included</p>
                    </div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} sm={3} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100%"
                  image="Land-Rover_Range-Rover-Sport-SE_2021_9789_9789_8981962168-2_small.webp"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Land Rover Range Rover
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h4>AED 900 / day</h4>
                      <p>250 km</p>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h4>AED 18000 / mon</h4>
                      <p>4500 km</p>
                    </Grid>
                  </Grid>
                  <div className="car_interior">
                    <div className="car_subint">SUV</div>
                    <div className="car_subint">4 Doors</div>
                    <div className="car_subint">5 Seater</div>
                    <div className="car_subint">2 bags</div>
                  </div>
                  <div className="car_info_sec6">
                    <div className="int_icon">
                      <CheckIcon sx={{ color: "green", marginRight: "5px" }} />{" "}
                      <p> Minimum 2 days rental</p>
                    </div>
                    <div className="int_icon">
                      <InfoIcon sx={{ color: "orange", marginRight: "5px" }} />{" "}
                      <p> Deposit: AED 2500</p>
                    </div>
                    <div className="int_icon">
                      <CheckIcon sx={{ color: "green", marginRight: "5px" }} />{" "}
                      <p> Insurance Included</p>
                    </div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} sm={3} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100%"
                  image="Land-Rover_Range-Rover-Sport-SE_2021_9789_9789_8981962168-2_small.webp"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Land Rover Range Rover
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h4>AED 2100 / day</h4>
                      <p>250 km</p>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h4>AED 45,000 / mon</h4>
                      <p>4500 km</p>
                    </Grid>
                  </Grid>
                  <div className="car_interior">
                    <div className="car_subint">SUV</div>
                    <div className="car_subint">2 Doors</div>
                    <div className="car_subint">2 Seater</div>
                    <div className="car_subint">2 bags</div>
                  </div>
                  <div className="car_info_sec6">
                    <div className="int_icon">
                      <CheckIcon sx={{ color: "green", marginRight: "5px" }} />{" "}
                      <p> Minimum 2 days rental</p>
                    </div>
                    <div className="int_icon">
                      <InfoIcon sx={{ color: "orange", marginRight: "5px" }} />{" "}
                      <p> Deposit: AED 3000</p>
                    </div>
                    <div className="int_icon">
                      <CheckIcon sx={{ color: "green", marginRight: "5px" }} />{" "}
                      <p> Insurance Included</p>
                    </div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} sm={3} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea> 
                <CardMedia
                  component="img"
                  height="100%"
                  image="Lamborghini_Urus_2019_17080_17080_11444040118-2_small.webp"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Lambhorghini Urus 2019
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h4>AED 2899 / day</h4>
                      <p>250 km</p>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h4>AED 54,810 / mon</h4>
                      <p>4500 km</p>
                    </Grid>
                  </Grid>
                  <div className="car_interior">
                    <div className="car_subint">SUV</div>
                    <div className="car_subint">4 Doors</div>
                    <div className="car_subint">5 Seater</div>
                    <div className="car_subint">2 bags</div>
                  </div>
                  <div className="car_info_sec6">
                    <div className="int_icon">
                      <CheckIcon sx={{ color: "green", marginRight: "5px" }} />{" "}
                      <p> Minimum 2 days rental</p>
                    </div>
                    <div className="int_icon">
                      <InfoIcon sx={{ color: "orange", marginRight: "5px" }} />{" "}
                      <p> Deposit: AED 5000</p>
                    </div>
                    <div className="int_icon">
                      <CheckIcon sx={{ color: "green", marginRight: "5px" }} />{" "}
                      <p> Insurance Included</p>
                    </div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LuxSports;
