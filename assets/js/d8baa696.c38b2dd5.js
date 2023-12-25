"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[25230],{6088:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>h,default:()=>j,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var c=r(85893),n=r(11151);function s(e){const t={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components},{ClLinks:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"catch"})," ",(0,c.jsx)(t.em,{children:"Special Operator"})]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(r,{styled:!0,term:"catch",children:(0,c.jsx)("b",{children:"catch"})})," ",(0,c.jsx)(t.em,{children:"tag {form}"}),"* \u2192 {result}*"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(r,{styled:!0,term:"tag",children:(0,c.jsx)("i",{children:"tag"})}),"\u2014a ",(0,c.jsx)(t.em,{children:"catch tag"}),"; evaluated."]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(r,{styled:!0,term:"form",children:(0,c.jsx)("i",{children:"forms"})}),"\u2014an ",(0,c.jsx)(t.em,{children:"implicit progn"}),"."]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.em,{children:"results"}),"\u2014if the ",(0,c.jsx)(r,{styled:!0,term:"form",children:(0,c.jsx)("i",{children:"forms"})})," exit normally, the ",(0,c.jsx)(r,{styled:!0,term:"value",children:(0,c.jsx)("i",{children:"values"})})," returned by the ",(0,c.jsx)(r,{styled:!0,term:"form",children:(0,c.jsx)("i",{children:"forms"})}),"; if a throw occurs to the ",(0,c.jsx)(r,{styled:!0,term:"tag",children:(0,c.jsx)("i",{children:"tag"})}),", the ",(0,c.jsx)(r,{styled:!0,term:"value",children:(0,c.jsx)("i",{children:"values"})})," that are thrown."]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(r,{styled:!0,term:"catch",children:(0,c.jsx)("b",{children:"catch"})})," is used as the destination of a non-local control transfer by ",(0,c.jsx)(r,{styled:!0,term:"throw",children:(0,c.jsx)("b",{children:"throw"})}),". ",(0,c.jsx)(r,{styled:!0,term:"tag",children:(0,c.jsx)("i",{children:"Tags"})})," are used to find the ",(0,c.jsx)(r,{styled:!0,term:"catch",children:(0,c.jsx)("b",{children:"catch"})})," to which a ",(0,c.jsx)(r,{styled:!0,term:"throw",children:(0,c.jsx)("b",{children:"throw"})})," is transferring control. (catch \u2019foo ",(0,c.jsx)(r,{styled:!0,term:"form",children:(0,c.jsx)("i",{children:"form"})}),") catches a (throw \u2019foo ",(0,c.jsx)(r,{styled:!0,term:"form",children:(0,c.jsx)("i",{children:"form"})}),") but not a (throw \u2019bar ",(0,c.jsx)(r,{styled:!0,term:"form",children:(0,c.jsx)("i",{children:"form"})}),")."]}),"\n",(0,c.jsxs)(t.p,{children:["The order of execution of ",(0,c.jsx)(r,{styled:!0,term:"catch",children:(0,c.jsx)("b",{children:"catch"})})," follows:"]}),"\n",(0,c.jsxs)(t.p,{children:["1. ",(0,c.jsx)(r,{styled:!0,term:"tag",children:(0,c.jsx)("i",{children:"Tag"})})," is evaluated. It serves as the name of the ",(0,c.jsx)(r,{styled:!0,term:"catch",children:(0,c.jsx)("b",{children:"catch"})}),"."]}),"\n",(0,c.jsxs)(t.p,{children:["2. ",(0,c.jsx)(r,{styled:!0,term:"form",children:(0,c.jsx)("i",{children:"Forms"})})," are then evaluated as an implicit ",(0,c.jsx)(r,{styled:!0,term:"progn",children:(0,c.jsx)("b",{children:"progn"})}),", and the results of the last ",(0,c.jsx)(r,{styled:!0,term:"form",children:(0,c.jsx)("i",{children:"form"})})," are returned unless a ",(0,c.jsx)(r,{styled:!0,term:"throw",children:(0,c.jsx)("b",{children:"throw"})})," occurs."]}),"\n",(0,c.jsxs)(t.p,{children:["3. If a ",(0,c.jsx)(r,{styled:!0,term:"throw",children:(0,c.jsx)("b",{children:"throw"})})," occurs during the execution of one of the ",(0,c.jsx)(r,{styled:!0,term:"form",children:(0,c.jsx)("i",{children:"forms"})}),", control is transferred to the ",(0,c.jsx)(r,{styled:!0,term:"catch",children:(0,c.jsx)("b",{children:"catch"})})," ",(0,c.jsx)(r,{styled:!0,term:"form",children:(0,c.jsx)("i",{children:"form"})})," whose ",(0,c.jsx)(r,{styled:!0,term:"tag",children:(0,c.jsx)("i",{children:"tag"})})," is ",(0,c.jsx)(r,{styled:!0,term:"eq",children:(0,c.jsx)("b",{children:"eq"})})," to the tag argument of the ",(0,c.jsx)(r,{styled:!0,term:"throw",children:(0,c.jsx)("b",{children:"throw"})})," and which is the most recently established ",(0,c.jsx)(r,{styled:!0,term:"catch",children:(0,c.jsx)("b",{children:"catch"})})," with that ",(0,c.jsx)(r,{styled:!0,term:"tag",children:(0,c.jsx)("i",{children:"tag"})}),". No further evaluation of ",(0,c.jsx)(r,{styled:!0,term:"form",children:(0,c.jsx)("i",{children:"forms"})})," occurs."]}),"\n",(0,c.jsxs)(t.p,{children:["4. The ",(0,c.jsx)(t.em,{children:"tag established"})," by ",(0,c.jsx)(r,{styled:!0,term:"catch",children:(0,c.jsx)("b",{children:"catch"})})," is ",(0,c.jsx)(t.em,{children:"disestablished"})," just before the results are returned."]}),"\n",(0,c.jsxs)(t.p,{children:["If during the execution of one of the ",(0,c.jsx)(r,{styled:!0,term:"form",children:(0,c.jsx)("i",{children:"forms"})}),", a ",(0,c.jsx)(r,{styled:!0,term:"throw",children:(0,c.jsx)("b",{children:"throw"})})," is executed whose tag is ",(0,c.jsx)(r,{styled:!0,term:"eq",children:(0,c.jsx)("b",{children:"eq"})})," to the ",(0,c.jsx)(r,{styled:!0,term:"catch",children:(0,c.jsx)("b",{children:"catch"})})," tag, then the values specified by the ",(0,c.jsx)(r,{styled:!0,term:"throw",children:(0,c.jsx)("b",{children:"throw"})})," are returned as the result of the dynamically most recently established ",(0,c.jsx)(r,{styled:!0,term:"catch",children:(0,c.jsx)("b",{children:"catch"})})," form with that tag."]}),"\n",(0,c.jsxs)(t.p,{children:["The mechanism for ",(0,c.jsx)(r,{styled:!0,term:"catch",children:(0,c.jsx)("b",{children:"catch"})})," and ",(0,c.jsx)(r,{styled:!0,term:"throw",children:(0,c.jsx)("b",{children:"throw"})})," works even if ",(0,c.jsx)(r,{styled:!0,term:"throw",children:(0,c.jsx)("b",{children:"throw"})})," is not within the lexical scope of ",(0,c.jsx)(r,{styled:!0,term:"catch",children:(0,c.jsx)("b",{children:"catch"})}),". ",(0,c.jsx)(r,{styled:!0,term:"throw",children:(0,c.jsx)("b",{children:"throw"})})," must occur within the ",(0,c.jsx)(t.em,{children:"dynamic extent"})," of the ",(0,c.jsx)(r,{styled:!0,term:"evaluation",children:(0,c.jsx)("i",{children:"evaluation"})})," of the body of a ",(0,c.jsx)(r,{styled:!0,term:"catch",children:(0,c.jsx)("b",{children:"catch"})})," with a corresponding ",(0,c.jsx)(r,{styled:!0,term:"tag",children:(0,c.jsx)("i",{children:"tag"})}),"."]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-lisp",children:"\n(catch \u2019dummy-tag 1 2 (throw \u2019dummy-tag 3) 4) \u2192 3 \n(catch \u2019dummy-tag 1 2 3 4) \u2192 4 \n(defun throw-back (tag) (throw tag t)) \u2192 THROW-BACK \n(catch \u2019dummy-tag (throw-back \u2019dummy-tag) 2) \u2192 T \nData and Control \n\n\n;; Contrast behavior of this example with corresponding example of BLOCK. \n(catch \u2019c \n  (flet ((c1 () (throw \u2019c 1))) \n    (catch \u2019c (c1) (print \u2019unreachable)) \n    2)) \u2192 2 \n\n"})}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Exceptional Situations:"})}),"\n",(0,c.jsxs)(t.p,{children:["An error of ",(0,c.jsx)(r,{styled:!0,term:"type",children:(0,c.jsx)("i",{children:"type"})})," ",(0,c.jsx)(r,{styled:!0,term:"control-error",children:(0,c.jsx)("b",{children:"control-error"})})," is signaled if ",(0,c.jsx)(r,{styled:!0,term:"throw",children:(0,c.jsx)("b",{children:"throw"})})," is done when there is no suitable ",(0,c.jsx)(r,{styled:!0,term:"catch",children:(0,c.jsx)("b",{children:"catch"})})," ",(0,c.jsx)(r,{styled:!0,term:"tag",children:(0,c.jsx)("i",{children:"tag"})}),"."]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"See Also:"})}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(r,{styled:!0,term:"throw",children:(0,c.jsx)("b",{children:"throw"})}),", Section 3.1 (Evaluation)"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,c.jsxs)(t.p,{children:["It is customary for ",(0,c.jsx)(r,{styled:!0,term:"symbol",children:(0,c.jsx)("i",{children:"symbols"})})," to be used as ",(0,c.jsx)(r,{styled:!0,term:"tag",children:(0,c.jsx)("i",{children:"tags"})}),", but any ",(0,c.jsx)(r,{styled:!0,term:"object",children:(0,c.jsx)("i",{children:"object"})})," is permitted. However, numbers should not be used because the comparison is done using ",(0,c.jsx)(r,{styled:!0,term:"eq",children:(0,c.jsx)("b",{children:"eq"})}),"."]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(r,{styled:!0,term:"catch",children:(0,c.jsx)("b",{children:"catch"})})," differs from ",(0,c.jsx)(r,{styled:!0,term:"block",children:(0,c.jsx)("b",{children:"block"})})," in that ",(0,c.jsx)(r,{styled:!0,term:"catch",children:(0,c.jsx)("b",{children:"catch"})})," tags have dynamic ",(0,c.jsx)(r,{styled:!0,term:"scope",children:(0,c.jsx)("i",{children:"scope"})})," while ",(0,c.jsx)(r,{styled:!0,term:"block",children:(0,c.jsx)("b",{children:"block"})})," names have ",(0,c.jsx)(t.em,{children:"lexical scope"}),"."]})]})}function i(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(s,{...e})}):s(e)}const l={title:"catch"},h="catch",d={id:"chap-5/f-d-dictionary/catch_special-operator",title:"catch",description:"Expanded Reference: catch",source:"@site/docs/chap-5/f-d-dictionary/catch_special-operator.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/catch_special-operator",permalink:"/cl-language-reference/chap-5/f-d-dictionary/catch_special-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/catch_special-operator.md",tags:[],version:"current",frontMatter:{title:"catch"},sidebar:"tutorialSidebar",previous:{title:"case, ccase, ecase",permalink:"/cl-language-reference/chap-5/f-d-dictionary/case_ccase_ecase_macro"},next:{title:"compiled-function-p",permalink:"/cl-language-reference/chap-5/f-d-dictionary/compiled-function-p_function"}},a={},o=[{value:"Expanded Reference: catch",id:"expanded-reference-catch",level:2}];function x(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"catch",children:"catch"}),"\n","\n","\n",(0,c.jsx)(i,{}),"\n",(0,c.jsx)(t.h2,{id:"expanded-reference-catch",children:"Expanded Reference: catch"}),"\n",(0,c.jsx)(t.admonition,{type:"tip",children:(0,c.jsx)(t.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-lisp",children:"(catch )\n"})})]})}function j(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>i});var c=r(67294);const n={},s=c.createContext(n);function i(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);