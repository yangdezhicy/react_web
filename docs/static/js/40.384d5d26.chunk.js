(this.webpackJsonpreact_web=this.webpackJsonpreact_web||[]).push([[40],{1335:function(t,n,c){"use strict";c.r(n),c.d(n,"export_txt_to_zip",(function(){return a}));var e=c(1336),o=c.n(e);function a(t,n,c,e){var a=new o.a,r=c||"file",i=e||"file",f=n,s="".concat(t,"\r\n");f.forEach((function(t){var n;n=t.toString(),s+="".concat(n,"\r\n")})),a.file("".concat(r,".txt"),s),a.generateAsync({type:"blob"}).then((function(t){saveAs(t,"".concat(i,".zip"))}),(function(t){alert("\u5bfc\u51fa\u5931\u8d25")}))}c(657)}}]);