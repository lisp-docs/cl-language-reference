"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[3397],{99765:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var t=r(85893),i=r(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{DictionaryLink:r,GlossaryTerm:s}=n;return r||c("DictionaryLink",!0),s||c("GlossaryTerm",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"random"})," ",(0,t.jsx)(s,{term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{term:"random",children:(0,t.jsx)("b",{children:"random"})})," ",(0,t.jsx)(n.em,{children:"limit"})," &optional ",(0,t.jsx)(n.em,{children:"random-state \u2192 random-number"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"limit"}),"\u2014a positive ",(0,t.jsx)(n.em,{children:"integer"})," , or a positive ",(0,t.jsx)(s,{term:"float",children:(0,t.jsx)("i",{children:"float"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"random-state"}),"\u2014a ",(0,t.jsx)(s,{styled:!0,term:"random state",children:(0,t.jsx)("i",{children:"random state"})}),". The default is the ",(0,t.jsx)(s,{styled:!0,term:"current random state",children:(0,t.jsx)("i",{children:"current random state"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"random-number"}),"\u2014a non-negative ",(0,t.jsx)(s,{term:"number",children:(0,t.jsx)("i",{children:"number"})})," less than ",(0,t.jsx)(n.em,{children:"limit"})," and of the same ",(0,t.jsx)(s,{term:"type",children:(0,t.jsx)("i",{children:"type"})})," as ",(0,t.jsx)(n.em,{children:"limit"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns a pseudo-random number that is a non-negative ",(0,t.jsx)(s,{term:"number",children:(0,t.jsx)("i",{children:"number"})})," less than ",(0,t.jsx)(n.em,{children:"limit"})," and of the same ",(0,t.jsx)(s,{term:"type",children:(0,t.jsx)("i",{children:"type"})})," as ",(0,t.jsx)(n.em,{children:"limit"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"random-state"}),", which is modified by this function, encodes the internal state maintained by the random number generator."]}),"\n",(0,t.jsxs)(n.p,{children:["An approximately uniform choice distribution is used. If ",(0,t.jsx)(n.em,{children:"limit"})," is an ",(0,t.jsx)(n.em,{children:"integer"})," , each of the possible results occurs with (approximate) probability 1/",(0,t.jsx)(n.em,{children:"limit"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(<= 0 (random 1000) 1000) \u2192 true \n(let ((state1 (make-random-state)) \n      (state2 (make-random-state))) \n  (= (random 1000 state1) (random 1000 state2))) \u2192 true \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"random-state"})," is modified."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(n.p,{children:["Should signal an error of ",(0,t.jsx)(s,{term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(r,{term:"type-error",children:(0,t.jsx)("b",{children:"type-error"})})," if ",(0,t.jsx)(n.em,{children:"limit"})," is not a positive ",(0,t.jsx)(n.em,{children:"integer"})," or a positive ",(0,t.jsx)(n.em,{children:"real"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{term:"make-random-state",children:(0,t.jsx)("b",{children:"make-random-state"})}),", ",(0,t.jsx)(r,{term:"random-state",children:(0,t.jsx)("b",{children:"*random-state*"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.em,{children:"Common Lisp: The Language"})," for information about generating random numbers."]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const o={title:"random"},d="random",l={id:"chap-12/bc-c-dictionary/random_function",title:"random",description:"Expanded Reference: random",source:"@site/docs/chap-12/bc-c-dictionary/random_function.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/random_function",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/random_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/random_function.md",tags:[],version:"current",frontMatter:{title:"random"},sidebar:"tutorialSidebar",previous:{title:"*random-state*",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/random-state_variable"},next:{title:"ratio",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/ratio_system-class"}},m={},h=[{value:"Expanded Reference: random",id:"expanded-reference-random",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"random",children:"random"}),"\n","\n","\n",(0,t.jsx)(a,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-random",children:"Expanded Reference: random"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(random )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>a});var t=r(67294);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);