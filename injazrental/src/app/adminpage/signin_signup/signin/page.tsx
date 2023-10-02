"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import axios from "axios";

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});
const SignIn: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({
     resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onsubmit = (e: any) => {
    e.preventDefault();
    const values = getValues();
   

   
    debugger;
    console.log("vales",values)
    axios
      .post("http://localhost:4000/user/login", {
        ...values,
      })
      .then(() => {
        // Swal.fire("You have Logged In!")
        console.log(values,"values")
        if(values.email=="chennuganesh2@gmail.com")
        {
          router.push("/adminpage");

          
        }
        else{
        router.push("/");
        }
      })
      .catch((err) => {
        console.log(err,"gfyhgh");
        // Swal.fire(err.response.data.message)
        Swal.fire({
            icon: 'error',
            title: 'Sorry..',
            text: err.response.data.message,
          })
      });
  };

  return (
    <div className="enquiry_form" style={{ height: "90vh" }}>
      <Container sx={{ paddingTop: "8%" }} maxWidth="xs">
        <Typography sx={{ textAlign: "center" }} variant="h4" gutterBottom>
          Register
        </Typography>
        <form onSubmit={(e) => onsubmit(e)}>
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
          <Button type="submit" variant="contained" color="primary" fullWidth  >
            Sign In
          </Button>
          <Button sx={{marginTop:"10px"}} variant="contained" color="success" fullWidth onClick={() => router.push("/adminpage/signin_signup/signup")}>
            Create a new Account
          </Button>
          
        </form>
      </Container>
    </div>
  );
};

export default SignIn;
