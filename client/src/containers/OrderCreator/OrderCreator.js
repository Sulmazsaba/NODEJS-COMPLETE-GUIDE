import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Order from "../../components/Order/Order";
import Products from "../../components/Products/Products";
class OrderCreator extends Component {
  state = {
    shoppingCard: {
      orderItems: [
        {
          id: 2,
          count: 2,
        },
        {
          id: 3,
          count: 1,
        },
      ],
      totalPrice: "2100",
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

  addToShoppingCardHandler = (id) => {
    const newCount = 0;
    const totalPrice = this.state.shoppingCard.totalPrice;
    const item = this.state.shoppingCard.orderItems.find((item) => {
      return item.id === id;
    });
    const price = this.state.products.find((product) => {
      return product.id === id;
    });
    var itemIsInShoppingCard = item !== undefined;
    if (!itemIsInShoppingCard) {
      newCount = 1;
    } else {
      newCount = item.count + 1;
    }
    totalPrice += price;

    // this.setState(shoppingCard.orderItems:[],)
  };

  removeFromShoppingCardHandler = (id) => {};
  render() {
    const disabledIfo = { ...this.state.orderItems };
    // for (let item of disabledIfo) disabledIfo = disabledIfo.count <= 0;
    return (
      <Aux>
        <Order shoppingCard={this.state.shoppingCard}></Order>
        <Products
          products={this.state.products}
          addedtoShoppingCard={this.addToShoppingCardHandler}
          removedFromShoppingCard={this.removeFromShoppingCardHandler}
        ></Products>
      </Aux>
    );
  }
}

export default OrderCreator;
