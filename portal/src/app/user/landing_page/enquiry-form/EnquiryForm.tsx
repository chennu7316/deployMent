"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MessageIcon from "@mui/icons-material/Message";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../enquiry-form/enquiryForm.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";

interface FormData {
  carName: string;
  phoneNumber: string;
  email: string;
  startDate: string;
  endDate: string;
  area: string;
  name: string;
  message: string;
  city: string;
  pickUpLoc:string;
  dropLocation:string;
}

function EnquiryForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    getValues,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // reset();
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [data, setdata] = React.useState({
    carName: "",
    phoneNumber: "",
    email: "",
    area: "",
    startDate: "",
    endDate: "",
    name: "",
    message: "",
    city: "",
    pickUpLoc:"",
    dropLocation:"",
  });

  const handle = (e: any) => {
    const newData: any = { ...data };
    newData[e.target.name] = e.target.value;
    console.log(newData, "newDatatatatatatatatta");

    setdata(newData);
  };

  const Submit = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/user/createInquiry", {
        carName: data.carName,
        phoneNumber: data.phoneNumber,
        email: data.email,
        area: data.area,
        startDate: data.startDate,
        endDate: data.endDate,
        name: data.name,
        message: data.message,
        city: data.city,
        pickUpLoc:data.pickUpLoc,
        dropLocation:data.dropLocation,
      })
      .then((res) => {
        setdata({
          carName: "",
          phoneNumber: "",
          email: "",
          area: "",
          startDate: "",
          endDate: "",
          name: "",
          message: "",
          city: "",
          pickUpLoc:"",
          dropLocation:"",
        });
      });
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className="enquiry_btn"
      >
        Enquiry
      </Button>
      <Dialog className="dialog_css" open={open} onClose={handleClose}>
        <form onSubmit={(e) => Submit(e)}>
          <DialogTitle>Enquiry</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              placeholder="Name"
              id="name"
              type="text"
              fullWidth
              variant="standard"
              size="small"
              {...register("name", { required: true })}
              error={!!errors.name}
              helperText={errors.name && "name is required"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: "#0c3b69" }} />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => handle(e)}
              value={data.name}
            />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              required
              placeholder="Car Name"
              id="carName"
              type="text"
              fullWidth
              variant="standard"
              size="small"
              {...register("carName", { required: true })}
              error={!!errors.carName}
              helperText={errors.carName && "name is required"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TimeToLeaveIcon sx={{ color: "#0c3b69" }} />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => handle(e)}
              value={data.carName}
            />
          </DialogContent>
          <DialogContent>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                required: "This field is required",
                pattern: {
                  value: /^[0-9]{10}$/, // Validates for exactly 10 digits
                  message: "Enter a valid mobile number",
                },
              }}
              render={({ field }) => (
                <TextField
                  autoFocus
                  placeholder="Phone"
                  id="phone"
                  type="phone"
                  required
                  fullWidth
                  variant="standard"
                  size="small"
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                  {...field}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon sx={{ color: "#0c3b69" }} />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => handle(e)}
                  value={data.phoneNumber}
                />
              )}
            />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              placeholder="Email"
              id="email"
              type="Email"
              fullWidth
              variant="standard"
              required
              size="small"
              {...register("email", {
                required: "true",
                pattern: /^\S+@\S+.\S+$/i,
              })}
              error={!!errors.email}
              helperText={errors.email && "Enter a valid email"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: "#0c3b69" }} />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => handle(e)}
              value={data.email}
            />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              required
              placeholder="Pick up Location"
              id="pickUpLoc"
              type="text"
              fullWidth
              variant="standard"
              size="small"
              {...register("pickUpLoc", { required: true })}
              error={!!errors.pickUpLoc}
              helperText={errors.pickUpLoc && "name is required"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: "#0c3b69" }} />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => handle(e)}
              value={data.pickUpLoc}
            />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              required
              placeholder="Drop Location"
              id="dropLocation"
              type="text"
              fullWidth
              variant="standard"
              size="small"
              {...register("dropLocation", { required: true })}
              error={!!errors.dropLocation}
              helperText={errors.dropLocation && "name is required"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: "#0c3b69" }} />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => handle(e)}
              value={data.dropLocation}
            />
          </DialogContent>
          <DialogContent>
            <Controller
              name="startDate"
              control={control}
              defaultValue=""
              rules={{
                required: "From Date is required",
                pattern: {
                  value: /^\d{4}-\d{2}-\d{2}$/, // yyyy-mm-dd format
                  message: "Invalid date format (yyyy-mm-dd)",
                },
                validate: (value) => {
                  const toDateValue = getValues("startDate"); // Use getValues from useForm
                  if (value && toDateValue) {
                    return (
                      value <= toDateValue ||
                      "Pick up date must be before or equal to Pick off Date"
                    );
                  }
                  return true;
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  autoFocus
                  label="Pick Up Date"
                  placeholder="Pick Up"
                  id="pick-up"
                  type="date"
                  fullWidth
                  variant="standard"
                  required
                  size="small"
                  error={Boolean(errors.startDate)}
                  helperText={errors.startDate?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon sx={{ color: "#0c3b69" }} />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => handle(e)}
                  value={data.startDate}
                />
              )}
            />
          </DialogContent>
          <DialogContent>
            <Controller
              name="endDate"
              control={control}
              defaultValue=""
              rules={{
                required: "To Date is required",
                pattern: {
                  value: /^\d{4}-\d{2}-\d{2}$/, // yyyy-mm-dd format
                  message: "Invalid date format (yyyy-mm-dd)",
                },
                validate: (value) => {
                  const fromDateValue = getValues("endDate"); // Use getValues from useForm
                  if (value && fromDateValue) {
                    return (
                      value >= fromDateValue ||
                      "Pick off Date must be after or equal to Pick Up Date"
                    );
                  }
                  return true;
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  autoFocus
                  label="Pick Off Date"
                  placeholder="Pick Off"
                  id="pick-off"
                  type="date"
                  fullWidth
                  required
                  variant="standard"
                  size="small"
                  error={Boolean(errors.endDate)}
                  helperText={errors.endDate?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon sx={{ color: "#0c3b69" }} />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => handle(e)}
                  value={data.endDate}
                />
              )}
            />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              placeholder="Message"
              id="message"
              type="text"
              fullWidth
              variant="standard"
              required
              size="small"
              {...register("message", { required: true })}
              error={!!errors.message}
              helperText={errors.message && "city is required"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MessageIcon sx={{ color: "#0c3b69" }} />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => handle(e)}
              value={data.message}
            />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              placeholder="City"
              id="city"
              type="text"
              fullWidth
              variant="standard"
              required
              size="small"
              {...register("city", { required: true })}
              error={!!errors.area}
              helperText={errors.area && "city is required"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon sx={{ color: "#0c3b69" }} />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => handle(e)}
              value={data.city}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" size="small" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              // onClick={handleClose}
              variant="contained"
              size="small"
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default EnquiryForm;
