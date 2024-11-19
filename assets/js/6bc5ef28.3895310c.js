"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[78168],{54324:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var n=i(85893),s=i(11151);const t={title:"P",sidebar_position:112},l=void 0,c={id:"chap-26/p",title:"P",description:"P",source:"@site/docs/chap-26/p.md",sourceDirName:"chap-26",slug:"/chap-26/p",permalink:"/cl-language-reference/chap-26/p",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/chap-26/p.md",tags:[],version:"current",lastUpdatedBy:"Daniel Nussenbaum",sidebarPosition:112,frontMatter:{title:"P",sidebar_position:112},sidebar:"tutorialSidebar",previous:{title:"O",permalink:"/cl-language-reference/chap-26/o"},next:{title:"Q",permalink:"/cl-language-reference/chap-26/q"}},d={},h=[];function a(e){const r={em:"em",p:"p",strong:"strong",...(0,s.a)(),...e.components},{DictionaryLink:i,GlossaryTerm:t}=r;return i||j("DictionaryLink",!0),t||j("GlossaryTerm",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"P"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(i,{term:"package",children:(0,n.jsx)("b",{children:"package"})})," ",(0,n.jsx)(r.em,{children:"n."})," an ",(0,n.jsx)(t,{term:"object",children:(0,n.jsx)("i",{children:"object"})})," of ",(0,n.jsx)(t,{term:"type",children:(0,n.jsx)("i",{children:"type"})})," ",(0,n.jsx)(i,{term:"package",children:(0,n.jsx)("b",{children:"package"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"package cell"})," ",(0,n.jsx)(r.em,{children:"n. Trad."})," (of a ",(0,n.jsx)(t,{term:"symbol",children:(0,n.jsx)("i",{children:"symbol"})}),") The ",(0,n.jsx)(t,{term:"place",children:(0,n.jsx)("i",{children:"place"})})," in a ",(0,n.jsx)(t,{term:"symbol",children:(0,n.jsx)("i",{children:"symbol"})})," that holds one of possibly several ",(0,n.jsx)(t,{term:"package",children:(0,n.jsx)("i",{children:"packages"})})," in which the ",(0,n.jsx)(t,{term:"symbol",children:(0,n.jsx)("i",{children:"symbol"})})," is ",(0,n.jsx)(t,{term:"interned",children:(0,n.jsx)("i",{children:"interned"})}),", called the ",(0,n.jsx)(t,{styled:!0,term:"home package",children:(0,n.jsx)("i",{children:"home package"})}),", or which holds ",(0,n.jsx)(i,{term:"nil",children:(0,n.jsx)("b",{children:"nil"})})," if no such ",(0,n.jsx)(t,{term:"package",children:(0,n.jsx)("i",{children:"package"})})," exists or is known. See the ",(0,n.jsx)(t,{term:"function",children:(0,n.jsx)("i",{children:"function"})})," ",(0,n.jsx)(i,{term:"symbol-package",children:(0,n.jsx)("b",{children:"symbol-package"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"package designator"})," ",(0,n.jsx)(r.em,{children:"n."})," a ",(0,n.jsx)(t,{term:"designator",children:(0,n.jsx)("i",{children:"designator"})})," for a ",(0,n.jsx)(t,{term:"package",children:(0,n.jsx)("i",{children:"package"})}),"; that is, an ",(0,n.jsx)(t,{term:"object",children:(0,n.jsx)("i",{children:"object"})})," that denotes a ",(0,n.jsx)(t,{term:"package",children:(0,n.jsx)("i",{children:"package"})})," and that is one of: a ",(0,n.jsx)(t,{styled:!0,term:"string designator",children:(0,n.jsx)("i",{children:"string designator"})})," (denoting the ",(0,n.jsx)(t,{term:"package",children:(0,n.jsx)("i",{children:"package"})})," that has the ",(0,n.jsx)(t,{term:"string",children:(0,n.jsx)("i",{children:"string"})})," that it designates as its ",(0,n.jsx)(t,{term:"name",children:(0,n.jsx)("i",{children:"name"})})," or as one of its ",(0,n.jsx)(t,{term:"nickname",children:(0,n.jsx)("i",{children:"nicknames"})}),"), or a ",(0,n.jsx)(t,{term:"package",children:(0,n.jsx)("i",{children:"package"})})," (denoting itself)."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"package marker"})," ",(0,n.jsx)(r.em,{children:"n."})," a character which is used in the textual notation for a symbol to separate the package name from the symbol name, and which is ",(0,n.jsx)(t,{term:"colon",children:(0,n.jsx)("i",{children:"colon"})})," in the ",(0,n.jsx)(t,{styled:!0,term:"standard readtable",children:(0,n.jsx)("i",{children:"standard readtable"})}),". See Section 2.1 (Character Syntax)."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"package prefix"})," ",(0,n.jsx)(r.em,{children:"n."})," a notation preceding the ",(0,n.jsx)(t,{term:"name",children:(0,n.jsx)("i",{children:"name"})})," of a ",(0,n.jsx)(t,{term:"symbol",children:(0,n.jsx)("i",{children:"symbol"})})," in text that is processed by the ",(0,n.jsx)(r.em,{children:"Lisp reader"})," , which uses a ",(0,n.jsx)(r.em,{children:"package name"})," followed by one or more ",(0,n.jsx)(t,{styled:!0,term:"package marker",children:(0,n.jsx)("i",{children:"package markers"})}),", and which indicates that the symbol is looked up in the indicated ",(0,n.jsx)(t,{term:"package",children:(0,n.jsx)("i",{children:"package"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"package registry"})," ",(0,n.jsx)(r.em,{children:"n."})," A mapping of ",(0,n.jsx)(t,{term:"name",children:(0,n.jsx)("i",{children:"names"})})," to ",(0,n.jsx)(r.em,{children:"package objects"}),". It is possible for there to be a ",(0,n.jsx)(r.em,{children:"package object"})," which is not in this mapping; such a ",(0,n.jsx)(t,{term:"package",children:(0,n.jsx)("i",{children:"package"})})," is called an ",(0,n.jsx)(t,{styled:!0,term:"unregistered package",children:(0,n.jsx)("i",{children:"unregistered package"})}),". ",(0,n.jsx)(t,{styled:!0,term:"operator",children:(0,n.jsx)("i",{children:"Operators"})})," such as ",(0,n.jsx)(i,{term:"find-package",children:(0,n.jsx)("b",{children:"find-package"})})," consult this mapping in order to find a ",(0,n.jsx)(t,{term:"package",children:(0,n.jsx)("i",{children:"package"})})," from its ",(0,n.jsx)(t,{term:"name",children:(0,n.jsx)("i",{children:"name"})}),". ",(0,n.jsx)(t,{term:"operator",children:(0,n.jsx)("i",{children:"Operators"})})," such as ",(0,n.jsx)(i,{term:"do-all-symbols",children:(0,n.jsx)("b",{children:"do-all-symbols"})}),", ",(0,n.jsx)(i,{term:"find-all-symbols",children:(0,n.jsx)("b",{children:"find-all-symbols"})}),", and ",(0,n.jsx)(i,{term:"list-all-packages",children:(0,n.jsx)("b",{children:"list-all-packages"})})," operate only on ",(0,n.jsx)(t,{term:"package",children:(0,n.jsx)("i",{children:"packages"})})," that exist in the ",(0,n.jsx)(t,{styled:!0,term:"package registry",children:(0,n.jsx)("i",{children:"package registry"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"pairwise"})," ",(0,n.jsx)(r.em,{children:"adv."})," (of an adjective on a set) applying individually to all possible pairings of elements of the set. \u201cThe types ",(0,n.jsx)(r.em,{children:"A"}),", ",(0,n.jsx)(r.em,{children:"B"}),", and ",(0,n.jsx)(r.em,{children:"C"})," are pairwise disjoint if ",(0,n.jsx)(r.em,{children:"A"})," and ",(0,n.jsx)(r.em,{children:"B"})," are disjoint, ",(0,n.jsx)(r.em,{children:"B"})," and ",(0,n.jsx)(r.em,{children:"C"})," are disjoint, and ",(0,n.jsx)(r.em,{children:"A"})," and ",(0,n.jsx)(r.em,{children:"C"})," are disjoint.\u201d"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"parallel"})," ",(0,n.jsx)(r.em,{children:"adj. Trad."})," (of ",(0,n.jsx)(t,{term:"binding",children:(0,n.jsx)("i",{children:"binding"})})," or ",(0,n.jsx)(r.em,{children:"assignment"}),") done in the style of ",(0,n.jsx)(i,{term:"psetq",children:(0,n.jsx)("b",{children:"psetq"})}),", ",(0,n.jsx)(i,{term:"let",children:(0,n.jsx)("b",{children:"let"})}),", or ",(0,n.jsx)(i,{term:"do",children:(0,n.jsx)("b",{children:"do"})}),"; that is, first evaluating all of the ",(0,n.jsx)(t,{term:"form",children:(0,n.jsx)("i",{children:"forms"})})," that produce ",(0,n.jsx)(t,{term:"value",children:(0,n.jsx)("i",{children:"values"})}),", and only then ",(0,n.jsx)(r.em,{children:"assigning"})," or ",(0,n.jsx)(t,{term:"binding",children:(0,n.jsx)("i",{children:"binding"})})," the ",(0,n.jsx)(t,{term:"variable",children:(0,n.jsx)("i",{children:"variables"})})," (or ",(0,n.jsx)(t,{term:"place",children:(0,n.jsx)("i",{children:"places"})}),"). Note that this does not imply traditional"]}),"\n",(0,n.jsxs)(r.p,{children:["computational \u201cparallelism\u201d since the ",(0,n.jsx)(t,{term:"form",children:(0,n.jsx)("i",{children:"forms"})})," that produce ",(0,n.jsx)(t,{term:"value",children:(0,n.jsx)("i",{children:"values"})})," are evaluated"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(t,{term:"sequentially",children:(0,n.jsx)("i",{children:"sequentially"})}),". See ",(0,n.jsx)(t,{term:"sequential",children:(0,n.jsx)("i",{children:"sequential"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"parameter"})," ",(0,n.jsx)(r.em,{children:"n."})," 1. (of a ",(0,n.jsx)(t,{term:"function",children:(0,n.jsx)("i",{children:"function"})}),") a ",(0,n.jsx)(t,{term:"variable",children:(0,n.jsx)("i",{children:"variable"})})," in the definition of a ",(0,n.jsx)(t,{term:"function",children:(0,n.jsx)("i",{children:"function"})})," which takes on the ",(0,n.jsx)(t,{term:"value",children:(0,n.jsx)("i",{children:"value"})})," of a corresponding ",(0,n.jsx)(t,{term:"argument",children:(0,n.jsx)("i",{children:"argument"})})," (or of a ",(0,n.jsx)(t,{term:"list",children:(0,n.jsx)("i",{children:"list"})})," of corresponding arguments) to that ",(0,n.jsx)(t,{term:"function",children:(0,n.jsx)("i",{children:"function"})})," when it is called, or which in some cases is given a default value because there is no corresponding ",(0,n.jsx)(t,{term:"argument",children:(0,n.jsx)("i",{children:"argument"})}),". 2. (of a ",(0,n.jsx)(t,{styled:!0,term:"format directive",children:(0,n.jsx)("i",{children:"format directive"})}),") an ",(0,n.jsx)(t,{term:"object",children:(0,n.jsx)("i",{children:"object"})})," received as"]}),"\n",(0,n.jsxs)(r.p,{children:["data flow by a ",(0,n.jsx)(t,{styled:!0,term:"format directive",children:(0,n.jsx)("i",{children:"format directive"})})," due to a prefix notation within the ",(0,n.jsx)(t,{styled:!0,term:"format string",children:(0,n.jsx)("i",{children:"format string"})})," at the ",(0,n.jsx)(t,{styled:!0,term:"format directive",children:(0,n.jsx)("i",{children:"format directive"})}),'\u2019s point of use. See Section 22.3 (Formatted Output). \u201cIn "~3,\u20190D", the number 3 and the character #\\0 are parameters to the ~D format directive.\u201d']}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"parameter specializer"})," ",(0,n.jsx)(r.em,{children:"n."})," 1. (of a ",(0,n.jsx)(t,{term:"method",children:(0,n.jsx)("i",{children:"method"})}),") an ",(0,n.jsx)(t,{term:"expression",children:(0,n.jsx)("i",{children:"expression"})})," which constrains the"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(t,{term:"method",children:(0,n.jsx)("i",{children:"method"})})," to be applicable only to ",(0,n.jsx)(t,{term:"argument",children:(0,n.jsx)("i",{children:"argument"})})," sequences in which the corresponding"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(t,{term:"argument",children:(0,n.jsx)("i",{children:"argument"})})," matches the ",(0,n.jsx)(t,{styled:!0,term:"parameter specializer",children:(0,n.jsx)("i",{children:"parameter specializer"})})," . 2. a ",(0,n.jsx)(t,{term:"class",children:(0,n.jsx)("i",{children:"class"})}),", or a ",(0,n.jsx)(t,{term:"list",children:(0,n.jsx)("i",{children:"list"})})," (eql ",(0,n.jsx)(t,{term:"object",children:(0,n.jsx)("i",{children:"object"})}),")."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"parameter specializer name"})," ",(0,n.jsx)(r.em,{children:"n."})," 1. (of a ",(0,n.jsx)(t,{term:"method",children:(0,n.jsx)("i",{children:"method"})})," definition) an expression used in code to name a ",(0,n.jsx)(t,{styled:!0,term:"parameter specializer",children:(0,n.jsx)("i",{children:"parameter specializer"})})," . See Section 7.6.2 (Introduction to Methods). 2. a ",(0,n.jsx)(t,{term:"class",children:(0,n.jsx)("i",{children:"class"})}),", a ",(0,n.jsx)(t,{term:"symbol",children:(0,n.jsx)("i",{children:"symbol"})})," naming a ",(0,n.jsx)(t,{term:"class",children:(0,n.jsx)("i",{children:"class"})}),", or a ",(0,n.jsx)(t,{term:"list",children:(0,n.jsx)("i",{children:"list"})})," (eql ",(0,n.jsx)(t,{term:"form",children:(0,n.jsx)("i",{children:"form"})}),")."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(i,{term:"pathname",children:(0,n.jsx)("b",{children:"pathname"})})," ",(0,n.jsx)(r.em,{children:"n."})," an ",(0,n.jsx)(t,{term:"object",children:(0,n.jsx)("i",{children:"object"})})," of ",(0,n.jsx)(t,{term:"type",children:(0,n.jsx)("i",{children:"type"})})," ",(0,n.jsx)(i,{term:"pathname",children:(0,n.jsx)("b",{children:"pathname"})}),", which is a structured representation of the name of a ",(0,n.jsx)(t,{term:"file",children:(0,n.jsx)("i",{children:"file"})}),". A ",(0,n.jsx)(t,{term:"pathname",children:(0,n.jsx)("i",{children:"pathname"})})," has six components: a \u201chost,\u201d a \u201cdevice,\u201d a \u201cdirectory,\u201d a \u201cname,\u201d a \u201ctype,\u201d and a \u201cversion.\u201d"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"pathname designator"})," ",(0,n.jsx)(r.em,{children:"n."})," a ",(0,n.jsx)(t,{term:"designator",children:(0,n.jsx)("i",{children:"designator"})})," for a ",(0,n.jsx)(t,{term:"pathname",children:(0,n.jsx)("i",{children:"pathname"})}),"; that is, an ",(0,n.jsx)(t,{term:"object",children:(0,n.jsx)("i",{children:"object"})})," that denotes a ",(0,n.jsx)(t,{term:"pathname",children:(0,n.jsx)("i",{children:"pathname"})})," and that is one of: a ",(0,n.jsx)(r.em,{children:"pathname namestring"})," (denoting the corresponding ",(0,n.jsx)(t,{term:"pathname",children:(0,n.jsx)("i",{children:"pathname"})}),"), a ",(0,n.jsx)(t,{styled:!0,term:"stream associated with a file",children:(0,n.jsx)("i",{children:"stream associated with a file"})})," (denoting the ",(0,n.jsx)(t,{term:"pathname",children:(0,n.jsx)("i",{children:"pathname"})})," used to open the ",(0,n.jsx)(t,{term:"file",children:(0,n.jsx)("i",{children:"file"})}),"; this may be, but is not required to be, the actual name of the ",(0,n.jsx)(t,{term:"file",children:(0,n.jsx)("i",{children:"file"})}),"), or a ",(0,n.jsx)(t,{term:"pathname",children:(0,n.jsx)("i",{children:"pathname"})})," (denoting itself). See Section 21.1.1.1.2 (Open and Closed Streams)."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"physical pathname"})," ",(0,n.jsx)(r.em,{children:"n."})," a ",(0,n.jsx)(t,{term:"pathname",children:(0,n.jsx)("i",{children:"pathname"})})," that is not a ",(0,n.jsx)(t,{styled:!0,term:"logical pathname",children:(0,n.jsx)("i",{children:"logical pathname"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"place"})," ",(0,n.jsx)(r.em,{children:"n."})," 1. a ",(0,n.jsx)(t,{term:"form",children:(0,n.jsx)("i",{children:"form"})})," which is suitable for use as a ",(0,n.jsx)(t,{styled:!0,term:"generalized reference",children:(0,n.jsx)("i",{children:"generalized reference"})}),". 2. the"]}),"\n",(0,n.jsxs)(r.p,{children:["conceptual location referred to by such a ",(0,n.jsx)(t,{term:"place",children:(0,n.jsx)("i",{children:"place"})}),(0,n.jsx)("sub",{children:"1"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"plist"})," [ ",(0,n.jsx)(r.strong,{children:"p\u2014e list"})," ] ",(0,n.jsx)(r.em,{children:"n."})," a ",(0,n.jsx)(t,{styled:!0,term:"property list",children:(0,n.jsx)("i",{children:"property list"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"portable"})," ",(0,n.jsx)(r.em,{children:"adj."})," (of ",(0,n.jsx)(t,{term:"code",children:(0,n.jsx)("i",{children:"code"})}),") required to produce equivalent results and observable side effects in all ",(0,n.jsx)(t,{styled:!0,term:"conforming implementation",children:(0,n.jsx)("i",{children:"conforming implementations"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"potential copy"})," ",(0,n.jsx)(r.em,{children:"n."})," (of an ",(0,n.jsx)(r.em,{children:"object O"}),(0,n.jsx)("sub",{children:"1"})," subject to constriants) an ",(0,n.jsx)(r.em,{children:"object O"}),(0,n.jsx)("sub",{children:"2"})," that if the specified constraints are satisfied by ",(0,n.jsx)(r.em,{children:"O"}),(0,n.jsx)("sub",{children:"1"})," without any modification might or might not be ",(0,n.jsx)(t,{term:"identical",children:(0,n.jsx)("i",{children:"identical"})})," to ",(0,n.jsx)(r.em,{children:"O"}),(0,n.jsx)("sub",{children:"1"}),", or else that must be a ",(0,n.jsx)(r.em,{children:"fresh object"})," that resembles a ",(0,n.jsx)(t,{term:"copy",children:(0,n.jsx)("i",{children:"copy"})})," of ",(0,n.jsx)(r.em,{children:"O"}),(0,n.jsx)("sub",{children:"1"})," except that it has been modified as necessary to satisfy the constraints."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"potential number"})," ",(0,n.jsx)(r.em,{children:"n."})," A textual notation that might be parsed by the ",(0,n.jsx)(r.em,{children:"Lisp reader"})," in some ",(0,n.jsx)(t,{styled:!0,term:"conforming implementation",children:(0,n.jsx)("i",{children:"conforming implementation"})})," as a ",(0,n.jsx)(t,{term:"number",children:(0,n.jsx)("i",{children:"number"})})," but is not required to be parsed as a ",(0,n.jsx)(t,{term:"number",children:(0,n.jsx)("i",{children:"number"})})," . No ",(0,n.jsx)(t,{term:"object",children:(0,n.jsx)("i",{children:"object"})})," is a ",(0,n.jsx)(t,{styled:!0,term:"potential number",children:(0,n.jsx)("i",{children:"potential number"})}),"\u2014either an ",(0,n.jsx)(t,{term:"object",children:(0,n.jsx)("i",{children:"object"})})," is a ",(0,n.jsx)(t,{term:"number",children:(0,n.jsx)("i",{children:"number"})})," or it is not. See Section 2.3.1.1 (Potential Numbers as Tokens)."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"pprint dispatch table"})," ",(0,n.jsx)(r.em,{children:"n."})," an ",(0,n.jsx)(t,{term:"object",children:(0,n.jsx)("i",{children:"object"})})," that can be the ",(0,n.jsx)(t,{term:"value",children:(0,n.jsx)("i",{children:"value"})})," of ",(0,n.jsx)(i,{term:"print-pprint-dispatch",children:(0,n.jsx)("b",{children:"*print-pprint-dispatch*"})})," and hence can control how ",(0,n.jsx)(t,{term:"object",children:(0,n.jsx)("i",{children:"objects"})})," are printed when ",(0,n.jsx)(i,{term:"print-pretty",children:(0,n.jsx)("b",{children:"*print-pretty*"})})," is ",(0,n.jsx)(t,{term:"true",children:(0,n.jsx)("i",{children:"true"})}),". See Section 22.2.1.4 (Pretty Print Dispatch Tables)."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"predicate"})," ",(0,n.jsx)(r.em,{children:"n."})," a ",(0,n.jsx)(t,{term:"function",children:(0,n.jsx)("i",{children:"function"})})," that returns a ",(0,n.jsx)(t,{styled:!0,term:"generalized boolean",children:(0,n.jsx)("i",{children:"generalized boolean"})})," as its first value."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"present"})," ",(0,n.jsx)(r.em,{children:"n."})," 1. (of a ",(0,n.jsx)(t,{term:"feature",children:(0,n.jsx)("i",{children:"feature"})})," in a ",(0,n.jsx)(r.em,{children:"Lisp image"}),") a state of being that is in effect if and only if the ",(0,n.jsx)(t,{term:"symbol",children:(0,n.jsx)("i",{children:"symbol"})})," naming the ",(0,n.jsx)(t,{term:"feature",children:(0,n.jsx)("i",{children:"feature"})})," is an ",(0,n.jsx)(t,{term:"element",children:(0,n.jsx)("i",{children:"element"})})," of the ",(0,n.jsx)(t,{styled:!0,term:"features list",children:(0,n.jsx)("i",{children:"features list"})}),". 2. (of a ",(0,n.jsx)(t,{term:"symbol",children:(0,n.jsx)("i",{children:"symbol"})})," in a ",(0,n.jsx)(t,{term:"package",children:(0,n.jsx)("i",{children:"package"})}),") being accessible in that ",(0,n.jsx)(t,{term:"package",children:(0,n.jsx)("i",{children:"package"})})," directly, rather than being inherited from another ",(0,n.jsx)(t,{term:"package",children:(0,n.jsx)("i",{children:"package"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"pretty print"})," ",(0,n.jsx)(r.em,{children:"v.t."})," (an ",(0,n.jsx)(t,{term:"object",children:(0,n.jsx)("i",{children:"object"})}),") to invoke the ",(0,n.jsx)(t,{styled:!0,term:"pretty printer",children:(0,n.jsx)("i",{children:"pretty printer"})})," on the ",(0,n.jsx)(t,{term:"object",children:(0,n.jsx)("i",{children:"object"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"pretty printer"})," ",(0,n.jsx)(r.em,{children:"n."})," the procedure that prints the character representation of an"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(t,{term:"object",children:(0,n.jsx)("i",{children:"object"})})," onto a ",(0,n.jsx)(t,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," when the ",(0,n.jsx)(t,{term:"value",children:(0,n.jsx)("i",{children:"value"})})," of ",(0,n.jsx)(i,{term:"print-pretty",children:(0,n.jsx)("b",{children:"*print-pretty*"})})," is ",(0,n.jsx)(t,{term:"true",children:(0,n.jsx)("i",{children:"true"})}),", and that uses layout techniques (",(0,n.jsx)(r.em,{children:"e.g."}),", indentation) that tend to highlight the structure of the ",(0,n.jsx)(t,{term:"object",children:(0,n.jsx)("i",{children:"object"})})," in a way that makes it easier for human readers to parse visually. See the ",(0,n.jsx)(t,{term:"variable",children:(0,n.jsx)("i",{children:"variable"})})," ",(0,n.jsx)(i,{term:"print-pprint-dispatch",children:(0,n.jsx)("b",{children:"*print-pprint-dispatch*"})})," and Section 22.2 (The Lisp Pretty Printer)."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"pretty printing stream"})," ",(0,n.jsx)(r.em,{children:"n."})," a ",(0,n.jsx)(t,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," that does pretty printing. Such streams are created by the ",(0,n.jsx)(t,{term:"function",children:(0,n.jsx)("i",{children:"function"})})," ",(0,n.jsx)(i,{term:"pprint-logical-block",children:(0,n.jsx)("b",{children:"pprint-logical-block"})})," as a link between the output stream and the logical block."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"primary method"})," ",(0,n.jsx)(r.em,{children:"n."})," a member of one of two sets of ",(0,n.jsx)(t,{term:"method",children:(0,n.jsx)("i",{children:"methods"})})," (the set of ",(0,n.jsx)(t,{styled:!0,term:"auxiliary method",children:(0,n.jsx)("i",{children:"auxiliary methods"})})," is the other) that form an exhaustive partition of the set of ",(0,n.jsx)(t,{term:"method",children:(0,n.jsx)("i",{children:"methods"})})," on the ",(0,n.jsx)(t,{term:"method",children:(0,n.jsx)("i",{children:"method"})}),"\u2019s ",(0,n.jsx)(t,{styled:!0,term:"generic function",children:(0,n.jsx)("i",{children:"generic function"})}),". How these sets are determined is dependent on the ",(0,n.jsx)(t,{styled:!0,term:"method combination",children:(0,n.jsx)("i",{children:"method combination"})})," type; see Section 7.6.2 (Introduction to Methods)."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"primary value"})," ",(0,n.jsx)(r.em,{children:"n."})," (of ",(0,n.jsx)(t,{term:"value",children:(0,n.jsx)("i",{children:"values"})})," resulting from the ",(0,n.jsx)(t,{term:"evaluation",children:(0,n.jsx)("i",{children:"evaluation"})})," of a ",(0,n.jsx)(t,{term:"form",children:(0,n.jsx)("i",{children:"form"})}),") the first ",(0,n.jsx)(t,{term:"value",children:(0,n.jsx)("i",{children:"value"})}),", if any, or else ",(0,n.jsx)(i,{term:"nil",children:(0,n.jsx)("b",{children:"nil"})})," if there are no ",(0,n.jsx)(t,{term:"value",children:(0,n.jsx)("i",{children:"values"})}),". \u201cThe primary value returned by ",(0,n.jsx)(i,{term:"truncate",children:(0,n.jsx)("b",{children:"truncate"})})," is an integer quotient, truncated toward zero.\u201d"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"principal"})," ",(0,n.jsx)(r.em,{children:"adj."})," (of a value returned by a Common Lisp ",(0,n.jsx)(t,{term:"function",children:(0,n.jsx)("i",{children:"function"})})," that implements a mathematically irrational or transcendental function defined in the complex domain) of possibly many (sometimes an infinite number of) correct values for the mathematical function, being the particular ",(0,n.jsx)(t,{term:"value",children:(0,n.jsx)("i",{children:"value"})})," which the corresponding Common Lisp ",(0,n.jsx)(t,{term:"function",children:(0,n.jsx)("i",{children:"function"})})," has been defined to return."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"print name"})," ",(0,n.jsx)(r.em,{children:"n. Trad."})," (usually of a ",(0,n.jsx)(t,{term:"symbol",children:(0,n.jsx)("i",{children:"symbol"})}),") a ",(0,n.jsx)(t,{term:"name",children:(0,n.jsx)("i",{children:"name"})}),(0,n.jsx)("sub",{children:"3"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"printer control variable"})," ",(0,n.jsx)(r.em,{children:"n."})," a ",(0,n.jsx)(t,{term:"variable",children:(0,n.jsx)("i",{children:"variable"})})," whose specific purpose is to control some action of the ",(0,n.jsx)(r.em,{children:"Lisp printer"})," ; that is, one of the ",(0,n.jsx)(t,{term:"variable",children:(0,n.jsx)("i",{children:"variables"})})," in Figure 22\u20131, or else some ",(0,n.jsx)(r.em,{children:"implementation-defined variable"})," which is defined by the ",(0,n.jsx)(t,{term:"implementation",children:(0,n.jsx)("i",{children:"implementation"})})," to be a ",(0,n.jsx)(t,{styled:!0,term:"printer control variable",children:(0,n.jsx)("i",{children:"printer control variable"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"printer escaping"})," ",(0,n.jsx)(r.em,{children:"n."})," The combined state of the ",(0,n.jsx)(t,{styled:!0,term:"printer control variable",children:(0,n.jsx)("i",{children:"printer control variables"})})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(i,{term:"print-escape",children:(0,n.jsx)("b",{children:"*print-escape*"})})," and ",(0,n.jsx)(i,{term:"print-readably",children:(0,n.jsx)("b",{children:"*print-readably*"})}),". If the value of either ",(0,n.jsx)(i,{term:"print-readably",children:(0,n.jsx)("b",{children:"*print-readably*"})})]}),"\n",(0,n.jsxs)(r.p,{children:["or ",(0,n.jsx)(i,{term:"print-escape",children:(0,n.jsx)("b",{children:"*print-escape*"})})," is ",(0,n.jsx)(t,{term:"true",children:(0,n.jsx)("i",{children:"true"})}),", then ",(0,n.jsx)(t,{styled:!0,term:"printer escaping",children:(0,n.jsx)("i",{children:"printer escaping"})})," is \u201cenabled\u201d; otherwise (if the values of both ",(0,n.jsx)(i,{term:"print-readably",children:(0,n.jsx)("b",{children:"*print-readably*"})})," and ",(0,n.jsx)(i,{term:"print-escape",children:(0,n.jsx)("b",{children:"*print-escape*"})})," are ",(0,n.jsx)(t,{term:"false",children:(0,n.jsx)("i",{children:"false"})}),"), then ",(0,n.jsx)(t,{styled:!0,term:"printer escaping",children:(0,n.jsx)("i",{children:"printer escaping"})})," is \u201cdisabled\u201d."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"printing"})," ",(0,n.jsx)(r.em,{children:"adj."})," (of a ",(0,n.jsx)(t,{term:"character",children:(0,n.jsx)("i",{children:"character"})})," ) being a ",(0,n.jsx)(r.em,{children:"graphic character"})," other than ",(0,n.jsx)(t,{term:"space",children:(0,n.jsx)("i",{children:"space"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"process"})," ",(0,n.jsx)(r.em,{children:"v.t."})," (a ",(0,n.jsx)(t,{term:"form",children:(0,n.jsx)("i",{children:"form"})})," by the ",(0,n.jsx)(t,{term:"compiler",children:(0,n.jsx)("i",{children:"compiler"})})," ) to perform ",(0,n.jsx)(t,{styled:!0,term:"minimal compilation",children:(0,n.jsx)("i",{children:"minimal compilation"})}),", determining the time of evaluation for a ",(0,n.jsx)(t,{term:"form",children:(0,n.jsx)("i",{children:"form"})}),", and possibly ",(0,n.jsx)(r.em,{children:"evaluating"})," that ",(0,n.jsx)(t,{term:"form",children:(0,n.jsx)("i",{children:"form"})})," (if required)."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"processor"})," ",(0,n.jsx)(r.em,{children:"n."}),", ",(0,n.jsx)(r.em,{children:"ANSI"})," an ",(0,n.jsx)(t,{term:"implementation",children:(0,n.jsx)("i",{children:"implementation"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(i,{term:"proclaim",children:(0,n.jsx)("b",{children:"proclaim"})})," ",(0,n.jsx)(r.em,{children:"v.t."})," (a ",(0,n.jsx)(t,{term:"proclamation",children:(0,n.jsx)("i",{children:"proclamation"})}),") to ",(0,n.jsx)(t,{term:"establish",children:(0,n.jsx)("i",{children:"establish"})})," that ",(0,n.jsx)(t,{term:"proclamation",children:(0,n.jsx)("i",{children:"proclamation"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"proclamation"})," ",(0,n.jsx)(r.em,{children:"n."})," a ",(0,n.jsx)(t,{styled:!0,term:"global declaration",children:(0,n.jsx)("i",{children:"global declaration"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"prog tag"})," ",(0,n.jsx)(r.em,{children:"n. Trad."})," a ",(0,n.jsx)(t,{styled:!0,term:"go tag",children:(0,n.jsx)("i",{children:"go tag"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"program"})," ",(0,n.jsx)(r.em,{children:"n. Trad."})," Common Lisp ",(0,n.jsx)(t,{term:"code",children:(0,n.jsx)("i",{children:"code"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"programmer"})," ",(0,n.jsx)(r.em,{children:"n."})," an active entity, typically a human, that writes a ",(0,n.jsx)(t,{term:"program",children:(0,n.jsx)("i",{children:"program"})}),", and that might or might not also be a ",(0,n.jsx)(t,{term:"user",children:(0,n.jsx)("i",{children:"user"})})," of the ",(0,n.jsx)(t,{term:"program",children:(0,n.jsx)("i",{children:"program"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"programmer code"})," ",(0,n.jsx)(r.em,{children:"n. code"})," that is supplied by the programmer; that is, ",(0,n.jsx)(t,{term:"code",children:(0,n.jsx)("i",{children:"code"})})," that is not ",(0,n.jsx)(t,{styled:!0,term:"system code",children:(0,n.jsx)("i",{children:"system code"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"proper list"})," ",(0,n.jsx)(r.em,{children:"n."})," A ",(0,n.jsx)(t,{term:"list",children:(0,n.jsx)("i",{children:"list"})})," terminated by the ",(0,n.jsx)(t,{styled:!0,term:"empty list",children:(0,n.jsx)("i",{children:"empty list"})}),". (The ",(0,n.jsx)(t,{styled:!0,term:"empty list",children:(0,n.jsx)("i",{children:"empty list"})})," is a ",(0,n.jsx)(t,{styled:!0,term:"proper list",children:(0,n.jsx)("i",{children:"proper list"})}),".) See ",(0,n.jsx)(r.em,{children:"improper list"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"proper name"})," ",(0,n.jsx)(r.em,{children:"n."})," (of a ",(0,n.jsx)(t,{term:"class",children:(0,n.jsx)("i",{children:"class"})}),") a ",(0,n.jsx)(t,{term:"symbol",children:(0,n.jsx)("i",{children:"symbol"})})," that ",(0,n.jsx)(t,{term:"name",children:(0,n.jsx)("i",{children:"names"})})," the ",(0,n.jsx)(t,{term:"class",children:(0,n.jsx)("i",{children:"class"})})," whose ",(0,n.jsx)(t,{term:"name",children:(0,n.jsx)("i",{children:"name"})})," is that ",(0,n.jsx)(t,{term:"symbol",children:(0,n.jsx)("i",{children:"symbol"})}),". See the ",(0,n.jsx)(t,{term:"function",children:(0,n.jsx)("i",{children:"functions"})})," ",(0,n.jsx)(i,{term:"class-name",children:(0,n.jsx)("b",{children:"class-name"})})," and ",(0,n.jsx)(i,{term:"find-class",children:(0,n.jsx)("b",{children:"find-class"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"proper sequence"})," ",(0,n.jsx)(r.em,{children:"n."})," a ",(0,n.jsx)(r.em,{children:"sequence"})," which is not an ",(0,n.jsx)(r.em,{children:"improper list"}),"; that is, a ",(0,n.jsx)(t,{term:"vector",children:(0,n.jsx)("i",{children:"vector"})})," or a ",(0,n.jsx)(t,{styled:!0,term:"proper list",children:(0,n.jsx)("i",{children:"proper list"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"proper subtype"})," ",(0,n.jsx)(r.em,{children:"n."})," (of a ",(0,n.jsx)(t,{term:"type",children:(0,n.jsx)("i",{children:"type"})}),") a ",(0,n.jsx)(t,{term:"subtype",children:(0,n.jsx)("i",{children:"subtype"})})," of the ",(0,n.jsx)(t,{term:"type",children:(0,n.jsx)("i",{children:"type"})})," which is not the ",(0,n.jsx)(r.em,{children:"same type"})," as the ",(0,n.jsx)(t,{term:"type",children:(0,n.jsx)("i",{children:"type"})})," (",(0,n.jsx)(r.em,{children:"i.e."}),", its ",(0,n.jsx)(t,{term:"element",children:(0,n.jsx)("i",{children:"elements"})})," are a \u201cproper subset\u201d of the ",(0,n.jsx)(t,{term:"type",children:(0,n.jsx)("i",{children:"type"})}),")."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"property"})," ",(0,n.jsx)(r.em,{children:"n."})," (of a ",(0,n.jsx)(t,{styled:!0,term:"property list",children:(0,n.jsx)("i",{children:"property list"})}),") 1. a conceptual pairing of a ",(0,n.jsx)(t,{styled:!0,term:"property indicator",children:(0,n.jsx)("i",{children:"property indicator"})})," and its associated ",(0,n.jsx)(t,{styled:!0,term:"property value",children:(0,n.jsx)("i",{children:"property value"})})," on a ",(0,n.jsx)(t,{styled:!0,term:"property list",children:(0,n.jsx)("i",{children:"property list"})}),". 2. a ",(0,n.jsx)(t,{styled:!0,term:"property value",children:(0,n.jsx)("i",{children:"property value"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"property indicator"})," ",(0,n.jsx)(r.em,{children:"n."})," (of a ",(0,n.jsx)(t,{styled:!0,term:"property list",children:(0,n.jsx)("i",{children:"property list"})}),") the ",(0,n.jsx)(t,{term:"name",children:(0,n.jsx)("i",{children:"name"})})," part of a ",(0,n.jsx)(t,{term:"property",children:(0,n.jsx)("i",{children:"property"})}),", used as a ",(0,n.jsx)(t,{term:"key",children:(0,n.jsx)("i",{children:"key"})})," when looking up a ",(0,n.jsx)(t,{styled:!0,term:"property value",children:(0,n.jsx)("i",{children:"property value"})})," on a ",(0,n.jsx)(t,{styled:!0,term:"property list",children:(0,n.jsx)("i",{children:"property list"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"property list"})," ",(0,n.jsx)(r.em,{children:"n."})," 1. a ",(0,n.jsx)(t,{term:"list",children:(0,n.jsx)("i",{children:"list"})})," containing an even number of ",(0,n.jsx)(t,{term:"element",children:(0,n.jsx)("i",{children:"elements"})})," that are alternating ",(0,n.jsx)(t,{term:"name",children:(0,n.jsx)("i",{children:"names"})})," (sometimes called ",(0,n.jsx)(t,{term:"indicator",children:(0,n.jsx)("i",{children:"indicators"})})," or ",(0,n.jsx)(t,{term:"key",children:(0,n.jsx)("i",{children:"keys"})}),") and ",(0,n.jsx)(t,{term:"value",children:(0,n.jsx)("i",{children:"values"})})," (sometimes called ",(0,n.jsx)(r.em,{children:"properties"}),"). When there is more than one ",(0,n.jsx)(t,{term:"name",children:(0,n.jsx)("i",{children:"name"})})," and ",(0,n.jsx)(t,{term:"value",children:(0,n.jsx)("i",{children:"value"})})," pair with the ",(0,n.jsx)(r.em,{children:"identical name"})," in"]}),"\n",(0,n.jsxs)(r.p,{children:["a ",(0,n.jsx)(t,{styled:!0,term:"property list",children:(0,n.jsx)("i",{children:"property list"})}),", the first such pair determines the ",(0,n.jsx)(t,{term:"property",children:(0,n.jsx)("i",{children:"property"})}),". 2. (of a ",(0,n.jsx)(t,{term:"symbol",children:(0,n.jsx)("i",{children:"symbol"})}),") the component of the ",(0,n.jsx)(t,{term:"symbol",children:(0,n.jsx)("i",{children:"symbol"})})," containing a ",(0,n.jsx)(t,{styled:!0,term:"property list",children:(0,n.jsx)("i",{children:"property list"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"property value"})," ",(0,n.jsx)(r.em,{children:"n."})," (of a ",(0,n.jsx)(t,{styled:!0,term:"property indicator",children:(0,n.jsx)("i",{children:"property indicator"})})," on a ",(0,n.jsx)(t,{styled:!0,term:"property list",children:(0,n.jsx)("i",{children:"property list"})}),") the ",(0,n.jsx)(t,{term:"object",children:(0,n.jsx)("i",{children:"object"})})," associated with the ",(0,n.jsx)(t,{styled:!0,term:"property indicator",children:(0,n.jsx)("i",{children:"property indicator"})})," on the ",(0,n.jsx)(t,{styled:!0,term:"property list",children:(0,n.jsx)("i",{children:"property list"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"purports to conform"})," ",(0,n.jsx)(r.em,{children:"v."})," makes a good-faith claim of conformance. This term"]}),"\n",(0,n.jsxs)(r.p,{children:["expresses intention to conform, regardless of whether the goal of that intention is realized in practice. For example, language implementations have been known to have bugs, and while an ",(0,n.jsx)(t,{term:"implementation",children:(0,n.jsx)("i",{children:"implementation"})})," of this specification with bugs might not be a ",(0,n.jsx)(t,{styled:!0,term:"conforming implementation",children:(0,n.jsx)("i",{children:"conforming implementation"})}),", it can still ",(0,n.jsx)(r.em,{children:"purport to conform"}),". This is an important distinction in certain specific cases; ",(0,n.jsx)(r.em,{children:"e.g."}),", see the ",(0,n.jsx)(t,{term:"variable",children:(0,n.jsx)("i",{children:"variable"})})," ",(0,n.jsx)(i,{term:"features",children:(0,n.jsx)("b",{children:"*features*"})}),"."]})]})}function o(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}function j(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,r,i)=>{i.d(r,{Z:()=>c,a:()=>l});var n=i(67294);const s={},t=n.createContext(s);function l(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);