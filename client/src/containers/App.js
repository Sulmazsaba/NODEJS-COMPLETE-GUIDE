import Layout from "../components/Layout/Layout";
import { Component } from "react";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log("app js constructor");
  //   this.state = {
  //     products: [
  //       {
  //         id: 1,
  //         title: "shoe",
  //         imgUrl:"bag.jpg"
  //       },
  //       {
  //         id: 2,
  //         title: "bag",
  //       },
  //       {
  //         id: 3,
  //         title: "neckless",
  //       },
  //     ],
  //     otherState: "some other value",
  //     showProducts: false,
  //   };
  // }

  // static getDerivedStateFormProps(props, state) {
  //   console.log(props);
  //   return state;
  // }

  // componentWillUnmount() {}
  // componentDidMount() {}
  // render() {
  //   let products = this.state.products;
  //   if (this.state.products.length > 0) {
  //     products = <Products products={products}
  //     deleted={this.deleteProductHandler}
  //     ></Products>;
  //   }
  //   return (
  //     <div>
  //       <h1>{this.props.appTitle}</h1>
  //       {products}
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        <Layout>
          <p>hello from layout</p>
        </Layout>
      </div>
    );
  }
}

export default App;
