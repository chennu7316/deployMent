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
  const SuvCars = () => {
    return (
      <div className="car_offers">
        <Container maxWidth="lg">
          <div className="car_off_head">
            <h1>SUVs for rent in Dubai</h1>
          </div>
          <div className="car_off_text">
            <p>
            From spacious 7-seaters to the latest 5-seater sports utility vehicles, we feature a broad range of trendy SUV car rental deals in the UAE.
            </p>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3} sm={3} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image="/Audi-Q8-2021_9071_7381154121-8_9071__small.webp"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Audi Q8 2021
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <h4>AED 700 / day</h4>
                        <p>250 km</p>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <h4>AED 18,000 / mon</h4>
                        <p>4500</p>
                      </Grid>
                    </Grid>
                    <div className="car_interior">
                      <div className="car_subint">SUV</div>
                      <div className="car_subint">4 Doors</div>
                      <div className="car_subint">5 Seater</div>
                      <div className="car_subint">3 bags</div>
                    </div>
                    <div className="car_info_sec6">
                      <div className="int_icon">
                        <CheckIcon sx={{ color: "green", marginRight: "5px" }} />{" "}
                        <p> Minimum 2 days rental</p>
                      </div>
                      <div className="int_icon">
                        <InfoIcon sx={{ color: "orange", marginRight: "5px" }} />{" "}
                        <p> Deposit: AED 1500</p>
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
                    image="Land-Rover-Range-Rover-Vogue-HSE-2023_14307_7305754064-7_14307__small.webp"
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
                        <h4>AED 48,000 / mon</h4>
                        <p>4500 km</p>
                      </Grid>
                    </Grid>
                    <div className="car_interior">
                      <div className="car_subint">SUV</div>
                      <div className="car_subint">4 Doors</div>
                      <div className="car_subint">5 Seater</div>
                      <div className="car_subint">3 bags</div>
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
                    image="Volkswagen_Touareg_2023_19575_19575_1242664982-1_small.webp"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Volkswagen Touareg 2023
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <h4>AED 700 / day</h4>
                        <p>250 km</p>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <h4>AED 14,000 / mon</h4>
                        <p>4500 km</p>
                      </Grid>
                    </Grid>
                    <div className="car_interior">
                      <div className="car_subint">SUV</div>
                      <div className="car_subint">4 Doors</div>
                      <div className="car_subint">5 Seater</div>
                      <div className="car_subint">5 bags</div>
                    </div>
                    <div className="car_info_sec6">
                      <div className="int_icon">
                        <CheckIcon sx={{ color: "green", marginRight: "5px" }} />{" "}
                        <p> Minimum 2 days rental</p>
                      </div>
                      <div className="int_icon">
                        <InfoIcon sx={{ color: "orange", marginRight: "5px" }} />{" "}
                        <p> Deposit: AED 1500</p>
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
                    image="Audi-RS-Q8--2022_11256_10342191120-7_11256__small.webp"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Audi RS Q8 2022
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <h4>AED 1200 / day</h4>
                        <p>250 km</p>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <h4>AED 34,000 / mon</h4>
                        <p>4500 km</p>
                      </Grid>
                    </Grid>
                    <div className="car_interior">
                      <div className="car_subint">SUV</div>
                      <div className="car_subint">4 Doors</div>
                      <div className="car_subint">5 Seater</div>
                      <div className="car_subint">3 bags</div>
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
          </Grid>
        </Container>
      </div>
    );
  };
  
  export default SuvCars;
  