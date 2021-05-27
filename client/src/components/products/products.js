import React from "react";
import Product from "./Product/Product";
import Aux from "../../hoc/Auxiliary";
import classes from "./Products.css";

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
      <div className={classes.Products}>
        <h2>Products</h2>
        {products}
      </div>
    </Aux>
  );
};

export default products;
