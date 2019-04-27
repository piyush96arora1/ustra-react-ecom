import React, { Component } from "react";
import "./App.css";

  import { connect } from "react-redux";
import TabView from "./components/TabView";
import ProductCardProvider from "./components/ProductCardProvider";
import { Style } from "./style/Style";

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    let content;
    if (this.props.state.hasError) {
      content = <div>UNABLE TO CONNECT</div>;
    } else {
      content = (
        <div className="layout-column App layout-gt-xs-align-space-between-none  ">
          <div style={Style.Heading}>Our Products</div>
          {this.props.state.categories && <TabView />}

          {this.props.state.categories && <ProductCardProvider />}
  
        </div>
      );
    }
    return <React.Fragment> {content}</React.Fragment>;
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
