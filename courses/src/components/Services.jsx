import React, { useState } from "react";
import Service from "./Service";

let data = [];
let renderServices = (icon, header, content) => {
  let ServicesArr = icon.map((index, i) => {
    return (
      <div key={i} className="col-4">
        <Service icon={index} header={header[i]} content={content[i]} />
      </div>
    );
  });

  return ServicesArr;
};
let Services = () => {
  let [icon, setIcon] = useState(["dolly", "unlock-alt", "infinity"]);
  let [header, setHeader] = useState([
    "free shipping method",
    "secure  receiving",
    "money charge",
  ]);
  let [content, setContent] = useState([
    "aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.",
    "aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.",
    "aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.",
  ]);
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-between">
        {renderServices(icon, header, content)}
      </div>
    </div>
  );
};

export default Services;
