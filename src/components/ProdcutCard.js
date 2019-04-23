import React from 'react'
import { Card, Grid, Button } from '@material-ui/core';
import { Style } from '../style/Style'
import { CartButton } from './CartButton'
import Hidden from '@material-ui/core/Hidden';
export class ProductCard extends React.Component {
    render() {
        let url=this.props.product.image_urls.x120
        let price = <span style={Style.MRP}> <span>₹</span> {this.props.product.price}</span>
        let finalPrice = <span style={Style.ProductName}> <span>₹</span> {this.props.product.final_price}</span>
        return (<React.Fragment>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card style={Style.RootCard}>

                    <div className="layout-column layout-xs-row " >
                        <div className="flex flex-xs-34 layout-row layout-align-center-center  ">
                        <div className="flex  hide-gt-xs ">
                          <img src={this.props.product.image_urls.x200} />
                           
                        </div>
                        <div style={{marginLeft:`9rem`}} className="flex hide-xs">
                          <img src={this.props.product.image_urls.x120} />
                           
                        </div>
                        </div>

                        <div className="flex flex-xs-60">
                            <div className="layout-column layout-padding" >
                            
                                 <div className="flex layout-row layout-align-center-center">
                                <div style={Style.ProductName}> {this.props.product.name}</div>
                                </div>
                          
                               
                                <div className="flex layout-row layout-xs-column layout-padding layout-align-center-center">
                                             <div item xs={6}>{finalPrice}</div>
                                        <div item xs={6}> {price}</div>
                                        
                                  
                                </div>
                                <div className="flex layout-row layout-align-center-center">
                                <CartButton available={this.props.product.is_in_stock} />
                                </div>
                            </div>
                        </div>

                    </div>
                </Card>
            </Grid>
        </React.Fragment>)
    }
}