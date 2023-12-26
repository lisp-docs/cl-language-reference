"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[39508],{93944:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=i(85893),t=i(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{DictionaryLink:i,GlossaryTerm:s}=n;return i||o("DictionaryLink",!0),s||o("GlossaryTerm",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"optimize"})," ",(0,r.jsx)(s,{term:"declaration",children:(0,r.jsx)("i",{children:"Declaration"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:["(optimize ",(0,r.jsx)(n.em,{children:"{quality"})," | (",(0,r.jsx)(n.em,{children:"quality value"}),")",(0,r.jsx)(n.em,{children:"}"}),"*)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"quality"}),"\u2014an ",(0,r.jsx)(s,{styled:!0,term:"optimize quality",children:(0,r.jsx)("i",{children:"optimize quality"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{term:"value",children:(0,r.jsx)("i",{children:"value"})}),"\u2014one of the ",(0,r.jsx)(n.em,{children:"integers"})," 0, 1, 2, or 3."]}),"\n",(0,r.jsx)(n.p,{children:"Evaluation and"}),"\n",(0,r.jsx)(i,{term:"optimize",children:(0,r.jsx)("b",{children:"optimize"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Valid Context:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{term:"declaration",children:(0,r.jsx)("i",{children:"declaration"})})," or ",(0,r.jsx)(s,{term:"proclamation",children:(0,r.jsx)("i",{children:"proclamation"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Advises the compiler that each ",(0,r.jsx)(n.em,{children:"quality"})," should be given attention according to the specified corresponding ",(0,r.jsx)(s,{term:"value",children:(0,r.jsx)("i",{children:"value"})}),". Each ",(0,r.jsx)(n.em,{children:"quality"})," must be a ",(0,r.jsx)(s,{term:"symbol",children:(0,r.jsx)("i",{children:"symbol"})})," naming an ",(0,r.jsx)(s,{styled:!0,term:"optimize quality",children:(0,r.jsx)("i",{children:"optimize quality"})}),"; the names and meanings of the standard ",(0,r.jsx)(n.em,{children:"optimize qualities"})," are shown in Figure 3\u201325."]}),"\n",(0,r.jsxs)(n.p,{children:["|",(0,r.jsx)(n.strong,{children:"Name Meaning"}),"|"]}),"\n",(0,r.jsx)(n.p,{children:"| :- |"}),"\n",(0,r.jsxs)(n.p,{children:["|",(0,r.jsxs)("p",{children:[(0,r.jsx)(n.strong,{children:"compilation-speed"})," speed of the compilation process "]}),(0,r.jsxs)("p",{children:[(0,r.jsx)(n.strong,{children:"debug"})," ease of debugging "]}),(0,r.jsxs)("p",{children:[(0,r.jsx)(n.strong,{children:"safety"})," run-time error checking "]}),(0,r.jsxs)("p",{children:[(0,r.jsx)(n.strong,{children:"space"})," both code size and run-time space "]}),(0,r.jsxs)("p",{children:[(0,r.jsx)(n.strong,{children:"speed"})," speed of the object code"]}),"|"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Figure 3\u201325. Optimize qualities"})}),"\n",(0,r.jsxs)(n.p,{children:["There may be other, ",(0,r.jsx)(n.em,{children:"implementation-defined optimize qualities"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(s,{term:"value",children:(0,r.jsx)("i",{children:"value"})})," 0 means that the corresponding ",(0,r.jsx)(n.em,{children:"quality"})," is totally unimportant, and 3 that the ",(0,r.jsx)(n.em,{children:"quality"})," is extremely important; 1 and 2 are intermediate values, with 1 the neutral value. (",(0,r.jsx)(n.em,{children:"quality"})," 3) can be abbreviated to ",(0,r.jsx)(n.em,{children:"quality"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(s,{term:"code",children:(0,r.jsx)("i",{children:"code"})})," which has the optimization (safety 3), or just ",(0,r.jsx)(n.strong,{children:"safety"}),", is called ",(0,r.jsx)(n.em,{children:"safe code"}),". The consequences are unspecified if a ",(0,r.jsx)(n.em,{children:"quality"})," appears more than once with ",(0,r.jsx)(n.em,{children:"di\u21b5erent values"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(defun often-used-subroutine (x y) \n  (declare (optimize (safety 2))) \n  (error-check x y) \n  (hairy-setup x) \n  (do ((i 0 (+ i 1)) \n       (z x (cdr z))) \n      ((null z)) \n    ;; This inner loop really needs to burn. \n    (declare (optimize speed)) \n    (declare (fixnum i)) \n    )) \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{term:"declare",children:(0,r.jsx)("b",{children:"declare"})}),", ",(0,r.jsx)(i,{term:"declaim",children:(0,r.jsx)("b",{children:"declaim"})}),", ",(0,r.jsx)(i,{term:"proclaim",children:(0,r.jsx)("b",{children:"proclaim"})}),", Section 3.3.4 (Declaration Scope)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["An ",(0,r.jsx)(i,{term:"optimize",children:(0,r.jsx)("b",{children:"optimize"})})," declaration never applies to either a ",(0,r.jsx)(s,{term:"variable",children:(0,r.jsx)("i",{children:"variable"})})," or a ",(0,r.jsx)(n.em,{children:"function binding"}),". An ",(0,r.jsx)(n.strong,{children:"optimize 3\u201396"})," Programming Language\u2014Common Lisp"]}),"\n",(0,r.jsxs)(n.p,{children:["declaration can only be a ",(0,r.jsx)(s,{styled:!0,term:"free declaration",children:(0,r.jsx)("i",{children:"free declaration"})}),". For more information, see Section 3.3.4 (Declaration Scope)."]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const a={title:"optimize"},l="optimize",d={id:"chap-3/d-i-dictionary/optimize_declaration",title:"optimize",description:"Expanded Reference: optimize",source:"@site/docs/chap-3/d-i-dictionary/optimize_declaration.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/optimize_declaration",permalink:"/cl-language-reference/chap-3/d-i-dictionary/optimize_declaration",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/optimize_declaration.md",tags:[],version:"current",frontMatter:{title:"optimize"},sidebar:"tutorialSidebar",previous:{title:"macroexpand, macroexpand-1",permalink:"/cl-language-reference/chap-3/d-i-dictionary/macroexpand_macroexpand-1_function"},next:{title:"proclaim",permalink:"/cl-language-reference/chap-3/d-i-dictionary/proclaim_function"}},h={},p=[{value:"Expanded Reference: optimize",id:"expanded-reference-optimize",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"optimize",children:"optimize"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-optimize",children:"Expanded Reference: optimize"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(optimize )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>c});var r=i(67294);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);