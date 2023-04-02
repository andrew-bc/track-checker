import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { SIGNIN_ROUTE } from "../utils/consts";

function RequireAuth({ children }) {
  const location = useLocation();
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to={SIGNIN_ROUTE} state={{ from: location }} />;
  }
  return children;
}

export default RequireAuth;
