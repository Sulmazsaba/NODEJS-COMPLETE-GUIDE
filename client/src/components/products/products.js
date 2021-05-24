import React from "react";
import Product from "./product/product";

const products = (props) => {
 return props.products.map((product, index) => {
    return <Product title={product.title} imgUrl={product.imgUrl} key={product.id}></Product>;
  });


};

export default products;
