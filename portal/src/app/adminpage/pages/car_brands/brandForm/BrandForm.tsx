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
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import "../CarBrand.css";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface BrandFormData {
  brand: string;
  slug: string;
  status: string;
  createdDate: string;
  updatedDate: string;
}

interface IErrors {
  brand: boolean;
  select: boolean;
}

const BrandForm = () => {
  const searchParams = useSearchParams();
  const brand = searchParams.get("brand");
  const status = searchParams.get("status");
  const [error, setErrors] = useState<IErrors>({ brand: false, select: false });
  const [textName, setTextName] = useState<string>("");
  const [select, setSelect] = useState<string>("");

  useEffect(() => {
    if (brand) {
      setTextName(brand);
      setSelect(status || "");
    }
  }, []);

  const handleTextChange = (event: SelectChangeEvent<string>) => {
    setTextName(event.target.value);
  };
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    // debugger;
    setSelect(event.target.value);
  };

  const router = useRouter();

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

  const onSubmit: any = (e: any) => {
    e.preventDefault();
    if (!textName) {
      setErrors({ ...error, brand: true });
    }
    if (!select) {
      setErrors({ ...error, select: true });
    }
    const payload: { brand: string; status: string } = {
      brand: textName,
      status: select,
    };
    payload.brand = textName;
    payload.status = select;
    console.log(payload, "payload");
    router.push("/adminpage/pages/car_brands");
  };

  const handle=(e:any)=>{
    console.log("welcomeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    const newData:any={...data}
    newData[e.target.name]=e.target.value
    setdata(newData)
   console.log(newData,"newDAatattttttttttttttt")
  }

  const Submit=(e:any)=>{
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
                     // error={!!errors.name}
                     // helperText={errors.name && "This name field is required"}
                    />
                  </FormControl>
                </Grid>
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
              </Grid>
            </div>
            <div className="magcatbtn">
              <Button
                variant="contained"
                type="submit"
                className="catsubmitbtn"
                color="primary"
              >
                {brand ? "Update" : "Submit"}
              </Button>
              <Button
                variant="contained"
                color="error"
                 
              >
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
