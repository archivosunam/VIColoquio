"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[291],{8291:function(e,l,t){t.r(l),t.d(l,{default:function(){return h}});var a=t(2809),s=(t(7294),t(4184)),i=t.n(s),r=t(4702),n=t(8806),c=t(6184),d=t(4329),o=t(9495),f=t(5893);function u(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?u(Object(t),!0).forEach((function(l){(0,a.Z)(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function h(e){var l,t,a,s,r,d,o,u,h,x,N,g,w=e.elementId||null,y=e.colors||"colors-a",O=e.styles||{},k=(null===(l=O.self)||void 0===l?void 0:l.width)||"wide",P=(null===(t=O.self)||void 0===t?void 0:t.height)||"auto",G=(null===(a=O.self)||void 0===a?void 0:a.justifyContent)||"center";return(0,f.jsx)("div",m(m({id:w},(0,c.T)(e)),{},{className:i()("sb-component","sb-component-section","sb-component-featured-people-section",y,"flex","flex-col","justify-center",v(P),null===(s=O.self)||void 0===s?void 0:s.margin,(null===(r=O.self)||void 0===r?void 0:r.padding)||"py-12 px-4",null===(d=O.self)||void 0===d?void 0:d.borderColor,null!==(o=O.self)&&void 0!==o&&o.borderStyle?(0,n.G)({borderStyle:null===(u=O.self)||void 0===u?void 0:u.borderStyle}):"border-none",null!==(h=O.self)&&void 0!==h&&h.borderRadius?(0,n.G)({borderRadius:null===(x=O.self)||void 0===x?void 0:x.borderRadius}):null),style:{borderWidth:null!==(N=O.self)&&void 0!==N&&N.borderWidth?"".concat(null===(g=O.self)||void 0===g?void 0:g.borderWidth,"px"):null},children:(0,f.jsx)("div",{className:i()("flex","w-full",(0,n.G)({justifyContent:G})),children:(0,f.jsxs)("div",{className:i()("w-full",j(k)),children:[e.title&&(0,f.jsx)("h2",{className:i()(O.title?(0,n.G)(O.title):null),"data-sb-field-path":".title",children:e.title}),e.subtitle&&(0,f.jsx)("p",{className:i()("text-lg","sm:text-xl",O.subtitle?(0,n.G)(O.subtitle):null,{"mt-6":e.title}),"data-sb-field-path":".subtitle",children:e.subtitle}),b(e),p(e)]})})}))}function p(e){if(0===(e.actions||[]).length)return null;var l=e.styles||{};return(0,f.jsx)("div",{className:"mt-12 overflow-x-hidden",children:(0,f.jsx)("div",{className:i()("flex","flex-wrap","items-center","-mx-2",l.actions?(0,n.G)(l.actions):null),"data-sb-field-path":".actions",children:e.actions.map((function(e,l){return(0,f.jsx)(d.Z,m(m({},e),{},{className:"mb-3 mx-2 lg:whitespace-nowrap","data-sb-field-path":".".concat(l)}),l)}))})})}function b(e){switch(e.variant||"variant-a"){case"variant-a":return function(e){var l=e.people||[];if(0===l.length)return null;return(0,f.jsx)("div",{className:i()("grid","gap-6","sm:grid-cols-2","lg:grid-cols-4","lg:gap-8",{"mt-12":e.title||e.subtitle}),"data-sb-field-path":".people",children:l.map((function(e,l){return(0,f.jsxs)("article",{"data-sb-field-path":".".concat(l),children:[e.image&&(0,f.jsx)("div",{className:"h-0 w-full pt-1/1 relative","data-sb-field-path":".image",children:(0,f.jsx)(o.default,m(m({},e.image),{},{className:"absolute left-0 h-full object-cover top-0 w-full"}))}),(0,f.jsxs)("div",{className:i()("mb-4",{"pt-6":e.image}),children:[(e.firstName||e.lastName)&&(0,f.jsxs)("h3",{children:[e.firstName&&(0,f.jsx)("span",{"data-sb-field-path":".firstName",children:e.firstName})," ",e.lastName&&(0,f.jsx)("span",{"data-sb-field-path":".lastName",children:e.lastName})]}),e.role&&(0,f.jsx)("p",{"data-sb-field-path":".role",children:e.role})]})]},l)}))})}(e);case"variant-b":return function(e){var l=e.people||[];if(0===l.length)return null;return(0,f.jsx)("div",{className:i()("grid","gap-x-8","gap-y-10","lg:grid-cols-2",{"mt-12":e.title||e.subtitle}),"data-sb-field-path":".people",children:l.map((function(e,l){return(0,f.jsxs)("article",{className:"sm:flex","data-sb-field-path":".".concat(l),children:[e.image&&(0,f.jsx)("div",{className:"w-full sm:flex-shrink-0 sm:h-full sm:w-1/3",children:(0,f.jsx)("div",{className:"block h-0 w-full pt-1/1 relative","data-sb-field-path":".image",children:(0,f.jsx)(o.default,m(m({},e.image),{},{className:"absolute left-0 h-full object-cover top-0 w-full"}))})}),(0,f.jsxs)("div",{className:i()("mb-4","sm:flex-grow",{"pt-6 sm:pt-0 sm:pl-6":e.image}),children:[(e.firstName||e.lastName)&&(0,f.jsxs)("h3",{children:[e.firstName&&(0,f.jsx)("span",{"data-sb-field-path":".firstName",children:e.firstName})," ",e.lastName&&(0,f.jsx)("span",{"data-sb-field-path":".lastName",children:e.lastName})]}),e.role&&(0,f.jsx)("p",{"data-sb-field-path":".role",children:e.role}),e.bio&&(0,f.jsx)(r.Z,{options:{forceBlock:!0,forceWrapper:!0},className:i()({"mt-4":e.firstName||e.lastName||e.role}),"data-sb-field-path":".bio",children:e.bio})]})]},l)}))})}(e);case"variant-c":return function(e){var l=e.people||[];if(0===l.length)return null;var t=Math.floor(l.length/2),a=l.slice(0,t),s=l.slice(t,l.length);return(0,f.jsxs)("div",{className:i()("grid","gap-x-6","gap-y-12","sm:grid-cols-2",{"mt-12":e.title||e.subtitle}),"data-sb-field-path":".people",children:[a.length>0&&(0,f.jsx)("div",{className:"sm:mt-32",children:x(a)}),s.length>0&&(0,f.jsx)("div",{children:x(s,t)})]})}(e)}return null}function x(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.map((function(e,t,a){return(0,f.jsxs)("article",{className:i()(a.length-1===t?null:"mb-12"),"data-sb-field-path":".".concat(l+t),children:[e.image&&(0,f.jsx)("div",{"data-sb-field-path":".image",children:(0,f.jsx)(o.default,m(m({},e.image),{},{className:"w-full"}))}),(0,f.jsxs)("div",{className:i()({"mt-4":e.image}),children:[(e.firstName||e.lastName||e.role)&&(0,f.jsxs)("h3",{className:i()({"mb-3":e.bio}),children:[e.firstName&&(0,f.jsx)("span",{"data-sb-field-path":".firstName",children:e.firstName})," ",e.lastName&&(0,f.jsx)("span",{"data-sb-field-path":".lastName",children:e.lastName})," ",(e.firstName||e.lastName)&&e.role&&(0,f.jsx)("span",{className:"mx-1",children:"|"})," ",e.role&&(0,f.jsx)("span",{"data-sb-field-path":".role",children:e.role})]}),e.bio&&(0,f.jsx)(r.Z,{options:{forceBlock:!0,forceWrapper:!0},className:"sb-markdown","data-sb-field-path":".bio",children:e.bio})]})]},t)}))}function v(e){switch(e){case"auto":return"min-h-0";case"screen":return"min-h-screen"}return null}function j(e){switch(e){case"narrow":return"max-w-screen-md";case"wide":return"max-w-screen-xl";case"full":return"max-w-full"}return null}}}]);