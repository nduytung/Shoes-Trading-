import React, { useState } from "react";
import Button from "./Button";
import "../assets/css/RegisterCss.css";
let Register = () => {
  return (
    <div>
      <div className="container">
        <div className="row register mb-5 pb-4 pt-4">
          <div className="col-1"></div>
          <div className="register__title text-capitalize col-5">
            get our latest news
            <p className="register__title__subscribe text-capitalize">
              {" "}
              subscribe now{" "}
            </p>
            <div className="col-6 float-right">
              <Button btnName={"Check it out"} />
            </div>
          </div>
          <div className="register__form col-6">
            <div className="register__form__input mt-3 mb-3">
              <input
                type="text"
                id="register__form__input__name"
                placeholder="Your name"
                className="form-control p-3"
                required
              />
              <div className="invalid-feedback">Please fill in your name</div>
            </div>
            <div className="register__form__input mt-3 mb-3">
              <input
                type="text"
                id="register__form__input__name"
                placeholder="You want to be called as..."
                className="form-control p-3"
                required
              />
              <div className="invalid-feedback">
                You must fill in this field
              </div>
            </div>
            <div className="register__form__input mt-3 mb-3">
              <input
                type="text"
                id="register__form__input__name"
                placeholder="Password"
                className="form-control p-3"
                required
              />
              <div className="invalid-feedback">Password is required !</div>
            </div>
            <div className="register__form__input mt-3 mb-3">
              <input
                type="text"
                id="register__form__input__name"
                placeholder="Type your password again"
                className="form-control p-3"
                required
              />
              <div className="invalid-feedback">Type your password again !</div>
            </div>
            <Button btnName="submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
