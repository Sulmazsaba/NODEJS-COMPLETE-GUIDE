import React, { Component } from "react";
import Product from "./Product/Product";
import Aux from "../../hoc/Auxiliary";
import classes from "./Products.css";
import axios from "Axios";

class Products extends Component {
  componentDidMount() {
    axios.get()
    const products = props.products.map((product, index) => {
      return (
        <Product
          title={product.title}
          imgUrl={product.imgUrl}
          key={product.id}
          added={() => props.addedtoShoppingCard(product.id)}
        ></Product>
      );
    });
  }
  render() {
    return (
      <Aux>
        <div className={classes.Products}>
          <h2>Products</h2>
          {products}
        </div>
      </Aux>
    );
  }
}

export default Products;
