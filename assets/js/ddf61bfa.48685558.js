"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[33890],{40849:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>P,contentTitle:()=>F,default:()=>S,frontMatter:()=>U,metadata:()=>G,toc:()=>I});var s=t(85893),n=t(11151);function r(e){return(0,s.jsx)(s.Fragment,{})}function o(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(r,{...e})}):r()}function c(e){const i={code:"code",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components},{ClLinks:t,GlossaryTerm:r}=i;return t||l("ClLinks",!0),r||l("GlossaryTerm",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["Figure 18\u20131 lists some ",(0,s.jsx)(r,{styled:!0,term:"defined name",children:(0,s.jsx)("i",{children:"defined names"})})," that are applicable to ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"hash tables"})}),". The following rules apply to ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"hash tables"})}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["\u2013 A ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"hash table"})})," can only associate one value with a given key. If an attempt is made to add a second value for a given key, the second value will replace the first. Thus, adding a value to a ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"hash table"})})," is a destructive operation; the ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"hash table"})})," is modified."]}),"\n",(0,s.jsxs)(i.p,{children:["\u2013 There are four kinds of ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"hash tables"})}),": those whose keys are compared with ",(0,s.jsx)(t,{term:"eq",children:(0,s.jsx)("b",{children:"eq"})}),", those whose keys are compared with ",(0,s.jsx)(t,{term:"eql",children:(0,s.jsx)("b",{children:"eql"})}),", those whose keys are compared with ",(0,s.jsx)(t,{term:"equal",children:(0,s.jsx)("b",{children:"equal"})}),", and those whose keys are compared with ",(0,s.jsx)(t,{term:"equalp",children:(0,s.jsx)("b",{children:"equalp"})}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["\u2013 ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"Hash tables"})})," are created by ",(0,s.jsx)(t,{term:"make-hash-table",children:(0,s.jsx)("b",{children:"make-hash-table"})}),". ",(0,s.jsx)(t,{term:"gethash",children:(0,s.jsx)("b",{children:"gethash"})})," is used to look up a key and find the associated value. New entries are added to ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"hash tables"})})," using ",(0,s.jsx)(t,{term:"setf",children:(0,s.jsx)("b",{children:"setf"})})," with ",(0,s.jsx)(t,{term:"gethash",children:(0,s.jsx)("b",{children:"gethash"})}),". ",(0,s.jsx)(t,{term:"remhash",children:(0,s.jsx)("b",{children:"remhash"})})," is used to remove an entry. For example:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lisp",children:"(setq a (make-hash-table)) \u2192 #<HASH-TABLE EQL 0/120 32536573>\n(setf (gethash \u2019color a) \u2019brown) \u2192 BROWN\n(setf (gethash \u2019name a) \u2019fred) \u2192 FRED\n(gethash \u2019color a) \u2192 BROWN, *true*\n(gethash \u2019name a) \u2192 FRED, *true*\n(gethash \u2019pointy a) \u2192 NIL, *false*\n"})}),"\n",(0,s.jsxs)(i.p,{children:["In this example, the symbols color and name are being used as keys, and the symbols brown and fred are being used as the associated values. The ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"hash table"})})," has two items in it, one of which associates from color to brown, and the other of which associates from name to fred."]}),"\n",(0,s.jsxs)(i.p,{children:["\u2013 A key or a value may be any ",(0,s.jsx)(t,{term:"object",children:(0,s.jsx)("i",{children:"object"})}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["\u2013 The existence of an entry in the ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"hash table"})})," can be determined from the ",(0,s.jsx)(r,{styled:!0,term:"secondary value",children:(0,s.jsx)("i",{children:"secondary value"})})," returned by ",(0,s.jsx)(t,{term:"gethash",children:(0,s.jsx)("b",{children:"gethash"})}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["|",(0,s.jsxs)("p",{children:[(0,s.jsx)(i.strong,{children:"clrhash hash-table-p remhash gethash make-hash-table sxhash"})," "]}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)(i.strong,{children:"hash-table-count maphash"})}),"|"]}),"\n",(0,s.jsx)(i.p,{children:"| :- |"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Figure 18\u20131. Hash-table defined names"})}),"\n",(0,s.jsx)(i.p,{children:"Hash"})]})}function a(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function l(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}function h(e){const i={em:"em",p:"p",...(0,n.a)(),...e.components},{ClLinks:t,GlossaryTerm:r}=i;return t||j("ClLinks",!0),r||j("GlossaryTerm",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["The function supplied as the ",":test"," argument to ",(0,s.jsx)(t,{term:"make-hash-table",children:(0,s.jsx)("b",{children:"make-hash-table"})})," specifies the \u2018equivalence test\u2019 for the ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"hash table"})})," it creates."]}),"\n",(0,s.jsxs)(i.p,{children:["An ",(0,s.jsx)(t,{term:"object",children:(0,s.jsx)("i",{children:"object"})})," is \u2018visibly modified\u2019 with regard to an equivalence test if there exists some set of ",(0,s.jsx)(t,{term:"object",children:(0,s.jsx)("i",{children:"objects"})})," (or potential ",(0,s.jsx)(t,{term:"object",children:(0,s.jsx)("i",{children:"objects"})}),") which are equivalent to the ",(0,s.jsx)(t,{term:"object",children:(0,s.jsx)("i",{children:"object"})})," before the modification but are no longer equivalent afterwards."]}),"\n",(0,s.jsxs)(i.p,{children:["If an ",(0,s.jsx)(i.em,{children:"object O"}),(0,s.jsx)("sub",{children:"1"})," is used as a key in a ",(0,s.jsx)(i.em,{children:"hash table H"})," and is then visibly modified with regard to the equivalence test of ",(0,s.jsx)(i.em,{children:"H"}),", then the consequences are unspecified if ",(0,s.jsx)(i.em,{children:"O"}),(0,s.jsx)("sub",{children:"1"}),", or any ",(0,s.jsx)(i.em,{children:"object O"}),(0,s.jsx)("sub",{children:"2"})," equivalent to ",(0,s.jsx)(i.em,{children:"O"}),(0,s.jsx)("sub",{children:"1"})," under the equivalence test (either before or after the modification), is used as a key in further operations on ",(0,s.jsx)(i.em,{children:"H"}),". The consequences of using ",(0,s.jsx)(i.em,{children:"O"}),(0,s.jsx)("sub",{children:"1"})," as a key are unspecified even if ",(0,s.jsx)(i.em,{children:"O"}),(0,s.jsx)("sub",{children:"1"})," is visibly"]}),"\n",(0,s.jsx)(i.p,{children:"modified and then later modified again in such a way as to undo the visible modification."}),"\n",(0,s.jsxs)(i.p,{children:["Following are specifications of the modifications which are visible to the equivalence tests which must be supported by ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"hash tables"})}),". The modifications are described in terms of modification of components, and are defined recursively. Visible modifications of components of the ",(0,s.jsx)(t,{term:"object",children:(0,s.jsx)("i",{children:"object"})})," are visible modifications of the ",(0,s.jsx)(t,{term:"object",children:(0,s.jsx)("i",{children:"object"})}),"."]})]})}function d(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function j(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}function p(e){const i={em:"em",p:"p",...(0,n.a)(),...e.components},{ClLinks:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,s.jsxs)(i.p,{children:["No ",(0,s.jsx)(i.em,{children:"standardized function"})," is provided that is capable of visibly modifying an ",(0,s.jsx)(t,{term:"object",children:(0,s.jsx)("i",{children:"object"})})," with regard to ",(0,s.jsx)(t,{term:"eq",children:(0,s.jsx)("b",{children:"eq"})})," or ",(0,s.jsx)(t,{term:"eql",children:(0,s.jsx)("b",{children:"eql"})}),"."]})}function x(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}function m(e){const i={p:"p",...(0,n.a)(),...e.components},{ClLinks:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,s.jsxs)(i.p,{children:["As a consequence of the behavior for ",(0,s.jsx)(t,{term:"equal",children:(0,s.jsx)("b",{children:"equal"})}),", the rules for visible modification of ",(0,s.jsx)(t,{term:"object",children:(0,s.jsx)("i",{children:"objects"})})," not explicitly mentioned in this section are inherited from those in Section 18.1.2.1 (Visible Modification of Objects with respect to EQ and EQL)."]})}function b(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}function f(e){const i={p:"p",...(0,n.a)(),...e.components},{ClLinks:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,s.jsxs)(i.p,{children:["Any visible change to the ",(0,s.jsx)(t,{term:"car",children:(0,s.jsx)("i",{children:"car"})})," or the ",(0,s.jsx)(t,{term:"cdr",children:(0,s.jsx)("i",{children:"cdr"})})," of a ",(0,s.jsx)(t,{term:"cons",children:(0,s.jsx)("i",{children:"cons"})})," is considered a visible modification with regard to ",(0,s.jsx)(t,{term:"equal",children:(0,s.jsx)("b",{children:"equal"})}),"."]})}function u(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}function y(e){const i={em:"em",p:"p",...(0,n.a)(),...e.components},{ClLinks:t,GlossaryTerm:r}=i;return t||g("ClLinks",!0),r||g("GlossaryTerm",!0),(0,s.jsxs)(i.p,{children:["For a ",(0,s.jsx)(t,{term:"vector",children:(0,s.jsx)("i",{children:"vector"})})," of ",(0,s.jsx)(t,{term:"type",children:(0,s.jsx)("i",{children:"type"})})," ",(0,s.jsx)(t,{term:"bit-vector",children:(0,s.jsx)("b",{children:"bit-vector"})})," or of ",(0,s.jsx)(t,{term:"type",children:(0,s.jsx)("i",{children:"type"})})," ",(0,s.jsx)(t,{term:"string",children:(0,s.jsx)("b",{children:"string"})}),", any visible change to an ",(0,s.jsx)(i.em,{children:"active element"})," of the ",(0,s.jsx)(t,{term:"vector",children:(0,s.jsx)("i",{children:"vector"})})," , or to the ",(0,s.jsx)(t,{term:"length",children:(0,s.jsx)("i",{children:"length"})})," of the ",(0,s.jsx)(t,{term:"vector",children:(0,s.jsx)("i",{children:"vector"})})," (if it is ",(0,s.jsx)(r,{styled:!0,term:"actually adjustable",children:(0,s.jsx)("i",{children:"actually adjustable"})})," or has a ",(0,s.jsx)(r,{styled:!0,term:"fill pointer",children:(0,s.jsx)("i",{children:"fill pointer"})})," ) is considered a visible modification with regard to ",(0,s.jsx)(t,{term:"equal",children:(0,s.jsx)("b",{children:"equal"})}),"."]})}function v(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}function g(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}function w(e){const i={p:"p",...(0,n.a)(),...e.components},{ClLinks:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,s.jsxs)(i.p,{children:["As a consequence of the behavior for ",(0,s.jsx)(t,{term:"equalp",children:(0,s.jsx)("b",{children:"equalp"})}),", the rules for visible modification of ",(0,s.jsx)(t,{term:"object",children:(0,s.jsx)("i",{children:"objects"})})," not explicitly mentioned in this section are inherited from those in Section 18.1.2.2 (Visible Modification of Objects with respect to EQUAL)."]})}function k(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(w,{...e})}):w(e)}function q(e){const i={p:"p",...(0,n.a)(),...e.components},{ClLinks:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,s.jsxs)(i.p,{children:["Any visible change to a ",(0,s.jsx)(t,{term:"slot",children:(0,s.jsx)("i",{children:"slot"})})," of a ",(0,s.jsx)(t,{term:"structure",children:(0,s.jsx)("i",{children:"structure"})})," is considered a visible modification with regard to ",(0,s.jsx)(t,{term:"equalp",children:(0,s.jsx)("b",{children:"equalp"})}),"."]})}function E(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(q,{...e})}):q(e)}function L(e){const i={em:"em",p:"p",...(0,n.a)(),...e.components},{ClLinks:t,GlossaryTerm:r}=i;return t||T("ClLinks",!0),r||T("GlossaryTerm",!0),(0,s.jsxs)(i.p,{children:["In an ",(0,s.jsx)(t,{term:"array",children:(0,s.jsx)("i",{children:"array"})}),", any visible change to an ",(0,s.jsx)(i.em,{children:"active element"}),", to the ",(0,s.jsx)(r,{styled:!0,term:"fill pointer",children:(0,s.jsx)("i",{children:"fill pointer"})})," (if the ",(0,s.jsx)(t,{term:"array",children:(0,s.jsx)("i",{children:"array"})})," can and does have one), or to the ",(0,s.jsx)(t,{term:"dimension",children:(0,s.jsx)("i",{children:"dimensions"})})," (if the ",(0,s.jsx)(t,{term:"array",children:(0,s.jsx)("i",{children:"array"})})," is ",(0,s.jsx)(r,{styled:!0,term:"actually adjustable",children:(0,s.jsx)("i",{children:"actually adjustable"})}),") is considered a visible modification with regard to ",(0,s.jsx)(t,{term:"equalp",children:(0,s.jsx)("b",{children:"equalp"})}),"."]})}function C(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(L,{...e})}):L(e)}function T(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}function A(e){const i={p:"p",...(0,n.a)(),...e.components},{ClLinks:t,GlossaryTerm:r}=i;return t||H("ClLinks",!0),r||H("GlossaryTerm",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["In a ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"hash table"})}),", any visible change to the count of entries in the ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"hash table"})}),", to the keys, or to the values associated with the keys is considered a visible modification with regard to ",(0,s.jsx)(t,{term:"equalp",children:(0,s.jsx)("b",{children:"equalp"})}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["Note that the visibility of modifications to the keys depends on the equivalence test of the ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"hash table"})}),", not on the specification of ",(0,s.jsx)(t,{term:"equalp",children:(0,s.jsx)("b",{children:"equalp"})}),"."]})]})}function M(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(A,{...e})}):A(e)}function H(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}function V(e){const i={p:"p",...(0,n.a)(),...e.components},{ClLinks:t,GlossaryTerm:r}=i;return t||O("ClLinks",!0),r||O("GlossaryTerm",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(t,{term:"implementation",children:(0,s.jsx)("i",{children:"Implementations"})})," that extend the language by providing additional mutator functions (or additional behavior for existing mutator functions) must document how the use of these extensions interacts with equivalence tests and ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"hash table"})})," searches."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(t,{term:"implementation",children:(0,s.jsx)("i",{children:"Implementations"})})," that extend the language by defining additional acceptable equivalence tests for ",(0,s.jsx)(r,{styled:!0,term:"hash table",children:(0,s.jsx)("i",{children:"hash tables"})})," (allowing additional values for the ",":test"," argument to ",(0,s.jsx)(t,{term:"make-hash-table",children:(0,s.jsx)("b",{children:"make-hash-table"})}),") must document the visible components of these tests."]}),"\n",(0,s.jsx)(i.p,{children:"Hash"})]})}function Q(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(V,{...e})}):V(e)}function O(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const U={title:"18.1 Hash Table Concepts"},F="18.1 Hash Table Concepts",G={id:"chap-18/bi-b-hash-table-concepts",title:"18.1 Hash Table Concepts",description:"18.1.1 Hash",source:"@site/docs/chap-18/bi-b-hash-table-concepts.md",sourceDirName:"chap-18",slug:"/chap-18/bi-b-hash-table-concepts",permalink:"/cl-language-reference/chap-18/bi-b-hash-table-concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-18/bi-b-hash-table-concepts.md",tags:[],version:"current",frontMatter:{title:"18.1 Hash Table Concepts"},sidebar:"tutorialSidebar",previous:{title:"18. Hash Tables",permalink:"/cl-language-reference/category/18-hash-tables"},next:{title:"18.2 Hash Tables Dictionary",permalink:"/cl-language-reference/category/182-hash-tables-dictionary"}},P={},I=[{value:"18.1.1 Hash",id:"1811-hash",level:2},{value:"18.1.2 Modifying Hash Table Keys",id:"1812-modifying-hash-table-keys",level:2},{value:"18.1.2.1 Visible Modification of Objects with respect to EQ and EQL",id:"18121-visible-modification-of-objects-with-respect-to-eq-and-eql",level:3},{value:"18.1.2.2 Visible Modification of Objects with respect to EQUAL",id:"18122-visible-modification-of-objects-with-respect-to-equal",level:3},{value:"18.1.2.2.1 Visible Modification of Conses with respect to EQUAL",id:"181221-visible-modification-of-conses-with-respect-to-equal",level:4},{value:"18.1.2.2.2 Visible Modification of Bit Vectors and Strings with respect to EQUAL",id:"181222-visible-modification-of-bit-vectors-and-strings-with-respect-to-equal",level:4},{value:"18.1.2.3 Visible Modification of Objects with respect to EQUALP",id:"18123-visible-modification-of-objects-with-respect-to-equalp",level:3},{value:"18.1.2.3.1 Visible Modification of Structures with respect to EQUALP",id:"181231-visible-modification-of-structures-with-respect-to-equalp",level:4},{value:"18.1.2.3.2 Visible Modification of Arrays with respect to EQUALP",id:"181232-visible-modification-of-arrays-with-respect-to-equalp",level:4},{value:"18.1.2.3.3 Visible Modification of Hash Tables with respect to EQUALP",id:"181233-visible-modification-of-hash-tables-with-respect-to-equalp",level:4},{value:"18.1.2.4 Visible Modifications by Language Extensions",id:"18124-visible-modifications-by-language-extensions",level:3}];function N(e){const i={h1:"h1",h2:"h2",h3:"h3",h4:"h4",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"181-hash-table-concepts",children:"18.1 Hash Table Concepts"}),"\n","\n",(0,s.jsx)(o,{}),"\n",(0,s.jsx)(i.h2,{id:"1811-hash",children:"18.1.1 Hash"}),"\n","\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(i.h2,{id:"1812-modifying-hash-table-keys",children:"18.1.2 Modifying Hash Table Keys"}),"\n","\n",(0,s.jsx)(d,{}),"\n",(0,s.jsx)(i.h3,{id:"18121-visible-modification-of-objects-with-respect-to-eq-and-eql",children:"18.1.2.1 Visible Modification of Objects with respect to EQ and EQL"}),"\n","\n",(0,s.jsx)(x,{}),"\n",(0,s.jsx)(i.h3,{id:"18122-visible-modification-of-objects-with-respect-to-equal",children:"18.1.2.2 Visible Modification of Objects with respect to EQUAL"}),"\n","\n",(0,s.jsx)(b,{}),"\n",(0,s.jsx)(i.h4,{id:"181221-visible-modification-of-conses-with-respect-to-equal",children:"18.1.2.2.1 Visible Modification of Conses with respect to EQUAL"}),"\n","\n",(0,s.jsx)(u,{}),"\n",(0,s.jsx)(i.h4,{id:"181222-visible-modification-of-bit-vectors-and-strings-with-respect-to-equal",children:"18.1.2.2.2 Visible Modification of Bit Vectors and Strings with respect to EQUAL"}),"\n","\n",(0,s.jsx)(v,{}),"\n",(0,s.jsx)(i.h3,{id:"18123-visible-modification-of-objects-with-respect-to-equalp",children:"18.1.2.3 Visible Modification of Objects with respect to EQUALP"}),"\n","\n",(0,s.jsx)(k,{}),"\n",(0,s.jsx)(i.h4,{id:"181231-visible-modification-of-structures-with-respect-to-equalp",children:"18.1.2.3.1 Visible Modification of Structures with respect to EQUALP"}),"\n","\n",(0,s.jsx)(E,{}),"\n",(0,s.jsx)(i.h4,{id:"181232-visible-modification-of-arrays-with-respect-to-equalp",children:"18.1.2.3.2 Visible Modification of Arrays with respect to EQUALP"}),"\n","\n",(0,s.jsx)(C,{}),"\n",(0,s.jsx)(i.h4,{id:"181233-visible-modification-of-hash-tables-with-respect-to-equalp",children:"18.1.2.3.3 Visible Modification of Hash Tables with respect to EQUALP"}),"\n","\n",(0,s.jsx)(M,{}),"\n",(0,s.jsx)(i.h3,{id:"18124-visible-modifications-by-language-extensions",children:"18.1.2.4 Visible Modifications by Language Extensions"}),"\n","\n","\n",(0,s.jsx)(Q,{})]})}function S(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(N,{...e})}):N(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>c,a:()=>o});var s=t(67294);const n={},r=s.createContext(n);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);