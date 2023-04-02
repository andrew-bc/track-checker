import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { privateRoutes, publicRoutes } from "./../routes";
import Layout from "./Layout";

function AppRouter() {
  let authToken = localStorage.getItem("Auth Token");
  const { user } = UserAuth();
  return (
    <Routes>
      <Route element={<Layout />}>
        {(authToken || user) &&
          privateRoutes.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default AppRouter;
