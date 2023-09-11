"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";

// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateField } from "@mui/x-date-pickers/DateField";
import { useForm, Controller } from "react-hook-form";
import "../CarBrand.css"

interface BrandFormData {
  name: string;
  slug: string;
  status: string;
  createdDate: string;
  updatedDate: string;
}

const BrandForm = () => {
  const [data,setdata]=useState({
    name:"",
    status:"",
    slag:"testing",
    createdDate:"1/2/2020",
    updatedDate:"2/2/2023"
  })
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BrandFormData>();

  const onSubmit = (data: BrandFormData) => {
    console.log(data);
  };

  const handle=(e)=>{
    console.log("welcomeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    const newData:any={...data}
    newData[e.target.name]=e.target.value
    setdata(newData)
   console.log(newData,"newDAatattttttttttttttt")
  }

  const Submit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:4000/user/createBrand",{
      name:data.name,
      status:data.status,
      slag:data.slag,
      createdDate:data.createdDate,
      updatedDate:data.updatedDate
    })
    .then((res)=>{
      console.log(res.data)
      setdata({
        name:"",
        status:"",
        slag:"testing",
        createdDate:"1/2/2020",
        updatedDate:"2/2/2023"
      })
    })

  }
  return (
    <div className="addnew_cate">
      <Box>
        <form onSubmit={(e)=>Submit(e)}>
          <Container className="catecontbox">
            <div className="newcate_head">
              <h1>Add New Brand</h1>

              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      name="name"
                      label="Name"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      onChange={(e)=>handle(e)}
                      value={data.name}
                      error={!!errors.name}
                      helperText={errors.name && "This name field is required"}
                    />
                  </FormControl>
                </Grid>
                {/* <Grid item xs={12} sm={4} md={4} lg={4}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Slug</InputLabel>
                    <Controller
                      name="slug"
                      control={control}
                      defaultValue=""
                      rules={{ required: "This slug field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Slug"
                          {...field}
                        >
                          <MenuItem value={"toyota"}>Toyota</MenuItem>
                          <MenuItem value={"nissan"}>Nissan</MenuItem>
                          <MenuItem value={"mitsubishi"}>Mitsubishi</MenuItem>
                          <MenuItem value={"mazda"}>Mazda</MenuItem>
                          <MenuItem value={"kia"}>kia</MenuItem>
                          <MenuItem value={"hyundai"}>Hyundai</MenuItem>
                          <MenuItem value={"honda"}>Honda</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.slug?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid> */}
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                    <Controller
                      name="status"
                      control={control}
                      defaultValue=""
                      rules={{ required: "This status field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Status"
                          name="status"
                          value={data.status} // Bind the value to data.status
                          onChange={(e)=>handle(e)} // Handle the change event
                  
                        >
                          <MenuItem value={"active"}>Active</MenuItem>
                          <MenuItem value={"inactive"}>Inactive</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.status?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                {/* <Grid item xs={12} sm={4} md={4} lg={4}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <Controller
                      name="createdDate"
                      control={control}
                      // defaultValue=""
                      rules={{
                        required: "This Created date field is required",
                      }}
                      render={({ field }) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            sx={{ margin: 0 }}
                            components={["DateField"]}
                          >
                            <DateField
                              sx={{ width: "100%", padding: 0 }}
                              label="Created Date"
                              slotProps={{ textField: { size: "small" } }}
                              {...field}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      )}
                    />
                    <FormHelperText error>
                      {errors.createdDate?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <Controller
                      name="updatedDate"
                      control={control}
                      // defaultValue=""
                      rules={{
                        required: "This Updated Date field is required",
                      }}
                      render={({ field }) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            sx={{ margin: 0 }}
                            components={["DateField"]}
                          >
                            <DateField
                              sx={{ width: "100%", padding: 0 }}
                              label="Updated Date"
                              slotProps={{ textField: { size: "small" } }}
                              {...field}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      )}
                    />
                    <FormHelperText error>
                      {errors.updatedDate?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid> */}
              </Grid>
            </div>
            <div className="magcatbtn">
              <Button
                variant="contained"
                type="submit"
                className="catsubmitbtn"
                color="primary"
              >
                Submit
              </Button>
              <Button variant="contained" color="error">
                Cancel
              </Button>
            </div>
          </Container>
        </form>
      </Box>
    </div>
  );
};

export default BrandForm;
