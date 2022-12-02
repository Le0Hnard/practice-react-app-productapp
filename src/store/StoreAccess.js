import React, { Component } from "react";
import { startCreatingProduct } from "./stateActions";

export class StoreAccess extends Component {
  constructor(props) {
    super(props);
    this.selectors = {
      product: (storeState) => storeState.modelData.products[0],
      state: (storeState) => storeState.stateData,
    };
    this.state = this.selectData();
  }

  componentDidMount() {
    this.unsubscriber = this.props.store.subscribe(() =>
      this.handleDataStoreChange()
    );
  }

  componentWillUnmount() {
    this.unsubscriber();
  }

  selectData() {
    let storeState = this.props.store.getState();
    return Object.entries(this.selectors)
      .map(([k, v]) => [k, v(storeState)])
      .reduce((result, [k, v]) => ({ ...result, [k]: v }), {});
  }

  handleDataStoreChange() {
    let newData = this.selectData();
    Object.keys(this.selectors)
      .filter((key) => this.state[key] !== newData[key])
      .forEach((key) => this.setState({ [key]: newData[key] }));
  }

  render() {
    return (
      <div className="bg-info">
        <pre className="text-white">
          {JSON.stringify(this.selectData(), null, 2)}
        </pre>
      </div>
    );
  }
}
