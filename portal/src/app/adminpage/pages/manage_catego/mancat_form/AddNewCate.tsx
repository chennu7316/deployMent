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
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import "../ManCat.css";
import { useForm, Controller } from "react-hook-form";

interface CateFormData {
  name: string;
  slug: string;
  status: string;
  createdDate: string;
  updatedDate: string;
}

const AddNewCate = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CateFormData>();

  const onSubmit = (data: CateFormData) => {
    console.log(data);
  };

  return (
    <div className="addnew_cate">
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container className="catecontbox">
            <div className="newcate_head">
              <h1>Add new category</h1>

              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("name", { required: true })}
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
                          <MenuItem value={"Crossover"}>Crossover</MenuItem>
                          <MenuItem value={"Hatchback"}>Hatchback</MenuItem>
                          <MenuItem value={"Luxury Cars"}>Luxury Cars</MenuItem>
                          <MenuItem value={"Luxury Suv"}>Luxury Suv</MenuItem>
                          <MenuItem value={"Sedan"}>Sedan</MenuItem>
                          <MenuItem value={"Small Sedan"}>Small Sedan</MenuItem>
                          <MenuItem value={"SUV"}>SUV</MenuItem>
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
                          {...field}
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
                </Grid> */}
                {/* <Grid item xs={12} sm={4} md={4} lg={4}>
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

export default AddNewCate;
