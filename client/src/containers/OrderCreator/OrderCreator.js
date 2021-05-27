import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Order from "../../components/Order/Order";
import Products from "../../components/Products/Products";
import classes from "./OrderCreator.css";
class OrderCreator extends Component {
  state = {
    orderItems: {
      title: "bag",
      price: "2000$",
      count: 2,
    },
    products: [
      {
        id: 1,
        title: "shoe",
        imgUrl: "bag.jpg",
      },
      {
        id: 2,
        title: "bag",
      },
      {
        id: 3,
        title: "neckless",
      },
    ],
  };
  render() {
    return (
      <Aux>
        <Order orderItems={this.state.orderItems}></Order>
        <Products  products={this.state.products}></Products>
      </Aux>
    );
  }
}

export default OrderCreator;
