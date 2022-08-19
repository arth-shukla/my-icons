import n,{useState as t,useEffect as e}from"react";function a(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(n);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(n,a[i])&&(e[a[i]]=n[a[i]])}return e}function i(n,t){void 0===t&&(t={});var e=t.insertAt;if(n&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===e&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}function r(e){var{currentColorIndex:i,colors:r,onClick:o=(()=>{}),size:s=40,animDuration:l=".4s",className:c="",style:m={}}=e,d=a(e,["currentColorIndex","colors","onClick","size","animDuration","className","style"]);const[h,f]=t(i||0),[p,k]=t(0),w=i||h;return n.createElement("button",Object.assign({className:"ai-color-switch "+c,onClick:()=>{o(),f((h+1)%r.length),k((p+1)%2)},style:Object.assign({width:s,height:s,"--ai-color-switch-color":r[w],"--ai-color-switch-tr-sec":l,"--ai-color-switch-size":.558*s+"px"},m)},d),n.createElement("div",{"aria-hidden":!0,className:`ai-color-targ ai-color-targ-${p}`}))}i(".ai-color-switch {\n  border: none;\n  background-color: inherit;\n  margin: 0.25em 0;\n  padding: 0;\n}\n.ai-color-switch .ai-color-targ {\n  width: var(--ai-color-switch-size);\n  height: var(--ai-color-switch-size);\n  border-radius: 50%;\n  transition: all var(--ai-color-switch-tr-sec) ease-in-out;\n  pointer-events: none;\n  margin: auto;\n}\n.ai-color-switch .ai-color-targ-0 {\n  border: calc(var(--ai-color-switch-size) / 2) solid var(--ai-color-switch-color);\n}\n.ai-color-switch .ai-color-targ-1 {\n  background-color: var(--ai-color-switch-color);\n  border: 1px solid var(--ai-color-switch-color);\n}");function o(e){var{darkMode:i,onClick:r=(()=>{}),size:o=40,className:s="",style:l={},animDuration:c="1.2s",lightModeColor:m="rgba(18, 18, 18, .8)",darkModeColor:d="rgba(255, 255, 255, .87)"}=e,h=a(e,["darkMode","onClick","size","className","style","animDuration","lightModeColor","darkModeColor"]);const[f,p]=t(i||!1),k=void 0===i?f:i,w=k?d:m;return n.createElement("button",Object.assign({className:"ai-dark-mode-switch"+(k?" ai-dark-mode-switch-moon ":" ai-dark-mode-switch-sun ")+s,onClick:()=>{r(),p(!f)},style:Object.assign({"--theme-anim":w,"--tr-sec":c,width:o,height:o},l)},h),n.createElement("svg",{width:Math.sqrt(Math.pow(o,2)/2),height:Math.sqrt(Math.pow(o,2)/2),viewBox:"0 0 30 30","aria-hidden":!0},n.createElement("circle",{cx:"15",cy:"15",r:k?12:6,id:"ai-dark-mode-switch-icon-moon",mask:"url(#ai-dark-mode-switch-icon-moon-mask)"}),n.createElement("mask",{id:"ai-dark-mode-switch-icon-moon-mask"},n.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%"}),n.createElement("circle",{cx:"21",cy:"8",r:"12"})),n.createElement("g",{mask:"url(#ai-dark-mode-switch-icon-dots-mask)"},n.createElement("circle",{cx:"5",cy:"15",r:"2",id:"ai-dark-mode-switch-icon-spot-1"}),n.createElement("circle",{cx:"10",cy:"23.66",r:"2",id:"ai-dark-mode-switch-icon-spot-2"}),n.createElement("circle",{cx:"20",cy:"23.66",r:"2",id:"ai-dark-mode-switch-icon-spot-3"}),n.createElement("circle",{cx:"25",cy:"15",r:"2",id:"ai-dark-mode-switch-icon-spot-4"}),n.createElement("circle",{cx:"10",cy:"6.4",r:"2",id:"ai-dark-mode-switch-icon-spot-6"}),n.createElement("circle",{cx:"20",cy:"6.4",r:"2",id:"ai-dark-mode-switch-icon-spot-5"})),n.createElement("mask",{id:"ai-dark-mode-switch-icon-dots-mask"},n.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"white"}),n.createElement("circle",{cx:"15",cy:"15",r:"6",fill:"black"}))))}i(".ai-dark-mode-switch {\n  border: none;\n  background-color: inherit;\n  margin: 0.25em 0;\n  padding: 0;\n}\n.ai-dark-mode-switch svg {\n  transition: all var(--tr-sec) ease-in-out;\n  -webkit-transition: none;\n}\n.ai-dark-mode-switch svg #ai-dark-mode-switch-icon-moon {\n  fill: var(--theme-anim);\n  transition: all calc(var(--tr-sec) / 3) ease-in-out;\n  -webkit-transition: all calc(var(--tr-sec) / 3) ease-in-out;\n}\n.ai-dark-mode-switch svg #ai-dark-mode-switch-icon-moon-mask > circle {\n  fill: #000;\n  transition: all calc(var(--tr-sec) / 3) ease-in-out;\n  -webkit-transition: all calc(var(--tr-sec) / 3) ease-in-out;\n}\n.ai-dark-mode-switch svg #ai-dark-mode-switch-icon-moon-mask > rect {\n  fill: #fff;\n}\n.ai-dark-mode-switch svg g > circle {\n  fill: var(--theme-anim);\n}\n.ai-dark-mode-switch svg #ai-dark-mode-switch-icon-dots-mask > circle {\n  fill: #000;\n  transition: all calc(var(--tr-sec) / 3) ease-in-out;\n  -webkit-transition: all calc(var(--tr-sec) / 3) ease-in-out;\n}\n.ai-dark-mode-switch svg #ai-dark-mode-switch-icon-dots-mask > rect {\n  fill: #fff;\n}\n\n.ai-dark-mode-switch-sun svg {\n  transform: rotate(210deg);\n  -webkit-transform: rotate(210deg);\n  animation-name: sun-spin;\n  animation-duration: calc(var(--tr-sec) * 0.85);\n  animation-timing-function: ease-in-out;\n}\n.ai-dark-mode-switch-sun svg #ai-dark-mode-switch-icon-spot-1 {\n  transform: translate(0, 0);\n  -webkit-transform: translate(0, 0);\n  animation-name: spot-1-reveal;\n  animation-duration: var(--ai-dark-mode-anim-len);\n  animation-timing-function: ease-in-out;\n}\n@keyframes spot-1-reveal {\n  0% {\n    transform: translate(12px, 0);\n    -webkit-transform: translate(12px, 0);\n  }\n  42% {\n    transform: translate(12px, 0);\n    -webkit-transform: translate(12px, 0);\n  }\n  67% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n}\n.ai-dark-mode-switch-sun svg #ai-dark-mode-switch-icon-spot-2 {\n  transform: translate(0, 0);\n  -webkit-transform: translate(0, 0);\n  animation-name: spot-2-reveal;\n  animation-duration: var(--ai-dark-mode-anim-len);\n  animation-timing-function: ease-in-out;\n}\n@keyframes spot-2-reveal {\n  0% {\n    transform: translate(6px, -10.4px);\n    -webkit-transform: translate(6px, -10.4px);\n  }\n  28% {\n    transform: translate(6px, -10.4px);\n    -webkit-transform: translate(6px, -10.4px);\n  }\n  53% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n}\n.ai-dark-mode-switch-sun svg #ai-dark-mode-switch-icon-spot-3 {\n  transform: translate(0, 0);\n  -webkit-transform: translate(0, 0);\n  animation-name: spot-3-reveal;\n  animation-duration: var(--ai-dark-mode-anim-len);\n  animation-timing-function: ease-in-out;\n}\n@keyframes spot-3-reveal {\n  0% {\n    transform: translate(-6px, -10.4px);\n    -webkit-transform: translate(-6px, -10.4px);\n  }\n  14% {\n    transform: translate(-6px, -10.4px);\n    -webkit-transform: translate(-6px, -10.4px);\n  }\n  34% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n}\n.ai-dark-mode-switch-sun svg #ai-dark-mode-switch-icon-spot-4 {\n  transform: translate(0, 0);\n  -webkit-transform: translate(0, 0);\n  animation-name: spot-4-reveal;\n  animation-duration: var(--ai-dark-mode-anim-len);\n  animation-timing-function: ease-in-out;\n}\n@keyframes spot-4-reveal {\n  0% {\n    transform: translate(-12px, 0);\n    -webkit-transform: translate(-12px, 0);\n  }\n  0% {\n    transform: translate(-12px, 0);\n    -webkit-transform: translate(-12px, 0);\n  }\n  20% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n}\n.ai-dark-mode-switch-sun svg #ai-dark-mode-switch-icon-spot-5 {\n  transform: translate(0, 0);\n  -webkit-transform: translate(0, 0);\n  animation-name: spot-5-reveal;\n  animation-duration: var(--ai-dark-mode-anim-len);\n  animation-timing-function: ease-in-out;\n}\n@keyframes spot-5-reveal {\n  0% {\n    transform: translate(-6px, 10.4px);\n    -webkit-transform: translate(-6px, 10.4px);\n  }\n  70% {\n    transform: translate(-6px, 10.4px);\n    -webkit-transform: translate(-6px, 10.4px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n}\n.ai-dark-mode-switch-sun svg #ai-dark-mode-switch-icon-spot-6 {\n  transform: translate(0, 0);\n  -webkit-transform: translate(0, 0);\n  animation-name: spot-6-reveal;\n  animation-duration: var(--ai-dark-mode-anim-len);\n  animation-timing-function: ease-in-out;\n}\n@keyframes spot-6-reveal {\n  0% {\n    transform: translate(6px, 10.4px);\n    -webkit-transform: translate(6px, 10.4px);\n  }\n  56% {\n    transform: translate(6px, 10.4px);\n    -webkit-transform: translate(6px, 10.4px);\n  }\n  86% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n}\n@keyframes sun-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(210deg);\n  }\n}\n.ai-dark-mode-switch-sun svg #ai-dark-mode-switch-icon-moon-mask > circle {\n  transform: translateX(15px);\n  -webkit-transform: translateX(15px);\n}\n.ai-dark-mode-switch-sun svg > g {\n  --ai-dark-mode-anim-len: calc(var(--tr-sec) * 2 / 3);\n}\n\n.ai-dark-mode-switch-moon svg {\n  animation-name: moon-sway;\n  animation-duration: var(--tr-sec);\n  animation-timing-function: ease-in-out;\n}\n@keyframes moon-sway {\n  0% {\n    transform: rotate(135deg);\n    -webkit-transform: rotate(135deg);\n  }\n  40% {\n    transform: rotate(-15deg);\n    -webkit-transform: rotate(-15deg);\n  }\n  70% {\n    transform: rotate(15deg);\n    -webkit-transform: rotate(15deg);\n  }\n  100% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n  }\n}\n.ai-dark-mode-switch-moon svg #ai-dark-mode-switch-icon-moon-mask > circle {\n  transform: translateX(0);\n  -webkit-transform: translateX(0);\n}\n.ai-dark-mode-switch-moon svg > g #ai-dark-mode-switch-icon-spot-1 {\n  transform: translate(12px, 0);\n  -webkit-transform: translate(12px, 0);\n}\n.ai-dark-mode-switch-moon svg > g #ai-dark-mode-switch-icon-spot-2 {\n  transform: translate(6px, -10.4px);\n  -webkit-transform: translate(6px, -10.4px);\n}\n.ai-dark-mode-switch-moon svg > g #ai-dark-mode-switch-icon-spot-3 {\n  transform: translate(-6px, -10.4px);\n  -webkit-transform: translate(-6px, -10.4px);\n}\n.ai-dark-mode-switch-moon svg > g #ai-dark-mode-switch-icon-spot-4 {\n  transform: translate(-12px, 0);\n  -webkit-transform: translate(-12px, 0);\n}\n.ai-dark-mode-switch-moon svg > g #ai-dark-mode-switch-icon-spot-5 {\n  transform: translate(-6px, 10.4px);\n  -webkit-transform: translate(-6px, 10.4px);\n}\n.ai-dark-mode-switch-moon svg > g #ai-dark-mode-switch-icon-spot-6 {\n  transform: translate(6px, 10.4px);\n  -webkit-transform: translate(6px, 10.4px);\n}\n\n.ai-dark-mode-switch-sun:hover #ai-dark-mode-switch-icon-moon {\n  fill: #000 !important;\n}\n.ai-dark-mode-switch-sun:hover g > circle {\n  fill: #000 !important;\n}\n\n.ai-dark-mode-switch-moon:hover #ai-dark-mode-switch-icon-moon {\n  fill: #fff !important;\n}\n.ai-dark-mode-switch-moon:hover g > circle {\n  fill: #fff !important;\n}");function s(t){var{lineHeight:e="2px",sheenHeight:i="4px",color:r="black",animDuration:o="1s",style:s={}}=t,l=a(t,["lineHeight","sheenHeight","color","animDuration","style"]);return n.createElement("div",Object.assign({id:"ai-line-sheen-container",style:Object.assign({"--ai-line-sheen-line-height":e,"--ai-line-sheen-sheen-height":i,"--ai-line-sheen-color":r,"--ai-line-sheen-tr-sec":o},s)},l,{"aria-hidden":!0,tabIndex:-1}),n.createElement("div",Object.assign({id:"ai-line-sheen-line"},l)))}i('#ai-line-sheen-container {\n  display: table;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  font-family: sans-serif;\n  overflow: hidden;\n  padding: var(--ai-line-sheen-line-height) 0;\n}\n#ai-line-sheen-container #ai-line-sheen-line {\n  position: absolute;\n  height: var(--ai-line-sheen-line-height);\n  width: 100%;\n  background: var(--ai-line-sheen-color);\n  overflow: hidden;\n}\n#ai-line-sheen-container #ai-line-sheen-line::after {\n  content: "";\n  position: fixed;\n  margin-top: calc((var(--ai-line-sheen-sheen-height) - var(--ai-line-sheen-line-height)) * -0.5);\n  width: 10%;\n  right: 100%;\n  height: var(--ai-line-sheen-sheen-height);\n  background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, var(--ai-line-sheen-color) 75%, var(--ai-line-sheen-color) 100%);\n  animation: drop var(--ai-line-sheen-tr-sec) 0s;\n  animation-fill-mode: forwards;\n  animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);\n}\n\n@keyframes drop {\n  0% {\n    width: 10%;\n    right: 100%;\n  }\n  30% {\n    width: 100%;\n  }\n  60% {\n    right: -10%;\n  }\n  100% {\n    width: 10%;\n    right: -10%;\n  }\n}\n.container {\n  margin-top: 20px;\n  width: 100%;\n  height: 80%;\n  background-color: #171717;\n  color: #000;\n  position: relative;\n  overflow: hidden;\n}\n.container .lines {\n  position: absolute;\n  height: 100%;\n  margin: auto;\n  width: 90vw;\n}\n.container .lines .line {\n  position: absolute;\n  width: 1px;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  overflow: hidden;\n}\n.container .lines .line::after {\n  content: "";\n  display: block;\n  position: absolute;\n  height: 15vh;\n  width: 100%;\n  top: -50%;\n  left: 0;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);\n  animation: drop 7s 0s infinite;\n  animation-fill-mode: forwards;\n  animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);\n}');function l(i){var{typeText:r,loop:o=!1,blinkGap:s="1s",constText:l="",constTextColor:c="black",typeTextColor:m="black",cursorColor:d="black",pauseMSec:h=1e3,typeMSec:f=100,deleteMSec:p=50,fontSize:k="20px",cursorHeight:w="22px",cursorWidth:g="2px",fontFamily:u="'Courier New', Courier, monospace",style:x={}}=i,b=a(i,["typeText","loop","blinkGap","constText","constTextColor","typeTextColor","cursorColor","pauseMSec","typeMSec","deleteMSec","fontSize","cursorHeight","cursorWidth","fontFamily","style"]);const[v,y]=t(""),[E,C]=t([0,-1]),[O,M]=t(h);return e((()=>{setTimeout((()=>{let n=E[0]==r.length?[0,-1]:E;if(n[1]==r[n[0]].length-1){if(!o&&E[0]==r.length-1)return;1==v.length?(n=[n[0]+1,-1],M(h)):M(p),y(v.slice(0,-1))}else n=[n[0],n[1]+1],y(v+r[n[0]][n[1]]),M(n[1]==r[n[0]].length-1?h:f);C(n)}),O)}),[v]),n.createElement("div",Object.assign({id:"ai-text-type-delete-container",style:Object.assign({"--ai-text-type-delete-cursor-blink":s,"--ai-text-type-delete-cursor-color":d,"--ai-text-type-delete-cursor-height":w,"--ai-text-type-delete-cursor-width":g,"--ai-text-type-delete-font-size":k,"--ai-text-type-delete-font-family":u},x),"aria-label":`An animation with constant text "${l}" and dynamic text which changes from "${r.join('" to "')}".`+(o?" It continually loops through the dynamic text.":"")},b),n.createElement("div",{id:"ai-text-type-delete-text","aria-hidden":!0},n.createElement("span",{style:{color:c}},l),n.createElement("span",{style:{color:m}},v)),n.createElement("div",{id:"ai-text-type-delete-cursor","aria-hidden":!0}))}i("#ai-text-type-delete-container {\n  text-align: center;\n}\n#ai-text-type-delete-container #ai-text-type-delete-text {\n  font-family: var(--ai-text-type-delete-font-family);\n  font-size: var(--ai-text-type-delete-font-size);\n  display: inline-block;\n  vertical-align: middle;\n  letter-spacing: 2px;\n}\n#ai-text-type-delete-container #ai-text-type-delete-cursor {\n  display: inline-block;\n  vertical-align: middle;\n  margin-bottom: 2px;\n  width: var(--ai-text-type-delete-cursor-width);\n  height: var(--ai-text-type-delete-cursor-height);\n  background-color: var(--ai-text-type-delete-cursor-color);\n  animation-name: cursor-blink;\n  animation-duration: var(--ai-text-type-delete-cursor-blink);\n  animation-timing-function: step-end;\n  animation-iteration-count: infinite;\n}\n@keyframes cursor-blink {\n  from, to {\n    background-color: transparent;\n  }\n  50% {\n    background-color: var(--ai-text-type-delete-cursor-color);\n  }\n}");export{r as ColorSwitch,o as DarkModeSwitch,s as LineSheen,l as TextTypeDelete};
