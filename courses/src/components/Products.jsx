import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "../assets/css/ProductsCss.css";

let Products = () => {
  return (
    <div className="container">
      <h2 className="h2 products__header text-capitalize">
        latest trading items
      </h2>
      <hr />
      <div className="products__container row">
        <div className="col-4">
          <ProductCard
            cardImg={""}
            cardName={"nike air jordan 1 UNC"}
            cardPrice={"$1000"}
            cardPhone={"xxxx"}
          />
        </div>
        <div className="col-4">
          <ProductCard
            cardImg={""}
            cardName={"nike air jordan 1 UNC"}
            cardPrice={"$1000"}
            cardPhone={"xxxx"}
          />
        </div>
        <div className="col-4">
          <ProductCard
            cardImg={""}
            cardName={"nike air jordan 1 UNC"}
            cardPrice={"$1000"}
            cardPhone={"xxxx"}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
