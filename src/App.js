import React, { Component } from "react";
import { Provider } from "react-redux";
import dataStore from "./store";
import { Selector } from "./components/Selector";
import { ProductDisplay } from "./components/ProductDisplay";
import { SupplierDisplay } from "./components/SupplierDisplay";

export default class App extends Component {
  render() {
    return (
      <Provider store={dataStore}>
        <Selector>
          <ProductDisplay name="Products" />
          <SupplierDisplay name="Suppliers" />
        </Selector>
      </Provider>
    );
  }
}
