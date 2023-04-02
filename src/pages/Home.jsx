import React from "react";
import { Link } from "react-router-dom";
import { ACCOUNT_ROUTE } from "./../utils/consts";

const Home = () => {
  return (
    <div>
      Home
      <Link to={ACCOUNT_ROUTE}>Account</Link>
    </div>
  );
};

export default Home;
