import * as React from "react";
import axios from "axios";
import Swal from 'sweetalert2';
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
import { useSearchParams } from "next/router";
import { useState, useEffect } from "react";

interface ModelFormData {
  name: string;
  brand: string;
  status: string;
  createdDate: string;
  updatedDate: string;
}

interface IErrors {
  model: boolean;
  brand: boolean;
  select: boolean;
}

const ModelForm: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("verify");
  const model = searchParams.get("model");
  const brand = searchParams.get("brand");
  const status = searchParams.get("status");
  const [error, setErrors] = useState<IErrors>({
    model: false,
    select: false,
    brand: false,
  });
  const [textName, setTextName] = useState<string>("");
  const [select, setSelect] = useState<string>("");
  const [faqans, setFaqans] = useState<string>("");
  const [drop, setdrop] = useState<any[]>([]);
  const [selectedBrand, setSelectedBrand] = useState('');

  useEffect(() => {
    axios.get("http://localhost:4000/user/getAllBrands")
      .then((res) => {
        setdrop(res.data.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:4000/user/getCarModel/${id}`)
        .then((res) => {
          debugger;
          const { Name, Brand, Status, CreatedDate, UpdatedDate, slug } = res.data.data;
          setdata({
            _id: id,
            Name: Name,
            Brand: Brand,
            Status: Status,
            slug: slug,
            CreatedDate: CreatedDate,
            UpdatedDate: UpdatedDate,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleTextChange = (event: SelectChangeEvent<string>) => {
    setTextName(event.target.value);
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelect(event.target.value);
  };

  const handleAnswerCanage = (event: SelectChangeEvent<string>) => {
    setFaqans(event.target.value);
  };

  const router = useRouter();

  const [data, setdata] = useState({
    _id: "",
    Name: "",
    Brand: "",
    Status: "",
    slug: "test",
    CreatedDate: "11/09/2023",
    UpdatedDate: "11/09/2023",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      axios.put("http://localhost:4000/user/updateCarModel", {
        _id: id,
        Name: data.Name,
        Brand: data.Brand,
        Status: data.Status,
        slug: data.slug,
        CreatedDate: data.CreatedDate,
        UpdatedDate: data.UpdatedDate,
      })
        .then((res) => {
          Swal.fire(
            'Updated!',
            'The car model has been updated.',
            'success'
          );
          debugger;
          setdata({
            _id: "",
            Name: "",
            Brand: "",
            Status: "",
            slug: "test",
            CreatedDate: "11/09/2023",
            UpdatedDate: "11/09/2023",
          });
        })
        .catch((err) => {
          console.log(err);
          debugger;
        });
    } else {
      axios.post("http://localhost:4000/user/addCarModel", {
        Name: data.Name,
        Brand: data.Brand,
        Status: data.Status,
        slug: "test",
        CreatedDate: "11/09/2023",
        UpdatedDate: "11/09/2023",
      })
        .then((res) => {
          Swal.fire(
            'Added!',
            'The car model has been added.',
            'success'
          );
          setdata({
            _id: "",
            Name: "",
            Brand: "",
            Status: "",
            slug: "test",
            CreatedDate: "11/09/2023",
            UpdatedDate: "11/09/2023",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    router.push("/adminpage/pages/car_models");
  }

  return (
    <div className="addnew_cate">
      <Box>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Container className="catecontbox">
            <div className="newcate_head">
              <h1>Add New Model</h1>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      name="Name"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      value={data.Name}
                      onChange={(e) => handle(e)}
                      error={!!errors.name}
                      helperText={errors.name && "This name field is required"}
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <FormControl sx={{ minWidth: '100%' }} size="small">
                    <InputLabel id="demo-select-small-label">Brand</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      name="Brand"
                      label="Slug"
                      value={data.Brand}
                      onChange={(e) => handle(e)}
                    >
                      {drop.length > 0 && // Check if data is not empty
                        drop.map((item) => (
                          <MenuItem key={item._id} value={item.name}>
                            {item.name}
                          </MenuItem>
                        ))}
                    </Select>

                    <FormHelperText error>{errors.brand?.message}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Status"
                      name="Status"
                      value={data.Status}
                      onChange={(e) => handle(e)}
                    >
                      <MenuItem value={"active"}>Active</MenuItem>
                      <MenuItem value={"inactive"}>Inactive</MenuItem>
                    </Select>

                    <FormHelperText error>{errors.status?.message}</FormHelperText>
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
              <Button variant="contained" color="error" onClick={() => router.push("/adminpage/pages/car_models")}>
                Cancel
              </Button>
            </div>
          </Container>
        </form>
      </Box>
    </div>
  );
};

export default ModelForm;
