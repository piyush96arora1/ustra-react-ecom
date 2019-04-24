import React, { Component } from "react";
import "./App.css";

  import { connect } from "react-redux";
import TabView from "./components/TabView";
import ProductCardProvider from "./components/ProductCardProvider";

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
        <div className="layout-column layout-align-space-between-none">
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
