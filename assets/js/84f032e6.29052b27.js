"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[65699],{28807:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>h,toc:()=>o});var r=s(85893),c=s(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components},{ClLinks:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"push"})," ",(0,r.jsx)(s,{styled:!0,term:"macro",children:(0,r.jsx)("i",{children:"Macro"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{styled:!0,term:"push",children:(0,r.jsx)("b",{children:"push"})})," ",(0,r.jsx)(n.em,{children:"item place \u2192 new-place-value"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"item"}),"\u2014an ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"object"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{styled:!0,term:"place",children:(0,r.jsx)("i",{children:"place"})}),"\u2014a ",(0,r.jsx)(s,{styled:!0,term:"place",children:(0,r.jsx)("i",{children:"place"})}),", the ",(0,r.jsx)(s,{styled:!0,term:"value",children:(0,r.jsx)("i",{children:"value"})})," of which may be any ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"object"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"new-place-value"}),"\u2014a ",(0,r.jsx)(s,{styled:!0,term:"list",children:(0,r.jsx)("i",{children:"list"})})," (the new ",(0,r.jsx)(s,{styled:!0,term:"value",children:(0,r.jsx)("i",{children:"value"})})," of ",(0,r.jsx)(s,{styled:!0,term:"place",children:(0,r.jsx)("i",{children:"place"})}),")."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{styled:!0,term:"push",children:(0,r.jsx)("b",{children:"push"})})," prepends ",(0,r.jsx)(n.em,{children:"item"})," to the ",(0,r.jsx)(s,{styled:!0,term:"list",children:(0,r.jsx)("i",{children:"list"})})," that is stored in ",(0,r.jsx)(s,{styled:!0,term:"place",children:(0,r.jsx)("i",{children:"place"})}),", stores the resulting ",(0,r.jsx)(s,{styled:!0,term:"list",children:(0,r.jsx)("i",{children:"list"})})," in ",(0,r.jsx)(s,{styled:!0,term:"place",children:(0,r.jsx)("i",{children:"place"})}),", and returns the ",(0,r.jsx)(s,{styled:!0,term:"list",children:(0,r.jsx)("i",{children:"list"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For information about the ",(0,r.jsx)(s,{styled:!0,term:"evaluation",children:(0,r.jsx)("i",{children:"evaluation"})})," of ",(0,r.jsx)(s,{styled:!0,term:"subform",children:(0,r.jsx)("i",{children:"subforms"})})," of ",(0,r.jsx)(s,{styled:!0,term:"place",children:(0,r.jsx)("i",{children:"place"})}),", see Section 5.1.1.1 (Evaluation of Subforms to Places)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"\n(setq llst \u2019(nil)) \u2192 (NIL) \n(push 1 (car llst)) \u2192 (1) \nllst \u2192 ((1)) \n(push 1 (car llst)) \u2192 (1 1) \nllst \u2192 ((1 1)) \n(setq x \u2019(a (b c) d)) \u2192 (A (B C) D) \n(push 5 (cadr x)) \u2192 (5 B C) \nx \u2192 (A (5 B C) D) \n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,r.jsxs)(n.p,{children:["The contents of ",(0,r.jsx)(s,{styled:!0,term:"place",children:(0,r.jsx)("i",{children:"place"})})," are modified."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{styled:!0,term:"pop",children:(0,r.jsx)("b",{children:"pop"})}),", ",(0,r.jsx)(s,{styled:!0,term:"pushnew",children:(0,r.jsx)("b",{children:"pushnew"})}),", Section 5.1 (Generalized Reference)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["The effect of (push ",(0,r.jsx)(n.em,{children:"item place"}),") is equivalent to"]}),"\n",(0,r.jsxs)(n.p,{children:["(setf place (cons ",(0,r.jsx)(n.em,{children:"item place"}),"))"]}),"\n",(0,r.jsxs)(n.p,{children:["except that the ",(0,r.jsx)(s,{styled:!0,term:"subform",children:(0,r.jsx)("i",{children:"subforms"})})," of ",(0,r.jsx)(s,{styled:!0,term:"place",children:(0,r.jsx)("i",{children:"place"})})," are evaluated only once, and ",(0,r.jsx)(n.em,{children:"item"})," is evaluated before ",(0,r.jsx)(s,{styled:!0,term:"place",children:(0,r.jsx)("i",{children:"place"})}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}const i={title:"push"},d="push",h={id:"chap-14/be-c-dictionary/push_macro",title:"push",description:"Expanded Reference: push",source:"@site/docs/chap-14/be-c-dictionary/push_macro.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/push_macro",permalink:"/cl-language-reference/chap-14/be-c-dictionary/push_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/push_macro.md",tags:[],version:"current",frontMatter:{title:"push"},sidebar:"tutorialSidebar",previous:{title:"pop",permalink:"/cl-language-reference/chap-14/be-c-dictionary/pop_macro"},next:{title:"pushnew",permalink:"/cl-language-reference/chap-14/be-c-dictionary/pushnew_macro"}},a={},o=[{value:"Expanded Reference: push",id:"expanded-reference-push",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"push",children:"push"}),"\n","\n","\n",(0,r.jsx)(l,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-push",children:"Expanded Reference: push"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(push )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var r=s(67294);const c={},t=r.createContext(c);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);