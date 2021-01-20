import React, { useState } from "react";
import NavBar from "./NavBar";
import Ad from "./Ad";
import Services from "./Services";
import Register from "./Register";
import Products from "./Products";
let MainPage = () => {
  return (
    <div>
      <NavBar />
      <Ad />
      <Services />
      <Register />
      <Products />
    </div>
  );
};

export default MainPage;
