"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[97282],{38305:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>p,toc:()=>a});var t=r(85893),i=r(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{DictionaryLink:r,GlossaryTerm:c}=n;return r||s("DictionaryLink",!0),c||s("GlossaryTerm",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"vector-pop"})," ",(0,t.jsx)(c,{term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{term:"vector-pop",children:(0,t.jsx)("b",{children:"vector-pop"})})," ",(0,t.jsx)(n.em,{children:"vector \u2192 element"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})}),"\u2014a ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})})," with a ",(0,t.jsx)(c,{styled:!0,term:"fill pointer",children:(0,t.jsx)("i",{children:"fill pointer"})})," ."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(c,{term:"element",children:(0,t.jsx)("i",{children:"element"})}),"\u2014an ",(0,t.jsx)(c,{term:"object",children:(0,t.jsx)("i",{children:"object"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Decreases the ",(0,t.jsx)(c,{styled:!0,term:"fill pointer",children:(0,t.jsx)("i",{children:"fill pointer"})})," of ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})})," by one, and retrieves the ",(0,t.jsx)(c,{term:"element",children:(0,t.jsx)("i",{children:"element"})})," of ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})})," that is designated by the new ",(0,t.jsx)(c,{styled:!0,term:"fill pointer",children:(0,t.jsx)("i",{children:"fill pointer"})})," ."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(vector-push (setq fable (list \u2019fable)) \n\t     (setq fa (make-array 8 \n\t\t\t\t  :fill-pointer 2 \n\t\t\t\t  :initial-element \u2019sisyphus))) \u2192 2 \n(fill-pointer fa) \u2192 3 \n(eq (vector-pop fa) fable) \u2192 true \n(vector-pop fa) \u2192 SISYPHUS \n(fill-pointer fa) \u2192 1 \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(c,{styled:!0,term:"fill pointer",children:(0,t.jsx)("i",{children:"fill pointer"})})," is decreased by one."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,t.jsxs)(n.p,{children:["The value of the ",(0,t.jsx)(c,{styled:!0,term:"fill pointer",children:(0,t.jsx)("i",{children:"fill pointer"})})," ."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(n.p,{children:["An error of ",(0,t.jsx)(c,{term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(r,{term:"type-error",children:(0,t.jsx)("b",{children:"type-error"})})," is signaled if ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})})," does not have a ",(0,t.jsx)(c,{styled:!0,term:"fill pointer",children:(0,t.jsx)("i",{children:"fill pointer"})})," ."]}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(c,{styled:!0,term:"fill pointer",children:(0,t.jsx)("i",{children:"fill pointer"})})," is zero, ",(0,t.jsx)(r,{term:"vector-pop",children:(0,t.jsx)("b",{children:"vector-pop"})})," signals an error of ",(0,t.jsx)(c,{term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(r,{term:"error",children:(0,t.jsx)("b",{children:"error"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{term:"vector-push",children:(0,t.jsx)("b",{children:"vector-push"})}),", ",(0,t.jsx)(r,{term:"vector-push-extend",children:(0,t.jsx)("b",{children:"vector-push-extend"})}),", ",(0,t.jsx)(r,{term:"fill-pointer",children:(0,t.jsx)("b",{children:"fill-pointer"})})]})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function s(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const l={title:"vector-pop"},d="vector-pop",p={id:"chap-15/bf-c-dictionary/vector-pop_function",title:"vector-pop",description:"Expanded Reference: vector-pop",source:"@site/docs/chap-15/bf-c-dictionary/vector-pop_function.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/vector-pop_function",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/vector-pop_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/vector-pop_function.md",tags:[],version:"current",frontMatter:{title:"vector-pop"},sidebar:"tutorialSidebar",previous:{title:"upgraded-array-element-type",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/upgraded-array-element-type_function"},next:{title:"vector-push, vector-push-extend",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/vector-push_vector-push-extend_function"}},h={},a=[{value:"Expanded Reference: vector-pop",id:"expanded-reference-vector-pop",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"vector-pop",children:"vector-pop"}),"\n","\n","\n",(0,t.jsx)(o,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-vector-pop",children:"Expanded Reference: vector-pop"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(vector-pop )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var t=r(67294);const i={},c=t.createContext(i);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);