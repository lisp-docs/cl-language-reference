"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[94335],{59187:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var i=n(85893),t=n(11151);function r(e){const s={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"sxhash"})," ",(0,i.jsx)(n,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(n,{styled:!0,term:"sxhash",children:(0,i.jsx)("b",{children:"sxhash"})})," ",(0,i.jsx)(s.em,{children:"object \u2192 hash-code"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(n,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"object"})}),"\u2014an ",(0,i.jsx)(n,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"object"})}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"hash-code"}),"\u2014a non-negative ",(0,i.jsx)(n,{styled:!0,term:"fixnum",children:(0,i.jsx)("i",{children:"fixnum"})}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(n,{styled:!0,term:"sxhash",children:(0,i.jsx)("b",{children:"sxhash"})})," returns a hash code for ",(0,i.jsx)(n,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"object"})}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The manner in which the hash code is computed is ",(0,i.jsx)(n,{styled:!0,term:"implementation-dependent",children:(0,i.jsx)("i",{children:"implementation-dependent"})}),", but subject to certain constraints:"]}),"\n",(0,i.jsxs)(s.p,{children:["1. (equal ",(0,i.jsx)(s.em,{children:"x y"}),") implies (= (sxhash ",(0,i.jsx)(s.em,{children:"x"}),") (sxhash ",(0,i.jsx)(s.em,{children:"y"}),"))."]}),"\n",(0,i.jsxs)(s.p,{children:["2. For any two ",(0,i.jsx)(n,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"objects"})}),", ",(0,i.jsx)(s.em,{children:"x"})," and ",(0,i.jsx)(s.em,{children:"y"}),", both of which are ",(0,i.jsx)(s.em,{children:"bit vectors"}),", ",(0,i.jsx)(s.em,{children:"characters"}),", ",(0,i.jsx)(s.em,{children:"conses"}),", ",(0,i.jsx)(s.em,{children:"numbers"}),", ",(0,i.jsx)(s.em,{children:"pathnames"}),", ",(0,i.jsx)(s.em,{children:"strings"}),", or ",(0,i.jsx)(n,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})}),", and which are ",(0,i.jsx)(n,{styled:!0,term:"similar",children:(0,i.jsx)("i",{children:"similar"})})," , (sxhash ",(0,i.jsx)(s.em,{children:"x"}),") and (sxhash ",(0,i.jsx)(s.em,{children:"y"}),") ",(0,i.jsx)(n,{styled:!0,term:"yield",children:(0,i.jsx)("i",{children:"yield"})})," the same mathematical value even if ",(0,i.jsx)(s.em,{children:"x"})," and ",(0,i.jsx)(s.em,{children:"y"})," exist in different ",(0,i.jsx)(s.em,{children:"Lisp images"})," of the same ",(0,i.jsx)(n,{styled:!0,term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})}),". See Section 3.2.4 (Literal Objects in Compiled Files)."]}),"\n",(0,i.jsxs)(s.p,{children:["3. The ",(0,i.jsx)(s.em,{children:"hash-code"})," for an ",(0,i.jsx)(n,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"object"})})," is always the ",(0,i.jsx)(n,{styled:!0,term:"same",children:(0,i.jsx)("i",{children:"same"})})," within a single ",(0,i.jsx)(n,{styled:!0,term:"session",children:(0,i.jsx)("i",{children:"session"})})," provided that the ",(0,i.jsx)(n,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"object"})})," is not visibly modified with regard to the equivalence test ",(0,i.jsx)(n,{styled:!0,term:"equal",children:(0,i.jsx)("b",{children:"equal"})}),". See Section 18.1.2 (Modifying Hash Table Keys)."]}),"\n",(0,i.jsx)(s.p,{children:"Hash"}),"\n",(0,i.jsx)(n,{styled:!0,term:"sxhash",children:(0,i.jsx)("b",{children:"sxhash"})}),"\n",(0,i.jsxs)(s.p,{children:["4. The ",(0,i.jsx)(s.em,{children:"hash-code"})," is intended for hashing. This places no verifiable constraint on a ",(0,i.jsx)(s.em,{children:"conforming implementation"}),", but the intent is that an ",(0,i.jsx)(n,{styled:!0,term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})})," should make a good-faith effort to produce ",(0,i.jsx)(s.em,{children:"hash-codes"})," that are well distributed within the range of non-negative ",(0,i.jsx)(n,{styled:!0,term:"fixnum",children:(0,i.jsx)("i",{children:"fixnums"})}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["5. Computation of the ",(0,i.jsx)(s.em,{children:"hash-code"})," must terminate, even if the ",(0,i.jsx)(n,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"object"})})," contains circularities."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-lisp",children:'\n(= (sxhash (list \u2019list "ab")) (sxhash (list \u2019list "ab"))) \u2192 true \n(= (sxhash "a") (sxhash (make-string 1 :initial-element #\\a))) \u2192 true \n(let ((r (make-random-state))) \n  (= (sxhash r) (sxhash (make-random-state r)))) \n\u2192 implementation-dependent \n\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(n,{styled:!0,term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(s.p,{children:["Many common hashing needs are satisfied by ",(0,i.jsx)(n,{styled:!0,term:"make-hash-table",children:(0,i.jsx)("b",{children:"make-hash-table"})})," and the related functions on ",(0,i.jsx)(s.em,{children:"hash tables"}),". ",(0,i.jsx)(n,{styled:!0,term:"sxhash",children:(0,i.jsx)("b",{children:"sxhash"})})," is intended for use where the pre-defined abstractions are insufficient. Its main intent is to allow the user a convenient means of implementing more complicated hashing paradigms than are provided through ",(0,i.jsx)(s.em,{children:"hash tables"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The hash codes returned by ",(0,i.jsx)(n,{styled:!0,term:"sxhash",children:(0,i.jsx)("b",{children:"sxhash"})})," are not necessarily related to any hashing strategy used by any other ",(0,i.jsx)(n,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," in Common Lisp."]}),"\n",(0,i.jsxs)(s.p,{children:["For ",(0,i.jsx)(n,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"objects"})})," of ",(0,i.jsx)(n,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"types"})})," that ",(0,i.jsx)(n,{styled:!0,term:"equal",children:(0,i.jsx)("b",{children:"equal"})})," compares with ",(0,i.jsx)(n,{styled:!0,term:"eq",children:(0,i.jsx)("b",{children:"eq"})}),", item 3 requires that the ",(0,i.jsx)(s.em,{children:"hash-code"})," be based on some immutable quality of the identity of the object. Another legitimate implementation technique would be to have ",(0,i.jsx)(n,{styled:!0,term:"sxhash",children:(0,i.jsx)("b",{children:"sxhash"})})," assign (and cache) a random hash code for these ",(0,i.jsx)(n,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"objects"})}),", since there is no requirement that ",(0,i.jsx)(n,{styled:!0,term:"similar",children:(0,i.jsx)("i",{children:"similar"})})," but non-",(0,i.jsx)(n,{styled:!0,term:"eq",children:(0,i.jsx)("b",{children:"eq"})})," objects have the same hash code."]}),"\n",(0,i.jsxs)(s.p,{children:["Although ",(0,i.jsx)(n,{styled:!0,term:"similarity",children:(0,i.jsx)("i",{children:"similarity"})})," is defined for ",(0,i.jsx)(n,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbols"})})," in terms of both the ",(0,i.jsx)(n,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})}),"\u2019s ",(0,i.jsx)(n,{styled:!0,term:"name",children:(0,i.jsx)("i",{children:"name"})})," and the ",(0,i.jsx)(n,{styled:!0,term:"package",children:(0,i.jsx)("i",{children:"packages"})})," in which the ",(0,i.jsx)(n,{styled:!0,term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," is ",(0,i.jsx)(n,{styled:!0,term:"accessible",children:(0,i.jsx)("i",{children:"accessible"})}),", item 3 disallows using ",(0,i.jsx)(n,{styled:!0,term:"package",children:(0,i.jsx)("i",{children:"package"})})," information to compute the hash code, since changes to the package status of a symbol are not visible to ",(0,i.jsx)(s.em,{children:"equal"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}const c={title:"sxhash"},l="sxhash",d={id:"chap-18/bi-c-dictionary/sxhash_function",title:"sxhash",description:"Expanded Reference: sxhash",source:"@site/docs/chap-18/bi-c-dictionary/sxhash_function.md",sourceDirName:"chap-18/bi-c-dictionary",slug:"/chap-18/bi-c-dictionary/sxhash_function",permalink:"/cl-language-reference/docs/chap-18/bi-c-dictionary/sxhash_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-18/bi-c-dictionary/sxhash_function.md",tags:[],version:"current",frontMatter:{title:"sxhash"},sidebar:"tutorialSidebar",previous:{title:"remhash",permalink:"/cl-language-reference/docs/chap-18/bi-c-dictionary/remhash_function"},next:{title:"with-hash-table-iterator",permalink:"/cl-language-reference/docs/chap-18/bi-c-dictionary/with-hash-table-iterator_macro"}},a={},o=[{value:"Expanded Reference: sxhash",id:"expanded-reference-sxhash",level:2}];function x(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"sxhash",children:"sxhash"}),"\n","\n","\n",(0,i.jsx)(h,{}),"\n",(0,i.jsx)(s.h2,{id:"expanded-reference-sxhash",children:"Expanded Reference: sxhash"}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsx)(s.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-lisp",children:"(sxhash )\n"})})]})}function m(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>h});var i=n(67294);const t={},r=i.createContext(t);function h(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:h(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);