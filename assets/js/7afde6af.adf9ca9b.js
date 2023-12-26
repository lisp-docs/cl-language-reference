"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[16996],{3417:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var t=n(85893),i=n(11151);function s(e){const r={admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:n,GlossaryTerm:s}=r;return n||o("ClLinks",!0),s||o("GlossaryTerm",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"or"})," ",(0,t.jsx)(n,{term:"macro",children:(0,t.jsx)("i",{children:"Macro"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"or",children:(0,t.jsx)("b",{children:"or"})})," ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"{form}"})}),"* \u2192 {results}*"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"form"})}),"\u2014a ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"form"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"results"}),"\u2014the ",(0,t.jsx)(n,{term:"value",children:(0,t.jsx)("i",{children:"values"})})," or ",(0,t.jsx)(s,{styled:!0,term:"primary value",children:(0,t.jsx)("i",{children:"primary value"})})," (see below) resulting from the evaluation of the last ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"form"})})," executed or ",(0,t.jsx)(n,{term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"or",children:(0,t.jsx)("b",{children:"or"})})," evaluates each ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"form"})}),", one at a time, from left to right. The evaluation of all ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"forms"})})," terminates when a ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"form"})})," evaluates to ",(0,t.jsx)(n,{term:"true",children:(0,t.jsx)("i",{children:"true"})})," (",(0,t.jsx)(r.em,{children:"i.e."}),", something other than ",(0,t.jsx)(n,{term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),")."]}),"\n",(0,t.jsxs)(r.p,{children:["If the ",(0,t.jsx)(n,{term:"evaluation",children:(0,t.jsx)("i",{children:"evaluation"})})," of any ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"form"})})," other than the last returns a ",(0,t.jsx)(s,{styled:!0,term:"primary value",children:(0,t.jsx)("i",{children:"primary value"})})," that is ",(0,t.jsx)(n,{term:"true",children:(0,t.jsx)("i",{children:"true"})}),", ",(0,t.jsx)(n,{term:"or",children:(0,t.jsx)("b",{children:"or"})})," immediately returns that ",(0,t.jsx)(n,{term:"value",children:(0,t.jsx)("i",{children:"value"})})," (but no additional ",(0,t.jsx)(n,{term:"value",children:(0,t.jsx)("i",{children:"values"})}),") without evaluating the remaining ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"forms"})}),". If every ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"form"})})," but the last returns ",(0,t.jsx)(n,{term:"false",children:(0,t.jsx)("i",{children:"false"})})," as its ",(0,t.jsx)(s,{styled:!0,term:"primary value",children:(0,t.jsx)("i",{children:"primary value"})}),", ",(0,t.jsx)(n,{term:"or",children:(0,t.jsx)("b",{children:"or"})})," returns all ",(0,t.jsx)(n,{term:"value",children:(0,t.jsx)("i",{children:"values"})})," returned by the last ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"form"})}),". If no ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"forms"})})," are supplied, ",(0,t.jsx)(n,{term:"or",children:(0,t.jsx)("b",{children:"or"})})," returns ",(0,t.jsx)(n,{term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:"(or) \u2192 NIL \n(defparameter temp0 nil) \u2192 temp0\n(defparameter temp1 10) \u2192 temp1\n(defparameter temp2 20) \u2192 temp2\n(defparameter temp1 30) \u2192 temp3\n(or temp0 temp1 (setf temp2 37)) \u2192 10\ntemp2 \u2192 20 \n(or (incf temp1) (incf temp2) (incf temp3)) \u2192 11 \ntemp1 \u2192 11 \ntemp2 \u2192 20 \ntemp3 \u2192 30 \n(or (values) temp1) \u2192 11 \n(or (values temp1 temp2) temp3) \u2192 11 \n(or temp0 (values temp1 temp2)) \u2192 11, 20 \n(or (values temp0 temp1) (values temp2 temp3)) \u2192 20, 30 \n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"and",children:(0,t.jsx)("b",{children:"and"})}),", ",(0,t.jsx)(n,{term:"some",children:(0,t.jsx)("b",{children:"some"})}),", ",(0,t.jsx)(n,{term:"unless",children:(0,t.jsx)("b",{children:"unless"})})]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["We fixed the examples so that it uses ",(0,t.jsx)(n,{term:"defparameter",children:(0,t.jsx)("b",{children:"defparameter"})})," to initialize the variables."]})})]})}function l(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}function o(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const c={title:"or"},d="or",a={id:"chap-5/f-d-dictionary/or_macro",title:"or",description:"Expanded Reference: or",source:"@site/docs/chap-5/f-d-dictionary/or_macro.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/or_macro",permalink:"/cl-language-reference/chap-5/f-d-dictionary/or_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/or_macro.md",tags:[],version:"current",frontMatter:{title:"or"},sidebar:"tutorialSidebar",previous:{title:"nth-value",permalink:"/cl-language-reference/chap-5/f-d-dictionary/nth-value_macro"},next:{title:"prog1, prog2",permalink:"/cl-language-reference/chap-5/f-d-dictionary/prog1_prog2_macro"}},m={},h=[{value:"Expanded Reference: or",id:"expanded-reference-or",level:2}];function x(e){const r={h1:"h1",h2:"h2",p:"p",...(0,i.a)(),...e.components},{DictionaryLink:n,GlossaryTerm:s}=r;return n||j("DictionaryLink",!0),s||j("GlossaryTerm",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"or",children:"or"}),"\n","\n","\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(r.h2,{id:"expanded-reference-or",children:"Expanded Reference: or"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"or",children:(0,t.jsx)("b",{children:"or"})})," is defined as a macro because it stops evaluating as soon as any ",(0,t.jsx)(s,{term:"form",children:(0,t.jsx)("i",{children:"form"})})," evaluates to something other than ",(0,t.jsx)(n,{term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),".  If it were defined as a function, every ",(0,t.jsx)(s,{term:"form",children:(0,t.jsx)("i",{children:"form"})})," would be evaluated before the function was applied.  As a result of ",(0,t.jsx)(n,{term:"or",children:(0,t.jsx)("b",{children:"or"})})," not being a function, it can not be used with ",(0,t.jsx)(n,{term:"apply",children:(0,t.jsx)("b",{children:"apply"})}),".  In order to check that some value of a list is ",(0,t.jsx)(s,{term:"true",children:(0,t.jsx)("i",{children:"true"})}),", the function ",(0,t.jsx)(n,{term:"some",children:(0,t.jsx)("b",{children:"some"})})," could be used."]})]})}function p(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}function j(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>l});var t=n(67294);const i={},s=t.createContext(i);function l(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);