"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Container } from "@material-ui/core";
import "../car-cards/carCard.css";
import { Grid } from "@mui/material";
// import './globals.css'


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  

  return (
    <div className="card_section">
      <Container maxWidth="lg">
        <div className="card_heading">
          <h1>Find car rental services near you</h1>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2.4} sm={2.4}>
            <Card className="car_card" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="/luxury2.webp"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  LUXURY
                </Typography>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  621 Cars
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2.4} sm={2.4}>
            <Card className="car_card" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="/sports2.webp"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  SPORTS
                </Typography>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  621 Cars
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2.4} sm={2.4}>
            <Card className="car_card" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="/car-with-drives2.webp"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  CAR WITH DRIVER
                </Typography>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  621 Cars
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2.4} sm={2.4}>
            <Card className="car_card" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="suv2.webp"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  SUV
                </Typography>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  621 Cars
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2.4} sm={2.4}>
            <Card className="car_card" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="/monthy2.webp"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  MONTHLY
                </Typography>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  621 Cars
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2.4} sm={2.4}>
            <Card className="car_card" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="low-price2.webp"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  LOW PRICE
                </Typography>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  621 Cars
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2.4} sm={2.4}>
            <Card className="car_card" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="electric2.webp"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  ELECTRIC
                </Typography>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  621 Cars
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2.4} sm={2.4}>
            <Card className="car_card" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="Convertible2.webp"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  CONVERTIBLE
                </Typography>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  621 Cars
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2.4} sm={2.4}>
            <Card className="car_card" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="/commercial-vehicle2.webp"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  COMMERCIAL
                </Typography>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  621 Cars
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2.4} sm={2.4}>
            <Card className="car_card" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="Muscle2.webp"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  MUSCLE
                </Typography>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  621 Cars
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2.4} sm={2.4}>
            <Card className="car_card" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="cross-over2.webp"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  CROSS OVER
                </Typography>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  621 Cars
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2.4} sm={2.4}>
            <Card className="car_card" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="sedan-car2.webp"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  SEDAN
                </Typography>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  621 Cars
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2.4} sm={2.4}>
            <Card className="car_card" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="special-edition2.webp"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  SPECAIL EDITION
                </Typography>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  621 Cars
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2.4} sm={2.4}>
            <Card className="car_card" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="coupe2.webp"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  COUPE
                </Typography>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  621 Cars
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <div className="car_des_con" >
            <p>Tired of searching for a <b>‘rent a car near me’</b>? You have reached just the right place. INJAZ.COM is a leading <b>car rental</b> marketplace in <b>Dubai</b> featuring budget-friendly car hire deals from reliable rental car companies in the region. You can choose from our extensive inventory of over 2000 vehicles listed by trusted car rental businesses in the UAE. Whether you’re a tourist looking for a car facility or a resident in search of long term rentals, we assure you the cheapest rent cars at the best prices starting as low as <b>AED 30 per day.</b></p>
        </div>
      </Container>
    </div>
  );
}
