(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n.p+"static/media/reload-icon.4a4436aa.svg"},34:function(e,t,n){e.exports=n(90)},39:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),o=n.n(c),l=(n(39),n(3)),i=n(4),s=n(7),u=n(5),h=n(8),d=(n(42),n(44),function(e){return Math.round(255*e)}),p=n(9),g=p.a.div({idle:{boxShadow:"0 0px 10px rgba(0,0,0,0)"},clicked:{boxShadow:"0 10px 20px rgba(180, 200, 230, 0.5)"}}),f=function(e){var t=e.item,n=e.onClick,a=e.clicked,c=function(e,t,n){var a=n/255,r=e/65535*360,c=a*(t/255),o=c*(1-Math.abs(r/60%2-1)),l=a-c,i=0,s=0,u=0;return r>=0&&r<60?(i=c,s=o,u=0):r>=60&&r<120?(i=o,s=c,u=0):r>=120&&r<180?(i=0,s=c,u=o):r>=180&&r<240?(i=0,s=o,u=c):r>=240&&r<300?(i=o,s=0,u=c):(i=c,s=0,u=o),{r:d(i+l),g:d(s+l),b:d(u+l)}}(t.state.hue,t.state.sat,t.state.bri),o=Math.round(t.state.bri/254*100);return r.a.createElement(g,{pose:a?"clicked":"idle",onClick:function(){n(t)},className:"light"},r.a.createElement("h3",{style:{textShadow:"0px 3px 10px rgba(0,0,0, .1)"}},t.name),r.a.createElement("div",{className:"description"},r.a.createElement("div",{className:"colorContainer"},r.a.createElement("p",null,"Color"),r.a.createElement("div",{style:{backgroundColor:"rgb(".concat(c.r,", ").concat(c.g,", ").concat(c.b,")")},className:"color"})),r.a.createElement("div",{className:"brightnessContainer"},r.a.createElement("p",null,"Brightness"),r.a.createElement("h2",null,o,"%"))))},m=n(6),b=n(11),E="http://192.168.2.100/api/MVDoFebKhagx0Qw5Hrh9cjTHn5y9JEktcilW5b3D/lights",v=n(10),C=n.n(v),k=function(e){return function(t){C.a.get(E+"/"+e).then(function(n){t({type:"SET_CURRENT_LIGHT",payload:Object(b.a)({},n.data,{id:e})}),t(function(e){C.a.get(E).then(function(t){e({type:"GET_LIGHTS",payload:t.data})}).catch(function(e){console.log(e)})})}).catch(function(e){console.log(e)})}},y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchInput:""},n.handleChange=function(e){n.setState({searchInput:e.target.value})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.searchInput,n=this.props,a=n.lights,c=n.currentLight,o=a.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}),l=""===t.replace(/\s/g,"")?a:o;return r.a.createElement("div",{className:"lightsContainer"},r.a.createElement("input",{onChange:this.handleChange,placeholder:"Search light"}),l.map(function(t,n){return r.a.createElement(f,{clicked:c.name===t.name,onClick:e.props.setCurrentLight,item:t,key:n})}))}}]),t}(a.Component),O=Object(m.b)(function(e){return{lights:e.lights,currentLight:e.currentLight}},{setCurrentLight:function(e){return{type:"SET_CURRENT_LIGHT",payload:e}}})(y),j=(n(69),function(e){var t=e.dir,n=e.size,a=e.style;return r.a.createElement("div",{className:"divider",style:Object(b.a)({backgroundColor:"rgb(240,240,240)",width:"ver"===t?"1px":n,height:"hor"===t?"1px":n},a)})}),L={height:200,borderRadius:15,boxShadow:"0 5px 50px rgba(180, 200, 230, 0.3)"},N=function(e){var t=e.children,n=e.className;return r.a.createElement("div",{className:n,style:L},t)},x=(n(71),p.a.div({checked:{backgroundColor:"rgb(83, 216, 83)"},unChecked:{backgroundColor:"rgb(216, 216, 216)"}})),S=p.a.div({checked:{x:23.5},unChecked:{x:0},enter:{scale:.8},exit:{scale:1}}),w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={enter:!1},n.toggleSwitch=function(){n.props.onClick(!n.props.checked)},n.onMouseExitEnter=function(){n.setState({enter:!n.state.enter})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({checked:this.props.defaultChecked})}},{key:"render",value:function(){var e=this.state.enter,t=this.props.checked;return r.a.createElement(x,{onClick:this.toggleSwitch,className:"switchContainer",pose:t?"checked":"unChecked"},r.a.createElement(S,{pose:e?"enter":"exit",onMouseEnter:this.onMouseExitEnter,onMouseLeave:this.onMouseExitEnter}))}}]),t}(a.Component),T=n(30),M=n.n(T),A=(n(88),p.a.div({alert:{backgroundColor:"rgb(244, 66, 92)",scale:1.2},noAlert:{backgroundColor:"rgb(66, 83, 175)",scale:1}})),I=p.a.div({loop:{backgroundColor:"rgb(244, 66, 92)",scale:1.2},noLoop:{backgroundColor:"rgb(66, 83, 175)",scale:1}}),R=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={sliderValue:0,alert:!1,colorLoop:!1},n.handleChange=function(e){n.props.toggleLight(n.props.light.id,e)},n.handleSliderChange=function(e){n.setState({sliderValue:e})},n.handleChangeComplete=function(e){var t=Math.round(e/100*254);n.props.setBrightness(n.props.light.id,t)},n.handleAlert=function(){n.props.setAlert(n.props.light.id,!n.state.alert)},n.handleEffect=function(){n.props.setEffect(n.props.light.id,!n.state.colorLoop)},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.light,n=void 0===t.state?0:Math.round(t.state.bri/254*100);e.light!==t&&(console.log("NOOW"),this.setState({sliderValue:n,alert:"lselect"===t.state.alert||"select"===t.state.alert,colorLoop:"colorloop"===t.state.effect}))}},{key:"render",value:function(){var e=this.props.light,t=this.state,n=t.sliderValue,a=t.alert,c=t.colorLoop;return r.a.createElement("div",{className:"infoCardsContainer"},r.a.createElement(N,{className:"brightnessCard"},r.a.createElement("div",{className:"brightnessCardHeader"},r.a.createElement("p",null,"Brightness"),r.a.createElement(w,{onClick:this.handleChange,checked:void 0!==e.state&&e.state.on})),r.a.createElement("div",{className:"brightnessFooter"},r.a.createElement("h1",null,"".concat(n,"%")),r.a.createElement(j,{dir:"hor",size:"100%"}),r.a.createElement("div",{className:"rangeContainer"},r.a.createElement(M.a,{maxValue:100,minValue:0,value:n,onChange:this.handleSliderChange,onChangeComplete:this.handleChangeComplete})))),r.a.createElement(N,null),r.a.createElement(N,{className:"effectCard"},r.a.createElement("p",null,"Effects"),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement(A,{pose:a?"alert":"noAlert",onClick:this.handleAlert},a?"Stop Alert":"Start Alert"),r.a.createElement(I,{pose:c?"loop":"noLoop",onClick:this.handleEffect},c?"Stop Colorloop":"Start Colorloop"))))}}]),t}(r.a.Component),_=Object(m.b)(function(e){return{light:e.currentLight}},{toggleLight:function(e,t){return function(n){C.a.put("".concat(E,"/").concat(e,"/state"),{on:t}).then(function(t){n(k(e))}).catch(function(e){console.log(e)})}},setBrightness:function(e,t){return function(n){C.a.put("".concat(E,"/").concat(e,"/state"),{bri:t}).then(function(t){n(k(e))})}},setAlert:function(e,t){return function(n){C.a.put("".concat(E,"/").concat(e,"/state"),{alert:t?"lselect":"none"}).then(function(t){n(k(e))})}},setEffect:function(e,t){return function(n){C.a.put("".concat(E,"/").concat(e,"/state"),{effect:t?"colorloop":"none"}).then(function(t){n(k(e))})}}})(R),D=n(31),G=n.n(D),H=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getCurrentDate=function(){var e=new Date,t=e.getDate(),n=["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],a=e.getFullYear();return t<10&&(t="0"+t),n<10&&(n="0"+n),e="".concat(n," ").concat(t,", ").concat(a)},n.handleReload=function(){n.props.reloadCurrentItem(n.props.light.id)},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"infoContainer"},r.a.createElement("div",{className:"header"},r.a.createElement("div",null,r.a.createElement("p",{className:"grey"},"Overview"),r.a.createElement("h1",null,this.props.light.name)),r.a.createElement("div",null,r.a.createElement("h2",{className:"date"},"Today\u30fb",this.getCurrentDate()),r.a.createElement("img",{onClick:this.handleReload,src:G.a,alt:"reload"}))),r.a.createElement(j,{dir:"hor",size:"100%",style:{marginTop:"30px"}}),r.a.createElement(_,null))}}]),t}(a.Component),V=Object(m.b)(function(e){return{light:e.currentLight}},{reloadCurrentItem:k})(H),J=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getLights()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement(O,null),r.a.createElement(j,{dir:"ver",size:"100vh"}),r.a.createElement(V,null)))}}]),t}(a.Component),B=Object(m.b)(null,{getLights:function(e){return function(e){C.a.get(E).then(function(t){e({type:"SET_CURRENT_LIGHT",payload:Object(b.a)({},t.data[1],{id:1})}),e({type:"GET_LIGHTS",payload:t.data})}).catch(function(e){console.log(e)})}}})(J),U=n(12),z=n(32),F=n(33),W=function(e){var t=1,n=[];for(var a in e)e.hasOwnProperty(a)&&n.push(Object(b.a)({},e[a],{id:t})),t++;return n},K=Object(F.createLogger)(),P=Object(U.c)({lights:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LIGHTS":return W(t.payload);default:return e}},currentLight:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"SET_CURRENT_LIGHT"===t.type?t.payload:e}}),Q=Object(U.d)(P,Object(U.a)(z.a,K));o.a.render(r.a.createElement(m.a,{store:Q},r.a.createElement(B,null)),document.getElementById("root"))}},[[34,2,1]]]);
//# sourceMappingURL=main.f345af62.chunk.js.map