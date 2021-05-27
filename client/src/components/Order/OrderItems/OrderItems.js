import React, { Component } from "react";
import PropTypes from "prop-types";

class OrderItems extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imgUrl}></img>
        <p>{this.props.title}</p>
        <p>count : {this.props.count}</p>
        <p>price : {this.props.price}</p>
      </div>
    );
  }
}

OrderItems.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  count: PropTypes.number,
  price: PropTypes.string,
};

export default OrderItems;
