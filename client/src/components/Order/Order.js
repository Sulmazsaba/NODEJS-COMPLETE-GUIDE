import React from "react";
import OrderItems from "./OrderItems/OrderItems";
import classes from "./Order.css";

const order = (props) => {
  return (
    <div className={classes.Order}>
      <OrderItems title="bag" price="2000$" count="2"></OrderItems>
    </div>
  );
};

export default order;
