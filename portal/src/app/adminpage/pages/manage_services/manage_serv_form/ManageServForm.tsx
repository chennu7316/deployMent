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
import "../ManageServ.css";
import { useState, useEffect } from "react";
import axios from "axios";

interface ManageServFormData {
  Title: string;
  status: string;
}

interface IErrors {
  title: boolean;
  select: boolean;
}

const ManageServForm = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const status = searchParams.get("status");
  const [error, setErrors] = useState<IErrors>({ title: false, select: false });
  const [textName, setTextName] = useState<string>("");
  const [select, setSelect] = useState<string>("");

  useEffect(() => {
    if (title) {
      setTextName(title);
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

  const [data, setdata] = useState({
    Title: "",
    Status: "",
    CreatedDate: "1/2/2024",
    UpdatedDate: "2/5/2025",
  });

  const {
    register,
    control,
    formState: { errors },
  } = useForm<ManageServFormData>();

  const onSubmit: any = (e: any) => {
    e.preventDefault();
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
    console.log(payload, "payload");
    router.push("/adminpage/pages/manage_services");
  };

  const handle = (e: any) => {
    console.log("hello");
    const newdata: any = { ...data };
    newdata[e.target.name] = e.target.value;
    setdata(newdata);
  };

  const handleSubmit = (e: any) => {
    axios
      .post("http://localhost:4000/user/createCarServices", {
        Title: data.Title,
        Status: data.Status,
        CreatedDate: data.CreatedDate,
        UpdatedDate: data.UpdatedDate,
      })
      .then((res) => {
        setdata({
          Title: "",
          Status: "",
          CreatedDate: "1/2/2024",
          UpdatedDate: "2/5/2025",
        });
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  return (
    <div className="addnew_cate">
      <Box>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Container className="catecontbox">
            <div className="newcate_head">
              <h1>Add New Manage Service</h1>

              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="Title"
                      label="Title"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      name="Title"
                      value={data.Title}
                      onChange={(e) => handle(e)}
                      // error={!!errors.title}
                      // helperText={errors.title && "This name field is required"}
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
                      id="Status"
                      label="Status"
                      name="Status"
                      value={data.Status}
                      onChange={(e) => handle(e)}
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
                {title ? "Update" : "Submit"}
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => router.push("/adminpage/pages/manage_services")}
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

export default ManageServForm;
