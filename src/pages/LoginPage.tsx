import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import React from "react";
// import Button from "../components/Button";
import NavBar from "../components/NavBar";

const LoginPage: React.FC = () => {
  const handleSuccess = (response: CredentialResponse) => {
    console.log("Login Success: ", response);
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <div>
      <NavBar />
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
};

export default LoginPage;
