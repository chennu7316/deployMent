"use client";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import "../AdminCars.css";

const AddCarForm = () => {
    const handleSubmit = ()=> {

    }
  return (
    <div className="addcar_form">
      <Box>
        <form onSubmit={handleSubmit}>
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
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Brand</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Brand"
                    >
                      <MenuItem value={10}>Hyundai</MenuItem>
                      <MenuItem value={20}>Kia</MenuItem>
                      <MenuItem value={30}>Mazda</MenuItem>
                      <MenuItem value={30}>Mitsubushi</MenuItem>
                      <MenuItem value={30}>Nissan</MenuItem>
                      <MenuItem value={30}>Toyota</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Model</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Model"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Category"
                    >
                      <MenuItem value={10}>Crossover</MenuItem>
                      <MenuItem value={20}>Hatchback</MenuItem>
                      <MenuItem value={30}>Luxury Cars</MenuItem>
                      <MenuItem value={30}>Luxury Suv</MenuItem>
                      <MenuItem value={30}>Sedan</MenuItem>
                      <MenuItem value={30}>Small Sedan</MenuItem>
                      <MenuItem value={30}>SUV</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Year</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Year"
                    >
                      <MenuItem value={10}>2013</MenuItem>
                      <MenuItem value={20}>2014</MenuItem>
                      <MenuItem value={30}>2015</MenuItem>
                      <MenuItem value={30}>2016</MenuItem>
                      <MenuItem value={30}>2017</MenuItem>
                      <MenuItem value={30}>2018</MenuItem>
                      <MenuItem value={30}>2019</MenuItem>
                      <MenuItem value={30}>2020</MenuItem>
                      <MenuItem value={30}>2021</MenuItem>
                      <MenuItem value={30}>2022</MenuItem>
                      <MenuItem value={30}>2023</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <Button variant="outlined" component="label">
                      Upload Car Image
                      <input type="file" hidden />
                    </Button>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <Grid container spacing={1} sx={{ textAlign: "center" }}>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Abu Dhabi"
                        />
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Dubai"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Vehicle Type
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Vehicle Type"
                    >
                      <MenuItem value={10}>Economy</MenuItem>
                      <MenuItem value={20}>Luxury</MenuItem>
                      <MenuItem value={30}>SUV</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Featured Car ?
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Featured Car ?"
                    >
                      <MenuItem value={10}>Yes</MenuItem>
                      <MenuItem value={20}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Status"
                    >
                      <MenuItem value={10}>Active</MenuItem>
                      <MenuItem value={20}>Inactive</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </div>

            <div className="car_services">
              <h4>Services</h4>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="24/7 Roadside Assistance"
                  />
                </Grid>
                <Grid item xs={12} sm={5} md={5} lg={5}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Drop Off Anywhere In Dubai And Abu Dhabi"
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <FormControlLabel
                    control={<Checkbox />}
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
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Manual" />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Automatic"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <h5>Cruise Control</h5>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Yes" />
                    <FormControlLabel control={<Checkbox />} label="No" />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <h5>Engine Capacity</h5>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                    >
                      <MenuItem value={10}>1.2</MenuItem>
                      <MenuItem value={20}>1.3</MenuItem>
                      <MenuItem value={30}>1.5</MenuItem>
                      <MenuItem value={30}>1.6</MenuItem>
                      <MenuItem value={30}>1.8</MenuItem>
                      <MenuItem value={30}>2.0</MenuItem>
                      <MenuItem value={30}>2.4</MenuItem>
                      <MenuItem value={30}>2.5</MenuItem>
                      <MenuItem value={30}>2.7</MenuItem>
                      <MenuItem value={30}>5.7</MenuItem>
                    </Select>
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
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControlLabel control={<Checkbox />} label="Cash" />
                  <FormControlLabel
                    control={<Checkbox />}
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
                    control={<Checkbox />}
                    label="Automatic Mirrors"
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel control={<Checkbox />} label="USB" />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Reverse Camera"
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={<Checkbox />}
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
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Unlimited Mileage"
                    >
                      <MenuItem value={10}>Yes</MenuItem>
                      <MenuItem value={20}>No</MenuItem>
                    </Select>
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
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Free Cancellation
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Free Cancellation"
                    >
                      <MenuItem value={10}>Yes</MenuItem>
                      <MenuItem value={20}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Free Delivery (30 Days and Above)
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Free Delivery (30 Days and Above)"
                    >
                      <MenuItem value={10}>Yes</MenuItem>
                      <MenuItem value={20}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      24x7 Customer Support
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="24x7 Customer Support"
                    >
                      <MenuItem value={10}>Yes</MenuItem>
                      <MenuItem value={20}>No</MenuItem>
                    </Select>
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
                    control={<Checkbox />}
                    label="Credit Card"
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel control={<Checkbox />} label="Debit Card" />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel control={<Checkbox />} label="UPI" />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel control={<Checkbox />} label="Cash" />
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
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Bluetooth
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Bluetooth"
                    >
                      <MenuItem value={10}>Yes</MenuItem>
                      <MenuItem value={20}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Aux</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Aux"
                    >
                      <MenuItem value={10}>Yes</MenuItem>
                      <MenuItem value={20}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Seater</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Seater"
                    >
                      <MenuItem value={10}>5 Seater</MenuItem>
                      <MenuItem value={20}>7 Seater</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Navigation
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Navigation"
                    >
                      <MenuItem value={10}>Yes</MenuItem>
                      <MenuItem value={20}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Parking Sense
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Parking Sense"
                    >
                      <MenuItem value={10}>Yes</MenuItem>
                      <MenuItem value={20}>No</MenuItem>
                    </Select>
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
                      control={<Checkbox />}
                      label="Copy Of Emirates Id"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Copy Of Passport"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Copy Of Residential Visa"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Copy Of Visit Visa"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Uae Driving License"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Us, Canada, Eu, Gcc Or International Driving License"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <h5>Requirements (For Tourists)</h5>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Copy Of Emirates Id"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Copy Of Passport"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Copy Of Residential Visa"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Copy Of Visit Visa"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Uae Driving License"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Us, Canada, Eu, Gcc Or International Driving License"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </div>
            <div className="carformbtn">
              <Button variant="contained" className="submitbtn" color="primary">
                Submit
              </Button>
              <Button type="submit" variant="contained" color="error">
                Cancel
              </Button>
            </div>
          </Container>
        </form>
      </Box>
    </div>
  );
};

export default AddCarForm;
