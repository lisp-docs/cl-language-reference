"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[59273],{97773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var s=n(85893),i=n(11151);function h(e){const t={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"make-hash-table"})," ",(0,s.jsx)(n,{styled:!0,term:"function",children:(0,s.jsx)("i",{children:"Function"})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(n,{styled:!0,term:"make-hash-table",children:(0,s.jsx)("b",{children:"make-hash-table"})})," &key ",(0,s.jsx)(t.em,{children:"test size rehash-size rehash-threshold \u2192 hash-table"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"test"}),"\u2014a ",(0,s.jsx)(n,{styled:!0,term:"designator",children:(0,s.jsx)("i",{children:"designator"})})," for one of the ",(0,s.jsx)(n,{styled:!0,term:"function",children:(0,s.jsx)("i",{children:"functions"})})," ",(0,s.jsx)(n,{styled:!0,term:"eq",children:(0,s.jsx)("b",{children:"eq"})}),", ",(0,s.jsx)(n,{styled:!0,term:"eql",children:(0,s.jsx)("b",{children:"eql"})}),", ",(0,s.jsx)(n,{styled:!0,term:"equal",children:(0,s.jsx)("b",{children:"equal"})}),", or ",(0,s.jsx)(n,{styled:!0,term:"equalp",children:(0,s.jsx)("b",{children:"equalp"})}),". The default is ",(0,s.jsx)(n,{styled:!0,term:"eql",children:(0,s.jsx)("b",{children:"eql"})}),". ",(0,s.jsx)(t.em,{children:"size"}),"\u2014a non-negative ",(0,s.jsx)(t.em,{children:"integer"})," . The default is ",(0,s.jsx)(n,{styled:!0,term:"implementation-dependent",children:(0,s.jsx)("i",{children:"implementation-dependent"})}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"rehash-size"}),"\u2014a ",(0,s.jsx)(t.em,{children:"real"})," of ",(0,s.jsx)(n,{styled:!0,term:"type",children:(0,s.jsx)("i",{children:"type"})})," (or (integer 1 *) (float (1.0) *)). The default is ",(0,s.jsx)(t.em,{children:"implementation dependent"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"rehash-threshold"}),"\u2014a ",(0,s.jsx)(t.em,{children:"real"})," of ",(0,s.jsx)(n,{styled:!0,term:"type",children:(0,s.jsx)("i",{children:"type"})})," (real 0 1). The default is ",(0,s.jsx)(n,{styled:!0,term:"implementation-dependent",children:(0,s.jsx)("i",{children:"implementation-dependent"})}),". ",(0,s.jsx)(t.em,{children:"hash-table"}),"\u2014a ",(0,s.jsx)(t.em,{children:"hash table"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(t.p,{children:["Creates and returns a new ",(0,s.jsx)(t.em,{children:"hash table"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"test"})," determines how ",(0,s.jsx)(n,{styled:!0,term:"key",children:(0,s.jsx)("i",{children:"keys"})})," are compared. An ",(0,s.jsx)(n,{styled:!0,term:"object",children:(0,s.jsx)("i",{children:"object"})})," is said to be present in the ",(0,s.jsx)(t.em,{children:"hash-table"})," if that ",(0,s.jsx)(n,{styled:!0,term:"object",children:(0,s.jsx)("i",{children:"object"})})," is the ",(0,s.jsx)(n,{styled:!0,term:"same",children:(0,s.jsx)("i",{children:"same"})})," under the ",(0,s.jsx)(t.em,{children:"test"})," as the ",(0,s.jsx)(n,{styled:!0,term:"key",children:(0,s.jsx)("i",{children:"key"})})," for some entry in the ",(0,s.jsx)(t.em,{children:"hash-table"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"size"})," is a hint to the ",(0,s.jsx)(n,{styled:!0,term:"implementation",children:(0,s.jsx)("i",{children:"implementation"})})," about how much initial space to allocate in the ",(0,s.jsx)(t.em,{children:"hash-table"}),". This information, taken together with the ",(0,s.jsx)(t.em,{children:"rehash-threshold"}),", controls the approximate number of entries which it should be possible to insert before the table has to grow. The actual size might be"]}),"\n",(0,s.jsxs)(t.p,{children:["rounded up from ",(0,s.jsx)(t.em,{children:"size"})," to the next \u2018good\u2019 size; for example, some ",(0,s.jsx)(n,{styled:!0,term:"implementation",children:(0,s.jsx)("i",{children:"implementations"})})," might round to the next prime number."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"rehash-size"})," specifies a minimum amount to increase the size of the ",(0,s.jsx)(t.em,{children:"hash-table"})," when it becomes full enough to require rehashing; see ",(0,s.jsx)(t.em,{children:"rehash-theshold"})," below. If ",(0,s.jsx)(t.em,{children:"rehash-size"})," is an ",(0,s.jsx)(t.em,{children:"integer"})," , the expected growth rate for the table is additive and the ",(0,s.jsx)(t.em,{children:"integer"})," is the number of entries to add; if it is a ",(0,s.jsx)(n,{styled:!0,term:"float",children:(0,s.jsx)("i",{children:"float"})}),", the expected growth rate for the table is multiplicative and the ",(0,s.jsx)(n,{styled:!0,term:"float",children:(0,s.jsx)("i",{children:"float"})})," is the ratio of the new size to the old size. As with ",(0,s.jsx)(t.em,{children:"size"}),", the actual size of the increase might be rounded up."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"rehash-threshold"})," specifies how full the ",(0,s.jsx)(t.em,{children:"hash-table"})," can get before it must grow. It specifies the maximum desired hash-table occupancy level."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(n,{styled:!0,term:"value",children:(0,s.jsx)("i",{children:"values"})})," of ",(0,s.jsx)(t.em,{children:"rehash-size"})," and ",(0,s.jsx)(t.em,{children:"rehash-threshold"})," do not constrain the ",(0,s.jsx)(n,{styled:!0,term:"implementation",children:(0,s.jsx)("i",{children:"implementation"})})," to use any particular method for computing when and by how much the size of ",(0,s.jsx)(t.em,{children:"hash-table"})," should be enlarged. Such decisions are ",(0,s.jsx)(n,{styled:!0,term:"implementation-dependent",children:(0,s.jsx)("i",{children:"implementation-dependent"})}),", and these ",(0,s.jsx)(n,{styled:!0,term:"value",children:(0,s.jsx)("i",{children:"values"})})," only hints from the ",(0,s.jsx)(n,{styled:!0,term:"programmer",children:(0,s.jsx)("i",{children:"programmer"})})," to the ",(0,s.jsx)(n,{styled:!0,term:"implementation",children:(0,s.jsx)("i",{children:"implementation"})}),", and the ",(0,s.jsx)(n,{styled:!0,term:"implementation",children:(0,s.jsx)("i",{children:"implementation"})})," is permitted to ignore them."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lisp",children:'\n(setq table (make-hash-table)) \u2192 #<HASH-TABLE EQL 0/120 46142754> \n(setf (gethash "one" table) 1) \u2192 1 \n(gethash "one" table) \u2192 NIL, *false* \n(setq table (make-hash-table :test \u2019equal)) \u2192 #<HASH-TABLE EQUAL 0/139 46145547> (setf (gethash "one" table) 1) \u2192 1 \n(gethash "one" table) \u2192 1, T \n(make-hash-table :rehash-size 1.5 :rehash-threshold 0.7) \n\u2192 #<HASH-TABLE EQL 0/120 46156620> \n\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(n,{styled:!0,term:"gethash",children:(0,s.jsx)("b",{children:"gethash"})}),", ",(0,s.jsx)(n,{styled:!0,term:"hash-table",children:(0,s.jsx)("b",{children:"hash-table"})})]})]})}function r(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}const l={title:"make-hash-table"},a="make-hash-table",d={id:"chap-18/bi-c-dictionary/make-hash-table_function",title:"make-hash-table",description:"Expanded Reference: make-hash-table",source:"@site/docs/chap-18/bi-c-dictionary/make-hash-table_function.md",sourceDirName:"chap-18/bi-c-dictionary",slug:"/chap-18/bi-c-dictionary/make-hash-table_function",permalink:"/cl-language-reference/chap-18/bi-c-dictionary/make-hash-table_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-18/bi-c-dictionary/make-hash-table_function.md",tags:[],version:"current",frontMatter:{title:"make-hash-table"},sidebar:"tutorialSidebar",previous:{title:"hash-table",permalink:"/cl-language-reference/chap-18/bi-c-dictionary/hash-table_system-class"},next:{title:"maphash",permalink:"/cl-language-reference/chap-18/bi-c-dictionary/maphash_function"}},c={},o=[{value:"Expanded Reference: make-hash-table",id:"expanded-reference-make-hash-table",level:2}];function m(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"make-hash-table",children:"make-hash-table"}),"\n","\n","\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(t.h2,{id:"expanded-reference-make-hash-table",children:"Expanded Reference: make-hash-table"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lisp",children:"(make-hash-table )\n"})})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var s=n(67294);const i={},h=s.createContext(i);function r(e){const t=s.useContext(h);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(h.Provider,{value:t},e.children)}}}]);