(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,function(t,e,n){t.exports={list:"Statistics_list__2ibvz",item:"Statistics_item__2uBf4",numbers:"Statistics_numbers__2AqGz",good:"Statistics_good__NDJGm",neutral:"Statistics_neutral__hcoCo",bad:"Statistics_bad__17dyS",visible:"Statistics_visible__28Wdg",hidden:"Statistics_hidden__sMBfA"}},,,,function(t,e,n){t.exports={container:"Container_container__1ZvZF",title:"Container_title__2nWIu"}},,function(t,e,n){t.exports={button:"Feedback_button__41l98"}},function(t,e,n){t.exports={text:"Notification_text__2Y1xx"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(2),s=n.n(c),a=n(6),i=n.n(a),r=(n(13),n(14),n(3)),o=(n(15),n(5)),l=n.n(o),b=n(0);var d=function(t){var e=t.title,n=void 0===e?"":e,c=t.children;return Object(b.jsxs)("div",{className:l.a.container,children:[n&&Object(b.jsx)("h2",{className:l.a.title,children:n}),c]})},u=n(7),j=n.n(u);var _=function(t){var e=t.options,n=t.addVoice;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:e.map((function(t){return Object(b.jsx)("button",{type:"button",className:j.a.button,onClick:function(){n(t)},children:t},t)}))})})},h=n(1),m=n.n(h);var x=function(t){var e=t.options,n=t.total,c=t.positivePercentage;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("ul",{className:m.a.list,children:[Object.keys(e).map((function(t){return Object(b.jsxs)("li",{className:m.a.item,children:[t,": ",Object(b.jsx)("span",{className:"".concat(m.a.numbers," ").concat(m.a[t]),children:e[t]})]})})),Object(b.jsxs)("li",{className:"".concat(m.a.item," "),children:["Total: ",Object(b.jsx)("span",{className:"".concat(m.a.numbers," "),children:n})]}),Object(b.jsxs)("li",{className:m.a.item,children:["Positive feedback:"," ",Object(b.jsxs)("span",{className:"".concat(m.a.numbers," "),children:[c,"%"]})]})]})})},O=n(8),f=n.n(O);var p=function(t){var e=t.message,n=void 0===e?"":e;return Object(b.jsx)(b.Fragment,{children:n&&Object(b.jsx)("p",{className:f.a.text,children:n})})},v=["good","neutral","bad"];function g(){var t=Object(c.useState)(0),e=Object(r.a)(t,2),n=e[0],s=e[1],a=Object(c.useState)(0),i=Object(r.a)(a,2),o=i[0],l=i[1],u=Object(c.useState)(0),j=Object(r.a)(u,2),h=j[0],m=j[1],O=n+o+h,f=Math.round(n/O*100);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{title:"Please leave feedback",children:Object(b.jsx)(_,{options:v,addVoice:function(t){switch(t){case"good":s((function(t){return t+1}));break;case"neutral":l((function(t){return t+1}));break;case"bad":m((function(t){return t+1}))}}})}),Object(b.jsx)(d,{title:"Statistics",children:O>0?Object(b.jsx)(x,{options:{good:n,neutral:o,bad:h},total:O,positivePercentage:f}):Object(b.jsx)(p,{message:"There is no feedback"})})]})}i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.44416c5b.chunk.js.map