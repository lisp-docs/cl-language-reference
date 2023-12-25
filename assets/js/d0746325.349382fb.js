"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[69375],{2312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var s=t(85893),i=t(11151);function l(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"last"})," ",(0,s.jsx)(t,{styled:!0,term:"function",children:(0,s.jsx)("i",{children:"Function"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{styled:!0,term:"last",children:(0,s.jsx)("b",{children:"last"})})," ",(0,s.jsx)(t,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})})," &optional ",(0,s.jsx)(n.em,{children:"n \u2192 tail"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})}),"\u2014a ",(0,s.jsx)(t,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})}),", which might be a ",(0,s.jsx)(n.em,{children:"dotted list"})," but must not be a ",(0,s.jsx)(n.em,{children:"circular list"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"n"}),"\u2014a non-negative ",(0,s.jsx)(n.em,{children:"integer"})," . The default is 1."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{styled:!0,term:"tail",children:(0,s.jsx)("i",{children:"tail"})}),"\u2014an ",(0,s.jsx)(t,{styled:!0,term:"object",children:(0,s.jsx)("i",{children:"object"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{styled:!0,term:"last",children:(0,s.jsx)("b",{children:"last"})})," returns the last ",(0,s.jsx)(n.em,{children:"n conses"})," (not the last ",(0,s.jsx)(n.em,{children:"n"})," elements) of ",(0,s.jsx)(t,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})}),"). If ",(0,s.jsx)(t,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})})," is (), ",(0,s.jsx)(t,{styled:!0,term:"last",children:(0,s.jsx)("b",{children:"last"})})," returns ()."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"n"})," is zero, the atom that terminates ",(0,s.jsx)(t,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})})," is returned. If ",(0,s.jsx)(n.em,{children:"n"})," is greater than or equal to the number of ",(0,s.jsx)(t,{styled:!0,term:"cons",children:(0,s.jsx)("i",{children:"cons"})})," cells in ",(0,s.jsx)(t,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})}),", the result is ",(0,s.jsx)(t,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(last nil) \u2192 NIL \n(last \u2019(1 2 3)) \u2192 (3) \n(last \u2019(1 2 . 3)) \u2192 (2 . 3) \n(setq x (list \u2019a \u2019b \u2019c \u2019d)) \u2192 (A B C D) \n(last x) \u2192 (D) \n(rplacd (last x) (list \u2019e \u2019f)) x \u2192 (A B C D E F) \n(last x) \u2192 (F) \n(last \u2019(a b c)) \u2192 (C) \n(last \u2019(a b c) 0) \u2192 () \n(last \u2019(a b c) 1) \u2192 (C) \n\n(last \u2019(a b c) 2) \u2192 (B C) \n(last \u2019(a b c) 3) \u2192 (A B C) \n(last \u2019(a b c) 4) \u2192 (A B C) \n(last \u2019(a . b) 0) \u2192 B \n(last \u2019(a . b) 1) \u2192 (A . B) \n(last \u2019(a . b) 2) \u2192 (A . B) \n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["The consequences are undefined if ",(0,s.jsx)(t,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})})," is a ",(0,s.jsx)(n.em,{children:"circular list"}),". Should signal an error of ",(0,s.jsx)(t,{styled:!0,term:"type",children:(0,s.jsx)("i",{children:"type"})})," ",(0,s.jsx)(t,{styled:!0,term:"type-error",children:(0,s.jsx)("b",{children:"type-error"})})," if ",(0,s.jsx)(n.em,{children:"n"})," is not a non-negative ",(0,s.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{styled:!0,term:"butlast",children:(0,s.jsx)("b",{children:"butlast"})}),", ",(0,s.jsx)(t,{styled:!0,term:"nth",children:(0,s.jsx)("b",{children:"nth"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["The following code could be used to define ",(0,s.jsx)(t,{styled:!0,term:"last",children:(0,s.jsx)("b",{children:"last"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"(defun last (list &optional (n 1))"}),"\n",(0,s.jsx)(n.p,{children:"(check-type n (integer 0))"}),"\n",(0,s.jsx)(n.p,{children:"(do ((l list (cdr l))"}),"\n",(0,s.jsx)(n.p,{children:"(r list)"}),"\n",(0,s.jsx)(n.p,{children:"(i 0 (+ i 1)))"}),"\n",(0,s.jsx)(n.p,{children:"((atom l) r)"}),"\n",(0,s.jsx)(n.p,{children:"(if (>= i n) (pop r))))"})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}const c={title:"last"},d="last",a={id:"chap-14/be-c-dictionary/last_function",title:"last",description:"Expanded Reference: last",source:"@site/docs/chap-14/be-c-dictionary/last_function.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/last_function",permalink:"/cl-language-reference/chap-14/be-c-dictionary/last_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/last_function.md",tags:[],version:"current",frontMatter:{title:"last"},sidebar:"tutorialSidebar",previous:{title:"intersection, nintersection",permalink:"/cl-language-reference/chap-14/be-c-dictionary/intersection_nintersection_function"},next:{title:"ldiff, tailp",permalink:"/cl-language-reference/chap-14/be-c-dictionary/ldiff_tailp_function"}},o={},h=[{value:"Expanded Reference: last",id:"expanded-reference-last",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"last",children:"last"}),"\n","\n","\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-last",children:"Expanded Reference: last"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(last )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(67294);const i={},l=s.createContext(i);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);