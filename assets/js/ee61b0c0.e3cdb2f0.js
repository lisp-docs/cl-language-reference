"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[18359],{44062:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>x});var i=t(85893),r=t(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{DictionaryLink:t,GlossaryTerm:c}=n;return t||s("DictionaryLink",!0),c||s("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"identity"})," ",(0,i.jsx)(c,{term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{term:"identity",children:(0,i.jsx)("b",{children:"identity"})})," ",(0,i.jsx)(n.em,{children:"object \u2192 object"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(c,{term:"object",children:(0,i.jsx)("i",{children:"object"})}),"\u2014an ",(0,i.jsx)(c,{term:"object",children:(0,i.jsx)("i",{children:"object"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns its argument ",(0,i.jsx)(c,{term:"object",children:(0,i.jsx)("i",{children:"object"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(identity 101) \u2192 101 \n(mapcan #\u2019identity (list (list 1 2 3) \u2019(4 5 6))) \u2192 (1 2 3 4 5 6) \n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{term:"identity",children:(0,i.jsx)("b",{children:"identity"})})," is intended for use with functions that require a ",(0,i.jsx)(c,{term:"function",children:(0,i.jsx)("i",{children:"function"})})," as an argument."]}),"\n",(0,i.jsxs)(n.p,{children:["(eql x (identity x)) returns ",(0,i.jsx)(c,{term:"true",children:(0,i.jsx)("i",{children:"true"})})," for all possible values of ",(0,i.jsx)(n.em,{children:"x"}),", but (eq x (identity x)) might return ",(0,i.jsx)(c,{term:"false",children:(0,i.jsx)("i",{children:"false"})})," when ",(0,i.jsx)(n.em,{children:"x"})," is a ",(0,i.jsx)(c,{term:"number",children:(0,i.jsx)("i",{children:"number"})})," or ",(0,i.jsx)(c,{term:"character",children:(0,i.jsx)("i",{children:"character"})})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{term:"identity",children:(0,i.jsx)("b",{children:"identity"})})," could be defined by"]}),"\n",(0,i.jsx)(n.p,{children:"(defun identity (x) x)"})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function s(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const o={title:"identity"},l="identity",a={id:"chap-5/f-d-dictionary/identity_function",title:"identity",description:"Expanded Reference: identity",source:"@site/docs/chap-5/f-d-dictionary/identity_function.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/identity_function",permalink:"/cl-language-reference/chap-5/f-d-dictionary/identity_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/identity_function.md",tags:[],version:"current",frontMatter:{title:"identity"},sidebar:"tutorialSidebar",previous:{title:"go",permalink:"/cl-language-reference/chap-5/f-d-dictionary/go_special-operator"},next:{title:"if",permalink:"/cl-language-reference/chap-5/f-d-dictionary/if_special-operator"}},h={},x=[{value:"Expanded Reference: identity",id:"expanded-reference-identity",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"identity",children:"identity"}),"\n","\n","\n",(0,i.jsx)(d,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-identity",children:"Expanded Reference: identity"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(identity )\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>d});var i=t(67294);const r={},c=i.createContext(r);function d(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);