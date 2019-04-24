import React from "react";
import { Card } from "@material-ui/core";
import { Style } from "../style/Style";
import { CartButton } from "./CartButton";

export class ProductCard extends React.Component {
  render() {
    let price = (
      <span style={Style.MRP}>
       
        <span>₹</span> {this.props.product.price}
      </span>
    );
    let finalPrice = (
      <span style={Style.ProductName}>
      
        <span>₹</span> {this.props.product.final_price}
      </span>
    );
    return (
      <React.Fragment>
       <div className="flex-lg-33 flex-gt-md-33 flex-xs-100 flex-gt-xs-50 flex-md-50">
          <Card style={Style.RootCard}>
            <div className="layout-column layout-xs-row ">
              <div className="flex flex-xs-50 layout-row layout-align-center-center  ">
                 <div className="flex  hide-gt-xs ">
                  <img src={this.props.product.image_urls.x200} />
                </div> 
                <div className="flex hide-xs layout-row layout-align-center-center ">
                  <img src={this.props.product.image_urls.x120} />
                </div>
              </div>

              <div className="flex flex-xs-50">
                <div className="layout-column">
                  <div className="flex layout-row layout-padding layout-align-center-center">
                    <div style={Style.ProductName}>
                      
                    {this.props.product.name}
                    </div>
                  </div>
                  
                  <div className="flex layout-row layout-xs-column layout-margin  layout-align-center-center">
                    <div item xs={6}>
                      {finalPrice}
                    </div>
                    <div item xs={6}>
                     
                      {price}
                    </div>
                  </div>
                  <div className="flex layout-row layout-padding  layout-align-center-center">
                    <CartButton available={this.props.product.is_in_stock} />
                  </div>
                </div>
              </div>
            </div>
          </Card>
          </div>
      </React.Fragment>
    );
  }
}
