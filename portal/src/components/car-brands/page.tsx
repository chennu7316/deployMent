import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "../car-brands/CarBrands.css";

const CarBrands = () => {
  return (
    <div className="car_brands">
      <Container>
        <div className="car_brands_heading">
          <h1>Rent A Car From Top Brands</h1>
        </div>
        <div className="car_brand_text">
          <p>
            Get on a road-trip now with the best deals for high-end cars
            manufactured by top automobile companies in the world.
          </p>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={2.4} sm={2.4}>
            <Card className="car_card" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="/mercedes-benz.svg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  MERCEDES BENZ
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
                image="/nissan.svg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  NISSAN
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
                image="/land-rover.svg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  LAND ROVER
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
                image="/kia.svg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  KIA
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
                image="/bmw.svg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  BMW
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
                image="/lamborghini.svg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  LAMBORGHINI
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
                image="/toyota.svg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  TOYOTA
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
                image="/porsche.svg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  PORSCHE
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
                image="/rolls-royce.svg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  ROLLS ROYCE
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
                image="/ferrari.svg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  FERRARI
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
                image="/volkswagen.svg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  VOLKSWAGEN
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
                image="/jeep.svg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  JEEP
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
                image="/tesla-01_new.svg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  className="car_cat_text"
                  variant="body2"
                  color="text.secondary"
                >
                  TESLA
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
      </Container>
    </div>
  );
};

export default CarBrands;
