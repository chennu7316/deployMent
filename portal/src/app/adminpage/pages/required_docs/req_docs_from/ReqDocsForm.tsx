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
import { useForm, Controller } from "react-hook-form";
import "../RequiredDocs.css"
import { useState,useEffect } from "react";
import axios from "axios";

interface ReqDocsFormData {
  title: string;
  Status: string;
}

const ReqDocsForm = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<ReqDocsFormData>();

  const onSubmit = (data: ReqDocsFormData) => {
    console.log(data);
  };

  const [data,setdata]=useState({
    
  Title: "",
  Status: "",
  CreatedDate: "1/2/2023",
  UpdatedDate: "2/4/2024"
  })

  const handle=(e)=>{
    const newdata:any={...data}
    newdata[e.target.name]=e.target.value
    setdata(newdata)
  }
  const handleSubmit=(e)=>{
    axios.post("http://localhost:4000/user/createcarDocument",{
      Title: data.Title,
      Status: data.Status,
      CreatedDate: data.CreatedDate,
     UpdatedDate: data.UpdatedDate
    })
    .then((res)=>{
      setdata({
        Title: "",
        Status: "",
        CreatedDate: "",
        UpdatedDate: ""
      })
    })
    .catch((err)=>{
      console.log(err,"errorr")
    })

  }
  return (
    <div className="addnew_cate">
      <Box>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <Container className="catecontbox">
            <div className="newcate_head">
              <h1>Add New Document</h1>

              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Title"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      name="Title"
                      value={data.Title}
                      onChange={(e)=>handle(e)}
                      error={!!errors.title}
                      helperText={errors.title && "This name field is required"}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
  
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Status"
                          name="Status"
                          value={data.Status}
                          onChange={(e)=>handle(e)}
                        >
                          <MenuItem value={"active"}>Active</MenuItem>
                          <MenuItem value={"inactive"}>Inactive</MenuItem>
                        </Select>
                    <FormHelperText error>
                      {errors.status?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
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

export default ReqDocsForm;



