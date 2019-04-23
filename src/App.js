import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import { ProductCard } from "./components/ProdcutCard";

import { connect } from "react-redux";
import TabView from "./components/TabView";
import ProductCardProvider from "./components/ProductCardProvider";

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className="layout-column layout-align-space-between-none">
        {this.props.state.categories && <TabView />}

        <ProductCardProvider />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch({ type: "FETCH_DATA_ASYNC" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
