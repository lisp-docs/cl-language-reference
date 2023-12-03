"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[59213],{98652:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>t,metadata:()=>d,toc:()=>p});var r=c(85893),a=c(11151);function i(e){const n={em:"em",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"in-package"})," ",(0,r.jsx)(n.em,{children:"Macro"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"in-package"})," ",(0,r.jsx)(n.em,{children:"name \u2192 package"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"name"}),"\u2014a ",(0,r.jsx)(n.em,{children:"string designator"})," ; not evaluated."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"package"}),"\u2014the ",(0,r.jsx)(n.em,{children:"package"})," named by ",(0,r.jsx)(n.em,{children:"name"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Causes the the ",(0,r.jsx)(n.em,{children:"package"})," named by ",(0,r.jsx)(n.em,{children:"name"})," to become the ",(0,r.jsx)(n.em,{children:"current package"}),"\u2014that is, the ",(0,r.jsx)(n.em,{children:"value"})," of ",(0,r.jsx)(n.strong,{children:"*package*"}),". If no such ",(0,r.jsx)(n.em,{children:"package"})," already exists, an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"package-error"})," is signaled."]}),"\n",(0,r.jsxs)(n.p,{children:["Everything ",(0,r.jsx)(n.strong,{children:"in-package"})," does is also performed at compile time if the call appears as a ",(0,r.jsx)(n.em,{children:"top level form"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"variable"})," ",(0,r.jsx)(n.strong,{children:"*package*"})," is assigned. If the ",(0,r.jsx)(n.strong,{children:"in-package"})," ",(0,r.jsx)(n.em,{children:"form"})," is a ",(0,r.jsx)(n.em,{children:"top level form"}),", this assignment also occurs at compile time."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["An error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"package-error"})," is signaled if the specified ",(0,r.jsx)(n.em,{children:"package"})," does not exist."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"*package*"})})]})}function s(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const t={},o="in-package",d={id:"chap-11/bb-c-dictionary/inpackage",title:"in-package",description:"Expanded Reference: in-package",source:"@site/docs/chap-11/bb-c-dictionary/inpackage.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/inpackage",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/inpackage",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/inpackage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"import",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/import"},next:{title:"intern",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/intern"}},l={},p=[{value:"Expanded Reference: in-package",id:"expanded-reference-in-package",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"in-package",children:"in-package"}),"\n","\n","\n",(0,r.jsx)(s,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-in-package",children:"Expanded Reference: in-package"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(in-package )\n"})})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>t,a:()=>s});var r=c(67294);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);