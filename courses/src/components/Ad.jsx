import React, { useState } from "react";
import "../assets/css/AdCss.css";
import adBackground from "../assets/img/home-wallpaper.jpg";
import Button from "./Button";
let Ad = () => {
  return (
    <div className="ad pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="ad__background col-12 col-md-6">
            <img src={adBackground} alt="" />
          </div>
          <div className="ad__info col-12 col-md-6">
            <p className="ad__info__discount text-light h3"> 60% Discount</p>
            <h2 className="ad__info__collection font-weight-bold pt-3 pb-3">
              Nike's Winter Collection{" "}
            </h2>
            <div className="col-5 col-md-4">
              <Button btnName={"Buy Now"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ad;
