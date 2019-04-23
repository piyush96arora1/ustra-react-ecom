import React from 'react'
import {Button} from '@material-ui/core'
import { Style } from '../style/Style';
export const CartButton =(props)=>{
let text=props.available?'ADD TO CART':'CURRENTLY OUT OF STOCK'
    let style=props.available?Style.AddCart:Style.OutStock
    return(<React.Fragment>
        
        <Button style={style} disable={props.available} >{text}</Button>

    </React.Fragment>)

}