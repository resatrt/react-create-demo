(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(7),o=n.n(i),s=(n(13),n(1)),r=n(2),l=n(4),u=n(3),h=n(5),m=(n(14),n(15),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={active:!1,detalX:0,detalY:0},e.myRef=c.a.createRef(),e}return Object(h.a)(t,e),Object(r.a)(t,[{key:"x",value:function(e){var t=e.clientX,n=e.clientY,a=this.myRef.current.getBoundingClientRect(),c=a.x,i=t-c-6,o=n-a.y-6;this.setState({active:!0,detalX:i,detalY:o})}},{key:"y",value:function(){this.setState({active:!1})}},{key:"render",value:function(){return c.a.createElement("button",{ref:this.myRef,className:"button",onClick:this.x.bind(this)},c.a.createElement("span",{className:"wrapper"}," ",this.props.value),!0===this.state.active?c.a.createElement("span",{className:"circle",onAnimationEnd:this.y.bind(this),style:{left:this.state.detalX,top:this.state.detalY}}):"")}}]),t}(a.Component)),p=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"z",value:function(e){console.log("\u5916\u9762\u7684\u51fd\u6570"),console.log(e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,{value:"\u6309\u94ae"}),c.a.createElement(m,{value:"\u6309\u94ae"}),c.a.createElement(m,{value:"\u6309\u94ae"}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.6b08fa5f.chunk.js.map