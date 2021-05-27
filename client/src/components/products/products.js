import React from "react";
import Product from "./Product/Product";
import Aux from "../../hoc/Auxiliary";

const products = (props) => {
  const products = props.products.map((product, index) => {
    return (
      <Product
        title={product.title}
        imgUrl={product.imgUrl}
        key={product.id}
      ></Product>
    );
  });
  return (
    <Aux>
      <h2>Products</h2>
      {products}
    </Aux>
  );
};

export default products;
