(this.webpackJsonpreact_web=this.webpackJsonpreact_web||[]).push([[22],{1364:function(e,t,n){"use strict";n.r(t);n(487);var a=n(486),i=n(0),r=n.n(i),o=(n(1272),n(1273),n(1274)),c=function(){return r.a.createElement(o.Editor,{initialValue:"hello \u96be\u51c9\u70ed\u8840!",previewStyle:"vertical",height:"600px",initialEditType:"markdown",useCommandShortcut:!0})},s=n(480);t.default=function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(s.a,{title:"\u65b0\u624b\u5f15\u5bfc",source:'\n    \u6b64\u9875\u9762\u7528\u5230\u7684Markdown\u7f16\u8f91\u5668\u662f<a href="https://github.com/nhn/tui.editor/tree/master/apps/react-editor" target="_blank">tui.editor(React\u7248)</a>\u3002\n  '}),r.a.createElement("br",null),r.a.createElement(a.a,{bordered:!1},r.a.createElement(c,null)))}},480:function(e,t,n){"use strict";n(487);var a=n(486),i=n(0),r=n.n(i),o=n(43),c=n(44),s=function(){function e(t){Object(o.a)(this,e),this.opts=t||{},this.source=t.source,this.output=t.output,this.delay=t.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(c.a)(e,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(e,t){for(var n=Array.from(e.childNodes),a=0;a<n.length;a++){var i=n[a];if(3===i.nodeType)t=t.concat(i.nodeValue.split(""));else if(1===i.nodeType){var r=[];r=this.convert(i,r),t.push({dom:i,val:r})}}return t}},{key:"print",value:function(e,t,n){setTimeout((function(){e.appendChild(document.createTextNode(t)),n()}),this.delay)}},{key:"play",value:function(e){var t=this;if(e.val.length){var n=e.val.shift();if("string"===typeof n)this.print(e.dom,n,(function(){t.play(e)}));else{var a=n.dom.cloneNode();e.dom.appendChild(a),this.play({parent:e,dom:a,val:n.val})}}else e.parent?this.play(e.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),e}(),l=function(e){var t=e.title,n=e.source,o=Object(i.useRef)(),c=Object(i.useRef)();return Object(i.useEffect)((function(){new s({source:o.current,output:c.current,delay:30}).start()}),[]),r.a.createElement(a.a,{bordered:!1,className:"card-item",title:t},r.a.createElement("div",{style:{display:"none"},ref:o,dangerouslySetInnerHTML:{__html:n}}),r.a.createElement("div",{ref:c}))};l.defaultProps={title:"",source:""};t.a=l}}]);