"use client";
import "./globals.css";
import AdminHome from "./adminpage/AdminHome";
import LandingPage from "./user/landing_page/LandingPage";
import SignUp from "./adminpage/signin_signup/signup/page";
import SignupForm from "./user/signup-form/SignupForm";

export default function Home() {
  console.log("firstttttttttttttttt");
  return (
    <>
      {/* <AdminHome /> */}
      <LandingPage />
      {/* <SignUp /> */}
      {/* <SignupForm /> */}
    </>
  );
}
