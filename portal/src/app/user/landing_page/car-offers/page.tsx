import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import InfoIcon from "@mui/icons-material/Info";
// import "../car-offers/caroffers.css"
import "../car-offers/caroffers.css";
import axios from "axios";
import BookNow from "./BookNow";
import { useRouter } from "next/navigation";

const CarOffers = () => {
  const [cars, setcars] = useState([]);
  const router = useRouter();
  useEffect(() => {
    axios
      .get("http://localhost:4000/user/getAllCars")
      .then((res) => {
        setcars(res.data.data);
      })
      .catch((err) => {
        console.log(err, "errorrrrr");
      });
  }, []);
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
          {cars.map((car) => (
            <Grid item xs={12} md={3} sm={3} lg={3} key={car._id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  onClick={() => {
                    localStorage.setItem(car._id, JSON.stringify(car));
                    router.push(
                      `/user/landing_page/get_car_details?verify=${car._id}`
                    );
                  }}
                >
                  <CardMedia
                    component="img"
                    height="100%"
                    image={car.image} // Assuming the image URL is provided in the API response
                    alt={car.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {car.name} {car.model} ({car.year})
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <h4>AED {car.discountedPriceDaily} / day</h4>
                        <p>{car.actualPriceDaily} km</p>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <h4>AED {car.discountedPriceMonthly} / month</h4>
                        <p>{car.actualPriceMonthly} km</p>
                      </Grid>
                    </Grid>
                    <div className="car_interior">
                      <div className="car_subint">{car.category}</div>
                      <div className="car_subint">{car.seater}</div>
                      <div className="car_subint">
                        {car.laggageBootCapacity}
                      </div>
                      <div className="car_subint">{car.location}</div>
                    </div>
                    <div className="car_info_sec6">
                      <div className="int_icon">
                        <CheckIcon
                          sx={{ color: "green", marginRight: "5px" }}
                        />{" "}
                        <p> Minimum 2 days rental</p>
                      </div>
                      <div className="int_icon">
                        <InfoIcon
                          sx={{ color: "orange", marginRight: "5px" }}
                        />{" "}
                        <p> Deposit: AED {car.securityDeposit}</p>
                      </div>
                      <div className="int_icon">
                        <CheckIcon
                          sx={{ color: "green", marginRight: "5px" }}
                        />{" "}
                        <p> Insurance Included</p>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
                <div className="book_btn" style={{ textAlign: "center" }}>
                  <Button>
                    <BookNow />
                  </Button>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={3} sm={3} lg={3}>
            
          </Grid>
        </Grid> */}
      </Container>
    </div>
  );
};

export default CarOffers;
