(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{203:function(e,t,a){e.exports=a(348)},208:function(e,t,a){},209:function(e,t,a){},348:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(18),o=a.n(c),l=(a(208),a(22)),s=a(24),i=a(27),u=a(25),p=a(28),d=(a(209),a(26)),m=a(53),y=a.n(m),h=a(52),f=a.n(h),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).onTabChange=function(e,t){a.props.fetchProduct(t)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.state.categories.map(function(e){return n.a.createElement(f.a,{key:e.category_id,value:e.category_id,label:e.category_name})});return n.a.createElement(n.a.Fragment,null,n.a.createElement(y.a,{value:this.props.state.selectedTab,onChange:this.onTabChange,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto"},e))}}]),t}(n.a.Component),b=Object(d.b)(function(e){return{state:e}},function(e){return{fetchProduct:function(t){return e({type:"FETCH_PRODUCT_ASYNC",payload:t})}}})(g),C=a(20),E={RootCard:{borderRadius:"0.3rem",margin:"0.3rem"},AddCart:{backgroundColor:"#4fcf64",color:"white",fontWeight:"bold"},OutStock:{backgroundColor:"grey"},ProductName:{fontWeight:"bold"},MRP:{textDecoration:"line-through",color:"grey"},ViewButton:{color:"#157ebc",border:"1px solid #157ebc"},Btns:{color:"grey",textTransform:"lowercase"}},v=function(e){var t=e.available?"ADD TO CART":"CURRENTLY OUT OF STOCK",a=e.available?E.AddCart:E.OutStock;return n.a.createElement(n.a.Fragment,null,n.a.createElement(C.a,{style:a,disable:e.available},t))},O=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=n.a.createElement("span",{style:E.MRP}," ",n.a.createElement("span",null,"\u20b9")," ",this.props.product.price),t=n.a.createElement("span",{style:E.ProductName}," ",n.a.createElement("span",null,"\u20b9")," ",this.props.product.final_price);return n.a.createElement(n.a.Fragment,null,n.a.createElement(C.c,{item:!0,xs:12,sm:6,md:4,lg:4},n.a.createElement(C.b,{style:E.RootCard},n.a.createElement("div",{className:"layout-column layout-xs-row "},n.a.createElement("div",{className:"flex flex-xs-50 layout-row layout-align-center-center  "},n.a.createElement("div",{className:"flex  hide-gt-xs "},n.a.createElement("img",{src:this.props.product.image_urls.x200})),n.a.createElement("div",{style:{marginLeft:"9rem"},className:"flex hide-xs"},n.a.createElement("img",{src:this.props.product.image_urls.x120}))),n.a.createElement("div",{className:"flex flex-xs-50"},n.a.createElement("div",{className:"layout-column layout-padding"},n.a.createElement("div",{className:"flex layout-row layout-align-center-center"},n.a.createElement("div",{style:E.ProductName}," ",this.props.product.name)),n.a.createElement("div",{className:"flex layout-row layout-xs-column layout-padding layout-align-center-center"},n.a.createElement("div",{item:!0,xs:6},t),n.a.createElement("div",{item:!0,xs:6}," ",e)),n.a.createElement("div",{className:"flex layout-row layout-align-center-center"},n.a.createElement(v,{available:this.props.product.is_in_stock}))))))))}}]),t}(n.a.Component),w=a(55),k=a.n(w),x=a(54),j=a.n(x),_=a(56),T=a.n(_),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).onViewMoreClicked=function(){a.props.onViewMoreClicked()},a.state={anchorEl:null},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(e,t){a.setState({anchorEl:null},function(){a.props.onMenuItemClicked(t)})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.state.viewMoreClicked?"View Less":"View More",a=this.props.state.viewMoreClicked?"[-]":"[+]",r=this.props.state.categories.map(function(t){return n.a.createElement(j.a,{key:t.category_id,onClick:function(a){return e.handleClose(a,t.category_id)}},t.category_name)}),c=this.state.anchorEl,o=this.props.state.viewMoreClicked?this.props.state.products:this.props.state.products.slice(0,3),l=this.props.state.products&&n.a.createElement(C.a,{style:E.ViewButton,onClick:this.onViewMoreClicked},this.props.state.viewMoreClicked?"View Less":"View More"),s=o.map(function(e){return n.a.createElement(O,{key:Math.random(),product:e})}),i=n.a.createElement("span",null," ",n.a.createElement(C.a,{"aria-owns":c?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick,style:E.Btns},"change"),n.a.createElement(k.a,{id:"simple-menu",anchorEl:c,open:Boolean(c),onClose:this.handleClose},r));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"layout-column  layout-margin"},n.a.createElement("div",{className:"layout-row layout-wrap"},this.props.state.products&&s),n.a.createElement("div",{className:"flex hide-xs layout-row layout-align-center-center"},l,n.a.createElement("div",null)),n.a.createElement("div",{className:"hide-gt-xs"},n.a.createElement(T.a,{color:"default",position:"static"},n.a.createElement(C.c,{container:!0,spacing:8,justify:"space-around"},n.a.createElement(C.c,{item:!0},i),n.a.createElement(C.c,{item:!0,onClick:this.onViewMoreClicked},n.a.createElement(C.a,{style:E.Btns},a,t)," "))))))}}]),t}(n.a.Component),N=Object(d.b)(function(e){return{state:e}},function(e){return{onViewMoreClicked:function(){return e({type:"VIEW_MORE_CLICKED"})},onMenuItemClicked:function(t){return e({type:"FETCH_PRODUCT_ASYNC",payload:t})}}})(M),A=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCategories()}},{key:"render",value:function(){return n.a.createElement("div",{className:"layout-column layout-align-space-between-none"},this.props.state.categories&&n.a.createElement(b,null),n.a.createElement(N,null))}}]),t}(r.Component),D=Object(d.b)(function(e){return{state:e}},function(e){return{fetchCategories:function(){return e({type:"FETCH_DATA_ASYNC"})}}})(A),R=a(42),V={categories:[],selectedCategory:"",products:[],viewMoreClicked:!1,selectedTab:"197"},F=a(32),P=a(117),S=a(21),H=a.n(S),B=a(29),I=a(77),U=a.n(I),L=function e(){Object(l.a)(this,e)};L.getProduct=function(e){return U.a.get("https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=".concat(e.payload))},L.getCategories=function(){return U.a.get("https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob")};var Y=H.a.mark(z),W=H.a.mark(G),K=H.a.mark(Q),J=H.a.mark(X),q=H.a.mark(Z);function z(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)("FETCH_DATA_ASYNC",Q);case 2:case"end":return e.stop()}},Y)}function G(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)("FETCH_PRODUCT_ASYNC",X);case 2:case"end":return e.stop()}},W)}function Q(){var e,t;return H.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(B.b)(L.getCategories);case 2:return e=a.sent,t=e.data,a.next=6,Object(B.c)({type:"FETCH_DATA",payload:{categories:t}});case 6:case"end":return a.stop()}},K)}function X(e){var t,a;return H.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(B.b)(L.getProduct,e);case 2:return t=r.sent,a=t.data,r.next=6,Object(B.c)({type:"FETCH_PRODUCT",payload:{products:a.products,id:e.payload}});case 6:case"end":return r.stop()}},J)}function Z(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([z(),G()]);case 2:case"end":return e.stop()}},q)}var $=Object(P.a)(),ee=Object(F.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,a=Object(R.a)({},e);switch(t.type){case"FETCH_DATA":a=Object(R.a)({},a,{categories:t.payload.categories.category_list,selectedCategory:t.payload.categories.category_list[0].category_name,products:t.payload.categories.product_list.products});break;case"FETCH_PRODUCT":var r=t.payload.products;a=Object(R.a)({},a,{products:r,viewMoreClicked:!1,selectedTab:t.payload.id});break;case"VIEW_MORE_CLICKED":var n=!a.viewMoreClicked;a=Object(R.a)({},a,{viewMoreClicked:n})}return a},Object(F.a)($));$.run(Z),o.a.render(n.a.createElement(d.a,{store:ee},n.a.createElement(D,null)),document.getElementById("root"))}},[[203,1,2]]]);
//# sourceMappingURL=main.c814ae43.chunk.js.map