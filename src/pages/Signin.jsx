import React from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "./../context/AuthContext";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();

  return (
    <div>
      Signin
      <GoogleButton onClick={googleSignIn} />
      <h1>{user?.displayName}</h1>
    </div>
  );
};

export default Signin;
