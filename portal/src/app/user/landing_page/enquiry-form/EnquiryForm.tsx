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
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../enquiry-form/enquiryForm.css";
import { Controller, useForm } from "react-hook-form";

interface FormData {
  name: string;
  number: string;
  email: string;
  pickupDate: string;
  pickoffDate: string;
  city: string;
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
    console.log(data);
    reset();
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    // <Container maxWidth="sm" sx={{textAlign:"right"}}>
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className="enquiry_btn"
      >
        Enquiry
      </Button>
      <Dialog className="dialog_css"  open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Enquiry</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
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
            />
          </DialogContent>
          <DialogContent>
            <Controller
              name="number"
              control={control}
              rules={{
                required: "This field is required",
                pattern: {
                  value: /^[0-9]{10}$/, // Validates for exactly 10 digits
                  message: "Enter a valid mobile number",
                },
              }}
              // defaultValue={0} // Set your initial value here
              render={({ field }) => (
                <TextField
                  autoFocus
                  placeholder="Phone"
                  id="phone"
                  type="phone"
                  fullWidth
                  variant="standard"
                  size="small"
                  error={!!errors.number}
                  helperText={errors.number?.message}
                  {...field}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon sx={{ color: "#0c3b69" }} />
                      </InputAdornment>
                    ),
                  }}
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
            />
          </DialogContent>
          <DialogContent>
            <Controller
              name="pickupDate"
              control={control}
              defaultValue=""
              rules={{
                required: "From Date is required",
                pattern: {
                  value: /^\d{4}-\d{2}-\d{2}$/, // yyyy-mm-dd format
                  message: "Invalid date format (yyyy-mm-dd)",
                },
                validate: (value) => {
                  const toDateValue = getValues("pickoffDate"); // Use getValues from useForm
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
                  size="small"
                  error={Boolean(errors.pickupDate)}
                  helperText={errors.pickupDate?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon sx={{ color: "#0c3b69" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </DialogContent>
          <DialogContent>
            <Controller
              name="pickoffDate"
              control={control}
              defaultValue=""
              rules={{
                required: "To Date is required",
                pattern: {
                  value: /^\d{4}-\d{2}-\d{2}$/, // yyyy-mm-dd format
                  message: "Invalid date format (yyyy-mm-dd)",
                },
                validate: (value) => {
                  const fromDateValue = getValues("pickupDate"); // Use getValues from useForm
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
                  variant="standard"
                  size="small"
                  error={Boolean(errors.pickoffDate)}
                  helperText={errors.pickoffDate?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon sx={{ color: "#0c3b69" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
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
              size="small"
              {...register("city", { required: true })}
              error={!!errors.city}
              helperText={errors.name && "city is required"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon sx={{ color: "#0c3b69" }} />
                  </InputAdornment>
                ),
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" size="small" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" size="small">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
    // </Container>
  );
}

export default EnquiryForm;
