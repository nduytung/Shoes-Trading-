import React, { useState } from "react";

let Service = (props) => {
  const { icon, header, content } = props;
  return (
    <div className="col-12 service text-center">
      <i class={`fas fa-${icon} h2`}></i>

      <h3 className="service__header text-capitalize ">{header}</h3>
      <p className="service__content text-secondary">{content}</p>
    </div>
  );
};

export default Service;
