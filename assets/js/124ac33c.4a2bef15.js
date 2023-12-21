"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[84749],{841:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var r=s(85893),i=s(11151);const t={title:"M",sidebar_position:109},c=void 0,o={id:"chap-26/cg-b-glossary/m",title:"M",description:"M",source:"@site/docs/chap-26/cg-b-glossary/m.md",sourceDirName:"chap-26/cg-b-glossary",slug:"/chap-26/cg-b-glossary/m",permalink:"/cl-language-reference/docs/chap-26/cg-b-glossary/m",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-26/cg-b-glossary/m.md",tags:[],version:"current",sidebarPosition:109,frontMatter:{title:"M",sidebar_position:109},sidebar:"tutorialSidebar",previous:{title:"L",permalink:"/cl-language-reference/docs/chap-26/cg-b-glossary/l"},next:{title:"N",permalink:"/cl-language-reference/docs/chap-26/cg-b-glossary/n"}},a={},l=[];function h(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"M"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"macro"})," ",(0,r.jsx)(n.em,{children:"n."})," 1. a ",(0,r.jsx)(n.em,{children:"macro form"})," 2. a ",(0,r.jsx)(n.em,{children:"macro function"}),". 3. a ",(0,r.jsx)(n.em,{children:"macro name"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"macro character"})," ",(0,r.jsx)(n.em,{children:"n."})," a ",(0,r.jsx)(n.em,{children:"character"})," which, when encountered by the ",(0,r.jsx)(n.em,{children:"Lisp reader"})," in its main dispatch loop, introduces a ",(0,r.jsx)(n.em,{children:"reader macro"}),(0,r.jsx)("sub",{children:"1"}),". (",(0,r.jsx)(n.em,{children:"Macro characters"})," have nothing to do with ",(0,r.jsx)(n.em,{children:"macros"}),".)"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"macro expansion"})," ",(0,r.jsx)(n.em,{children:"n."})," 1. the process of translating a ",(0,r.jsx)(n.em,{children:"macro form"})," into another ",(0,r.jsx)(n.em,{children:"form"}),". 2. the ",(0,r.jsx)(n.em,{children:"form"})," resulting from this process."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"macro form"})," ",(0,r.jsx)(n.em,{children:"n."})," a ",(0,r.jsx)(n.em,{children:"form"})," that stands for another ",(0,r.jsx)(n.em,{children:"form"})," (",(0,r.jsx)(n.em,{children:"e.g."}),", for the purposes of"]}),"\n",(0,r.jsxs)(n.p,{children:["abstraction, information hiding, or syntactic convenience); that is, either a ",(0,r.jsx)(n.em,{children:"compound form"})," whose first element is a ",(0,r.jsx)(n.em,{children:"macro name"}),", or a ",(0,r.jsx)(n.em,{children:"form"})," that is a ",(0,r.jsx)(n.em,{children:"symbol"})," that names a ",(0,r.jsx)(n.em,{children:"symbol macro"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"macro function"})," ",(0,r.jsx)(n.em,{children:"n."})," a ",(0,r.jsx)(n.em,{children:"function"})," of two arguments, a ",(0,r.jsx)(n.em,{children:"form"})," and an ",(0,r.jsx)(n.em,{children:"environment"}),", that implements ",(0,r.jsx)(n.em,{children:"macro expansion"})," by producing a ",(0,r.jsx)(n.em,{children:"form"})," to be evaluated in place of the original argument ",(0,r.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"macro lambda list"})," ",(0,r.jsx)(n.em,{children:"n."})," an ",(0,r.jsx)(n.em,{children:"extended lambda list"})," used in ",(0,r.jsx)(n.em,{children:"forms"})," that ",(0,r.jsx)(n.em,{children:"establish macro"})," definitions, such as ",(0,r.jsx)(n.strong,{children:"defmacro"})," and ",(0,r.jsx)(n.strong,{children:"macrolet"}),". See Section 3.4.4 (Macro Lambda Lists)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"macro name"})," ",(0,r.jsx)(n.em,{children:"n."})," a ",(0,r.jsx)(n.em,{children:"name"})," for which ",(0,r.jsx)(n.strong,{children:"macro-function"})," returns ",(0,r.jsx)(n.em,{children:"true"})," and which when used as the first element of a ",(0,r.jsx)(n.em,{children:"compound form"})," identifies that ",(0,r.jsx)(n.em,{children:"form"})," as a ",(0,r.jsx)(n.em,{children:"macro form"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"macroexpand hook"})," ",(0,r.jsx)(n.em,{children:"n."})," the ",(0,r.jsx)(n.em,{children:"function"})," that is the ",(0,r.jsx)(n.em,{children:"value"})," of ",(0,r.jsx)(n.strong,{children:"*macroexpand-hook*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"mapping"})," ",(0,r.jsx)(n.em,{children:"n."})," 1. a type of iteration in which a ",(0,r.jsx)(n.em,{children:"function"})," is successively applied to ",(0,r.jsx)(n.em,{children:"objects"})," taken from corresponding entries in collections such as ",(0,r.jsx)(n.em,{children:"sequences"})," or ",(0,r.jsx)(n.em,{children:"hash tables"}),". 2. ",(0,r.jsx)(n.em,{children:"Math."})," a relation between two sets in which each element of the first set (the \u201cdomain\u201d) is assigned one element of the second set (the \u201crange\u201d)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"metaclass"})," ",(0,r.jsx)(n.em,{children:"n."})," 1. a ",(0,r.jsx)(n.em,{children:"class"})," whose instances are ",(0,r.jsx)(n.em,{children:"classes"}),". 2. (of an ",(0,r.jsx)(n.em,{children:"object"}),") the ",(0,r.jsx)(n.em,{children:"class"})," of the ",(0,r.jsx)(n.em,{children:"class"})," of the ",(0,r.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Metaobject Protocol"})," ",(0,r.jsx)(n.em,{children:"n."})," one of many possible descriptions of how a ",(0,r.jsx)(n.em,{children:"conforming implementation"})," might implement various aspects of the object system. This description is beyond the scope of this document, and no ",(0,r.jsx)(n.em,{children:"conforming implementation"})," is required to adhere to it except as noted explicitly in this specification. Nevertheless, its existence helps to establish normative practice, and implementors with no reason to diverge from it are encouraged to consider making their ",(0,r.jsx)(n.em,{children:"implementation"})," adhere to it where possible. It is described in detail in ",(0,r.jsx)(n.em,{children:"The Art of the Metaobject Protocol"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"method"})," ",(0,r.jsx)(n.em,{children:"n."})," an ",(0,r.jsx)(n.em,{children:"object"})," that is part of a ",(0,r.jsx)(n.em,{children:"generic function"})," and which provides information about how that ",(0,r.jsx)(n.em,{children:"generic function"})," should behave when its ",(0,r.jsx)(n.em,{children:"arguments"})," are ",(0,r.jsx)(n.em,{children:"objects"})," of certain ",(0,r.jsx)(n.em,{children:"classes"})," or with certain identities."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"method combination"})," ",(0,r.jsx)(n.em,{children:"n."})," 1. generally, the composition of a set of ",(0,r.jsx)(n.em,{children:"methods"})," to produce an ",(0,r.jsx)(n.em,{children:"effective method"})," for a ",(0,r.jsx)(n.em,{children:"generic function"}),". 2. an object of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"method-combination"}),", which represents the details of how the ",(0,r.jsx)(n.em,{children:"method combination"}),(0,r.jsx)("sub",{children:"1"})," for one or more specific ",(0,r.jsx)(n.em,{children:"generic functions"})," is to be performed."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"method-defining form"})," ",(0,r.jsx)(n.em,{children:"n."})," a ",(0,r.jsx)(n.em,{children:"form"})," that defines a ",(0,r.jsx)(n.em,{children:"method"})," for a ",(0,r.jsx)(n.em,{children:"generic function"}),", whether explicitly or implicitly. See Section 7.6.1 (Introduction to Generic Functions)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"method-defining operator"})," ",(0,r.jsx)(n.em,{children:"n."})," an ",(0,r.jsx)(n.em,{children:"operator"})," corresponding to a ",(0,r.jsx)(n.em,{children:"method-defining form"}),". See Figure 7\u20131."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"minimal compilation"})," ",(0,r.jsx)(n.em,{children:"n."})," actions the ",(0,r.jsx)(n.em,{children:"compiler"})," must take at compile time. See Section 3.2.2 (Compilation Semantics)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"modified lambda list"})," ",(0,r.jsx)(n.em,{children:"n."})," a list resembling an ",(0,r.jsx)(n.em,{children:"ordinary lambda list"})," in form and"]}),"\n",(0,r.jsx)(n.p,{children:"purpose, but which deviates in syntax or functionality from the definition of an"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"ordinary lambda list"}),". See ",(0,r.jsx)(n.em,{children:"ordinary lambda list"}),". \u201c",(0,r.jsx)(n.strong,{children:"deftype"})," uses a modified lambda list.\u201d"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"most recent"})," ",(0,r.jsx)(n.em,{children:"adj."})," innermost; that is, having been ",(0,r.jsx)(n.em,{children:"established"})," (and not yet"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"disestablished"}),") more recently than any other of its kind."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"multiple escape"})," ",(0,r.jsx)(n.em,{children:"n."}),", ",(0,r.jsx)(n.em,{children:"adj."})," 1. ",(0,r.jsx)(n.em,{children:"n."})," the ",(0,r.jsx)(n.em,{children:"syntax type"})," of a ",(0,r.jsx)(n.em,{children:"character"})," that is used in pairs to indicate that the enclosed ",(0,r.jsx)(n.em,{children:"characters"})," are to be treated as ",(0,r.jsx)(n.em,{children:"alphabetic"}),(0,r.jsx)("sub",{children:"2"})," ",(0,r.jsx)(n.em,{children:"characters"})," with their ",(0,r.jsx)(n.em,{children:"case"})," preserved. For details, see Section 2.1.4.5 (Multiple Escape Characters). 2. ",(0,r.jsx)(n.em,{children:"adj."})," (of a ",(0,r.jsx)(n.em,{children:"character"})," ) having the ",(0,r.jsx)(n.em,{children:"multiple escape syntax type"}),". 3. ",(0,r.jsx)(n.em,{children:"n."})," a ",(0,r.jsx)(n.em,{children:"multiple escape"}),(0,r.jsx)("sub",{children:"2"})," ",(0,r.jsx)(n.em,{children:"character"})," . (In the ",(0,r.jsx)(n.em,{children:"standard readtable"}),", ",(0,r.jsx)(n.em,{children:"vertical-bar"})," is a ",(0,r.jsx)(n.em,{children:"multiple escape character"})," .)"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"multiple values"})," ",(0,r.jsx)(n.em,{children:"n."})," 1. more than one ",(0,r.jsx)(n.em,{children:"value"}),". \u201cThe function ",(0,r.jsx)(n.strong,{children:"truncate"})," returns multiple values.\u201d 2. a variable number of ",(0,r.jsx)(n.em,{children:"values"}),", possibly including zero or one. \u201cThe function ",(0,r.jsx)(n.strong,{children:"values"})," returns multiple values.\u201d 3. a fixed number of values other than one. \u201cThe macro ",(0,r.jsx)(n.strong,{children:"multiple-value-bind"})," is among the few operators in Common Lisp which can detect and manipulate multiple values.\u201d"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>c});var r=s(67294);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);