(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"3uVX":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(d){a=!0,o=d}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n("h4VS"),i=n("q1tI"),c=n.n(i),d=n("LvDl"),s=n.n(d),l=n("vOnD");const u=({color:e="currentColor",direction:t="left",distance:n="md",duration:r=.4,easing:a="cubic-bezier(0, 0, 0, 1)",hideOutline:o=!0,label:c,lines:d=3,onToggle:s,render:l,rounded:u=!1,size:b=32,toggle:m,toggled:f})=>{const[g,h]=Object(i.useState)(!1),p=Math.max(12,Math.min(48,b)),v=Math.round((48-p)/2),x=p/12,w=Math.round(x),O=p/(d*(("lg"===n?.25:"sm"===n?.75:.5)+(3===d?1:1.25))),y=Math.round(O),j=w*d+y*(d-1),k=Math.round((48-j)/2),N=parseFloat((p/(3===d?"lg"===n?4.0425:"sm"===n?5.1625:4.6325:"lg"===n?6.7875:"sm"===n?8.4875:7.6675)-(x-w+(O-y))/(3===d?1:2)/(4/3)).toFixed(2)),$=Math.max(0,r),S={cursor:"pointer",height:"48px",position:"relative",transition:`${$}s ${a}`,userSelect:"none",width:"48px"},E={background:e,height:`${w}px`,left:`${v}px`,position:"absolute"};o&&(S.outline="none"),u&&(E.borderRadius="9em");const P=m||h,B=void 0!==f?f:g;return l({barHeight:w,barStyles:E,burgerStyles:S,easing:a,handler:()=>{P(!B),"function"===typeof s&&s(!B)},isLeft:"left"===t,isToggled:B,label:c,margin:y,move:N,time:$,topOffset:k,width:p})};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=e=>c.a.createElement(u,b({},e,{render:e=>c.a.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:t=>"Enter"===t.key&&e.handler(),role:"button",style:{...e.burgerStyles,transform:`${e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},c.a.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none"}`}}),c.a.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?"scaleX(0)":"none"}`}}),c.a.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none"}`}}))})),f=n("GJ8f"),g=n("h1bS"),h=n("smdI"),p=c.a.createElement;function v(){var e=Object(o.a)(["\n  border: ",";\n  padding: 0.25em 0.75em;\n\n  :hover {\n    text-decoration: underline;\n  }\n"]);return v=function(){return e},e}function x(){var e=Object(o.a)(["\n  // transform: translateY(0px) translateX(0px);\n  // transition: transform 400ms ease 0s;\n  transition: ease height .3s; /* <--- ease in */\n\n  // top: 0px;\n  overflow: hidden;\n  z-index: 1;\n"]);return x=function(){return e},e}function w(){var e=Object(o.a)(["\n  :hover {\n    color: white;\n    -webkit-text-stroke: 1px black;\n    text-shadow: 1px 1px 0cpx #000000;\n    paint-order: stroke fill;\n  }\n"]);return w=function(){return e},e}var O=Object(l.a)(g.a)(w()),y=l.a.div(x()),j=l.a.div(v(),(function(e){return"2px solid ".concat(e.active?"black":"white")})),k=function(e){return p(j,{active:e.active},p("h6",null,e.children))};t.a=function(e){var t=e.curPage,n=e.children,r=a(c.a.useState(!1),2),o=r[0],i=r[1],d=c.a.useCallback((function(){return i(!o)}));return p(c.a.Fragment,null,p("div",{className:"d-block w-100 h-100 border border-dark border-2 overflow-scroll"},p("div",{className:"d-flex position-relative"},p("div",{className:"px-4 border border-dark border-2 border-top-0  border-start-0 d-flex align-items-center"},p(f.a,{href:h.c.Home,noUnderline:!0},p(O,{fontFamily:"Manier",tag:"h3"},"AG"))),p("div",{className:"d-flex flex-grow-1 d-md-none border-bottom border-dark border-2"}),p("div",{className:"d-flex d-md-none h-100 justify-content-end border-start border-bottom border-dark border-2"},p(m,{toggled:o,toggle:d,size:28})),p("div",{className:"d-none d-md-flex flex-grow-1 gap-4a gap-lg-5 justify-content-center  p-3 border-bottom border-dark border-2 border-start-0"},s.a.map(h.b,(function(e){return p(f.a,{href:h.c[e],noUnderline:!0},p(k,{active:h.b[t]===e},e))}))),p(y,{id:"nav",className:"position-absolute start-0 end-0 w-100",style:{top:"100%",visibility:o?"visible":"hidden"}},p("div",{className:"border-bottom border-dark border-2 bg-white"},s.a.map(h.b,(function(e,n){return p(f.a,{href:h.c[e],noUnderline:!0},p("h6",{className:"px-4 py-3 \n                    ".concat(h.b[t]===e?"fw-bold":"","\n                    ").concat("/"!==n?"border-top border-dark border-2":"","\n                  ")},e))}))))),p("div",{className:"flex-grow-1 d-flex justify-content-center"},p("div",{className:"h-100 w-100 m-4 m-md-5 px-3 px-sm-4 px-md-5",style:{maxWidth:"70em"}},n))))}},D85t:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n("RHEb")}])},Ksbk:function(e,t,n){"use strict";n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return y}));var r=n("wx14"),a=n("rePB"),o=n("Ff2n"),i=n("h4VS"),c=n("q1tI"),d=n.n(c),s=(n("LvDl"),n("vOnD")),l=n("rQ2n"),u=d.a.createElement;function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(){var e=Object(i.a)(["\n  &:hover #absbox { "," }\n"]);return f=function(){return e},e}function g(){var e=Object(i.a)(["\n  position: absolute;\n  left: 14px;\n  top: 14px;\n  z-index: -1;\n  background: ",";\n"]);return g=function(){return e},e}function h(){var e=Object(i.a)(["\n  border: 2px solid black;\n  background: ",";\n  max-width: 34em;\n  height: 100%;\n  padding: ",";\n  width: ",";\n  ","\n  ","\n  ","\n\n  display: flex;\n  align-items: ",";\n  @media (max-width: 576px) { padding: ","; }\n\n  :hover {\n    color: ",";\n    ","\n  }\n"]);return h=function(){return e},e}var p=Object(s.a)(l.a)(h(),(function(e){return e.bg||"white"}),(function(e){return e.p?e.p:"4em 3.5em"}),(function(e){return e.width||"100%"}),(function(e){return e.maxHeight&&"max-height: ".concat(e.maxHeight,";")}),(function(e){return e.maxWidth&&"max-width: ".concat(e.maxWidth,";")}),(function(e){return e.minHeight&&"min-height: ".concat(e.minHeight,";")}),(function(e){return e.alignItems?e.alignItems:"center"}),(function(e){return"0em"===e.p?"0em":"2.5em 2em"}),(function(e){return e.hoverColor||"black"}),(function(e){return e.hoverBg&&"background: ".concat(e.hoverBg,";")})),v=Object(s.a)(p)(g(),(function(e){return e.bg||"white"})),x=s.a.div(f(),(function(e){return e.hoverBg&&"background: ".concat(e.hoverBg,";")})),w={marginRight:"14px",marginBottom:"14px"},O=function(e){var t=e.children,n=e.h,a=e.hOverride,i=Object(o.a)(e,["children","h","hOverride"]),c=i.hoverBg;return u("div",{style:m({height:n||"fit-content"},w)},u(x,{className:"position-relative",style:{height:a?"100%":"calc(".concat(n," - 14px)")||!1},hoverBg:c},u(p,Object(r.a)({id:"box"},i),t),u(v,Object(r.a)({id:"absbox"},i))))},y=function(e){var t=e.bg,n=e.fg,a=(e.maxHeight,e.hoverBg,e.children),i=Object(o.a)(e,["bg","fg","maxHeight","hoverBg","children"]);return u("div",{className:"h-100",style:w},u(x,{className:"h-100 position-relative"},u(p,Object(r.a)({id:"box",bg:n},i),a),u(v,Object(r.a)({id:"absbox",bg:t},i))))}},RHEb:function(e,t,n){"use strict";n.r(t);var r=n("h4VS"),a=n("q1tI"),o=n.n(a),i=(n("LvDl"),n("vOnD")),c=n("GJ8f"),d=n("h1bS"),s=n("Ksbk"),l=n("3uVX"),u=(n("OSpC"),o.a.createElement);function b(){var e=Object(r.a)(["\n  transition: all 0.2s ease-in-out;\n  background: ",";\n  :hover {\n    background: ",";\n  }\n"]);return b=function(){return e},e}function m(){var e=Object(r.a)(["\n  opacity: 0;\n  user-select: none;\n"]);return m=function(){return e},e}function f(){var e=Object(r.a)(["\n  padding: 6em 4em;\n  @media (min-width: 1031px) and (max-width: 1120px) { padding: 5em 3.5em; }\n  @media (min-width: 951px) and (max-width: 1030px) { padding: 4em 3em; }\n  @media (min-width: 576px) and (max-width: 950px) { padding: 3.5em 2.5em; }\n  @media (max-width: 575px) { padding: 3em 2em; }\n"]);return f=function(){return e},e}function g(){var e=Object(r.a)(["\n  cursor: pointer;\n"]);return g=function(){return e},e}var h="url('/static/projects/quizem.jpg') no-repeat 10% 50%/cover",p="url('/static/projects/quizem.gif') no-repeat 50% 50%/cover",v=Object(i.a)(s.b)(g()),x=i.a.div(f()),w=Object(i.a)(s.b)(m()),O=i.a.div(b(),(function(e){return e.bg}),(function(e){return e.hoverBg})),y=function(e,t){return u("div",{className:"d-flex flex-column gap-3"},u(d.a,{tag:"h6",fontWeight:"300"},e),u(d.a,{tag:"h3",fontWeight:"500"},t))};t.default=function(){return u(l.a,{curPage:"projects"},u(d.a,{fontFamily:"Manier",tag:"h2",className:"mb-4 mb-md-5"},"Projects"),u("div",{className:"d-flex flex-column gap-5 pb-4"},u("div",{className:"col-sm-12"},u(c.a,{href:"https://quizem.io/",external:!0,noUnderline:!0},u(v,{maxWidth:"100%",alignItems:"start",p:"0em",hoverBg:h},u("div",{className:"row w-100 h-100 gx-0 flex-column flex-sm-row"},u(x,{className:"col-auto bg-white"},y("CAPSTONE DESIGN PROJECT","Quizem")),u(O,{className:"col border-start border-dark border-2",bg:h,hoverBg:p}),u(O,{className:"col d-sm-none border-top border-dark border-2",bg:h,hoverBg:p},u(w,null,y("CAPSTONE DESIGN PROJECT","Quizem"))))))),u("div",{className:"col-sm-12"},u(d.a,{tag:"h4",fontFamily:"Manier"},"More coming soon..."))))}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["D85t",0,2,3,5,1,4,6]]]);