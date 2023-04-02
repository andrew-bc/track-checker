import React from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "./../context/AuthContext";

const Signin = () => {
  const { googleSignIn } = UserAuth();

  return (
    <div>
      Signin
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default Signin;
