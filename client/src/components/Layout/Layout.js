import React from "react";
import Aux from "../../hoc/Auxiliary";
import Classes from "./Layout.css";

const layout = (props) => (
  <Aux>
    <div>Toolbar , SideDrawer, Bsckdrop</div>
    <main className={Classes.Content}>{props.children}</main>
  </Aux>
);
export default layout;
