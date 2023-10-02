'use client';
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
// import "../../app/user/landing_page/car-offers/caroffers.css";
import "../car-offers/caroffers.css";
import CheckIcon from "@mui/icons-material/Check";
import InfoIcon from "@mui/icons-material/Info";
import axios from "axios";
import BookNow from "../car-offers/BookNow";
import { useRouter } from "next/navigation";

const SuvCars = () => {
  const [Rows, setrows] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:4000/user/getAllCars")
      .then((res) => {
        console.log(res.data.data, "dataaaaaaaaaaaaaaaaaaaaa");
        const newData = res?.data?.data?.filter(
          (item: any) => item.vehicleType === "SUV"
        );
        setrows(newData);
        console.log(Rows, "rowssssssssssssssssssssss");
      })
      .catch((err) => {
        console.log("ddddddddddddd");
      });
  }, []);

  return (
    <div className="car_offers">
      <Container maxWidth="lg">
        <div className="car_off_head">
          <h1>SUVs for rent in Dubai</h1>
        </div>
        <div className="car_off_text">
          <p>
            From spacious 7-seaters to the latest 5-seater sports utility
            vehicles, we feature a broad range of trendy SUV car rental deals in
            the UAE.
          </p>
        </div>
        <Grid container spacing={3}>
          {Rows.map((item: any, index) => {
            if (index < 4) {
              return (
                <>
                  <Grid item xs={12} md={3} sm={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea
                      onClick={() => {
                        localStorage.setItem(item._id, JSON.stringify(item));
                        router.push(
                          `/user/landing_page/get_car_details?verify=${item._id}`
                        );
                      }}
                      >
                        <CardMedia
                          component="img"
                          height="100%"
                          image={item.image}
                          alt={item.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            {item.name} ({item.year})
                          </Typography>
                          <Grid container spacing={3}>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                              <h4>AED {item.actualPriceDaily}/D</h4>
                              <p>{item.actualPriceDaily} km</p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                              <h4>AED {item.actualPriceMonthly}/M</h4>
                              <p>{item.actualPriceMonthly} km</p>
                            </Grid>
                          </Grid>
                          <div className="car_interior">
                          <div className="car_subint">{item.category}</div>
                            <div className="car_subint">{item.seater}</div>
                            <div className="car_subint">{item.laggageBootCapacity}</div>
                            <div className="car_subint">{item.transmission}</div>
                            {/* <div className="car_subint">2 Doors</div>
                            <div className="car_subint">2 Seater</div>
                            <div className="car_subint">2 bags</div>  */}
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
                              <p> Deposit: AED {item.securityDeposit}</p>
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
                </>
              );
            }
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default SuvCars;
