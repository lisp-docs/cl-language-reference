"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[67110],{83389:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var r=s(85893),t=s(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"shadow"})," ",(0,r.jsx)(s,{term:"function",children:(0,r.jsx)("i",{children:"Function"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{term:"shadow",children:(0,r.jsx)("b",{children:"shadow"})})," ",(0,r.jsx)(n.em,{children:"symbol-names"})," &optional ",(0,r.jsx)(n.em,{children:"package \u2192"})," ",(0,r.jsx)(s,{term:"t",children:(0,r.jsx)("b",{children:"t"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"symbol-names"}),"\u2014a ",(0,r.jsx)(s,{term:"designator",children:(0,r.jsx)("i",{children:"designator"})})," for a ",(0,r.jsx)(s,{term:"list",children:(0,r.jsx)("i",{children:"list"})})," of ",(0,r.jsx)(n.em,{children:"string designators"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{term:"package",children:(0,r.jsx)("i",{children:"package"})}),"\u2014a ",(0,r.jsx)(n.em,{children:"package designator"})," . The default is the ",(0,r.jsx)(n.em,{children:"current package"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{term:"shadow",children:(0,r.jsx)("b",{children:"shadow"})})," assures that ",(0,r.jsx)(s,{term:"symbol",children:(0,r.jsx)("i",{children:"symbols"})})," with names given by ",(0,r.jsx)(n.em,{children:"symbol-names"})," are ",(0,r.jsx)(s,{term:"present",children:(0,r.jsx)("i",{children:"present"})})," in the ",(0,r.jsx)(s,{term:"package",children:(0,r.jsx)("i",{children:"package"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Specifically, ",(0,r.jsx)(s,{term:"package",children:(0,r.jsx)("i",{children:"package"})})," is searched for ",(0,r.jsx)(s,{term:"symbol",children:(0,r.jsx)("i",{children:"symbols"})})," with the ",(0,r.jsx)(s,{term:"name",children:(0,r.jsx)("i",{children:"names"})})," supplied by ",(0,r.jsx)(n.em,{children:"symbol-names"}),". For each such ",(0,r.jsx)(s,{term:"name",children:(0,r.jsx)("i",{children:"name"})}),", if a corresponding ",(0,r.jsx)(s,{term:"symbol",children:(0,r.jsx)("i",{children:"symbol"})})," is not ",(0,r.jsx)(s,{term:"present",children:(0,r.jsx)("i",{children:"present"})})," in ",(0,r.jsx)(s,{term:"package",children:(0,r.jsx)("i",{children:"package"})})," (directly, not by inheritance), then a corresponding ",(0,r.jsx)(s,{term:"symbol",children:(0,r.jsx)("i",{children:"symbol"})})," is created with that ",(0,r.jsx)(s,{term:"name",children:(0,r.jsx)("i",{children:"name"})}),", and inserted into ",(0,r.jsx)(s,{term:"package",children:(0,r.jsx)("i",{children:"package"})})," as an ",(0,r.jsx)(n.em,{children:"internal symbol"}),". The corresponding ",(0,r.jsx)(s,{term:"symbol",children:(0,r.jsx)("i",{children:"symbol"})}),", whether pre-existing or newly created, is then added, if not already present, to the ",(0,r.jsx)(n.em,{children:"shadowing symbols list"})," of ",(0,r.jsx)(s,{term:"package",children:(0,r.jsx)("i",{children:"package"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'(package-shadowing-symbols (make-package \u2019temp)) \u2192 NIL \n(find-symbol \u2019car \u2019temp) \u2192 CAR, :INHERITED \n(shadow \u2019car \u2019temp) \u2192 T \n(find-symbol \u2019car \u2019temp) \u2192 TEMP::CAR, :INTERNAL \n(package-shadowing-symbols \u2019temp) \u2192 (TEMP::CAR) \n(make-package \u2019test-1) \u2192 #<PACKAGE "TEST-1"> \n(intern "TEST" (find-package \u2019test-1)) \u2192 TEST-1::TEST, NIL \n(shadow \u2019test-1::test (find-package \u2019test-1)) \u2192 T \n\n(shadow \u2019TEST (find-package \u2019test-1)) \u2192 T \n(assert (not (null (member \u2019test-1::test (package-shadowing-symbols \n\t\t\t\t\t  (find-package \u2019test-1)))))) \n(make-package \u2019test-2) \u2192 #<PACKAGE "TEST-2"> \n(intern "TEST" (find-package \u2019test-2)) \u2192 TEST-2::TEST, NIL \n(export \u2019test-2::test (find-package \u2019test-2)) \u2192 T \n(use-package \u2019test-2 (find-package \u2019test-1)) ;should not error \n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{term:"shadow",children:(0,r.jsx)("b",{children:"shadow"})})," changes the state of the package system in such a way that the package consistency rules do not hold across the change."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsx)(n.p,{children:"Current state of the package system."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{term:"package-shadowing-symbols",children:(0,r.jsx)("b",{children:"package-shadowing-symbols"})}),", Section 11.1 (Package Concepts)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["If a ",(0,r.jsx)(s,{term:"symbol",children:(0,r.jsx)("i",{children:"symbol"})})," with a name in ",(0,r.jsx)(n.em,{children:"symbol-names"})," already exists in ",(0,r.jsx)(s,{term:"package",children:(0,r.jsx)("i",{children:"package"})}),", but by inheritance, the inherited symbol becomes ",(0,r.jsx)(n.em,{children:"shadowed"})," ",(0,r.jsx)("sub",{children:"3"})," by a newly created ",(0,r.jsx)(n.em,{children:"internal symbol"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const a={title:"shadow"},d="shadow",o={id:"chap-11/bb-c-dictionary/shadow_function",title:"shadow",description:"Expanded Reference: shadow",source:"@site/docs/chap-11/bb-c-dictionary/shadow_function.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/shadow_function",permalink:"/cl-language-reference/chap-11/bb-c-dictionary/shadow_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/shadow_function.md",tags:[],version:"current",frontMatter:{title:"shadow"},sidebar:"tutorialSidebar",previous:{title:"rename-package",permalink:"/cl-language-reference/chap-11/bb-c-dictionary/rename-package_function"},next:{title:"shadowing-import",permalink:"/cl-language-reference/chap-11/bb-c-dictionary/shadowing-import_function"}},l={},h=[{value:"Expanded Reference: shadow",id:"expanded-reference-shadow",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"shadow",children:"shadow"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-shadow",children:"Expanded Reference: shadow"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(shadow )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>c});var r=s(67294);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);