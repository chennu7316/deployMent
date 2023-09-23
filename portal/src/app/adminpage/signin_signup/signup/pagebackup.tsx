"use client"
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
// import "../signup/SignUP.css"

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const router = useRouter();

  const onSubmit = (data: FormData) => {
    router.push("/adminpage")
  };

  return (
    <div className="enquiry_form" style={{height:"90vh"}}>
      <Container sx={{ paddingTop: "8%" }} maxWidth="xs">
        <Typography sx={{ textAlign: "center" }} variant="h4" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
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

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default SignUp;
