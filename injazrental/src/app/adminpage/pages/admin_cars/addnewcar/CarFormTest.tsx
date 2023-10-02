"use client";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import "../AdminCars.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface carFormData {
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
  services: [string];
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
  cashType: [string];
  carFeatures: [string];
  unlimitedMileage: string;
  paiInsuranceDaily: string;
  paiInsuranceMonthly: string;
  freeCancellation: string;
  freeDelivery30DaysandAbove: string;
  customerSupport: string;
  scdwPerMonth: string;
  paymentType: string;
  engineSize: string;
  bluetooth: string;
  aux: string;
  seater: string;
  navigation: string;
  parkingSense: string;
  requirementsForUAEResidents: [string];
  requirementsForTourists: [string];
}

const CarFormTest = () => {
  const router = useRouter();



  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<carFormData>();

  const onSubmit = (data: carFormData) => {
    console.log(data);
  };

  const [data, setdata] = useState({
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
    services: [""],
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
    cashType: [""],
    carFeatures: [""],
    unlimitedMileage: "",
    paiInsuranceDaily: "",
    paiInsuranceMonthly: "",
    freeCancellation: "",
    freeDelivery30DaysandAbove: "",
    customerSupport: "",
    scdwPerMonth: "",
    paymentType: [""],
    engineSize: "",
    bluetooth: "",
    aux: "",
    seater: "",
    navigation: "",
    parkingSense: "",
    requirementsForUAEResidents: [""],
    requirementsForTourists: [""],
  });

  const handle = (e: any) => {
    console.log("welcomeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    const newData: any = { ...data };
    newData[e.target.name] = e.target.value;
    console.log(
      (newData[e.target.name] = e.target.value),
      "newData[e.target.name]=e.target.value"
    );
    setdata(newData);
    console.log(newData, "newDAatattttttttttttttt");
  };

  const Submit = (e: any) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:4000/user/createNewCar", {
        name: data.name,
        brand: data.brand,
        model: data.model,
        category: data.category,
        year: data.year,
        image: data.image,
        location: data.location,
        vehicleType: data.vehicleType,
        featuredCar: data.featuredCar,
        status: data.status,
        services: data.services,
        description: data.description,
        actualPriceDaily: data.actualPriceDaily,
        discountedPriceDaily: data.discountedPriceDaily,
        actualPriceWeekly: data.actualPriceWeekly,
        discountedPriceWeekly: data.discountedPriceWeekly,
        actualPriceMonthly: data.actualPriceMonthly,
        discountedPriceMonthly: data.discountedPriceMonthly,
        transmission: data.transmission,
        cruiseControl: data.cruiseControl,
        engineCapacity: data.engineCapacity,
        laggageBootCapacity: data.laggageBootCapacity,
        securityDeposit: data.securityDeposit,
        cashType: data.cashType,
        carFeatures: data.carFeatures,
        unlimitedMileage: data.unlimitedMileage,
        paiInsuranceDaily: data.paiInsuranceDaily,
        paiInsuranceMonthly: data.paiInsuranceMonthly,
        freeCancellation: data.freeCancellation,
        freeDelivery30DaysandAbove: data.freeDelivery30DaysandAbove,
        customerSupport: data.customerSupport,
        scdwPerMonth: data.scdwPerMonth,
        paymentType: data.paymentType,
        engineSize: data.engineSize,
        bluetooth: data.bluetooth,
        aux: data.aux,
        seater: data.seater,
        navigation: data.navigation,
        parkingSense: data.parkingSense,
        requirementsForUAEResidents: data.requirementsForUAEResidents,
        requirementsForTourists: data.requirementsForTourists,
      })
      .then((res) => {
        console.log(res.data);
        setdata({
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
          requirementsForUAEResidents: [""],
          requirementsForTourists: [""],
        });
      });
    // console.log(res.data);
    router.push("/adminpage/pages/admin_cars");
  };

  const checkboxValue = (value: any) => {
    const result = data.services.filter((item) => item === value);
    return result ? true : false;
  };

  const checkboxValue2 = (value: any) => {
    const result2 = data.cashType.filter((item) => item === value);
    return result2 ? true : false;
  };

  const checkboxValue3 = (value: any) => {
    const result3 = data.carFeatures.filter((item) => item === value);
    return result3 ? true : false;
  };

  const checkboxValue4 = (value: any) => {
    const result4 = data.paymentType.filter((item) => item === value);
    return result4 ? true : false;
  };

  const checkboxValue5 = (value: any) => {
    const result5 = data.requirementsForUAEResidents.filter(
      (item) => item === value
    );
    return result5 ? true : false;
  };

  const checkboxValue6 = (value: any) => {
    const result6 = data.requirementsForTourists.filter(
      (item) => item === value
    );
    return result6 ? true : false;
  };

  const handleJ = (e: any) => {
    const data1 = data;
    const name = e.target.name;
    const value = e.target.checked;
    if (value) {
      const services = data.services;
      services.push(name);
      setdata({ ...data1, services: services });
    } else {
      const services = data.services;
      services.filter((item) => item !== name);
      setdata({ ...data1, services: services });
    }
  };

  const handleK = (e: any) => {
    const data2 = data;
    const name = e.target.name;
    const value = e.target.checked;
    if (value) {
      const cashType = data.cashType;
      cashType.push(name);
      setdata({ ...data2, cashType: cashType });
    } else {
      const cashType = data.cashType;
      cashType.filter((item) => item !== name);
      setdata({ ...data2, cashType: cashType });
    }
  };
  const handleL = (e: any) => {
    const data3 = data;
    const name = e.target.name;
    const value = e.target.checked;
    if (value) {
      const carFeatures = data.carFeatures;
      carFeatures.push(name);
      setdata({ ...data3, carFeatures: carFeatures });
    } else {
      const carFeatures = data.carFeatures;
      carFeatures.filter((item) => item !== name);
      setdata({ ...data3, carFeatures: carFeatures });
    }
  };
  const handleM = (e: any) => {
    const data4 = data;
    const name = e.target.name;
    const value = e.target.checked;
    if (value) {
      const paymentType = data.paymentType;
      paymentType.push(name);
      setdata({ ...data4, paymentType: paymentType });
    } else {
      const paymentType = data.paymentType;
      paymentType.filter((item) => item !== name);
      setdata({ ...data4, paymentType: paymentType });
    }
  };

  const handleN = (e: any) => {
    const data5 = data;
    const name = e.target.name;
    const value = e.target.checked;
    if (value) {
      const requirementsForUAEResidents = data.requirementsForUAEResidents;
      requirementsForUAEResidents.push(name);
      setdata({
        ...data5,
        requirementsForUAEResidents: requirementsForUAEResidents,
      });
    } else {
      const requirementsForUAEResidents = data.requirementsForUAEResidents;
      requirementsForUAEResidents.filter((item) => item !== name);
      setdata({
        ...data5,
        requirementsForUAEResidents: requirementsForUAEResidents,
      });
    }
  };

  const handleO = (e: any) => {
    const data6 = data;
    const name = e.target.name;
    const value = e.target.checked;
    if (value) {
      const requirementsForTourists = data.requirementsForTourists;
      requirementsForTourists.push(name);
      setdata({
        ...data6,
        requirementsForTourists: requirementsForTourists,
      });
    } else {
      const requirementsForTourists = data.requirementsForTourists;
      requirementsForTourists.filter((item) => item !== name);
      setdata({
        ...data6,
        requirementsForTourists: requirementsForTourists,
      });
    }
  };

  return (
    <div className="addcar_form">
      <Box>
        <form onSubmit={(e) => Submit(e)}>
          <Container className="formcontbox">
            <div className="pageheading">
              <h1>Add a new car</h1>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("name", { required: true })}
                      error={!!errors.name}
                      helperText={errors.name && "field is required"}
                      name="name"
                      value={data.name}
                      onChange={(e) => handle(e)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Brand</InputLabel>
                    <Controller
                      name="brand"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Slug"
                          {...field}
                          name="brand"
                          value={data.brand}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="Hyundai">Hyundai</MenuItem>
                          <MenuItem value="Kia">Kia</MenuItem>
                          <MenuItem value="Mazda">Mazda</MenuItem>
                          <MenuItem value="Mitsubushi">Mitsubushi</MenuItem>
                          <MenuItem value="Nissan">Nissan</MenuItem>
                          <MenuItem value="Toyota">Toyota</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.brand?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Model</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Model"
                      name="model"
                      value={data.model}
                      onChange={(e) => handle(e)}
                    >
                      <MenuItem value="test1">test1</MenuItem>
                      <MenuItem value="test2">test2</MenuItem>
                      <MenuItem value="test3">test3</MenuItem>
                      <MenuItem value="test4">test4</MenuItem>
                      <MenuItem value="test5">test5</MenuItem>
                      <MenuItem value="test6">test6</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Category
                    </InputLabel>
                    <Controller
                      name="category"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Category"
                          {...field}
                          name="category"
                          value={data.category}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="Crossover">Crossover</MenuItem>
                          <MenuItem value="Hatchback">Hatchback</MenuItem>
                          <MenuItem value="Luxury Cars">Luxury Cars</MenuItem>
                          <MenuItem value="Luxury Suv">Luxury Suv</MenuItem>
                          <MenuItem value="Sedan">Sedan</MenuItem>
                          <MenuItem value="Small Sedan">Small Sedan</MenuItem>
                          <MenuItem value="SUV">SUV</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.brand?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Year</InputLabel>
                    <Controller
                      name="year"
                      control={control}
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Year"
                          {...field}
                          name="year"
                          value={data.year}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="2013">2013</MenuItem>
                          <MenuItem value="2014">2014</MenuItem>
                          <MenuItem value="2015">2015</MenuItem>
                          <MenuItem value="2016">2016</MenuItem>
                          <MenuItem value="2017">2017</MenuItem>
                          <MenuItem value="2018">2018</MenuItem>
                          <MenuItem value="2019">2019</MenuItem>
                          <MenuItem value="2020">2020</MenuItem>
                          <MenuItem value="2021">2021</MenuItem>
                          <MenuItem value="2022">2022</MenuItem>
                          <MenuItem value="2023">2023</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.year?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <Button variant="outlined" component="label">
                      Upload Car Image
                      <input
                        name="image"
                        value={data.image}
                        onChange={(e) => handle(e)}
                        type="file"
                        hidden
                      />
                    </Button>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Location
                    </InputLabel>
                    <Controller
                      name="location"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Location"
                          {...field}
                          name="location"
                          value={data.location}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="Abu Dhabi">Abu Dhabi</MenuItem>
                          <MenuItem value="Dubai">Dubai</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.location?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Vehicle Type
                    </InputLabel>
                    <Controller
                      name="vehicleType"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Vehicle Type"
                          {...field}
                          name="vehicleType"
                          value={data.vehicleType}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="Economy">Economy</MenuItem>
                          <MenuItem value="Luxury">Luxury</MenuItem>
                          <MenuItem value="30">SUV</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.vehicleType?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Featured Car ?
                    </InputLabel>
                    <Controller
                      name="featuredCar"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Featured Car"
                          {...field}
                          name="featuredCar"
                          value={data.featuredCar}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.featuredCar?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                    <Controller
                      name="status"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Status"
                          {...field}
                          name="status"
                          value={data.status}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="Active">Active</MenuItem>
                          <MenuItem value="Inactive">Inactive</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.status?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </div>
            <div className="car_services">
              <h4>Services</h4>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="24/7 Roadside Assistance"
                        onChange={(e) => handleJ(e)}
                        value={checkboxValue("24/7 Roadside Assistance")}
                      />
                    }
                    label="24/7 Roadside Assistance"
                  />
                </Grid>
                <Grid item xs={12} sm={5} md={5} lg={5}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="Drop Off Anywhere In Dubai And Abu Dhabi"
                        onChange={(e) => handleJ(e)}
                        value={checkboxValue(
                          "Drop Off Anywhere In Dubai And Abu Dhabi"
                        )}
                      />
                    }
                    label="Drop Off Anywhere In Dubai And Abu Dhabi"
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="Service & Maintenance Free"
                        onChange={(e) => handleJ(e)}
                        value={checkboxValue("Service & Maintenance Free")}
                      />
                    }
                    label="Service & Maintenance Free"
                  />
                </Grid>
              </Grid>
            </div>
            <div className="car_description">
              <h4>Description</h4>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                sx={{ width: "100%" }}
                {...register("description", { required: true })}
                error={!!errors.description}
                helperText={errors.description && "field is required"}
                name="description"
                value={data.description}
                onChange={(e) => handle(e)}
              />
            </div>
            <div className="car_pricing">
              <h4>Pricing</h4>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Actual Price (Daily)"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      // {...register("pricing", { required: true })}
                      // error={!!errors.pricing}
                      // helperText={errors.pricing && "field is required"}
                      // name="PRICING.PricePerDay"
                      // value={formData.PRICING.PricePerDay}
                      // onChange={(e) => handle(e)}
                      name="actualPriceDaily"
                      value={data.actualPriceDaily}
                      onChange={(e) => handle(e)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Discounted Price (Daily)"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      // {...register("discountedPrice", { required: true })}
                      // error={!!errors.discountedPrice}
                      // helperText={errors.discountedPrice && "field is required"}
                      name="discountedPriceDaily"
                      value={data.discountedPriceDaily}
                      onChange={(e) => handle(e)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Actual Price (Weekly) "
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      // {...register("actualPrice", { required: true })}
                      // error={!!errors.actualPrice}
                      // helperText={errors.actualPrice && "field is required"}
                      name="actualPriceWeekly"
                      value={data.actualPriceWeekly}
                      onChange={(e) => handle(e)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Discounted Price (Weekly)"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("discountedPriceWeekly", { required: true })}
                      error={!!errors.discountedPriceWeekly}
                      helperText={
                        errors.discountedPriceWeekly && "field is required"
                      }
                      name="discountedPriceWeekly"
                      value={data.discountedPriceWeekly}
                      onChange={(e) => handle(e)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Actual Price (Monthly)"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("actualPriceMonthly", { required: true })}
                      error={!!errors.actualPriceMonthly}
                      helperText={
                        errors.actualPriceMonthly && "field is required"
                      }
                      name="actualPriceMonthly"
                      value={data.actualPriceMonthly}
                      onChange={(e) => handle(e)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Discounted Price (Monthly)"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("discountedPriceMonthly", {
                        required: true,
                      })}
                      error={!!errors.discountedPriceMonthly}
                      helperText={
                        errors.discountedPriceMonthly && "field is required"
                      }
                      name="discountedPriceMonthly"
                      value={data.discountedPriceMonthly}
                      onChange={(e) => handle(e)}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </div>
            <div className="car_specification">
              <h4>Car Specification</h4>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <h5>Transmission</h5>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <Controller
                      name="transmission"
                      control={control}
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          {...field}
                          name="transmission"
                          value={data.transmission}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="Manual">Manual</MenuItem>
                          <MenuItem value="Automatic">Automatic</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.transmission?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <h5>Cruise Control</h5>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <Controller
                      name="cruiseControl"
                      control={control}
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          {...field}
                          name="cruiseControl"
                          value={data.cruiseControl}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.cruiseControl?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <h5>Engine Capacity</h5>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <Controller
                      name="engineCapacity"
                      control={control}
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          {...field}
                          name="engineCapacity"
                          value={data.engineCapacity}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="1.2">1.2</MenuItem>
                          <MenuItem value="1.3">1.3</MenuItem>
                          <MenuItem value="1.5">1.5</MenuItem>
                          <MenuItem value="1.6">1.6</MenuItem>
                          <MenuItem value="1.8">1.8</MenuItem>
                          <MenuItem value="2.0">2.0</MenuItem>
                          <MenuItem value="2.4">2.4</MenuItem>
                          <MenuItem value="2.5">2.5</MenuItem>
                          <MenuItem value="2.7">2.7</MenuItem>
                          <MenuItem value="5.7">5.7</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.engineCapacity?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <h5>Laggage (Boot Capacity)</h5>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      // {...register("laggage", {
                      //   required: true,
                      // })}
                      // error={!!errors.laggage}
                      // helperText={errors.laggage && "field is required"}
                      name="laggageBootCapacity"
                      value={data.laggageBootCapacity}
                      onChange={(e) => handle(e)}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </div>
            <div className="rental_terms">
              <h4>Rental Terms</h4>
              <h5>Security Deposit</h5>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      name="securityDeposit"
                      value={data.securityDeposit}
                      onChange={(e) => handle(e)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="Cash"
                        onChange={(e) => handleK(e)}
                        value={checkboxValue2("Cash")}
                      />
                    }
                    label="Cash"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="Credit Card"
                        onChange={(e) => handleK(e)}
                        value={checkboxValue2("Credit Card")}
                      />
                    }
                    label="Credit Card"
                  />
                </Grid>
              </Grid>
            </div>
            <div className="car_features">
              <h4>Car Features</h4>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="Automatic Mirrors"
                        onChange={(e) => handleL(e)}
                        value={checkboxValue3("Automatic Mirrors")}
                      />
                    }
                    label="Automatic Mirrors"
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="USB"
                        onChange={(e) => handleL(e)}
                        value={checkboxValue3("USB")}
                      />
                    }
                    label="USB"
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="Reverse Camera"
                        onChange={(e) => handleL(e)}
                        value={checkboxValue3("Reverse Camera")}
                      />
                    }
                    label="Reverse Camera"
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="Alloy Wheels"
                        onChange={(e) => handleL(e)}
                        value={checkboxValue3("Alloy Wheels")}
                      />
                    }
                    label="Alloy Wheels"
                  />
                </Grid>
              </Grid>
            </div>
            <div className="car_details">
              <h4>Car Details</h4>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Unlimited Mileage
                    </InputLabel>
                    <Controller
                      name="unlimitedMileage"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Unlimited Mileage"
                          {...field}
                          name="unlimitedMileage"
                          value={data.unlimitedMileage}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="20">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.unlimitedMileage?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="PAI Insurance (Daily)"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("paiInsuranceDaily", {
                        required: true,
                      })}
                      error={!!errors.paiInsuranceDaily}
                      helperText={
                        errors.paiInsuranceDaily && "field is required"
                      }
                      name="paiInsuranceDaily"
                      value={data.paiInsuranceDaily}
                      onChange={(e) => handle(e)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="PAI Insurance (Monthly)"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("paiInsuranceMonthly", {
                        required: true,
                      })}
                      error={!!errors.paiInsuranceMonthly}
                      helperText={
                        errors.paiInsuranceMonthly && "field is required"
                      }
                      name="paiInsuranceMonthly"
                      value={data.paiInsuranceMonthly}
                      onChange={(e) => handle(e)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Free Cancellation
                    </InputLabel>
                    <Controller
                      name="freeCancellation"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Free Cancellation"
                          {...field}
                          name="freeCancellation"
                          value={data.freeCancellation}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.freeCancellation?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Free Delivery (30 Days and Above)
                    </InputLabel>
                    <Controller
                      name="freeDelivery30DaysandAbove"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Free Delivery (30 Days and Above)"
                          {...field}
                          name="freeDelivery30DaysandAbove"
                          value={data.freeDelivery30DaysandAbove}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {/* {errors.freeDelivery?.message} */}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      24x7 Customer Support
                    </InputLabel>
                    <Controller
                      name="customerSupport"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="24x7 Customer Support"
                          {...field}
                          name="customerSupport"
                          value={data.customerSupport}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.customerSupport?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="SCDW (per month)"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("scdwPerMonth", {
                        required: true,
                      })}
                      error={!!errors.scdwPerMonth}
                      helperText={errors.scdwPerMonth && "field is required"}
                      name="scdwPerMonth"
                      value={data.scdwPerMonth}
                      onChange={(e) => handle(e)}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </div>
            <div className="payment_type">
              <h4>Payment Type</h4>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="Credit Card"
                        onChange={(e) => handleM(e)}
                        value={checkboxValue4("Credit Card")}
                      />
                    }
                    label="Credit Card"
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="Debit Card"
                        onChange={(e) => handleM(e)}
                        value={checkboxValue4("Debit Card")}
                      />
                    }
                    label="Debit Card"
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="UPI"
                        onChange={(e) => handleM(e)}
                        value={checkboxValue4("UPI")}
                      />
                    }
                    label="UPI"
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="Cash"
                        onChange={(e) => handleM(e)}
                        value={checkboxValue4("Cash")}
                      />
                    }
                    label="Cash"
                  />
                </Grid>
              </Grid>
            </div>
            <div className="other_features">
              <h4>Other Features</h4>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Engine Size"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("engineSize", {
                        required: true,
                      })}
                      error={!!errors.engineSize}
                      helperText={errors.engineSize && "field is required"}
                      name="engineSize"
                      value={data.engineSize}
                      onChange={(e) => handle(e)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Bluetooth
                    </InputLabel>
                    <Controller
                      name="bluetooth"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Bluetooth"
                          {...field}
                          name="bluetooth"
                          value={data.bluetooth}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.bluetooth?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Aux</InputLabel>
                    <Controller
                      name="aux"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Aux"
                          {...field}
                          name="aux"
                          value={data.aux}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>{errors.aux?.message}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Seater</InputLabel>
                    <Controller
                      name="seater"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Seater"
                          {...field}
                          name="seater"
                          value={data.seater}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="5 Seater">5 Seater</MenuItem>
                          <MenuItem value="7 Seater">7 Seater</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.seater?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Navigation
                    </InputLabel>
                    <Controller
                      name="navigation"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Navigation"
                          {...field}
                          name="navigation"
                          value={data.navigation}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.navigation?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Parking Sense
                    </InputLabel>
                    <Controller
                      name="parkingSense"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Parking Sense"
                          {...field}
                          name="parkingSense"
                          value={data.parkingSense}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.parkingSense?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </div>
            <div className="required_documents">
              <h4>Required Documents</h4>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <h5>Requirements (For UAE Residents)</h5>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="Copy Of Emirates Id"
                          onChange={(e) => handleN(e)}
                          value={checkboxValue5("Copy Of Emirates Id")}
                        />
                      }
                      label="Copy Of Emirates Id"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="Copy Of Passport"
                          onChange={(e) => handleN(e)}
                          value={checkboxValue5("Copy Of Passport")}
                        />
                      }
                      label="Copy Of Passport"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="Copy Of Residential Visa"
                          onChange={(e) => handleN(e)}
                          value={checkboxValue5("Copy Of Residential Visa")}
                        />
                      }
                      label="Copy Of Residential Visa"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="Copy Of Visit Visa"
                          onChange={(e) => handleN(e)}
                          value={checkboxValue5("Copy Of Visit Visa")}
                        />
                      }
                      label="Copy Of Visit Visa"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="Uae Driving License"
                          onChange={(e) => handleN(e)}
                          value={checkboxValue5("Uae Driving License")}
                        />
                      }
                      label="Uae Driving License"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="Us, Canada, Eu, Gcc Or International Driving License"
                          onChange={(e) => handleN(e)}
                          value={checkboxValue5(
                            "Us, Canada, Eu, Gcc Or International Driving License"
                          )}
                        />
                      }
                      label="Us, Canada, Eu, Gcc Or International Driving License"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <h5>Requirements (For Tourists)</h5>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="Copy Of Emirates Id"
                          onChange={(e) => handleO(e)}
                          value={checkboxValue6("Copy Of Emirates Id")}
                        />
                      }
                      label="Copy Of Emirates Id"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="Copy Of Passport"
                          onChange={(e) => handleO(e)}
                          value={checkboxValue6("Copy Of Passport")}
                        />
                      }
                      label="Copy Of Passport"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="Copy Of Residential Visa"
                          onChange={(e) => handleO(e)}
                          value={checkboxValue6("Copy Of Residential Visa")}
                        />
                      }
                      label="Copy Of Residential Visa"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="Copy Of Visit Visa"
                          onChange={(e) => handleO(e)}
                          value={checkboxValue6("Copy Of Visit Visa")}
                        />
                      }
                      label="Copy Of Visit Visa"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="Uae Driving License"
                          onChange={(e) => handleO(e)}
                          value={checkboxValue6("Uae Driving License")}
                        />
                      }
                      label="Uae Driving License"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="Us, Canada, Eu, Gcc Or International Driving License"
                          onChange={(e) => handleO(e)}
                          value={checkboxValue6(
                            "Us, Canada, Eu, Gcc Or International Driving License"
                          )}
                        />
                      }
                      label="Us, Canada, Eu, Gcc Or International Driving License"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </div>
            <div className="carformbtn">
              <Button
                type="submit"
                variant="contained"
                className="submitbtn"
                color="primary"
              >
                Submit
              </Button>
              <Button variant="contained" color="error" onClick={()=>router.push("/adminpage/pages/admin_cars")}>
                Cancel
              </Button>
            </div>
          </Container>
        </form>
      </Box>
    </div>
  );
};

export default CarFormTest;
