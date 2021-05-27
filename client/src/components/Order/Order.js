import React from "react";
import OrderItems from "./OrderItems/OrderItems";
import classes from "./Order.css";

const order = (props) => {
  return (
    <div className={classes.Order}>
     <h1 className={classes.Dynh1}>Shopping Card</h1> 
      <OrderItems title="bag" price="2000$" count="2"></OrderItems>
    </div>
  );
};

export default order;
