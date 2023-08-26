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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../enquiry-form/enquiryForm.css'

function EnquiryForm() {
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
        // sx={{ color: "white" }}
        className="enquiry_btn"
      >
        Enquiry
      </Button>
      <Dialog open={open} onClose={handleClose}>
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
          <TextField
            autoFocus
            placeholder="Phone"
            id="phone"
            type="phone"
            fullWidth
            variant="standard"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon sx={{ color: "#0c3b69" }} />
                </InputAdornment>
              ),
            }}
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
          <TextField
            autoFocus
            label="Pick Up Date"
            placeholder="Pick Up"
            id="pick-up"
            type="date"
            fullWidth
            variant="standard"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DateRangeIcon sx={{ color: "#0c3b69" }} />
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            label="Pick Off Date"
            placeholder="Pick Off"
            id="pick-off"
            type="date"
            fullWidth
            variant="standard"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DateRangeIcon sx={{ color: "#0c3b69" }} />
                </InputAdornment>
              ),
            }}
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
          <Button variant="contained" size="small" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" size="small" onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
      </>
    // </Container>
  );
}

export default EnquiryForm;
