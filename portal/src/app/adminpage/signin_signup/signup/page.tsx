"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import axios from "axios";
// import "../signup/SignUP.css"

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/user/signUp",
        formData
      );
      // Assuming your API returns some data upon successful registration.
      // You can handle the response here, e.g., show a success message or redirect.
      // Redirect to a different page upon successful registration
      router.push("/login"); // Change this route as needed
    } catch (error) {
      // Handle any registration errors here
      console.error("Registration Failed", error);
    }
  };
  // const {
  //   control,
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormData>();

  // const router = useRouter();

  // const onSubmit = (data: FormData) => {
  //   router.push("/adminpage")
  // };

  return (
    <div className="enquiry_form" style={{ height: "90vh" }}>
      <Container sx={{ paddingTop: "8%" }} maxWidth="xs">
        <Typography sx={{ textAlign: "center" }} variant="h4" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => ( */}
          <TextField
            // {...field}
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            size="small"
            // {...register("firstName", { required: true })}
            // error={!!errors.firstName}
            // helperText={errors.firstName && "First name is required"}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {/* )}
          /> */}

          {/* <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => ( */}
          <TextField
            // {...field}
            label="Last Name"
            variant="outlined"
            fullWidth
            size="small"
            margin="normal"
            // {...register("lastName", { required: true })}
            // error={!!errors.lastName}
            // helperText={errors.lastName && "Last name is required"}
          />
          {/* )}
          /> */}

          {/* <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => ( */}
          <TextField
            // {...field}
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
            // {...register("email", {
            //   required: "true",
            //   pattern: /^\S+@\S+.\S+$/i,
            // })}
            // error={!!errors.email}
            // helperText={errors.email && "Enter a valid email"}
          />
          {/* )}
          /> */}

          {/* <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => ( */}
          <TextField
            // {...field}
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            size="small"
            margin="normal"
            // {...register("password", { required: true })}
            // error={!!errors.password}
            // helperText={errors.password && "password name is required"}
          />
          {/* )}
          /> */}

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default SignUp;
