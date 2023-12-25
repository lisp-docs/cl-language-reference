"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[41606],{69288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var r=n(85893),i=n(11151);function s(e){const t={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"with-condition-restarts"})," ",(0,r.jsx)(n,{styled:!0,term:"macro",children:(0,r.jsx)("i",{children:"Macro"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(n,{styled:!0,term:"with-condition-restarts",children:(0,r.jsx)("b",{children:"with-condition-restarts"})})," ",(0,r.jsx)(t.em,{children:"condition-form restarts-form {form}"}),"*"]}),"\n",(0,r.jsx)(t.p,{children:"\u2192 {result}*"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"condition-form"}),"\u2014a ",(0,r.jsx)(n,{styled:!0,term:"form",children:(0,r.jsx)("i",{children:"form"})}),"; ",(0,r.jsx)(t.em,{children:"evaluated"})," to produce a ",(0,r.jsx)(n,{styled:!0,term:"condition",children:(0,r.jsx)("i",{children:"condition"})}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(n,{styled:!0,term:"condition",children:(0,r.jsx)("i",{children:"condition"})}),"\u2014a ",(0,r.jsx)(t.em,{children:"condition object"})," resulting from the ",(0,r.jsx)(n,{styled:!0,term:"evaluation",children:(0,r.jsx)("i",{children:"evaluation"})})," of ",(0,r.jsx)(t.em,{children:"condition-form"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"restart-form"}),"\u2014a ",(0,r.jsx)(n,{styled:!0,term:"form",children:(0,r.jsx)("i",{children:"form"})}),"; ",(0,r.jsx)(t.em,{children:"evaluated"})," to produce a ",(0,r.jsx)(t.em,{children:"restart-list"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"restart-list"}),"\u2014a ",(0,r.jsx)(n,{styled:!0,term:"list",children:(0,r.jsx)("i",{children:"list"})})," of ",(0,r.jsx)(t.em,{children:"restart objects"})," resulting from the ",(0,r.jsx)(n,{styled:!0,term:"evaluation",children:(0,r.jsx)("i",{children:"evaluation"})})," of ",(0,r.jsx)(t.em,{children:"restart-form"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(n,{styled:!0,term:"form",children:(0,r.jsx)("i",{children:"forms"})}),"\u2014an ",(0,r.jsx)(t.em,{children:"implicit progn"}),"; evaluated."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"results"}),"\u2014the ",(0,r.jsx)(n,{styled:!0,term:"value",children:(0,r.jsx)("i",{children:"values"})})," returned by ",(0,r.jsx)(n,{styled:!0,term:"form",children:(0,r.jsx)("i",{children:"forms"})}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(t.p,{children:["First, the ",(0,r.jsx)(t.em,{children:"condition-form"})," and ",(0,r.jsx)(t.em,{children:"restarts-form"})," are ",(0,r.jsx)(t.em,{children:"evaluated"})," in normal left-to-right order; the ",(0,r.jsx)(t.em,{children:"primary values"})," yielded by these ",(0,r.jsx)(n,{styled:!0,term:"evaluation",children:(0,r.jsx)("i",{children:"evaluations"})})," are respectively called the ",(0,r.jsx)(n,{styled:!0,term:"condition",children:(0,r.jsx)("i",{children:"condition"})})," and the ",(0,r.jsx)(t.em,{children:"restart-list"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Next, the ",(0,r.jsx)(n,{styled:!0,term:"form",children:(0,r.jsx)("i",{children:"forms"})})," are ",(0,r.jsx)(t.em,{children:"evaluated"})," in a ",(0,r.jsx)(t.em,{children:"dynamic environment"})," in which each ",(0,r.jsx)(n,{styled:!0,term:"restart",children:(0,r.jsx)("i",{children:"restart"})})," in ",(0,r.jsx)(t.em,{children:"restart-list"})," is associated with the ",(0,r.jsx)(n,{styled:!0,term:"condition",children:(0,r.jsx)("i",{children:"condition"})}),". See Section 9.1.4.2.4 (Associating a Restart with a Condition)."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n,{styled:!0,term:"restart-case",children:(0,r.jsx)("b",{children:"restart-case"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(t.p,{children:["Usually this ",(0,r.jsx)(n,{styled:!0,term:"macro",children:(0,r.jsx)("i",{children:"macro"})})," is not used explicitly in code, since ",(0,r.jsx)(n,{styled:!0,term:"restart-case",children:(0,r.jsx)("b",{children:"restart-case"})})," handles most of the common cases in a way that is syntactically more concise."]})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const o={title:"with-condition-restarts"},d="with-condition-restarts",l={id:"chap-9/j-c-dictionary/with-condition-restarts_macro",title:"with-condition-restarts",description:"Expanded Reference: with-condition-restarts",source:"@site/docs/chap-9/j-c-dictionary/with-condition-restarts_macro.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/with-condition-restarts_macro",permalink:"/cl-language-reference/chap-9/j-c-dictionary/with-condition-restarts_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/with-condition-restarts_macro.md",tags:[],version:"current",frontMatter:{title:"with-condition-restarts"},sidebar:"tutorialSidebar",previous:{title:"warning",permalink:"/cl-language-reference/chap-9/j-c-dictionary/warning_condition-type"},next:{title:"with-simple-restart",permalink:"/cl-language-reference/chap-9/j-c-dictionary/with-simple-restart_macro"}},a={},h=[{value:"Expanded Reference: with-condition-restarts",id:"expanded-reference-with-condition-restarts",level:2}];function m(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"with-condition-restarts",children:"with-condition-restarts"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(t.h2,{id:"expanded-reference-with-condition-restarts",children:"Expanded Reference: with-condition-restarts"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lisp",children:"(with-condition-restarts )\n"})})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var r=n(67294);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);