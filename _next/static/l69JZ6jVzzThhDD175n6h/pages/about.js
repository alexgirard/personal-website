(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3uVX":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(d){a=!0,o=d}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n("h4VS"),i=n("q1tI"),c=n.n(i),d=n("LvDl"),l=n.n(d),s=n("vOnD");const u=({color:e="currentColor",direction:t="left",distance:n="md",duration:r=.4,easing:a="cubic-bezier(0, 0, 0, 1)",hideOutline:o=!0,label:c,lines:d=3,onToggle:l,render:s,rounded:u=!1,size:m=32,toggle:b,toggled:f})=>{const[h,p]=Object(i.useState)(!1),g=Math.max(12,Math.min(48,m)),v=Math.round((48-g)/2),x=g/12,y=Math.round(x),w=g/(d*(("lg"===n?.25:"sm"===n?.75:.5)+(3===d?1:1.25))),O=Math.round(w),j=y*d+O*(d-1),k=Math.round((48-j)/2),$=parseFloat((g/(3===d?"lg"===n?4.0425:"sm"===n?5.1625:4.6325:"lg"===n?6.7875:"sm"===n?8.4875:7.6675)-(x-y+(w-O))/(3===d?1:2)/(4/3)).toFixed(2)),S=Math.max(0,r),N={cursor:"pointer",height:"48px",position:"relative",transition:`${S}s ${a}`,userSelect:"none",width:"48px"},P={background:e,height:`${y}px`,left:`${v}px`,position:"absolute"};o&&(N.outline="none"),u&&(P.borderRadius="9em");const E=b||p,B=void 0!==f?f:h;return s({barHeight:y,barStyles:P,burgerStyles:N,easing:a,handler:()=>{E(!B),"function"===typeof l&&l(!B)},isLeft:"left"===t,isToggled:B,label:c,margin:O,move:$,time:S,topOffset:k,width:g})};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var b=e=>c.a.createElement(u,m({},e,{render:e=>c.a.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:t=>"Enter"===t.key&&e.handler(),role:"button",style:{...e.burgerStyles,transform:`${e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},c.a.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none"}`}}),c.a.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?"scaleX(0)":"none"}`}}),c.a.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none"}`}}))})),f=n("GJ8f"),h=n("h1bS"),p=n("smdI"),g=c.a.createElement;function v(){var e=Object(o.a)(["\n  border: ",";\n  padding: 0.25em 0.75em;\n\n  :hover {\n    text-decoration: underline;\n  }\n"]);return v=function(){return e},e}function x(){var e=Object(o.a)(["\n  // transform: translateY(0px) translateX(0px);\n  // transition: transform 400ms ease 0s;\n  transition: ease height .3s; /* <--- ease in */\n\n  // top: 0px;\n  overflow: hidden;\n  z-index: 1;\n"]);return x=function(){return e},e}function y(){var e=Object(o.a)(["\n  :hover {\n    color: white;\n    -webkit-text-stroke: 1px black;\n    text-shadow: 1px 1px 0cpx #000000;\n    paint-order: stroke fill;\n  }\n"]);return y=function(){return e},e}var w=Object(s.a)(h.a)(y()),O=s.a.div(x()),j=s.a.div(v(),(function(e){return"2px solid ".concat(e.active?"black":"white")})),k=function(e){return g(j,{active:e.active},g("h6",null,e.children))};t.a=function(e){var t=e.curPage,n=e.children,r=a(c.a.useState(!1),2),o=r[0],i=r[1],d=c.a.useCallback((function(){return i(!o)}));return g(c.a.Fragment,null,g("div",{className:"d-block w-100 h-100 border border-dark border-2 overflow-scroll"},g("div",{className:"d-flex position-relative"},g("div",{className:"px-4 border border-dark border-2 border-top-0  border-start-0 d-flex align-items-center"},g(f.a,{href:p.c.Home,noUnderline:!0},g(w,{fontFamily:"Manier",tag:"h3"},"AG"))),g("div",{className:"d-flex flex-grow-1 d-md-none border-bottom border-dark border-2"}),g("div",{className:"d-flex d-md-none h-100 justify-content-end border-start border-bottom border-dark border-2"},g(b,{toggled:o,toggle:d,size:28})),g("div",{className:"d-none d-md-flex flex-grow-1 gap-4a gap-lg-5 justify-content-center  p-3 border-bottom border-dark border-2 border-start-0"},l.a.map(p.b,(function(e){return g(f.a,{href:p.c[e],noUnderline:!0},g(k,{active:p.b[t]===e},e))}))),g(O,{id:"nav",className:"position-absolute start-0 end-0 w-100",style:{top:"100%",visibility:o?"visible":"hidden"}},g("div",{className:"border-bottom border-dark border-2 bg-white"},l.a.map(p.b,(function(e,n){return g(f.a,{href:p.c[e],noUnderline:!0},g("h6",{className:"px-4 py-3 \n                    ".concat(p.b[t]===e?"fw-bold":"","\n                    ").concat("/"!==n?"border-top border-dark border-2":"","\n                  ")},e))}))))),g("div",{className:"flex-grow-1 d-flex justify-content-center"},g("div",{className:"h-100 w-100 m-4 m-md-5 px-3 px-sm-4 px-md-5",style:{maxWidth:"70em"}},n))))}},Juyh:function(e,t,n){"use strict";n.r(t);var r=n("h4VS"),a=n("q1tI"),o=n.n(a),i=(n("LvDl"),n("vOnD")),c=n("h1bS"),d=n("Ksbk"),l=n("3uVX"),s=(n("OSpC"),o.a.createElement);function u(){var e=Object(r.a)(["\n  display: grid;\n  max-width: 66em;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4em; \n\n  @media (min-width: 941px) and (max-width: 1100px) { gap: 4em; }\n\n  @media (max-width: 940px) {\n    grid-template-columns: 1fr;\n    gap: 3em;\n\n    div:nth-of-type(3) { order: 4; }\n    div:nth-of-type(4) { order: 3; }\n  }\n"]);return u=function(){return e},e}function m(){var e=Object(r.a)(["\n  :hover {\n    color: #F2C531 !important;\n  }\n"]);return m=function(){return e},e}var b=i.a.a(m()),f=i.a.div(u());t.default=function(){return s(l.a,{curPage:"about"},s(c.a,{fontFamily:"Manier",tag:"h2",className:"mb-4 mb-md-5"},"About Me"),s(f,{className:"pb-4"},s(d.b,{maxWidth:"100%",h:"100%",hOverride:!0},s("p",null,"Hi, I\u2019m Alexandra Girard! I just graduated from the"," ",s(b,{href:"https://uwaterloo.ca/",external:!0},"University of Waterloo")," ","with a degree in Software Engineering and specialization in human-computer interaction.")),s(d.a,{bg:"#F12386",fg:"url('/static/pics/alex_museum.jpg') no-repeat 50% 40%/cover",minHeight:"300px",maxWidth:"100%"}),s(d.a,{bg:"#38D1D1",fg:"url('/static/pics/alex_sf.jpg') no-repeat 50% 35%/cover",minHeight:"300px",maxWidth:"100%"}),s(d.b,{maxWidth:"100%",h:"100%",hOverride:!0},s("p",null,"When I\u2019m not coding, you can find me taking contemporary or hip hop drop-in dance classes, playing Valorant or Minecraft with friends, or drinking way too much coffee \u2615"))))}},Ksbk:function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return O}));var r=n("wx14"),a=n("rePB"),o=n("Ff2n"),i=n("h4VS"),c=n("q1tI"),d=n.n(c),l=(n("LvDl"),n("vOnD")),s=n("rQ2n"),u=d.a.createElement;function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(){var e=Object(i.a)(["\n  &:hover #absbox { "," }\n"]);return f=function(){return e},e}function h(){var e=Object(i.a)(["\n  position: absolute;\n  left: 14px;\n  top: 14px;\n  z-index: -1;\n  background: ",";\n"]);return h=function(){return e},e}function p(){var e=Object(i.a)(["\n  border: 2px solid black;\n  background: ",";\n  max-width: 34em;\n  height: 100%;\n  padding: ",";\n  width: ",";\n  ","\n  ","\n  ","\n\n  display: flex;\n  align-items: ",";\n  @media (max-width: 576px) { padding: ","; }\n\n  :hover {\n    color: ",";\n    ","\n  }\n"]);return p=function(){return e},e}var g=Object(l.a)(s.a)(p(),(function(e){return e.bg||"white"}),(function(e){return e.p?e.p:"4em 3.5em"}),(function(e){return e.width||"100%"}),(function(e){return e.maxHeight&&"max-height: ".concat(e.maxHeight,";")}),(function(e){return e.maxWidth&&"max-width: ".concat(e.maxWidth,";")}),(function(e){return e.minHeight&&"min-height: ".concat(e.minHeight,";")}),(function(e){return e.alignItems?e.alignItems:"center"}),(function(e){return"0em"===e.p?"0em":"2.5em 2em"}),(function(e){return e.hoverColor||"black"}),(function(e){return e.hoverBg&&"background: ".concat(e.hoverBg,";")})),v=Object(l.a)(g)(h(),(function(e){return e.bg||"white"})),x=l.a.div(f(),(function(e){return e.hoverBg&&"background: ".concat(e.hoverBg,";")})),y={marginRight:"14px",marginBottom:"14px"},w=function(e){var t=e.children,n=e.h,a=e.hOverride,i=Object(o.a)(e,["children","h","hOverride"]),c=i.hoverBg;return u("div",{style:b({height:n||"fit-content"},y)},u(x,{className:"position-relative",style:{height:a?"100%":"calc(".concat(n," - 14px)")||!1},hoverBg:c},u(g,Object(r.a)({id:"box"},i),t),u(v,Object(r.a)({id:"absbox"},i))))},O=function(e){var t=e.bg,n=e.fg,a=(e.maxHeight,e.hoverBg,e.children),i=Object(o.a)(e,["bg","fg","maxHeight","hoverBg","children"]);return u("div",{className:"h-100",style:y},u(x,{className:"h-100 position-relative"},u(g,Object(r.a)({id:"box",bg:n},i),a),u(v,Object(r.a)({id:"absbox",bg:t},i))))}},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["rB5V",0,2,3,5,1,4,6]]]);