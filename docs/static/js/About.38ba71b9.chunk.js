(this.webpackJsonpreact_web=this.webpackJsonpreact_web||[]).push([[7],{1356:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(482);t.default=function(){return i.a.createElement("div",{className:"app-container"},i.a.createElement(s.a,{title:"\u5173\u4e8e\u4f5c\u8005",source:"\n    <p>\u5927\u5bb6\u597d\uff0c\u6211\u662fRainycy\u3002</p>\n  "}))}},482:function(e,t,n){"use strict";n(489);var a=n(488),i=n(0),s=n.n(i),o=n(44),r=n(45),c=function(){function e(t){Object(o.a)(this,e),this.opts=t||{},this.source=t.source,this.output=t.output,this.delay=t.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(r.a)(e,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(e,t){for(var n=Array.from(e.childNodes),a=0;a<n.length;a++){var i=n[a];if(3===i.nodeType)t=t.concat(i.nodeValue.split(""));else if(1===i.nodeType){var s=[];s=this.convert(i,s),t.push({dom:i,val:s})}}return t}},{key:"print",value:function(e,t,n){setTimeout((function(){e.appendChild(document.createTextNode(t)),n()}),this.delay)}},{key:"play",value:function(e){var t=this;if(e.val.length){var n=e.val.shift();if("string"===typeof n)this.print(e.dom,n,(function(){t.play(e)}));else{var a=n.dom.cloneNode();e.dom.appendChild(a),this.play({parent:e,dom:a,val:n.val})}}else e.parent?this.play(e.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),e}(),u=function(e){var t=e.title,n=e.source,o=Object(i.useRef)(),r=Object(i.useRef)();return Object(i.useEffect)((function(){new c({source:o.current,output:r.current,delay:30}).start()}),[]),s.a.createElement(a.a,{bordered:!1,className:"card-item",title:t},s.a.createElement("div",{style:{display:"none"},ref:o,dangerouslySetInnerHTML:{__html:n}}),s.a.createElement("div",{ref:r}))};u.defaultProps={title:"",source:""};t.a=u}}]);