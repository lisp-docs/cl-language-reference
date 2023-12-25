"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[1399],{78701:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var i=s(85893),r=s(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"package-shadowing-symbols"})," ",(0,i.jsx)(s,{term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s,{term:"package-shadowing-symbols",children:(0,i.jsx)("b",{children:"package-shadowing-symbols"})})," ",(0,i.jsx)(n.em,{children:"package \u2192 symbols"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),"\u2014a ",(0,i.jsx)(n.em,{children:"package designator"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s,{term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})}),"\u2014a ",(0,i.jsx)(s,{term:"list",children:(0,i.jsx)("i",{children:"list"})})," of ",(0,i.jsx)(s,{term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns a ",(0,i.jsx)(s,{term:"list",children:(0,i.jsx)("i",{children:"list"})})," of ",(0,i.jsx)(s,{term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})})," that have been declared as ",(0,i.jsx)(n.em,{children:"shadowing symbols"})," in ",(0,i.jsx)(s,{term:"package",children:(0,i.jsx)("i",{children:"package"})})," by ",(0,i.jsx)(s,{term:"shadow",children:(0,i.jsx)("b",{children:"shadow"})})," or ",(0,i.jsx)(s,{term:"shadowing-import",children:(0,i.jsx)("b",{children:"shadowing-import"})})," (or the equivalent ",(0,i.jsx)(s,{term:"defpackage",children:(0,i.jsx)("b",{children:"defpackage"})})," options). All ",(0,i.jsx)(s,{term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})})," on this ",(0,i.jsx)(s,{term:"list",children:(0,i.jsx)("i",{children:"list"})})," are ",(0,i.jsx)(s,{term:"present",children:(0,i.jsx)("i",{children:"present"})})," in ",(0,i.jsx)(s,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'(package-shadowing-symbols (make-package \u2019temp)) \u2192 () \n(shadow \u2019cdr \u2019temp) \u2192 T \n(package-shadowing-symbols \u2019temp) \u2192 (TEMP::CDR) \n(intern "PILL" \u2019temp) \u2192 TEMP::PILL, NIL \n(shadowing-import \u2019pill \u2019temp) \u2192 T \n(package-shadowing-symbols \u2019temp) \u2192 (PILL TEMP::CDR) \n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["Should signal an error of ",(0,i.jsx)(s,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(s,{term:"type-error",children:(0,i.jsx)("b",{children:"type-error"})})," if ",(0,i.jsx)(s,{term:"package",children:(0,i.jsx)("i",{children:"package"})})," is not a ",(0,i.jsx)(n.em,{children:"package designator"})," ."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s,{term:"shadow",children:(0,i.jsx)("b",{children:"shadow"})}),", ",(0,i.jsx)(s,{term:"shadowing-import",children:(0,i.jsx)("b",{children:"shadowing-import"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["Whether the list of ",(0,i.jsx)(s,{term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})})," is ",(0,i.jsx)(s,{term:"fresh",children:(0,i.jsx)("i",{children:"fresh"})})," is ",(0,i.jsx)(s,{term:"implementation-dependent",children:(0,i.jsx)("i",{children:"implementation-dependent"})}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}const t={title:"package-shadowing-symbols"},o="package-shadowing-symbols",l={id:"chap-11/bb-c-dictionary/package-shadowing-symbols_function",title:"package-shadowing-symbols",description:"Expanded Reference: package-shadowing-symbols",source:"@site/docs/chap-11/bb-c-dictionary/package-shadowing-symbols_function.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/package-shadowing-symbols_function",permalink:"/cl-language-reference/chap-11/bb-c-dictionary/package-shadowing-symbols_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/package-shadowing-symbols_function.md",tags:[],version:"current",frontMatter:{title:"package-shadowing-symbols"},sidebar:"tutorialSidebar",previous:{title:"package-nicknames",permalink:"/cl-language-reference/chap-11/bb-c-dictionary/package-nicknames_function"},next:{title:"package-use-list",permalink:"/cl-language-reference/chap-11/bb-c-dictionary/package-use-list_function"}},d={},h=[{value:"Expanded Reference: package-shadowing-symbols",id:"expanded-reference-package-shadowing-symbols",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"package-shadowing-symbols",children:"package-shadowing-symbols"}),"\n","\n","\n",(0,i.jsx)(a,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-package-shadowing-symbols",children:"Expanded Reference: package-shadowing-symbols"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(package-shadowing-symbols )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>a});var i=s(67294);const r={},c=i.createContext(r);function a(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);