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
import { useForm, Controller } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import "../EngineCapacity.css"
import { useState,useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface EngCapFormData {
  capacity: string;
  status: string;
}

interface IErrors {
  capacity: boolean;
  select: boolean;
}

const EngCapForm = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("verify");
  const capacity = searchParams.get("capacity");
  const status = searchParams.get("status");
  const [error, setErrors] = useState<IErrors>({ capacity: false, select: false });
  const [textName, setTextName] = useState<string>("");
  const [select, setSelect] = useState<string>("");

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:4000/user/getCarEngineCapacities/${id}`)
    .then((res)=>{
      debugger
      const {Capacity,Status,CreatedDate}=res.data.data
      setdata({
        _id:id,
        Capacity:Capacity,
        Status:Status,
        CreatedDate:CreatedDate
      })
    })
    .catch((err)=>{
      console.log(err)
    })
      //'http://localhost:4000/user/getCarModel/64f9c31050e6d77e2c177787'
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

  const {
    register,
    control,
    formState: { errors },
  } = useForm<EngCapFormData>();

  const onSubmit: any = (e: any) => {
    e.preventDefault();
    // debugger
    if (!textName) {
      setErrors({ ...error, capacity: true });
    }
    if (!select) {
      setErrors({ ...error, select: true });
    }
    const payload: { capacity: string; status: string } = {
      capacity: textName,
      status: select,
    };
    payload.capacity = textName;
    payload.status = select;
    console.log(payload, "payload");
    router.push("/adminpage/pages/engine_capacities");
  };

  const [data,setdata]=useState({
    _id:"",
    Capacity:'',
    Status:'',
    CreatedDate:'1/2/2023'
  })
const handle=(e:any)=>{
  const newdata:any={...data}
  newdata[e.target.name]=e.target.value
  setdata(newdata)
}
const handleSubmit=(e:any)=>{
  e.preventDefault()
  if(id){
    axios.put("http://localhost:4000/user/updateCarEngineCapacities",{
      _id:id,
      Capacity:data.Capacity,
      Status:data.Status,
      CreatedDate:data.CreatedDate
     })
    .then((res)=>{
      Swal.fire(
        'Updated!',
        'The car capacity has been updated.',
        'success'
      )
      debugger
      setdata({
        _id:"",
        Capacity:'',
        Status:'',
        CreatedDate:''
      })
    })
    .catch((err)=>{
      console.log(err)
      debugger
    })
  }
  else{
    
    axios.post("http://localhost:4000/user/createcarEngineCapacities",{
      Capacity:data.Capacity,
        Status:data.Status,
        CreatedDate:data.CreatedDate
    })
    .then(()=>{
      Swal.fire(
        'Added!',
        'The car capacity has been added.',
        'success'
      )
      setdata({
        _id:"",
        Capacity:'',
        Status:'',
        CreatedDate:''
      })
    })
    .catch((err)=>{
      console.log("errr",err)
    })

  }
  router.push("/adminpage/pages/engine_capacities");

}
  return (
    <div className="addnew_cate">
      <Box>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <Container className="catecontbox">
            <div className="newcate_head">
              <h1>Add New Engine Capacity</h1>

              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Capacity"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      name="Capacity"
                      value={data.Capacity}
                      onChange={(e)=>handle(e)}
                      error={!!errors.capacity}
                      helperText={
                        errors.capacity && "This name field is required"
                      }
                      // value={textName}
                      // onChange={(e: any) => handleTextChange(e)}
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
                {id ? "Update" : "Submit"}
              </Button>
              <Button variant="contained" color="error" onClick={() => router.push("/adminpage/pages/engine_capacities")}>
                Cancel
              </Button>
            </div>
          </Container>
        </form>
      </Box>
    </div>
  );
};

export default EngCapForm;
