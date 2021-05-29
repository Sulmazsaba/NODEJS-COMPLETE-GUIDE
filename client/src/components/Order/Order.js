import React from "react";
import OrderItems from "./OrderItems/OrderItems";
import classes from "./Order.css";

const order = (props) => {
  return (
    <div className={classes.Order}>
      <h1>Shopping Card</h1>
      <OrderItems items={props.shoppingCard.orderItems}></OrderItems>
      <p>total Price:{props.shoppingCard.totalPrice}</p>
    </div>
  );
};

export default order;
