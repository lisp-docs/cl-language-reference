"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[4619],{50792:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>j,frontMatter:()=>o,metadata:()=>a,toc:()=>m});var t=r(85893),s=r(11151);function i(e){const n={admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{DictionaryLink:r,GlossaryTerm:i}=n;return r||d("DictionaryLink",!0),i||d("GlossaryTerm",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"cond"})," ",(0,t.jsx)(i,{term:"macro",children:(0,t.jsx)("i",{children:"Macro"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{term:"cond",children:(0,t.jsx)("b",{children:"cond"})})," ",(0,t.jsx)(n.em,{children:"{\u2193clause}"}),"* \u2192 {result}*"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"clause::"}),"=(",(0,t.jsx)(n.em,{children:"test-form {form}"}),"*)"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"test-form"}),"\u2014a ",(0,t.jsx)(i,{term:"form",children:(0,t.jsx)("i",{children:"form"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{term:"form",children:(0,t.jsx)("i",{children:"forms"})}),"\u2014an ",(0,t.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"results"}),"\u2014the ",(0,t.jsx)(i,{term:"value",children:(0,t.jsx)("i",{children:"values"})})," of the ",(0,t.jsx)(i,{term:"form",children:(0,t.jsx)("i",{children:"forms"})})," in the first ",(0,t.jsx)(n.em,{children:"clause"})," whose ",(0,t.jsx)(n.em,{children:"test-form yields true"}),", or the ",(0,t.jsx)(n.em,{children:"primary value"})," of the ",(0,t.jsx)(n.em,{children:"test-form"})," if there are no ",(0,t.jsx)(i,{term:"form",children:(0,t.jsx)("i",{children:"forms"})})," in that ",(0,t.jsx)(n.em,{children:"clause"}),", or else ",(0,t.jsx)(r,{term:"nil",children:(0,t.jsx)("b",{children:"nil"})})," if no ",(0,t.jsx)(n.em,{children:"test-form yields true"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{term:"cond",children:(0,t.jsx)("b",{children:"cond"})})," allows the execution of ",(0,t.jsx)(i,{term:"form",children:(0,t.jsx)("i",{children:"forms"})})," to be dependent on ",(0,t.jsx)(n.em,{children:"test-form"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Test-forms"})," are evaluated one at a time in the order in which they are given in the argument list until a ",(0,t.jsx)(n.em,{children:"test-form"})," is found that evaluates to ",(0,t.jsx)(i,{term:"true",children:(0,t.jsx)("i",{children:"true"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If there are no ",(0,t.jsx)(i,{term:"form",children:(0,t.jsx)("i",{children:"forms"})})," in that clause, the ",(0,t.jsx)(n.em,{children:"primary value"})," of the ",(0,t.jsx)(n.em,{children:"test-form"})," is returned by the ",(0,t.jsx)(r,{term:"cond",children:(0,t.jsx)("b",{children:"cond"})})," ",(0,t.jsx)(i,{term:"form",children:(0,t.jsx)("i",{children:"form"})}),". Otherwise, the ",(0,t.jsx)(i,{term:"form",children:(0,t.jsx)("i",{children:"forms"})})," associated with this ",(0,t.jsx)(n.em,{children:"test-form"})," are evaluated in order, left to right, as an ",(0,t.jsx)(n.em,{children:"implicit progn"}),", and the ",(0,t.jsx)(i,{term:"value",children:(0,t.jsx)("i",{children:"values"})})," returned by the last ",(0,t.jsx)(i,{term:"form",children:(0,t.jsx)("i",{children:"form"})})," are returned by the ",(0,t.jsx)(r,{term:"cond",children:(0,t.jsx)("b",{children:"cond"})})," ",(0,t.jsx)(i,{term:"form",children:(0,t.jsx)("i",{children:"form"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Once one ",(0,t.jsx)(n.em,{children:"test-form"})," has ",(0,t.jsx)(n.em,{children:"yielded true"}),", no additional ",(0,t.jsx)(n.em,{children:"test-forms"})," are ",(0,t.jsx)(n.em,{children:"evaluated"}),". If no ",(0,t.jsx)(n.em,{children:"test-form yields true"}),", ",(0,t.jsx)(r,{term:"nil",children:(0,t.jsx)("b",{children:"nil"})})," is returned."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(defvar a) \u2192 a\n(defun select-options () \n  (cond ((= a 1) (setf a 2)) \n\t((= a 2) (setf a 3)) \n\t((and (= a 3) (floor a 2))) \n\t(t (floor a 3)))) \u2192 SELECT-OPTIONS \n(setf a 1) \u2192 1 \n(select-options) \u2192 2 \na \u2192 2 \n(select-options) \u2192 3 \na \u2192 3 \n(select-options) \u2192 1 \n(setf a 5) \u2192 5 \n(select-options) \u2192 1, 2 \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{term:"if",children:(0,t.jsx)("b",{children:"if"})}),", ",(0,t.jsx)(r,{term:"case",children:(0,t.jsx)("b",{children:"case"})}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["We fixed the examples so that it uses ",(0,t.jsx)(r,{term:"defvar",children:(0,t.jsx)("b",{children:"defvar"})})," to initialize\nthe variable and to use ",(0,t.jsx)(r,{term:"setf",children:(0,t.jsx)("b",{children:"setf"})})," rather than ",(0,t.jsx)(r,{term:"setq",children:(0,t.jsx)("b",{children:"setq"})})," for assignment."]})})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const o={title:"cond"},l="cond",a={id:"chap-5/f-d-dictionary/cond_macro",title:"cond",description:"Expanded Reference: cond",source:"@site/docs/chap-5/f-d-dictionary/cond_macro.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/cond_macro",permalink:"/cl-language-reference/chap-5/f-d-dictionary/cond_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/cond_macro.md",tags:[],version:"current",frontMatter:{title:"cond"},sidebar:"tutorialSidebar",previous:{title:"complement",permalink:"/cl-language-reference/chap-5/f-d-dictionary/complement_function"},next:{title:"constantly",permalink:"/cl-language-reference/chap-5/f-d-dictionary/constantly_function"}},h={},m=[{value:"Expanded Reference: cond",id:"expanded-reference-cond",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cond",children:"cond"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-cond",children:"Expanded Reference: cond"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(cond )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var t=r(67294);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);