import React from 'react'
import {Button} from '@material-ui/core'
import { Style } from '../style/Style';
export const CartButton =(props)=>{
let text=props.available?'ADD TO CART':'OUT OF STOCK'
    let style=props.available?Style.AddCart:Style.OutStock
    return(<React.Fragment>
        
        <Button style={style} disabled={!props.available} >{text}</Button>

    </React.Fragment>)

}