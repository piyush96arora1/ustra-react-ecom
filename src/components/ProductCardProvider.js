import React from "react";
import { connect } from "react-redux";
import { Button, Grid } from "@material-ui/core";
import { ProductCard } from "./ProdcutCard";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Style } from "../style/Style";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import {ProductContainer, AppBarContainer} from './emotion-style'
class ProductCardProvider extends React.Component {
  onViewMoreClicked = () => {
    this.props.onViewMoreClicked();
  };

  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (event, val) => {
    this.setState({ anchorEl: null }, () => {
      this.props.onMenuItemClicked(val);
    });
  };
  render() {
    let text = this.props.state.viewMoreClicked ? "View Less" : "View More";
    let sign = this.props.state.viewMoreClicked ? "[-]" : "[+]";
    let MenueItemView = this.props.state.categories.map(x => (
      <MenuItem
        key={x.category_id}
        onClick={e => this.handleClose(e, x.category_id)}
      >
        {x.category_name}
      </MenuItem>
    ));
    const { anchorEl } = this.state;
    let products = this.props.state.viewMoreClicked
      ? this.props.state.products
      : this.props.state.products.slice(0, 3);
    let ViewMore = this.props.state.products && (
      <Button style={Style.ViewButton} onClick={this.onViewMoreClicked}>
        {this.props.state.viewMoreClicked ? "View Less" : "View More"}
      </Button>
    );
    let ProductView = products.map(x => (
      <ProductCard key={x.orig_url} product={x} />
    ));
    let MenuButton = (
      <span>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          style={Style.Btns}
        >
          change
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {MenueItemView}
        </Menu>
      </span>
    );
    return (
      <React.Fragment>
        <div className="layout-column">
          <ProductContainer className="layout-row layout-wrap ">
            {this.props.state.products && ProductView}
          </ProductContainer>
        
        <div style={{marginTop:`1rem`}} className="flex hide-xs layout-row layout-align-center-center">
        {this.props.state.fetched && this.props.state.products.length>3 &&ViewMore}

            <div />
          </div>
          <div className="hide-gt-xs">
           {this.props.state.fetched && <AppBarContainer><Paper color="default" position="static">
              <Grid container  justify="space-around">
                <Grid item>{MenuButton}</Grid>
                {this.props.state.products.length>3 && <Grid item onClick={this.onViewMoreClicked}>
                  <Button style={Style.Btns}>
                    {sign}
                    {text}
                  </Button>
                </Grid>}
              </Grid>
              
            </Paper>
            </AppBarContainer>}
          </div>
        </div>
      </React.Fragment>
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
    onViewMoreClicked: () => dispatch({ type: "VIEW_MORE_CLICKED" }),
    onMenuItemClicked: payload =>
      dispatch({ type: "FETCH_PRODUCT_ASYNC", payload: payload })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCardProvider);
