import React, { useEffect, useState } from "react";
import Button from "./Button";
import "../assets/css/NavBarCss.css";
import "../assets/FA/css/all.min.css";

let NavBar = (props) => {
  let { handleDisplayState, loginState } = props;
  let loginText,
    greeting = "";
  if (loginState == true) {
    loginText = "Logout";
    greeting = <div className="lead "> Welcome back !</div>;
  } else loginText = "Login";

  return (
    <nav className="navbar-expand-lg navbar navbar-light justify-content-between">
      <p
        href="#"
        className="col-2 col-lg-1 h2 font-weight-bold p-0 navbar__brand"
      >
        Estore
      </p>
      <div className="collapse navbar-collapse col-7 justify-content-center">
        <ul className="navbar-nav ">
          <li className="nav-item pr-5 pl-5">
            <a className="nav-item__link lead"> Home </a>
          </li>
          <li className="nav-item pr-5 pl-5">
            {" "}
            <a className="nav-item__link lead">Category </a>{" "}
          </li>
          <li className="nav-item pr-5 pl-5">
            {" "}
            <a className="nav-item__link lead">Collection </a>{" "}
          </li>
        </ul>
      </div>
      <div className="navbar__search border border-secondary col-5 col-lg-2 pr-3 pl-3">
        <input
          type="text"
          name="search"
          placeholder="Type something..."
          className="border border-0"
        />
        <i class="fas fa-search text-secondary"></i>
      </div>
      <div className="navbar__signin " onClick={handleDisplayState}>
        <Button btnName={loginText} />
        <div className="welcome">{greeting}</div>
      </div>
    </nav>
  );
};

export default NavBar;
