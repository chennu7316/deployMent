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
import "../RequiredDocs.css";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface ReqDocsFormData {
  title: string;
  Status: string;
}

interface IErrors {
  title: boolean;
  select: boolean;
}

const ReqDocsForm = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("verify");
  const title = searchParams.get("title");
  const status = searchParams.get("status");
  const [error, setErrors] = useState<IErrors>({ title: false, select: false });
  const [textName, setTextName] = useState<string>("");
  const [select, setSelect] = useState<string>("");

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:4000/user/getCarDocument/${id}`)
    .then((res)=>{
      debugger
      const {Title,Status,CreatedDate,UpdatedDate}=res.data.data
      setdata({
        _id:id,
        Title:Title,
        Status:Status,
        CreatedDate:CreatedDate,
        UpdatedDate:UpdatedDate
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
  } = useForm<ReqDocsFormData>();

  const onSubmit: any = (e: any) => {
    e.preventDefault();
    // debugger
    if (!textName) {
      setErrors({ ...error, title: true });
    }
    if (!select) {
      setErrors({ ...error, select: true });
    }
    const payload: { title: string; status: string } = {
      title: textName,
      status: select,
    };
    payload.title = textName;
    payload.status = select;
    router.push("/adminpage/pages/required_docs");
  };

  const [data,setdata]=useState({
    _id:"",
  Title: "",
  Status: "",
  CreatedDate: "1/2/2023",
  UpdatedDate: "2/4/2024"
  })

  const handle=(e:any)=>{
    const newdata:any={...data}
    newdata[e.target.name]=e.target.value
    setdata(newdata)
  }
  const handleSubmit=(e:any)=>{
    e.preventDefault()
if(id){
  axios.put("http://localhost:4000/user/updateCarDocument",{
    _id:id,
    Title:data.Title,
    Status:data.Status,
    CreatedDate:data.CreatedDate,
    UpdatedDate:data.UpdatedDate
  })
  .then((res)=>{
    Swal.fire(
      'Updated!',
      'The car Documents has been updated.',
      'success'
    )
    debugger
    setdata({
      _id:"",
      Title:"",
      Status:"",
      CreatedDate:"11/09/2023",
      UpdatedDate:"11/09/2023"
    })
  })
  .catch((err)=>{
    console.log(err)
    debugger
  })

}
else{
  axios.post("http://localhost:4000/user/createcarDocument",{
    Title: data.Title,
    Status: data.Status,
    CreatedDate: data.CreatedDate,
   UpdatedDate: data.UpdatedDate
  })
  .then((res)=>{
    Swal.fire(
      'Added!',
      'The car documents has been added.',
      'success'
    )
    setdata({
      _id:"",
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
  
router.push("/adminpage/pages/required_docs");

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
                      id="title"
                      label="Title"
                      variant="outlined"
                      required
                      size="small"
                      sx={{ height: "50px" }}
                      name="Title"
                      value={data.Title}
                      onChange={(e)=>handle(e)}
                      error={!!errors.title}
                      helperText={errors.title && "This name field is required"}
                      // onChange={(e: any) => handleTextChange(e)}
                      // value={textName}
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
                      {/* {errors.status?.message} */}
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
              <Button
                variant="contained"
                color="error"
                onClick={() => router.push("/adminpage/pages/required_docs")}
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

export default ReqDocsForm;
