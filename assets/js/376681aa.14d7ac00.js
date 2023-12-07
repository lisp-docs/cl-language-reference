"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[15240],{72807:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var r=s(85893),c=s(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"unintern"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"unintern"})," ",(0,r.jsx)(n.em,{children:"symbol"})," &optional ",(0,r.jsx)(n.em,{children:"package \u2192 generalized-boolean"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"symbol"}),"\u2014a ",(0,r.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"package"}),"\u2014a ",(0,r.jsx)(n.em,{children:"package designator"})," . The default is the ",(0,r.jsx)(n.em,{children:"current package"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"unintern"})," removes ",(0,r.jsx)(n.em,{children:"symbol"})," from ",(0,r.jsx)(n.em,{children:"package"}),". If ",(0,r.jsx)(n.em,{children:"symbol"})," is ",(0,r.jsx)(n.em,{children:"present"})," in ",(0,r.jsx)(n.em,{children:"package"}),", it is removed from ",(0,r.jsx)(n.em,{children:"package"})," and also from ",(0,r.jsx)(n.em,{children:"package"}),"\u2019s ",(0,r.jsx)(n.em,{children:"shadowing symbols list"})," if it is present there. If ",(0,r.jsx)(n.em,{children:"package"})," is the ",(0,r.jsx)(n.em,{children:"home package"})," for ",(0,r.jsx)(n.em,{children:"symbol"}),", ",(0,r.jsx)(n.em,{children:"symbol"})," is made to have no ",(0,r.jsx)(n.em,{children:"home package"}),". ",(0,r.jsx)(n.em,{children:"Symbol"})," may continue to be ",(0,r.jsx)(n.em,{children:"accessible"})," in ",(0,r.jsx)(n.em,{children:"package"})," by inheritance."]}),"\n",(0,r.jsxs)(n.p,{children:["Use of ",(0,r.jsx)(n.strong,{children:"unintern"})," can result in a ",(0,r.jsx)(n.em,{children:"symbol"})," that has no recorded ",(0,r.jsx)(n.em,{children:"home package"}),", but that in fact is ",(0,r.jsx)(n.em,{children:"accessible"})," in some ",(0,r.jsx)(n.em,{children:"package"}),". Common Lisp does not check for this pathological case, and such ",(0,r.jsx)(n.em,{children:"symbols"})," are always printed preceded by #:."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"unintern"})," returns ",(0,r.jsx)(n.em,{children:"true"})," if it removes ",(0,r.jsx)(n.em,{children:"symbol"}),", and ",(0,r.jsx)(n.strong,{children:"nil"})," otherwise."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'\n(in-package "COMMON-LISP-USER") \u2192 #<PACKAGE "COMMON-LISP-USER"> \n(setq temps-unpack (intern "UNPACK" (make-package \u2019temp))) \u2192 TEMP::UNPACK \n(unintern temps-unpack \u2019temp) \u2192 T \n(find-symbol "UNPACK" \u2019temp) \u2192 NIL, NIL \ntemps-unpack \u2192 #:UNPACK \n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"unintern"})," changes the state of the package system in such a way that the consistency rules do not hold across the change."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsx)(n.p,{children:"Current state of the package system."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Giving a shadowing symbol to ",(0,r.jsx)(n.strong,{children:"unintern"})," can uncover a name conflict that had previously been resolved by the shadowing. If package A uses packages B and C, A contains a shadowing symbol x, and B and C each contain external symbols named x, then removing the shadowing symbol x from A will reveal a name conflict between b",":x"," and c",":x"," if those two ",(0,r.jsx)(n.em,{children:"symbols"})," are distinct. In this case ",(0,r.jsx)(n.strong,{children:"unintern"})," will signal an error."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:"Section 11.1 (Package Concepts)"})]})}function t(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const a={},o="unintern",l={id:"chap-11/bb-c-dictionary/unintern",title:"unintern",description:"Expanded Reference: unintern",source:"@site/docs/chap-11/bb-c-dictionary/unintern.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/unintern",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/unintern",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/unintern.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"unexport",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/unexport"},next:{title:"unuse-package",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/unusepackage"}},d={},h=[{value:"Expanded Reference: unintern",id:"expanded-reference-unintern",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"unintern",children:"unintern"}),"\n","\n","\n",(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-unintern",children:"Expanded Reference: unintern"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(unintern )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>t});var r=s(67294);const c={},i=r.createContext(c);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);