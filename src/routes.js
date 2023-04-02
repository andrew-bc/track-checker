import Account from "./pages/Account";
import Signin from "./pages/Signin";
import { ACCOUNT_ROUTE, HOME_ROUTE, SIGNIN_ROUTE } from "./utils/consts";
import Home from "./pages/Home";
import { Navigate } from "react-router-dom";

export const privateRoutes = [
  {
    path: ACCOUNT_ROUTE,
    element: <Account />,
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    element: <Home />,
  },
  {
    path: SIGNIN_ROUTE,
    element: <Signin />,
  },
  {
    path: "*",
    element: <Navigate to={HOME_ROUTE} />,
  },
];
