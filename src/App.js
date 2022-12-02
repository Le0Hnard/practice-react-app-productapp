import React, { Component } from "react";
import { Provider } from "react-redux";
import dataStore from "./store";
import { Selector } from "./components/Selector";
import { ProductDisplay } from "./components/ProductDisplay";
import { SupplierDisplay } from "./components/SupplierDisplay";
import { StoreAccess } from "./store/StoreAccess";

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <StoreAccess store={dataStore} />
          </div>
          <div className="col">
            <Provider store={dataStore}>
              <Selector>
                <ProductDisplay name="Products" />
                <SupplierDisplay name="Suppliers" />
              </Selector>
            </Provider>
          </div>
        </div>
      </div>
    );
  }
}
