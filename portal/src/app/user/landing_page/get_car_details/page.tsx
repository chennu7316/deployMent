"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { CardMedia, Container, Grid, Typography } from "@mui/material";
import "../get_car_details/get_car.css";
import EnquiryForm from "../enquiry-form/EnquiryForm";
import axios from "axios";
import { useSearchParams } from "next/navigation";

interface getCarData {
  _id: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  year: string;
  image: string;
  location: string;
  vehicleType: string;
  featuredCar: string;
  status: string;
  services: string[];
  description: string;
  actualPriceDaily: string;
  discountedPriceDaily: string;
  actualPriceWeekly: string;
  discountedPriceWeekly: string;
  actualPriceMonthly: string;
  discountedPriceMonthly: string;
  transmission: string;
  cruiseControl: string;
  engineCapacity: string;
  laggageBootCapacity: string;
  securityDeposit: string;
  cashType: string[];
  carFeatures: string[];
  unlimitedMileage: string;
  paiInsuranceDaily: string;
  paiInsuranceMonthly: string;
  freeCancellation: string;
  freeDelivery30DaysandAbove: string;
  customerSupport: string;
  scdwPerMonth: string;
  paymentType: string[];
  engineSize: string;
  bluetooth: string;
  aux: string;
  seater: string;
  navigation: string;
  parkingSense: string;
  requirementsForUAEResidents: string[];
  requirementsForTourists: string[];
}

const GetCarDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("verify");

  const [data, setData] = useState<getCarData>({
    _id: "",
    name: "",
    brand: "",
    model: "",
    category: "",
    year: "",
    image: "",
    location: "",
    vehicleType: "",
    featuredCar: "",
    status: "",
    services: [],
    description: "",
    actualPriceDaily: "",
    discountedPriceDaily: "",
    actualPriceWeekly: "",
    discountedPriceWeekly: "",
    actualPriceMonthly: "",
    discountedPriceMonthly: "",
    transmission: "",
    cruiseControl: "",
    engineCapacity: "",
    laggageBootCapacity: "",
    securityDeposit: "",
    cashType: [],
    carFeatures: [],
    unlimitedMileage: "",
    paiInsuranceDaily: "",
    paiInsuranceMonthly: "",
    freeCancellation: "",
    freeDelivery30DaysandAbove: "",
    customerSupport: "",
    scdwPerMonth: "",
    paymentType: [],
    engineSize: "",
    bluetooth: "",
    aux: "",
    seater: "",
    navigation: "",
    parkingSense: "",
    requirementsForUAEResidents: [],
    requirementsForTourists: [],
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:4000/user/getCar/${id}`)
        .then((res) => {
          debugger;
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <div className="car_name">
          <h1>{data?.name}</h1>
        </div>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <div className="car_left_side">
              <div className="car_image">
                <CardMedia
                  component="img"
                  height="100%"
                  image={data?.image}
                  alt="green iguana"
                />
              </div>
              <Typography
                gutterBottom
                className="car_description"
                component="div"
              >
                {data?.description}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                className="_get_car_feat_head"
                component="div"
              >
                Car Features
              </Typography>
              <div className="get_car_feat">
                <div className="feat_left">
                  <h6>Year</h6>
                </div>
                <div className="feat_right">
                  <h6>{data?.year}</h6>
                </div>
              </div>
              <div className="get_car_feat">
                <div className="feat_left">
                  <h6>Transmission</h6>
                </div>
                <div className="feat_right">
                  <h6>{data?.transmission}</h6>
                </div>
              </div>
              <div className="get_car_feat">
                <div className="feat_left">
                  <h6>Engine Size</h6>
                </div>
                <div className="feat_right">
                  <h6>{data?.engineSize}</h6>
                </div>
              </div>
              <div className="get_car_feat">
                <div className="feat_left">
                  <h6>Bluetooth</h6>
                </div>
                <div className="feat_right">
                  <h6>{data?.bluetooth}</h6>
                </div>
              </div>
              <div className="get_car_feat">
                <div className="feat_left">
                  <h6>Cruise Control</h6>
                </div>
                <div className="feat_right">
                  <h6>{data?.cruiseControl}</h6>
                </div>
              </div>
              <div className="get_car_feat">
                <div className="feat_left">
                  <h6>AUX</h6>
                </div>
                <div className="feat_right">
                  <h6>{data?.aux}</h6>
                </div>
              </div>
              <div className="get_car_feat">
                <div className="feat_left">
                  <h6>USB</h6>
                </div>
                <div className="feat_right">
                  <h6>YES</h6>
                </div>
              </div>
              <div className="get_car_feat">
                <div className="feat_left">
                  <h6>Automatic Mirrors</h6>
                </div>
                <div className="feat_right">
                  <h6>NO</h6>
                </div>
              </div>
              <div className="get_car_feat">
                <div className="feat_left">
                  <h6>Alloy Wheels</h6>
                </div>
                <div className="feat_right">
                  <h6>NO</h6>
                </div>
              </div>
              <div className="get_car_feat">
                <div className="feat_left">
                  <h6>Seater</h6>
                </div>
                <div className="feat_right">
                  <h6>{data?.seater}</h6>
                </div>
              </div>
              <div className="get_car_feat">
                <div className="feat_left">
                  <h6>Luggage</h6>
                </div>
                <div className="feat_right">
                  <h6>{data?.laggageBootCapacity}</h6>
                </div>
              </div>
              <div className="get_car_feat">
                <div className="feat_left">
                  <h6>Navigation</h6>
                </div>
                <div className="feat_right">
                  <h6>{data?.navigation}</h6>
                </div>
              </div>
              <div className="get_car_feat">
                <div className="feat_left">
                  <h6>Reverse Camera</h6>
                </div>
                <div className="feat_right">
                  <h6>YES</h6>
                </div>
              </div>
              <div className="get_car_feat">
                <div className="feat_left">
                  <h6>Parking Sensors</h6>
                </div>
                <div className="feat_right">
                  <h6>{data?.parkingSense}</h6>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <div className="car_right_side">
              <div className="rental_cost">
                <div className="rent_cost_head">
                  <h6>Rental Cost</h6>
                </div>
                <div className="daily_weekly_monthly">
                  <div className="rent_daily">
                    <h4>{data?.actualPriceDaily} AED</h4>
                    <p>Daily</p>
                  </div>
                  <div className="rent_weekly">
                    <h4>{data?.actualPriceWeekly} AED</h4>
                    <p>Weekly</p>
                  </div>
                  <div className="rent_monthly">
                    <h4>{data?.actualPriceMonthly} AED</h4>
                    <p>Monthly</p>
                  </div>
                </div>
                <div className="rental_cost_btn">
                  <EnquiryForm />
                </div>
              </div>
              <div className="car_amount">
                <div className="amount_left">
                  <h6>Security Amount</h6>
                </div>
                <div className="amount_right">
                  <h6>{data?.securityDeposit}</h6>
                </div>
              </div>
              <div className="car_amount">
                <div className="amount_left">
                  <h6>Security Type</h6>
                </div>
                <div className="amount_right">
                  <h6>{data?.cashType}</h6>
                </div>
              </div>
              <div className="car_amount">
                <div className="amount_left">
                  <h6>Payment Type</h6>
                </div>
                <div className="amount_right">
                  <h6>{data?.paymentType}</h6>
                </div>
              </div>
              <div className="car_amount">
                <div className="amount_left">
                  <h6>24x7 Customer Support</h6>
                </div>
                <div className="amount_right">
                  <h6>{data?.customerSupport}</h6>
                </div>
              </div>
              <div className="car_amount">
                <div className="amount_left">
                  <h6>Free Delivery (30 Days and Above)</h6>
                </div>
                <div className="amount_right">
                  <h6>{data?.freeDelivery30DaysandAbove}</h6>
                </div>
              </div>
              <div className="car_amount">
                <div className="amount_left">
                  <h6>Free Cancellation</h6>
                </div>
                <div className="amount_right">
                  <h6>{data?.freeCancellation}</h6>
                </div>
              </div>
              <div className="car_amount">
                <div className="amount_left">
                  <h6>PAI Insurance Daily</h6>
                </div>
                <div className="amount_right">
                  <h6>{data?.paiInsuranceDaily} AED</h6>
                </div>
              </div>
              <div className="car_amount">
                <div className="amount_left">
                  <h6>PAI Insurance Monthly</h6>
                </div>
                <div className="amount_right">
                  <h6>{data?.paiInsuranceMonthly} AED</h6>
                </div>
              </div>
              <div className="car_amount">
                <div className="amount_left">
                  <h6>Unlimited Mileage</h6>
                </div>
                <div className="amount_right">
                  <h6>{data?.unlimitedMileage}</h6>
                </div>
              </div>
              <div className="car_amount">
                <div className="amount_left">
                  <h6>Mileage (Daily)</h6>
                </div>
                <div className="amount_right">
                  <h6>200</h6>
                </div>
              </div>
              <div className="car_amount">
                <div className="amount_left">
                  <h6>Mileage (Weekly)</h6>
                </div>
                <div className="amount_right">
                  <h6>1000</h6>
                </div>
              </div>
              <div className="car_amount">
                <div className="amount_left">
                  <h6>Mileage (Monthly)</h6>
                </div>
                <div className="amount_right">
                  <h6>3000</h6>
                </div>
              </div>
              <div className="car_amount">
                <div className="amount_left">
                  <h6>SCDW</h6>
                </div>
                <div className="amount_right">
                  <h6>{data?.scdwPerMonth}</h6>
                </div>
              </div>
              <div className="req_docs_uae">
                <div className="req_uae_head">
                  <h6>Requirements for UAE Residents</h6>
                </div>
                <div className="req_uae_list">
                  <h6>{data?.requirementsForUAEResidents[1]}</h6>
                </div>
                <div className="req_uae_list">
                  <h6>{data?.requirementsForUAEResidents[2]}</h6>
                </div>
                <div className="req_uae_list">
                  <h6>{data?.requirementsForUAEResidents[3]}</h6>
                </div>
                <div className="req_uae_list">
                  <h6>{data?.requirementsForUAEResidents[4]}</h6>
                </div>
              </div>
              <div className="req_docs_uae">
                <div className="req_uae_head">
                  <h6>Requirements for Tourists</h6>
                </div>
                <div className="req_uae_list">
                  <h6>{data?.requirementsForTourists[1]}</h6>
                </div>
                <div className="req_uae_list">
                  <h6>{data?.requirementsForTourists[2]}</h6>
                </div>
                <div className="req_uae_list">
                  <h6>{data?.requirementsForTourists[3]}</h6>
                </div>
                <div className="req_uae_list">
                  <h6>{data?.requirementsForTourists[4]}</h6>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default GetCarDetails;
