"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[31207],{22973:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>o,toc:()=>h});var i=s(85893),r=s(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"find-symbol"})," ",(0,i.jsx)(n.em,{children:"Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"find-symbol"})," ",(0,i.jsx)(n.em,{children:"string"})," &optional ",(0,i.jsx)(n.em,{children:"package \u2192 symbol, status"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"string"}),"\u2014a ",(0,i.jsx)(n.em,{children:"string"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"package"}),"\u2014a ",(0,i.jsx)(n.em,{children:"package designator"})," . The default is the ",(0,i.jsx)(n.em,{children:"current package"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"symbol"}),"\u2014a ",(0,i.jsx)(n.em,{children:"symbol"})," accessible in the ",(0,i.jsx)(n.em,{children:"package"}),", or ",(0,i.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"status"}),"\u2014one of ",":inherited",", ",":external",", ",":internal",", or ",(0,i.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"find-symbol"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"find-symbol"})," locates a ",(0,i.jsx)(n.em,{children:"symbol"})," whose ",(0,i.jsx)(n.em,{children:"name"})," is ",(0,i.jsx)(n.em,{children:"string"})," in a ",(0,i.jsx)(n.em,{children:"package"}),". If a ",(0,i.jsx)(n.em,{children:"symbol"})," named ",(0,i.jsx)(n.em,{children:"string"})," is found in ",(0,i.jsx)(n.em,{children:"package"}),", directly or by inheritance, the ",(0,i.jsx)(n.em,{children:"symbol"})," found is returned as the first value; the second value is as follows:"]}),"\n",(0,i.jsx)(n.p,{children:":internal"}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.em,{children:"symbol"})," is ",(0,i.jsx)(n.em,{children:"present"})," in ",(0,i.jsx)(n.em,{children:"package"})," as an ",(0,i.jsx)(n.em,{children:"internal symbol"}),"."]}),"\n",(0,i.jsx)(n.p,{children:":external"}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.em,{children:"symbol"})," is ",(0,i.jsx)(n.em,{children:"present"})," in ",(0,i.jsx)(n.em,{children:"package"})," as an ",(0,i.jsx)(n.em,{children:"external symbol"}),"."]}),"\n",(0,i.jsx)(n.p,{children:":inherited"}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.em,{children:"symbol"})," is inherited by ",(0,i.jsx)(n.em,{children:"package"})," through ",(0,i.jsx)(n.strong,{children:"use-package"}),", but is not ",(0,i.jsx)(n.em,{children:"present"})," in ",(0,i.jsx)(n.em,{children:"package"}),". If no such ",(0,i.jsx)(n.em,{children:"symbol"})," is ",(0,i.jsx)(n.em,{children:"accessible"})," in ",(0,i.jsx)(n.em,{children:"package"}),", both values are ",(0,i.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'(find-symbol "NEVER-BEFORE-USED") \u2192 NIL, NIL \n(find-symbol "NEVER-BEFORE-USED") \u2192 NIL, NIL \n(intern "NEVER-BEFORE-USED") \u2192 NEVER-BEFORE-USED, NIL \n(intern "NEVER-BEFORE-USED") \u2192 NEVER-BEFORE-USED, :INTERNAL \n(find-symbol "NEVER-BEFORE-USED") \u2192 NEVER-BEFORE-USED, :INTERNAL \n(find-symbol "never-before-used") \u2192 NIL, NIL \n(find-symbol "CAR" \u2019common-lisp-user) \u2192 CAR, :INHERITED \n(find-symbol "CAR" \u2019common-lisp) \u2192 CAR, :EXTERNAL \n(find-symbol "NIL" \u2019common-lisp-user) \u2192 NIL, :INHERITED \n(find-symbol "NIL" \u2019common-lisp) \u2192 NIL, :EXTERNAL \n(find-symbol "NIL" (prog1 (make-package "JUST-TESTING" :use \u2019()) \n\t\t     (intern "NIL" "JUST-TESTING"))) \n\u2192 JUST-TESTING::NIL, :INTERNAL \n(export \u2019just-testing::nil \u2019just-testing) \n(find-symbol "NIL" \u2019just-testing) \u2192 JUST-TESTING:NIL, :EXTERNAL \n(find-symbol "NIL" "KEYWORD") \n\u2192 NIL, NIL \n<i><sup>or</sup>\u2192</i> :NIL, :EXTERNAL \n(find-symbol (symbol-name :nil) "KEYWORD") \u2192 :NIL, :EXTERNAL \n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"intern"}),", ",(0,i.jsx)(n.strong,{children:"import"}),", ",(0,i.jsx)(n.strong,{children:"export"}),", ",(0,i.jsx)(n.strong,{children:"use-package"}),", ",(0,i.jsx)(n.strong,{children:"unintern"}),", ",(0,i.jsx)(n.strong,{children:"unexport"}),", ",(0,i.jsx)(n.strong,{children:"unuse-package"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"intern"}),", ",(0,i.jsx)(n.strong,{children:"find-all-symbols"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"find-symbol"})," is operationally equivalent to ",(0,i.jsx)(n.strong,{children:"intern"}),", except that it never creates a new ",(0,i.jsx)(n.em,{children:"symbol"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}const t={},d="find-symbol",o={id:"chap-11/bb-c-dictionary/findsymbol",title:"find-symbol",description:"Expanded Reference: find-symbol",source:"@site/docs/chap-11/bb-c-dictionary/findsymbol.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/findsymbol",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/findsymbol",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/findsymbol.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"find-package",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/findpackage"},next:{title:"import",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/import"}},a={},h=[{value:"Expanded Reference: find-symbol",id:"expanded-reference-find-symbol",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"find-symbol",children:"find-symbol"}),"\n","\n","\n",(0,i.jsx)(l,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-find-symbol",children:"Expanded Reference: find-symbol"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(find-symbol )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>l});var i=s(67294);const r={},c=i.createContext(r);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);