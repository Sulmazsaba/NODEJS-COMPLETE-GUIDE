import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Order from '../../components/Order/Order'
class OrderCreator extends Component {
  render() {
    return (
      <Aux>
        <Order></Order>
        <div>Order  Controls</div>
      </Aux>
    );
  }
}

export default OrderCreator;
