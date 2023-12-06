"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[77195],{59179:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=s(85893),c=s(11151);function r(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"package-shadowing-symbols"})," ",(0,a.jsx)(n.em,{children:"Function"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"package-shadowing-symbols"})," ",(0,a.jsx)(n.em,{children:"package \u2192 symbols"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"package"}),"\u2014a ",(0,a.jsx)(n.em,{children:"package designator"})," ."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"symbols"}),"\u2014a ",(0,a.jsx)(n.em,{children:"list"})," of ",(0,a.jsx)(n.em,{children:"symbols"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Description:"})}),"\n",(0,a.jsxs)(n.p,{children:["Returns a ",(0,a.jsx)(n.em,{children:"list"})," of ",(0,a.jsx)(n.em,{children:"symbols"})," that have been declared as ",(0,a.jsx)(n.em,{children:"shadowing symbols"})," in ",(0,a.jsx)(n.em,{children:"package"})," by ",(0,a.jsx)(n.strong,{children:"shadow"})," or ",(0,a.jsx)(n.strong,{children:"shadowing-import"})," (or the equivalent ",(0,a.jsx)(n.strong,{children:"defpackage"})," options). All ",(0,a.jsx)(n.em,{children:"symbols"})," on this ",(0,a.jsx)(n.em,{children:"list"})," are ",(0,a.jsx)(n.em,{children:"present"})," in ",(0,a.jsx)(n.em,{children:"package"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lisp",children:' \n\n(package-shadowing-symbols (make-package \u2019temp)) \u2192 () \n\n(shadow \u2019cdr \u2019temp) \u2192 T \n\n(package-shadowing-symbols \u2019temp) \u2192 (TEMP::CDR) \n\n(intern "PILL" \u2019temp) \u2192 TEMP::PILL, NIL \n\n(shadowing-import \u2019pill \u2019temp) \u2192 T \n\n(package-shadowing-symbols \u2019temp) \u2192 (PILL TEMP::CDR) \n\n\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,a.jsxs)(n.p,{children:["Should signal an error of ",(0,a.jsx)(n.em,{children:"type"})," ",(0,a.jsx)(n.strong,{children:"type-error"})," if ",(0,a.jsx)(n.em,{children:"package"})," is not a ",(0,a.jsx)(n.em,{children:"package designator"})," ."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"shadow"}),", ",(0,a.jsx)(n.strong,{children:"shadowing-import"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,a.jsxs)(n.p,{children:["Whether the list of ",(0,a.jsx)(n.em,{children:"symbols"})," is ",(0,a.jsx)(n.em,{children:"fresh"})," is ",(0,a.jsx)(n.em,{children:"implementation-dependent"}),"."]})]})}function i(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}const o={},t="package-shadowing-symbols",d={id:"chap-11/bb-c-dictionary/packageshadowingsymbols",title:"package-shadowing-symbols",description:"Expanded Reference: package-shadowing-symbols",source:"@site/docs/chap-11/bb-c-dictionary/packageshadowingsymbols.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/packageshadowingsymbols",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/packageshadowingsymbols",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/packageshadowingsymbols.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"packagep",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/packagep"},next:{title:"package-used-by-list",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/packageusedbylist"}},l={},p=[{value:"Expanded Reference: package-shadowing-symbols",id:"expanded-reference-package-shadowing-symbols",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"package-shadowing-symbols",children:"package-shadowing-symbols"}),"\n","\n","\n",(0,a.jsx)(i,{}),"\n",(0,a.jsx)(n.h2,{id:"expanded-reference-package-shadowing-symbols",children:"Expanded Reference: package-shadowing-symbols"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lisp",children:"(package-shadowing-symbols )\n"})})]})}function g(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var a=s(67294);const c={},r=a.createContext(c);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);