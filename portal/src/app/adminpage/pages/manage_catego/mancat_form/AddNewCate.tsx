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
import "../ManCat.css";
import { useForm, Controller } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

interface CateFormData {
  name: string;
  slug: string;
  status: string;
  createdDate: string;
  updatedDate: string;
}

interface IErrors {
  name: boolean;
  select: boolean;
}

const AddNewCate = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const status = searchParams.get("status");
  const [error, setErrors] = useState<IErrors>({ name: false, select: false });
  const [textName, setTextName] = useState<string>("");
  const [select, setSelect] = useState<string>("");

  useEffect(() => {
    if (name) {
      setTextName(name);
      setSelect(status || "");
    }
  }, []);

  const handleTextChange = (event: SelectChangeEvent<string>) => {
    setTextName(event.target.value);
  };
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
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
  } = useForm<CateFormData>();

  const onSubmit: any = (e: any) => {
    e.preventDefault();
    if (!textName) {
      setErrors({ ...error, name: true });
    }
    if (!select) {
      setErrors({ ...error, select: true });
    }
    const payload: { name: string; status: string } = {
      name: textName,
      status: select,
    };
    payload.name = textName;
    payload.status = select;
    console.log(payload, "payload");
    router.push("/adminpage/pages/manage_catego");
  };

  const handle=(e:any)=>{
    console.log("welcomeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    const newData:any={...data}
    newData[e.target.name]=e.target.value
    console.log(newData[e.target.name]=e.target.value,"newData[e.target.name]=e.target.value")
    setdata(newData)
   console.log(newData,"newDAatattttttttttttttt")
  }

  const Submit=(e:any)=>{
    e.preventDefault()
    axios.post("http://localhost:4000/user/createCategory",{
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
        <form onSubmit={(e)=>Submit(e)} >
          <Container className="catecontbox">
            <div className="newcate_head">
              <h1>Add new category</h1>

              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="name"
                      label="Name"
                      variant="outlined"
                      size="small"
                      name="name"
                      sx={{ height: "50px" }}
                      onChange={(e)=>handle(e)}
                      value={data.name}
                      error={!!errors.name}
                      helperText={errors.name && "This name field is required"}
                      // onChange={(e: any) => handleTextChange(e)}
                      // value={textName}
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                <FormControl sx={{ minWidth: "100%" }} size="small">
         <InputLabel id="demo-select-small-label">Status</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="status"
        label="Status"
        name="status"
        value={data.status} // Bind the value to data.status
        onChange={(e)=>handle(e)} // Handle the change event
      >
        <MenuItem value={"active"}>Active</MenuItem>
        <MenuItem value={"inactive"}>Inactive</MenuItem>
      </Select>
      <FormHelperText error>
      {errors.status?.message}
      </FormHelperText>
    </FormControl>
                {/* <FormControl sx={{ minWidth: "100%" }} size="small">
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
                          {...field}
                          value={select}
                          onChange={(e) => handleSelectChange(e)}
                          required
                          
                         {...field}
                         value={data.status}
                         onChange={(e)=>handle(e)}
                        >
                          <MenuItem value={"active"}>Active</MenuItem>
                          <MenuItem value={"inactive"}>Inactive</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.status?.message}
                    </FormHelperText>
                  </FormControl> */}
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
                {name ? "Update" : "Submit"}
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => router.push("/adminpage/pages/manage_catego")}
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

export default AddNewCate;
