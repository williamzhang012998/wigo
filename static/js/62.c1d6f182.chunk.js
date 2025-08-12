"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[62,382],{6382:(e,n,r)=>{r.r(n),r.d(n,{Note:()=>c,Page:()=>i,Section:()=>a,Toc:()=>o});var t=r(9);const i=t.Ay.main`
  max-width: 920px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;

  h1 {
    margin-bottom: 0.25rem;
    font-size: clamp(1.75rem, 2.5vw, 2.25rem);
  }

  .subtitle {
    margin: 0 0 0.25rem 0;
    color: #72C3C3;
  }
  .updated {
    margin: 0 0 1.5rem 0;
    font-size: 0.875rem;
    color: #72C3C3;
  }
`,o=t.Ay.nav`
  background-color: #333333;
  color: #ffffff;
  padding: 1rem 1.25rem;
  border-radius: 8px;
  line-height: 1.6;

  strong {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #72C3C3;
  }

  ul {
    margin: 0;
    padding-left: 1rem;
    list-style: disc;
  }

  a {
    color: #72C3C3;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`,a=t.Ay.section`
  margin-top: 2rem;

  h2 {
    margin: 0 0 0.5rem;
    font-size: clamp(1.25rem, 2vw, 1.5rem);
  }

  p, ul, ol {
    color: #72C3C3;
  }

  ul, ol {
    padding-left: 1.25rem;
  }

  a {
    color: #CCA14A;
  }
`,c=t.Ay.aside`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border-left: 4px solid #CCA14A;
  background: #333333;
  border-radius: 4px;
  color: #72C3C3;
`},7635:(e,n,r)=>{r.d(n,{A:()=>E});var t=r(8168),i=r(4467),o=r(5544),a=r(9379),c=r(5043);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"};var l=r(2172),d=function(e,n){return c.createElement(l.A,(0,a.A)((0,a.A)({},e),{},{ref:n,icon:s}))};const h=c.forwardRef(d);var u=r(8139),f=r.n(u),m=r(7492),p=r(7950);var v=r(8678);var g=r(5296);function x(e){return null!==e&&void 0!==e&&e===e.window}function y(e,n){var r,t;if("undefined"===typeof window)return 0;var i=n?"scrollTop":"scrollLeft",o=0;return x(e)?o=e[n?"pageYOffset":"pageXOffset"]:e instanceof Document?o=e.documentElement[i]:(e instanceof HTMLElement||e)&&(o=e[i]),e&&!x(e)&&"number"!==typeof o&&(o=null===(t=(null!==(r=e.ownerDocument)&&void 0!==r?r:e).documentElement)||void 0===t?void 0:t[i]),o}var j=c.isValidElement;function w(e,n){return function(e,n,r){return j(e)?c.cloneElement(e,"function"===typeof r?r(e.props||{}):r):n}(e,e,n)}var b=r(5818);var C=r(436);function A(e){var n,r=function(){if(null==n){for(var r=arguments.length,t=new Array(r),i=0;i<r;i++)t[i]=arguments[i];n=(0,b.A)(function(r){return function(){n=null,e.apply(void 0,(0,C.A)(r))}}(t))}};return r.cancel=function(){b.A.cancel(n),n=null},r}var P=function(e){var n=e.prefixCls,r=e.rootPrefixCls,t=e.children,i=e.visible,o=c.createElement("div",{className:"".concat(n,"-content")},c.createElement("div",{className:"".concat(n,"-icon")},c.createElement(h,null)));return c.createElement(m.Ay,{visible:i,motionName:"".concat(r,"-fade")},function(e){var n=e.className;return w(t||o,function(e){var r=e.className;return{className:f()(n,r)}})})},k=function(e){var n=(0,v.A)(!1,{value:e.visible}),r=(0,o.A)(n,2),a=r[0],s=r[1],l=c.createRef(),d=c.useRef(null),h=function(){return l.current&&l.current.ownerDocument?l.current.ownerDocument:window},u=A(function(n){var r=e.visibilityHeight,t=void 0===r?400:r,i=y(n.target,!0);s(i>t)}),m=function(){var n=(e.target||h)();d.current=function(e,n,r,t){var i=p.unstable_batchedUpdates?function(e){p.unstable_batchedUpdates(r,e)}:r;return null!==e&&void 0!==e&&e.addEventListener&&e.addEventListener(n,i,t),{remove:function(){null!==e&&void 0!==e&&e.removeEventListener&&e.removeEventListener(n,i,t)}}}(n,"scroll",function(e){u(e)}),u({target:n})};c.useEffect(function(){return m(),function(){d.current&&d.current.remove(),u.cancel()}},[e.target]);var j=c.useContext(g.QO),w=j.getPrefixCls,C=j.direction,k=e.prefixCls,E=e.className,S=void 0===E?"":E,N=w("back-top",k),O=w(),T=f()(N,(0,i.A)({},"".concat(N,"-rtl"),"rtl"===C),S),W=function(e,n){var r=Object.assign({},e);return Array.isArray(n)&&n.forEach(function(e){delete r[e]}),r}(e,["prefixCls","className","children","visibilityHeight","target","visible"]);return c.createElement("div",(0,t.A)({},W,{className:T,onClick:function(n){var r=e.onClick,t=e.target,i=e.duration;!function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.getContainer,t=void 0===r?function(){return window}:r,i=n.callback,o=n.duration,a=void 0===o?450:o,c=t(),s=y(c,!0),l=Date.now();(0,b.A)(function n(){var r=Date.now()-l,t=function(e,n,r,t){var i=r-n;return(e/=t/2)<1?i/2*e*e*e+n:i/2*((e-=2)*e*e+2)+n}(r>a?a:r,s,e,a);x(c)?c.scrollTo(window.pageXOffset,t):c instanceof Document||"HTMLDocument"===c.constructor.name?c.documentElement.scrollTop=t:c.scrollTop=t,r<a?(0,b.A)(n):"function"===typeof i&&i()})}(0,{getContainer:t||h,duration:void 0===i?450:i}),"function"===typeof r&&r(n)},ref:l}),c.createElement(P,{prefixCls:N,rootPrefixCls:O,visible:a},e.children))};const E=c.memo(k)},9062:(e,n,r)=>{r.r(n),r.d(n,{default:()=>d});var t=r(5043),i=r(7635),o=r(9998),a=r(6382),c=r(579);const s=(0,t.lazy)(()=>Promise.resolve().then(r.bind(r,1766))),l=(0,t.lazy)(()=>r.e(538).then(r.bind(r,8538))),d=()=>(0,c.jsxs)(s,{children:[(0,c.jsx)(l,{}),(0,c.jsxs)(a.Page,{children:[(0,c.jsx)("h1",{children:"Privacy Policy"}),(0,c.jsx)("p",{className:"subtitle",children:"This Privacy Policy explains what information we collect and how we use it."}),(0,c.jsx)("p",{className:"updated",children:"Last updated: August 11, 2025"}),(0,c.jsxs)(a.Toc,{"aria-label":"Table of contents",children:[(0,c.jsx)("strong",{children:"On this page"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#collect",children:"1. Information We Collect"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#use",children:"2. How We Use Information"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#cookies",children:"3. Cookies & Tracking"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#sharing",children:"4. Data Sharing"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#retention",children:"5. Data Retention"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#rights",children:"6. Your Rights"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#security",children:"7. Security"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#children",children:"8. Children\u2019s Privacy"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#transfers",children:"9. International Transfers"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#changes",children:"10. Changes to This Policy"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#contact",children:"11. Contact Us"})})]})]}),(0,c.jsx)(o.A,{}),(0,c.jsxs)(a.Section,{id:"collect",children:[(0,c.jsx)("h2",{children:"1. Information We Collect"}),(0,c.jsx)("p",{children:"We collect information you provide directly (e.g., account details, messages), as well as data collected automatically (e.g., device info, usage data, and cookies)."})]}),(0,c.jsxs)(a.Section,{id:"use",children:[(0,c.jsx)("h2",{children:"2. How We Use Information"}),(0,c.jsx)("p",{children:"We use your information to provide and improve the service, personalize content, communicate with you, ensure security, and comply with legal obligations."})]}),(0,c.jsxs)(a.Section,{id:"cookies",children:[(0,c.jsx)("h2",{children:"3. Cookies & Tracking"}),(0,c.jsx)("p",{children:"We use cookies and similar technologies to remember your preferences, analyze traffic, and measure the effectiveness of our services. You can control cookies via your browser settings."})]}),(0,c.jsxs)(a.Section,{id:"sharing",children:[(0,c.jsx)("h2",{children:"4. Data Sharing"}),(0,c.jsx)("p",{children:"We do not sell your personal information. We may share data with service providers, to comply with the law, or during business transactions (e.g., mergers or acquisitions)."})]}),(0,c.jsxs)(a.Section,{id:"retention",children:[(0,c.jsx)("h2",{children:"5. Data Retention"}),(0,c.jsx)("p",{children:"We retain information for as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required or permitted by law."})]}),(0,c.jsxs)(a.Section,{id:"rights",children:[(0,c.jsx)("h2",{children:"6. Your Rights"}),(0,c.jsx)("p",{children:"Depending on your location, you may have rights to access, correct, delete, or restrict the processing of your data, as well as the right to data portability and to withdraw consent."})]}),(0,c.jsxs)(a.Section,{id:"security",children:[(0,c.jsx)("h2",{children:"7. Security"}),(0,c.jsx)("p",{children:"We implement technical and organizational measures designed to protect your information. However, no method of transmission or storage is completely secure."})]}),(0,c.jsxs)(a.Section,{id:"children",children:[(0,c.jsx)("h2",{children:"8. Children\u2019s Privacy"}),(0,c.jsx)("p",{children:"Our services are not directed to children under 13 (or the age required by local law). We do not knowingly collect personal data from children."})]}),(0,c.jsxs)(a.Section,{id:"transfers",children:[(0,c.jsx)("h2",{children:"9. International Transfers"}),(0,c.jsx)("p",{children:"Your information may be transferred to and processed in countries other than your own. We take steps to ensure appropriate safeguards are in place."})]}),(0,c.jsxs)(a.Section,{id:"changes",children:[(0,c.jsx)("h2",{children:"10. Changes to This Policy"}),(0,c.jsx)("p",{children:"We may update this Privacy Policy from time to time. We will post the updated version on this page and revise the \u201cLast updated\u201d date above."})]}),(0,c.jsxs)(a.Section,{id:"contact",children:[(0,c.jsx)("h2",{children:"11. Contact Us"}),(0,c.jsxs)("p",{children:["Questions about this Policy? Reach out at ",(0,c.jsx)("a",{href:"mailto:privacy@example.com",children:"privacy@example.com"}),"."]}),(0,c.jsx)(a.Note,{children:"If any provision of this Policy is found to be unenforceable, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect."})]}),(0,c.jsx)(i.A,{})]})]})},9998:(e,n,r)=>{r.d(n,{A:()=>d});var t=r(8168),i=r(4467),o=r(8139),a=r.n(o),c=r(5043),s=r(5296),l=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]])}return r};const d=function(e){var n=c.useContext(s.QO),r=n.getPrefixCls,o=n.direction,d=e.prefixCls,h=e.type,u=void 0===h?"horizontal":h,f=e.orientation,m=void 0===f?"center":f,p=e.orientationMargin,v=e.className,g=e.children,x=e.dashed,y=e.plain,j=l(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),w=r("divider",d),b=m.length>0?"-".concat(m):m,C=!!g,A="left"===m&&null!=p,P="right"===m&&null!=p,k=a()(w,"".concat(w,"-").concat(u),(0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)({},"".concat(w,"-with-text"),C),"".concat(w,"-with-text").concat(b),C),"".concat(w,"-dashed"),!!x),"".concat(w,"-plain"),!!y),"".concat(w,"-rtl"),"rtl"===o),"".concat(w,"-no-default-orientation-margin-left"),A),"".concat(w,"-no-default-orientation-margin-right"),P),v),E=(0,t.A)((0,t.A)({},A&&{marginLeft:p}),P&&{marginRight:p});return c.createElement("div",(0,t.A)({className:k},j,{role:"separator"}),g&&"vertical"!==u&&c.createElement("span",{className:"".concat(w,"-inner-text"),style:E},g))}}}]);
//# sourceMappingURL=62.c1d6f182.chunk.js.map