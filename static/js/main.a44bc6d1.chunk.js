(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{18:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(13),s=a.n(r),i=a(3),l=a(5),o=a(7),j=a(6),u=(a(18),a(0)),b=function(){return Object(u.jsxs)("header",{className:"app__header",children:[Object(u.jsx)("h1",{className:"app__title",children:Object(u.jsxs)("a",{href:"#",children:[Object(u.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(u.jsx)("nav",{className:"app__menu",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Comics"})})]})})]})},h=a(4),d=a.n(h),m=a(10),f=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=c5d6fc8b83116d92ed468ce36bac6c62",this._baseOffset=210,this.getResource=function(){var e=Object(m.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(m.a)(d.a.mark((function e(){var a,c,n=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:t._baseOffset,e.next=3,t.getResource("".concat(t._apiBase,"characters?limit=9&offset=").concat(a,"&").concat(t._apiKey));case 3:return c=e.sent,e.abrupt("return",c.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(m.a)(d.a.mark((function e(a){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters/").concat(a,"?").concat(t._apiKey));case 2:return c=e.sent,e.abrupt("return",t._transformCharacter(c.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url}}},O=function(){return Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(u.jsx)("g",{transform:"translate(80,50)",children:Object(u.jsx)("g",{transform:"rotate(0)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(u.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(u.jsx)("g",{transform:"rotate(45)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(u.jsx)("g",{transform:"translate(50,80)",children:Object(u.jsx)("g",{transform:"rotate(90)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(u.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(u.jsx)("g",{transform:"rotate(135)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(u.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(u.jsx)("g",{transform:"rotate(180)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(u.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(u.jsx)("g",{transform:"rotate(225)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(u.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(u.jsx)("g",{transform:"rotate(270)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(u.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(u.jsx)("g",{transform:"rotate(315)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},p=a.p+"static/media/error.42292aa1.gif",x=function(){return Object(u.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:p,alt:"error"})},v=(a(21),a.p+"static/media/mjolnir.61f31e18.png"),_=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={char:{},loading:!0,error:!1},e.marvelService=new f,e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharloading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=Math.floor(400*Math.random()+1011e3);e.onCharloading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,c=e.error,n=c?Object(u.jsx)(x,{}):null,r=a?Object(u.jsx)(O,{}):null,s=a||c?null:Object(u.jsx)(g,{char:t});return Object(u.jsxs)("div",{className:"randomchar",children:[n,r,s,Object(u.jsxs)("div",{className:"randomchar__static",children:[Object(u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(u.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(u.jsx)("button",{onClick:this.updateChar,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"try it"})}),Object(u.jsx)("img",{src:v,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(c.Component),g=function(e){var t=e.char,a=t.name,c=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i={"objectFit ":"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(i={objectFit:"contain"}),Object(u.jsxs)("div",{className:"randomchar__block",children:[Object(u.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img",style:i}),Object(u.jsxs)("div",{className:"randomchar__info",children:[Object(u.jsx)("p",{className:"randomchar__name",children:a}),Object(u.jsx)("p",{className:"randomchar__descr",children:c}),Object(u.jsxs)("div",{className:"randomchar__btns",children:[Object(u.jsx)("a",{href:r,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},y=_,N=a(12),k=a(2),C=(a(22),function(e){var t=Object(c.useState)([]),a=Object(k.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(!0),i=Object(k.a)(s,2),l=i[0],o=i[1],j=Object(c.useState)(!1),b=Object(k.a)(j,2),h=b[0],d=b[1],m=Object(c.useState)(!1),p=Object(k.a)(m,2),v=p[0],_=p[1],g=Object(c.useState)(210),y=Object(k.a)(g,2),C=y[0],w=y[1],T=Object(c.useState)(!1),S=Object(k.a)(T,2),F=S[0],E=S[1],I=new f;Object(c.useEffect)((function(){M()}),[]);var M=function(e){R(),I.getAllCharacters(e).then(A).catch(B)},R=function(){_(!0)},A=function(e){var t=!1;e.length<9&&(t=!0),r((function(t){return[].concat(Object(N.a)(t),Object(N.a)(e))})),o((function(e){return!1})),_((function(e){return!1})),w((function(e){return e+9})),E((function(e){return t}))},B=function(){d(!0),o((function(e){return!1}))},K=Object(c.useRef)([]),L=function(e){K.current.forEach((function(e){return e.classList.remove("char__item_selected")})),K.current[e].classList.add("char__item_selected"),K.current[e].focus()};var D=function(t){var a=t.map((function(t,a){var c={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(c={objectFit:"unset"}),Object(u.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return K.current[a]=e},onClick:function(){e.onCharSelected(t.id),L(a)},onKeyPress:function(c){" "!==c.key&&"Enter"!==c.key||(e.onCharSelected(t.id),L(a))},children:[Object(u.jsx)("img",{src:t.thumbnail,alt:t.name,style:c}),Object(u.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(u.jsx)("ul",{className:"char__grid",children:a})}(n),W=h?Object(u.jsx)(x,{}):null,J=l?Object(u.jsx)(O,{}):null,P=l||h?null:D;return Object(u.jsxs)("div",{className:"char__list",children:[W,J,P,Object(u.jsx)("button",{className:"button button__main button__long",disabled:v,style:{display:F?"none":"block"},onClick:function(){return M(C)},children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})}),w=(a(23),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(u.jsxs)("div",{className:"skeleton",children:[Object(u.jsxs)("div",{className:"pulse skeleton__header",children:[Object(u.jsx)("div",{className:"pulse skeleton__circle"}),Object(u.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"})]})]})}),T=(a(24),function(e){var t=e.char,a=t.name,c=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(l={objectFit:"contain"}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"char__basics",children:[Object(u.jsx)("img",{src:n,alt:a,style:l}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"char__info-name",children:a}),Object(u.jsxs)("div",{className:"char__btns",children:[Object(u.jsx)("a",{href:r,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(u.jsx)("div",{className:"char__descr",children:c}),Object(u.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(u.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(u.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),S=function(e){var t=Object(c.useState)(null),a=Object(k.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(!1),i=Object(k.a)(s,2),l=i[0],o=i[1],j=Object(c.useState)(!1),b=Object(k.a)(j,2),h=b[0],d=b[1],m=new f;Object(c.useEffect)((function(){p()}),[e.charId]);var p=function(){var t=e.charId;t&&(_(),m.getCharacter(t).then(v).catch(g))},v=function(e){o(!1),r(e)},_=function(){o(!0)},g=function(){d(!0),o(!1)},y=n||l||h?null:Object(u.jsx)(w,{}),N=h?Object(u.jsx)(x,{}):null,C=l?Object(u.jsx)(O,{}):null,S=l||h||!n?null:Object(u.jsx)(T,{char:n});return Object(u.jsxs)("div",{className:"char__info",children:[y,N,C,S]})},F=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(l.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(x,{}):this.props.children}}]),a}(c.Component),E=a.p+"static/media/vision.067d4ae1.png",I=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={selectedChar:null},e.onCharSelected=function(t){e.setState({selectedChar:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(b,{}),Object(u.jsxs)("main",{children:[Object(u.jsx)(y,{}),Object(u.jsxs)("div",{className:"char__content",children:[Object(u.jsx)(C,{onCharSelected:this.onCharSelected}),Object(u.jsx)(F,{children:Object(u.jsx)(S,{charId:this.state.selectedChar})})]}),Object(u.jsx)("img",{className:"bg-decoration",src:E,alt:"vision"})]})]})}}]),a}(c.Component);a(25);s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.a44bc6d1.chunk.js.map