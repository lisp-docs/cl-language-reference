"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[31585],{11599:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>x,contentTitle:()=>o,default:()=>j,frontMatter:()=>d,metadata:()=>h,toc:()=>a});var t=n(85893),i=n(11151);function c(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{DictionaryLink:n,GlossaryTerm:c}=r;return n||l("DictionaryLink",!0),c||l("GlossaryTerm",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"vector-push, vector-push-extend"})," ",(0,t.jsx)(c,{term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"vector-push",children:(0,t.jsx)("b",{children:"vector-push"})})," ",(0,t.jsx)(r.em,{children:"new-element vector \u2192 new-index-p"})]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"vector-push-extend",children:(0,t.jsx)("b",{children:"vector-push-extend"})})," ",(0,t.jsx)(r.em,{children:"new-element vector"})," &optional ",(0,t.jsx)(r.em,{children:"extension \u2192 new-index"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"new-element"}),"\u2014an ",(0,t.jsx)(c,{term:"object",children:(0,t.jsx)("i",{children:"object"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})}),"\u2014a ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})})," with a ",(0,t.jsx)(c,{styled:!0,term:"fill pointer",children:(0,t.jsx)("i",{children:"fill pointer"})})," ."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(c,{term:"extension",children:(0,t.jsx)("i",{children:"extension"})}),"\u2014a positive ",(0,t.jsx)(r.em,{children:"integer"})," . The default is ",(0,t.jsx)(c,{term:"implementation-dependent",children:(0,t.jsx)("i",{children:"implementation-dependent"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"new-index-p"}),"\u2014a ",(0,t.jsx)(c,{styled:!0,term:"valid array index",children:(0,t.jsx)("i",{children:"valid array index"})})," for ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})}),", or ",(0,t.jsx)(n,{term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"new-index"}),"\u2014a ",(0,t.jsx)(c,{styled:!0,term:"valid array index",children:(0,t.jsx)("i",{children:"valid array index"})})," for ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"vector-push",children:(0,t.jsx)("b",{children:"vector-push"})})," and ",(0,t.jsx)(n,{term:"vector-push-extend",children:(0,t.jsx)("b",{children:"vector-push-extend"})})," store ",(0,t.jsx)(r.em,{children:"new-element"})," in ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})}),". ",(0,t.jsx)(n,{term:"vector-push",children:(0,t.jsx)("b",{children:"vector-push"})})," attempts to store ",(0,t.jsx)(r.em,{children:"new-element"})," in the element of ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})})," designated by the ",(0,t.jsx)(c,{styled:!0,term:"fill pointer",children:(0,t.jsx)("i",{children:"fill pointer"})})," , and to increase the ",(0,t.jsx)(c,{styled:!0,term:"fill pointer",children:(0,t.jsx)("i",{children:"fill pointer"})})," by one. If the (>= (fill-pointer ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})}),") (array-dimension ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})})," 0)), neither ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})})," nor its ",(0,t.jsx)(c,{styled:!0,term:"fill pointer",children:(0,t.jsx)("i",{children:"fill pointer"})})," are affected. Otherwise, the store and increment take place and ",(0,t.jsx)(n,{term:"vector-push",children:(0,t.jsx)("b",{children:"vector-push"})})," returns the former value of the ",(0,t.jsx)(c,{styled:!0,term:"fill pointer",children:(0,t.jsx)("i",{children:"fill pointer"})})," which is one less than the one it leaves in ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"vector-push-extend",children:(0,t.jsx)("b",{children:"vector-push-extend"})})," is just like ",(0,t.jsx)(n,{term:"vector-push",children:(0,t.jsx)("b",{children:"vector-push"})})," except that if the ",(0,t.jsx)(c,{styled:!0,term:"fill pointer",children:(0,t.jsx)("i",{children:"fill pointer"})})," gets too large, ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})})," is extended using ",(0,t.jsx)(n,{term:"adjust-array",children:(0,t.jsx)("b",{children:"adjust-array"})})," so that it can contain more elements. ",(0,t.jsx)(c,{term:"extension",children:(0,t.jsx)("i",{children:"Extension"})})," is the minimum number of elements to be added to ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})})," if it must be extended."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"vector-push",children:(0,t.jsx)("b",{children:"vector-push"})})," and ",(0,t.jsx)(n,{term:"vector-push-extend",children:(0,t.jsx)("b",{children:"vector-push-extend"})})," return the index of ",(0,t.jsx)(r.em,{children:"new-element"})," in ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})}),". If (>= (fill-pointer ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})}),") (array-dimension ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})})," 0)), ",(0,t.jsx)(n,{term:"vector-push",children:(0,t.jsx)("b",{children:"vector-push"})})," returns ",(0,t.jsx)(n,{term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:"(vector-push (setq fable (list \u2019fable)) \n\t     (setq fa (make-array 8 \n\t\t\t\t  :fill-pointer 2 \n\t\t\t\t  \n\t\t\t\t  \n\t\t\t\t  :initial-element \u2019first-one))) \u2192 2 \n(fill-pointer fa) \u2192 3 \n(eq (aref fa 2) fable) \u2192 true \n(vector-push-extend #\\X \n\t\t    (setq aa \n\t\t\t  (make-array 5 \n\t\t\t\t      :element-type \u2019character \n\t\t\t\t      :adjustable t \n\t\t\t\t      :fill-pointer 3))) \u2192 3 \n(fill-pointer aa) \u2192 4 \n(vector-push-extend #\\Y aa 4) \u2192 4 \n(array-total-size aa) \u2192 at least 5 \n(vector-push-extend #\\Z aa 4) \u2192 5 \n(array-total-size aa) \u2192 9 ;(or more) \n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Affected By:"})}),"\n",(0,t.jsxs)(r.p,{children:["The value of the ",(0,t.jsx)(c,{styled:!0,term:"fill pointer",children:(0,t.jsx)("i",{children:"fill pointer"})})," ."]}),"\n",(0,t.jsxs)(r.p,{children:["How ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})})," was created."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(r.p,{children:["An error of ",(0,t.jsx)(c,{term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(n,{term:"error",children:(0,t.jsx)("b",{children:"error"})})," is signaled by ",(0,t.jsx)(n,{term:"vector-push-extend",children:(0,t.jsx)("b",{children:"vector-push-extend"})})," if it tries to extend ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})})," and ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})})," is not ",(0,t.jsx)(c,{styled:!0,term:"actually adjustable",children:(0,t.jsx)("i",{children:"actually adjustable"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["An error of ",(0,t.jsx)(c,{term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(n,{term:"error",children:(0,t.jsx)("b",{children:"error"})})," is signaled if ",(0,t.jsx)(c,{term:"vector",children:(0,t.jsx)("i",{children:"vector"})})," does not have a ",(0,t.jsx)(c,{styled:!0,term:"fill pointer",children:(0,t.jsx)("i",{children:"fill pointer"})})," ."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"adjustable-array-p"}),", ",(0,t.jsx)(n,{term:"fill-pointer",children:(0,t.jsx)("b",{children:"fill-pointer"})}),", ",(0,t.jsx)(n,{term:"vector-pop",children:(0,t.jsx)("b",{children:"vector-pop"})})]})]})}function s(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function l(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"vector-push, vector-push-extend"},o="vector-push, vector-push-extend",h={id:"chap-15/bf-c-dictionary/vector-push_vector-push-extend_function",title:"vector-push, vector-push-extend",description:"Expanded Reference: vector-push, vector-push-extend",source:"@site/docs/chap-15/bf-c-dictionary/vector-push_vector-push-extend_function.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/vector-push_vector-push-extend_function",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/vector-push_vector-push-extend_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/vector-push_vector-push-extend_function.md",tags:[],version:"current",frontMatter:{title:"vector-push, vector-push-extend"},sidebar:"tutorialSidebar",previous:{title:"vector-pop",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/vector-pop_function"},next:{title:"vector",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/vector_function"}},x={},a=[{value:"Expanded Reference: vector-push, vector-push-extend",id:"expanded-reference-vector-push-vector-push-extend",level:2}];function p(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"vector-push-vector-push-extend",children:"vector-push, vector-push-extend"}),"\n","\n","\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(r.h2,{id:"expanded-reference-vector-push-vector-push-extend",children:"Expanded Reference: vector-push, vector-push-extend"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:"(vector-push, vector-push-extend )\n"})})]})}function j(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>s});var t=n(67294);const i={},c=t.createContext(i);function s(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);