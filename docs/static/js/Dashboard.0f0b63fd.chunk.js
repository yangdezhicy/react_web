(this.webpackJsonpreact_web=this.webpackJsonpreact_web||[]).push([[11],{1168:function(e,t,a){},1169:function(e,t,a){},1170:function(e,t,a){},1359:function(e,t,a){"use strict";a.r(t);a(233);var n=a(89),r=(a(234),a(62)),i=a(49),s=a(0),o=a.n(s),c=(a(814),a(68),a(6)),u=a(815),l=a.n(u),p=(a(817),[{type:"New Visits",icon:"user",num:102400,color:"#40c9c6"},{type:"Messages",icon:"message",num:81212,color:"#36a3f7"},{type:"Purchases",icon:"pay-circle",num:9280,color:"#f4516c"},{type:"Shoppings",icon:"shopping-cart",num:13600,color:"#f6ab40"}]),d=function(e){var t=e.handleSetLineChartData;return o.a.createElement("div",{className:"panel-group-container"},o.a.createElement(n.a,{gutter:40,className:"panel-group"},p.map((function(e,a){return o.a.createElement(r.a,{key:a,lg:6,sm:12,xs:12,onClick:t.bind(void 0,e.type),className:"card-panel-col"},o.a.createElement("div",{className:"card-panel"},o.a.createElement("div",{className:"card-panel-icon-wrapper"},o.a.createElement(c.a,{className:e.type,style:{fontSize:55,color:e.color},type:e.icon})),o.a.createElement("div",{className:"card-panel-description"},o.a.createElement("p",{className:"card-panel-text"},e.type),o.a.createElement(l.a,{end:e.num,start:0,className:"card-panel-num"}))))}))))},m=a(7),f=a(43),h=a(44),v=a(56),y=a(55),b=a(17),g=a(499),w=a(101),O=function(e){Object(v.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={chart:null},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(w.a)(this.initChart.bind(this),300)(),window.addEventListener("resize",(function(){return e.resize()}))}},{key:"componentWillReceiveProps",value:function(e){e.sidebarCollapsed!==this.props.sidebarCollapsed&&this.resize(),e.chartData!==this.props.chartData&&Object(w.a)(this.initChart.bind(this),300)()}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"resize",value:function(){var e=this.state.chart;e&&Object(w.a)(e.resize.bind(this),300)()}},{key:"dispose",value:function(){var e=this;this.state.chart&&(window.removeEventListener("resize",(function(){return e.resize()})),this.setState({chart:null}))}},{key:"setOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.expectedData,a=e.actualData;this.state.chart.setOption({backgroundColor:"#fff",xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],boundaryGap:!1,axisTick:{show:!1}},grid:{left:10,right:10,bottom:10,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:["expected","actual"]},series:[{name:"expected",itemStyle:{normal:{color:"#FF005A",lineStyle:{color:"#FF005A",width:2}}},smooth:!0,type:"line",data:t,animationDuration:2800,animationEasing:"cubicInOut"},{name:"actual",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:a,animationDuration:2800,animationEasing:"quadraticOut"}]})}},{key:"initChart",value:function(){var e=this;this.el&&this.setState({chart:g.a.init(this.el,"macarons")},(function(){e.setOptions(e.props.chartData)}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.height,r=t.width,i=t.styles;return o.a.createElement("div",{className:a,ref:function(t){return e.el=t},style:Object(m.a)(Object(m.a)({},i),{},{height:n,width:r})})}}]),a}(s.Component);O.defaultProps={width:"100%",height:"350px",styles:{},className:""};var E=Object(b.b)((function(e){return e.app}))(O),x=function(e){Object(v.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={chart:null},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(w.a)(this.initChart.bind(this),300)(),window.addEventListener("resize",(function(){return e.resize()}))}},{key:"componentWillReceiveProps",value:function(e){e.sidebarCollapsed!==this.props.sidebarCollapsed&&this.resize(),e.chartData!==this.props.chartData&&Object(w.a)(this.initChart.bind(this),300)()}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"resize",value:function(){var e=this.state.chart;e&&Object(w.a)(e.resize.bind(this),300)()}},{key:"dispose",value:function(){var e=this;this.state.chart&&(window.removeEventListener("resize",(function(){return e.resize()})),this.setState({chart:null}))}},{key:"setOptions",value:function(){this.state.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}}],series:[{name:"pageA",type:"bar",stack:"vistors",barWidth:"60%",data:[79,52,200,334,390,330,220],animationDuration:3e3},{name:"pageB",type:"bar",stack:"vistors",barWidth:"60%",data:[80,52,200,334,390,330,220],animationDuration:3e3},{name:"pageC",type:"bar",stack:"vistors",barWidth:"60%",data:[30,52,200,334,390,330,220],animationDuration:3e3}]})}},{key:"initChart",value:function(){var e=this;this.el&&this.setState({chart:g.a.init(this.el,"macarons")},(function(){e.setOptions(e.props.chartData)}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.height,r=t.width,i=t.styles;return o.a.createElement("div",{className:a,ref:function(t){return e.el=t},style:Object(m.a)(Object(m.a)({},i),{},{height:n,width:r})})}}]),a}(s.Component);x.defaultProps={width:"100%",height:"300px",styles:{},className:""};var j=Object(b.b)((function(e){return e.app}))(x),k=function(e){Object(v.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={chart:null},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(w.a)(this.initChart.bind(this),300)(),window.addEventListener("resize",(function(){return e.resize()}))}},{key:"componentWillReceiveProps",value:function(e){e.sidebarCollapsed!==this.props.sidebarCollapsed&&this.resize(),e.chartData!==this.props.chartData&&Object(w.a)(this.initChart.bind(this),300)()}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"resize",value:function(){var e=this.state.chart;e&&Object(w.a)(e.resize.bind(this),300)()}},{key:"dispose",value:function(){var e=this;this.state.chart&&(window.removeEventListener("resize",(function(){return e.resize()})),this.setState({chart:null}))}},{key:"setOptions",value:function(){this.state.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},radar:{radius:"66%",center:["50%","42%"],splitNumber:8,splitArea:{areaStyle:{color:"rgba(127,95,132,.3)",opacity:1,shadowBlur:45,shadowColor:"rgba(0,0,0,.5)",shadowOffsetX:0,shadowOffsetY:15}},indicator:[{name:"Sales",max:1e4},{name:"Administration",max:2e4},{name:"Information Techology",max:2e4},{name:"Customer Support",max:2e4},{name:"Development",max:2e4},{name:"Marketing",max:2e4}]},legend:{left:"center",bottom:"10",data:["Allocated Budget","Expected Spending","Actual Spending"]},series:[{type:"radar",symbolSize:0,areaStyle:{normal:{shadowBlur:13,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1}},data:[{value:[5e3,7e3,12e3,11e3,15e3,14e3],name:"Allocated Budget"},{value:[4e3,9e3,15e3,15e3,13e3,11e3],name:"Expected Spending"},{value:[5500,11e3,12e3,15e3,12e3,12e3],name:"Actual Spending"}],animationDuration:3e3}]})}},{key:"initChart",value:function(){var e=this;this.el&&this.setState({chart:g.a.init(this.el,"macarons")},(function(){e.setOptions(e.props.chartData)}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.height,r=t.width,i=t.styles;return o.a.createElement("div",{className:a,ref:function(t){return e.el=t},style:Object(m.a)(Object(m.a)({},i),{},{height:n,width:r})})}}]),a}(s.Component);k.defaultProps={width:"100%",height:"300px",styles:{},className:""};var V=Object(b.b)((function(e){return e.app}))(k),N=function(e){Object(v.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={chart:null},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(w.a)(this.initChart.bind(this),300)(),window.addEventListener("resize",(function(){return e.resize()}))}},{key:"componentWillReceiveProps",value:function(e){e.sidebarCollapsed!==this.props.sidebarCollapsed&&this.resize(),e.chartData!==this.props.chartData&&Object(w.a)(this.initChart.bind(this),300)()}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"resize",value:function(){var e=this.state.chart;e&&Object(w.a)(e.resize.bind(this),300)()}},{key:"dispose",value:function(){var e=this;this.state.chart&&(window.removeEventListener("resize",(function(){return e.resize()})),this.setState({chart:null}))}},{key:"setOptions",value:function(){this.state.chart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:["Industries","Technology","Forex","Gold","Forecasts"]},calculable:!0,series:[{name:"WEEKLY WRITE ARTICLES",type:"pie",roseType:"radius",radius:[15,95],center:["50%","38%"],data:[{value:320,name:"Industries"},{value:240,name:"Technology"},{value:149,name:"Forex"},{value:100,name:"Gold"},{value:59,name:"Forecasts"}],animationEasing:"cubicInOut",animationDuration:3e3}]})}},{key:"initChart",value:function(){var e=this;this.el&&this.setState({chart:g.a.init(this.el,"macarons")},(function(){e.setOptions(e.props.chartData)}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.height,r=t.width,i=t.styles;return o.a.createElement("div",{className:a,ref:function(t){return e.el=t},style:Object(m.a)(Object(m.a)({},i),{},{height:n,width:r})})}}]),a}(s.Component);N.defaultProps={width:"100%",height:"300px",styles:{},className:""};var R=Object(b.b)((function(e){return e.app}))(N),S=(a(531),a(529)),D=(a(236),a(173)),C=a(39);function A(){return Object(C.a)({url:"/transaction/list",method:"get"})}var F=[{title:"Order_No",dataIndex:"order_no",key:"order_no",width:200},{title:"Price",dataIndex:"price",key:"price",width:195,render:function(e){return"$".concat(e)}},{title:"Status",key:"tag",dataIndex:"tag",width:100,render:function(e){return o.a.createElement(D.a,{color:"pending"===e?"magenta":"green",key:e},e)}}],z=function(e){Object(v.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r)))._isMounted=!1,e.state={list:[]},e.fetchData=function(){A().then((function(t){var a=t.data.data.items.slice(0,13);e._isMounted&&e.setState({list:a})}))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchData()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return o.a.createElement(S.a,{columns:F,dataSource:this.state.list,pagination:!1})}}]),a}(s.Component),P=(a(487),a(486)),T=(a(757),a(811)),M=(a(1168),function(e){var t=e.image,a=e.zIndex,n=e.width,r=e.height,i=e.className;return o.a.createElement("div",{className:"pan-item ".concat(i),style:{zIndex:a,height:r,width:n}},o.a.createElement("div",{className:"pan-info"},o.a.createElement("div",{className:"pan-info-roles-container"},e.children)),o.a.createElement("img",{src:t,className:"pan-thumb",alt:""}))});M.defaultProps={width:"150px",height:"150px",zIndex:1,className:""};var I=M,L=(a(1169),function(e){var t=e.className,a=e.text;return o.a.createElement("a",{className:"mallki ".concat(t),href:"#/"},a,o.a.createElement("span",{"data-letters":a}),o.a.createElement("span",{"data-letters":a}))});L.defaultProps={className:"",text:"vue-element-admin"};var U=L,_=(a(1170),function(e){Object(v.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.avatar;return o.a.createElement("div",{className:"box-card-component"},o.a.createElement(P.a,{cover:o.a.createElement("img",{alt:"example",src:"https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png",style:{height:"480px"}})},o.a.createElement("div",{style:{position:"relative"}},o.a.createElement(I,{image:e,className:"panThumb"}),o.a.createElement(U,{className:"mallki-text",text:"\u96be\u51c9\u70ed\u8840"}),o.a.createElement("div",{style:{paddingTop:"35px"},className:"progress-item"},o.a.createElement("span",null,"Vue"),o.a.createElement(T.a,{percent:70})),o.a.createElement("div",{className:"progress-item"},o.a.createElement("span",null,"JavaScript"),o.a.createElement(T.a,{percent:18})),o.a.createElement("div",{className:"progress-item"},o.a.createElement("span",null,"Css"),o.a.createElement(T.a,{percent:12})),o.a.createElement("div",{className:"progress-item"},o.a.createElement("span",null,"ESLint"),o.a.createElement(T.a,{percent:100})))))}}]),a}(s.Component)),W=Object(b.b)((function(e){return e.user}))(_),q={"New Visits":{expectedData:[100,120,161,134,105,160,165],actualData:[120,82,91,154,162,140,145]},Messages:{expectedData:[200,192,120,144,160,130,140],actualData:[180,160,151,106,145,150,130]},Purchases:{expectedData:[80,100,121,104,105,90,100],actualData:[120,90,100,138,142,130,130]},Shoppings:{expectedData:[130,140,141,142,145,150,160],actualData:[120,82,91,154,162,140,130]}};t.default=function(){var e=Object(s.useState)(q["New Visits"]),t=Object(i.a)(e,2),a=t[0],c=t[1];return o.a.createElement("div",{className:"app-container"},o.a.createElement("a",{href:"https://github.com/NLRX-WJC/react-antd-admin-template",target:"_blank",rel:"noopener noreferrer",className:"github-corner"}),o.a.createElement(d,{handleSetLineChartData:function(e){return c(q[e])}}),o.a.createElement(E,{chartData:a,styles:{padding:12,backgroundColor:"#fff",marginBottom:"25px"}}),o.a.createElement(n.a,{gutter:32},o.a.createElement(r.a,{xs:24,sm:24,lg:8},o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(V,null))),o.a.createElement(r.a,{xs:24,sm:24,lg:8},o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(R,null))),o.a.createElement(r.a,{xs:24,sm:24,lg:8},o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(j,null)))),o.a.createElement(n.a,{gutter:8},o.a.createElement(r.a,{xs:24,sm:24,md:24,lg:12,xl:12,style:{paddingRight:"8px",marginBottom:"30px"}},o.a.createElement(z,null)),o.a.createElement(r.a,{xs:24,sm:24,md:24,lg:12,xl:12,style:{marginBottom:"30px"}},o.a.createElement(W,null))))}},499:function(e,t,a){"use strict";var n=a(468),r=a.n(n);a(538),a(552),a(553),a(556),a(559),a(560);a(583),t.a=r.a},814:function(e,t,a){},815:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),r=a(0),i=a(103),s=a(816);function o(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var c=o(n),u=o(r),l=o(i),p=o(s);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){v(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?g(e):t}function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=y(e);if(t){var r=y(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return w(this,a)}}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,r,i=[],s=!0,o=!1;try{for(a=a.call(e);!(s=(n=a.next()).done)&&(i.push(n.value),!t||i.length!==t);s=!0);}catch(c){o=!0,r=c}finally{try{s||null==a.return||a.return()}finally{if(o)throw r}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var j=function(e,t){var a=t.decimal,n=t.decimals,r=t.duration,i=t.easingFn,s=t.end,o=t.formattingFn,c=t.prefix,u=t.separator,l=t.start,d=t.suffix,m=t.useEasing;return new p.default(e,l,s,n,r,{decimal:a,easingFn:i,formattingFn:o,separator:u,prefix:c,suffix:d,useEasing:m,useGrouping:!!u})},k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,a,n,r=O(i);function i(){var e;f(this,i);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return v(g(e=r.call.apply(r,[this].concat(a))),"checkProps",(function(t){var a=e.props,n=a.start,r=a.suffix,i=a.prefix,s=a.redraw,o=a.duration,c=a.separator,u=a.decimals,l=a.decimal,p=a.className;return o!==t.duration||n!==t.start||r!==t.suffix||i!==t.prefix||c!==t.separator||u!==t.decimals||l!==t.decimal||p!==t.className||s})),v(g(e),"createInstance",(function(){return"function"===typeof e.props.children&&l.default(e.containerRef.current&&(e.containerRef.current instanceof HTMLElement||e.containerRef.current instanceof SVGTextElement||e.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),j(e.containerRef.current,e.props)})),v(g(e),"pauseResume",(function(){var t=g(e),a=t.reset,n=t.restart,r=t.update,i=e.props.onPauseResume;e.instance.pauseResume(),i({reset:a,start:n,update:r})})),v(g(e),"reset",(function(){var t=g(e),a=t.pauseResume,n=t.restart,r=t.update,i=e.props.onReset;e.instance.reset(),i({pauseResume:a,start:n,update:r})})),v(g(e),"restart",(function(){e.reset(),e.start()})),v(g(e),"start",(function(){var t=g(e),a=t.pauseResume,n=t.reset,r=t.restart,i=t.update,s=e.props,o=s.delay,c=s.onEnd,u=s.onStart,l=function(){return e.instance.start((function(){return c({pauseResume:a,reset:n,start:r,update:i})}))};o>0?e.timeoutId=setTimeout(l,1e3*o):l(),u({pauseResume:a,reset:n,update:i})})),v(g(e),"update",(function(t){var a=g(e),n=a.pauseResume,r=a.reset,i=a.restart,s=e.props.onUpdate;e.instance.update(t),s({pauseResume:n,reset:r,start:i})})),v(g(e),"containerRef",u.default.createRef()),e}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,a=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==a||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.end;return this.checkProps(e)||t!==e.end}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.end,n=t.preserveValue;this.checkProps(e)&&(this.instance.reset(),this.instance=this.createInstance(),this.start()),a!==e.end&&(n||this.instance.reset(),this.instance.update(a))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=e.style,r=this.containerRef,i=this.pauseResume,s=this.reset,o=this.restart,c=this.update;return"function"===typeof t?t({countUpRef:r,pauseResume:i,reset:s,start:o,update:c}):u.default.createElement("span",{className:a,ref:r,style:n})}}])&&h(t.prototype,a),n&&h(t,n),i}(r.Component);v(k,"propTypes",{decimal:c.default.string,decimals:c.default.number,delay:c.default.number,easingFn:c.default.func,end:c.default.number.isRequired,formattingFn:c.default.func,onEnd:c.default.func,onStart:c.default.func,prefix:c.default.string,redraw:c.default.bool,separator:c.default.string,start:c.default.number,startOnMount:c.default.bool,suffix:c.default.string,style:c.default.object,useEasing:c.default.bool,preserveValue:c.default.bool}),v(k,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var V={innerHTML:null};t.default=k,t.useCountUp=function(e){var t=m(m({},k.defaultProps),e),a=t.start,n=t.formattingFn,i=E(r.useState("function"===typeof n?n(a):a),2),s=i[0],o=i[1],c=r.useRef(null),u=r.useRef(null),l=function(){var e=c.current;if(null!==e)return e;var a=function(){var e=j(V,t),a=e.options.formattingFn;return e.options.formattingFn=function(){var e=a.apply(void 0,arguments);o(e)},e}();return c.current=a,a},p=function(){var e=t.onReset;l().reset(),e({pauseResume:f,start:d,update:h})},d=function e(){var a=t.onStart,n=t.onEnd;l().reset(),l().start((function(){n({pauseResume:f,reset:p,start:e,update:h})})),a({pauseResume:f,reset:p,update:h})},f=function(){var e=t.onPauseResume;l().pauseResume(),e({reset:p,start:d,update:h})},h=function(e){var a=t.onUpdate;l().update(e),a({pauseResume:f,reset:p,start:d})};return r.useEffect((function(){var e=t.delay,a=t.onStart,n=t.onEnd;return t.startOnMount&&(u.current=setTimeout((function(){a({pauseResume:f,reset:p,update:h}),l().start((function(){clearTimeout(u.current),n({pauseResume:f,reset:p,start:d,update:h})}))}),1e3*e)),function(){clearTimeout(u.current),p()}}),[]),{countUp:s,start:d,pauseResume:f,reset:p,update:h}}},816:function(e,t,a){var n,r;void 0===(r="function"===typeof(n=function(e,t,a){return function(e,t,a,n,r,i){function s(e){return"number"==typeof e&&!isNaN(e)}var o=this;if(o.version=function(){return"1.9.3"},o.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,a,n){return a*(1-Math.pow(2,-10*e/n))*1024/1023+t},formattingFn:function(e){var t,a,n,r,i,s,c=e<0;if(e=Math.abs(e).toFixed(o.decimals),a=(t=(e+="").split("."))[0],n=t.length>1?o.options.decimal+t[1]:"",o.options.useGrouping){for(r="",i=0,s=a.length;i<s;++i)0!==i&&i%3===0&&(r=o.options.separator+r),r=a[s-i-1]+r;a=r}return o.options.numerals.length&&(a=a.replace(/[0-9]/g,(function(e){return o.options.numerals[+e]})),n=n.replace(/[0-9]/g,(function(e){return o.options.numerals[+e]}))),(c?"-":"")+o.options.prefix+a+n+o.options.suffix},prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var c in o.options)i.hasOwnProperty(c)&&null!==i[c]&&(o.options[c]=i[c]);""===o.options.separator?o.options.useGrouping=!1:o.options.separator=""+o.options.separator;for(var u=0,l=["webkit","moz","ms","o"],p=0;p<l.length&&!window.requestAnimationFrame;++p)window.requestAnimationFrame=window[l[p]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[p]+"CancelAnimationFrame"]||window[l[p]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var a=(new Date).getTime(),n=Math.max(0,16-(a-u)),r=window.setTimeout((function(){e(a+n)}),n);return u=a+n,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),o.initialize=function(){return!!o.initialized||(o.error="",o.d="string"==typeof e?document.getElementById(e):e,o.d?(o.startVal=Number(t),o.endVal=Number(a),s(o.startVal)&&s(o.endVal)?(o.decimals=Math.max(0,n||0),o.dec=Math.pow(10,o.decimals),o.duration=1e3*Number(r)||2e3,o.countDown=o.startVal>o.endVal,o.frameVal=o.startVal,o.initialized=!0,!0):(o.error="[CountUp] startVal ("+t+") or endVal ("+a+") is not a number",!1)):(o.error="[CountUp] target is null or undefined",!1))},o.printValue=function(e){var t=o.options.formattingFn(e);"INPUT"===o.d.tagName?this.d.value=t:"text"===o.d.tagName||"tspan"===o.d.tagName?this.d.textContent=t:this.d.innerHTML=t},o.count=function(e){o.startTime||(o.startTime=e),o.timestamp=e;var t=e-o.startTime;o.remaining=o.duration-t,o.options.useEasing?o.countDown?o.frameVal=o.startVal-o.options.easingFn(t,0,o.startVal-o.endVal,o.duration):o.frameVal=o.options.easingFn(t,o.startVal,o.endVal-o.startVal,o.duration):o.countDown?o.frameVal=o.startVal-(o.startVal-o.endVal)*(t/o.duration):o.frameVal=o.startVal+(o.endVal-o.startVal)*(t/o.duration),o.countDown?o.frameVal=o.frameVal<o.endVal?o.endVal:o.frameVal:o.frameVal=o.frameVal>o.endVal?o.endVal:o.frameVal,o.frameVal=Math.round(o.frameVal*o.dec)/o.dec,o.printValue(o.frameVal),t<o.duration?o.rAF=requestAnimationFrame(o.count):o.callback&&o.callback()},o.start=function(e){o.initialize()&&(o.callback=e,o.rAF=requestAnimationFrame(o.count))},o.pauseResume=function(){o.paused?(o.paused=!1,delete o.startTime,o.duration=o.remaining,o.startVal=o.frameVal,requestAnimationFrame(o.count)):(o.paused=!0,cancelAnimationFrame(o.rAF))},o.reset=function(){o.paused=!1,delete o.startTime,o.initialized=!1,o.initialize()&&(cancelAnimationFrame(o.rAF),o.printValue(o.startVal))},o.update=function(e){if(o.initialize()){if(!s(e=Number(e)))return void(o.error="[CountUp] update() - new endVal is not a number: "+e);o.error="",e!==o.frameVal&&(cancelAnimationFrame(o.rAF),o.paused=!1,delete o.startTime,o.startVal=o.frameVal,o.endVal=e,o.countDown=o.startVal>o.endVal,o.rAF=requestAnimationFrame(o.count))}},o.initialize()&&o.printValue(o.startVal)}})?n.call(t,a,t,e):n)||(e.exports=r)},817:function(e,t,a){}}]);