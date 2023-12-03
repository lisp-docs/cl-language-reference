"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[64056],{2592:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>L,contentTitle:()=>R,default:()=>_,frontMatter:()=>D,metadata:()=>E,toc:()=>P});var s=r(85893),i=r(11151);function t(e){return(0,s.jsx)(s.Fragment,{})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t()}function l(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.em,{children:"array"})," contains a set of ",(0,s.jsx)(n.em,{children:"objects"})," called ",(0,s.jsx)(n.em,{children:"elements"})," that can be referenced individually according to a rectilinear coordinate system."]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}function o(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.em,{children:"array element"})," is referred to by a (possibly empty) series of indices. The length of the series must equal the ",(0,s.jsx)(n.em,{children:"rank"})," of the ",(0,s.jsx)(n.em,{children:"array"}),". Each index must be a non-negative ",(0,s.jsx)(n.em,{children:"fixnum"})," less than the corresponding ",(0,s.jsx)(n.em,{children:"array dimension"}),". ",(0,s.jsx)(n.em,{children:"Array"})," indexing is zero-origin."]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}function h(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["An axis of an ",(0,s.jsx)(n.em,{children:"array"})," is called a ",(0,s.jsx)(n.em,{children:"dimension"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Each ",(0,s.jsx)(n.em,{children:"dimension"})," is a non-negative ",(0,s.jsx)(n.em,{children:"fixnum"}),"; if any dimension of an ",(0,s.jsx)(n.em,{children:"array"})," is zero, the ",(0,s.jsx)(n.em,{children:"array"})," has no elements. It is permissible for a ",(0,s.jsx)(n.em,{children:"dimension"})," to be zero, in which case the ",(0,s.jsx)(n.em,{children:"array"})," has no elements, and any attempt to ",(0,s.jsx)(n.em,{children:"access"})," an ",(0,s.jsx)(n.em,{children:"element"})," is an error. However, other properties of the ",(0,s.jsx)(n.em,{children:"array"}),", such as the ",(0,s.jsx)(n.em,{children:"dimensions"})," themselves, may be used."]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function p(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.em,{children:"implementation"})," may impose a limit on ",(0,s.jsx)(n.em,{children:"dimensions"})," of an ",(0,s.jsx)(n.em,{children:"array"}),", but there is a minimum requirement on that limit. See the ",(0,s.jsx)(n.em,{children:"variable"})," ",(0,s.jsx)(n.strong,{children:"array-dimension-limit"}),"."]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}function j(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.em,{children:"array"})," can have any number of ",(0,s.jsx)(n.em,{children:"dimensions"})," (including zero). The number of ",(0,s.jsx)(n.em,{children:"dimensions"})," is called the ",(0,s.jsx)(n.em,{children:"rank"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If the rank of an ",(0,s.jsx)(n.em,{children:"array"})," is zero then the ",(0,s.jsx)(n.em,{children:"array"})," is said to have no ",(0,s.jsx)(n.em,{children:"dimensions"}),", and the product of the dimensions (see ",(0,s.jsx)(n.strong,{children:"array-total-size"}),") is then 1; a zero-rank ",(0,s.jsx)(n.em,{children:"array"})," therefore has a single element."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}function y(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.em,{children:"array"})," of ",(0,s.jsx)(n.em,{children:"rank"})," one (",(0,s.jsx)(n.em,{children:"i.e."}),", a one-dimensional ",(0,s.jsx)(n.em,{children:"array"}),") is called a ",(0,s.jsx)(n.em,{children:"vector"}),"."]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}function f(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.em,{children:"fill pointer"})," is a non-negative ",(0,s.jsx)(n.em,{children:"integer"})," no larger than the total number of ",(0,s.jsx)(n.em,{children:"elements"})," in a ",(0,s.jsx)(n.em,{children:"vector"})," . Not all ",(0,s.jsx)(n.em,{children:"vectors"})," have ",(0,s.jsx)(n.em,{children:"fill pointers"}),". See the ",(0,s.jsx)(n.em,{children:"functions"})," ",(0,s.jsx)(n.strong,{children:"make-array"})," and ",(0,s.jsx)(n.strong,{children:"adjust-array"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.em,{children:"element"})," of a ",(0,s.jsx)(n.em,{children:"vector"})," is said to be ",(0,s.jsx)(n.em,{children:"active"})," if it has an index that is greater than or equal to zero, but less than the ",(0,s.jsx)(n.em,{children:"fill pointer"})," (if any). For an ",(0,s.jsx)(n.em,{children:"array"})," that has no ",(0,s.jsx)(n.em,{children:"fill pointer"})," , all ",(0,s.jsx)(n.em,{children:"elements"})," are considered ",(0,s.jsx)(n.em,{children:"active"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Only ",(0,s.jsx)(n.em,{children:"vectors"})," may have ",(0,s.jsx)(n.em,{children:"fill pointers"}),"; multidimensional ",(0,s.jsx)(n.em,{children:"arrays"})," may not. A multidimensional ",(0,s.jsx)(n.em,{children:"array"})," that is displaced to a ",(0,s.jsx)(n.em,{children:"vector"})," that has a ",(0,s.jsx)(n.em,{children:"fill pointer"})," can be created."]})]})}function b(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}function v(e){return(0,s.jsx)(s.Fragment,{})}function A(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(v,{...e})}):v()}function w(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(n.p,{children:["Multidimensional ",(0,s.jsx)(n.em,{children:"arrays"})," store their components in row-major order; that is, internally a multidimensional ",(0,s.jsx)(n.em,{children:"array"})," is stored as a one-dimensional ",(0,s.jsx)(n.em,{children:"array"}),", with the multidimensional index sets ordered lexicographically, last index varying fastest."]})}function k(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(w,{...e})}):w(e)}function z(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.em,{children:"implementation"})," may impose a limit on the ",(0,s.jsx)(n.em,{children:"rank"})," of an ",(0,s.jsx)(n.em,{children:"array"}),", but there is a minimum requirement on that limit. See the ",(0,s.jsx)(n.em,{children:"variable"})," ",(0,s.jsx)(n.strong,{children:"array-rank-limit"}),"."]})}function T(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(z,{...e})}):z(e)}function F(e){const n={em:"em",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.em,{children:"array"})," can be a ",(0,s.jsx)(n.em,{children:"general array"}),", meaning each ",(0,s.jsx)(n.em,{children:"element"})," may be any ",(0,s.jsx)(n.em,{children:"object"}),", or it may be a ",(0,s.jsx)(n.em,{children:"specialized array"}),", meaning that each ",(0,s.jsx)(n.em,{children:"element"})," must be of a restricted ",(0,s.jsx)(n.em,{children:"type"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The phrasing \u201can ",(0,s.jsx)(n.em,{children:"array specialized"})," to *type hhtype\u27e9\u201d is sometimes used to emphasize the ",(0,s.jsx)(n.em,{children:"element type"})," of an ",(0,s.jsx)(n.em,{children:"array"}),". This phrasing is tolerated even when the \u27e8type\u27e9 is ",(0,s.jsx)(n.strong,{children:"t"}),", even though an ",(0,s.jsx)(n.em,{children:"array specialized"})," to ",(0,s.jsx)(n.em,{children:"type t"})," is a ",(0,s.jsx)(n.em,{children:"general array"}),", not a ",(0,s.jsx)(n.em,{children:"specialized array"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Figure 15\u20131 lists some ",(0,s.jsx)(n.em,{children:"defined names"})," that are applicable to ",(0,s.jsx)(n.em,{children:"array"})," creation, ",(0,s.jsx)(n.em,{children:"access"}),", and information operations."]}),"\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.th,{style:{textAlign:"left"},children:["<p>",(0,s.jsx)(n.strong,{children:"adjust-array array-has-fill-pointer-p make-array"})," </p><p>",(0,s.jsx)(n.strong,{children:"adjustable-array-p array-in-bounds-p svref"})," </p><p>",(0,s.jsx)(n.strong,{children:"aref array-rank upgraded-array-element-type array-dimension array-rank-limit upgraded-complex-part-type array-dimension-limit array-row-major-index vector"})," </p><p>",(0,s.jsx)(n.strong,{children:"array-dimensions array-total-size vector-pop"})," </p><p>",(0,s.jsx)(n.strong,{children:"array-displacement array-total-size-limit vector-push"})," </p><p>",(0,s.jsx)(n.strong,{children:"array-element-type fill-pointer vector-push-extend"}),"</p>"]})})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Figure 15\u20131. General Purpose Array-Related Defined Names"})})]})}function S(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(F,{...e})}):F(e)}function q(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"upgraded array element type"})," of a ",(0,s.jsx)(n.em,{children:"type T"}),"<sub>1</sub> is a ",(0,s.jsx)(n.em,{children:"type T"}),"<sub>2</sub> that is a ",(0,s.jsx)(n.em,{children:"supertype"})," of ",(0,s.jsx)(n.em,{children:"T"}),"<sub>1</sub> and that is used instead of ",(0,s.jsx)(n.em,{children:"T"}),"<sub>1</sub> whenever ",(0,s.jsx)(n.em,{children:"T"}),"<sub>1</sub> is used as an ",(0,s.jsx)(n.em,{children:"array element type"})," for object creation or type discrimination."]}),"\n",(0,s.jsxs)(n.p,{children:["During creation of an ",(0,s.jsx)(n.em,{children:"array"}),", the ",(0,s.jsx)(n.em,{children:"element type"})," that was requested is called the ",(0,s.jsx)(n.em,{children:"expressed array element type"}),". The ",(0,s.jsx)(n.em,{children:"upgraded array element type"})," of the ",(0,s.jsx)(n.em,{children:"expressed array element type"})," becomes the ",(0,s.jsx)(n.em,{children:"actual array element type"})," of the ",(0,s.jsx)(n.em,{children:"array"})," that is created."]}),"\n",(0,s.jsx)(n.p,{children:"<i>Type upgrading</i> implies a movement upwards in the type hierarchy lattice. A <i>type</i> is always a <i>subtype</i> of its <i>upgraded array element type</i>. Also, if a <i>type T<sub>x</sub></i> is a <i>subtype</i> of another <i>type T<sub>y</sub></i>, then the <i>upgraded array element type</i> of <i>T<sub>x</sub></i> must be a <i>subtype</i> of the <i>upgraded array element type</i> of <i>T<sub>y</sub></i>. Two <i>disjoint types</i> can be <i>upgraded</i> to the same <i>type</i>."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"upgraded array element type T"}),"<sub>2</sub> of a ",(0,s.jsx)(n.em,{children:"type T"}),"<sub>1</sub> is a function only of ",(0,s.jsx)(n.em,{children:"T"}),"<sub>1</sub> itself; that is, it is independent of any other property of the ",(0,s.jsx)(n.em,{children:"array"})," for which ",(0,s.jsx)(n.em,{children:"T"}),"<sub>2</sub> will be used, such as ",(0,s.jsx)(n.em,{children:"rank"}),", ",(0,s.jsx)(n.em,{children:"adjustability"}),", ",(0,s.jsx)(n.em,{children:"fill pointers"}),", or displacement. The ",(0,s.jsx)(n.em,{children:"function"})," ",(0,s.jsx)(n.strong,{children:"upgraded-array-element-type"})," can be used by ",(0,s.jsx)(n.em,{children:"conforming programs"})," to predict how the ",(0,s.jsx)(n.em,{children:"implementation"})," will ",(0,s.jsx)(n.em,{children:"upgrade"})," a given ",(0,s.jsx)(n.em,{children:"type"}),"."]})]})}function C(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(q,{...e})}):q(e)}function I(e){const n={em:"em",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Vectors"})," whose ",(0,s.jsx)(n.em,{children:"elements"})," are restricted to ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"character"})," or a ",(0,s.jsx)(n.em,{children:"subtype"})," of ",(0,s.jsx)(n.strong,{children:"character"})," are called ",(0,s.jsx)(n.em,{children:"strings"}),". ",(0,s.jsx)(n.em,{children:"Strings"})," are of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"string"}),". Figure 15\u20132 lists some ",(0,s.jsx)(n.em,{children:"defined names"})," related to ",(0,s.jsx)(n.em,{children:"strings"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Strings"})," are ",(0,s.jsx)(n.em,{children:"specialized arrays"})," and might logically have been included in this chapter. However, for purposes of readability most information about ",(0,s.jsx)(n.em,{children:"strings"})," does not appear in this chapter; see instead Chapter 16 (Strings)."]}),"\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.th,{style:{textAlign:"left"},children:["<p>",(0,s.jsx)(n.strong,{children:"char string-equal string-upcase make-string string-greaterp string"}),"/= </p><p>",(0,s.jsx)(n.strong,{children:"nstring-capitalize string-left-trim string"}),"< </p><p>",(0,s.jsx)(n.strong,{children:"nstring-downcase string-lessp string"}),"<= </p><p>",(0,s.jsx)(n.strong,{children:"nstring-upcase string-not-equal string"}),"= </p><p>",(0,s.jsx)(n.strong,{children:"schar string-not-greaterp string"}),"> </p><p>",(0,s.jsx)(n.strong,{children:"string string-not-lessp string"}),">= </p><p>",(0,s.jsx)(n.strong,{children:"string-capitalize string-right-trim"})," </p><p>",(0,s.jsx)(n.strong,{children:"string-downcase string-trim"}),"</p>"]})})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Figure 15\u20132. Operators that Manipulate Strings"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Vectors"})," whose ",(0,s.jsx)(n.em,{children:"elements"})," are restricted to ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"bit"})," are called ",(0,s.jsx)(n.em,{children:"bit vectors"}),". ",(0,s.jsx)(n.em,{children:"Bit vectors"})," are of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"bit-vector"}),". Figure 15\u20133 lists some ",(0,s.jsx)(n.em,{children:"defined names"})," for operations on ",(0,s.jsx)(n.em,{children:"bit arrays"}),"."]}),"\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.th,{style:{textAlign:"left"},children:["<p>",(0,s.jsx)(n.strong,{children:"bit bit-ior bit-orc2"})," </p><p>",(0,s.jsx)(n.strong,{children:"bit-and bit-nand bit-xor"})," </p><p>",(0,s.jsx)(n.strong,{children:"bit-andc1 bit-nor sbit"})," </p><p>",(0,s.jsx)(n.strong,{children:"bit-andc2 bit-not"})," </p><p>",(0,s.jsx)(n.strong,{children:"bit-eqv bit-orc1"}),"</p>"]})})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Figure 15\u20133. Operators that Manipulate Bit Arrays"})})]})}function M(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(I,{...e})}):I(e)}const D={title:"15.1 Array Concepts"},R="15.1 Array Concepts",E={id:"chap-15/bf-b-array-concepts",title:"15.1 Array Concepts",description:"15.1.1 Array Elements",source:"@site/docs/chap-15/bf-b-array-concepts.md",sourceDirName:"chap-15",slug:"/chap-15/bf-b-array-concepts",permalink:"/cl-language-reference/docs/chap-15/bf-b-array-concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-b-array-concepts.md",tags:[],version:"current",frontMatter:{title:"15.1 Array Concepts"},sidebar:"tutorialSidebar",previous:{title:"15. Arrays",permalink:"/cl-language-reference/docs/category/15-arrays"},next:{title:"15.2 Arrays Dictionary",permalink:"/cl-language-reference/docs/category/152-arrays-dictionary"}},L={},P=[{value:"15.1.1 Array Elements",id:"1511-array-elements",level:2},{value:"15.1.1.1 Array Indices",id:"15111-array-indices",level:3},{value:"15.1.1.2 Array Dimensions",id:"15112-array-dimensions",level:3},{value:"15.1.1.2.1 Implementation Limits on Individual Array Dimensions",id:"151121-implementation-limits-on-individual-array-dimensions",level:4},{value:"15.1.1.3 Array Rank",id:"15113-array-rank",level:3},{value:"15.1.1.3.1 Vectors",id:"151131-vectors",level:4},{value:"15.1.1.3.1.1 Fill Pointers",id:"1511311-fill-pointers",level:5},{value:"15.1.1.3.2 Multidimensional Arrays",id:"151132-multidimensional-arrays",level:4},{value:"15.1.1.3.2.1 Storage Layout for Multidimensional Arrays",id:"1511321-storage-layout-for-multidimensional-arrays",level:5},{value:"15.1.1.3.2.2 Implementation Limits on Array Rank",id:"1511322-implementation-limits-on-array-rank",level:5},{value:"15.1.2 Specialized Arrays",id:"1512-specialized-arrays",level:2},{value:"15.1.2.1 Array Upgrading",id:"15121-array-upgrading",level:3},{value:"15.1.2.2 Required Kinds of Specialized Arrays",id:"15122-required-kinds-of-specialized-arrays",level:3}];function V(e){const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"151-array-concepts",children:"15.1 Array Concepts"}),"\n","\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(n.h2,{id:"1511-array-elements",children:"15.1.1 Array Elements"}),"\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(n.h3,{id:"15111-array-indices",children:"15.1.1.1 Array Indices"}),"\n","\n",(0,s.jsx)(d,{}),"\n",(0,s.jsx)(n.h3,{id:"15112-array-dimensions",children:"15.1.1.2 Array Dimensions"}),"\n","\n",(0,s.jsx)(m,{}),"\n",(0,s.jsx)(n.h4,{id:"151121-implementation-limits-on-individual-array-dimensions",children:"15.1.1.2.1 Implementation Limits on Individual Array Dimensions"}),"\n","\n",(0,s.jsx)(x,{}),"\n",(0,s.jsx)(n.h3,{id:"15113-array-rank",children:"15.1.1.3 Array Rank"}),"\n","\n",(0,s.jsx)(u,{}),"\n",(0,s.jsx)(n.h4,{id:"151131-vectors",children:"15.1.1.3.1 Vectors"}),"\n","\n",(0,s.jsx)(g,{}),"\n",(0,s.jsx)(n.h5,{id:"1511311-fill-pointers",children:"15.1.1.3.1.1 Fill Pointers"}),"\n","\n",(0,s.jsx)(b,{}),"\n",(0,s.jsx)(n.h4,{id:"151132-multidimensional-arrays",children:"15.1.1.3.2 Multidimensional Arrays"}),"\n","\n",(0,s.jsx)(A,{}),"\n",(0,s.jsx)(n.h5,{id:"1511321-storage-layout-for-multidimensional-arrays",children:"15.1.1.3.2.1 Storage Layout for Multidimensional Arrays"}),"\n","\n",(0,s.jsx)(k,{}),"\n",(0,s.jsx)(n.h5,{id:"1511322-implementation-limits-on-array-rank",children:"15.1.1.3.2.2 Implementation Limits on Array Rank"}),"\n","\n",(0,s.jsx)(T,{}),"\n",(0,s.jsx)(n.h2,{id:"1512-specialized-arrays",children:"15.1.2 Specialized Arrays"}),"\n","\n",(0,s.jsx)(S,{}),"\n",(0,s.jsx)(n.h3,{id:"15121-array-upgrading",children:"15.1.2.1 Array Upgrading"}),"\n","\n",(0,s.jsx)(C,{}),"\n",(0,s.jsx)(n.h3,{id:"15122-required-kinds-of-specialized-arrays",children:"15.1.2.2 Required Kinds of Specialized Arrays"}),"\n","\n","\n",(0,s.jsx)(M,{})]})}function _(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(V,{...e})}):V(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>a});var s=r(67294);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);