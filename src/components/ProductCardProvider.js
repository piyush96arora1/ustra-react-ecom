import React from "react";
import { connect } from "react-redux";
import { Button, Grid } from "@material-ui/core";
import { ProductCard } from "./ProdcutCard";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
class ProductCardProvider extends React.Component {

 
  onViewMoreClicked = () => {
   this.props.onViewMoreClicked();
  };

  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (event) => {
  console.log( event.currentTarget.value)
    this.setState({ anchorEl: null });
  };
  render() {
    let MenueItemView=(this.props.state.categories.map((x)=><MenuItem value={x.category_name}onClick={this.handleClose}>{x.category_name}</MenuItem>))
    const { anchorEl } = this.state;
    let products = this.props.state.viewMoreClicked
      ? this.props.state.products
      : this.props.state.products.slice(0, 3);
      let ViewMore=(  this.props.state.products && (
        <Button onClick={this.onViewMoreClicked}>
          {this.props.state.viewMoreClicked ? "View Less" : "View More"}
        </Button>
      ))
    let ProductView = products.map(x => <ProductCard product={x} />);
    return (
      <React.Fragment>
        <div className="layout-column">
        <div className="layout-row layout-wrap" >
     
        {this.props.state.products && ProductView}
       
        </div>
        <div className="flex layout-row layout-align-center-center">       
          {ViewMore}
          <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
         {MenueItemView}
        </Menu>
      </div>
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
      onViewMoreClicked: () => dispatch({ type: "VIEW_MORE_CLICKED" })
    };
  };
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCardProvider);
