import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../assets/css/ProductCardCss.css";
import "../assets/css/ProductsCss.css";

let fetchingAPI = async () => {
  let response = await fetch("http://localhost:3000/products");
  let data = await response.json();
  return data;
  // cái data trả về ở đây là 1 promise, nên khi gọi ra cần có then để handle cái này
};

let renderProducts = (items) => {
  let itemsArr = [];
  itemsArr = items.map((item) => {
    return (
      <div key={item.id} className="col-4">
        <ProductCard
          cardImg={item.img}
          cardName={item.name}
          cardPrice={item.price}
        />
      </div>
    );
  });
  return itemsArr;
};

let Products = () => {
  const [items, setItems] = useState([]);

  //tương tự cho componentDidMount
  useEffect(() => {
    fetchingAPI().then((data) => setItems(data));
  }, []);

  return (
    <div className="container">
      <hr />
      <h2 className="products__header h2 text-secondary text-capitalize ">
        available items
      </h2>
      {/*render items */}
      <div className="row">{renderProducts(items)}</div>
    </div>
  );
};

export default Products;
