(this["webpackJsonpmy-eighth-app"]=this["webpackJsonpmy-eighth-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo.ceef5787.png"},26:function(e,t,a){e.exports=a(53)},32:function(e,t,a){e.exports=a.p+"static/media/search.ce030b85.png"},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),l=a(8),s=a.n(l),u=a(6),i=a(21),m=a(3);var d=function(e){var t=(new Date).getFullYear();return r.a.createElement("div",{className:"Footer"},r.a.createElement("footer",null,"\xa9Copyright ",t," eddieprogramming"))},f=a(22),p=a.n(f),h=(a(32),a(23)),g=a(24);var b=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],o=a[1];return r.a.createElement("div",{className:"AddWord"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{className:"logoImage",src:p.a,alt:"logo"})),r.a.createElement("form",{className:"searchForm"},r.a.createElement("div",{className:"searchInputContainer"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;o(t)},className:"searchInput",type:"text",placeholder:"Enter a word..."}),r.a.createElement("button",{onClick:function(t){t.preventDefault(),""!==c&&(e._setInputs((function(e){return[].concat(Object(u.a)(e),[c])})),e._handleResult(c),o(""))},className:"submitButton"},r.a.createElement(h.a,{icon:g.a,size:"lg"})))))};var E=function(){var e=new Date("Jan 1, 2021").getTime(),t=(new Date).getTime(),a=(new Date).getDay(),c="",o=e-t,l=Math.floor(o/864e5),s=Math.floor(o%864e5/36e5),u=Math.floor(o%36e5/6e4),i=Math.floor(o%6e4/1e3),d=Object(n.useState)((new Date).toLocaleString()),f=Object(m.a)(d,2),p=f[0],h=f[1];return function(){switch(a){case 0:c="Sunday";break;case 1:c="Monday";break;case 2:c="Tuesday";break;case 3:c="Wednesday";break;case 4:c="Thursday";break;case 5:c="Friday";break;case 6:c="Saturday";break;default:console.log("Error in Showtime module")}}(),Object(n.useEffect)((function(){var e=setInterval((function(){return h((new Date).toLocaleString())}),1e3);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",{className:"ShowTime"},r.a.createElement("h2",null,"The current time is ",r.a.createElement("span",{className:"styleTime"},p," ",c)),r.a.createElement("h2",null,l," days ",s," hours and ",u," minutes ",i," seconds left till 2021! Seize the day!"))};var v=function(e){var t=e._object,a=Object(n.useState)(""),c=Object(m.a)(a,2);return c[0],c[1],r.a.createElement("div",{className:"SearchResults"},r.a.createElement("h3",{className:"wordHeading"},t.wordId),r.a.createElement("li",{className:"wordCategory"},r.a.createElement("p",null,t.wordCategory)),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("span",{className:"illustration"},e._illustration)," ",t.wordDefinition)),r.a.createElement("hr",null))},y=a(25),j=a.n(y),w="4590827c-8fef-4c8f-814a-6dcc75ca8247";var O=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(""),o=Object(m.a)(c,2),l=o[0],f=o[1],p=Object(n.useState)(""),h=Object(m.a)(p,2),g=(h[0],h[1],Object(n.useState)([])),y=Object(m.a)(g,2),O=y[0],S=y[1],N=Object(n.useState)(!1),k=Object(m.a)(N,2),D=(k[0],k[1]);function I(){return(I=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://dictionaryapi.com/api/v3/references/learners/json/".concat(t,"?key=").concat(w),e.prev=1,S([]),f(""),D(!0),e.next=7,j.a.get(a).then((function(e){console.log("--------------second part------");var a=e.data.length;console.log(a),0===a&&f('Sorry, there are no results for "'.concat(t,'"'));for(var n=0;n<a;n++){var r={wordId:"",wordCategory:"",wordDefinition:""},c=e.data[n].meta.id,o=e.data[n].fl,l=e.data[n].shortdef[0];r.wordId=c,r.wordCategory=o,r.wordDefinition=l,console.log("pushing"),S((function(e){return[].concat(Object(u.a)(e),[r])}))}D(!1)}));case 7:e.sent,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),f('Sorry, there are no results for "'.concat(t,'"')),D(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){localStorage.getItem("exampleWordData")&&S(JSON.parse(localStorage.getItem("exampleWordData")))}),[]),Object(n.useEffect)((function(){localStorage.setItem("exampleWordData",JSON.stringify(O))}),[O]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"contentBody"},r.a.createElement(b,{_setInputs:a,_handleResult:function(e){return I.apply(this,arguments)}}),r.a.createElement("ul",null,O.map((function(e,t){return r.a.createElement(v,{errorMessage:l,_object:e,id:t,key:t,_illustration:"Meaning:"})}))),r.a.createElement("h2",{className:"errorStyle"},null!=l?l:null)),r.a.createElement(E,null),r.a.createElement(d,null))};o.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.43d45236.chunk.js.map