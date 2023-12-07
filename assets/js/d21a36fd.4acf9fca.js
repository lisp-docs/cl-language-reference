"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[31207],{22973:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>o,toc:()=>h});var i=s(85893),r=s(11151);function l(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"find-symbol"})," ",(0,i.jsx)(e.em,{children:"Function"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"find-symbol"})," ",(0,i.jsx)(e.em,{children:"string"})," &optional ",(0,i.jsx)(e.em,{children:"package \u2192 symbol, status"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"string"}),"\u2014a ",(0,i.jsx)(e.em,{children:"string"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"package"}),"\u2014a ",(0,i.jsx)(e.em,{children:"package designator"})," . The default is the ",(0,i.jsx)(e.em,{children:"current package"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"symbol"}),"\u2014a ",(0,i.jsx)(e.em,{children:"symbol"})," accessible in the ",(0,i.jsx)(e.em,{children:"package"}),", or ",(0,i.jsx)(e.strong,{children:"nil"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"status"}),"\u2014one of ",":inherited",", ",":external",", ",":internal",", or ",(0,i.jsx)(e.strong,{children:"nil"}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"find-symbol"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"find-symbol"})," locates a ",(0,i.jsx)(e.em,{children:"symbol"})," whose ",(0,i.jsx)(e.em,{children:"name"})," is ",(0,i.jsx)(e.em,{children:"string"})," in a ",(0,i.jsx)(e.em,{children:"package"}),". If a ",(0,i.jsx)(e.em,{children:"symbol"})," named ",(0,i.jsx)(e.em,{children:"string"})," is found in ",(0,i.jsx)(e.em,{children:"package"}),", directly or by inheritance, the ",(0,i.jsx)(e.em,{children:"symbol"})," found is returned as the first value; the second value is as follows:"]}),"\n",(0,i.jsx)(e.p,{children:":internal"}),"\n",(0,i.jsxs)(e.p,{children:["If the ",(0,i.jsx)(e.em,{children:"symbol"})," is ",(0,i.jsx)(e.em,{children:"present"})," in ",(0,i.jsx)(e.em,{children:"package"})," as an ",(0,i.jsx)(e.em,{children:"internal symbol"}),"."]}),"\n",(0,i.jsx)(e.p,{children:":external"}),"\n",(0,i.jsxs)(e.p,{children:["If the ",(0,i.jsx)(e.em,{children:"symbol"})," is ",(0,i.jsx)(e.em,{children:"present"})," in ",(0,i.jsx)(e.em,{children:"package"})," as an ",(0,i.jsx)(e.em,{children:"external symbol"}),"."]}),"\n",(0,i.jsx)(e.p,{children:":inherited"}),"\n",(0,i.jsxs)(e.p,{children:["If the ",(0,i.jsx)(e.em,{children:"symbol"})," is inherited by ",(0,i.jsx)(e.em,{children:"package"})," through ",(0,i.jsx)(e.strong,{children:"use-package"}),", but is not ",(0,i.jsx)(e.em,{children:"present"})," in ",(0,i.jsx)(e.em,{children:"package"}),". If no such ",(0,i.jsx)(e.em,{children:"symbol"})," is ",(0,i.jsx)(e.em,{children:"accessible"})," in ",(0,i.jsx)(e.em,{children:"package"}),", both values are ",(0,i.jsx)(e.strong,{children:"nil"}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lisp",children:'\n(find-symbol "NEVER-BEFORE-USED") \u2192 NIL, NIL \n(find-symbol "NEVER-BEFORE-USED") \u2192 NIL, NIL \n(intern "NEVER-BEFORE-USED") \u2192 NEVER-BEFORE-USED, NIL \n(intern "NEVER-BEFORE-USED") \u2192 NEVER-BEFORE-USED, :INTERNAL \n(find-symbol "NEVER-BEFORE-USED") \u2192 NEVER-BEFORE-USED, :INTERNAL \n(find-symbol "never-before-used") \u2192 NIL, NIL \n(find-symbol "CAR" \u2019common-lisp-user) \u2192 CAR, :INHERITED \n(find-symbol "CAR" \u2019common-lisp) \u2192 CAR, :EXTERNAL \n(find-symbol "NIL" \u2019common-lisp-user) \u2192 NIL, :INHERITED \n(find-symbol "NIL" \u2019common-lisp) \u2192 NIL, :EXTERNAL \n(find-symbol "NIL" (prog1 (make-package "JUST-TESTING" :use \u2019()) \n\t\t     (intern "NIL" "JUST-TESTING"))) \n\u2192 JUST-TESTING::NIL, :INTERNAL \n(export \u2019just-testing::nil \u2019just-testing) \n(find-symbol "NIL" \u2019just-testing) \u2192 JUST-TESTING:NIL, :EXTERNAL \n(find-symbol "NIL" "KEYWORD") \n\u2192 NIL, NIL \n<i><sup>or</sup>\u2192</i> :NIL, :EXTERNAL \n(find-symbol (symbol-name :nil) "KEYWORD") \u2192 :NIL, :EXTERNAL \n\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"intern"}),", ",(0,i.jsx)(e.strong,{children:"import"}),", ",(0,i.jsx)(e.strong,{children:"export"}),", ",(0,i.jsx)(e.strong,{children:"use-package"}),", ",(0,i.jsx)(e.strong,{children:"unintern"}),", ",(0,i.jsx)(e.strong,{children:"unexport"}),", ",(0,i.jsx)(e.strong,{children:"unuse-package"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"intern"}),", ",(0,i.jsx)(e.strong,{children:"find-all-symbols"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Notes:"})})]})}function c(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}const t={},d="find-symbol",o={id:"chap-11/bb-c-dictionary/findsymbol",title:"find-symbol",description:"Expanded Reference: find-symbol",source:"@site/docs/chap-11/bb-c-dictionary/findsymbol.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/findsymbol",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/findsymbol",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/findsymbol.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"find-all-symbols",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/findallsymbols"},next:{title:"find-symbol** is operationally equivalent to **intern**, except that it never creates a new *symbol*. **find-package",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/findsymbolaaaisaoperationallyaequivalentatoaaainternaa"}},a={},h=[{value:"Expanded Reference: find-symbol",id:"expanded-reference-find-symbol",level:2}];function m(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"find-symbol",children:"find-symbol"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(e.h2,{id:"expanded-reference-find-symbol",children:"Expanded Reference: find-symbol"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lisp",children:"(find-symbol )\n"})})]})}function x(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(m,{...n})}):m(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>t,a:()=>c});var i=s(67294);const r={},l=i.createContext(r);function c(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);