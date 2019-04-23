import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {connect} from 'react-redux'

 class TabView extends React.Component{
   constructor(props){
     super(props)
     this.state={value:'197'}
   }
onTabChange=(event,value)=>{
  this.props.fetchProduct(value)
  this.setState({value})


}
    render(){
       
        let tabs=this.props.state.categories.map((x)=><Tab value={x.category_id}  label={x.category_name}/>)
        return(<React.Fragment>

            <Tabs
            value={this.state.value}
            onChange={this.onTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
          {tabs}
            
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
  