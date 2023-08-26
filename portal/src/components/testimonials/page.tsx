import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "../testimonials/testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <Container maxWidth="lg">
        <div className="testimonials_head">
          <h1>Testimonials</h1>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="/img1.jpeg"
              />
              <CardContent>
                <Typography
                  sx={{ textAlign: "center" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Lissa
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="/img2.jpeg"
              />
              <CardContent>
                <Typography
                  sx={{ textAlign: "center" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Ahmed
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="/img4.jpeg"
              />
              <CardContent>
                <Typography
                  sx={{ textAlign: "center" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Sakshi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="/img3.jpeg"
              />
              <CardContent>
                <Typography
                  sx={{ textAlign: "center" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Vikas
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Testimonials;
