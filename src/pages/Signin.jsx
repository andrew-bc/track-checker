import React from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "./../context/AuthContext";
import { useLocation } from "react-router-dom";
import { HOME_ROUTE } from "./../utils/consts";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const fromPage = location.state?.from?.pathname || HOME_ROUTE;

  if (user) {
    return <Navigate to={fromPage} replace={true} />;
  }
  // navigate(fromPage, { replace: true });
  else {
    return (
      <div>
        Signin
        <GoogleButton onClick={googleSignIn} />
        <h1>{user?.displayName}</h1>
      </div>
    );
  }
};

export default Signin;
