import React, { useState } from "react";
import Button from "./Button";
import "../assets/css/ProductCardCss.css";

let ProductCard = (props) => {
  let { cardImg, cardName, cardPrice, cardPhone } = props;
  return (
    <div className="container mb-4 pb-3 pt-3 card border-0">
      <div className="row text-center justify-content-center">
        <div className="card__img-holder">
          <img src={cardImg} alt="no picture to display" />
        </div>
        <div className="card__rating col-12 pt-4 pb-3 ">
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <div className="card__name col-12 text-capitalize"> {cardName}</div>
        <div className="card__info col-12 row align-items-center mt-2">
          <div className="card__price col-6 font-weight-bold">
            {" "}
            {cardPrice}{" "}
          </div>
          <div className="card__contact col-6">
            <Button btnName={"Contact"} />
          </div>
        </div>
        <div className="card__more col-12 pt-4">
          <Button btnName={"See more"} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
