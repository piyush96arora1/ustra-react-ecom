(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{205:function(e,t,a){e.exports=a(350)},210:function(e,t,a){},211:function(e,t,a){},350:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),i=(a(210),a(22)),s=a(25),l=a(28),u=a(26),p=a(29),m=(a(211),a(27)),d=a(56),g=a.n(d),h=a(42),f=a.n(h),b=a(44),y=a(45);function E(){var e=Object(b.a)(["\nletter-spacing: 0.4px;\n  .name_margin {\n    margin-bottom: 0.5rem;\n    text-align: center;\n    color: #000000;\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 0.4px;\n    overflow: hidden;\n  }\n  .details_prod {\n    margin-left: 0rem;\n  }\n  .margins {\n    margin-bottom: 0.5rem;\n  }\n  .margin_design {\n    margin-right: 1rem;\n  \n  }\n  .MRP {\n    text-decoration: line-through;\n    font-size: 0.8rem;\n    font-weight: 500;\n    letter-spacing: 0.4px;\n    color: #757575;\n  }\n  .finalPrice {\n    font-weight: bold;\n    letter-spacing: 0.4px;\n  }\n  .weight_product{\n      font-size:0.8rem;\n      color:grey;\n  }\n  .rating{\n    font-size:0.8rem;\n    color:grey;\n  }\n  .ratingstar{\n    font-size:0.7rem;\n    color:grey;\n  }\n  margin: 0rem;\n  @media only screen and (max-width: 599px) {\n    .margins {\n      margin-top: 0.5rem;\n      margin-bottom: 0.5rem;\n    }\n    .name_margin {\n      margin-bottom: 0.5rem;\n      text-align: left;\n    }\n    .details_prod {\n      margin-left: 1rem;\n    }\n    .image {\n      padding: 1.1rem;\n    }\n  }\n"]);return E=function(){return e},e}function v(){var e=Object(b.a)(["\n  @media only screen and (max-width: 599px) {\n  }\n"]);return v=function(){return e},e}function x(){var e=Object(b.a)(["\nletter-spacing: 0.4px;\n  @media only screen and (max-width: 599px) {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n"]);return x=function(){return e},e}function C(){var e=Object(b.a)(["\n  position: relative;\n  text-align: center;\n  color: white;\n  .centered {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-family: Clear Sans;\n  }\n  .image_style {\n    background-size: cover;\n    margin: 0.2rem;\n    border-radius: 4px;\n    backface-visibility: hidden;\n    background-position: center;\n    width: 120px;\n    height: 65px;\n  }\n"]);return C=function(){return e},e}var w=Object(y.a)("div")(C()),O=Object(y.a)("div")(x()),_=Object(y.a)("span")(v()),k=Object(y.a)("div")(E()),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).onTabChange=function(e,t){a.props.fetchProduct(t)},a.tabImage=function(e,t){return r.a.createElement(w,null,r.a.createElement("img",{className:"image_style",src:e}),r.a.createElement("div",{className:"centered"},t))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.state.categories.map(function(t){return r.a.createElement(f.a,{className:"hide-gt-xs",key:t.category_id,value:t.category_id,icon:e.tabImage(t.category_image,t.category_name)})}),a=this.props.state.categories.map(function(e){return r.a.createElement(f.a,{className:"hide-xs",key:e.category_id,value:e.category_id,label:e.category_name})});return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{value:this.props.state.selectedTab,onChange:this.onTabChange,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto"},t,a))}}]),t}(r.a.Component),N=Object(m.b)(function(e){return{state:e}},function(e){return{fetchProduct:function(t){return e({type:"FETCH_PRODUCT_ASYNC",payload:t})}}})(j),T=a(20),R={RootCard:{borderRadius:"0.3rem",fontFamily:"Clear Sans"},AddCart:{backgroundColor:"#4fcf64",color:"white",fontWeight:"bold",minWidth:"145px"},OutStock:{backgroundColor:"grey",cursor:"default",color:"white",fontWeight:"bold",minWidth:"145px"},ProductName:{fontSize:"14px"},MRP:{textDecoration:"line-through",color:"grey"},ViewButton:{color:"#157ebc",border:"1px solid #157ebc"},Btns:{color:"grey",textTransform:"lowercase"},Tab:{height:"12px",width:"12px",border:"1px solid black"},Heading:{fontWeight:"bold",margin:"1rem",fontFamily:"Clear Sans",fontSize:"1.2rem",letterSpacing:"0.4px"},FontFamiliy:{fontFamily:"Clear Sans"}},M=function(e){var t=e.available?"ADD TO CART":"OUT OF STOCK",a=e.available?R.AddCart:R.OutStock;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{style:a,disabled:!e.available},t))},A=a(57),F=a.n(A),P=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=0!=this.props.product.weight&&this.props.product.weight?this.props.product.weight:null,t=this.props.product.weight_unit,a=this.props.product.price==this.props.product.final_price,n=r.a.createElement("span",{className:"MRP"},r.a.createElement("span",null,"\u20b9")," ",this.props.product.price),c=r.a.createElement("span",{className:"finalPrice"},r.a.createElement("span",null,"\u20b9")," ",this.props.product.final_price);return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{className:"flex-lg-33 flex-gt-md-33 flex-xs-100 flex-gt-xs-50 flex-md-50  "},r.a.createElement(T.b,{style:R.RootCard},r.a.createElement("div",{className:"layout-column layout-xs-row"},r.a.createElement("div",{className:"flex flex-xs-30 layout-row image layout-align-center-center  "},r.a.createElement("div",{className:"flex  hide-gt-xs "},r.a.createElement("img",{src:this.props.product.image_urls.x120})),r.a.createElement("div",{className:"flex hide-xs layout-row layout-align-center-center "},r.a.createElement("img",{src:this.props.product.image_urls.x120}))),r.a.createElement("div",{className:"flex layout-padding flex-xs-80 details_prod"},r.a.createElement("div",{className:"layout-column"},r.a.createElement("div",{className:"flex layout-row layout-align-gt-xs-center name_margin"},r.a.createElement("div",{className:"flex-85",style:R.ProductName},this.props.product.name),0!=this.props.product.rating&&this.props.product.rating&&r.a.createElement("div",{className:"flex-15 rating"},this.props.product.rating,r.a.createElement(F.a,{className:"ratingstar"},"star"))),r.a.createElement("div",{className:"flex weight_product layout-row layout-align-gt-xs-center "},e?r.a.createElement("span",null,"( ",e," ",t," )"):r.a.createElement("span",{className:"hide-xs",style:{minHeight:"1rem"}})),r.a.createElement("div",{className:"layout-row margins layout-align-gt-xs-center"},r.a.createElement("div",{className:"margin_design"},c),a?"":r.a.createElement("div",{className:""},n)),r.a.createElement("div",{className:"flex layout-row  layout-align-gt-xs-center"},r.a.createElement(M,{available:this.props.product.is_in_stock}))))))))}}]),t}(r.a.Component),S=a(59),D=a.n(S),V=a(58),H=a.n(V),B=a(36),I=a.n(B),z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onViewMoreClicked=function(){a.props.onViewMoreClicked()},a.state={anchorEl:null},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(e,t){a.setState({anchorEl:null},function(){a.props.onMenuItemClicked(t)})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.state.viewMoreClicked?"View Less":"View More",a=this.props.state.viewMoreClicked?"[-]":"[+]",n=this.props.state.categories.map(function(t){return r.a.createElement(H.a,{key:t.category_id,onClick:function(a){return e.handleClose(a,t.category_id)}},t.category_name)}),c=this.state.anchorEl,o=this.props.state.viewMoreClicked?this.props.state.products:this.props.state.products.slice(0,3),i=this.props.state.products&&r.a.createElement(T.a,{style:R.ViewButton,onClick:this.onViewMoreClicked},this.props.state.viewMoreClicked?"View Less":"View More"),s=o.map(function(e){return r.a.createElement(P,{key:e.orig_url,product:e})}),l=r.a.createElement("span",null,r.a.createElement(T.a,{"aria-owns":c?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick,style:R.Btns},"change"),r.a.createElement(D.a,{id:"simple-menu",anchorEl:c,open:Boolean(c),onClose:this.handleClose},n));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"layout-column"},r.a.createElement(O,{className:"layout-row layout-wrap "},this.props.state.products&&s),r.a.createElement("div",{style:{marginTop:"1rem"},className:"flex hide-xs layout-row layout-align-center-center"},this.props.state.fetched&&this.props.state.products.length>3&&i,r.a.createElement("div",null)),r.a.createElement("div",{className:"hide-gt-xs"},this.props.state.fetched&&r.a.createElement(_,null,r.a.createElement(I.a,{color:"default",position:"static"},r.a.createElement(T.c,{container:!0,justify:"space-around"},r.a.createElement(T.c,{item:!0},l),this.props.state.products.length>3&&r.a.createElement(T.c,{item:!0,onClick:this.onViewMoreClicked},r.a.createElement(T.a,{style:R.Btns},a,t))))))))}}]),t}(r.a.Component),U=Object(m.b)(function(e){return{state:e}},function(e){return{onViewMoreClicked:function(){return e({type:"VIEW_MORE_CLICKED"})},onMenuItemClicked:function(t){return e({type:"FETCH_PRODUCT_ASYNC",payload:t})}}})(z),W=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCategories()}},{key:"render",value:function(){var e;return e=this.props.state.hasError?r.a.createElement("div",null,"UNABLE TO CONNECT"):r.a.createElement("div",{className:"layout-column App layout-gt-xs-align-space-between-none  "},r.a.createElement("div",{style:R.Heading},"Our Products"),this.props.state.categories&&r.a.createElement(N,null),this.props.state.categories&&r.a.createElement(U,null)),r.a.createElement(r.a.Fragment,null," ",e)}}]),t}(n.Component),L=Object(m.b)(function(e){return{state:e}},function(e){return{fetchCategories:function(){return e({type:"FETCH_DATA_ASYNC"})}}})(W),Y=a(38),K={categories:[],selectedCategory:"",products:[],viewMoreClicked:!1,selectedTab:"197",fetched:!1,hasError:!1},J=a(32),q=a(119),G=a(21),Q=a.n(G),X=a(23),Z=a(80),$=a.n(Z),ee=function e(){Object(i.a)(this,e)};ee.getProduct=function(e){return $.a.get("https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=".concat(e))},ee.getCategories=function(){return $.a.get("https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob")};var te=Q.a.mark(oe),ae=Q.a.mark(ie),ne=Q.a.mark(se),re=Q.a.mark(le),ce=Q.a.mark(ue);function oe(){return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.d)("FETCH_DATA_ASYNC",se);case 2:case"end":return e.stop()}},te)}function ie(){return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.d)("FETCH_PRODUCT_ASYNC",le);case 2:case"end":return e.stop()}},ae)}function se(){var e,t;return Q.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(X.b)(ee.getCategories);case 3:return e=a.sent,t=e.data,a.next=7,Object(X.c)({type:"FETCH_DATA",payload:{categories:t}});case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(X.c)({type:"ERROR_ERR"});case 13:case"end":return a.stop()}},ne,null,[[0,9]])}function le(e){var t,a,n;return Q.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(e.type,t=e.payload,console.log(t),r.prev=2,"backdropClick"==t){r.next=10;break}return r.next=6,Object(X.b)(ee.getProduct,t);case 6:return a=r.sent,n=a.data,r.next=10,Object(X.c)({type:"FETCH_PRODUCT",payload:{products:n.products,id:t}});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(2),r.next=16,Object(X.c)({type:"ERROR_ERR"});case 16:case"end":return r.stop()}},re,null,[[2,12]])}function ue(){return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.a)([oe(),ie()]);case 2:case"end":return e.stop()}},ce)}var pe=Object(q.a)(),me=Object(J.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,a=Object(Y.a)({},e);switch(t.type){case"FETCH_DATA":a=Object(Y.a)({},a,{categories:t.payload.categories.category_list,selectedCategory:t.payload.categories.category_list[0].category_name,products:t.payload.categories.product_list.products,fetched:!0});break;case"FETCH_PRODUCT":var n=t.payload.products;a=Object(Y.a)({},a,{products:n,viewMoreClicked:!1,selectedTab:t.payload.id,fetched:!0});break;case"VIEW_MORE_CLICKED":var r=!a.viewMoreClicked;a=Object(Y.a)({},a,{viewMoreClicked:r});break;case"ERROR_ERR":a=Object(Y.a)({},a,{hasError:!0})}return a},Object(J.a)(pe));pe.run(ue),o.a.render(r.a.createElement(m.a,{store:me},r.a.createElement(L,null)),document.getElementById("root"))}},[[205,1,2]]]);
//# sourceMappingURL=main.f865ad70.chunk.js.map