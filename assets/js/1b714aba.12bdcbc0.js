"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[2141],{72383:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var a=s(85893),r=s(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"shadow"})," ",(0,a.jsx)(n.em,{children:"Function"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"shadow"})," ",(0,a.jsx)(n.em,{children:"symbol-names"})," &optional ",(0,a.jsx)(n.em,{children:"package \u2192"})," ",(0,a.jsx)(n.strong,{children:"t"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"symbol-names"}),"\u2014a ",(0,a.jsx)(n.em,{children:"designator"})," for a ",(0,a.jsx)(n.em,{children:"list"})," of ",(0,a.jsx)(n.em,{children:"string designators"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"package"}),"\u2014a ",(0,a.jsx)(n.em,{children:"package designator"})," . The default is the ",(0,a.jsx)(n.em,{children:"current package"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Description:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"shadow"})," assures that ",(0,a.jsx)(n.em,{children:"symbols"})," with names given by ",(0,a.jsx)(n.em,{children:"symbol-names"})," are ",(0,a.jsx)(n.em,{children:"present"})," in the ",(0,a.jsx)(n.em,{children:"package"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Specifically, ",(0,a.jsx)(n.em,{children:"package"})," is searched for ",(0,a.jsx)(n.em,{children:"symbols"})," with the ",(0,a.jsx)(n.em,{children:"names"})," supplied by ",(0,a.jsx)(n.em,{children:"symbol-names"}),". For each such ",(0,a.jsx)(n.em,{children:"name"}),", if a corresponding ",(0,a.jsx)(n.em,{children:"symbol"})," is not ",(0,a.jsx)(n.em,{children:"present"})," in ",(0,a.jsx)(n.em,{children:"package"})," (directly, not by inheritance), then a corresponding ",(0,a.jsx)(n.em,{children:"symbol"})," is created with that ",(0,a.jsx)(n.em,{children:"name"}),", and inserted into ",(0,a.jsx)(n.em,{children:"package"})," as an ",(0,a.jsx)(n.em,{children:"internal symbol"}),". The corresponding ",(0,a.jsx)(n.em,{children:"symbol"}),", whether pre-existing or newly created, is then added, if not already present, to the ",(0,a.jsx)(n.em,{children:"shadowing symbols list"})," of ",(0,a.jsx)(n.em,{children:"package"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lisp",children:' \n\n\n\n(package-shadowing-symbols (make-package \u2019temp)) *\u2192* NIL \n\n\n\n(find-symbol \u2019car \u2019temp) *\u2192* CAR, :INHERITED \n\n\n\n(shadow \u2019car \u2019temp) *\u2192* T \n\n\n\n(find-symbol \u2019car \u2019temp) *\u2192* TEMP::CAR, :INTERNAL \n\n\n\n(package-shadowing-symbols \u2019temp) *\u2192* (TEMP::CAR) \n\n\n\n(make-package \u2019test-1) *\u2192* #<PACKAGE "TEST-1"> \n\n\n\n(intern "TEST" (find-package \u2019test-1)) *\u2192* TEST-1::TEST, NIL \n\n\n\n(shadow \u2019test-1::test (find-package \u2019test-1)) *\u2192* T \n\n\n\n\n\n\n\n \n\n\n\n \n\n\n\n(shadow \u2019TEST (find-package \u2019test-1)) *\u2192* T \n\n\n\n(assert (not (null (member \u2019test-1::test (package-shadowing-symbols \n\n\n\n(find-package \u2019test-1)))))) \n\n\n\n(make-package \u2019test-2) *\u2192* #<PACKAGE "TEST-2"> \n\n\n\n(intern "TEST" (find-package \u2019test-2)) *\u2192* TEST-2::TEST, NIL \n\n\n\n(export \u2019test-2::test (find-package \u2019test-2)) *\u2192* T \n\n\n\n(use-package \u2019test-2 (find-package \u2019test-1)) ;should not error \n\n\n\n\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"shadow"})," changes the state of the package system in such a way that the package consistency rules do not hold across the change."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,a.jsx)(n.p,{children:"Current state of the package system."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"package-shadowing-symbols"}),", Section 11.1 (Package Concepts)"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,a.jsxs)(n.p,{children:["If a ",(0,a.jsx)(n.em,{children:"symbol"})," with a name in ",(0,a.jsx)(n.em,{children:"symbol-names"})," already exists in ",(0,a.jsx)(n.em,{children:"package"}),", but by inheritance, the inherited symbol becomes ",(0,a.jsx)(n.em,{children:"shadowed"})," ",(0,a.jsx)("sub",{children:"3"})," by a newly created ",(0,a.jsx)(n.em,{children:"internal symbol"}),"."]})]})}function t(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}const i={},d="shadow",o={id:"chap-11/bb-c-dictionary/shadow",title:"shadow",description:"Expanded Reference: shadow",source:"@site/docs/chap-11/bb-c-dictionary/shadow.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/shadow",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/shadow",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/shadow.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rename-package",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/renamepackage"},next:{title:"shadowing-import",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/shadowingimport"}},l={},h=[{value:"Expanded Reference: shadow",id:"expanded-reference-shadow",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"shadow",children:"shadow"}),"\n","\n","\n",(0,a.jsx)(t,{}),"\n",(0,a.jsx)(n.h2,{id:"expanded-reference-shadow",children:"Expanded Reference: shadow"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lisp",children:"(shadow )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>t});var a=s(67294);const r={},c=a.createContext(r);function t(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);