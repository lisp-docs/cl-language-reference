"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[59273],{97773:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var i=t(85893),s=t(11151);function r(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{DictionaryLink:t,GlossaryTerm:r}=n;return t||a("DictionaryLink",!0),r||a("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"make-hash-table"})," ",(0,i.jsx)(r,{term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{term:"make-hash-table",children:(0,i.jsx)("b",{children:"make-hash-table"})})," &key ",(0,i.jsx)(n.em,{children:"test size rehash-size rehash-threshold \u2192 hash-table"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"test"}),"\u2014a ",(0,i.jsx)(r,{term:"designator",children:(0,i.jsx)("i",{children:"designator"})})," for one of the ",(0,i.jsx)(r,{term:"function",children:(0,i.jsx)("i",{children:"functions"})})," ",(0,i.jsx)(t,{term:"eq",children:(0,i.jsx)("b",{children:"eq"})}),", ",(0,i.jsx)(t,{term:"eql",children:(0,i.jsx)("b",{children:"eql"})}),", ",(0,i.jsx)(t,{term:"equal",children:(0,i.jsx)("b",{children:"equal"})}),", or ",(0,i.jsx)(t,{term:"equalp",children:(0,i.jsx)("b",{children:"equalp"})}),". The default is ",(0,i.jsx)(t,{term:"eql",children:(0,i.jsx)("b",{children:"eql"})}),". ",(0,i.jsx)(n.em,{children:"size"}),"\u2014a non-negative ",(0,i.jsx)(n.em,{children:"integer"})," . The default is ",(0,i.jsx)(r,{term:"implementation-dependent",children:(0,i.jsx)("i",{children:"implementation-dependent"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"rehash-size"}),"\u2014a ",(0,i.jsx)(n.em,{children:"real"})," of ",(0,i.jsx)(r,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," (or (integer 1 *) (float (1.0) *)). The default is ",(0,i.jsx)(n.em,{children:"implementation dependent"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"rehash-threshold"}),"\u2014a ",(0,i.jsx)(n.em,{children:"real"})," of ",(0,i.jsx)(r,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," (real 0 1). The default is ",(0,i.jsx)(r,{term:"implementation-dependent",children:(0,i.jsx)("i",{children:"implementation-dependent"})}),". ",(0,i.jsx)(n.em,{children:"hash-table"}),"\u2014a ",(0,i.jsx)(r,{styled:!0,term:"hash table",children:(0,i.jsx)("i",{children:"hash table"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Creates and returns a new ",(0,i.jsx)(r,{styled:!0,term:"hash table",children:(0,i.jsx)("i",{children:"hash table"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"test"})," determines how ",(0,i.jsx)(r,{term:"key",children:(0,i.jsx)("i",{children:"keys"})})," are compared. An ",(0,i.jsx)(r,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," is said to be present in the ",(0,i.jsx)(n.em,{children:"hash-table"})," if that ",(0,i.jsx)(r,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," is the ",(0,i.jsx)(r,{term:"same",children:(0,i.jsx)("i",{children:"same"})})," under the ",(0,i.jsx)(n.em,{children:"test"})," as the ",(0,i.jsx)(r,{term:"key",children:(0,i.jsx)("i",{children:"key"})})," for some entry in the ",(0,i.jsx)(n.em,{children:"hash-table"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"size"})," is a hint to the ",(0,i.jsx)(r,{term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})})," about how much initial space to allocate in the ",(0,i.jsx)(n.em,{children:"hash-table"}),". This information, taken together with the ",(0,i.jsx)(n.em,{children:"rehash-threshold"}),", controls the approximate number of entries which it should be possible to insert before the table has to grow. The actual size might be"]}),"\n",(0,i.jsxs)(n.p,{children:["rounded up from ",(0,i.jsx)(n.em,{children:"size"})," to the next \u2018good\u2019 size; for example, some ",(0,i.jsx)(r,{term:"implementation",children:(0,i.jsx)("i",{children:"implementations"})})," might round to the next prime number."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"rehash-size"})," specifies a minimum amount to increase the size of the ",(0,i.jsx)(n.em,{children:"hash-table"})," when it becomes full enough to require rehashing; see ",(0,i.jsx)(n.em,{children:"rehash-theshold"})," below. If ",(0,i.jsx)(n.em,{children:"rehash-size"})," is an ",(0,i.jsx)(n.em,{children:"integer"})," , the expected growth rate for the table is additive and the ",(0,i.jsx)(n.em,{children:"integer"})," is the number of entries to add; if it is a ",(0,i.jsx)(r,{term:"float",children:(0,i.jsx)("i",{children:"float"})}),", the expected growth rate for the table is multiplicative and the ",(0,i.jsx)(r,{term:"float",children:(0,i.jsx)("i",{children:"float"})})," is the ratio of the new size to the old size. As with ",(0,i.jsx)(n.em,{children:"size"}),", the actual size of the increase might be rounded up."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"rehash-threshold"})," specifies how full the ",(0,i.jsx)(n.em,{children:"hash-table"})," can get before it must grow. It specifies the maximum desired hash-table occupancy level."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(r,{term:"value",children:(0,i.jsx)("i",{children:"values"})})," of ",(0,i.jsx)(n.em,{children:"rehash-size"})," and ",(0,i.jsx)(n.em,{children:"rehash-threshold"})," do not constrain the ",(0,i.jsx)(r,{term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})})," to use any particular method for computing when and by how much the size of ",(0,i.jsx)(n.em,{children:"hash-table"})," should be enlarged. Such decisions are ",(0,i.jsx)(r,{term:"implementation-dependent",children:(0,i.jsx)("i",{children:"implementation-dependent"})}),", and these ",(0,i.jsx)(r,{term:"value",children:(0,i.jsx)("i",{children:"values"})})," only hints from the ",(0,i.jsx)(r,{term:"programmer",children:(0,i.jsx)("i",{children:"programmer"})})," to the ",(0,i.jsx)(r,{term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})}),", and the ",(0,i.jsx)(r,{term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})})," is permitted to ignore them."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'(setq table (make-hash-table)) \u2192 #<HASH-TABLE EQL 0/120 46142754> \n(setf (gethash "one" table) 1) \u2192 1 \n(gethash "one" table) \u2192 NIL, *false* \n(setq table (make-hash-table :test \u2019equal)) \u2192 #<HASH-TABLE EQUAL 0/139 46145547> (setf (gethash "one" table) 1) \u2192 1 \n(gethash "one" table) \u2192 1, T \n(make-hash-table :rehash-size 1.5 :rehash-threshold 0.7) \n\u2192 #<HASH-TABLE EQL 0/120 46156620> \n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{term:"gethash",children:(0,i.jsx)("b",{children:"gethash"})}),", ",(0,i.jsx)(t,{term:"hash-table",children:(0,i.jsx)("b",{children:"hash-table"})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}function a(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const l={title:"make-hash-table"},c="make-hash-table",d={id:"chap-18/bi-c-dictionary/make-hash-table_function",title:"make-hash-table",description:"Expanded Reference: make-hash-table",source:"@site/docs/chap-18/bi-c-dictionary/make-hash-table_function.md",sourceDirName:"chap-18/bi-c-dictionary",slug:"/chap-18/bi-c-dictionary/make-hash-table_function",permalink:"/cl-language-reference/chap-18/bi-c-dictionary/make-hash-table_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-18/bi-c-dictionary/make-hash-table_function.md",tags:[],version:"current",frontMatter:{title:"make-hash-table"},sidebar:"tutorialSidebar",previous:{title:"hash-table",permalink:"/cl-language-reference/chap-18/bi-c-dictionary/hash-table_system-class"},next:{title:"maphash",permalink:"/cl-language-reference/chap-18/bi-c-dictionary/maphash_function"}},o={},m=[{value:"Expanded Reference: make-hash-table",id:"expanded-reference-make-hash-table",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"make-hash-table",children:"make-hash-table"}),"\n","\n","\n",(0,i.jsx)(h,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-make-hash-table",children:"Expanded Reference: make-hash-table"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(make-hash-table )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>h});var i=t(67294);const s={},r=i.createContext(s);function h(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:h(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);