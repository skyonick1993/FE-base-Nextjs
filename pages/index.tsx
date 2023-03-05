import React from "react";
import HomeLayout from "../layouts/Home";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <h1>Home page</h1>
  );
};

Home.Layout = HomeLayout

export default Home;
