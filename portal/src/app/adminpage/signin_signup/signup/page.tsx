"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import Swal from "sweetalert2";
import axios from "axios";
import Swal from "sweetalert2";
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  city: string;
  area: string;
  zipcode: string;
  locality: string;
  address: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),

  phoneNumber: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  city: yup.string().required(),
  area: yup.string().required(),
  zipcode: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 digits"),
  locality: yup.string().required(),
  address: yup.string().required(),
});
const SignUp: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({
    // resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = (e: any) => {
    e.preventDefault();
    const values = getValues();
    let payload = { userName: "", ...values };

    payload.userName = values.firstName + " " + values.lastName;
    debugger;
    axios
      .post("http://localhost:4000/user/signUp", {
        ...payload,
      })
      .then(() => {
        // Swal.fire("Added!");

        router.push("/adminpage");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Sorry..',
          text: err.response.data.message,
        })
      });
  };

  return (
    <div className="enquiry_form">
      <Container maxWidth="xs">
        <Typography sx={{ textAlign: "center" }} variant="h4" gutterBottom>
          Register
        </Typography>
        <form onSubmit={(e) => onSubmit(e)}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
                size="small"
                {...register("firstName", { required: true })}
                error={!!errors.firstName}
                helperText={errors.firstName && "First name is required"}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                variant="outlined"
                fullWidth
                size="small"
                margin="normal"
                {...register("lastName", { required: true })}
                error={!!errors.lastName}
                helperText={errors.lastName && "Last name is required"}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                {...register("email", {
                  required: "true",
                  pattern: /^\S+@\S+.\S+$/i,
                })}
                error={!!errors.email}
                helperText={errors.email && "Enter a valid email"}
              />
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Phone Number"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                {...register("phoneNumber", {
                  required: "true",
                  pattern: /^\S+@\S+.\S+$/i,
                })}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber && "Enter a valid Phone Number"}
              />
            )}
          />
          <Controller
            name="address"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Address"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                {...register("address", {
                  required: "true",
                  pattern: /^\S+@\S+.\S+$/i,
                })}
                error={!!errors.address}
                helperText={errors.address && "Enter a valid address"}
              />
            )}
          />
          <Controller
            name="locality"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Locality"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                {...register("locality", {
                  required: "true",
                  pattern: /^\S+@\S+.\S+$/i,
                })}
                error={!!errors.locality}
                helperText={errors.locality && "Enter a valid locality"}
              />
            )}
          />{" "}
          <Controller
            name="area"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Area"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                {...register("area", {
                  required: "true",
                  pattern: /^\S+@\S+.\S+$/i,
                })}
                error={!!errors.area}
                helperText={errors.area && "Enter a valid area"}
              />
            )}
          />{" "}
          <Controller
            name="zipcode"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Zipcode"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                {...register("zipcode", {
                  required: "true",
                  pattern: /^\S+@\S+.\S+$/i,
                })}
                error={!!errors.zipcode}
                helperText={errors.zipcode && "Enter a valid zipcode"}
              />
            )}
          />{" "}
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="City"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                {...register("city", {
                  required: "true",
                  pattern: /^\S+@\S+.\S+$/i,
                })}
                error={!!errors.city}
                helperText={errors.city && "Enter a valid city"}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                size="small"
                margin="normal"
                {...register("password", { required: true })}
                error={!!errors.password}
                helperText={errors.password && "password name is required"}
              />
            )}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth onClick={() => router.push("/adminpage/signin_signup/signin")}>
            Sign Up
          </Button>
          <Button sx={{marginTop:"10px"}} variant="contained" color="success" fullWidth onClick={() => router.push("/adminpage/signin_signup/signin")}>
            Already have an Account ?
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default SignUp;
