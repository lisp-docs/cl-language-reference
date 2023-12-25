"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[18468],{8425:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var c=a(85893),r=a(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"make-package"})," ",(0,c.jsx)(a,{term:"function",children:(0,c.jsx)("i",{children:"Function"})})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(a,{term:"make-package",children:(0,c.jsx)("b",{children:"make-package"})})," ",(0,c.jsx)(n.em,{children:"package-name"})," &key ",(0,c.jsx)(n.em,{children:"nicknames use \u2192 package"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"package-name"}),"\u2014a ",(0,c.jsx)(n.em,{children:"string designator"})," ."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(a,{term:"nickname",children:(0,c.jsx)("i",{children:"nicknames"})}),"\u2014a ",(0,c.jsx)(a,{term:"list",children:(0,c.jsx)("i",{children:"list"})})," of ",(0,c.jsx)(n.em,{children:"string designators"}),". The default is the ",(0,c.jsx)(n.em,{children:"empty list"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(a,{term:"use",children:(0,c.jsx)("i",{children:"use"})}),"\u2014a ",(0,c.jsx)(a,{term:"list",children:(0,c.jsx)("i",{children:"list"})})," of ",(0,c.jsx)(n.em,{children:"package designators"}),". The default is ",(0,c.jsx)(a,{term:"implementation-defined",children:(0,c.jsx)("i",{children:"implementation-defined"})}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(a,{term:"package",children:(0,c.jsx)("i",{children:"package"})}),"\u2014a ",(0,c.jsx)(a,{term:"package",children:(0,c.jsx)("i",{children:"package"})}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(n.p,{children:["Creates a new ",(0,c.jsx)(a,{term:"package",children:(0,c.jsx)("i",{children:"package"})})," with the name ",(0,c.jsx)(n.em,{children:"package-name"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(a,{term:"nickname",children:(0,c.jsx)("i",{children:"Nicknames"})})," are additional ",(0,c.jsx)(a,{term:"name",children:(0,c.jsx)("i",{children:"names"})})," which may be used to refer to the new ",(0,c.jsx)(a,{term:"package",children:(0,c.jsx)("i",{children:"package"})}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(a,{term:"use",children:(0,c.jsx)("i",{children:"use"})})," specifies zero or more ",(0,c.jsx)(a,{term:"package",children:(0,c.jsx)("i",{children:"packages"})})," the ",(0,c.jsx)(n.em,{children:"external symbols"})," of which are to be inherited by the new ",(0,c.jsx)(a,{term:"package",children:(0,c.jsx)("i",{children:"package"})}),". See the ",(0,c.jsx)(a,{term:"function",children:(0,c.jsx)("i",{children:"function"})})," ",(0,c.jsx)(a,{term:"use-package",children:(0,c.jsx)("b",{children:"use-package"})}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:'(make-package \u2019temporary :nicknames \u2019("TEMP" "temp")) \u2192 #<PACKAGE "TEMPORARY"> (make-package "OWNER" :use \u2019("temp")) \u2192 #<PACKAGE "OWNER"> \n(package-used-by-list \u2019temp) \u2192 (#<PACKAGE "OWNER">) \n(package-use-list \u2019owner) \u2192 (#<PACKAGE "TEMPORARY">) \n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,c.jsxs)(n.p,{children:["The existence of other ",(0,c.jsx)(a,{term:"package",children:(0,c.jsx)("i",{children:"packages"})})," in the system."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,c.jsxs)(n.p,{children:["The consequences are unspecified if ",(0,c.jsx)(a,{term:"package",children:(0,c.jsx)("i",{children:"packages"})})," denoted by ",(0,c.jsx)(a,{term:"use",children:(0,c.jsx)("i",{children:"use"})})," do not exist."]}),"\n",(0,c.jsxs)(n.p,{children:["A ",(0,c.jsx)(a,{term:"correctable",children:(0,c.jsx)("i",{children:"correctable"})})," error is signaled if the ",(0,c.jsx)(n.em,{children:"package-name"})," or any of the ",(0,c.jsx)(a,{term:"nickname",children:(0,c.jsx)("i",{children:"nicknames"})})," is already the ",(0,c.jsx)(a,{term:"name",children:(0,c.jsx)("i",{children:"name"})})," or ",(0,c.jsx)(a,{term:"nickname",children:(0,c.jsx)("i",{children:"nickname"})})," of an existing ",(0,c.jsx)(a,{term:"package",children:(0,c.jsx)("i",{children:"package"})}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(a,{term:"defpackage",children:(0,c.jsx)("b",{children:"defpackage"})}),", ",(0,c.jsx)(a,{term:"use-package",children:(0,c.jsx)("b",{children:"use-package"})})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,c.jsxs)(n.p,{children:["In situations where the ",(0,c.jsx)(a,{term:"package",children:(0,c.jsx)("i",{children:"packages"})})," to be used contain symbols which would conflict, it is necessary to first create the package with ",":use"," \u2019(), then to use ",(0,c.jsx)(a,{term:"shadow",children:(0,c.jsx)("b",{children:"shadow"})})," or ",(0,c.jsx)(a,{term:"shadowing-import",children:(0,c.jsx)("b",{children:"shadowing-import"})})," to address the conflicts, and then after that to use ",(0,c.jsx)(a,{term:"use-package",children:(0,c.jsx)("b",{children:"use-package"})})," once the conflicts have been addressed."]}),"\n",(0,c.jsxs)(n.p,{children:["When packages are being created as part of the static definition of a program rather than dynamically by the program, it is generally considered more stylistically appropriate to use ",(0,c.jsx)(a,{term:"defpackage",children:(0,c.jsx)("b",{children:"defpackage"})})," rather than ",(0,c.jsx)(a,{term:"make-package",children:(0,c.jsx)("b",{children:"make-package"})}),"."]})]})}function s(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}const t={title:"make-package"},d="make-package",l={id:"chap-11/bb-c-dictionary/make-package_function",title:"make-package",description:"Expanded Reference: make-package",source:"@site/docs/chap-11/bb-c-dictionary/make-package_function.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/make-package_function",permalink:"/cl-language-reference/chap-11/bb-c-dictionary/make-package_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/make-package_function.md",tags:[],version:"current",frontMatter:{title:"make-package"},sidebar:"tutorialSidebar",previous:{title:"list-all-packages",permalink:"/cl-language-reference/chap-11/bb-c-dictionary/list-all-packages_function"},next:{title:"package-error-package",permalink:"/cl-language-reference/chap-11/bb-c-dictionary/package-error-package_function"}},h={},o=[{value:"Expanded Reference: make-package",id:"expanded-reference-make-package",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"make-package",children:"make-package"}),"\n","\n","\n",(0,c.jsx)(s,{}),"\n",(0,c.jsx)(n.h2,{id:"expanded-reference-make-package",children:"Expanded Reference: make-package"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(make-package )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>t,a:()=>s});var c=a(67294);const r={},i=c.createContext(r);function s(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);