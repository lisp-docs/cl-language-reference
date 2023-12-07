"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[25955],{1486:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var c=s(85893),a=s(11151);function r(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"unuse-package"})," ",(0,c.jsx)(n.em,{children:"Function"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"unuse-package"})," ",(0,c.jsx)(n.em,{children:"packages-to-unuse"})," &optional ",(0,c.jsx)(n.em,{children:"package \u2192"})," ",(0,c.jsx)(n.strong,{children:"t"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"packages-to-unuse"}),"\u2014a ",(0,c.jsx)(n.em,{children:"designator"})," for a ",(0,c.jsx)(n.em,{children:"list"})," of ",(0,c.jsx)(n.em,{children:"package designators"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"package"}),"\u2014a ",(0,c.jsx)(n.em,{children:"package designator"})," . The default is the ",(0,c.jsx)(n.em,{children:"current package"}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"unuse-package"})," causes ",(0,c.jsx)(n.em,{children:"package"})," to cease inheriting all the ",(0,c.jsx)(n.em,{children:"external symbols"})," of ",(0,c.jsx)(n.em,{children:"packages-to-unuse"}),"; ",(0,c.jsx)(n.strong,{children:"unuse-package"})," undoes the effects of ",(0,c.jsx)(n.strong,{children:"use-package"}),". The ",(0,c.jsx)(n.em,{children:"packages-to-unuse"})," are removed from the ",(0,c.jsx)(n.em,{children:"use list"})," of ",(0,c.jsx)(n.em,{children:"package"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["Any ",(0,c.jsx)(n.em,{children:"symbols"})," that have been ",(0,c.jsx)(n.em,{children:"imported"})," into ",(0,c.jsx)(n.em,{children:"package"})," continue to be ",(0,c.jsx)(n.em,{children:"present"})," in ",(0,c.jsx)(n.em,{children:"package"}),". ",(0,c.jsx)(n.strong,{children:"Examples:"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:'\n(in-package "COMMON-LISP-USER") \u2192 #<PACKAGE "COMMON-LISP-USER"> \n(export (intern "SHOES" (make-package \u2019temp)) \u2019temp) \u2192 T \n(find-symbol "SHOES") \u2192 NIL, NIL \n(use-package \u2019temp) \u2192 T \n(find-symbol "SHOES") \u2192 SHOES, :INHERITED \n(find (find-package \u2019temp) (package-use-list \u2019common-lisp-user)) \u2192 #<PACKAGE "TEMP"> (unuse-package \u2019temp) \u2192 T \n(find-symbol "SHOES") \u2192 NIL, NIL \n\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.em,{children:"use list"})," of ",(0,c.jsx)(n.em,{children:"package"})," is modified."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,c.jsx)(n.p,{children:"Current state of the package system."}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"use-package"}),", ",(0,c.jsx)(n.strong,{children:"package-use-list"})]})]})}function t(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(r,{...e})}):r(e)}const i={},d="unuse-package",o={id:"chap-11/bb-c-dictionary/unusepackage",title:"unuse-package",description:"Expanded Reference: unuse-package",source:"@site/docs/chap-11/bb-c-dictionary/unusepackage.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/unusepackage",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/unusepackage",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/unusepackage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"unintern",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/unintern"},next:{title:"use-package",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/usepackage"}},l={},p=[{value:"Expanded Reference: unuse-package",id:"expanded-reference-unuse-package",level:2}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"unuse-package",children:"unuse-package"}),"\n","\n","\n",(0,c.jsx)(t,{}),"\n",(0,c.jsx)(n.h2,{id:"expanded-reference-unuse-package",children:"Expanded Reference: unuse-package"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(unuse-package )\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>t});var c=s(67294);const a={},r=c.createContext(a);function t(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);