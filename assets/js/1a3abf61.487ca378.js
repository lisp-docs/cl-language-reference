"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[75988],{22719:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var i=r(85893),t=r(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["\u2217",(0,i.jsx)(r,{styled:!0,term:"print-escape",children:(0,i.jsx)("b",{children:(0,i.jsx)(n.em,{children:"print-escape"})})}),"\u2217 Variable"]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,i.jsxs)(n.p,{children:["a ",(0,i.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"true",children:(0,i.jsx)("i",{children:"true"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(r,{styled:!0,term:"false",children:(0,i.jsx)("i",{children:"false"})}),", escape characters and ",(0,i.jsx)(n.em,{children:"package prefixes"})," are not output when an expression is printed."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(r,{styled:!0,term:"true",children:(0,i.jsx)("i",{children:"true"})}),", an attempt is made to print an ",(0,i.jsx)(r,{styled:!0,term:"expression",children:(0,i.jsx)("i",{children:"expression"})})," in such a way that it can be read again to produce an ",(0,i.jsx)(r,{styled:!0,term:"equal",children:(0,i.jsx)("b",{children:"equal"})})," ",(0,i.jsx)(r,{styled:!0,term:"expression",children:(0,i.jsx)("i",{children:"expression"})}),". (This is only a guideline; not a requirement. See ",(0,i.jsx)(r,{styled:!0,term:"print-readably",children:(0,i.jsx)("b",{children:"*print-readably*"})}),".)"]}),"\n",(0,i.jsxs)(n.p,{children:["For more specific details of how the ",(0,i.jsx)(r,{styled:!0,term:"value",children:(0,i.jsx)("i",{children:"value"})})," of ",(0,i.jsx)(r,{styled:!0,term:"print-escape",children:(0,i.jsx)("b",{children:"*print-escape*"})})," affects the printing of certain ",(0,i.jsx)(r,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"types"})}),", see Section 22.1.3 (Default Print-Object Methods)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"\n(let ((\\*print-escape\\* t)) (write #\\a)) \n\n\n\n\u25b7 #\\a \n\u2192 #\\a \n(let ((\\*print-escape\\* nil)) (write #\\a)) \n\u25b7 a \n\u2192 #\\a \n\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"princ",children:(0,i.jsx)("b",{children:"princ"})}),", ",(0,i.jsx)(r,{styled:!0,term:"prin1",children:(0,i.jsx)("b",{children:"prin1"})}),", ",(0,i.jsx)(r,{styled:!0,term:"format",children:(0,i.jsx)("b",{children:"format"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"write",children:(0,i.jsx)("b",{children:"write"})}),", ",(0,i.jsx)(r,{styled:!0,term:"readtable-case",children:(0,i.jsx)("b",{children:"readtable-case"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"princ",children:(0,i.jsx)("b",{children:"princ"})})," effectively binds ",(0,i.jsx)(r,{styled:!0,term:"print-escape",children:(0,i.jsx)("b",{children:"*print-escape*"})})," to ",(0,i.jsx)(r,{styled:!0,term:"false",children:(0,i.jsx)("i",{children:"false"})}),". ",(0,i.jsx)(r,{styled:!0,term:"prin1",children:(0,i.jsx)("b",{children:"prin1"})})," effectively binds ",(0,i.jsx)(r,{styled:!0,term:"print-escape",children:(0,i.jsx)("b",{children:"*print-escape*"})})," to ",(0,i.jsx)(r,{styled:!0,term:"true",children:(0,i.jsx)("i",{children:"true"})}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}const l={title:"print-escape"},a="*print-escape*",d={id:"chap-22/cc-e-dictionary/print-escape_variable",title:"print-escape",description:"Expanded Reference: \\print-escape\\",source:"@site/docs/chap-22/cc-e-dictionary/print-escape_variable.md",sourceDirName:"chap-22/cc-e-dictionary",slug:"/chap-22/cc-e-dictionary/print-escape_variable",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/print-escape_variable",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-22/cc-e-dictionary/print-escape_variable.md",tags:[],version:"current",frontMatter:{title:"print-escape"},sidebar:"tutorialSidebar",previous:{title:"print-circle",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/print-circle_variable"},next:{title:"print-gensym",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/print-gensym_variable"}},p={},o=[{value:"Expanded Reference: *print-escape*",id:"expanded-reference-print-escape",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"print-escape",children:"*print-escape*"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-print-escape",children:"Expanded Reference: *print-escape*"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"*print-escape*\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>c});var i=r(67294);const t={},s=i.createContext(t);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);