import React, { useEffect } from "react";
import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { privateRoutes, publicRoutes } from "./../routes";
import Layout from "./Layout";
import { HOME_ROUTE } from "./../utils/consts";
import Home from "../pages/Home";
import RequireAuth from "./../hoc/RequireAuth";

function AppRouter() {
  const { user } = UserAuth();
  console.log(user);
  useEffect(() => {}, [user]);
  return (
    <Routes>
      <Route element={<Layout />}>
        {privateRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={<RequireAuth>{element}</RequireAuth>} />
        ))}
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default AppRouter;
