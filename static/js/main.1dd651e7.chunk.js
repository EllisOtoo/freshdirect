(this.webpackJsonpsnapcarte=this.webpackJsonpsnapcarte||[]).push([[0],{42:function(e,t,c){},50:function(e,t,c){e.exports={completed:"showByList_completed__A9RXW"}},58:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),r=c(23),s=c.n(r),a=(c(58),c(13)),o=c(36),l=c(5),j=(c(42),Object(n.createContext)({})),d=c(19),b=c.p+"static/media/sampleLogo.91ca3b4f.jpg",x=c(20),p=c(51),u=c(17);var O=c(75),h=c(1);var m,g,f,y=function(e){var t=e.cart,c=e.runTotal,i=e.setMount,r=(e.showCart,e.setCart,Object(n.useRef)(null));return Object(h.jsxs)("div",{ref:r,style:{textAlign:"right",position:"absolute",right:"-15px",top:"33px",zIndex:"200",borderRadius:"10px",width:"25vw",padding:"10px 10px",backgroundColor:"lightGreen"},children:[Object(h.jsx)("ul",{style:{listStyle:"none",paddingLeft:"0"},children:t.map((function(e,t){return Object(h.jsxs)("li",{children:["".concat(e.name," ").concat(e.finalPr)," "]},t)}))}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{children:["Total Amount to Pay:"," ",Object(h.jsx)("span",{style:{fontWeight:"700"},children:t.length<1?0:"GHS ".concat(c())})]}),Object(h.jsx)(u.b,{to:"/checkout",children:Object(h.jsx)(O.a,{onClick:function(){return i(!1)},style:{margin:"10px 0"},variant:"success",children:"CheckOut"})})]})};x.a.nav(m||(m=Object(d.a)(["\n  // align-self: flex-end;\n  // position: relative;\n  // bottom: 10px;\n"]))),x.a.li(g||(g=Object(d.a)(["\n  // margin-right: 10px;\n  // //   color: #ff8c00;\n  // color: #000000;\n  // font-size: 13pt;\n"]))),x.a.ul(f||(f=Object(d.a)(["\n  // margin-left: 20px;\n"])));var v,S,w=function(e){var t=e.setMount;return Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{style:{display:"flex",justifyContent:"space-between",listStyle:"none",fontSize:"14pt"},children:[Object(h.jsx)(u.b,{to:"/contactUs",onClick:function(){return t(!1)},children:Object(h.jsx)("li",{children:"Contact Us"})}),Object(h.jsx)("li",{children:"About Us"}),Object(h.jsx)("li",{children:"Blog"}),Object(h.jsx)("li",{children:"Why Buy from Us"})]})})},C=c(76),k=c(77),N=c(78),F=x.a.img(v||(v=Object(d.a)(["\n  width: 200px;\n"])));x.a.nav(S||(S=Object(d.a)(["\n  height: 90px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 50px;\n  align-items: center;\n"])));var P=function(e){var t,c=e.cart,i=Object(n.useContext)(j).setMount,r=Object(n.useState)(!1),s=Object(l.a)(r,2),o=s[0],d=s[1],x=Object(n.useState)(0),O=Object(l.a)(x,2);return O[0],O[1],Object(h.jsx)(C.a,{children:Object(h.jsxs)(k.a,{className:"align-items-center",children:[Object(h.jsx)(N.a,{lg:4,xs:12,children:Object(h.jsx)(u.b,{onClick:function(){return i(!0)},to:"/",children:Object(h.jsx)(F,{src:b,alt:""})})}),Object(h.jsx)(N.a,{lg:6,xs:12,children:Object(h.jsx)(w,{setMount:i})}),Object(h.jsx)(N.a,{lg:1,xs:8}),Object(h.jsxs)(N.a,{lg:1,xs:4,children:[Object(h.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(h.jsx)(p.a,{style:{marginRight:"10px",fontSize:"16pt"}})," ",Object(h.jsxs)("p",{style:{marginRight:"7px",fontSize:"16pt"},children:[" ","Cart:"," "]}),Object(h.jsx)("div",(t={style:{fontSize:"16pt"},onClick:function(){d(!o)}},Object(a.a)(t,"style",{backgroundColor:"green",padding:"2px 10px",borderRadius:"50px",color:" white",cursor:"pointer",marginTop:"-12px"}),Object(a.a)(t,"children",c.length),t))]}),o?Object(h.jsx)(y,{showCart:o,setCart:d,cart:c,runTotal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return c.forEach((function(t,c){e+=t.finalPr})),console.log(e),e},setMount:i}):""]})]})})},T=c(80),L=(c.p,c.p+"static/media/slideOne.b4c21c4c.jpg");c.p;var R=function(){return Object(h.jsx)(T.a,{children:Object(h.jsx)(T.a.Item,{children:Object(h.jsx)("img",{className:"d-block w-100",src:L,alt:"First slide"})})})},B=c(8),z=c(81);var A=function(e){var t=e.name,c=e.description,i=e.featureList,r=e.imgsrc,s=e.kiloPrice,a=Object(n.useState)(0),o=Object(l.a)(a,2),d=o[0],b=o[1],x=function(e){return e*d},p=Object(n.useContext)(j),u=p.cart,m=p.addProduct;return Object(h.jsxs)(z.a,{style:{width:"360px",marginBottom:"10px"},children:[Object(h.jsx)(z.a.Img,{variant:"top",src:r}),Object(h.jsxs)(z.a.Body,{children:[Object(h.jsxs)(z.a.Title,{children:[t," ",Object(h.jsxs)("span",{style:{backgroundColor:"yellow",padding:"0px 10px",borderRadius:"10%"},children:["GHc ",s]})]}),Object(h.jsxs)(z.a.Text,{children:[Object(h.jsx)("ul",{style:{listStyle:"none"},children:i.map((function(e,t){return Object(h.jsx)("li",{children:"feature"},t)}))}),Object(h.jsx)("p",{children:c})]}),Object(h.jsx)(O.a,{variant:"success",onClick:function(){return m([].concat(Object(B.a)(u),[{name:t,description:c,finalPr:x(s)}]))},children:"Add To Cart"}),Object(h.jsxs)("span",{style:{fontWeight:"700",marginRight:"10px"},children:["Qty: ",d]}),Object(h.jsx)("span",{onClick:function(){return b(d+1)},style:{padding:"0px 5px",color:"green",cursor:"pointer",backgroundColor:"#eee",borderRadius:"50%",fontSize:"18pt"},children:"+"})," ",Object(h.jsx)("span",{onClick:function(){return b(d-1)},style:{padding:"0px 7px",color:"red",cursor:"pointer",backgroundColor:"#eee",borderRadius:"50%",fontSize:"18pt",marginLeft:"6px"},children:"-"})," ","GHS",Object(h.jsxs)("span",{style:{fontWeight:"500"},children:[" ",x(s)]})]})]})};c.p;var G=function(){return Object(h.jsx)("div",{style:Object(a.a)({textAlign:"center",backgroundColor:"orange",color:"black",left:"0px",bottom:"0px",width:"100%",marginTop:"20px"},"color","brown"),children:Object(h.jsx)("div",{children:"SnappyCarte 2021"})})};var I=function(){return Object(h.jsxs)("ul",{style:{display:"flex",listStyle:"none",fontSize:"16pt",width:"400px",margin:"20px auto",justifyContent:"space-around",padding:"10px 0"},children:[Object(h.jsx)(u.b,{to:"/",children:Object(h.jsx)("li",{children:"FreshFoods"})}),Object(h.jsx)(u.b,{to:"/groceries",children:Object(h.jsx)("li",{children:"Groceries"})}),Object(h.jsx)(u.b,{to:"/recipes",children:Object(h.jsx)("li",{children:"Recipes"})})]})},M=c(10),D=c.p+"static/media/tomato.b5cde400.jpg",E=c.p+"static/media/red-onion-500x500b.1892be44.jpg",H=c.p+"static/media/pepper.ab149b12.jpg",W=c.p+"static/media/kontomire-1-bundle.jpg.51ed3bed.png",U=c.p+"static/media/ginger.251950af.jpg",q=c.p+"static/media/gardenEggs.2c26686c.jpg",J=c.p+"static/media/tubers.1b56c9ad.jpg",_=c.p+"static/media/garlic.a5498815.jpg";var K=function(){return Object(h.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginBottom:"70px"},children:[Object(h.jsx)(A,{name:"Perpy's Fresh Tomatoes",description:"Sample Description",featureList:["Feature One","Feature Two"],kiloPrice:8,imgsrc:D}),Object(h.jsx)(A,{name:"Nadia's Fresh Onions",description:"Sample Description",featureList:["Feature One","Feature Two"],kiloPrice:3,imgsrc:E}),Object(h.jsx)(A,{name:"Felicity's Chilli Pepper",description:"Sample Description",featureList:["Feature One","Feature Two"],kiloPrice:5,imgsrc:H}),Object(h.jsx)(A,{name:"Johnsons's Kontomire",description:"Sample Description",featureList:["Feature One","Feature Two"],kiloPrice:3,imgsrc:W}),Object(h.jsx)(A,{name:"Kingley's Ginger",description:"Sample Description",featureList:["Feature One","Feature Two"],kiloPrice:2,imgsrc:U}),Object(h.jsx)(A,{name:"Bella's Garden Eggs",description:"Sample Description",featureList:["Feature One","Feature Two"],kiloPrice:2.5,imgsrc:q}),Object(h.jsx)(A,{name:"Musa's Yam",description:"Sample Description",featureList:["Feature One","Feature Two"],kiloPrice:10,imgsrc:J}),Object(h.jsx)(A,{name:"Josephine's Garlic",description:"Sample Description",featureList:["Feature One","Feature Two"],kiloPrice:1,imgsrc:_})]})};var Q=function(){return Object(h.jsx)("div",{children:"Groceries"})};var V=c(79);var X,Y=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Mobile Money"}),Object(h.jsx)("button",{children:"Pay Now"})]})},Z=x.a.div(X||(X=Object(d.a)(["\n  margin: 20px 20px;\n  height: 1000px;\n"])));var $,ee=function(e){var t=e.cart;return Object(h.jsxs)(Z,{style:{width:"70vw",margin:"0 auto"},children:[Object(h.jsxs)(V.a,{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Product Name"}),Object(h.jsx)("th",{scope:"col",children:"Price"}),Object(h.jsx)("th",{scope:"col",children:"Total"})]})}),Object(h.jsxs)("tbody",{children:[t.length<1?Object(h.jsx)("span",{style:{fontSize:"16pt"},children:"Cart is Empty!"}):t.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.description}),Object(h.jsx)("td",{children:"GHS ".concat(e.finalPr)})]})})),Object(h.jsxs)("tr",{children:[" ",Object(h.jsx)("td",{colSpan:2,children:" Total Items in Cart is: "})," ",Object(h.jsx)("td",{style:{fontWeight:"700"},colSpan:1,children:"GHS ".concat(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t.forEach((function(t,c){e+=t.finalPr})),console.log(e),e}())})]})]})]}),Object(h.jsx)(Y,{})]})};x.a.div($||($=Object(d.a)(['\n  //   display: none;\n  background-color: yellow;\n  padding: 10px 50px;\n  width: calc(100% / 3);\n  text-align: center;\n  font-family: "Roboto";\n  border-right: 1px solid #bfbb8c; ;\n'])));var te=function(){return Object(h.jsx)(C.a,{fluid:!0,style:{marginTop:"10px",backgroundColor:"yellow",padding:"5px"},children:Object(h.jsxs)(k.a,{children:[Object(h.jsx)(N.a,{style:{textAlign:"center"},children:"Snappy Delivery to Hostel"}),Object(h.jsx)(N.a,{style:{textAlign:"center"},children:"Pay On Delivery"}),Object(h.jsx)(N.a,{style:{textAlign:"center"},children:"100% Natural"})]})})},ce=c(25),ne=c(26),ie=c(50),re=c.n(ie),se={position:"absolute",top:"40%",color:"white",left:"15%",padding:"20px 20px",borderRadius:"10px",backgroundColor:"#006400",fontSize:"16pt",zIndex:100};var ae=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(""),s=Object(l.a)(r,2),a=s[0],o=s[1],j=Object(n.useState)(0),d=Object(l.a)(j,2),b=d[0],x=d[1];return Object(h.jsxs)("div",{style:se,children:[Object(h.jsx)("h2",{class:"userListSheet",children:"Shop with your List!"}),c.map((function(e,t){return Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"6px",borderBottom:"1px solid ForestGreen"},children:[Object(h.jsx)("div",{className:"item-name",onClick:function(){return function(e){var t=Object(B.a)(c);t[e].isSelected=!t[e].isSelected,i(t)}(t)},children:e.isSelected?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(ce.a,{icon:ne.a}),Object(h.jsx)("span",{style:{marginLeft:"10px"},className:re.a.completed,children:e.itemName})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(ce.a,{icon:ne.d}),Object(h.jsx)("span",{style:{marginLeft:"10px"},children:e.itemName})]})}),Object(h.jsxs)("div",{children:[Object(h.jsx)(ce.a,{onClick:function(){return function(e){var t=Object(B.a)(c);t[e].quantity--,i(t)}(t)},icon:ne.b}),Object(h.jsxs)("span",{children:[e.quantity," "]}),Object(h.jsx)(ce.a,{style:{marginLeft:"-2px"},onClick:function(){return function(e){var t=Object(B.a)(c);t[e].quantity++,i(t)}(t)},icon:ne.c})]})]})})),Object(h.jsxs)("div",{className:"add-item-box",style:{display:"flex",justifyContent:"space-between"},children:[Object(h.jsx)("input",{value:a,onChange:function(e){return o(e.target.value)},className:"add-item-input",placeholder:"Add an item...",style:{marginRight:"10px",padding:"0px 10px"}}),Object(h.jsx)(ce.a,{style:{position:"relative",top:"5px"},onClick:function(e){i([].concat(Object(B.a)(c),[{itemName:a,quantity:1,isSelected:!1}])),function(){var e=c.reduce((function(e,t){return e+t.quantity}),0);x(e)}(),o("")},icon:ne.e})]}),Object(h.jsxs)("div",{className:"total",style:{textAlign:"right"},children:["Total:",b]})]})};c(6),c(16);var oe=c(52);c(53),c(71);var le=function(){var e=Object(oe.a)();return e.register,e.errors,e.handleSubmit,e.reset,Object(h.jsxs)("div",{style:{height:"100vh",margin:"10vh auto"},className:"ContactForm",children:[Object(h.jsx)("h2",{style:{textAlign:"center"},children:"Contact Us Here:"}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-12 text-center",children:Object(h.jsx)("div",{className:"contactForm",children:Object(h.jsxs)("form",{id:"contact-form",noValidate:!0,children:[Object(h.jsxs)("div",{style:{marginBottom:"30px"},className:"row formRow",children:[Object(h.jsx)("div",{className:"col-6",children:Object(h.jsx)("input",{type:"text",name:"name",className:"form-control formInput",placeholder:"Name"})}),Object(h.jsx)("div",{className:"col-6",children:Object(h.jsx)("input",{type:"email",name:"email",className:"form-control formInput",placeholder:"Email address"})})]}),Object(h.jsx)("div",{style:{marginBottom:"30px"},className:"row formRow",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("input",{type:"text",name:"subject",className:"form-control formInput",placeholder:"Subject"})})}),Object(h.jsx)("div",{style:{marginBottom:"30px"},className:"row formRow",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("textarea",{rows:3,name:"message",className:"form-control formInput",placeholder:"Message"})})}),Object(h.jsx)("button",{className:"submit-btn",type:"submit",children:"Submit"})]})})})})})]})};var je=function(){var e,t=Object(n.useState)([]),c=Object(l.a)(t,2),i=c[0],r=c[1],s=Object(n.useState)(!0),d=Object(l.a)(s,2),b=d[0],x=d[1],p=Object(n.useState)(""),O=Object(l.a)(p,2);return O[0],O[1],Object(h.jsx)(j.Provider,{value:{addProduct:r,cart:i,setMount:x},children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(P,{cart:i,cartTotal:i.length}),Object(h.jsx)(te,{}),Object(h.jsx)(M.a,{path:"/contactUs",exact:!0,component:le}),Object(h.jsx)(M.a,(e={exact:!0,path:"/checkout"},Object(a.a)(e,"exact",!0),Object(a.a)(e,"render",(function(e){return Object(h.jsx)(ee,Object(o.a)(Object(o.a)({},e),{},{cart:i}))})),e)),b?Object(h.jsx)(R,{}):"",b?Object(h.jsx)(I,{}):"",b?Object(h.jsx)(ae,{}):"",Object(h.jsx)(M.a,{path:"/",exact:!0,component:K}),Object(h.jsx)(M.a,{path:"/groceries",component:Q}),Object(h.jsx)(G,{})]})})};c(72);s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(je,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.1dd651e7.chunk.js.map