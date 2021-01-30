import React, { useState } from "react";
import "../assets/css/ButtonCss.css";
let Button = (props) => {
  let { btnName, handleClick } = props;
  return (
    <div>
      <button
        className="customized-btn font-weight-bold pl-4 pr-4 d-block m-auto"
        onClick={handleClick}
      >
        {" "}
        {btnName}{" "}
      </button>
    </div>
  );
};

export default Button;
