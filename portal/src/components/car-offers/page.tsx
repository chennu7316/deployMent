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

const CarOffers = () => {
  return (
    <div className="car_offers">
      <Container maxWidth="lg">
        <div className="car_off_head">
          <h1>Latest Car Rental Offers in Dubai</h1>
        </div>
        <div className="car_off_text">
          <p>
            Get on a road-trip now with the best deals for high-end cars
            manufactured by top automobile companies in the world.
          </p>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sm={3} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100%"
                  image="/Lamborghini-Huracan-Evo-Spyder-2021_8609_45880715-1_8609__small.webp"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Lamborghini Hurican
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h4>AED 3199 / day</h4>
                      <p>250 km</p>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h4>AED 56,700 / mon</h4>
                      <p>4500</p>
                    </Grid>
                  </Grid>
                  <div className="car_interior">
                    <div className="car_subint">Sports</div>
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
                  image="MG_5_2023_21241_21241_13861111254-1_small.webp"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    MG 5 2023
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h4>AED 110 / day</h4>
                      <p>450 km</p>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h4>AED 1700 / month</h4>
                      <p>4500 km</p>
                    </Grid>
                  </Grid>
                  <div className="car_interior">
                    <div className="car_subint">Sedan</div>
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
                      <p> Deposit: AED 1000</p>
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
                  image="McLaren_Artura_2023_19095_19095_12041232437-9_small.webp"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    McLaren Artura 2023
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h4>AED 4000 / day</h4>
                      <p>250 km</p>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      {/* <h4>AED 3000 / month</h4> */}
                      {/* <p>4500 km</p> */}
                    </Grid>
                  </Grid>
                  <div className="car_interior">
                    <div className="car_subint">Sports</div>
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
                      <p> Deposit: AED 1000</p>
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
                  image="Peugeot_3008_2022-3_small.webp"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Peugeot 3008 2022
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h4>AED 170 / day</h4>
                      <p>250 km</p>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h4>AED 3000 / month</h4>
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
                      <p> Deposit: AED 1000</p>
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

export default CarOffers;
