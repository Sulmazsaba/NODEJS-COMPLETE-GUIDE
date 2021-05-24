import "./App.css";
import Products from "../components/products/products";
import { Component } from "react";

class App extends Component {
  state = {
    products: [
      {
        title: "shoe",
      },
      {
        title: "bag",
      },
      {
        title: "neckless",
      },
    ],
  };
  render() {
    let products = this.state.products;
    if (this.state.products.length > 0) {
      products = <Products products={products}></Products>;
    }
    return (
      <div>
        <h1>{this.props.appTitle}</h1>
        {products}
      </div>
    );
  }
}

export default App;
