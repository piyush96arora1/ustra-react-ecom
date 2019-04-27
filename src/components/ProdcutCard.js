import React from "react";
import { Card } from "@material-ui/core";
import { Style } from "../style/Style";
import { CartButton } from "./CartButton";
import { ProductCardContainer } from "./emotion-style";

export class ProductCard extends React.Component {
  render() {
    let weight =
      this.props.product.weight != 0 && this.props.product.weight
        ? this.props.product.weight
        : null;
    let weightUnit = this.props.product.weight_unit;
    let hidePrice = this.props.product.price == this.props.product.final_price;
    let price = (
      <span className="MRP">
        <span>₹</span> {this.props.product.price}
      </span>
    );
    let finalPrice = (
      <span className="finalPrice">
        <span>₹</span> {this.props.product.final_price}
      </span>
    );
    return (
      <React.Fragment>
        <ProductCardContainer className="flex-lg-33 flex-gt-md-33 flex-xs-100 flex-gt-xs-50 flex-md-50  ">
          <Card style={Style.RootCard}>
            <div className="layout-column layout-xs-row">
              <div className="flex flex-xs-30 layout-row image layout-align-center-center  ">
                <div className="flex  hide-gt-xs ">
                  <img src={this.props.product.image_urls.x120} />
                </div>
                <div className="flex hide-xs layout-row layout-align-center-center ">
                  <img src={this.props.product.image_urls.x120} />
                </div>
              </div>

              <div className="flex layout-padding flex-xs-80 details_prod">
                <div className="layout-column">
                  <div className="flex layout-row layout-align-gt-xs-center name_margin">
                    <div style={Style.ProductName}>
                      {this.props.product.name}
                    </div>
                  </div>

                  <div className="flex layout-row layout-align-gt-xs-center ">
                    {weight ? (
                      <span>
                        ( {weight} {weightUnit} )
                      </span>
                    ) : <span className="hide-xs" style={{ minHeight: `1rem` }}>
                    
                  </span>}
                  </div>

                  <div className="layout-row margins layout-align-gt-xs-center">
                    <div className="margin_design">{finalPrice}</div>
                    {hidePrice ? "" : <div className="">{price}</div>}
                  </div>
                  <div className="flex layout-row  layout-align-gt-xs-center">
                    <CartButton available={this.props.product.is_in_stock} />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </ProductCardContainer>
      </React.Fragment>
    );
  }
}
