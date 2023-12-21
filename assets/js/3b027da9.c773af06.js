"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[23031],{237:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>j,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var t=r(85893),i=r(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"print-unreadable-object"})," ",(0,t.jsx)(n.em,{children:"Macro"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"print-unreadable-object"})," (",(0,t.jsx)(n.em,{children:"object stream"})," &key ",(0,t.jsx)(n.em,{children:"type identity"}),") ",(0,t.jsx)(n.em,{children:"{form}"}),"* \u2192 ",(0,t.jsx)(n.strong,{children:"nil"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"object"}),"\u2014an ",(0,t.jsx)(n.em,{children:"object"}),"; evaluated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"stream"}),"\u2014a ",(0,t.jsx)(n.em,{children:"stream designator"})," ; evaluated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"type"}),"\u2014a ",(0,t.jsx)(n.em,{children:"generalized boolean"}),"; evaluated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"identity"}),"\u2014a ",(0,t.jsx)(n.em,{children:"generalized boolean"}),"; evaluated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"forms"}),"\u2014an ",(0,t.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Outputs a printed representation of ",(0,t.jsx)(n.em,{children:"object"})," on ",(0,t.jsx)(n.em,{children:"stream"}),", beginning with \u201c#<\u201d and ending with \u201c>\u201d. Everything output to ",(0,t.jsx)(n.em,{children:"stream"})," by the body ",(0,t.jsx)(n.em,{children:"forms"})," is enclosed in the the angle brackets. If ",(0,t.jsx)(n.em,{children:"type"})," is ",(0,t.jsx)(n.em,{children:"true"}),", the output from ",(0,t.jsx)(n.em,{children:"forms"})," is preceded by a brief description of the ",(0,t.jsx)(n.em,{children:"object"}),"\u2019s ",(0,t.jsx)(n.em,{children:"type"})," and a space character. If ",(0,t.jsx)(n.em,{children:"identity"})," is ",(0,t.jsx)(n.em,{children:"true"}),", the output from ",(0,t.jsx)(n.em,{children:"forms"})," is followed by a space character and a representation of the ",(0,t.jsx)(n.em,{children:"object"}),"\u2019s identity, typically a storage address."]}),"\n",(0,t.jsxs)(n.p,{children:["If either ",(0,t.jsx)(n.em,{children:"type"})," or ",(0,t.jsx)(n.em,{children:"identity"})," is not supplied, its value is ",(0,t.jsx)(n.em,{children:"false"}),". It is valid to omit the body ",(0,t.jsx)(n.em,{children:"forms"}),". If ",(0,t.jsx)(n.em,{children:"type"})," and ",(0,t.jsx)(n.em,{children:"identity"})," are both true and there are no body ",(0,t.jsx)(n.em,{children:"forms"}),", only one space character separates the type and the identity."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'\n;; Note that in this example, the precise form of the output ;; is *implementation-dependent*. \n(defmethod print-object ((obj airplane) stream) \n    (print-unreadable-object (obj stream :type t :identity t) \n      (princ (tail-number obj) stream))) \n(prin1-to-string my-airplane) \n\u2192 "#<Airplane NW0773 36000123135>" \n<i><sup>or</sup>\u2192</i> "#<FAA:AIRPLANE NW0773 17>" \n\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.strong,{children:"*print-readably*"})," is ",(0,t.jsx)(n.em,{children:"true"}),", ",(0,t.jsx)(n.strong,{children:"print-unreadable-object"})," signals an error of ",(0,t.jsx)(n.em,{children:"type"})," ",(0,t.jsx)(n.strong,{children:"print-not-readable"})," without printing anything."]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}const s={title:"print-unreadable-object"},d="print-unreadable-object",o={id:"chap-22/cc-e-dictionary/print-unreadable-object_macro",title:"print-unreadable-object",description:"Expanded Reference: print-unreadable-object",source:"@site/docs/chap-22/cc-e-dictionary/print-unreadable-object_macro.md",sourceDirName:"chap-22/cc-e-dictionary",slug:"/chap-22/cc-e-dictionary/print-unreadable-object_macro",permalink:"/cl-language-reference/docs/chap-22/cc-e-dictionary/print-unreadable-object_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-22/cc-e-dictionary/print-unreadable-object_macro.md",tags:[],version:"current",frontMatter:{title:"print-unreadable-object"},sidebar:"tutorialSidebar",previous:{title:"print-right-margin",permalink:"/cl-language-reference/docs/chap-22/cc-e-dictionary/print-right-margin_variable"},next:{title:"set-pprint-dispatch",permalink:"/cl-language-reference/docs/chap-22/cc-e-dictionary/set-pprint-dispatch_function"}},l={},p=[{value:"Expanded Reference: print-unreadable-object",id:"expanded-reference-print-unreadable-object",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"print-unreadable-object",children:"print-unreadable-object"}),"\n","\n","\n",(0,t.jsx)(a,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-print-unreadable-object",children:"Expanded Reference: print-unreadable-object"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(print-unreadable-object )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>a});var t=r(67294);const i={},c=t.createContext(i);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);