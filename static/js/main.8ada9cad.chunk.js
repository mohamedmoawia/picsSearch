(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),s=a(6),u=a.n(s),o=a(17),l=a(2),m=a(3),p=a(4),h=a(5),f=a(18),g=a.n(f).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID GIp8dqWGCMDPy2ZBM9Wk9X6UhN66WwPmoF8FiPLbw7Y"}}),b=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setSpans=function(){if(null!=n.imageRef.current){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/10);n.setState({spans:t})}},n.state={spans:0},n.imageRef=r.a.createRef(),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement("div",{className:"image-card",style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,alt:t,src:a.regular}))}}]),a}(r.a.Component),d=(a(42),function(e){var t=e.images.map((function(e){return r.a.createElement(b,{key:e.id,image:e})}));return r.a.createElement("div",{className:"image-list"},t)}),v=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={input:""},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.input)},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"form-group my-2 bg-red text-white",style:{width:"75%",marginLeft:"auto",marginRight:"auto",border:"1px solid aliceblue",padding:15,boxShadow:"1px 3px 1px 1px grey"}},r.a.createElement("label",null,"Image Search:"),r.a.createElement("input",{type:"text",value:this.state.input,onChange:this.onInputChange,className:"form-control"})))}}]),a}(r.a.Component),y=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchSubmit=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("/search/photos",{params:{query:a}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{onSubmit:this.onSearchSubmit}),r.a.createElement(d,{images:this.state.images}))}}]),a}(r.a.Component);c.a.render(r.a.createElement(y,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8ada9cad.chunk.js.map