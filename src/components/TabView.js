import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {connect} from 'react-redux'
import {ImageContainer} from './emotion-style'
 class TabView extends React.Component{
 
onTabChange=(event,value)=>{
  this.props.fetchProduct(value)
}

tabImage=(source,name)=>{
  return(
  <ImageContainer >
  <img className="image_style" src={source}></img>
  <div  className="centered">{name}</div>
</ImageContainer>)
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
  