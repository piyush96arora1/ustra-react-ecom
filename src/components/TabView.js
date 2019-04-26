import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {connect} from 'react-redux'
import { Style } from '../style/Style';
import './design.css'
 class TabView extends React.Component{
 
onTabChange=(event,value)=>{
  this.props.fetchProduct(value)
}

tabImage=(prop,name)=>{
  return(
    <div class="container">
  <img style={{backgroundSize:'cover',margin:`0.3rem`,borderRadius:`4px` ,backfaceVisibility:`hidden`,backgroundPosition:'center',width:`120px`,height:'65px'}} src={prop}></img>
  <div style={{fontFamily:`Clear Sans`}}class="centered">{name}</div>
</div>)
}
    render(){
      
        let tabs=this.props.state.categories.map((x)=>
        <Tab  className="hide-gt-xs" key={x.category_id} value={x.category_id} 
         icon={this.tabImage(x.category_image,x.category_name)} /> 
         )
         let tabsMain=this.props.state.categories.map((x)=>
         <Tab className="hide-xs"  key={x.category_id} value={x.category_id} 
          label={x.category_name}/>
          
         
          )
        return(<React.Fragment>

            <Tabs
            value={this.props.state.selectedTab}
            onChange={this.onTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
         {tabs}
            {tabsMain}
            
          </Tabs>
        </React.Fragment>)
    }


}
const mapStateToProps = state => {
    return {
      state: state
    };
  };

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: (value) =>
      dispatch({ type: "FETCH_PRODUCT_ASYNC",payload:value})
  };
}
  
  export default connect(mapStateToProps,mapDispatchToProps)(TabView);
  