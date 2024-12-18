"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[70837],{41506:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=r(85893),t=r(11151);const s={title:"N",sidebar_position:110},c=void 0,l={id:"chap-26/n",title:"N",description:"N",source:"@site/docs/chap-26/n.md",sourceDirName:"chap-26",slug:"/chap-26/n",permalink:"/cl-language-reference/chap-26/n",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/chap-26/n.md",tags:[],version:"current",lastUpdatedBy:"daninus14",sidebarPosition:110,frontMatter:{title:"N",sidebar_position:110},sidebar:"tutorialSidebar",previous:{title:"M",permalink:"/cl-language-reference/chap-26/m"},next:{title:"O",permalink:"/cl-language-reference/chap-26/o"}},h={},d=[];function a(e){const n={em:"em",p:"p",strong:"strong",...(0,t.a)(),...e.components},{DictionaryLink:r,GlossaryTerm:s}=n;return r||j("DictionaryLink",!0),s||j("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"N"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"name"})," ",(0,i.jsx)(n.em,{children:"n."}),", ",(0,i.jsx)(n.em,{children:"v.t."})," 1. ",(0,i.jsx)(n.em,{children:"n."})," an ",(0,i.jsx)(s,{term:"identifier",children:(0,i.jsx)("i",{children:"identifier"})})," by which an ",(0,i.jsx)(s,{term:"object",children:(0,i.jsx)("i",{children:"object"})}),", a ",(0,i.jsx)(s,{term:"binding",children:(0,i.jsx)("i",{children:"binding"})}),", or an ",(0,i.jsx)(s,{styled:!0,term:"exit point",children:(0,i.jsx)("i",{children:"exit point"})})," is referred to by association using a ",(0,i.jsx)(s,{term:"binding",children:(0,i.jsx)("i",{children:"binding"})}),". 2. ",(0,i.jsx)(n.em,{children:"v.t."})," to give a ",(0,i.jsx)(s,{term:"name",children:(0,i.jsx)("i",{children:"name"})})," to. 3. ",(0,i.jsx)(n.em,{children:"n."})," (of an ",(0,i.jsx)(s,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," having a name component) the ",(0,i.jsx)(s,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," which is that component. \u201cThe string"]}),"\n",(0,i.jsxs)(n.p,{children:["which is a symbol\u2019s name is returned by ",(0,i.jsx)(r,{term:"symbol-name",children:(0,i.jsx)("b",{children:"symbol-name"})}),".\u201d 4. ",(0,i.jsx)(n.em,{children:"n."})," (of a ",(0,i.jsx)(s,{term:"pathname",children:(0,i.jsx)("i",{children:"pathname"})}),") a. the name component, returned by ",(0,i.jsx)(n.strong,{children:"pathname-name"}),". b. the entire namestring, returned by ",(0,i.jsx)(r,{term:"namestring",children:(0,i.jsx)("b",{children:"namestring"})}),". 5. ",(0,i.jsx)(n.em,{children:"n."})," (of a ",(0,i.jsx)(s,{term:"character",children:(0,i.jsx)("i",{children:"character"})})," ) a ",(0,i.jsx)(s,{term:"string",children:(0,i.jsx)("i",{children:"string"})})," that names the ",(0,i.jsx)(s,{term:"character",children:(0,i.jsx)("i",{children:"character"})})," and that"]}),"\n",(0,i.jsxs)(n.p,{children:["has ",(0,i.jsx)(s,{term:"length",children:(0,i.jsx)("i",{children:"length"})})," greater than one. (All ",(0,i.jsx)(n.em,{children:"non-graphic characters"})," are required to have ",(0,i.jsx)(s,{term:"name",children:(0,i.jsx)("i",{children:"names"})})," unless they have some ",(0,i.jsx)(n.em,{children:"implementation-defined attribute"})," which is not ",(0,i.jsx)(s,{term:"null",children:(0,i.jsx)("i",{children:"null"})}),". Whether or not other ",(0,i.jsx)(s,{term:"character",children:(0,i.jsx)("i",{children:"characters"})})," have ",(0,i.jsx)(s,{term:"name",children:(0,i.jsx)("i",{children:"names"})})," is ",(0,i.jsx)(s,{term:"implementation-dependent",children:(0,i.jsx)("i",{children:"implementation-dependent"})}),".)"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"named constant"})," ",(0,i.jsx)(n.em,{children:"n."})," a ",(0,i.jsx)(s,{term:"variable",children:(0,i.jsx)("i",{children:"variable"})})," that is defined by Common Lisp, by the ",(0,i.jsx)(s,{term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})}),", or by user code (see the ",(0,i.jsx)(s,{term:"macro",children:(0,i.jsx)("i",{children:"macro"})})," ",(0,i.jsx)(r,{term:"defconstant",children:(0,i.jsx)("b",{children:"defconstant"})}),") to always ",(0,i.jsx)(s,{term:"yield",children:(0,i.jsx)("i",{children:"yield"})})," the same ",(0,i.jsx)(s,{term:"value",children:(0,i.jsx)("i",{children:"value"})})," when ",(0,i.jsx)(n.em,{children:"evaluated"}),". \u201cThe value of a named constant may not be changed by assignment or by binding.\u201d"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"namespace"})," ",(0,i.jsx)(n.em,{children:"n."})," 1. ",(0,i.jsx)(s,{term:"binding",children:(0,i.jsx)("i",{children:"bindings"})})," whose denotations are restricted to a particular kind. \u201cThe bindings of names to tags is the tag namespace.\u201d 2. any ",(0,i.jsx)(s,{term:"mapping",children:(0,i.jsx)("i",{children:"mapping"})})," whose domain is a set of ",(0,i.jsx)(s,{term:"name",children:(0,i.jsx)("i",{children:"names"})}),". \u201cA package defines a namespace.\u201d"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"namestring",children:(0,i.jsx)("b",{children:"namestring"})})," ",(0,i.jsx)(n.em,{children:"n."})," a ",(0,i.jsx)(s,{term:"string",children:(0,i.jsx)("i",{children:"string"})})," that represents a ",(0,i.jsx)(s,{term:"filename",children:(0,i.jsx)("i",{children:"filename"})})," using either the ",(0,i.jsx)(s,{term:"standardized",children:(0,i.jsx)("i",{children:"standardized"})})," notation for naming ",(0,i.jsx)(s,{styled:!0,term:"logical pathname",children:(0,i.jsx)("i",{children:"logical pathnames"})})," described in Section 19.3.1 (Syntax of Logical Pathname Namestrings), or some ",(0,i.jsx)(s,{term:"implementation-defined",children:(0,i.jsx)("i",{children:"implementation-defined"})})," notation for naming a"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s,{styled:!0,term:"physical pathname",children:(0,i.jsx)("i",{children:"physical pathname"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"newline"})," ",(0,i.jsx)(n.em,{children:"n."})," the ",(0,i.jsx)(n.em,{children:"standard character \u27e8Newline\u27e9"}),", notated for the ",(0,i.jsx)(n.em,{children:"Lisp reader"})," as #\\Newline."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"next method"})," ",(0,i.jsx)(n.em,{children:"n."})," the next ",(0,i.jsx)(s,{term:"method",children:(0,i.jsx)("i",{children:"method"})})," to be invoked with respect to a given ",(0,i.jsx)(s,{term:"method",children:(0,i.jsx)("i",{children:"method"})})," for a particular set of arguments or argument ",(0,i.jsx)(n.em,{children:"classes"}),". See Section 7.6.6.1.3 (Applying method combination to the sorted list of applicable methods)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"nickname"})," ",(0,i.jsx)(n.em,{children:"n."})," (of a ",(0,i.jsx)(s,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),") one of possibly several ",(0,i.jsx)(s,{term:"name",children:(0,i.jsx)("i",{children:"names"})})," that can be used to refer to the ",(0,i.jsx)(s,{term:"package",children:(0,i.jsx)("i",{children:"package"})})," but that is not the primary ",(0,i.jsx)(s,{term:"name",children:(0,i.jsx)("i",{children:"name"})})," of the ",(0,i.jsx)(s,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})})," ",(0,i.jsx)(n.em,{children:"n."})," the ",(0,i.jsx)(s,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," that is at once the ",(0,i.jsx)(s,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})}),' named "NIL" in the COMMON-LISP ',(0,i.jsx)(s,{term:"package",children:(0,i.jsx)("i",{children:"package"})}),", the ",(0,i.jsx)(s,{styled:!0,term:"empty list",children:(0,i.jsx)("i",{children:"empty list"})}),", the ",(0,i.jsx)(s,{term:"boolean",children:(0,i.jsx)("i",{children:"boolean"})})," (or ",(0,i.jsx)(s,{styled:!0,term:"generalized boolean",children:(0,i.jsx)("i",{children:"generalized boolean"})}),") representing ",(0,i.jsx)(s,{term:"false",children:(0,i.jsx)("i",{children:"false"})}),", and the ",(0,i.jsx)(s,{term:"name",children:(0,i.jsx)("i",{children:"name"})})," of the ",(0,i.jsx)(s,{styled:!0,term:"empty type",children:(0,i.jsx)("i",{children:"empty type"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"non-atomic"})," ",(0,i.jsx)(n.em,{children:"adj."})," being other than an ",(0,i.jsx)(s,{term:"atom",children:(0,i.jsx)("i",{children:"atom"})}),"; ",(0,i.jsx)(n.em,{children:"i.e."}),", being a ",(0,i.jsx)(s,{term:"cons",children:(0,i.jsx)("i",{children:"cons"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"non-constant variable"})," ",(0,i.jsx)(n.em,{children:"n."})," a ",(0,i.jsx)(s,{term:"variable",children:(0,i.jsx)("i",{children:"variable"})})," that is not a ",(0,i.jsx)(s,{styled:!0,term:"constant variable",children:(0,i.jsx)("i",{children:"constant variable"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"non-correctable"})," ",(0,i.jsx)(n.em,{children:"adj."})," (of an ",(0,i.jsx)(s,{term:"error",children:(0,i.jsx)("i",{children:"error"})})," ) not intentionally ",(0,i.jsx)(s,{term:"correctable",children:(0,i.jsx)("i",{children:"correctable"})}),". (Because of the dynamic nature of ",(0,i.jsx)(s,{term:"restart",children:(0,i.jsx)("i",{children:"restarts"})}),", it is neither possible nor generally useful to completely prohibit an ",(0,i.jsx)(s,{term:"error",children:(0,i.jsx)("i",{children:"error"})})," from being ",(0,i.jsx)(s,{term:"correctable",children:(0,i.jsx)("i",{children:"correctable"})}),". This term is used in order to express an"]}),"\n",(0,i.jsxs)(n.p,{children:["intent that no special effort should be made by ",(0,i.jsx)(s,{term:"code",children:(0,i.jsx)("i",{children:"code"})})," signaling an ",(0,i.jsx)(s,{term:"error",children:(0,i.jsx)("i",{children:"error"})})," to make that ",(0,i.jsx)(n.em,{children:"error correctable"}),"; however, there is no actual requirement on ",(0,i.jsx)(s,{styled:!0,term:"conforming program",children:(0,i.jsx)("i",{children:"conforming programs"})})," or ",(0,i.jsx)(s,{styled:!0,term:"conforming implementation",children:(0,i.jsx)("i",{children:"conforming implementations"})})," imposed by this term.)"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"non-empty"})," ",(0,i.jsx)(n.em,{children:"adj."})," having at least one ",(0,i.jsx)(s,{term:"element",children:(0,i.jsx)("i",{children:"element"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"non-generic function"})," ",(0,i.jsx)(n.em,{children:"n."})," a ",(0,i.jsx)(s,{term:"function",children:(0,i.jsx)("i",{children:"function"})})," that is not a ",(0,i.jsx)(s,{styled:!0,term:"generic function",children:(0,i.jsx)("i",{children:"generic function"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"non-graphic"})," ",(0,i.jsx)(n.em,{children:"adj."})," (of a ",(0,i.jsx)(s,{term:"character",children:(0,i.jsx)("i",{children:"character"})})," ) not ",(0,i.jsx)(s,{term:"graphic",children:(0,i.jsx)("i",{children:"graphic"})}),". See Section 13.1.4.1 (Graphic"]}),"\n",(0,i.jsx)(n.p,{children:"Characters)."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"non-list"})," ",(0,i.jsx)(n.em,{children:"n."}),", ",(0,i.jsx)(n.em,{children:"adj."})," other than a ",(0,i.jsx)(s,{term:"list",children:(0,i.jsx)("i",{children:"list"})}),"; ",(0,i.jsx)(n.em,{children:"i.e."}),", a ",(0,i.jsx)(n.em,{children:"non-nil atom"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"non-local exit"})," ",(0,i.jsx)(n.em,{children:"n."})," a transfer of control (and sometimes ",(0,i.jsx)(s,{term:"value",children:(0,i.jsx)("i",{children:"values"})}),") to an ",(0,i.jsx)(s,{styled:!0,term:"exit point",children:(0,i.jsx)("i",{children:"exit point"})})," for reasons other than a ",(0,i.jsx)(s,{styled:!0,term:"normal return",children:(0,i.jsx)("i",{children:"normal return"})}),". \u201cThe operators ",(0,i.jsx)(r,{term:"go",children:(0,i.jsx)("b",{children:"go"})}),", ",(0,i.jsx)(r,{term:"throw",children:(0,i.jsx)("b",{children:"throw"})}),", and ",(0,i.jsx)(r,{term:"return-from",children:(0,i.jsx)("b",{children:"return-from"})})," cause a non-local exit.\u201d"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"non-nil"})," ",(0,i.jsx)(n.em,{children:"n."}),", ",(0,i.jsx)(n.em,{children:"adj."})," not ",(0,i.jsx)(r,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),". Technically, any ",(0,i.jsx)(s,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," which is not ",(0,i.jsx)(r,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})})," can be referred to as ",(0,i.jsx)(s,{term:"true",children:(0,i.jsx)("i",{children:"true"})}),", but that would tend to imply a unique view of the ",(0,i.jsx)(s,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," as a ",(0,i.jsx)(s,{styled:!0,term:"generalized boolean",children:(0,i.jsx)("i",{children:"generalized boolean"})}),". Referring to such an ",(0,i.jsx)(s,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," as ",(0,i.jsx)(s,{term:"non-nil",children:(0,i.jsx)("i",{children:"non-nil"})})," avoids this implication."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"non-null lexical environment"})," ",(0,i.jsx)(n.em,{children:"n."})," a ",(0,i.jsx)(s,{styled:!0,term:"lexical environment",children:(0,i.jsx)("i",{children:"lexical environment"})})," that has additional"]}),"\n",(0,i.jsxs)(n.p,{children:["information not present in the ",(0,i.jsx)(s,{styled:!0,term:"global environment",children:(0,i.jsx)("i",{children:"global environment"})}),", such as one or more ",(0,i.jsx)(s,{term:"binding",children:(0,i.jsx)("i",{children:"bindings"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"non-simple"})," ",(0,i.jsx)(n.em,{children:"adj."})," not ",(0,i.jsx)(s,{term:"simple",children:(0,i.jsx)("i",{children:"simple"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"non-terminating"})," ",(0,i.jsx)(n.em,{children:"adj."})," (of a ",(0,i.jsx)(s,{styled:!0,term:"macro character",children:(0,i.jsx)("i",{children:"macro character"})})," ) being such that it is treated as a"]}),"\n",(0,i.jsxs)(n.p,{children:["constituent ",(0,i.jsx)(s,{term:"character",children:(0,i.jsx)("i",{children:"character"})})," when it appears in the middle of an extended token. See Section 2.2 (Reader Algorithm)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"non-top-level form"})," ",(0,i.jsx)(n.em,{children:"n."})," a ",(0,i.jsx)(s,{term:"form",children:(0,i.jsx)("i",{children:"form"})})," that, by virtue of its position as a ",(0,i.jsx)(s,{term:"subform",children:(0,i.jsx)("i",{children:"subform"})})," of another ",(0,i.jsx)(s,{term:"form",children:(0,i.jsx)("i",{children:"form"})}),", is not a ",(0,i.jsx)(s,{styled:!0,term:"top level form",children:(0,i.jsx)("i",{children:"top level form"})}),". See Section 3.2.3.1 (Processing of Top Level Forms)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"normal return"})," ",(0,i.jsx)(n.em,{children:"n."})," the natural transfer of control and ",(0,i.jsx)(s,{term:"value",children:(0,i.jsx)("i",{children:"values"})})," which occurs after the complete ",(0,i.jsx)(n.em,{children:"execution"})," of a ",(0,i.jsx)(s,{term:"form",children:(0,i.jsx)("i",{children:"form"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"normalized"})," ",(0,i.jsx)(n.em,{children:"adj."}),", ",(0,i.jsx)(n.em,{children:"ANSI"}),", ",(0,i.jsx)(n.em,{children:"IEEE"})," (of a ",(0,i.jsx)(s,{term:"float",children:(0,i.jsx)("i",{children:"float"})}),") conforming to the description of"]}),"\n",(0,i.jsxs)(n.p,{children:["\u201cnormalized\u201d as described by ",(0,i.jsx)(n.em,{children:"IEEE Standard for Binary Floating-Point Arithmetic"}),". See ",(0,i.jsx)(s,{term:"denormalized",children:(0,i.jsx)("i",{children:"denormalized"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"null",children:(0,i.jsx)("b",{children:"null"})})," ",(0,i.jsx)(n.em,{children:"adj."}),", ",(0,i.jsx)(n.em,{children:"n."})," 1. ",(0,i.jsx)(n.em,{children:"adj."})," a. (of a ",(0,i.jsx)(s,{term:"list",children:(0,i.jsx)("i",{children:"list"})}),") having no ",(0,i.jsx)(s,{term:"element",children:(0,i.jsx)("i",{children:"elements"})}),": empty. See ",(0,i.jsx)(s,{styled:!0,term:"empty list",children:(0,i.jsx)("i",{children:"empty list"})}),". b. (of a ",(0,i.jsx)(s,{term:"string",children:(0,i.jsx)("i",{children:"string"})}),") having a ",(0,i.jsx)(s,{term:"length",children:(0,i.jsx)("i",{children:"length"})})," of zero. (It is common, both within this document and in observed spoken behavior, to refer to an empty string by an apparent definite reference, as in \u201cthe ",(0,i.jsx)(n.em,{children:"null string"}),"\u201d even though no attempt is made to ",(0,i.jsx)(s,{term:"intern",children:(0,i.jsx)("i",{children:"intern"})}),(0,i.jsx)("sub",{children:"2"})," null strings. The phrase \u201ca ",(0,i.jsx)(n.em,{children:"null string"}),"\u201d is technically more correct, but is generally considered awkward by most Lisp programmers. As such, the phrase \u201cthe ",(0,i.jsx)(n.em,{children:"null string"}),"\u201d should be treated as an indefinite reference in all cases except for anaphoric references.) c. (of an ",(0,i.jsx)(n.em,{children:"implementation-defined attribute"})," of a ",(0,i.jsx)(s,{term:"character",children:(0,i.jsx)("i",{children:"character"})})," ) An ",(0,i.jsx)(s,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," to which the value of that ",(0,i.jsx)(s,{term:"attribute",children:(0,i.jsx)("i",{children:"attribute"})})," defaults if no specific value was requested. 2. ",(0,i.jsx)(n.em,{children:"n."})," an ",(0,i.jsx)(s,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," of ",(0,i.jsx)(s,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(r,{term:"null",children:(0,i.jsx)("b",{children:"null"})})," (the only such ",(0,i.jsx)(s,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," being ",(0,i.jsx)(r,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),")."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"null lexical environment"})," ",(0,i.jsx)(n.em,{children:"n."})," the ",(0,i.jsx)(s,{styled:!0,term:"lexical environment",children:(0,i.jsx)("i",{children:"lexical environment"})})," which has no ",(0,i.jsx)(s,{term:"binding",children:(0,i.jsx)("i",{children:"bindings"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"number",children:(0,i.jsx)("b",{children:"number"})})," ",(0,i.jsx)(n.em,{children:"n."})," an ",(0,i.jsx)(s,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," of ",(0,i.jsx)(s,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(r,{term:"number",children:(0,i.jsx)("b",{children:"number"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"numeric"})," ",(0,i.jsx)(n.em,{children:"adj."})," (of a ",(0,i.jsx)(s,{term:"character",children:(0,i.jsx)("i",{children:"character"})})," ) being one of the ",(0,i.jsx)(s,{styled:!0,term:"standard character",children:(0,i.jsx)("i",{children:"standard characters"})})," 0 through ",(0,i.jsx)(n.em,{children:"9"})," , or being some other ",(0,i.jsx)(n.em,{children:"graphic character"})," defined by the ",(0,i.jsx)(s,{term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})})," to be ",(0,i.jsx)(s,{term:"numeric",children:(0,i.jsx)("i",{children:"numeric"})}),"."]})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>c});var i=r(67294);const t={},s=i.createContext(t);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);